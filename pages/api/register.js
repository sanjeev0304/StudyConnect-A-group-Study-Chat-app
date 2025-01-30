import dbConnect from '../../lib/db';
import User from '../../models/User';
import { hashPassword } from '../../lib/auth';
import { getCluster } from '../../lib/ai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  await dbConnect();

  const { username, password, age, specialization, yearOfStudy } = req.body;

  const hashedPassword = await hashPassword(password);
  const cluster = await getCluster(age, specialization, yearOfStudy);

  const user = new User({
    username,
    password: hashedPassword,
    age,
    specialization,
    yearOfStudy,
    cluster,
  });

  await user.save();

  res.status(201).json({ message: 'User created' });
}