import { useRef } from "react";
import { Link } from "react-router-dom";
import "./PopularCourses.css";
interface PopularCourses{
    id:number;
    title:string;
    description:string;
    image:string;
    link:string;
}
const _popularCourses:PopularCourses[]=[{
id:1,title:"آموزش روخوانی قرآن",description:"یادگیری صحیح خواندن قرآن با روش‌های ساده و جذاب.",image:"pic4.jpeg",link:"/courses"},
{ id: 2,
    title: "آموزش تجوید قرآن",
    description:
      "یادگیری قواعد تجوید برای قرائتی صحیح و زیبا.",
    image: "pic2.jpeg",
    link: "/courses",},{id: 3,
    title: "حفظ قرآن ویژه کودکان",
    description:
      "آشنایی با روش‌های جذاب و اصولی حفظ آیات قرآن.",
    image: "pic1.jpeg",
    link: "/courses",}];

    function PopularCourses(){
        const sliderref=useRef<HTMLDivElement>(null);
        const slide=(direction:number):void =>{
            const slider=sliderref.current;
            if (!slider)
                return;
            slider.scrollBy({left:direction *slider.clientWidth*0.75,behavior:"smooth"
        });
    }
    return (
    <section className="popular-courses" dir="rtl">
          <div className="popular-courses-header">
                    <div>
                         
            <h2>دوره‌های محبوب</h2>
              
                    </div>
                     <div className="popular-courses-controls">
                        <button type="button" onClick={() => slide(1)}  aria-label="دوره‌های بعدی" > ❯ </button>
                        <button type="button" onClick={() => slide(-1)} aria-label="دوره‌های قبلی">❮</button>
                     </div>
          </div>
          <div  className="popular-courses-track"  ref={sliderref} >
                 {_popularCourses.map((course) => (<article className="popular-course-card" key={course.id}>
                        <div className="popular-course-image-wrap">
                            <img src={import.meta.env.BASE_URL+'images/courses/'+course.image} alt={course.title} className="popular-course-image" loading="lazy"/>
                            <span className="popular-course-badge"> دوره آموزشی </span>
                        </div>
                           <div className="popular-course-body">
                                <h3>{course.title}</h3>
                                <p>{course.description}</p>
                                <Link to={course.link} className="popular-course-link">مشاهده دوره 
                                                <span aria-hidden="true">←</span>
                                </Link>
                           </div>
                 </article>))}
          </div>
    </section>);
}
export default PopularCourses;