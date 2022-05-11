
Partial Class MasterPages_PWMMaster
    Inherits System.Web.UI.MasterPage



    Private Const AntiXsrfTokenKey As String = "__AntiXsrfToken"
    Private Const AntiXsrfUserNameKey As String = "__AntiXsrfUserName"
    Private _antiXsrfTokenValue As String

    'Protected Sub Page_Init(sender As Object, e As EventArgs)
    '    'First, check for the existence of the Anti-XSS cookie
    '    Dim requestCookie = Request.Cookies(AntiXsrfTokenKey)
    '    Dim requestCookieGuidValue As Guid


    '    If requestCookie IsNot Nothing AndAlso Guid.TryParse(requestCookie.Value, requestCookieGuidValue) Then

    '        _antiXsrfTokenValue = requestCookie.Value


    '        Page.ViewStateUserKey = _antiXsrfTokenValue
    '    Else

    '        _antiXsrfTokenValue = Guid.NewGuid().ToString("N")


    '        Page.ViewStateUserKey = _antiXsrfTokenValue


    '        Dim responseCookie = New HttpCookie(AntiXsrfTokenKey) With {.HttpOnly = True, .Value = _antiXsrfTokenValue}


    '        If FormsAuthentication.RequireSSL AndAlso Request.IsSecureConnection Then
    '            responseCookie.Secure = True
    '        End If


    '        Response.Cookies.[Set](responseCookie)
    '    End If

    '    AddHandler Page.PreLoad, AddressOf master_Page_PreLoad
    'End Sub

    'Protected Sub master_Page_PreLoad(sender As Object, e As EventArgs)
    '    'During the initial page load, add the Anti-XSRF token and user
    '    'name to the ViewState
    '    If Not IsPostBack Then
    '        'Set Anti-XSRF token
    '        ViewState(AntiXsrfTokenKey) = Page.ViewStateUserKey

    '        'If a user name is assigned, set the user name
    '        ViewState(AntiXsrfUserNameKey) = If(Context.User.Identity.Name, [String].Empty)
    '    Else
    '        'During all subsequent post backs to the page, the token value from
    '        'the cookie should be validated against the token in the view state
    '        'form field. Additionally user name should be compared to the
    '        'authenticated users name
    '        'Validate the Anti-XSRF token
    '        If DirectCast(ViewState(AntiXsrfTokenKey), String) <> _antiXsrfTokenValue OrElse DirectCast(ViewState(AntiXsrfUserNameKey), String) <> (If(Context.User.Identity.Name, [String].Empty)) Then
    '            Throw New InvalidOperationException("Validation ofAnti-XSRF token failed.")
    '        End If
    '    End If
    'End Sub


    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
        If IsPostBack Then Return
        Dim path As String = GetVirtualPath()
        If Not (path.Contains("ForgetPasswordPage.aspx") Or path.Contains("ChangePassword.aspx")) Then
            If Session("UserID") Is Nothing Then
                Response.Redirect("~/Logout.aspx")
            ElseIf String.IsNullOrWhiteSpace(Convert.ToString(Session("UserID"))) Then
                'Response.Redirect("~/Logout.aspx")
            Else
                If Session("ModuleID") Is Nothing Then
                    hdnfld_ModID.Value = ""
                    ' Response.Redirect("~/WelcomePage.aspx")
                Else
                    hdnfld_ModID.Value = Convert.ToString(Session("ModuleID"))

                End If
                If Session("PageLevel") Is Nothing Then
                    hdnpagelevel.Value = ""
                Else
                    hdnpagelevel.Value = Convert.ToString(Session("PageLevel"))
                End If
            End If
        End If
    End Sub

    Private Shared Function GetVirtualPath() As String
        Dim path As String = HttpContext.Current.Request.RawUrl
        path = path.Substring(path.LastIndexOf("/") + 1)
        Return path
    End Function
   
    <System.Web.Script.Services.ScriptMethod> _
<System.Web.Services.WebMethod(EnableSession:=True)> _
    Public Shared Function CheckSession() As String
        Try
            If Not HttpContext.Current.Session("UserID") Is Nothing Then
                Dim page As Page = TryCast(HttpContext.Current.CurrentHandler, Page)
                If page IsNot Nothing AndAlso Not page.ClientScript.IsClientScriptBlockRegistered("alert") Then
                    page.ClientScript.RegisterClientScriptBlock(GetType(Page), "alert", "<script type=""text/javascript""> alert('Session Timeout');")
                End If
                HttpContext.Current.Response.Redirect("../login.aspx")
            End If
        Catch ex As Exception
            WebErrorUtility.ErrorLog(ex)
        End Try

        Return ""

    End Function

End Class

