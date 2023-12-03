import React, { useState, useEffect, Suspense } from "react";
import Spinner from "../components/Spinner";

import Dashboard from "../components/Dashboard";
import ProfileLayout from "../components/ProfileLayout";
import Table from "../components/Table";
import BarChartComponent from "../components/BarChartComponent";

export default function Profile() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [entries, setEntries] = useState(null);
  const changePage = (index) => {
    setCurrentIndex(index);
  };
  const fetchData = async () => {
    const response = await fetch(
      "https://blackcoffer-alemeno.onrender.com/api/entries"
    );
    const data = await response.json();
    setEntries(data);
  };

  useEffect(() => {
    fetchData();
  }, [currentIndex]);
  return (
    <>
      <Dashboard pageChange={changePage} entries={entries} />
      {currentIndex === 0 ? (
        <ProfileLayout entries={entries} show={true}>
          <BarChartComponent entries={entries} />
        </ProfileLayout>
      ) : currentIndex === 1 ? (
        <ProfileLayout show={false}>
          <Table entries={entries} />
        </ProfileLayout>
      ) : (
        ""
      )}
    </>
  );
}
