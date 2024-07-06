import React from 'react';
import Comment from '../../Comment';
import commentIcon from '../../../images/comment.svg';
import viewerIcon from '../../../images/viewers.svg';
import { CommentType } from '../../Content';
import './post.scss';
import { useMediaQuery } from 'react-responsive';

const comments: CommentType[] = [
  {
    id: 1,
    user: {
      avatar:
        'https://s3-alpha-sig.figma.com/img/3ca7/729b/766d945ee572995c1f9d81a17d62c01a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D7YETZiaJWZ09fLC8xkn7pzKwH4artg8eEhqVwn9HU3EziUM0eTz1KeHYwkOOp7N9lMdd5rSbSv6nxw8IiPYCZx~Vm6Jymu5hxWPmiqCSToV3bxd7qXIRztLRH396lK-DH8egB-sOKC5375NHEorrM-aOwhZtJi6bGr14A1D42H2kTbIvuvRErjXZR9~~XvMiRlbU2BaJmH~NiuERamBd~A7uGlFTAQTCEGfkLDwabUUobNb7oSGReD1oQhLuT~~siVWU5~rWeDaKXq8nG9OLho~-VL9mKiRT23S8fg06OctBGs57nt1gxygQxxpuHnTzUqSJZ~BGpOkh85sHhWbTg__',
      name: 'Вадим Давыдов',
    },
    text: 'Наконец-то! Рад, что он вернулся',
    createdAt: '15 минут назад',
  },
  {
    type: 'answer',
    id: 2,
    user: {
      avatar:
        'https://s3-alpha-sig.figma.com/img/e471/47c8/09335d89166284abfaae8314ac1ad3a2?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GM3tA7QfzrW~JivFzhPW~1ewHWcKzxj4wQ0wqC~5Ty7bz2ycL5NaxJTU3fHepfVBXqQ~HCYJdtb2di4-Ed~BdvjTKy73HsJcbQTco3yjM7TnkxYXr846CnbQRdFluSPyYM5vdHAukZcCRjCcN1aCt5ijrM9n~thR0p6wIoSfgQ0D5YujegiEGue3xU1z~7GwzhQ95sllBLcbCzEvD1r0I9sApUHAVjooN3mdGfhPSheR7tqYLz7~IS1MtsxTrYWLZGi8SFEg~PD-Bo0lpgZmnPkMPo3Q0cdMS0SPeqC4uVFy1cFhPjJ3jdzedbTRyyem0V1W2xI3pM5xTwgLZYDABQ__',
      name: 'Артем Еременко',
    },
    text: 'Вадим, согласен!',
    createdAt: '30 секунд назад',
  },
  {
    id: 3,
    user: {
      avatar:
        'https://s3-alpha-sig.figma.com/img/0798/2581/6edaafc2a55624423a97cef88106d4b5?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ISZU~WczEFlopH~qvE1-H5ziVE4CAwnAm2rMX8VjSmTaC8Sj-Oqp17T3ZXQ39jtR2JggEEs6TYwKGDOcjyz32kzAJuimmQzfWtl5u8HdlLv~QYiJmpoq-zfhuQpDGxg0ZO3tuQPh3m3tGYiG5OENlRip7sjIMYb1Yg88oHIH8llYZIXKMMZKfVCi1rfofT~jJK7z~axB3Lvumb3Hr~g7GcPEszRTYccRunWUZwz0g41vRoOZphzKzyqxlqz0bYsbQgxk4BXs6v7gCtBMvvONuBYswSVVTcDbVcX3YlIM2JHtHgzqmPW4zMJo85HDKJAYH-YOJ6cPoCLIAhzdYuRCQA__',
      name: 'Константин Романов',
      marked: true,
    },
    text: 'В его возвращении нет ничего плохого',
    createdAt: '20 минут назад',
  },
  {
    id: 4,
    user: {
      avatar:
        'https://s3-alpha-sig.figma.com/img/9e9f/9f0f/04d55f2ce742d6be70a221420ef8d06a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RVDGLvrT2QFtUb1n9-BdkoftlWIKpeXiRfam-0NKE4SSV0Yxl~pq0gLSOfDTX0q4bx02aEfELJ2EeWV5HuLqkk6iHBPJz8JCBV9~3N4fWM04LMwh1rIXnOq6jy2J-S-YtXmfqsA6C~l4SRcPfbySlsi--mepSArNfT1x-g1xud2hSQImN5SWuH1PeqG3x2oGl4HWtVMrRzOr9ILfkkPkvbkSqrIvmWeW9FVDQXI7tQ2BMVULPxtEjw35tC2RMkWFShr9MbPAs74FZg1KY0HWgl3C~mlAg9wcFrwZf9vQvsb7cGmUewRwqzHGeO5JdAejCPxSQBKRTMgtqDBZ98NBVw__',
      name: 'Анастасия Осипова',
    },
    text: 'Наш чемпион! Горжусь! 🩷',
    createdAt: '20 минут назад',
  },
];

