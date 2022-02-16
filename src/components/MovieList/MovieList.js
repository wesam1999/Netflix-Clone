import {  Container, Row } from 'react-bootstrap';
import Move from '../Movie/Move';

function MovieList({data})
{ 

    return (
        <>
        
            <Container className='div-container'>
                <Row md={3}>
                    {
                        data.length && data.map((Mov) => (
                            <Move Mov={Mov} />
                        ))
                    }
                </Row>
            </Container>
           
            {
                !data.length && <div><h2>No Such Results, Please try again later</h2></div>
            }
        </>
    )
        }
export default MovieList;