import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { smurfLoad } from '../actions/actions';
import { Alert, Button, Card, Row, Col } from 'reactstrap';


const Call = () => {
  const data = useSelector(state => state.fetching);
  const stuff = useSelector(state => state.smurfs);
  const dispatch = useDispatch()
  return (
    <>
    <section>
      {data ? (<Alert color='info' > **Heading to Smurf Village** </Alert>) : (
        <Button onClick={() => dispatch(smurfLoad())}>Load Smurfs</Button>
      )}
    </section>

      <section>
            <Row>
              {stuff.map(param =>
                <Col lg="4">
                <Card className='card' id={param.id}>
                  <h3>Name:{param.name}</h3>
                  <div>
                    <ul>
                      <li>Age:{param.age}</li>
                      <li>Height:{param.height} </li>
                    </ul>
                  </div>
                  </Card>
                </Col>
              )}
            </Row>
     </section>     


    </>    
  )
}

export default Call 