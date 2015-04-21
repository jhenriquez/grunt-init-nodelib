module.exports.description = 'A simplified version of grunt-init-node.';
module.exports.warnOn = '*';

module.exports.template = function (g, init, done) {

  function processTemplate (err, props) {
      if (err) {
        console.log('Oops! Somthing went wrong!');
        console.log(err);
        done();
      }

      props.devDependencies = {
        'grunt-contrib-jshint': '>=0.11.0',
        'grunt-contrib-watch': '>=0.6.1',
        'cucumber': 'latest'
      };

      props.keywords = [];

      var files = init.filesToCopy();

      if (/n/i.test(props.cucumber)) {
        delete props.devDependencies.cucumber;
        Object.keys(files).map(function (file) {
          if (/features/ig.test(file)) {
            delete files[file];
          }
        });
      }

      init.copyAndProcess(files, props);
      init.writePackageJSON('package.json', props);

      done();
  }

  init.process([
    init.prompt('name'),
    init.prompt('description', 'An awesome new project!'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('bugs'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    init.prompt('node_version', '>= 0.8.0'),
    init.prompt('main'),
    init.prompt('npm_test'),
      { 
        "name": 'cucumber',
        "default": "Y",
        "message": "Will we be using cucumber? (Y/n)"
      }
    ], processTemplate);
};
