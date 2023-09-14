const articleCardDecorate = (block) => {
    console.log(block, 'articleCardDecorate');
    const oHeader = block.querySelector('div:nth-child(1) > h1');
    const oDescription = block.querySelector('div:nth-child(2) > div');
    const oCTAButton = block.querySelector('div:nth-child(3) > div > a');
    const oCardDate = block.querySelector('div:nth-child(4) > div');
    oCTAButton.classList.add('newsroom-article-card__cta-button');
    oCTAButton.classList.remove(...['button', 'primary']);
    const oTemplate = `
    <div class="newsroom-article-card__header">
      ${oHeader.outerHTML}
    </div>
    <div class="newsroom-article-card__description">
      <p>
        ${oDescription.innerHTML}
      </p>
    </div>
    <div class="newsroom-article-card__footer">
      <div class="newsroom-article-card__cta-button">
        ${oCTAButton.outerHTML}
      </div>
      <div class="newsroom-article-card__date">
        <p>${oCardDate.innerHTML}</p>
      </div>
    </div>`;
    block.innerHTML = oTemplate;
  };

export default articleCardDecorate;