import AboutContainer from './AboutContainer'
import StackContainer from './StackContainer'
import ProjectsContainer from './ProjectsContainer'

import "../styles/components/maincontent.sass"

const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer/>
      <StackContainer/>
      <ProjectsContainer/>
    </main>
  )
}

export default MainContent