import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import './content.scss';

import viewerIcon from '../../images/viewers.svg';
import commentIcon from '../../images/comment.svg';
import Comment from '../Comment';
import Filter from '../Filter';
import Subscribers from '../Subscribers';
import LastNews from '../LastNews';
import Post from '../PostTypes/Post';
import AchivmentPost from '../PostTypes/AchivmentPost';
import UserRecommendation from '../UserRecommendation';
import SimplePost from '../PostTypes/SimplePost';
import { useMediaQuery } from 'react-responsive';
import News from '../News';

type UserType = {
  avatar: string;
  name: string;
  marked?: boolean;
};

export interface CommentType {
  type?: string;
  id: number;
  user: UserType;
  text: string;
  createdAt: string;
}

function Content() {
  const isSmallDevice = useMediaQuery({
    query: '(max-width: 1270px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 600px)',
  });

  return (
    <div className="Content">
      <div className="container">
        <div
          style={{
            display: isSmallDevice ? 'flex' : '',
            justifyContent: isSmallDevice ? 'center' : '',
          }}
          className={`content ${isMobile ? 'mobile' : ''}`}>
          {isSmallDevice ? (
            <div>
              <div style={{ margin: 'auto' }}>
                <Filter />
                <News />
              </div>

              <Post />
              <section
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: '20px',
                  width: '88vw',
                  borderRadius: '20px',
                  overflow: 'hidden',
                }}
                className="right-new">
                <img
                  style={{ width: '100%', height: '100%' }}
                  src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1269901.jpg"
                  alt="image"
                />
              </section>
              <Subscribers />
              <LastNews />
              <AchivmentPost />
              <div
                style={{
                  width: '90vw',
                  marginTop: '20px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  margin: 'auto',
                  marginBottom: '20px',
                }}>
                <div style={{ height: '286px' }} className="advertise-banner">
                  <img
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    src="https://mir-s3-cdn-cf.behance.net/projects/404/73ce81177981419.Y3JvcCw4NDM3LDY2MDAsODc3LDA.jpg"
                    alt="banner image"
                  />
                </div>
              </div>
              <SimplePost type="achievement" />
              <UserRecommendation />
              <SimplePost type="images" />
              <SimplePost type="video" />
            </div>
          ) : (
            <>
              <div className="left">
                <Post />
                <AchivmentPost />
                <div className="advertise-banner">
                  <img
                    src="https://img.freepik.com/free-psd/sport-banner-template_23-2148615633.jpg"
                    alt="banner image"
                  />
                </div>
                <SimplePost type="achievement" />
                <UserRecommendation />
                <SimplePost type="images" />
                <SimplePost type="video" />
              </div>
              <div className="right">
                <Filter />
                <section className="right-new">
                  <img
                    src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1269901.jpg"
                    alt="image"
                  />
                </section>
                <Subscribers />
                <LastNews />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Content;
