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
      <div className="flex">
        <NotFoundTestCode codeTestRef={codeTestRef} />
      </div>
      <div className="flex">
        <NotFoundError consoleRef={consoleRef} errorRef={errorRef} />
      </div>
      <Footer />
    </>
  )
}

export default App
