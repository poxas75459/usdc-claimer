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
    "s8VZNPo16CK7btaxqAW9LpBefbexXTtPffWramrev9ahC9ZrVUwttqVVqbLmNg3PXYqwo2H5ciBibM2u83WghWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BNTK2Mk5ejPYZPhbKyACEuV5PhT98jSmGPDAD53LgmrXmmgPpNFWs5ChHjngm1sP1qxPKcg1ifNN9fy1W2EK4zh",
  "key1": "2nbbRXZYyacm6SPcrDXoJDBLC26mxBrENNsRZSmRHB9JZwwCvZiZAKSWXQRHfqcTkAFvFJ8Bfh8WVB8pQmve4vt4",
  "key2": "2xjw2taeXQDAutyjjPM8W3Z6FJ33K79sTBzJJQkfKKf8nK9dkCSEdAKi9VNkQcBgT3AuntA5pipcCWxWv7HEvPJz",
  "key3": "2wvx1FpuDAB3VZbm4BV9yTiN9rg74Nci77KzqAkYTAP5ZE2iBRHHsqjFPqEJVAKoFmxsL8vJSbvef4pnSYSVQfT",
  "key4": "4WYpA5zAZGiGAdTP5TWjPFg8JwrAYAdVh8QFxi6fa5ndQNGqAvrgPpEzpa1i8nrxo1xM77SPBkzYGjDy8ujpNpjp",
  "key5": "2xLXj6dT4QCtFsSRWjqNV8EkZZhBQJGAUzsLXrSXVTTGykgSVEF9L5B68PcVawuMevkbAGr9EUmHVUsHduMJghSU",
  "key6": "4JJkbvBeStkipqRsgJB8YHSXeiCy7gi3w4yMGWUhfNUwtU9SufACKKvppbqXQd5ZyWqU81n5YK6TqQYkinBbq2HS",
  "key7": "3sX6i1Nes4gbAs8oV3wbKxQPbQmzijcxamUkKynh2Vo13vAPiFBm7UTDBiq5ocSiodJWQgZs2ZaiUKoMEjXqyqHT",
  "key8": "43VwVXRtf3snpmF1Qe289TfeFSPYmPXeQ9nUM7WXgzkTQuVzEcZYUTxkPD4ovZXCjXeXwgZBd97zsqMoZgi4P72D",
  "key9": "2ZSWL7siqWvWV4LT3E9fr4E24y27muqnTLtLuKS9ernrvkx5FA4qcvxfWwH3djHzGKtK4ouuCbvy3HtMqELk3UkD",
  "key10": "3F6yBKVGPjuWJarjEbj5qWwnDuLRGycHcGVDmUzNz7eHVoWzjB62dMTanx7ayDv7B3DpAodVdwgyVSogsjAyUnoC",
  "key11": "2vC2gBw1GMjRN88rkByEsME5z8w3P8BkEhqWaGzL2CKSmSptdKzyAUnbXFDRNMfDVYe4gNwtmv1BBAKrse7N7ugN",
  "key12": "53NiNRaChmdBXb6CEfRZaNpeRogYfmtw8iag7gmd1jwyvGbcjJTevfvFkquQxv7ZnZNgmVb3yVcMUtU2ToRp8qif",
  "key13": "4wNfYn91ZA6mJq3B7KhXvnBtHASPbf6zG7Bz2qBCb8QgNYjhzVzFrARfkSJqhD2dyAR4PrYQB5MA1bhDYT9y1mnq",
  "key14": "32vgQYUg4GMNUBpjYWmSstDZi1b3tc8KQoVyNC9ppnbtfwcmqa1Z7wEK2PU39wGW2hz2pLd8kREkEoA7fPbEVtee",
  "key15": "3Xbh12ws4EwgKwGjvQh3xmkDw45RogwHyPWVQYMpCFXNzDN8cygwSopUdboKGZYePNxSqsjpBc3ZEFAN6K9GEBnW",
  "key16": "2KQ52X3TP7sz4zHFa1Ehgv45gVrQXJfmHhHYD5dKFN1yhfQUFXh2X84XxVm7SH2GvqwnkjSqKBaAQye5kw9Zaptu",
  "key17": "5vq9ecUxo7NwspqY6KLdPZ65ZfsdcScJwLFiBVE4XjMhgsiryfbarfBnRNHRirQbrniwZXuDS28PjGuF7utVf7Te",
  "key18": "4gJsUpdR6AusrKdVXqLmaqdhPsBhjDbYy4huNyVNMDBZeCyVMqyPFm4J4CBaXLL3UizQg5TczSo1dgBijMnawJCS",
  "key19": "4j9ABBanuuKsYoJBkB2mv8ZmpKFxzAtdwLJTmBM1v3PTHLAg3KJ2iaHgZonWVC7qMgQtrtcZBvrgsqGkskhLkWLQ",
  "key20": "3TYp3yn3NDuUmPnqBDZK2x98saMhv2vitMy2ivdhZMtqDQcrYFaLcdMFvBa14QGSUnB3DgtZ9uA1jfqc1FiBfxZR",
  "key21": "2FnvJze425iMY7vdUEEqgUKW5GXAGyUFDxZDtiUUkLREswxNNGc8inv9rkUUS5gZg4Y7EfztwZjxiL8ab2ukzBUX",
  "key22": "5NCpGuVhGfBH6sdQuwHnJgxMpLZejnkS1vh3btewWwsh4Ndhajd7qxT4qTZaiGGyd3moL4HFiHPtwWRAUeYEcqHF",
  "key23": "31qqkNzkByX3vxhDfgmWszHNLwwAXVzSiQAiwYs8T463YRZ6XLaHD6YThG1z3EjZW1deZDYoGtgfG1Ps5gp5JzfC",
  "key24": "41zNbYT6HMWkKgrvEYfnqVWo3j6vF8cyD2b98GMGjyKZ2QKyED6o158gzL2syo5uB5vaLjv8dpU3V4KdckEyxdyg",
  "key25": "R17Max34HqApvNCVTUbQX2GKQGqPGnuJAUd1gUFuPCKBSHU3oxciwf2vBfRAKMqF54rWTc63eKgQBavUx5BMQdg",
  "key26": "42FfZttURFhMcGobp1x37GpJ8ZsHX4sNzA9QgwkRG11sFrEwQyDiDqR2JzA3iVJhCXgjNZfxkmfrFsYtsvph8zC9",
  "key27": "WAYCeXNVCmj2Gr5xU88XdLomGBjckKrsnbVx8fpAG5BnBzUwbTYX2GFTX2f3RtnZBzzMiQmbdgmzWKxmpqRzF6z",
  "key28": "3KsAfFrWMkZAaCQd2cwqs3swRiuWxNdpe7tMe9FwLm29W2VuTP968s5yB9bKaPwPCitYQ66g9hfa6sLHvAHybM7x",
  "key29": "3kRm7bMQRCoJbNva1SSavJqL8k2Z2FBiJFFHKPXhdFL6e4bUTTpHhSGE1owRReL7rnRVSzbXwgCqzX4zyYqz33Y1",
  "key30": "3ULdoxruPm8rsfHapX4yfApQm8JKrsQbZdxswq4iFDPkkecgPa7iDmqowSgUJhSuTxHpJvmyc4KxDaSSUGdsA4ge",
  "key31": "4ER8N91zkmZMYWiHK3uQ8zG6VMdAma3REaLL89s3C9ZZGeNRkAhZ1z3KomXq1h1E5unPtKKo3fHYYfUAeFpTyhg4",
  "key32": "2DZ98WjfAdc4nfNHi2xGXN93ejUqfH1Rzpvug9xGrPYcUtvpWc9srbmi71Qi2XU7djnzdw32b2xtkZ7SqQXth62w",
  "key33": "5JPixHSLYWjq47JsAiugFvn8NX8CmaPABNrmzTLhW5bZ6XagW4BwHFWtW2TFLcV98YEscz6te7u1Yh1s9eWp9QDo",
  "key34": "33xAkaQ6cbyyWq8175JBq6WfdyXbu5U7ysLDF92bmiqTvV3yJ2ZxrH4y978xZ4ksTkXZwMRYjf8p7ZTSE1mGPpJQ",
  "key35": "3xv9UvtBcM68jCZKzkoowxDh4KrQGUsDL5NLbmqSGoWSF66K4LqQiccDiRjut63hJqKzey5eJLeisec4VZ4pGgFs",
  "key36": "2nYNSpmwK8LSZu4WJgDFirK4ihKKtXB1foGjFmY62ZG4QFjnMxeKQ7hPE8UthwGJruW4g8sfng2Kz22UQjdBCmPV",
  "key37": "4WxX9vZrDqBzrM5dFf9mAgJJhmTv2qiB5haaAyj9ip4GpB3ZWFqjVkHrxa9MoKu2LeXRk9m2xetudtqFuRDPuCD",
  "key38": "3PwhAkMFGd9XnV2jkNXQMqMsj85GHBVXCQxqrwNQ5pHHHBmpaJMQQiSUNxXm1XntVA3NSThCgo1vmhr9SQTftmeK",
  "key39": "2wb2s8SUvHsYExF2wUddtKgeksxM1FSfY4H2btZxN5dKUvfSm227YrTK8Wyz6ZdWHjpvGYM7o5yX7R4mu1bFDqYk",
  "key40": "25LAdJAwcxx5JxiwXxnEiT2gUopEXCC5TvqLUH35SZchzQW8gxxqBKJDhmWsBcfeF3h2HAVcAvkeZjgSKKNzSKew"
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
