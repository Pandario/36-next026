import GOTPage from "./pagesAPI/GOT/GOTPage";
import HPPage from "./pagesAPI/HP/HPPage";


const Home: React.FC = () => {
  return (
    <div>
      <HPPage />
      <GOTPage/>
    </div>
  );
};

export default Home;