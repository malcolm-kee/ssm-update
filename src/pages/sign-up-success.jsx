import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const SignupPage = () => (
  <Layout>
    <h1>Congratulations!</h1>
    <p>
      You've added to our maillist and will be notified when there is any change
      to the SSM Company Act.
    </p>
    <Link to="/" className="button">
      Back to home
    </Link>
  </Layout>
)

export default SignupPage
