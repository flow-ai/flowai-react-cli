import pjson from '../package.json';

const
  args = process.argv.slice(2),
  action = args[0],

  // options passed in as arguments
  version = (args.includes('-v')) || (args.includes('--version')),
  help = (args.includes('-h')) || (args.includes('--help'));

if (version) {
  console.log(pjson.version);
  process.exit();
}

if (help) {
  console.log([
    'usage: flowai-react-cli <action> <filename> [options]',
    '',
    'actions:',
    '  comp, component          Passed in as first argument to signify component creation',
    '',
    'options:',
    '  -v, --version            Output\'s the version number',
  ].join('\n'));
  process.exit();
}

if (action === 'component' || action === 'comp') {
  console.log('test')
}
