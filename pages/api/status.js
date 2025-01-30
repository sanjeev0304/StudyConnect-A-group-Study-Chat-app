import { parse } from "cookie";

export default function handler(req, res) {
  try {
    const cookies = parse(req.headers.cookie || "");
    const token = cookies.token; // Read the 'token' cookie

    if (!token) {
      return res.status(200).json({ isLoggedIn: false });
    }

    return res.status(200).json({ isLoggedIn: true, token });
  } catch (error) {
    console.error("Login Status Error:", error);
    return res.status(500).json({ isLoggedIn: false, error: "Internal Server Error" });
  }
}
