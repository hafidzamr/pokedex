import React, { useState, useEffect } from "react";
import Card from "../../components/Card";

function Home() {
  const initialState = [];
  const [dataPokemon, setdataPokemon] = useState(initialState);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      await getPokemonData(data.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  async function getPokemonData(datas) {
    let getMoreDataPokemon = await Promise.all(
      datas.map(async data => {
        let resPokemonDetail = await fetch(data.url);
        let dataPokemonDetail = resPokemonDetail.json();
        return dataPokemonDetail;
      })
    );
    setdataPokemon(getMoreDataPokemon);
  }

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="container pt-5">
      <Card pokemon={dataPokemon} />
    </div>
  );
}

export default Home;
