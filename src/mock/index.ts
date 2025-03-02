import Mock from "mockjs"
Mock.setup({
    timeout: "200-600"
})
//Login interface
Mock.mock("https://www.demo.com/login", "post", (options: any) => {
    //console.log("options",options.body)
    const { username, password } = JSON.parse(options.body)
    if (username === "admin" && password === "admin123123") {
        return {
            code: 200,
            message: "Login successful",
            data: {
                username: "John Smith",
                token: "mocktoken123456admin",
                btnAuth:["add","edit","delete"]
            }
        }
    } else if (username === "manager" && password === "manager123123") {
        return {
            code: 200,
            message: "Login successful",
            data: {
                username: "manager",
                token: "mocktoken123456manager",
                btnAuth:["add","edit"]
            }
        }
    } else if (username == "user" && password === "user123123") {
        return {
            code: 200,
            message: "Login successful",
            data: {
                username: "user",
                token: "mocktoken123456user",
                btnAuth:["add"]
            }
        }
    } else {
        return {
            code: 401,
            message: "Invalid username or password",
            data: ""
        }
    }


})

const menuList = [
    {
        "icon": "DashboardOutlined",
        "label": "Dashboard",
        "key": "/dashboard",
    },
    {

        "icon": "TeamOutlined",
        "label": "Tenant Management",
        "key": "/users",
        "children": [
            {
                "icon": "UnorderedListOutlined",
                "label": "Tenant List",
                "key": "/users/list",
            },
            {
                "icon": "UserAddOutlined",
                "label": "Add Tenant",
                "key": "/users/add",
            }
        ]
    },
    {
        "icon": "LaptopOutlined",
        "label": "Property Management",
        "key": "/estate",
        "children": [
            {

                "icon": "InsertRowLeftOutlined",
                "label": "Building Management",
                "key": "/estate/tenement",

            },
            {
                "icon": "BankOutlined",
                "label": "Room Management",
                "key": "/estate/room",
            },
            {
                "icon": "TruckOutlined",
                "label": "Vehicle Information",
                "key": "/estate/car",
            }
        ]
    },
    {
        "icon": "ToolOutlined",
        "label": "Maintenance Management",
        "key": "/repair"
    },
    {
        "icon": "DollarOutlined",
        "label": "Financial Management",
        "key": "/finance",
        "children": [
            {

                "icon": "ProfileOutlined",
                "label": "Contract Management",
                "key": "/finance/contract",

            },
            {
                "icon": "FrownOutlined",
                "label": "Contract Details",
                "key": "/finance/surrender",
            },
            {
                "icon": "FileTextOutlined",
                "label": "Bill Management",
                "key": "/finance/bill",
            }
        ]
    },
    {
        "icon": "TransactionOutlined",
        "label": "Business Development",
        "key": "/merchants",
    },
    {
        "icon": "FundProjectionScreenOutlined",
        "label": "Operations Management",
        "key": "/operation",
        "children": [
            {

                "icon": "FundViewOutlined",
                "label": "Operations Overview",
                "key": "/operation/all",

            },
            {
                "icon": "ReadOutlined",
                "label": "Article Publishing",
                "key": "/operation/article",
            },
            {
                "icon": "CommentOutlined",
                "label": "Content Comments",
                "key": "/operation/comments",
            }
        ]
    },
    {
        "icon": "ToolOutlined",
        "label": "Equipment Management",
        "key": "/equipment",
    },
    {
        "icon": "ThunderboltOutlined",
        "label": "Energy Consumption",
        "key": "/energy",
    },
    {
        "icon": "SettingOutlined",
        "label": "System Settings",
        "key": "/settings",
    },
    {
        "icon": "UserOutlined",
        "label": "Personal Center",
        "key": "/personal",
    }
]

const userMenuList = [
    {
        "icon": "DashboardOutlined",
        "label": "Dashboard",
        "key": "/dashboard",
    },
    {

        "icon": "TeamOutlined",
        "label": "Tenant Management",
        "key": "/users",
        "children": [
            {
                "icon": "UnorderedListOutlined",
                "label": "Tenant List",
                "key": "/users/list",
            },
            {
                "icon": "UserAddOutlined",
                "label": "Add Tenant",
                "key": "/users/add",
            }
        ]
    },
    {
        "icon": "LaptopOutlined",
        "label": "Property Management",
        "key": "/estate",
        "children": [
            {

                "icon": "InsertRowLeftOutlined",
                "label": "Building Management",
                "key": "/estate/tenement",

            },
            {
                "icon": "BankOutlined",
                "label": "Room Management",
                "key": "/estate/room",
            },
            {
                "icon": "TruckOutlined",
                "label": "Vehicle Information",
                "key": "/estate/car",
            }
        ]
    },
    {
        "icon": "ToolOutlined",
        "label": "Maintenance Management",
        "key": "/repair"
    },
    {
        "icon": "ToolOutlined",
        "label": "Equipment Management",
        "key": "/equipment",
    },
    {
        "icon": "ThunderboltOutlined",
        "label": "Energy Consumption",
        "key": "/energy",
    },
    {
        "icon": "UserOutlined",
        "label": "Personal Center",
        "key": "/personal",
    }
]

