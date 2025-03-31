import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, actors, releaseYear } = req.body;
    try {
      const movie = await prisma.movie.create({
        data: {
          title,
          actors,
          releaseYear: parseInt(releaseYear),
        },
      });
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({ error: "Failed to add movie" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
