import Head from 'next/head';
import { useState } from 'react';

export default function Submit() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <Head>
        <title>Submit Entry – Sozo Mojo</title>
      </Head>

      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">🎤 Submit Your Entry</h1>
        <p className="text-gray-300">Show us what you've got. Mojo loves boldness.</p>
      </header>

      {!submitted ? (
        <form
          className="max-w-xl mx-auto space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input type="text" required className="w-full p-2 rounded text-black" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" required className="w-full p-2 rounded text-black" />
          </div>
          <div>
            <label className="block text-sm mb-1">Category</label>
            <select className="w-full p-2 rounded text-black">
              <option>Poetry</option>
              <option>Music</option>
              <option>Visual Art</option>
              <option>Short Film</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Link to Entry (Google Drive, YouTube, etc.)</label>
            <input type="url" required className="w-full p-2 rounded text-black" />
          </div>
          <div>
            <label className="block text-sm mb-1">Short Description</label>
            <textarea className="w-full p-2 rounded text-black" rows="4" />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-300 transition"
          >
              import { useEffect, useState } from 'react';

function Countdown({ deadline }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(deadline) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mb-8">
      <h3 className="text-2xl font-semibold mb-2">⏳ Deadline Countdown</h3>
      <p className="text-lg">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s left to enter!
      </p>
    </div>
  );
}
            Submit Entry
          </button>
        </form>
      ) : (
        <div className="text-center text-green-400 text-xl">
          ✅ Thank you for submitting! We’ll review and share soon.
        </div>
      )}
    </div>
  );
}
