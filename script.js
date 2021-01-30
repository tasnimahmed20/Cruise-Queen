//booking ticket and calculting price
function ticketCount(className, isIncrease) {
    const ticketInput = document.getElementById(className + "Ticket").value
    const ticketCount = parseInt(ticketInput)
    let newTicketCount = ticketCount;
    if (isIncrease == true) {
        newTicketCount = ticketCount + 1
    } else if (isIncrease == false && newTicketCount > 0) {
        newTicketCount = ticketCount - 1
    }
    document.getElementById(className + "Ticket").value = newTicketCount
    calculateTotalPrice()
}

function getTicketValue(className) {
    const ticketInput = document.getElementById(className + "Ticket").value
    ticketNumber = parseInt(ticketInput)
    return ticketNumber
}

function calculateTotalPrice() {
    const firstClassTicketCount = getTicketValue('firstClass')
    const economyClassTicketCount = getTicketValue('economyClass')

    const firstClassTicketPrice = 150
    const economyClassTicketPrice = 100
    const subTotal = firstClassTicketCount * firstClassTicketPrice + economyClassTicketCount * economyClassTicketPrice
    document.getElementById("subtotal").innerText = subTotal

    const vat = subTotal * 0.1
    document.getElementById("vat").innerText = vat

    const grandTotal = subTotal + vat
    document.getElementById('total').innerText = grandTotal

}

//Trying to give a confirmation  alert

document.getElementById('bookNow').addEventListener("click", function() {
    const firstClassTicketCount = getTicketValue('firstClass')
    const economyClassTicketCount = getTicketValue('economyClass')

    if (firstClassTicketCount == 0 && economyClassTicketCount == 0) {
        document.getElementById("unsuccessAlert").style.display = "block"
        document.getElementById("bookingForm").style.display = "none"

    } else if (firstClassTicketCount > 0 || economyClassTicketCount > 0) {
        document.getElementById("successAlert").style.display = "block"
        document.getElementById("bookingForm").style.display = "none"
    }
})
document.getElementById('confirm').addEventListener("click", function() {
    bookingAlert("successAlert")
})
document.getElementById('cancel').addEventListener("click", function() {
    bookingAlert("unsuccessAlert")
})

function bookingAlert(id) {
    document.getElementById(id).style.display = "none"
    document.getElementById("bookingForm").style.display = "block"
}