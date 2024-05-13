import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap'; // gsap import 추가
import data from '../data';
import '../style/Introduction.css'; // Introduction.css 파일 import

function Introduction() {
  const [expandedItem, setExpandedItem] = useState(null); // 클릭된 항목의 인덱스를 추적하는 상태

  useEffect(() => {
    const items = document.querySelectorAll('.item');

    const expand = (item, i) => {
      items.forEach((it, ind) => {
        if (i === ind) return
        it.clicked = false
        gsap.to(it, {
          width: '15vw',
          duration: 2,
          ease: 'elastic(1, .6)'
        })
      })

      item.clicked = !item.clicked
      gsap.to(item, {
        width: item.clicked ? '25vw' : '15vw',
        duration: 2.5,
        ease: 'elastic(1, .3)'
      })
    }

    items.forEach((item, i) => {
      item.clicked = false
      item.addEventListener('click', () => {
        expand(item, i);
        setExpandedItem(item.clicked ? i : null); // 클릭된 이미지의 인덱스를 설정합니다.
      });
    })
  }, []); // 한 번만 실행되어야 합니다.

  const renderDescription = () => {
    if (expandedItem !== null) {
      const member = data[expandedItem]; // 클릭된 이미지의 데이터를 가져옵니다.

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
    <div className="introduction">
      <h1 className="text-white">My SHINee</h1>
      <p>사진을 클릭하면 아티스트의 정보를 볼수있습니다</p>
      <div className="group">
        <div className="group">
          {data.map((member, index) => ( // 데이터 배열을 기반으로 멤버 항목을 생성합니다.
            <div
              key={index}
              className={`item ${expandedItem === index ? 'expanded' : ''}`} // 클릭된 항목인지 확인하여 클래스를 추가합니다.
              style={{ backgroundImage: `url(${member.image})` }} // 데이터에서 이미지 URL을 가져와서 적용합니다.
            ></div>
          ))}
        </div>
      </div>
      {renderDescription()} {/* 클릭된 이미지에 대한 소개글을 렌더링합니다. */}
      <Link to="/app" className="fan-site-button" style={{ textDecoration: 'none' }}>
  SHINee 팬사이트 보러가기
</Link>

    </div>
  );
}

export default Introduction;
