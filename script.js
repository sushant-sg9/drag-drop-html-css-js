document.addEventListener("DOMContentLoaded", function() {
    var items = document.querySelectorAll(".item");
    var container1 = document.querySelector("#container1");
    var container2 = document.querySelector("#container2");
    var successMessage = document.querySelector("#successMessage");
    var resetButton = document.querySelector("#resetButton");
  
    // Add drag event listeners to items in the first container
    items.forEach(function(item) {
      item.addEventListener("dragstart", handleDragStart, false);
      item.addEventListener("dragend", handleDragEnd, false);
    });
  
    // Add drop event listener to the second container
    container2.addEventListener("dragover", handleDragOver, false);
    container2.addEventListener("drop", handleDrop, false);
  
    // Reset button click event listener
    resetButton.addEventListener("click", handleReset, false);
  
    // Drag event handlers
    function handleDragStart(event) {
      event.dataTransfer.setData("text/plain", event.target.id);
      event.currentTarget.style.opacity = "0.4";
    }
  
    function handleDragEnd(event) {
      event.currentTarget.style.opacity = "1";
    }
  
    // Drop event handlers
    function handleDragOver(event) {
      event.preventDefault();
    }
  
    function handleDrop(event) {
      event.preventDefault();
      var itemId = event.dataTransfer.getData("text/plain");
      var item = document.getElementById(itemId);
  
      // Check if the item is being dropped from container1 to container2
      if (container1.contains(item) && !container2.contains(item)) {
        container2.appendChild(item);
        item.style.backgroundColor = "lightblue"; // Change the background color
  
        // Display success message
        successMessage.style.display = "block";
      }
    }
  
    // Reset button click handler
    function handleReset() {
      // Clear second container
      while (container2.firstChild) {
        container2.removeChild(container2.firstChild);
      }
  
      // Reset first container to original state
      items.forEach(function(item) {
        container1.appendChild(item);
        item.style.backgroundColor = ""; // Reset background color
      });
  
      // Hide success message
      successMessage.style.display = "none";
    }
  });
  