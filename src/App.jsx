import { Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { Home } from "components/Home/Home";
// import { lazy, Suspense } from 'react';
// import Loader from './components/Loader'
// import Header from './components/Header'
// import MovieCast from "pages/MovieCast";
// import MovieReview from "pages/MovieReview";

// const Home = lazy(() =>
//   import('./pages/Home' )
// );
// const Movies = lazy(() =>
//   import('./pages/Movies')
// );
// const MovieDetails = lazy(() =>
//   import(
//     './pages/MovieDetails' 
//   )
// );
// const NotFound = lazy(() =>
//   import('./pages/NotFound')
// );

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index path="/home" element={<Home />}/>

        

            <Route path="*" element={<Home />}/>
          </Route>
        </Routes>
        <ToastContainer autoClose={2000} />
      
    </>
  );
}

export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
