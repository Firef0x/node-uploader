import { action } from '@storybook/addon-actions';

export default function logAction(name) {
  return action(name);
}
