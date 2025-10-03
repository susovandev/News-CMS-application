import { Schema, model } from 'mongoose';
import slugify from 'slugify';

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Category name is required.'],
            unique: [true, 'Category name already exists.'],
            minLength: [4, 'Category name must be at least 4 characters long.'],
            maxLength: [
                50,
                'Category name must be at most 50 characters long.',
            ],
        },
        description: {
            type: String,
            required: [true, 'Category description is required.'],
            minLength: [
                10,
                'Category description must be at least 10 characters long.',
            ],
            maxLength: [
                200,
                'Category description must be at most 200 characters long.',
            ],
        },
        slug: {
            type: String,
            required: [true, 'Category slug is required.'],
            unique: [true, 'Category slug already exists.'],
        },
    },
    {
        timestamps: true,
    }
);

categorySchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

export const Category = model('Category', categorySchema);
