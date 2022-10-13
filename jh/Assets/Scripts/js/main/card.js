const height = card => {

    return card.getBoundingClientRect().height;
  
  };
  
  const distance = (cardA, cardB, prop) => {
  
    const sizeA = cardA.getBoundingClientRect()[prop];
    const sizeB = cardB.getBoundingClientRect()[prop];
  
    return sizeB - sizeA;
  
  };
  
  const factor = (cardA, cardB, prop) => {
  
    const sizeA = cardA.getBoundingClientRect()[prop];
    const sizeB = cardB.getBoundingClientRect()[prop];
  
    return sizeB / sizeA;
  
  };
  
  document.querySelectorAll('.card').forEach(card => {
  
    const head = card.querySelector('.card-head');
    const image = card.querySelector('.card-image, .card-image2, .card-image3');
    const issue = card.querySelector('.card-issue');
    const body = card.querySelector('.card-body');
    const foot = card.querySelector('.card-foot');
  
    card.onmouseenter = () => {
  
      card.classList.add('hover');
  
      const imageScale = 1 + factor(head, body, 'height');
      image.style.transform = `scale(${imageScale})`;
  
      const bodyDistance = height(foot) * -1;
      body.style.transform = `translateY(${bodyDistance}px)`;
  
      const issueDistance = distance(head, issue, 'height');
      issue.style.transform = `translateY(${issueDistance}px)`;
  
    };
  
    card.onmouseleave = () => {
  
      card.classList.remove('hover');
  
      image.style.transform = `none`;
      body.style.transform = `none`;
      issue.style.transform = `none`;
  
    };
  
  });