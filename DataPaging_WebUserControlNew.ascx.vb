
Partial Class CommonUserControls_DataPaging_WebUserControlNew
    Inherits System.Web.UI.UserControl
    Public Property ServiceURL() As String
    Public Property DefaultPageNumber() As Integer = 1
    Public Property DefaultPageSize() As Integer = ConfigurationManager.AppSettings("DefaultPageSize")
    Public Property DefaultServiceParamatersJSontype() As String = ""
End Class
