// create-table.js
import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

// Conecta no Neon usando a connection string do .env
const sql = neon(process.env.DATABASE_URL);

async function createTable() {
  try {
    // Cria a tabela se não existir
    await sql`
      CREATE TABLE IF NOT EXISTS videos (

        id UUID PRIMARY KEY,
        title TEXT,
        description TEXT,
        duration INTEGER
      );
    `;

    console.log("Tabela 'videos' criada com sucesso!");
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  }
}

createTable();
