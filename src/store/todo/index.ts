import { ActionTree, GetterTree, Module, MutationTree } from "vuex"
import { RootState } from "../types"
import { TodoState } from "./types"

const state: TodoState = {
    category: "Tatca",
    listTodo: [],
    auth1: false
}
export enum TodoGetters{
    showCategory = "showCategory",
    showAuth = "showAuth"
}
const getters: GetterTree<TodoState,RootState> ={
    [TodoGetters.showCategory](): string {
        return state.category
    },
    [TodoGetters.showAuth](): boolean {
        return state.auth1
    }
}

export enum TodoMutations{
    CHANGE_CATEGORY = "CHANGE_CATEGORY",
    CHECK_AUTH = "CHECK_AUTH"
}
const mutations: MutationTree<TodoState> = {
    [TodoMutations.CHANGE_CATEGORY](state, payload:string){
        state.category = payload
    },
    [TodoMutations.CHECK_AUTH](state){
        state.auth1 = !state.auth1
    }
}

const actions:ActionTree<TodoState,RootState> ={
    changeCategory({commit}, text){
        commit("CHANGE_CATEGORY", text)
        
    },
    changeAuth({commit}){
        commit("CHECK_AUTH")
    }
}

export const todo: Module<TodoState, RootState> = {
    state, getters,mutations,actions
}