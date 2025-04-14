module.exports = {
    allocateMemory: function (userContext, events, done) {
      // Allocate about 100 MB RAM per VU
      userContext.vars.memoryHog = new Array(25 * 1024 * 1024).join("x");
      return done();
    }
  };
  