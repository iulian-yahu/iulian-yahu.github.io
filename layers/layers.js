var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_Baze_sportive_Bucuresti_1991_2023_20240122Baze_Sportive_Regim_Juridic_1 = new ol.format.GeoJSON();
var features_Baze_sportive_Bucuresti_1991_2023_20240122Baze_Sportive_Regim_Juridic_1 = format_Baze_sportive_Bucuresti_1991_2023_20240122Baze_Sportive_Regim_Juridic_1.readFeatures(json_Baze_sportive_Bucuresti_1991_2023_20240122Baze_Sportive_Regim_Juridic_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Baze_sportive_Bucuresti_1991_2023_20240122Baze_Sportive_Regim_Juridic_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Baze_sportive_Bucuresti_1991_2023_20240122Baze_Sportive_Regim_Juridic_1.addFeatures(features_Baze_sportive_Bucuresti_1991_2023_20240122Baze_Sportive_Regim_Juridic_1);
var lyr_Baze_sportive_Bucuresti_1991_2023_20240122Baze_Sportive_Regim_Juridic_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Baze_sportive_Bucuresti_1991_2023_20240122Baze_Sportive_Regim_Juridic_1, 
                style: style_Baze_sportive_Bucuresti_1991_2023_20240122Baze_Sportive_Regim_Juridic_1,
                popuplayertitle: "Baze_sportive_Bucuresti_1991_2023_2024-01-22 — Baze_Sportive_Regim_Juridic",
                interactive: true,
                title: '<img src="styles/legend/Baze_sportive_Bucuresti_1991_2023_20240122Baze_Sportive_Regim_Juridic_1.png" /> Baze_sportive_Bucuresti_1991_2023_2024-01-22 — Baze_Sportive_Regim_Juridic'
            });

lyr_CartoLight_0.setVisible(true);lyr_Baze_sportive_Bucuresti_1991_2023_20240122Baze_Sportive_Regim_Juridic_1.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_Baze_sportive_Bucuresti_1991_2023_20240122Baze_Sportive_Regim_Juridic_1];
lyr_Baze_sportive_Bucuresti_1991_2023_20240122Baze_Sportive_Regim_Juridic_1.set('fieldAliases', {'fid': 'fid', 'Nume': 'Nume', 'AKA': 'AKA', 'Localitate': 'Localitate', 'Sector': 'Sector', 'Adresa': 'Adresa', 'Numar cadastral': 'Numar cadastral', 'Parcelă Completă': 'Parcelă Completă', 'Identificare plan cadastral 1991': 'Identificare plan cadastral 1991', 'Fost proprietar': 'Fost proprietar', 'Proprietar actual': 'Proprietar actual', 'Administrator': 'Administrator', 'Tip proprietate': 'Tip proprietate', 'Stare': 'Stare', 'Funcțiune actuală': 'Funcțiune actuală', 'În prezent găzduiește': 'În prezent găzduiește', 'Observatii / referinte (extras CF)': 'Observatii / referinte (extras CF)', 'Sarcini': 'Sarcini', 'Date referitoare la teren (extras CF)': 'Date referitoare la teren (extras CF)', 'Date referitoare la constructii (extras CF)': 'Date referitoare la constructii (extras CF)', });
lyr_Baze_sportive_Bucuresti_1991_2023_20240122Baze_Sportive_Regim_Juridic_1.set('fieldImages', {'fid': '', 'Nume': '', 'AKA': '', 'Localitate': '', 'Sector': '', 'Adresa': '', 'Numar cadastral': '', 'Parcelă Completă': '', 'Identificare plan cadastral 1991': '', 'Fost proprietar': '', 'Proprietar actual': '', 'Administrator': '', 'Tip proprietate': '', 'Stare': '', 'Funcțiune actuală': '', 'În prezent găzduiește': '', 'Observatii / referinte (extras CF)': '', 'Sarcini': '', 'Date referitoare la teren (extras CF)': '', 'Date referitoare la constructii (extras CF)': '', });
lyr_Baze_sportive_Bucuresti_1991_2023_20240122Baze_Sportive_Regim_Juridic_1.set('fieldLabels', {'fid': 'hidden field', 'Nume': 'inline label - always visible', 'AKA': 'inline label - always visible', 'Localitate': 'inline label - always visible', 'Sector': 'inline label - always visible', 'Adresa': 'inline label - always visible', 'Numar cadastral': 'hidden field', 'Parcelă Completă': 'inline label - always visible', 'Identificare plan cadastral 1991': 'hidden field', 'Fost proprietar': 'inline label - always visible', 'Proprietar actual': 'inline label - always visible', 'Administrator': 'inline label - always visible', 'Tip proprietate': 'inline label - always visible', 'Stare': 'inline label - always visible', 'Funcțiune actuală': 'inline label - always visible', 'În prezent găzduiește': 'inline label - always visible', 'Observatii / referinte (extras CF)': 'hidden field', 'Sarcini': 'inline label - always visible', 'Date referitoare la teren (extras CF)': 'hidden field', 'Date referitoare la constructii (extras CF)': 'hidden field', });
lyr_Baze_sportive_Bucuresti_1991_2023_20240122Baze_Sportive_Regim_Juridic_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});