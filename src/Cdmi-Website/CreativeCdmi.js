



function Creative(props) {
    return (
        <>
            <div className="read space-y">
                <div className="container">
                    <div className="heading text-center">
                        <span className="sub_title">READ OUR DIFFERNCE</span>
                        <h2>WHY CHOOSE CREATIVE</h2>
                    </div>
                    <div className="row d-flex">
                        {
                            props.creative.map((ele) => {
                                return (
                                    <div className="box2">
                                        <div className="img">
                                            <img src={ele.icon} style={ele.css} alt="" />
                                        </div>
                                        <div className="desc">
                                            <h5>{ele.hed}</h5>
                                            <p>{ele.prg}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>

            {/*  Creative Section End */}
        </>
    )
}
export default Creative;