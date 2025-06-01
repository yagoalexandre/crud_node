import 'dotenv/config'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL)

const main = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS animes (
      id UUID PRIMARY KEY,
      anime TEXT NOT NULL,
      description TEXT,
      note INTEGER
    )
  `

  console.log('✅ Tabela "animes" criada com sucesso!')
}

main().catch((err) => console.error('❌ Erro ao criar tabela:', err))
