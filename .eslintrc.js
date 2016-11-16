module.exports = {
  extends: "trussle",

  env: {
    node: true
  },

  rules: {
    // I have a dream.
    "semi": ["error", "never"],

    // We're allowed to console here;
    // it's a set of console scripts!
    "no-console": "off"
  }
};
