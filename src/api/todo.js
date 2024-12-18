import { instance } from "./interceptor";

export const getTodoList = async () => {
    const response = await instance.get("TodoItem");
    return response.data.result;
}

export const getTodoById = async (id) => {
    const response = await instance.get(`TodoItem/${id}`);
    return response.data.result;
}

export const addTodoList = async (newData) => {
    const response = await instance.post("TodoItem", newData);
    return response.data.result;
}

export const deleteById = async (id) => {
    try {
        const response = await instance.delete(`TodoItem/${id}`);
        return response.data.result;
    } catch (error) {
        throw error;
    }
}

export const update = async (newData) => {
        try {
            const response = await instance.put(`TodoItem/${newData.id}`, newData);
            return response.data.result;
        } catch (error) {
            throw error;
        }
}
