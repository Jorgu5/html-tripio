function initMap() {
	var styledMapType = new google.maps.StyledMapType(
		[
			{
				elementType: "geometry",
				stylers: [
					{
						color: "#f5f5f5"
					}
				]
			},
			{
				elementType: "labels.icon",
				stylers: [
					{
						visibility: "off"
					}
				]
			},
			{
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#616161"
					}
				]
			},
			{
				elementType: "labels.text.stroke",
				stylers: [
					{
						color: "#f5f5f5"
					}
				]
			},
			{
				featureType: "administrative.land_parcel",
				elementType: "labels",
				stylers: [
					{
						visibility: "off"
					}
				]
			},
			{
				featureType: "administrative.land_parcel",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#bdbdbd"
					}
				]
			},
			{
				featureType: "poi",
				elementType: "geometry",
				stylers: [
					{
						color: "#eeeeee"
					}
				]
			},
			{
				featureType: "poi",
				elementType: "labels.text",
				stylers: [
					{
						visibility: "off"
					}
				]
			},
			{
				featureType: "poi",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#757575"
					}
				]
			},
			{
				featureType: "poi.business",
				stylers: [
					{
						visibility: "off"
					}
				]
			},
			{
				featureType: "poi.park",
				elementType: "geometry",
				stylers: [
					{
						color: "#e5e5e5"
					}
				]
			},
			{
				featureType: "poi.park",
				elementType: "labels.text",
				stylers: [
					{
						visibility: "off"
					}
				]
			},
			{
				featureType: "poi.park",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#9e9e9e"
					}
				]
			},
			{
				featureType: "road",
				stylers: [
					{
						visibility: "off"
					}
				]
			},
			{
				featureType: "road",
				elementType: "geometry",
				stylers: [
					{
						color: "#ffffff"
					}
				]
			},
			{
				featureType: "road.arterial",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#757575"
					}
				]
			},
			{
				featureType: "road.highway",
				elementType: "geometry",
				stylers: [
					{
						color: "#dadada"
					}
				]
			},
			{
				featureType: "road.highway",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#616161"
					}
				]
			},
			{
				featureType: "road.local",
				elementType: "labels",
				stylers: [
					{
						visibility: "off"
					}
				]
			},
			{
				featureType: "road.local",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#9e9e9e"
					}
				]
			},
			{
				featureType: "transit.line",
				elementType: "geometry",
				stylers: [
					{
						color: "#e5e5e5"
					}
				]
			},
			{
				featureType: "transit.station",
				elementType: "geometry",
				stylers: [
					{
						color: "#eeeeee"
					}
				]
			},
			{
				featureType: "water",
				elementType: "geometry",
				stylers: [
					{
						color: "#c9c9c9"
					}
				]
			},
			{
				featureType: "water",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#9e9e9e"
					}
				]
			}
		],
		{ name: "Styled Map" }
	);

	// Create a map object, and include the MapTypeId to add
	// to the map type control.
	var map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 53.647, lng: -2.5 },
		zoom: 6,
		disableDefaultUI: true,
		panControl: false,
		zoomControl: true,
		mapTypeControl: false,
		scaleControl: true,
		streetViewControl: false,
		overviewMapControl: false,
		rotateControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var marker1 = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(53, -2.5),
		title: "Some location",
		clickable: true,
		icon: "../img/price_marker.png",
		label: {
			background: "#fff",
			color: "#fff",
			fontWeight: "bold",
			fontSize: "14px",
			text: "500zł"
		}
	});

	var marker2 = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(52, -1.5),
		title: "Some location",
		clickable: true,
		icon: "../img/price_marker.png",
		label: {
			background: "#fff",
			color: "#fff",
			fontWeight: "bold",
			fontSize: "14px",
			text: "350zł"
		}
    });
    
    var mapInfoBox = '<div class="m-tile m-tile--marker"> <div class="m-tile__col"> <div class="m-avatar"> <div class="m-avatar__el"> <img alt="Konto uzytkownika{nazwa}>" class="m-avatar__image" src="https://i.pravatar.cc/300"/> </div></div></div><div class="m-tile__col"> <div class="m-rate"> <svg class="m-rate__path" xmlns="http://www.w3.org/2000/svg" width="30" height="32"> <linearGradient id="brand_gradient" x2="1" y2="1"> <stop offset="0%" stop-color="#f7931d"/> <stop offset="50%" stop-color="#f25f21"/> <stop offset="100%" stop-color="#f79827"/> </linearGradient> <clipPath id="star"> <path d="M29.7 11c0 .3-.2.5-.5.9l-6.5 6.3 1.5 8.9v.4c0 .2-.1.5-.2.6-.1.2-.3.3-.5.3s-.5-.1-.7-.2l-8-4.2-8 4.2c-.3.1-.5.2-.7.2-.3 0-.4-.1-.6-.3-.1-.2-.2-.4-.2-.6v-.4l1.5-8.9-6.5-6.3c-.2-.4-.3-.7-.3-.9 0-.4.3-.7 1-.8l9-1.3 4-8.1c.2-.6.5-.8.9-.8s.6.2.9.7l4 8.1 9 1.3c.6.2.9.4.9.9zM64.7 11c0 .3-.2.5-.5.9l-6.5 6.3 1.5 8.9v.4c0 .2-.1.5-.2.6s-.3.3-.5.3-.5-.1-.7-.2l-8-4.2-8 4.2c-.3.1-.5.2-.7.2-.2 0-.4-.1-.6-.3-.1-.2-.2-.4-.2-.6v-.4l1.5-8.9-6.5-6.3c-.2-.4-.3-.7-.3-.9 0-.4.3-.7 1-.8l9-1.3 4-8.1c.2-.6.5-.8.9-.8s.6.2.9.7l4 8.1 9 1.3c.6.2.9.4.9.9zM99.7 11c0 .3-.2.5-.5.9l-6.5 6.3 1.5 8.9v.4c0 .2-.1.5-.2.6-.1.2-.3.3-.5.3s-.5-.1-.7-.2l-8-4.2-8 4.2c-.3.1-.5.2-.7.2-.2 0-.4-.1-.6-.3-.1-.2-.2-.4-.2-.6v-.4l1.5-8.9-6.5-6.3c-.2-.4-.3-.7-.3-.9 0-.4.3-.7 1-.8l9-1.3 4-8.1c.2-.6.5-.8.9-.8s.6.2.9.7l4 8.1 9 1.3c.6.2.9.4.9.9zM134.7 11c0 .3-.2.5-.5.9l-6.5 6.3 1.5 8.9v.4c0 .2-.1.5-.2.6s-.3.3-.5.3-.5-.1-.7-.2l-8-4.2-8 4.2c-.3.1-.5.2-.7.2-.2 0-.4-.1-.6-.3-.1-.2-.2-.4-.2-.6v-.4l1.5-8.9-6.5-6.3c-.3-.3-.4-.6-.4-.9 0-.4.3-.7 1-.8l9-1.3 4-8.1c.2-.5.5-.7.9-.7s.6.2.9.7l4 8.1 9 1.3c.7.1 1 .3 1 .8zM169.7 11c0 .3-.2.5-.5.9l-6.5 6.3 1.5 8.9v.4c0 .2-.1.5-.2.6s-.3.3-.5.3-.5-.1-.7-.2l-8-4.2-8 4.2c-.3.1-.5.2-.7.2-.2 0-.4-.1-.6-.3s-.2-.4-.2-.6v-.4l1.5-8.9-6.5-6.3c-.3-.3-.4-.6-.4-.9 0-.4.3-.7 1-.8l9-1.3 4-8.1c.2-.5.5-.7.9-.7s.6.2.9.7l4 8.1 9 1.3c.7.1 1 .3 1 .8z"/> </clipPath> <clipPath id="star-empty"> <path d="M20.3 17.4l5.5-5.3-7.5-1.1-3.4-6.8-3.4 6.8L4 12.1l5.5 5.3-1.3 7.5 6.8-3.6 6.7 3.6-1.4-7.5zm9.4-6.4c0 .3-.2.5-.5.9l-6.5 6.3 1.5 8.9v.4c0 .6-.2.9-.7.9-.2 0-.5-.1-.7-.2l-8-4.2-8 4.2c-.3.1-.5.2-.7.2-.3 0-.4-.1-.6-.3-.1-.2-.2-.4-.2-.6v-.4l1.5-8.9-6.5-6.3c-.2-.4-.3-.7-.3-.9 0-.4.3-.7 1-.8l9-1.3 4-8.1c.2-.6.5-.8.9-.8s.6.2.9.7l4 8.1 9 1.3c.6.2.9.4.9.9zM55.3 17.4l5.5-5.3-7.5-1.1-3.4-6.8-3.4 6.8-7.5 1.1 5.5 5.3-1.3 7.5 6.8-3.6 6.7 3.6-1.4-7.5zm9.4-6.4c0 .3-.2.5-.5.9l-6.5 6.3 1.5 8.9v.4c0 .6-.2.9-.7.9-.2 0-.5-.1-.7-.2l-8-4.2-8 4.2c-.3.1-.5.2-.7.2-.2 0-.4-.1-.6-.3-.1-.2-.2-.4-.2-.6v-.4l1.5-8.9-6.5-6.3c-.2-.4-.3-.7-.3-.9 0-.4.3-.7 1-.8l9-1.3 4-8.1c.2-.6.5-.8.9-.8s.6.2.9.7l4 8.1 9 1.3c.6.2.9.4.9.9zM90.3 17.4l5.5-5.3-7.5-1.1-3.4-6.8-3.4 6.8-7.5 1.1 5.5 5.3-1.3 7.5 6.8-3.6 6.7 3.6-1.4-7.5zm9.4-6.4c0 .3-.2.5-.5.9l-6.5 6.3 1.5 8.9v.4c0 .6-.2.9-.7.9-.2 0-.5-.1-.7-.2l-8-4.2-8 4.2c-.3.1-.5.2-.7.2-.2 0-.4-.1-.6-.3-.1-.2-.2-.4-.2-.6v-.4l1.5-8.9-6.5-6.3c-.2-.4-.3-.7-.3-.9 0-.4.3-.7 1-.8l9-1.3 4-8.1c.2-.6.5-.8.9-.8s.6.2.9.7l4 8.1 9 1.3c.6.2.9.4.9.9zM125.3 17.4l5.5-5.3-7.5-1.1-3.4-6.8-3.4 6.8-7.5 1.1 5.5 5.3-1.3 7.5 6.8-3.6 6.7 3.6-1.4-7.5zm9.4-6.4c0 .3-.2.5-.5.9l-6.5 6.3 1.5 8.9v.4c0 .6-.2.9-.7.9-.2 0-.5-.1-.7-.2l-8-4.2-8 4.2c-.3.1-.5.2-.7.2-.2 0-.4-.1-.6-.3-.1-.2-.2-.4-.2-.6v-.4l1.5-8.9-6.5-6.3c-.3-.3-.4-.6-.4-.9 0-.4.3-.7 1-.8l9-1.3 4-8.1c.2-.5.5-.7.9-.7s.6.2.9.7l4 8.1 9 1.3c.7.1 1 .3 1 .8zM160.3 17.4l5.5-5.3-7.5-1.1-3.4-6.8-3.4 6.8-7.5 1.1 5.5 5.3-1.3 7.5 6.8-3.6 6.7 3.6-1.4-7.5zm9.4-6.4c0 .3-.2.5-.5.9l-6.5 6.3 1.5 8.9v.4c0 .6-.2.9-.7.9-.2 0-.5-.1-.7-.2l-8-4.2-8 4.2c-.3.1-.5.2-.7.2-.2 0-.4-.1-.6-.3-.1-.2-.2-.4-.2-.6v-.4l1.5-8.9-6.5-6.3c-.3-.3-.4-.6-.4-.9 0-.4.3-.7 1-.8l9-1.3 4-8.1c.2-.5.5-.7.9-.7s.6.2.9.7l4 8.1 9 1.3c.7.1 1 .3 1 .8z"/> </clipPath> </svg> <svg class="m-rate__star" viewBox="0 0 170 30" data-rating="2"> <rect class="m-rate__star_border" x="0" y="0" fill="url(#brand_gradient)" width="100%" height="100%" clip-path="url(#star-empty)"></rect> <rect class="m-rate__star_fill" x="0" y="0" fill="url(#brand_gradient)" width="50%" height="100%" clip-path="url(#star)"></rect> </svg> <span class="m-rate__volume"> 254 oceny</span> <span class="m-rate__value">2.5</span> </div><ul class="m-details"> <li class="m-details__item"> <img class="m-details__icon" src="../img/name.svg" alt="imię lub nazwa firmy"> Marcin Kowalski, FIT Transport sp. z o.o.</li><li class="m-details__item"> <img class="m-details__icon" src="../img/cash.svg" alt="data">600 zł</li><li class="m-details__item"> <img class="m-details__icon" src="../img/calendar.svg" alt="data">29-02-2018 15:30</li><li class="m-details__item"> <img class="m-details__icon" src="../img/marker.svg" alt="z jakiego miejsca">Z: Warszawa, Polska</li><li class="m-details__item"> <img class="m-details__icon" src="../img/marker.svg" alt="do jakiego miejsca">Do: Katowice, Polska </li></ul> </div></div>'

	marker1.info = new google.maps.InfoWindow({
		content: mapInfoBox,
	});

	google.maps.event.addListener(marker1, "click", function() {
		marker1.info.open(map, marker1);
    });
    
    marker2.info = new google.maps.InfoWindow({
		content: mapInfoBox,
	});

	google.maps.event.addListener(marker2, "click", function() {
		marker2.info.open(map, marker2);
	});

	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set("styled_map", styledMapType);
	map.setMapTypeId("styled_map");
}
