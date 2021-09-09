import { FC } from 'react';
import {
    Link
} from 'react-router-dom';

const Header: FC = () => (
    <header className="header">
        <Link
            to="/"
            className="site-title">
            <span>
                Color Palette
            </span>
            <span className="logo">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </Link>
    </header>
);

export default Header;