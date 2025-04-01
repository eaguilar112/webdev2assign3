import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server"; // Import NextResponse for JSON responses

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
      return NextResponse.json(movie, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: "Error creating post", error }, { status: 500 });
    }
  } else if (req.method === "GET") {
    try {
      const movies = await prisma.movie.findMany();
      return NextResponse.json(movies, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: "Failed to fetch movies", error }, { status: 500 });
    }
  } else if (req.method === "PATCH") {
    const { id, title, actors, releaseYear } = req.body;

    try {
      const movieExists = await prisma.movie.findUnique({
        where: { id: parseInt(id) },
      });

      if (!movieExists) {
        return NextResponse.json(
          { message: "Movie not found" },
          { status: 404 }
        );
      }

      const updatedMovie = await prisma.movie.update({
        where: { id: parseInt(id) },
        data: {
          title,
          actors,
          releaseYear: parseInt(releaseYear),
        },
      });

      return NextResponse.json(updatedMovie, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { message: "Error updating movie", error },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
  }
}
