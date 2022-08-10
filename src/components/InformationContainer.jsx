import {AiOutlineMail, AiFillEnvironment} from "react-icons/ai"

import '../styles/components/information.sass'

const Information = () => {
  return (
    <section id="information">
        <div className="info-card">
            <AiOutlineMail id="email-icon"/>
            <div>
                <h3>E-mail</h3>
                <p>fernandorox1@hotmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon"/>
            <div>
                <h3>Localização</h3>
                <p>Americana-SP</p>
            </div>
        </div>
    </section>
  )
}

export default Information