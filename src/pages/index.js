import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card';

const IndexPage = () => (
  <div>
    <div className="hero">
      <div className="herogroup">
        <h1>Get the complete picture of your loved one’s care.</h1>
        <p>Hello Jed gives a patient's care team - doctors, nurses, and family members - a place to communicate, stay up to date, and work together.</p>
        <svg width="100%" height="172" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#54966E">
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="20s" 
            values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

            M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;"
            />
          </path>
        </svg>
      </div>
    </div>
    <div className="cards">
      <h2>Helping the entire care team</h2>
      <p>In every medical event, there's a "care team" that consists of at least three individuals: a doctor, the patient, and a friend or family member. When caring for the elderly, this team expands to specialists, nurses, and therapists.</p>
      <div className="cardgroup">
        <Card 
          title="React for designers"
          description="React is a powerful modern Javascript library"
          text="12 sections" />
        <Card 
          title="Design Systems"
          description="Somehow everybody's already an expert in new practices"
          text="10 sections" />
        <Card 
          title="Git for designers"
          description="So when things inevitably break, you can CMD+Z"
          text="12 sections" />
        <Card 
          title="SF 101"
          description="Get fitted for Patagonia vests, Bombas socks, and Allbirds"
          text="12 sections" />
        <Card 
          title="Rest &amp; Vest"
          description="Get acquired and find a secluded rooftop with a lounge chair"
          text="12 sections" />
      </div>
    </div>
  </div>
)

export default IndexPage
