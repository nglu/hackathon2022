import { TEXT_STYLE } from './index.style'

// Heart Rate
const heart = hmSensor.createSensor(hmSensor.id.HEART)
console.log(heart.last)

const logger = DeviceRuntimeCore.HmLogger.getLogger('helloworld')
const vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE)

const hrLastListener = function () {
  console.log(heart.last)
  if (heart.last >= 1) {
    click()
    logger.log(heart.last)
  }
}

heart.addEventListener(heart.event.LAST, hrLastListener)

function click() {
  vibrate.stop()
  vibrate.scene = 5
  vibrate.start()
}



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

    text.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
      text.setProperty(hmUI.prop.MORE, {
        y: 200
      })
    })
  },
  onInit() {
    logger.debug('page onInit invoked')
  },

  onDestroy() {
    vibrate && vibrate.stop()
    heart.removeEventListener(heart.event.LAST, hrLastListener)
  },
})