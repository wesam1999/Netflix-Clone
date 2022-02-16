import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import axios from 'axios';

function Home() {
    const [data, setData] = useState([]);




    const getAllRecipes = async () => {

        return await axios.get(`https://movies-library-wesam.herokuapp.com/trending`)
            .then(result => {
                console.log(result.data);
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