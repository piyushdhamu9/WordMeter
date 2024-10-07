import { useState, useEffect, useCallback } from 'react';

import { useCursorPosition } from './useCursorPosition';
import { isAllowedCode } from '../utils';

export const useKeyDown = (active) => {
  const [typingState, setTypingState] = useState('idle');
  const [charTyped, setCharTyped] = useState('');
  const [totalCharacterTyped, setTotalCharacterTyped] = useState('');

  const { cursorPosition, updateCursorPosition, resetCursorPointer } = useCursorPosition();

  const handleKeyDown = useCallback(
    ({ key, code }) => {
      if (!active || !isAllowedCode(code)) return;

      if (key === 'Backspace') {
        if (charTyped.length > 0 && cursorPosition > 0) {
          setCharTyped((prev) => prev.slice(0, charTyped.length - 1));
          setTotalCharacterTyped((prev) =>
            prev.slice(0, totalCharacterTyped.length - 1)
          );
          updateCursorPosition('decrease');
        }
        return;
      }

      if (typingState === 'idle') {
        setTypingState('start');
      }

      setCharTyped((prev) => prev + key);
      setTotalCharacterTyped((prev) => prev + key);
      updateCursorPosition('increase');
    },
    [
      active,
      charTyped.length,
      cursorPosition,
      updateCursorPosition,
      typingState,
      totalCharacterTyped,
    ]
  );

  const resetCharTyped = useCallback(() => {
    setCharTyped('');
  }, [setCharTyped]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return {
    charTyped,
    totalCharacterTyped,
    setTotalCharacterTyped,
    cursorPosition,
    resetCharTyped,
    resetCursorPointer,
    typingState,
    setTypingState,
  };
};
