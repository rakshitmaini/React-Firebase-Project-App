import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

class Dashboard extends React.Component {
    render(){
        // console.log(this.props);
        const { projects, auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin/' />
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-1">
                        <Notifications />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

// chaining multiple higher order components with compose method of redux
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}  //when this dashbooard component loads firestore collection will induce in this component in backgorung
    ])
)(Dashboard)