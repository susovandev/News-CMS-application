import { Schema, model } from 'mongoose';
const commentSchema = new Schema(
    {
        article: {
            type: Schema.Types.ObjectId,
            ref: 'News',
            required: [true, 'Article is required.'],
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Author is required.'],
        },
        content: {
            type: String,
            required: [true, 'Content is required.'],
            minLength: [10, 'Content must be at least 10 characters long.'],
            maxLength: [200, 'Content must be at most 200 characters long.'],
        },
        status: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending',
        },
    },
    {
        timestamps: true,
    }
);

export const Comment = model('Comment', commentSchema);
