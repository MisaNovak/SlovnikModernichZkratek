// Data o zkratkách rozdělených do kategorií
const categories = {
  "sociální sítě, chaty, SMS": [
  {
    acronym: "LOL",
    meaning: "Laugh Out Loud",
    description: "Mega výsměch nebo záchvat smíchu.",
    context: "Když něco fakt rozseká.",
    usage: "'Viděl jsi tu fotku? LOL, nemůžu dýchat!'",
    funFact: "První LOL padlo už v roce 1989. Oldschool smích."
  },
  {
    acronym: "OMG",
    meaning: "Oh My God",
    description: "Šok, úžas, někdy drama.",
    context: "Když ti něco vyrazí dech.",
    usage: "'OMG, jak jsi mohl zapomenout na náš deadline?!'",
    funFact: "OMG bylo tak oblíbené, že to zkusili i v textovkách."
  },
  {
    acronym: "YOLO",
    meaning: "You Only Live Once",
    description: "Zkratka pro všechno šílený.",
    context: "Když riskuješ, protože proč ne.",
    usage: "'Koupil jsem lístek do první řady. YOLO!'",
    funFact: "Drake to povýšil na filozofii života. Respekt."
  },
  {
    acronym: "ICYMI",
    meaning: "In Case You Missed It",
    description: "Pro všechny, co chodí pozdě.",
    context: "Když chceš upozornit na něco cool.",
    usage: "'ICYMI, tady je ten meme, co je teď trendy.'",
    funFact: "Za popularitu vděčí hlavně Twitteru a neustálým rekapům."
  },
  {
    acronym: "LMK",
    meaning: "Let Me Know",
    description: "Dej echo.",
    context: "Když čekáš odpověď nebo potvrzení.",
    usage: "'LMK, až budeš ready na ten call.'",
    funFact: "Minimalismus v akci. Proč psát věty, když stačí LMK?"
  },
  {
    acronym: "NSFW",
    meaning: "Not Safe For Work",
    description: "Tady radši koukej doma.",
    context: "Když posíláš něco na hraně.",
    usage: "'To video je NSFW, hlavně neotevírej v práci.'",
    funFact: "Nejen pro kanceláře, NSFW je teď skoro všecko."
  },
  {
    acronym: "TMI",
    meaning: "Too Much Information",
    description: "Míň je víc.",
    context: "Když někdo zajede moc deep.",
    usage: "'TMI, kámo, nemusím vědět všechno o tvým žaludku.'",
    funFact: "Poprvé slyšet v seriálech, dneska běžný hláška."
  },
  {
    acronym: "BFF",
    meaning: "Best Friends Forever",
    description: "Top přátelství.",
    context: "Když píšeš svýmu bestie.",
    usage: "'Ty jsi fakt můj BFF, díky za všechno!'",
    funFact: "Začalo jako cheesy, teď je to mainstream přátelský lásky."
  },
  {
    acronym: "DM",
    meaning: "Direct Message",
    description: "Soukromý vibes.",
    context: "Slajdování do zpráv.",
    usage: "'DM me, potřebuju se na něco zeptat.'",
    funFact: "DM je cesta ke každému influencerovi. Možná."
  },
  {
    acronym: "GTG",
    meaning: "Got To Go",
    description: "Musím jít, sorry not sorry.",
    context: "Když končíš konvo nebo mizíš.",
    usage: "'GTG, mám už asi 10 zmeškanejch hovorů.'",
    funFact: "V chatech odjakživa, ale pořád fresh."
  },
  {
    acronym: "WTF",
    meaning: "What The F***",
    description: "Totální šok.",
    context: "Když nechápeš, co se děje.",
    usage: "'WTF, jak tohle může být legální?!'",
    funFact: "Klasika. Používáno od nepaměti, stále aktuální.", 
  }, 
{
    acronym: "GTG",
    meaning: "Got To Go",
    description: "Když se musíš rozloučit, ale nechceš to rozvádět.",
    context: "Pro rychlý odchod.",
    usage: "'GTG, příště.'",
    funFact: "Vypadáš, že máš všechno pod kontrolou, i když nestíháš."
  },
  {
    acronym: "OOTD",
    meaning: "Outfit Of The Day",
    description: "Pro ty dny, kdy máš outfit, který stojí za to ukázat.",
    context: "Když chceš ukázat, co máš na sobě.",
    usage: "'Mám fakt skvělý OOTD.'",
    funFact: "I obyčejný den může být stylový."
  },
  {
    acronym: "IDC",
    meaning: "I Don’t Care",
    description: "Když to opravdu neřešíš.",
    context: "Používá se, když se na něco vykašleš.",
    usage: "'Hele, IDC, dělej jak chceš.'",
    funFact: "Funguje, když nechceš nic komplikovat."
  },
  {
    acronym: "DM",
    meaning: "Direct Message",
    description: "Soukromá zpráva, když nechceš, aby to viděl celý chat.",
    context: "Pro osobní konverzace.",
    usage: "'Pošli mi to do DM.'",
    funFact: "Ideální pro tajné zprávy."
  },
  {
    acronym: "IMHO",
    meaning: "In My Humble Opinion",
    description: "Pro názor, který je skromný, i když si myslíš, že máš pravdu.",
    context: "Pro vyjádření názoru bez agresivity.",
    usage: "'IMHO, ten film nebyl až tak dobrý.'",
    funFact: "Chceš vypadat skromně, ale přesto máš co říct."
  },
  {
    acronym: "IMHO",
    meaning: "In My Humble Opinion",
    description: "Pro názor, který je skromný, i když si myslíš, že máš pravdu.",
    context: "Pro vyjádření názoru bez agresivity.",
    usage: "'IMHO, ten film nebyl až tak dobrý.'",
    funFact: "Chceš vypadat skromně, ale přesto máš co říct."
  },
  {
    acronym: "GG",
    meaning: "Good Game",
    description: "Pro sportovní uznání po hře.",
    context: "Používá se po každé hře.",
    usage: "'GG, příště se zlepšíme.'",
    funFact: "Říká to, že jsi to bral jako zábavu."
  },
  {
    acronym: "FYI",
    meaning: "For Your Information",
    description: "Když chceš sdílet informaci, která není urgentní.",
    context: "Pro nepovinné informace.",
    usage: "'FYI, akce začíná v 7.'",
    funFact: "Dáváš vědět, aniž bys přitom otravoval."
  },
  {
    acronym: "FOMO",
    meaning: "Fear Of Missing Out",
    description: "Když máš pocit, že ti něco uniká.",
    context: "Pro chvíle, kdy se cítíš mimo dění.",
    usage: "'FOMO, že jsem nezůstal na té párty.'",
    funFact: "Dneska je to skoro epidemie."
  },
  {
    acronym: "OML",
    meaning: "Oh My Life",
    description: "Pro reakci na něco, co tě šokuje.",
    context: "Když něco opravdu nemůžeš věřit.",
    usage: "'OML, to je šílené!'",
    funFact: "Varianta OMG, ale s větší váhou."
  },
  {
    acronym: "WYD",
    meaning: "What You Doing",
    description: "Když chceš zjistit, co ten druhý dělá.",
    context: "Pro zahájení konverzace.",
    usage: "'WYD? Máme něco podniknout?'",
    funFact: "Ideální pro lehkou otázku bez tlaku."
  },
  {
    acronym: "BAE",
    meaning: "Before Anyone Else",
    description: "Pro někoho, kdo je pro tebe důležitý.",
    context: "Vztahová zkratka.",
    usage: "'To je moje BAE, před všemi ostatními.'",
    funFact: "Skvělá na označení někoho, koho si vážíš."
  }
  ],
  "gaming a streaming": [
  {
    acronym: "GG",
    meaning: "Good Game",
    description: "Respekt za hru, i když jsi prohrál.",
    context: "Když chceš ukázat fair play.",
    usage: "'GG, kámo, tenhle souboj byl epickej.'",
    funFact: "Používá se od dob starých LAN párty."
  },
  {
    acronym: "GLHF",
    meaning: "Good Luck, Have Fun",
    description: "Pozitivní vibe před začátkem hry.",
    context: "Když si přejete fair a zábavnou hru.",
    usage: "'GLHF všem, ať vyhraje nejlepší.'",
    funFact: "Začalo jako přání, dneska je to skoro tradice."
  },
  {
    acronym: "AFK",
    meaning: "Away From Keyboard",
    description: "Když zmizíš během hry.",
    context: "Když musíš odběhnout na pauzu.",
    usage: "'Sorry, jsem AFK na 5 minut.'",
    funFact: "AFK je noční můra pro týmové hry."
  },
  {
    acronym: "Pog",
    meaning: "Play of the Game",
    description: "Reakce na něco fakt epickýho.",
    context: "Když jsi svědkem dokonalýho momentu.",
    usage: "'Ten clutch byl Pog!'",
    funFact: "Původně emote na Twitchi, teď už slang všude."
  },
  {
    acronym: "EZ",
    meaning: "Easy",
    description: "Dominance, ale trošku toxic.",
    context: "Když chceš ukázat, že to bylo jednoduchý.",
    usage: "'EZ win, team effort FTW.'",
    funFact: "Příliš časté použití? Ban v některých hrách!"
  },
  {
    acronym: "K/D",
    meaning: "Kill/Death Ratio",
    description: "Ukazatel, jak moc jsi OP.",
    context: "Analyzuješ svůj výkon ve střílečkách.",
    usage: "'Moje K/D je už 3.0, jsem ready na ranky.'",
    funFact: "K/D je hlavní ukazatel EGO v multiplayer hrách."
  },
  {
    acronym: "IRL",
    meaning: "In Real Life",
    description: "Skutečný život, mimo hry.",
    context: "Když mícháš gaming a reálný svět.",
    usage: "'IRL stream z mýho setupu začíná teď!'",
    funFact: "IRL kategorie na Twitchi je jedna z nejpopulárnějších."
  },
  {
    acronym: "FPS",
    meaning: "Frames Per Second / First Person Shooter",
    description: "Buď plynulost hry, nebo typ střílečky.",
    context: "Když mluvíš o grafice nebo CS:GO.",
    usage: "'Mám jen 30 FPS, potřebuju upgrade.'",
    funFact: "Více FPS znamená plynulejší hraní, méně rage."
  },
  {
    acronym: "NPC",
    meaning: "Non-Playable Character",
    description: "Postava, co jen dělá svoji rutinu.",
    context: "Když chceš popsat někoho, kdo je 'robot'.",
    usage: "'Chová se jak NPC, furt to samý dokola.'",
    funFact: "NPC memy jsou aktuálně gaming zlato."
  },
  {
    acronym: "GGWP",
    meaning: "Good Game, Well Played",
    description: "Kombo respektu a uznání.",
    context: "Když soupeř vážně předvedl top skill.",
    usage: "'GGWP, tohle byla nejlepší hra za dlouhou dobu.'",
    funFact: "Upřímné GGWP tě může dostat na přátele!"
  },
  {
    acronym: "FTW",
    meaning: "For The Win",
    description: "Výraz pro cokoliv, co ti přinese vítězství.",
    context: "Když vyzdvihuješ taktiku nebo předmět.",
    usage: "'Ultimátka FTW, GG!'",
    funFact: "FTW se používá i mimo gaming – univerzální hype."
  },
  {
    acronym: "OP",
    meaning: "Overpowered",
    description: "Něco nebo někdo je příliš silný.",
    context: "Když zbraň nebo postava ničí balanc.",
    usage: "'Ten nový patch udělal toho hrdinu úplně OP.'",
    funFact: "OP je důvod, proč se pořád řeší balance patch."
  },
  {
    acronym: "RNG",
    meaning: "Random Number Generator",
    description: "Náhoda ve hře.",
    context: "Když něco závisí na štěstí.",
    usage: "'Měl jsem fakt šílený RNG, samý špatný dropy.'",
    funFact: "RNG může být kámoš nebo největší nepřítel."
  },
  {
    acronym: "TTV",
    meaning: "Twitch TV",
    description: "Značka pro streamery na Twitchi.",
    context: "Když propaguješ svůj stream.",
    usage: "'Najdi mě na TTV pod nickem EpicGamer123.'",
    funFact: "TTV v nicku tě automaticky označí za streamera."
  },
  {
    acronym: "Clutch",
    meaning: "Záchranný tah na poslední chvíli.",
    description: "Když něco zachráníš proti všem očekáváním.",
    context: "Situace 1v5, a ty to dáš.",
    usage: "'To byl clutch roku, co jsi právě předvedl!'",
    funFact: "Clutch momenty dělají highlight videa."
}, 
 {
    acronym: "BOOST",
    meaning: "Level-Up na steroidech",
    description: "Když tě kámoš vytáhne z low rank pekla.",
    context: "Hlavně v ranked hrách.",
    usage: "'Potřebuju boost, jinak mě to bronze tiltne.'",
    funFact: "Boost je kámoš, ale matchmaking tě pak může zradit."
  },
  {
    acronym: "NOOB",
    meaning: "Začátečník, co neví, která bije",
    description: "Přátelské (nebo ne) označení rookie hráče.",
    context: "Každý byl někdy noob, nebuď toxik.",
    usage: "'Neber to špatně, ale dneska hraješ jak noob.'",
    funFact: "Noobové jsou srdcem každé komunity, ale moc se to neříká."
  },
  {
    acronym: "FEED",
    meaning: "Nakrmit enemy tým",
    description: "Když pořád umíráš a soupeři díky tobě rostu.",
    context: "Každý moba hráč to zná.",
    usage: "'Stop feedit, kámo, jinak to GG.'",
    funFact: "Feed je skvělý pro soupeře, horor pro tým."
  },
  {
    acronym: "KDA",
    meaning: "Kills, Deaths, Assists",
    description: "Statistika, která rozhoduje, jestli jsi frajer, nebo tragéd.",
    context: "Každá PvP hra, od LoLka po Dota.",
    usage: "'Moje KDA dneska padá jak Bitcoin.'",
    funFact: "KDA je víc než čísla, je to status."
  },
  {
    acronym: "GRIND",
    meaning: "Nekonečné farmaření XP a lootů",
    description: "Když musíš makat, abys měl gear jak king.",
    context: "MMORPG a survival hry.",
    usage: "'Celou noc jsem grindil na ten nový set.'",
    funFact: "Grind je láska i nenávist každého hráče."
  },
  {
    acronym: "ULT",
    meaning: "Ultimate Ability",
    description: "Ten OP skill, co většinou rozhodne game.",
    context: "Každý hrdina má svoji Ult.",
    usage: "'Moje Ult je ready, jdem na ně.'",
    funFact: "Nejlepší Ult momenty dělají highlight videa."
  },
  {
    acronym: "EZ",
    meaning: "Easy",
    description: "Když chceš flexit výhru (ale nebuď toxik).",
    context: "Po výhře, pokud máš sebevědomí na max.",
    usage: "'EZ win, ani se nezpotil.'",
    funFact: "Toxičtější verze GGWP, co rozděluje komunity."
  },
  {
    acronym: "CHEAT",
    meaning: "Když porušuješ pravidla jak boss (ale ne fair play)",
    description: "Hacky, wallhacky, aimboty – prostě unfair výhody.",
    context: "V každé online hře.",
    usage: "'Ten týpek má určitě cheat, nikdo tak dobře netrefí.'",
    funFact: "Cheatři jsou rychlejší na ban listu než na scoreboardu."
  },
  {
    acronym: "DROP",
    meaning: "Loot nebo gear z enemy/bossů",
    description: "Když ti RNG přihraje něco OP.",
    context: "Loot boxy, raid bossové.",
    usage: "'Z toho bosse mi padl epic drop, gg.'",
    funFact: "Drop rate je někdy tak nízký, že hráči ztrácí sanity."
  },
  {
    acronym: "SKIN",
    meaning: "Kosmetický upgrade pro styl",
    description: "Zbraň, postava, auto – hlavně, že vypadáš fresh.",
    context: "Každý battle pass nebo obchod.",
    usage: "'Koupil jsem nový skin, protože YOLO.'",
    funFact: "Skins jsou čistě kosmetické… nebo ne?"
  },
  {
    acronym: "STACK",
    meaning: "Tým lidí, co hrajou spolu",
    description: "Pro ty, co random matchmaking nemusí.",
    context: "Každý ranked game mode.",
    usage: "'Máme stack na večer, připoj se.'",
    funFact: "Full stack týmy často drtí solo hráče."
  },
  {
    acronym: "NERF",
    meaning: "Úmyslné zeslabení OP věcí ve hře",
    description: "Když vývojáři poslouchají pláč komunity.",
    context: "Patch notes každé online hry.",
    usage: "'Tohle nový nerf úplně zabil moji main postavu.'",
    funFact: "Nerfy často vedou k jiným OP věcem."
  },
  {
    acronym: "BUFF",
    meaning: "Posílení věcí, co byly slabé",
    description: "Když si tvoje oblíbená věc zaslouží comeback.",
    context: "Patch notes, co udělají hráče šťastné.",
    usage: "'Konečně dali buff tomu skillu, co nikdo nepoužíval.'",
    funFact: "Každý buff má potenciál stát se OP."
  },
  {
    acronym: "RANKED",
    meaning: "Hra o status, ne jen zábavu",
    description: "Když jdeš do tryhard módu.",
    context: "Každý competitive mód.",
    usage: "'Ranked dneska bolí, ale musím dál grindit.'",
    funFact: "Ranked módy ničí přátelství a kontrolery."
  }
  ],
  "trendy popkulura": [
  {
    acronym: "BOP",
    meaning: "Hit song",
    description: "Píseň, co nemůžeš vypustit.",
    usage: "'Ten track je fakt BOP.'",
    funFact: "Hymna na repeat."
  },
  {
    acronym: "GOAT",
    meaning: "Greatest of All Time",
    description: "Legenda.",
    usage: "'MJ je GOAT.'",
    funFact: "Nejlepší navždy."
  },
  {
    acronym: "VIBE",
    meaning: "Mood or feeling",
    description: "Nálada, co to všechno určuje.",
    usage: "'Ten vibe je skvělý.'",
    funFact: "Vibe to dělá."
  },
  {
    acronym: "CLAPBACK",
    meaning: "Sharp response",
    description: "Trefná odpověď.",
    usage: "'Ten clapback byl zničující.'",
    funFact: "Moc silná reakce."
  },
  {
    acronym: "SUS",
    meaning: "Suspicious",
    description: "Podezřelý.",
    usage: "'To je fakt SUS.'",
    funFact: "Někdo tu něco schovává."
  },
  {
    acronym: "STAN",
    meaning: "Be obsessed with",
    description: "Být úplně na někom/něčem.",
    usage: "'Totálně staním Drakea.'",
    funFact: "Fanatismus v akci."
  },
  {
    acronym: "LIT",
    meaning: "Amazing",
    description: "Super, skvělé.",
    usage: "'Ta párty byla LIT.'",
    funFact: "Vždycky intenzivní."
  },
  {
    acronym: "FOMO",
    meaning: "Fear of Missing Out",
    description: "Strach, že něco propásneš.",
    usage: "'Mám FOMO, musím jít.'",
    funFact: "Tohle nás žene k akci."
  },
  {
    acronym: "TBT",
    meaning: "Throwback Thursday",
    description: "Nostalgie ve čtvrtek.",
    usage: "'#TBT, staré fotky.'",
    funFact: "Vždycky funguje."
  },
  {
    acronym: "SKEPTIC",
    meaning: "Doubter",
    description: "Někdo, kdo vždycky pochybuje.",
    usage: "'Jsi skeptik, ale máš pravdu.'",
    funFact: "Pochybuj, ale buď opatrný."
  }
  ],
  "zábava a humor": [
  {
    acronym: "GOAT",
    meaning: "Greatest of All Time",
    description: "Legenda.",
    usage: "'MJ je GOAT.'",
    funFact: "Nejlepší navždy."
  },
  {
    acronym: "VIBE",
    meaning: "Mood or feeling",
    description: "Nálada, co to všechno určuje.",
    usage: "'Ten vibe je skvělý.'",
    funFact: "Vibe to dělá."
  },
  {
    acronym: "CLAPBACK",
    meaning: "Sharp response",
    description: "Trefná odpověď.",
    usage: "'Ten clapback byl zničující.'",
    funFact: "Moc silná reakce."
  },
  {
    acronym: "SUS",
    meaning: "Suspicious",
    description: "Podezřelý.",
    usage: "'To je fakt SUS.'",
    funFact: "Někdo tu něco schovává."
  },
  {
    acronym: "STAN",
    meaning: "Be obsessed with",
    description: "Být úplně na někom/něčem.",
    usage: "'Totálně staním Drakea.'",
    funFact: "Fanatismus v akci."
  },
  {
    acronym: "LIT",
    meaning: "Amazing",
    description: "Super, skvélé.",
    usage: "'Ta párty byla LIT.'",
    funFact: "Vždycky intenzivní."
  },
  {
    acronym: "FOMO",
    meaning: "Fear of Missing Out",
    description: "Strach, že něco propásneš.",
    usage: "'Mám FOMO, musím jít.'",
    funFact: "Tohle nás žene k akci."
  },
  {
    acronym: "TBT",
    meaning: "Throwback Thursday",
    description: "Nostalgie ve čtvrtek.",
    usage: "'#TBT, staré fotky.'",
    funFact: "Vždycky funguje."
  },
  {
    acronym: "SKEPTIC",
    meaning: "Doubter",
    description: "Někdo, kdo vždycky pochybí.",
    usage: "'Jsi skeptik, ale máš pravdu.'",
    funFact: "Pochybuj, ale buď opatrný."
  },
 
  ], 
  "pracovní a profesionální": [
  
   
{
    acronym: "WIP",
    meaning: "Work In Progress",
    description: "Něco, co ještě není hotové.",
    usage: "'Tady máš ten dokument, ale je to ještě WIP.'",
    funFact: "Nikdy nevíš, kdy to bude hotové."
  },
  {
    acronym: "FYI",
    meaning: "For Your Information",
    description: "Pro tvoje info.",
    usage: "'FYI, schůzka byla přesunuta.'",
    funFact: "Typické pro e-maily a pracovních zpráv."
  },
  {
    acronym: "TBD",
    meaning: "To Be Determined",
    description: "Něco, co ještě není rozhodnuto.",
    usage: "'Datum konference je TBD.'",
    funFact: "Vždycky používáš, když nevíš, co dál."
  },
  {
    acronym: "ASAP",
    meaning: "As Soon As Possible",
    description: "Co nejdřív, rychle.",
    usage: "'Pošlete mi to ASAP!'",
    funFact: "Když jde o čas, neexistuje žádné odkládání."
  },
  {
    acronym: "CEO",
    meaning: "Chief Executive Officer",
    description: "Vůdce firmy, hlavní šéf.",
    usage: "'Náš CEO se rozhodl změnit strategii.'",
    funFact: "Nejdůležitější člověk ve firmě."
  },
  {
    acronym: "CFO",
    meaning: "Chief Financial Officer",
    description: "Odpovědný za finance firmy.",
    usage: "'CFO už má všechno připravené na audit.'",
    funFact: "Sleduje každý cent v účetnictví."
  },
  {
    acronym: "HR",
    meaning: "Human Resources",
    description: "Oddělení pro správu lidí.",
    usage: "'Máš nějaké novinky z HR?'",
    funFact: "Vždycky připraveni pomoci s dovolenou nebo problémem."
  },
  {
    acronym: "EOD",
    meaning: "End Of Day",
    description: "Do konce pracovního dne.",
    usage: "'Odesílám to EOD.'",
    funFact: "Vždycky to zní naléhavě, i když už je skoro večer."
  },
  {
    acronym: "ETA",
    meaning: "Estimated Time of Arrival",
    description: "Odhadovaný čas příchodu.",
    usage: "'Jaký je ETA na ten projekt?'",
    funFact: "Když se čeká na něco důležitého."
  },
  {
    acronym: "PM",
    meaning: "Project Manager",
    description: "Osoba zodpovědná za řízení projektů.",
    usage: "'PM požaduje týdenní update.'",
    funFact: "Kdo jiný má pod kontrolou všechny termíny?"
  },
  {
    acronym: "R&D",
    meaning: "Research and Development",
    description: "Výzkum a vývoj nových produktů.",
    usage: "'R&D právě testuje nový prototyp.'",
    funFact: "Tajemství za inovacemi ve firmě."
  },
  {
    acronym: "KPI",
    meaning: "Key Performance Indicator",
    description: "Metriky pro měření úspěšnosti.",
    usage: "'Naše KPI za tento kvartál jsou v červených číslech.'",
    funFact: "Sleduje se vše, od prodeje po spokojenost zákazníků."
  },
  {
    acronym: "B2B",
    meaning: "Business to Business",
    description: "Obchod mezi firmami.",
    usage: "'Jsme B2B firma, prodáváme naše služby jiným podnikům.'",
    funFact: "Když jednáš s jinými firmami, ne s jednotlivci."
  },
  {
    acronym: "B2C",
    meaning: "Business to Consumer",
    description: "Obchod mezi firmou a zákazníkem.",
    usage: "'Náš B2C model je postavený na online prodeji.'",
    funFact: "Pro přímý kontakt s zákazníky."
  },
  {
    acronym: "SaaS",
    meaning: "Software as a Service",
    description: "Software, který je poskytován jako služba online.",
    usage: "'Náš produkt je SaaS, přístupný po měsíčním předplatném.'",
    funFact: "Oblíbený model pro cloudové služby."
  },
  {
    acronym: "MVP",
    meaning: "Minimum Viable Product",
    description: "Nejjednodušší verze produktu pro testování na trhu.",
    usage: "'Naší MVP je verze aplikace s pouze základními funkcemi.'",
    funFact: "Vždy začínáš s tím nejzákladnějším a testuješ to na uživatelích."
  },
  {
    acronym: "SLA",
    meaning: "Service Level Agreement",
    description: "Smlouva o úrovni služeb.",
    usage: "'Náš SLA stanovuje čas pro vyřešení problému na 24 hodin.'",
    funFact: "Přesně dané podmínky pro služby mezi firmou a zákazníkem."
  },
  {
    acronym: "PTO",
    meaning: "Paid Time Off",
    description: "Platná dovolená, která je zaplacena.",
    usage: "'Máš ještě nějaký PTO na tento měsíc?'",
    funFact: "Když chceš odpočívat a ještě za to dostat zaplaceno."
  }
  ],
  "technologie a geeky": [
    {
      acronym: "LOL",
      meaning: "Laugh Out Loud",
      description: "Používá se k označení silného smíchu nebo pobavení.",
      context: "Online chaty a komentáře.",
      usage: "Příklad: 'Ten vtip byl tak dobrý, že jsem musel napsat LOL!'",
      funFact: "V roce 2011 bylo 'LOL' přidáno do Oxfordského slovníku angličtiny."
    },
    {
      acronym: "BRB",
      meaning: "Be Right Back",
      description: "Oznámení, že na chvíli odejdete, ale brzy se vrátíte.",
      context: "Chatovací aplikace.",
      usage: "Příklad: 'Musím si dojít pro kafe, BRB.'",
      funFact: "Používá se od 90. let na platformách jako ICQ a MSN Messenger."
    },
    {
      acronym: "DM",
      meaning: "Direct Message",
      description: "Soukromá zpráva poslaná konkrétní osobě.",
      context: "Sociální sítě jako Instagram nebo Twitter.",
      usage: "Příklad: 'Pošli mi to do DM.'",
      funFact: "V angličtině se říká také 'slide into DMs', což znamená pokus o flirtování."
    }, 
   {
    acronym: "TILT",
    meaning: "Stav mysli po sérii proher",
    description: "Když tě všechno štve a hraješ hůř než noob.",
    context: "Po každé toxické lobby.",
    usage: "'Jsem tak tilt, že musím vypnout.'",
    funFact: "Tiltovaný hráči dělají nejvíc ragequitů."
  }, 
  {
    acronym: "AI",
    meaning: "Artificial Intelligence",
    description: "Mozek pro stroje.",
    context: "Když mluvíš o robotech nebo chatbotovi.",
    usage: "'AI teď fakt mění svět.'",
    funFact: "První zmínka o AI byla už v roce 1956."
  },
  {
    acronym: "API",
    meaning: "Application Programming Interface",
    description: "Rozhraní pro komunikaci aplikací.",
    context: "Když propojuješ software.",
    usage: "'Použil jsem API ke stažení dat z serveru.'",
    funFact: "Bez API by neexistoval moderní web."
  },
  {
    acronym: "IoT",
    meaning: "Internet of Things",
    description: "Chytrá zařízení připojená k netu.",
    context: "Od chytrých ledniček po auta.",
    usage: "'IoT zařízení mi dneska kontroluje celou domácnost.'",
    funFact: "Do roku 2030 bude více IoT zařízení než lidí."
  },
  {
    acronym: "VR",
    meaning: "Virtual Reality",
    description: "Únik do virtuálního světa.",
    context: "Když nasadíš brýle a zmizíš.",
    usage: "'Hrál jsem ve VR a úplně mě to pohltilo.'",
    funFact: "VR technologie byla poprvé představena už v 60. letech."
  },
  {
    acronym: "AR",
    meaning: "Augmented Reality",
    description: "Virtuální vrstvy nad realitou.",
    context: "Pokémon GO nebo chytré brýle.",
    usage: "'AR mění způsob, jak vidíme svět kolem sebe.'",
    funFact: "AR byla původně vyvinuta pro vojenské účely."
  },
  {
    acronym: "HTML",
    meaning: "HyperText Markup Language",
    description: "Stavební kámen webu.",
    context: "Když tvoříš webové stránky.",
    usage: "'HTML je základ, který se každý vývojář musí naučit.'",
    funFact: "První webová stránka byla vytvořena v roce 1991 pomocí HTML."
  },
  {
    acronym: "CSS",
    meaning: "Cascading Style Sheets",
    description: "Design a styl webových stránek.",
    context: "Když web vypadá pěkně.",
    usage: "'S CSS jsme tomu webu dali život.'",
    funFact: "CSS se poprvé objevilo v roce 1996."
  },
  {
    acronym: "JS",
    meaning: "JavaScript",
    description: "Programovací jazyk pro web.",
    context: "Když děláš web interaktivní.",
    usage: "'Animace? To zvládne JS.'",
    funFact: "JavaScript byl vytvořen za pouhých 10 dní."
  },
  {
    acronym: "CPU",
    meaning: "Central Processing Unit",
    description: "Mozek počítače.",
    context: "Když řešíš výkon PC.",
    usage: "'Můj CPU má 16 jader a jede jako ďábel.'",
    funFact: "První CPU byl Intel 4004 z roku 1971."
  },
  {
    acronym: "GPU",
    meaning: "Graphics Processing Unit",
    description: "Specialista na grafiku.",
    context: "Když renderuješ hry nebo videa.",
    usage: "'Potřebuju novou GPU pro lepší FPS.'",
    funFact: "Dnes GPU používáme i pro AI a vědu."
  },
  {
    acronym: "RAM",
    meaning: "Random Access Memory",
    description: "Rychlá paměť pro aktuální úkoly.",
    context: "Když multitaskuješ na PC.",
    usage: "'Mám 32 GB RAM pro náročné aplikace.'",
    funFact: "RAM ukládá data jen dočasně, při vypnutí se vše smaže."
  },
  {
    acronym: "SSD",
    meaning: "Solid State Drive",
    description: "Rychlé úložiště.",
    context: "Když chceš rychlé načítání.",
    usage: "'SSD zrychlilo můj notebook na úplně jinou úroveň.'",
    funFact: "SSD je až 10x rychlejší než klasický HDD."
  },
  {
    acronym: "HTTP",
    meaning: "HyperText Transfer Protocol",
    description: "Protokol pro přenos dat na webu.",
    context: "Když otevíráš stránky.",
    usage: "'Bez HTTP by nebyl žádný internet.'",
    funFact: "HTTPS je bezpečnější verze s šifrováním."
  },
  {
    acronym: "URL",
    meaning: "Uniform Resource Locator",
    description: "Adresa webové stránky.",
    context: "Když něco hledáš na webu.",
    usage: "'Zadej tu URL a najdeš to.'",
    funFact: "První URL odkazovalo na CERN, kde se zrodil web."
  },
  {
    acronym: "DNS",
    meaning: "Domain Name System",
    description: "Telefonní seznam internetu.",
    context: "Když zadáš adresu a dostaneš stránku.",
    usage: "'DNS přeloží doménu na IP adresu.'",
    funFact: "DNS existuje od roku 1983."
  },
  {
    acronym: "LAN",
    meaning: "Local Area Network",
    description: "Lokální síť počítačů.",
    context: "Když hraješ multiplayer na LAN párty.",
    usage: "'Všichni jsme připojeni na stejnou LAN.'",
    funFact: "LAN párty byly fenoménem 90. let."
  },
  {
    acronym: "VPN",
    meaning: "Virtual Private Network",
    description: "Ochrana tvého soukromí online.",
    context: "Když se připojuješ z cizí Wi-Fi.",
    usage: "'VPN mě chrání před sledováním.'",
    funFact: "VPN šifruje data, takže jsou pro hackery nečitelná."
  },
  {
    acronym: "OS",
    meaning: "Operating System",
    description: "Mozek celého počítače.",
    context: "Windows, macOS nebo Linux.",
    usage: "'Jaký OS používáš na práci?'",
    funFact: "První OS vznikl už v roce 1956."
  },
  {
    acronym: "IP",
    meaning: "Internet Protocol",
    description: "Adresa každého zařízení na netu.",
    context: "Když nastavuješ síť.",
    usage: "'Změním si IP pro lepší anonymitu.'",
    funFact: "IPv4 adresy jsou skoro vyčerpané, přecházíme na IPv6."
  },
  {
    acronym: "SSH",
    meaning: "Secure Shell",
    description: "Bezpečný přístup k serveru.",
    context: "Když spravuješ vzdálený server.",
    usage: "'Připojím se na server přes SSH.'",
    funFact: "SSH nahrazuje starší a méně bezpečné Telnet."
  },
  {
    acronym: "UI",
    meaning: "User Interface",
    description: "Vizuální část aplikace.",
    context: "Když mluvíš o designu aplikací.",
    usage: "'UI je čisté a snadno ovladatelné.'",
    funFact: "Dobré UI může aplikaci zachránit."
  },
  {
    acronym: "UX",
    meaning: "User Experience",
    description: "Celkový zážitek uživatele.",
    context: "Když navrhuješ software.",
    usage: "'UX je tady perfektní, všechno funguje hladce.'",
    funFact: "UX zahrnuje i emoce uživatele."
  },
  {
    acronym: "SaaS",
    meaning: "Software as a Service",
    description: "Software dostupný přes cloud.",
    context: "Když používáš aplikaci online.",
    usage: "'Google Drive je typický příklad SaaS.'",
    funFact: "SaaS zjednodušil podnikání malým firmám."
  },
  {
    acronym: "SEO",
    meaning: "Search Engine Optimization",
    description: "Vylepšení webu pro vyhledávače.",
    context: "Když chceš být první na Googlu.",
    usage: "'Naše SEO strategie nám zvedla návštěvnost.'",
    funFact: "SEO zahrnuje i analýzu klíčových slov."
  },
  {
    acronym: "ML",
    meaning: "Machine Learning",
    description: "Když počítač sám rozpozná vzory.",
    context: "Když jde o predikce nebo AI.",
    usage: "'ML model nám zlepšil přesnost analýzy.'",
    funFact: "ML je součást AI a jeho význam stále roste."
  },
  {
    acronym: "BI",
    meaning: "Business Intelligence",
    description: "Analýza dat pro byznysová rozhodnutí.",
    context: "Když pracuješ s firemními daty.",
    usage: "'BI nám ukázalo, kde zlepšit prodeje.'",
    funFact: "BI nástroje jako Power BI nebo Tableau jsou stále populárnější."
  },
  {
    acronym: "SDK",
    meaning: "Software Development Kit",
    description: "Sada nástrojů pro vývoj aplikací.",
    context: "Když programuješ mobilní nebo desktop aplikace.",
    usage: "'Použil jsem Android SDK pro vývoj aplikace.'",
    funFact: "SDK obsahuje vše od knihoven po dokumentaci."
  },
  {
    acronym: "IDE",
    meaning: "Integrated Development Environment",
    description: "Editor kódu s extra funkcemi.",
    context: "Když píšeš a ladíš programy.",
    usage: "'Visual Studio Code je moje oblíbené IDE.'",
    funFact: "IDE zrychluje vývoj díky integrovaným nástrojům."
  },
  {
    acronym: "CLI",
    meaning: "Command Line Interface",
    description: "Práce s příkazy v terminálu.",
    context: "Když spravuješ servery nebo Git.",
    usage: "'Používám CLI k rychlé správě úkolů.'",
    funFact: "Příkazový řádek byl základem práce s počítači před grafickými rozhraními."
  },
  {
    acronym: "PWA",
    meaning: "Progressive Web App",
    description: "Webové aplikace s funkcemi mobilních aplikací.",
    context: "Když nechceš stahovat aplikace.",
    usage: "'Tahle stránka je PWA, takže funguje i offline.'",
    funFact: "PWA šetří místo a čas uživatelům."
  },
  {
    acronym: "DNS",
    meaning: "Domain Name System",
    description: "Systém převodu URL na IP adresy.",
    context: "Když hledáš, jak web funguje.",
    usage: "'DNS mi pomohlo diagnostikovat problém se sítí.'",
    funFact: "DNS je základní kámen internetu od 80. let."
  },
  {
    acronym: "CORS",
    meaning: "Cross-Origin Resource Sharing",
    description: "Pravidla pro sdílení dat mezi servery.",
    context: "Když máš problém s API požadavky.",
    usage: "'Zapomněl jsem nastavit CORS na serveru.'",
    funFact: "CORS chrání uživatele před neautorizovanými daty."
  },
  {
    acronym: "JSON",
    meaning: "JavaScript Object Notation",
    description: "Formát pro přenos dat.",
    context: "Když posíláš nebo přijímáš data mezi systémy.",
    usage: "'API odpovědělo ve formátu JSON.'",
    funFact: "JSON je populární díky své jednoduchosti a čitelnosti."
  },
  {
    acronym: "REST",
    meaning: "Representational State Transfer",
    description: "Styl pro návrh webových API.",
    context: "Když stavíš rozhraní pro aplikace.",
    usage: "'REST API je rychlé a snadné na implementaci.'",
    funFact: "REST API fungují na základě standardních HTTP metod."
  },
  {
    acronym: "KPI",
    meaning: "Key Performance Indicator",
    description: "Metrika úspěšnosti.",
    context: "Když měříš výkonnost projektu.",
    usage: "'Naše KPI ukazují růst o 20 %.'",
    funFact: "Dobře nastavené KPI mohou zachránit projekt."
  },
  {
    acronym: "CDN",
    meaning: "Content Delivery Network",
    description: "Rychlejší načítání obsahu přes servery po celém světě.",
    context: "Když optimalizuješ webovou stránku.",
    usage: "'Díky CDN je náš web dostupný rychleji globálně.'",
    funFact: "CDN snižuje latenci a zátěž hlavního serveru."
  },
  {
    acronym: "VPN",
    meaning: "Virtual Private Network",
    description: "Šifrované připojení k internetu.",
    context: "Když chceš chránit své soukromí.",
    usage: "'Používám VPN pro práci z veřejné Wi-Fi.'",
    funFact: "VPN chrání před sledováním a útoky."
  },
  {
    acronym: "OTP",
    meaning: "One-Time Password",
    description: "Jednorázové heslo pro ověření.",
    context: "Když se přihlašuješ s dvoufaktorovou autentizací.",
    usage: "'Zadám OTP a jsem přihlášen.'",
    funFact: "OTP platí většinou jen pár sekund pro větší bezpečnost."
  },
  {
    acronym: "SSL",
    meaning: "Secure Sockets Layer",
    description: "Šifrování pro bezpečný přenos dat.",
    context: "Když vidíš HTTPS v adresním řádku.",
    usage: "'SSL certifikát zajistí bezpečnost webu.'",
    funFact: "SSL bylo nahrazeno modernějším TLS."
  },
  {
    acronym: "ORM",
    meaning: "Object-Relational Mapping",
    description: "Automatizace práce s databází.",
    context: "Když pracuješ s daty a SQL.",
    usage: "'Díky ORM nemusím psát ručně SQL dotazy.'",
    funFact: "ORM spojuje objekty kódu s databázovými tabulkami."
  },
  {
    acronym: "TILT",
    meaning: "Stav mysli po sérii proher",
    description: "Když tě všechno štve a hraješ hůř než noob.",
    context: "Po každé toxické lobby.",
    usage: "'Jsem tak tilt, že musím vypnout.'",
    funFact: "Tiltovaný hráči dělají nejvíc ragequitů."
  }
  ],
  "technologie a geeky": [
    {
      acronym: "LOL",
      meaning: "Laugh Out Loud",
      description: "Používá se k označení silného smíchu nebo pobavení.",
      context: "Online chaty a komentáře.",
      usage: "Příklad: 'Ten vtip byl tak dobrý, že jsem musel napsat LOL!'",
      funFact: "V roce 2011 bylo 'LOL' přidáno do Oxfordského slovníku angličtiny."
    }
   ], 
   // Ostatní kategorie stejné jako výše
};

