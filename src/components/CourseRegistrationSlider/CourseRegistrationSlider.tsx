import { Link } from "react-router-dom";
import { useRef } from "react";

import "./CourseRegistrationSlider.css";
interface Cource{
    id:number;
    title:string;
     image: string;
  description: string;
  startDate: string;
  registrationEndDate: string;
  isOpenForRegistration: boolean;
}

const _cources:Cource[]=[
      {
    id: 1,
    title: "آموزش روخوانی قرآن",
    image:  "${import.meta.env.BASE_URL}/images/courses/pic1.jpeg",
    description: "آموزش صحیح روخوانی و روان‌خوانی قرآن کریم",
    startDate: "1405/07/15",
    registrationEndDate: "1405/07/10",
    isOpenForRegistration: true,
  },
   {
    id: 2,
    title: "آموزش تجوید",
    image: "${import.meta.env.BASE_URL}/images/courses/pic2.jpeg",
    description: "آموزش قواعد و مهارت‌های تجوید قرآن کریم",
    startDate: "1405/07/20",
    registrationEndDate: "1405/07/15",
    isOpenForRegistration: true,
  },
  {
    id: 3,
    title: "حفظ قرآن کریم",
    image: "${import.meta.env.BASE_URL}/images/courses/pic3.jpeg",
    description: "دوره برنامه‌ریزی شده برای حفظ سوره‌های قرآن",
    startDate: "1405/08/01",
    registrationEndDate: "1405/07/25",
    isOpenForRegistration: true,
  },
  {
    id: 4,
    title: "حفظ قرآن کریم",
    image: "${import.meta.env.BASE_URL}/images/courses/pic1.jpeg",
    description: "دوره برنامه‌ریزی شده برای حفظ سوره‌های قرآن",
    startDate: "1405/08/01",
    registrationEndDate: "1405/07/25",
    isOpenForRegistration: true,
  },
  {
    id: 5,
    title: "حفظ قرآن کریم",
    image: "${import.meta.env.BASE_URL}/images/courses/pic2.jpeg",
    description: "دوره برنامه‌ریزی شده برای حفظ سوره‌های قرآن",
    startDate: "1405/08/01",
    registrationEndDate: "1405/07/25",
    isOpenForRegistration: true,
  },
  {
    id: 6,
    title: "حفظ قرآن کریم",
    image: "${import.meta.env.BASE_URL}/images/courses/pic3.jpeg",
    description: "دوره برنامه‌ریزی شده برای حفظ سوره‌های قرآن",
    startDate: "1405/08/01",
    registrationEndDate: "1405/07/25",
    isOpenForRegistration: true,
  },
]
function CourseRegistrationSlider(){
  

  const sliderref=useRef<HTMLDivElement>(null);
    const availableCources=_cources.filter(cources=>cources.isOpenForRegistration);
    const scrolleft=()=>{
       sliderref.current?.scrollBy({left:-320,behavior:"smooth"});
    };
    const scrolRight=()=>{
       sliderref.current?.scrollBy({left:320,behavior:"smooth"});
    };
    return(
            <section className="registration-slider">
                      <h2>دوره‌های قابل ثبت‌نام</h2>
                       <div className="registration-slider-wrapper">
                        <button className="slider-arrow slider-arrow-left"  onClick={scrolleft}        >◀</button>                      
                            <div className="registration-slider-track" ref={sliderref}>
                                {
                                    availableCources.map(cource=>(
                                        <div className="registration-course-card" key={cource.id}>
                                             <img src={cource.image}   alt={cource.title}  />
                                             <div className="registration-course-content">
                                                <h3> {cource.title}</h3>
                                                <p>{cource.description}</p>
                                                <span>
                                                    شروع دوره :{cource.startDate}
                                                </span>
                                                
                                                <Link to={'/register/course/'+cource.id} >
                                                ثبت نام در دوره 
                                                </Link>
                                                </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <button className="slider-arrow slider-arrow-right" onClick={scrolRight}> ▶</button>
                             </div>
            </section>
    );
}
export default CourseRegistrationSlider