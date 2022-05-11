//function GridSorting(CtrlID) {
//    for (var i = 0; i < CtrlID.parentNode.parentNode.parentNode.cells.length; i++) {
//        if (parseInt(CtrlID.parentNode.parentNode.parentNode.cells[i].getElementsByTagName('img').length) > 0) {
//            try {
//                CtrlID.parentNode.parentNode.parentNode.cells[i].getElementsByTagName('img')[0].style.display = "none";
//            }
//            catch (exeception) {
//            }
//        }
//    }
//    var cond = trim(CtrlID.getAttribute('itemid'));
//    cond = cond.toLowerCase();
//    var hdnfld = trim(document.getElementById('hdnSortOrder').value);

//    if (hdnfld.toLowerCase() == "") document.getElementById('hdnSortOrder').value = "asc";
//    if (hdnfld.toLowerCase() == "asc") document.getElementById('hdnSortOrder').value = "desc";
//    if (hdnfld.toLowerCase() == "desc") document.getElementById('hdnSortOrder').value = "";
//    hdnfld = trim(document.getElementById('hdnSortOrder').value);
//    if (hdnfld.toLowerCase() == "asc" || hdnfld.toLowerCase() == "desc") {
//        CtrlID.parentNode.getElementsByTagName('img')[0].alt = hdnfld;
//        if (hdnfld.toLowerCase() == "asc") CtrlID.parentNode.getElementsByTagName('img')[0].src = "../Images/up-arrow.png";
//        if (hdnfld.toLowerCase() == "desc") CtrlID.parentNode.getElementsByTagName('img')[0].src = "../Images/down-arrow.png";
//        CtrlID.parentNode.getElementsByTagName('img')[0].style.display = "inline";
//    }
//    else {
//        CtrlID.parentNode.getElementsByTagName('img')(0).style.display = "none";
//        // CtrlID.parentNode.parentNode.parentNode.cells[2].getElementsByTagName('img')[0].style.display = "inline";
//        // CtrlID.parentNode.parentNode.parentNode.cells[2].getElementsByTagName('img')[0].alt = hdnfld
//    }
//    var param_sort = "ID";
//    if (hdnfld.toLowerCase() != "")
//        param_sort = CtrlID.getAttribute('itemid');
//    //param_sort = CtrlID.getAttribute('itemid') + " " + hdnfld.toLowerCase();
//    SortData(param_sort);
//}



$(document).ready(function () {
    $('#PageTitle').text('Bank Master');
    $('#subTitle').text('Wealth Tracking Aggregator - General Masters - Bank Master');

    $("#a_New").css("cursor", "pointer");
    var ServiceName = "../CommonWebServices/MasterBindings.aspx/GetCountryList";
    PopulateDropdownControls('ddlCountryName', ServiceName, '');
    $("#form1").validate({
        showErrors: function (errorMap, errorList) {
            $.each(this.validElements(), function (index, element) {
                var $element = $(element);
                $element.data("title", "") // Clear the title - there is no error associated anymore
                    .removeClass("error")
                    .tooltip("destroy");
            });
            $.each(errorList, function (index, error) {
                var $element = $(error.element);
                $element.tooltip("destroy") // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
                    .data("title", error.message)
                    .addClass("error")
                    .tooltip(); // Create a new tooltip based on the error messsage we just set in the title
            });
        }
    });
});
function CreateNew(Ctrl) {

    ClearTextBoxes();
    $("#Maindiv").slideDown("slow");
    $("#divgrid").slideUp("slow");
    $("#CreateT").show();
    $("#ReverseT").hide();
    $("#ViewT").hide();
    $("#Cupdate").hide();
    ClearFields();
    PageButtons(true, false, false);
    return false;
}


