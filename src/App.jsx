import { Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from "components/Header/Header";
import { lazy, Suspense } from 'react';
import { Loader } from "components/Loader/Loader";
// import { Home } from "Pages/Home/Home";
// import { Movies } from "Pages/Movies/Movies";
// import {MovieCast} from "Pages/MovieCast/MovieCast";
// import { MovieReview } from "Pages/MovieReview/MovieReview";
// import { MovieDetails } from "Pages/MovieDetails/MovieDetails";

const Home = lazy(() =>
  import('Pages/Home/Home' )
);
const Movies = lazy(() =>
  import('Pages/Movies/Movies')
);
const MovieDetails = lazy(() =>
  import(
    'Pages/MovieDetails/MovieDetails' 
  )
);
const MovieReview = lazy(() =>
  import(
    'Pages/MovieReview/MovieReview'
  )
)
const MovieCast = lazy(() =>
  import(
    'Pages/MovieCast/MovieCast'
  )
)


const App = () => {
  return (
    <>
      <Header />
        <Suspense fallback={<Loader />}>
        <Routes>
          <Route index path="/" element={<Home />}/>
          <Route path="/movies" element={<Movies />} />
        
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />}></Route>
            <Route path="reviews" element={<MovieReview />}></Route>
          </Route>

          <Route path="*" element={<Home />}/>
          
        </Routes>
      
        <ToastContainer autoClose={2000} />
        </Suspense>

    </>
  );
}

export default App;

