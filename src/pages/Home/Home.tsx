
import CourseRegistrationSlider from "../../components/CourseRegistrationSlider/CourseRegistrationSlider";
import "./Home.css";

function Home() {
  return (
     <div className="home-page">
  
      <main className="home-page">

        <section className="quran-hero">
        <img src={import.meta.env.BASE_URL+'images/courses/main-banner.jpeg'} alt='بنر اصلی آموزش قران '   className="quran-hero-image" />
          <div className="quran-hero-content">
            
            <h1 className="hero-title">
           <span className="hero-line">
            <span className="hero-highlight">آینده فرزندانتان</span> را با   
          </span>
           <span className="hero-title-line">
            <span className="hero-highlight">قرآن</span>{' '}
            <span className="hero-black">بسازید</span>
            </span>
          </h1>
           <p className="hero-description">
            <span>
              ما در آموزشگاه .... قرآن را با زبانی کودکانه وروشی جذاب به فرزند
            </span>
            <span>
              شما آموزش میدهیم تا باعشق یاد بگیرد وماندگار شود
            </span>
             
          </p>
           <div className="hero-features">
              <div className="hero-feature">
                 <span className="feature-icon">🌸</span>
                   <span>ویژه کودکان ۵ تا ۱۲ سال</span>
             </div>

      <div className="hero-feature">
        <span className="feature-icon">🕌</span>
        <span>کلاس‌های حضوری و آنلاین</span>
      </div>

      <div className="hero-feature">
        <span className="feature-icon">📖</span>
        <span>مربیان تخصصی حفظ کودک</span>
      </div>

      <div className="hero-feature">
        <span className="feature-icon">🌱</span>
        <span>گزارش پیشرفت برای والدین</span>
      </div>
           </div>
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
      
      <CourseRegistrationSlider />

                 </div>
  );
}


export default Home;