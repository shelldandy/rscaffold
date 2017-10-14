const {join} = require('path')

module.exports = {
  description: 'Add a new component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'Component name 🦄'
  }, {
    type: 'input',
    name: 'directory',
    message: 'parent directory (base is src/components) already',
    default: 'general'
  }, {
    type: 'confirm',
    name: 'scss',
    message: 'do you need some scss',
    default: false
  }],
  actions: data => {
    const actions = [
      {
        type: 'add',
        path: 'src/components/{{directory}}/{{properCase name}}/{{properCase name}}.js',
        templateFile: join(__dirname, 'component.js.hbs')
      }, {
        type: 'add',
        path: 'src/components/{{directory}}/{{properCase name}}/index.js',
        templateFile: join(__dirname, 'index.js.hbs')
      }
    ]

    if (data.scss) {
      actions.push({
        type: 'add',
        path: 'src/components/{{directory}}/{{properCase name}}/{{properCase name}}.scss',
        templateFile: join(__dirname, 'component.scss.hbs')
      })
    }

    return actions
  }
}