function Cancel() {
    ClearTextBoxes();
    $("#Maindiv").slideUp("slow");
    $("#divgrid").slideDown("slow");
    ClearERROR();
    return false;
}
function PageButtons(Save, Update, Reverse) {
    //debugger;
    if (!Save || Save == false) $('#btnsave').hide();
    else $('#btnsave').show();

    if (!Update || Update == false) $('#btnUpdate').hide();
    else $('#btnUpdate').show();

    if (!Reverse || Reverse == false) $('#btnReverse').hide();
    else $('#btnReverse').show();
}
function ClearFields() {
    $('#txtMCode').val("");
    $('#txtbadd1').val("");
    $('#txtbadd2').val("");
    $('#txtbadd3').val("");
    $('#txtPincode').val("");
    $('#txtBankName').val("");
    $('#txtBranchName').val("");
    $('#txtContactPersonname').val("");
    $('#txtCntctMobileNo').val("");
    $('#txtCntctPEmailId').val("");
}
function Edit(id, version) {
   
    $("#CreateT").hide();
    $("#ReverseT").hide();
    $("#ViewT").hide();
    $("#Cupdate").show();
    try {
        $("#Maindiv").slideDown("slow");
        $("#divgrid").slideUp("slow");
        //debugger;
        GetGridview(id, version);
        PageButtons(false, true, false);
    } catch (e) {
        ErrorLog(e); alert(ErrorMsg());
    }

}
function GetGridview(rid, version) {
    //debugger;
    try {
        var dmode = $('#hdnfld_DMode').val();
        var MethodName = "FillPageControls";
        var ServiceName = '../Masters/Bank.aspx/BankListData';
        var Paramstr = "{ SortBy: '',SortByColumnName: '',ID: '" + rid + "' ,PageNumber: '1',PageSize: '10',Record_Type:'" + dmode + "',version:'" + version + "',SearchVal : ''}";//"{param1:'" + param1 + "',param2:'" + param2 + "'}";
        BindControl(MethodName, ServiceName, Paramstr);
    } catch (e) {
        ErrorLog(e); alert(ErrorMsg());
    }
}
function FillPageControls(data) {
    //debugger;
    try {
        result = jQuery.parseJSON(data.d);
        if (result == null) {
            return;
        }
        else {
            if (result.length > 0) {
                if (result[0].Status == "1") {
                    alert(result[0].StatusMessage)
                    status = false;
                }
                else
                    status = true;
            }
            $("#btnSave").hide();
            $("#btnUpdate").show();
            $("#btnReverse").hide();
            $("#hdnID").val(result[0].ID);
            $("#hdnVerno").val(result[0].VerNo);
            $("#hdnRecordType").val(result[0].Record_Type);

            $("#txtBankName").val(result[0].Bank_Name);
            $("#txtIFSCCode").val(result[0].IFSCcode);
            $("#txtBranchName").val(result[0].Branch_Name);
            $("#txtContactPersonname").val(result[0].Contact_Name);
            $("#txtCntctMobileNo").val(result[0].Phone_Number);
            $("#txtCntctPEmailId").val(result[0].Email_Id);
            $("#txtMCode").val(result[0].Bank_Code);
            //$("#ddlDesgnContctPerson").val(result[0].Country_Code);

            $("#ddlCountryName").val(result[0].Country_Code);
            GetZones(result[0].Country_Code)
            $("#ddlZoneName").val(result[0].Zone);
            Get_States(result[0].Zone)
            $("#ddlStateName").val(result[0].State);
            Get_Cities(result[0].State)
            $("#ddlcityName").val(result[0].City);
            //$("#txtIFSCCode").val(result[0].Email_Id);
            $("#txtbadd1").val(result[0].Address1);
            $("#txtbadd2").val(result[0].Address2);
            $("#txtbadd3").val(result[0].Address3);
            $("#txtPincode").val(result[0].Pin_code);

        }
    } catch (e) {
        ErrorLog(e); alert(ErrorMsg());
    }
}

