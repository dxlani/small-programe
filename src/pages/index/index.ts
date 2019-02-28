import { Vue, Component } from 'vue-property-decorator'
import { AppUrls } from '@/utils/consts.ts'
import Card from '@/components/card.vue' // mpvue目前只支持的单文件组件
import CompB from '@/components/compb.vue' // mpvue目前只支持的单文件组件

const debug = require('debug')('log:Index')

// 必须使用装饰器的方式来指定component
@Component({
  components: {
    Card,
    CompB, //注意，vue的组件在template中的用法，`CompB` 会被转成 `comp-b`
  }
})
class Index extends Vue {
  AppUrls = AppUrls
  ver: number = 123
  dxl:Array<string>=[];
  iconSize:Array<number>=[20, 30, 40, 50, 60, 70]
  iconColor:Array<string>= [
    'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
  ]
  iconType:Array<string>= [
    'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
  ]
  onShow() { // 小程序 hook
    debug('onShow')
  }
  
  mounted() { // vue hook
    debug('mounted')
    this.dxl=['1','2','3']
    this.iconSize=[20, 30, 40, 50, 60, 70]
    this.iconColor= [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ]
    this.iconType= [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ]
    
  }
   testclick(){
    console.log('点击了')
    wx.navigateTo({
      url:'../counter/main'
    })
  }
}

export default Index
