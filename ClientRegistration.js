
$(document).ready(function () {
    $('#divsearch').show();
    nodatafound('grdNomineeDtls', '15');
    $("divGridRisk").show(); $("#divRisk").hide();
    // BindBankDtls();        
    $("#txtClientPAN").prop("disabled", true);
    //$("#txtExternalClientID").prop("disabled", true);
    // $("#txtExternalClientID").prop("readonly", true);

    PopulateDropdownControls('ddlInvestorType', '../Masters/ClientReg.aspx/GetDDLInvestorType', '');
    PopulateDropdownControls('ddlFamily', '../Masters/ClientReg.aspx/GetDDLFamily', '');
    PopulateDropdownControls('ddlOD_Occupation', '../Masters/ClientReg.aspx/GetDDLOccupation', '');
    PopulateDropdownControls_WithParams('ddlPremodePayment', '../Masters/ClientReg.aspx/Getddlcall', "{Param: 'Mode of Payment'}");
    PopulateDropdownControls_WithParams('ddlreportingmodel', '../Masters/ClientReg.aspx/Getddlcall', "{Param: 'Reporting model'}");

    $("#ddlreportingmodel option:contains(Please select)").remove();  //wmu changes
    $("#ddlPremodePayment option:contains(Please select)").remove();  //wmu changes

    //for Home
    PopulateDropdownControls_WithParams('ddlOD_Nationality', '../CommonWebServices/MasterBindings.aspx/GetCountryList');
    PopulateDropdownControls_WithParams('ddlCountry', '../CommonWebServices/MasterBindings.aspx/GetCountryList');
    PopulateDropdownControls_WithParams('ddlZone', '../CommonWebServices/MasterBindings.aspx/GetZoneList', "{'Param':'0'}");
    PopulateDropdownControls_WithParams('ddlState', '../CommonWebServices/MasterBindings.aspx/GetStateList', "{'Param':'0'}");
    PopulateDropdownControls_WithParams('ddlCity', '../CommonWebServices/MasterBindings.aspx/GetCityList', "{'Param':'0'}");
    //for Office
    PopulateDropdownControls_WithParams('ddlOfficeCountry', '../CommonWebServices/MasterBindings.aspx/GetCountryList');
    PopulateDropdownControls_WithParams('ddlOfficeZone', '../CommonWebServices/MasterBindings.aspx/GetZoneList', "{'Param':'0'}");
    PopulateDropdownControls_WithParams('ddlOfficeState', '../CommonWebServices/MasterBindings.aspx/GetStateList', "{'Param':'0'}");
    PopulateDropdownControls_WithParams('ddlOfficeCity', '../CommonWebServices/MasterBindings.aspx/GetCityList', "{'Param':'0'}");
    //for guardian Address details

    PopulateDropdownControls_WithParams('ddlNCountry', '../CommonWebServices/MasterBindings.aspx/GetCountryList');
    PopulateDropdownControls_WithParams('ddlNZone', '../CommonWebServices/MasterBindings.aspx/GetZoneList', "{'Param':'0'}");
    PopulateDropdownControls_WithParams('ddlNState', '../CommonWebServices/MasterBindings.aspx/GetStateList', "{'Param':'0'}");
    PopulateDropdownControls_WithParams('ddlNCity', '../CommonWebServices/MasterBindings.aspx/GetCityList', "{'Param':'0'}");
    //For Guardian Relation
    PopulateDropdownControls('DrpGuardianRelationship', '../CommonWebServices/MasterBindings.aspx/GetStaticDropdownsData', 'RelationShip');
    //for Other Details
    PopulateDropdownControls('ddlOD_Designation', '../CommonWebServices/MasterBindings.aspx/GetStaticDropdownsData', 'Designation');

    //for NRI
    PopulateDropdownControls_WithParams('ddlRBINon_NRICountry', '../CommonWebServices/MasterBindings.aspx/GetCountryList');
    //for allow only Numerics    
    $("#txtPinCode").numeric({ allow: "0123456789" });
    $("#txtTeleohoneNo").numeric({ allow: "0123456789" });
    $("#txtMobileNo").numeric({ allow: "0123456789" });
    $("#txtFaxNo").numeric({ allow: "0123456789" });
    $("#txtOfficePinCode").numeric({ allow: "0123456789" });
    $("#txtOfficeTeleohoneNo").numeric({ allow: "0123456789" });
    $("#txtOfficeMobileNo").numeric({ allow: "0123456789" });
    $("#txtOfficeFaxNo").numeric({ allow: "0123456789" });
    $("#txtOD_CA_ContactNo").numeric({ allow: "0123456789" });
    $("#txtSendAlertsBy_FAXNo").numeric({ allow: "0123456789" });
    $("#txtSendAlertsBy_MobileNo").numeric({ allow: "0123456789" });
    $("#txtDM_TelephoneNo").numeric({ allow: "0123456789" });
    $("#txtDM_MobileNo").numeric({ allow: "0123456789" });
    $("#txtDM_FaxNo").numeric({ allow: "0123456789" });
    $("#txtCP_TelephoneNo").numeric({ allow: "0123456789" });
    $("#txtCP_MobileNo").numeric({ allow: "0123456789" });
    //$("#txtCP_EmailID").numeric({ allow: "0123456789" });
    $("#txtCP_FaxNo").numeric({ allow: "0123456789" });
    $("#txtRBINon_LocalPOAContactNo").numeric({ allow: "0123456789" });
    $("#txtRBINon_LocalPOAFaxNo").numeric({ allow: "0123456789" });
    $("#txtLockinPeriod").numeric({ allow: "0123456789" });
    $("#txtACRenewalAfter").numeric({ allow: "0123456789" });
    $("#txtOD_EstFinWealth").numeric({ allow: ".0123456789" });
    $("#txtOD_GrossAnnualIncome").numeric({ allow: ".0123456789" })
    $("#txtStatutoryDtls_AadhaarID").numeric({ allow: "0123456789" })
    var tabindex = $('#hidden_tabindex').val();
    if (tabindex != '') {
        Showdiv(tabindex);
    }
    $('#PageTitle').text('Client Account Creation');
    $('#subTitle').text('Advisors Online Office - Client Management - Client Account Creation');
    $('.ui-autocomplete').css('height', 'auto');
    SearchBranchText('txtBranch', null, '../Masters/ClientReg.aspx/GetBranchName', "");


    if (parseInt($('#hdnDefaultContactPoint').val()) == 2) {
        $('#lnkHContact').text("Contact – Alternate");
        $('#lnkOContact').text("Contact – Permanent");
        $('#cbContact').text("Same as Alternate");
        $('#lblH_HomeContactDtls').html("<b><u>Alternate Contact Details</u></b>");
        $('#lblH_OfficeContactDtls').html("<b><u>Permanent Contact Details</u></b>");

    }
    else {
        $('#lnkHContact').text("Contact – Permanent");
        $('#lnkOContact').text("Contact – Alternate");
        $('#cbContact').text("Same as Permanent");
        $('#lblH_HomeContactDtls').html("<b><u>Permanent Contact Details</u></b>");
        $('#lblH_OfficeContactDtls').html("<b><u>Alternate Contact Details</u></b>");
    }
   
      //    $("#grdClient tr").css("background-color", function (index) {
    //        return index % 2 == 0 ? "#b0d1e5" : "#adafb2";
    //});
});
function ContactSelect(id) {
    if ($(id).is(':checked')) {
        $("#ddlOfficeCountry").each(function () {
            $('option', this).each(function () {
                 if ($(this).val().toLowerCase() == $('#hdnCountry').val()) {
                    $(this).attr('selected', 'selected')
                    OfficeZoneFill($('#hdnCountry').val());
                };
            });
        });
        $("#ddlOfficeZone").each(function () {
            $('option', this).each(function () {
                 if ($(this).val().toLowerCase() == $('#hdnZone').val()) {
                    $(this).attr('selected', 'selected')
                    OfficeStateFill($('#hdnZone').val());
                };
            });
        });
        $("#ddlOfficeState").each(function () {
            $('option', this).each(function () {
             if ($(this).val().toLowerCase() == $('#hdnState').val()) {
                    $(this).attr('selected', 'selected')
                     OfficeCityFill($('#hdnState').val());
                };
            });
        });
        $("#ddlOfficeCity").each(function () {
            $('option', this).each(function () {
              if ($(this).val().toLowerCase() == $('#hdnCity').val()) {
                    $(this).attr('selected', 'selected')
                };
            });
        });

        if ($("#txtAddress1").val().trim().length > 0)
            $("#txtOfficeAddress1").val($("#txtAddress1").val());
        if ($("#txtAddress2").val().trim().length > 0)
            $("#txtOfficeAddress2").val($("#txtAddress2").val());
        if ($("#txtAddress3").val().trim().length > 0)
            $("#txtOfficeAddress3").val($("#txtAddress3").val());
        if ($("#txtPinCode").val().trim().length > 0)
            $("#txtOfficePinCode").val($("#txtPinCode").val());
        if ($("#txtTeleohoneNo").val().trim().length > 0)
            $("#txtOfficeTeleohoneNo").val($("#txtTeleohoneNo").val());
        if ($("#txtMobileNo").val().trim().length > 0)
            $("#txtOfficeMobileNo").val($("#txtMobileNo").val());
        if ($("#txtEmailID").val().trim().length > 0)
            $("#txtOfficeEmailID").val($("#txtEmailID").val());
        if ($("#txtFaxNo").val().trim().length > 0)
            $("#txtOfficeFaxNo").val($("#txtFaxNo").val());



    }
   
}
function SearchBranchText(textControl, valueControl, ServiceName, tableName) {
    var txtControlx = $('#' + textControl);
    var valueControlx = $('#' + valueControl);
   // $("#hdnBranchId").val('');
    
    txtControlx.autocomplete({
        open: function (e) {
            $(".ui-autocomplete:visible").css({ top: "+=5", left: "-=2" });
            valid = false;
        },
        minChars: 3,
        select: function (event, ui) {
            var label = ui.item.label;
            var value = ui.item.value;
            var id = ui.item.id;
            valid = true;
            $("#hdnBranchId").val(id);
            //store in session
            document.valueSelectedForAutocomplete = value 
        },

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
                       
                        return { label: item.Name, value: item.Name, id: item.ID };
                    }));

                }

                //                error: function (result) {
                //                    alert("Error");
                //                }
            });
        },
        close: function (e) {
            if (!valid) $(this).val('');
        }

    });
}
function removeTableRow(CtrlId) {
    try {
        var index = 0;
        $("#" + CtrlId + " tbody tr").each(function () {
            if (index > 0) {
                this.parentNode.removeChild(this);
            }
            index = index + 1;
        });
        return;
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function clearMenuCss() {
    $('#lnkBasic').removeClass('current');
    $('#lnkHContact').removeClass('current');
    $('#lnkOContact').removeClass('current');
    $('#lnkHdetails').removeClass('current');
    $('#lnkBankdetails').removeClass('current');
    $('#lnkOtherDetails').removeClass('current');
    $('#lnkReportSetup').removeClass('current');
    $('#lnkDecision').removeClass('current');
    $('#lnkBroker').removeClass('current');
    $('#lnkBankCredit').removeClass('current');
    $('#lnkStatutory').removeClass('current');
    $('#lnkRBI').removeClass('current');
}
function Showdiv(tabindex) {
    HideAll();
    clearMenuCss()
    $('#div_Grid').hide();
    $('#div_Fields').show();

    if (tabindex == '0') {
        $('#tab_BasicDtls').show();
        $('#lnkBasic').addClass('current');
    }
    else if (tabindex == '1') {
        $('#tab_HomeContactDtls').show();
        $('#lnkHContact').addClass('current');
        $('#lnkHContact').addClass('current');

        SetTABData();
    }
    else if (tabindex == '2') {
        $('#tab_OfficeContactDtls').show();
        $('#lnkOContact').addClass('current');
        SetTABData();
    }
    else if (tabindex == '3') {
        var data = GetDataByID('InvestorTypeMaster', 'InvestorType,ModeOfHoldingFlag,CorporateFlag,MinorFlag,NomineeFlag', 'ID', $('#hdnInvestorType').val());
        var tdata = jQuery.parseJSON(data.d);
        if (tdata.length > 0) {
            if (tdata[0].MinorFlag) {
                $('#GuardianDiv').show();
                if (parseInt($('#hdnInvestorType').val()) == 12)
                {
                    if ($("#calClientDOB").val() != "") {
                        var newdate = $("#calClientDOB").val().split("/").reverse().join("-");
                        var From_date = new Date(newdate);
                        var currentdate = new Date();
                        var To_date = currentdate;
                        var diff_date = To_date - From_date;

                        var years = Math.floor(diff_date / 31536000000);
                        var months = Math.floor((diff_date % 31536000000) / 2628000000);
                        var days = Math.floor(((diff_date % 31536000000) % 2628000000) / 86400000);

                        //$("#Result").html(years + " year(s) " + months + " month(s) " + days + " and day(s)");
                        //alert( years+" year(s) "+months+" month(s) "+days+" and day(s)");
                        if (parseInt(years) >= 18)
                        {
                            $('#GuardianDiv').hide();
                        }
                    }


                }
            }
            else { $('#GuardianDiv').hide(); }
            if (tdata[0].NomineeFlag) { $('#NomineeDiv').show(); }
            else {
                $('#NomineeDiv').hide();
            }
        }
        var gdata = GetDataByID('Temp_ClientRegistration', 'Mode_of_Holding', 'ID', $("#hdn_TempClientID").val());
        var gtdata = jQuery.parseJSON(gdata.d);
        if (gtdata.length > 0) {
            if (gtdata[0].Mode_of_Holding == "1") { $('#JointHolderDiv').hide(); }
            else { $('#JointHolderDiv').show(); BindJointHolderDtls(); }
        }
        $('#tab_Guardian_JH_NomineeDtls').show();
        $('#lnkHdetails').addClass('current');
        BindNomineeDtls();
        SetTABData();
    }
    else if (tabindex == '4') { $('#tab_BankDtls').show(); $('#lnkBankdetails').addClass('current'); BindBankDtls(); SetTABData(); }
    else if (tabindex == '5') { $('#tab_OtherDetails').show(); SetTABData(); $('#lnkOtherDetails').addClass('current'); }
    else if (tabindex == '6') { $('#tab_ReportSetup').show(); SetTABData(); $('#lnkReportSetup').addClass('current'); }
    //else if (tabindex == '7') { $('#tab_DecisionMaker_ContactPerson').show(); $('#lnkDecision').addClass('current'); SetTABData(); }
    else if (tabindex == '7') { $('#tab_Broker_DP_Dtls').show(); $('#lnkBroker').addClass('current'); SetTABData(); }
    //else if (tabindex == '9') { $('#tab_BankCreditDtls').show(); $('#lnkBankCredit').addClass('current'); BindBankCreditDtls(); SetTABData(); }
    else if (tabindex == '8') { $('#tab_StatutoryDetails').show(); $('#lnkStatutory').addClass('current'); SetTABData(); }
    else if (tabindex == '9') { $('#tab_RBIApprovalDtls').show(); $('#lnkRBI').addClass('current'); SetTABData(); }
}

function HideAll() {
    $('#tab_BasicDtls').hide();
    $('#tab_HomeContactDtls').hide();
    $('#tab_OfficeContactDtls').hide();
    $('#tab_Guardian_JH_NomineeDtls').hide();
    $('#tab_BankDtls').hide();
    $('#tab_OtherDetails').hide();
    $('#tab_ReportSetup').hide();
    $('#tab_DecisionMaker_ContactPerson').hide();
    $('#tab_Broker_DP_Dtls').hide();
    $('#tab_BankCreditDtls').hide();
    $('#tab_StatutoryDetails').hide();
    $('#tab_RBIApprovalDtls').hide();


}

$(function () {
    $("#div_Sections").accordion();
    //PreventFutureDate($('#calClientDOB'));
    CalenderNoFutureDate($("#calClientDOB"), "-100:+0");
    //CalenderContolByYear($("#calAgreementDate"), "-100:+0");
    CalenderContolByYear($("#calCommencementDate"), "-100:+0");
    //CalenderContolByYear($("#txtStatutoryDtls_IssueDate"), "-100:+0");
    //CalenderContolByYear($("#txtStatutoryDtls_ExpiryDate"), "-100:+10");
    dateDiff($("#txtStatutoryDtls_IssueDate"), $("#txtStatutoryDtls_ExpiryDate"));
    CalenderContolByYear($("#txtRBI_ApprovalDate"), "-100:+90");
    CalenderContolByYear($("#txtRBI_ValidUpto"), "-100:+0");
    CalenderContolByYear($("#txtRBINon_ApprovalDate"), "-100:+0");
    CalenderContolByYear($("#txtRBINon_ValidUpto"), "-100:+10");
    CalenderContolByYear($("#txtGuardianDOB"), "-100:+0");
    //dateDiff($('#calClientDOB'), $('#calAgreementDate'));
    dateDiff($('#calAgreementDate'), $('#calCommencementDate'));
    //CalenderContol($("#calClientDOB"));

    //dateDiff($("#txtCrRating_FDt"), $("#txtCrRating_TDt"));
});

function ZoneFill(ctrlID) {
    try {
        var countryid = ctrlID;
        PopulateDropdownControls_WithParams('ddlZone', '../CommonWebServices/MasterBindings.aspx/GetZoneList', "{'Param':'" + countryid + "'}");
        return;
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function StateFill(ctrlID) {
    try {
        var zoneid = ctrlID;
        PopulateDropdownControls_WithParams('ddlState', '../CommonWebServices/MasterBindings.aspx/GetStateList', "{'Param':'" + zoneid + "'}");
        return;
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function CityFill(ctrlID) {
    try {
        var stateid = ctrlID;
        PopulateDropdownControls_WithParams('ddlCity', '../CommonWebServices/MasterBindings.aspx/GetCityList', "{'Param':'" + stateid + "'}");
        return;
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function OfficeZoneFill(ctrlID) {
    try {
        var countryid = ctrlID;
        PopulateDropdownControls_WithParams('ddlOfficeZone', '../CommonWebServices/MasterBindings.aspx/GetZoneList', "{'Param':'" + countryid + "'}");
        return;
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function OfficeStateFill(ctrlID) {
    try {
        var zoneid = ctrlID;
        PopulateDropdownControls_WithParams('ddlOfficeState', '../CommonWebServices/MasterBindings.aspx/GetStateList', "{'Param':'" + zoneid + "'}");
        return;
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function OfficeCityFill(ctrlID) {
    try {
        var stateid = ctrlID;
        PopulateDropdownControls_WithParams('ddlOfficeCity', '../CommonWebServices/MasterBindings.aspx/GetCityList', "{'Param':'" + stateid + "'}");
        return;
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

function NomineeZoneFill(ctrlID) {
    try {
        var countryid = ctrlID;
        PopulateDropdownControls_WithParams('ddlNZone', '../CommonWebServices/MasterBindings.aspx/GetZoneList', "{'Param':'" + countryid + "'}");
        return;
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function NomineeStateFill(ctrlID) {
    try {
        var zoneid = ctrlID;
        PopulateDropdownControls_WithParams('ddlNState', '../CommonWebServices/MasterBindings.aspx/GetStateList', "{'Param':'" + zoneid + "'}");
        return;
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function NomineeCityFill(ctrlID) {
    try {
        var stateid = ctrlID;
        PopulateDropdownControls_WithParams('ddlNCity', '../CommonWebServices/MasterBindings.aspx/GetCityList', "{'Param':'" + stateid + "'}");
        return;
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function New(Ctrl) {
    try {

        $("#txtClientPAN").removeAttr("disabled");
        $("#txtExternalClientID").removeAttr("disabled");

        $('#div_Fields').slideDown('slow');
        $('#div_Grid').slideUp('slow');
        BindBankDtls();
        BindJointHolderDtls();
        BindNomineeDtls();
        BindBankCreditDtls();
        $('#hidden_tabindex').val('0')
        $('#hdn_TempClinetID').val('0')
        $('#hdn_ClientAccNo').val('0')
        $('#hdn_CPartyID').val('0')
        $('#hdn_GPartyID').val('0')
        $('#hdn_JPartyID').val('0')
        $('#hdn_NPartyID').val('0')
        $('#Hdn_AccMode').val('I')
        var tabindex = $('#hidden_tabindex').val();
        if (tabindex != '') {
            Showdiv(tabindex);
        }
        // ClearTextBoxes();
        //Clearpagectrls();
        //PageButtons(true, false, false);
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function edfsdf(dsf) {
var SlNo = $('#grdBankDtls').children().find('tr').length;
    for (i = 1; i < SlNo; i++) {
        var ddlAccountHolder = dsf;
        var j = i + 1;
        if (SlNo <= j) {
            //var tr = $('#grdBankDtls tr').get(i-1).getElementsByTagName('td');
            //var ddlvl = $(tr).find("select").val();
            //if (ddlAccountHolder == ddlvl) {
            //    alert("AccountHolder should be unique");
            //    return "Y";
            //}
        }
        else {
            var tr = $('#grdBankDtls tr').get(j).getElementsByTagName('td');
            var ddlvl = $(tr).find("select").val();
            if (ddlAccountHolder == ddlvl) {
                alert("AccountHolder should be unique '" + ddlvl + "'");
                return "Y";
            } //else {
            //    return true;
            //}
        }
    }

}

function fun11(dre) {
    alert(dre);
}
//Data Retriving from Child Grid and Storing the Data in Json text
function checkselfvalue(gt) {
    var ddlvl = [];
    var SlNo = $('#grdBankDtls').children().find('tr').length;
    for (i = 1; i < SlNo; i++) {
        var tr = $('#grdBankDtls tr').get(i).getElementsByTagName('td');
        ddlvl[i] = $(tr).find("select").val();
    }
    if ($.inArray('Self', ddlvl) < 0) {
        alert('Self not found');
        return "x";

    }
}
function findDupGridtxtFields(gridID,colName) {
    var textValues = new Array();
   var toReturn = '0';
     $("#" + gridID).closest('tr').find('input[id*=' + colName + ']').each(function () {
        doesExisit = ($.inArray($(this).val(), textValues) == -1) ? false : true;
        if (!doesExisit) {
            textValues.push($(this).val())
        } else {
            toReturn = '1';
            return false;
        }
    });
 return toReturn;
}
function BankDtlsInitData() {
    try {
        var dd = '';
        var ddlvl11 = '';
        var SlNo = $('#grdBankDtls').children().find('tr').length;

      //var Holderempties = $('#grdBankDtls').closest('tr').find('select[id*="BDACHolder"]').filter(function () {
      //      return $.trim($(this).val()) == '0';
      //  });
      //  if (Holderempties.length) { alert('Please select Account Holder'); return false; }

       
      //  var MICCodeempties = $('#grdBankDtls').closest('tr').find('input[id*="BDMICRCode"]').filter(function () {
      //      return $.trim($(this).val()) == '';
      //  });
      //  if (MICCodeempties.length) { alert('Please Enter MICR Code'); return false; }

      //  var AcTypesempties = $('#grdBankDtls').closest('tr').find('select[id*="BDACType"]').filter(function () {
      //      return $.trim($(this).val()) == '0';
      //  });
      //  if (AcTypesempties.length) { alert('Please select Account Type'); return false; }

      // var Acnoempties = $('#grdBankDtls').closest('tr').find('input[id*="BDACNo"]').filter(function () {
      //      return $.trim($(this).val()) == '';
      //  });
      //  if (Acnoempties.length) { alert('Please Enter Account No'); return false; }

      //  if (findDupGridtxtFields('grdBankDtls', 'BDACNo') == '1') {
      //      alert('Duplicate Account Nos not allowed'); return false;
      //  }
        

   
        //if ($("input[type=checkbox][name=grdBnk]:checked").length > 0) {

        //    // return true;
        //} else {

        //    alert("Please select default bank");
        //    return false;
        //}
     //var checkflag = checkselfvalue(dd);
     //   if (checkflag == "x") {
     //       return false;
     //   }
        var pID = '';
        var ScripName = '{"Temp_BankDtls":[';
        for (i = 1; i < SlNo; i++) {
            pID = $('#grdBankDtls tr').get(i).getElementsByTagName('td')[11].innerHTML;
            if (pID === 'undefined' || pID === '') {
                pID = $("#hdn_CPartyID").val();
            }
            

            ScripName = ScripName + '{"AccountHolder":"' + $('#BDACHolder_' + i).val() + '", "MICRCode":"' + $('#BDMICRCode_' + i).val()
                   + '","BankName":"' + $('#BDBankName_' + i).val() + '", "BranchName":"' + $('#BDBranchName_' + i).val()
               + '","IFSCCode":"' + $('#BDIFSCCode_' + i).val() + '", "ACType":"' + $('#BDACType_' + i).val()
               + '","ACNo":"' + $('#BDACNo_' + i).val() + '", "TempClientID":"' + $("#hdn_TempClientID").val() + '", "SrNo":"' + i + '", "CAccountNo":"' + $("#hdn_ClientAccNo").val() + '", "PartyID":"' + pID + '", "DefaultFlag":"' + (($("input[type=checkbox][name=grdBnk][id=cbtn_" + i + "]:checked").length > 0) ? 1 : 0) + '"},';


        }
        ScripName = ScripName.substring(0, ScripName.length - 1);
        ScripName = ScripName + "]}";
        $('#hdn_Bank_Childdata').val(ScripName);
        // return true;
    }
    catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

function BankCredit_InitData() {
    try {
        var SlNo = $('#grdBankCreditDtls').children().find('tr').length;
        var ScripName = '{"Temp_BankCreditDtls":[';
        for (i = 1; i < SlNo; i++) {
            ScripName = ScripName + '{"BankName":"' + $('#CDBankName_' + i).val() + '", "EMIBank_ACNo":"' + $('#CDEMIACNo_' + i).val()
                + '","LoanAmount":"' + $('#CDLoanAmt_' + i).val() + '", "LoanTenure":"' + $('#CDLoanTenure_' + i).val()
                + '","EMIAmount":"' + $('#CDEMIAmt_' + i).val() + '", "CreditCard_No":"' + $('#CDCreditCardNo_' + i).val()
                + '","CreditCard_Bank":"' + $('#CDCreditCardBank_' + i).val() + '", "CreditCard_Type":"' + $('#CDCreditCardType_' + i).val()
                + '","ExpiryDate":"' + $('#CDExpiryDate_' + i).val() + '", "TempClientID":"' + $("#hdn_TempClientID").val() + '", "SrNo":"' + i + '", "CAccountNo":"' + $("#hdn_ClientAccNo").val() + '", "PK_BCRID":"' + $('#grdBankCreditDtls tr').get(i).getElementsByTagName('td')[12].innerHTML + '"},';
        }
        ScripName = ScripName.substring(0, ScripName.length - 1);
        ScripName = ScripName + "]}";
        $('#hdn_BankCredit_Childdata').val(ScripName);
        return true;
    }
    catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function BrokerDP_InitData() {
    try {
        var SlNo = $('#grdBroker_DP_Dtls').children().find('tr').length;
        var ScripName = '{"Temp_BrokerDPDtls":[';
        for (i = 1; i < SlNo; i++) {
            ScripName = ScripName + '{"BrokerName":"' + $('#BrokerDP_BrokerName_' + i).val() + '", "TMS_Clearing_No":"' + $('#BrokerDP_TMSClearingNo_' + i).val()
                + '","Broker_Address":"' + $('#BrokerDP_BrokerAddress_' + i).val() + '", "DPID":"' + $('#BrokerDP_DPID_' + i).val()
                + '","DPName":"' + $('#BrokerDP_DPName_' + i).val() + '","DPAC_No":"' + $('#BrokerDP_DPACNo_' + i).val() + '", "TempClientID":"' + $("#hdn_TempClientID").val() + '"},';
        }
        ScripName = ScripName.substring(0, ScripName.length - 1);
        ScripName = ScripName + "]}";
        $('#hdn_BrokerDP_Childdata').val(ScripName);
        return true;
    }
    catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
//Completed
function ShowBasicDtlsPanel(ctrl) {
    clearMenuCss();
    $('#tab_BasicDtls').show();
    $('#lnkBasic').addClass('current');
    $('#tab_HomeContactDtls').hide();
    $('#tab_OfficeContactDtls').hide();
    $('#tab_Guardian_JH_NomineeDtls').hide();
    $('#tab_BankDtls').hide();
    $('#tab_OtherDetails').hide();
    $('#tab_ReportSetup').hide();
    $('#tab_DecisionMaker_ContactPerson').hide();
    $('#tab_Broker_DP_Dtls').hide();
    $('#tab_BankCreditDtls').hide();
    $('#tab_StatutoryDetails').hide();
    $('#tab_RBIApprovalDtls').hide();
}
function ShowHomeContactDtlsPanel(ctrl) {
    clearMenuCss();
    $('#tab_BasicDtls').hide();
    $('#tab_HomeContactDtls').show();
    $('#lnkHContact').addClass('current');
    $('#lnkHContact').addClass('current');
    $('#tab_OfficeContactDtls').hide();
    $('#tab_Guardian_JH_NomineeDtls').hide();
    $('#tab_BankDtls').hide();
    $('#tab_OtherDetails').hide();
    $('#tab_ReportSetup').hide();
    $('#tab_DecisionMaker_ContactPerson').hide();
    $('#tab_Broker_DP_Dtls').hide();
    $('#tab_BankCreditDtls').hide();
    $('#tab_StatutoryDetails').hide();
    $('#tab_RBIApprovalDtls').hide();
}
function ShowOfficeContactDtlsPanel(ctrl) {
    clearMenuCss();
    $('#tab_BasicDtls').hide();
    $('#tab_HomeContactDtls').hide();
    $('#tab_OfficeContactDtls').show();
    $('#lnkOContact').addClass('current');
    $('#tab_Guardian_JH_NomineeDtls').hide();
    $('#tab_BankDtls').hide();
    $('#tab_OtherDetails').hide();
    $('#tab_ReportSetup').hide();
    $('#tab_DecisionMaker_ContactPerson').hide();
    $('#tab_Broker_DP_Dtls').hide();
    $('#tab_BankCreditDtls').hide();
    $('#tab_StatutoryDetails').hide();
    $('#tab_RBIApprovalDtls').hide();
}
function ShowGurdian_JH_NomineeDtlsPanel(ctrl) {
    clearMenuCss();
    $('#tab_BasicDtls').hide();
    $('#tab_HomeContactDtls').hide();
    $('#tab_OfficeContactDtls').hide();
    $('#tab_Guardian_JH_NomineeDtls').show();
    $('#lnkHdetails').addClass('current');
    $('#tab_BankDtls').hide();
    $('#tab_OtherDetails').hide();
    $('#tab_ReportSetup').hide();
    $('#tab_DecisionMaker_ContactPerson').hide();
    $('#tab_Broker_DP_Dtls').hide();
    $('#tab_BankCreditDtls').hide();
    $('#tab_StatutoryDetails').hide();
    $('#tab_RBIApprovalDtls').hide();
}
function ShowBankDtlsPanel(ctrl) {
    clearMenuCss();
    $('#tab_BasicDtls').hide();
    $('#tab_HomeContactDtls').hide();
    $('#tab_OfficeContactDtls').hide();
    $('#tab_Guardian_JH_NomineeDtls').hide();
    $('#tab_BankDtls').show();
    $('#lnkBankdetails').addClass('current');
    $('#tab_OtherDetails').hide();
    $('#tab_ReportSetup').hide();
    $('#tab_DecisionMaker_ContactPerson').hide();
    $('#tab_Broker_DP_Dtls').hide();
    $('#tab_BankCreditDtls').hide();
    $('#tab_StatutoryDetails').hide();
    $('#tab_RBIApprovalDtls').hide();
}
function ShowOtherDtlsPanel(ctrl) {
    clearMenuCss();
    $('#tab_BasicDtls').hide();
    $('#tab_HomeContactDtls').hide();
    $('#tab_OfficeContactDtls').hide();
    $('#tab_Guardian_JH_NomineeDtls').hide();
    $('#tab_BankDtls').hide();
    $('#tab_OtherDetails').show();
    $('#lnkOtherDetails').addClass('current');
    $('#tab_ReportSetup').hide();
    $('#tab_DecisionMaker_ContactPerson').hide();
    $('#tab_Broker_DP_Dtls').hide();
    $('#tab_BankCreditDtls').hide();
    $('#tab_StatutoryDetails').hide();
    $('#tab_RBIApprovalDtls').hide();
}
function ShowReportSetupPanel(ctrl) {
    clearMenuCss();
    $('#tab_BasicDtls').hide();
    $('#tab_HomeContactDtls').hide();
    $('#tab_OfficeContactDtls').hide();
    $('#tab_Guardian_JH_NomineeDtls').hide();
    $('#tab_BankDtls').hide();
    $('#tab_OtherDetails').hide();
    $('#tab_ReportSetup').show();
    $('#lnkReportSetup').addClass('current');
    $('#tab_DecisionMaker_ContactPerson').hide();
    $('#tab_Broker_DP_Dtls').hide();
    $('#tab_BankCreditDtls').hide();
    $('#tab_StatutoryDetails').hide();
    $('#tab_RBIApprovalDtls').hide();
}
function ShowDecisionMakerContactPersonDtlsPanel(ctrl) {
    clearMenuCss();
    $('#tab_BasicDtls').hide();
    $('#tab_HomeContactDtls').hide();
    $('#tab_OfficeContactDtls').hide();
    $('#tab_Guardian_JH_NomineeDtls').hide();
    $('#tab_BankDtls').hide();
    $('#tab_OtherDetails').hide();
    $('#tab_ReportSetup').hide();
    $('#tab_DecisionMaker_ContactPerson').show();
    $('#lnkDecision').addClass('current');
    $('#tab_Broker_DP_Dtls').hide();
    $('#tab_BankCreditDtls').hide();
    $('#tab_StatutoryDetails').hide();
    $('#tab_RBIApprovalDtls').hide();
}

function DeleteRow(Ctrl) {
    try {
        var id = Ctrl.parentNode.parentElement.cells[0].innerHTML;
        $("#trid" + id.replace(".", "")).remove();
    }
    catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function DeleteRow1(Ctrl) {
    try {
      
        var id = Ctrl.parentNode.parentElement.cells[0].innerHTML;
        $("#tr_id" + id.replace(".", "")).remove();
    }
    catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function ShowStatutoryDtlsPanel(ctrl) {
    clearMenuCss();
    $('#tab_BasicDtls').hide();
    $('#tab_HomeContactDtls').hide();
    $('#tab_OfficeContactDtls').hide();
    $('#tab_Guardian_JH_NomineeDtls').hide();
    $('#tab_BankDtls').hide();
    $('#tab_OtherDetails').hide();
    $('#tab_ReportSetup').hide();
    $('#tab_DecisionMaker_ContactPerson').hide();
    $('#tab_Broker_DP_Dtls').hide();
    $('#tab_BankCreditDtls').hide();
    $('#tab_StatutoryDetails').show();
    $('#lnkStatutory').addClass('current');
    $('#tab_RBIApprovalDtls').hide();
}
function ShowBankCreditDtlsPanel(ctrl) {
    clearMenuCss();
    $('#tab_BasicDtls').hide();
    $('#tab_HomeContactDtls').hide();
    $('#tab_OfficeContactDtls').hide();
    $('#tab_Guardian_JH_NomineeDtls').hide();
    $('#tab_BankDtls').hide();
    $('#tab_OtherDetails').hide();
    $('#tab_ReportSetup').hide();
    $('#tab_DecisionMaker_ContactPerson').hide();
    $('#tab_Broker_DP_Dtls').hide();
    $('#tab_BankCreditDtls').show();
    $('#lnkBankCredit').addClass('current');
    $('#tab_StatutoryDetails').hide();
    $('#tab_RBIApprovalDtls').hide();
}
function ShowBrokerDPDtlsPanel(ctrl) {
    clearMenuCss();
    $('#tab_BasicDtls').hide();
    $('#tab_HomeContactDtls').hide();
    $('#tab_OfficeContactDtls').hide();
    $('#tab_Guardian_JH_NomineeDtls').hide();
    $('#tab_BankDtls').hide();
    $('#tab_OtherDetails').hide();
    $('#tab_ReportSetup').hide();
    $('#tab_DecisionMaker_ContactPerson').hide();
    $('#tab_Broker_DP_Dtls').show();
    $('#lnkBroker').addClass('current');
    $('#tab_BankCreditDtls').hide();
    $('#tab_StatutoryDetails').hide();
    $('#tab_RBIApprovalDtls').hide();
}
function ShowRBIApprovalDtlsPanel(ctrl) {
    clearMenuCss();
    $('#tab_BasicDtls').hide();
    $('#tab_HomeContactDtls').hide();
    $('#tab_OfficeContactDtls').hide();
    $('#tab_Guardian_JH_NomineeDtls').hide();
    $('#tab_BankDtls').hide();
    $('#tab_OtherDetails').hide();
    $('#tab_ReportSetup').hide();
    $('#tab_DecisionMaker_ContactPerson').hide();
    $('#tab_Broker_DP_Dtls').hide();
    $('#tab_BankCreditDtls').hide();
    $('#tab_StatutoryDetails').hide();
    $('#tab_RBIApprovalDtls').show();
    $('#lnkRBI').addClass('current');
}
function sad() {
    alert("fff");
}
function BindBankDtls() {
    // var style_td = "style='border: 0px solid #6f9dd9;padding-left:14px;'";
    //var Cid = "4";
    var Cid = $("#hdn_TempClientID").val();
    var SlNo = $('#grdBankDtls').children().find('tr').length;
    if (parseInt(SlNo) > 5) return;
    $('#grdBankDtls').css("overflow", "scroll");
    BindDynamicDropdown("BDACHolder_" + SlNo, '../Masters/ClientReg.aspx/GetDDLJHNominee', "{'Param':'JH_Nominee~" + Cid + "'}");
    var ddl_BDACHolder = DyDdl;
    BindDynamicDropdown("BDACType_" + SlNo, '../Masters/ClientReg.aspx/GetDDLBankAccountType', '');
    var ddl_BDACType = DyDdl;
    $('#grdBankDtls').append("<tr style='border: 0px;' id=trid" + SlNo + ">"
                  + "<td style='text-align:center;border: 0px solid #6f9dd9;'>" + SlNo + ". </td>"
                  + "<td><input type='checkbox' name='grdBnk' id='cbtn_" + SlNo + "' onclick='grdBnkdefault(this);'></td>"
                  + "<td class='SelectCls'>" + ddl_BDACHolder + "</td>"
                  + "<td><input type='text' onblur='return GetMICRData(this);' id='BDMICRCode_" + SlNo + "'/></td>"
                  + "<td><input type='text' readonly id='BDBankName_" + SlNo + "'/></td>"
                  + "<td><input type='text' readonly id='BDBranchName_" + SlNo + "'/></td>"
                  + "<td><input type='text' readonly id='BDIFSCCode_" + SlNo + "'/></td>"
                  + "<td class='SelectCls'>" + ddl_BDACType + "</td>"
                  + "<td><input type='text' maxlength='15' id='BDACNo_" + SlNo + "'/></td>"
                  + "<td><a id='a_Delete_" + SlNo + "' onclick='DeleteRow(this);'><img id='img_Reverse_" + SlNo + "' alt='Reverse' title='Delete' src='../Images/delete.jpg' /></a></td>"
                  + "<td style='display:none;'><div id='FdDivPkID_" + SlNo + "'>0</div></td>"
                  + "<td style='display:none;'></td>"
                  + "</tr>");
    $('#BDACNo_' + SlNo).numeric({ allow: "0123456789" });
}
function BindJointHolderDtls() {
    // var style_td = "style='border: 0px solid #6f9dd9;padding-left:14px;'";    
    var SlNo = $('#grdJointHolderDtls').children().find('tr').length;
    if (parseInt(SlNo) > 3) return;
    $('#grdJointHolderDtls').append("<tr style='border: 0px;' id=tr_id" + SlNo + ">"
                    + "<td style='text-align:center;border: 0px solid #6f9dd9;'>" + SlNo + ". </td>"
                    + "<td><input type='text' style='text-transform: uppercase;' onblur='return GetParty_ByIdentifier(this);' maxlength='10' data-rule-required='true' data-msg-required='Please enter PAN' data-rule-PAN='true' id='JHPAN_" + SlNo + "'/></td>"
                    + "<td><input type='text' data-rule-required='true' data-msg-required='Please enter JH Name' id='JHName_" + SlNo + "'/></td>"
                    + "<td><input class='TextCls' type='text' id='JHDOB_" + SlNo + "'/></td>"
                    + "<td><a id='a_Delete_" + SlNo + "' onclick='DeleteRow1(this);'><img id='img_Reverse_" + SlNo + "' alt='Reverse' title='Delete' src='../Images/delete.jpg' /></a></td>"
                    + "<td style='display:none;'><div id='FdDivPkID_" + SlNo + "'>0</div></td>"
                    + "<td style='display:none;'></td>"
                    + "</tr>");
    CalenderNoFutureDate($('#JHDOB_' + SlNo));
}
var dfs;

function BindNomineeDtls() {
    dfs = 0;
    var subval = 100;
    // var style_td = "style='border: 0px solid #6f9dd9;padding-left:14px;'";
    var gv_Values = $('#grdNomineeDtls');
    var rows = gv_Values.children().find('tr').length;
    var SlNo = $('#grdNomineeDtls').children().find('tr').length;
    if (parseInt(SlNo) > 3) {
        return;
    }
    BindDynamicDropdown("NomineeRelation_" + SlNo, '../Masters/ClientReg.aspx/GetDDLRelationShip', '');
    var ddl_NomineeRelation = DyDdl;
    //Grid_Inv = $('#grid_invc tr:not(:first)');
    for (var i = 1; i < rows; i++) {
        var valtx = $('#Percentage_' + i + '').val();
        dfs = parseFloat(dfs) + parseFloat(valtx);
        subval = 100 - dfs;
        // alert(dfs);
    }

    if (parseFloat(dfs) >= 100) {
        return;

    }
    else {
        $('#grdNomineeDtls').append("<tr style='border: 0px;' id=trid" + SlNo + ">"
                   + "<td style='text-align:center;border: 0px solid #6f9dd9;'>" + SlNo + ". </td>"
                   + "<td><input type='text' style='text-transform: uppercase;' return GetParty_ByIdentifierNomine(this);' maxlength='10' data-rule-PAN='true' id='NomineePAN_" + SlNo + "' onblur='return CheckClientPAN2(this.value," + SlNo + ");'/></td>"
                   + "<td><input type='text' id='NomineeName_" + SlNo + "'/></td>"
                     + "<td><input type='text' value='" + subval + "' id='Percentage_" + SlNo + "'/></td>"
                   + "<td class='SelectCls'>" + ddl_NomineeRelation + "</td><td ><input type='checkbox' id='chIsNominee_" + SlNo + "' name='chkgrdNomineeDtls' /></td>"
                   + "<td><a id='a_Delete_" + SlNo + "' onclick='DeleteRow(this);'><img id='img_Reverse_" + SlNo + "' alt='Reverse' title='Delete' src='../Images/delete.jpg' /></a></td>"
                   + "<td style='display:none;'><div id='FdDivPkID_" + SlNo + "'>0</div></td>"
                   + "<td style='display:none;'></td>"
                   + "</tr>");

    }
    //if (rows == 4 & parseFloat(dfs) != 100) {
    //          alert('Percentage should be equal to 100');
    //    }



    //$('#grdNomineeDtls').append("<tr style='border: 0px;' id=trid" + SlNo + ">"
    //                + "<td style='text-align:center;border: 0px solid #6f9dd9;'>" + SlNo + ". </td>"
    //                + "<td><input type='text' return GetParty_ByIdentifierNomine(this);' maxlength='10' data-rule-PAN='true' id='NomineePAN_" + SlNo + "'/></td>"
    //                + "<td><input type='text' id='NomineeName_" + SlNo + "'/></td>"
    //                  + "<td><input type='text' id='Percentage_" + SlNo + "'/></td>"
    //                + "<td class='SelectCls'>" + ddl_NomineeRelation + "</td>"
    //                + "<td><a id='a_Delete_" + SlNo + "' onclick='DeleteRow(this);'><img id='img_Reverse_" + SlNo + "' alt='Reverse' title='Delete' src='../Images/delete.jpg' /></a></td>"
    //                + "<td style='display:none;'><div id='FdDivPkID_" + SlNo + "'>0</div></td>"
    //                + "<td style='display:none;'></td>"
    //                + "</tr>");

}
function CheckClientPAN2(data) {
    var gv_Values = $('#grdNomineeDtls');
    var rows = gv_Values.children().find('tr').length;
    if (rows > 1) {
        for (var i = 1; i < rows - 1; i++) {
            var nomitx = $('#NomineePAN_' + i + '').val();
            if (nomitx == data.toUpperCase()) {
                alert('Pan already exists');
                $('#NomineePAN_' + (i + 1) + '').val('');
                return false;

            }
        }
    }
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../Masters/ClientReg.aspx/CheckClientPAN",
        data: "{Pan : '" + data + "'}",
        dataType: "json",
        success: function (data) {
            var tdata = jQuery.parseJSON(data.d);

            if (tdata.length > 0) {

                if (tdata[0].StatusMsg == 'PAN Already Exists') {

                    alert('PAN Already Exists');
                    $('#NomineePAN_' + i + '').val('');
                    return;
                }


            }
            else {
                return;
            }

        },
        error: function (result) {
            alert('Depository Participant  List Data not found.');
        }
    });

}

function JH_NomineeInitData() {
    try {
        var ttlval = 0;
        var gv_Values = $('#grdNomineeDtls');
        var rows = gv_Values.children().find('tr').length;
        for (var i = 1; i < rows; i++) {
            var valtx = $('#Percentage_' + i + '').val();
            ttlval = parseFloat(ttlval) + parseFloat(valtx);
            var datainv = GetDataByID('InvestorTypeMaster', 'InvestorType,ModeOfHoldingFlag,CorporateFlag,MinorFlag,NomineeFlag', 'ID', $('#hdnInvestorType').val());
            var tdatainv = jQuery.parseJSON(datainv.d);
            var ddlValue = $('#NomineeRelation_' + i + '').val();
        }
        if (tdatainv != null)
            if (tdatainv.length > 0) {

                if (tdatainv[0].NomineeFlag) {
                    $('#NomineeDiv').show();

                    if (ddlValue == 0) {
                        alert('Please select Nominee Relationship');
                        return false;
                    }
                    if (parseFloat(ttlval) != 100) {
                        alert('Percentage should be equal to 100');
                        return false;
                    }
                }
                else {
                    $('#NomineeDiv').hide();
                }
            }

        //}



        //to bind Guardian Relation
        $('#hdnGuardianRelationship').val($('#DrpGuardianRelationship').val());
        //to bind Joint Holder child data
        var JHSlNo = $('#grdJointHolderDtls').children().find('tr').length;
        //var ct = $('#grdJointHolderDtls');
        var JHScripName = '';
        if (JHSlNo > 1) {
            JHScripName = '{"Temp_JointHolderDtls":[';
            for (j = 1; j < JHSlNo; j++) {
                //var jid = ct.parentNode.parentElement.cells[6].innerHTML;
                JHScripName = JHScripName + '{"JH_Name":"' + $('#JHName_' + j).val() + '", "JH_PAN":"' + $('#JHPAN_' + j).val()
                    + '","JH_DOB":"' + $('#JHDOB_' + j).val() + '", "TempClientID":"' + $("#hdn_TempClientID").val() + '", "SrNo":"' + j + '", "CAccountNo":"' + $("#hdn_ClientAccNo").val() + '", "JPartyID":"' + $('#grdJointHolderDtls tr').get(j).getElementsByTagName('td')[6].innerHTML + '"},';
            }
            JHScripName = JHScripName.substring(0, JHScripName.length - 1);
            JHScripName = JHScripName + "]}";
        }
        $('#hdn_JH_childdata').val(JHScripName);
        //return true;
        //$('#grdJointHolderDtls tr:not(:first)').get(j).getElementsByTagName('td')[6].innerHTML
        //to bind Nominee child data
        var SlNo = $('#grdNomineeDtls').children().find('tr').length;
        var ScripName = '';
        if (SlNo > 1) {
            ScripName = '{"Temp_NomineeDtls":[';
            for (i = 1; i < SlNo; i++) {
                    ScripName = ScripName + '{"Nominee_Name":"' + $('#NomineeName_' + i).val() + '","Nper":"' + $('#Percentage_' + i).val() + '","IsNominee":"' + (($("input[type=checkbox][name=chkgrdNomineeDtls][id=chIsNominee_" + i + "]:checked").length > 0) ? 1 : 0) + '", "Nominee_RelationShip":"' + $('#NomineeRelation_' + i).val()
                    + '","Nominee_PAN":"' + $('#NomineePAN_' + i).val() + '", "TempClientID":"' + $("#hdn_TempClientID").val() + '", "SrNo":"' + i + '", "CAccountNo":"' + $("#hdn_ClientAccNo").val() + '", "NPartyID":"' + $('#grdNomineeDtls tr').get(i).getElementsByTagName('td')[8].innerHTML + '"},';
                }
            ScripName = ScripName.substring(0, ScripName.length - 1);
            ScripName = ScripName + "]}";
        }
        $('#hdn_Nominee_Childdata').val(ScripName);


        var SlNo = $('#grdNADDetails').children().find('tr').length;
        var ScripName = '';
        if (SlNo > 1) {
            ScripName = '{"Temp_JHAddressDtls":[';
            for (i = 1; i < SlNo; i++) {
                ScripName = ScripName + '{"TempClientID":"' + $("#hdn_TempClientID").val() + '","Name":"' + $('#txt_NomiNeeName_' + i).html() + '", "PAN":"' + $('#txt_PAN_' + i).html()
                    + '","Type":"' + $('#txt_AccountType_' + i).html() + '","Address1":"' + $('#txt_NADD1_' + i).html() + '", "Address2":"' + $("#txt_NADD2_" + i).html() + '", "Address3":"' + $("#txt_NADD3_" + i).html() + '", "Country":"' + $("#txt_NCountryID_" + i).html() + '", "Zone":"' + $("#txt_NZoneID_" + i).html() + '","State":"' + $('#txt_NStateID_' + i).html() + '","City":"' + $('#txt_NCityID_' + i).html() + '","PinCode":"' + $('#txt_NPinCode_' + i).html() + '","TeleohoneNo":"' + $('#txt_NTelephone_' + i).html() + '","MobileNo":"' + $('#txt_NMobileNo_' + i).html() + '","EMailID":"' + $('#txt_NEmailId_' + i).html() + '","FaxNo":"' + $('#txt_NFaxNo_' + i).html() + '","ID":"' + '0' + '","NMGrdnName":"' + $('#txtGuardian_' + i).html() + '","NMGrdnPAN":"' + $('#txtGrdnPAN_' + i).html() + '","NMGrdndob":"' + $('#txtGrdndob_' + i).html() + '"},';
            }
            ScripName = ScripName.substring(0, ScripName.length - 1);
            ScripName = ScripName + "]}";
        }
        $('#hdn_JHAdress_Childdata').val(ScripName);
        return true;
    }
    catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function BindBankCreditDtls() {

    var SlNo = $('#grdBankCreditDtls').children().find('tr').length;
    if (parseInt(SlNo) > 5) return;
    $('#grdBankCreditDtls').css("overflow", "scroll");
    BindDynamicDropdown("CDBankName_" + SlNo, '../Masters/ClientReg.aspx/GetDDLBank', '');
    var ddl_CDBankName = DyDdl;
    BindDynamicDropdown("CDCreditCardBank_" + SlNo, '../Masters/ClientReg.aspx/GetDDLBank', '');
    var ddl_CDCreditCardBank = DyDdl;
    $('#grdBankCreditDtls').append("<tr style='border: 0px;' id=trid" + SlNo + ">"
                   + "<td style='text-align:center;border: 0px solid #6f9dd9;'>" + SlNo + ". </td>"
                   + "<td class='SelectCls'>" + ddl_CDBankName + "</td>"
                   + "<td><input type='text' maxlength='18' id='CDEMIACNo_" + SlNo + "'/></td>"
                   + "<td><input type='text' maxlength='18' data-rule-number='true data-msg-number='Please Enter Numeric Digit' id='CDLoanAmt_" + SlNo + "'/></td>"
                   + "<td><input type='text' maxlength='5'  data-rule-number='true data-msg-number='Please Enter Numeric Digit' id='CDLoanTenure_" + SlNo + "'/></td>"
                   + "<td><input type='text' maxlength='18' data-rule-number='true data-msg-number='Please Enter Numeric Digit' id='CDEMIAmt_" + SlNo + "'/></td>"
                   + "<td><input type='text' maxlength='16' data-rule-number='true data-msg-number='Please Enter Numeric Digit' id='CDCreditCardNo_" + SlNo + "'/></td>"
                   + "<td class='SelectCls'>" + ddl_CDCreditCardBank + "</td>"
                   + "<td><input type='text' id='CDCreditCardType_" + SlNo + "'/></td>"
                   + "<td><input type='text' id='CDExpiryDate_" + SlNo + "'/></td>"
                   + "<td><a id='a_Delete_" + SlNo + "' onclick='DeleteRow(this);'><img id='img_Reverse_" + SlNo + "' alt='Reverse' title='Delete' src='../Images/delete.jpg' /></a></td>"
                   + "<td style='display:none;'><div id='FdDivPkID_" + SlNo + "'>0</div></td>"
                   + "<td style='display:none;'></td>"
                   + "</tr>");
    CalenderContol($('#CDExpiryDate_' + SlNo));
    $('#CDEMIACNo_' + SlNo).numeric({ allow: "0123456789" });
    $('#CDLoanAmt_' + SlNo).numeric({ allow: ".0123456789" });
    $('#CDLoanTenure_' + SlNo).numeric({ allow: "0123456789" });
    $('#CDEMIAmt_' + SlNo).numeric({ allow: ".0123456789" });
    $('#CDCreditCardNo_' + SlNo).numeric({ allow: "0123456789" });

}
function AssignTab(tabval) {
    try {
        $("#hidden_tabindex").val(tabval);

    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }

}
//For Filling the Data In Spacific Page
function GetTABData(Ctrl) {
    try {
        //var id = Ctrl.parentNode.parentElement.cells[9].innerHTML;        
        var TabIndex = $("#hidden_tabindex").val();
        var id = $("#hdn_TempClientID").val();
        var CAccNo = $("#hdn_ClientAccNo").val();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            async: false,
            url: "../Masters/ClientReg.aspx/GetTABdataonBack",
            data: "{ TempClientID: '" + id + "' ,TabIndex: '" + TabIndex + "' ,CAccountNo: '" + CAccNo + "',recMode:" + (($('#hdnfld_DMode').val() == 'P') ? "'P'" : "'Z'") + " }",
            dataType: "json",
            success: function (data) {
                var tdata = jQuery.parseJSON(data.d).Table;
                HideAll();
                clearMenuCss();
                if (TabIndex == 1) {
                    $('#tab_BasicDtls').show();
                    $('#lnkBasic').addClass('current');
                    if ($('#Hdn_AccMode').val() == "U")
                        $('#divAccount').show();
                    else
                        $('#divAccount').hide();

                    FillBasicDtls(tdata)
                }
                else if (TabIndex == 2) {
                    $('#tab_HomeContactDtls').show();
                    $('#lnkHContact').addClass('current');
                    FillHomeDtls(tdata)
                }
                else if (TabIndex == 3) {
                    $('#tab_OfficeContactDtls').show();
                    $('#lnkOContact').addClass('current');

                    FillOfficeDtls(tdata)
                }
                else if (TabIndex == 4) {
                    $('#tab_Guardian_JH_NomineeDtls').show();
                    $('#lnkHdetails').addClass('current');

                    var grddata = GetDataByID('InvestorTypeMaster', 'InvestorType,ModeOfHoldingFlag,CorporateFlag,MinorFlag', 'ID', $('#hdnInvestorType').val());
                    var tgrddata = jQuery.parseJSON(grddata.d);
                    if (tgrddata.length > 0) {
                        if (tgrddata[0].MinorFlag) { $('#GuardianDiv').show(); }
                        else { $('#GuardianDiv').hide(); }
                    }
                    var gdata = GetDataByID('Temp_ClientRegistration', 'Mode_of_Holding', 'ID', $("#hdn_TempClientID").val());
                    var gtdata = jQuery.parseJSON(gdata.d);
                    if (gtdata.length > 0) {
                        if (gtdata[0].Mode_of_Holding == "1") { $('#JointHolderDiv').hide(); }
                        else { $('#JointHolderDiv').show(); }
                    }
                    FillJH_NomineeDtls(data);
                    FillJHAddDtls(data);
                }
                else if (TabIndex == 5) {
                    $('#tab_BankDtls').show();
                    $('#lnkBankdetails').addClass('current');
                    FillBankDtls(data)
                }
                else if (TabIndex == 6) {
                    $('#tab_OtherDetails').show();
                    $('#lnkOtherDetails').addClass('current');

                    FillOtherDtls(tdata)
                }
                else if (TabIndex == 7) {
                    $('#tab_ReportSetup').show();
                    $('#lnkReportSetup').addClass('current');
                    FillReportSetupDtls(tdata);
                }
                else if (TabIndex == 8) {
                    //$('#tab_DecisionMaker_ContactPerson').show();
                    //$('#lnkDecision').addClass('current');
                    //FillDM_CP_Dtls(tdata)
                    $('#tab_Broker_DP_Dtls').show();
                    $('#lnkBroker').addClass('current');
                    FillBroker_DP_Dtls(tdata)
                }
                else if (TabIndex == 9) {
                    $('#tab_StatutoryDetails').show();
                    $('#lnkStatutory').addClass('current');
                    FillStatutoryDtls(tdata)
                }
                else if (TabIndex == 10) {
                    //$('#tab_BankCreditDtls').show();
                    //$('#lnkBankCredit').addClass('current');

                    //FillBankCreditDtls(data)
                    $('#tab_RBIApprovalDtls').show();
                    $('#lnkRBI').addClass('current');

                    FillRBIDtls(tdata)
                }
                //else if (TabIndex == 11) {
                  
                //}
                //else if (TabIndex == 12) {
                   
                //}
                $("#hidden_tabindex").val(TabIndex - 1);
            },
            error: function (result) {
                alert('Data not found.');
            }
        });
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
    return false;
}
//End
//For Getting Data and Filling in first time
function SetTABData() {
    try {
        //var id = Ctrl.parentNode.parentElement.cells[9].innerHTML;        
        var TabIndex = $("#hidden_tabindex").val();
        TabIndex = parseInt(TabIndex) + 1;
        if ($("#hdn_TempClientID1").val() != "") {
            if ($("#hdn_TempClientID").val() != $("#hdn_TempClientID1").val())
                $("#hdn_TempClientID").val($("#hdn_TempClientID1").val());
        }
        else { $("#hdn_TempClientID1").val($("#hdn_TempClientID").val()); }

        var id = $("#hdn_TempClientID").val();
        var CAccNo = $("#hdn_ClientAccNo").val();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "../Masters/ClientReg.aspx/GetTABdataonBack",
            //data: "{ TempClientID: '" + id + "' ,TabIndex: '" + TabIndex + "'}",
            data: "{ TempClientID: '" + id + "' ,TabIndex: '" + TabIndex + "' ,CAccountNo: '" + CAccNo + "',recMode:" + (($('#hdnfld_DMode').val() == 'P') ? "'P'" : "'Z'") + " }",
            dataType: "json",
            success: function (data) {

                var tdata = jQuery.parseJSON(data.d).Table;

                if (TabIndex == 1) {
                    FillBasicDtls(tdata)
                    if ($('#Hdn_AccMode').val() == "U")
                        $('#divAccount').show();
                    else
                        $('#divAccount').hide();
                }
                else if (TabIndex == 2) {
                    FillHomeDtls(tdata)
                }
                else if (TabIndex == 3) {
                    FillOfficeDtls(tdata)
                }
                else if (TabIndex == 4) {
                    FillJH_NomineeDtls(data)
                    FillJHAddDtls(data)
                }
                else if (TabIndex == 5) {
                    FillBankDtls(data)
                }
                else if (TabIndex == 6) {
                    FillOtherDtls(tdata)
                }
                else if (TabIndex == 7) {
                    FillReportSetupDtls(tdata);
                    RptSetupMandates();
                }
                else if (TabIndex == 8) {
                    // FillDM_CP_Dtls(tdata)
                    FillBroker_DP_Dtls(tdata)
                }
                else if (TabIndex == 9) {
                    //FillBroker_DP_Dtls(tdata)
                    FillStatutoryDtls(tdata)
                }
                else if (TabIndex == 10) {
                    // FillBankCreditDtls(data)
                    FillRBIDtls(tdata)
                }

                if (($('#Hdn_AccMode').val() == 'V') || ($('#Hdn_AccMode').val() == 'U' && $('#hdnfld_DMode').val() == 'P')) {
                    $('option:not(:selected)').attr('disabled', true);
                    $('input[type="text"]').attr('readonly', true);
                    $('.ButtonCls').attr('disabled', true);
                    $("a").removeAttr("onclick");
                }               
                else {
                    $("#Rdb_Repartriable").removeAttr('disabled');
                    $("#Rdb_NonRepartiable").removeAttr('disabled');
                }
                //else if (TabIndex == 11) {
                //    FillStatutoryDtls(tdata)
                //}
                //else if (TabIndex == 12) {
                //    FillRBIDtls(tdata)
                //}
            },
            error: function (result) {
                alert('Data not found.');
            }
        });
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
    return false;
}
//End
//For Fill the Basic Details
function FillBasicDtls(tdata) {
    if (tdata.length > 0) {
        $('#txtAccountName').val(tdata[0].CAccountName);
        //document.getElementById("txtAccountNumber").value = tdata[0].CAccountNo
        $('#txtAccountNumber').text(tdata[0].CAccountNo);
        //$('#txtSource').val(tdata[0].Source);
        $('#ddlSource').val(tdata[0].Source);
        $('#txtSourceDtls').val(tdata[0].Source_Details);
        $('#txtIntroducerName').val(tdata[0].Introducer_Name);
        $('#ddlSalutation').val(tdata[0].Salutation);
        $('#txtFirstName').val(tdata[0].First_Name);
        $('#txtMiddleName').val(tdata[0].Middle_Name);
        $('#txtLastName').val(tdata[0].Last_Name);
        $('#txtShortName').val(tdata[0].Short_Name);

        


        $('#ddlInvestorType').val(tdata[0].Investor_Type);

        $('#txtBranch').val(tdata[0].ContactPerson_EmailID);
        $('#hdnBranchId').val(tdata[0].ContactPerson_TelephoneNo);
        $('#txtRemarks').val(tdata[0].ContactPerson_Name);
              
        $('#calClientDOB').val(tdata[0].Date_of_Birth);
        $('#txtClientPAN').val(tdata[0].PAN);
        $('#ddlDefaultContactPoint').val(tdata[0].Default_Contact_Point);
        $('#ddlFamily').val(tdata[0].Family);
        $('#ddlHeadOfFamily').val(tdata[0].Head_of_Family);
        $('#calAgreementDate').val(tdata[0].Agreement_Date);
        $('#calCommencementDate').val(tdata[0].Commencement_Date);
        $('#txtLockinPeriod').val(tdata[0].Lock_in_Period);
        $('#txtACRenewalAfter').val(tdata[0].Account_Renewal_After);
        if ($('#Hdn_AccMode').val() == 'A')
            $('#txtExternalClientID').val('');
        else
            $('#txtExternalClientID').val(tdata[0].External_ClientID);
        $('#ddlClientOmnibus').val(tdata[0].Client_Omnibus);
        $('#ddlOrderAccepted_byDealer').val(tdata[0].Order_Accepted_byDealer);
        CheckInvestorType($('#ddlInvestorType option:selected').val());
        $('#ddlModeOfHolding').val(tdata[0].Mode_of_Holding);
        $('#hiddenClientCurrency').val(tdata[0].Client_Currency_Code);
        $('#hiddenAccountCurrency').val(tdata[0].Account_Currency_Code);
        //Convert to Currency ID To Currency Code & Binding the Data for Client
        if (typeof tdata[0].Client_Currency_Code != undefined) {
            var clntcurncydata = GetDataByID('Currency', 'Currency_Code', 'ID', tdata[0].Client_Currency_Code);
            var tclntcurncydata = jQuery.parseJSON(clntcurncydata.d);
            if (tclntcurncydata.length > 0) {
                $('#txtClientCurrency').val(tclntcurncydata[0].Currency_Code);
            }
            //End
            //Convert to Currency ID To Currency Code & Binding the Data for Client
            var clntcurncydata = GetDataByID('Currency', 'Currency_Code', 'ID', tdata[0].Account_Currency_Code);
            var tclntcurncydata = jQuery.parseJSON(clntcurncydata.d);
            if (tclntcurncydata.length > 0) {
                $('#txtAccountCurrency').val(tclntcurncydata[0].Currency_Code);
            }
        }
        $('#ddlKYCStatus').val(tdata[0].KYCStatus);
        $('#ddlCRProf').val(tdata[0].ClientRiskProfiling);
        $('#ddlMFKnlg').val(tdata[0].MF_Knowledgelevel);
        $('#ddlPremodePayment').val(tdata[0].PaymentMode);
        $('#ddlreportingmodel').val(tdata[0].ReportingModel);
        $('#hdn_CPartyID').val(tdata[0].CPartyID);
        //End
        //$('#hiddenAccountCurrency').val(tdata[0].CAccountNo);
        //$('#hiddenAccountCurrency').val(tdata[0].CPartyID);
        //$('#hiddenAccountCurrency').val(tdata[0].GPartyID);
    }
    else {
        return;
    }
}
//End
//For Filling Contact Details both home and Office
function FillHomeDtls(tdata) {
    if (tdata.length > 0) {
        $('#txtAddress1').val(tdata[0].Home_Address1);
        $('#txtAddress2').val(tdata[0].Home_Address2);
        $('#txtAddress3').val(tdata[0].Home_Address3);
        //$('#ddlCountry').val(tdata[0].Home_Country);
        //$('#ddlZone').val(tdata[0].Home_Zone);
        //$('#ddlState').val(tdata[0].Home_State);
        //$('#ddlCity').val(tdata[0].Home_City);
        $('#txtPinCode').val(tdata[0].Home_PinCode);
        $('#txtTeleohoneNo').val(tdata[0].Home_TeleohoneNo);
        $('#txtMobileNo').val(tdata[0].Home_MobileNo);
        $('#txtEmailID').val(tdata[0].Home_EMailID);
        $('#txtFaxNo').val(tdata[0].Home_FaxNo);

        $("#ddlCountry").each(function () {
            $('option', this).each(function () {
                if ($(this).val().toLowerCase() == tdata[0].Home_Country) {
                    $(this).attr('selected', 'selected')
                    ZoneFill(tdata[0].Home_Country);
                };
            });
        });
        $("#ddlZone").each(function () {
            $('option', this).each(function () {
                if ($(this).val().toLowerCase() == tdata[0].Home_Zone) {
                    $(this).attr('selected', 'selected')
                    StateFill(tdata[0].Home_Zone);
                };
            });
        });
        $("#ddlState").each(function () {
            $('option', this).each(function () {
                if ($(this).val().toLowerCase() == tdata[0].Home_State) {
                    $(this).attr('selected', 'selected')
                    CityFill(tdata[0].Home_State);
                };
            });
        });
        $("#ddlCity").each(function () {
            $('option', this).each(function () {
                if ($(this).val().toLowerCase() == tdata[0].Home_City) {
                    $(this).attr('selected', 'selected')
                };
            });
        });
    }
    else {
        return;
    }
}

function FillOfficeDtls(tdata) {
    if (tdata.length > 0) {
        $('#txtOfficeAddress1').val(tdata[0].Office_Address1);
        $('#txtOfficeAddress2').val(tdata[0].Office_Address2);
        $('#txtOfficeAddress3').val(tdata[0].Office_Address3);
        //$('#ddlOfficeCountry').val(tdata[0].Office_Country);
        //$('#ddlOfficeZone').val(tdata[0].Office_Zone);
        //$('#ddlOfficeState').val(tdata[0].Office_State);
        //$('#ddlOfficeCity').val(tdata[0].Office_City);
        $('#txtOfficePinCode').val(tdata[0].Office_PinCode);
        $('#txtOfficeTeleohoneNo').val(tdata[0].Office_TeleohoneNo);
        $('#txtOfficeMobileNo').val(tdata[0].Office_MobileNo);
        $('#txtOfficeEmailID').val(tdata[0].Office_EMailID);
        $('#txtOfficeFaxNo').val(tdata[0].Office_FaxNo);
     $("#ddlOfficeCountry").each(function () {
            $('option', this).each(function () {
               if ($(this).val().toLowerCase() == tdata[0].Office_Country) {
                //if ($(this).val().toLowerCase() == (($('#hdncbContact').val() == 1) ? $('#hdnCountry').val() : tdata[0].Office_Country)) {
                    $(this).attr('selected', 'selected')
                    OfficeZoneFill(tdata[0].Office_Country);
                    //OfficeZoneFill(($('#hdncbContact').val() == 1) ? $('#hdnCountry').val() : tdata[0].Office_Country);
                };
            });
        });
        $("#ddlOfficeZone").each(function () {
            $('option', this).each(function () {
               if ($(this).val().toLowerCase() == tdata[0].Office_Zone) {
               // if ($(this).val().toLowerCase() == (($('#hdncbContact').val() == 1) ? $('#hdnZone').val() : tdata[0].Office_Zone)) {
                    $(this).attr('selected', 'selected')
                    OfficeStateFill(tdata[0].Office_Zone);
                    //OfficeStateFill(($('#hdncbContact').val() == 1) ? $('#hdnZone').val() : tdata[0].Office_Zone);
                };
            });
        });
        $("#ddlOfficeState").each(function () {
            $('option', this).each(function () {
                if ($(this).val().toLowerCase() == tdata[0].Office_State) {
                //if ($(this).val().toLowerCase() == (($('#hdncbContact').val() == 1) ? $('#hdnState').val() : tdata[0].Office_State)) {
                $(this).attr('selected', 'selected')
                OfficeCityFill(tdata[0].Office_State);
               // OfficeCityFill(($('#hdncbContact').val() == 1) ? $('#hdnState').val() : tdata[0].Office_State);
                };
            });
        });
        $("#ddlOfficeCity").each(function () {
            $('option', this).each(function () {
                 if ($(this).val().toLowerCase() == tdata[0].Office_City) {
               // if ($(this).val().toLowerCase() == (($('#hdncbContact').val() == 1) ? $('#hdnCity').val() : tdata[0].Office_City)) {
                    $(this).attr('selected', 'selected')
                };
            });
        });


        //if ($('#hdncbContact').val() == 1) {

        //    if ($("#txtAddress1").val().trim().length > 0)
        //        $("#txtOfficeAddress1").val($("#txtAddress1").val());
        //    if ($("#txtAddress2").val().trim().length > 0)
        //        $("#txtOfficeAddress2").val($("#txtAddress2").val());
        //    if ($("#txtAddress3").val().trim().length > 0)
        //        $("#txtOfficeAddress3").val($("#txtAddress3").val());
        //    if ($("#txtPinCode").val().trim().length > 0)
        //        $("#txtOfficePinCode").val($("#txtPinCode").val());
        //    if ($("#txtTeleohoneNo").val().trim().length > 0)
        //        $("#txtOfficeTeleohoneNo").val($("#txtTeleohoneNo").val());
        //    if ($("#txtMobileNo").val().trim().length > 0)
        //        $("#txtOfficeMobileNo").val($("#txtMobileNo").val());
        //    if ($("#txtEmailID").val().trim().length > 0)
        //        $("#txtOfficeEmailID").val($("#txtEmailID").val());
        //    if ($("#txtFaxNo").val().trim().length > 0)
        //        $("#txtOfficeFaxNo").val($("#txtFaxNo").val());
           
        //}





    }
    else {
        return;
    }
}
//End
//For Fill the JH and Nominee Details
function FillJH_NomineeDtls(data) {

    var Gdata = GetDataByID('InvestorTypeMaster', 'InvestorType,ModeOfHoldingFlag,CorporateFlag,MinorFlag', 'ID', $('#hdnInvestorType').val());
    var Gtdata = jQuery.parseJSON(Gdata.d);
    if (Gtdata.length > 0) {
        if (Gtdata[0].MinorFlag) {

            $('#GuardianDiv').show();
            var tdata = jQuery.parseJSON(data.d).Table;
            if (tdata.length > 0) {
                $('#txtGuardianName').val(tdata[0].Guardian_Name);
                $('#DrpGuardianRelationship').val(tdata[0].Guardian_Relationship);
                $('#txtGuardianDOB').val(tdata[0].Guardian_DOB);
                $('#txtGuardianPAN ').val(tdata[0].Guardian_PAN);
            }

            if (parseInt($('#hdnInvestorType').val()) == 12) {
                if ($("#calClientDOB").val() != "") {
                    var newdate = $("#calClientDOB").val().split("/").reverse().join("-");

                    var From_date = new Date(newdate);
                    var currentdate = new Date();
                    var To_date = currentdate;
                    var diff_date = To_date - From_date;

                    var years = Math.floor(diff_date / 31536000000);
                    var months = Math.floor((diff_date % 31536000000) / 2628000000);
                    var days = Math.floor(((diff_date % 31536000000) % 2628000000) / 86400000);

                    //$("#Result").html(years + " year(s) " + months + " month(s) " + days + " and day(s)");
                    //alert( years+" year(s) "+months+" month(s) "+days+" and day(s)");
                    if (parseInt(years) >= 18) {
                        $('#GuardianDiv').hide();
                    }
                }


            }


        }
        else {
            $('#GuardianDiv').hide();
        }
    }
    var Jgdata = GetDataByID('Temp_ClientRegistration', 'Mode_of_Holding', 'TempClientID', $("#hdn_TempClientID").val());
    var Jgtdata = jQuery.parseJSON(Jgdata.d);
    if (Jgtdata.length > 0) {
        if (Jgtdata[0].Mode_of_Holding == "1") { $('#JointHolderDiv').hide(); }
        else {
            $('#JointHolderDiv').show();
            var tdata1 = jQuery.parseJSON(data.d).Table1;
            removeTableRow('grdJointHolderDtls');
            if (tdata1.length > 0) {
                for (var i = 0; i < tdata1.length; i++) {
                    var SlNo = $('#grdJointHolderDtls').children().find('tr').length;

                    $('#grdJointHolderDtls').append("<tr id=tr_id" + SlNo + ">"
                                + "<td style='text-align:center;border: 0px solid #6f9dd9;'>" + SlNo + ". </td>"
                                + "<td><input type='text' class='TextCls caps' maxlength='10' data-rule-required='true' data-msg-required='Please enter PAN' data-rule-PAN='true' id='JHPAN_" + SlNo + "' value='" + tdata1[i].JH_PAN + "'/></td>"
                                + "<td><input type='text' data-rule-required='true' data-msg-required='Please enter JH Name' id='JHName_" + SlNo + "'  value='" + tdata1[i].JH_Name + "'/></td>"
                                + "<td><input class='TextCls' type='text' id='JHDOB_" + SlNo + "'  value='" + tdata1[i].JH_DOB + "'/></td>"
                                + "<td><a id='a_Delete_" + SlNo + "' onclick='DeleteRow1(this);'><img id='img_Reverse_" + SlNo + "' alt='Reverse' title='Delete' src='../Images/delete.jpg' /></a></td>"
                                + "<td style='display:none;'><div id='FdDivPkID_" + SlNo + "'>0</div></td>"
                                + "<td style='display:none;'>" + tdata1[i].JPartyID + "</td>"
                                + "</tr>");
                }
            }
            else {
               // BindJointHolderDtls();
            }
        }
    }
    else { $('#JointHolderDiv').hide(); }


    // var tdata = jQuery.parseJSON(data.d).Table;

    var tdata2 = jQuery.parseJSON(data.d).Table2;
    // if (tdata.length > 0) {
    //   $('#txtGuardianName').val(tdata[0].Guardian_Name);
    //  $('#txtGuardianRelationship').val(tdata[0].Guardian_Relationship);
    //  $('#txtGuardianDOB').val(tdata[0].Guardian_DOB);
    //  $('#txtGuardianPAN ').val(tdata[0].Guardian_PAN);
    //}

    removeTableRow('grdNomineeDtls');
    $('#ddlamc').empty();
    if (tdata2.length > 0) {
        for (var i = 0; i < tdata2.length; i++) {
            var SlNo = $('#grdNomineeDtls').children().find('tr').length;
            BindDynamicDropdown("NomineeRelation_" + SlNo, '../Masters/ClientReg.aspx/GetDDLRelationShip', '');
            var ddl_NomineeRelation = DyDdl;
            $('#grdNomineeDtls').append("<tr id=trid" + SlNo + ">"
                       + "<td style='text-align:center;border: 0px solid #6f9dd9;'>" + SlNo + ". </td>"
                       + "<td><input type='text' class='TextCls caps' maxlength='10' data-rule-PAN='true' id='NomineePAN_" + SlNo + "' value='" + tdata2[i].Nominee_PAN + "'/></td>"
                       + "<td><input type='text' id='NomineeName_" + SlNo + "' value='" + tdata2[i].Nominee_Name + "'/></td>"
                         + "<td><input type='text' id='Percentage_" + SlNo + "' value='" + tdata2[i].NPer + "'/></td>"
                       + "<td >" + ddl_NomineeRelation + "</td><td><input type='checkbox' id='chIsNominee_" + SlNo + "' name='chkgrdNomineeDtls' value=" + tdata2[i].NomineeName + " /></td>"

                       + "<td><a id='a_Delete_" + SlNo + "' onclick='DeleteRow(this);'><img id='img_Reverse_" + SlNo + "' alt='Reverse' title='Delete' src='../Images/delete.jpg' /></a></td>"
                       + "<td style='display:none;'><div id='FdDivPkID_" + SlNo + "'>0</div></td>"
                       + "<td style='display:none;'>" + tdata2[i].NPartyID + "</td>"
                       + "</tr>");
      
            $('#NomineeRelation_' + SlNo).val(tdata2[i].Nominee_RelationShip);


        }
    }
    else {
        //if ($('#hdnfld_DMode').val() != 'P')
        //    BindNomineeDtls();
        
    }

}

//End
function grdBnkdefault(Ctrl) {
    $.each($('input[type=checkbox][name=grdBnk]:not(#' + Ctrl.id + ''), function () {
        $(this).prop('checked', false);
    });
    // $('#hdnfld_Units').val($(Ctrl).parent().parent().children().get(4).innerHTML);

}
//For Fill the Bank Details

function FillBankDtls(data) {
    var tdata = jQuery.parseJSON(data.d).Table;
    if (tdata.length > 0) {
        removeTableRow('grdBankDtls');
        var Cid = $("#hdn_TempClientID").val();
        for (var i = 0; i < tdata.length; i++) {

            var SlNo = $('#grdBankDtls').children().find('tr').length;

            BindDynamicDropdown("BDACHolder_" + SlNo, '../Masters/ClientReg.aspx/GetDDLJHNominee', "{'Param':'JH_Nominee~" + Cid + "'}");
            var ddl_BDACHolder = DyDdl;
            BindDynamicDropdown("BDACType_" + SlNo, '../Masters/ClientReg.aspx/GetDDLBankAccountType', '');
            var ddl_BDACType = DyDdl;
            $('#grdBankDtls').append("<tr style='border: 0px;' id=trid" + SlNo + ">"
                   + "<td style='text-align:center;border: 0px solid #6f9dd9;'>" + SlNo + ". </td>"
                    + "<td><input type='checkbox' name='grdBnk' id='cbtn_" + SlNo + "' " + ((tdata[i].DefaultFlag == 1) ? "checked = true" : "") + " onclick='grdBnkdefault(this);'></td>"
                   + "<td class='SelectCls'>" + ddl_BDACHolder + "</td>"
                   + "<td><input type='text' id='BDMICRCode_" + SlNo + "' onblur='return GetMICRData(this);' value='" + ReplacceUndifined(tdata[i].MICRCode) + "'/></td>"
                   + "<td><input type='text' readonly id='BDBankName_" + SlNo + "'  value='" + ReplacceUndifined(tdata[i].BankName) + "'/></td>"
                   + "<td><input type='text' readonly id='BDBranchName_" + SlNo + "'  value='" + ReplacceUndifined(tdata[i].BranchName) + "'/></td>"
                   + "<td><input type='text' readonly id='BDIFSCCode_" + SlNo + "'  value='" + ReplacceUndifined(tdata[i].IFSCCode) + "'/></td>"
                   + "<td class='SelectCls'>" + ddl_BDACType + "</td>"
                   + "<td><input type='text' id='BDACNo_" + SlNo + "'  value='" + ReplacceUndifined(tdata[i].ACNo) + "'/></td>"
                   + "<td><a id='a_Delete_" + SlNo + "' onclick='DeleteRow(this);'><img id='img_Reverse_" + SlNo + "' alt='Reverse' title='Delete' src='../Images/delete.jpg' /></a></td>"
                   + "<td style='display:none;'><div id='FdDivPkID_" + SlNo + "'>0</div></td>"
                   + "<td style='display:none;'>" + tdata[i].PartyID + "</td>"
                   + "</tr>");
            $('#BDACHolder_' + SlNo).val(tdata[i].AccountHolder);
            $('#BDACType_' + SlNo).val(tdata[i].ACType);
        }
    }
    else {
        return;
    }
}
//End
//For Fill the Other Details
function FillOtherDtls(tdata) {
    if (tdata.length > 0) {
        $('#ddlOD_Sex').val(tdata[0].Sex);
        $('#ddlOD_MarritalStatus').val(tdata[0].Marrital_Status);
        $('#txtOD_POB').val(tdata[0].Place_of_Birth);
        $('#ddlOD_Occupation').val(tdata[0].Occupation);
        $('#ddlOD_TypeofResident').val(tdata[0].Type_of_Resident);
        $('#txtOD_Qualification').val(tdata[0].Qualification);
        $('#ddlOD_Nationality').val(tdata[0].Nationality);
        $('#txtOD_GrossAnnualIncome').val(tdata[0].Gross_Annual_Income);
        $('#txtOD_EstFinWealth').val(tdata[0].Estimated_Financial_Wealth);
        $('#txtOD_CA_Name').val(tdata[0].CA_Name);
        $('#txtOD_CA_Address').val(tdata[0].CA_Address);
        $('#txtOD_CA_ContactNo').val(tdata[0].CA_ContactNo);
        $('#txtOD_CA_EmailID').val(tdata[0].CA_EMailID);
        $('#txtOD_KeyMgntName').val(tdata[0].Key_Management_Name);
        //$('#txtOD_Designation').val(tdata[0].Designation);
        $('#ddlOD_Designation').val(tdata[0].Designation);
        $('#txtOD_BoardSeat').val(tdata[0].Board_Seat);
        $('#txtOD_OtherDtlsifany').val(tdata[0].OtherDetails_if_any);
    }
    else {
        return;
    }
}
//End
//For Fill the Report Setup Details
function FillReportSetupDtls(tdata) {
    if (tdata.length > 0) {
        if (tdata[0].SendClientReportsBy_Email == 1)
            $("#chkSendClientReportsBy_Email").prop("checked", true);
        else $("#chkSendClientReportsBy_Email").prop("checked", false);
        //$('#chkSendClientReportsBy_Email').val(tdata[0].SendClientReportsBy_Email);
        if (tdata[0].SendClientReportsBy_FAX == 1)
            $("#chkSendClientReportsBy_FAX").prop("checked", true);
        else $("#chkSendClientReportsBy_FAX").prop("checked", false);
        //$('#chkSendClientReportsBy_FAX').val(tdata[0].SendClientReportsBy_FAX);
        if (tdata[0].SendClientReportsBy_HandDelivery == 1)
            $("#chkSendClientReportsBy_HandDelivery").prop("checked", true);
        else $("#chkSendClientReportsBy_HandDelivery").prop("checked", false);
        //$('#chkSendClientReportsBy_HandDelivery').val(tdata[0].SendClientReportsBy_HandDelivery);
        //$('#txtSendClientReportsBy_EmailID').val(tdata[0].txtSendClientReportsBy_EmailID);
        //$('#txtSendClientReportsBy_FAXNo').val(tdata[0].txtSendClientReportsBy_FAXNo);
        if (tdata[0].SendAlertsBy_Email == 1)
            $("#chkSendAlertsBy_Email").prop("checked", true);
        else $("#chkSendAlertsBy_Email").prop("checked", false);
        //$('#chkSendAlertsBy_Email').val(tdata[0].SendAlertsBy_Email);
        if (tdata[0].SendAlertsBy_FAX == 1)
            $("#chkSendAlertsBy_FAX").prop("checked", true);
        else $("#chkSendAlertsBy_FAX").prop("checked", false);
        //$('#chkSendAlertsBy_FAX').val(tdata[0].SendAlertsBy_FAX);
        if (tdata[0].SendAlertsBy_SMS == 1)
            $("#chkSendAlertsBy_SMS").prop("checked", true);
        else $("#chkSendAlertsBy_SMS").prop("checked", false);
        //$('#chkSendAlertsBy_SMS').val(tdata[0].SendAlertsBy_SMS);
        if (tdata[0].SendAlertsBy_HandDelivery == 1)
            $("#chkSendAlertsBy_HandDelivery").prop("checked", true);
        else $("#chkSendAlertsBy_HandDelivery").prop("checked", false);
        //$('#chkSendAlertsBy_HandDelivery').val(tdata[0].SendAlertsBy_HandDelivery);
        $('#txtSendAlertsBy_EmailID').val(tdata[0].txtSendAlertsBy_EmailID);
        $('#txtSendAlertsBy_FAXNo').val(tdata[0].txtSendAlertsBy_FAXNo);
        $('#txtSendAlertsBy_MobileNo').val(tdata[0].txtSendAlertsBy_MobileNo);
        if (tdata[0].SendEmailfor_Deactivation == 1)
            $("#chkSendEmailfor_Deactivation").prop("checked", true);
        else $("#chkSendEmailfor_Deactivation").prop("checked", false);
        //$('#chkSendEmailfor_Deactivation').val(tdata[0].SendEmailfor_Deactivation);
        if (tdata[0].SendEmailfor_CorporateAction == 1)
            $("#chkSendEmailfor_CorporateAction").prop("checked", true);
        else $("#chkSendEmailfor_CorporateAction").prop("checked", false);
        //$('#chkSendEmailfor_CorporateAction').val(tdata[0].SendEmailfor_CorporateAction);
        if (tdata[0].SendEmailfor_CloseofAccount == 1)
            $("#chkSendEmailfor_CloseofAccount").prop("checked", true);
        else $("#chkSendEmailfor_CloseofAccount").prop("checked", false);
        //$('#chkSendEmailfor_CloseofAccount').val(tdata[0].SendEmailfor_CloseofAccount);
        if (tdata[0].SendEmailfor_FreezeofAccount == 1)
            $("#chkSendEmailfor_FreezeofAccount").prop("checked", true);
        else $("#chkSendEmailfor_FreezeofAccount").prop("checked", false);
        //$('#chkSendEmailfor_FreezeofAccount').val(tdata[0].SendEmailfor_FreezeofAccount);
        if (tdata[0].OrdersAcceptedBy_OrderonFax == 1)
            $("#chkOrdersAcceptedBy_OrderonFax").prop("checked", true);
        else $("#chkOrdersAcceptedBy_OrderonFax").prop("checked", false);
        //$('#chkOrdersAcceptedBy_OrderonFax').val(tdata[0].OrdersAcceptedBy_OrderonFax);
        if (tdata[0].OrdersAcceptedBy_OrderonMail == 1)
            $("#chkOrdersAcceptedBy_OrderonMail").prop("checked", true);
        else $("#chkOrdersAcceptedBy_OrderonMail").prop("checked", false);
        //$('#chkOrdersAcceptedBy_OrderonMail').val(tdata[0].OrdersAcceptedBy_OrderonMail);
        if (tdata[0].OrdersAcceptedBy_VerbalOrder == 1)
            $("#chkOrdersAcceptedBy_VerbalOrder").prop("checked", true);
        else $("#chkOrdersAcceptedBy_VerbalOrder").prop("checked", false);
        //$('#chkOrdersAcceptedBy_VerbalOrder').val(tdata[0].OrdersAcceptedBy_VerbalOrder);
        $('#Txt_MangmentFee').val(tdata[0].Management_Fees);
        $('#drp_Fifo').val(tdata[0].PLMode);
        RptSetupMandates();
    }
    else {
        return;
    }
}
//End
//For Fill the DP Details
function FillDM_CP_Dtls(tdata) {
    if (tdata.length > 0) {
        $('#txtDM_Name').val(tdata[0].DecisionMaker_Name);
        $('#txtDM_TelephoneNo').val(tdata[0].DecisionMaker_TelephoneNo);
        $('#txtDM_MobileNo').val(tdata[0].DecisionMaker_MobileNo);
        $('#txtDM_EmailID').val(tdata[0].DecisionMaker_EmailID);
        $('#txtDM_FaxNo').val(tdata[0].DecisionMaker_FaxNo);
        $('#txtCP_Name').val(tdata[0].ContactPerson_Name);
        $('#txtCP_TelephoneNo').val(tdata[0].ContactPerson_TelephoneNo);
        $('#txtCP_MobileNo').val(tdata[0].ContactPerson_MobileNo);
        $('#txtCP_EmailID').val(tdata[0].ContactPerson_EmailID);
        $('#txtCP_FaxNo').val(tdata[0].ContactPerson_FaxNo);
    }
    else {
        return;
    }
}
//End
//For Fill the Statutory Details
function FillStatutoryDtls(tdata) {
   if ($('#hdnfld_DMode').val() == 'P')
        $('#btn_StatutoryDetails_Save').val('Authorize');
    else
        $('#btn_StatutoryDetails_Save').val('Save');
    if (tdata.length > 0) {
        if (tdata[0].StatutoryDtls_VoterID_No != "" && typeof tdata[0].StatutoryDtls_VoterID_No != "undefined" && tdata[0].StatutoryDtls_VoterID_No != null) {
            $("#chkStatutoryDtls_VoterID").prop("checked", true);
            $('#txtStatutoryDtls_VoterID').val(tdata[0].StatutoryDtls_VoterID_No);
        } else {
            $("#chkStatutoryDtls_VoterID").prop("checked", false);
            $('#txtStatutoryDtls_VoterID').val("");
        }
        if (tdata[0].StatutoryDtls_AadhaarID_No != "" && typeof tdata[0].StatutoryDtls_AadhaarID_No != "undefined" && tdata[0].StatutoryDtls_AadhaarID_No != null) {
            $('#txtStatutoryDtls_AadhaarID').val(tdata[0].StatutoryDtls_AadhaarID_No);
            $("#chkStatutoryDtls_AadhaarID").prop("checked", true);
        } else {
            $('#txtStatutoryDtls_AadhaarID').val("");
            $("#chkStatutoryDtls_AadhaarID").prop("checked", false);
        }
        if (tdata[0].StatutoryDtls_Passport_No != "" && typeof tdata[0].StatutoryDtls_Passport_No != "undefined" && tdata[0].StatutoryDtls_Passport_No != null) {
            $("#chkStatutoryDtls_PassportNo").prop("checked", true);
            $('#txtStatutoryDtls_PassportNo').val(tdata[0].StatutoryDtls_Passport_No);
            $('#txtStatutoryDtls_PlaceofIssue').val(tdata[0].StatutoryDtls_Place_of_Issue);
            $('#txtStatutoryDtls_IssueDate').val(tdata[0].StatutoryDtls_IssueDate);
            $('#txtStatutoryDtls_ExpiryDate').val(tdata[0].StatutoryDtls_ExpiryDate);
        }
        else {
            $("#chkStatutoryDtls_PassportNo").prop("checked", false);
            $('#txtStatutoryDtls_PassportNo').val("");
            $('#txtStatutoryDtls_PlaceofIssue').val("");
            $('#txtStatutoryDtls_IssueDate').val("");
            $('#txtStatutoryDtls_ExpiryDate').val("");
        }
        StatutoryVisisble();
    }
    else {
        return;
    }
}
//End
//For Fill the Bank Credit Details
function FillBankCreditDtls(data) {
    var tdata = jQuery.parseJSON(data.d).Table;
    if (tdata.length > 0) {
        removeTableRow('grdBankCreditDtls');
        var Cid = $("#hdn_TempClientID").val();
        for (var i = 0; i < tdata.length; i++) {
            var SlNo = $('#grdBankCreditDtls').children().find('tr').length;
            BindDynamicDropdown("CDBankName_" + SlNo, '../Masters/ClientReg.aspx/GetDDLBank', '');
            var ddl_CDBankName = DyDdl;
            BindDynamicDropdown("CDCreditCardBank_" + SlNo, '../Masters/ClientReg.aspx/GetDDLBank', '');
            var ddl_CDCreditCardBank = DyDdl;
            $('#grdBankCreditDtls').append("<tr style='border: 0px;' id=trid" + SlNo + ">"
                           + "<td style='text-align:center;border: 0px solid #6f9dd9;'>" + SlNo + ". </td>"
                           + "<td class='SelectCls'>" + ddl_CDBankName + "</td>"
                           + "<td><input type='text' maxlength='18' id='CDEMIACNo_" + SlNo + "'  value='" + ReplacceUndifined(tdata[i].EMIBank_ACNo) + "'/></td>"
                           + "<td><input type='text' maxlength='18' id='CDLoanAmt_" + SlNo + "'  value='" + ReplacceUndifined(tdata[i].LoanAmount) + "'/></td>"
                           + "<td><input type='text' maxlength='5' id='CDLoanTenure_" + SlNo + "'  value='" + ReplacceUndifined(tdata[i].LoanTenure) + "'/></td>"
                           + "<td><input type='text' maxlength='18' id='CDEMIAmt_" + SlNo + "'  value='" + ReplacceUndifined(tdata[i].EMIAmount) + "'/></td>"
                           + "<td><input type='text' maxlength='16' id='CDCreditCardNo_" + SlNo + "'  value='" + ReplacceUndifined(tdata[i].CreditCard_No) + "'/></td>"
                           + "<td class='SelectCls'>" + ddl_CDCreditCardBank + "</td>"
                           + "<td><input type='text' id='CDCreditCardType_" + SlNo + "'  value='" + ReplacceUndifined(tdata[i].CreditCard_Type) + "'/></td>"
                           + "<td><input type='text' id='CDExpiryDate_" + SlNo + "'  value='" + ReplacceUndifined(tdata[i].ExpiryDate) + "'/></td>"
                           + "<td><a id='a_Delete_" + SlNo + "' onclick='DeleteRow(this);'><img id='img_Reverse_" + SlNo + "' alt='Reverse' title='Delete' src='../Images/delete.jpg' /></a></td>"
                           + "<td style='display:none;'><div id='FdDivPkID_" + SlNo + "'>0</div></td>"
                           + "<td style='display:none;'>" + tdata[i].PK_BCRID + "</td>"
                           + "</tr>");
            $('#CDBankName_' + SlNo).val(tdata[i].BankName);
            $('#CDCreditCardBank_' + SlNo).val(tdata[i].CreditCard_Bank);
            CalenderContol($('#CDExpiryDate_' + SlNo));
            $('#CDEMIACNo_' + SlNo).numeric({ allow: "0123456789" });
            $('#CDLoanAmt_' + SlNo).numeric({ allow: ".0123456789" });
            $('#CDLoanTenure_' + SlNo).numeric({ allow: "0123456789" });
            $('#CDEMIAmt_' + SlNo).numeric({ allow: ".0123456789" });
            $('#CDCreditCardNo_' + SlNo).numeric({ allow: "0123456789" });
        }
    }
    else {
        return;
    }
}
//End
//For Fill the Broker DP Details
function FillBroker_DP_Dtls(tdata) {
    if (tdata.length > 0) {
        //Convert to Broker Code To Broker Name & Binding the Data
        var Brokerdata = GetDataByID('Broker_details', 'BrokerName,Address', 'Broker_id', tdata[0].BrokerID);
        var tBrokerdata = jQuery.parseJSON(Brokerdata.d);
        if (tBrokerdata.length > 0) {
            $('#txtBrokerName').val(tBrokerdata[0].BrokerName);
            $('#txtBrokerAddress').val(tBrokerdata[0].Address);
        }
        //End
        $('#hiddenBrokerName').val(tdata[0].BrokerID);
        $('#txtTMSClearingNo').val(tdata[0].TMS_Clearing_No);
        //$('#txtBrokerAddress').val(tdata[0].Broker_Address);
        $('#txtDPID').val(tdata[0].DPID);
        $('#hiddenDPID').val(tdata[0].DPID);
        $('#txtDPName').val(tdata[0].DPName);
        $('#txtDPACNo').val(tdata[0].DPAC_No);
        $('#ddlTaxWaiverinFile').val(tdata[0].DP_TaxWaiverinFile);
        $('#ddlNoOpinionReceived').val(tdata[0].DP_NoOpinionReceived);
        $('#ddlSACheck').val(tdata[0].DP_SACheck);
        $('#txtGIRNo').val(tdata[0].DP_GIRNo);
        $('#txtPLA').val(tdata[0].DP_PLA);
        $('#txtTAN').val(tdata[0].DP_TAN);
        $('#txtCircleWardDistrict').val(tdata[0].DP_CircleWardDistrict);
        $('#txtCSO').val(tdata[0].DP_CSO);
        $('#txtTaxDeductionStatus').val(tdata[0].DP_TaxDeductionStatus);
        $('#TxtAccDPClientID').val(tdata[0].AccDPClientID);
        $('#TxtAccDPID').val(tdata[0].AccDPID);
    }
    else {
        return;
    }
}
//End
//For Fill the RBI Details
function FillRBIDtls(tdata) {
    if (tdata.length > 0) {
        if (tdata[0].Type_of_Resident == 1 || tdata[0].Type_of_Resident == 4) {
            $("#Rdb_Repartriable").prop("checked", false);
            $("#Rdb_NonRepartiable").prop("checked", false);
            $("#Rdb_None").prop("checked", true);
            $("#Rdb_Repartriable").attr('disabled', 'disabled');
            $("#Rdb_NonRepartiable").attr('disabled', 'disabled');
        }
        else {
            $("#Rdb_Repartriable").removeAttr('disabled');
            $("#Rdb_NonRepartiable").removeAttr('disabled');
            if (tdata[0].ddlRBINon_NRICountry == undefined || tdata[0].ddlRBINon_NRICountry == "") {
                $('#txtRBI_ApprovalNumber').val(tdata[0].txtRBI_ApprovalNumber);
                $('#txtRBI_ApprovalDate').val(tdata[0].txtRBI_ApprovalDate);
                $('#txtRBI_ValidUpto').val(tdata[0].txtRBI_ValidUpto);
                $("#Rdb_Repartriable").prop("checked", true);
                $("#Rdb_NonRepartiable").prop("checked", false);
                $("#Rdb_None").prop("checked", false);
            }
            else {

                $('#txtRBI_ApprovalNumber').val(tdata[0].txtRBINon_ApprovalNumber);
                $('#txtRBI_ApprovalDate').val(tdata[0].txtRBINon_ApprovalDate);
                $('#txtRBI_ValidUpto').val(tdata[0].txtRBINon_ValidUpto);
                $('#txtRBINon_LocalPOAContact').val(tdata[0].txtRBINon_LocalPOAContact);
                $('#txtRBINon_LocalPOAAddress').val(tdata[0].txtRBINon_LocalPOAAddress);
                $('#txtRBINon_RelationwithPOA').val(tdata[0].txtRBINon_RelationwithPOA);
                $('#txtRBINon_LocalPOAContactNo').val(tdata[0].txtRBINon_LocalPOAContactNo);
                $('#txtRBINon_LocalPOAEmailID').val(tdata[0].txtRBINon_LocalPOAEmailID);
                $('#txtRBINon_LocalPOAFaxNo').val(tdata[0].txtRBINon_LocalPOAFaxNo);
                $('#txtRBINon_NRIAddress').val(tdata[0].txtRBINon_NRIAddress);
                $('#ddlRBINon_NRICountry').val(tdata[0].ddlRBINon_NRICountry);
                $("#Rdb_Repartriable").prop("checked", false);
                $("#Rdb_NonRepartiable").prop("checked", true);
                $("#Rdb_None").prop("checked", false);
            }
        }
        SetRBIVis();
    }
    else {
        $("#Rdb_Repartriable").prop("checked", false);
        $("#Rdb_NonRepartiable").prop("checked", false);
       // $("#Rdb_None").prop("checked", true);
        $("#Rdb_None").prop("checked", true).trigger("change");

        $("#Rdb_Repartriable").attr('disabled', 'disabled');
        $("#Rdb_NonRepartiable").attr('disabled', 'disabled');

        return;
    }
}
//End

function BasicHiddenData() {
    $('#hdnInvestorType').val($('#ddlInvestorType').val());
    $('#hdnFamily').val($('#ddlFamily').val());
    $('#hdnModeOfHolding').val($('#ddlModeOfHolding').val());
    $('#hdn_RBINonNRICountry').val($('#ddlRBINon_NRICountry').val());
    $('#hdnPremodePayment').val($('#ddlPremodePayment').val());
    $('#hdnreportingmodel').val($('#ddlreportingmodel').val());
    $('#hdnDefaultContactPoint').val($('#ddlDefaultContactPoint').val());
    //agreementdt =  $('#calAgreementDate').val();
    //commdt = $('#calCommencementDate').val();
    //var difference = (dobdt - agreementdt) / (86400000);
    //if (dobdt < agreementdt)
    //{
    //    if (dobdt < commdt) {
    //        return true;
    //    }
    //    else { alert("Date of Birth Should be greater than Commencement Date"); return false;}
    //}
    //else {alert("Date of Birth Should be greater than Agreement Date"); return false;}
}
function checkDateDifference(startDate, endDate) {
    startDate = $.datepicker.parseDate('mm/dd/yy', startDate);
    endDate = $.datepicker.parseDate('mm/dd/yy', endDate);
    var difference = (endDate - startDate) / (86400000);
    if (difference < 0) {
        showError("The start date must come before the end date.");
        return false;
    }
    return true;

}
function HomeHiddenData() {
    $('#hdnCountry').val($('#ddlCountry').val());
    $('#hdnZone').val($('#ddlZone').val());
    $('#hdnState').val($('#ddlState').val());
    $('#hdnCity').val($('#ddlCity').val());
    //if ($("input[type=checkbox][name=cbContact]:checked").length > 0)
    //    $('#hdncbContact').val(1);
    //else
    //    $('#hdncbContact').val(0);
  
}

function OfficeHiddenData() {
    $('#hdnOfficeCountry').val($('#ddlOfficeCountry').val());
    $('#hdnOfficeZone').val($('#ddlOfficeZone').val());
    $('#hdnOfficeState').val($('#ddlOfficeState').val());
    $('#hdnOfficeCity').val($('#ddlOfficeCity').val());

    var data = GetDataByID('InvestorTypeMaster', 'InvestorType,ModeOfHoldingFlag,CorporateFlag,MinorFlag,NomineeFlag', 'ID', $('#hdnInvestorType').val());
    var tdata = jQuery.parseJSON(data.d);
    if (tdata.length > 0) {
        if (tdata[0].MinorFlag) {
            $('#GuardianDiv').show();
            $('#JointHolderDiv').hide();
        }
        else {
            $('#GuardianDiv').hide();
            $('#JointHolderDiv').show();
        }
        if (tdata[0].NomineeFlag) {
            $('#NomineeDiv').show();
        }
        else {
            $('#NomineeDiv').hide();
        }

    }
    //var bodDt = $('#calClientDOB').val();
    //if ((bodDt != '')) {
    //    var DtVal = bodDt.split("/");
    //    var now = new Date()
    //    if (DtVal.length == 3) {
    //        var birthDate = new Date(DtVal[2], DtVal[1] * 1 - 1, DtVal[0]);
    //        var years = Math.floor((now.getTime() - birthDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
    //        if (years > 18) {
    //            $('#GuardianDiv').hide();
    //        }
    //        else {
    //            $('#GuardianDiv').show();
    //        }
    //    }
    //}
}
function OtherDtlsHiddenData() {
    $('#hdnOD_Occupation').val($('#ddlOD_Occupation').val());
    $('#hdnOD_Nationality').val($('#ddlOD_Nationality').val());
    $('#hdnOD_Designation').val($('#ddlOD_Designation').val());
}

function CheckInvestorType(tval) {
    var data = GetDataByID('InvestorTypeMaster', 'InvestorType,ModeOfHoldingFlag,CorporateFlag,MinorFlag', 'ID', tval);
    var tdata = jQuery.parseJSON(data.d);
    if (tdata.length > 0) {
        $('#ddlModeOfHolding').empty().append('<option selected="selected" value="0">Please Select</option>');
        if (tdata[0].ModeOfHoldingFlag) {
            $('#ddlModeOfHolding').append("<option value='1'>Single</option>");
            $('#ddlModeOfHolding').append("<option value='2'>Joint Holder</option>");
            $('#ddlModeOfHolding').append("<option value='3'>Anyone or Survivor</option>");
        }
        else {
            $('#ddlModeOfHolding').append('<option selected="selected" value="1">Single</option>');
        }
        if (tdata[0].CorporateFlag) {
            $('#lblClientDOB').text('Date of Establishment');
        }
        else {
            $('#lblClientDOB').text('Date of Birth');
        }
        //if (tdata[0].MinorFlag) {
        //    $('#GuardianDiv').show();
        //    $('#JointHolderDiv').hide();
        //}
        //else {
        //    $('#GuardianDiv').hide();
        //    $('#JointHolderDiv').show();
        //}
    }
}
function GetMICRData(tval) {
    var rowid = tval.id.split('_')[1];
    if ($('#BDMICRCode_' + rowid).val().length > 0)
    {
   
    var data = GetDataByID('Bank', 'Bank_Name,Branch_Name,IFSCcode', 'Bank_Code', tval.value);
    var tdata = jQuery.parseJSON(data.d);
    if (tdata.length > 0) {
        $('#BDBankName_' + rowid).val(tdata[0].Bank_Name);
        $('#BDBranchName_' + rowid).val(tdata[0].Branch_Name);
        $('#BDIFSCCode_' + rowid).val(tdata[0].IFSCcode);
    }
    else {
        alert('Invalid MICR Code');
        $('#BDMICRCode_' + rowid).val('');
        $('#BDBankName_' + rowid).val('');
        $('#BDBranchName_' + rowid).val('');
        $('#BDIFSCCode_' + rowid).val('');
        $('#BDMICRCode_' + rowid).focus();
        return false;
    }
  }

}
function GetParty_ByIdentifier(tval) {
    var id = tval.id;
    var val1 = $("#" + id).val();
    var gv_Values2 = $('#grdJointHolderDtls');
    var rows2 = gv_Values2.children().find('tr').length;
    if (rows2 > 1) {
        for (var i = 1; i < rows2 - 1; i++) {
            var jointtx = $('#JHPAN_' + i + '').val();
            if (jointtx == val1) {
                alert('Pan already exists');
                $('#JHPAN_' + (i + 1) + '').val('');

                return false;

            }
        }
    }
    var rowid = tval.id.split('_')[1];
    var data = GetPartyByIdentity(tval.value);
    var tdata = jQuery.parseJSON(data.d);
    if (tdata.Table.length > 0) {
        $('#JHName_' + rowid).val(tdata.Table[0].FullName);
        $('#JHDOB_' + rowid).val(tdata.Table[0].BirthDate);
        //Bind Data
    }
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../Masters/ClientReg.aspx/CheckClientPAN",
        data: "{Pan : '" + tval + "'}",
        dataType: "json",
        success: function (data) {
            var tdata = jQuery.parseJSON(data.d);

            if (tdata.length > 0) {

                if (tdata[0].StatusMsg == 'PAN Already Exists') {

                    alert('PAN Already Exists');
                    $('#JHPAN_' + i + '').val('');
                    return;
                }


            }
            else {
                return;
            }

        },
        error: function (result) {
            alert('Depository Participant  List Data not found.');
        }
    });
}

function GetParty_ByIdentifierNomine(tval) {
    var rowid = tval.id.split('_')[1];
    var data = GetPartyByIdentity(tval.value);
    var tdata = jQuery.parseJSON(data.d);
    if (tdata.Table.length > 0) {
        $('#NomineeName_' + rowid).val(tdata.Table[0].FullName);
        //Bind Data
    }
}

//Common Validation for Tab Basis
function SetRBIVis() {
    if ($('#Rdb_Repartriable')[0].checked == true) {
        $('#NonRepartiable').hide();
        $('#Repartriable').show();
    }
    else if ($('#Rdb_NonRepartiable')[0].checked == true)
    { $('#NonRepartiable').show(); $('#Repartriable').show(); }
    else
    { $('#NonRepartiable').hide(); $('#Repartriable').hide(); }
    if ($('#Hdn_AccMode').val() == 'V') {
        $('#btn_Save').hide();
    }
    else { $('#btn_Save').show(); }
}
//End

//BInd Broker  Data from Lookup
function OpenBrokerLookUp() {
    OpenDynamicModalPopup('Broker_id', 'Broker_Details', 'BrokerName', 'txtBrokerName', 'hiddenBrokerName', 'BindBrokerData');
    return false;
}
function BindBrokerData(obj) {
    $('#hiddenBrokerName').val(obj[0]);
    $('#txtBrokerAddress').val(obj[2]);
}
function BindDPData(obj) {
    $('#txtDPName').val(obj[1]);
}
//End
//Bind Curency Data from lookup
function ShowCurrencyLookup() {
    OpenDynamicModalPopup('ID', 'Currency', 'Currency_Code', 'txtClientCurrency', 'hiddenClientCurrency', 'BindAccountCurrency');
    return false;
}
function BindAccountCurrency(obj) {
    $('#hiddenClientCurrency').val(obj[3]);
    $('#hiddenAccountCurrency').val(obj[3]);
    $('#txtAccountCurrency').val(obj[0]);
}
function ShowAcCurrencyLookup() {
    OpenDynamicModalPopup('ID', 'Currency', 'Currency_Code', 'txtAccountCurrency', 'hiddenAccountCurrency', 'BindAccountCurrency1');
    return false;
}
function BindAccountCurrency1(obj) {
    $('#hiddenAccountCurrency').val(obj[3]);
    $('#txtAccountCurrency').val(obj[0]);
}
//End
//Bind Introducer Name Lookup
function ShowIntroducerNameLookup() {
    OpenDynamicModalPopup('ID', 'Introducer', 'Introducer_Name', 'txtIntroducerName', 'hdn_IntroName', 'Damy');
    return false;
}
//End
//Bind Managment Fee Lookup

function ShowManagmentFeeLookup() {
    OpenDynamicModalPopup('Fee_Schedule_Code', 'V_FeeDef', 'Fee_Schedule_Code', 'Txt_MangmentFee', 'hdn_MangmentFee', 'Damy');
    return false;
}
function Damy(obj) {
}
//End
//Indicates Guardian mandiates
function CheckMinor(dob) {
    $('#GuardianDiv').hide();
}
//End
//Statutory Details  Tab Validation
function StatutoryVisisble() {
    if ($("#chkStatutoryDtls_VoterID").prop('checked') == true)
        $('#VoterIDDiv').show();
    else $('#VoterIDDiv').hide();
    if ($("#chkStatutoryDtls_AadhaarID").prop('checked') == true)
        $('#AdharIDDiv').show();
    else $('#AdharIDDiv').hide();
    if ($("#chkStatutoryDtls_PassportNo").prop('checked') == true)
        $('#pasportdiv').show();
    else $('#pasportdiv').hide();
}
$("#chkStatutoryDtls_VoterID").change(function () {
    if (this.checked) {
        $('#VoterIDDiv').show();
    }
    else {
        $('#VoterIDDiv').hide();
    }
});
$("#chkStatutoryDtls_AadhaarID").change(function () {
    if (this.checked) {
        $('#AdharIDDiv').show();
    }
    else {
        $('#AdharIDDiv').hide();
    }
});
$("#chkStatutoryDtls_PassportNo").change(function () {
    if (this.checked) {
        $('#pasportdiv').show();
    }
    else {
        $('#pasportdiv').hide();
    }
});
//End
//Report Setup Tab Validation
function RptSetupMandates() {
    if ($("#chkSendClientReportsBy_Email").prop('checked') == true || $("#chkSendAlertsBy_Email").prop('checked') == true || $("#chkSendEmailfor_Deactivation").prop('checked') == true ||
        $("#chkSendEmailfor_CorporateAction").prop('checked') == true || $("#chkSendEmailfor_CloseofAccount").prop('checked') == true || $("#chkSendEmailfor_FreezeofAccount").prop('checked') == true ||
        $("#chkOrdersAcceptedBy_OrderonMail").prop('checked') == true) {
        $('#DivEmail').show();
    }
    else {
        $('#DivEmail').hide();
    }
    if ($("#chkSendClientReportsBy_FAX").prop('checked') == true || $("#chkSendAlertsBy_FAX").prop('checked') == true || $("#chkOrdersAcceptedBy_OrderonFax").prop('checked') == true) {
        $('#DivFAX').show();
    } else {
        $('#DivFAX').hide();
    }

    if ($("#chkSendAlertsBy_SMS").prop('checked') == true) {
        $('#DivMobile').show();
    } else {
        $('#DivMobile').hide();
    }
}
//END
//**********************************************General Page Functionality*****************************************************
//Home Grid Binding for Edit and view

function FillGrid(data) {

    //debugger;
    try {
        result = jQuery.parseJSON(data.d);
        if (result == null) {
            nodatafound('grdClient', 10);
            return;
        }
        if (result.length <= 0) {
            nodatafound('grdClient', 10);
            return;
        }
        else {
            removeTableRow('grdClient');
            var tdata = jQuery.parseJSON(data.d);
            if (tdata.length > 0) {
                for (var i = 0; i < tdata.length; i++) {
                    var st = "";
                    if (tdata[i].Record_Type == 'N' || tdata[i].Record_Type == 'R' || $('#hdnfld_DMode').val() == 'H') {
                        st = "style='Display:none'";
                    }
                    var st1 = "";
                    if ($('#hdnfld_DMode').val() == 'H' || tdata[i].RECORD_TYPE == 'R') {
                        st1 = "style='Display:none'";
                    }
                    $('#grdClient').append("<tr><td>" + ReplacceUndifined(tdata[i].FullName) + "</td><td>" + ReplacceUndifined(tdata[i].No_Acc) + "</td><td>" + ReplacceUndifined(tdata[i].BirthDate)
                        + "</td><td>" + ReplacceUndifined(tdata[i].Pan_No) + "</td><td>" + ReplacceUndifined(tdata[i].Mobile) + "</td><td>" + ReplacceUndifined(tdata[i].Gender) + "</td><td>" + ReplacceUndifined(tdata[i].Email1) + "</td>"
                        + "<td><a style='Display:none' id='a_Edit_" + i + "' onclick='EditData(this);'><img id='img_Edit_" + i + "' alt='Edit' title='Edit' src='../Images/edit.png' /></a></td>"
                        + "<td><a style='Display:none' id='a_Reverse_" + i + "' onclick='ReverseData(this);'><img id='img_Reverse_" + i + "' alt='Reverse' title='Reverse' src='../Images/close.png' /></a></td>"
                        + "<td><a id='a_View_" + i + "' onclick='GetAccountDetailsByClient(this);'><img id='img_View_" + i + "' alt='Account Details' title='View' src='../Images/view1.jpg' /></a></td>"
                        + "<td style='display:none'>" + tdata[i].client_Regid + "</td><td style='display:none'>" + tdata[i].PartyID + "</td><td style='display:none'>" + tdata[i].VerNo + "</td>"
                        + "</tr>");
                }
            }

        }
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
    //GetPagelevelAccess();
}
function GetAccountDetailsByClient(Ctrl) {
    //var id = "";
    //if (typeof _clientID === "undefined") {
    //    id = Ctrl.parentNode.parentElement.cells[10].innerHTML;
    //}
    //else
    //    id = _clientID;
    $('#divsearch').hide();
    $("#a_Pending").show();
    //debugger;
    try {
        var id = Ctrl.parentNode.parentElement.cells[10].innerHTML;
        // $('#hdnClientID').val(id);

        //PageButtons();
        $('#divAcc_Grid').slideDown('slow');
        $('#div_Grid').slideUp('slow');
        //var dmode = $('#hdnfld_DMode').val();
        //ClearFields();
        //alert(id);
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "../Masters/ClientReg.aspx/GetClientAccountList",
            data: "{SortBy: '',SortByColumnName: '',ID: '" + id + "' ,PageNumber: '1',PageSize: '10',Record_Type:'" + (($('#hdnfld_DMode').val() == 'P') ? "P" : "L") + "'}",
            dataType: "json",
            success: function (data) {
                var tdata = jQuery.parseJSON(data.d);
                if (tdata.length > 0) {
                    removeTableRow('GrdClientAccount');
                    for (var i = 0; i < tdata.length; i++) {
                        var st = "";
                        if (tdata[i].Record_Type == 'N' || tdata[i].Record_Type == 'R' || $('#hdnfld_DMode').val() == 'H') {
                            st = "style='Display:none'";
                        }
                        //var st1 = "";
                        //if ($('#hdnfld_DMode').val() == 'H' || tdata[i].RECORD_TYPE == 'R') {
                        //    st1 = "style='Display:none'";
                        //} 
                        //$('#GrdClientAccount').append("<tr><td>" + ReplacceUndifined(tdata[i].client_Regid) + "</td><td>" + ReplacceUndifined(tdata[i].FullName) + "</td><td>" + ReplacceUndifined(tdata[i].AccountIdentifier) + "</td><td>"
                        //    + ReplacceUndifined(tdata[i].Currency_Code) + "</td><td>" + ReplacceUndifined(tdata[i].ModeofHolding) + "</td><td>" + ReplacceUndifined(tdata[i].Agreementdate) + "</td><td>" + ReplacceUndifined(tdata[i].Commencementdate) + "</td><td>" + ReplacceUndifined(tdata[i].LockinPeriod) + "</td>"
                        //    + "<td><a " + st + " id='a_Edit_" + i + "' onclick='EditClientAccount(this);'><img id='img_Edit_" + i + "' style='cursor:pointer;' " + (($('#hdnfld_DMode').val() == 'P') ? "alt='Authorize' title='Authorize'  src='../Images/Authorize.gif'" : "alt='Edit' title='Edit' src='../Images/edit.png'") + " /></a></td>"
                        //    + "<td><a " + ((($('#hdnfld_DMode').val() == 'P' || tdata[i].RECORD_TYPE == 'P' || $('#hdnfld_DMode').val() == 'H' || tdata[i].RECORD_TYPE == 'R')) ? "style='Display:none;'" : "style='cursor:pointer;'") + " id='a_Reverse_" + i + "' onclick='ReverseData(this);'><img id='img_Reverse_" + i + "' alt='Reverse' title='Reverse' src='../Images/close.png' /></a></td>"
                        //    + "<td><a " + ((($('#hdnfld_DMode').val() == 'P' || tdata[i].RECORD_TYPE == 'P')) ? "style='Display:none;'" : "style='cursor:pointer;'") + "  id='a_View_" + i + "' onclick='DisplayAccount(this);'><img id='img_View_" + i + "' alt='Account Details' title='View' src='../Images/view1.jpg' /></a></td>"
                        //    + "<td><a " + ((($('#hdnfld_DMode').val() == 'P' || tdata[i].RECORD_TYPE == 'P')) ? "style='Display:none;'" : "style='cursor:pointer;'") + "  id='a_New_" + i + "' onclick='NewClientAccount(this);'><img id='img_New_" + i + "' alt='New Account' title='New Account' src='../Images/add_record.png' /></a></td>"
                        //    + "</tr>");

                        if ($('#hdnfld_DMode').val() == 'P' && $('#hdnUserID').val() == tdata[i].Inputted_By) {

                            $('#GrdClientAccount').append("<tr><td>" + ReplacceUndifined(tdata[i].client_Regid) + "</td><td>" + ReplacceUndifined(tdata[i].FullName) + "</td><td>" + ReplacceUndifined(tdata[i].AccountIdentifier) + "</td><td>"
                         + ReplacceUndifined(tdata[i].Currency_Code) + "</td><td>" + ReplacceUndifined(tdata[i].ModeofHolding) + "</td><td>" + ReplacceUndifined(tdata[i].Agreementdate) + "</td><td>" + ReplacceUndifined(tdata[i].Commencementdate) + "</td><td>" + ReplacceUndifined(tdata[i].LockinPeriod) + "</td>"
                         + "<td></td>"
                         + "<td><a " + ((($('#hdnfld_DMode').val() == 'P' || tdata[i].RECORD_TYPE == 'P' || $('#hdnfld_DMode').val() == 'H' || tdata[i].RECORD_TYPE == 'R')) ? "style='Display:none;'" : "style='cursor:pointer;'") + " id='a_Reverse_" + i + "' onclick='ReverseData(this);'><img id='img_Reverse_" + i + "' alt='Reverse' title='Reverse' src='../Images/close.png' /></a></td>"
                         + "<td><a " + ((($('#hdnfld_DMode').val() == 'P' || tdata[i].RECORD_TYPE == 'P')) ? "style='Display:none;'" : "style='cursor:pointer;'") + "  id='a_View_" + i + "' onclick='DisplayAccount(this);'><img id='img_View_" + i + "' alt='Account Details' title='View' src='../Images/view1.jpg' /></a></td>"
                         + "<td><a " + ((($('#hdnfld_DMode').val() == 'P' || tdata[i].RECORD_TYPE == 'P')) ? "style='Display:none;'" : "style='cursor:pointer;'") + "  id='a_New_" + i + "' onclick='NewClientAccount(this);'><img id='img_New_" + i + "' alt='New Account' title='New Account' src='../Images/add_record.png' /></a></td>"
                         + "</tr>");

                        }
                        else {

                            $('#GrdClientAccount').append("<tr><td>" + ReplacceUndifined(tdata[i].client_Regid) + "</td><td>" + ReplacceUndifined(tdata[i].FullName) + "</td><td>" + ReplacceUndifined(tdata[i].AccountIdentifier) + "</td><td>"
                         + ReplacceUndifined(tdata[i].Currency_Code) + "</td><td>" + ReplacceUndifined(tdata[i].ModeofHolding) + "</td><td>" + ReplacceUndifined(tdata[i].Agreementdate) + "</td><td>" + ReplacceUndifined(tdata[i].Commencementdate) + "</td><td>" + ReplacceUndifined(tdata[i].LockinPeriod) + "</td>"
                         + "<td><a " + st + " id='a_Edit_" + i + "' onclick='EditClientAccount(this);'><img id='img_Edit_" + i + "' style='cursor:pointer;' " + (($('#hdnfld_DMode').val() == 'P') ? "alt='Authorize' title='Authorize'  src='../Images/Authorize.gif'" : "alt='Edit' title='Edit' src='../Images/edit.png'") + " /></a></td>"
                         + "<td><a " + ((($('#hdnfld_DMode').val() == 'P' || tdata[i].RECORD_TYPE == 'P' || $('#hdnfld_DMode').val() == 'H' || tdata[i].RECORD_TYPE == 'R')) ? "style='Display:none;'" : "style='cursor:pointer;'") + " id='a_Reverse_" + i + "' onclick='ReverseData(this);'><img id='img_Reverse_" + i + "' alt='Reverse' title='Reverse' src='../Images/close.png' /></a></td>"
                         + "<td><a " + ((($('#hdnfld_DMode').val() == 'P' || tdata[i].RECORD_TYPE == 'P')) ? "style='Display:none;'" : "style='cursor:pointer;'") + "  id='a_View_" + i + "' onclick='DisplayAccount(this);'><img id='img_View_" + i + "' alt='Account Details' title='View' src='../Images/view1.jpg' /></a></td>"
                         + "<td><a " + ((($('#hdnfld_DMode').val() == 'P' || tdata[i].RECORD_TYPE == 'P')) ? "style='Display:none;'" : "style='cursor:pointer;'") + "  id='a_New_" + i + "' onclick='NewClientAccount(this);'><img id='img_New_" + i + "' alt='New Account' title='New Account' src='../Images/add_record.png' /></a></td>"
                         + "</tr>");

                        }


                    }
                    if ($('#hdnfld_DMode').val() == 'P') {
                        $("#GrdClientAccount td:nth-child(12),th:nth-child(12)").hide();
                        $("#GrdClientAccount td:nth-child(11),th:nth-child(11)").hide();
                        $("#GrdClientAccount td:nth-child(10),th:nth-child(10)").hide();
                    }
                    else {
                        $("#GrdClientAccount td:nth-child(12),th:nth-child(12)").show();
                        $("#GrdClientAccount td:nth-child(11),th:nth-child(11)").show();
                        $("#GrdClientAccount td:nth-child(10),th:nth-child(10)").show();
                    }

                }
                else {
                    return;
                }
            },
            error: function (result) {
                alert('Data not found.');
            }
        });
    }
    catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
    GetPagelevelAccess();
}
function CloseAcDiv() {
    try {
        $('#div_Grid').slideDown('slow');
        $('#divAcc_Grid').slideUp('slow');
        $('#divsearch').show();
        $('#hdnClientID').val('0');
        $('#hdnfld_DMode').val('')
        return false;
    }
    catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
    return false;
}
function DisplayAccount(ctrl1) {
    try {
        $('#div_Fields').slideDown('slow');
        $('#divAcc_Grid').slideUp('slow');
        BindBankDtls();
        BindJointHolderDtls();
        BindNomineeDtls();
        BindBankCreditDtls();
        var id = ctrl1.parentNode.parentElement.cells[0].innerHTML;
        var CAccNo = ctrl1.parentNode.parentElement.cells[2].innerHTML;
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            async: false,
            url: "../Masters/ClientReg.aspx/GetClientAccountDetails",
            //data: "{ TempClientID: '" + id + "' ,CAccountNo: '" + CAccNo + "' }",
            data: "{ TempClientID: '" + id + "' ,CAccountNo: '" + CAccNo + "' ,DMLMode: 'V' }",
            dataType: "json",
            success: function (data) {
                var tdata = jQuery.parseJSON(data.d)
                if (tdata.length > 0) {
                    $('#hidden_tabindex').val('0')
                    $('#hdn_TempClientID').val(tdata[0].TempClientID)
                    $('#hdn_TempClientID1').val(tdata[0].TempClientID)
                    $('#hdn_ClientAccNo').val(tdata[0].CAccountNo)
                    $('#Hdn_AccMode').val('V')
                }
                else { alert('Data not Found'); }
            },
            error: function (result) {
                alert('Data not found.');
            }
        });


        var tabindex = $('#hidden_tabindex').val();

        if (tabindex != '') {
            HideAll();
            clearMenuCss()
            $('#tab_BasicDtls').show();
            $('#lnkBasic').addClass('current');
            SetTABData();
        }
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function EditClientAccount(ctrl1) {
    try {
        window.flag = [];
        flag = false;
        var alertmsg = '';
        $('#div_Fields').slideDown('slow');
        $('#divAcc_Grid').slideUp('slow');
        $("#txtClientPAN").prop("disabled", true);
        $("#txtExternalClientID").prop("disabled", true);
        var VarDMLMode=""
        if ($('#hdnfld_DMode').val() == "P") {
            VarDMLMode="V"
        }
        else {
            VarDMLMode="U"
        }
        BindBankDtls();
        BindJointHolderDtls();
        BindNomineeDtls();
        BindBankCreditDtls();
        var id = ctrl1.parentNode.parentElement.cells[0].innerHTML;
        var CAccNo = ctrl1.parentNode.parentElement.cells[2].innerHTML;
         $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            async: false,
            url: "../Masters/ClientReg.aspx/GetClientAccountDetails",
            data: "{ TempClientID: '" + id + "' ,CAccountNo: '" + CAccNo + "' ,DMLMode:'"+VarDMLMode+"'}",
            dataType: "json",
            success: function (data) {
                var tdata = jQuery.parseJSON(data.d)
                if (tdata.length > 0) {
                    $('#hidden_tabindex').val('0')
                    $('#hdn_TempClientID').val(tdata[0].TempClientID)
                    $('#hdn_TempClientID1').val(tdata[0].TempClientID)
                    $('#hdn_ClientAccNo').val(tdata[0].CAccountNo)
                    $('#Hdn_AccMode').val('U')

                    if (tdata[0].StatusMsg == 'Pending For Authorization') {
                        alertmsg = 'Pending For Authorization';
                        flag = true;

                    }

                    if (tdata[0].StatusMsg == 'User Does not have permission to Authorize') {
                        flag = true;
                        alertmsg = 'User Does not have permission to Authorize';
                    }
                }
                else { alert('Data not Found'); }
            },
            error: function (result) {
                alert('Data not found.');
            }
         });
         

        var tabindex = $('#hidden_tabindex').val();
        if (tabindex != '') {
            HideAll();
            clearMenuCss()
            $('#tab_BasicDtls').show();
            $('#lnkBasic').addClass('current');
            SetTABData();
        }
        if (flag)
        {
            alert(alertmsg);
            HideAll();
            clearMenuCss()
            $('#div_Fields').hide();
            $('#div_Grid').show();
           
      
        }
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

function NewClientAccount(ctrl2) {
    try {

        $('#div_Fields').slideDown('slow');
        $('#divAcc_Grid').slideUp('slow');
        $("#txtClientPAN").prop("disabled", true);
        $("#txtExternalClientID").removeAttr("disabled");

        //$("#txtExternalClientID").prop("disabled", true);
        BindBankDtls();
        BindJointHolderDtls();
        BindNomineeDtls();
        BindBankCreditDtls();
        var id = ctrl2.parentNode.parentElement.cells[0].innerHTML;
        var CAccNo = ctrl2.parentNode.parentElement.cells[2].innerHTML;
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            async: false,
            url: "../Masters/ClientReg.aspx/GetClientAccountDetails",
            data: "{ TempClientID: '" + id + "' ,CAccountNo: '" + CAccNo + "' ,DMLMode: 'A'}",
            dataType: "json",
            success: function (data) {
                var tdata = jQuery.parseJSON(data.d);
                if (tdata.length > 0) {
                    $('#hidden_tabindex').val('0')
                    $('#hdn_TempClientID').val(tdata[0].TempClientID)
                    $('#hdn_TempClientID1').val(tdata[0].TempClientID)
                    $('#hdn_ClientAccNo').val(tdata[0].CAccountNo)
                    $('#Hdn_AccMode').val('A')

                }
                else { alert('Data not Found'); }
            },
            error: function (result) {
                alert('Data not found.');
            }
        });


        var tabindex = $('#hidden_tabindex').val();
        HideAll();
        clearMenuCss()
        if (tabindex != '') {

            $('#tab_BasicDtls').show();
            $('#lnkBasic').addClass('current');
            SetTABData();


        }


    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

function ReplacceUndifined(vobj) {
    if (vobj == undefined) {
        return '';
    }
    else { return vobj; }
}
function CheckClientPAN(data) {
    //debugger;
    try {

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "../Masters/ClientReg.aspx/CheckClientPAN",
            data: "{Pan : '" + $('#txtClientPAN').val() + "'}",
            dataType: "json",
            success: function (data) {
                var tdata = jQuery.parseJSON(data.d);

                if (tdata.length > 0) {

                    if (tdata[0].StatusMsg == 'PAN Already Exists') {

                        alert('PAN Already Exists');
                        $('#txtClientPAN').val("");
                        return;
                    }


                }
                else {
                    return;
                }

            },
            error: function (result) {
                alert('Depository Participant  List Data not found.');
            }
        });
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function CheckExternalClientID(Colvalue) {
    try {
        Colvalue = jQuery.trim(Colvalue);
        if (Colvalue == "") return;
        var eid = 0;//$('#hdnID').val();
        // if (eid == '') eid == 0;
        var Paramstr = "{'TableName':'Account','ColumnName':'ExternalClientID','ColumnDependsON':'','ColumnValue':'" + Colvalue + "','ID':'" + eid + "'}";
        CheckExistance('txtExternalClientID', '../CommonWebServices/MasterBindings.aspx/CheckExistance', Paramstr);

    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
//END

//************************ Nominee Address functionality *************************
function BindGrid(Ctrl) {
    try {
        if (VlaidAddDtls() == false) {
            return false;
        }


        var NomiNeeName = $("#ddlNomineeName").val();
        var NADD1 = $("#txtNADD1").val();
        var NADD2 = $("#txtNADD2").val();
        var NADD3 = $("#txtNADD3").val();
        var NCountry = $("#ddlNCountry").find('option:selected').text();
        var NZone = $("#ddlNZone").find('option:selected').text();
        var NState = $("#ddlNState").find('option:selected').text();
        var NCity = $("#ddlNCity").find('option:selected').text();
        var NPinCode = $("#txtNPinCode").val();
        var NTelephone = $("#txtNTelePhone").val();
        var NMobileNo = $("#txtMobNo").val();
        var NEmailId = $("#txtNEmailId").val();
        var NFaxNo = $("#txtNFaxNo").val();

        var NCountryID = $("#ddlNCountry").val();
        var NZoneID = $("#ddlNZone").val();
        var NStateID = $("#ddlNState").val();
        var NCityID = $("#ddlNCity").val();
        var PAN = $('#hdnNPAN').val();
        var AccountTypeID = $('#ddlAccountType').val();
        var AccountType = '';
        if (parseInt(AccountTypeID) == 1) {
            AccountType = 'NM';
        }
        else if (parseInt(AccountTypeID) == 2) {
            AccountType = 'JH';
        }
        var Guardian = $("#txtGuardian").val();
        var GrdnPAN = $("#txtGrdnPAN").val();
        var Grdndob = $("#txtgrdndob").val();

        var len = $("#grdNADDetails tr").length - 1;
        var j = 0;
        var i = $('#grdNADDetails').children().find('tr').length;
        if ($("#hdnFlag").val() != "") {
            var i = $("#hdnFlag").val();
            j = $("#hdnEditID").val();
            $('#trr_' + i).remove();
            $("#hdnFlag").val('');
            $("#hdnEditID").val('');
        }
        //if (from == "" || to == "" || ideal == "" || riskpname == "") return;
        var sty_hide = " style='display:none;'", sty_links = " style = 'cursor:pointer;'", sty_date = " style='width:100px;'";
        if (len == 0)
            removeTableRow('grdRisk');
        //for (var i = 1; i <= 1; i++) {
        $('#grdNADDetails').append("<tr id='trr_" + i + "'>"
        + "<td> <span id='txt_NomiNeeName_" + i + "'>" + NomiNeeName + "</span></td>"
        + "<td><span id='txt_NADD1_" + i + "'>" + NADD1 + "</span></td>"
        + "<td><span id='txt_NADD2_" + i + "'>" + NADD2 + "</span></td>"
        + "<td><span id='txt_NADD3_" + i + "'>" + NADD3 + "</span></td>"
        + "<td> <span id='txt_NCountry_" + i + "'>" + NCountry + "</span></td>"
        + "<td><span id='txt_NZone_" + i + "'>" + NZone + "</span></td>"
        + "<td><span id='txt_NState_" + i + "'>" + NState + "</span></td>"
        + "<td><span id='txt_NCity_" + i + "'>" + NCity + "</span></td>"
        + "<td> <span id='txt_NPinCode_" + i + "'>" + NPinCode + "</span></td>"
        + "<td><span id='txt_NTelephone_" + i + "'>" + NTelephone + "</span></td>"
        + "<td><span id='txt_NMobileNo_" + i + "'>" + NMobileNo + "</span></td>"
        + "<td><span id='txt_NEmailId_" + i + "'>" + NEmailId + "</span></td>"
        + "<td><span id='txt_NFaxNo_" + i + "'>" + NFaxNo + "</span></td>"
        + "<td><span id='txtGuardian_" + i + "'>" + Guardian + "</span></td>"
         + "<td><span id='txtGrdnPAN_" + i + "'>" + GrdnPAN + "</span></td>"
         + "<td><span id='txtGrdndob_" + i + "'>" + Grdndob + "</span></td>"
        + "<td><img onclick='return EdirRisk(this);'  src='../Images/edit.png' title='Edit' id='img_Createrisk_" + i + "'/>"
        + "<td><a" + sty_links + " id='a_Edit_" + i + "' onclick='DeleteRiskRow(this);'><img id='img_Delete_" + i + "' alt='Delete' title='Delete' src='../Images/delete.jpg' /></a></td>"
        + "<td" + sty_hide + " id='td_" + i + "'>" + i + "</td>"
        + "<td" + sty_hide + " id='tde_" + i + "'>" + j + "</td>"
        + "<td " + sty_hide + "><span id='txt_NCountryID_" + i + "'>" + NCountryID + "</span></td>"
        + "<td " + sty_hide + "><span id='txt_NZoneID_" + i + "'>" + NZoneID + "</span></td>"
        + "<td " + sty_hide + "><span id='txt_NStateID_" + i + "'>" + NStateID + "</span></td>"
        + "<td " + sty_hide + "><span id='txt_NCityID_" + i + "'>" + NCityID + "</span></td>"
        + "<td " + sty_hide + "><span id='txt_AccountType_" + i + "'>" + AccountType + "</span></td>"
        + "<td " + sty_hide + "><span id='txt_AccountTypeID_" + i + "'>" + AccountTypeID + "</span></td>"
        + "<td " + sty_hide + "><span id='txt_PAN_" + i + "'>" + PAN + "</span></td>"         
        + "</tr>");
        //}

        //FillRiskDropdown(i, riskpname);
        ClearRiskTextBoxes();
        RiskCancel();
        //sortTable('grdRisk');
        return false;
    }
    catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}
function FillJHAddDtls(data) {
    try {
        var result = jQuery.parseJSON(data.d);
        if (result.Table3.length > 0) {
            var sty_hide = " style='display:none;'", sty_links = " style = 'cursor:pointer;'", sty_date = " style='width:100px;'";
            removeTableRow('grdNADDetails');
            if ($("#hdnFlag").val() != "") {
                var i = $("#hdnFlag").val();
                $('#trr_' + i).remove();
                $("#hdnFlag").val('');
            }
            var AccountTypeID = '';
            var n = $('#grdNADDetails').children().find('tr').length;
            for (var i = 0; i < result.Table3.length; i++) {

                if (result.Table3[i].Type == 'NM') {
                    AccountTypeID = 1;

                }
                else {
                    AccountTypeID = 2;
                }
                var j = i + 1;
                $('#grdNADDetails').append("<tr id='trr_" + j + "'>"
                + "<td> <span id='txt_NomiNeeName_" + j + "'>" + result.Table3[i].Name + "</span></td>"
                + "<td><span id='txt_NADD1_" + j + "'>" + result.Table3[i].Address1 + "</span></td>"
                + "<td><span id='txt_NADD2_" + j + "'>" + RemmoveUndifined(result.Table3[i].Address2) + "</span></td>"
                + "<td><span id='txt_NADD3_" + j + "'>" + RemmoveUndifined(result.Table3[i].Address3) + "</span></td>"
                + "<td> <span id='txt_NCountry_" + j + "'>" + result.Table3[i].CountryName + "</span></td>"
                + "<td><span id='txt_NZone_" + j + "'>" + result.Table3[i].ZoneName + "</span></td>"
                + "<td><span id='txt_NState_" + j + "'>" + result.Table3[i].StateName + "</span></td>"
                + "<td><span id='txt_NCity_" + j + "'>" + result.Table3[i].CityName + "</span></td>"
                + "<td> <span id='txt_NPinCode_" + j + "'>" + result.Table3[i].PinCode + "</span></td>"
                + "<td><span id='txt_NTelephone_" + j + "'>" + RemmoveUndifined(result.Table3[i].TeleohoneNo) + "</span></td>"
                + "<td><span id='txt_NMobileNo_" + j + "'>" + result.Table3[i].MobileNo + "</span></td>"
                + "<td><span id='txt_NEmailId_" + j + "'>" + result.Table3[i].EMailID + "</span></td>"
                + "<td><span id='txt_NFaxNo_" + j + "'>" + RemmoveUndifined(result.Table3[i].FaxNo) + "</span></td>"
                + "<td><span id='txtGuardian_" + j + "'>" + RemmoveUndifined(result.Table3[i].Nomini_Guardian) + "</span></td>"
                + "<td><span id='txtGrdnPAN_" + j + "'>" + RemmoveUndifined(result.Table3[i].Nomini_GuardianPAn) + "</span></td>"
                + "<td><span id='txtGrdndob_" + j + "'>" + RemmoveUndifined(result.Table3[i].Nomini_GuardianDOB) + "</span></td>"
                + "<td><img onclick='return EdirRisk(this);'  src='../Images/edit.png' titljuly2015$e='Edit' id='img_Createrisk_" + i + "'/>"
                + "<td><a" + sty_links + " id='a_Edit_" + j + "' onclick='DeleteRiskRow(this);'><img id='img_Delete_" + i + "' alt='Delete' title='Delete' src='../Images/delete.jpg' /></a></td>"
                + "<td" + sty_hide + " id='td_" + j + "'>" + j + "</td>"
                + "<td" + sty_hide + " id='tde_" + j + "'>" + j + "</td>"
                + "<td " + sty_hide + "><span id='txt_NCountryID_" + j + "'>" + result.Table3[i].Country + "</span></td>"
                + "<td " + sty_hide + "><span id='txt_NZoneID_" + j + "'>" + result.Table3[i].Zone + "</span></td>"
                + "<td " + sty_hide + "><span id='txt_NStateID_" + j + "'>" + result.Table3[i].State + "</span></td>"
                + "<td " + sty_hide + "><span id='txt_NCityID_" + j + "'>" + result.Table3[i].City + "</span></td>"
                + "<td " + sty_hide + "><span id='txt_AccountType_" + j + "'>" + result.Table3[i].Type + "</span></td>"
                + "<td " + sty_hide + "><span id='txt_AccountTypeID_" + j + "'>" + AccountTypeID + "</span></td>"
                + "<td " + sty_hide + "><span id='txt_PAN_" + j + "'>" + result.Table3[i].PAN + "</span></td>"
                + "</tr>");
            }
            ClearRiskTextBoxes();
            RiskCancel();

        }
    } catch (e) {
        ErrorLog(e); alert(ErrorMsg());
    }
}
function nodatafound(grdName, no) {
    removeTableRow(grdName);
    $('#' + grdName).append("<tr id=trid>"
            + "<td style='text-align:center;font-weight:bold;' colspan='" + no + "'>No data found</td>"
            + "</tr>");
}
function ClearRiskTextBoxes() {
    try {
        $("#ddlAccountType").val(0);
        $("#ddlNomineeName").empty().append('<option selected="selected" value="0">No DataFound<option</option>');
        $("#txtNADD1").val('');
        $("#txtNADD2").val('');
        $("#txtNADD3").val('');
        $("#ddlNCountry").val(0);
        $("#ddlNZone").empty().append('<option selected="selected" value="0">No DataFound<option</option>');
        $("#ddlNState").empty().append('<option selected="selected" value="0">No DataFound<option</option>');
        $("#ddlNCity").empty().append('<option selected="selected" value="0">No DataFound<option</option>');
        $("#txtNPinCode").val('');
        $("#txtNTelePhone").val('');
        $("#txtMobNo").val('');
        $("#txtNEmailId").val('');
        $("#txtNFaxNo").val('');
        $("#txtGuardian").val('');
        $("#txtGrdnPAN").val('');
        $("#txtgrdndob").val('');

    } catch (e) {
        ErrorLog(e); alert(ErrorMsg());
    }
}


function RiskCancel() { $("divGridRisk").slideDown("slow"); $("#divRisk").slideUp("slow"); ClearRiskTextBoxes(); return false; }


function EdirRisk(Ctrl) {
    try {

        CreateRiskNew()
        var i = $(Ctrl).parent().parent().children().get(16).innerHTML;
        var j = $(Ctrl).parent().parent().children().get(17).innerText;
        //$("#ddlNomineeName").val($(Ctrl).parent().parent().children().get(0).innerText);
        $("#ddlAccountType").val($(Ctrl).parent().parent().children().get(25).innerText);
        if ($(Ctrl).parent().parent().children().get(25).innerText == 1) $('#divgrdn').show(); else $('#divgrdn').hide();
        BindNominees($(Ctrl).parent().parent().children().get(25).innerText);
        var Naominee = $(Ctrl).parent().parent().children().get(0).innerText.trim();
        //$("#ddlNomineeName").val(Naominee);
        // $("#ddlNomineeName").find('option:selected').text(Naominee);
        $("#ddlNomineeName option[value='" + Naominee + "']").attr('selected', 'selected');
        $("#txtNADD1").val($(Ctrl).parent().parent().children().get(1).innerText);
        $("#txtNADD2").val($(Ctrl).parent().parent().children().get(2).innerText);
        $("#txtNADD3").val($(Ctrl).parent().parent().children().get(3).innerText);
        $("#ddlNCountry").val($(Ctrl).parent().parent().children().get(20).innerText);
        NomineeZoneFill($(Ctrl).parent().parent().children().get(20).innerText);
        $("#ddlNZone").val($(Ctrl).parent().parent().children().get(21).innerText);
        NomineeStateFill($(Ctrl).parent().parent().children().get(21).innerText)
        $("#ddlNState").val($(Ctrl).parent().parent().children().get(22).innerText);
        NomineeCityFill($(Ctrl).parent().parent().children().get(22).innerText);
        $("#ddlNCity").val($(Ctrl).parent().parent().children().get(23).innerText);
        $("#txtNPinCode").val($(Ctrl).parent().parent().children().get(8).innerText);
        $("#txtNTelePhone").val($(Ctrl).parent().parent().children().get(9).innerText);
        $("#txtMobNo").val($(Ctrl).parent().parent().children().get(10).innerText);
        $("#txtNEmailId").val($(Ctrl).parent().parent().children().get(11).innerText);
        $("#txtNFaxNo").val($(Ctrl).parent().parent().children().get(12).innerText);
        $('#hdnNPAN').val($(Ctrl).parent().parent().children().get(26).innerText);
        $("#txtGuardian").val($(Ctrl).parent().parent().children().get(13).innerText);
        $("#txtGrdnPAN").val($(Ctrl).parent().parent().children().get(14).innerText);
        $("#txtgrdndob").val($(Ctrl).parent().parent().children().get(15).innerText);
        $("#hdnFlag").val(i);
        $("#hdnEditID").val(j);

    } catch (e) {
        ErrorLog(e); alert(ErrorMsg());
    }
}

function CreateRiskNew() { $("divGridRisk").slideUp("slow"); $("#divRisk").slideDown("slow"); $("#hdnEditID").val(''); $("#hdnFlag").val(''); ClearRiskTextBoxes(); }
function DeleteRiskRow(Ctrl) {
    try {        
        var x = Ctrl.id;        
        var i = x.match(/\d+$/);
         $('#trr_' + i).remove();

    } catch (e) {
        ErrorLog(e); alert(ErrorMsg());
    }
}


function BindNominees(inputval) {

    if (parseInt(inputval) > 0) {
        if (parseInt(inputval) == 1) {
            $('#divgrdn').show();
            var gv = $('#grdNomineeDtls');
            var SlNo = $('#grdNomineeDtls').children().find('tr').length;
            if (parseInt(SlNo) > 1) {
                $('#ddlNomineeName').empty().append('<option selected="selected" value="0">Please Select<option</option>');
                for (var i = 1; i < SlNo; i++) {
                    var Naminee = $('#NomineeName_' + i).val()
                    $('#ddlNomineeName').append($("<option></option>").val(Naminee).html(Naminee));
                }
            }
            else {
                $('#ddlNomineeName').empty().append('<option selected="selected" value="0">No DataFound<option</option>');
            }
        }
        else if (parseInt(inputval) == 2) {
            $('#divgrdn').hide();
            var gv = $('#grdJointHolderDtls');
            var SlNo = $('#grdJointHolderDtls').children().find('tr').length;
            if (parseInt(SlNo) > 1) {
                $('#ddlNomineeName').empty().append('<option selected="selected" value="0">Please Select<option</option>');
                for (var i = 1; i < SlNo; i++) {
                    var Naminee = $('#JHName_' + i).val()
                    $('#ddlNomineeName').append($("<option></option>").val(Naminee).html(Naminee));
                }
            }
            else {
                $('#divgrdn').hide();
                $('#ddlNomineeName').empty().append('<option selected="selected" value="0">No DataFound<option</option>');
            }
        }
        
    }
    else $('#divgrdn').hide();
    return false;
}

function BindPANNNo() {

    var ddlAccountType = $('#ddlAccountType').val();

    var inputval = $('#ddlNomineeName').find('option:selected').index();;
    if (parseInt(inputval) > 0) {
        if (parseInt(ddlAccountType) == 1) {
            var gv = $('#grdNomineeDtls');
            var SlNo = $('#grdNomineeDtls').children().find('tr').length;
            if (parseInt(SlNo) > 1) {

                var NomineeName = $('#ddlNomineeName').val();
                for (var i = 1; i < SlNo; i++) {
                    var Naminee = $('#NomineeName_' + i).val()
                    if (Naminee == NomineeName) {
                        $('#hdnNPAN').val($('#NomineePAN_' + i).val());
                        //alert($('#hdnNPAN').val());
                    }

                }
            }
            else {
                $('#ddlNomineeName').empty().append('<option selected="selected" value="0">No DataFound<option</option>');
            }
        }
        else if (parseInt(ddlAccountType) == 2) {
            var gv = $('#grdJointHolderDtls');
            var SlNo = $('#grdJointHolderDtls').children().find('tr').length;
            if (parseInt(SlNo) > 1) {
                var JHName = $('#ddlNomineeName').val();
                for (var i = 1; i < SlNo; i++) {
                    var Naminee = $('#JHName_' + i).val();
                    if (JHName == Naminee) {
                        $('#hdnNPAN').val($('#JHPAN_' + i).val());
                    }
                }
            }
            else {
                $('#ddlNomineeName').empty().append('<option selected="selected" value="0">No DataFound<option</option>');
            }
        }
        validPAN();
    }
   

    return false;

}

function VlaidAddDtls() {
    var flag = true;

    var ddlAccountType = document.getElementById("ddlAccountType").selectedIndex
    if (ddlAccountType == '0') {
        var $element = $('#ddlAccountType');
        $element.data("title", "").removeClass("error").tooltip("destroy");
        $element.tooltip("destroy").data("title", 'Please select Account Type').addClass("error").tooltip();
        flag = false;
    }
    else {
        var $element = $('#ddlAccountType');
        $element.data("title", "").removeClass("error").tooltip("destroy");
    }

    var ddlNomineeName = document.getElementById("ddlNomineeName").selectedIndex
    if (ddlNomineeName == '0') {
        var $element = $('#ddlNomineeName');
        $element.data("title", "").removeClass("error").tooltip("destroy");
        $element.tooltip("destroy").data("title", 'Please Select Nominee Name').addClass("error").tooltip();
        flag = false;
    }
    else {
        var $element = $('#ddlNomineeName');
        $element.data("title", "").removeClass("error").tooltip("destroy");
    }
    var txtNADD1 = $('#txtNADD1').val();
    if (txtNADD1 == '') {
        var $element = $('#txtNADD1');
        $element.data("title", "").removeClass("error").tooltip("destroy");
        $element.tooltip("destroy").data("title", 'Please Enter Address 1').addClass("error").tooltip();
        flag = false;
    }
    else {
        var $element = $('#txtNADD1');
        $element.data("title", "").removeClass("error").tooltip("destroy");
    }

    var ddlNCountry = document.getElementById("ddlNCountry").selectedIndex
    if (ddlNCountry == '0') {
        var $element = $('#ddlNCountry');
        $element.data("title", "").removeClass("error").tooltip("destroy");
        $element.tooltip("destroy").data("title", 'Please Select Country').addClass("error").tooltip();
        flag = false;
    }
    else {
        var $element = $('#ddlNCountry');
        $element.data("title", "").removeClass("error").tooltip("destroy");
    }

    var ddlNZone = document.getElementById("ddlNZone").selectedIndex
    if (ddlNZone == '0') {
        var $element = $('#ddlNZone');
        $element.data("title", "").removeClass("error").tooltip("destroy");
        $element.tooltip("destroy").data("title", 'Please Select Zone').addClass("error").tooltip();
        flag = false;
    }
    else {
        var $element = $('#ddlNZone');
        $element.data("title", "").removeClass("error").tooltip("destroy");
    }

    var ddlNState = document.getElementById("ddlNState").selectedIndex
    if (ddlNState == '0') {
        var $element = $('#ddlNState');
        $element.data("title", "").removeClass("error").tooltip("destroy");
        $element.tooltip("destroy").data("title", 'Please Select State').addClass("error").tooltip();
        flag = false;
    }
    else {
        var $element = $('#ddlNState');
        $element.data("title", "").removeClass("error").tooltip("destroy");
    }

    var ddlNCity = document.getElementById("ddlNCity").selectedIndex
    if (ddlNCity == '0') {
        var $element = $('#ddlNCity');
        $element.data("title", "").removeClass("error").tooltip("destroy");
        $element.tooltip("destroy").data("title", 'Please Select City').addClass("error").tooltip();
        flag = false;
    }
    else {
        var $element = $('#ddlNCity');
        $element.data("title", "").removeClass("error").tooltip("destroy");
    }
    var txtNPinCode = $('#txtNPinCode').val();
    if (txtNPinCode == '') {
        var $element = $('#txtNPinCode');
        $element.data("title", "").removeClass("error").tooltip("destroy");
        $element.tooltip("destroy").data("title", 'Please Enter Pincode').addClass("error").tooltip();
        flag = false;
    }
    else {
        var $element = $('#txtNPinCode');
        $element.data("title", "").removeClass("error").tooltip("destroy");
    }

    var txtMobNo = $('#txtMobNo').val();
    if (txtMobNo == '') {
        var $element = $('#txtMobNo');
        $element.data("title", "").removeClass("error").tooltip("destroy");
        $element.tooltip("destroy").data("title", 'Please Enter Mobile No').addClass("error").tooltip();
        flag = false;
    }
    else {
        var $element = $('#txtMobNo');
        $element.data("title", "").removeClass("error").tooltip("destroy");
    }

    var txtNEmailId = $('#txtNEmailId').val();
    if (txtNEmailId == '') {
        var $element = $('#txtNEmailId');
        $element.data("title", "").removeClass("error").tooltip("destroy");
        $element.tooltip("destroy").data("title", 'Please Enter Email-Id').addClass("error").tooltip();
        flag = false;
    }
    else {
        var $element = $('#txtNEmailId');
        $element.data("title", "").removeClass("error").tooltip("destroy");
    }

    return flag;
}

$(function () {
    $("#txtNTelePhone").attr("maxlength", "15").numeric({ allow: "0123456789" });
    $("#txtMobNo").attr("maxlength", "10").numeric({ allow: "0123456789" });
    $("#txtNFaxNo").attr("maxlength", "12").numeric({ allow: "0123456789." });


});

function validPAN() {
    if ($("#hdnFlag").val() == "") {
        var flag = true;
        var SlNo = $('#grdNADDetails').children().find('tr').length;
        if (parseInt(SlNo) >= 0) {
            var PAN = $('#hdnNPAN').val();

            if (PAN != "") {
                for (var i = 1; i < SlNo; i++) {
                    var PAN1 = $('#txt_PAN_' + i).html();
                    if (PAN == PAN1) {
                        //document.getElementById("#ddlNomineeName").selectedIndex = 0;
                        $("select#ddlNomineeName")[0].selectedIndex = 0;
                        alert('Nominee is Already exists');
                        flag = false;
                        return false;
                    }
                    else {
                        flag = true;
                    }

                }
            }
        }
    }

}

function GetLocationDetails(val) {
    try {
        //debugger;
        if (val != "") {
            var PinCode = val
            $.ajax({
                type: "POST",
                async: false,
                contentType: "application/json; charset=utf-8",
                url: "../Masters/ClientReg.aspx/GetLocationDetails",
                data: "{PinCode:'" + PinCode + "'}",
                dataType: "json",
                success: function (data) {
                    ClearCtrl();
                    if (data != "") {
                        //debugger;
                        var result = jQuery.parseJSON(data.d);
                        if (result != null && result.length > 0) {
                            $('#txtNADD1').val(result[0].LocationName);
                            $('#txtNADD2').val(result[0].LocationDesc);
                            $('#ddlNCountry').val(result[0].Country_Code);
                            NomineeZoneFill(result[0].Country_Code);
                            $('#ddlNZone').val(result[0].Zone);
                            NomineeStateFill(result[0].Zone);
                            $('#ddlNState').val(result[0].State);
                            NomineeCityFill(result[0].State);
                            $('#ddlNCity').val(result[0].CityID);

                        }
                    }


                }

            })
        }
        else {
            ClearCtrl();
        }
    } catch (e) {
        ErrorLog(e);
        alert(ErrorMsg());
    }
}

function ClearCtrl() {
    $("#txtNADD1").val('');
    $("#txtNADD2").val('');
    $("#txtNADD3").val('');
    $("#ddlNCountry").val(0);
    $("#ddlNZone").empty().append('<option selected="selected" value="0">No DataFound<option</option>');
    $("#ddlNState").empty().append('<option selected="selected" value="0">No DataFound<option</option>');
    $("#ddlNCity").empty().append('<option selected="selected" value="0">No DataFound<option</option>');
}
//END