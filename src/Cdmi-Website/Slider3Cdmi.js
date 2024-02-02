
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Slider3(props) {
    return (
        <>
            

            <OwlCarousel className='owl-theme' loop margin={10} dots={false} items={6}>
                {
                    props.slider3.map((data) => {
                        return (
                            <div class='item slider2'>
                                <img src={data.img} />
                            </div>
                        )
                    })
                }
            </OwlCarousel>;
        </>
    )
}
export default Slider3;