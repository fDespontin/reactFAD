
import React from "react"
import TopBar from "../components/TopBar"
import ContentRowTop from "../components/ContentRowTop"
import Footer from "../components/Footer"
import Chart from "../components/Chart"

function ContentWrapper (){

    return(
       
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar />
                <ContentRowTop />
                <Chart />
                <Footer />
            </div>    
        </div>
    )
}

export default ContentWrapper
		



   