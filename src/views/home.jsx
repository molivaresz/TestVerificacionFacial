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

    return (
    <>
    <div className='col container-fluid d-flex pt-5 ps-5'>
        <h1>AUTOCAPTURA</h1>
        <form>
            <div className="mb-3">
                <label className="form-label">ID Sesion</label>
                <input type="text" className="form-control" id="IdSesion" />
                <label className="form-label">Token Front</label>
                <input type="text" className="form-control" id="Tfront" />
                <label className="form-label">Token Back</label>
                <input type="text" className="form-control" id="Tback" />
            </div>
            <button type="button" onClick={() => CapturaDoc(document.getElementById("IdSesion").value,"front")} className="btn btn-outline-primary p-2">Captura Front</button>
            <button type="button" onClick={() => CapturaDoc(document.getElementById("IdSesion").value,"back")} className="btn btn-outline-info">Captura Back</button>
        </form>    
    </div>

    <div className="cuadrocaptura" id='containerautocaptura'></div>
    </>
    )
}

export default Home