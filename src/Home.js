import React, { Component } from 'react';
import { Navbar, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, NavbarBrand } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import 'mdbreact/dist/css/style.css';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Organization } from './Organization';

export class Home extends Component {
    render() {
        return (<div>hello Home</div>)
    }
}