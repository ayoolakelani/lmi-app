import * as React from 'react';
import {NavLink} from 'react-router-dom';

interface FooterProps {
    title?: string; // Change the required prop to an optional prop.
}

export const Footer: React.SFC<FooterProps> = (props) => (
    <footer className="footer">
        <div className="container">
            <h6>{props.title}</h6>
            <NavLink to="/" activeClassName="is-active">
                Home
            </NavLink>
            <NavLink to="/tutorials" activeClassName="is-active">
                Tutorials
            </NavLink>
            <NavLink to="/about" activeClassName="is-active">
                About Us
            </NavLink>
            <NavLink to="/contact" activeClassName="is-active">
                Contact us
            </NavLink>
            <NavLink to="/help" activeClassName="is-active">
                Help
            </NavLink>{' '}
        </div>
    </footer>
);

Footer.defaultProps = {
    title: `Powered By SmartDev Solutions&reg; &copy; 2020` // This value is adopted when name prop is omitted.
};

export default Footer;
