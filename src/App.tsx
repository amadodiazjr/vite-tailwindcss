import { useRef } from 'react';
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-bash'
import 'prismjs/plugins/line-numbers/prism-line-numbers'

import './App.css'
import NotFoundTestCode from './components/NotFoundTestCode';
import NotFoundError from './components/NotFoundError';
import Footer from './components/Footer';

const test = `
describe('sub page', () => { 
  it('shall return response.status 200', async () => {
    // given
    const url = '${window.location.href}'
    
    // when
    const response = await fetch(url)

    // then
    expect(response.status).toBe(200)
  })
})`.trim()

function App() {
  const codeTestRef: any = useRef<HTMLElement>(null)
  const consoleRef: any = useRef<HTMLElement>(null);
  const errorRef: any = useRef<HTMLElement>(null);
  
  return (
    <>
        {/* <div className="grid h-screen grid-cols-2 place-content-center gap-4 ..." style={{border: "1px solid red"}}>
          <div style={{backgroundColor: "red"}}>01 01 01 01 01 01</div>
          <div style={{backgroundColor: "blue"}}>02</div>
          <div style={{backgroundColor: "green"}}>03</div>
          <div style={{backgroundColor: "yellow"}}>04</div>
        </div> */}

      <div className="h-screen content-center p-2 sm:p-20" style={{border: "1px solid red"}}>
        <div className="flex">
          <NotFoundTestCode codeTestRef={codeTestRef} />
        </div>
        <div className="flex">
          <NotFoundError consoleRef={consoleRef} errorRef={errorRef} />
        </div>
        <Footer  />
      </div>
      
    </>
  )
}

export default App
