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

const getRandomAbwesenheitsgrund = () => {
  const map = ['Krankheit', 'Krankheit', 'Arzt'];
  return map[Math.floor(Math.random()) * map.length];
};
