import React, { useState, useEffect } from 'react';
import './Game.css';

function Game(props) {

    const [questionIdx, setQuestionIdx] = useState(0);
    const [color, setColor] = useState("#4BC0C8");
    const [names, setNames] = useState([]);
    const [nPlayers, setNPlayers] = useState(3);


    const [questionList, setQuestionList] = useState([
        ["Spørsmål", "Hvem blir fullest?"],
        ["Spørsmål", "Hvem klær seg best?"],
        ["Spørsmål", "Hvem har drukket mest så langt?"],
        ["Spørsmål", "Hvem har blitt pumpet?"],
        ["Spørsmål", "Hvem er mest fornøyd med eget utseende?"],
        ["Spørsmål", "Hvem fortjener å bli mobbet for skoene sine?"],
        ["Spørsmål", "Hvem er den største pysen?"],
        ["Spørsmål", "Hvem får du de peneste barnene med?"],
        ["Spørsmål", "Hvem spyr ikveld?"],
        ["Spørsmål", "Hvem er mest ubesluttsom?"],
        ["Spørsmål", "Hvem er høyest?"],
        ["Spørsmål", "Hvem tror de er høyest?"],
        ["Spørsmål", "Hvem er kortest?"],
        ["Spørsmål", "Hvem er mest kristen?"],
        ["Spørsmål", "Hvem er englebarnet?"],
        ["Spørsmål", "Hvem har du et godt øye til?"],
        ["Spørsmål", "Hvem er best til å kysse?"],
        ["Spørsmål", "Hvem spander mest på byen?"],
        ["Spørsmål", "Hvem bruker mest penger?"],
        ["Spørsmål", "Hvem bruker mest tid på telefonen sin?"],
        ["Spørsmål", "Hvem har den beste latteren?"],
        ["Spørsmål", "Hvem har den verste latteren?"],
        ["Spørsmål", "Hvem har finest hårfrisyre?"],
        ["Spørsmål", "Hvem burde melde seg til neste sesongs ex on the beach?"],
        ["Spørsmål", "Hvem er den mannligste manne mannen her?"],
        ["Spørsmål", "Hvem er mest usikker på seg selv?"],
        ["Spørsmål", "Hvem er gjengens hypeman?"],
        ["Spørsmål", "Hvem ville du delt en øde øy med?"],
        ["Spørsmål", "Hvem har de vakreste øynene?"],
        ["Spørsmål", "Hvem spiser verst?"],
        ["Spørsmål", "Hvem er den koseligste å spoone med?"],
        ["Spørsmål", "Hvem er en golddigger?"],
        ["Spørsmål", "Hvem er en sugardaddy?"],
        ["Spørsmål", "Hvem tar med seg noen hjem ikveld?"],
        ["Spørsmål", "Hvem drikker raskest?"],
        ["Spørsmål", "Hvem angrer mest på russetiden?"],
        ["Spørsmål", "Hvem lyser opp rommet?"],
        ["Spørsmål", "Hvem har hatt sex i telt?"],
        ["Spørsmål", "Hvem gifter seg først?"],
        ["Spørsmål", "Hvem er mest whipped?"],
        ["Spørsmål", "Hvem er tregest til å gjøre seg klar?"],
        ["Spørsmål", "Hvem dusjer lengst?"],
        ["Spørsmål", "Hvem skiller seg mest ut i mengden?"],
        ["Spørsmål", "Hvem er mest horny?"],
        ["Spørsmål", "Hvem er mest uskydlig?"],
        ["Spørsmål", "Hvem er en håpløs romantikker?"],
        ["Spørsmål", "Hvem slutter på studiet?"],
        ["Spørsmål", "Hvem har googlet seg selv?"],
        ["Spørsmål", "Hvem bruker mest tid på å gjøre seg klar?"],
        ["Spørsmål", "Hvem har finest lepper?"],
        ["Spørsmål", "Hvem er en gentleman?"],
        ["Spørsmål", "Hvem har det fineste smilet? :)"],
        ["Spørsmål", "Hvem kjøper drikke til mindreårige?"],
        ["Spørsmål", "Hvem selger klassifiserte dokumenter til Ukraina?"],
        ["Spørsmål", "Hvem er den største skuffelsen?"],
        ["Spørsmål", "Hvem sender penger til en nigeriansk prins?"],
        ["Spørsmål", "Hvem er mest fotogen?"],
        ["Spørsmål", "Hvem har størst sko?😉"],
        ["Spørsmål", "Hvem runker mest?"],
        ["Spørsmål", "Hvem har de mest spennende puppene?"],
        ["Spørsmål", "Hvem er mest fuckboy?"],
        ["Spørsmål", "Hvem er den dårligste til å svare på meldinger?"],
        ["Spørsmål", "Hvem gifter seg på campingplass i halden?"],
        ["Spørsmål", "Hvem er lowkey homofobisk?"],
        ["Spørsmål", "Hvem blir gravid først?"],
        ["Spørsmål", "Hvem er gruppens wildcard?"],
        ["Spørsmål", "Hvem har størst kjendisfaktor?"],
        ["Spørsmål", "Hvem er smartest?"],
        ["Spørsmål", "Hvem hadde blitt drept først i en skrekkfilm?"],
        ["Spørsmål", "Hvem får seg en thai-kæll?"],
        ["Spørsmål", "Hvem har hatt kjønnsykdom?"],
        ["Spørsmål", "Hvem er minst flink til å bruke prevensjon?"],
        ["Spørsmål", "Hvem har mest barn uten å vite det?"],
        ["Spørsmål", "Hvem har best kropp?"],
        ["Spørsmål", "Hvem har best hår?"],
        ["Spørsmål", "Hvem tar seg mest i håret?"],
        ["Spørsmål", "Hvem tar seg mest på puppene?"],
        ["Spørsmål", "Hvem har best musikksmak?"],
        ["Spørsmål", "Hvem har finest rumpe?"],
        ["Spørsmål", "Hvem har det minste ordforådet?"],
        ["Spørsmål", "Hvem er mest bortskjemt?"],
        ["Spørsmål", "Hvem er den største flørtepusen?"],
        ["Spørsmål", "Hvem er mest selvsikker"],
        ["Spørsmål", "Hvem handler mest på Kondomeriet?"],
        ["Spørsmål", "Hvem er pappas gutt?"],
        ["Spørsmål", "Hvem handler mest på IKEA?"],
        ["Spørsmål", "Hvem har du lyst å bli mer kjent med?"],
        ["Spørsmål", "Hvem er den største alkoholikeren?"],
        ["Spørsmål", "Hvem oppfører seg som en middelaldrende mann?"],
        ["Spørsmål", "Hvem er mest babe?"],
        ["Spørsmål", "Hvem er en strong independent woman?"],
        ["Spørsmål", "Hvem er mest sassy?"],
        ["Spørsmål", "Hvem er den morsomste?"],
        ["Spørsmål", "Hvem røyker mest?"],
        ["Spørsmål", "Hvem er den rikeste?"],
        ["Spørsmål", "Hvem er den største simpen?"],
        ["Spørsmål", "Hvem kjører verst?"],
        ["Spørsmål", "Hvem lager den kuleste drikkelek appen?"],
        ["Spørsmål", "Hvem havner i fyllearresten?"],
        ["Spørsmål", "Hvem tror på spøkelser?"],
        ["Spørsmål", "Hvem er mest skoleflink?"],
        ["Spørsmål", "Hvem har mest humørsvingninger?"],
        ["Spørsmål", "Hvem er mest psycho?"],
        ["Spørsmål", "Hvem er brun og blid?"],
        ["Regel", "Alle regler er opphevet"],
        ["Regel", "x er nå din drinking buddy"],
        ["Regel", "Kan ikke lenger løfte hender over skulderhøyde. Straff: 1 slurk"],
        ["Regel", "x må holde en hånd på en medspiller i 10 runder"],
        ["Lek", "Hvem skal ta et shot sammen med deg?"],
        ["Lek", "Si et rim. Første som gjentar må ta en slurk"],
        ["Lek", "Waterfall"],
        ["Lek", "Første til å le må chugge hele drikken sin"],
        ["Lek", "Siste person til å finne gyldig id må chugge drikken sin"],
        ["Lek", "Første person til å gi en sko til meg får gi ut 10 slurker."],
        ["Lek", "Stol leken, siste person får bestemme utestedet vi skal på."],
        ["Lek", "Vis ditt beste dance move, eller "],
        ["Nøtt eller sannhet", "Ta 3 slurker, eller si hvor mange du har ligget med."],
        ["Nøtt eller sannhet", "x må gjøre 15 push-ups, eller si hvem han/hun sin første crush var."],
        ["Nøtt eller sannhet", "x må stå på hendene, eller si hva han/hun ærlig tror sin IQ er."],
        ["Nøtt eller sannhet", "x må kysse en av samme kjønn, eller fortelle en pinlig historie."],
        ["Nøtt eller sannhet", "x må si hvor mye som er på brukskontoen sin, eller chugge drikken sin i skam."],
        ["Nøtt eller sannhet", "x må spørre faffa om 1000kr, eller liste 10 jenter de vil ligge med."],
        ["Nøtt eller sannhet", "x må gjøre en freestyle rap, eller si din største usikkerhet."],
        ["Nøtt eller sannhet", "x må spille en live airguitar konsert for alle(med innlevelse), eller si hva deres favoritt porno sjanger er."],
        ["Nøtt eller sannhet", "x må gjøre planken i 1 minutt, eller ta av et klæsplagg.(Teknisk sett ikke en nøtt eller sannhet med yolo)"],
        ["Nøtt eller sannhet", "x må ta en fjes-tattovering(med tusj), eller ta av 2 klæsplagg(sokker er et klæsplagg)."],
        ["Nøtt eller sannhet", "x må gi fra seg telefonen i 1 minutt, eller si hva det pinligste de har på mobilen er."],
        ["Nøtt eller sannhet", "x må la noen gi deg en wedgie, eller oppføre deg som en kylling i 5 runder."],
        ["Nøtt eller sannhet", "x må ringe en venn og late som om det er bursdagen hans(synge happy birthday), eller stupe drikken sin."],
        ["👑Kongen befaler👑", "Alle jenter tar en slurk"],
        ["👑Kongen befaler👑", "Alle gutter tar en slurk"],
        ["👑Kongen befaler👑", "x kan ikke lenger  drikke med høyrehånden. Straff: en slurk"],
        ["👑Kongen befaler👑", "x må legge ut en mystory"],
        ["👑Kongen befaler👑", "x må si en kjendis lookalike for alle i rommet."],
        ["👑Kongen befaler👑", "x må si 2 positive og en negativ ting om hver spiller."],
        ["👑Kongen befaler👑", "x må demonstrere hvordan han styler håret sitt."],
        ["👑Kongen befaler👑", "x kan bare bjeffe som en hund i 5 runder."],
        ["👑Kongen befaler👑", "x må snakke engelsk(i en britisk akksang), i 4 runder."],
        ["👑Kongen befaler👑", "x må gjøre en imitasjon av en annen spiller, helt til noen gjetter hvem det er."],
        ["👑Kongen befaler👑", "x må gi fra seg sine beste sjekketriks/replikker, eller løpe 2 runder rundt huset."],
    ]);

    const colors = ["#85CCAA", "#DAA9F1", "#D9A568", "#D96868", "#A9E4F1", "#CC85AB", "#C9D968", "#6873D9", "#F1A9A9", "#8D95A1", "#BABE9F", "#9CE144"];

    //TODO add skål every 10th element
    const shuffleArray = (array) => {
        let i = array.length - 1;
        for (; i > 0; i--) {
            //Just add SKÅL the first shuffle
            if(questionIdx== 0 && i%10==0){
                array[i] = ["SKÅL!", "Alle drikk."]
            }
            else{
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                //TODO: if first letter is x, put name there
                if(array[i][1].charAt(0)=='x'){
                    let rnumber = Math.floor(Math.random() * (names.length));
                    array[i][1] =  names[rnumber] + array[i][1].substring(1);
                }
                array[i] = array[j];
                array[j] = temp;
            }
            
        }
        return array;
    }

    const inputs = []

    for (let i = 0; i < nPlayers; i++) {
        inputs.push(<div><input className="textfield" type="text" id={"player" + i} name="fname"></input><br></br></div>)
    }

    const startGame = () => {
        for (let i = 0; i < nPlayers; i++) {
            setNames(names[i] = document.getElementById("player"+i).value)
        }
        setQuestionList(shuffleArray(questionList));
    }

    const nextGame = () => {
        if(questionIdx > questionList.length-5){
            setQuestionIdx(1);
            console.log("shuffle");
            setQuestionList(shuffleArray(questionList));
        }
        else{
        //Set new color for page
        let newColor = color;
        while (newColor == color) {
            newColor = colors[Math.floor(Math.random() * colors.length)];
        }

        setColor(newColor);

        //set new question
        setQuestionIdx(questionIdx + 1);
        console.log(questionIdx);
        }
    }

    return <div style={{ backgroundColor: color, paddingBottom: "40rem" }}>
        {names.length == 0 ? <div>
            <p style={{ fontSize: "2rem", paddingTop: "3rem"}}>Skriv inn navn</p>
            {inputs}
            <button className="addName" onClick={() => setNPlayers(nPlayers + 1)}>+</button><br></br>
            <button disabled={false} className="addName" onClick={startGame}>Start Spill</button>
        </div> :
            <div>
                <h1 style={{ fontSize: "2.4rem", paddingTop: "10rem" }}>{questionList[questionIdx][0]}</h1>
                <p style={{ fontSize: "1.2rem", padding: "1rem"}}>{questionList[questionIdx][1]}</p>

                <button onClick={nextGame} className="nextButton">
                    Neste
                </button>
            </div>}

    </div>;
}

export default Game;