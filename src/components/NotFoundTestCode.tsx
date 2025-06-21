import { FC } from 'react'
import { lineNumbers, languageTypescript } from '../styles/prism'

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

export type NotFoundErrorProps = {
  codeTestRef: React.RefObject<HTMLElement|null>
}

const NotFoundTestCode: FC<NotFoundErrorProps> = ({codeTestRef}) => {
  return (
    <>
      <div>
        <div>
          <pre className={lineNumbers.name} data-line="10" >
            <code ref={codeTestRef} className={languageTypescript.name} >
              {test}
            </code>
          </pre>
        </div>
      </div>
    </>
  )
}

export default NotFoundTestCode