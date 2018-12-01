var indexTemplate = require('./components/home');

indexTemplate.renderSync({ title: 'My test wow' })
    .appendTo(document.body);