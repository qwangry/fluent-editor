import Quill from 'quill'
import { BubbleTooltip } from 'quill/themes/bubble'
import LinkBlot from './formats/link'
import Tooltip from './modules/tooltip'

const icons = Quill.import('ui/icons')
const SnowTheme = Quill.import('themes/snow')
const BubbleTheme = Quill.import('themes/bubble')
const Module = Quill.import('core/module')

// @dynamic
class Link extends Module {
  static register() {
    Quill.register('blots/link', LinkBlot, true)
  }

  constructor(quill, options) {
    super(quill, options)
  }
}

// @ts-expect-error
SnowTheme.prototype.extendToolbar = function (toolbar) {
  console.log('SnowTheme Toolbar...', toolbar)
  toolbar.container.classList.add('ql-snow')
  this.buildButtons(toolbar.container.querySelectorAll('button'), icons)
  this.buildPickers(toolbar.container.querySelectorAll('select'), icons)
  this.tooltip = new Tooltip(this.quill, this.options.bounds)
  if (toolbar.container.querySelector('.ql-link')) {
    this.quill.keyboard.addBinding(
      { key: 'k', shortKey: true },
      (_range, context) => {
        toolbar.handlers.link.call(toolbar, !context.format.link)
      },
    )
  }
}

// @ts-expect-error
BubbleTheme.prototype.extendToolbar = function (toolbar) {
  console.log('BubbleTheme Toolbar...', toolbar)
  toolbar.container.classList.add('ql-bubble')
  this.tooltip = new BubbleTooltip(this.quill, this.options.bounds)
  this.tooltip.root.appendChild(toolbar.container)
  this.buildButtons(toolbar.container.querySelectorAll('button'), icons)
  this.buildPickers(toolbar.container.querySelectorAll('select'), icons)
}

export default Link
