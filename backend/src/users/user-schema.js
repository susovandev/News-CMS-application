import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required.'],
            unique: [true, 'Username already exists.'],
            minLength: [4, 'Username must be at least 4 characters long.'],
            maxLength: [30, 'Username must be at most 30 characters long.'],
        },
        fullName: {
            type: String,
            required: [true, 'Full name is required.'],
            match: [
                /^[a-zA-Z ]{4,50}$/,
                'Full name must be between 4 and 50 characters.',
            ],
        },
        email: {
            type: String,
            required: [true, 'Email is required.'],
            unique: [true, 'Email already exists.'],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please enter a valid email address.',
            ],
        },
        password: {
            type: String,
            required: true,
            minLength: [6, 'Password must be at least 6 characters long.'],
        },
        role: {
            type: String,
            enum: ['author', 'admin'],
            default: 'author',
        },
    },
    { timestamps: true }
);

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};

export const User = model('User', userSchema);
