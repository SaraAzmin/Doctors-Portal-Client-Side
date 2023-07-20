import React from "react";
import Treatment1 from "../../assets/images/treatment.png";
import SharedButton from "../Shared/SharedButton";

const Treatment = () => {
  return (
    <div>
      <div className="min-h-screen px-8 md:px-24">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={Treatment1}
            className="min-w-sm lg:max-w-sm rounded-lg shadow-2xl"
          />
          <div className="ml-0 lg:ml-10">
            <h1 className="text-3xl md:text-5xl font-bold text-accent">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-3 md:py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <SharedButton>Get Started</SharedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
