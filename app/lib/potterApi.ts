export interface Character {
    id: string;
    attributes: {
      name: string;
      image: string;
      wiki: string;
    };
  }
  
  export const fetchPotterData = async (): Promise<Character[]> => {
    const res = await fetch('https://api.potterdb.com/v1/characters');
    const data = await res.json();
    const charactersWithImages: Character[] = data.data.filter((character: Character) => character.attributes.image).slice(0, 27);
    return charactersWithImages;
  };