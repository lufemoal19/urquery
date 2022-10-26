import React from 'react'
import '../style/Style.css';
import { Buttons } from './Buttons';
import { DocumentArea } from './DocumentArea'
import { EditArea } from './EditArea'
import { Footer } from './Footer';
import { ResultArea } from './ResultArea'

// [1] EA
// [2] RA
// [3] DA
export const Main = () => {
  return (
    <div>
        <header className='header'>
          <Buttons></Buttons>
        </header>
        <main className='container'>
          <div className='main__container'>
          <EditArea></EditArea>
          <ResultArea></ResultArea>
        </div>
          <DocumentArea></DocumentArea>
        </main>

        <div>
          <Footer></Footer>
        </div>
  
    </div>
  )
}
