import React, { useState, useEffect, useRef, Fragment } from "react";
import Peer from 'peerjs'
import CopyToClipboard from 'react-copy-to-clipboard';

function Meeting() {
    const [peerId, setPeerId] = useState('');
    const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
    const remoteVideoRef = useRef(null);
    const currentUserVideoRef = useRef(null);
    const peerInstance = useRef(null);

    useEffect(() => {
        const peer = new Peer();

        peer.on('open', (id) => {
            setPeerId(id)
        });

        peer.on('call', (call) => {
            var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

            getUserMedia({ video: true, audio: true }, (mediaStream) => {
                currentUserVideoRef.current.srcObject = mediaStream;
                currentUserVideoRef.current.play();
                call.answer(mediaStream)
                call.on('stream', function (remoteStream) {
                    remoteVideoRef.current.srcObject = remoteStream
                    remoteVideoRef.current.play();
                });
            });
        })

        peerInstance.current = peer;
    }, [])

    const call = (remotePeerId) => {
        var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        getUserMedia({ video: true, audio: true }, (mediaStream) => {

            currentUserVideoRef.current.srcObject = mediaStream;
            currentUserVideoRef.current.play();

            const call = peerInstance.current.call(remotePeerId, mediaStream)

            call.on('stream', (remoteStream) => {
                remoteVideoRef.current.srcObject = remoteStream
                remoteVideoRef.current.play();
            });
        });
    }

    return (
        <Fragment>
            <div className="meeting_page">
                <div className="meeting_container">
                    <div className="form_group">
                        <h1 className="meeting_title">Copy Your Meeting Id</h1>
                        <CopyToClipboard text={peerId}>
                            <button className="copy"><i className="fa fa-copy"></i></button>
                        </CopyToClipboard>
                    </div>

                    <div className="form_group_call">
                        <input type="text" value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)} />
                        <button onClick={() => call(remotePeerIdValue)}>Join or Create</button>
                    </div>
                </div>
            </div>
            <div className="video">
                <div>
                    <video ref={currentUserVideoRef} />
                </div>
                <div>
                    <video ref={remoteVideoRef} />
                </div>
            </div>
        </Fragment>
    );
}

export default Meeting;