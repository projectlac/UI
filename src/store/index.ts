import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import { todo } from './todo'


Vue.use(Vuex)

const store: StoreOptions<RootState> = {
    state:{
        auth:false
    },
    modules:{
        todo
    }
}
export default new Vuex.Store<RootState>(store)