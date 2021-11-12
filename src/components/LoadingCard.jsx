import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingCard() {
  return (
    <div className="loading-card">
      <Skeleton className="container" />
    </div>
  );
}
