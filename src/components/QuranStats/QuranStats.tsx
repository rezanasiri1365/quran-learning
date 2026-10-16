import "./QuranStats.css";

interface StatItem {
  id: number;
  title: string;
  value: string;
  icon: string;
}

const stats: StatItem[] = [
  {
    id: 1,
    title: "دوره‌های آموزشی",
    value: "۱۲",
    icon: "📚",
  },
  {
    id: 2,
    title: "رضایت والدین",
    value: "۹۸٪",
    icon: "💚",
  },
  {
    id: 3,
    title: "حافظ کل قرآن",
    value: "۲۵",
    icon: "📖",
  },
  {
    id: 4,
    title: "دانش‌آموز فعال",
    value: "۱۸۰",
    icon: "👨‍🎓",
  },
];

function QuranStats() {
    return(
        <section className="quran-stats-section" dir="rtl">
             <div className="quran-stats-panel">
                 <span className="quran-stats-ornament" aria-hidden="true">
          ۞
        </span>
        {stats.map((stat, index) => (
          <div className="quran-stat-wrapper" key={stat.id}>
            <div className="quran-stat">
              <span className="quran-stat-icon" aria-hidden="true">
                {stat.icon}
              </span>

              <div className="quran-stat-content">
                <span className="quran-stat-value">
                  {stat.value}
                </span>

                <span className="quran-stat-title">
                  {stat.title}
                </span>
              </div>
            </div>

            {index < stats.length - 1 && (
              <span
                className="quran-stat-divider"
                aria-hidden="true"
              />
            )}
          </div>
        ))}

        <span className="quran-stats-ornament" aria-hidden="true">
          ۞
        </span>
             </div>
        </section>
    )
}

export default QuranStats;