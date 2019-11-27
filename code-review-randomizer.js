// run this script after you do a pull request and group slack the individuals listed

const codeReview = yourName => {
  const seniorEngineers = ['Inna', 'Kyle', 'Matthew', 'Patrick', 'Sayer'];
  let peopleToReviewYourCode = [];

  const randomizer = () => {
    const engineerIndex = Math.floor(Math.random() * Math.floor(seniorEngineers.length));
    if (seniorEngineers[engineerIndex] !== yourName) {
      peopleToReviewYourCode.push(seniorEngineers[engineerIndex]);
    }
    if (peopleToReviewYourCode.length < 2) {
      randomizer();
    }
  }

  randomizer();
  return peopleToReviewYourCode;
}

codeReview('yourName');
