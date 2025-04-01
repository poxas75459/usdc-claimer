/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3Fn28qCz4h6damW2UdDqdb38yTgprgpZhSQTnF3vWXKwDR43c5KNL9MhEBtmQ93podiYsPL61nj5cmKCcTH3HvJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9293p5sTEcJG5Y6p6GsnScvR9ih4aAy4WHfD8KjZ34JZ3zP4nvQLdU8uAyzSwLjPBG3TPHAzejHJcBwNm2SWYmD",
  "key1": "61etbvychHVBbFPVqRjvb1gMzrYZfBg7NMHoP4faDXvGoFwoR76Q1crmTgHCv5Pun9UvaAvV1WCxMRYwn6KotMiy",
  "key2": "3GTRxDHbHwNjb4eBkj4T4xX6XWyouZKgFxxkLkYwj9S9Z1awkV24XjmPzqmx5L3kxjNNWntKKBWUjptjVqWkcFPu",
  "key3": "JNksqhtYH9z4tY3NaYcULn9AqLg5bJwv4HDP5cJ38ENvzACL8BqD4M4otuLVdNcHGRJEQEQDXRo4qDrrFR5GjY1",
  "key4": "2D4nihmDQVnaWunX7EFrotZGCFk22QSJ9X1gDFyuwiqoAexdGpH91HN62nnqD3Fp3Fu7vhDa1oZxPCJnRJqihaj",
  "key5": "4GLMjMPkynWdqF4beCq71HsnSAaQJiScpivW32LypeNgDSaHYmUG4y5i75MHVtRC2YW3Zq65YKE4TbKeeR6VV9mJ",
  "key6": "vVYRKj1CGqyb81j77MTNz8noA9Q8v8cbVURqYkTadi948KZVFya2nqjXP8Lvnv5GYmtVixu4sviwKgjo4LrXYLW",
  "key7": "5fozP8bMqH9m1Jit1XHqEqQi2f7vMjNVpuWXbCoij6GqKWhivRoA9iAahU86NUsw2uw1rgK5yBcZho89K3pcma62",
  "key8": "32xHQF7XWzb3n2NAHNp29AeC16yK6SBq36vpeB2NbugZY4B21HjfufJwBVwJ5snpBv7MQRoTj9UTqpryC6h84qHu",
  "key9": "9mNdxKK3YeEDLFaX6fcrhPk41iz1hX87Z1V93WsXDFFSUbHiBSu55JcKc8yEXqcEVGAuMm2LoNY44k8omiMZE4k",
  "key10": "3oa7YaWStaQtyQUKpGM6Nummz9ksCh2AVi7g7GJvr7f92uuTrVbezeabNjCJgTnPkP6eb1CWczPKuwvHZ13k5oi4",
  "key11": "5ZVQnKXdXCdPDmBEkNvJbVBG3QswZ4EKQJNrZwXdQ1UYVBf1ra5LDmLD8WAVa97e3KH99oAvzXqPPQU1XqiWQGTf",
  "key12": "4o5L9FGCsrA87kdXQDf6cf4GiKYMojCDiVkspf6MV7jH3EinwdBJyaVLqYDzCSmsUUj5sxhxfy5Fn2eXNXQocSNc",
  "key13": "Vmu2qTAPTysenMAjuvePrMaAWriUUj7h3ef5VNAfDUtTFhr8ivN4usEVm2yHnf997tbLTtNHLt8aUYc3G2uCobV",
  "key14": "geTqQEmnLfWiRwsQRV4gXkPTXUckHoPBSrZ7Kd77JzBcjV9dFmzQd3nEEsyVBU9DTnHf5Ksj9PKzqMTT6XHU3wA",
  "key15": "3heieCXwDKhhxsPzEktQFxKgTpnzeNNPUSmN1mkSSm5Pczy3t9urhXtL538K2JkWYtBstsWfVBUeoTQvzP5zTu37",
  "key16": "2F9cmiRj5sVe3M8PcCESrqGpfnJnTbdYrw7drHqf2BYfiZFfd4zqhLZonkDbhZB8RaWQjvvQWcL1wRdowhJECGVq",
  "key17": "4CZ89KafhYxo1E8SNysjFoAVf8hQF8A1jeEK3WEbgtrmZweu4Boaq1x6MBiZKvyUqL9tW1w3o5H9tsuSupkhjsYD",
  "key18": "4EkT56GdjADrK5YKDtoJZvDTfdXXCYUFTW5HXLPXLkSDTAhsojbsZk1ScYB8ifxgHJR2asfkWnx5GuK8M8goZ4nZ",
  "key19": "hCUg9cRthqQrU6qhpeaUfVSqmAJq4FTmPNF8S5UjiLUsSbcJyPqLQZm4N9n7fdz4MAXVJJxy3nmY2J63Bupx8Md",
  "key20": "5DV1uTAsq57BXErmaDJZYjBqgjQDuhGBzMxMHyfF3EB55Be3cc6mGP2GjCq4JgyfjMfM5QR9VzhdkEEam1Tb7q8y",
  "key21": "4j5kGUNCnLmTrjnexam9rt5bSU6yi8gpQd3irfU4KXAU74kk3PxbQ61ycTEpNPiYFSYrZjHdJKTv1grNhkgStgU2",
  "key22": "2oAQudSoiGdPHjaAU6ZM7K17uYnbbLpzrPdV6pAQ9AVLKKZ5qWChnjVD23wfjL7ApgyRQnTo6wubNQ47439DPKdT",
  "key23": "65GfcQwhcLWgyS3v3ifHKm5SC1grxRWU8Cbga6upyMWWVP3R438JB58tAezJJiSqEx75NsvzSYfAXy2cT7jfSShA",
  "key24": "JDkNZBGwcRqaj5vDUYdqTzRZ3n4XokCK4Cfutki3K6132s99TZ2BR2ZLqRovyF8s4D8r7JsfRrv3WBfnz29h3UP",
  "key25": "4UoMN3KVUBXtdve1TYirZjmNRkmsKMbVDauk2t3zec2eAgDVeT5nGHuwqoXWi64LDg4b9ymrjdvyNBGmd8xNRFns",
  "key26": "5gCS1hAoHhyK2ZXD3qv6uShMNimdAxkoDqKxkBcrcZTSHY46HHtMERFK4mcoeu2aReHsojon4ZTTPtHCoLeiRXBq",
  "key27": "5wYcdH73bXjoqhzXZR1sx6dkrZGpoGAcXdjMZCa4fACKM7U8mde9L2a6zxcjnxy1rdMcWN9AUdfNL2a2y46CbpDK",
  "key28": "3u5Lt1k3LmkFfL32pxzprJhNhHweVcQQbvsXpQGCxD3Tr32J9d3dv4x9f1MGRa4eUtruHPyzUGWehJdwcGacvtqU",
  "key29": "2bc9bjam4Cur1Mzy4tWgTXPxYR2RZ6M8Eo6zVtTNTiQsA3hGDWfeKTuVSHxhnUC2xw4JDVFoZE2CQn8HF65FfJ7S",
  "key30": "4LRpWjrmewPHjmEap6heqnLEsDmKoHZ4MVyq8LH7Cx5gvaxVLkN6PWokGrtof1FfBhQzzmDPuko2spoXuoCwTg8p",
  "key31": "SGKSMSDREkvcmWNHZBh6fkNXsPxT9SitMiiVk47iVkfnSxoE99FGzx2NBcNVB8bNmJ1UGtu83wRPPXvdMGgoprN",
  "key32": "rdXaTTPsuYQMiZeyb67zzFAR1AisPo4gGbGJhrgNhwooDRMp7s6sLycqpS7F9Ad48kDjSQMC2dShJW5giZEw9Za",
  "key33": "YMaS8io8zEDEvEsyWaWEnPGwf8SPTJySW8T5euP6USjk99wjGkJZTpQ1Wze4dx8WdKbDne7BoLDY6dQXbTcbb5B",
  "key34": "4tYp53dHdhkdqvsQeM1H95reVsT5pfouzq5rFh947L3SKzRh8cSzVEv57FE5CBKw5SfQJBQsZGai7zgm8rBKF7XL",
  "key35": "4zH9QysagFy5MPUD7qCEuQdCrN8r2p7hRe81QzKYuUxhhjAeWMe5U5a9S3kgzXuvPnTAfGSkwfvBgJ4R59GUqWo4",
  "key36": "4iuydMkGYw2dMwQggoWuP7MQo7ZuC1tPh9GTgMrabE4EhcaMuTu6qGsgKrXSr23Gsk6hM7mxmTd8wMfXv1Qcr3yU",
  "key37": "2kX6wZq71G9TA7ZYbpCHAmAWgAEvpLoNLMPZ291Yzj5yA9Ba2CyeEWf82ExEeySaeHfy66i5wq5oaRb5tP15wVyh",
  "key38": "4sRptm25XJigiUL9PbtZsgTU7JFYJLb8zCrv4tm7BQydvtrrjqYSC3CeiSfuJM4jT7btDtphBzXppT5AobSJ67Gj",
  "key39": "48TAi2anb4eTuHmKi4vCZm4Zuwgfy26cKFxKNFHgaYeoGnWnB4B2tF9vjGgNSVH5sFZJXLqbQx759AjGbs11PNnS",
  "key40": "4MGw2cuWiT1NwSAym9MHw2f4BG7CJNDkSviH2tmsBXJs2bpTbsj9fBEsjrhxrnExZ1uCTtLWCpidMc7L4u55MipD",
  "key41": "4quBijRLqgSx2q3FTMKm3iGArZn2nx1v34UnSWmFjFbJXqDDWZg6rwZ6Ghfov9LdFqdMs9drTrDCe4vY5VHJryxR",
  "key42": "46o5YHNjDwXqt6g9ynV4YJ7CMHdSWuM3Ng6ZMnDRx9Ex3Bpi3rbztzGzFX2W4ompAg9nuS7sqCmYe5StAagikK57",
  "key43": "4txAqnbuswZUjrzmqtMbb65n4B59f6g1UPymztqdRorMUfHs35oAQB3rB6feAmfSHDupSRXTV6rh2WCcVAyehFvW",
  "key44": "cczNoAUAjfZpsP76veA1MPAejPoWE8rpcgJqicp3cdoULPdSSxyTiQC1BLhNxCPdVvR8nkFfMgRUJuWbTNKJ4hR"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
