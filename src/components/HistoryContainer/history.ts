import inicio from '../../assets/inicio.jpg'
import caminho_conversar_competidores from '../../assets/caminho_conversar_competidores.jpg'
import fim_incorporar_ideias from '../../assets/fim_incorporar_ideias.jpg'
import fim_estilo_diferente from '../../assets/fim_estilo_diferente.jpg'
import fim_musica_planejada from '../../assets/fim_musica_planejada.jpg'
import fim_solo_improvisado from '../../assets/fim_solo_improvisado.jpg'
import compartilhar_uma_história_sobre_sua_jornada_musical from '../../assets/compartilhar_uma_história_sobre_sua_jornada_musical.jpg'
import perguntar_sobre_o_estilo_musical_deles from '../../assets/perguntar_sobre_o_estilo_musical_deles.jpg'
import caminho_treinar_video from '../../assets/caminho_treinar_video.jpg'
import caminho_enviar_video from '../../assets/caminho_enviar_video.jpg'
import caminho_buscar_conselhos from '../../assets/caminho_buscar_conselhos.jpg'
import caminho_conversar_jurados from '../../assets/caminho_conversar_jurados.jpg'
import caminho_focar_audicao from '../../assets/caminho_focar_audicao.jpg'
import caminho_focar_emocao from '../../assets/caminho_focar_emocao.jpg'
import caminho_focar_tecnica from '../../assets/caminho_focar_tecnica.jpg'
import caminho_impressionar_rafael from '../../assets/caminho_impressionar_rafael.jpg'
import caminho_manter_calma from '../../assets/caminho_manter_calma.jpg'
import caminho_nervoso_audicao from '../../assets/caminho_nervoso_audicao.jpg'

type Option = {
  name: string
  text: string
}

export type History = {
  name: string
  image: string
  text: React.ReactNode
  opcoes?: Option[]
}

