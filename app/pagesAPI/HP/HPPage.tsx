'use client'

import { fetchPotterData } from '@/app/lib/potterApi';
import Image from 'next/image';
import { useEffect, useState } from 'react';


interface Character {
  id: string;
  attributes: {
    name: string;
    image: string;
    wiki: string;
  };
}

const HPPage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPotterData();
      setCharacters(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Harry Potter Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {characters.map((character) => (
          <div key={character.id} className="p-4 border rounded-lg">
            <div className=" flex justify-center rounded-full">
            <Image
              src={character.attributes.image}
              alt={character.attributes.name}
              width={144}
              height={144}
              className="object-cover rounded-full w-36 h-36"
            />
            </div>
            <h3
  className="text-xl mt-2 cursor-pointer"
  onClick={(e) => {
    const target = e.currentTarget;
    target.innerText = character.attributes.name;
  }}
>
  {character.attributes.name.length > 20
    ? `${character.attributes.name.substring(0, 20)}...`
    : character.attributes.name}
</h3>
            <a href={character.attributes.wiki} target="_blank" rel="noopener noreferrer" className="text-blue-500">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HPPage;