import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Artist from './components/Artist';
import History from './components/History';
import TopTrack from './components/TopTrack';
import Login from './components/Login';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    // 페이지가 로드될 때 헤더를 렌더링합니다.
    return () => {};
  }, []);

  return (
    <div className="App">
      <Routes>
        {/* 루트 경로에 대한 라우팅 */}
        <Route path="/" element={<AppContent />} />
        <Route path="login" element={<LoginWithHeader />} />
        <Route path="/history" element={<HistoryWithHeader />} />
        <Route path="/artist" element={<ArtistWithHeader />} />
        <Route path="/toptrack" element={<TopTrackWithHeader/>} />
        <Route path="/app" element={<AppContent />} />
      </Routes>
    </div>
  );
}

function AppContent() {
  return (
    <div className="AppContent">
      <Header /> {/* 헤더 렌더링 */}
      <Artist />
      <History />
      <TopTrack />
      <Footer />
    </div>
  );
}

function LoginWithHeader() {
  return (
    <>
      <Header /> {/* 헤더 렌더링 */}
      <Login />
      <Footer />
    </>
  );
}

function ArtistWithHeader() {
  return (
    <>
      <Header /> {/* 헤더 렌더링 */}
      <Artist />
      <Footer />
    </>
  );
}

function HistoryWithHeader() {
  return (
    <>
      <Header /> {/* 헤더 렌더링 */}
      <History />
      <Footer />
    </>
  );
}

function TopTrackWithHeader() {
  return(
    <>
    <Header />
    <TopTrack />
    <Footer />
    </>
  );
}

export default App;
