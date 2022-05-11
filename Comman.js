function ClearTextBoxes() {
    try {
        $('input[type=text]').each(function () {
            $(this).val('');
        });
      
        $('textarea').each(function () {
            $(this).val('');
        });
        $('select').each(function () {
            $(this).get(0).selectedIndex = 0;
        });
        $('input:checkbox').removeAttr('checked');
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }

}
function DivClearTextBoxes(ID) {
    try {
        $("#" + ID + " input[type=text]").each(function () {
            $(this).val('');
        });
        
        $("#" + ID + " textarea").each(function () {
            $(this).val('');
        });
        $("#" + ID + " select").each(function () {
            $(this).get(0).selectedIndex = 0;
        });
        $("#" + ID + " checkbox").removeAttr('checked');
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }

}
function ClearERROR() {
    try {
        $('input[type=text]').each(function () {

            $(this).removeClass("error").tooltip("destroy");
        });

        $('textarea').each(function () {
            $(this).removeClass("error").tooltip("destroy");
        });
        $('select').each(function () {
            $(this).removeClass("error").tooltip("destroy");
        });
        $('input:checkbox').removeClass("error").tooltip("destroy");
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }

}
function DivClearERROR(ID) {
    try {
        $("#" + ID + " input[type=text]").each(function () {

            $(this).removeClass("error").tooltip("destroy");
        });

        $("#" + ID + " textarea").each(function () {
            $(this).removeClass("error").tooltip("destroy");
        });
        $("#" + ID + " select").each(function () {
            $(this).removeClass("error").tooltip("destroy");
        });
        $("#" + ID + " checkbox").removeClass("error").tooltip("destroy");
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }

}
//samba
function sortTable(CtrlId) {
    try {
        var rows = $("#" + CtrlId + " tbody tr").get();
        rows.sort(function (a, b) {
            var A = $(a).children('td').eq(1).text().toUpperCase();
            var B = $(b).children('td').eq(1).text().toUpperCase();

            if (A < B) {
                return -1;
            }
            if (A > B) {
                return 1;
            }
            return 0;
        });

        $.each(rows, function (index, row) {
            $("#" + CtrlId).children('tbody').append(row);
        });

    } catch (e) {
        ErrorLog(e); alert(ErrorMsg());
    }

}


