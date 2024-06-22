import React, { useEffect } from 'react';
import historyData from '../history';
import '../style/history.css';

function History() {
  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // 요소가 10% 보이면 트리거
    });

    const elements = document.querySelectorAll('.card-body');
    elements.forEach(element => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="history">
      <h1 className="text-white">HISTORY</h1>
      {historyData.map((history, index) => (
        <div key={history.id} className={`history-container ${index % 2 === 1 ? 'reverse' : ''}`}>
          <div className="col-md-4">
            <div className="container my-5">
              <div className="card text-center">
                <div className="card-img-container">
                  <img src={history.image} className="card-img-top" alt={history.name} />
                  <div className="zoom"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body text-center">
            <div className="text-container">
              <h5 className="card-title">{history.name}</h5>
              <div className="info">
                <h5 className="card-title date">발매일: {history.date}</h5>
                <h5 className="card-title style">장르: {history.style}</h5>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default History;
