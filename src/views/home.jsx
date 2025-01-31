import { useEffect } from "react";
import React from 'react'

const Home = () => {

    //const [dataCapturedToken, setDataCapturedToken] = useState("")
    //const [dataImage, setDataImage] = useState("")

    const CapturaDoc = async () => {
        try {
            TOCautocapture('containerautocaptura', {
            locale: "es",
            session_id: "7027fe5498654b9e956ec32a649d2de4",
            document_type: "CHL2",
            document_side: "front",
            callback: function(captured_token, image){ alert(token); },
            failure: function(error){ alert(error); }
        });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        CapturaDoc()
    }, [])

    return (
    <>
        <div id='containerautocaptura'></div>
    </>
    )
}

export default Home