/* eslint-disable import/no-extraneous-dependencies */
import { addDecorator, configure } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'
import { setOptions } from '@storybook/addon-options'

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

setOptions({
  name: 'Test Storybook',
  addonPanelInRight: true,
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
})

const req = require.context('../src/stories', true, /\.stories\.(js|jsx)$/)

const loadStories = () => {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
