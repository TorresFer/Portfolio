import SocialNetworks from './SocialNetworksContainer'
import Information from './InformationContainer'

import Perfil from '../img/eu.jpg'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={Perfil} alt="Fernando Torres" />
      <p className="title"> 
        Desenvolvedor 
        <p>Front-end</p>
      </p>
      <SocialNetworks />
      <Information />
      <a href="#" className='btn'>
        Download Currículo
      </a>
    </aside>
  )
}

export default Sidebar