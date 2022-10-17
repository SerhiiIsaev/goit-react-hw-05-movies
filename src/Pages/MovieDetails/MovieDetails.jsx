import { useState, useEffect } from 'react';
import styles from './MovieDetails.module.css'
import {useParams, useNavigate, useMatch, NavLink, useLocation, Outlet} from 'react-router-dom';
import { getMovieDetails, IMAGE_URL } from '../../utils/API';


const MovieDetails =()=> {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const history = useNavigate();
  const location = useLocation();
  const { pathname } = useMatch("/movies/:movieId/*");
  const url = pathname.match(/^(\/movies\/\d+)/)[1];
  
  useEffect(() => {
    const getMovie = async () => {
      const currentMovie = await getMovieDetails(movieId);

      setMovie(currentMovie);
    };

    getMovie();
  }, [movieId]);

  function historyBack() {
    history(-1);
  }

  return (
    <div className={styles.container}>
      {!movie ? (
        <div className={styles.notFound}>Movie is not found</div>
      ) : (
        <div>
          <button type="button" onClick={historyBack} className={styles.button}>Go back</button>
          <div className={styles.movieContainer}>
            <div className={styles.movieImg}>
              <img
                src={
                  movie.poster_path
                    ? IMAGE_URL + movie.poster_path
                    : `https://bitsofco.de/content/images/2018/12/broken-1.png`
                }
                alt={movie.title}
                widht=""
                height=""
              />
            </div>

            <div>
              <h2>{movie.title}</h2>
              <p>User Score: {`${(movie.vote_average * 10).toFixed(2)}`}%</p>
              <h3>Overview</h3>
              <p>{`${movie.overview}`}</p>
              <h3>Genres</h3>
              <p>{`${movie.genres.map(genre => genre.name).join(' / ')}`}</p>
            </div>
          </div>
        </div>
      )}
      <hr />
      <p>Additional information</p>
      <nav>
        <NavLink
          to={{ pathname: `${url}/cast`  }}
          className={styles.link}
          state={{location}} replace
        >
          Cast
        </NavLink>
        <NavLink
          to={{ pathname: `${url}/reviews`, }}
          className={styles.link}
          state={{location}} replace
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />  
    </div>
  );
}

export default MovieDetails ;