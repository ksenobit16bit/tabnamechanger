// ==UserScript==
// @name         Tab Name Changer
// @version      1.0
// @description  Allows you to change the tab name
// @match        https://*
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @namespace https://ksenobit16bit.ru
// ==/UserScript==

(function() {
    'use strict';

    // Функция для изменения заголовка вкладки и сохранения уникального имени
    function changeTabTitle(newTitle) {
        document.title = newTitle;
        localStorage.setItem("tabTitle_" + window.location.href, newTitle); // Сохранение уникального имени для текущего URL
    }

    // Проверяем, есть ли уже сохраненное уникальное имя для текущего URL
    const savedTitle = localStorage.getItem("tabTitle_" + window.location.href);
    if (savedTitle) {
        changeTabTitle(savedTitle); // Устанавливаем сохраненное уникальное имя
    }

    // Создаем кнопку меню в Tampermonkey
    GM_registerMenuCommand("Tab Name Changer", function() {
        const newTitle = prompt("Введите новое имя для вкладки:");
        if (newTitle) {
            changeTabTitle(newTitle);
        }
    });
})();
