import React, { useEffect, useRef } from 'react'
import Ts2 from './Ts2'
import { init } from "ityped";
import { BodyContainer, CrewColumn, CrewGridContainer, IntroContainer, IntroGridContainer } from '../Styles/Styles';
import tristanIMG from "../assets/Tristan.png"
import aliceIMG from "../assets/Alice2.jpg"
import headshot2 from "../assets/headshot2.jpg"
import headshot3 from "../assets/headshot3.png"
import headshot4 from "../assets/headshot4.png"

export default function Homepage() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Film", "Code", "Design"],
        })
    });
    return (
        <>
            <Ts2 />
            <BodyContainer>
                <IntroGridContainer>
                    <IntroContainer>
                        <div>
                            <h1>
                                DarkMeow Productions
                                <br />
                                <span ref={textRef} />
                            </h1>
                        </div>
                    </IntroContainer>
                </IntroGridContainer>
                <CrewGridContainer>
                    <CrewColumn>
                        <img src={headshot2} />
                        <h1>Nathan</h1>
                        <p>mollit do ut enim qui velit eu pariatur consectetur nisi proident do incididunt ullamco veniam veniam. esse ad culpa eiusmod veniam qui voluptate magna lorem aute ad officia ipsum aliqua velit magna eiusmod. pariatur officia sit labore sint id minim ea qui exercitation sed qui ullamco occaecat reprehenderit deserunt incididunt irure ut. </p>
                    </CrewColumn>
                    <CrewColumn>
                        <img src={aliceIMG} />
                        <h1>Alice</h1>
                        <p>culpa ut mollit irure sit enim deserunt minim occaecat laboris est sint consequat ut nisi Duis culpa nostrud laboris. commodo labore voluptate consequat ullamco sint dolor pariatur enim irure labore cupidatat ut ex consequat laboris Excepteur in. veniam esse irure consequat id eiusmod id do et nulla laboris Duis pariatur quis incididunt sit. </p>
                    </CrewColumn>
                    <CrewColumn>
                        <img src={tristanIMG} />
                        <h1>Tristan</h1>
                        <p>incididunt pariatur culpa dolor do mollit id eiusmod magna consequat voluptate labore do laborum pariatur ullamco. ad do minim consectetur consectetur deserunt pariatur ut ex dolore consequat sint fugiat tempor voluptate ipsum occaecat. consectetur cillum qui ad id et consectetur qui exercitation amet deserunt dolor laborum sunt do officia est. </p>
                    </CrewColumn>
                    <CrewColumn>
                        <img src={headshot3} />
                        <h1>Mateo</h1>
                        <p>officia do ea mollit ad esse mollit labore minim cupidatat commodo cillum ex nisi deserunt enim dolor Excepteur. elit anim fugiat nisi laborum adipiscing dolor eiusmod irure velit sit labore do nulla ea pariatur ipsum nulla in. amet sit est sit irure irure qui veniam in sint occaecat ea cillum officia laboris qui deserunt. minim nostrud nostrud </p>
                    </CrewColumn>
                    <CrewColumn>
                        <img src={headshot4} />
                        <h1>Lynette</h1>
                        <p>minim eiusmod amet ut nisi sed amet sunt occaecat amet laborum amet consequat do id ad sint ullamco. adipiscing proident labore aliqua ut id eu proident est ipsum minim labore ipsum esse eu proident. anim qui ex consectetur laboris veniam labore mollit minim aliquip minim eu veniam anim in cillum. id culpa ea reprehenderit mollit eiusmod sunt dolor </p>
                    </CrewColumn>
                </CrewGridContainer>
            </BodyContainer>
        </>
    )
}