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
    "5YFkmCeGSfUWdWyNZJP9TGDdLa7V9FgyAPPv4NMEmvJ1LmGxdUbnNvBJrpRA4GNcbL4zMojkiHZMk7kaVx5LpxZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Q1qXFMX8wgaUu8zcvDjeRk9gx9hLiFxFjkuuNv7RTw2TeSkBGVZ4AecvzmPVQXmd5PHaGDNzahBCgjzEyCx23K",
  "key1": "RgbEbqBTkeWw26trXmJj8AjoAq98BoR5xtWP4VEQ6USxgZQ4g6ikaj6qkFTbnUdoUZr5ChpQ42wWPQ9XezEQSQU",
  "key2": "58Qjo43ftrr71NuCxA3g1qkonTZskPhbjApUMXhFKHYKJ4CUC6Trj7y1oZPti5USjqtdhKwqgfywpmV2JTxvW1Zz",
  "key3": "2wophbPuVDbTUd4ddkxJjypAE4XRbKLoyxbq2h3aRyWyvAm6D6o8aeub9M4cGCc1J8A3tFM1w2p7RBDCZXPvemuW",
  "key4": "499QfZ8pZw6dbnoQeC7Jn67fTWreDRWe7rkYLUsYkYFDGBNWG2WxhCyCA9Q1ZL8AakakfzkRAmBog3NhRFGAYBQm",
  "key5": "31m9u6rghnMTpUKhBwteUA9qiUnLLZiUgbZmMeYDL9Lr3LP3Q5y7AznRFJMhQnaTmBH9DQxJ2mczHhUqUB4dEt2o",
  "key6": "YsysXehTb6wGdHkr3qUcDsCxdPYQUfMC53XXEzQnMu4456nWmmMqFfpEYoEK1C9ffUoBVF6zYXqoU1KJ9zV9pJx",
  "key7": "3C3XFig7irZrMP4iirVkS5k8kJRGgxaQmuy9ED48p2Qo5LRVn3M134sZvJdTMPWcCUGoArpbxCWvuhUYARR5dht9",
  "key8": "5Pmzm1YJXmxR7KB7HWthZGAsgraYSvXbSvUW5xUFzVi9AF26ENzqNGLmU5NmPSNJwsYhF5NLtNKMgn6Ne33vdPjY",
  "key9": "4n2JzrheqGJWLHPkh7ChiKTekPEbxuhTGghB9QGxmpRvQ1QgkhtgBqRABqwzanxeSGV1UK73Mu4bz3qF6ZkyBLVL",
  "key10": "2vZLViZVy4PWByGnRd4ewfXJGYnqrNNLKzAMZL7wjuU2MGeeQG63D9GJKAnftpsg9UwdxFUVbZwdABDmYhHiqbF1",
  "key11": "3FGmWYhpxSp2526BmDSzsN2f6MxrMKZ2cbSwcqejfjV9NFfTTzYv2w86oMhPuyyVh8XhBjaS4LhZWn6vpE8YXRU2",
  "key12": "hRYS7gc4ZAcYViiVmNncsLXovrvP4qeaMLDMp3ZUTfp1mxCwMCdMEWoYqwRXHjKWanKVZJS16fr8JCibw32N7Sa",
  "key13": "66ZPrgqTq76XuXEytDZsZ7we3JqoiTGqYi8xZC5XhyfQM6e3CP66wT1BMSWMbbq7ofLCSCamso1yZYyb88FottEM",
  "key14": "3Xryq9maQ9YjFpFSndrDpZJiRYPWY46bqMQyTrsakQzaGFoPzgCY1ZcDULt2BeYeYV3dbFG5ZcpueXchCgEo13CT",
  "key15": "3V9r3eMs4h6tebeN7LyL6zFnRMuF9XkY5Ctc3oPzNZLJCnV2FxorTow9vYWRj1bYAfPTN9Ax3bEyT7nSNFL47cx3",
  "key16": "2t5hhp5BwmMpcV9iX1NZATxXoyxQmDsFbZecVMuTpYx8fziqxnMf8NsJFQBrSY2gP8UjY5pDRLFzCoBZSTWWJmL4",
  "key17": "3U1z8HYkM1QEYFLqKNqiZVyhTVJfWqumLbxLMqyqcKkAwfzLTAS2rAgELbKkG7qFxEsJLq5AD4oahfbnjaE7JuKn",
  "key18": "56uFdf2M1TfuTFDgLFV3LaWSRtzRXUN1vpV1tbtxFyxh7CJSz6gzQdbnoZpNrnwta3neRbB9ywF2n8GhdKFJJuwU",
  "key19": "24CM3MqrasdhJTLrPNFpJk1H6wv9WXDVaUwXk36DQDFN3sNbPsezXJhpfKRJWtd8gMsULBFNJ9g8Gg7VdMnXBaPU",
  "key20": "2K5EaJF8NFWkKP9XAsg6cbyfU4jG7sNK9W5y8ZBdgqj2zLBmSDcwKrZn2fT7RS34RYF2sHUocb5UGUKyk8T4Vpc6",
  "key21": "5dkoCkgRR94MRgWsue798kitRidb7PFdMNzbrANJikmx1mQK86P2xUrJNf7vetNBzRntCjn7Z8gLp21qP8TDzc3v",
  "key22": "2QXWyw1CwDrNHKi1wDRRyQR9opsF8XbTip36jgSwG4xDHQt6WUNij7cGaLgL8U3FwfwngwFdLmGAj52TRcDbJgpL",
  "key23": "5UW341devXMm2exyk7wLfR2LHTa66P5nmLXbzreDNFDzUKTkdZhDE5vqucDiZm42Q17crkZNxcwMG3uH5zFTifhN",
  "key24": "278niTkrUiqZJfSBuGdDFfRY1FbnoEzw8YbNNVteTeoueM8w5wS4xc4tb3nxCoW3yF6ZVPvZwSzo5SLou27ar1oi",
  "key25": "4xgTJrrYnRZM7joPfm82AZ49fdRBNQf3MmsLUCrqKKBZ7moHfynNdukMLFVt1mdW28fvGbzvd896bGs7BgeHGL6g",
  "key26": "3jRdbMLLKeMJwrorppGcTX211cXhSZPEbWEbrvmdci4B2k5zQMzaJwJEKTe636Jd8FczcVYTyPrGy1U8wRmNef63",
  "key27": "5GjNctyjrYK9vvMpot9j4RqLPPHV8gu6HmPqwAvQLSW3nSNKNaYUT1ma9vrGWT5i2Ri3Vg6Sq5ReSBek2M5bCAHh",
  "key28": "ro1eXgFx6XrAwMD7qjbS2oxYzA94ke22im2RK9RfT3Tkm7heTYcBb9kv5WLy39s9jzb2Lnxm4Wr4rSJMkrQb6i2",
  "key29": "4NWwLZhbkf2odoUFDr5PMUavpP8rJJFbtt6rhp4WrRzeyvQYhbY9fe5qhFPNxvjYkpLCqdgj6EHpZK2mGzkg8234",
  "key30": "2vffZfrjFjhMWrveqczesRcVspWdTYMR443fRMMffnQQE5eSJX9YrqDVza4LrFLTkPWxmVvLQEAShsMymik62Qcf",
  "key31": "5XjTV5S8V75i9PGNWKyCGtP68Y1hikJrtpFMfMpSkKXMHCRKEfPYNyRwnLkYE8RYzcXs2saXupYuBt2cwaK138hf",
  "key32": "5ozfvBREoNM4rGVoFzCu2Y8QQRH86bghd6WuNA19YQhhL51egqcWgQ7FogAMaUpyHuhYhTaEB198RbNQXjpZGnp1",
  "key33": "48S4vM9ixfU4PwJVTKtx1aAsfxALrXjcUp22EBSQLfx3wRU4zTFDVDuncqnwCjjrhRrn8xVSqZjQv3uhR1u3jSbG",
  "key34": "iT9AvkjY7x1eq2uatYXPJvhoH2iYxQuHoR33umwTfnXbMTcDuMZckrW78wc28EgaiRN6tEYZP8HdxtnoHBW5EtC",
  "key35": "8ZTVv8Tn1jmuwPCExHzBwNbHc9ga9xn8q3L6yNQGxXKPwsCDceewUDEjZ4iiDuCUa9PdvQqEGo1pdABu4CfkXfz",
  "key36": "2gbs9RkCaQctAEE3V6y4QX67aDzXXWoa9pwqvxU8XYyHN58fPXmufDk6pGDsiiFzYep3dDbrmDdthoDb8YScxCCD",
  "key37": "23R3txe9g7r2UAf2ApGv7bwdSqC3auDpWvoRvss2odm4raWXQ5p45foCMzd6zxUipsCKM4XiqfBCQgnhMhic2g81",
  "key38": "2naXgsEsobsTf26V8juSZ2Gyj49CvPHAXVeCd1cAzPD3ukRYQscvjBbrV6BM5E8f9nimpuqLrusveM6R21MWXckx",
  "key39": "5E18R5WsSnBV9ciBeuseaz1F7HvopsbaP5qTZs6XnSv5YmEQKbnN3TeqzHFDahLYDbB2ZVEwUn9uB262mVQjrGdD",
  "key40": "4sufsCSKcbFzQ2q4GPkZpJvvvzF2YmuW1YKs7t4vuJZa2iZE2vqgYWvm4TFQ6gphgzKhmTvwSertxMzXKY4sHYzm",
  "key41": "4KGHcou9pZnrCSvWzbH9XtzGaXvCUTB5KJ8vrE818B9wMC951sbcHmdircnwdubwKx526CkrjHiUTXJStUuNu1L6",
  "key42": "5TAVbBpWYwfLdgyV95kGMKCgd3gmnknNojF5gi7yXpTaYFQ3oHcdt2MhpbkGrFNnXG73eiSzvNug7P6P1KqN4KPu",
  "key43": "331PU28dqVsWiEp1CQ25prTvrFDPbn6FUTx6GPjTCEVMKfiMvV8DSnC9Qmqbgfg474wyxv9icuTWoVNoTPA2YsnY",
  "key44": "4BNx7s2gFUSpMXGeGiWNgg2wnRNFgUVbgHE9CK7TuQXoDGvktTwPnZARNyEWQDjfSXu9coSWinvwnzRA2XCfaGB2",
  "key45": "51SutRCSAmkBa4Cdd61pwwJwbzb8JM2hgGLg9WDugRZFfdyFwJgGMUpq6uGz7xzTrK4oYWNxmGbEP3tHdaFpEVM3",
  "key46": "2LJQDekRHGmXK5eEmfD9kyRpyBWf3oT7L8GtiUuxceTL8F9Qc9xuDzEAQjaoTk3BmR9oA26G2ww36ZAEBnFeqpNd",
  "key47": "2nvnTnJNqPXirQjKVvBDZrfayJVd9YCujrH6ACfCpu1eyPyukLQwQLECn6ZmzP2wTgCN4GXoKcPKW6W7iKsLdaLz"
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
