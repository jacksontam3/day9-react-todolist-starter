import axios from "axios";


const instance = axios.create({
    baseURL: "https://67495c7c868020296630aaa8.mockapi.io/api/v1/"
});

export const getTodoList = async () => {
    const response = await instance.get("TodoItem");
    return response.data;
}

export const addTodoList = async (newData) => {
    const response = await instance.post("TodoItem", newData);
    return response.data;
}

export const deleteById = async (id) => {
    try {
        const response = await instance.delete(`TodoItem/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
