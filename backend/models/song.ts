import {Schema, model, InferSchemaType, Model} from 'mongoose';

const songSchema: Schema = new Schema({
    title: {type: String, required: true},
    artist: {type: String, required: true},
    album: {type: String, required: true},
    genre: {type: String, required: true}
});

export type Song = InferSchemaType<typeof songSchema>;

const SongModel: Model<Song> = model<Song>('Song', songSchema);

export default SongModel;
