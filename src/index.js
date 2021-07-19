'use strict';

import EventFancyboxModal from './modules/EventFancyboxModal';
import ScrollTop from './modules/ScrollTop';
import Timer from './modules/Timer';
import Slider from './modules/Slider';
import Certificate from './modules/Сertificate';
import Checked from './modules/Checked';
import Calc from './modules/Calc';
import SendForm from './modules/SendForm';

//Обратный звонок и Вызов замерщика
EventFancyboxModal();
//Плавная прокрутка
ScrollTop();
//Таймер
Timer('25 July 2021');
//Слайдер
Slider();
//Сертификаты
Certificate();
//Проверка форм
Checked();
//Калькулятор
Calc();
//Отправка формы
SendForm();
