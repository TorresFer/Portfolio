import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiJsBadge,
  DiReact,
  DiNodejsSmall,
  DiMysql,
} from 'react-icons/di'

import '../styles/components/stack.sass'

const stacks = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "sass", name: "SASS", icon: <DiSass /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
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
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium error sunt libero itaque molestiae, dicta atque corporis ea quidem et asperiores fugit in, illum nihil ullam. Ex dolor eum quas!
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StackContainer