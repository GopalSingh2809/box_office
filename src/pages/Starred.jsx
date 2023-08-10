import { useStarredShows } from '../lib/useStarredShows';

const Home = () => {
  const [starredShows] = useStarredShows();
  //
  return <div>Starred page,Starred {starredShows.length}</div>;
};
export default Home;
