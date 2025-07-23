 // 카드에 쓸 이미지 주소 리스트 (높이 다른 샘플 이미지)
  const IMG_LIST = [
    '/assets/imgs/Hlab_img1.png',
    '/assets/imgs/Hlab_img2.png',
    '/assets/imgs/Hlab_img3.png',
    '/assets/imgs/Hlab_img4.png',
    '/assets/imgs/Hlab_img5.png',
    '/assets/imgs/Hlab_img6.png',
    '/assets/imgs/Hlab_img7.png',
    '/assets/imgs/Hlab_img8.png',
    '/assets/imgs/Hlab_img9.png',
    '/assets/imgs/Hlab_img10.png',
    '/assets/imgs/Hlab_img11.png',
    '/assets/imgs/Hlab_img12.png',
    '/assets/imgs/Hlab_img13.png',
    '/assets/imgs/Hlab_img14.png',
    '/assets/imgs/Hlab_img15.png',
    '/assets/imgs/Hlab_img16.png',
    '/assets/imgs/Hlab_img17.png',
    '/assets/imgs/Hlab_img18.png',
    '/assets/imgs/Hlab_img19.png',
    '/assets/imgs/Hlab_img20.png',
  ];


  const masonry = document.getElementById('masonry');
  const columnsCount = 4; // 컬럼 수
  let columns = [];

  // 컬럼 div 생성 후 masonry 안에 추가
  for(let i=0; i<columnsCount; i++){
    const col = document.createElement('div');
    col.className = 'masonry-column';
    masonry.appendChild(col);
    columns.push(col);
  }

  // 각 이미지로 카드 생성해서 가장 짧은 컬럼에 넣기
  IMG_LIST.forEach(src => {
    const item = document.createElement('div');
    item.className = 'masonry-item';
    const img = document.createElement('img');
    img.src = src;
    item.appendChild(img);

    // 이미지가 로드된 후에 컬럼 높이 계산해 가장 짧은 컬럼에 넣기
    img.onload = () => {
      // 가장 높이 작은 컬럼 찾기
      let minCol = columns[0];
      for(let col of columns){
        if(col.scrollHeight < minCol.scrollHeight){
          minCol = col;
        }
      }
      minCol.appendChild(item);
    }
  });