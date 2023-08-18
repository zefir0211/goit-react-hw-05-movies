import { Link, useLocation } from 'react-router-dom';
import { IMG_URL } from 'components/SearchAPI/SearchAPI';
import { Item, NavbarLink , Img, Info, H3 } from '../MovieItem/MovieItem.styled';
import defoltImg from '../../../img/default.jpg'

export const MovieItem = ({movie}) => {
    const location = useLocation();
    const url = location.pathname === '/' ? `movies/` : '';
    return (
        <Item>
            <NavbarLink 
            to={`${url}${movie.id}`}
            >
                <Img
                    src={movie.poster_path ? IMG_URL + movie.poster_path : defoltImg}
                    alt={movie.title}
                />
                <Info>
                    <H3>{movie.title}</H3>
                </Info>
            </NavbarLink >
        </Item>
    );
};