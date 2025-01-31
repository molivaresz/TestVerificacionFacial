import React from 'react'

const Home = () => {

    //const [dataCapturedToken, setDataCapturedToken] = useState("")
    //const [dataImage, setDataImage] = useState("")

    const CapturaDoc = async (IdSesion) => {
        try {
            TOCautocapture('containerautocaptura', {
            locale: "es",
            session_id: IdSesion,
            document_type: "CHL2",
            document_side: "front",
            callback: function(captured_token, image){ alert(captured_token); },
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
                <label className="form-label">ID Sesion</label>
                <input type="text" className="form-control" id="IdSesion" />
            </div>
            <button type="button" onClick={() => CapturaDoc(document.getElementById("IdSesion").value)} className="btn btn-secondary">Captura Front</button>
        </form>    
    </div>

    <div className="cuadrocaptura" id='containerautocaptura'></div>
    </>
    )
}

export default Home