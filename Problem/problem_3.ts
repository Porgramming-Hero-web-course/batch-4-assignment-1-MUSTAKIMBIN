{
  //
  function countWordOccurrences(sentence: string, word: string): number {
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    const sentenceArry = lowerCaseSentence.split(" ");
    const appearsNumber = sentenceArry.filter(
      (item) => item === lowerCaseWord
    ).length;
    return appearsNumber;
  }
  //   console.log(countWordOccurrences("count COunt COUNT count","count"));

  //
}
