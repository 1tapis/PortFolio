import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
            Here are some projects I have created while learning web development.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'front-end' ?
            <ToggleButton active value="front-end" onClick={() => setToggle('front-end')}>Front End Web APP'S</ToggleButton>
            :
            <ToggleButton value="front-end" onClick={() => setToggle('front-end')}>Front End Web APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'full-stack' ?
            <ToggleButton active value="full-stack" onClick={() => setToggle('full-stack')}>Full Stack Web APP'S</ToggleButton>
            :
            <ToggleButton value="full-stack" onClick={() => setToggle('full-stack')}>Full Stack Web APP'S</ToggleButton>
          }
          
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects