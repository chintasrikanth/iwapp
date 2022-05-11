<%@ Page Title="" Language="VB" MasterPageFile="~/MasterPages/PWMMaster.master" AutoEventWireup="false" CodeFile="EquityPlacement.aspx.vb" EnableEventValidation="false"  Inherits="Masters_EquityPlacement" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" Runat="Server">
    <script type="text/javascript">


        //===========================


        function GenerateData() {
            var jsondata = " SortBy: '',SortByColumnName: '',ID:'0',Record_Type:'L',VerNo:0,FrmDT:'" + $("#Txt_FromDT").val() + "',ToDT:'" + $("#Txt_ToDT").val() + "',AccountNo:'" + $("#Txt_AccountNo").val() + "',Status:'" + $("#Txt_Status").val() + "',OrderType:'" + $("#DrpOrdertype").val() + "',TraType:'" + $("#DrpTransactionType").val() + "',Tranid:'',UserID:'" + $('#hdnUserID').val() + "',Company_Code:'" + $('#hdnCompanyID').val() + "',SearchVal:''";
            $('#hdnfld_DMode').val('L');
            OnGettingDataAndBind<%=Me.uctlpage1.ClientID%>("FillGrid", jsondata);
            $('#div_Grid').slideDown('slow');
            return false;
        }

        
        //==============================
        function Live() {
            Init<%=Me.uctlpage1.ClientID%>();
            var jsondata = " SortBy: '',SortByColumnName: '',PageNumber: '1',PageSize: '10',ID:'0',Record_Type:'L',VerNo:0,FrmDT:'',ToDT:'',AccountNo:'',Status:'',OrderType:'',TraType:'',Tranid:'',UserID:'" + $('#hdnUserID').val() + "',Company_Code:'" + $('#hdnCompanyID').val() + "',SearchVal : '" + $('#ui_txtsearch').val() + "'";
             //var jsondata = " SortBy: '',SortByColumnName : '',PageNumber: '1',PageSize: '10',ID:'0',Record_Type:'L',VerNo:0";
             $('#hdnfld_DMode').val('L');
             OnGettingDataAndBind<%=Me.uctlpage1.ClientID%>("FillGrid", jsondata);
        }

        function SortData(SortColumn) {           
            var jsondata = " SortBy: '" + $('#hdnSortOrder').val() + "',SortByColumnName : '" + SortColumn + "',ID:'0',Record_Type:'L',VerNo:0,FrmDT:'" + $("#Txt_FromDT").val() + "',ToDT:'" + $("#Txt_ToDT").val() + "',AccountNo:'" + $("#Txt_AccountNo").val() + "',Status:'" + $("#Txt_Status").val() + "',OrderType:'" + $("#DrpOrdertype").val() + "',TraType:'" + $("#DrpTransactionType").val() + "',Tranid:'',UserID:'" + $('#hdnUserID').val() + "',Company_Code:'" + $('#hdnCompanyID').val() + "',SearchVal :'" + $('#ui_txtsearch').val() + "'";
            OnGettingDataAndBind<%=Me.uctlpage1.ClientID%>("FillGrid", jsondata);
        }
        function SearchGridData(data) {
            Init<%=Me.uctlpage1.ClientID%>();
                //if (isWhitespace(data)) return;
            var jsondata = " SortBy: '',SortByColumnName: '',ID:'0',Record_Type:'L',VerNo:0,FrmDT:'" + $("#Txt_FromDT").val() + "',ToDT:'" + $("#Txt_ToDT").val() + "',AccountNo:'" + $("#Txt_AccountNo").val() + "',Status:'" + $("#Txt_Status").val() + "',OrderType:'" + $("#DrpOrdertype").val() + "',TraType:'" + $("#DrpTransactionType").val() + "',Tranid:'',UserID:'" + $('#hdnUserID').val() + "',Company_Code:'" + $('#hdnCompanyID').val() + "',SearchVal :'" + $('#ui_txtsearch').val() + "'";
                OnGettingDataAndBind<%=Me.uctlpage1.ClientID%>("FillGrid", jsondata);
            }
   </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">
    <div class="h1">
        
        <div id="pnl">
            <div class="lh1">
               <%-- <a id="a_New" onclick="New(this);">
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
                </a>--%>
            </div>
            <div class="rh1">
                <asp:Label runat="server" ID="lbl_SearchBy" Text="Search"></asp:Label>
                <asp:TextBox ClientIDMode="Static" ID="ui_txtsearch" runat="server"  onkeydown="return (event.keyCode!=13);"></asp:TextBox>
                <%--<asp:Button ID="bntsearach" CssClass="hd" CausesValidation="False" runat="server" />--%><%--onblur="return SearchGridData(this.value);"--%>
                 <a ID="ui_btnsearch" onclick ="return SearchGridData(this.value);" style="cursor: pointer">
                    <img id="Img1" src="../Images/search.png" runat="server" alt="Search" title="Search"
                        style="border-style: none;" />
                </a>
            </div>
        </div>
    </div>
    <div id="div_Search" style="padding-left:10px;">
        <table>
            <tr>
                <td>From Date</td>
                <td><asp:TextBox id="Txt_FromDT" runat="server" ClientIDMode="Static" CssClass="TextCls" Width="120px"></asp:TextBox></td>
                <td>To Date</td>
                <td><asp:TextBox id="Txt_ToDT" runat="server" ClientIDMode="Static" CssClass="TextCls" Width="120px"></asp:TextBox></td>
                <td>Account No</td>
                <td>
                    <asp:TextBox id="Txt_AccountNo" runat="server" ClientIDMode="Static" CssClass="TextCls" Width="120px"></asp:TextBox>
                    <asp:HiddenField runat="server" ID="HdnAccountNo" ClientIDMode="Static"/>
                    <asp:Button runat="server" ID="BtnAccountNo" ClientIDMode="Static" CssClass="ButtonCls Lookup"  OnClientClick="return ShowAccount();" />
                </td>
                <td>Status</td>
                <td>
                    <asp:TextBox id="Txt_Status" runat="server" ClientIDMode="Static" CssClass="TextCls" Width="120px"></asp:TextBox>
                    <asp:HiddenField runat="server" ID="HdnStatus" ClientIDMode="Static"/>
                    <asp:Button runat="server" ID="btnStatus" ClientIDMode="Static" CssClass="ButtonCls Lookup"  OnClientClick="return ShowStatus();" />
                </td>
            </tr>
            <tr>
                <td>Order Type</td>
                <td>
                    <asp:DropDownList ID="DrpOrdertype" CssClass="SelectCls"  Width="127px" runat="server" ClientIDMode="Static">
                        <asp:ListItem Text="GTT" Value="GTT"></asp:ListItem>
                        <asp:ListItem Text="GTC" Value="GTC"></asp:ListItem>
                        <asp:ListItem Text="GTD" Value="GTD"></asp:ListItem>
                        <asp:ListItem Text="CD" Value="CD"></asp:ListItem>
                    </asp:DropDownList>
                </td>
                <td>Transaction Type</td>
                <td>
                    <asp:DropDownList ID="DrpTransactionType" CssClass="SelectCls"  Width="127px" runat="server"  ClientIDMode="Static">
                            <asp:ListItem Text="Buy" Value="SMPUR"></asp:ListItem>
                            <asp:ListItem Text="Sell" Value="SMSALE"></asp:ListItem>
                    </asp:DropDownList>
                </td>
                <td>
                    <asp:Button ID="BtnShow" runat="server" Text="Show" CssClass="submit" OnClientClick="return GenerateData();" ClientIDMode="Static" />
                </td>
                <td><asp:Button ID="BtnCancel" runat="server" CssClass="reset" Text="Cancel" OnClientClick="return CancelDataDiv();" ClientIDMode="Static" /></td>
            </tr>
        </table>
    </div>
    <div id="div_Grid" style="display: none;" >
        <asp:GridView runat="server" ID="gv_EquPlacement" AutoGenerateColumns="false" AllowPaging="false"  GridLines="None" CssClass="mGrid" ClientIDMode="Static">
            <Columns>
                 <asp:TemplateField>
                    <HeaderTemplate>
                        <u style="cursor: pointer; text-decoration: none;">
                            <span id="lbl_Status" onclick="GridSorting(this);" itemid="Request_Status">Status</span>
                            <img id="img_Status" src="../Images/down-arrow.png" />
                        </u>
                    </HeaderTemplate>
                </asp:TemplateField>
                 <asp:TemplateField>
                    <HeaderTemplate>
                        <u style="cursor: pointer; text-decoration: none;">
                            <span id="lbl_Value_Date" onclick="GridSorting(this);" itemid="Value_Date">Value Date</span>
                            <img id="img_Value_Date" src="../Images/down-arrow.png" />
                        </u>
                    </HeaderTemplate>
                </asp:TemplateField>
                 <asp:TemplateField>
                    <HeaderTemplate>
                        <u style="cursor: pointer; text-decoration: none;">
                            <span id="lbl_Fund_Name" onclick="GridSorting(this);" itemid="Fund_Name">Name</span>
                            <img id="img_Fund_Name" src="../Images/down-arrow.png" />
                        </u>
                    </HeaderTemplate>
                </asp:TemplateField>
                 <asp:TemplateField>
                    <HeaderTemplate>
                        <u style="cursor: pointer; text-decoration: none;">
                            <span id="lbl_Security_Code" onclick="GridSorting(this);" itemid="Security_Code">Security Code</span>
                            <img id="img_Security_Code" src="../Images/down-arrow.png" />
                        </u>
                    </HeaderTemplate>
                </asp:TemplateField>
                 <asp:TemplateField>
                    <HeaderTemplate>
                        <u style="cursor: pointer; text-decoration: none;">
                            <span id="lbl_BQty" onclick="GridSorting(this);" itemid="Req_Qty">Buy Qtn</span>
                            <img id="img_BQty" src="../Images/down-arrow.png" />
                        </u>
                    </HeaderTemplate>
                </asp:TemplateField>
                 <asp:TemplateField>
                    <HeaderTemplate>
                        <u style="cursor: pointer; text-decoration: none;">
                            <span id="lbl_SQty" onclick="GridSorting(this);" itemid="Sale_Qty">Sale Qtn</span>
                            <img id="img_SQty" src="../Images/down-arrow.png" />
                        </u>
                    </HeaderTemplate>
                </asp:TemplateField>
                 <asp:TemplateField>
                    <HeaderTemplate>
                        <u style="cursor: pointer; text-decoration: none;">
                            <span id="lbl_PQty" onclick="GridSorting(this);" itemid="Sale_Qty">Pending Qtn</span>
                            <img id="img_PQty" src="../Images/down-arrow.png" />
                        </u>
                    </HeaderTemplate>
                </asp:TemplateField>
                 <asp:TemplateField>
                    <HeaderTemplate>
                        <u style="cursor: pointer; text-decoration: none;">
                            <span id="lbl_Price" onclick="GridSorting(this);" itemid="Sale_Qty">Price</span>
                            <img id="img_Price" src="../Images/down-arrow.png" />
                        </u>
                    </HeaderTemplate>
                </asp:TemplateField>
               <%-- <asp:BoundField HeaderText="Status" DataField="Request_Status" />
                <asp:BoundField HeaderText="Value Date" DataField="Value_Date" />
                <asp:BoundField HeaderText="Name" DataField="Fund_Name" />
                <asp:BoundField HeaderText="Security Code" DataField="Security_Code" />
                <asp:BoundField HeaderText="Buy Qtn" DataField="Req_Qty" />
                <asp:BoundField HeaderText="Sale Qtn" DataField="Sale_Qty" />
                <asp:BoundField HeaderText="Pending Qtn" DataField="Pending_Qty" />
                <asp:BoundField HeaderText="Price" DataField="Price" />--%>
                <asp:BoundField HeaderText="" DataField="Placement" />
                <asp:BoundField HeaderText="" DataField="View" />
                <%--<asp:BoundField HeaderText="" DataField="Edit" />
                <asp:BoundField HeaderText="" DataField="Reverse" />--%>
                
            </Columns>
        </asp:GridView>
        <uctlPaging:paging runat="server" ID="uctlpage1" ServiceURL="../Masters/EquityPlacement.aspx/GetEquityRequisitionFilter" />
    </div>
    
       <div id="div_Fields" style="display: none;" >
        <div class="divrow">
            <div class="divcell_left">
                <div class="divcell"><asp:Label ID="lblNode" ClientIDMode="Static" runat="server" Text="Equity Placement : "></asp:Label></div>
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
                    <asp:RadioButton ID="RdbBuy" runat="server" ClientIDMode="Static" Text="" Checked="true" GroupName="trans" Enabled="False" />Buy
                    <asp:RadioButton ID="RdbSale" runat="server" ClientIDMode="Static" Text=""  GroupName="trans" Enabled="False" />Sell
                    <asp:HiddenField ID="HdnTransaction" runat="server" Value="1" ClientIDMode="Static"/>
                </div>
            </div>
            <div class="divcell_right">
                <div class="divcell"><asp:Label ID="lblValueDate" ClientIDMode="Static" runat="server" Text="Order Date"></asp:Label></div>
                <div class="divcell">
                    <asp:TextBox ID="Txt_ValueDT" CssClass="TextCls" runat="server" ClientIDMode="Static" MaxLength="10"></asp:TextBox>
                </div>
            </div>
        </div>
        <div class="divrow">
            <div class="divcell_left">
                <div class="divcell"><asp:Label ID="lblSecurityType" ClientIDMode="Static" runat="server" Text="Security Type"></asp:Label></div>
                <div class="divcell">
                    <asp:TextBox ID="Txt_SecurityType" CssClass="TextCls" runat="server" ReadOnly="true" ClientIDMode="Static" MaxLength="30"></asp:TextBox>
                </div>
            </div>
            <div class="divcell_right">
                <div class="divcell"><asp:Label ID="lblSecurityCode" ClientIDMode="Static" runat="server" Text="Security Code"></asp:Label></div>
                <div class="divcell">
                    <asp:TextBox ID="Txt_SecurityCode" CssClass="TextCls" runat="server" ReadOnly="true" ClientIDMode="Static" MaxLength="30"></asp:TextBox>
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
                    <asp:TextBox ID="TxtOrderType" ReadOnly="true" runat="server" ClientIDMode="Static" CssClass="TextCls"></asp:TextBox>
                </div>
            </div>
        </div>
        
        <div class="divrow">
            <div class="divcell_left">
                <div class="divcell"><asp:Label ID="lblQty" ClientIDMode="Static" runat="server" Text="Quantity"></asp:Label></div>
                <div class="divcell">
                    <asp:TextBox ID="Txt_Quantity" CssClass="inputText caps TextCls txtaln" ReadOnly="true" runat="server" ClientIDMode="Static" MaxLength="31"></asp:TextBox>
                </div>
            </div>
            <div class="divcell_right">
                <div class="divcell"><asp:Label ID="lblValidTill" ClientIDMode="Static" runat="server" Text="Valid Till"></asp:Label></div>
                <div class="divcell">
                     <asp:TextBox ID="Txt_ValidTillDt"  CssClass="TextCls" runat="server" ReadOnly="true" ClientIDMode="Static" MaxLength="10"></asp:TextBox>
                </div>
            </div>
        </div>
         
        <div class="divrow">
            <div class="divcell_left">
                <div class="divcell"><asp:Label ID="lblLimit" ClientIDMode="Static" runat="server" Text="Limit"></asp:Label></div>
                <div class="divcell">
                    <asp:TextBox ID ="TxtLimit" ReadOnly="true" runat="server" ClientIDMode="Static" CssClass="TextCls"></asp:TextBox>
                </div>
            </div>
            <div class="divcell_right">
                <div class="divcell"><asp:Label ID="lblBookProfit" ClientIDMode="Static" runat="server" Text="BookProfit / Stop Loss"></asp:Label></div>
                <div class="divcell">
                    <asp:TextBox ID="TxtBookProfit" ReadOnly="true" runat="server" ClientIDMode="Static" CssClass="TextCls"></asp:TextBox>
                </div>
            </div>
        </div>
        <div class="divrow">
            <div class="divcell_left">
                <div class="divcell"><asp:Label ID="lblPrice" ClientIDMode="Static" runat="server" Text="Price"></asp:Label></div>
                <div class="divcell">
                    <asp:TextBox ID="Txt_Price" ReadOnly="true" CssClass="inputText caps TextCls txtaln" runat="server" ClientIDMode="Static" MaxLength="31"></asp:TextBox>
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
                    <asp:TextBox ID="TxtIntertion" runat="server" ClientIDMode="Static"  CssClass="TextCls"  ReadOnly="true"></asp:TextBox>
                </div>
            </div>
            <div class="divcell_right">
                <div class="divcell"><asp:Label ID="lblDeliveryMode" ClientIDMode="Static" runat="server" Text="Delivery Mode"></asp:Label></div>
                <div class="divcell">
                    <asp:TextBox ID="TxtDeliveryMode" runat="server" ClientIDMode="Static"  CssClass="TextCls"></asp:TextBox>
                </div>
            </div>
        </div>
        <div class="divrow">
            <div class="divcell_left">
                <div class="divcell">
                    <asp:Label ID="lblAccountNo" ClientIDMode="Static" runat="server" Text="Account Name"></asp:Label>
                </div>
                <div class="divcell">
                    <asp:TextBox ID="TxtAccountNo" ReadOnly="true" CssClass="TextCls" ClientIDMode="Static" runat="server" ></asp:TextBox>
                </div>
            </div>
            <div class="divcell_right">
                <div class="divcell">
                    <asp:Label ID="lblRemarks" ClientIDMode="Static" runat="server" Text="Requisition Remarks"></asp:Label>
                </div>
                <div class="divcell">
                    <asp:TextBox ID="Txt_Remarks" runat="server" ClientIDMode="Static" CssClass="TextCls"></asp:TextBox>
                </div>
            </div>
        </div>
        <div id="DivPlacement">
            <div class="divrow">
            <div class="divcell_left">
                <div class="divcell">
                    <asp:Label ID="lblBroker" runat="server" ClientIDMode="Static" Text="Broker"></asp:Label>
                </div>
                <div class="divcell">
                    <asp:TextBox ID="TxtBroker" runat="server" ClientIDMode="Static" CssClass="TextCls" data-rule-required="true" data-msg-required="Please Select Broker Code"></asp:TextBox>
                    <asp:HiddenField runat="server" ID="hdnBroker" ClientIDMode="Static"/>
                    <asp:Button runat="server" ID="BtnBroker" ClientIDMode="Static" CssClass="ButtonCls Lookup" OnClientClick="return ShowBroker();" />
                </div>
            </div>
            <div class="divcell_right">
                <div class="divcell">
                    <asp:Label ID="lblStockExchange" runat="server" ClientIDMode="Static" Text="Stock Exchange"></asp:Label>
                </div>
                <div class="divcell">
                    <asp:TextBox ID="TxtStockExchange" runat="server" ClientIDMode="Static" CssClass="TextCls" data-rule-required="true" data-msg-required="Please select Stock Exchange"></asp:TextBox>
                    <asp:HiddenField runat="server" ID="HdnStockExchange" ClientIDMode="Static"/>
                    <asp:Button runat="server" ID="btnStockExchange" ClientIDMode="Static" CssClass="ButtonCls Lookup" OnClientClick="return ShowStockExchange();" />
                </div>
            </div>
        </div>
            <div class="divrow">
            <div class="divcell_left">
                <div class="divcell">
                    <asp:Label ID="lblCustidian" runat="server" ClientIDMode="Static" Text="Custodian"></asp:Label>
                </div>
                <div class="divcell">
                    <asp:TextBox ID="TxtCustodian" runat="server" ClientIDMode="Static" CssClass="TextCls" data-rule-required="true" data-msg-required="Please Select Custodian."></asp:TextBox>
                    <asp:HiddenField runat="server" ID="HdnCustodian" ClientIDMode="Static"/>
                    <asp:Button runat="server" ID="btnCustodian" ClientIDMode="Static" CssClass="ButtonCls Lookup" OnClientClick="return ShowCustodian();" />
                </div>
            </div>
            <div class="divcell_right">
                <div class="divcell">
                    <asp:Label ID="lblMarketType" runat="server" ClientIDMode="Static" Text="Market Type"></asp:Label>
                </div>
                <div class="divcell">
                    <asp:TextBox ID="TxtMarketType" runat="server" ClientIDMode="Static" CssClass="TextCls" data-rule-required="true" data-msg-required="Please Select Market Type."></asp:TextBox>
                    <asp:HiddenField runat="server" ID="HdnMarketType" ClientIDMode="Static"/>
                    <asp:Button runat="server" ID="btnMarketType" ClientIDMode="Static" CssClass="ButtonCls Lookup" OnClientClick="return ShowMarketType();" />
                </div>
            </div>
        </div>
            <div class="divrow">
            <div class="divcell_left">
                <div class="divcell">
                    <asp:Label ID="lblPlacementDate" runat="server" ClientIDMode="Static" Text="Placement Date"></asp:Label>
                </div>
                <div class="divcell">
                    <asp:TextBox ID="TxtPlacementDT" runat="server" data-rule-required="true" data-msg-required="Please Enter Placement Date." ClientIDMode="Static" CssClass="TextCls" MaxLength="10"></asp:TextBox>
                </div>
            </div>
            <div class="divcell_right">
                <div class="divcell"><asp:Label ID="lblInvestmentType" runat="server" ClientIDMode="Static" Text="Investment Type"></asp:Label></div>
                <div class="divcell">
                    <asp:TextBox ID="TxtInvestmentType" runat="server" ClientIDMode="Static" CssClass="TextCls"></asp:TextBox>
                    <asp:HiddenField runat="server" ID="HdnInvestmentType" ClientIDMode="Static"/>
                    <asp:Button runat="server" ID="BtnInvestmentType" ClientIDMode="Static" CssClass="ButtonCls Lookup" OnClientClick="return ShowInvestmentType();" />
                </div>
            </div>
        </div>
        </div>
        <div id="DivConformation">
            <div class="divrow">
                <div class="divcell_left">
                    <div class="divcell">
                        <asp:Label ID="lblPlcBroker" runat="server" ClientIDMode="Static" Text="Broker"></asp:Label>
                    </div>
                    <div class="divcell"><asp:TextBox ID="TxtPlcBroker" ReadOnly="true" runat="server" ClientIDMode="Static" CssClass="TextCls"></asp:TextBox>
                    </div>
                </div>
                <div class="divcell_right">
                    <div class="divcell"><asp:Label ID="lblPlcStockExchange" runat="server" ClientIDMode="Static" Text="Stock Exchange"></asp:Label>
                    </div>
                    <div class="divcell"><asp:TextBox ID="TxtPlcStockExchange" ReadOnly="true" runat="server" ClientIDMode="Static" CssClass="TextCls"></asp:TextBox>
                    </div>
                </div>
            </div>
            <div class="divrow">
                <div class="divcell_left">
                    <div class="divcell"><asp:Label ID="lblPlcCustidian" runat="server" ClientIDMode="Static" Text="Custodian"></asp:Label></div>
                    <div class="divcell"><asp:TextBox ID="TxtPlcCustodian" ReadOnly="true" runat="server" ClientIDMode="Static" CssClass="TextCls"></asp:TextBox></div>
                </div>
                <div class="divcell_right">
                    <div class="divcell"><asp:Label ID="lblPlcMarketType" runat="server" ClientIDMode="Static" Text="Market Type"></asp:Label></div>
                    <div class="divcell"><asp:TextBox ID="TxtPlcMarketType" ReadOnly="true" runat="server" ClientIDMode="Static" CssClass="TextCls"></asp:TextBox></div>
                </div>
            </div>
            <div class="divrow">
            <div class="divcell_left">
                <div class="divcell"><asp:Label ID="lblPlcPlacementDate" runat="server" ClientIDMode="Static" Text="Placement Date"></asp:Label></div>
                <div class="divcell"><asp:TextBox ID="TxtPlcPlacementDT" ReadOnly="true" runat="server" ClientIDMode="Static" CssClass="TextCls" MaxLength="10"></asp:TextBox></div>
            </div>
            <div class="divcell_right">
                <div class="divcell"><asp:Label ID="lblExchangeRate" runat="server" ClientIDMode="Static" Text="Exchange Rate"></asp:Label></div>
                <div class="divcell"><asp:TextBox ID="TxtExchangeRate"  onblur="CalculateAll()"  CssClass="inputText caps TextCls txtaln" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
            </div>
        </div>
            <div id="DivConfEntry">
                <div class="divrow">
                    <div class="divcell_left">
                        <div class="divcell"><asp:Label ID="lblExecutedqty" runat="server" ClientIDMode="Static" Text="Executed Qty"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtExecutedQty" onblur="CalculateAll()" CssClass="inputText caps TextCls txtaln"  runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                    <div class="divcell_right">
                        <div class="divcell"><asp:Label ID="lblExecutedPrice" runat="server" ClientIDMode="Static" Text="Executed Price"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtExecutedPrice" onblur="CalculateAll()" CssClass="inputText caps TextCls txtaln"  runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                </div>
                <div class="divrow">
                    <div class="divcell_left">
                        <div class="divcell"><asp:Label ID="lblACQLCY" runat="server" ClientIDMode="Static" Text="ACQ LCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtACQLCY" CssClass="inputText caps TextCls txtaln" ReadOnly="true" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                    <div class="divcell_right">
                        <div class="divcell"><asp:Label ID="lblACQFCY" runat="server" ClientIDMode="Static" Text="ACQ FCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtACQFCY" CssClass="inputText caps TextCls txtaln" ReadOnly="true" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                </div>
                <div class="divrow">
                    <div class="divcell_left">
                        <div class="divcell"><asp:Label ID="lblBrokerageAmtLCY" runat="server" ClientIDMode="Static" Text="Brokerage Amount LCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtBrokerageAmtLCY" onblur="CalculateAll()" CssClass="inputText caps TextCls txtaln" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                    <div class="divcell_right">
                        <div class="divcell"><asp:Label ID="lblBrokerageAmtFCY" runat="server" ClientIDMode="Static" Text="Brokerage Amount FCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtBrokerageAmtFCY" CssClass="inputText caps TextCls txtaln" ReadOnly="true" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                </div>
                <div class="divrow">
                    <div class="divcell_left">
                        <div class="divcell"><asp:Label ID="lblServiceTaxLCY" runat="server" ClientIDMode="Static" Text="Service Tax LCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtServiceTaxLCY" onblur="CalculateAll()" CssClass="inputText caps TextCls txtaln" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                    <div class="divcell_right">
                        <div class="divcell"><asp:Label ID="lblServiceTaxFCY" runat="server" ClientIDMode="Static" Text="Service Tax FCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtServiceTaxFCY" CssClass="inputText caps TextCls txtaln" ReadOnly="true" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                </div>
                <div class="divrow">
                    <div class="divcell_left">
                        <div class="divcell"><asp:Label ID="lblStampLCY" runat="server" ClientIDMode="Static" Text="Stamp LCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtStampLCY" onblur="CalculateAll()" CssClass="inputText caps TextCls txtaln" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                    <div class="divcell_right">
                        <div class="divcell"><asp:Label ID="lblStampFCY" runat="server" ClientIDMode="Static" Text="Stamp FCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtStampFCY" CssClass="inputText caps TextCls txtaln" ReadOnly="true" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                </div>
                <div class="divrow">
                    <div class="divcell_left">
                        <div class="divcell"><asp:Label ID="lblClearingFeesLCY" runat="server" ClientIDMode="Static" Text="Clearing Fees LCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtClearingFeesLCY" onblur="CalculateAll()" CssClass="inputText caps TextCls txtaln" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                    <div class="divcell_right">
                        <div class="divcell"><asp:Label ID="lblClearingFeesFCY" runat="server" ClientIDMode="Static" Text="Clearing Fees FCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtClearingFeesFCY" CssClass="inputText caps TextCls txtaln" ReadOnly="true" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                </div>
                <div class="divrow">
                    <div class="divcell_left">
                        <div class="divcell"><asp:Label ID="lblCustodianChargesLCY" runat="server" ClientIDMode="Static" Text="Custodian Charges LCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtCustodianChargesLCY" onblur="CalculateAll()" CssClass="inputText caps TextCls txtaln" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                    <div class="divcell_right">
                        <div class="divcell"><asp:Label ID="lblCustodianChargesFCY" runat="server" ClientIDMode="Static" Text="Custodian Charges FCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtCustodianChargesFCY" CssClass="inputText caps TextCls txtaln" ReadOnly="true" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                </div>
                <div class="divrow">
                    <div class="divcell_left">
                        <div class="divcell"><asp:Label ID="lblSTTLCY" runat="server" ClientIDMode="Static" Text="STT LCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtSTTLCY" runat="server" onblur="CalculateAll()" CssClass="inputText caps TextCls txtaln" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                    <div class="divcell_right">
                        <div class="divcell"><asp:Label ID="lblSTTFCY" runat="server" ClientIDMode="Static" Text="STT FCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtSTTFCY" ReadOnly="true" CssClass="inputText caps TextCls txtaln" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                </div>
                <div class="divrow">
                    <div class="divcell_left">
                        <div class="divcell"><asp:Label ID="lblNetAmtLCY" runat="server" ClientIDMode="Static" Text="Net Amount LCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtNetAmtLCY" ReadOnly="true" runat="server" CssClass="inputText caps TextCls txtaln" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                    <div class="divcell_right">
                        <div class="divcell"><asp:Label ID="lblNetAmtFCY" runat="server" ClientIDMode="Static" Text="Net Amount FCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtNetAmtFCY" ReadOnly="true" CssClass="inputText caps TextCls txtaln" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                </div>
                <div class="divrow">
                    <div class="divcell_left">
                        <div class="divcell"><asp:Label ID="lblSettlementAmtLCY" runat="server" ClientIDMode="Static" Text="Settlement Amount LCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtSettlementAmtLCY" ReadOnly="true" CssClass="inputText caps TextCls txtaln" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                    <div class="divcell_right">
                        <div class="divcell"><asp:Label ID="lblSettlementAmtFCY" runat="server" ClientIDMode="Static" Text="Settlement Amount FCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtSettlementAmtFCY" CssClass="inputText caps TextCls txtaln" ReadOnly="true" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                </div>
                
                <div class="divrow">
                    <div class="divcell_left">
                        <div class="divcell"><asp:Label ID="lblGainlossLCY" runat="server" ClientIDMode="Static" Text="Gain/Loss LCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtGainlossLCY" ReadOnly="true" CssClass="inputText caps TextCls txtaln" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                    <div class="divcell_right">
                        <div class="divcell"><asp:Label ID="lblGainlossFCY" runat="server" ClientIDMode="Static" Text="Gain/Loss FCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtGainlossFCY" CssClass="inputText caps TextCls txtaln" ReadOnly="true" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                </div>
                <div class="divrow">
                    <div class="divcell_left">
                        <div class="divcell"><asp:Label ID="lblHoldingACQCostLCY" runat="server" ClientIDMode="Static" Text="Holding ACQ Cost LCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtHoldingACQCostLCY" ReadOnly="true" CssClass="inputText caps TextCls txtaln" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                    <div class="divcell_right">
                        <div class="divcell"><asp:Label ID="lblHoldingACQCostFCY" runat="server" ClientIDMode="Static" Text="Holding ACQ Cost FCY"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtHoldingACQCostFCY" CssClass="inputText caps TextCls txtaln" ReadOnly="true" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                </div>
                <div class="divrow">
                    <div class="divcell_left">
                        <div class="divcell"><asp:Label ID="lblSettlementDT" runat="server" ClientIDMode="Static" Text="Settlement Date"></asp:Label></div>
                        <div class="divcell"><asp:TextBox ID="TxtSettlementDate" CssClass="TextCls" runat="server" ClientIDMode="Static" ></asp:TextBox></div>
                    </div>
                    <div class="divcell_right">
                        <div class="divcell"></div>
                        <div class="divcell"></div>
                    </div>
                </div>
            </div>
            <div id="DivConfData" style='overflow:scroll;'>
                <asp:GridView runat="server" ID="GrdOrdConfData" AutoGenerateColumns="false" AllowPaging="false"  GridLines="None" CssClass="mGrid" ClientIDMode="Static">
                    <Columns>
                        <asp:BoundField HeaderText="Confirmation ID" DataField="Confirmation_Id" />
                        <asp:BoundField HeaderText="Conf Date" DataField="Confirmation_Date" />
                        <asp:BoundField HeaderText="Qty" DataField="Executed_Qty" />
                        <asp:BoundField HeaderText="Price" DataField="Executed_Price" />
                        <asp:BoundField HeaderText="Exchange Rate" DataField="Exchange_Rate" />
                        <asp:BoundField HeaderText="ACQ LCY" DataField="ACQ_LCY" />
                        <asp:BoundField HeaderText="ACQ FCY" DataField="ACQ_FCY" />
                        <asp:BoundField HeaderText="Comm Amt LCY" DataField="Comm_Amt_LCY" />
                        <asp:BoundField HeaderText="Comm Amt FCY" DataField="Comm_Amt_FCY" />
                        <asp:BoundField HeaderText="Service Tax LCY" DataField="Service_Tax_LCY" />
                        <asp:BoundField HeaderText="Service Tax FCY" DataField="Service_Tax_FCY" />
                        <asp:BoundField HeaderText="Stamp LCY" DataField="Stamp_LCY" />
                        <asp:BoundField HeaderText="Stamp FCY" DataField="Stamp_FCY" />
                        <asp:BoundField HeaderText="Clearing Fees LCY" DataField="Clearing_Fees_LCY" />
                        <asp:BoundField HeaderText="Clearing Fees FCY" DataField="Clearing_Fees_FCY" />
                        <asp:BoundField HeaderText="Custodian Charges LCY" DataField="Custodian_Charges_LCY" />
                        <asp:BoundField HeaderText="Custodian Charges FCY" DataField="Custodian_Charges_FCY" />
                        <asp:BoundField HeaderText="STT LCY" DataField="STT_LCY" />
                        <asp:BoundField HeaderText="STT FCY" DataField="STT_FCY" />
                        <asp:BoundField HeaderText="Net Amount LCY" DataField="Net_Amount_LCY" />
                        <asp:BoundField HeaderText="Net Amount FCY" DataField="Net_Amount_FCY" />
                        <asp:BoundField HeaderText="Settlement Amount LCY" DataField="Settlement_Amount_LCY" />
                        <asp:BoundField HeaderText="Settlement Amount FCY" DataField="Settlement_Amount_FCY" />
                        <asp:BoundField HeaderText="Gain Loss LCY" DataField="Gain_Loss_LCY" />
                        <asp:BoundField HeaderText="Gain Loss FCY" DataField="Gain_Loss_FCY" />
                        <asp:BoundField HeaderText="Holding Acq Cost LCY" DataField="Holding_Acq_Cost_LCY" />
                        <asp:BoundField HeaderText="Holding Acq Cost FCY" DataField="Holding_Acq_Cost_FCY" />
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
           <%--<div class="divrow">
            <div class="divcell_left">
                <div class="divcell">
                </div>
                <div class="divcell">
                </div>
            </div>
            <div class="divcell_right">
                <div class="divcell">
                    <asp:Button runat="server" ID="btn_Palcement" ClientIDMode="Static" CssClass="submit" Text="Palcement" />
                    <asp:Button runat="server" ID="btn_PalcementUpdate" ClientIDMode="Static" CssClass="submit" Text="Update" />
                    <asp:Button runat="server" ID="btn_PalcementReverse" ClientIDMode="Static" CssClass="submit" Text="Reverse" />
                    <asp:Button runat="server" ID="btn_Conformation" ClientIDMode="Static" CssClass="submit" Text="Confirm" OnClientClick="return initDataU();" />
                    <asp:Button runat="server" ID="btn_Cancel" ClientIDMode="Static" CssClass="reset" Text="Cancel" OnClientClick="HideFields(this);return false;" />
                </div>
            </div>
        </div>--%>
        <div style="text-align:center;">
            <asp:Button runat="server" ID="btn_Palcement" ClientIDMode="Static" CssClass="submit" Text="Placement" />
            <asp:Button runat="server" ID="btn_PalcementUpdate" ClientIDMode="Static" CssClass="submit" Text="Update" />
            <asp:Button runat="server" ID="btn_PalcementReverse" ClientIDMode="Static" CssClass="submit" Text="Reverse" />
            <asp:Button runat="server" ID="btn_Conformation" ClientIDMode="Static" CssClass="submit" Text="Confirm" OnClientClick="return initDataU();" />
            <asp:Button runat="server" ID="btn_Cancel" ClientIDMode="Static" CssClass="reset" Text="Cancel" OnClientClick="HideFields(this);return false;" />
        </div>
    </div>
    <div id="div_HiddenFields">
            <asp:HiddenField runat="server" ID="hdnfldTransaction_ID" ClientIDMode="Static" />
            <asp:HiddenField runat="server" ID="hdnfldPlacement_Id" ClientIDMode="Static" />
            <asp:HiddenField runat="server" ID="hdndommy" ClientIDMode="Static" />
            <asp:HiddenField runat="server" ID="hdnfld_VerNo" Value="0" ClientIDMode="Static" />
            <asp:HiddenField runat="server" ID="HdnfldSearchDT" Value="0" ClientIDMode="Static" />
            <asp:HiddenField runat="server" ID="hdnfld_RecType" ClientIDMode="Static" />
            <asp:HiddenField runat="server" ID="hidden_Alldata" ClientIDMode="Static" />
            <asp:HiddenField runat="server" ID="hdnfld_DMode" ClientIDMode="Static" />
            <asp:HiddenField runat="server" ID="hdnValueDate" ClientIDMode="Static" />
        <asp:HiddenField runat="server" ID="hdnUserID" ClientIDMode="Static"/>
            <asp:HiddenField runat="server" ID="hdnCompanyID" ClientIDMode="Static"/>
        <asp:HiddenField ID="hdnSortOrder" ClientIDMode="Static" runat="server" />
        </div>
    <head>
         <script type="text/javascript" src="../WebPageJScripts/EquityPlacement.js"></script>
         <script src="../Scripts/Comman.js" type="text/javascript"></script>
         <script type="text/javascript" src="../WebPageJScripts/DynamicModalpopDialog.js"></script>
    </head>
</asp:Content>

