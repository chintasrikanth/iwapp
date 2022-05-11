
Partial Class CommonUserControls_ClientCall
    Inherits System.Web.UI.UserControl
    Public ReadOnly Property ClientValue() As String
        Get
            Return hdnCalllstcontacted.Value
        End Get
    End Property

    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
        Try
            If IsPostBack Then
                Return
            End If
            hdnUserID.Value = Session("UserID").ToString()
            hdnCompanyID.Value = Session("CompanyID").ToString()
        Catch ex As Exception
            WebErrorUtility.ErrorLog(ex)
            ScriptManager.RegisterStartupScript(Me, Me.GetType(), WebErrorUtility.ErrorKey, WebErrorUtility.ErrorMsg(), True)
        End Try
    End Sub
End Class
