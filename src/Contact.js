import React from "react";

const Contact = () => {
  return (
    <>
    <div style={{width : '100%', backgroundColor : 'black'}}>
      <h1 className="servicestitle">Feel free to Contact me</h1>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2210.112682361961!2d151.100940909086!3d-33.90988944449552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ba50ffaa3a55%3A0xcd525f68ff69e486!2sCampsie%20Station!5e0!3m2!1sen!2sau!4v1707654315352!5m2!1sen!2sau"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="formdiv">
        <form
          action="https://formspree.io/f/xpzvdalr"
          method="POST"
          className="forminputs"
        >
          <input
            type="text"
            name="Username"
            placeholder="Username"
            autoComplete="off"
            required
            style={{ height: "40px", padding: "10px", backgroundColor : 'white' }}

          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
            style={{ height: "40px", padding: "10px",backgroundColor : 'white' }}
          />
          <textarea
            name="message"
            cols="30"
            rows="6"
            autoComplete="off"
            required
            style={{backgroundColor : 'white'}}
          />
          <div style={{ display: "grid", alignSelf: "center" }}>
            <input className="connectbutton" type="submit" value="send" />
          </div>
        </form>
      </div>
      <div
        style={{
          // transform: "translateY(50%)",
          display: "flex",
          justifyContent: "space-around",
          width: "80%",
          borderRadius: "10px",
          margin: "0 auto",
          padding: "10px",
          alignItems: "center",
          backgroundColor: "#eeeee4",
        }}
      >
        <div>
          <h2 className="ready">Ready to get started?</h2>
          <h2 className="ready">Talk to me today</h2>
        </div>
        <div>
          {/* <button className="connectbutton">Get Started</button> */}
        </div>
      </div>
      </div>
     
    </>
  );
};

export default Contact;
