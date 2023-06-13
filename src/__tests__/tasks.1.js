describe('Render with Functions', () => {
  test('h1 gets rendered with "I Love React"', () => {
    document.body.innerHTML = '<div id="root"></div>';
    require('../../src/index.js');
    const h1 = document.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1.textContent.toLocaleLowerCase())
      .toMatch(/i love react/i);
  });
})