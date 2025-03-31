import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    // Just try to fetch movies (even if empty)
    const movies = await prisma.movie.findMany();
    res.status(200).json({ success: true, count: movies.length });
  } catch (error) {
    console.error("DB connection error:", error);
    res.status(500).json({ success: false, error: "Database connection failed." });
  }
}
