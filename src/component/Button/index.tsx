import React from 'react';

export interface IButtonProps {
  text: string;
  flag?: boolean;
  action(): void;
}

const Button = (props: IButtonProps) => {
  const { text, flag, action } = props;
  return (
    <React.Fragment>
      { flag && <p>{text}</p> }
      <button onClick={ action }>Button</button>
    </React.Fragment>
  );
};

export default Button;
