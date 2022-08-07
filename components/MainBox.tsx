import React from "react";
import SectionOne from "./SectionOne";
import Stepper from "react-stepper-horizontal";
import CardOne from "./CardOne";
import cardDetails from "../shared/CardDetails.json";
import cardTwoDetails from "../shared/CardData.json";
import SectionTwo from "./SectionTwo";
import PreSection from "./PreSection";
import EmergencyContents from "./EmergencyContents";
import CardTwo from "./CardTwo";

const MainBox = () => {
  return (
    <div className=" bg-[#fff3e4] w-full xl:px-8 py-6">
      <SectionOne />
      <div className="text-blue-800 text-xs font-bold">
        <Stepper
          activeColor="#3c3f7e"
          completeColor="#3c3f7e"
          defaultFontColor="#3c3f7e"
          titleFontSize="12px"
          defaultBorderColor="#000"
          defaultBorderWidth={2}
          completeBarColor="#eea622"
          defaultBarColor="white"
          lineMarginOffset={1}
          steps={[
            { title: "Pay Application Fee" },
            { title: "Prepare Application" },
            { title: "Submission In Progress" },
            { title: "Decision" },
            { title: "Post-Decision Requirements" },
            { title: "Enrollment Confirmed" },
          ]}
          activeStep={1}
        />
      </div>
      <SectionTwo />

      <div>
        <PreSection
          title="PRE-PAYMENT"
          details="LAST REQUIREMENT COMPLETED ON JUL. 04, 2022"
        />

        {cardDetails.map((note) => (
          <CardOne key={note.id} {...note} />
        ))}
      </div>
      <div className="mt-4">
        <PreSection
          title="PRE-SUBMISSION"
          details="1 REQUIRTEMENTS TO BE COMPLETED"
        />
        <EmergencyContents />
        {cardTwoDetails.map((note) => (
          <CardTwo key={note.id} {...note} />
        ))}
      </div>
    </div>
  );
};

export default MainBox;
