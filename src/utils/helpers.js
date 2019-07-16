export const getRandomsNumbers = (count, min, max) => {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}