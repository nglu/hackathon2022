import { TEXT_STYLE } from './index.style'

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
    logger.debug('page build invoked')
    hmUI.createWidget(hmUI.widget.TEXT, {
      ...TEXT_STYLE,
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