    $(document).ready(function(){
        
        
        $("#grid").kendoGrid({
            sortable: true, 
            pagable: true, 
            filterable: true, 
            
            //Sample Column Names
            
            columns: [{
                field: "sampleHeader1",
                title: "Sample Header 1"
            },
            {
                field: "sampleHeader2",
                title: "Sample Header 2"
            }, 
            {
                field: 'sampleHeader3', 
                title: 'Sample Header 3'
            },
            {
                field: 'sampleHeader4', 
                title: 'Sample Header 4'
            }, 
            {
                field: 'sampleHeader5', 
                title: 'Sample Header 5'
            }],
            
            //Sample Data
            
            dataSource: {
                data: [{
                    sampleHeader1: "xxxxx",
                    sampleHeader2: "xxxxx", 
                    sampleHeader3: "xxxxx", 
                    sampleHeader4: "xxxxx", 
                    sampleHeader5: "xxxxx"
                },
                {
                    sampleHeader1: "xxxxx",
                    sampleHeader2: "xxxxx", 
                    sampleHeader3: "xxxxx", 
                    sampleHeader4: "xxxxx", 
                    sampleHeader5: "xxxxx"
                },
                {
                    sampleHeader1: "xxxxx",
                    sampleHeader2: "xxxxx", 
                    sampleHeader3: "xxxxx", 
                    sampleHeader4: "xxxxx", 
                    sampleHeader5: "xxxxx"
                },
                {
                    sampleHeader1: "xxxxx",
                    sampleHeader2: "xxxxx", 
                    sampleHeader3: "xxxxx", 
                    sampleHeader4: "xxxxx", 
                    sampleHeader5: "xxxxx"
                },
                {
                    sampleHeader1: "xxxxx",
                    sampleHeader2: "xxxxx", 
                    sampleHeader3: "xxxxx", 
                    sampleHeader4: "xxxxx", 
                    sampleHeader5: "xxxxx"
                },
                ]
            }
        });
        
        //formatting for table
        $('tr:even').css('background-color', '#ffcc99');
        $('tr:odd').css('background-color', 'white'); 
        $('tr').css('border', '2px solid white'); 
    });