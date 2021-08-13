import React from "react";
import './Header.css';
import facebookLogo from '../../images/f_logo_RGB-Blue_58.png'
import flashingThunderLogo from '../../images/long-logo.png'
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { Nav, NavItem, Navbar } from 'react-bootstrap'
import Product from "../product/Product";


const Header = () => {
    return (
        <div className="header">
            <div className="header-top">
                <div className="header-top__logo">
                    <img className="header-logo" src={flashingThunderLogo} alt="Flashing Thunder Logo"></img>
                </div>
                <div className="header-top__navbar">
                    <div className="header-top__navigation">
                        <div className="navbar">
                            <a href="/" className="navbar-item">Home</a>
                            <a href="/about" className="navbar-item">About</a>
                            <a href="/products" className="navbar-item">Products</a>
                            <a href="/thunderwear" className="navbar-item">Thunder Wear</a>
                            <a href="/locations" className="navbar-item">Locations</a>
                            <a href="/contact" className="navbar-item">Contact</a>
                        </div>
                    </div>
                    <hr className="header-top__seperator" />
                </div>
            </div>
            
            <div className="header-bottom">
                <div className="header-bottom__phone">
                    641-732-5558
                </div>
                <div className="header-bottom__email">
                    katie@flashingthunder.com
                </div>
                <div>
                    <a href="https://www.facebook.com/iowaflashingthunder/">
                        <img className="facebook-logo" src={facebookLogo} alt="Facebook Logo"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;


// render() {
//     return (
//       <div>
//         <div>
//           <Navbar>
//             <Navbar.Brand as={Link} to="/" >React-Bootstrap</Navbar.Brand>
//             <Navbar.Collapse>
//               <Nav className="mr-auto">
//                 <NavItem eventkey={1} href="/">
//                   <Nav.Link as={Link} to="/" >Home</Nav.Link>
//                 </NavItem>
//               </Nav>
//               <Form inline>
//                 <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                 <Button variant="outline-success">Search</Button>
//               </Form>
//             </Navbar.Collapse>
//           </Navbar>
//         </div>
//         <div>
//           <Switch>
//             <Route exact path='/' component={Home} />
//             <Route render={function () {
//               return <p>Not found</p>
//             }} />
//           </Switch>
//         </div>
//       </div>
//     );
//   }