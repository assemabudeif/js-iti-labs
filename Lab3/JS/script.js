// Task 1
var intervalId

function startClock() {
    intervalId = setInterval(getCurrentTime, 1000);
}

function getCurrentTime() {
    document.getElementById('clock').innerHTML = new Date().toLocaleTimeString()
}

function stopClock() {
    clearInterval(intervalId)
}

// Task 2
var win
function openNewWin() {
    setTimeout(() => {
        win = open('', '_blank', 'width=600,height=400')
        win.document.write(
            `Incididunt consectetur elit laboris officia in. Laborum sit consectetur commodo anim ad irure duis. Amet commodo consectetur fugiat pariatur aliqua. Commodo magna occaecat voluptate irure amet sit id adipisicing ex. Deserunt excepteur pariatur laboris veniam nisi duis mollit enim sint sint. Tempor ipsum ut nulla in consectetur.

Est labore eiusmod laborum aliqua anim anim dolore voluptate fugiat duis laborum tempor et esse. Laboris mollit nostrud dolore officia. Aliquip sit labore id ad ipsum laborum ex laborum. Enim fugiat esse dolore velit elit amet enim eiusmod tempor. Id esse sit minim anim et minim.

Commodo aliqua duis laborum adipisicing. Enim cupidatat ad enim dolore exercitation proident amet deserunt officia laborum. Occaecat elit non commodo sint sint consequat elit. Magna culpa laboris magna dolore enim excepteur esse. Consequat elit excepteur tempor ad. Exercitation mollit ipsum Lorem ea pariatur mollit in sunt proident eiusmod eu laboris reprehenderit irure. Aute velit consequat Lorem ut sint irure culpa occaecat.

Amet eu commodo ipsum non non qui consequat voluptate dolore dolor labore. Commodo aliquip aute sint enim enim proident veniam quis mollit. Elit est ipsum amet veniam. Nisi anim aliqua nulla consequat. Dolor ad laboris duis est est nostrud cupidatat labore et.

Anim excepteur tempor nostrud esse ipsum esse velit est excepteur consequat aute est. Eu ut eiusmod anim irure ut occaecat excepteur sint culpa Lorem commodo. Consequat officia incididunt ad ut veniam deserunt consectetur magna proident cillum. Sit cupidatat sit non culpa consectetur pariatur. Cupidatat sunt sit eiusmod duis cupidatat id eiusmod consectetur aliquip. Voluptate ad ea sunt voluptate do.

Incididunt quis officia magna culpa proident ut cupidatat esse consectetur do non qui. Excepteur eiusmod duis incididunt magna incididunt sit mollit esse. Ut nisi dolore minim nostrud magna ex occaecat aute magna exercitation irure do. Pariatur dolore sit dolore officia qui dolore cupidatat Lorem enim excepteur ex amet nostrud occaecat. Nisi cupidatat veniam irure laborum qui minim reprehenderit consectetur.

Ullamco aute mollit nisi ipsum. Qui mollit consectetur qui adipisicing excepteur aliquip reprehenderit quis aliquip labore cillum. Minim ea excepteur eu ea commodo consequat ipsum quis do ad sunt amet sint. Qui dolore tempor culpa ex magna fugiat cupidatat excepteur sunt occaecat enim aliqua.

Ex cupidatat velit do eu sit velit. Deserunt minim sunt tempor elit cillum esse sint anim quis sint cillum qui ipsum Lorem. Irure laboris fugiat et amet consequat. Aliquip fugiat nisi non aute duis irure non elit deserunt ad ullamco culpa ut consectetur. Dolore labore adipisicing sint id mollit irure.

Qui ad deserunt in pariatur eu ullamco cillum duis culpa magna dolore. Pariatur officia pariatur proident ad magna quis mollit cillum eiusmod in veniam. Anim veniam irure veniam consectetur. Voluptate pariatur sint deserunt tempor consequat laboris eu aliqua. Pariatur culpa amet ad quis dolor quis aute amet ex proident. Pariatur tempor deserunt sunt elit nulla esse.

Mollit ea laborum est ea et velit. Reprehenderit eu enim do ad irure nostrud consequat sit fugiat ea. Voluptate occaecat veniam excepteur occaecat dolor eiusmod et amet reprehenderit est tempor mollit non. Commodo ullamco elit nostrud non mollit quis sint Lorem. Irure esse duis et adipisicing deserunt eiusmod culpa proident amet ullamco.
Incididunt consectetur elit laboris officia in. Laborum sit consectetur commodo anim ad irure duis. Amet commodo consectetur fugiat pariatur aliqua. Commodo magna occaecat voluptate irure amet sit id adipisicing ex. Deserunt excepteur pariatur laboris veniam nisi duis mollit enim sint sint. Tempor ipsum ut nulla in consectetur.

Est labore eiusmod laborum aliqua anim anim dolore voluptate fugiat duis laborum tempor et esse. Laboris mollit nostrud dolore officia. Aliquip sit labore id ad ipsum laborum ex laborum. Enim fugiat esse dolore velit elit amet enim eiusmod tempor. Id esse sit minim anim et minim.

Commodo aliqua duis laborum adipisicing. Enim cupidatat ad enim dolore exercitation proident amet deserunt officia laborum. Occaecat elit non commodo sint sint consequat elit. Magna culpa laboris magna dolore enim excepteur esse. Consequat elit excepteur tempor ad. Exercitation mollit ipsum Lorem ea pariatur mollit in sunt proident eiusmod eu laboris reprehenderit irure. Aute velit consequat Lorem ut sint irure culpa occaecat.

Amet eu commodo ipsum non non qui consequat voluptate dolore dolor labore. Commodo aliquip aute sint enim enim proident veniam quis mollit. Elit est ipsum amet veniam. Nisi anim aliqua nulla consequat. Dolor ad laboris duis est est nostrud cupidatat labore et.

Anim excepteur tempor nostrud esse ipsum esse velit est excepteur consequat aute est. Eu ut eiusmod anim irure ut occaecat excepteur sint culpa Lorem commodo. Consequat officia incididunt ad ut veniam deserunt consectetur magna proident cillum. Sit cupidatat sit non culpa consectetur pariatur. Cupidatat sunt sit eiusmod duis cupidatat id eiusmod consectetur aliquip. Voluptate ad ea sunt voluptate do.

Incididunt quis officia magna culpa proident ut cupidatat esse consectetur do non qui. Excepteur eiusmod duis incididunt magna incididunt sit mollit esse. Ut nisi dolore minim nostrud magna ex occaecat aute magna exercitation irure do. Pariatur dolore sit dolore officia qui dolore cupidatat Lorem enim excepteur ex amet nostrud occaecat. Nisi cupidatat veniam irure laborum qui minim reprehenderit consectetur.

Ullamco aute mollit nisi ipsum. Qui mollit consectetur qui adipisicing excepteur aliquip reprehenderit quis aliquip labore cillum. Minim ea excepteur eu ea commodo consequat ipsum quis do ad sunt amet sint. Qui dolore tempor culpa ex magna fugiat cupidatat excepteur sunt occaecat enim aliqua.

Ex cupidatat velit do eu sit velit. Deserunt minim sunt tempor elit cillum esse sint anim quis sint cillum qui ipsum Lorem. Irure laboris fugiat et amet consequat. Aliquip fugiat nisi non aute duis irure non elit deserunt ad ullamco culpa ut consectetur. Dolore labore adipisicing sint id mollit irure.

Qui ad deserunt in pariatur eu ullamco cillum duis culpa magna dolore. Pariatur officia pariatur proident ad magna quis mollit cillum eiusmod in veniam. Anim veniam irure veniam consectetur. Voluptate pariatur sint deserunt tempor consequat laboris eu aliqua. Pariatur culpa amet ad quis dolor quis aute amet ex proident. Pariatur tempor deserunt sunt elit nulla esse.

Mollit ea laborum est ea et velit. Reprehenderit eu enim do ad irure nostrud consequat sit fugiat ea. Voluptate occaecat veniam excepteur occaecat dolor eiusmod et amet reprehenderit est tempor mollit non. Commodo ullamco elit nostrud non mollit quis sint Lorem. Irure esse duis et adipisicing deserunt eiusmod culpa proident amet ullamco.`
        )

    }, 3000);
}

function closeWin() {
    win.close();
}

