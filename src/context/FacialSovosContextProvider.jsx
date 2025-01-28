import { createContext, useEffect, useState} from "react";
import axios from "axios";

export const FacialSovosContext = createContext();

const SESSIONMANAGER_URL = "https://sandbox-api.7oc.cl/session-manager/v1";

const FacialSovosContextProvider = ({ children }) => {
    const [dataSessionManager, setDataSessionManager] = useState([])


    // Obtiene sesion
    const SessionManager = async () => {
        try {
            axios
            .post(SESSIONMANAGER_URL + "/session-id", {"apiKey":"243db1a158254a0992e3f81aee6e3202", "liveness":"true","autocapture": "true", "mode": "0", "fake_detector":"true"})
            .then((response) => {
                setDataSessionManager(response.data);
                console.log(dataSessionManager)
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        SessionManager()
    }, [])

    return (
        <FacialSovosContext.Provider value={{dataSessionManager}}>
            {children}
        </FacialSovosContext.Provider>
    );
}

export default FacialSovosContextProvider