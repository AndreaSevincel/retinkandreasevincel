import React from "react";

export default function Signup() {
    return(
        <div id='signup1'>
            <div id='tsignup'>
                <h2>
                    Sign up for the BETA to see more
                </h2>
            </div>
            <div id='2inputsup'>
                <form>
                    <label>
                        <input id='bnamesup' type="text" name="bnamesup" placeholder='Business Name'/>
                    </label>
                        <input id='emailsup' type="text" name='emailsup' placeholder='Email' />
                </form>
                <button type="button" id='buttonnoti'>
                    Notify Me
                </button>

            </div>
            <button type="button" id='buttonsup'>
                    Sign up as a freelance partner
                </button>
        </div>
    )
}