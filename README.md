GROUP	TEST Case ID	TEST DESCRIPTION 	DESIGNER	"TEST TYPE
"	FRD PARAGRAPH NUMBER	TEST DATA	COMPLEXITY	STEP #	STEP DESCRIPTION	STEP EXPECTED RESULTS	Actual Result	Status	Defect
CarWashing	CarWashing_TC001_URL	"To validate the working of URL

Pre-requisite: Test environment should be available & URL should be ready"	Maheswaran	UI, Positive	2	http://www.justdial.com/	Simple	1	Open the browser, enter the URL "http://www.justdial.com/" & hit enter button	"JustDial" application should be downloaded in to the browser	"JustDial" application downloaded in the browser	Pass	No
								2	Validate the home page of the application	HomePage should be displayed by default	HomePage displayed by default	Pass	No
CarWashing	CarWashing_TC002_HomePage	"To validate the appearance of HomePage fields

Pre-requisite: Test environment should continue be stable & website shoule be loaded"	Maheswaran	UI, Positive	2.1	http://www.justdial.com/	Simple	1	Open the application in browser & ensure home page is loaded	Homepage should be loaded & working	HOmePage loaded	Pass	No
								2	Verity the fileds in the top section of home page	"All the below fields should be displayed in the top section of home page:
Free Listing
We are Hiring
What’s New
Advertise
Language dropdown
Login/Signup"	"All the below fields except ""We are Hiring"" is displayed in the top secton of Home Page;
Free Listing
What’s New
Advertise
Language dropdown
Login/Signup"	Fail	101
								3	Left  frame			Pass	
								4	Right Frame			Pass	
								5	Search part			Pass	
								6	Support services			Pass	
CarWashing	CarWashing_TC03_Search	"To validate the appearance & existence of ""Location"" text box, ""Service"" text box & Search button in Search part

Pre-requisite: Test environment should continue be stable & website shoule be loaded"	Maheswaran	UI, Positive	2.2	http://www.justdial.com/	Simple	1	Open the application in browser & ensure home page is loaded	Homepage should be loaded & working			
								2	Validate the existence of "Location" text box	"Location" text box should appear top left corner of the main page & should be enabled			
								3	Validate the existence of "Service" text box	"Service" text box should appear next (horizontally right side) to Location text box 			
								4	Validate the default text message in the "Service" text box	"The below message should appear in the ""Service"" text box:
""Search for….."""			
								5	"Search" button				
								6	Look of Search button				
CarWashing	CarWashing_TC04_LocationTextBox	"To validate the woking of ""Location"" text box in Search part

Pre-requisite: Test environment should continue be stable & website shoule be loaded"	Maheswaran	Functional, Positive	2.2	http://www.justdial.com/	Simple	1	Open the application in browser & ensure home page is loaded	Homepage should be loaded & working			
