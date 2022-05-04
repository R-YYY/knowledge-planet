import axios from "../index";

export function addActivity(data) {
    return axios({
        method: 'POST',
        url: '/activity/addActivity',
        data: data
    })
}

export function getActivity(planetId) {
    return axios({
        method: 'GET',
        url: '/activity/getActivity/'+planetId,
    })
}

export function checkActivity(activityId,checkInfo,checkResult) {
    let formData = new FormData()
    formData.append('activityId',activityId)
    formData.append('checkInfo',checkInfo)
    formData.append('checkResult',checkResult)
    return axios({
        method: 'POST',
        url: '/activity/checkActivity',
        data:formData
    })
}