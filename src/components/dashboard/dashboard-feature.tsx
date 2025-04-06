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
    "2E2F2AhMA8PihmBA8ggLXZArfgu3rQXwZjxpPpeDxkgWUPAxPQUNrib3qZuHaAKUB6erduqGGSYNtKMJF1E77tFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T4j86BAMHDH1t6TV64chCRX5v4uGrMMVu2djkbJBEzDZhABRaUxPfhDtRSR3nB6JAZwkjMhy1aMB1pNcEgsEwRk",
  "key1": "3uSJdQbYsz1AHqLWZa9tCD6vzc3JnBvK33vuCkWGfeks8jYJkCt1ZTQNbTvGsbbeFaxfFvFUba1AVnrYzBBfHLVE",
  "key2": "wCuRJYA2TZsRWqhZBydp7q6xxdbLQMRaA4AsnuJohusGDAdHMpouVsRV2XUEuWUKdUn4GJiENLAuwdScZakYYCs",
  "key3": "N7DEU8dZZvcbZrWyXNfMrxT2YDEfRzRTgqqTgvGW7DVBJQ1aFzBysgqfnBWq7YPvuaL9LSh5EZ4KYWuCt6wugGZ",
  "key4": "25hFnVgcAcWDdpiWHU6A3XfjeEkiy25MkhTxbPLvomLk5RxK7eVXseaAadunrQKtWzKE4iHrxTixhUhG8cu8C3CS",
  "key5": "3HqeLg6kCgsX5Lf4mWQaGSGCVKMmvsn96NvDXo5usQKQgtciTKPLFX667YQsGvxygQJxSohY7FHGDMTUubxtdu67",
  "key6": "62ZBwgnb8ZgnWgE8Ry5fFoxi1fpf4c2oKMZYQ3ts1TBeGtwYxxprpaGVoHZ7tDieNRVP65ZTH5VVECe8o8AgYbNv",
  "key7": "4Aw1psu8QrjGiHHPje4DFeDgxXPJSyAmvAf2UQEaBtN7KAK1sP4ServFJV9W95JUz1Q2Tqma2T2VedhYN5oWyPbG",
  "key8": "5M25HSZKyEk46vYZ28KPcfwrmaewwUgM5Yk5GE6pcBjyxPu7oS63QH6ibs8DYi6FAB6aveHf8hU4BcD2Y1aD34ZN",
  "key9": "stD2BU6GCi7bAV89SPVQLmgA9Ssb751mhAKMC3bAqEcwa16BeV4xgcZG1iRE3tsK6GkMmCfFqyE8EbYRnKwCkYQ",
  "key10": "3RbYrBr8KTLYqDaEv4AygV1xUUVr4jbzHsqedtfabMMEAkpz6Ay41HARy46Pzy2QQ8CzazzxGgNf5wfuCxgwDpa9",
  "key11": "31zymioW8key7EnXGHNpiX3yW3bcKTTxjstusbx989Ce7qDvnXg5LtoKWZb2FWczebSLdc4K6hDVLExZmMVWDaNG",
  "key12": "4xi5dqP9aLyW1DRhWk7xre1ky38B235E6p8fc32GBs2TSmX2pirKBkWy2Am7aUTt7b6WHjJtUAyWCzQerJTNdD52",
  "key13": "4CxbLi4V8iur7DQgUFkRjhLsQcktguBATRb7SEZwx7TgkJ5VwAiJqK9T6GXBWw13AK3tdQQeFJQwzr1L7runtPcD",
  "key14": "5WrBa94frfq2aaS3EfYMwbVoTsqKxCnSSFR9CMhgqVPaudeqWnmBi9MPu7DmEsPfWpqh6e2Q1H9A8MfPK5L54fPU",
  "key15": "3tXYBhfXDLTZt6WkAtXswKCF9MQYo8EmaGC7CaP9nBs9auBpqfMFFKpaXvJHfeV4m6CfxPn1qh9hmdH5ctgpTXwV",
  "key16": "3ga4kVM7n5DooS8zF6cniyZwtvt3QPeCLqzp6xD9v1HF2Yv6q95GRwjrfpyuqcyH4QPYh4UdEfi4Zx5wWfY71aWW",
  "key17": "soMfqcsWERcetPUQp6D6FmEDy9r3V2Z1UpUhymoLbpgzeehs5zoD5ifAQgPCPN8fJVpFsE9o5avYMhHHVJwEH7d",
  "key18": "vmecaozbqVzfbdoKaXqNpzMFix2WPF1AzYBXHfS7NUGMztWuXWU8RmGr74mmEJnXUMGPjkawaHdCnFiosRVAW97",
  "key19": "4xnq6qUZf5KY6qU9sZewqaPHPCZhtFwvMTY1BgQWPwMPQQWVAY78XWEtoPwpYVNDeChYQ9acittHsVYNKTHDehuc",
  "key20": "4Ax5o4FXQ352vxou9sDfzbcZvF4gEaY7aJSEA1eo62nqDLsqcWFAG7t3h5mWhW1LWQ3vUTrGiHw7Uop4enHwvZnS",
  "key21": "3h3Pksq6DtaGPoLgjmzLN55mHq1QZg44eY3RArdwaB5ugZyReDZJjpfPC5AJzxMotkqAqwbHpqBz8KPug4EUT1sv",
  "key22": "4NKrRVcRXhNiGmADZg2b3vjwLUGMy1QjfVbTy7xPrZ4Nxv4y11M3hZKCcJD1LUfCEbVkqsvpTWuG11DX6rnUskNG",
  "key23": "57yMecAvGMgUtkdyjLXzFQ2PrzaKm8zYyRUaxo77u7Ww9GxV4XE6D2nGxz4JhCEnqBF6z9xgvLpAJ6opg6FFqTJK",
  "key24": "2iyT6fUVdfE3KZL78Nre95oBTZL2HGvZjY76YEHdUSaMtagou8rS4dLVVwSJoDcc5hJ1VQ3wg67yrieRrxF8sUMo",
  "key25": "7pfkmBjY45GuS6BsThVGPeoGMsckUvQR6w4MpN4dgKeoGB23b7Qhz7xWKR6xVUJ8Qy364QLLj9eZVe5CtjHPhJs",
  "key26": "4qe6QYetRfeYMBjQug7gKazVaBze3doUf3wA7RNLm9kQm1wLhpVv11MWYAtiwfTfKWgibW9VNkrrBne9sYN1Fpfx",
  "key27": "A8E7jpZo2NgYCtcxLUCMeb61zxTKEyW1k418hapEq4yMxRUJJRKiTFvnLonG4kNEHk9WU1oMXQDg6Nm5Hnihbza",
  "key28": "3BX2o6wZDqfhXDZ73SLVZpWnu3gAzh2gg4hC7t2Kh5fbC4VEKekRoFWQPQ3deVy6GRag5BQVd2ThQeohEwj3fYsX",
  "key29": "NTQcWkj9ekK1feb65Sxnomtoc4ujPpf6c6u4WMw4beFE3n2mmn1NYNzezzYPvX78TR6RUz9e4EwrzuaBvDCq4Yz",
  "key30": "hCaMQPueTUfk3gR6UWinwtGabnBwatDz9HzJTzw7hZURy88DgrK9dMA1yjUsiCoSKLjkVeTv51BMhYV1UpkyuWu",
  "key31": "3LGSGzGeCPykWgHzXoWSNbXrkAF43J5DCc2rbd1ygKzD9xwCrGcxedJh5JQAhZSUm7a6CmA9UU55roCr4Q3i4c6d",
  "key32": "5vAcLAz14W6iuNsJHLM3MssWNaa7H7WMB1hwjXtgCqtTwXk7wBLH7rrCBhB1ZLfd34EMd1fjpwGhf6Nph3hLiz3g",
  "key33": "4oCyq7FC5YAGLpqDuL4NwJZYRydrW46Yw5BARbVw4EUjU5toyCTGrbFVdjipMyemtcPP9nZdg22L2gAc8oyCMxNX",
  "key34": "4HKf9bx5Paee1wfDDQoRKb63spdWQmyNp3zQmUA1QQhXLoRcDWD31EEcbUhf5sjtRkgJfBuTsaAc4Qv4FABpKPep",
  "key35": "3e4ao5AEVv6JFbZfyJW5rkBTdUeDCDddesRqbPYCgsaJzfuuDkw7KCY3FHhJJE35xeMwFCyHfgDB9iTeBnJQdirt",
  "key36": "ETrgXQJR7hYWQ8EanLcQyxbaYu4FsU5x3abfgiAfL2UCtMqcez6J5WRX73F4P9BFSGAjdm4FsU2rRY7mn9aTHUE",
  "key37": "5qFHRHfm9xUcZ2t1SdRW5o56NDwM7q1YJA6efsE9JPCyBew3G9ZEPJtKmXqHEVFq5v6FrbYLD6q41CnLLdJ7ntez",
  "key38": "5z41RGAr977i7ugnJqq5qaap4ZBaAQkkuRLR17Lje2YM5pyWFFGHAca33w5gTXJu2GD1FAzFDgBHxsnn3bKZCmEA",
  "key39": "3fLGadYjFEK2nqjgZtYBrfixjh6JFi6UiyKdanTSXNhtnS2MxWhtDMezSh7N33chDaNzGrSnmPRgQMx8pX33wTr9",
  "key40": "4XrKbSNbTorREVvqiq3X2eB16hpDGeAp2Zsv1dkseeKDa6PMj1SzaL4fgySHSPFYLueZwoBtW8b3PdVbzChXH2VL",
  "key41": "29kzhmqjAWvdzXEEw8tdmiZ7rwfoimVDvMG6VreJXNhdK2y1S7CmN83tceWNPdenjJuvx2Nn19X35PedUvoimPxP",
  "key42": "2getFdAK3iX53JNJmYiNkabxG2p513VC3ZR3ZniZ3u85dAzvuysfKzzDSDMyqkdyzqcLkeytxLZfs5wDfsqD3zaw",
  "key43": "3Z4jWcwKX6e9cUDfiew95hST74HzbfuiHRh27BDderDvuNTyhJ1TJnbapwGhF6KndZohFQ3HUuE2gdRnKzzRnY2N"
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
