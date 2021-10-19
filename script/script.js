var categories =[
    {
        sn : 1,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 2,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 3,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    
    {
        sn : 4,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 5,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 6,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 7,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 8,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 9,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 10,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 11,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 12,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 13,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 14,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 15,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 16,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 17,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 18,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 19,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 20,
        categoryName : "Category Name",
        numberOfPolls : 684

    }
]

var messages =[
    {
        image:"Mask Group (1).png",
        name:"Tom Crusie Anthony",
        date:"11:54am | Monday 7th",
        textMssg:"Good afternoon, i cannot upload the ........."
    },
    {
        image:"Mask Group (1).png",
        name:"Tom Crusie Anthony",
        date:"11:54am | Monday 7th",
        textMssg:"Good afternoon, i cannot upload the ........."
    },
    {
        image:"Mask Group (1).png",
        name:"Tom Crusie Anthony",
        date:"11:54am | Monday 7th",
        textMssg:"Good afternoon, i cannot upload the ........."
    },
    {
        image:"Mask Group (1).png",
        name:"Tom Crusie Anthony",
        date:"11:54am | Monday 7th",
        textMssg:"Good afternoon, i cannot upload the ........."
    },
    {
        image:"Mask.png",
        name:"Tom Crusie Anthony",
        date:"11:54am | Monday 7th",
        textMssg:"Good afternoon, i cannot upload the ........."
    },
    {
        image:"Mask.png",
        name:"Tom Crusie Anthony",
        date:"11:54am | Monday 7th",
        textMssg:"Good afternoon, i cannot upload the ........."
    },
    {
        image:"Mask Group (1).png",
        name:"Tom Crusie Anthony",
        date:"11:54am | Monday 7th",
        textMssg:"Good afternoon, i cannot upload the ........."
    }
]

var displayCategory = document.getElementById("cat");
var html = "";

categories.forEach(e =>{
    html +=`
    <tr>
        <th scope="row">${e.sn}</th>
        <td>${e.categoryName}</td>
        <td>${e.numberOfPolls}</td> 
        <td><span><img src="./images/border_color_24px_outlined.svg" alt="" class="px-2"></span> <span><img src="./images/visibility_24px_outlined.svg" alt="" class="px-2"></span></t d>
    </tr>

    `
    
    displayCategory.innerHTML = html;
})

$(document).ready(function() {
    $('#tab').DataTable({
        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search",
            "paginate": {
                "previous": "&lt&lt",
                "next": "&gt&gt"
              }
        },
        "pagingType": "simple_numbers",
        "bLengthChange": false,
        "bFilter": true,
        "bAutoWidth": false,
        searching: false
    } );
    }) ;
    $(function() {

        $(".progress").each(function() {
      
          var value = $(this).attr('data-value');
          var left = $(this).find('.progress-left .progress-bar');
          var right = $(this).find('.progress-right .progress-bar');
      
          if (value > 0) {
            if (value <= 50) {
              right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
            } else {
              right.css('transform', 'rotate(180deg)')
              left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
            }
          }
      
        })
      
        function percentageToDegrees(percentage) {
        
          return percentage / 100 * 360
      
        }
      
      });

    /*messages*/
    $('.card-body').scrollTop(1000000);

    var displayMssg = document.getElementById("card-mssg");
    var mssg = "";

      messages.forEach(a =>{
             mssg +=`

                        
                            <div class="row g-0">
                                
                              <div class="col-2">${c.image}</div>
                              <div class="col-10">
                                <div class="card-body">
                                
                                    <div class="d-flex align-items-center justify-content-between mb-0">
                                        <h6 class="card-title col-5 font">${c.name}</h6>
                                  <p class="card-text col-5"><small class="text-muted font">${e.date}</small></p>
                                      </div>
                                      <p class="card-text mx-3 mb-2 font">${c.textMssg}</p>
                                  </div>
                                  
                                  
                                </div>
                              
    `
    console.log(c)
    displayMssg.innerHTML = mssg;
})
