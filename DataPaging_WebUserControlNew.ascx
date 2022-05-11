<%@ Control Language="VB" AutoEventWireup="false" CodeFile="DataPaging_WebUserControlNew.ascx.vb" Inherits="CommonUserControls_DataPaging_WebUserControlNew" %>

<style type="text/css">
    .auto-style1
    {
        width: 111px;
    }
</style>

<script type="text/javascript">

    function OnlyNumericEntry() {
        if ((event.keyCode < 48 || event.keyCode > 57)) {
            event.returnValue = false;
        }
    }

    // GLOBAL VARIABLES
    var NoOfRecords<%=Me.ClientID%> = 0;
    var NoOfPagaes<%=Me.ClientID%> = 0;
    var PageSize<%=Me.ClientID%> = '<%=Me.DefaultPageSize%>';
    var CurrentPage<%=Me.ClientID%> = 1;
    var dynamicfun<%=Me.ClientID%> = "";
    var GlobalServiceFunParams<%=Me.ClientID%> = "";
    //================================================================
     
    // USING THIS FUNCTION GETTING DATA FROM WEBSERVICE AND BIND TO CONTROL
    function OnGettingDataAndBind<%=Me.ClientID%>(DataBindFunctionName,jsonparams) 
    {
       
        var ServiceURL='<%=me.ServiceURL %>';
        var ServiceFunParams="";
     
        if(jsonparams!="")
        {
            ServiceFunParams="{" + jsonparams +  " , PageNumber : '" + CurrentPage<%=Me.ClientID%> + "',PageSize : '" + PageSize<%=Me.ClientID%> + "'}";
        }
        else
        {
            ServiceFunParams="{PageNumber : '" + CurrentPage<%=Me.ClientID%> + "',PageSize : '" + PageSize<%=Me.ClientID%> + "'}";
        }

        GlobalServiceFunParams<%=Me.ClientID%> =jsonparams;

        dynamicfun<%=Me.ClientID%> = DataBindFunctionName;

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url:ServiceURL,
            data:ServiceFunParams,
            dataType: "json",
            async:false,
            success: function (data) {
                
                window[DataBindFunctionName](data);
                Onsuccess<%=Me.ClientID%>(data);
            },
            error: function (result) {
                ErrorLog(new Error(result));
                alert(ErrorMsg());
            }
        });

    }
    //=====================================================================================================================================================

    function Init<%=Me.ClientID%>(){
        CurrentPage<%=Me.ClientID%> = 1;
         PageSize<%=Me.ClientID%> = '<%=Me.DefaultPageSize%>';
         NoOfRecords<%=Me.ClientID%> = 0;
         NoOfPagaes<%=Me.ClientID%> = 0;
         PageSize<%=Me.ClientID%> = '<%=Me.DefaultPageSize%>';
         CurrentPage<%=Me.ClientID%> = 1;
     }

     function NoData() {
         NoOfRecords<%=Me.ClientID%> = 0;
        NoOfPagaes<%=Me.ClientID%> = 0;
        document.getElementById('lbl_noofpages<%=Me.ClientID%>').innerHTML= "0"
        document.getElementById('lbl_noofrecords<%=Me.ClientID%>').innerHTML= "0"; 
        //$("#div_paging<%=Me.ClientID%>").prop('disabled',true);
       // $("#div_paging<%=Me.ClientID%>").hide();
    }


    // =============== WEB SERVICE CALLING SUCCESS FUNCTION ==========================================
    function Onsuccess<%=Me.ClientID%>(rdata) 
    {    
        var IsDataSet="FALSE";
        var dtable=null;
        if (rdata !=null && rdata.d !=null)
        {
            if (trim(rdata.d)==""){
                NoData();
                return;
            }
            if(typeof jQuery.parseJSON(rdata.d).Table == "undefined")
            {
                dtable=rdata.d;
            }
            else
            {
                IsDataSet="TRUE";
                dtable=jQuery.parseJSON(rdata.d).Table;
            }
        }
        if(!dtable) 
        {
            NoData();
            return;
        }

        if(dtable.length > 0)
        {          
            //$("#div_paging<%=Me.ClientID%>").prop('disabled',false);
            $("#div_paging<%=Me.ClientID%>").show();
             
            var data;
            if(IsDataSet=="FALSE")
            {
                data = jQuery.parseJSON(dtable);   
            }
            else
            {
                var data = dtable;   
            }
             

            if(data.length!=0){
                NoOfRecords<%=Me.ClientID%> = data[0].NoOfRecords;
                NoOfPagaes<%=Me.ClientID%> =parseInt( NoOfRecords<%=Me.ClientID%> / PageSize<%=Me.ClientID%>);         
                //=============
                if(NoOfRecords<%=Me.ClientID%> > PageSize<%=Me.ClientID%>)
                {
                    if((NoOfRecords<%=Me.ClientID%> % PageSize<%=Me.ClientID%>) > 0)
                    {
                        NoOfPagaes<%=Me.ClientID%>= NoOfPagaes<%=Me.ClientID%> + 1;
                    }
                }
                //============

                if(NoOfPagaes<%=Me.ClientID%> < 1)
                    NoOfPagaes<%=Me.ClientID%> =1;       
                document.getElementById('lbl_noofpages<%=Me.ClientID%>').innerHTML= "Page "+ CurrentPage<%=Me.ClientID%>+ " of " + NoOfPagaes<%=Me.ClientID%> ;
                document.getElementById('lbl_noofrecords<%=Me.ClientID%>').innerHTML= data[0].NoOfRecords; 
            }
            else{
                  
                document.getElementById('lbl_noofpages<%=Me.ClientID%>').innerHTML= "Page "+ 0 + " of " + 0 ;
                document.getElementById('lbl_noofrecords<%=Me.ClientID%>').innerHTML= 0; 
            }
        }
        else
        {
            NoOfRecords<%=Me.ClientID%> =0; // data.d[0].NoOfRecords;
            NoOfPagaes<%=Me.ClientID%> = 0;//parseInt( NoOfRecords<%=Me.ClientID%> / PageSize<%=Me.ClientID%>);
            document.getElementById('lbl_noofpages<%=Me.ClientID%>').innerHTML= "0" //NoOfPagaes<%=Me.ClientID%> + " of " + CurrentPage<%=Me.ClientID%> ;
            document.getElementById('lbl_noofrecords<%=Me.ClientID%>').innerHTML= "0"; 
        }    
    }
    //=====================================================================================================================================================

    // ================ MOVE FIRST BUTTON CLICK EVENT    =====================================================
    function OnFirstButtonClick<%=Me.ClientID%>() 
    {
        CurrentPage<%=Me.ClientID%> = 1;
        OnGettingDataAndBind<%=Me.ClientID%>(dynamicfun<%=Me.ClientID%>,GlobalServiceFunParams<%=Me.ClientID%>);
    }
    // ==================================================================================================================================



    //==============  MOVE NEXT BUTTON CLICK EVENT  ==========================================================

    function OnNextButtonClick<%=Me.ClientID%>() {
       
        if (CurrentPage<%=Me.ClientID%> == NoOfPagaes<%=Me.ClientID%>)
            return;
        if (CurrentPage<%=Me.ClientID%> < NoOfPagaes<%=Me.ClientID%>) {
            //CurrentPage<%=Me.ClientID%> += 1;
            CurrentPage<%=Me.ClientID%> = parseInt(CurrentPage<%=Me.ClientID%>) + 1;
            OnGettingDataAndBind<%=Me.ClientID%>(dynamicfun<%=Me.ClientID%>,GlobalServiceFunParams<%=Me.ClientID%>);
        }
    }

    function OnPrevButtonClick<%=Me.ClientID%>() {
        if (CurrentPage<%=Me.ClientID%> == 1)
            return;
        if (CurrentPage<%=Me.ClientID%> <= NoOfPagaes<%=Me.ClientID%>) {
            CurrentPage<%=Me.ClientID%> -= 1;
            OnGettingDataAndBind<%=Me.ClientID%>(dynamicfun<%=Me.ClientID%>,GlobalServiceFunParams<%=Me.ClientID%>);
        }
    }

    function OnLastButtonClick<%=Me.ClientID%>() {
        CurrentPage<%=Me.ClientID%> = NoOfPagaes<%=Me.ClientID%>;
        OnGettingDataAndBind<%=Me.ClientID%>(dynamicfun<%=Me.ClientID%>,GlobalServiceFunParams<%=Me.ClientID%>);
    }

    function removeTableRow<%=Me.ClientID%>(CtrlId) {
        var index = 0;
        $("#" + CtrlId + " tbody tr").each(function () {
            if (index > 0) {
                this.parentNode.removeChild(this);
            }
            index = index + 1;
        });
    }

    function combo_pagesizechanged<%=Me.ClientID%>(ctrl) {
        PageSize<%=Me.ClientID%> = ctrl.value;
        CurrentPage<%=Me.ClientID%>=1;
        OnGettingDataAndBind<%=Me.ClientID%>(dynamicfun<%=Me.ClientID%>,GlobalServiceFunParams<%=Me.ClientID%>);
    }

    function Gotopage<%=Me.ClientID%>(){
        //alert(document.getElementById("txtgo<%=Me.ClientID%>"));
        var GotopageNo=document.getElementById("txtgo<%=Me.ClientID%>").value
        if(GotopageNo=="0" ||GotopageNo=="00" ||GotopageNo=="000" || GotopageNo=="0000" ||GotopageNo=="00000")
        {
            alert("Page not found.");
            document.getElementById("txtgo<%=Me.ClientID%>").value="";
             return false;
        }
        if (GotopageNo!="") 
        {
            if(GotopageNo > NoOfPagaes<%=Me.ClientID%>)
            {
                alert("Page not found.");
                document.getElementById("txtgo<%=Me.ClientID%>").value="";
                return false;
            }
            else
                CurrentPage<%=Me.ClientID%>=GotopageNo;
            OnGettingDataAndBind<%=Me.ClientID%>(dynamicfun<%=Me.ClientID%>,GlobalServiceFunParams<%=Me.ClientID%>);
            document.getElementById("txtgo<%=Me.ClientID%>").value="";
            return true;
        }
        else
            alert("Please enter page number.");
        return false;
    }

