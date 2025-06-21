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
      <div>
        <div id={notFoundError.name} >
          <pre ref={errorRef} >
            <code ref={consoleRef} className={languageBash.name} >
              {fail}
            </code>
          </pre>
        </div>
      </div>
    </>
  )
}

export default NotFoundError