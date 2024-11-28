import Category from "../components/Category"
import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

// api to add video
export const addVideoApi = async(reqBody)=>{
    return await commonApi("POST",`${serverUrl}/videos`,reqBody)
}

// api to get video
export const getVideoApi = async()=>{
    return await commonApi("GET",`${serverUrl}/videos`,"")
}

// api to remove a video
export const removeVideo = async(id)=>{
    return await commonApi("DELETE", `${serverUrl}/videos/${id}`,{})
}

// api to add video to history
export const addHistory = async(reqBody)=>{
    return await commonApi("POST",`${serverUrl}/history`,reqBody)
}

// api to get alla videos from history 
export const getAllVideoHistoryApi = async()=>{
    return await commonApi("GET",`${serverUrl}/history`,"")
}

// api to delete history 
export const deleteHistoryVideoApi = async(id)=>{
    return await commonApi("DELETE",`${serverUrl}/history/${id}`,{})
}

// Api to Add category
export const addCategoryApi = async(reqBody)=>{
    return await commonApi("POST", `${serverUrl}/category`, reqBody)
}

// Api to get category 
export const getAddCategoryApi = async()=>{
    return await commonApi("GET", `${serverUrl}/category`, "")
}

// api to delete category 
export const deletCategoryApi = async(id)=>{
    return await commonApi("DELETE",`${serverUrl}/category/${id}`, {})
}

// api to update category
export const updateCategoryApi = async(Categoryid, reqBody)=>{
    return await commonApi("PUT",`${serverUrl}/category/${Categoryid}`,reqBody)
}