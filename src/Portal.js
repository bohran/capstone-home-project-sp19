import React, { Component } from "react";
import PortalRow from "./PortalRow";
import PortalRowOrg from "./PortalRowOrg";
import "./css/Portal.css";

export class Portal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        window.scrollTo(0, 0);
    }


    render() {
        console.log(this.state.data);

        return (
            <div>
                <div class="alert alert-danger d-none" id="error-alert"></div>
                <div>

                </div>
                <div>
                    <div class="container" id="eventcontainer">
                        <h1>Events To Approve</h1>
                        <table class="table table-hover" id="table">
                            <thead>
                                <tr>
                                    <th scope="col">Select</th>
                                    <th scope="col">#</th>
                                    <th scope="col">Organization</th>
                                    <th scope="col">Event Title</th>
                                    <th scope="col">Event Type</th>
                                    <th scope="col">Area of Service</th>
                                    <th scope="col">Event Date</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Details</th>
                                </tr>
                            </thead>
                            <PortalRow />
                        </table>
                        <button type="submit" class="btn" id="approveEventsButton">Approve</button>
                        <button type="submit" class="btn" id="deleteEventButton">Deny</button>
                    </div>
                    <div class="container" id="orgcontainer">
                        <h1>Organizations To Approve</h1>
                        <table class="table table-hover" id="orgTable">
                            <thead>
                                <tr>
                                    <th scope="col">Select</th>
                                    <th scope="col">#</th>
                                    <th scope="col">Organization Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Website</th>
                                    <th scope="col">Street Address</th>
                                    <th scope="col">City</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Details</th>
                                </tr>
                            </thead>
                                <PortalRowOrg />
                        </table>
                        <button type="submit" class="btn" id="approveButton">Approve</button>
                        <button type="submit" class="btn" id="deleteOrgButton">Deny</button>
                    </div>
                </div>

                <div id="modalM" className="modal" style={{
                    display: 'none',
                    position: "fixed",
                    zIndex: 1,
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    maxHeight: "100%",
                    overflow: "auto",
                    backgroundColor: "rgb(0,0,0)",
                    backgroundColor: "rgba(0,0,0,0.4)"
                }}>
                    <div style={{
                        backgroundColor: "#fefefe",
                        margin: "15% auto",
                        padding: 20,
                        border: "1px solid #888",
                        width: "90%"
                    }}>
                        <span className="close" style={{
                            color: 'aaa',
                            float: 'right',
                            fontSize: 28,
                            fontWeight: 'bold'
                        }}>&times;</span>
                        <div id="modalBody">
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}