import React from 'react';
import firebase from "../../Assets/mySkills/firebase (2).png";
import react from "../../Assets/mySkills/react.png";
import html from "../../Assets/mySkills/html.png";
import css from "../../Assets/mySkills/css.png";
import nodejs from "../../Assets/mySkills/node-js.png";
import tailwind from "../../Assets/mySkills/tailwind-css.png";
import bootstrap from "../../Assets/mySkills/bootstrap.png";
import github from "../../Assets/mySkills/github.png";
import Javascript from "../../Assets/mySkills/js.png";
import figma from "../../Assets/mySkills/figma.png";
const Skills = () => {
    const skills = [
        {
            id: 1,
            name: "Html 5",
            img: html,
        },
        {
            id: 2,
            name: "Css 3",
            img: css,
        },
        {
            id: 3,
            name: "Bootstrap",
            img: bootstrap,
        },
        {
            id: 4,
            name: "Tailwind",
            img: tailwind,
        },
        {
            id: 5,
            name: "Javascript",
            img: Javascript,
        },
        {
            id: 6,
            name: "Github",
            img: github,
        },
        {
            id: 7,
            name: "React Js",
            img: react,
        },
        {
            id: 8,
            name: "Firebase",
            img: firebase,
        },
        {
            id: 9,
            name: "Node Js",
            img: nodejs,
        },
        {
            id: 12,
            name: "Figma",
            img: figma,
        },
    ];
    return (
        <div className='relative before:bg-gradient-to-t via-[#79203864] from-[#141618] to-[#141618] banner mt-72'>
            <h1 className='hidden md:block skill'>Skills</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-5 gap-10 w-9/12 mx-auto">
                {skills.map((item) => (
                    <div key={item.id}>
                        <div className="bg-[#7920385e] rounded-2xl shadow-md  py-6 pl-14 w-44 mx-auto h-36 skills">
                            <div>
                                <img className="w-16 h-16" src={item.img} alt="" />
                            </div>
                            <div>
                                <h1 className="mt-4 tracking-[1.3px] text-lg text-white light-effect font-semibold">
                                    {item.name}
                                </h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;