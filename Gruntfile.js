module.exports = function(grunt) {
  // configration
  grunt.initConfig({
    shell: {
      gitHub: {
        command: [
          "git add .",
          'git commit -m "add flex menu"',
          "git push origin master"
        ].join("&&")
      }
    }
  });

  //load plugins
  grunt.loadNpmTasks("grunt-shell");

  // registerTask

  grunt.registerTask("deploy", ["shell"]);
};
