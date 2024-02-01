import React, { useState} from "react";
import { AiFillProject } from "react-icons/ai";
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import './styles.scss'


const portfolioData = [
    {
      id: 2,
      name: "Ecommerce",
      image: ImageOne,
      link: "",
    },
    {
      id: 3,
      name: "Notes App",
      link: "",
      image: ImageTwo,
    },
    {
      id: 2,
      name: "Supplier Design",
      image: ImageThree,
      link: "",
    },
    {
      id: 2,
      name: "Todo App",
      image: ImageFour,
  
      link: "",
    },
    {
      id: 3,
      name: "Shopping cart design",
      image: ImageFive,
      link: "",
    },
];
  
const filterData = [
    {
      filterId: 1,
      label: "All",
    },
    {
      filterId: 2,
      label: "Developement",
    },
    {
      filterId: 3,
      label: "Design",
    },
];

const Portfolio = ()=>{

    const [filtervalue,setFiltervalue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);

    function handleFilter(currendId){
        setFiltervalue(currendId);
    }

    function handleHover(index){
        setHoveredValue(index);
    }

    const filterItems = filtervalue===1?portfolioData:
    portfolioData.filter(item=> item.id ===filtervalue)

    return(
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
            headerText = "My Portfolio"
            icon={<AiFillProject size={40}/>}/>
            
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {
                        filterData.map(item=>{
                            return <li className={item.filterId===filtervalue?'active':''} onClick={()=>handleFilter(item.filterId)} key={`filter name :${item.label}`}>
                                {item.label}
                            </li>
                        })
                    }
                </ul>
                <div className="portfolio__content__cards">
                    {               
                        filterItems.map((item,index)=>{
                            return <div className="portfolio__content__cards__item" key={`Card name : ${item.name.trim()}`}
                                onMouseEnter={()=>handleHover(index)} 
                                onMouseLeave={()=>handleHover(index)}
                            >
                                <div className="portfolio__content__cards__item__img-wrapper">
                                    <a href="">
                                        <img src={item.image} alt="" />
                                    </a>
                                </div>
                                <div className="overlay">
                                    {index===hoveredValue && (
                                        <div>
                                            <p>{item.name}</p>
                                            <button>Visit</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                    })}
                </div>
            </div>
        </section>


    )
}

export default Portfolio;