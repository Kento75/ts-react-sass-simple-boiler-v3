import React from 'react';

import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

import Button from '../Button';

const components = storiesOf('Components', module);
components.add('Button', () => (
  <Button
    text={text('テキスト', 'ボタンですよ')}
    flag={boolean('テキスト表示', true)}
    action={action('ボタンを押した!')}
  />
));
