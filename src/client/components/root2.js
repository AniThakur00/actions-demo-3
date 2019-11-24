// /* Copyright (c) 2016 Grant Miner */
"use strict";
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './navbar';
import Map from './map';
import Sidebar from './sidebar';
import DeviceEditor from './device-editor';
import Organization from './organization';
import Organizations from './organizations';
import OrganizationEditor from './organization-editor';
import Reports from './reports';
import Session from './session';
import Events from './events';
import Fleets from './fleets';
import Help from './help';
import Users from './users';
import UserEditor from './user-editor';
import Devices from './devices';
import Vehicle from './vehicle';
import Vehicles from './vehicles';
import VehicleEditor from './vehicle-editor';

function Root(props) {

  const { selectedVehicle } = props;

  const renderVehicleOrOrg = () => selectedVehicle ? <Vehicle /> : <Organization />;

  return (
    <Router>
      <div>
        <Navbar />
          <Switch>
            <Route path="/help">
              <div className="container-fluid">
                <div className="row">
                  <Help />
                </div>
              </div>
            </Route>
            <Route path="/orgs/new">
              <div className="container-fluid">
                <div className="row">
                  <OrganizationEditor />
               </div>
              </div>
            </Route>
            <Route path="/orgs/edit/:orgId">
              <div className="container-fluid">
                <div className="row">
                  <OrganizationEditor />
               </div>
              </div>
            </Route>
            <Route path="/org/:orgId/users">
              <div className="container-fluid">
                  <div className="row">
                    <Users />
                </div>
              </div>
            </Route>
            <Route path="/vehicle/new">
              <div className="container-fluid">
                  <div className="row">
                    <VehicleEditor />
                </div>
              </div>
            </Route>

            <Route path="/vehicle/:vehicleId/edit">
              <div className="container-fluid">
                  <div className="row">
                    <VehicleEditor />
                </div>
              </div>
            </Route>
            <Route path="/org/:orgId/fleets">
              <Fragment>
                <div className="container-fluid">
                  <Fleets />
]               </div>
              </Fragment>
            </Route>
            <Route path="/org/:orgId/reports">
              <Fragment>
                <div className="container-fluid">
                  <div className="row">
                    <div className="sidebar col-sm-2">
                      <Sidebar />
                    </div>
                    <div className="col-sm-10">
                      <div className="shadow">
                      <Reports />
                      </div>
                    </div>            
                  </div>
                </div>
              </Fragment>
            </Route>
            <Route path="/org/:orgId/vehicles">
              <div className="container-fluid">
                  <div className="row">
                    <Vehicles />
                </div>
              </div>
            </Route>
            <Route path="/org/:orgId/map">
              <Fragment>
                <div className="container-fluid">
                  <div className="row">
                    <div className="sidebar col-sm-2">
                      <Sidebar />
                    </div>
                    <div className="col-sm-10">
                      <div className="shadow">
                        <Map split={ false } />
                      </div>
                      <br />
                      { renderVehicleOrOrg() }
                    </div>            
                  </div>
                </div>
              </Fragment>
            </Route>
            <Route path="/org/:orgId">
              <Fragment>
                <div className="container-fluid">
                  <div className="row">
                    <div className="sidebar col-sm-2">
                      <Sidebar />
                    </div>
                    <div className="col-sm-10">
                      <div className="shadow">
                        <Map split={ true } />
                      </div>
                      <br />
                      { renderVehicleOrOrg() }
                    </div>            
                  </div>
                </div>
              </Fragment>
            </Route>
            <Route path="/orgs">
              <div className="container-fluid">
                <div className="row">
                  <Organizations />
                </div>
              </div>
            </Route>
            <Route path="/devices/new">
              <div className="container-fluid">
                <div className="row">
                  <DeviceEditor />
                </div>
              </div>
            </Route>
            <Route path="/devices/edit/:deviceId">
              <div className="container-fluid">
                <div className="row">
                  <DeviceEditor />
                </div>
              </div>
            </Route>
            <Route path="/devices">
              <div className="container-fluid">
                <div className="row">
                  <Devices />
                </div>
              </div>
            </Route>
            <Route path="/users/new">
              <div className="container-fluid">
                <div className="row">
                  <UserEditor />
                </div>
              </div>
            </Route>
            <Route path="/users/edit/:userId">
              <div className="container-fluid">
                <div className="row">
                  <UserEditor />
                </div>
              </div>
            </Route>
            <Route path="/users">
              <div className="container-fluid">
                <div className="row">
                  <Users />
                </div>
              </div>
            </Route>
            <Route path="/processed_messages">
              <div className="container-fluid">
                <div className="row">
                  <Events type="events" />
                </div>
              </div>
            </Route>
            <Route path="/raw_messages">
              <div className="container-fluid">
                <div className="row">
                  <Events type="rawevents" />
                </div>
              </div>
            </Route>
            <Route path="/exceptions">
              <div className="container-fluid">
                <div className="row">
                  <Events type="exceptions" />
                </div>
              </div>
            </Route>
            <Route path="/">
              <div className="container-fluid">
                <div className="row">
                  <Session />
                </div>
              </div>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}


export default connect(
  state => ({
    selectedVehicle: state.selectedVehicle,
  })
)(Root);