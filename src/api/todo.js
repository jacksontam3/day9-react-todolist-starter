import { instance } from "./interceptor";

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

export const update = async (newData) => {
        try {
            const response = await instance.put(`TodoItem/${newData.id}`, newData);
            return response.data;
        } catch (error) {
            throw error;
        }
}