export const history: History[] = [
  {
    name: 'inicio',
    image: inicio,
    text: 'Você é Lucas, um guitarrista talentoso que sonha em tocar com a banda Tempestade de Aço, uma das maiores bandas de rock da atualidade.\n\nA parede do seu quarto é decorada com pôsteres da banda, e sua guitarra, reluzente e bem cuidada, repousa ao lado da sua cama.\n\nDepois de anos acompanhando a banda e tocando suas músicas, você finalmente vê uma oportunidade de ouro: há uma vaga aberta para guitarrista principal.\n\nSeu coração dispara, e sua mente começa a imaginar o palco, as luzes e a multidão cantando junto com você.\n\nO que você faz primeiro?',
    opcoes: [
      {
        name: 'caminho_enviar_video',
        text: 'Enviar imediatamente um vídeo com sua melhor performance.'
      },
      {
        name: 'caminho_treinar_video',
        text: 'Treinar por uma semana para garantir que você esteja impecável.'
      },
      {
        name: 'caminho_buscar_conselhos',
        text: 'Buscar conselhos com outros músicos amigos para entender como impressionar a banda.'
      }
    ]
  },
  {
    name: 'caminho_enviar_video',
    image: caminho_enviar_video,
    text: "Você decide gravar e enviar seu vídeo imediatamente, sem perder tempo.\n\nSua sala de ensaio é pequena, mas você sente o poder em cada nota que toca. Você grava várias versões até que, exausto, escolhe a melhor.\n\nEnquanto clica em 'Enviar', suas mãos suam e a ansiedade começa a dominar.\n\nDias depois, você recebe um e-mail. Foi selecionado para a audição! A emoção é tão grande que você quase deixa o celular cair.\n\nNo entanto, ao chegar à audição, seu coração afunda ao ver Rafael, um guitarrista famoso da cena underground, também competindo.\n\nEle é carismático e parece ter uma confiança inabalável.\n\nO que você faz?",
    opcoes: [
      {
        name: 'caminho_focar_audicao',
        text: 'Tenta ignorar Rafael e se concentrar na sua audição.'
      },
      {
        name: 'caminho_impressionar_rafael',
        text: 'Tenta impressionar Rafael para ganhar sua confiança e obter dicas.'
      },
      {
        name: 'caminho_conversar_competidores',
        text: 'Conversa com os outros competidores para tentar entender mais sobre o estilo de Rafael e encontrar uma vantagem.'
      }
    ]
  },
  {
    name: 'caminho_treinar_video',
    image: caminho_treinar_video,
    text: 'Você decide que uma semana de treino será o suficiente para polir suas habilidades.\n\nDurante os dias seguintes, você se isola no estúdio, seus dedos deslizam sobre as cordas até ficarem doloridos, mas você sabe que está dando o melhor de si.\n\nA cada erro corrigido, sua confiança aumenta, e no final da semana você se sente pronto.\n\nDepois de gravar e enviar seu vídeo, a resposta finalmente chega: você foi selecionado para a audição!\n\nAo chegar na audição, o estresse toma conta de você ao ver outros guitarristas talentosos.\n\nA sala está cheia de energia, e cada um parece mais preparado que o outro.\n\nO que você faz?',
    opcoes: [
      {
        name: 'caminho_manter_calma',
        text: 'Mantém a calma e se concentra na sua performance.'
      },
      {
        name: 'caminho_nervoso_audicao',
        text: 'Fica ansioso e nervoso ao ver tantos concorrentes talentosos.'
      },
      {
        name: 'caminho_conversar_jurados',
        text: 'Decide conversar com os jurados antes de se apresentar para tentar criar uma conexão.'
      }
    ]
  },
  {
    name: 'caminho_conversar_jurados',
    image: caminho_conversar_jurados,
    text: 'Você se aproxima dos jurados, sentindo um misto de nervosismo e empolgação.\n\nEles estão discutindo algo, e você decide se juntar à conversa.\n\nVocê prefere (1) perguntar sobre o estilo musical deles ou (2) compartilhar uma história sobre sua jornada musical?',
    opcoes: [
      {
        name: 'perguntar_sobre_o_estilo_musical_deles',
        text: 'Perguntar sobre o estilo musical deles.'
      },
      {
        name: 'compartilhar_uma_história_sobre_sua_jornada_musical',
        text: 'Compartilhar uma história sobre sua jornada musical.'
      }
    ]
  },
  {
    name: 'perguntar_sobre_o_estilo_musical_deles',
    image: perguntar_sobre_o_estilo_musical_deles,
    text: 'Você pergunta sobre o estilo musical que eles preferem. Os jurados ficam felizes em compartilhar suas opiniões e se animam ao falar sobre suas bandas favoritas. A conversa flui, e você sente que ganhou a simpatia deles, ajudando a diminuir sua ansiedade. Quando chega a sua vez de se apresentar, você está mais calmo e confiante.',
    opcoes: [
      {
        name: 'caminho_manter_calma',
        text: 'Mantém a calma e se concentra na sua performance.'
      }
    ]
  },
  {
    name: 'compartilhar_uma_história_sobre_sua_jornada_musical',
    image: compartilhar_uma_história_sobre_sua_jornada_musical,
    text: 'Você decide compartilhar uma história sobre sua jornada musical. Os jurados ouvem atentamente, e um deles menciona que aprecia pessoas que têm uma conexão verdadeira com a música. Isso cria um clima amigável, e você se sente mais relaxado para a sua apresentação. Quando chega a sua vez de se apresentar, você está mais calmo e confiante.',
    opcoes: [
      {
        name: 'caminho_manter_calma',
        text: 'Mantém a calma e se concentra na sua performance.'
      }
    ]
  },
  {
    name: 'caminho_manter_calma',
    image: caminho_manter_calma,
    text: 'Você respira fundo e se concentra, lembrando-se de que se preparou bem para esse momento.\n\nAo iniciar sua apresentação, sua mão se move com confiança, e a música flui de forma suave e clara.\n\nOs jurados observam atentamente, e você percebe que está conseguindo capturar a atenção deles.\n\nVocê prefere (1) adicionar um solo improvisado ou (2) continuar com a música planejada?',
    opcoes: [
      { name: 'fim_solo_improvisado', text: 'Adicionar um solo improvisado.' },
      {
        name: 'fim_musica_planejada',
        text: 'Continuar com a música planejada.'
      }
    ]
  },
  {
    name: 'fim_solo_improvisado',
    image: fim_solo_improvisado,
    text: 'Você decide arriscar e adicionar um solo improvisado.\n\nOs jurados ficam impressionados com sua criatividade e habilidade.\n\nAo final da sua apresentação, eles aplaudem de pé e você é escolhido como o novo guitarrista da Tempestade de Aço! Parabéns!'
  },
  {
    name: 'fim_musica_planejada',
    image: fim_musica_planejada,
    text: 'Você decide seguir o plano e continuar com a música que ensaiou.\n\nAo final, os jurados elogiam sua técnica e a maneira como você se manteve focado.\n\nVocê é escolhido como o novo guitarrista da Tempestade de Aço! Parabéns!'
  },
  {
    name: 'caminho_nervoso_audicao',
    image: caminho_nervoso_audicao,
    text: 'Você fica tão nervoso que suas mãos começam a tremer, e a primeira nota que toca sai desafinada.\n\nOs jurados olham para você com uma mistura de compaixão e desapontamento.\n\nNo entanto, você tenta se recompor e continuar, mas a pressão é grande e você acaba se perdendo na música.\n\nAo final, você termina sua apresentação, mas sabe que não deu o seu melhor.\n\nDias depois, você recebe a notícia de que não foi escolhido.\n\nMas essa experiência te ensina sobre a importância de controlar o nervosismo e se preparar melhor para a próxima vez.'
  },
  {
    name: 'caminho_buscar_conselhos',
    image: caminho_buscar_conselhos,
    text: 'Você decide buscar conselhos com outros músicos que conhece.\n\nDurante a semana, você se encontra com João, um guitarrista que já tocou em várias bandas, e com Ana, uma vocalista talentosa.\n\nJoão te aconselha a focar na técnica, enquanto Ana fala sobre a importância de emocionar a plateia.\n\nVocê absorve cada palavra e ajusta sua estratégia.\n\nFinalmente, você grava seu vídeo e o envia com uma nova confiança. Dias depois, você recebe a resposta: está dentro!\n\nNo dia da audição, você se sente preparado, mas ainda há uma dúvida no ar: focar na técnica ou na emoção.\n\nO que você faz?',
    opcoes: [
      {
        name: 'caminho_focar_tecnica',
        text: 'Focar na técnica e impressionar com sua habilidade.'
      },
      {
        name: 'caminho_focar_emocao',
        text: 'Focar na emoção e tentar tocar o coração dos jurados.'
      }
    ]
  },
  {
    name: 'caminho_focar_audicao',
    image: caminho_focar_audicao,
    text: 'Você decide focar na sua audição, ouvindo atentamente os outros guitarristas.\n\nVocê observa as performances deles e analisa o que funciona e o que não funciona. Ao chegar sua vez, você se sente mais preparado e confiante.',
    opcoes: [
      {
        name: 'fim_estilo_diferente',
        text: 'Fazer algo totalmente diferente do que viu.'
      },
      {
        name: 'fim_incorporar_ideias',
        text: 'Incorporar algumas ideias que você gostou.'
      }
    ]
  },
  {
    name: 'fim_estilo_diferente',
    image: fim_estilo_diferente,
    text: 'Você opta por um estilo totalmente diferente.\n\nOs jurados ficam surpresos e admirados pela sua originalidade.\n\nAo final da sua apresentação, eles aplaudem, e você é escolhido como o novo guitarrista da Tempestade de Aço! Parabéns!'
  },
  {
    name: 'fim_incorporar_ideias',
    image: fim_incorporar_ideias,
    text: 'Você decide incorporar algumas ideias que gostou.\n\nOs jurados notam a sua habilidade de adaptação e a conexão com o estilo deles.\n\nAo final, eles elogiam sua apresentação e você é escolhido como o novo guitarrista da Tempestade de Aço! Parabéns!'
  },
  {
    name: 'caminho_focar_emocao',
    image: caminho_focar_emocao,
    text: 'Você decide focar na emoção e fazer com que cada nota ressoe no coração dos jurados.\n\nDurante sua apresentação, você se conecta com a música e transmite essa energia.\n\nOs jurados parecem hipnotizados e, ao final, eles aplaudem com entusiasmo.\n\nVocê é escolhido como o novo guitarrista da Tempestade de Aço! Parabéns!'
  },
  {
    name: 'caminho_focar_tecnica',
    image: caminho_focar_tecnica,
    text: 'Você decide focar na técnica, mostrando cada nuance e habilidade.\n\nDurante sua apresentação, os jurados ficam impressionados com sua precisão e domínio.\n\nNo entanto, alguns parecem estar buscando algo mais emocional.\n\nAo final, você é parabenizado pela habilidade, mas os jurados não te escolhem.\n\nEssa experiência te ensina que é importante equilibrar técnica e emoção na música.',
    opcoes: [
      {
        name: 'inicio',
        text: 'Reinicie a história!'
      }
    ]
  },
  {
    name: 'caminho_impressionar_rafael',
    image: caminho_impressionar_rafael,
    text: '\nVocê tenta impressionar Rafael, elogiando suas habilidades e pedindo dicas.\nEle se mostra amigável e compartilha alguns conselhos valiosos.\nNo entanto, você se distrai e acaba perdendo um pouco do foco na sua apresentação.\nAo final, os jurados reconhecem seu potencial, mas decidem não te escolher desta vez.\n\nDeseja tentar novamente?',
    opcoes: [
      {
        name: 'inicio',
        text: 'Reinicie a história!'
      }
    ]
  },
  {
    name: 'caminho_conversar_competidores',
    image: caminho_conversar_competidores,
    text: 'Você decide conversar com os outros competidores.\n\nAlguns deles compartilham suas experiências e truques, enquanto outros ficam mais reservados.\n\nVocê aprende algumas dicas úteis, mas também sente a pressão aumentar.\n\nAo final da audição, você percebe que, embora tenha se preparado, a competição é acirrada.\n\nOs jurados reconhecem seu talento, mas você não é escolhido desta vez.\n\nDeseja tentar novamente?',
    opcoes: [
      {
        name: 'inicio',
        text: 'Reinicie a história!'
      }
    ]
  }
]

export default history
