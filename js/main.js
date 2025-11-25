/* js/main.js */
document.addEventListener('DOMContentLoaded', async () => {
  // 相対パスを使う。先頭スラッシュは使わない
  try {
    const headerResp = await fetch('./includes/header.html');
    if (headerResp.ok) {
      document.getElementById('header-placeholder').innerHTML = await headerResp.text();
    }

    const footerResp = await fetch('./includes/footer.html');
    if (footerResp.ok) {
      document.getElementById('footer-placeholder').innerHTML = await footerResp.text();
    }
  } catch (e) {
    console.error('Include load error', e);
  }
});
