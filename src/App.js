import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Introduction from './components/Introduction';
import Artist from './components/Artist';
import History from './components/History';
import Header from './components/layouts/Header'; // 헤더 가져오기
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
        {/* Introduction 컴포넌트는 헤더를 포함하지 않음 */}
        <Route path="/" element={<Introduction />} />
        {/* History 컴포넌트 */}
        <Route path="/history" element={<HistoryWithHeader />} />
        {/* Artist 컴포넌트 */}
        <Route path="/artist" element={<ArtistWithHeader />} />
        {/* Artist 페이지로 이동할 때 헤더와 함께 렌더링 */}
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
    </div>
  );
}

function ArtistWithHeader() {
  return (
    <>
      <Header /> {/* 헤더 렌더링 */}
      <Artist />
    </>
  );
}

function HistoryWithHeader() {
  return (
    <>
      <Header /> {/* 헤더 렌더링 */}
      <History />
    </>
  );
}


export default App;
