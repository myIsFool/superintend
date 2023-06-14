import axios from "axios"

const service=axios.create({
    baseURL:'http://192.168.5.235:9004'
})
export default service