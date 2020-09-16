module.exports = {
  purge: [],
  theme: {
    backgroundColor: theme => ({
      ...theme("colors"),
      primary: "#ca6dff"
    }),
    textColor: theme => ({
      ...theme("colors"),
      primary: "#ca6dff"
    })
  },
  variants: {},
  plugins: []
};
