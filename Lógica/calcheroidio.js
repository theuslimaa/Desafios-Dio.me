let vitoriasPlayer = 50
let level

switch(true){
    case vitoriasPlayer <= 10:
        level = 'Ferro'
        console.log('O heroi com', vitoriasPlayer, 'vitorias está no nivel', level)
        break;
    case vitoriasPlayer <= 20:
        level = 'Bronze'
        console.log('O heroi com', vitoriasPlayer, 'vitorias está no nivel', level)
        break;
    case vitoriasPlayer <= 50:
        level = 'Prata'
        console.log('O heroi com', vitoriasPlayer, 'vitorias está no nivel', level)
        break;
    case vitoriasPlayer <= 80:
        level = 'Ouro'
        console.log('O heroi com', vitoriasPlayer, 'vitorias está no nivel', level)
        break;
    case vitoriasPlayer <= 90:
        level = 'Diamante'
        console.log('O heroi com', vitoriasPlayer, 'vitorias está no nivel', level)
        break;
    case vitoriasPlayer <= 10:
        level = 'Lendário'
        console.log('O heroi com', vitoriasPlayer, 'vitorias está no nivel', level)
        break;   
    case vitoriasPlayer >= 101:
        level = 'Imortal' 
        console.log('O heroi com', vitoriasPlayer, 'vitorias está no nivel', level)
        break;
}
