import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import mdFilePath from './how-to-edit.md'

export default function MyHowToEdit() {

    const [text, setText] = useState("")

    useEffect(() => {
        fetch(mdFilePath).then((response) => response.text()).then((text) => {
            setText(text)
        })
    }, [])

    return (
        <Wrapper id="services">
            <div className="lightBg" style={{ padding: "50px 0" }}>
                <div className="container">

                </div>
            </div>
            <div className="whiteBg" style={{ padding: "60px 0" }}>
                <div className="container">
                    <ReactMarkdown>{text}</ReactMarkdown>
                </div>
            </div>
        </Wrapper>

    )
}

const Wrapper = styled.section`
  width: 100%;
`;