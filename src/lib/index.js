
const BgColor = '#1e1e1e'
// 参考线
const GridLine = {
  color: '#09f',
  lineWidth: 1,
  lineType: 'dash'
}

const initOptions = {
  fontSize: 20,
  color: '#a3a380'
}

class CodePlayer {

  /**
   * @param {HtmlElement} el
   */
  constructor (el, options = initOptions) {
    if (!el) {
      throw Error('容器不存在')
    }
    this.container = el
    this.options = options
    const dpr = this.dpr = window.devicePixelRatio
    // 将画布放大dpr倍
    this.width = el.offsetWidth * dpr
    this.height = el.offsetHeight * dpr

    this._init()
  }
  _init () {
    const { container: el, width: w, height: h } = this
    let child = el.firstChild
    while (child) {
      el.removeChild(child)
      child = el.firstChild
    }

    const canvas = this.canvas = document.createElement('canvas')
    canvas.width = w
    canvas.height = h

    const ctx = this.ctx = canvas.getContext('2d')
    ctx.save()

    ctx.font = this.options.fontSize + 'px Menlo' // todo Menlo字体 window肯能没有
    this.step = ctx.measureText('A').width * this.dpr


    ctx.fillStyle = BgColor
    ctx.fillRect(0, 0, w, h)

    this._drawGrid()

    this._append()
  }

  _append() {
    // 将canvas元素缩小 1/dpr 倍
    const _scale = 1 / this.dpr
    this.canvas.style += `; transform: scale(${_scale}); transform-origin: 0 0;`
    this.container.style.overflow = 'hidden'

    this.container.appendChild(this.canvas)
  }

  _drawGrid () {
    const { ctx, width, height, step } = this
    ctx.restore()

    ctx.strokeStyle = GridLine.color
    ctx.lineWidth = GridLine.lineWidth
    ctx.setLineDash([4, 2])

    const maxVerticalLineCount = Math.floor(height / step)
    const maxHorizationLineCount = Math.floor(width / step)
    ctx.beginPath()
    for (let i = 1; i <= maxVerticalLineCount; i++) {
      ctx.moveTo(0, step * i)
      ctx.lineTo(width, step * i)
    }
    for (let i = 1; i <= maxHorizationLineCount; i++) {
      ctx.moveTo(step * i, 0)
      ctx.lineTo(step * i, height)
    }
    ctx.stroke()
  }

  /**
   * @param {string} code
   */
  run (code) {
    const { ctx, width, step } = this
    ctx.restore()
    ctx.setLineDash([])
    ctx.font = (this.options.fontSize * this.dpr) + 'px Menlo' // todo Menlo字体 window肯能没有
    ctx.fillStyle = 'yellow'
    ctx.fillText(code + '\n asldjfalsjf ', step, step, width - (2 * step))
  }



}


export default CodePlayer
