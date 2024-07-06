import React from 'react';
import './lastnews.scss';
import dateIcon from '../../images/date-icon.svg';

const news = [
  {
    sportType: 'Спортивная борьба',
    title:
      'Первенство Московской области по спортивной борьбе (вольная борьба) среди юниоров до 24 лет',
    date: '2 Апреля, 14:00',
  },
  {
    sportType: 'Велоспорт',
    title: 'Рекорды Рушатся: Спортсмены Поднимают Планку Выше Во Всех Дисциплинах',
    date: '29 Марта, 17:52',
  },
  {
    sportType: 'Тяжелая атлетика',
    title: 'Неоспоримые Чемпионы: Триумф Спортивных Героев Вновь Встряхивает Мир',
    date: '20 Марта, 17:22',
  },
];

function LastNews() {
  return (
    <div className="lastNews-wrapper">
      <h1>Последние новости</h1>
      <div className="news-block">
        {news.map((item, index) => (
          <div key={index} className="news-section">
            <p className="sport-type">{item.sportType}</p>
            <span className="title">{item.title}</span>
            <article>
              <img src={dateIcon} alt="date icon" />
              <p className="createdAt">{item.sportType}</p>
            </article>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="look-all-btn">Смотреть всех</button>
      </div>
    </div>
  );
}

export default LastNews;
