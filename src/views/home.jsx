import React from 'react'

const Home = () => {

    //const [dataCapturedToken, setDataCapturedToken] = useState("")
    //const [dataImage, setDataImage] = useState("")

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
            TOCautocapture('containerautocaptura', {
            locale: "es",
            session_id: IdSesion,
            callback: function(liveness_token, image){ document.getElementById("Tliveness").value = liveness_token },
            failure: function(error){ alert(error); }
        });
        } catch (error) {
            console.log(error);
        }
    };


    return (
    <>
    <div className='col container-fluid d-flex pt-5 ps-5'>
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
            <button type="button" onClick={() => CapturaDoc(document.getElementById("IdSesion").value,"front")} className="btn btn-outline-blue-800 m-2">Captura Front</button>
            <button type="button" onClick={() => CapturaDoc(document.getElementById("IdSesion").value,"back")} className="btn btn-outline-cyan-800">Captura Back</button>
        </form>    
        <form>
            <div className="mb-3">
                <h2>LIVENESS</h2>
                <label className="form-label">ID Sesion</label>
                <input type="text" className="form-control" id="IdSesion" />
                <label className="form-label">Token Liveness</label>
                <input type="text" className="form-control" id="Tliveness" />
            </div>
            <button type="button" onClick={() => Selfie(document.getElementById("IdSesion").value)} className="btn btn-outline-green-800 m-2">Liveness</button>
        </form>
    </div>

    <div className="cuadrocaptura" id='containerautocaptura'></div>
    </>
    )
}

export default Home