let center = [55.126421,36.579803];


let coords = [[55.126421,36.579803],[55.109384,36.579425],[55.124624,36.566337],
[55.123152,36.586253],[55.114708,36.589208],[55.133483, 36.632462], 
[55.133750, 36.633297],[55.124166,36.602988],[55.130802,36.574617]]

let balloons = [[`<iframe src="kosmos20.html"/>`], [`<iframe src="green_iland.html"/>`], 
[`<iframe src="olimp.html"/>`], [`<iframe src="pushkin.html"/>`], 
[`<iframe src="park_center.html"/>`],[`<iframe src="sosedi1.html"/>`], 
[`<iframe src="sosedi2.html"/>`],[`<iframe src="belkin.html"/>`],[`<iframe src="new_city.html"/>`]]

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 14,
	},{
    restrictMapArea: [[55.164176, 36.515988], [55.080189, 36.684949]]
  });

	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  const placemarks = [];

  var clusterer = new ymaps.Clusterer({

  });

  for (let i = 0; i < coords.length; i++) {
    placemarks[i] = new ymaps.Placemark(coords[i], {
      balloonContent: balloons[i]
    }, {});
    map.geoObjects.add(placemarks[i]);
    
  }
  
  map.geoObjects.add(clusterer);
  clusterer.add(placemarks);
}

ymaps.ready(init);