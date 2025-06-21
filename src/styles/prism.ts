import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-bash'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-highlight/prism-line-highlight'
import { Selector } from './selectors'

// These styles are generated dynamically in javascript from the prismjs imports
export const lineNumbers: Selector = { name: "line-numbers", style: ".line-numbers" }
export const languageBash: Selector = { name: "language-bash", style: ".language-bash" }
export const languageTypescript: Selector = { name: "language-typescript", style: ".language-typescript" }