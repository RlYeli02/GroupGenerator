const {Command}= require('commander');

const args = require('yargs').argv

var fs = require('fs')
    ,filename1 = process.argv[2]
    , filename2 = process.argv[3]

var Students = fs.readFileSync(filename1, 'utf8', function(err, data){
    if (err) throw error;
    console.log(data)
});

var Topics = fs.readFileSync(filename2, 'utf8', function(err, data){
    if (err) throw error;
    console.log(data)
});

Students = Students.toString().split('\n');
Topics = Topics.toString().split('\n');

var e =0
function Generator(students, topics, Groups){

    var StudentsPerGroup = Math.trunc(students.length/Groups);
    var residuo = students.length%Groups;
    var grupo= 0
    var grupos = []
    var randomStudent = Math.floor(Math.random() * students.length);

    for (var j= 0; j<Groups; j++){
        grupo++;
        var randomTopic = Math.floor(Math.random() * topics.length);
        var topic = topics[randomTopic]
        
        console.log("grupo", grupo, '' + topic);

        for(var i =0; i<StudentsPerGroup;){
            var seEncuentra = false;
            randomStudent = Math.floor(Math.random() * students.length);
            for (var h = 0; h<students.length;h++){
                if (grupos[h]==students[randomStudent]){
                    seEncuentra = true;
                }
            }
            if(seEncuentra){

            }
            else {
                grupos[i]= students[randomStudent]
                i++
                delete students[randomStudent]
            }
            
        }
        
        students = students.filter(function(data){
            return data != undefined;
        })
        for(var t = 0; t<1; t++){
            e;
            if (e<residuo){
                var C = ""+ grupos + ","+ students[e]
                delete students[e]
                console.log(C.split("  "))
                e++

            }
            else{
                console.log(grupos)
            }
        }


    }
    //console.log(students)


}
var action = Generator(Students, Topics, args.gruposs )
console.log(action)