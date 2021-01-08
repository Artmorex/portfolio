<?php
$settings = [
    'app_info' => [ // Эти данные мы получили после регистрации приложения на https://my.telegram.org
        'api_id' => XXXXX,
        'api_hash' => XXXXXXXXXX,
    ],
    'logger' => [ // Вывод сообщений и ошибок
        'logger' => 3, // выводим сообещения через echo
        'logger_level' => 4, // выводим только критические ошибки.
    ],
    //для доступа может потребоваться socks5 прокси
    //если прокси не требуется, то этот блок можно удалить.
    'connection_settings' => [
        'all' => [
            'proxy' => '\SocksProxy',
            'proxy_extra' => [
                'address' => 'xxx.xxx.xxx.xxx',
                'port' => 1234,
                'username' => '',//Можно удалить если логина нет
                'password' => '',//Можно удалить если пароля нет
            ],
        ],
    ],
    'serialization' => [
        'serialization_interval' => 300,
        //Очищать файл сессии от некритичных данных. 
        //Значительно снижает потребление памяти при интенсивном использовании, но может вызывать проблемы
        'cleanup_before_serialization' => true,
    ],
];

$MadelineProto = new \danog\MadelineProto\API('session.madeline', $settings);
$MadelineProto->start();     
?>