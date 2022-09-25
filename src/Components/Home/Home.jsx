
import Section0 from '../Section0/Section0';
import Section1 from '../Section1/Section1';
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";
import Section4 from "../Section4/Section4";
import Section5 from "../Section5/Section5";
import './style.css';


function Home () {
    function scrollToTop() {
        window.scrollTo(0, 0);
    }
    return (
        <>
            <Section0 />
            <Section1 />
            <Section2 />
            <Section4 />
            <Section5 />
            <Section3 />


            <button onClick={scrollToTop} className='GoTop'>
                🢁
            </button>
        </>
    )
}


export default Home;