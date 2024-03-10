let center = [55.126421,36.579803];


let coords = [[55.126421,36.579803],[55.109384,36.579425],[55.124624,36.566337],
[55.123152,36.586253],[55.114708,36.589208],[55.132819,36.632399], 
[55.124166,36.602988],[[55.13080238085697,36.5746165622066]]]

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 15
	});


	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)


}

ymaps.ready(init);