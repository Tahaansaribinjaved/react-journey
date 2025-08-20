import React from 'react'

const Props = () => {
    const title = "Card Title"
    const content = "Card Content"
  return (
    <div>
        <Card title={title} content={content} />
    </div>
  )
}

export default Props



const Card = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}
