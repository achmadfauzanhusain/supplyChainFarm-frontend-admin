import axios from "axios";
import callApi from "@/config/api";

const ROOT_API = "https://tblo-server.vercel.app";
const API_VERSION = "api/v1";

export async function notRegisteredSuppliers() {
    const url = `${ROOT_API}/${API_VERSION}/supplier/not-registered`;
    return await callApi({
        url,
        method: "GET",
    });
}

export async function registeredSuppliers() {
    const url = `${ROOT_API}/${API_VERSION}/supplier/registered`;
    return await callApi({
        url,
        method: "GET",
    });
}

export async function detailSupplier(address) {
    const url = `${ROOT_API}/${API_VERSION}/supplier/detail/${address}`;
    return await callApi({
        url,
        method: "GET",
    });
}

export async function changeStatus(data) {
    const url = `${ROOT_API}/${API_VERSION}/supplier/change-status`;
    return await callApi({
        url,
        method: "PATCH",
        data,
    });
}

export async function deleteSupplier(data) {
    const url = `${ROOT_API}/${API_VERSION}/supplier/delete`;
    return await callApi({
        url,
        method: "DELETE",
        data,
    });
}