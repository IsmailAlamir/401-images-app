import React, { useState } from 'react';
import Child from './Child';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function Parent() {
    const data = [{
        "_id": 1,
        "image_url": "https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg",
        "title": "nature1",
        "likes": 0
    },

    {
        "_id": 2,
        "image_url": "https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg",
        "title": "nature2",
        "likes": 0
    },

    {
        "_id": 3,
        "image_url": "https://wallpapercave.com/wp/u9AVLry.jpg",
        "title": "nature3",
        "likes": 0
    }];

    let [totalNumOfLikes, setTotalNumOfLikes] = useState(0);

    const incrementTotalLikes = () => {
        setTotalNumOfLikes(totalNumOfLikes + 1)
    }

    return (
        <div class="container">
            
            <h2 class="total">Total Num of Likes : {totalNumOfLikes}</h2>
            <Row xs={1} md={3} className="g-4">

                {data.map(nature => {

                    return (
                        <Col>
                            <Child
                                title={nature.title}
                                image_url={nature.image_url}
                                likes={incrementTotalLikes}
                            />
                        </Col>

                    );
                })}

            </Row>


        </div>
    )
}
