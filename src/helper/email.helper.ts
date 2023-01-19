export class EmailHelper {
  private from;
  private to;
  private subject;
  private teacher;
  private student;
  private text;

  constructor(from, to, subject, teacher, student, table) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.teacher = teacher;
    this.student = student;
    this.text =
      'Sehr geehrte Frau Prof. Bauer,\n' +
      '\n' +
      'hiermit Entschuldige ich alle meine fehlenden Stunden von: \n' +
      table +
      '\n\n Mit freundlichen Grüßen ' +
      student;
  }

  createEmailOptions() {
    return {
      subject: this.subject,
      from: `'${this.student}' ${this.from}`,
      to: this.to,
      text: this.text,
    };
  }
}
