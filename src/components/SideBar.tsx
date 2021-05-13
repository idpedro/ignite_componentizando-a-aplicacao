import { api } from "../services/api";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import "../styles/sidebar.scss";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface SideBarProps {
  selectedGenre: GenreResponseProps;
  setSelectedGenre: (genere: GenreResponseProps) => void;
}

export function SideBar({ selectedGenre, setSelectedGenre }: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
      setSelectedGenre(response.data[0]);
    });
  }, []);

  function handleClickButton(id: number) {
    const genre = genres.find((genre) => genre.id === id);
    genre && setSelectedGenre(genre);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenre.id === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
