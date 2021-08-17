export interface Provider {
    id: number,
    content: string,
    name: string,
    avatar: string,
    color: any,
    like:number,
    hasLike:boolean
}
export interface listCategory{
    icon: string,
    title: string,
    url: string
}
export interface Item{
    category: string
    list: Array<listCategory>
}
export interface AppsInYourPlan{
    id:number,
    name: string,
    description: string,
    checkbox1:any,
    checkbox2:any,
    isLoading:boolean,
    dialog:boolean
}