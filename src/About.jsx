import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="w-32 h-32 rounded-full mb-10 z-10"
        // src="/src/assets/profilepic.jpeg"
        alt="Profile Picture"
      />
      <h1 className="text-2xl font-bold mb-2">Diana Nguyen</h1>
      <div className="relative z-0">
        <p className="text-lg text-center mb-4">
          I am a web developer who recently completed a coding bootcamp. I have a
          passion for creating interactive and user-friendly websites and
          applications. In addition to coding, I enjoy reading and expanding my
          knowledge in various programming languages and technologies.
        </p>
        <p className="text-lg text-center">
          When I'm not coding, you can often find me exploring new places and
          traveling. I love experiencing different cultures, cuisines, and
          landscapes, and it often inspires my creativity in web development.
        </p>
      </div>
    </div>
  );
}

export default About;
