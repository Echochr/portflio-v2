import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../styles/CustomSwiper.css';

import SKILLS from '../../constants/skills';
import SkillCard from './SkillCard';

const SubHeading = styled.h4`
  ${tw`
    font-bold
    uppercase
  text-yellow-500
    text-xl
  `}
`;

const BoldText = styled.h5`
  ${tw`
    uppercase
    font-bold
    text-white
  `}
`;

const SkillCardGrid = styled.div`
  ${tw`
    grid
    grid-cols-3
    xl:grid-cols-4
    2xl:grid-cols-5
    gap-4
    place-items-center

    mt-4
    px-2
    md:px-4
    xl:px-8
  `}
`;

function SkillsSubsection() {
  return (
    <>
      <SubHeading>Skills</SubHeading>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {SKILLS.map((category, idx) => (
          <SwiperSlide key={idx}>
            <BoldText>{Object.keys(category)}</BoldText>
            <SkillCardGrid>
              {Object.values(category)
                .flat(1)
                .map(({ skill, title }) => (
                  <SkillCard skill={skill} title={title} key={title} />
                ))}
            </SkillCardGrid>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SkillsSubsection;
