import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export { sql }

(async () => {
  const response = await sql`SELECT version()`;
  console.log('Versão do Postgres:', response[0].version);
})();
