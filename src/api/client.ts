import axios from "axios";
import Pepper from "../interfaces/PepperInterface.ts";
import PepperSpecificationsEnum from "../utils/PepperSpecificationsEnum.ts";

const backendUrl: string = import.meta.env.VITE_BACKEND_URL;

export async function getAllPeppers() {
    const response = await axios.get(backendUrl + '/api/peppers/getAll');
    return response.data;
}

export async function deletePepper(uuid: string) {
    const response = await axios.delete(backendUrl + '/api/peppers/deleteByUUid/' + uuid);
    return response.data;
}

export async function fetchPeppers(setPeppers: (pepperData: Pepper[]) => void) {
    const peppersData: Pepper[] = await getAllPeppers();
    setPeppers(peppersData);
}

export async function getPepper(uuid: string) {
    const response = await axios.get(backendUrl + `/api/peppers/getByUuid/${uuid}`);
    return response.data;
}

export async function deletePepperHandler(uuid: string, setPeppers: (pepperData: Pepper[]) => void) {
    await deletePepper(uuid);
    await fetchPeppers(setPeppers);
}

function checkSpecifications(pepper: Pepper): boolean {
    console.log("COUCOUCOCUC " + pepper.specifications.length);
    if (pepper.specifications.length === 0) {
        return true;
    }
    const specs: string[] = pepper.specifications.split(";");
    for (const spec of specs) {
        if (!Object.keys(PepperSpecificationsEnum).includes(spec)) {
            console.error(`Invalid specification: ${spec}`);
            return false;
        }
    }
    return true;
}

export async function updatePepper(pepper: Pepper) {
    if (!checkSpecifications(pepper)) {
        console.error(`Invalid specification while updating for pepper: ${pepper}`);
        return false;
    }
    const response = await axios.put(backendUrl + '/api/peppers/update/' + pepper.uuid, pepper);
    return response.data;
}
