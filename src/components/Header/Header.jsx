import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader'
import HeaderSCSS from './Header.module.scss'

export const HeaderAll = () => {
    return (
        <>
            <header className={HeaderSCSS.header}>
                <nav className={HeaderSCSS.nav}>
                    <Link to="/" className={HeaderSCSS.link}>Home</Link>
                    <Link to="/movies" className={HeaderSCSS.link}>Movies</Link>
                </nav>
            </header>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </>
    );
};
