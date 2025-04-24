    $(document).ready(function() {
    // Variable
    var apiUrl = 'https://dota2stefan-skliarovv1.p.rapidapi.com/getGameItems';
  
    // AJAX
    $.ajax({
      'url': 'https://dota2stefan-skliarovv1.p.rapidapi.com/getMatchHistory',
      'method': 'GET',
      'headers': {
        'X-RapidAPI-Key': '4f27de9679msh60c0fb73ff29d3dp17a412jsne1df1f070ede',
        'X-RapidAPI-Host': 'Dota2stefan-skliarovV1.p.rapidapi.com'
      },
      success: function(response) {
        // Blok kondisional
        if (response && response.items) {
          // Loop through items and display them
          response.items.forEach(function(item) {
            $('#itemList').append('<div class="item"><h2>' + item.name + '</h2><p>Type: ' + item.type + '</p><p>Cost: ' + item.cost + '</p></div>');
          });
        } else {
          $('#itemList').append('<div>No items available</div>');
        }
      },
      error: function() {
        $('#itemList').append('<div>Error loading items</div>');
      }
    });
  
    // jQuery Event
    $('#itemList').on('click', '.item', function() {
      // Example event handling, can be customized
      alert('You clicked an item!');
    });
  
    // Fungsi
    function refreshItemList() {
      $('#itemList').empty();
      $.ajax({
        'url': 'https://dota2stefan-skliarovv1.p.rapidapi.com/getMatchHistory',
        'method': 'GET',
        'headers': {
          'X-RapidAPI-Key': '4f27de9679msh60c0fb73ff29d3dp17a412jsne1df1f070ede',
          'X-RapidAPI-Host': 'Dota2stefan-skliarovV1.p.rapidapi.com'
        },
        success: function(response) {
          if (response && response.items) {
            response.items.forEach(function(item) {
              $('#itemList').append('<div class="item"><h2>' + item.name + '</h2><p>Type: ' + item.type + '</p><p>Cost: ' + item.cost + '</p></div>');
            });
          } else {
            $('#itemList').append('<div>No items available</div>');
          }
        },
        error: function() {
          $('#itemList').append('<div>Error loading items</div>');
        }
      });
    }
  });
  