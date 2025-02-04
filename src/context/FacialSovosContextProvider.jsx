import { createContext} from "react";
import axios from "axios";

export const FacialSovosContext = createContext();

const SESSIONMANAGER_URL = "https://sandbox-api.7oc.cl/session-manager/v1";

const FacialSovosContextProvider = ({ children }) => {
    //const [dataSessionManager, setDataSessionManager] = useState([])


    // Obtiene sesion
    const SessionManager = async () => {
        try {
            let bodyFormData = new FormData();
            bodyFormData.append('apikey', '47335baad5434a5f80f108114e31dc00')
            bodyFormData.append('liveness','true')
            bodyFormData.append('autocapture','true')
            bodyFormData.append('mode','0')
            bodyFormData.append('fake_detector','true')

            axios({
                method: "post",
                url: SESSIONMANAGER_URL + "/session-id",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then(function (response) {
                //handle success
                console.log(response);
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