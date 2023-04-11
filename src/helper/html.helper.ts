import { Absences } from 'webuntis';
import { absentDaysFormatted } from './format.helper.js';

const html =
  '<table>' +
  '<thead>' +
  '<td>Datum</td><td>Startzeit</td><td>Endzeit</td><td>Abwesenheitsgrund</td>' +
  '</thead>';

export const createHTMLString = (days: Absences): string => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const body = absentDaysFormatted(days)
    .map((absence) => {
      return `<tr><td>${absence.dateString}</td><td>${absence.startTime}</td><td>${
        absence.endTime
      }</td><td>${getRandomAbwesenheitsgrund()}</td></tr>`;
    })
    .join('');
  return html + body + `</table>`;
};

const getRandomAbwesenheitsgrund = (): string => {
  const map = new Map<string, number>();
  map.set('Krankheit', 0.7);
  map.set('Augenarzt', 0.01);
  map.set('Fehleintragung', 0.09);
  map.set('Arzt', 0.2);

  const rand = Math.random();
  let probSum = 0;

  for (const [key, value] of map.entries()) {
    probSum += value;
    if (rand < probSum) {
      console.log(key);
      return key;
    }
  }
  return '';
};
