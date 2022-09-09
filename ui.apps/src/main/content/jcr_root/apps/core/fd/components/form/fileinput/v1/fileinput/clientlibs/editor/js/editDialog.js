/*******************************************************************************
 * Copyright 2022 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
(function($) {
    "use strict";
    var EDIT_DIALOG = ".cmp-adaptiveform-fileinput__editdialog",
        FILEINPUT_MULTISELECTION = EDIT_DIALOG + " .cmp-adaptiveform-fileinput__multiselection",
        FILEINPUT_TYPE=EDIT_DIALOG + " .cmp-adaptiveform-fileinput__type",
        Utils = window.CQ.FormsCoreComponents.Utils.v1;


    /**
     * Toggles the addition of multi selection, value of type on the checked state of
     * the multiSelection checkbox
     * @param {HTMLElement} dialog The dialog on which the operation is to be performed.
     */
    function handleMultiSelection(dialog) {
        var component = dialog.find(FILEINPUT_MULTISELECTION)[0];
        var fileinputType=dialog.find(FILEINPUT_TYPE)[0];
        var listOfElements = [fileinputType];

        var isNotChecked = function() {return !isChecked()};
        var isChecked = function() {return component.checked};
        console.log("isChecked:",component.checked);
        if(component.checked)
         fileinputType.attributes.value.value="file[]";
        else
         fileinputType.attributes.value.value="file";
    }
    Utils.initializeEditDialog(EDIT_DIALOG)(handleMultiSelection);

})(jQuery);
