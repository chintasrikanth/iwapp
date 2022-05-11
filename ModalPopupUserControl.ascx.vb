
Partial Class CommonUserControls_ModalPopupUserControl
    Inherits System.Web.UI.UserControl


    Public Property TableName() As String = ""
    Public Property ColumnName() As String = ""
    Public Property ColumnData() As String = ""
    Public Property InputControlName() As String = ""
    Public Property IDColumnName() As String = ""
    Public Property HiddenControlName() As String = ""
    Public Property JSFunctionName() As String = ""
    Public Property MultiSelect() As Boolean = False
    Public Property Width() As String = "800"
    Public Property Height() As String = "450"
    Public Property Title() As String = "Data search"
    Public Property ConditionColumn As String = ""
    Public Property ConditionColumnValue As String = ""


End Class
