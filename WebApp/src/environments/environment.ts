// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  CDCBaseURL: '  https://data.cdc.gov'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */

 // import 'zone.js/dist/zone-error';
// Included with Angular CLI.
/*
{"status":"REQUEST_SUCCEEDED","responseTime":29,"message":[],"Results":{
"series":
[{"seriesID":"LNS14000000"},
{"seriesID":"CUUR0000SA0"},
{"seriesID":"CES0000000001"},
{"seriesID":"LNS14000006"},
{"seriesID":"CUSR0000SA0"},
{"seriesID":"LNS11300000"},
{"seriesID":"CUUR0000SA0L1E"},
{"seriesID":"CES3000000001"},
{"seriesID":"CES0500000003"},
{"seriesID":"LNU04000000"},
{"seriesID":"PCU327320327320"},
{"seriesID":"PCU33312033312014"},
{"seriesID":"LNS12000000"},
{"seriesID":"CUSR0000SA0L1E"},
{"seriesID":"CUUR0000SAM1"},
{"seriesID":"CUUR0000SEMC01"},
{"seriesID":"LNS12300000"},
{"seriesID":"LNS12035019"},
{"seriesID":"CUUR0000SEMC"},
{"seriesID":"CUUR0000SS5702"},
{"seriesID":"CUUR0000SS5703"},
{"seriesID":"CUUR0000SEMC02"},
{"seriesID":"CES0500000001"},
{"seriesID":"CUUR0100SEMC"},
{"seriesID":"CUUR0100SAM1"}]
}}


##############################################################################################################################################
##############################################################################################################################################
##############################################################################################################################################
This works
https://api.bls.gov/publicAPI/v2/timeseries/data

https://api.bls.gov/publicAPI/v2/timeseries/data/LAUCN040010000000005?startyear=2010&endyear=2015&registrationkey=84b944d16ad8448abc2d2de3dec4009a


https://api.bls.gov/publicAPI/v2/timeseries/popular?survey=LA&startyear=2010&endyear=2020&registrationkey=84b944d16ad8448abc2d2de3dec4009a


SST060000000000003,
LASST260000000000003,
LASST480000000000003,
LASST340000000000003,
LASST120000000000003,
LASST360000000000003,
LASST420000000000003,
LASST210000000000003,
LASST080000000000003,
LASST370000000000003,
LASST180000000000003,
LASST390000000000003,
LASST550000000000003,
LASST170000000000003,
LASST010000000000003,
LASST130000000000003,
LASST040000000000003,
LASST280000000000003,
LASST510000000000003,
LASST530000000000003,
LASST250000000000003,
LASST270000000000003,
LASST290000000000003,
LASST320000000000003,
LASST470000000000003

https://www.bls.gov/developers/api_signature_v2.htm#singlesurvey

"survey_abbreviation": "AP",
"survey_name": "Consumer Price Index - Average Price Data"

"survey_abbreviation": "BD",
"survey_name": "Business Employment Dynamics"

"survey_abbreviation": "BG",
"survey_name": "Collective Bargaining Agreements-State and Local Government"

"survey_abbreviation": "BP",
"survey_name": "Collective Bargaining Agreements-Private Sector"

"survey_abbreviation": "CC",
"survey_name": "Employer Costs for Employee Compensation"

"survey_abbreviation": "CD",
"survey_name": "Nonfatal cases involving days away from work: selected characteristics"

"survey_abbreviation": "CE",
"survey_name": "Employment, Hours, and Earnings from the Current Employment Statistics survey (National)"

"survey_abbreviation": "CF",
"survey_name": "Census of Fatal Occupational Injuries"

"survey_abbreviation": "CH",
"survey_name": "Nonfatal cases involving days away from work: selected characteristics (2003 - 2010)"

"survey_abbreviation": "CI",
"survey_name": "Employment Cost Index"

"survey_abbreviation": "CM",
"survey_name": "Employer Costs for Employee Compensation"

"survey_abbreviation": "CS",
"survey_name": "Nonfatal cases involving days away from work: selected characteristics (2011 forward)"

"survey_abbreviation": "CU",
"survey_name": "Consumer Price Index - All Urban Consumers"

"survey_abbreviation": "CW",
"survey_name": "Consumer Price Index - Urban Wage Earners and Clerical Workers"

"survey_abbreviation": "CX",
"survey_name": "Consumer Expenditure Survey"

"survey_abbreviation": "EB",
"survey_name": "Employee Benefits Survey"

"survey_abbreviation": "EC",
"survey_name": "Employment Cost Index"

"survey_abbreviation": "EE",
"survey_name": "National Employment, Hours, and Earnings"

"survey_abbreviation": "EI",
"survey_name": "Import/Export Price Indexes"

"survey_abbreviation": "EN",
"survey_name": "Quarterly Census of Employment and Wages"

"survey_abbreviation": "EP",
"survey_name": "Employment Projections by Industry"

"survey_abbreviation": "EW",
"survey_name": "Quarterly Census of Employment and Wages (SIC)"

"survey_abbreviation": "FI",
"survey_name": "Census of Fatal Occupational Injuries (2003 - 2010)"

"survey_abbreviation": "FM",
"survey_name": "Marital and family labor force statistics from the Current Population Survey"

"survey_abbreviation": "FW",
"survey_name": "Census of Fatal Occupational Injuries (2011 forward)"

"survey_abbreviation": "GG",
"survey_name": "Green Goods and Services"

"survey_abbreviation": "GP",
"survey_name": "Geographic Profile"

"survey_abbreviation": "HC",
"survey_name": "Nonfatal cases involving days away from work: Selected Characteristics (2002)"

"survey_abbreviation": "HS",
"survey_name": "Occupational injuries and illnesses: industry data (pre-1989)"

"survey_abbreviation": "II",
"survey_name": "Occupational injuries and illnesses: industry data"

"survey_abbreviation": "IN",
"survey_name": "International Labor Comparison"

"survey_abbreviation": "IP",
"survey_name": "Industry Productivity"

"survey_abbreviation": "IS",
"survey_name": "Occupational injuries and illnesses industry data"

"survey_abbreviation": "JL",
"survey_name": "Job Openings and Labor Turnover Survey"

"survey_abbreviation": "JT",
"survey_name": "Job Openings and Labor Turnover Survey"

"survey_abbreviation": "LA",
"survey_name": "Local Area Unemployment Statistics"

"survey_abbreviation": "LE",
"survey_name": "Weekly and hourly earnings data from the Current Population Survey"

"survey_abbreviation": "LF",
"survey_name": "Labor Force Statistics from the Current Population Survey (SIC)"

"survey_abbreviation": "LI",
"survey_name": "Consumer Price Index - Department Store Inventory Price Index"

"survey_abbreviation": "LN",
"survey_name": "Labor Force Statistics from the Current Population Survey"

"survey_abbreviation": "LU",
"survey_name": "Union affiliation data from the Current Population Survey"

"survey_abbreviation": "ML",
"survey_name": "Mass Layoff Statistics"

"survey_abbreviation": "MP",
"survey_name": "Major Sector Multifactor Productivity"

"survey_abbreviation": "MU",
"survey_name": "Consumer Price Index - All Urban Consumers (Old Series)"

"survey_abbreviation": "MW",
"survey_name": "Consumer Price Index - Urban Wage Earners and Clerical Workers (Old Series)"

"survey_abbreviation": "NB",
"survey_name": "National Compensation Survey-Benefits"

"survey_abbreviation": "NC",
"survey_name": "National Compensation Survey"

"survey_abbreviation": "ND",
"survey_name": "Producer Price Index Industry Data"

"survey_abbreviation": "NW",
"survey_name": "National Compensation Survey"

"survey_abbreviation": "OE",
"survey_name": "Occupational Employment Statistics"

"survey_abbreviation": "OR",
"survey_name": "Occupational Requirements"

"survey_abbreviation": "PC",
"survey_name": "Producer Price Index Industry Data"

"survey_abbreviation": "PD",
"survey_name": "Producer Price Index - Discontinued (SIC)"

"survey_abbreviation": "PF",
"survey_name": "Federal Government Productivity Index"

"survey_abbreviation": "PI",
"survey_name": "Industry Productivity Index"

"survey_abbreviation": "PR",
"survey_name": "Major Sector Productivity and Costs"

"survey_abbreviation": "SA",
"survey_name": "State and Area Employment, Hours, and Earnings (SIC)"

"survey_abbreviation": "SH",
"survey_name": "Occupational injuries and illnesses: industry data (1989-2001)"

"survey_abbreviation": "SI",
"survey_name": "Occupational injuries and illnesses: industry data (2002)"

"survey_abbreviation": "SM",
"survey_name": "State and Area Employment, Hours, and Earnings"

"survey_abbreviation": "SU",
"survey_name": "Consumer Price Index - Chained Consumer Price Index"

"survey_abbreviation": "TU",
"survey_name": "American Time Use"

"survey_abbreviation": "WD",
"survey_name": "Producer Price Index Commodity-Discontinued Series"

"survey_abbreviation": "WM",
"survey_name": "Wage Modeling"

"survey_abbreviation": "WP",
"survey_name": "Producer Price Index-Commodities"

"survey_abbreviation": "WS",
"survey_name": "Work Stoppage Data"

*/
