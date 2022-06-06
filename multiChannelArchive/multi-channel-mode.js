import {Service} from './servise.js'


const service = Service.getInstance();

// Функция-обработчик события

// Подписываемся на событие
// service.on('play', onLoad);

service.on('add', function (data) {
    console.log('add ' + data.data);
    // $(videCOnyainer).('play')
});

service.on('pause', function (data) {
    // data.foreach(cont => {
    //  cont.pause
    // )
});

// нажатие на запись  ->
service.emit('add', {data: "video_1"});
service.emit('pause', [{data: 'video_1'}]);



// Отписываемся от события
// service.off('play', onLoad)

// 08:58 - 09:03 | 09:03 - 09:08
//       09:00 - 09:05
//08:57 - 09:02 | 09:02 - 09:07

// CTS > DUR || CTS < ST