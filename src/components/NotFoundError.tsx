import { type FC } from 'react'
import { notFoundError } from '../styles/selectors'
import { languageBash } from '../styles/prism'

const fail = `
Expected: 200
Received: 404

   8 |
   9 |     // then
> 10 |     expect(response.status).toBe(200)
     |                             ^
  11 |   })
  12 | })
`
type NotFoundErrorProps = {
  consoleRef: React.RefObject<HTMLElement|null>,
  errorRef: React.RefObject<HTMLPreElement|null>
}

const NotFoundError: FC<NotFoundErrorProps> = ({consoleRef, errorRef}) => {
  return (
    <>
      {/* <div id={notFoundError.name} >
        <pre ref={errorRef} className="line-numbers flex-1 bg-pink-500 rounded-md overflow-x-auto" style={{margin: 0}} data-line="10" >
          <code ref={consoleRef} className={languageBash.name} >
            {fail}
          </code>
        </pre>
      </div> */}
      <pre ref={errorRef} className="line-numbers flex-1 bg-pink-500 rounded-md overflow-x-auto" style={{margin: 0}} data-line="10" >
        <code ref={consoleRef} className={languageBash.name} >
          {fail}
        </code>
      </pre>
    </>
  )
}

export default NotFoundError