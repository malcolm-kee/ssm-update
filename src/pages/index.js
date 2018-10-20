import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query data {
        diffs: allInternalDiffs(
          filter: { date: { nin: [null, "9999-99-99"] } }
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
        </Layout>
      )
    }}
  />
)

export default IndexPage
