import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiJsBadge,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
} from 'react-icons/di'

import '../styles/components/stack.sass'

const stacks = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "sass", name: "SASS", icon: <DiSass /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mongo", name: "Mongo", icon: <DiMongodb /> },
]

const StackContainer = () => {
  return (
    <section className='stacks-container'>
      <h2>Stack</h2>
      <div className="stacks-grid">
        {stacks.map((stack) => (
          <div className='stack-card' id={stack.id} key={stack.id}>
            {stack.icon}
            <div className="stack-info">
              <h3>{stack.name}</h3>
              <p >
                
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StackContainer