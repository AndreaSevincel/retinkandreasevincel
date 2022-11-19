import React from 'react';

export default function Grid1() {
    return(
        <div class="container">
            <div class="item grid1">
                <img id='img1' src={require("./icongrid11.jpg")} />
                <h3 id='tgrid1'>Make Ai-Assisted Content Choices</h3>
                <p id='paragrid1'>Access and Order from an extensive
                    catalogue in any language and on
                    your budget's terms. If unsure, our AI
                    guides you to the best.</p>
            </div>

            <div class="item grid2">
                <img id='img2' src={require("./icongrid12.jpg")} />
                <h3 id='tgrid2'>Upload and Maintain your Brand Identity</h3>
                <p id='paragrid2'>
                    Add your preferences and brand assests to
                    ensure the contents are consistent with your
                    brand Identity. No brand asset? We can make
                    one for you!
                </p>

            </div>

            <div class="item grid3">
                <img id='img3' src={require("./icongrid13.jpg")} />
                <h3 id='tgrid3'>Be informed as we create</h3>
                <p id='paragrid3'>
                    Your details are translated
                    and sent to the AI, FP, or both (per
                    your choice) as you relax and
                    receive continuous updates.
                </p>
            </div>

            <div class="item grid4">
                <img id='img4' src={require("./icongrid14.jpg")} />
                <h3 id="tgrid4">Receive and Review</h3>
                <p id='paragrid4'>
                    The finished content is delivered
                    and you can make corrections
                    that we will effect to satisfy your
                    requirements.
                </p>
            </div>
            <div class="item grid5">
                <h3 id='tgrid5'>Publish and Monitor your contents' progress</h3>
                <p id='paragrid5'>
                    The finished content is delivered
                    and you can make corrections
                    that we will effect to satisfy your
                    requirements.</p>
            </div>

        </div>
    )


};