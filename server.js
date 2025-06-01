import { fastify } from 'fastify'
import { pgDatabase } from './pg-database.js'

const database = new pgDatabase()

const server = fastify()

server.post('/animes', async (request, response) => {
    const { anime, description, note } = request.body

    database.create({
        anime,
        description,
        note,
    })

    return await this.getAnime(anime) 
})

server.get('/animes', async (request) => {
    const search = request.query.search

    return await  database.list(search)
})

server.put('/animes/:id', async (request, reponse) => {
    const { anime, description, note } = request.body
    const animeId = request.params.id

    await database.update(animeId, {
        anime,
        description,
        note,
    })

    return reponse.send(204)
})

server.delete('/animes/:id', async (request, response) => {
    const animeId = request.params.id

    await database.delete(animeId)

    return response.send(204)
})

server.listen({
    port: 3333
})