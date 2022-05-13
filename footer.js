const navbarFooter = document.getElementById('navFooter');

for (i = 0; i < pagePaths.length; i++) {
  const anchorTag = document.createElement('a');
  anchorTag.href = pagePaths[i].path;
  anchorTag.innerHTML = pagePaths[i].pathName;
  anchorTag.style.paddingLeft = '20px';
  navbarFooter.appendChild(anchorTag);
}
