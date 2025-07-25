
const section = document.getElementById('emoji-container');

for (let i = 1; i <= 500; i++) {
const img = document.createElement('img');
img.src = `../assets/emoji/image${i}.png`;
img.alt = `emoji${i}`;
img.loading = 'lazy'; // 최적화: 화면에 보일 때 로드
img.style.width = '32px';  // 필요 시 크기 조절
img.style.height = '32px';
img.style.margin = '2px';

section.appendChild(img);
}
