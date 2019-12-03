import React, { Component } from 'react'
import { Divider, Header, Grid, Card } from 'semantic-ui-react'

const Projects = (props) => {

    return (
        <React.Fragment>
            <Divider horizontal style={{paddingTop: 50, paddingBottom: 50}}>
                <Header as='h4'>Projects</Header>
            </Divider>
            {props.projects.map(project => {
                return (
                    <div style={{marginBottom: 50}}>
                        <Header as='h3'>{project.title}</Header>
                        <p>{project.description}</p>
                        <p>{project.link}</p>
                        <img src={project.image} alt="Project image" />
                    </div>
                )
            })}
        </React.Fragment>
    )

}

export default Projects