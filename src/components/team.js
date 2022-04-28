import React from 'react';
import Contact from './contact.js'
import ammar from '../assets/Ammar.jpeg'
import stella from '../assets/Shinhae.jpg'
import esther from '../assets/Esther.jpeg'
import patrick from '../assets/Patrick.jpeg'

function Team () {

  const teamates = [
    {
      image: ammar,
      name: 'Ammar Doo',
      gh: 'https://github.com/sc00oby',
      linkedin: 'https://www.linkedin.com/in/ammar-doo-7ba930225/'
    },
    {
      image: stella,
      name: 'Na Shinhae',
      gh: 'https://github.com/shinhaena-stella',
      linkedin: 'https://www.linkedin.com/in/shinhaena-stella/'
    },
    {
      image: patrick,
      name: 'Patrick Mojico',
      gh: 'https://github.com/patrickMojica',
      linkedin: 'https://www.linkedin.com/in/patrick-mojica-1298b968/'
    },
    {
      image: esther,
      name: 'Esther Cho',
      gh: 'https://github.com/xesthercho',
      linkedin: 'https://www.linkedin.com/in/esther-cho'
    }
  ]

  const renderTeam = []

  for (let i = 0; i < teamates.length; i++) {
    renderTeam.push(<Contact key={i} info={teamates[i]}/>)
  }

  return(
    <div id="team">
      <div id="title" className="team-item">OUR TEAM</div>
      <div id="team-list" className="team-item">
        {renderTeam}
      </div>
    </div>
  )
}

export default Team;