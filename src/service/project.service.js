import axios from "axios"

const baseUrl="http://localhost:3000"

export const ProjectsService={

    getProjects(){
        return axios.get(baseUrl + "/projects")
    },

    addProject(newProject){
        return axios.post(baseUrl + "/projects" , newProject)
    },

    deleteProject(id){
        return axios.delete(baseUrl + "/projects" + `/${id}`)
    }

}