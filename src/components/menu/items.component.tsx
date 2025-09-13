
import React, { use, useEffect, useRef, useState, type MouseEvent, type ReactNode, } from "react";
import Modal from "../modal/Modal.component";
import useModal from "../../hooks/modal/useModal.hook";


interface modalData {
    title: "",
    children: ReactNode
}
export interface images {
    id: number
    source: string
    title: string
    description: string
}
const Items = ({ items }: { items: [images] }) => {
    const { child, setChild, positionModal } = useModal(null)

    return <ul className="grid place-content-center phone:grid-cols-(--items-grid-cols-phone) tablet:grid-cols-(--items-grid-cols-tablet) laptop-sm:grid-cols-(--items-grid-cols-laptop-sm) laptop-lg:grid-cols-(--items-grid-cols-laptop-lg) phone:w-full h-fit gap-5  ">
        {
            child ?
                <Modal toggle={child ? true : false} setChildren={setChild} setPosition={positionModal}>
                    {child}
                </Modal>
                : null
        }
        {
            items.length &&
            items.map(item => (
                <li
                    key={item.id}
                    className="m-w-[300px] h-[300px] overflow-hidden rounded-xl shadow-md "
                    onClick={(e) => setChild(_Modal({ title: item.title, source: item.source, description: item.description }))}
                >
                    <img

                        src={item.source}
                        alt=""
                        className="w-full h-full object-contain hover:scale-125 hover:rotate-3 transition delay-150 duration-300 ease-in-out"
                    />
                </li>
            ))
        }


    </ul>
}

const _Modal = ({ title, description, source }: { title: string, description: string, source: string }) => {
    return <div className="bg-amber-50 phone:w-11/12 tablet:w-10/12 laptop-sm:w-8/12 h-fit flex justify-center phone:flex-wrap tablet:flex-nowrap rounded-2xl tablet:gap-5 shadow-2xl " onClick={(e) => e.preventDefault()}>
        <div className="phone:w-6/6 tablet:w-3/6 h-fit overflow-hidden rounded-2xl">
            <img src={source} alt="" className="min-w-[350px] tablet:translate-x-[-50px] laptop-sm:translate-x-0" />
        </div>
        <div className="phone:w-6/6 phone:p-5 tablet:w-3/6 tablet:mt-5">
            <p className="font-black text-2xl mb-5">{title}</p>
            <p>{description}</p>
        </div>
    </div>
}



export default Items;