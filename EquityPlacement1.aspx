<%@ Page Title="" Language="VB" MasterPageFile="~/MasterPages/PWMMaster.master" AutoEventWireup="false" CodeFile="EquityPlacement1.aspx.vb" EnableEventValidation="false"  Inherits="Masters_EquityPlacement" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" Runat="Server">
     <script type="text/javascript">
         $(document).ready(function () {
             var jsondata = " SortBy: '',SortByColumnName : '',ID:'0',Record_Type:'L',VerNo:0";
             $('#hdnfld_DMode').val('L');
             OnGettingDataAndBind<%=Me.uctlpage1.ClientID%>("FillGrid", jsondata);

             });
             function Pending() {
                 Init<%=Me.uctlpage1.ClientID%>();
             var jsondata = " SortBy: '',SortByColumnName : '',PageNumber: '1',PageSize: '10',ID:'0',Record_Type:'P',VerNo:0";
             $('#hdnfld_DMode').val('P');
             OnGettingDataAndBind<%=Me.uctlpage1.ClientID%>("FillGrid", jsondata);
         }
         function History() {
             Init<%=Me.uctlpage1.ClientID%>();
             var jsondata = " SortBy: '',SortByColumnName : '',PageNumber: '1',PageSize: '10',ID:'0',Record_Type:'H',VerNo:0";
             $('#hdnfld_DMode').val('H');
             OnGettingDataAndBind<%=Me.uctlpage1.ClientID%>("FillGrid", jsondata);
         }
         function Live() {
             Init<%=Me.uctlpage1.ClientID%>();
             var jsondata = " SortBy: '',SortByColumnName : '',PageNumber: '1',PageSize: '10',ID:'0',Record_Type:'L',VerNo:0";
             $('#hdnfld_DMode').val('L');
             OnGettingDataAndBind<%=Me.uctlpage1.ClientID%>("FillGrid", jsondata);
         }
         var myVar = setInterval(function () { Live() }, 30000);
   </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">
    <div class="h1">
        <div id="pnl">
            <div class="lh1">
                <a id="a_New" onclick="New(this);">
                    <img alt="New" title="New" src="../Images/add_record.png" style="height: 16px; width: 17px;" />
                </a>
                <a id="a_Live" onclick="Live();">
                    <img alt="Live" title="Live" src="../Images/Live.png" style="height: 16px; width: 17px;" />
                </a>
                <a id="a1" onclick="Pending();">
                    <img alt="History" title="Pending" src="../Images/Pending.png" style="height: 16px; width: 17px;" />
                </a>
                <a id="a_History" onclick="History();">
                    <img alt="History" title="History" src="../Images/History.png" style="height: 16px; width: 17px;" />
                </a>
            </div>
            <div class="rh1">
                <asp:Label runat="server" ID="lbl_SearchBy" Text="Search By"></asp:Label>
                <asp:DropDownList runat="server" ID="ddl_SearchBy">
                    <asp:ListItem Value="0">Please select</asp:ListItem>
                    <asp:ListItem Value="1">Item1</asp:ListItem>
                    <asp:ListItem Value="2">Item2</asp:ListItem>
                </asp:DropDownList>
            </div>
        </div>
    </div>
     <div id="div_Grid">
        <asp:GridView runat="server" ID="gv_EquRequisition" AutoGenerateColumns="false" AllowPaging="false"  GridLines="None" CssClass="mGrid" ClientIDMode="Static">
            <Columns>
                <asp:BoundField HeaderText="AMC Code" DataField="AMC_Code" />
                <asp:BoundField HeaderText="Requisition No" DataField="Transaction_ID" />
                <asp:BoundField HeaderText="Account No" DataField="Account_No" />
                <asp:BoundField HeaderText="Quantity" DataField="Req_Qty" />
                <asp:BoundField HeaderText="Status" DataField="Request_Status" />
                <asp:BoundField HeaderText="Record Type" DataField="Record_Type" />
                <asp:BoundField HeaderText="VerNo" DataField="VerNo" />
                <asp:BoundField HeaderText="" DataField="Edit" />
                <asp:BoundField HeaderText="" DataField="Reverse" />
                <asp:BoundField HeaderText="" DataField="View" />
            </Columns>
        </asp:GridView>
        <uctlPaging:paging runat="server" ID="uctlpage1" ServiceURL="../Masters/EquityRequisition.aspx/GetEquityRequisitionList" />
    </div>
    <div id="div_Fields" style="display: none;" >
        <div class="divrow">
            <div class="divcell_left">
                <div class="divcell"><asp:Label ID="lblNode" ClientIDMode="Static" runat="server" Text="Equity Requisition : "></asp:Label></div>
                <div class="divcell"></div>
            </div>
            <div class="divcell_right">
                <div class="divcell"></div>
                <div class="divcell"></div>
            </div>
        </div>
        <div class="divrow">
            <div class="divcell_left">
                <div class="divcell"><asp:Label ID="lblTransaction" ClientIDMode="Static" runat="server" Text="Transaction"></asp:Label></div>
                <div class="divcell">
                    <asp:RadioButton ID="RdbBuy" runat="server" ClientIDMode="Static" Text="Buy" Checked="true" GroupName="trans"/>
                    <asp:RadioButton ID="RdbSale" runat="server" ClientIDMode="Static" Text="Sell"  GroupName="trans"/>
                    <asp:HiddenField ID="HdnTransaction" runat="server" Value="1"/>
                </div>
            </div>
            <div class="divcell_right">
                <div class="divcell"><asp:Label ID="lblValueDate" ClientIDMode="Static" runat="server" Text="Value Date"></asp:Label></div>
                <div class="divcell">
                    <asp:TextBox ID="Txt_ValueDT" CssClass="TextCls" runat="server" ClientIDMode="Static" data-rule-required="true" data-msg-required="Please Enter Value Date." MaxLength="10"></asp:TextBox>
                </div>
            </div>
        </div>
        <div class="divrow">
            <div class="divcell_left">
                <div class="divcell"><asp:Label ID="lblSecurityType" ClientIDMode="Static" runat="server" Text="Security Type"></asp:Label></div>
                <div class="divcell">
                    <asp:TextBox ID="Txt_SecurityType" CssClass="TextCls" runat="server" ClientIDMode="Static" MaxLength="30"></asp:TextBox>
                    <asp:HiddenField runat="server" ID="hdnSecurityType" ClientIDMode="Static"/>
                    <asp:Button runat="server" ID="BtnSecurityType" ClientIDMode="Static" CssClass="ButtonCls Lookup" OnClientClick="return ShowSecurityType();" />
                </div>
            </div>
            <div class="divcell_right">
                <div class="divcell"><asp:Label ID="lblSecurityCode" ClientIDMode="Static" runat="server" Text="Security Code"></asp:Label></div>
                <div class="divcell">
                    <asp:TextBox ID="Txt_SecurityCode" CssClass="TextCls" runat="server" ClientIDMode="Static" MaxLength="30"></asp:TextBox>
                    <asp:HiddenField runat="server" ID="HdnSecurityCode" ClientIDMode="Static"/>
                    <asp:Button runat="server" ID="btnSecurityCode" ClientIDMode="Static" CssClass="ButtonCls Lookup"  OnClientClick="return ShowSecurityCode();" />
                </div>
            </div>
        </div>
        <div class="divrow">
            <div class="divcell_left">
                <div class="divcell"><asp:Label ID="lblIssuer" ClientIDMode="Static" runat="server" Text="Issuer"></asp:Label></div>
                <div class="divcell">
                    <asp:TextBox ID="Txt_Issuer" CssClass="TextCls" runat="server" ReadOnly="true" ClientIDMode="Static" MaxLength="30"></asp:TextBox>
                </div>
            </div>
            <div class="divcell_right">
                <div class="divcell"><asp:Label ID="lblOrderType" ClientIDMode="Static" runat="server" Text="Order Type"></asp:Label></div>
                <div class="divcell">
                    <asp:DropDownList id="DrpOrderType" runat="server" ClientIDMode="Static" onchange="return CheckOrderType(this.value);"  CssClass="SelectCls" data-rule-required="true" data-msg-required="Please Select Order Type"></asp:DropDownList>
                    <asp:HiddenField ID="HdnDrpOrderType" runat="server" />
                </div>
            </div>
        </div>
        
        <div class="divrow">
            <div class="divcell_left">
                <div class="divcell"><asp:Label ID="lblQty" ClientIDMode="Static" runat="server" Text="Quantity"></asp:Label></div>
                <div class="divcell">
                    <asp:TextBox ID="Txt_Quantity" CssClass="inputText caps TextCls txtaln"  runat="server" ClientIDMode="Static" MaxLength="31"></asp:TextBox>
                </div>
            </div>
            <div class="divcell_right">
                <div class="divcell"><asp:Label ID="lblValidTill" ClientIDMode="Static" runat="server" Text="Valid Till"></asp:Label></div>
                <div class="divcell">
                     <asp:TextBox ID="Txt_ValidTillDt"  CssClass="TextCls" runat="server" ClientIDMode="Static" MaxLength="10"></asp:TextBox>
                </div>
            </div>
        </div>
         
        <div class="divrow">
            <div class="divcell_left">
                <div class="divcell"><asp:Label ID="lblLimit" ClientIDMode="Static" runat="server" Text="Limit"></asp:Label></div>
                <div class="divcell">
                    <asp:DropDownList ID="DrpLimit" runat="server" ClientIDMode="Static" onchange="return CheckLimit(this.value);"  CssClass="SelectCls" data-rule-min="1" data-msg-min="Please Select Limit"></asp:DropDownList>
                    <asp:HiddenField ID="HdnLimit" runat="server" />
                </div>
            </div>
            <div class="divcell_right">
                <div class="divcell"><asp:Label ID="lblBookProfit" ClientIDMode="Static" runat="server" Text="BookProfit / Stop Loss"></asp:Label></div>
                <div class="divcell">
                    <asp:DropDownList ID="DrpBookProfit" runat="server" ClientIDMode="Static"  CssClass="SelectCls" data-rule-min="1" data-msg-min="Please Select BookProfit / Stop Loss"></asp:DropDownList>
                    <asp:HiddenField ID="HdnBookProfit" runat="server" />
                </div>
            </div>
        </div>
        <div class="divrow">
            <div class="divcell_left">
                <div class="divcell"><asp:Label ID="lblPrice" ClientIDMode="Static" runat="server" Text="Price"></asp:Label></div>
                <div class="divcell">
                    <asp:TextBox ID="Txt_Price" CssClass="inputText caps TextCls txtaln" runat="server" ClientIDMode="Static" MaxLength="31"></asp:TextBox>
                </div>
            </div>
            <div class="divcell_right">
                <div class="divcell"><asp:Label ID="lblPriceFrom" ClientIDMode="Static" runat="server" Text="Price From"></asp:Label></div>
                <div class="divcell">
                    <table cellpadding="0" cellspacing="0">
                        <tr>
                            <td> <asp:TextBox ID="Txt_PriceFrom" CssClass="inputText caps TextCls txtaln" runat="server" ClientIDMode="Static" MaxLength="31" Width="65px"></asp:TextBox></td>
                            <td> To   </td>
                            <td><asp:TextBox ID="Txt_PriceTo" CssClass="inputText caps TextCls txtaln" runat="server" ClientIDMode="Static" MaxLength="31" Width="65px"></asp:TextBox></td>
                        </tr>
                    </table>
                   
                    
                </div>
            </div>
        </div>
        <div class="divrow">
            <div class="divcell_left">
                <div class="divcell"><asp:Label ID="LblIntertion" ClientIDMode="Static" runat="server" Text="Intertion"></asp:Label></div>
                <div class="divcell">
                    <asp:DropDownList ID="DrpIntertion" runat="server" ClientIDMode="Static"  CssClass="SelectCls" data-rule-min="1" data-msg-min="Please Select Intertion" ></asp:DropDownList>
                    <asp:HiddenField ID="HdnIntertion" runat="server" />
                </div>
            </div>
            <div class="divcell_right">
                <div class="divcell"><asp:Label ID="lblDeliveryMode" ClientIDMode="Static" runat="server" Text="Delivery Mode"></asp:Label></div>
                <div class="divcell">
                    <asp:DropDownList ID="DrpDeliveryMode" runat="server" ClientIDMode="Static"  CssClass="SelectCls" data-rule-min="1" data-msg-min="Please Select Delivery Mode"></asp:DropDownList>
                    <asp:HiddenField ID="HdnDeliveryMode" runat="server" />
                </div>
            </div>
        </div>
        <div class="divrow">
            <div class="divcell_left">
                <div class="divcell">
                    <asp:Label ID="lblRemarks" ClientIDMode="Static" runat="server" Text="Remarks"></asp:Label>
                </div>
                <div class="divcell">
                    <asp:TextBox ID="Txt_Remarks" runat="server" ClientIDMode="Static" CssClass="TextCls" data-rule-required="true" data-msg-required="Please enter Remarks"></asp:TextBox>
                </div>
            </div>
            <div class="divcell_right">
                <div class="divcell"></div><div class="divcell"></div>
            </div>
        </div>
        <div>
            <div class="h1">
                <div id="Div1">
                    <div class="lh1">
                        <span class="leftH"></span>
                        <asp:LinkButton ID="ui_lnkadd" runat="server" CausesValidation="false" ClientIDMode="Static" OnClientClick="return BindChMrg();" TabIndex="3">
                            <img  src="../Images/add_record.png" style ="border :0px;border-style:none;" />
                        </asp:LinkButton>
                    </div>
                </div>
            </div>
            <div style="overflow-x: auto; width: 100%">
                <asp:GridView GridLines="None" EmptyDataText="No Data" AutoGenerateColumns="false" ClientIDMode="Static"
                    Width="100%" CssClass="mGrid" ID="ui_grdinner" Style="float: left;" runat="server" >
                    <Columns>
                        <asp:BoundField HeaderText="Account No" />
                        <asp:BoundField HeaderText="Client Name" />
                        <asp:BoundField HeaderText="POA / Executionary" />
                        <asp:BoundField HeaderText="Quantity" />
                        <asp:BoundField HeaderText="" DataField="Delete" />
                    </Columns>
                </asp:GridView>
            </div>
        </div>
         <div class="divrow">
            <div class="divcell_left">
                <div class="divcell">
                </div>
                <div class="divcell">
                </div>
            </div>
            <div class="divcell_right">
                <div class="divcell">
                </div>
                <div class="divcell">
                </div>
            </div>
        </div>
        <div class="divrow">
            <div class="divcell_left">
                <div class="divcell">
                </div>
                <div class="divcell">
                </div>
            </div>
            <div class="divcell_right">
                <div class="divcell">
                    <asp:Button runat="server" ID="btn_Save" ClientIDMode="Static" CssClass="ButtonCls" Text="Save" OnClientClick="return initDataU();" />
                    <asp:Button runat="server" ID="btn_Update" ClientIDMode="Static" CssClass="ButtonCls" Text="Update" OnClientClick="return initDataU();"/>
                    <asp:Button runat="server" ID="btn_Reverse" ClientIDMode="Static" CssClass="ButtonCls" Text="Reverse" OnClientClick="return initDataU();" />
                    <asp:Button runat="server" ID="btn_Cancel" ClientIDMode="Static" CssClass="ButtonCls" Text="Cancel" OnClientClick="HideFields(this);return false;" />
                </div>
            </div>
        </div>
        <div id="div_HiddenFields">
            <asp:HiddenField runat="server" ID="hdnfld_PkId" ClientIDMode="Static" />
            <asp:HiddenField runat="server" ID="hdndommy" ClientIDMode="Static" />
            <asp:HiddenField runat="server" ID="hdnfld_VerNo" Value="0" ClientIDMode="Static" />
            <asp:HiddenField runat="server" ID="hdnfld_RecType" ClientIDMode="Static" />
            <asp:HiddenField runat="server" ID="hidden_childdata" ClientIDMode="Static" />
            <asp:HiddenField runat="server" ID="hdnfld_DMode" ClientIDMode="Static" />
        </div>
    </div>

    

      <head>
         <script type="text/javascript" src="../WebPageJScripts/EquityRequisition.js"></script>
         <script src="../Scripts/Comman.js" type="text/javascript"></script>
          <script type="text/javascript" src="../WebPageJScripts/DynamicModalpopDialog.js"></script>
    </head>
</asp:Content>

