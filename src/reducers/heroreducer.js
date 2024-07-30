const initialState = {
  home: {
    intro: "Hello I am,",
    name: "Suzit Paudel",
    img: "./images/mynewpic.png",
    data: "Welcome to my portfolio! I specialize in frontend development, crafting elegant and intuitive user experiences. Explore my projects to see how I blend creativity with technical expertise to deliver impactful solutions using HTML,CSS and JavaScript",
  },
  about: {
    intro: "",
    name: "About Page",
    img: "./images/aboutimage.png",
    data: "I am a individual with a background in Front-end web development, having gained valuable experience in HTML5, CSS3, JavaScript, ReactJS, Material UI, Bootstrap, TypeScript and Responsive web design.",
  },
};

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HOME_DATA":
      return { ...state, current: state.home };
    case "ABOUT_DATA":
      return { ...state, current: state.about };
    default:
      return { ...state, current: state.home };
  }
};

export default heroReducer;
