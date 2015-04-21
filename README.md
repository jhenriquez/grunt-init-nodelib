### grunt-init-nodelib ###

[grunt-init-node][1] is a great starting point when approaching grunt-init and probably during a period its usefulness went beyond being only didactive.

But right now it does certain assumptions I personally disapprove, like selecting a test runner. This is why I decided to create a destiled version. This one does not include any test runner, yet it asks if you would like to include cucumber. If so, it adds the dependency and a basic folder structure.

It does add a Gruntfile with jshint and watch configurations.

[1]: https://github.com/gruntjs/grunt-init-node