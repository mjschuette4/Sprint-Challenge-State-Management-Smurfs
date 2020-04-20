import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { smurfLoad } from '../actions/actions';
import { Button, Card, Row } from 'reactstrap';


const Call = () => {
  const stuff = useSelector(state => state.smurfs);
  const dispatch = useDispatch()
  return (
    <>
    <section>
        <Button onClick={() => dispatch(smurfLoad())}>Load Smurfs</Button>
    </section>

      <section>
            <Row>
              {stuff.map(param =>
                <Card className='card' id={param.id}>
                  <h3>Name:{param.name}</h3>
                  <div>
                    <ul>
                      <li>Age:{param.age}</li>
                      <li>Height:{param.height} </li>
                    </ul>
                  </div>
                  </Card>
              )}
            </Row>

     </section>     


    </>    
  )
}

export default Call 