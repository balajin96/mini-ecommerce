import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import ProductModel from './models/productModel.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({path: path.join(__dirname, 'config', 'config.env')});

const products = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'products.json'), 'utf-8'));

mongoose.connect(process.env.DB_URL).then(async () => {
    console.log('Connected to MongoDB');

    // Clear existing products
    await ProductModel.deleteMany();

    // Insert products
    await ProductModel.insertMany(products);

    console.log('Products seeded successfully');

    process.exit();
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
});