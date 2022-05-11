<%@ Control Language="VB" AutoEventWireup="false" CodeFile="ModalPopupUserControl.ascx.vb" Inherits="CommonUserControls_ModalPopupUserControl" %>


<style type="text/css">
    .bordered {
        *border-collapse: collapse; /* IE7 and lower */
        border-spacing: 0;
        width: 100%;
        font-family: Arial, 'DejaVu Sans', 'Liberation Sans', Freesans, sans-serif;
        font-size: smaller;
        border: solid #ccc 1px;
        -moz-border-radius: 6px;
        -webkit-border-radius: 6px;
        border-radius: 6px;
        -webkit-box-shadow: 0 1px 1px #ccc;
        -moz-box-shadow: 0 1px 1px #ccc;
        box-shadow: 0 1px 1px #ccc;
    }

        .bordered tr:hover {
            /*background: #fbf8e9;*/
            background-color: #dce9f9;
            -o-transition: all 0.1s ease-in-out;
            -webkit-transition: all 0.1s ease-in-out;
            -moz-transition: all 0.1s ease-in-out;
            -ms-transition: all 0.1s ease-in-out;
            transition: all 0.1s ease-in-out;
        }

        .bordered td, .bordered th {
            border-left: 1px solid #ccc;
            border-top: 1px solid #ccc;
            /*padding: 5px;*/
            text-align: left;
        }

        .bordered th {
            padding: 5px;
            background-color: #dce9f9;
            background-image: -webkit-gradient(linear, left top, left bottom, from(#ebf3fc), to(#dce9f9));
            background-image: -webkit-linear-gradient(top, #ebf3fc, #dce9f9);
            background-image: -moz-linear-gradient(top, #ebf3fc, #dce9f9);
            background-image: -ms-linear-gradient(top, #ebf3fc, #dce9f9);
            background-image: -o-linear-gradient(top, #ebf3fc, #dce9f9);
            background-image: linear-gradient(top, #ebf3fc, #dce9f9);
            -webkit-box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;
            -moz-box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;
            box-shadow: 0 1px 0 rgba(255,255,255,.8) inset;
            border-top: none;
            text-shadow: 0 1px 0 rgba(255,255,255,.5);
        }

            .bordered td:first-child, .bordered th:first-child {
                border-left: none;
            }

            .bordered th:first-child {
                -moz-border-radius: 6px 0 0 0;
                -webkit-border-radius: 6px 0 0 0;
                border-radius: 6px 0 0 0;
            }

            .bordered th:last-child {
                -moz-border-radius: 0 6px 0 0;
                -webkit-border-radius: 0 6px 0 0;
                border-radius: 0 6px 0 0;
            }

            .bordered th:only-child {
                -moz-border-radius: 6px 6px 0 0;
                -webkit-border-radius: 6px 6px 0 0;
                border-radius: 6px 6px 0 0;
            }

        .bordered tr:last-child td:first-child {
            -moz-border-radius: 0 0 0 6px;
            -webkit-border-radius: 0 0 0 6px;
            border-radius: 0 0 0 6px;
        }

        .bordered tr:last-child td:last-child {
            -moz-border-radius: 0 0 6px 0;
            -webkit-border-radius: 0 0 6px 0;
            border-radius: 0 0 6px 0;
        }

    /*----------------------*/

    .mymodaldialog {
	position: absolute;
	top: 0;
	left: 0;
	padding: .2em;
	outline: 0;
}
</style>


<asp:Button runat="server" ID="btndialog" ClientIDMode="AutoID"  CssClass="ButtonCls Lookup" />
<asp:Panel runat="server" ID="PWMModaldialog" ClientIDMode="AutoID">
    <div>
        <asp:DropDownList runat="server" ID="ddlsearchcolumns" ClientIDMode="AutoID">
        </asp:DropDownList>
        <asp:TextBox runat="server" ID="txtsearchdata" ClientIDMode="AutoID"></asp:TextBox>
        <asp:Button runat="server" ID="btnsearch" ClientIDMode="AutoID" Text="Search" />
    </div>
    <div   id="datadiv<%=PWMModaldialog.ClientID%>">
        Welcome
    </div>
</asp:Panel>

<script type="text/javascript">

    $(document).ready(function () {
        $('#<%=PWMModaldialog.ClientID%>').hide();
        $('#<%=btnsearch.ClientID%>').click(function () {
            GetData<%=PWMModaldialog.ClientID%>(1);
        });
      

        if ('<%=MultiSelect%>' == "False" || '<%=MultiSelect%>' == "false") {
            $('#<%=btndialog.ClientID%>').click(function () {
                var NewDialog = $('#<%=PWMModaldialog.ClientID%>');
                NewDialog.dialog({
                    modal: true,
                    title: '<%=Title%>',// 'welcome',
                    show: 'clip',
                    hide: 'clip',
                    closeOnEscape: true,
                    position: 'center',
                    width: '<%=Width%>',// 800,
                    minHeight: 300, // '<%=Height%>', // 450,
                    maxHeight: 300,
                    dialogClass:'',
                    position: {
                        my: "center",
                        at: "center",
                        of: window,
                        collision: "fit",
                       
                    },
                    open: function (event, ui) { OnDialogOpen<%=PWMModaldialog.ClientID%>(event, ui); },  //open event method
                    create: function (event, ui) { OnDialogCreate<%=PWMModaldialog.ClientID%>(event, ui); }, // create event method
                    close: function (event, ui) { OnDialogClose<%=PWMModaldialog.ClientID%>(event, ui); $(this).dialog("destroy"); }, // close event method
                });
                return false;
            });
        }
        else {

            $('#<%=btndialog.ClientID%>').click(function () {
                var NewDialog = $('#<%=PWMModaldialog.ClientID%>');
                NewDialog.dialog({
                    modal: true,
                    title: 'welcome',
                    show: 'clip',
                    hide: 'clip',
                    closeOnEscape: true,
                    position: 'center',
                    width: '<%=Width%>',// 800,
                    height: '<%=Height%>', // 450,
                    buttons: [
                      {
                          text: "Submit", click: function () {
                              doSomething<%=PWMModaldialog.ClientID%>();
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                            }
                        },
                {
                    text: "Cancel", click: function () {
                        $(this).dialog("close")
                        $(this).dialog("destroy");
                    }
                }
                      ],
                    open: function (event, ui) { OnDialogOpen<%=PWMModaldialog.ClientID%>(event, ui); },  //open event method
                    create: function (event, ui) { OnDialogCreate<%=PWMModaldialog.ClientID%>(event, ui); }, // create event method
                    close: function (event, ui) { OnDialogClose<%=PWMModaldialog.ClientID%>(event, ui); $(this).dialog("destroy"); }, // close event method

                });
                return false;
            });
        }
    });


    function OnDialogOpen<%=PWMModaldialog.ClientID%>(event, ui) {
        $('#<%=txtsearchdata.ClientID%>').val('');
        GetData<%=PWMModaldialog.ClientID%>(0);
      }


      function GetData<%=PWMModaldialog.ClientID%>(flag) {
        // debugger;
          
        var TableName = '<%= TableName%>'; // 'Currency';
        var ColumnName = '<%= ColumnName%>';
        var ColumnData = '<%= ColumnData%>';

        var ctrlname = '<%=InputControlName%>';
        if (ctrlname != '') {
            ColumnData = $('#' + ctrlname).val();
        }


        if (TableName == null || TableName.trim() == '') {
            alert('Please give table name');
            return false;
        }

        // if search button click flag value is 1 other wise flag value is 0
        if (flag == 1) {
            var col = '';
            d = $('#<%=ddlsearchcolumns.ClientID%>').val();
            //==========================
            if (d == '0' || d == '')
                d = '';
            //==========================
            ColumnName = d;
            d = $('#<%=txtsearchdata.ClientID%>').val();
            ColumnData = d;
        }

        if (ColumnName == null)
            ColumnName = '';
        if (ColumnData == null)
            ColumnData = '';
        $.ajax({
            type: "POST",
            async: false,
            contentType: "application/json; charset=utf-8",
            url: "../CommonWebServices/MasterBindings.aspx/DynamicPopupData",
            data: "{TableName : '" + TableName + "',ColumnName :'" + ColumnName + "' , ColumnData : '" + ColumnData + "'}",
            dataType: "json",
            success: function (data) {
                BindData<%=PWMModaldialog.ClientID%>(data, flag);
            },
            error: function (result) {
                alert('Data not found.');
            }
        });
            return false;
        }

        function BindColumns<%=PWMModaldialog.ClientID%>(data) {
        try {
            var c = '<%=ColumnName%>';

                tdata = jQuery.parseJSON(data.d);
                TableColumns = tdata.Table;

                //TableData = tdata.Table1;
                $('#<%=ddlsearchcolumns.ClientID%>').html("");
                $('#<%=ddlsearchcolumns.ClientID%>').append($("<option></option>").val('0').html('Free Search'));
                $.each(TableColumns, function (i, row) {
                    $('#<%=ddlsearchcolumns.ClientID%>').append($("<option></option>").val(row['ColumnName']).html(row['DisplayName']));
                });
                $('#<%=ddlsearchcolumns.ClientID%>').val(c);
           
            }
            catch (ex) {
                ErrorLog(ex);
            }

        }

        function BindData<%=PWMModaldialog.ClientID%>(data, flag) {
            //debugger;
        var TableColumns;
        var TableData;
        var tdata = null;
        var multiselect = '<%= MultiSelect%>';
        var id = '';
        var name = '';
        var st = '';

        var WhichColumnDataYouWant, IDColumnName;
        WhichColumnDataYouWant = '<%= ColumnName%>';
        IDColumnName = '<%=IDColumnName%>';

           var WhichColumnDataYouWant_value = '';
           var IDColumnName_value = '';
           try {
               tdata = jQuery.parseJSON(data.d);
               TableColumns = tdata.Table;
               TableData = tdata.Table1;
               if (typeof (TableColumns[0]['ERROR']) != "undefined") {
                   alert(TableColumns[0]['ERROR']);
                   $('#datadiv<%=PWMModaldialog.ClientID%>').html("<p>Data not avoilabl.</p>");
                    return false;
                }

                if (flag == 0)
                    BindColumns<%=PWMModaldialog.ClientID%>(data);


            var strth = "<tr><th>Select</th>";
            $.each(TableColumns, function (i, row) {
                
                if (row['IsDisplay'] == true) {
                   
                    strth += "<th>" + row['DisplayName'] + "</th>";
                }
                 
            });
            strth += "</tr>";
            var tablest = "<table  class='bordered'>";
            var tbl = '';
            var tblcontent = '';
            tablest += strth;
            var tdinfo = '';

            $.each(TableData, function (i, row) {
                tbl += "<tr>";
                tdinfo = '';
                $.each(TableColumns, function (i, colrow) {

                    if (colrow['IsDisplay'] == true) {
                        tdinfo += "<td>";
                        tdinfo += row[colrow['ColumnName']];
                        tdinfo += "</td>";
                    }
                    

                    if (WhichColumnDataYouWant.toLowerCase() == colrow['ColumnName'].toLowerCase()) {
                        WhichColumnDataYouWant_value = row[colrow['ColumnName']];
                    }
                    if (IDColumnName.toLowerCase() == colrow['ColumnName'].toLowerCase()) {
                        IDColumnName_value = row[colrow['ColumnName']];
                    }
                });  // columns loop end
                //============================================================================================
                if (multiselect == "False" || multiselect == "false") {
                    id = '<%=PWMModaldialog.ClientID%>' + i.toString();
                    name = 'rd_<%=PWMModaldialog.ClientID%>';
                    st = "<td><input type='button'  value='...' id='" + id + "' name='" + name + "' onclick='OnSelect<%=PWMModaldialog.ClientID%>(&quot;" + WhichColumnDataYouWant_value + "&quot;,&quot;" + IDColumnName_value + "&quot;,&quot;<%= InputControlName%>&quot;,&quot;<%=HiddenControlName%>&quot;);' /></td>";
                }
                else {
                    id = '<%=PWMModaldialog.ClientID%>' + i.toString();
                    name = 'rd_<%=PWMModaldialog.ClientID%>';
                    st = "<td><input type='checkbox' id='" + id + "' name='" + name + "' /> </td>";
                }
                //============================================================================================
                tbl += st + tdinfo + "</tr>";
            });  // rows loop end
            tablest += tbl + "</table>";
            $('#datadiv<%=PWMModaldialog.ClientID%>').html(tablest);
        }
        catch (ex) {
            alert(ex.toString());
        }
    }


    function OnSelect<%=PWMModaldialog.ClientID%>(WhichColumnDataYouWant_value, IDColumnName_value, ctrlname, HiddenControlName) {
        $('#' + ctrlname).val(WhichColumnDataYouWant_value);
        $('#' + HiddenControlName).val(IDColumnName_value);
        $('#<%=PWMModaldialog.ClientID%>').dialog('close');
    }

    function clear<%=PWMModaldialog.ClientID%>() {
        $('#<%=ddlsearchcolumns.ClientID%>').html("");
    }
    function doSomething<%=PWMModaldialog.ClientID%>() {
        var p = new Object();
        p.firstname = 'ravi';
        alert(p.firstname);
    }
    function OnDialogCreate<%=PWMModaldialog.ClientID%>(event, ui) {
        //alert('i am create');
    }
    function OnDialogClose<%=PWMModaldialog.ClientID%>(event, ui) {
        //alert('I am close');
        clear<%=PWMModaldialog.ClientID%>()
    }
</script>
