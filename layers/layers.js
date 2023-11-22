var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_fg_1 = new ol.format.GeoJSON();
var features_fg_1 = format_fg_1.readFeatures(json_fg_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fg_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fg_1.addFeatures(features_fg_1);
var lyr_fg_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fg_1, 
                style: style_fg_1,
                interactive: true,
                title: '<img src="styles/legend/fg_1.png" /> fg'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_fg_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_fg_1];
lyr_fg_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_fg_1.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_fg_1.set('fieldLabels', {'Name': 'header label', 'descriptio': 'inline label', 'timestamp': 'inline label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_fg_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});