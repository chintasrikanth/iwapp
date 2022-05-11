<%@ Control Language="VB" AutoEventWireup="false" CodeFile="ClientCall.ascx.vb" Inherits="CommonUserControls_ClientCall" %>
<script type="text/javascript">
    $(document).ready(function () {
        GetWealthManagers();
        GetLastContated();

          });

    function GetLastContated() {
       
        $.ajax({
            type: "POST",
            async: false,
            contentType: "application/json; charset=utf-8",
            url: "../Masters/Callupdate.aspx/Getddlcall",
            data: "{Param: 'last contacted'}",
            dataType: "json",
            success: function (data) {
                var tdata = jQuery.parseJSON(data.d);
                
                if (tdata != null && tdata.length > 0) {
                    $('#ddllstcontacted').append($("<option></option>").val('0').html());
                    
                    $.each(tdata, function () {
                       
                        $('#ddllstcontacted').append($("<option></option>").val(this['Key']).html(this['Value']));
                    });
                }
            },
            error: function (result) {
                alert('data not found');
            }
        });
    }

    function GetWealthManagers() {
        
                $.ajax({          
            type: "POST",
            async: false,
            contentType: "application/json; charset=utf-8",
            url: "../CommonWebServices/MasterBindings.aspx/GetWealthManagers",
            data: "{ UserID :'" + $('#hdnUserID').val() + "' , Company_Code :'" + $('#hdnCompanyID').val() + "'}",
            dataType: "json",
            success: function (data) {
                var tdata = jQuery.parseJSON(data.d);
                if (tdata != null && tdata.length > 0) {
                    $('#ddlrm').append($("<option></option>").val('0').html('Please select'));
                    $.each(tdata, function () {
                        $('#ddlrm').append($("<option></option>").val(this['ID']).html(this['Name']));
                    });
                }
            },
            error: function (result) {
                alert('data not found');
            }
        });
    }

    function SelectRM(rmid) {

        $('#hidden_rmid').val(rmid);
        return false;
    }
    function SelectLC(ddlstctd) {

        $('#hdnCalllstcontacted').val(ddlstctd);
        return false;
    }
    function ValidateDataBeforeSearch() {
        var flag = true;

        var RMID = $('#ddlrm').val();
        if (RMID == '' || RMID == '0') {
            var $element = $('#ddlrm');
            $element.data("title", "").removeClass("error").tooltip("destroy");
            $element.tooltip("destroy").data("title", 'Please select RM').addClass("error").tooltip();
            flag = false;
        }
        else {
            var $element = $('#ddlrm');
            $element.data("title", "").removeClass("error").tooltip("destroy");
        }


        var ddlctID = $('#ddlct').val();
        if (ddlctID == '' || ddlctID == '0') {
            var $element = $('#ddlct');
            $element.data("title", "").removeClass("error").tooltip("destroy");
            $element.tooltip("destroy").data("title", 'Please select contact type').addClass("error").tooltip();
            flag = false;
        }
        else {
            var $element = $('#ddlct');
            $element.data("title", "").removeClass("error").tooltip("destroy");
        }

        var ddlosID = $('#ddlos').val();
        if (ddlosID == '' || ddlosID == '0') {
            var $element = $('#ddlos');
            $element.data("title", "").removeClass("error").tooltip("destroy");
            $element.tooltip("destroy").data("title", 'Please select opportunity status').addClass("error").tooltip();
            flag = false;
        }
        else {
            var $element = $('#ddlos');
            $element.data("title", "").removeClass("error").tooltip("destroy");
        }

              return flag;



    }
