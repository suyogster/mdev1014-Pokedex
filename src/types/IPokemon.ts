export default interface IPokemon {
  name: string;
  type: string[];
  species: string;
  height: string;
  weight: string;
  abilities: string[];
  genderRatio: {
    male?: string;
    female?: string;
    genderless?: boolean;
  };
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  weaknesses: string[];
  primaryColor: string;
  image: any;
}
