import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
const Show = () => {
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);
  const { showId } = useParams();
  useEffect(() => {
    // getShowById()
    async function fetchData() {
      try {
        const data = await getShowById(showId);
        setShowData(data);
      } catch (error) {
        setShowError(error);
      }
    }
    fetchData();
  }, [showId]);

  if (showError) {
    return <div>We have an error:{showError.message}</div>;
  }
  if (showData) {
    return <div>Got Show data:{showData.name}</div>;
  }
  return <div>Data is Loading</div>;
};

export default Show;
