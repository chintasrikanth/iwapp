function filldata() {
    try {
        $("#hdnCountry").val($("#ddlCountry").val());
        $("#hdnZone").val($("#ddlZone").val());
        $("#hdnState").val($("#ddlState").val());
        $("#hdnCity").val($("#ddlCity").val());
        $("#hdnRegistrar").val($("#ddlRegistrar").val());
    } catch (e) {
         ErrorLog(e);alert(ErrorMsg());
    }
}

$(function () {
    $("#txtPin").attr("maxlength", "6").numeric({ allow: "0123456789" });
    $("#txtContact").attr("maxlength", "10").numeric({ allow: "0123456789" });
    $("#txtFax").attr("maxlength", "15").numeric({ allow: "0123456789" });
    $("#txtcp1mobile").attr("maxlength", "6").numeric({ allow: "0123456789" });
    $("#txtcp2mobile").attr("maxlength", "10").numeric({ allow: "0123456789" });

});
$(document).ready(function () {
    //debugger;
    PopulateCascadeDropdownControls('ddlCountry', '../Masters/AMCparameters.aspx/GetCountry', '0');
    PopulateDropdownControls('ddlRegistrar', '../Masters/AMCparameters.aspx/GetRegistrar', '');

});

function GetZones(inp_value) {
    $('#ddlCity').empty();
    $('#ddlState').empty();
    PopulateCascadeDropdownControls('ddlZone', '../Masters/AMCparameters.aspx/GetZones', inp_value);
}
function Get_States(inp_value) {
    $('#ddlCity').empty();
    PopulateCascadeDropdownControls('ddlState', '../Masters/AMCparameters.aspx/GetStates', inp_value);
}
function Get_Cities(inp_value) {
    PopulateCascadeDropdownControls('ddlCity', '../Masters/AMCparameters.aspx/GetCities', inp_value);
}

function FillGrid(data) {
    //  debugger;
    try {
        result = jQuery.parseJSON(data.d);
        if (result == null) {
            nodatafound();
            return;
        }
        if (result.length <= 0) {
            nodatafound();
            return;
        }
        else {
            removeTableRow('Grdview');
            var tdata = jQuery.parseJSON(data.d);
            if (tdata.length > 0) {
                for (var i = 0; i < tdata.length; i++) {
                    $('#Grdview').append("<tr><td>" + tdata[i].RegistrarName + "</td><td>" + tdata[i].AMC_Name + "</td><td>"
                        + tdata[i].CountryName + "</td><td>" + tdata[i].ZoneName + "</td><td> " + tdata[i].StateName + "</td><td> " + tdata[i].CityName +
                        "</td><td><img onclick='return Edit(" + tdata[i].ID + ");'  src='../Images/edit.png' "
                        + "style='border-style: none;cursor:pointer;'/></td> <td><img onclick='return Reverse(" + tdata[i].ID + ");' src='../Images/close.png'  style='border-style: none;cursor:pointer;'/>"
                        + "</td><td><img onclick='return View(" + tdata[i].ID + ");' src='../Images/view1.jpg'  style='border-style: none;cursor:pointer;'/></td> </tr>");
                }
            }
        }
    } catch (e) {
         ErrorLog(e);alert(ErrorMsg());
    }
}

function View(id) {
    try {
        Edit(id);
        // ChangeViewLables();
        DisplayView()
    } catch (e) {
         ErrorLog(e);alert(ErrorMsg());
    }

}
function Reverse(id) {
    // debugger;
    try {
        Edit(id);
        // RemoveViewLables();
        DisplayReverse();
    } catch (e) {
         ErrorLog(e);alert(ErrorMsg());
    }
}
function CreateNew() {
    try {
        DisplaySave();
        ClearTextBoxes();
        // RemoveViewLables();
        $("#Maindiv").slideDown("slow");
        $("#divgrid").slideUp("slow");
        return false;
    } catch (e) {
         ErrorLog(e);alert(ErrorMsg());
    }

}
function Cancel() {
    try {
        ClearTextBoxes();
        $("#Maindiv").slideUp("slow");
        $("#divgrid").slideDown("slow");
        return false;
    } catch (e) {
         ErrorLog(e);alert(ErrorMsg());
    }
}
//Edit section
function Edit(rid) {
    try {
        DisplayUpdate();
        $("#Maindiv").slideDown("slow");
        $("#divgrid").slideUp("slow");
        //alert(rid);
        GetGridview(rid);
    } catch (e) {
         ErrorLog(e);alert(ErrorMsg());
    }
}
function GetGridview(rid) {

    try {
        var MethodName = "FillPageControls";
        var ServiceName = '../Masters/AMCparameters.aspx/GetAmcData';
        var Paramstr = "{ SortBy: '',SortByColumnName: '',PKID: '" + rid + "' ,PageNumber: '0',PageSize: '0'}";//"{param1:'" + param1 + "',param2:'" + param2 + "'}";
        BindControl(MethodName, ServiceName, Paramstr);
    } catch (e) {
         ErrorLog(e);alert(ErrorMsg());
    }
}

function FillPageControls(data) {

    try {
        result = jQuery.parseJSON(data.d);
        if (result == null) {
            return;
        }
        else {
            $("#hdnID").val(result[0].ID);
            $("#hdnVerno").val(result[0].VerNo);
            $("#hdnRecordType").val(result[0].Record_Type);
            $("#ddlRegistrar").val(result[0].Registrar);
            $("#txtAmcName").val(result[0].AMC_Name);
            $("#txtshortName").val(result[0].ShortName);
            $("#txtAmcCode").val(result[0].AMC_Code);
            $("#txtAdd1").val(result[0].Address1);
            $("#txtadd2").val(result[0].Address2);
            $("#txtAdd3").val(result[0].Address3);
            $("#ddlCountry").val(result[0].Country);
            GetZones(result[0].Country)
            $("#ddlZone").val(result[0].Zone);
            Get_States(result[0].Zone)
            $("#ddlState").val(result[0].State);
            Get_Cities(result[0].State)
            $("#ddlCity").val(result[0].City);
            $("#txtPin").val(result[0].Pincode);
            $("#txtContact").val(result[0].ContactNumber);
            $("#txtFax").val(result[0].Fax);
            $("#txtWebsite").val(result[0].website);
            $("#txtcp1").val(result[0].cp1);
            $("#txtcp1email").val(result[0].cp1email);
            $("#txtcp1mobile").val(result[0].cp1mobile);
            $("#txtcp2").val(result[0].cp2);
            $("#txtcp2email").val(result[0].cp2email);
            $("#txtcp2mobile").val(result[0].cp2mobile);
            $("#ddlActStatus").val(result[0].ActivationStatus);
            $("#ddlcpsActStatus").val(result[0].cpsActStatus);
        }
    } catch (e) {
         ErrorLog(e);alert(ErrorMsg());
    }
}