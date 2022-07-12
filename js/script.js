
const app= new Vue(
{
    
    el:'#root',

    data:{
        search:'',
        dropVisible:false,
        messaggio: ' scrivi un messaggio',
        indexActive: 0,
        indexActiveBox: '',
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]
    },

    methods:{
        indexChange:function(indexNow){
            this.indexActive=indexNow;
        },
        
        addMessage: function(userMessage){
            if (userMessage!=''){
                this.contacts[this.indexActive].messages.push({
                    date: '10/01/2020 15:51:00',
                    message: userMessage,
                    status: 'sent',
                });
                this.messaggio='';
                setTimeout(()=>{
                    this.contacts[this.indexActive].messages.push({
                        date: '10/01/2020 15:52:00',
                        message: 'ok',
                        status: 'received'
                    });
                }, 1000);
            }
        },

        newDate: function(ind){
            let date = this.contacts[this.indexActive].messages[ind].date.split(' ')[1];
            return date;
        },

        newDate2: function(contact, index){
            if(this.length(index)!=0){
                let long= this.length(index)-1;
                return contact.messages[long].date.split(' ')[1];
                
            }
            else{
                return "";
            }
        },

        newDate3: function(index){
            if(this.length(this.indexActive)!=0){
                let long= this.length(this.indexActive)-1;
                return this.contacts[this.indexActive].messages[long].date.split(' ')[1]; 
            }
            else{
                return "";
            }
        },


        length: function(indexOfElement){
            const lenght=this.contacts[indexOfElement].messages.length;
             return lenght;
        },
        dropVisibilator: function(index){
            this.indexActiveBox= index;
        },
        searchingFunction: function(){
            for (let i = 0; i < this.contacts.length; i++) {
                if(this.search===""){
                    this.contacts[i].visible=true;
                }
                else{
                    
                    if (this.contacts[i].name.toLowerCase().includes(this.search.toLowerCase())) {
                        this.contacts[i].visible=true;
                    }
                    else{
                        this.contacts[i].visible=false;
                    }
                }
            }
        },
        delMes: function(ind){
            this.contacts[this.indexActive].messages.splice(ind, 1);
        },

        lastMessage: function(contact, index){
            if(this.length(index)===0){
                
                return "Nessun messaggio nella chat";
            }
            else{
                let long= this.length(index)-1;
                return contact.messages[long].message;
            }
        },
        transform: function(){
            this.messaggio='';
        }
    }
});


// @click="contacts[indexActive].messages.splice(ind, 1)"