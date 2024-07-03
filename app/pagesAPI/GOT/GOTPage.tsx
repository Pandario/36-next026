'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchThronesData, ThronesCharacter } from '@/app/lib/gotApi';

const GOTPage: React.FC = () => {
  const [characters, setCharacters] = useState<ThronesCharacter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchThronesData();
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
      <h1 className="text-2xl mb-4">Game of Thrones Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {characters.map((character) => (
          <div key={character.id} className="p-4 border rounded-lg">
            <div className="flex justify-center rounded-full">
                <Image
                  src={character.imageUrl}
                  alt={character.fullName}
                  width={144}
                  height={144}
                  className="object-cover rounded-full w-36 h-36"
                />
            </div>
            <h3
              className="text-xl mt-2 cursor-pointer"
              onClick={(e) => {
                const target = e.currentTarget;
                target.innerText = character.fullName;
              }}
            >
              {character.fullName.length > 25
                ? `${character.fullName.substring(0, 25)}...`
                : character.fullName}
            </h3>
            <h3 className="text-xl mt-2 cursor-pointer">
              {character.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GOTPage;