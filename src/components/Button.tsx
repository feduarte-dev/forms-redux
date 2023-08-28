type Props = {
  label: string,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  type: 'button' | 'submit',
  moreClasses: string,
  disabled?: boolean
};

function Button({ label, onClick = () => {},
  type = 'button', moreClasses = '', disabled = undefined }: Props) {
  return (
    <button
      className={ `button ${moreClasses}` }
      type={ type }
      onClick={ onClick }
      disabled={ disabled }
    >
      { label }
    </button>
  );
}

export default Button;
