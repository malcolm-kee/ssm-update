import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import { Disclaimer } from '../components/disclaimer';
import Layout from '../components/layout';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query data {
        diffs: allMongodbMsiassmDiffs(
          sort: { fields: date, order: DESC }
          limit: 5
        ) {
          days: edges {
            details: node {
              date
              records {
                section
                title
              }
            }
          }
        }
      }
    `}
    render={({ diffs }) => {
      return (
        <Layout>
          {diffs === null ? (
            <h2>Sorry, there is no data yet</h2>
          ) : (
            <div>
              <div className="banner">
                <span className="callout">Subscribe to future changes</span>
                <Link to="/sign-up" className="button">
                  Click here
                </Link>
              </div>
              {diffs.days.map((day, i) => (
                <div key={i}>
                  <h2>{day.details.date}</h2>
                  <table>
                    <thead>
                      <tr>
                        <th>Section</th>
                        <th>Title</th>
                      </tr>
                    </thead>
                    <tbody>
                      {day.details.records.map((record, i) => (
                        <tr key={i}>
                          <td>{record.section}</td>
                          <td>{record.title}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          )}
          <footer className="footer">
            <p className="disclaimer">
              Note: The changes listed here is detected by comparing changes on
              the SSM Companies Act 2016 webpage{' '}
              <a href="http://www.ssm.com.my/Pages/Legal_Framework/Companies-Act-2016.aspx">
                http://www.ssm.com.my/Pages/Legal_Framework/Companies-Act-2016.aspx
              </a>
              . If SSM does not update the webpage, then change will not be
              detected.
            </p>
            <Disclaimer />
          </footer>
        </Layout>
      );
    }}
  />
);

export default IndexPage;
