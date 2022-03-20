import type { ButtonHTMLAttributes } from 'vue';

export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'theme'
  | 'danger';

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';
export type RadiusSize = 'large' | 'medium' | 'small';

export type ButtonNativeType = NonNullable<ButtonHTMLAttributes['type']>;

export type ButtonIconPosition = 'left' | 'right';
