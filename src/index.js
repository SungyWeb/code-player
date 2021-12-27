// import hljs from 'highlight.js'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('javascript', xml)
import 'highlight.js/styles/github.css'

import CodePlayer from './lib/index.js'

const str = `
<div>
  <h3>alsdj</h3>
  <p>alsjd</p>
</div>
`

const player = new CodePlayer(document.getElementById('app'))
player.run(str)

/**
const a = 123;
function fn() {
  if(a> 1) {
    console.log(a)
  }
}
 */


// var string = 'A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A';

// for (var v of str) {
//   console.log(v === '\n')
// }


// console.log(str.replace(/[\r\n]/g, '=').replace(/\s/g, '#'))
// const r = hljs.highlight(
//   str
//   , {language: 'html'})
// console.log(r.value)
// a.innerHTML = r.value
