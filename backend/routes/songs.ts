import express, { Request, Response } from 'express'
import SongModel, { Song } from '../models/song'

const songs = express.Router()

songs.get('/', async (_req: Request, res: Response) => {
    try {
        const songs: Song[] | null = await SongModel.find()
        res.status(200).json(songs)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

songs.get('/:id', async (req: Request, res: Response) => {
    try {
        const song: Song | null = await SongModel.findById(req.params.id)
        res.status(200).json(song)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

export default songs
