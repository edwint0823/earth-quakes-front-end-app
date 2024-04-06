import axios from "axios";
import Swal from "sweetalert2";
import {errorMessages, HttpStatus} from "@/core/constants.js";


axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const {status} = error.response;
        if (status === HttpStatus.BAD_REQUEST) {
            Swal.fire({
                icon: "warning",
                title: errorMessages.validationFieldsError,
                text: error.response.data.error,
            });
        } else if (status === HttpStatus.UNPROCESSABLE_ENTITY) {
            Swal.fire({
                icon: "warning",
                title: errorMessages.unprocessableEntityError,
                text: error.response.data.error,
            });
        } else if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
            Swal.fire({
                icon: "warning",
                title: errorMessages.internalServerError,
                text: error.response.data.error,
            });
        }
        return Promise.reject(error);
    },
);

export default axios;
