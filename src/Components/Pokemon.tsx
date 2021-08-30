import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import PokemonThumb from "./PokemonThumb";
import { Button } from "./Button";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [allPokemons, setAllPokemons] = useState<any>([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=5"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    const createPokemonObject = (results: any[]) => {
      results.forEach(async (pokemon: { name: any }) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList: any) => [...currentList, data]);
        allPokemons.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
      });
    };

    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{ marginLeft: "3%" }}>Pokemon Evolution</h1>
          {isAuthenticated ? (
            <div>Logined in as {user?.name}</div>
          ) : (
            "not logged in "
          )}
          <LogoutButton />
        </div>
        {/* <h1>Pokemon Evolution</h1> */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {allPokemons.map((pokemonStats: any, index: any) => (
              <PokemonThumb
                key={index}
                id={pokemonStats.id}
                image={pokemonStats.sprites.other.dream_world.front_default}
                name={pokemonStats.name}
                type={pokemonStats.types[0].type.name}
              />
            ))}
          </div>
        </div>
        <Button
          onClick={() => getAllPokemons()}
          css={{ margin: "3% auto 3% auto" }}
          name="Load more"
        />
      </div>
    </>
  );
};

export default Profile;
