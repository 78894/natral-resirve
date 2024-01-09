var wms_layers = [];

var format_Biodiversity_Site_0 = new ol.format.GeoJSON();
var features_Biodiversity_Site_0 = format_Biodiversity_Site_0.readFeatures(json_Biodiversity_Site_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biodiversity_Site_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biodiversity_Site_0.addFeatures(features_Biodiversity_Site_0);
var lyr_Biodiversity_Site_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Biodiversity_Site_0, 
                style: style_Biodiversity_Site_0,
                interactive: true,
                title: '<img src="styles/legend/Biodiversity_Site_0.png" /> Biodiversity_Site'
            });

lyr_Biodiversity_Site_0.setVisible(true);
var layersList = [lyr_Biodiversity_Site_0];
lyr_Biodiversity_Site_0.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'BIODIV_': 'BIODIV_', 'BIODIV_ID': 'BIODIV_ID', 'NAME': 'NAME', 'DISTRICT_N': 'DISTRICT_N', 'Biodiversi': 'Biodiversi', });
lyr_Biodiversity_Site_0.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'BIODIV_': '', 'BIODIV_ID': '', 'NAME': '', 'DISTRICT_N': '', 'Biodiversi': '', });
lyr_Biodiversity_Site_0.set('fieldLabels', {'AREA': 'inline label', 'PERIMETER': 'inline label', 'BIODIV_': 'inline label', 'BIODIV_ID': 'inline label', 'NAME': 'no label', 'DISTRICT_N': 'inline label', 'Biodiversi': 'no label', });
lyr_Biodiversity_Site_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});