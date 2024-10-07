import { useState, useCallback } from 'react';

import { generateWord } from '../utils';

export const useWord = (numberOfWords) => {
  const [word, setWord] = useState(() => generateWord(numberOfWords) + ' ');
  const [totalWord, setTotalWord] = useState(word);

  const appendWord = useCallback((newWord) => {
    setTotalWord((prev) => prev + newWord);
  }, []);

  const eraseWord = useCallback((newWord) => {
    setTotalWord(newWord);
  }, []);

  const updateWord = useCallback(
    (erase = false) => {
      setWord(() => {
        const genWord = generateWord(numberOfWords) + ' ';
        if (erase) eraseWord(genWord);
        else appendWord(genWord);
        return genWord;
      });
    },
    [numberOfWords, appendWord, eraseWord]
  );

  return { word, totalWord, setTotalWord, updateWord, appendWord };
};
