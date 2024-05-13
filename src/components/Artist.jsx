import React from 'react';
import data from '../data';

function Artist() {
  return (
    <div className="artist">
      {data.map((artist) => (
        <div key={artist.id} className={`artist-container ${artist.name === 'JongHyun' || artist.name === 'Minho' ? 'reverse' : ''}`}>
          <div className="col-md-4">
            <div className="container my-5">
              <div className="card text-center">
                <div className="card-img-container">
                  <img src={artist.image} className="card-img-top" alt={artist.name} />
                  {/* 호버 시에 zoom 클래스 추가 */}
                  <div className="zoom"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body text-center">
            <div className="text-container">
              <h5 className="card-title">{artist.name}</h5>
              <div className="info">
                <h5 className="card-title age">{artist.age}</h5>
                <h5 className="card-title position">{artist.position}</h5>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Artist;
