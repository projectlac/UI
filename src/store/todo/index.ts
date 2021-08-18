import axios from "axios"
import { ActionTree, GetterTree, Module, MutationTree } from "vuex"
import { RootState } from "../types"
import { TodoState } from "./types"
import { Title } from "../Object"
const state: TodoState = {
    
    listData: []
  
}
export enum TodoGetters{
    listData = "listData",
    
}
const getters: GetterTree<TodoState,RootState> ={
    [TodoGetters.listData](): any {
        return state.listData
        
    },
  
}

export enum TodoMutations{
    GET_DATA = "GET_DATA",

}
const mutations: MutationTree<TodoState> = {
    [TodoMutations.GET_DATA](state, payload:Array<Title>){
        state.listData = payload.map(p => p.title)
           

    },
   
}

const actions:ActionTree<TodoState,RootState> ={
    async getData({commit}): Promise<Array<Object>> {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            commit("GET_DATA", res.data)
            // console.log(res.data)
            return res.data
        } catch (error) {
            console.log(error)
            throw error ;
        }
        
        
    },
    
}

export const todo: Module<TodoState, RootState> = {
    state, getters,mutations,actions
}