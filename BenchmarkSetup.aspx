<%@ Page Title="" Language="VB" MasterPageFile="~/MasterPages/PWMMaster.master" AutoEventWireup="false" EnableEventValidation="false" CodeFile="BenchmarkSetup.aspx.vb" Inherits="Masters_BenchmarkSetup" Culture="auto" meta:resourcekey="PageResource1" UICulture="auto" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="Server" ClientIDMode="Static">
    <div class="h1">
        <div id="pnl">
            <div class="lh1">
                <a id="a_New" onclick="New(this);">
                    <img alt="New" title="New" src="../Images/add_record.png" style="height: 16px; width: 17px;" />
                </a>
                <a id="a_Live" onclick="Live(this);">
                    <img alt="Live" title="Live" src="../Images/Live.png" style="height: 16px; width: 17px;" />
                </a>
                <a id="a1" onclick="Pending(this);">
                    <img alt="Pending" title="Pending" src="../Images/Pending.png" style="height: 16px; width: 17px;" />
                </a>
                <a id="a_History" onclick="History(this);">
                    <img alt="History" title="History" src="../Images/history-icon.gif" style="height: 16px; width: 17px;" />
                </a>
            </div>
            <div class="rh1">
                <span>Search : </span>
                <asp:TextBox ClientIDMode="Static" ID="ui_txtsearch" runat="server" onkeydown="return (event.keyCode!=13);"></asp:TextBox>
                <asp:Button ID="bntsearach" CssClass="hd" CausesValidation="False" runat="server" />

                <asp:LinkButton ID="ui_bntsearach" runat="server" OnClientClick="return SearchGridData(); return false;" CausesValidation="False">
                    <img id="Img1" src="../Images/search.png" runat="server" alt="Search" title="Search"
                        style="border-style: none;" />
                </asp:LinkButton>
            </div>
        </div>
    </div>
    <div id="div_Grid">
        <asp:GridView GridLines="None" EmptyDataText="No Data" AutoGenerateColumns="False" ClientIDMode="Static"
            CssClass="mGrid" ID="grdBenchmarkSetup" runat="server" meta:resourcekey="grdBenchmarkSetupResource1">
            <Columns>

                <asp:TemplateField>
                    <HeaderTemplate>
                        <u style="cursor: pointer; text-decoration: none;">
                            <span id="lbl_Reg" onclick="GridSorting(this);" itemid="BenchmarkName">Benchmark Name </span>
                            <img id="img_Reg" src="../Images/down-arrow.png" />
                        </u>
                    </HeaderTemplate>
                </asp:TemplateField>
                <asp:TemplateField>
                    <HeaderTemplate>
                        <u style="cursor: pointer; text-decoration: none;">
                            <span id="lbl_AMC" onclick="GridSorting(this);" itemid="BenchmarkCode">Benchmark Code </span>
                            <img id="img_AMC" src="../Images/down-arrow.png" />
                        </u>
                    </HeaderTemplate>
                </asp:TemplateField>
                <asp:TemplateField>
                    <HeaderTemplate>
                        <u style="cursor: pointer; text-decoration: none;">
                            <span id="lbl_Scheme" onclick="GridSorting(this);" itemid="BenchmarkDesc">Benchmark Desc </span>
                            <img id="img_Scheme" src="../Images/down-arrow.png" />
                        </u>
                    </HeaderTemplate>
                </asp:TemplateField>

                <asp:BoundField HeaderText="Record Type" meta:resourcekey="BoundFieldResource4"></asp:BoundField>
                <asp:BoundField HeaderText="VerNo" meta:resourcekey="BoundFieldResource4"></asp:BoundField>
                <asp:BoundField HeaderText="" DataField="Edit" />
                <asp:BoundField HeaderText="" DataField="Reverse" />
                <asp:BoundField HeaderText="" DataField="View" />
                <%--<asp:TemplateField HeaderText=""  meta:resourcekey="TemplateFieldResource1">                    <ItemTemplate>
                        <span title="Edit" style="cursor: pointer; color: Blue;" runat="server" id="lbtnEdit">
                            <img src="../Images/edit.png" alt="Edit" /></span>
                    </ItemTemplate>                    
                </asp:TemplateField>
                <asp:TemplateField HeaderText="" meta:resourcekey="TemplateFieldResource2">
                    <ItemTemplate>
                        <span title="Reverse" style="cursor: pointer; color: Blue;" runat="server" id="lbtnReverse">
                            <img alt="Reverse" src="../Images/close.png" /></span>
                    </ItemTemplate>                    
                </asp:TemplateField>
                <asp:TemplateField HeaderText=""  meta:resourcekey="TemplateFieldResource3">
                    <ItemTemplate>
                        <span title="View" style="cursor: pointer; color: Blue;" runat="server" id="lbtnView">
                            <img style="width: 18px; height: 16px;" alt="View" src="../Images/view1.jpg" />
                        </span>
                    </ItemTemplate>                    
                </asp:TemplateField>--%>
            </Columns>
        </asp:GridView>
        <uctlPaging:paging runat="server" ID="uctlpage1" ServiceURL="../Masters/BenchmarkSetup.aspx/GetBenchmarkList" />
    </div>
    <div id="div_Fields" style="display: none;">

        <div style="margin: 5px;">
            <hr class="hr1" />
        </div>
        <div style="height: 20px; margin-right: 10px;">
        </div>

        <div class="divrow">
            <div class="divcell_left">
                <div class="divcell">
                    <asp:Label ID="lblBenchmarkName" runat="server" Text="Benchmark Name" ClientIDMode="Static" meta:resourcekey="lblBenchmarkNameResource1"></asp:Label>
                </div>
                <div class="divcell">
                    <asp:TextBox CssClass="TextCls" ID="txtBenchmarkName" onblur="return checkBenchmarkName(this.value);" runat="server" ClientIDMode="Static" data-rule-required="true" data-msg-required="please enter Benchmark Name."
                        TabIndex="1" meta:resourcekey="txtBenchmarkNameResource1"></asp:TextBox>
                    <span class="commonError">*</span>
                </div>
            </div>
            <div class="divcell_right">
            </div>
        </div>
        <div class="divrow">
            <div class="divcell_left">
                <div class="divcell">
                    <asp:Label ID="lblShortName" runat="server" Text="Benchmark Code" ClientIDMode="Static" meta:resourcekey="lblShortNameResource1"></asp:Label>
                </div>
                <div class="divcell">
                    <asp:TextBox CssClass="TextCls caps" ID="txtShortName" onblur="return checkBenchmarkShortName(this.value);" runat="server" TabIndex="2" ClientIDMode="Static" data-rule-required="true" data-msg-required="please enter Benchmark Code." meta:resourcekey="txtShortNameResource1"></asp:TextBox>
                    <span class="commonError">*</span>
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
                    <asp:Label ID="lblBenchmarkDesc" runat="server" Text="Benchmark Description" ClientIDMode="Static" meta:resourcekey="lblBenchmarkDescResource1"></asp:Label>
                </div>
                <div class="divcell">
                    <asp:TextBox CssClass="TextCls" ID="txtBenchmarkDesc" runat="server" TabIndex="3" ClientIDMode="Static" meta:resourcekey="txtBenchmarkDescResource1"></asp:TextBox>
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
                    <asp:Label ID="lblMessage" CssClass="commonError" runat="server" ClientIDMode="Static" meta:resourcekey="lblMessageResource1"></asp:Label>
                </div>
                <div class="divcell">
                </div>
            </div>
        </div>
        <div style="text-align: center">
            <asp:Button runat="server" ID="btn_Save" CssClass="submit" Text="Save" CommandArgument="I" meta:resourcekey="btn_SaveResource1" />
            <asp:Button runat="server" ID="btn_Update" CssClass="submit" Text="Update" CommandArgument="U" meta:resourcekey="btn_UpdateResource1" />
            <asp:Button runat="server" ID="btn_Reverse" CssClass="submit" Text="Reverse" CommandArgument="R" meta:resourcekey="btn_ReverseResource1" />
            <asp:Button runat="server" ID="btn_Cancel" CssClass="reset" Text="Cancel" OnClientClick="HideFields(this);" meta:resourcekey="btn_CancelResource1" />
        </div>
        <div id="div_HiddenFields">
            <asp:HiddenField ID="hdnID" runat="server" />
            <asp:HiddenField ID="hdnVerNo" runat="server" />
            <asp:HiddenField ID="hdnRecType" runat="server" />
            <asp:HiddenField runat="server" ID="hdnRecMode" />
            <asp:HiddenField ID="hdnSortOrder" ClientIDMode="Static" runat="server" />
        </div>

        <div class="divrow" style="font-size: 10px; float: left; text-align: right;">
            <asp:Label ID="lbl_VersionNo" runat="server" ClientIDMode="Static" meta:resourcekey="lbl_VersionNoResource1" />
        </div>
    </div>
    <head>
        <script type="text/javascript" src="../WebPageJScripts/BenchmarkSetup.js"></script>
        <script type="text/javascript" src="../Scripts/Comman.js"></script>
        <script type="text/javascript">
            $(document).ready(function () {
                //var jsondata = " SortBy: '',SortByColumnName : '',ID:'0',RecordType:'L'";
                var jsondata = " SortBy: '',SortByColumnName : '',ID:'0',Record_Type:'L',Verson:'',PageNumber: '1',PageSize: '10',SearchVal:''";
                $('#hdnRecMode').val('L');
                OnGettingDataAndBind<%=Me.uctlpage1.ClientID%>("FillGrid", jsondata);

            });
            $('#ui_bntsearach').click(function (e) {
                SearchGridData($('#ui_txtsearch').val());
                e.preventDefault();
            });
            function SortData(SortColumn) {
                var jsondata = " SortBy: '" + $('#hdnSortOrder').val() + "',SortByColumnName : '" + SortColumn + "',ID:'0',Record_Type:'" + $('#hdnRecMode').val() + "',Verson:'',SearchVal : '" + $('#ui_txtsearch').val() + "'";
                OnGettingDataAndBind<%=Me.uctlpage1.ClientID%>("FillGrid", jsondata);
            }
            function SearchGridData(data) {
                Init<%=Me.uctlpage1.ClientID%>();
                //if (isWhitespace(data)) return;
                var jsondata = " SortBy: '',SortByColumnName : '',ID:'0',Record_Type:'" + $('#hdnRecMode').val() + "',Verson:'',PageNumber: '1',PageSize: '10',SearchVal : '" + $('#ui_txtsearch').val() + "'";
                OnGettingDataAndBind<%=Me.uctlpage1.ClientID%>("FillGrid", jsondata);
                return false;
             }
             function Pending() {
                 $('#ui_txtsearch').val('');
                 Init<%=Me.uctlpage1.ClientID%>();
                //var jsondata = " SortBy: '',SortByColumnName : '',ID:'0',RecordType:'P'";
                var jsondata = " SortBy: '',SortByColumnName : '',ID:'0',Record_Type:'P',Verson:'',PageNumber: '1',PageSize: '10',SearchVal : '" + $('#ui_txtsearch').val() + "'";
                $('#hdnRecMode').val('P');
                OnGettingDataAndBind<%=Me.uctlpage1.ClientID%>("FillGrid", jsondata);
            }
            function History() {
                $('#ui_txtsearch').val('');
                Init<%=Me.uctlpage1.ClientID%>();
                //var jsondata = " SortBy: '',SortByColumnName : '',ID:'0',RecordType:'H'";
                var jsondata = " SortBy: '',SortByColumnName : '',ID:'0',Record_Type:'H',Verson:'',PageNumber: '1',PageSize: '10',SearchVal : '" + $('#ui_txtsearch').val() + "'";
                $('#hdnRecMode').val('H');
                OnGettingDataAndBind<%=Me.uctlpage1.ClientID%>("FillGrid", jsondata);
            }
            function Live() {
                $('#ui_txtsearch').val('');
                Init<%=Me.uctlpage1.ClientID%>();
                //var jsondata = " SortBy: '',SortByColumnName : '',ID:'0',RecordType:'L'";
                var jsondata = " SortBy: '',SortByColumnName : '',ID:'0',Record_Type:'L',Verson:'',PageNumber: '1',PageSize: '10',SearchVal : '" + $('#ui_txtsearch').val() + "'";
                $('#hdnRecMode').val('L');
                OnGettingDataAndBind<%=Me.uctlpage1.ClientID%>("FillGrid", jsondata);
            }

            $("#form1").validate({
                showErrors: function (errorMap, errorList) {
                    // Clean up any tooltips for valid elements
                    $.each(this.validElements(), function (index, element) {
                        var $element = $(element);

                        $element.data("title", "") // Clear the title - there is no error associated anymore
                            .removeClass("error")
                            .tooltip("destroy");
                    });
                    // Create new tooltips for invalid elements
                    $.each(errorList, function (index, error) {
                        var $element = $(error.element);
                        $element.tooltip("destroy") // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
                            .data("title", error.message)
                            .addClass("error")
                            .tooltip(); // Create a new tooltip based on the error messsage we just set in the title
                    });
                }

            });
        </script>
    </head>
</asp:Content>

