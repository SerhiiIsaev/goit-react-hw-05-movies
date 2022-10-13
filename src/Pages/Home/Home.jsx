import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../utils/API';
import { Link, useLocation } from 'react-router-dom';
import styles from './Home.module.css';


  

const Home =()=> {
  
const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const { results } = await getTrendingMovies();

      setMovies(results);
    };

    getMovies();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Tranding today</h1>
      <ul className={styles.listItem}>
      {movies &&
        movies.map(
          ({id, title, }) => (            
              <li key={id} id={id}>
                <Link
                  to={{
                    pathname: `/movies/${`${id}`}`,
                    state: {
                      from: {
                        location,
                        label: 'Back to Home',
                      },
                    },
                  }}
                >
                  <p>{title}</p>
                </Link>
              </li>
            
          )
        )}
        </ul>
    </>
  );
  
}

export {Home}