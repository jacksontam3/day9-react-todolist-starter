import axios from "axios";

export const instance = axios.create({
    baseURL: "https://67495c7c868020296630aaa8.mockapi123.io/api/v1/"
});

instance.interceptors.request.use(
    (config) => {
        config.metadata = { startTime: new Date() };
        console.log("request", config);
        return config;
    },
    (error) => {
        if(error.response && error.response.status === 404) {
          window.location.href = "/not-found";
        }

        console.log("request error", error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        const endTime = new Date();
        const duration = endTime - response.config.metadata.startTime;
        console.log("response", response);
        console.log(`Request duration: ${duration} ms`);
        return response;
    },
    (error) => {
        const endTime = new Date();
        const duration = endTime - error.config.metadata.startTime;
        console.log("response error", error);
        console.log(`Request duration: ${duration} ms`);
        return Promise.reject(error);
    }
);
