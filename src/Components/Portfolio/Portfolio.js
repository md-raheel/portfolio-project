import React from 'react';
import { CssBaseline, Typography }from '@material-ui/core';
import ProfProjects from './ProfProjects';
import PersonalProjects from './PersonalProjects';


const Portfolio = () => {

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Typography variant="h4">
          Projects
        </Typography>
        <ProfProjects />
        <PersonalProjects />
      </main>
    </React.Fragment>
  );
}

export default Portfolio;