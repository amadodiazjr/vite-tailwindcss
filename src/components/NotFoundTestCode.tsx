import { type FC } from 'react'
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
      <pre className="line-numbers flex-1 rounded-md overflow-x-auto" style={{margin: 0}} data-line="10" >
        <code ref={codeTestRef} className={languageTypescript.name} >
          {test}
        </code>
      </pre>
    </>
  )
}

export default NotFoundTestCode