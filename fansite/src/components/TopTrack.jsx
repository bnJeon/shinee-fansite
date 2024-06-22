import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../auth'; // auth.js 파일의 경로에 따라 수정
import '../style/toptrack.css';

function TopTrack() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const accessToken = await getToken(); // getToken 함수 호출하여 액세스 토큰 발급
        if (!accessToken) {
          throw new Error('Failed to get access token');
        }
        const response = await axios.get('https://api.spotify.com/v1/artists/2hRQKC0gqlZGPrmUKbcchR?si=R4sCZU-gTsi_42Pz-i1jsg/top-tracks', {
                                          
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            market: 'KO',
          },
        });
        console.log('API response:', response.data); // 응답 데이터 구조 확인.
        setTracks(response.data.images);
      } catch (error) {
        console.error('Error fetching top tracks:', error.response ? error.response.data : error.message);
      }
    };

    fetchTopTracks();
  }, []);

  return (
    <div className="toptrack">
      <h2>SHINee's Top Tracks</h2>
      <ul>
        {tracks.map((track) => (
          // <li key={track.track.id}>
            {/* {track.track.name} by {track.track.artists.map(artist => artist.name).join(', ')} */}
          // </li>
        ))}
      </ul>
    </div>
  );
}

export default TopTrack;
