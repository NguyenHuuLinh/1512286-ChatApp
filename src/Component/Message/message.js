import * as React from 'react'
import "./message.css"
class Message extends React.Component {
    render() {
        return (
            <div class='message-container'>
                <div>
                    <div class='message-frame-left'>
                        <div>
                            <img class='avatar' />
                        </div>
                        <div class='text-frame'>
                            <div class='text-field text-field-left'>
                                Alo 1
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class='message-frame-right'>
                        <div class='text-frame'>
                            <div class='text-field text-field-right'>
                                Alo 2
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class='message-frame-left'>
                        <div>
                            <img class='avatar' />
                        </div>
                        <div class='text-frame'>
                            <div class='text-field text-field-left'>
                                Hello 1
                             </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class='message-frame-right'>
                        <div class='text-frame'>
                            <div class='text-field text-field-right'>
                                Hello 2
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Message