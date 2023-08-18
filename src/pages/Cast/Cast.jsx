import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { IMG_URL, SearchMoviesActor } from '../../components/SearchAPI/SearchAPI';
import defoltImg from '../../img/cat.png';
import CastSCSS from './Cast.module.scss'

const Cast = () => {
    const { id } = useParams();
    const [castList, setCastList] = useState([]);

    useEffect(() => {
        serverAPI();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const serverAPI = async () => {
        const data = await SearchMoviesActor(id);
        const cast = await data.cast;
        console.log(cast);
        setCastList(cast);
    };

    return (
        <div>
            <ul className={CastSCSS.list}>
                {castList.map(({id, profile_path, name, character}) => {
                    return (
                        <li key={id} className={CastSCSS.item}>
                            <img
                                src={profile_path ? IMG_URL + profile_path : defoltImg}
                                alt={name}
                                className={CastSCSS.img}
                            />
                            <div className={CastSCSS.info}>
                                <h3>{name}</h3>
                                <p>{character}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
export default Cast;