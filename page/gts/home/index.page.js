import * as hmUI from '@zos/ui'
import { log as Logger } from '@zos/utils'
import { TEXT_STYLE } from './index.style'
import { HeartRate } from '@zos/sensor'

const heartRate = new HeartRate()

const callback = () => {
  console.log(heartRate).getLast()
}

calorie.onLastChange(callback)

Page({
  build() {
    const text = hmUI.createWidget(hmUI.widget.TEXT, {
      x: px(96),
      y: px(120),
      w: px(288),
      h: px(46),
      color: 0xffffff,
      text_size: 36,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: "Heart Rate: " + heart.last
    })
  },
  onInit() {
    logger.debug('page onInit invoked')
  },

  onDestroy() {
    logger.debug('page onDestroy invoked')
  },
})