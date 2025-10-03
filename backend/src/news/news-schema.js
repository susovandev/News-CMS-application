import { Schema, model } from 'mongoose';

const newsSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required.'],
            minLength: [4, 'Title must be at least 4 characters long.'],
            maxLength: [100, 'Title must be at most 100 characters long.'],
        },
        content: {
            type: String,
            required: [true, 'Content is required.'],
            minLength: [10, 'Content must be at least 10 characters long.'],
            maxLength: [5000, 'Content must be at most 5000 characters long.'],
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: [true, 'Category is required.'],
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Author is required.'],
        },
        image: {
            type: String,
            required: [true, 'Image is required.'],
            match: [/^https?:\/\//i, 'Image must be a valid URL.'],
        },
    },
    {
        timestamps: true,
    }
);

export const News = model('News', newsSchema);
