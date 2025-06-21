import { useRef } from 'react';
//import 'prismjs/components/prism-typescript'
// import 'prismjs/components/prism-bash'
// import 'prismjs/plugins/line-numbers/prism-line-numbers'

import './App.css'

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
        <div className="w-64 flex-1 bg-pink-500 m-4 rounded-md overflow-x-auto ...">
          <div>
            <div>
              <pre className="line-numbers" data-line="10" >
                <code ref={codeTestRef} className="language-typescript">
                  {test}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>    
    </>
  )
}

export default App
