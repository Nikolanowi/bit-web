var images = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUti4M06aw21Z0dqDUzfcFGNFKxaiws1Sd-LRqs59PVoqJ9bb6',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM4TntA3Pwr2Os3TAV-TBf5oTp_R04sABLUNi_Ho0djxOiaOsbuA',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCeeRSqeVNv3l1V80v-xcuivzFQZoLFKna3WpHuo2b4Tl5BhhIg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxyHKKiDj7LpLKA6boJdh_H2sK68f4nFF_T-idl7L0rPFMB1INhQ',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzal8RUB44a46EEv-wd4g-EHbwEi-OKOwUIN_IlE3v-Td_KJje'

];





for (var i=0; i < images.length; i++){
    var x = $('<img>');
    x.attr('src', images[i]);

    $('body').append(x);
}

var title = $('<h2> NASLOV </h2>');

$('body').before(title);

$("img").each(function(i, omage) {
    $(omage).css('width', Math.round(Math.random()*500));
});

