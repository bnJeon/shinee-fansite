import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap'; // gsap import 추가
import artistData from '../artist.js'; // artist.js에서 데이터 가져오기

function Artist() {
  const [expandedItem, setExpandedItem] = useState(null); // 클릭된 항목의 인덱스를 추적하는 상태

  useEffect(() => {
    const items = document.querySelectorAll('.item');

    const expand = (item, i) => {
      items.forEach((it, ind) => {
        if (i === ind) return;
        it.clicked = false;
        gsap.to(it, {
          width: '15vw',
          duration: 2,
          ease: 'elastic(1, .6)',
        });
      });

      item.clicked = !item.clicked;
      gsap.to(item, {
        width: item.clicked ? '25vw' : '15vw',
        duration: 2.5,
        ease: 'elastic(1, .3)',
      });
    };

    items.forEach((item, i) => {
      item.clicked = false;
      item.addEventListener('click', () => {
        expand(item, i);
        setExpandedItem(item.clicked ? i : null); // 클릭된 이미지의 인덱스를 설정합니다.
      });
    });
  }, []); // 한 번만 실행되어야 합니다.

  const renderDescription = () => {
    if (expandedItem !== null) {
      const member = artistData[expandedItem]; // artistData에서 클릭된 이미지의 데이터를 가져옵니다.

      return (
        <div className="description">
          <h2>{member.name}</h2>
          <p>{member.age}</p>
          <p>Position: {member.position}</p>
        </div>
      );
    }
    return null; // 클릭된 이미지가 없으면 아무것도 반환하지 않습니다.
  };

  return (
    <div className="my-5">
      <h1 className="text-white my-5">ARTIST</h1>
      <p>사진을 클릭하면 아티스트의 정보를 볼 수 있습니다.</p>
      <div className="group justify-content-center">
        {/* 상단 세 명의 아티스트 */}
        <div className="artist-row">
          {artistData.slice(0, 3).map((member, index) => (
            <div
              key={index}
              className={`item ${expandedItem === index ? 'expanded' : ''}`}
              style={{ backgroundImage: `url(${member.image})` }}
            ></div>
          ))}
        </div>
        {/* 하단 두 명의 아티스트 */}
        <div className="artist-row">
          {artistData.slice(3, 5).map((member, index) => (
            <div
              key={index + 3} // 고유한 키를 생성하기 위해 추가
              className={`item ${expandedItem === index + 3 ? 'expanded' : ''}`}
              style={{ backgroundImage: `url(${member.image})` }}
            ></div>
          ))}
        </div>
      </div>
      {renderDescription()} {/* 클릭된 이미지에 대한 설명을 렌더링합니다. */}
    </div>
  );
}

export default Artist;
