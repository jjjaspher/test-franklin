const newroomHeroDecorate = (block) => {
  console.log(block, 'newsroomHeroDivHEYY')
  const oHeader = block.querySelector('h1');
  const oDescription = block.querySelector('div > div:nth-child(3) > div');
  const oCTAButton = block.querySelector('a');
  const oHeroImage = block.querySelector('picture');
  const sHeroImageSrc = oHeroImage.querySelector('img').getAttribute('src');
  oCTAButton.classList.add('newsroom-hero__cta-button');
  oCTAButton.classList.remove(...['button', 'primary']);

  block.style.background = `url(${sHeroImageSrc})`;
  block.style.backgroundSize = "cover";
  block.style.backgroundRepeat = "no-repeat";
  // console.log(oHeader)
  // console.log(oDescription)
  // console.log(oHeroImage)
  // console.log(oCTAButton)
  const oTemplate = `
    <div class="newsroom-hero__header">
      ${oHeader.outerHTML}
    </div>
    <div class="newsroom-hero__card">
      <p class="newsroom-hero__description">${oDescription.innerHTML}</p>
      ${oCTAButton.outerHTML}
    </div>`;
  block.innerHTML = oTemplate;
};

export default newroomHeroDecorate;