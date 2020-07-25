import React from 'react';
import {Card, Button} from 'react-bootstrap';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const images = [1,2,3,4,5,6,7,8];

function PhoneCard(props) {
    return (
        <div>

            
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={"images/" + props.num + ".jpg"} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    
                    <Button variant="warning"><AddShoppingCartIcon/></Button>
                    <Button variant="primary">Buy</Button>
                </Card.Body>
        </Card>
            
            
        </div>
    );
}

export default PhoneCard;