const managerMenuList = [
    {
        "icon": "DashboardOutlined",
        "label": "Dashboard",
        "key": "/dashboard",
    },
    {

        "icon": "TeamOutlined",
        "label": "Tenant Management",
        "key": "/users",
        "children": [
            {
                "icon": "UnorderedListOutlined",
                "label": "Tenant List",
                "key": "/users/list",
            },
            {
                "icon": "UserAddOutlined",
                "label": "Add Tenant",
                "key": "/users/add",
            }
        ]
    },
    {
        "icon": "LaptopOutlined",
        "label": "Property Management",
        "key": "/estate",
        "children": [
            {

                "icon": "InsertRowLeftOutlined",
                "label": "Building Management",
                "key": "/estate/tenement",

            },
            {
                "icon": "BankOutlined",
                "label": "Room Management",
                "key": "/estate/room",
            },
            {
                "icon": "TruckOutlined",
                "label": "Vehicle Information",
                "key": "/estate/car",
            }
        ]
    },
    {
        "icon": "ToolOutlined",
        "label": "Maintenance Management",
        "key": "/repair"
    },
    {
        "icon": "TransactionOutlined",
        "label": "Business Development",
        "key": "/merchants",
    },
    {
        "icon": "FundProjectionScreenOutlined",
        "label": "Operations Management",
        "key": "/operation",
        "children": [
            {

                "icon": "FundViewOutlined",
                "label": "Operations Overview",
                "key": "/operation/all",

            },
            {
                "icon": "ReadOutlined",
                "label": "Article Publishing",
                "key": "/operation/article",
            },
            {
                "icon": "CommentOutlined",
                "label": "Content Comments",
                "key": "/operation/comments",
            }
        ]
    },
    {
        "icon": "ToolOutlined",
        "label": "Equipment Management",
        "key": "/equipment",
    },
    {
        "icon": "ThunderboltOutlined",
        "label": "Energy Consumption",
        "key": "/energy",
    },
    {
        "icon": "SettingOutlined",
        "label": "System Settings",
        "key": "/settings",
    },
    {
        "icon": "UserOutlined",
        "label": "Personal Center",
        "key": "/personal",
    }
]

const customizeMenuList = [
    {
      "icon": "DashboardOutlined",
      "label": "Dashboard",
      "key": "/dashboard",
    },
    {
  
      "icon": "TeamOutlined",
      "label": "Tenant Management",
      "key": "/users",
      "children": [
        {
          "icon": "UnorderedListOutlined",
          "label": "Tenant List",
          "key": "/users/list",
        },
      ]
    },
    {
      "icon": "LaptopOutlined",
      "label": "Property Management",
      "key": "/estate",
      "children": [
        {
          "icon": "InsertRowLeftOutlined",
          "label": "Building Management",
          "key": "/estate/tenement",
        },
       
      ]
    },
    {
      "icon": "ToolOutlined",
      "label": "Maintenance Management",
      "key": "/repair"
    },
    {
      "icon": "ToolOutlined",
      "label": "Equipment Management",
      "key": "/equipment",
    },
    {
      "icon": "ThunderboltOutlined",
      "label": "Energy Consumption",
      "key": "/energy",
    },
    {
      "icon": "UserOutlined",
      "label": "Personal Center",
      "key": "/personal",
    }
  ]
  

//Menu interface
Mock.mock('https://www.demo.com/menu', "get", (options: any) => {
    const token = sessionStorage.getItem("token");
    if (token == "mocktoken123456admin") {
        return {
            code: 200,
            message: 'Request successful',
            data: menuList
        }
    } else if (token == "mocktoken123456user") {
        return {
            code: 200,
            message: 'Request successful',
            data: userMenuList
        }
    } else if (token == "mocktoken123456manager") {
        return {
            code: 200,
            message: 'Request successful',
            data: managerMenuList
        }
    } else {
        return {
            code: 200,
            message: "Failed",
            data: []
        }
    }
})
//Chart interface in dashboard

Mock.mock('https://www.demo.com/energyData',"get",()=>{
    return {
        code:200,
        message:"Request successful",
        data:[
            {name:"Coal",data:[120, 132, 101, 134, 90, 230, 210]},
            {name:"Gas",data:[220, 182, 191, 234, 290, 330, 310]},
            {name:"Oil",data: [150, 232, 201, 154, 190, 330, 410]},
            {name:"Electricity",data:[320, 332, 301, 334, 390, 330, 320]},
            {name:"Heat",data:[820, 932, 901, 934, 1290, 1330, 1320]}
        ]
    }
})

