import {Schema, model, Model} from 'mongoose';

export interface ISong {
    title: string;
    artist: string;
    album: string;
    genre: string;
}

const songSchema = new Schema<ISong>({
    title: {type: String, required: true},
    artist: {type: String, required: true},
    album: {type: String, required: true},
    genre: {type: String, required: true}
});

const Song: Model<ISong> = model<ISong>('Song', songSchema);

export default Song;
