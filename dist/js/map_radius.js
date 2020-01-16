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

	var marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(53, -2.5),
		title: "Some location",
		icon: "../img/marker.svg"
	});

	// Add circle overlay and bind to marker
	var circle = new google.maps.Circle({
		map: map,
		radius: 56093, // 10 miles in metres
		fillColor: "#fff",
		fillOpacity: 0.75,
		strokeColor: "#f04c22"
	});
	circle.bindTo("center", marker, "position");

	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set("styled_map", styledMapType);
	map.setMapTypeId("styled_map");
}
