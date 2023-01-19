import WebUntis from 'webuntis';

export class State {
  private credentials: WebUntis;
  constructor(credentials: WebUntis) {
    this.credentials = credentials;
  }
}

// export class EmailState implements State {
//   private teacherEmail: string;
//   private selfEmail: string;
//   private credentials: WebUntis;
//   // Implement Email worker sender? => sends generated HTML
// }
