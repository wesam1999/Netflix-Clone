import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import axios from 'axios';
import './Home.css';
function Home() {
    const [data, setData] = useState([]);




    const getAllRecipes = async () => {

        return await axios.get(`https://movies-library-wesam.herokuapp.com/trending`)
            .then(result => {
                
                return result.data;
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        void (async () => {
            let data = await getAllRecipes();
            setData(data);
        })();
    }, []);
    return (
        <>

            <MovieList data={data} />



        </>
    );
}
export default Home;