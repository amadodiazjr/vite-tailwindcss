import { useRef } from 'react';
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-bash'
import 'prismjs/plugins/line-numbers/prism-line-numbers'

import './App.css'
import NotFoundTestCode from './components/NotFoundTestCode';

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

  return (
    <>
      <div className="flex">
        {/* <pre className="line-numbers flex-1 bg-pink-500 rounded-md overflow-x-auto" data-line="10" >
          <code ref={codeTestRef} className="language-typescript">
            {test}
          </code>
        </pre> */}
        <NotFoundTestCode codeTestRef={codeTestRef} />
      </div>    
    </>
  )
}

export default App
