import { useEffect, useRef } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

import React from 'react'

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
    const form=useRef();
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId);
    }, [])

    const addReview = async (e) => {
        e.preventDefault();
        const rev = revText.current;
        console.log(rev)
        // if( rev.localeCompare(""))
        try {
            const response = await api.post("/api/v1/reviews", { reviewBody: rev.value, imdbId: movieId });
            console.log(response.status);
            const updatedReviews = [...reviews, { body: rev.value }];
            rev.value = "";
            setReviews(updatedReviews);
        }
        catch (err) {
            console.error(err);
        }
    }

    return (
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={movie?.poster} alt="" />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    {/* <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?" /> */}
                                    <form  onSubmit={addReview} className='"mb-3'>
                                        Write a Review?<br />
                                        <textarea ref={revText} name="message" rows="3" cols={50} placeholder='Add Reviews' required />
                                        <br/>
                                        <button type='submit' className='btn btn-primary'>SUBMIT</button>
                                    </form>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {
                        reviews?.map((r) => {
                            return (
                                <>
                                    <Row>
                                        <Col>{r.body}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews