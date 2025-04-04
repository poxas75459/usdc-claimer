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
    "Nb3syNrcxMCYshumNDy1SyneDc1qC5SVBQhSQbGtkRLRCCcZPVZs8qM7KRKnER56dVjEkyYBCZMVLmpbCmbJjXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aD4BYPKRBqgAgn1YKfGyKpfrusQwnqcLVxG5eYbTUBygXH5ZH8m49awUaVk3Mswb94efNpPT8c8ffEKVzGtA5Ch",
  "key1": "4PnXjw4FjaSaW2rWYJAe15QLytPzBQdDGfzVywt2RCxUCqiMesShht1gskwT23wChkybU6V3RCezyRp1rGQkDfse",
  "key2": "Yhu3oreoerXa5TWMh2h6RQWkCLDe5M7QAvoT85RufayQPdDd4pYH1LmX4rRpzZHCwnjcTm9JVWxxeh7xEPcBHxY",
  "key3": "2d2YvjgNC8U2yvFUwcdTcnvnkwcecfWAZz9RAU7iEuJ6TRxchHBoCpmzqZsSNA5gJKzyJsRWsK1CpZXvav5MoV4y",
  "key4": "47q5SUMEXVzkmDYhtvnMreSFLKGEsBkL1UVHb7oSCfvMMzjGbZC5aDUCM3A55B59QsaGzSbtu2qviW7xCAJv7zJj",
  "key5": "5fUJ4NA2AakrAh1m4MePUkTSw3oN8rRKVDSE1i2fJY2kS5pPt57GeMSrQQjShwBPAWB7dDoQocnc9Yyskz563B4Q",
  "key6": "37ZXFrYFxn4AheMk9Eod5BeZb9X6tYTAWbHbK8gnsPfFXBKzYK1XAnkGzYkUS9X5XLWtPwQsnNr1TBzt3Sugff6F",
  "key7": "5JhtuuNCoBVCuEGtYXqPDzViVv154qyZjd1BAb2MUqtZg869HCrzZGuffk3tkTEsHEpLSyChASRs2cyjnoTR8vwT",
  "key8": "2cSJsgVkMFr1KHq34Pz4u2x1eNTD5CmXu1FSwQ67no8an5mzwx4feKGsfcvZxwfeQcXi8J9S9qyk9zvXwM9PmgW9",
  "key9": "3GnqnbLWuu4N8YfMNxFzoav56199eJQ9iUjemga2gnNbUgKWtozdtW8vNiJ4icjX8TK43hGzK4njtzKf28C9ecMT",
  "key10": "XD2pp9uJ2eKrGxVCHbXfVk93efMb7Nb8R3VcoBdRmeG547L2xTojeX7Hwe1NEcVD2Hpqtd9BtRyAPM4Y4vPMpVR",
  "key11": "5TQMAHqGUbodjP4zXYvGjjRUF8nn7vnAUjkXftRLJbK39iJ8VAi47RND699rEPAejdzgiVGGbQtms4LAkbANGBu7",
  "key12": "ZDBq2gqJ1Ys48wJyEG5bGzXV28daBUJ42HPJ5aoLYao4tr2saZ7LTRYXU5LcSeRw12siF7dPusbzDVwMEBn6YPq",
  "key13": "3ME2q7nmNh5woYLvCK78bQnoRTqA5r3WUqaGPEqYAxptKDj2Y3RomHeyWYc7NAJqJHME73xZZnycpTRpqfk837nw",
  "key14": "5SbZU8bub7tYjLcovJ2hfxS7zCzGPVXS6ess6TqeoET2KWan3Vj82LjxM8Ya8Z34cA3T9T44rkjumCDMjHrrdzaJ",
  "key15": "65bHm582uo9EittsTd8z61RTC6vBs5MJvgDo9NSfiBgjyWigjs3YJAe2fK1VKQbsrp3t8DNUbCpxMnx2CAQ2rEQV",
  "key16": "3c4gHQXZniwWsRNuXbxs417Aw818r61xrkfvCVQiSS5DiRZ8Gm49BgCzkvRVAr9Jm628YRm8g1ZK7BccfpMmNiXb",
  "key17": "3kmAcfiGa5ZGmj6yhptMcFiKMgZ3N9qSNVysyiGBt8U6mB29WV4fr31aNJGprg6nwQUspa2FxX5jat35scJiCQCL",
  "key18": "54gNGWn8HE6QjFMJ2685p2R3R1HEJZT2m91TtZuhC1DJjpfqNMyEq9CjWNXJpwpgnbU4kXCEGpPYJAn16ZDeWAbk",
  "key19": "34i2WXReWCRJk2Uqt9pr1bB1oSCWqepfE9aZuQBuuFxYNRKmUgAF9VkQomwwxnMqBAgNVfmG2roGH5jF3FoKo951",
  "key20": "4RRa32J6ZZMEHeiAtndJTnsczyk4cqb1U8p8bWDToWLoMJmBL2wLSPB8TYQusTxZomVstpzdn22KRY5cJX4g8x6y",
  "key21": "55k1eRrJje7tXFcVYEXM5DdN31GgQ1dv5wrw4cLVim1NpevAmXNFx5hLUeR6QwSzjNmwvxhLQqsY24asSeCQnghQ",
  "key22": "4kDo3FP1eXfNjWe56Kw5AmQpQ48QCZXZfCFkQT1VUHY4YvCfkGCMMRf41KVRej6BW3RizxKUnj1J67D5sHFvxXHw",
  "key23": "3VVGXAyvWSAKN7nqEkps89h2D9WfTwoVxonNA9jW93iKuEM7o7SLwTdxoYeiFCP2LzbkAfypGvZuuaXZ8qM4etgH",
  "key24": "9Ctm93932Xw2SJDmxgkGbJKZMZVGmqbizDFdsSjHMjGAHgQ4kJUuJoGDwXL7ntKXm39LytaQdPdmRsBRkCUm9BY",
  "key25": "29qmH6xhDNKiJ3yN4E3dkKV1R4sfPhcERNBtV82eJz8FoLzPy6U3gF9dDsMHxFouKot2Wqw2qd8EZYBnJEBbJK57",
  "key26": "3x8utP9Y1YXBBn64hVKWGxvySjUCxKWyFzzePFQf3K1vePyPkxvUpBZfEFzgh3NGM7qthvGZU1jPaGcaCDhdQNuQ",
  "key27": "5VPoudaQPn9gY81ye2ZVWLkTs8JGoDUGAF8uVzUmQvBwQDTFGcV9xQaLwPqVd5DbFb4rESCfZoYY9fZmyi36YACu",
  "key28": "33o1oxv43ikNgrHp85TfbbmX67D1wEGCGs6uTJZVPQSpF2RbqWjP4woqXcK4w4NswM87SJzzpc9CPaVGdFrp18Bs",
  "key29": "2kYb7NpCuGoMkZJwYhAVbL7W2va52JsGSFJ8ggpw5j9g86RM4hS1ZbxR5fxBXUf3YDtZzShKqpYfgY3Z27xQdh3K",
  "key30": "2A69wD4QdQ7ZNYZiaoQhPaUFTXhbWZJTxgVxdEpk1UZ2T6QHbWmH82FBKQeWEciFT2bsVkzFW6mDko9ejaZd1h39",
  "key31": "3QqWNuyZuLBwxRYUEiuE49jG4ha88hii2n1mAnJusUhPkXiiWhoRkdXTTYRsG2sieCSnQ8jPzBxY3oiY96MnS5sw",
  "key32": "21QNa9T9vpWJgvwj1ZawmMAPXEDEta7KgASmLnF4vCMJFH8HGdoVgLHn4uUcavaUnBiaeBFKeHqc1VQp9Tm5WC2U",
  "key33": "2ouAMtRiCjxynJBmuGMQ1aa8hikZLTJNVjgShECV3QDJ3ATu37PtGf7j2khCCAQLsXTDz2Y1w3Bv9b7mj8jbvjHo",
  "key34": "21T3eXhDsRh37UFbKsWChJwmWkQ4XsQZxZfK6FnQ9oQoXmxwG6rsnv1vT2QPBgorrSHHyeDPEssqPUfrnYBKogQj",
  "key35": "5y1tKgh3o3y8bimLg97yBmhwHeFUijhmkUMiAFeikaVQJVvLxHPrZJf1A9xdFpwMUmTkg9dw4NbUD12NMPEdufVR",
  "key36": "27TznhtQS3xzPmsK3BfLF8VQn92i6xNGDnq9vfoQZP66HD4KvfMf4L2pw653UUEAmBCqiVtBF2oDqQaS2iAbsUze",
  "key37": "5twwdDqzDjxdMYiqUaCUY6oApKhXY726anQFjYsK6EvHd7bW3RDyJgWhTdbRvyvW2LSqxWKKK1HRYiPrcTYx2GXu",
  "key38": "63Mgtq6tftNd2isJh1UAWZ9BnEEaNLaiEgCm3Ss2QNGnJTNf4ZbJgsnQgfMf3bty8tsLbHYZ1DCZmeFi7vEnCd3x",
  "key39": "4Wnr1ccvPmaqKwTJv1XFwRHeVt5BoDztot37toky9yyUkbHtpgCwwxGhNwJwTM2FNKCqRmmfShZ8mvwpEqQPiRHM",
  "key40": "5VKqwBB4Bn7UKwfEjRG77oR5pxfs5vph5kVRfXBNzwQ9RP6zU5METE7HkiGvSkptPDvgRktxq8r22wKQTQYpWuzb",
  "key41": "2ZseaF3EJzxJ5iDEFo633xaEGiCU895EjUBvsHv6kR5JWjxjgZsZWwGrmrGN5e4uM9vZU5ngFBxwfRS2hXcpWhVN",
  "key42": "kPUisGkPwmh64hPZzUQudG4wPppX79PktWT9XSRqKrsRcJWgT1sTRPcoBpL82G99hvBXo1DDitGDuP5cmsLV8Zc",
  "key43": "qbaJd7E3znKQPgBSiY5FDuzaVvSkMBhzogGqB14BQAj5TJZJUrWKg56E5n3szbkbSXLy1UF5kdLssgbY7egSAhe",
  "key44": "4Z3g9Aig53UTETMwny7gJd3Q11o8sQKyZjvVjH9BRFMBTXXVFAs8qykh5Ki627Bt2ty844iDAswtFjVvHj58dmYp",
  "key45": "4KK29Q9FJTYZGkDWyGjUfvSjcMgN6oQ3RixPpbsz8By8EDUChoJj1aaqEGF8BfFXMhw2R5h7FNrfKrD5PJSNuJFj",
  "key46": "4usXKvyS58m9sbT34FptBgJhMnoXS7ZCbh8kTXKYKNvYPrNgtt8bitHkD3b3egaeJMUVJ6PEticGgugbaDWr8dWc",
  "key47": "5yMafRksU2unoMH9Lf7NC1ESCX4fA9QERByj2DSjdkiyi2wyebpc5MqCDceMa2oFzBNeuANCvgwj5pRM4JQrphZv",
  "key48": "4BgzTkTAuim8rHX4MRXbErCWybn7TUE2QPA4X5rGi8gwU1ScRfTUy461MQNC53Gw73UqjCPC3QpjwBdGrekktdLv",
  "key49": "rRrP2sQG5JetazJsEBKRnnzTyCdnKz1TykqSA6BhVvTrHuqJytXGLbV1WsvTCz79daHhZE1xByQ2DUaHk6bYvt6"
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
