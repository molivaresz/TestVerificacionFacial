import { createContext, useState} from "react";
import axios from "axios";

export const FacialSovosContext = createContext();

const SESSIONMANAGER_URL = "https://sandbox-api.7oc.cl/session-manager/v1";

const FacialSovosContextProvider = ({ children }) => {
    //const [dataSessionManager, setDataSessionManager] = useState([])


    // Obtiene sesion
    const SessionManager = async () => {
        try {
            axios
            .post(SESSIONMANAGER_URL + "/session-id", {"apiKey":"47335baad5434a5f80f108114e31dc00", "liveness":"true","autocapture": "true", "mode": "0", "fake_detector":"true"})
            .then((response) => {
                //setDataSessionManager(response.data);
                console.log(response.data)
                return response.data
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <FacialSovosContext.Provider value={{SessionManager}}>
            {children}
        </FacialSovosContext.Provider>
    );
}

export default FacialSovosContextProvider