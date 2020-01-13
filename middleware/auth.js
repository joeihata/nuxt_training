export default function (context) {
    console.log("I got token")
    if (!context.store.getters.isAuthenticated) {
        context.redirect('/admin/auth')
    }
}
