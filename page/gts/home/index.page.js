import * as hmUI from '@zos/ui'
import { log as Logger } from '@zos/utils'
import { TEXT_STYLE } from './index.style'
import { createWidget, widget, align, prop, text_style } from '@zos/ui'

const logger = Logger.getLogger('anxietyrelief')

Page({
  build() {
    logger.debug('page build invoked')
    hmUI.createWidget(hmUI.widget.TEXT, {
      ...TEXT_STYLE,
    })
    const text = createWidget(widget.TEXT, {
      x: 96,
      y: 120,
      w: 288,
      h: 46,
      color: 0xffffff,
      text_size: 36,
      align_h: align.CENTER_H,
      align_v: align.TOP,
      text_style: text_style.NONE,
      text: 'Text Widget'
    })
  },
  onInit() {
    logger.debug('page onInit invoked')
  },

  onDestroy() {
    logger.debug('page onDestroy invoked')
  },
})