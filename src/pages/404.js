import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>The page you're looking for doesn&#39;t exist... the sadness.</p>
    <Link to="/" className="button">
      Back to home
    </Link>
  </Layout>
);

export default NotFoundPage;
