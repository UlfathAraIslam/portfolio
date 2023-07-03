import { useState } from "react";

const Carousel = ({ images, demoLink, serverLink, clientLink }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const previousImage = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    };

    return (
        <div>
            <div style={{ backgroundImage: `url(${images[currentImage]})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover effects */}
                <div className='opacity-0 group-hover:bg-pink-600 group-hover:opacity-100'>
                    <div className='pt-8 text-center'>
                        {/* Buttons and links */}
                        <a href={demoLink} target="_blank">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href={serverLink} target="_blank">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'><span>Server site</span></button>
                        </a>
                        <a href={clientLink}>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'><span>Client site</span></button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex justify-between p-4'>
                <button className='text-pink-600' onClick={previousImage}>previous</button>
                <button className='text-pink-600' onClick={nextImage}>next</button>
            </div>
        </div>
    );
};
export default Carousel;
