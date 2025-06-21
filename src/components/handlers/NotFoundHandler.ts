import { clearErrorBackground, highlight } from '../../toolkit/utils'

export default class NotFoundHandler {  
  constructor(
    private readonly codeTestRef: React.RefObject<HTMLElement|null>,
    private readonly consoleRef: React.RefObject<HTMLElement|null>,
    private readonly errorRef: React.RefObject<HTMLElement|null>
  ){}

  public onInit = () => {
    highlight(this.codeTestRef)
    highlight(this.consoleRef)
    clearErrorBackground(this.errorRef)
  }

  public static New = (
    codeTestRef: React.RefObject<HTMLElement|null>,
    consoleRef: React.RefObject<HTMLElement|null>,
    errorRef: React.RefObject<HTMLElement|null>
  ) => {
    return new NotFoundHandler(
      codeTestRef,
      consoleRef,
      errorRef
    )
  }
}