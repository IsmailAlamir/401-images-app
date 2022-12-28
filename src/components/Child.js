import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Child(props) {

    let [numOfLikes, setnumOfLikes] = useState(0);


    const like = () => {
        setnumOfLikes(numOfLikes + 1)
        props.likes();
    }

    return (
        <>
            <Card class="box">
                <Card.Img variant="top" src={props.image_url} onClick={like} />
                <Card.Body>
                    <Card.Title class="content">{props.title}</Card.Title>
                    <Card.Text>
                        <p class="content" >Num of Likes: {numOfLikes}</p>
                    </Card.Text>
                    <Button variant="danger" onClick={like}>Like 👍🏻</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Child;
