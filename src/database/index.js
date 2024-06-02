import mongoose from 'mongoose';

export async function connectDB() {
  await mongoose.connect(process.env.NEXT_PUBLIC_DB_URL).then(() => console.log('Connected to DB'));
}
