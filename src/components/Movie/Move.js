import { useState } from 'react';
import { Button,Card} from 'react-bootstrap';
import Model from '../MovieList/model/Modal';
import './Move.css';

function Move({Mov})
{ const [cardInfo,setCardInfo] = useState({});
const [show,setShow] = useState(false);
const handleClose =()=>setShow(false);
    return (
        <>
        
            
                            
                                <Card >
                                    <Card.Img  variant="top" src={`https://image.tmdb.org/t/p/w500${Mov.poster_path}`} />
                                    <Card.Body>
                                        <Card.Title >{Mov.title}</Card.Title>
                                        <Card.Title >
                                            {Mov.release_date}
                                        </Card.Title>
                                        <Card.Title >
                                            {Mov.overview}
                                        </Card.Title>
                                        <div>
                                            <Button className='div-card-button' variant="primary" 
                                            onClick={()=>{
                                                setCardInfo(Mov)
                                                setShow(true);
                                            }}>Add To Favorite</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            
                 
          
            {
                <Model cardInfo={cardInfo} show={show} handleClose={handleClose} />
            }
          
        </>
    )
        }
export default Move;