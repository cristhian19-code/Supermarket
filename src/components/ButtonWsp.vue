<template>
    <div class="contact__wsp">
        <div id="message__contact__wsp">
            <div class="content__message">

            </div>
            <div class="container__send">
                <input type="text" placeholder="Escriba un mensaje ....">
                <button class="btn__send">
                    <i class="far fa-paper-plane"></i>
                </button>
            </div>
        </div>
        <button class="btn__contact__wsp">
            <i class="fab fa-whatsapp"></i>
        </button>
    </div>
</template>

<script>
export default {
    mounted() {
        const button = document.querySelector('.btn__contact__wsp');

        button.addEventListener('click',()=>{
            document.getElementById('message__contact__wsp').classList.toggle('activate')
        })
    },
}
</script>

<style>

#message__contact__wsp{
    height: 400px;
    position: absolute;
    bottom: 80px;
    right: -400px;
    width: 300px;
    border-radius: 10px;
    transition: .5s linear;
    background-color: rgb(53, 53, 53);                                                                           
    box-shadow: 4px 4px 9px -3px rgba(0,0,0,0.39);
}

#message__contact__wsp.activate{
    right: 0;
}

.contact__wsp{
    position: fixed;
    display: flex;
    bottom: 20px;
    right: 20px;
    flex-direction: column;
    align-items: flex-end;
}

.btn__contact__wsp{
    font-size: 30px;
    margin-top: 10px;
    height: 65px;
    width: 65px;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    background-color: #25d366;
    color: white;
}

.container__send{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.container__send>input{
    height: 30px;
    border: 1px solid gray;
    width: 220px;
    padding: 10px;
    outline: none;
    border-radius: 5px;
}

.btn__send{
    height: 40px;
    width: 40px;
    font-size: 15px;
    border-radius: 50%;
    color: white;
    border: none;
    cursor: pointer;
    background-color: #25d366;
}

.btn__contact__wsp:hover{
    transform: scale(1.05);
    animation: rotate .5s ease alternate;
}

@keyframes rotate {
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
}

.content__message{
    height: 320px;
    width: 270px;
    border-radius: 10px;
    display: block;
    margin: 20px auto 10px auto;
    background-color: white;
}
</style>