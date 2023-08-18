// import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { IMG_URL } from 'components/SearchAPI/SearchAPI';
import MovieListSCSS from './MovieList.module.scss';
import defoltImg from '../../img/default.jpg'

export const MovieItem = ({movie}) => {
    const location = useLocation();
    const url = location.pathname === '/' ? `movies/` : '';
    return (
        <li  className={MovieListSCSS.item}>
            <Link
            to={`${url}${movie.id}`}
            className={MovieListSCSS.link}
            >
                <img
                    src={movie.poster_path ? IMG_URL + movie.poster_path : defoltImg}
                    alt={movie.title}
                    className={MovieListSCSS.img}
                />
                <div className={MovieListSCSS.info}>
                    <h3>{movie.title}</h3>
                </div>
            </Link>
        </li>
    );
};