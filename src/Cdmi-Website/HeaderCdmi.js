import logo from './image/logo.svg';
import { FaAngleDown } from "react-icons/fa";

function Header(props) {
    return (
        <>

            {/* NavMenu Section Start */}

            <section>
                <div className='container'>
                    <div className='nav'>
                        <div className='logo'>
                            <a href=""><img src={logo} /></a>
                        </div>
                        <nav >
                            <ul className='main_menu d-flex m-0' >
                                {
                                    props.header.map((ele,ind) => {
                                        return (
                                            <li key={ind}><a href="" className='active'> {ele.name}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>

            {/* NavMenu Section End */}
        </>
    )
}
export default Header;