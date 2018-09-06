import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'
import Readme from './README.md'

const stories = storiesOf('Button', module)

stories
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add('base', () => (
    <input onClick={action('clicked')} value="Sample Button" type="button" />
  ))