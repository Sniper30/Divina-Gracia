
import { type ReactNode, } from "react";
import Modal from "../modal/Modal.component";
import useModal from "../../hooks/modal/useModal.hook";
import { WhatsappIcon } from "../icons.components";


interface modalData {
    title: "",
    children: ReactNode
}
export interface menu {
    id: number
    source: string
    title: string
    description: string
    type: string
}
const Items = ({ items }: { items: [menu] }) => {
    const { child, setChild, positionModal } = useModal(null)

    return <ul className="grid phone:grid-cols-(--items-grid-cols-phone) tablet:grid-cols-(--items-grid-cols-tablet) laptop-sm:grid-cols-(--items-grid-cols-laptop-sm) laptop-lg:grid-cols-(--items-grid-cols-laptop-lg) phone:w-full h-fit justify-between gap-14 ">
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
                    className="w-full h-fit rounded-xl relative group overflow-hidden "
                    onClick={(e) => setChild(_Modal({ title: item.title, source: item.source, description: item.description }))}
                >

                    <img
                        fetchPriority='high'
                        src={item.source}
                        alt={item.description}
                        className="w-full h-full object-contain hover:scale-125 hover:rotate-3 transition delay-150 duration-300 ease-in-out"
                    />
                    <div className="bg-[#204035]/60 h-[40px] shadow-lg flex items-center overflow-hidden w-0 transition-all delay-200 duration-100 ease-in-out group-has-hover:w-full absolute bottom-0">
                        <p className="text-[#ede6ce] px-3 font-bold">{item.type}</p>
                    </div>
                </li>
            ))
        }

        <li

            className="w-full h-fit relative self-center"

        >
             <a
                            href="http://wa.me/18622203363"
                            className="text-[#ede6ce] rounded-lg w-[175px] h-[52px] shadow-lg bg-[#204035] flex items-center font-light justify-center gap-3 z-20"
                        >See more
                            <WhatsappIcon />
                        </a>
        </li>


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


        //      {
        //     "id":5,
        //     "source": "https://divina-gracia.nyc3.cdn.digitaloceanspaces.com/images/classic-burger.png",
        //     "title": "Classic Burger",
        //     "description":"100% house made burger bun, 5.5 Oz chuck roast burger, cheddar cheese, caramelized onions, butterhead lettuce, tomato and house special sauce. ",
        //     "type":"Large size burger"
        // },
        //      {
        //     "id":6,
        //     "source": "https://divina-gracia.nyc3.cdn.digitaloceanspaces.com/images/latina-burger.png",
        //     "title": "Latina Burger",
        //     "description":"100% house made burger bun, 5.5 Oz chuck roast burger, mozzarella cheese, bacon, caramelized onions ,butterhead lettuce, tomato, potato chips, pink sauce and homemade pineapple sauce.",
        //     "type":"Large size burger"
        // },
        //      {
        //     "id":7,
        //     "source": "https://divina-gracia.nyc3.cdn.digitaloceanspaces.com/images/bbq-burger.png",
        //     "title": "Creamy BBQ Burger",
        //     "description":"100% house made burger bun, 5.5 Oz chuck roast burger, cream cheese, bacon, caramelized onions, butterhead lettuce, homemade bbq sauce.",
        //     "type":"Large size burger"
        // },
        //      {
        //     "id":8,
        //     "source": "https://divina-gracia.nyc3.cdn.digitaloceanspaces.com/images/artisan-burger.png",
        //     "title": "Artisan Burger",
        //     "description":"100% house made burger bun, 5.5 Oz chuck roast burger, double mozzarella cheese, bacon, sweet coleslaw, potato chips, pink sauce, garlic and cilantro sauce and homemade pineapple.",
        //     "type":"Large size burger"
        // },
        //      {
        //     "id":9,
        //     "source": "https://divina-gracia.nyc3.cdn.digitaloceanspaces.com/images/mushroom-burger.png",
        //     "title": "Mushroom Burger",
        //     "description":"100% house made burger bun, 5.5 Oz chuck roast burger, caramelized onions and mushrooms, mozzarella cheese, bacon, butterhead lettuce, homemade bbq sauce.",
        //     "type":"Large size burger"
        // }