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
    "5GArNLcPLXWR9389QpsGgzeUoHue5kwk9qLPn1Q6hAwauPeZf4BzBGLf9g5aQwZXExTjfxxjePa47G5uyp1vM6an"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NxPXJAo38t4Peqz4VYUzBPxf4UjqB2Xtcr4BySJ7uJ7YQL29vTW3Zk9RuMoUWt4NC2GVSanviUB3vJNe2Pk5bZF",
  "key1": "2h7FA3CZqXcxmwHiNjgX8FAizcieoVuvEu7pJgFGcog3LfPypc5hZe6heW5z2HmNoTa12Mm3mqGMTJLvj7mVbiVL",
  "key2": "3ZuJ6w4yG8DvUcPrfdYwNqpEg5jqnMXFqqwLGg5hkGC9MVfrrcQgE1KZTXWS8F7rYYZ6KFQV5TDBdEcdNhQUYLFz",
  "key3": "5GTEsW8pjMtWFPY9UkemTc3MR5CyPmHJzuekTDkM5eUCWVRkkwWQMb9AcxJYkok7rNe9zCKssLw4Pqja8ApVeQ72",
  "key4": "4Qan6R6zyXeyJEiZksZ7KQM5L5i8CmRueK3w7SdwRfY7zX6NpADTaDqjvatYh789qrdcAkhV4SPmEGe6eP5ETfHw",
  "key5": "3YztUNyC1mQKaeMLhZrQTZX8odoEDK4zWU2GaKGfvDtq42FdEJKwqfzk6RzSeeA1e5ipekMyJVfE78xae2RrZ2yM",
  "key6": "34fUrXqKkmZKH1X4Q1A3WkpPhrKFJSLkMRmWHUTiJQ3ETKANnbPi1DTASnMuxruwxkhasJAucX6x3JzP1E7bRj9q",
  "key7": "4sFuq6gurNQCmsZQpyJUhv2waRKZQGSy4895Ym14BDmaE1qknUQfWJNxwzd6EgsQDyWfpSTy91vrjUUhssLLxR8y",
  "key8": "4CgZ5VYj4Jda9vJVvB5tfD2qkSqgFe7MjHHa76QBZDcwFUcpBM8krBypztPG2XKZn98qUJYZ9hP1Z5gT2gZnzkk6",
  "key9": "5PQDk1feZ2cmgFKF4U2bgR54mFf9oCKuesD4SHW8BzHDtNKssqDzjxAjkUpgJHndLV7u32CWMbr3i4pVEyM1Y3u8",
  "key10": "3L58dVtDQn9KYyFZiTAUWGMnWRpwMLHrp9dT8UkbyiCnWMoZqHe4UrxeuxaPaGvMBXXcBn29r6pHfWrqUh5FC68U",
  "key11": "roR4vxdYbiWkX8sYCp5XJhe1hcyJWHYR2ubET8eDqTwFvTzPXN812wtsPmYwJsKcu3RPcodjA9wQzZ1Nt9EiAjf",
  "key12": "4JH9pH7KHM6eoAjXcr2VotHk6odeBv2eW31r7VABi37HHfMjmtKA3XyDM6c21NemvzM87MvjPaFRXrGiwpJNLp7u",
  "key13": "2qoiEX9RTAXVsuJQ2zTnffaP28Pjv7LpVnUmP2N5M7K3WNw1jumvTZmBWSVV8YZ6fJyHcXvDp4ZxJxT1brqVWqCX",
  "key14": "3LSQjvbKWrmfZ2PP5NU2suvEkp5XvdMeJbYzSuv8vkzcheJMvj5Qh82Nx3Hwc95X994PVPkmRK4R3DH5fFLwFqbE",
  "key15": "4ReDkWbvmYnL9bMQ3UQrvanZRzieagx3cF5LNCH9pMopewXZQD1FWuMW7wWMQPHvq42QdjTN2Y9V5RcXsKC2ozWx",
  "key16": "2Vr5UrWdJWRFo211CQwnwckUwWFNS6xB6kK9D5j95WrjbPMskFd3wovLgjAYpQfe6JbqABej6C1m5nt1cWzmyLYu",
  "key17": "2bQWKGLyr7rnE2558Mad8EUGXmZS4fxqgfabzP8gUv6mkx1nT9vTh9RLK3jiQpVCTNVhuConLZBpB6hMKzEQK9Rd",
  "key18": "3PJuaqartmWdTNQb4529dQxZMznsWF9APxghpmRRqBfF5Nfp7sBed7Dz6bxsTYxDnhFqXHXhyM1zYV8uH9mGmt2Q",
  "key19": "5mvAS6of9a9rjQ8bWLpi7EF9DfbnrMXaZ1T8LsPFn9kmowj7hsBuY45juMuyjqYF3E1HRtNzHpjq7GwTPgmHJQFX",
  "key20": "36Ed3FPGjFvPVNU9eaKdAFZWZdP5dvn73vaepEYKe4ftCNCAd9nEYaoDmjsUGAccfTnkEu6gdxTgZEbouQdvyvf",
  "key21": "4AetNSdRjyXd2h4ri4RLdVsiodYPKWmcvWabqZ6Shf4XHWACp7wkisQnTnsdNGbnZXg7TLPfnjD7eTweYbGKXw1z",
  "key22": "4YVy8gsty9UDoNNceMWVp2Ur5GbvMmi5Kh1i25yyZnRTCuwDh9AgdCJbxAKCMAaaQVxKeoFEV9LLfB8qWi256Nn4",
  "key23": "4v7wkYWiKrRcwocRJJxQjunGn16xTrQFbgj3vpfxJeDEtRzdkFSXiA7SQwGm7XQR8jbTakCfPtJzdXC9Zopgcmaz",
  "key24": "3CiKicyio6VYbeRvamgePNu8E93x6yAHHwEL1kPPFKE2cZ4zXEJGhsTHaCjHUk3Yn5hAjcESqnvNHyWdHuXvC8Rb",
  "key25": "5XLYLoR8HEdNtFKNJmLTozWsYsc1k7FcYqGvLPhsQk5TgeTkjkFbRWrqXxfj6u7oat76Z5xBnzpMyUyEnx1gxpF1",
  "key26": "9HXqqv6TtiKYJz8wV6jqYkHAJhFyFtQuWDE34VjW92YMZ28x8SFXD3HwbUGMVaJ8Am5SJ3YPzp1ZKmehhm4cgWx",
  "key27": "2HCY9mFvagfRxsG5dv1jvyxzzVsyS6ZdLznnynHLbvunWjggjDnkVNuX18XZzJd7fdr13mt9CMzLyrJfFEkwdQ6P",
  "key28": "4dsMZaLWygunJYnk4aDuMve1fktjCejaTaDeEibjZbD2AbYbmJC6mU1i33xqGThJpSUm67daT5D3HiGE3XFSiZo5",
  "key29": "4T4CqAq5q36kyExaEnn6PCLsVokmZ72pgx2oPcsNPNwQrKWs6wMFFh57edu2ssDEXwehrqgdfofAdksRaoRDA2gy",
  "key30": "42wNWgFF4xgKELXanZyCgXj5gb16SyGBcVY7tWk3oqF96z2PmUQu9srKSp1x8qYQH7LL825iQ33mFpUvUKpYBLES",
  "key31": "3AdSAJqhbaQdbeZETnMpQRYxXrUaSZ1nJD9LxvCUhhqoh1aUA548QsnqS6wHcK4bPU1qFqAHZuJCauMDCjCcmu5J",
  "key32": "3DWAeLa4x2Sw4ik1DBfiBTZphuHT3qNMcGEgFwGDWeNqXESnc7NKcUXAXLGNDBUsKGC1LcwCyJEvz1qvPcuFudkA",
  "key33": "kCT3UHxWTW39mk3RY87bSfCaeMUgap8uMt3rPuPP49LdirSpnLm5iTUwMCk9vHLMGxA43y9H1M6u1DHxpKBzkMP",
  "key34": "2hkMABV7m6n5KWJsUKuRq2cYxMmYmCWtavq8LhhQUUujEpyBoC7ru5Ys6PyTR8BQvDZHoKwmM55gsPrXZpWS4uhV",
  "key35": "6Msq6v1yJt1vfquzajgH7bi8ra6JqsQ323wVGn4nptMT8hBBGNRcqkp8pp1xyFog72JRTNTDYERTHDf4gH2Dztn",
  "key36": "3yVYXfwGhvWM6UvSnrbjdEuEY8g2PapUYqCobL2edVk1W2RLh5npgVSy65dhkxhRW1JfJRxTdVKkewW27hKTGJxV",
  "key37": "38WdQjuavgLUkgQa9tzBLrXoGkqGf8PNTcB413iJgid9qps8HAL7h4JZiHBkT2XLihY84tLoaQg4ETfmx96WE3VY"
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
