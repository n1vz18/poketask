export interface PokemonAbility {
    ability: {
      name: string;
      url: string;
    };
    isHidden: boolean;
    slot: number;
  }
  
  export interface PokemonStats {
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  }
  
  export interface Pokemon {
    name: string;
    url: string;
  }
  
  export interface PokemonDetails {
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    sprites: PokemonSprite;
  }
  
  export interface PokemonResponse {
    count: number;
    results: Pokemon[];
  }

  export interface PokemonSprite {
    front_default: string;
    [key: string]: string | undefined;
  }
  