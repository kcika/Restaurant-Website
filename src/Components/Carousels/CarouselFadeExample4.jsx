import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample4() {
    return (
        <Carousel interval={2000} fade>
            <Carousel.Item>
                <div className="page1 position-relative golden">
                    <div className="overlay"></div>
                    <div className="position-absolute top-50 start-50 translate-middle text-center">
                        <p className="heading fw-semibold mb-0">Good Food Good Vibes</p>
                        <p className="fs-3 fw-semibold">Savor the finest flavors, where every bite is crafted to delight your senses and elevate your dining experience!</p>
                        <button className='px-4 py-2 bg-golden fs-5 fw-semibold'>View Our Menu</button>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="page2 position-relative golden">
                    <div className="overlay"></div>
                    <div className="position-absolute top-50 start-50 translate-middle text-center">
                        <p className="heading fw-semibold mb-0">Where every flavor tells a story</p>
                        <p className="fs-3 fw-semibold">Savor the finest flavors, where every bite is crafted to delight your senses and elevate your dining experience!</p>
                        <button className='px-4 py-2 bg-golden fs-5 fw-semibold'>View Our Menu</button>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="page3 position-relative golden">
                    <div className="overlay"></div>
                    <div className="position-absolute top-50 start-50 translate-middle text-center">
                        <p className="heading fw-semibold mb-0">For the love of delicious food</p>
                        <p className="fs-3 fw-semibold">Savor the finest flavors, where every bite is crafted to delight your senses and elevate your dining experience!</p>
                        <button className='px-4 py-2 bg-golden fs-5 fw-semibold'>View Our Menu</button>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample4;