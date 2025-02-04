import React from 'react'
import { useContext } from 'react';
import { FacialSovosContext } from '../context/FacialSovosContextProvider';

const Home = () => {

    const {SessionManager} = useContext(FacialSovosContext)

    const CapturaDoc = async (IdSesion,caracedula) => {
        try {
            TOCautocapture('containerautocaptura', {
                locale: "es",
                session_id: IdSesion,
                document_type: "CHL2",
                document_side: caracedula,
                callback: function(captured_token, image){ caracedula == "front" ? document.getElementById("Tfront").value = captured_token : document.getElementById("Tback").value = captured_token },
                failure: function(error){ alert(error); }
        });
        } catch (error) {
            console.log(error);
        }
    };

    const Selfie = async (IdSesion) => {
        try {
            TOCliveness('containerautocaptura', {
                locale: "es",
                session_id: IdSesion,
                callback: function(liveness_token){ document.getElementById("Tliveness").value = liveness_token },
                failure: function(error){ alert(error); }
        });
        } catch (error) {
            console.log(error);
        }
    };


    return (
    <>
    <div className='col container-fluid d-flex justify-content-evenly pt-5 ps-5'>
        <form>
            <div className="mb-3">
                <h2>AUTOCAPTURA</h2>
                <label className="form-label">ID Sesion</label>
                <input type="text" className="form-control" id="IdSesion" />
                <button type="button" onClick={() => SessionManager()} className="btn btn-outline-light m-2">ID Session</button>
                <label className="form-label">Token Front</label>
                <input type="text" className="form-control" id="Tfront" />
                <label className="form-label">Token Back</label>
                <input type="text" className="form-control" id="Tback" />
            </div>
            <button type="button" onClick={() => CapturaDoc(document.getElementById("IdSesion").value,"front")} className="btn btn-outline-primary m-2">Captura Front</button>
            <button type="button" onClick={() => CapturaDoc(document.getElementById("IdSesion").value,"back")} className="btn btn-outline-warning">Captura Back</button>
        </form>    
        <form>
            <div className="mb-3">
                <h2>LIVENESS</h2>
                <label className="form-label">Token Liveness</label>
                <input type="text" className="form-control" id="Tliveness" />
            </div>
            <button type="button" onClick={() => Selfie(document.getElementById("IdSesion").value)} className="btn btn-outline-info m-2">Liveness</button>
        </form>
    </div>

    <div className="cuadrocaptura" id='containerautocaptura'></div>
    </>
    )
}

export default Home