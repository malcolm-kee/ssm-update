import React from 'react';
import Layout from '../components/layout';
import { Disclaimer } from '../components/disclaimer';

const SignupPage = () => (
  <Layout>
    <div>
      <form
        name="signup"
        method="POST"
        action="/sign-up-success"
        netlify-honeypot="trap"
        data-netlify="true"
        className="signup-form"
      >
        <h2>Get notified for change of SSM Company Act</h2>
        <div className="field">
          <label htmlFor="subscriber-name" className="label">
            Your Name
          </label>
          <input
            id="subscriber-name"
            name="name"
            type="text"
            placeholder="e.g. Steve Jobs"
            required
            className="input"
            autoComplete="name"
          />
        </div>
        <div className="field">
          <label htmlFor="subscriber-email" className="label">
            Your Email
          </label>
          <input
            id="subscriber-email"
            name="email"
            type="email"
            placeholder="e.g. abc@xyz.com"
            required
            className="input"
            autoComplete="email"
          />
        </div>
        <div className="honey" aria-hidden={true}>
          <label>
            Don't fill up this if you're human: <input name="trap" />
          </label>
        </div>
        <input type="hidden" name="form-name" value="signup" />
        <div>
          <button className="button" type="submit">
            Subscribe
          </button>
        </div>
      </form>
    </div>
    <footer className="footer">
      <Disclaimer />
    </footer>
  </Layout>
);

export default SignupPage;
