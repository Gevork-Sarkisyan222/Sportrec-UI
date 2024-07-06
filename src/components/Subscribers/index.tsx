import React from 'react';
import './subscribers.scss';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import checkmarkIcon from '../../images/checkmark.svg';
import badge from '../../images/badge.svg';

const subscribers = [
  {
    user: {
      avatar:
        'https://s3-alpha-sig.figma.com/img/4292/2067/508d3554fecdf911c1c609b257ae6fbd?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l9egpPQadZw0zmEKiusBDkv0YDkB5hWD8iQ7LiqKXCvjreBPr2tZ-mZ5gclr5RuBMOzEnvagxyaRtJMvKF47~JZ~r4HbBb2eDvBjJx6r3OZ5hAj4ID~8ul66zq3F9tDEZhTgzuOMrrjQ2lxbvQWDRN4G2gWWP3sKqcMLJfSUpNKVlUIIAxaLl46UNM0wCjivL3KRCK-m3ahkWZ-qhqjEU7WzteUjCVG3esGF46aKd-gIoxQElKTV222pGsUL5YwtEcw243wXFYkXElolHMtZMQDVOTpihrTJ6vADDYS41nPou4ezXJw0BwaftOQrnRj-vTxavGdBy1Fzo3kNT9y2Pw__',
      name: 'Александр Магомедов',
      info: 'Спортсмен • Призер Олимпийских игр, двукратный призер чемпионатов мира',
      marked: true,
    },
  },
  {
    user: {
      avatar:
        'https://s3-alpha-sig.figma.com/img/f349/4db0/c72d431f864ab8cf0101c0dbed2e97fd?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KEbfefyPNn-zZUQ6gGlaRmEtNeYuyDgfhdIkhm~KVDxTZwNabeveLco5dim0BNfLZm7mivYFoMLs0~2elkmugiP4hipF0yKIcmQO0jMeZnVIJUDSn~bpwW0kDc6SPG5feF5EmmWc405~G3yLGpBHmewmuQDpZsfdho53O4H1EtJaoC7GsGajxdnAEQwgsLui-VIn09rCNd0YtC7IcUpO88hxr1aQWSSOAWiz7JAJwrTDjh4jIMTUlUtC4ADk7vzPQEK4u5zE3xiJGMshce3vM9sATa2x06LMjRzAkl9dmtZ1turZVI9DIKzYESg5o-2ZZT6-qC0iQf-SgLl9dOcGrg__',
      name: 'Дмитрий Зайцев',
      info: 'Судья • Заслуженный судья и секретарь соревнований по греко-римской борьбе',
      marked: true,
    },
  },
  {
    user: {
      avatar:
        'https://s3-alpha-sig.figma.com/img/4cbb/ed1d/702cba3bc804760c8f55954a98067f36?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MUpSzv-pfDqaVgrvYXVGoUPvQIYm2ykNvJwVdY3zIR~DOhLMWstjaefJFkHI7KsvqsUZowLsrnuT-4GgGZAJ2XR2P~HyHYJ4Si9skc6eehnZV-6vof-YIyAQYYq8BdigX9mfokij7eNkCtIUwNz5fV2PlrOLsfqZJh2jJvaKOJFC~lhmUlB5q1224oOhmKU5zQPJdXbgesHKSZZwGFx3HhxSdl-HLA61JW7dzceSfCm4kqAzGt8bz0q5Knq25GPOfjuYP79N2AO8MdsfsCmHrYEATg8JwXWITjAPhvdUiBedZIt0YzgGcxhgjtIfBcnbyE5Dzjho3RZ0O3ROqZ1swA__',
      name: 'Светлана Бессонова',
      info: 'Спортсмен • Призер Олимпийских игр, двукратный призер чемпионатов мира',
      marked: false,
    },
  },
  {
    user: {
      avatar:
        'https://s3-alpha-sig.figma.com/img/d91b/f935/d99691f78ff7ab352033b5dfae5afba7?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ei8eSpUnYyClAE9WUUF2wO53cxgmoQ3s4j-gkiLwQoXGfyR3NNljP7sGoPeoRVCtdrLIon4Gi9HpUw0557tQMKo0qHKOZq6yE-TlNBATvlwHhA-X5Py0XCkNDqvDSSB52Kuuq1ws1PmEUq3m959sQuc-rKzhuYpP8U1hVhYKzsIMYpd0paBuewhmE7qGqVYYlBc3xW1chjfuC9F2j9uxa9ioI6bTQmqFuAv7PKBh-Qz1swWtOwQd74kivmSk0W6cPAKD0gQ5Tvb8vAyZEiX9FSeOGQ5QIHOu86TSunsQyefYXI1HL1zeS8fXrgilL8lNhxRlXT3yMd2Z5u3dFA7dfg__',
      name: 'Андрей Романов',
      info: 'Спортсмен • Мастер спорта СССР международного класса, заслуженный тренер СССР по греко-римской борьбе',
      marked: false,
    },
  },
  {
    user: {
      avatar:
        'https://s3-alpha-sig.figma.com/img/1da5/2c28/1fcd8352763d5795426a3e54909ce1ce?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cBxAvIlJ~EPiGWqimz2puuKFeMvlNpbAz753pVDZncMe5RggUeErxoEBVy01rsQ2jKjlSRSbTIPsrj5nWBXjGEB6s045IVJK0yCIVUm88Mdl~17cR8zd9TFyiE~5gfn2qT6lliOPEb3Chjs4dbziaVNxZ1ULE3JUHbm0CGh5cJBqVt21fSRWTywS4Bx6zxdL~A9YnM3boUOOJksxmBZk8SzxawoKbO9o9SACX8wdFHVhZYcQMLpLqTL6cZzEZZlzQMrOpEa8gI2k0S1X9DBrCUbDXzGFguJm3x8nVimL0~5VLEYHJma7TUZKW6zFVGiMy2TXP3oCsX1SZDEIyVuftg__',
      name: 'Анастасия Землякова',
      info: 'Тренер • Тренер по гандболу',
      marked: true,
    },
  },
];

function Subscribers() {
  return (
    <div className="subscribers-wrapper">
      <h1>Интересные подписки</h1>
      <div className="users-block">
        {subscribers.map((user, index) => (
          <div key={index} className="user">
            <div className="user-info">
              <div className="avatar">
                <img src={user.user.avatar} alt="avatar" />
                <img className="badge" src={badge} alt="badge" />
              </div>
              <article>
                <div className="texts">
                  <span>{user.user.name}</span>
                  {user.user.marked && <img src={checkmarkIcon} alt="icon" />}
                </div>
                <div className="info">
                  <p>{user.user.info}</p>
                </div>
              </article>
            </div>
            <button>
              <PersonAddAltIcon />
            </button>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="look-all-btn">Смотреть всех</button>
      </div>
    </div>
  );
}

export default Subscribers;
