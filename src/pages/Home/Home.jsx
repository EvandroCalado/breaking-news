import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';
import { news } from '../../data';

const Home = () => {
  const renderCard = news.map((item, index) => (
    <Card key={index} news={item} />
  ));

  return (
    <>
      <Navbar />
      {renderCard}
    </>
  );
};

export default Home;
