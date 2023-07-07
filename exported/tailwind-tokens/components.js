const alertComponents = require('./alert');
const buttonComponents = require('./button');
const modalComponents = require('./modal');
const tooltipComponents = require('./tooltip');
const checkboxComponents = require('./checkbox');
const inputComponents = require('./input');
const radioComponents = require('./radio');
const selectComponents = require('./select');
const switchComponents = require('./switch');
const createComponentMap = () => {
    const componentMap = {
      ...alertComponents,
      ...buttonComponents,
      ...modalComponents,
      ...tooltipComponents,
      ...checkboxComponents,
      ...inputComponents,
      ...radioComponents,
      ...selectComponents,
      ...switchComponents,
  };
  return componentMap;
  };

module.exports = createComponentMap;