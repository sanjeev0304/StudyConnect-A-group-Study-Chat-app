import dbConnect from '../../lib/db';
import User from '../../models/User';
import { comparePassword, generateToken } from '../../lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  await dbConnect();

  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user || !(await comparePassword(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = generateToken(user._id);

  res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=86400`);
  res.status(200).json({ message: 'Logged in' });
}