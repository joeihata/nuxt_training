export default function (context) {
    console.log("Check auth of you")
    if (process.client) {
        context.store.dispatch("initAuth")
    }
}