import WebUntis from 'webuntis';
import 'dotenv/config';

export const client = new WebUntis(
  process.env.school,
  process.env.username,
  process.env.password,
  process.env.baseUrl
);

client.login();

// Client.getAbsent Lesson
