import React from 'react'
import Choose from '../pages/Choose'

const Start = () => {
  const [isChoosing ,setIsChoosing]=React.useState(false)
  return (
    <div className="box">
      <h1>
        Hi there 👋🏻,
        <span> I'm Jasser</span>!{" "}
      </h1>
      {!isChoosing && (
        <button onClick={() => setIsChoosing(true)}>Start a Quiz</button>
      )}
      {isChoosing && <Choose />}
    </div>
  );          
}

export default Start