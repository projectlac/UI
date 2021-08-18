import axios from "axios"
import { ActionTree, GetterTree, Module, MutationTree } from "vuex"
import { RootState } from "../types"
import { TodoState } from "./types"
import { Title } from "../Object"
const state: TodoState = {
    
    listData: [],
    dataPost: [],
    detailPost: [],
    checkLoad: false
  
}
export enum TodoGetters{
    listData = "listData",
    dataPost = "dataPost",
    detailPost = "detailPost",
    checkLoad = "checkLoad"
}
const getters: GetterTree<TodoState,RootState> ={
    [TodoGetters.listData](): any {
        return state.listData
        
    },
    [TodoGetters.dataPost](): any {
        return state.dataPost
        
    },
    [TodoGetters.detailPost](): any {
        return state.detailPost
        
    },
    [TodoGetters.checkLoad](): any {
        return state.checkLoad
        
    },
  
}

export enum TodoMutations{
    GET_DATA = "GET_DATA",
    GET_DATAPOST = "GET_DATAPOST",
    GET_DETAILPOST = "GET_DETAILPOST",
    SET_LOADING = "SET_LOADING"
    

}
const mutations: MutationTree<TodoState> = {
    [TodoMutations.GET_DATA](state, payload:Array<Title>){
        state.listData = payload.map(p => p.title)
           

    },
    [TodoMutations.GET_DATAPOST](state, payload:any){
        state.dataPost = payload
           

    },
    [TodoMutations.GET_DETAILPOST](state, payload:any){
        state.detailPost = payload
           

    },
    [TodoMutations.SET_LOADING](state, payload:any){
        state.checkLoad = payload
      }
   
}

const actions:ActionTree<TodoState,RootState> ={
    async getData({commit}): Promise<Array<Object>> {
        try {
            
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            
            commit("GET_DATA", res.data)
            commit("GET_DATAPOST", res.data)
            // console.log(res.data)
            return res.data
        } catch (error) {
            console.log(error)
            throw error ;
        }
        
        
    },
    async getDetail({commit}, id): Promise<Array<Object>> {
        try {
            commit('SET_LOADING', true);
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            commit('SET_LOADING', false);
            commit("GET_DETAILPOST", res.data)
           
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