function Post() {
  const isSmallDevice = useMediaQuery({
    query: '(max-width: 1270px)',
  });

  return (
    <div className="Post">
      <div className="top-content">
        <div className="type-info">
          <p>Спортивная Борьба • 12 марта, 2024 в 16:03</p>
        </div>
        <h1 className="title">Илья Бессонов дал интервью для телеканала Россия-1</h1>
        <p className="desc">
          Илья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха и
          рассказал о методиках своих тренировок. Спортсмен сделал заявление, что возвращается в
          спорт и ... <span style={{ cursor: 'pointer', color: 'black' }}>Читать больше</span>
        </p>
      </div>
      <div className="center">
        <div className="post-images">
          <article className="postImage">
            <img
              src="https://s3-alpha-sig.figma.com/img/4fc0/9f70/080bb5a8bd24769de777cf4a8c86ef95?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DX2zJ~6wu3qm2lIRJDgWt~9WRnliBDqlhDgj23obnMIXBi~eRGPfXCj0BJLm5y3ld0Ue~f-OPll6cWCUfJKYaLelbVJea1TjqYIeanOr22ijDwL8GhnXXyvfrtqpAQLjkX5JfTMYxOOyuT7V9g3wmeioxfYAsBRYWqY0cPvVYgpa7nPZ8DoAv0Cx062wH1JaytE8XyT~wPYA58wvujjPBPEtKTYChs8rrTKo8L9fmHFZmUeoH6RrLePOSaLs~yBZ8AQ6AZJyEslvqHIadwtbbc0ewGFDVucTeN62TnWh7VeEPxn2eJZwQ9imcp2M3s6klSZo3ZcR58LFmYcTQxO3fQ__"
              alt="post image"
            />
          </article>
          <article className="postImage">
            <img
              src="https://s3-alpha-sig.figma.com/img/5b11/bc1d/9133ed899972c506cd93e7f067d8a5d4?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o3pH14Ol-omoCwl~JIxtMZekYRyh1sX-R0UrTc2wlW3BQyfTcimqxYPGsZ7MLdFMf90hqUDaLnA1Ll4MS12WTZ3ixoKci0-FGzKKhgTfBjVlSo5nIB3ufvmsf2l2d-hWs0lRYsR0DofuIyDDuienjKeEvAoJKRvWcsygBtDyIv6dJg-KaedUU3-tOzz9KYjoXzHEeNNvit5syB4sulo2WIXXxPxkymOAaz8RFNsOaxHgxgj7qPRqk9dxGERRbbsfCTGrBgPNCImmOa9F7~LriQ9ZYCJfs~vtzVry9k1yCQjQdDOqab4r7dGxSbzZYiyOUfda~xYTa3iMRj2SKJH1MA__"
              alt="post image"
            />
          </article>
          <article className="postImage">
            <img
              src="https://s3-alpha-sig.figma.com/img/3faa/389f/a79ffd661bf4348064141796e652307c?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MaXa4dsGp~XWkoqB1aV3MAFRoSxCXtkCRg87YiUuCN7MKVy3d8ABl-1o~nIRcLRNDFzJzxvNMeSnExxM5IwgA53FdchcXP-YDiqbxToC1Fp3wEKz0yP4ZWKbkGv0GQ0bmBAmEeIzxbn8EtsA0UqosMzXjZ4E4Q0W1oKTn~Tm6DKkZeCbDLoNc-1n-1Eswf-Z8OWhdOcmHTzi8efIaQ2wk48Wz5KZdfnDJMjBS8r6D3zadeAFLfwLQ~r5AB1qnd5qDfPdcmHnD6r749mY-i9RZaIX-3LH3MvpALcwZiFX0GM7U8b9Tv1Rt9ksNq4WU9H41yFpImmuzzlYnYNiyLlW9A__"
              alt="post image"
            />
          </article>
          <article className="postImage">
            <img
              src="https://s3-alpha-sig.figma.com/img/fe6f/f3be/0221bc0bce1995608a5ac74ed86548f3?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J~dXEBVacXhNwtisL5OYCOrD70d8o~LGhNNbduT29dt40SY5Gz2kofBRfXIMK5PjauuWMbNq~r2DV6RFnawmGgqswpFFYoD9uutFzN2TUjYcLpA39alfAnqJ7Asa59jm2HEIeK1mUrTJ1kvLlCEIFghR3d3yKJ17uzum-aVSco3YZulutK-IOCLkpRp46XHy8CH1Frt29RwkljI~l~VAJO9s1d6nP3mnn1bbYyDqA5oQTgFSYy9Vrb2nuXfBugfYG~FuFh-oYHd4sxYjic0hbB-N2wlG4xl9nCuWTvzOmW7Q94BqxX76lqLbbYYpN0nKfDIohOd3rM1L2CxioGQ0dQ__"
              alt="post image"
            />
          </article>
          <article className="postImage">
            <img
              src="https://s3-alpha-sig.figma.com/img/e27d/ce73/aedcffc005bc4b2c5d28444094d500e9?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xnr89AU4B30gaR3GnGtOY4H~EaO4jP2-dbAiQqiJ~CQ2t~W1gulHMBIhPnenfYJBqyDx-Aj5uotsCmX6RbdQtTz2RQISKG9M7MjjZ7DaXasSkB4JNf1IMljSLZDdkaNJHWtQ8XBXI6CYTWy9SpOvk8rZNyW-en5VvcVdVMMwHYCeLhG1iZpndpmPzbrObsV0HKcOHHvx~5c6k87tgfSZiZIs5AgfAQGZMZqHbET7jrDSXaKDbfnatbAiy3zXvdUh6jNRxN45PWlXjACvSKSB-eX0WIUXHYxJL9AkLzxIwofWKzixO3qVLuJYTh4WpZlj9NkAKSaoHEYg2X1JOnQjEA__"
              alt="post image"
            />
          </article>
          <article className="postImage">
            <img
              src="https://s3-alpha-sig.figma.com/img/2c79/7c46/ef995f52ee1868b07d7451716aea0da7?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HSvgUrv~6GQaQWdHmbRYI5ugHAEfV2KbCAw5R41c4mYpy0Ud9qBujsO~HCPXjtXkKJBJRjBuT5mLEUuM4yIHPahS5dwsT-viA3MSemY3aT77XIhYZUvZfrI7Jg4Bhi4IZs7Cl914mhYjUYwLQiF2ZqWX0cT4~vroJiwy92BtRvNMqOEXtHxrMC5~nNYo1NvVJfnmSpd14pXNJK4VvyOFLdNHcnTai0yLoUKnun2UZlEjIClnCWI3EG4lqbgdUtNQPSJC6RaIngs9UlTocL0sWWCvuD4AFcFCQDaWY39KIvtZ0sXXrHy3UjilH~3Am3NdqkSAlarteijHJAlvTLWNYQ__"
              alt="post image"
            />
          </article>
        </div>
      </div>
      <article className="action-icons">
        <div className="icon">
          <img src={viewerIcon} alt="icon" />
          <span>4.1 K</span>
        </div>
        <div className="icon">
          <img src={commentIcon} alt="icon" />
          <span>4</span>
        </div>
      </article>

      <section className="comment-section">
        {comments.map((comment: CommentType) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </section>
      <div
        style={{
          display: isSmallDevice ? 'flex' : '',
          justifyContent: isSmallDevice ? 'center' : '',
        }}>
        <button className="see-btn">Смотреть все комментарии</button>
      </div>
    </div>
  );
}

export default Post;
