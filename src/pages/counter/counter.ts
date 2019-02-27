import { Component, Emit, Vue } from 'vue-property-decorator'
import { AppUrls } from '@/utils/consts.ts'
// Use Vuex
import store from './store'
const debug = require('debug')('log:Page/Counter')

@Component
export default class Counter extends Vue {
  AppUrls = AppUrls

  // computed  写法一
  // get count () {   //写法二
  //   return store.state.count
  // }

  count:number=0
  increment() {
    debug('hello4')
    store.commit('increment');
    this.count=store.state.count;  //写法三
  }

  decrement() {
    store.commit('decrement')
    this.count=store.getters.getCount;  //写法四
  }
}
