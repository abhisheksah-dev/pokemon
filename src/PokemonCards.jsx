export const PokemonCards = ({ pokemonData }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          className="pokemon-image"
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
        />
      </figure>
      <h1>{pokemonData.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>
          {pokemonData.types.map((curType) => curType.type.name).join(", ")}
        </p>
      </div>

      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span>
            <strong>Height:</strong> {pokemonData.height}
          </span>
        </p>
        <p className="pokemon-info">
          <span>
            <strong>Weight:</strong> {pokemonData.weight}
          </span>
        </p>
        <p>
          <span>
            <strong>Speed:</strong> {pokemonData.stats[5].base_stat}
          </span>
        </p>
      </div>
      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>
            <strong>Abilities:</strong>
            {pokemonData.abilities
              .map((curAbility) => curAbility.ability.name)
              .join(", ")}
          </p>
        </div>
        <p className="pokemon-info">
          <strong>Experience:</strong> {pokemonData.base_experience}
        </p>
        <p className="pokemon-info">
          <strong>HP:</strong> {pokemonData.stats[0].base_stat}
        </p>
      </div>
    </li>
  );
};
