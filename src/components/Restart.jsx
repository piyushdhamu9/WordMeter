import styled from 'styled-components';
import { MdRestartAlt } from 'react-icons/md';
import { useThemeContext } from '../hooks/useTheme';
import Tooltip from './Tooltip';

const StyledButton = styled.button`
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.text.title};
    background-color: ${({ theme }) => theme.background.secondary};
  }
`;

const Restart = ({ restart }) => {
  const { systemTheme = { text: { title: '#fff' }, background: { secondary: '#000' } } } = useThemeContext();
  
  return (
    <div className='mt-10'>
      <Tooltip tooltipId='Restart' delayHide={200}>
        <div className='flex items-center justify-center'>
          <StyledButton
            theme={systemTheme} // Explicitly pass the theme here
            onClick={restart}
            className='rounded-full p-3 transition ease-out'
            data-tooltip-id='Restart'
            data-tooltip-content='Restart Test'
            data-tooltip-place='bottom'
            aria-label='Restart Test'
          >
            <MdRestartAlt className='text-2xl lg:text-3xl' />
          </StyledButton>
        </div>
      </Tooltip>
    </div>
  );
};

export default Restart;
