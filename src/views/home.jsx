import { useEffect } from "react";
import React from 'react'

const Home = () => {

    //const [dataCapturedToken, setDataCapturedToken] = useState("")
    //const [dataImage, setDataImage] = useState("")

    const CapturaDoc = async () => {
        try {
            TOCautocapture('containerautocaptura', {
            locale: "es",
            session_id: "SESSION ID HERE",
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