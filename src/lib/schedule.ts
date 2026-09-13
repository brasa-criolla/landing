export interface DailyHours {
  opens: string;
  closes: string;
}

/** days usa la numeración de Date#getUTCDay (0 = domingo). Horas en formato 24h, zona America/Bogota. */
export interface OpeningHours extends DailyHours {
  days: number[];
}

export interface Schedule {
  weekly: OpeningHours[];
  holidays: DailyHours;
}

export interface OpenStatus {
  state: 'open' | 'closed';
  text: string;
}

const WEEKDAY_NAMES = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

const toMinutes = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

const formatTime = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);
  return `${hours % 12 || 12}:${String(minutes).padStart(2, '0')} ${hours < 12 ? 'a.m.' : 'p.m.'}`;
};

const addDays = (date: Date, days: number) =>
  new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + days));

const isoDay = (date: Date) => date.toISOString().slice(0, 10);

const nextMonday = (date: Date) => addDays(date, (8 - date.getUTCDay()) % 7);

function easterSunday(year: number) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(year, month - 1, day));
}

/** Festivos de Colombia: fechas fijas, las trasladables al lunes (Ley 51 de 1983) y las que dependen de Pascua. */
export function colombianHolidays(year: number): Set<string> {
  const fixed = [[0, 1], [4, 1], [6, 20], [7, 7], [11, 8], [11, 25]];
  const movedToMonday = [[0, 6], [2, 19], [5, 29], [7, 15], [9, 12], [10, 1], [10, 11]];
  const easter = easterSunday(year);

  return new Set(
    [
      ...fixed.map(([month, day]) => new Date(Date.UTC(year, month, day))),
      ...movedToMonday.map(([month, day]) => nextMonday(new Date(Date.UTC(year, month, day)))),
      addDays(easter, -3),
      addDays(easter, -2),
      addDays(easter, 43),
      addDays(easter, 64),
      addDays(easter, 71),
    ].map(isoDay),
  );
}

function hoursOn(date: Date, schedule: Schedule): DailyHours | undefined {
  if (colombianHolidays(date.getUTCFullYear()).has(isoDay(date))) return schedule.holidays;
  return schedule.weekly.find((entry) => entry.days.includes(date.getUTCDay()));
}

function nowInBogota(now: Date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Bogota',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(now);
  const part = (type: string) => Number(parts.find((p) => p.type === type)?.value);
  return {
    date: new Date(Date.UTC(part('year'), part('month') - 1, part('day'))),
    minutes: part('hour') * 60 + part('minute'),
  };
}

export function describeOpenStatus(schedule: Schedule, compact: boolean, now = new Date()): OpenStatus | null {
  const { date, minutes } = nowInBogota(now);
  const today = hoursOn(date, schedule);

  if (today && minutes >= toMinutes(today.opens) && minutes < toMinutes(today.closes)) {
    const closes = formatTime(today.closes);
    return { state: 'open', text: compact ? `Abierto · cierra ${closes}` : `Abierto ahora · hasta las ${closes}` };
  }

  if (today && minutes < toMinutes(today.opens)) {
    const opens = formatTime(today.opens);
    return { state: 'closed', text: compact ? `Cerrado · abre ${opens}` : `Cerrado · abre hoy a las ${opens}` };
  }

  for (let offset = 1; offset <= 7; offset++) {
    const day = addDays(date, offset);
    const next = hoursOn(day, schedule);
    if (next) {
      const when = offset === 1 ? 'mañana' : `el ${WEEKDAY_NAMES[day.getUTCDay()]}`;
      const opens = formatTime(next.opens);
      return { state: 'closed', text: compact ? `Cerrado · abre ${when} ${opens}` : `Cerrado · abre ${when} a las ${opens}` };
    }
  }

  return null;
}
