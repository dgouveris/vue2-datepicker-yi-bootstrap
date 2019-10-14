/* eslint-disable no-new */
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import DatePicker from '@/index'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(DatePicker)

new Vue({
  el: '#app',
  data () {
    return {
      value1: new Date(),
      value2: '',
      value3: new Date(),
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: new Date(),
      value11: new Date(),
      value12: '',
      value13: '',
      range1: false,
      range2: false,

      rr: true,

      shortcuts: [
        {
          text: 'Εύρος',
          onClick: () => {
            //this.searchfields.docdate = [new Date(), new Date()]
            this.range1 = !this.range1;
            this.value2 = [new Date(), new Date()]

            if (this.range1) {
              this.shortcuts[0].text = "Ημερομηνία";
            }
            else {
              this.shortcuts[0].text = "Εύρος";
            }
          }
        }
      ],
      shortcuts1: [
        {
          text: 'Εύρος',
          onClick: () => {
            //this.searchfields.docdate = [new Date(), new Date()]
            this.range2 = !this.range2;
            this.value1 = [new Date(), new Date()]

            if (this.range2) {
              this.shortcuts1[0].text = "Ημερομηνία";
            }
            else {
              this.shortcuts1[0].text = "Εύρος";
            }
          }
        }
      ],
    }
  },
  methods: {
    getSource (obj) {
      return Object.keys(obj).map(key => {
        const value = obj[key]
        return (
          <section class="source">
            <label class="label">{key} : </label>
            {Vue.compile(value).render.call(this)}
          </section>
        )
      })
    },
    getPre (obj) {
      return Object.keys(obj).map(key => {
        const value = obj[key].replace(/\n/g, '').replace(/\s+/g, ' ')
        return (
          <pre class="pre">
            <code class="language-html">{value}</code>
          </pre>
        )
      })
    }
  },
  render (h) {
    const example1 = {
      'base': `<div>
        <date-picker v-model="value1" valueType="format" format="DD/MM/YYYY" lang="el" :range="rr" ></date-picker> 
        
        <button @click.submit.prevent="rr = !rr">fff</button>
        

        <b-container class="bv-example-row">
          <b-row>
            <b-col>
            
              <div>
                <b-input-group>
                  <date-picker 
                  inputClass="form-control"
                  v-model="value1" valueType="format" format="DD/MM/YYYY" lang="el" :range="rr" ></date-picker> 

                  <b-input-group-append>
                    <b-dropdown variant="outline-secondary">
                    <template slot="button-content">
                      
                    </template>

                      <b-dropdown-item>A</b-dropdown-item>
                      <b-dropdown-item>B</b-dropdown-item>
                    </b-dropdown>
                  </b-input-group-append>

                </b-input-group>
              </div>
            
            </b-col>
            <b-col>2 of 3</b-col>
            <b-col>
            
            
            <div>
              <b-input-group>
                <b-form-input></b-form-input>

                <b-input-group-append>
                  <b-dropdown text="Dropdown" variant="outline-secondary">
                    <b-dropdown-item>Action C</b-dropdown-item>
                    <b-dropdown-item>Action D</b-dropdown-item>
                  </b-dropdown>
                  </b-input-group-append>
              </b-input-group>
            </div>



  
            
            
            
            
            </b-col>
          </b-row>
        </b-container>

      
        
      
      </div>`
      // 'range': '<date-picker v-model="value2" :shortcuts="shortcuts" lang="el" :range="range1" valueType="format"></date-picker>',
      // 'month': '<date-picker v-model="value10" lang="en" type="month" format="YYYY-MM"></date-picker>',
      // 'year': '<date-picker v-model="value11" lang="en" type="year" format="YYYY"></date-picker>',
      // 'time': '<date-picker v-model="value12" lang="en" type="time" format="HH:mm:ss" placeholder="Select Time"></date-picker>'
    }
    // const example2 = {
    //   'datetime': `
    //     <date-picker
    //       v-model="value3"
    //       lang="en"
    //       type="datetime"
    //       format="[on] MM-DD-YYYY [at] HH:mm"></date-picker>`,
    //   'datetime with time-picker-options': `
    //     <date-picker
    //       v-model="value4"
    //       lang="en"
    //       type="datetime"
    //       appendToBody
    //       format="YYYY-MM-DD hh:mm:ss a"
    //       :time-picker-options="{
    //         start: '00:00',
    //         step: '00:30',
    //         end: '23:30'
    //       }"></date-picker>`,
    //   'datetime with minute-step': `
    //     <date-picker
    //       v-model="value9"
    //       lang="en"
    //       type="datetime"
    //       format="YYYY-MM-DD hh:mm:ss a"
    //       :minute-step="10"
    //       ></date-picker>`,
    //   'datetime with time-select-options': `
    //     <date-picker
    //       v-model="value13"
    //       lang="en"
    //       type="datetime"
    //       format="YYYY-MM-DD hh:mm:ss a"
    //       :time-select-options="{
    //         hours: [9, 10, 11, 12, 13, 14, 15, 16],
    //         minutes: [0, 10,20,30,40,50],
    //         seconds: []
    //       }"
    //       ></date-picker>`,
    //   'datetime range': `
    //     <date-picker
    //       v-model="value5"
    //       range
    //       type="datetime"
    //       lang="en"
    //       format="YYYY-MM-DD HH:mm:ss"></date-picker>`
    // }
    // const example3 = {
    //   'with confirm': `
    //     <date-picker
    //       v-model="value6"
    //       format="YYYY-MM-DD"
    //       lang="en"
    //       confirm></date-picker>`,
    //   'datetime with confirm': `
    //     <date-picker
    //       v-model="value7"
    //       type="datetime"
    //       lang="en"
    //       format="YYYY-MM-DD hh:mm:ss"
    //       confirm></date-picker>`,
    //   'range width confirm': `
    //     <date-picker
    //       v-model="value8"
    //       range
    //       lang="en"
    //       format="YYYY-MM-DD"
    //       confirm></date-picker>`
    // }
    const arr = [
      {
        exam: example1
      },
      // {
      //   exam: example2,
      //   tips: 'if you use the datetime, you should set the format to "YYYY-MM-DD HH:mm:ss" which default is "YYY-MM-DD'
      // },
      // {
      //   exam: example3,
      //   tips: 'Recommend to use the confirm option when the type is "datetime" or "range" is true'
      // }
    ]
    return (
      <div id="app">
        {arr.map(obj => (
          <div class="example">
            {this.getSource(obj.exam)}
            {
              obj.tips
                ? <blockquote class="tips">{obj.tips}</blockquote>
                : ''
            }
            {this.getPre(obj.exam)}
          </div>
        ))}
      </div>
    )
  }
})
