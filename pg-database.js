import { randomUUID } from 'crypto'
import 'dotenv/config'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL)

export class pgDatabase {
    async list(anime) {
        if (anime) {
            return await sql`select * from animes where anime like ${'%'+anime+'%'}`
        } else {
            return await sql`select * from animes order by note`
        }
    }

    async create(anime) {
        const animeId = randomUUID()
        return await sql`insert into animes (id, anime, description, note) 
                    values (${animeId}, ${anime.anime}, ${anime.description}, ${anime.note})
                `
    }

    async update(id, anime) {
        return await sql`update animes set
            anime = ${anime.anime}, description = ${anime.description}, note = ${anime.note}
            where animes.id = ${id}
        `
    }

    async delete(id) {
        return await sql`delete from animes where id = ${id}`
    }
}