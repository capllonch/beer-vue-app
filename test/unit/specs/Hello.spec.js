import Vue from 'vue'
import HelloWorld from '../../../src/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toBe('Welcome to Your Vue.js App')
  })
  it('should render to snapshot', () => {
    const renderer = require('vue-server-renderer').createRenderer()
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(HelloWorld)
    })
    renderer.renderToString(vm, (err, str) => {
      expect(str).toMatchSnapshot()
    })
  })
})
