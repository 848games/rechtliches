document.addEventListener('DOMContentLoaded', () => {
  const tocList = document.querySelector('.toc ul');
  if (!tocList) return;

  const headings = document.querySelectorAll('main h1, main h2');

  headings.forEach((heading, idx) => {
    if (!heading.id) {
      heading.id = `heading-${idx}`;
    }

    const li = document.createElement('li');
    li.style.paddingLeft = heading.tagName === 'H2' ? '1rem' : '0';

    const a = document.createElement('a');
    a.href = `#${heading.id}`;
    a.textContent = heading.textContent;

    li.appendChild(a);
    tocList.appendChild(li);
  });
});