// Funkce pro zobrazení zkratek
function displayShortcuts(filteredShortcuts) {
  const dictionary = document.getElementById('dictionary');
  dictionary.innerHTML = ''; // Vymaže předchozí obsah

  Object.keys(filteredShortcuts).forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');
    
    const categoryTitle = document.createElement('h2');
    categoryTitle.textContent = category;
    categoryDiv.appendChild(categoryTitle);
    
    filteredShortcuts[category].forEach(shortcut => {
      const shortcutDiv = document.createElement('div');
      shortcutDiv.classList.add('shortcut');
      
      const shortcutTitle = document.createElement('h3');
      shortcutTitle.textContent = shortcut.acronym + " – " + shortcut.meaning;
      
      const shortcutDescription = document.createElement('p');
      shortcutDescription.textContent = shortcut.description;
      
      const detailsDiv = document.createElement('div');
      detailsDiv.classList.add('details');
      
      const contextP = document.createElement('p');
      contextP.innerHTML = `<strong>Kontext:</strong> ${shortcut.context}`;
      
      const usageP = document.createElement('p');
      usageP.innerHTML = `<strong>Použití:</strong> ${shortcut.usage}`;
      
      const funFactP = document.createElement('p');
      funFactP.innerHTML = `<strong>Fakt/Vtip:</strong> ${shortcut.funFact}`;
      
      detailsDiv.appendChild(contextP);
      detailsDiv.appendChild(usageP);
      detailsDiv.appendChild(funFactP);

      shortcutDiv.appendChild(shortcutTitle);
      shortcutDiv.appendChild(shortcutDescription);
      shortcutDiv.appendChild(detailsDiv);

      shortcutDiv.addEventListener('click', () => {
        shortcutDiv.classList.toggle('open');
      });
      
      categoryDiv.appendChild(shortcutDiv);
    });

    dictionary.appendChild(categoryDiv);
  });
}

// Funkce pro vyhledávání
function searchShortcuts() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  const filteredCategories = {};

  // Filtrace zkratek podle hledaného výrazu
  Object.keys(categories).forEach(category => {
    const filteredShortcuts = categories[category].filter(shortcut =>
      shortcut.acronym.toLowerCase().includes(searchTerm) ||
      shortcut.meaning.toLowerCase().includes(searchTerm) ||
      shortcut.description.toLowerCase().includes(searchTerm)
    );

    if (filteredShortcuts.length > 0) {
      filteredCategories[category] = filteredShortcuts;
    }
  });
  displayShortcuts(filteredCategories);
}

// Inicializace slovníku
displayShortcuts(categories);