</script>


<div id="div_paging<%=Me.ClientID%>" style="border: 1px solid #C0C0C0; padding: 1px; background-color: #dbe1e4; font-family: Arial, Helvetica, sans-serif; font-size: small; height: 30px; white-space:nowrap">
    <table style="width: 100%; vertical-align:top" >
        <tr>
            <td style="vertical-align:top">
                <table>
                    <tr>
                        <td>

                            <input id="button_first" name="button_first" onclick="OnFirstButtonClick<%=Me.ClientID%>    ();" title="First Page" type="button" value="|&lt;" class="button blue" />
                        </td>
                        <td>
                            <input id="button_prev" name="button_prev" onclick="OnPrevButtonClick<%=Me.ClientID%>    ();" title="Previous Page" type="button" value="&lt;" class="button blue" />
                        </td>
                        <td>
                            <input id="button_next" name="button_next" onclick="OnNextButtonClick<%=Me.ClientID%>    ();" title="Next Page" type="button" value="&gt;" class="button blue" />
                        </td>
                        <td>
                            <input id="button1" name="button_last" onclick="OnLastButtonClick<%=Me.ClientID%>    ();" title="Last Page" type="button" value="&gt;|" class="button blue" />
                        </td>
                    </tr>
                </table>
            </td>
            <td style="white-space:nowrap;vertical-align:middle;text-align:right">Records per page:
                </td>
            <td>
                <select id="combo_pagesize<%=Me.ClientID%>" class="SelectCls" name="D1" onchange="combo_pagesizechanged<%=Me.ClientID%>(this);" style="width: 5em;">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </td>
            <td style="white-space:nowrap;vertical-align:middle;text-align:right">Enter page no:</td>
            <td style="white-space:nowrap;vertical-align:middle">
                <input id="txtgo<%=Me.ClientID%>" style="width: 4em;" type="text" class="TextCls" maxlength="5" onkeypress="OnlyNumericEntry()" />
                &nbsp;&nbsp;<input id="button_go" name="button_go" onclick="return Gotopage<%=Me.ClientID%>    ();" type="button" value="Go" class="button blue" />
            </td>
            <td align="right" style="white-space:nowrap;vertical-align:top;width:40%" nowrap="nowarp;">
              <table style="vertical-align:top;width:100%" ><tr><td style="white-space:nowrap;vertical-align:top;width:40%"> <label id="lbl_noofpages<%=Me.ClientID%>">
                </label>
                 </td> <td style="white-space:nowrap;width:60%">
                 No of records :
                <span id="lbl_noofrecords<%=Me.ClientID%>">
                </span></td></tr></table>
               
              </td>
        </tr>
    </table>
</div>

