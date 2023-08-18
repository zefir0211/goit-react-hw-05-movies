import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import {  SearchMoviesReviews } from '../../components/SearchAPI/SearchAPI';
import ReviewsSCSS from './Reviews.module.scss'
const Reviews = () => {
    const { id } = useParams();
    const [reviewsList, setReviewsList] = useState([]);

    useEffect(() => {
        serverAPI();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const serverAPI = async () => {
        const data = await SearchMoviesReviews(id);
        const results = await data.results;
        console.log(results);
        setReviewsList(results);
    };

    return (
        <div>
            {reviewsList.length !== 0 ? (
            <ul className={ReviewsSCSS.list}>
                {reviewsList.map(({id, author, content}) => (
                <li key={id}>
                    <h3 className={ReviewsSCSS.title}>{author}</h3>
                    <p className={ReviewsSCSS.text}>{content}</p>
                </li>
                ))}
            </ul>
            ) : (
            <p className={ReviewsSCSS.par}>We don't have any reviews for this movie.</p>
            )}
        </div>
    );
}
export default Reviews;