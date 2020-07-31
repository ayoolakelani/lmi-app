import * as React from 'react';
import {NavLink} from 'react-router-dom';
import * as styles from './header.scss';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

interface HeaderProps {
    title?: string; // Change the required prop to an optional prop.
}

export const Header: React.SFC<HeaderProps> = (props) => (
    <header className={styles.header}>
        <Navbar collapseOnSelect className={styles.header__main} fixed="top" expand="lg">
            <Navbar.Brand>
                <NavLink to="/">
                    <h2>
                        <img
                            className={styles.header__logo}
                            src="http://flexbox.ninja/assets/images/logo.svg"
                            alt="Flexbox.ninja"
                        />
                        {props.title}
                    </h2>
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className={styles.header__main_nav}>
                    <NavLink to="/" activeClassName="is-active" exact={true}>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeClassName="is-active" exact={true}>
                        About Us
                    </NavLink>
                    <NavLink to="/contact" activeClassName="is-active" exact={true}>
                        Contact Us
                    </NavLink>
                    <NavLink to="/help" activeClassName="is-active" exact={true}>
                        Help
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
);

Header.defaultProps = {
    title: 'LMI' // This value is adopted when name prop is omitted.
};

export default Header;
