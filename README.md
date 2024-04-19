[sample_data.csv](https://github.com/sum1275/ElectrifyIt-Backend/files/15038766/sample_data.csv)
#  ElectrifyIt-Backend
ElectrifyIt-Backend is a backend service for a ElectrifyIt Dashboard. 
## Installation
To install UnstopBackend, follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/sum1275/ElectrifyIt-Backend.git

## Database and Server Configuration for Development Environment

To set up the project in your local environment, configure the `.env` file as follows:

1. Create a file named `.env` in the root directory of the project.
2. Add the following content to the `.env` file:

   ```plaintext
   # Environment variables for development
  
   DEV_PORT=8084
   NODE_ENV=development
   PAGE_SIZE=10
   DB_DEV_URL=mongodb://localhost:27017/vehicle

The application provides the following endpoints:
   ## API Endpoints
- **Validate Coupon Code**:
  This feature checks the validity of a coupon code.

  - **Method**: `POST`
  - **Endpoint**: `http://localhost:8084/api/vehicle/bulkupload`
  - **Request Body**:
    ```json form-data
    {
      "file": "sample_data.csv"
    }
    ```
    [UploaLicense Plate,Make,VIN,Model,Type,Date,Miles Driven
NGX4CPH,Tesla,KYGKGBXYN5Z184ZKW,"Semi Delivery Event, 2022",Truck,2023-04-25,199
65FEMCT,Nikola,GH8ZYDE3XW7HNWXUK,"TRE BEV, 2022",Truck,2024-03-07,276
H7MDRKG,GM Envolv,0CREARYENKERES04F,"Brightdrop zevo 600, 2022",Van,2023-12-12,199
9FKNTBR,GM Envolv,HJCHNPVWGHVUTYAN9,"Brightdrop zevo 600, 2022",Van,2023-04-01,280
5S2ZBA3,GM Envolv,0NN849UBPG7S07EWJ,"Brightdrop zevo 600, 2022",Van,2024-03-12,166
RS9CLS0,GM Envolv,135USCY8DNENMK7UV,"Brightdrop zevo 600, 2022",Van,2023-12-17,255
SYC61UR,Nikola,7L5AE57JWC8KNP5E2,"TRE BEV, 2022",Truck,2023-11-16,236
6CNVB44,Tesla,9RUB6H2FVUJTKLGCY,"Semi Delivery Event, 2022",Truck,2023-07-12,227
ZETGP1S,BYD Auto,9MJ8SBKT6APRDEASS,Class 6F cab & chassis 2022,Truck,2023-12-29,274
E56XNSD,Tesla,GSRWTLLW92WXEAUXP,"Semi Delivery Event, 2022",Truck,2023-04-07,278
V9VRV6W,Nikola,B6ZUK9L6SGT6XSPS5,"TRE BEV, 2022",Truck,2023-07-12,194
658KWK9,BYD Motors,NEZA9FE5ZR06WFWFV,"K7M '30 Transit Bus, 2021",Bus,2023-11-22,166
2WY0GW6,Ree,0U4M6F4YU7EM28WCY,P7 chassis cab 2023,Van,2024-01-31,193
VZ9L0DX,BYD Auto,HAD62PSEZKK414JAE,Class 6F cab & chassis 2022,Truck,2023-09-11,130
EPXFB3E,BYD Auto,R73ME9A76PVMMTFPS,Class 6F cab & chassis 2022,Truck,2023-10-14,235
44ECM9T,Nikola,UFCU13WTWSFARRJL6,"TRE BEV, 2022",Truck,2023-09-09,159
PFRBL79,Nikola,35L46UWN4GWBRV981,"TRE BEV, 2022",Truck,2024-02-23,233
P9U2XAG,BYD Auto,XLTXX3WWE3SLMWMYN,Class 6F cab & chassis 2022,Truck,2023-05-27,248
PJ9L5M9,BYD Auto,DLA5T87HZA0XDZK79,Class 6F cab & chassis 2022,Truck,2024-03-07,206
CCXLDHK,Ree,NKBLJY7U4FH1JB9A3,P7 chassis cab 2023,Van,2023-07-18,131
AP4U9NW,GM Envolv,4J9F9YRCW8T4TE2XN,"Brightdrop zevo 600, 2022",Van,2023-07-28,272
3N6CHH4,BYD Auto,A8G6S531N76XX2PP8,Class 6F cab & chassis 2022,Truck,2023-12-10,125
W9JGKNW,BYD Motors,E6330XLX7C8P94W9B,"K7M '30 Transit Bus, 2021",Bus,2024-02-18,106
DKVXAZX,Tesla,XT2C6LXFPMZDL5U7E,"Semi Delivery Event, 2022",Truck,2023-06-21,216
PM7502X,Ree,2U6299Y3CZAVKLMKN,P7 chassis cab 2023,Van,2024-02-15,229
D9UNX48,Tesla,XEYVEBLKE90CA7F12,"Semi Delivery Event, 2022",Truck,2024-02-28,297
41CGPVY,Nikola,A6YVZL42E6RCVV7AV,"TRE BEV, 2022",Truck,2023-05-15,159
GNJTGTL,Ree,T4F2DF6W0E11FVD9V,P7 chassis cab 2023,Van,2023-09-08,126
166349D,Ree,TZZRBLWBYR3338KDX,P7 chassis cab 2023,Van,2023-04-02,266
70GRUG7,GM Envolv,GSG9NBPHH2ME514SM,"Brightdrop zevo 600, 2022",Van,2023-07-29,106
T6RNLJT,Nikola,AKKW83X3HCUNF22CE,"TRE BEV, 2022",Truck,2023-08-15,252
WHJW9HJ,BYD Motors,U55KVCF527670K2V2,"K7M '30 Transit Bus, 2021",Bus,2023-04-15,190
PBT024J,GM Envolv,35MGUFDY66PFNNAR9,"Brightdrop zevo 600, 2022",Van,2023-06-07,201
P9G0KP2,Ree,RFL7HPDK3N61DX1DJ,P7 chassis cab 2023,Van,2023-05-04,279
CWYRHAS,BYD Motors,RHY7YFRW5808V9MP5,"K7M '30 Transit Bus, 2021",Bus,2024-02-15,151
X0H4BN8,Tesla,3Z61XGUCJW9W05152,"Semi Delivery Event, 2022",Truck,2023-08-14,277
F2LAKAW,GM Envolv,9FMB13AATA6U31535,"Brightdrop zevo 600, 2022",Van,2023-04-12,257
8YLTK6B,GM Envolv,VUVC60DCRHHCJ3ZA6,"Brightdrop zevo 600, 2022",Van,2024-01-25,191
RTDZGM0,Nikola,2378NJU70BE767K6X,"TRE BEV, 2022",Truck,2023-08-14,109
M4N03GW,BYD Motors,2WR47S9KYKGPGMSFM,"K7M '30 Transit Bus, 2021",Bus,2023-09-23,203
XPD4LG0,Tesla,X1P1K92BUGRV0ZS4R,"Semi Delivery Event, 2022",Truck,2024-03-21,261
MXVDW1X,Ree,CACDJZYERZB0XGPED,P7 chassis cab 2023,Van,2023-09-12,267
UXJ4VN8,Nikola,DYDDFV57AN9TDMVSU,"TRE BEV, 2022",Truck,2023-09-19,213
31CAKZH,Nikola,JW4H0MM6WVEVKCC3B,"TRE BEV, 2022",Truck,2023-10-06,260
9B3LF7X,Nikola,LCLER06HX8RVLLGUC,"TRE BEV, 2022",Truck,2023-12-05,237
CSW0CVM,Tesla,FKJB60ZA4M06ST3PY,"Semi Delivery Event, 2022",Truck,2023-12-19,248
335BG7L,GM Envolv,3JY7YLB7PM3TKL7CP,"Brightdrop zevo 600, 2022",Van,2023-08-30,204
82WP4GE,Tesla,H2MS03L9LAH53AJM0,"Semi Delivery Event, 2022",Truck,2024-02-10,208
EEPZF54,BYD Auto,J32NKJAZTC2DCDU86,Class 6F cab & chassis 2022,Truck,2024-03-15,268
B0CPZJV,Ree,83ZU26W48SU8WU1G5,P7 chassis cab 2023,Van,2023-10-02,141
ding sample_data.csv…]()

  - **Response Sample**:
    ```json
    {
      "status": "00",
      "success": "true",
	  "message": "Bulk Uploaded successfully",
	  "data": "[]"
    }
    ```
This API endpoint allows you to upload a CSV file of vehicle data all at once. The data will be updated in the database, and if there are duplicates, an error will be thrown, and the data will not be saved.

- **Retrieve Vehicle Details**:
  This feature provides detailed information about a vehicles.

  - **Method**: `GET`
  - **Endpoint**: `http://localhost:8084/api/vehicle/listing?frequency=&startDate=&endDate=&page=2`
  - **Request PARAMS**:
    ```json
    {
      "frequency": "Weekly/Monthly/Daily",
	  "startDate":"2024-04-19",
	  "endDate":"2024-03-04",
	  "page":"1"
    }
    ```
  - **Response Sample**:
    ```json
    {
    "status": "00",
    "message": "success",
    "frequency": "Daily",
    "page": 2,
    "data": [
        {
            "_id": "DKVXAZX",
            "licensePlate": "DKVXAZX",
            "make": "Tesla",
            "VIN": "XT2C6LXFPMZDL5U7E",
            "model": "Semi Delivery Event, 2022",
            "type": "Truck",
            "date": "2023-06-21T00:00:00.000Z",
            "milesDriven": 216,
            "__v": 0
        },
        {
            "_id": "6CNVB44",
            "licensePlate": "6CNVB44",
            "make": "Tesla",
            "VIN": "9RUB6H2FVUJTKLGCY",
            "model": "Semi Delivery Event, 2022",
            "type": "Truck",
            "date": "2023-07-12T00:00:00.000Z",
            "milesDriven": 227,
            "__v": 0
        },
        {
            "_id": "V9VRV6W",
            "licensePlate": "V9VRV6W",
            "make": "Nikola",
            "VIN": "B6ZUK9L6SGT6XSPS5",
            "model": "TRE BEV, 2022",
            "type": "Truck",
            "date": "2023-07-12T00:00:00.000Z",
            "milesDriven": 194,
            "__v": 0
        },
        {
            "_id": "CCXLDHK",
            "licensePlate": "CCXLDHK",
            "make": "Ree",
            "VIN": "NKBLJY7U4FH1JB9A3",
            "model": "P7 chassis cab 2023",
            "type": "Van",
            "date": "2023-07-18T00:00:00.000Z",
            "milesDriven": 131,
            "__v": 0
        },
        {
            "_id": "AP4U9NW",
            "licensePlate": "AP4U9NW",
            "make": "GM Envolv",
            "VIN": "4J9F9YRCW8T4TE2XN",
            "model": "Brightdrop zevo 600, 2022",
            "type": "Van",
            "date": "2023-07-28T00:00:00.000Z",
            "milesDriven": 272,
            "__v": 0
        },
        {
            "_id": "70GRUG7",
            "licensePlate": "70GRUG7",
            "make": "GM Envolv",
            "VIN": "GSG9NBPHH2ME514SM",
            "model": "Brightdrop zevo 600, 2022",
            "type": "Van",
            "date": "2023-07-29T00:00:00.000Z",
            "milesDriven": 106,
            "__v": 0
        },
        {
            "_id": "RTDZGM0",
            "licensePlate": "RTDZGM0",
            "make": "Nikola",
            "VIN": "2378NJU70BE767K6X",
            "model": "TRE BEV, 2022",
            "type": "Truck",
            "date": "2023-08-14T00:00:00.000Z",
            "milesDriven": 109,
            "__v": 0
        },
        {
            "_id": "X0H4BN8",
            "licensePlate": "X0H4BN8",
            "make": "Tesla",
            "VIN": "3Z61XGUCJW9W05152",
            "model": "Semi Delivery Event, 2022",
            "type": "Truck",
            "date": "2023-08-14T00:00:00.000Z",
            "milesDriven": 277,
            "__v": 0
        },
        {
            "_id": "T6RNLJT",
            "licensePlate": "T6RNLJT",
            "make": "Nikola",
            "VIN": "AKKW83X3HCUNF22CE",
            "model": "TRE BEV, 2022",
            "type": "Truck",
            "date": "2023-08-15T00:00:00.000Z",
            "milesDriven": 252,
            "__v": 0
        },
        {
            "_id": "335BG7L",
            "licensePlate": "335BG7L",
            "make": "GM Envolv",
            "VIN": "3JY7YLB7PM3TKL7CP",
            "model": "Brightdrop zevo 600, 2022",
            "type": "Van",
            "date": "2023-08-30T00:00:00.000Z",
            "milesDriven": 204,
            "__v": 0
        }
    ]
}
    ```
Certainly, here's a revised version:

This API endpoint provides details about a vehicle based on the selected parameters such as frequency, which can be Monthly, Weekly, Daily, or Yearly. The date is calculated relative to the current date; for example, 'Weekly' corresponds to data from the past 7 days.

## Future Enhancements



- **Setup a Proper GraphQL Database**: 
  For future improvements, I plan to implement the backend using GraphQL to handle data more efficiently.


## Contributing

Contributions to  ElectrifyIt-Backend are welcome. 





   

