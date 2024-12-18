import React from "react";

const About = () => {
  return (
    <>
      <style>
        {`
          .card {
            margin: 20px auto;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            background-color: #ffffff;
            transition: transform 0.3s ease;
          }

          .card:hover {
            transform: translateY(-5px);
          }

          .card-title {
            font-size: 1.5em;
            margin-bottom: 10px;
            color: #2c3e50;
            text-align: center;
          }

          .card-text {
            font-size: 1em;
            line-height: 1.6;
            color: #555;
            padding: 10px 20px;
          }

          .img-fluid {
            display: block;
            width: 100%;
            height: auto;
          }

          .row {
            display: flex;
            flex-wrap: wrap;
          }

          .col-md-8, .col-md-4, .col-md-3, .col-md-9 {
            padding: 10px;
            flex: 1;
          }

          .col-md-8 {
            flex: 2;
          }

          .col-md-4 {
            flex: 1;
          }

          .col-md-3 {
            flex: 1;
          }

          .col-md-9 {
            flex: 3;
          }

          .card-body {
            padding: 20px;
          }

          .center {
            text-align: center;
          }

          /* About Card Styles */
          .about-card {
            background-color: #eef2f6;
            border: 1px solid #d1e7ff;
          }

          .about-card h5 {
            color: #2c3e50;
            font-weight: bold;
          }

          .about-card p {
            color: #555;
            margin: 10px 0;
          }

          /* CEO Card Styles */
          .ceo-card {
            background-color: #f9f9f9;
            border: 1px solid #cfd8dc;
          }

          .ceo-card h5 {
            color: #2c3e50;
            font-weight: bold;
          }

          .ceo-card p {
            color: #555;
            margin: 10px 0;
          }

          strong {
            color: #333;
          }

          @media (max-width: 768px) {
            .row {
              flex-direction: column;
            }

            .col-md-8, .col-md-4, .col-md-3, .col-md-9 {
              flex: 1 1 100%;
            }
          }
        `}
      </style>
      {/* Bank Details Card */}
      <div className="card about-card">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <center>
                <h5 className="card-title">About MyFinBank</h5>
                <p className="card-text">
                  MyFinBank is a leading financial institution established in
                  January 2000. With headquarters located at 123 Main Street,
                  Cityville, State, Country, MyFinBank offers a wide range of
                  banking services including savings accounts, checking
                  accounts, personal loans, home loans, auto loans, credit
                  cards, investment services, retirement planning, online
                  banking, and a user-friendly mobile banking app.
                </p>
              </center>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="https://media.istockphoto.com/id/1487041391/photo/indian-rupee-money-bank-loan.jpg?b=1&s=612x612&w=0&k=20&c=LWBu_9n-UbUGVpHDWxgxUeAxR3LpAMVBnAV8pRRWR40="
              className="img-fluid rounded-start"
              alt="MyFinBank"
            />
          </div>
        </div>
      </div>
      {/* CEO Card */}
      <div className="card ceo-card">
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="img-fluid rounded-start"
              alt="CEO"
            />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">CEO of MyFinBank</h5>
              <p className="card-text">
                <strong>Name:</strong> Rachel Johnson
                <br />
                <strong>Age:</strong> 52
                <br />
                <strong>Education:</strong> MBA in Finance from Harvard Business
                School
                <br />
                <strong>Experience:</strong> Rachel has over 25 years of
                experience in the banking industry. Before joining MyFinBank,
                she served as the Chief Financial Officer (CFO) of a leading
                multinational bank for 10 years. Prior to that, she held various
                executive positions in both regional and national banks.
                <br />
                <strong>Vision:</strong> Rachel is committed to leading
                MyFinBank towards becoming a pioneer in digital banking
                solutions while maintaining a strong focus on customer
                satisfaction and financial inclusion.
                <br />
                <strong>Achievements:</strong> Under Rachel's leadership,
                MyFinBank has seen significant growth in its market share and
                profitability. She has successfully implemented innovative
                strategies to streamline operations and enhance the bank's
                competitiveness in the ever-evolving financial landscape.
                <br />
                <strong>Community Involvement:</strong> Rachel is actively
                involved in philanthropic activities, particularly those aimed
                at promoting financial literacy and supporting underprivileged
                communities.
                <br />
                <strong>Interests:</strong> Outside of work, Rachel enjoys
                hiking, playing tennis, and attending classical music concerts.
                She is also passionate about art and often visits galleries in
                her free time.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
