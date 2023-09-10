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

songs.post('/', async (req: Request, res: Response) => {
    try {
        const createdSong: Song | null = await SongModel.create(req.body)
        res.status(200).json(createdSong)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

songs.put('/:id', async (req: Request, res: Response) => {
    try {
        const updatedSong: Song | null = await SongModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedSong)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

songs.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deletedSong: Song | null = await SongModel.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedSong)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

export default songs