</script>
<div id="Maindiv">
    <div style="padding: 5px; color: #003366; font-size: 14px; font-weight: bold; background-image: url('../Images/breadcrum-background.gif'); border-image-repeat: repeat;">
        Client/Prospect Search
         
    </div>
    <br />
    <div class="divrow">
        <div class="divcell_left">
            <div class="divcellAMCl">
                <asp:Label runat="server" ID="lblrm" Text="RM Selection" AssociatedControlID="ddlrm"></asp:Label>
            </div>
            <div class="divcellAMCr">
                <asp:DropDownList CssClass="SelectCls" runat="server" ID="ddlrm" ClientIDMode="Static" onchange="return SelectRM(this.value);" data-rule-required="true" data-rule-min="1" data-msg-min="Please select RM.">
                </asp:DropDownList>
                <span class="commonError">*</span>
            </div>
        </div>
        <div class="divcell_right">
            <div class="divcellAMCl">
                <asp:Label runat="server" ID="lblcontacttype" Text="Contact type" AssociatedControlID="ddlct"></asp:Label>
            </div>
            <div class="divcellAMCr">
                <asp:DropDownList CssClass="SelectCls" runat="server" ID="ddlct" ClientIDMode="Static" data-rule-required="true"  data-rule-min="1" data-msg-min="Please select contact type.">
                    <asp:ListItem Text="Select contact type" Value=""></asp:ListItem>
                    <asp:ListItem Text="Client" Value="1"></asp:ListItem>
                    <asp:ListItem Text="Prospects" Value="2"></asp:ListItem>
                </asp:DropDownList>
                <span class="commonError">*</span>
            </div>
        </div>
    </div>
    <div class="divrow">
        <div class="divcell_left">
            <div class="divcellAMCl">
              
                  <asp:Label runat="server" ID="lblSearchcriteria" Text="Search criteria" AssociatedControlID="ddls"></asp:Label>
            </div>
            <div class="divcellAMCr">
               
                 <asp:DropDownList CssClass="SelectCls" runat="server" ID="ddls" ClientIDMode="Static">
                    <asp:ListItem Text="Select search criteria" Value=""></asp:ListItem>
                    <asp:ListItem Text="Full name" Value="1"></asp:ListItem>
                    <asp:ListItem Text="PAN" Value="2"></asp:ListItem>
                    <asp:ListItem Text="Mobile No." Value="3"></asp:ListItem>
                    <asp:ListItem Text="E-Mail ID" Value="4"></asp:ListItem>
                    <asp:ListItem Text="Client code" Value="5"></asp:ListItem>
                </asp:DropDownList>
               
            </div>
        </div>
        <div class="divcell_right">
            <div class="divcellAMCl">
                 <asp:Label runat="server" ID="lblsearchdata" ClientIDMode="Static" Text="Enter search value" AssociatedControlID="txtsearchvalue"></asp:Label>
            </div>
            <div class="divcellAMCr">
                <asp:TextBox runat="server" ID="txtsearchvalue" CssClass="TextCls" ClientIDMode="Static"></asp:TextBox>
            </div>
        </div>
    </div>




    <div class="divrow">
        <div class="divcell_left">
            <div class="divcellAMCl">
             
            </div>
            <div class="divcellAMCr">
               
            </div>
        </div>
        <div class="divcell_right">
            <div class="divcellAMCl">
               
            </div>
            <div class="divcellAMCr">
               
            </div>
        </div>
    </div>
    <div class="divrow">
        <div class="divcell_left">
            <div class="divcellAMCl">
            </div>
            <div class="divcellAMCr">
            </div>
        </div>
        <div class="divcell_right">
            <div class="divcellAMCl">
                <asp:Button runat="server" CssClass="submit" ID="button_search" Text="Search" ClientIDMode="Static" OnClientClick="return myuserctrl_Search(); return false;" />
              
                <asp:Button runat="server" CssClass="reset" ID="button_reset" Text="Reset" OnClientClick="Cancel();return false;" ClientIDMode="Static" />
            </div>
            <div class="divcellAMCr">
            </div>
        </div>
    </div>
    <div id="div_HiddenFields">
        <asp:HiddenField runat="server" ID="hdnClientID" ClientIDMode="Static" />
    </div>
    <br />
  
    <div class="divcell_right">
    </div>

     <div id="div1">
        <asp:HiddenField runat="server" ID="hdnCalllstcontacted" ClientIDMode="Static" />
             <asp:HiddenField runat="server" ID="hdnUserID" ClientIDMode="Static" />
        <asp:HiddenField runat="server" ID="hdnCompanyID" ClientIDMode="Static" />  
    </div>
</div>