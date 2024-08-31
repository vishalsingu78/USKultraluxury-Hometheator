import React from "react"
import "./3dcode.css"

const CodeCanvas = () => {
    return (
        <section id="3dpage">
            <div className="mainpage3d">
                <h1 className="heading3d">Home Theator 3D View</h1>
                <div class="et_pb_section et_pb_section_2 et_pb_fullwidth_section et_section_regular et_section_transparent">
                    <div class="et_pb_module et_pb_fullwidth_code et_pb_fullwidth_code_0">
                        <div class="et_pb_code_inner">
                            <div id="HomeTheater" class="iframe-wrapper">
                                <iframe class="-iframe" src="https://theaters.audioadvice.com/rooms?brand=jbl" allowfullscreen="true"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CodeCanvas