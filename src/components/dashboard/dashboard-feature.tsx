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
    "5DcoyWp8k5DTaUPQFxtEKKJ476fbqhrWiwxGrR8EpJHhxmxzF8sH6dVtfQiSHvfPcSvQKomiFc8b4YgzveJ9LmQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33y2R2msqR9pkFPMjDJnUg9pnzLUMpo79qTCRdLx6TsRaGGfRK6vkFq8imknpxahPpauXDnibRaVBrDKpFVg6bJE",
  "key1": "M7bFGeUF197KUkm8zTN5mNuMH58MyFWR27SMAxGX3MS5Dvq9ksNnCKs7Epuqp9mSwPzdtLMPyLVQdZKcSCLPtqA",
  "key2": "46qrAskqCK18dneufS3sJXyV4KFs9UTgHs1SWVqpQKUN3efhBvMPSMbHjgV4sCwfNgwzVR7G7NEwUBy8VW8rMpna",
  "key3": "Q6T74nVdLACiFProXsjdwEpbedyC1JMKWsuUFSuP5ndcoFQ3ybhWmtExSDzASnWXkt8MGBTGB8DQCDMUUzV859a",
  "key4": "yZ89g13uxjEbLZuYPApQuLij2LG8CfS4ppNqqGjy2vKqJZy8dVJ6zBi8DDY9zHpUiWAHZ1XLyFr1VE6EdQnJe5R",
  "key5": "5GMmjjEqP8AVVPXcbRwNrAv2Edo1VJ9GLWA2aXwpbt4Y1fvz4xY4hVgdw542oj5AMztQsPgZZ5gyo3uASpSTBCrm",
  "key6": "5AfuTHsz33zvqg6GAvqoeCrfMRqCGoxpoD1Z474sZ4He9sPFbKxgMcu7Bb6bjzGztJ6ZTMVTvGwBSf9gDjAdJvHM",
  "key7": "2p2WgxTRc3866Ls9yGHSKAfP4ztJejSzEiuMuF2LURpeihVm1uM77sg3UsqYNs91AWiUcnfbkg52TCKSa5FvwLCa",
  "key8": "4KriMP6GzqBYngMh2ba1djC6v125cQALLUSdY3S92dTPruJpJfuzAiY2ZiCs5KzrBpKt82bEMmwoU8RHTDy6ygXV",
  "key9": "5aNDRU5XWiSFv19niuGTX6VSMiFNqZwCfHcwGbM9utAULPDr4T7ivWhbjhssortMN55Rv3AWNmBoCeQG4PAEU7Ac",
  "key10": "NkJCNaDNDfvjBE4JbxWPavW9NrTyDbrrA9VbCEYzJThKfEvj2NUjNudKn7acsFxoR8ehpc32Apvhio6ZPySGkvP",
  "key11": "25KXEETtCbVNfAr8NyHKaNKauCcwQ3w4ecHm8bLjfdia81sD7E4NhDu3Lqf2nC3BDtFuWSM1ZuFBUrh9wc3CZseo",
  "key12": "Cb8YtQL6MnSg8Ps2au7xNkZNxEevRSmfhgmgrcvs52hb16pC4wu3vaWJQF3HnPFWH5kZXmvfFWBU53f8fjet3jk",
  "key13": "ExEnG7v7S4mASW1d7ZnCSp4zXuyoavBL9nJsPBVQQ51ssHsuDeV3Pjg6sUQqUPSzndvoATy3XLbP1124Y1jpz6Z",
  "key14": "4xpWtySngvVduAQPrjW22tGphRxYjqXPPA7VU6ocrJgYDUptPoMKR4HbPNkvZ6faXeCDYAq18AjVgFGXUiafx138",
  "key15": "4NSpsyjpmi8CWHXNHJV6vnk8oYhHmJ64sNeRnV1B5KRq2LuREPK3gY5h87sdywtGso4cESWYw4JbRcEkETz3yNQR",
  "key16": "339M2MCSegsqre7B9QUZ1qZFxKyxERYxydfHJUfEXXjHHSvRmwF1iPUVC2gjfXqHpkbxCLUTfoCVpDdth8Eok9GA",
  "key17": "2hbiDBtbCRjaAQoFDQevX61zZwJoCG3LB1omWNXPWE17bz3JFkGKrBjM1NV8y7jTTMRuPqCDkfH9ms8KasD9LaDG",
  "key18": "yC6CqxHKth67mY4ohSKqfakDb5kdkyFpicG6TPYi4aEXmUUNXMWUB6bo9pTvN16ALK4TeXMWJrnSNMp4wNyVu4j",
  "key19": "3t7X9cAcymrjHmQ6KpiPTFP5N4pD4hvHPWDuwGSFFDmhXBxN4XQCXshp9NPh1sCQqan7KRuevrGrkfhfnAQKAKwB",
  "key20": "2eT3nEQ5RJoERmaTnTBpEXyhehqj4SBBK3aY2vYNXQAmv1qXeHzjdQPGX3fPixqHLwTB9DqnFPXwU6NJny99QEHZ",
  "key21": "3GWFPv6bxSAED76DrPtPwjgbtiDGXbvEmWUF7tnNzz9wzd62yZn266736qYxXHnYRCgAUbnaLWBwag1FVUBdaQsh",
  "key22": "55g2gVqgoWTL2UEsH4jzcZj65Dzn9NrVyHQo8UMCtphdnxqBvHiZbCAUUWUudzLtiSLHDzfSnHGhBznvHBTDj8w",
  "key23": "b98dnseV9Hc1psMyxjNjZLmiWc4U2JbMMybUZmpYDsHWPUje8RcwiKTMkfZjDzTU6t2AEETLDefGSoWx45KfhkS",
  "key24": "D2Tquacf21GiFe7f9UnCUTdMysbco1HLnmGdgnKZDcx87ZazJsuqaGSzvTrngHmz3Ksqis6onv6AUoUNfjgVpGw",
  "key25": "oAhwueEoZZi85cW2ypR56tvoo4gfhM2w5gSVYhHWMzwZuQNW1r2hwUkvTLDGyAG1SmUBCSbTFTyiGVSEdLHNuGu",
  "key26": "5ieHKCtekJHxJLLNm4AgaTYAPk455bxuoWXvLDznYS2WpDAadPYrnYjG2FVH3R7pcGWt6hPVChD9XHA58evxtuUU",
  "key27": "LDPeNjVauuyttvyoCFCQttk81HUTzq5MCuFXd8Yh1JZn5FQU1Wawh8129bpBYdQhm6FDpCt58RDoZKFUsvhsRzR",
  "key28": "2aNmbfCNEvaEbWACQjKTw499jN8Wvs9HmS6k7XfYrC5hNStbSm2xtBdcQtLUGdzSnNEVNQNfyfmXaeyW23uqv6wA",
  "key29": "TB9UFfooM5pYk8ycV7ivwXgq5XWSxkBW49Bgin2KKbddXfGbUHA24wHd3e1McQ3PemM7bixysbEpZKrQBhLtuun",
  "key30": "55JasNDMBZXgFshsjAVH82o24NXDcHSS1Ey5XRPewrJrdZ9bjTA8Lh94hrerggAkG1gTRyxaHobYwBj5iKwMbBW",
  "key31": "3jPwqefdMrEazNWdSMbGEcmPTPjhrohHaRvxyK2TmAU4NiSCmajsCaDtXruuwQ9C1fHntmgJjHxQKLgE2tT66CjN",
  "key32": "314qzfzsv1etGtJP7aFA7hRbrxiYCcXMvDQy1eK9qm8wHuEfnVHD3UWshGXmUfWVL4ZME7mt5i9mTm1H5m7EVu2h",
  "key33": "2hDkiHuknMvDiM6g7wrs42FFQzUuYvQc3iukrEZcLQTYuhvG2mFFU2SBZWCQKKnbphxZTnhNw7ThpazUhKrHSw5k",
  "key34": "4dWtmuSRKejibgxdg16gv9AsiVkgfFrvsKDiBSMi1miQYdyMawRJzcg2jehBDjarumKv2TiPB7iKkdUGweuEibZ3",
  "key35": "5LWyb7WTdReGnmnBnDDcub3FxjU2K2VP1JN6AbCF9LiFRjMPW2sYtgF2f4idePNnsY4hHJk9keWP14HyNFFw5Y2E"
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
