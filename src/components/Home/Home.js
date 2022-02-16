import MovieList from '../MovieList/MovieList';
import {Routes,Route} from 'react-router-dom';
function Home()
{let API=`https://api.themoviedb.org/3/trending/all/week?api_key=37ddc7081e348bf246a42f3be2b3dfd0&language=en-US;`;
    return (
        <>
       
            <MovieList api={API}/>
       
        
        
        </>
    );
}
export default Home;