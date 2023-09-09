
import {
  geeko_shaped_data_axs,
  geeko_rubber_data_LOKA,
  geeko_rubber_data_SAND,
  geeko_rubber_data_ILV,
  geeko_rubber_data_BigT,
} from './valor_geeko.js'

import { UpdateChart_Geeko } from './chart_funtions.js'

import { Worker, isMainThread, parentPort } from 'worker_threads';

import { updateCoin } from './coin.js'
let w = undefined;
export async function startWorker() {
  if (typeof w == 'undefined') {
    var axs = new Worker('./workers/worker_ILV.js');
    console.log('worker Started at ./workers/worker_ILV.js')
  }
  axs.onmessage = function (event) {
    UpdateChart_Geeko(event)//document.getElementById('result').innerHTML = event.data;
    console.log();
  };
  axs.on('error', (error) => {
    console.error('Error in worker:', error);
  });
}

function ErrorCaptureStackTrace(err){
  try {
    err = startWorker()
  } catch (error) {
    console.error(error); // This will automatically include the stack trace
  }
}

ErrorCaptureStackTrace()

    /*
    
          //NFT => NOT FOUND COIN 
          //w = new Worker('../assets/js/geeko_rubber_data_all_coins.js');
          setTimeout(axs_chart = new Worker('../assets/js/workers/worker_Chart_AXS.js'),1000)
          //setTimeout(axs_coin = new Worker('../assets/js/workers/worker_coin_axs.js'),36000)
          setTimeout(loka = new Worker('../assets/js/workers/worker_LOKA.js'),60*2*1000)
         // setTimeout(pixel = new Worker('../assets/js/workers/worker_pixel.js'),60*3*1000)//NFT
          //setTimeout(castaways = new Worker('../assets/js/workers/worker_castaways.js'),60*4*1000)//NFT
          //setTimeout(cc = new Worker('../assets/js/workers/worker_CC.js'),60*1*1000)NFT
          //setTimeout(champAsc = new Worker('../assets/js/workers/worker_ChampAsc.js'),60*2*1000)//NFT
          //setTimeout(eve = new Worker('../assets/js/workers/worker_EVE.js'),60*3*1000)//NFT
          setTimeout(ilv = new Worker('../assets/js/workers/worker_ILV.js'),60*4*1000)
          setTimeout(sand = new Worker('../assets/js/workers/worker_SAND.js'),60*1*1000)
          //setTimeout(uniC = new Worker('../assets/js/workers/worker_cryptoUnicorns.js'),60*2*1000)//NFT
          //setTimeout(split = new Worker('../assets/js/workers/worker_Spliter.js'),60*3*1000)//NFT
          setTimeout(BigTime = new Worker('../assets/js/workers/worker_BIGTIME.js'),60*4*1000)
          //setTimeout(myPetHol = new Worker('../assets/js/workers/worker_mypethol.js'),60*1*1000)//NFT

          setTimeout(axs_coin = new Worker('../assets/js/workers/worker_Coin_AXS.js'),1000)
          setTimeout(loka_coin = new Worker('../assets/js/workers/worker_coin_LOKA.js'),60*2*1000)
          setTimeout(ilv_coin = new Worker('../assets/js/workers/worker_coin_ILV.js'),60*4*1000)
          setTimeout(sand_coin = new Worker('../assets/js/workers/worker_coin_SAND.js'),60*1*1000)
          setTimeout(BigTime_coin = new Worker('../assets/js/workers/worker_coin_BIGTIME.js'),60*4*1000)
        }
        axs.onmessage = function (event) {
          //document.getElementById('result').innerHTML = event.data;
          console.log();
        };
        loka.onmessage = function (event) {
          //document.getElementById('result').innerHTML = event.data;
          console.log(event.data);
        };
      }
      function stopWorker() {
        axs.terminate();
        loka.terminate();
        pixel.terminate();
        castaways.terminate();
        cc.terminate();
        champAsc.terminate();
        eve.terminate();
        ilv.terminate();
        sand.terminate();
        uniC.terminate();
        split.terminate();
        BigTime.terminate();
        myPetHol.terminate();
        axs = undefined;
        loka = undefined;
        pixel = undefined;
        castaways = undefined;
        cc = undefined;
        champAsc = undefined;
        eve = undefined;
        ilv = undefined;
        sand = undefined;
        uniC = undefined;
        split = undefined;
        BigTime = undefined;
        myPetHol = undefined;
        w = undefined;
        */
       