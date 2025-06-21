import Prism from 'prismjs'

export const isActionButton = (key: string): boolean => {
  const SPACEBAR = ' '
  const KEYBOARD_ENTER = 'Enter'
  const NUMPAD_ENTER = 'NumpadEnter'

  return [SPACEBAR, KEYBOARD_ENTER, NUMPAD_ENTER].includes(key)
}

export const getSymbolValue = (toggle: boolean): string => {
  return toggle === true ? "PASS" : "FAIL" // TODO (amado): enumerate values
}

// @testable - branch out privates

// look what happened here - i identified reusable code that would not 
// have been apparent had we not had this transparency!
export const highlight = (ref: React.RefObject<HTMLElement|null>) => {
  if (!ref.current) {
    return
  }

  Prism.highlightElement(ref.current)
}

export const clearErrorBackground = (ref: React.RefObject<HTMLElement|null>) => {
  if (!ref.current) {
    return      
  }

  ref.current.style.backgroundColor = "transparent"
}
