document.addEventListener("DOMContentLoaded", () => {
  const buttonAddTrip = document.getElementById("button-add-trip");
  const tableTripBody = document.getElementById("table-trip-body");
  const modalTripName = document.getElementById("modal-trip-name");
  const nameTripInput = document.getElementById("name-trip-input");
  const createTripButton = document.getElementById("create-trip-button");
  const cancelCreateTripButton = document.getElementById(
    "cancel-create-trip-button"
  );

  buttonAddTrip.addEventListener("click", () => {
    nameTripInput.value = "";
    modalTripName.style.display = "block";
  });

  createTripButton.addEventListener("click", () => {
    const tripName = nameTripInput.value.trim();
    if (!tripName) {
      alert("Enter trip name");
      return;
    }

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${tripName}</td>
      <td>-</td>
      <td>—</td>
      <td>$0.00</td>
      <td><span class="status">Quoting</span></td>
      <td>
        <button class="detailButton">Detail</button>
        <button class="deleteButton">Delete</button>
      </td>
    `;

    row.querySelector(".deleteButton").addEventListener("click", () => {
      row.remove();
    });
    cancelCreateTripButton.addEventListener("click", () => {
      modalTripName.style.display = "none";
    });

    tableTripBody.append(row);
    modalTripName.style.display = "none";
  });
});
