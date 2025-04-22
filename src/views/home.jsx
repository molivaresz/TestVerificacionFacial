import React from 'react'


const Home = () => {

    const CapturaDoc = async (env_facial,IdSesion,caracedula) => {
        try {
            alert("env_facial: " + env_facial)
            if (env_facial == "s") {
                TOCautocapture('containerautocaptura', {
                    locale: "es",
                    session_id: IdSesion,
                    document_type: "CHL2",
                    document_side: caracedula,
                    callback: function(captured_token, image)
                    { caracedula == "front" ? 
                        document.getElementById("Tfront").value = captured_token : 
                        document.getElementById("Tback").value = captured_token },
                    failure: function(error){ alert(error); }
                });
            } 
            else {
                TOCautocapture('containerautocaptura', {
                    locale: "es",
                    session_id: IdSesion,
                    document_type: "CHL2",
                    document_side: caracedula,
                    callback: function(captured_token, image)
                    { caracedula == "front" ? 
                        document.getElementById("Tfront").value = captured_token : 
                        document.getElementById("Tback").value = captured_token },
                    failure: function(error){ alert(error); },
                    alt_server: "https://prod-capture.tocws.com",
                    url_lbac: "https://prod-api.7oc.cl/auto-capture/data/v2"
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const Selfie = async (env_facial,IdSesion) => {
        try {
            if (env_facial == "s") {
                TOCliveness('containerautocaptura', {
                    locale: "es",
                    session_id: IdSesion,
                    callback: function(liveness_token){ document.getElementById("Tliveness").value = liveness_token },
                    failure: function(error){ alert(error); }
                });
            } else {
                TOCliveness('containerautocaptura', {
                    locale: "es",
                    session_id: IdSesion,
                    callback: function(liveness_token){ document.getElementById("Tliveness").value = liveness_token },
                    failure: function(error){ alert(error); },
                    alt_server: "https://prod-liveness.tocws.com",
                    url_lbliv: "https://prod-api.7oc.cl/liveness/image-saver/v1"
                });
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
    <>
    <div className='col container-fluid d-flex justify-content-evenly pt-5 ps-5'>
        <form>
            <div className="mb-3">
                <select className="form-select" id='envselect'>
                    <option value="s" selected>Sandbox</option>
                    <option value="p">Produccion</option>
                </select>            
            </div>
        </form>
        <form>
            <div className="mb-3">
                <h2>AUTOCAPTURA</h2>
                <label className="form-label">ID Sesion</label>
                <input type="text" className="form-control" id="IdSesion" />
                <label className="form-label">Token Front</label>
                <input type="text" className="form-control" id="Tfront" />
                <label className="form-label">Token Back</label>
                <input type="text" className="form-control" id="Tback" />
            </div>
            <button type="button" onClick={() => CapturaDoc(document.getElementById("envselect").value,document.getElementById("IdSesion").value,"front")} className="btn btn-outline-primary m-2">Captura Front</button>
            <button type="button" onClick={() => CapturaDoc(document.getElementById("envselect").value,document.getElementById("IdSesion").value,"back")} className="btn btn-outline-warning">Captura Back</button>
        </form>    
        <form>
            <div className="mb-3">
                <h2>LIVENESS</h2>
                <label className="form-label">Token Liveness</label>
                <input type="text" className="form-control" id="Tliveness" />
            </div>
            <button type="button" onClick={() => Selfie(document.getElementById("envselect").value,document.getElementById("IdSesion").value)} className="btn btn-outline-info m-2">Liveness</button>
        </form>
    </div>

    <div className="cuadrocaptura" id='containerautocaptura'></div>
    </>
    )
}

export default Home