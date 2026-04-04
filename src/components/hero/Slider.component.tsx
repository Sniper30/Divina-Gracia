import { useEffect, useState } from "react";


export const Slider = () => {
    // const [images, setImages] = useState(["compressed/americana-compressed.jpg", "compressed/bacon-americana-compressed.jpg", "compressed/classica-americana-compressed.jpg", "compressed/bbq-americana-compressed.jpg"]);

    // useEffect(() => {
    //     setImages(["images/americana.jpg", "images/bacon-americana.jpg", "images/classica-americana.jpg", "images/bbq-americana.jpg"]);
    // }, [])
    return (

        // images.map((img) => (
            <div
                className="w-full phone:h-[400px] tablet-sm:h-[750px] flex justify-center phone:items-center tablet-sm:items-start "
                // key={img}
            >
                <img
                    className="w-full min-[400px]:w-[60%] tablet:w-[60%] laptop-lg:w-[90%] z-20"
                    // src={`https://divina-gracia.nyc3.cdn.digitaloceanspaces.com/images/${img}`}
                    src="https://d28f3w0x9i80nq.cloudfront.net/restaurantImages/4228bcfa-1507-4e7e-a55b-c67a880f53a0/baconamericana.jpg"
                    // id={img}
                    loading="lazy"
                    fetchPriority="high"
                    alt="Burger"

                />
            </div>

        // ))

    )
}