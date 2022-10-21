import * as hmUI from '@zos/ui'
import { log as Logger } from '@zos/utils'
import { TEXT_STYLE } from './index.style'
import { HeartRate } from '@zos/sensor'
import { Stress } from '@zos/sensor'
import { Vibrator, VIBRATOR_SCENE_TIMER } from '@zos/sensor'
import { createWidget, widget, align, prop, text_style } from '@zos/ui'

const logger = Logger.getLogger('anxietyrelief')

// Heart Sensor initiated, permissions added in app.json
const heartRate = new HeartRate()
const lastValue = heartRate.getLast()

// Stress Sensor initiated, permissions added in app.json
const stress = new Stress()
const { stressVal } = stress.getCurrent()

// const callback = () => {
//   console.log(stress.getCurrent())
// }

// Vibrate function initiated
const vibrate = new Vibrator()

function click () {
  vibrate.stop()
  vibrate.setMode(VIBRATOR_SCENE_TIMER)
  if(lastValue >= 1){
    vibrate.start()
  }
}

Page({
  build() {
    logger.debug('page build invoked')
    hmUI.createWidget(hmUI.widget.TEXT, {
      ...TEXT_STYLE,
    })
    const hrt = createWidget(widget.TEXT, {
      x: 96,
      y: 140,
      w: 288,
      h: 46,
      color: 0xffffff,
      text_size: 36,
      align_h: align.CENTER_H,
      align_v: align.TOP,
      text_style: text_style.NONE,
      text: 'Pulse: ' + lastValue
    })

    const sts = createWidget(widget.TEXT, {
      x: 96,
      y: 200,
      w: 288,
      h: 46,
      color: 0xffffff,
      text_size: 36,
      align_h: align.CENTER_H,
      align_v: align.TOP,
      text_style: text_style.NONE,
      text: 'Stress: ' + stressVal
    })
  },
  onInit() {
    logger.debug('page onInit invoked')
    //stress.onChange(callback)
    click()
  },

  onDestroy() {
    logger.debug('page onDestroy invoked')
    // When not needed for use
    //stress.offChange(callback)
    vibrate && vibrate.stop()
  },
})