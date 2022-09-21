import './Section1.css';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import KebabDiningIcon from '@mui/icons-material/KebabDining';

const Section1 = () => {
    return (
        <>
            <div className="Section1">
                <div className='food-categorys'>
                    <div className="category">
                        <p>
                            <FastfoodIcon className='food-category-icon' sx={{fontSize:80}}/>
                        </p>
                        <b className='category-name'>
                            Shawarma
                        </b>
                    </div>
                    <div className="category">
                        <p>
                            <LunchDiningIcon className='food-category-icon' sx={{fontSize:80}}/>
                        </p>
                        <b className='category-name'>
                            Fast food
                        </b>
                    </div>
                    <div className="category">
                        <p>
                        <LocalPizzaIcon className='food-category-icon' sx={{fontSize:80}}/>
                        </p>
                        <b className='category-name'>
                            Pizza
                        </b>
                    </div>
                    <div className="category">
                        <p>
                        <KebabDiningIcon className='food-category-icon' sx={{fontSize:80}}/>
                        </p>
                        <b className='category-name'>
                            Grills
                        </b>
                    </div>
                </div>
                <div className='info'>
                    <h4>What We Serve?</h4>
                    <h2>Just still back at home</h2>
                    <h1>We well <b className='orange'>tack care</b></h1>
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quam temporibus natus et quidem dolor laudantium itaque nisi unde earum?
                        Est, culpa nostrum! Quae ab veniam laborum exercitationem illo autem.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Section1