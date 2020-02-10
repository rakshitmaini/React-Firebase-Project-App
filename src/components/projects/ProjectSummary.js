import React from 'react'
// import rootReducer from '../../store/reducers/rootReducer'
import moment from 'moment';  //library to format Date

const ProjectSummary = ({project}) => {
    return (
        <div>
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>  {/*inside rootReducer pojectReducer is declared and assigned it to project property through combinedReducer function*/}
                    <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                    <p className="grey-text">{moment(project.createdAt.toDate().toString()).calendar()}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary