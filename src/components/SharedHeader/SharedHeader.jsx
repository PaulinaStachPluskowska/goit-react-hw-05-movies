import React from "react";
import css from "./SharedHeader.module.css";
import Loader from "components/Loader/Loader";
import { Suspense } from "react";
import { NavLink, Outlet } from 'react-router-dom';

const SharedHeader = () => {
    return (
        <div>
            <header className={css.Header}>
                <nav className={css.Navigation}>
                    <NavLink className={css.Link} to="/">Home</NavLink>
                    <NavLink className={css.Link} to="/movies">Movies</NavLink>
                </nav>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </header>
        </div>
    );
};

export default SharedHeader;
