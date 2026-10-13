import { useParams } from "react-router-dom";

import "./CourseRegistration.css";
function CourseRegistration()
{
    const { id }=useParams();
    return (
        <div>
            <h1>ثبت نام در دوره </h1>
            <p>
                شناسه دوره :{id}
            </p>
            <form>
                <div>
                    <label>
                        نام ونام خانوادگی 
                    </label>
                    <input type="text" />
                </div>
                <div>
                    <label>
                        شماره موبایل
                    </label>
                    <input type="tel" />
                </div>
                 <div>
                    <label>
                        کد ملی
                    </label>
                    <input type="number" />
                </div>
                <div>
                    <label>
                        تاریخ تولد
                    </label>
                    <input type= "date" />
                </div>
                <button type="submit">
                    ثبت نام
                </button>
            </form>
        </div>
    );
}
export default CourseRegistration;