const fs = require('fs')
var jsonxml = require('jsontoxml');

let options1 = {
    xmlHeader: 'standalone',
    prettyPrint:true
}

let toConvertJSONXML = {
    recordTarget: {
        patientRole : [
            {name:'id',attrs:{root:"2.16.840.1.113883.4.1", extension:"000003153"}},
            {name:'addr',children:[
                {name:'streetAddressLine',text:'654 W Orange Avenue'},
                {name:'city',text:'Onsted'},
                {name:'state',text:'MI'},
                {name:'postalCode',text:'49265'},
                {name:'country',text:'USA'},
            ]},
            {name:'telecom',attrs:{use:"MC", value:"tel: +1 517-555-2751"}},
            {name:'patient',children:[
                {name:'name',children:[
                    {name:'given',text:'Matthew'},
                    {name:'given',text:'Warren'},
                    {name:'family',text:'McMillan'},
                ]},
                {name:'administrativeGenderCode',attrs:{codeSystem:'2.16.840.1.113883.5.1',codeSystemName:'HL7 Administrative Gender',code:'M'}},
                {name:'birthTime', attrs:{value:'19560926'}},
                {name:'maritalStatusCode',attrs:{code:'Single'}},
                {name:'raceCode',attrs:{codeSystem:'2.16.840.1.113883.6.238', codeSystemName: 'Race and Ethnicity - CDC', code:'2106-3', displayName:'White'}},
                {name:'ethnicGroupCode',attrs:{codeSystem:'2.16.840.1.113883.6.238', codeSystemName: 'Race and Ethnicity - CDC', code:'2186-5', displayName:'Not Hispanic or Latino'}},
                {name:'languageCommunication',children:[
                    {name:'languageCode',attrs:{code:'en'}},
                    {name:'modeCode',attrs:{codeSystem:'2.16.840.1.113883.5.60', codeSystemName: 'LanguageAbilityMode', code:'ESP', displayName:'Expressed spoken'}},
                    {name:'proficiencyLevelCode',attrs:{codeSystem:'2.16.840.1.113883.5.61', codeSystemName: 'LanguageAbilityProficiency', code:'G', displayName:'Good'}},
                    {name:'preferenceInd',attrs:{value:'true'}},
                ]},
            ]},
        ]
    }
}

var xml1 = jsonxml(toConvertJSONXML, options1);

fs.writeFile('jsonxml.xml', xml1, err => {
  if (err) {
    console.error(err)
    return
  }
})


console.log(xml1);