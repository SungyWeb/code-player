import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)
import 'highlight.js/styles/github.css'

const a = document.getElementById('a')

const r = hljs.highlight(
  `
const a = 123;
function fn() {
  if(a> 1) {
    console.log(a)
  }
}
  `
  , {language: 'javascript'})
console.log(r.value)
a.innerHTML = r.value
