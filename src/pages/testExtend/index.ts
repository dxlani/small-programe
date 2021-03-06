import { Vue, Component, Mixins } from 'vue-property-decorator'
import { AppUrls } from '@/utils/consts.ts'
import BaseComp from './base'

const debug = require('debug')('log:Index')

// 必须使用装饰器的方式来指定component
@Component
class Index extends Mixins(BaseComp) {
  testFun2(){
    console.log('testFun2')
  }
  onShow() { // 小程序 hook
    debug('onShow')
  }
  dxl:Array<string>=[];
  mounted() { // vue hook
    debug('mounted')
    this.dxl=['1','2','3']
  }
}

export default Index
