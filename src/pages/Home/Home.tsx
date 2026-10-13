
import CourseRegistrationSlider from "../../components/CourseRegistrationSlider/CourseRegistrationSlider";
import "./Home.css";

function Home() {
  return (
     <div className="home-page">
  
      <CourseRegistrationSlider />

      <main>

        <section className="hero">

          <div className="hero-content">
             <h1>
              آموزش قرآن
              <br />
              قدم به قدم
            </h1>

            <p>
              یادگیری قرآن کریم با استفاده از
              درس‌های آموزشی، تمرین و برنامه آموزشی
            </p>
             <button className="start-button">
              شروع یادگیری
            </button>
           
          </div>

        </section>
         <section className="courses-section">

          <h2>
            دوره‌های آموزشی
          </h2>

          <p className="section-description">
            مسیر یادگیری خود را انتخاب کنید
          </p>
          <div className="course-container">
            <div className="course-card">
                 <div className="course-icon">
                📖
              </div>
                <h3>
                آموزش روخوانی قرآن
              </h3>
                <p>
                یادگیری صحیح خواندن آیات قرآن کریم
              </p>
               <button>
                مشاهده دوره
              </button>
            </div>
            <div className="course-card">
                 <div className="course-icon">
                🕌
              </div>
               <h3>
                آموزش تجوید
              </h3>
                <p>
                آشنایی با قواعد و اصول تجوید قرآن
              </p>
              <button>
                مشاهده دوره
              </button>
            </div>
                        <div className="course-card">
                            <div className="course-icon"> 🎵 </div>
                              <h3>
                صوت و لحن
              </h3>

              <p>
                آموزش صوت و لحن در تلاوت قرآن
              </p>
              <button>
                مشاهده دوره
              </button>
                        </div>
          </div>
        </section>
             
      </main>
                 </div>
  );
}


export default Home;