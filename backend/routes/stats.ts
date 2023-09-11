import express, { Request, Response } from 'express'
import SongModel, { Song } from '../models/song'

const stats = express.Router()

stats.get('/total', async (_req: Request, res: Response) => {
    try {
        const songs: Song[] = await SongModel.find()

        const artists = new Set()
        songs.forEach(song => artists.add(song.artist))

        const albums = new Set()
        songs.forEach(song => albums.add(song.album))

        const genres = new Set()
        songs.forEach(song => genres.add(song.genre))

        res.status(200).json({
            totalSongs: songs.length,
            totalArtists: artists.size,
            totalAlbums: albums.size,
            totalGenres: genres.size
        })
    }
    catch (err) {
        res.status(400).json(err)
    }
})

export default stats
