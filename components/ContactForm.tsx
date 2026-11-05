
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
const [eventDate, setEventDate] = useState("");

  const sendWhatsApp = () => {
    if (
  !name.trim() ||
  !email.trim() ||
  !phone.trim() ||
  !eventDate ||
  !eventType ||
  !details.trim()
) {
  alert("Please complete all fields.");
  return;
}

const cleanPhone = phone.replace(/[\s()-]/g, "");

const validPhone =
  /^(?:\+254|254|0)[17]\d{8}$/.test(cleanPhone);

if (!validPhone) {
  alert(
    "Please enter a valid Kenyan mobile number, e.g. 0729123456 or +254729123456."
  );
  return;
}

const validEmail =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

if (!validEmail) {
  alert("Please enter a valid email address.");
  return;
}

   
const message = [
  "Hello Protocol Kenya,",
  "I would like to inquire about your services.",
  "",
  `Name: ${name}`,
  `Email: ${email}`,
  `Phone: ${phone}`,
  `Event Date: ${eventDate}`,
  `Event Type: ${eventType}`,
  `Event Details: ${details}`,
].join("\n");


    const url =
      "https://wa.me/254729325439?text=" +
      encodeURIComponent(message);

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-5">
      <input
        type="text"
        placeholder="Your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white"
      />

      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white"
      />
      
<div>
  <label
    htmlFor="client-phone"
    className="mb-2 block text-sm text-white/70"
  >
    Phone Number
  </label>

  <input
    id="client-phone"
    type="tel"
    placeholder="+254 7XX XXX XXX"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    required
    className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-white/40 focus:border-cyan-300 focus:outline-none"
  />
</div>

<div>
  <label
    htmlFor="event-date"
    className="mb-2 block text-sm text-white/70"
  >
    Event Date
  </label>

  <input
    id="event-date"
    type="date"
    value={eventDate}
    min={new Date().toLocaleDateString("en-CA")}
    onChange={(e) => setEventDate(e.target.value)}
    required
    className="w-full rounded-xl border border-white/10 bg-[#111827] p-4 text-white focus:border-cyan-300 focus:outline-none"
  />
</div>




      <select
        value={eventType}
        onChange={(e) => setEventType(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-[#111827] p-4 text-white"
      >
        <option value="">Select event type</option>
        <option>Corporate Event</option>
        <option>Wedding</option>
        <option>Conference</option>
        <option>VIP / Protocol</option>
        <option>Other</option>
      </select>

      <textarea
        placeholder="Event date, venue, number of guests and services needed..."
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        rows={5}
        className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white"
      />

      <button
        type="button"
        onClick={sendWhatsApp}
        className="w-full rounded-full bg-green-600 px-6 py-4 font-semibold text-white hover:bg-green-700"
      >
        Send Enquiry via WhatsApp
      </button>
    </div>
  );
}
