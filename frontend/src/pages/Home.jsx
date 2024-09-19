import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header>
        <h1>Welcome to ChatWave</h1>
        <p>Your free experimental text messenger</p>
      </header>
      <main>
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>
              <strong>Real-time Messaging:</strong> Instant messaging with
              friends and family.
            </li>
            <li>
              <strong>Group Chats:</strong> Create groups to stay in touch with
              multiple people at once.
            </li>
            <li>
              <strong>Text Effects:</strong> Unique text effects to add flavor
              to your messages.
            </li>
            <li>
              <strong>Privacy First:</strong> Your data is secure with
              end-to-end encryption.
            </li>
            <li>
              <strong>Totally Free:</strong> No fees or subscriptions, ever!
            </li>
          </ul>
        </section>
        <section className="call-to-action">
          <h2>Join Us Today!</h2>
          <p>
            Become part of a new way to communicate. Sign up now and experience
            the future of messaging!
          </p>
          <button>
            <Link to="/login">Sign Up for Free</Link>
          </button>
        </section>
      </main>
    </div>
  );
}

export default Home;
