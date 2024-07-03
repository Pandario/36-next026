export interface ThronesCharacter {
    id: string;
    fullName: string;
    imageUrl: string;
    title: string,
  }
  
  export const fetchThronesData = async (): Promise<ThronesCharacter[]> => {
    const res = await fetch('https://thronesapi.com/api/v2/Characters');
    const data = await res.json();
    return data.slice(0, 27); // Get the first 20 characters
  };