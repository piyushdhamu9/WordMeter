import { useThemeContext } from '../hooks/useTheme';

const Character = ({ state, character, className }) => {
  const { systemTheme } = useThemeContext();
  return (
    <span
      style={{
        color:
          state === undefined
            ? ''
            : state === true
            ? systemTheme.text.secondary
            : '#BD0101',
        backgroundColor: state === false && character === ' ' ? '#BD0101' : '',
      }}
      className={`${className}`}
    >
      {character}
    </span>
  );
};

export default Character;
