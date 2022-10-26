import React from 'react'

export const New = () => {
    let test = ':D'
    const example = () => {console.log(`${test} example`)}
  return (
    <div>
        <p>Hola</p>
        <div>
            {example()}
            {test}
        </div>
    </div>
  )
}
