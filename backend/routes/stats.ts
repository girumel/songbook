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

stats.get('/songs-by-artist/:artist', async (req: Request, res: Response) => {
    try {
        const songs: Song[] = await SongModel.find()
        const songsByArtist = songs.filter(song => song.artist === req.params.artist)
        res.status(200).json(songsByArtist.length)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

stats.get('/songs-by-genre/:genre', async (req: Request, res: Response) => {
    try {
        const songs: Song[] = await SongModel.find()
        const songsByGenre = songs.filter(song => song.genre === req.params.genre)
        res.status(200).json(songsByGenre.length)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

stats.get('/songs-by-album/:album', async (req: Request, res: Response) => {
    try {
        const songs: Song[] = await SongModel.find()
        const songsByAlbum = songs.filter(song => song.album === req.params.album)
        res.status(200).json(songsByAlbum.length)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

stats.get('/albums-by-artist/:artist', async (req: Request, res: Response) => {
    try {
        const songs: Song[] = await SongModel.find()
        const albumsByArtist = new Set()
        songs.forEach(song => {
            if (song.artist === req.params.artist) {
                albumsByArtist.add(song.album)
            }
        })
        res.status(200).json(albumsByArtist.size)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

export default stats
