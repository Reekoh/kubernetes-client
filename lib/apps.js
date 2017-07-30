'use strict';

const ApiGroup = require('./api-group');

class Apps extends ApiGroup {
  constructor(options) {
    const resources = [
      'deployments',
      'petsets',
      'statefulsets'
    ];
    options = Object.assign({}, options, {
      path: 'apis/apps',
      version: options.version || 'v1beta1',
      groupResources: resources,
      namespaceResources: resources
    });
    super(options);
  }
}

module.exports = Apps;
