import React from 'react'
import { DocumentArea } from './DocumentArea'
import { EditArea } from './EditArea'
import { ResultArea } from './ResultArea'

// [1] EA
// [2] RA
// [3] DA
export const Main = () => {
  return (
    <div>
        <p>Main Component</p>
        <EditArea></EditArea>
        <ResultArea></ResultArea>
        <DocumentArea></DocumentArea>
    </div>
  )
}