Mock.Random.extend({
    phone: function () {
      var phonePrefixs = ['13','14','15','16','17','18','19'] // Phone number prefixes
      return this.pick(phonePrefixs) + Mock.mock(/\d{9}/) //Number()
    }
  })

//Tenant list interface
Mock.mock("https://www.demo.com/userList","post",(options:any)=>{
    const {pageSize,page,companyName,contact,phone}=JSON.parse(options.body)
    console.log("Received tenant list parameters",page,pageSize,companyName,contact,phone)
    return {
        code:200,
        message:"Success",
        data:Mock.mock({
            [`list|${pageSize}`]:[
                {
                    "id":"@string('number',6)", // Generate random 6-digit ID
                    "name":"@name", // Changed from @cname to @name for English names
                    "status|1":["1","2","3"],
                    "tel":'@phone',
                    "business|1": ['Manufacturing','Internet','New Media','Beauty Industry','New Energy','Logistics','E-commerce'],
                    "email":"@email",
                    "creditCode":"@string('number',18)",
                    "industryNum":"@string('number',15)",
                    "organizationCode":"@string('upper',9)",
                    "legalPerson":"@name", // Changed from @cname to @name for English names
                },
            ],
            total:78
        })
    }
})

//Delete company
Mock.mock('https://www.demo.com/deleteUser','post',(options:any)=>{
  const {id}=JSON.parse(options.body);
  console.log("Delete company",id);
  return {
    code: 200,
    message: "Success",
    data:"Operation successful"
  }
})

//Batch delete companies
Mock.mock('https://www.demo.com/batchDeleteUser','post',(options:any)=>{
  const {ids}=JSON.parse(options.body);
  console.log("ids",ids)
  return {
    code: 200,
    message: "Success",
    data:"Operation successful"
  }
})
//Edit company
Mock.mock('https://www.demo.com/editUser','post',(options:any)=>{
  console.log("Received edit company parameters",JSON.parse(options.body))
  return {
    code: 200,
    message: "Success",
    data:"Operation successful"
  }
})
//Get room list interface
function generateRooms() {
    const rooms = [];
    for (let i = 0; i < 50; i++) {
        const floor = 1 + Math.floor(i / 6); // 6 rooms per floor
        const roomNumber = floor * 100 + (101 + (i % 6)); // Calculate room number
        rooms.push({
            roomNumber,
            decorationType: Mock.Random.pick(['Bare', 'Furnished']),
            area: Mock.Random.integer(70, 300),
            unitPrice: Mock.Random.integer(1, 3),
            src:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        });
    }
    return rooms;
}

Mock.mock('https://www.demo.com/roomList', 'post', (options:any) => {
    console.log("Received room id",JSON.parse(options.body).roomid)
    return {
        code: 200,
        message: "Success",
        data: {
            rooms: generateRooms()
        }
    };
});

//Bill management
Mock.mock('https://www.demo.com/billList', 'post', (options: any) => {
  const {page,pageSize,companyName,contact,phone}=JSON.parse(options.body);
  console.log("Received bill management parameters",JSON.parse(options.body))
  return {
    code: 200,
    message: "Success",
    data: Mock.mock({
      [`list|${pageSize}`]: [{
        'accountNo':'@string("number", 6)',
        'status|1': ['1','2'],
        'roomNo|1': ["Building A1-201","Building B1-402","Building B2-701","Building C2-1601"],  
        "carNo|1":['B109','C227','C106',"D158"],
        "tel|1":['@phone'],
        'costName1|1': [1278.00,2633.00,3698.00],  
        'costName2': '200/month', 
        'costName3|1': ["25800/year","19800/year"],  
        'startDate':"2023-01-01",
        'endDate':"2024-01-01",
        'preferential':0.00,
        'money':26000.00,
        'pay|1':["WeChat","Alipay","Cash","Bank Transfer"]
      }],
      "total": 54
    })
  }
});

//Account management
Mock.mock('https://www.demo.com/accountList', 'post', (options: any) => {
  console.log("Received account management parameters",options)
  return {
    code: 200,
    message: "Success",
    data: {
      list:[
        {
          id:1001,accountName:"xuchao",auth:"admin",person:"Charles Xu",tel:"188888888888",department:"CEO Office",menu:menuList
        },
        {
          id:1002,accountName:"user01",auth:"user",person:"Lily Wang",tel:"17777777777",department:"Marketing",menu:userMenuList
        },
        {
          id:1003,accountName:"manager01",auth:"manager",person:"William Liu",tel:"16666666666",department:"Finance",menu:managerMenuList
        },
        {
          id:1004,accountName:"user02",auth:"customize",person:"Andy Zhang",tel:"15555555555",department:"Planning",menu:customizeMenuList
        },
        {
          id:1005,accountName:"laowang",auth:"user",person:"David Wang",tel:"14444444444",department:"CEO Office",menu:userMenuList
        }

      ],
      total:5
    }
  }
});

