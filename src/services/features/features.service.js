import axios from "@/libs/axios.lib.js";

const API_BACKEND_EARTH_QUAKE = import.meta.env.VITE_API_EARTH_QUAKE_BACKEND
export const paginateFeatures = async (params) => {
    return await axios.get(`${API_BACKEND_EARTH_QUAKE}/api/features`, {
        params: {
            ...params
        }
    })
}

export const saveCommentFeature = async (featureId, data) => {
    return await axios.post(`${API_BACKEND_EARTH_QUAKE}/api/features/${featureId}/comments`, data, {})
}