function ChangeViewLables() {
    try {
        $('input[type=text]').each(function () {
            $(this).css("border", "0").addClass('Viewlables');
        });
        $('select').each(function () {
            $(this).css("border", "0").addClass('Viewlables');
        });
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

function RemoveViewLables() {
    try {
        $('input[type=text]').each(function () {
            $(this).css("border", "1").removeClass('Viewlables');
        });
        $('select').each(function () {
            $(this).css("border", "1").removeClass('Viewlables');
        });
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

function DisplaySave() {
    try {
        $("#btnSave").show();
        $("#btnUpdate").hide();
        $("#btnReverse").hide();

    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

function DisplayView() {
    try {
        $("#btnSave").hide();
        $("#btnUpdate").hide();
        $("#btnReverse").hide();
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

function DisplayReverse() {
    try {
        $("#btnSave").hide();
        $("#btnUpdate").hide();
        $("#btnReverse").show();
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

function DisplayUpdate() {
    try {
        $("#btnSave").hide();
        $("#btnUpdate").show();
        $("#btnReverse").hide();

    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

//commmand  Query code to fill dropdowns
var ddlControlId = null;
var ddlSubControlId = null;

function PopulateCascadeDropdownControls(ddlControl, ServiceName, Params) {
    try {
        ddlSubControlId = ddlControl;
        //$( "#"+ddlControlId).empty().append('<option selected="selected" value="0">Loading...</option>');
        $.ajax({
            type: "POST",
            url: ServiceName,
            async: false,
            data: "{ 'Params': '" + Params + "' }",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: OnSubControlPopulated,
            failure: function (response) {
                ErrorLog(new Error(response.d));
                alert(ErrorMsg());
            }
        });
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

function OnSubControlPopulated(response) {
    try {
        $('#' + ddlSubControlId).html("");
        PopulateControl(response.d, $('#' + ddlSubControlId));
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

function PopulateDropdownControls(ddlControl, ServiceName, tableName) {
    try {
        ddlControlId = ddlControl;

        $(ddlControlId).empty().append('<option selected="selected" value="0">Loading...</option>');
        $.ajax({
            type: "POST",
            url: ServiceName,
            async: false,
            data: "{ 'tableName': '" + tableName + "' }",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: OnControlPopulated,
            failure: function (response) {
                ErrorLog(new Error(response.d));
                alert(ErrorMsg());
            }
        });
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function PopulateDropdownControlsWithString(ddlControl, ServiceName, tableName) {
    try {
        ddlControlId = ddlControl;

        //$(ddlControlId).empty().append('<option selected="selected" value="">Loading...</option>');
        $.ajax({
            type: "POST",
            url: ServiceName,
            async: false,
            data: "{ 'tableName': '" + tableName + "' }",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: OnControlPopulated,
            failure: function (response) {
                ErrorLog(new Error(response.d));
                alert(ErrorMsg());
            }
        });
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
//===============================================================================================

//Purpose: Used to bind dropdown list with inputs specified
//AddedBy: Datta
function PopulateDropdownControls_WithParams(ddlControl, ServiceName, Paramstr) {
    try {
        ddlControlId = ddlControl;

        $(ddlControlId).empty().append('<option selected="selected" value="0">Loading...</option>');
        $.ajax({
            type: "POST",
            url: ServiceName,
            async: false,
            data: Paramstr,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: OnControlPopulated,
            failure: function (response) {
                ErrorLog(new Error(response.d));
                alert(ErrorMsg());
            }
        });
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function CheckProspectPAN(ControlName, ServiceName, Paramstr) {
    try {
        ControlId = ControlName;
        $.ajax({
            type: "POST",
            url: ServiceName,
            async: false,
            data: Paramstr,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: OnControlPopulatedShowProspectPAN,
            failure: function (response) {
                ErrorLog(new Error(response.d));
                alert(ErrorMsg());
            }
        });
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function OnControlPopulatedShowProspectPAN(response) {    
    try {
        var data = jQuery.parseJSON(response.d);
        if (data[0].ErroCode == "1") {
            $('#' + ControlId).val("");
            $('#' + ControlId).focus();
            alert(data[0].ErrorMessage.toString());
        }
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

function CheckExistance(ControlName, ServiceName, Paramstr) {
    try {
        ControlId = ControlName;
        $.ajax({
            type: "POST",
            url: ServiceName,
            async: false,
            data: Paramstr,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: OnControlPopulatedShowExistance,
            failure: function (response) {
                ErrorLog(new Error(response.d));
                alert(ErrorMsg());
            }
        });
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function CheckDelStatus(ServiceName, Paramstr) {
    try {
       
        $.ajax({
            type: "POST",
            url: ServiceName,
            async: false,
            data: Paramstr,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: OnControlPopulatedShowDelExistance,
            failure: function (response) {
                ErrorLog(new Error(response.d));
                alert(ErrorMsg());
            }
        });
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function OnControlPopulatedShowDelExistance(response) {
    //debugger;
    try {
        var data = jQuery.parseJSON(response.d);
        if (data[0].ErroCode == "1") {
                       alert(data[0].ErrorMessage.toString());
                       $('#hdnchkstatus').val(data[0].ErroCode);
        }
        else {
            $('#hdnchkstatus').val('');
        }
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function OnControlPopulatedShowExistance(response) {
    //debugger;
    try {
        var data = jQuery.parseJSON(response.d);
        if (data[0].ErroCode == "1") {
            $('#' + ControlId).val('');
            $('#' + ControlId).focus();
            alert(data[0].ErrorMessage.toString());
            
          
        }
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
//===============================================================================================

var DyDdl = "";

//Purpose: Used to create & bind a drop down dynamically
//AddedBy: Datta
function BindDynamicDropdown(CtrlID, ServiceName, Paramstr) {
    try {
        $.ajax({
            type: "POST",
            url: ServiceName,
            async: false,
            data: Paramstr,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                var tdata = data.d;
                var Ctrl = "<select class='SelectCls' id='" + CtrlID + "'>";
                if (tdata.length > 0) {
                    var listItems = jQuery.parseJSON(tdata);
                    $.each(listItems, function () { Ctrl = Ctrl.concat("<option value='" + this['Key'] + "'>" + this['Value'] + "</option>"); });
                }
                else Ctrl = Ctrl.concat("<option value='0'>No Datafound</option>");
                Ctrl = Ctrl.concat("</select>");
                DyDdl = Ctrl;
            },
            failure: function (response) {
                ErrorLog(new Error(response.d));
                alert(ErrorMsg());
            }
        });
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

//===============================================================================================

//Purpose: Used to bind control
//AddedBy: Datta
function BindControl(MethodName, ServiceName, Paramstr) {
    try {
        $.ajax({
            type: "POST",
            url: ServiceName,
            async: false,
            data: Paramstr,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                window[MethodName](data);
            },
            failure: function (response) {
                ErrorLog(new Error(response.d));
                alert(ErrorMsg());
            }
        });
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

function OnControlPopulated(response) {
    try {
        $('#' + ddlControlId).html("");
        PopulateControl(response.d, $('#' + ddlControlId));
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

function PopulateControl(list, control) {
    try {
        if (list != "Data not found" && list != null) {
            if (list.length > 0) {
                control.removeAttr("disabled");
                var listItems = jQuery.parseJSON(list);
                $.each(listItems, function () {
                    //   control.append($("<option></option>").val(this['Value']).html(this['Text']));
                    control.append($("<option></option>").val(this['Key']).html(this['Value']));
                });
            }
            else {
                control.empty().append('<option selected="selected" value="0">Not available<option</option>');
            }
        }
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

//commmand  Query code for auto complet
function SearchText(textControl, valueControl, ServiceName, tableName) {
    var txtControlx = $('#' + textControl);
    var valueControlx = $('#' + valueControl);

    txtControlx.autocomplete({
        source: function (request, response) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: ServiceName,
                async: false,
                data: "{ 'st': '" + request.term + "', 'tableName': '" + tableName + "' }",
                dataType: "json",
                success: function (data) {

                    data = JSON.parse(data.d);
                    response($.map(data, function (item) {
                        return { label: item.Name, value: item.Name };
                    }));
                    
                }

                //                error: function (result) {
                //                    alert("Error");
                //                }
            });
        }
    });
}
var checkRecr=0;
$(document).ajaxStart(function () {
    $('#ajaxBusy').show();

    var MethodName = "SessionOut";
    var ServiceName = "../CommonWebServices/MasterBindings.aspx/CheckSession";
    if (checkRecr == 0) {
        checkRecr = 1;
        BindControl(MethodName, ServiceName);

    }
    else {
        checkRecr = 0;
    }

}).ajaxStop(function () {
    $('#ajaxBusy').hide();
});

function ajaxshow() {
    $('#ajaxBusy').show();
}

function ajaxhide() {
    $('#ajaxBusy').hide();
}

//===============================================================================================

//Purpose: Used to check session out
//AddedBy: Datta
function SessionOut(data) {
    //debugger;
    if (!data.d) {
        alert("System committed an unexpected error. Please login again to continue.");
        window.location.href = "../logout.asp";
        return;
    }
    if (parseInt(data.d) != "0") {
        alert("Sorry, your session has expired. Please login again to continue.");
        window.location.href = "../logout.aspx";
    }
}

$(function () {
    //setup ajax error handling
    $.ajaxSetup({

        error: function (x, status, error) {
            if (x.status == 403) {
                alert("Sorry, your session has expired. Please login again to continue");
                //window.location.href = "/Account/Login";
                window.location.href = "../logout.aspx";
            }
            else {
                // top.location.href = "/Error/KBolterrorPage.aspx";
                $("#masterPageDiv").show();
            }
        },
        beforeSend: function () {
            // show image here
            $('#ajaxBusy').show();
        },
        complete: function () {
            // hide image here
            $('#ajaxBusy').hide();
        }

    });
});

//===============================================================================================

//Purpose: Used to check whether data is present in controls
//AddedBy: Datta
function Required_Only(ControlId, Type) {

    var res = false;
    if (Type == "text") {
        if ($('#' + ControlId).val() != "") res = true;
        $('#' + ControlId).focus();
    }
    else if (Type == "email") {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (document.getElementById(ControlId).value != "") {
            if (!emailReg.test(document.getElementById(ControlId).value)) res = false;
            res = true;
        }
        else res = true;
    }
    else if (Type == "ddl") {
        if (document.getElementById(ControlId).selectedIndex > 0) res = true;
    }
    else if (Type == "chkbxlst") {

        var obj_chklst = null, j = 0, obj_len = 0, count = 0;
        obj_chklst = $('#' + ControlId).find("tr>td>input[type=checkbox]");
        obj_len = obj_chklst.length;
        for (; j < obj_chklst.length; j++) {
            if (!obj_chklst[j].checked) count = count + 1;
        }
        if (count != obj_len) res = true;

    }

    return res;
}

function Required(ControlId, errorLabel, Type) {

    if (Type == "Text") {
        if (document.getElementById(ControlId).value == "") {
            document.getElementById(ControlId).focus();
            $(errorLabel).css("display", "block");

            $('#' + ControlId).keyup(function () {
                ResetControlValidation(errorLabel)
            });

            ControlId = "";
            return false;

        }
        else {
            ControlId = "";
            $(errorLabel).css("display", "none");
            return true;
        }
    }
    else if (Type == "EMAIL") {

        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        if (document.getElementById(ControlId).value != "") {

            $(errorLabel).css("display", "block");
            if (!emailReg.test(document.getElementById(ControlId).value)) {

                $('#' + ControlId).keyup(function () {
                    ResetControlValidation(errorLabel)
                });
                ControlId = "";
                return false;
            }
            else
                ControlId = "";
            $(errorLabel).css("display", "none");
            return true;

        }
        else {
            ControlId = "";
            $(errorLabel).css("display", "none");
            return true;
        }
    }
    else if (Type == "DDL") {

        if (document.getElementById(ControlId).selectedIndex == 0) {
            document.getElementById(ControlId).focus();
            $(errorLabel).css("display", "block");

            $('#' + ControlId).change(function () {
                ResetControlValidation(errorLabel)
            });

            ControlId = "";

            return false;
        }
        else {
            ControlId = "";
            $(errorLabel).css("display", "none");
            return true;
        }
    }
    else if (Type == "chkbxLst") {

        var obj_chklst = null, j = 0, obj_len = 0, count = 0;
        obj_chklst = $('#' + ControlId).find("tr>td>input[type=checkbox]");
        obj_len = obj_chklst.length;
        for (; j < obj_chklst.length; j++) {
            if (!obj_chklst[j].checked) count = count + 1;
        }
        if (count == obj_len) {
            $(errorLabel).css("display", "block");
            return false;
        }
        else {
            $(errorLabel).css("display", "none");
            return true;
        }
    }

}

function ResetControlValidation(controlID) {
    $(controlID).css("display", "none");
}

function ResetValidation() {
    $('.error').css("display", "none");
}

function CalenderNoPastDate(CtrlID, YrRange) {
    //debugger;
    try {
        if (!YrRange || trim(YrRange) == "") YrRange = "-0:+50";
        $(CtrlID).datepicker({
            autoSize: true,
            changeMonth: true,
            changeYear: true,
            yearRange: YrRange,
            minDate: new Date(),
            dateFormat: "dd/mm/yy",
            onSelect: function (data) {
                var result = data;
                return data;
            }
        });
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function dateDiffNoPast(from, to) {
    $(from).datepicker({
        //numberOfMonths: 1,
        minDate: new Date(),
        //maxDate: '0',
        autoSize: true,
        changeMonth: true,
        changeYear: true,
        yearRange: "-110:+50",
        dateFormat: "dd/mm/yy",
        onSelect: function (selected) {
            $(to).datepicker("option", "minDate", selected)
        }
    });
    $(to).datepicker({
        //  numberOfMonths: 1,
        minDate: new Date(),
        //  maxDate: '0',
        autoSize: true,
        changeMonth: true,
        changeYear: true,
        yearRange: "-110:+50",
        dateFormat: "dd/mm/yy",
        onSelect: function (selected) {
            $(from).datepicker("option", "maxDate", selected)
        }
    });
}
function dateDiffNoFuture(from, to) {
    $(from).datepicker({
        //numberOfMonths: 1,
        maxDate: new Date(),
        //maxDate: '0',
        autoSize: true,
        changeMonth: true,
        changeYear: true,
        yearRange: "-50:+0",
        dateFormat: "dd/mm/yy",
        onSelect: function (selected) {
            $(to).datepicker("option", "minDate", selected)
        }
    });
    $(to).datepicker({
        //  numberOfMonths: 1,
        maxDate: new Date(),
        //  maxDate: '0',
        autoSize: true,
        changeMonth: true,
        changeYear: true,
        yearRange: "-50:+0",
        dateFormat: "dd/mm/yy",
        onSelect: function (selected) {
            $(from).datepicker("option", "maxDate", selected)
        }
    });
}
function CalenderNoFutureDate(CtrlID, YrRange) {
    try {
        if (!YrRange || trim(YrRange) == "") YrRange = "-150:+0";
        $(CtrlID).datepicker({
            autoSize: true,
            changeMonth: true,
            changeYear: true,
            yearRange: YrRange,
            maxDate: new Date(),
            dateFormat: "dd/mm/yy",
            onSelect: function (data) {
                var result = data;
                return data;
            }
        });
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

function CalenderContol(CtrlID, YrRange) {
    try {
        if (!YrRange || trim(YrRange) == "") YrRange = "-50:+50";
        $(CtrlID).datepicker({
            autoSize: true,
            changeMonth: true,
            changeYear: true,
            yearRange: YrRange,
            dateFormat: "dd/mm/yy",
            onSelect: function (data) {
                var result = data;
                return data;
            }
        });
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function CalenderContolByYear(controlID,MPyear) {
    try {
        $(controlID).datepicker({
            autoSize: true,
            changeMonth: true,
            changeYear: true,
            yearRange: MPyear,
            dateFormat: "dd/mm/yy",
            onSelect: function (data) {
                var result = data;
                return data;
            }
        });
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function onlyNumber(controlID) {
    $("#" + controlID).keydown(function (event) {
        // Allow only backspace and delete
        if (event.keyCode == 46 || event.keyCode == 8) {
            // let it happen, don't do anything
        }
        else {
            // Ensure that it is a number and stop the keypress
            if (event.keyCode < 48 || event.keyCode > 57) {
                event.preventDefault();
            }
        }
    });
}

function Reset(tableID) {
    var obj = null, i = 0;
    //Textfields
    obj = $('#' + tableID).find("input[type=text]");
    for (; i < obj.length; i++) obj[i].value = "";

    //Radio
    obj = null; i = 0;
    obj = $('#' + tableID).find("input[type=radio]");
    for (; i < obj.length; i++) obj[i].checked = false;

    //checkbox
    obj = null; i = 0;
    obj = $('#' + tableID).find("input[type=checkbox]");
    for (; i < obj.length; i++) obj[i].checked = false;

    //dropdown
    obj = null; i = 0;
    obj = $('#' + tableID).find("select");
    for (; i < obj.length; i++) obj[i].selectedIndex = 0;

    //textarea
    obj = null; i = 0;
    obj = $('#' + tableID).find("textarea");
    for (; i < obj.length; i++) obj[i].value = "";
}

function getParam(name) {
    try {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results == null)
            return "";
        else
            return results[1];
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

function parseJsonDate(jsonDate) {
    var offset = new Date().getTimezoneOffset() * 60000;
    var parts = /\/Date\((-?\d+)([+-]\d{2})?(\d{2})?.*/.exec(jsonDate);

    if (parts[2] == undefined)
        parts[2] = 0;

    if (parts[3] == undefined)
        parts[3] = 0;

    return new Date(+parts[1] + offset + parts[2] * 3600000 + parts[3] * 60000).format("dd/MM/yyyy");

};

function checkField(txt) {
    var val = txt.value;
    for (i = 0; i < val.length; i++) {
        var code = val.charCodeAt(i);
        if (!(code >= 65 && code <= 91) && !(code >= 97 && code <= 122) && !(code >= 48 && code <= 57) && !(code == 32)) {
            alert('Please Enter Alphanumrics Only');
            txt.value = "";
            txt.focus();
            return;
        }

    }
}

function NoEntry() {
    if (event.keyCode > 7) {
        event.returnValue = false;
    }
}

function OnlyNumericEntry() {
    if ((event.keyCode < 48 || event.keyCode > 57)) {
        event.returnValue = false;
    }
}

function removespace(str) {
    var sPwd = document.getElementById(str.id).value;
    var s = sPwd.substring(0, 1);
    if (s == " ") {
        document.getElementById(str.id).value = "";
    }
}

/// this function added by Ravi Chandana
// for using pagging

function removeTableRow(CtrlId) {
    var index = 0;
    $("#" + CtrlId + " tbody tr").each(function () {
        if (index > 0) {
            this.parentNode.removeChild(this);

        }
        index = index + 1;

    });

    return;
}
//===============================================================================================

//Purpose: Used to remove extra characters (only ',') in a CS string
//AddedBy: Datta
function SplitCSV(data) {
    var dval = data;
    var dlen = -1;
    while (true) {
        dlen = dval.length;
        if (parseInt(dval.charCodeAt(dlen - 1)) == 44) {
            dval = dval.substring(0, dlen - 1);
        }
        else break;
    }
    while (true) {
        dlen = dval.length;
        if (parseInt(dval.charCodeAt(0)) == 44) {
            dval = dval.substring(1, dlen);
        }
        else break;
    }

    return dval;
}

//===============================================================================================

//Purpose: Used to trim
//AddedBy: Datta
function ltrim(str) {
    for (var k = 0; k < str.length && isWhitespace(str.charAt(k)) ; k++);
    return str.substring(k, str.length);
}
function rtrim(str) {
    for (var j = str.length - 1; j >= 0 && isWhitespace(str.charAt(j)) ; j--);
    return str.substring(0, j + 1);
}
function trim(str) {
    return ltrim(rtrim(str));
}
function isWhitespace(charToCheck) {
    var whitespaceChars = " \t\n\r\f";
    return (whitespaceChars.indexOf(charToCheck) != -1);
}

//===============================================================================================

//Purpose: Used to compare dates(only)
//AddedBy: Datta
function CompareDates(fDate, tDate) {
    //debugger;
    try {
        var res = -2;
        if (!fDate || !tDate) return res;
        if (trim(fDate) == "" || trim(tDate) == "") return res;

        //Splitting the given date of 'DD/MM/YYYY' format
        var arrf = fDate.split('/');
        var arrt = tDate.split('/');
        //Converting the given date to 'MM/DD/YYYY' format
        var a = new Date(arrf[1] + "/" + arrf[0] + "/" + arrf[2]);
        var b = new Date(arrt[1] + "/" + arrt[0] + "/" + arrt[2]);
        //Generating UniqueCode for each date
        var fdt = Date.UTC(a.getFullYear(), a.getMonth() + 1, a.getDate());
        var tdt = Date.UTC(b.getFullYear(), b.getMonth() + 1, b.getDate());

        if (parseFloat(fdt) > parseFloat(tdt)) res = -1;    //less than
        if (parseFloat(fdt) == parseFloat(tdt)) res = 0;    //equal
        if (parseFloat(fdt) < parseFloat(tdt)) res = 1;     //greater than
        return res;
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

//===============================================================================================

//Purpose: Used to compare dates with time
//AddedBy: Datta
function CompareDateTime(fDate, tDate, fTime, tTime) {
    //debugger;
    try {
        var res = -2;
        if (!fDate || !tDate || !fTime || !tTime) return res;
        //if (trim(fDateTime) == "" || trim(tDateTime) == "") return res;

        //Splitting the given date of 'DD/MM/YYYY' format
        var arrf = fDate.split('/');
        var arrt = tDate.split('/');
        var arrft = fTime.split(':');
        var arrtt = tTime.split(':');
        //Converting the given date to 'MM/DD/YYYY' format
        var a = new Date(arrf[2], arrf[1], arrf[0], arrft[0], arrft[1]);
        var b = new Date(arrt[2], arrt[1], arrt[0], arrtt[0], arrtt[1]);
        //Generating UniqueCode for each date
        var fdt = Date.UTC(a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes());
        var tdt = Date.UTC(b.getFullYear(), b.getMonth() + 1, b.getDate(), b.getHours(), b.getMinutes());

        if (parseFloat(fdt) > parseFloat(tdt)) res = -1;    //less than
        if (parseFloat(fdt) == parseFloat(tdt)) res = 0;    //equal
        if (parseFloat(fdt) < parseFloat(tdt)) res = 1;     //greater than
        return res;
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

//===============================================================================================

//Purpose: Used to get current date in 'DD/MM/YYYY' format
//AddedBy: Datta
function GetCurrentDate() {
    //debugger;
    try {
        var y = (new Date()).getFullYear();
        var m = parseInt((new Date()).getMonth()) + 1;
        if (m.toString().length == 1) m = "0" + m.toString();
        var d = (new Date()).getDate();
        if (d.toString().length == 1) d = "0" + d.toString();
        //return m + "/" + d + "/" + y;     //For 'MM/DD/YYYY' format
        return d + "/" + m + "/" + y;       //For 'DD/MM/YYYY' format
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}


//===============================================================================================

//Purpose: Used to compare the user defined date and current date(Note: Both dates must be in 'DD/MM/YYYY' format).
//AddedBy: Datta
function CheckFutureDate(Ctrl) {
    var res = false;
    var curdt = Date.parse(Ctrl.value);
    var sysdt = Date.parse(GetCurrentDate());
    if (curdt > sysdt) alert("Entered date should be less than or equal to system date.");
    else res = true;
    return res;
}
function GetMachineFormat(date) {
    var res = "";
    try {
        date = trim(date);
        if (!isWhitespace(date)) {
            var val = date.split("/");
            res = val[1] + "/" + val[0] + "/" + val[2];
        }
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
    return res;
}

//samba
function preventBackspace(e) {
    var evt = e || window.event;
    if (evt) {
        var keyCode = evt.charCode || evt.keyCode;
        if (keyCode === 8) {
            if (evt.preventDefault) {
                evt.preventDefault();
            } else {
                evt.returnValue = false;
            }
        }
    }
}
function dateDiff(from, to) {
    $(from).datepicker({
        //numberOfMonths: 1,
        minDate: '-110Y',
        //maxDate: '0',
        autoSize: true,
        changeMonth: true,
        changeYear: true,
        yearRange: "-110:+10",
        dateFormat: "dd/mm/yy",
        onSelect: function (selected) {
            $(to).datepicker("option", "minDate", selected)
        }
    });
    $(to).datepicker({
      //  numberOfMonths: 1,
        minDate: '-110Y',
      //  maxDate: '0',
        autoSize: true,
        changeMonth: true,
        changeYear: true,
        yearRange: "-110:+10",
        dateFormat: "dd/mm/yy",
        onSelect: function (selected) {
            $(from).datepicker("option", "maxDate", selected)
        }
    });
}

function DateRangeValidation(from, to, result) {
    var dates = $(from).datepicker({
        minDate: '-110Y',
        maxDate: '0',
        autoSize: true,
        changeMonth: true,
        changeYear: true,
        yearRange: "-110:+10",
        dateFormat: "dd/mm/yy",
        onSelect: function (selectedDate) {
            var option = this.id == result.id ? "minDate" : "maxDate",
            instance = $(this).data("datepicker"),
            date = $.datepicker.parseDate(
            instance.settings.dateFormat ||
            $.datepicker._defaults.dateFormat,
            selectedDate, instance.settings);
            dates.not(this).datepicker("option", option, date);
        }
    });

    var dates = $(to).datepicker({
        minDate: '-110Y',
        maxDate: '0',
        autoSize: true,
        changeMonth: true,
        changeYear: true,
        yearRange: "-110:+10",
        dateFormat: "dd/mm/yy",
        onSelect: function (selectedDate) {
            if (from.value > selectedDate)
                from.value = "";
            var option = this.id == to.id ? "minDate" : "maxDate",
            instance = $(this).data("datepicker"),
            date = $.datepicker.parseDate(
            instance.settings.dateFormat ||
            $.datepicker._defaults.dateFormat,
            selectedDate, instance.settings);
            dates.not(this).datepicker("option", option, date);
        }
    });


}

function PreventFutureDate(value) {
    $(value).datepicker({
        autoSize: true,
        changeMonth: true,
        maxDate: '0',
        changeYear: true,
        yearRange: "-110:+0",
        dateFormat: "dd/mm/yy",
        onSelect: function (data) {
            var result = data;
            //if (data == '') {
            //    document.getElementById('<%= hdnFDate.ClientID%>').value = '';
            //    document.getElementById("<%=txtFDate.ClientID%>").value = '';
            //}
            //else {
            //    document.getElementById('<%= hdnFDate.ClientID%>').value = data;
            //    document.getElementById("<%=txtFDate.ClientID%>").value = data;
            //}
        }

    });
    return data;
}

//First letter Space Validation

function trim(s) {
    return rtrim(ltrim(s));
}
function ltrim(s) {
    var l = 0;
    while (l < s.length && s[l] == ' ') {
        l++;
    }
    return s.substring(l, s.length);
}
function rtrim(s) {
    var r = s.length - 1;
    while (r > 0 && s[r] == ' ') {
        r -= 1;
    }
    return s.substring(0, r + 1);
}
function TruncateSpaces1(evt) {
    var val = trim(document.getElementById(evt.id).value);
    document.getElementById(evt.id).value = val;
    if (val == "") {
        return false;
    }
}

//Tooltip for all textboxes
function changeTooltipText(control) {
    isNetscape = (document.layers);
    keyCode = (isNetscape) ? keyStroke.which : event.keyCode;
    newChar = String.fromCharCode(keyCode);
    if (control != null) {
        control.title = control.value + newChar;
    }
}

//text box max lenth limit
function checklength(CtrlID, StrLen) {
    //debugger;
    //if (document.getElementById(str.id).value.length > 400) document.getElementById(str.id).value = document.getElementById(str.id).value.substring(0, 400);
    if (parseInt(StrLen) <= 0 || typeof (StrLen) == "undefined") StrLen = 400;
    if ($('#' + CtrlID.id).val().length > parseInt(StrLen)) $('#' + CtrlID.id).val($('#' + CtrlID.id).val().substring(0, StrLen));
}

//**************** String Builder  ******************
function StringBuilder(value) {
    this.strings = new Array("");
    this.append(value);
}

// Appends the given value to the end of this instance.
StringBuilder.prototype.append = function (value) {
    if (value) {
        this.strings.push(value);
    }
}

// Clears the string buffer
StringBuilder.prototype.clear = function () {
    this.strings.length = 1;
}

// Converts this instance to a String.
StringBuilder.prototype.toString = function () {
    return this.strings.join("");
}


function sum(x, y) {
    return parseFloat(x) + parseFloat(y);
}

//************colors***********************
function PrepareColor() {

    Mycolr = new Array();
    Mycolr.push("9ACD32");
    Mycolr.push("AFEEEE");
    Mycolr.push("DB7093");
    Mycolr.push("FFEFD5");
    Mycolr.push("FFDAB9");
    Mycolr.push("CD853F");
    Mycolr.push("FFC0CB");
    Mycolr.push("DDA0DD");
    Mycolr.push("B0E0E6");
    Mycolr.push("800080");
    Mycolr.push("FF0000");
    Mycolr.push("BC8F8F");
    Mycolr.push("8B4513");
    Mycolr.push("FA8072");
    Mycolr.push("F4A460");
    Mycolr.push("2E8B57");
    Mycolr.push("FFF5EE");
    Mycolr.push("A0522D");
    Mycolr.push("C0C0C0");
    Mycolr.push("87CEEB");
    Mycolr.push("6A5ACD");
    Mycolr.push("708090");
    Mycolr.push("FFFAFA");
    Mycolr.push("00FF7F");
    Mycolr.push("4682B4");
    Mycolr.push("D2B48C");
    Mycolr.push("D8BFD8");
    Mycolr.push("FF6347");
    Mycolr.push("FFFFFF");
    Mycolr.push("40E0D0");
    Mycolr.push("EE82EE");
    Mycolr.push("F5DEB3");
    Mycolr.push("FFFFFF");
    Mycolr.push("F5F5F5");
    Mycolr.push("FFFF00");
    return Mycolr;
}

//Allow  perticular chars for text boxes.

$.fn.numeric = function (p) {
    var az = "abcdefghijklmnopqrstuvwxyz";
    az += az.toUpperCase();
    p = $.extend({
        nchars: az
    }, p);
    return this.each(function () {
        $(this).alphanumeric(p);
    }
    );
};

$.fn.alphanumeric = function (p) {
    p = $.extend({
        ichars: "!@#$%^&*()+=[]\\\';,/{}|\":<>?~`.-_ ",
        nchars: "",
        allow: ""
    }, p);
    return this.each
    (
    function () {
        if (p.nocaps) p.nchars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (p.allcaps) p.nchars += "abcdefghijklmnopqrstuvwxyz";
        s = p.allow.split('');
        for (i = 0; i < s.length; i++) if (p.ichars.indexOf(s[i]) != -1) s[i] = "\\" + s[i];
        p.allow = s.join('|');
        var reg = new RegExp(p.allow, 'gi');
        var ch = p.ichars + p.nchars;
        ch = ch.replace(reg, '');
        $(this).keypress
        (
        function (e) {
            if (!e.charCode) k = String.fromCharCode(e.which);
            else k = String.fromCharCode(e.charCode);
            if (ch.indexOf(k) != -1) e.preventDefault();
            if (e.ctrlKey && k == 'v') e.preventDefault();
        }
        );
        $(this).bind('contextmenu', function () { return false });
    }
    );
};

function Number(ControlId, errorLabel, Type) {

    if (Type == "Text") {
        var num = document.getElementById(ControlId).value;
        if (num.match(/^\d+$/)) {
            ControlId = "";
            $(errorLabel).css("display", "none");
            return true;
        }
        else {
            document.getElementById(ControlId).focus();
            $(errorLabel).css("display", "block");

            $('#' + ControlId).keyup(function () {
                ResetControlValidation(errorLabel)
            });

            ControlId = "";
            return false;
        }
    }
}
//samba
function nodatafound() {
    removeTableRow('Grdview');
    $('#Grdview').append("<tr id=trid>"
            + "<td style='text-align:center;font-weight:bold;' colspan='10'>No data found</td>"
            + "</tr>");
}

//========================================= Error Log Implemantation (start) =========================================//

//Purpose: Contains properties used for error logging
var ErrDtls = function (ErrMsg, ErrDesc, ErrName, ErrNo, ErrStack) {
    this.BrCodeName = navigator.appCodeName;
    this.BrName = navigator.appName;
    this.BrVersion = navigator.appVersion;
    this.BrCookiesEnabled = navigator.cookieEnabled;
    this.BrUserAgent = navigator.userAgent;
    this.BrPlatform = navigator.platform;
    this.JsPageName = document.URL;
    this.JsMsg = ErrMsg;
    this.JsDesc = ErrDesc;
    this.JsName = ErrName;
    this.JsNumber = ErrNo;
    this.JsStack = ErrStack;
}

//Purpose: Used to log the error
function ErrorLog(e) {
    //debugger;
    //var e = new Error();
    var obj = new ErrDtls(e.message, e.description, e.name, e.number, e.stack);
    var jsontext = JSON.stringify(obj);
    jsontext = "{\"ErrDtls\" : " + jsontext + "}";
    jsontext = "{Param : '" + jsontext + "'}";
    $.ajax({
        type: "POST",
        url: '../CommonWebServices/MasterBindings.aspx/ErrorLog',
        async: false,
        cache: false,
        data: jsontext,
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    });
}

//Purpose: Used to display an alert incase of error
function ErrorMsg() {
    return "System has committed an unexpected error. Please contact the system administrator.";
}

//========================================= Error Log Implemantation (end) =========================================//

function GetDataByID(TableName, GetCol, ColumnName, ColumnValue) {
    var jsondata;
    try {
        $.ajax({
            type: "POST",
            url: '../CommonWebServices/MasterBindings.aspx/GetDataByID',
            async: false,
            //data: "{ID : 'All'}",
            data: "{TableName: '" + TableName + "',GetCol: '" + GetCol + "',ColumnName: '" + ColumnName + "' ,ColumnValue: '" + ColumnValue + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                //return data;
                jsondata = data;
            },
            failure: function (response) {
                ErrorLog(new Error(response.d));
                alert(ErrorMsg());
            }
        });

        return jsondata;

    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

//======================================= Get the Party Information by Identity=======================================//
function GetPartyByIdentity(identity) {
    var jsondata;
    try {
        $.ajax({
            type: "POST",
            url: '../CommonWebServices/MasterBindings.aspx/GetPartyByIdentity',
            async: false,
            //data: "{ID : 'All'}",
            data: "{identity: '" + identity + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                //return data;
                jsondata = data;
            },
            failure: function (response) {
                ErrorLog(new Error(response.d));
                alert(ErrorMsg());
            }
        });

        return jsondata;

    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function RemmoveUndifined(vobj) {
    if (vobj == undefined) {
        return '';
    }
    else { return vobj; }
}
function GridSorting(CtrlID) {
    for (var i = 0; i < CtrlID.parentNode.parentNode.parentNode.cells.length; i++) {
        if (parseInt(CtrlID.parentNode.parentNode.parentNode.cells[i].getElementsByTagName('img').length) > 0) {
            try {
                CtrlID.parentNode.parentNode.parentNode.cells[i].getElementsByTagName('img')[0].style.display = "none";
            }
            catch (exeception) {
            }
        }
    }
    var cond = trim(CtrlID.getAttribute('itemid'));
    cond = cond.toLowerCase();
    var hdnfld = trim(document.getElementById('hdnSortOrder').value);

    if (hdnfld.toLowerCase() == "") document.getElementById('hdnSortOrder').value = "asc";
    if (hdnfld.toLowerCase() == "asc") document.getElementById('hdnSortOrder').value = "desc";
    if (hdnfld.toLowerCase() == "desc") document.getElementById('hdnSortOrder').value = "";
    hdnfld = trim(document.getElementById('hdnSortOrder').value);
    if (hdnfld.toLowerCase() == "asc" || hdnfld.toLowerCase() == "desc") {
        CtrlID.parentNode.getElementsByTagName('img')[0].alt = hdnfld;
        if (hdnfld.toLowerCase() == "asc") CtrlID.parentNode.getElementsByTagName('img')[0].src = "../Images/up-arrow.png";
        if (hdnfld.toLowerCase() == "desc") CtrlID.parentNode.getElementsByTagName('img')[0].src = "../Images/down-arrow.png";
        CtrlID.parentNode.getElementsByTagName('img')[0].style.display = "inline";
    }
    else {
        CtrlID.parentNode.getElementsByTagName('img')(0).style.display = "none";
        // CtrlID.parentNode.parentNode.parentNode.cells[2].getElementsByTagName('img')[0].style.display = "inline";
        // CtrlID.parentNode.parentNode.parentNode.cells[2].getElementsByTagName('img')[0].alt = hdnfld
    }
    var param_sort = "ID";
    if (hdnfld.toLowerCase() != "")
        param_sort = CtrlID.getAttribute('itemid');
    //param_sort = CtrlID.getAttribute('itemid') + " " + hdnfld.toLowerCase();
    SortData(param_sort);
}