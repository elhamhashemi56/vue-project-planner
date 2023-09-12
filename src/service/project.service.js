import axios from "axios"

const baseUrl="http://localhost:3000"

export const ProjectsService={

    getProjects(){
        return axios.get(baseUrl + "/projects")
    },

    getProjectMitId(id){
        return axios.get(baseUrl + "/projects"+ `/${id}`)
    },

    addProject(newProject){
        return axios.post(baseUrl + "/projects" , newProject)
    },

    deleteProject(id){
        return axios.delete(baseUrl + "/projects" + `/${id}`)
    },

    updateProject(id,body){
        return axios.put(baseUrl + "/projects"+ `/${id}`,body)
    },
    updateProjectDone(id,body){
        return axios.patch(baseUrl + "/projects"+ `/${id}`,body)
    }

}