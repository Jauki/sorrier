import { Absences } from 'webuntis';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
String.prototype.insertAt = function (CharToInsert, Position) {
  return this.slice(0, Position) + CharToInsert + this.slice(Position);
};

const getTime = (time: number) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return time.toString().padStart(4, '0').insertAt(':', 2).toString();
};

export interface typedAbsence {
  date: Date;
  dateString: string;
  startTime: string;
  endTime: string;
}

export const absentDaysFormatted = (days: Absences): typedAbsence[] => {
  return days.absences
    .filter((abs) => !abs.excuse.isExcused)
    .map((lesson) => {
      const startDate = lesson.startDate.toString();
      const date = `${startDate.substring(0, 4)}-${startDate.substring(4, 6)}-${startDate.substring(
        6,
        8
      )}`;
      return {
        date: new Date(date),
        dateString: date,
        startTime: getTime(lesson.startTime),
        endTime: getTime(lesson.endTime),
      } as typedAbsence;
    })
    .filter((abs) => abs.date > new Date('09-09-2022'));
};

/*
┌─────────┬──────────────────────────┬──────────────┬───────────┬─────────┐
│ (index) │           date           │  dateString  │ startTime │ endTime │
├─────────┼──────────────────────────┼──────────────┼───────────┼─────────┤
│    0    │ 2022-09-16T00:00:00.000Z │ '2022-09-16' │  '12:25'  │ '18:35' │
│    1    │ 2022-09-20T00:00:00.000Z │ '2022-09-20' │  '09:40'  │ '18:35' │
│    2    │ 2022-09-29T00:00:00.000Z │ '2022-09-29' │  '08:00'  │ '18:35' │
│    3    │ 2022-10-13T00:00:00.000Z │ '2022-10-13' │  '08:00'  │ '08:50' │
│    4    │ 2022-10-13T00:00:00.000Z │ '2022-10-13' │  '09:40'  │ '09:44' │
│    5    │ 2022-10-13T00:00:00.000Z │ '2022-10-13' │  '13:15'  │ '18:35' │
│    6    │ 2022-10-14T00:00:00.000Z │ '2022-10-14' │  '08:00'  │ '18:35' │
│    7    │ 2022-10-24T00:00:00.000Z │ '2022-10-24' │  '09:40'  │ '18:35' │
│    8    │ 2022-11-03T00:00:00.000Z │ '2022-11-03' │  '08:00'  │ '09:40' │
│    9    │ 2022-11-04T00:00:00.000Z │ '2022-11-04' │  '08:00'  │ '09:05' │
│   10    │ 2022-11-10T00:00:00.000Z │ '2022-11-10' │  '08:00'  │ '12:10' │
│   11    │ 2022-11-15T00:00:00.000Z │ '2022-11-15' │  '08:00'  │ '08:57' │
│   12    │ 2022-11-16T00:00:00.000Z │ '2022-11-16' │  '08:00'  │ '18:35' │
│   13    │ 2022-11-18T00:00:00.000Z │ '2022-11-18' │  '08:00'  │ '10:33' │
│   14    │ 2022-11-21T00:00:00.000Z │ '2022-11-21' │  '09:40'  │ '18:35' │
│   15    │ 2022-11-22T00:00:00.000Z │ '2022-11-22' │  '08:00'  │ '09:11' │
│   16    │ 2022-11-25T00:00:00.000Z │ '2022-11-25' │  '08:00'  │ '08:50' │
└─────────┴──────────────────────────┴──────────────┴───────────┴─────────┘

 */
