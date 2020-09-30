module.exports = {
  purge: [],
  theme: {
    backgroundColor: theme => ({
      ...theme("colors"),
      primary: "#ca6dff",
      doice: "#46B5D1",
      playspace: "#009DEE"
    }),
    textColor: theme => ({
      ...theme("colors"),
      primary: "#ca6dff",
      doice: "#46B5D1",
      playspace: "#009DEE"
    })
  },
  variants: {},
  plugins: []
};