function Reverse(id, version) {
    try {
        Edit(id, version);
        $("#CreateT").hide();
        $("#ReverseT").show();
        $("#ViewT").hide();
        $("#Cupdate").hide();
        $("#btnSave").hide();
        $("#btnUpdate").hide();
        $("#btnReverse").show();
        PageButtons(false, false, true);
    } catch (e) {
        ErrorLog(e); alert(ErrorMsg());
    }
    // debugger;

}
function View(id, version) {
    //debugger;
    try {
        Edit(id, version);
        $("#CreateT").hide();
        $("#ReverseT").hide();
        $("#ViewT").show();
        $("#Cupdate").hide();
        $("#btnSave").hide();
        $("#btnUpdate").hide();
        $("#btnReverse").hide();
    } catch (e) {
        ErrorLog(e); alert(ErrorMsg());
    }

}

function GetZones(inp_value) {

    $("#hdnCountry").val($("#ddlCountryName").val());
    $('#ddlStateName').empty();
    PopulateCascadeDropdownControls('ddlZoneName', '../Masters/AMCparameters.aspx/GetZones', inp_value);
}
function Get_States(inp_value) {
    $("#hdnZone").val($("#ddlZoneName").val());
    $('#ddlcityName').empty();
    PopulateCascadeDropdownControls('ddlStateName', '../Masters/AMCparameters.aspx/GetStates', inp_value);
}
function Get_Cities(inp_value) {
    //debugger;
    PopulateCascadeDropdownControls('ddlcityName', '../Masters/AMCparameters.aspx/GetCities', inp_value);
}
function fillData() {
    // debugger;
    $("#hdnCountry").val($("#ddlCountryName").val());
    $("#hdnEmail_Id").val($("#txtCntctPEmailId").val());
    $("#hdnBank_Name").val($("#txtBankName").val());
    $("#hdnBranch_Name").val($("#txtBranchName").val());
    $("#hdnContact_Name").val($("#txtContactPersonname").val());
    $("#hdnPhone_Number").val($("#txtCntctMobileNo").val());
    $("#hdnmicr").val($("#txtMCode").val());
    $("#hdnifsc").val($("#txtIFSCCode").val());
    $("#hdnadd1").val($("#txtbadd1").val());
    $("#hdnadd2").val($("#txtbadd2").val());
    $("#hdncity").val($("#ddlcityName").val());
    $("#hdnState").val($("#ddlStateName").val());
}
function nodatafound() {
    removeTableRow('gridBranchMaster');
    $('#gridBranchMaster').append("<tr id=trid>"
            + "<td style='text-align:center;font-weight:bold;' colspan='7'>No data found</td>"
            + "</tr>");
}
function FillGrid(data) {
    //debugger;
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
            removeTableRow('gridBranchMaster');
            var tdata = jQuery.parseJSON(data.d);
            if (tdata.length > 0) {
                for (var i = 0; i < tdata.length; i++) {
                    var st = "";
                    var st1 = "";
                    if (tdata[i].Record_Type == 'N' || tdata[i].Record_Type == 'R' || $('#hdnfld_DMode').val() == 'H') {
                        st = "style='Display:none;cursor:pointer;'";
                    }

                    if ($('#hdnfld_DMode').val() == 'H' || tdata[i].Record_Type == 'R') {
                        st1 = "style='Display:none;cursor:pointer;'";
                    }
                    var versty = "style='Display:none'";
                    if ($('#hdnfld_DMode').val() == 'H') {
                        versty = "";
                        $("#gridcompanydesignation td:nth-child(7),th:nth-child(7)").show();
                    }
                    else {
                        $("#gridcompanydesignation td:nth-child(7),th:nth-child(7)").hide();
                    }
                    $('#gridBranchMaster').append("<tr><td>" + tdata[i].Bank_Name + "</td><td>"
                        + tdata[i].Branch_Name + "</td><td>"
                        + RemmoveUndifined(tdata[i].Contact_Name) + "</td><td>"
                        + RemmoveUndifined(tdata[i].Phone_Number) + "</td><td>"
                        + RemmoveUndifined(tdata[i].Email_Id) + "</td><td>"
                        + tdata[i].Record_Type + "</td>"
                          + "<td " + versty + ">" + tdata[i].VerNo + "</td>"
                        + "<td><a " + st1 + " id='a_Edit_" + i + "' onclick='Edit(" + tdata[i].ID + "," + tdata[i].VerNo + ");'><img id='img_Edit_" + i + "' alt='Edit' title='Edit' src='../Images/edit.png' /></a></td>"
                        + "<td><a " + st + " id='a_Reverse_" + i + "' onclick='Reverse(" + tdata[i].ID + "," + tdata[i].VerNo + ");'><img id='img_Reverse_" + i + "' alt='Reverse' title='Reverse' src='../Images/close.png' /></a></td>"
                        + "<td><a id='a_View_" + i + "' onclick='View(" + tdata[i].ID + "," + tdata[i].VerNo + ");'><img id='img_View_" + i + "' alt='View' title='View' src='../Images/view1.jpg' /></a></td>"
                        + "</tr>");
                }
            }
        }
    } catch (e) {
        ErrorLog(e); alert(ErrorMsg());

    }    
    GetPagelevelAccess();

}
function chkMICRCode(Colvalue) {
    //debugger;
    try {
        Colvalue = jQuery.trim(Colvalue);
        if (Colvalue == "") return;
        var eid = $('#hdnID').val();
        if (eid == '') eid == 0;
        //var Paramstr = "{'TableName':'EquitySector','ColumnName':'Sector_Code','ColumnDependsON':'','ColumnValue':'" + Colvalue + "'}";
        var Paramstr = "{'TableName':'Bank','ColumnName':'Bank_Code','ColumnDependsON':'','ColumnValue':'" + Colvalue + "','ID':'" + eid + "'}";
        CheckExistance('txtMCode', '../CommonWebServices/MasterBindings.aspx/CheckExistance', Paramstr);

    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function chkIFCCode(Colvalue) {
    //debugger;
    try {
        Colvalue = jQuery.trim(Colvalue);
        if (Colvalue == "") return;
        var eid = $('#hdnID').val();
        if (eid == '') eid == 0;
        //var Paramstr = "{'TableName':'EquitySector','ColumnName':'Sector_Code','ColumnDependsON':'','ColumnValue':'" + Colvalue + "'}";
        var Paramstr = "{'TableName':'Bank','ColumnName':'IFSCcode','ColumnDependsON':'','ColumnValue':'" + Colvalue + "','ID':'" + eid + "'}";
        CheckExistance('txtIFSCCode', '../CommonWebServices/MasterBindings.aspx/CheckExistance', Paramstr);
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
$(function () {
    try {
        $("#txtMCode").attr("maxlength", "9").numeric({ allow: "0123456789" });
        $("#txtIFSCCode").attr("maxlength", "11").numeric({ allow: "qwertyuioplkjhgfdsazxcvbnm0123456789" });
        //$("#txtcash").attr("maxlength", "13").numeric({ allow: "0123456789" });
        //$("#txtModelPStrategy").attr("maxlength", "3").numeric({ allow: "0123456789" });
        //$("#txtModelPSRecom").attr("maxlength", "13").numeric({ allow: "0123456789" });
        //$("#txtMAVRec").attr("maxlength", "13").numeric({ allow: "0123456789" });
        //$("#txtModelActnValRec").attr("maxlength", "13").numeric({ allow: "0123456789" });

        //$("#txtInvAmnt").attr("maxlength", "13").numeric({ allow: "0123456789" });
        //$("#txtMvalue").attr("maxlength", "13").numeric({ allow: "0123456789" });

    } catch (e) {
        ErrorLog(e); alert(ErrorMsg());
    }
});
