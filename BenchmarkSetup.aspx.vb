Imports PWM_MasterBllService
Partial Class Masters_BenchmarkSetup
    Inherits System.Web.UI.Page
    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
        Try
            If IsPostBack Then
                Return
            End If
            WebCommonUtility.BindEmptyGrid(grdBenchmarkSetup, New String() {"Benchmark_Name", "Short_Name", "Benchmark_Desc", "Record_Type", "VerNo", "Edit", "Reverse", "View"})
        Catch ex As Exception
            WebErrorUtility.ErrorLog(ex)
            ScriptManager.RegisterStartupScript(Me, Me.GetType(), WebErrorUtility.ErrorKey, WebErrorUtility.ErrorMsg(), True)
        End Try
    End Sub

    <System.Web.Script.Services.ScriptMethod> _
  <System.Web.Services.WebMethod(EnableSession:=True)> _
    Public Shared Function GetBenchmarkList(ByVal SortBy As String, ByVal SortByColumnName As String, ByVal ID As Integer, ByVal PageNumber As Integer, ByVal PageSize As Integer, ByVal Record_Type As String, ByVal Verson As String, ByVal SearchVal As String) As String
        Dim robj As New CommonReturnType
        Try
            Dim data As Pagination = New Pagination
            data.PageNumber = PageNumber
            data.PageSize = PageSize
            data.SortBy = SortBy
            data.SortByColumnName = SortByColumnName
            data.PKID = ID
            data.RecordType = Record_Type
            data.VerNo = Verson
            data.PlanId = SearchVal.Trim()
            data.Company_Code = HttpContext.Current.Session("CompanyID").ToString()
            data.UserID = HttpContext.Current.Session("UserID").ToString()
            'data.ID = ID
            Using sobj As New PWM_MasterBllService.MasterBllClient
                robj = sobj.GetBenchmarkList(data)
            End Using
        Catch ex As Exception
            WebErrorUtility.ErrorLog(ex)
        End Try
        Return robj.JSONData

    End Function

    Protected Sub btn_Save_Click(sender As Object, e As EventArgs) Handles btn_Save.Click
        Dim robj As New CommonReturnType
        Dim data As BenchmarkSetup = Nothing
        Try
            data = New BenchmarkSetup
            data.Benchmark_Name = txtBenchmarkName.Text
            data.Benchmark_Code = txtShortName.Text.ToUpper().ToString()
            data.Benchmark_Desc = txtBenchmarkDesc.Text
            data.VerNo = 1
            data.Record_Type = "N"
            data.DMLMode = "I"
            data.Inputted_By = Session("UserID").ToString()
            data.Company_Code = Session("CompanyID").ToString()
            Using sobj As New PWM_MasterBllService.MasterBllClient
                robj = sobj.SaveBenchmark(data)
                ScriptManager.RegisterStartupScript(Me, Me.GetType(), "alert", "alert('" + robj.StatusMessage + "');", True)
                ScriptManager.RegisterStartupScript(Me, Me.GetType(), "SomeKeyName", "location.href = location.href;", True)
            End Using
        Catch ex As Exception
            WebErrorUtility.ErrorLog(ex)
            ScriptManager.RegisterStartupScript(Me, Me.GetType(), WebErrorUtility.ErrorKey, WebErrorUtility.ErrorMsg("btn_Save_Click", True), True)
        End Try
    End Sub

    Protected Sub btn_Update_Click(sender As Object, e As EventArgs) Handles btn_Update.Click, btn_Reverse.Click
        Dim robj As New CommonReturnType
        Dim Flag As String = Nothing
        Dim data As BenchmarkSetup = Nothing
        Try
            Flag = TryCast(sender, Button).CommandArgument
            data = New BenchmarkSetup
            data.Benchmark_Name = txtBenchmarkName.Text
            data.Benchmark_Code = txtShortName.Text.ToUpper().ToString()
            data.Benchmark_Desc = txtBenchmarkDesc.Text
            data.VerNo = hdnVerNo.Value
            data.ID = hdnID.Value
            data.Record_Type = hdnRecType.Value
            data.DMLMode = Flag
            data.Inputted_By = Session("UserID").ToString()
            data.Company_Code = Session("CompanyID").ToString()

            Using sobj As New PWM_MasterBllService.MasterBllClient
                robj = sobj.SaveBenchmark(data)
                ScriptManager.RegisterStartupScript(Me, Me.GetType(), "alert", "alert('" + robj.StatusMessage + "');", True)
                ScriptManager.RegisterStartupScript(Me, Me.GetType(), "BenSave", "location.href = location.href;", True)
            End Using
       Catch ex As Exception
            WebErrorUtility.ErrorLog(ex)
            ScriptManager.RegisterStartupScript(Me, Me.GetType(), WebErrorUtility.ErrorKey, WebErrorUtility.ErrorMsg(Flag, True), True)
        End Try
    End Sub

End Class
