
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Slider(props) {
    return (
        <>
            <div className='main_slider'>
                <OwlCarousel className='owl-theme' loop margin={10} items={1} dots={false} nav>


                    {
                        props.slider.map((ele,ind) => {
                            return (
                                <div class='item slider2 ' key={ind}>
                                    <img src={ele.img} />
                                </div>
                            )
                        })
                    }
                </OwlCarousel>;
            </div>

        </>
    )
}
export default Slider;