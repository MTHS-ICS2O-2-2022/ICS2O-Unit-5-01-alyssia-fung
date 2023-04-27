{
    'use strict';
    (function () {
        function whenLoaded() {
            getmdlSelect.init('.getmdl-select');
        };
        window.addEventListener ?
            window.addEventListener("load", whenLoaded, false) :
            window.attachEvent && window.attachEvent("onload", whenLoaded);
    }());
    var getmdlSelect = {
        _addEventListeners: function (dropdown) {
            var input = dropdown.querySelector('input');
            var hiddenInput = dropdown.querySelector('input[type="hidden"]');
            var list = dropdown.querySelectorAll('li');
            var menu = dropdown.querySelector('.mdl-js-menu');
            var arrow = dropdown.querySelector('.mdl-icon-toggle__label');
            var label = '';
            var previousValue = '';
            var previousDataVal = '';
            var opened = false;
            var setSelectedItem = function (li) {
                var value = li.textContent.trim();
                input.value = value;
                list.forEach(function (li) {
                    li.classList.remove('selected');
                });
                li.classList.add('selected');
                dropdown.MaterialTextfield.change(value); // handles css class changes
                setTimeout(function () {
                    dropdown.MaterialTextfield.updateClasses_(); //update css class
                }, 250);
                // update input with the "id" value
                hiddenInput.value = li.dataset.val || '';
                previousValue = input.value;
                previousDataVal = hiddenInput.value;
                if ("createEvent" in document) {
                    var evt = document.createEvent("HTMLEvents");
                    evt.initEvent("change", false, true);
                    menu['MaterialMenu'].hide();
                    input.dispatchEvent(evt);
                } else {
                    input.fireEvent("onchange");
                }
            }
            var hideAllMenus = function () {
                opened = false;
                input.value = previousValue;
                hiddenInput.value = previousDataVal;
                if (!dropdown.querySelector('.mdl-menu__container').classList.contains('is-visible')) {
                    dropdown.classList.remove('is-focused');
                }
                var menus = document.querySelectorAll('.getmdl-select .mdl-js-menu');
                [].forEach.call(menus, function (menu) {
                    menu['MaterialMenu'].hide();
                });
                var event = new Event('closeSelect');
                menu.dispatchEvent(event);
            };
            document.body.addEventListener('click', hideAllMenus, false);
            //hide previous select after press TAB
