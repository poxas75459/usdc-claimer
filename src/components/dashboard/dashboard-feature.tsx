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
    "5SN24yWLS4vFMbwBJTpv9qeouQJsNscii2sLGWeZfRRZZsxuFgKtJiJ2BBUjYmcEBb4kHw1pZcFA5ZHM7zhwEkQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WM3WvsLcHj7fpZ6UvPpvGuiiHjXBgY5UZ2a56eFAoV6gYytpAgmV3RAPtaSJz2UZ6Mc8XuAHWud7Cqx2SjKnHvg",
  "key1": "dd27duaBiyD1sXQMWydaiqZx6QQK7sMJmtxCA8wKcBNU7WxPTtSmJYAuU7mHyKLdNWe1XCFzH7sSke7hVAaGz6q",
  "key2": "2yHLc3rvgVWV7KeJ3c75mMTKMiz7Uy9kvcWPkxYTqFKf2LcEUaqpWrubdc8r353taFjDcLnpFzhZjxHMmD7p8tZd",
  "key3": "3x2ensuY2hXvJXnTAcQLXudcW3k9ZSBPGJgAHT58b1Bk5Cs8D2p929f67KajMWn61gTgjLnoAz6TDoV2cSz6xMTz",
  "key4": "YpW6CAnzRyBQkffRxs138uD8dJRmKYdxwwvNqEApUeR8ceFrYqE93LQwpboBVs8bnWYey16sDg2bwvxr8ge2c8N",
  "key5": "2hQtAngPktQRqtBKo5eQ1LiRmsVzYJJrskfE4QdHS5uEH1LsVvixTYGvbdgtFQ38yvEsrZR6xJLoYN6kmhTmG6ru",
  "key6": "4gMhdoRhF4KPbhpviH6pkLS6TXN2NRica3xtKBrv93TfQK3Tkt1zrEPr8HAyATiYmCY7UbBLDhCqvXTByMEpPkt7",
  "key7": "2pNDVwnQoeC2hJ81HHcsL8XJcPb56uGiizweRm6Qp1i5CxxtRiUaQcP9BLNPZTwBPkgkK775hRiaLUdBiopUFv5H",
  "key8": "3RhGUNXtKyJNJTw2aJfn4NtRxxDA6CqvXfL2NpYu4A4764yo47eRyyv7myrM125pCTScEHh9xR1dCuExqMivfarK",
  "key9": "5nbPPQvod54djmtePBS9xrsSDF1xyLNERPXpzwa91xvrVL2VYCY4VbSKLoH7RTQewRZmiGxrxqQ8drBo7U4YxDW4",
  "key10": "2UioqSmGShY2FqzdMEB6Lu7W4pMaSjrpPtdGCbzz6C9dwuKph4w59u49LgGmjSzvkdadqrXhxS3jLBXyBMsoA7jk",
  "key11": "izyZy4NtcZMMCCQWjRf1b2BQzhctMDkKPLNrebrNvnAnAhgWrDGTtA2Wa37HhUCrKhryXwzbidg1D3x5DJRawJc",
  "key12": "61wUu6Yv3SKrKHA4cUXm5HjgPKVdRM6jKtaLrGoCs5dt55gbFsg4czpLRLrJ4Gerjn4H5a31voEfKzizJJJ6ckvq",
  "key13": "5bnjiyn7hJarGfd4JCDsK9k5oQ9iBZNm5NDu8q7ZJHKbDjejKUnEHRn2AJDgArkHMa8uDTnChJRs6yeA9xagvwhq",
  "key14": "5Pw7RTsHFQNK2u4WMyKrY45XPy3DK9kyTmwz81LYCZ2jmZsGdnqmqvZHdSf2KuffvCLjRcbYYUYfyTzgyJjHy6pf",
  "key15": "Uae1rf4FrW14Gb2oSw9iJCXfVMJSRTxNvQPdgb7cTwmqzeJ4iWy2FKtoXctZ3HW5Dh9KoHYdSKTr4t81gN7UN1M",
  "key16": "p2JW5UbETDXDJArM1eqbNLuLvFMNfUmcWSqZdDVcnUzcN5dC3WaukYLhNYPFqP3Kj6rvYQbsuGxjRUvPBBNFvjH",
  "key17": "3ER8YWVprKoFR3gxtiLfDinFSGvgMUvht36CqeiiBZgHGXr2tnBmEVRj7899jajt6VKVJj1YaFmcm9HcYT38sEUC",
  "key18": "3ah3twoH6Vq1GtviMmLNamLX1FDyA2ZVcZexNuycFrXrgKpmNXYVwoRH3vknCBLpLfnh6LHYFfMkWvTVAaccCn7x",
  "key19": "JyXDaeE4erbimcAsefSf2vugXfDmA2axjpFv5DV8dHMkcjLFcBpXf8m1ouD4nW99PCTPxWYn8G3utxsh4H3kqsQ",
  "key20": "28MrDbTeqoDrHVNSacLQJeurpv4w4Jz8bE3uGw3fRhYHuCRypXpoQ9pRsuLnftY6bodVt7GLagr3MWgqmdh7CUF9",
  "key21": "azdi9CA22NLo1sQ2Fd3Qsa929SVPPmWQKkTKQU3T5HfthQhNemXxYJgfudt2CwqNMJ3fhkLa5qCrH9npdMb13Hz",
  "key22": "34YmzENWoV3TNQDKPyteLazB4vrWU75cxKZVXtwq6pNYLe6mwbLHaihfTSQJ1fC72qgmMzJYpbhRYicjN9F5wUV8",
  "key23": "3X1iQFPSX4PouCgcGj8FJ2ttFAoseyMXKjiZiKVYv6hJ57jDhxmhYV4ruMoS4Xthn9hZeb9oQSrygu941YCa6S1u",
  "key24": "2JD4og9mhB6qoDnmoWYwh1QSqrmP1in5YjZpwzhmDYmYf9NKRQMCbQqpk2YcKuEcpzbVNY31fWbz8VJ8Dj2TMe3B",
  "key25": "4hwNKUTiX2o7W7o8XF38auzeyAtbKbZ9mxqUCUTcQz9SrArf5rxhce9n8SEyjb4d9csAT1YPU6sSdWnBKef12pip",
  "key26": "382UXWhyELiMcWrtjZxgX7Bi7bRqtWpupAXeq3MW9Dp2xTEtKgzKu1HmMacvNT6vh456pr7XVSps48oAH8b81b1n",
  "key27": "3fzARX2FECcJ7nD5jXV4dADn6qUdZWxQ73DyPbCZ2VaAXqKyNsseJty6LUjHd5QQe6PQVNzT8rCzkWSLikpHA5vi",
  "key28": "FXEU5w5tZ1SdHpkgHTt3YSeJmT7ZnEdHTZvXMvnxmxkqvMMW4nBsyNPmeqVei6vvHmMKg3tvM9YYKKyQTPQorKu",
  "key29": "2gkrbX5DxN354hxXfa4VjS2Zpk35uUEVzopBhHRWMirZHTb22QQDkFMSGBQw4VmEL5XiFbWXiMshwVDTvMqp3kNh",
  "key30": "Poxp9pcCcKFFoXKtuJuPVFLipU3THghezQdCjJEukoyYJekRTa1iv6asrZqQFkiHNk2M1o66gjJMFSPN912d8RY",
  "key31": "3kwQfBB6wLJ2wfLJSsraKZ3vY19reSeCUbeimC1RpR2zXiNHfssap5V9o7GMd3QxerWYnMWsH7sS5NeH4pGhrubN",
  "key32": "rT6z9KQhZL5MS3UkdFPU3Mt4SydQCEiMUpfRE63uWRh73ULBu9DGraQicnbd2wfwWokCiWt4otvco8uGc4feRdo",
  "key33": "4phY3ktbHYMkYwK1mtd581tkAcj4YsYNQNSKKuT5E4fb18sqn5gvny6BP3yPafvT6V6jMz9EWEy61DLg7WSZf4xc",
  "key34": "3XchUgHpN1NzP91VfHe5AjCxndm4tbuDM5Jt77s3CVZRmYkzxqxjUUa79ynMhoZxn6kge47xZSt962AuKWVjXPdL",
  "key35": "3PXwfW7C4TmJD9xTecAzL4TFsxMRpERCjTWFSH8btYLx6L1dWACyWjz43nd89uJTJvPvvV3uPRw6LSNSrLLcDp8L",
  "key36": "8qZcn6cpCBMzc3WsANKK5eewBTqykKkVmjuyui9UYgXy4w7gNbk2J8SwqRFXwg7tjcKHQdmZLahmkWqNBeb7fQQ",
  "key37": "4ANvSWnPYZoAT1917fL4WL9ToARdE4RkZiEYpLwuSCDLop6jRvBziEFuxHEfSzjQHtCjXhoci4NS7QSbKdZYx4gw",
  "key38": "4oNGuxLbsq8GmoY34kaJ54VZaksqRgYkAA5ndsg6k5YudAKygC4tfHZH3GAF78R566dfoVi9uxDDJi5kV2Biw7aq",
  "key39": "53d7kM1U4nkBFRzzy3FYrhwPxj6r86Vnc29mzH9aurjKTZPDvRZuZRZ6R9uUYZR3uB9GC3AEsmXJbS3rY968VS5N",
  "key40": "4E9m3d42fyAW7EDRfr47J9syakMn7wYbFesn8Ap8UTQBNCsBWzkUzJFJqkdncFoc3khiLZp1RFfH2MZrPJQZhBY1",
  "key41": "4CuqrusMXQ95k6NhFumKV8fesxhg2w2xJ8Gdegb4svLmjHFwtQTtxJHv63jgrxDuD3beVLj3u1mBzQYcBK61JyNn",
  "key42": "5n1HGrwWQycGboYwjCth2T7B61Ed584J1p4SNLJHJNBQ5yBj5mwgKELrovt3My54qce4M9RYcTma3yNmqfnHqDfp",
  "key43": "4ZeTXYuWERWNuxALdqCsY2pDe3A2ZTMqUZf5TJjKDtiFwEyieU8SR9r2L2gn6kKCW75Ag9jTK4xQp1Z2Qrxayaty",
  "key44": "e7jXHHNqZJrb6SsFfRfu3NYxfgqbKyyCqCSMeX4yuLgjxn9YrCjjobZtJT5Wi6uzWfu1EqQoayyxSpk81oJnTqm",
  "key45": "o7pFVgmV84wHAQ5nkZEZtLYgaAHsEAGyXe7ruy5B9oBH6EHjC7Bm1XsAhVU5Fdg4QfMyrEBxcfYeysbLZ4Yf2jX",
  "key46": "rbjoSF4jtf94ELLNQshKfU2WTZx6VmGyhvwpg2ritKHBuXkHL5pbZ8e5qRw9Pnd6hEm3vdh3uyD9cSsZHKuJbuk",
  "key47": "UMwDDGhb5P7tJZbM7zStHrsgHHBRNxfgbW2399SbQEx7VoooGpfMRC8UJxkCr7AHW1haHK5p1srNJ4TZiQLLyvH",
  "key48": "4d7cWDruWgkxxsTEz8cn415A9Z9a1n8AUyQLJLyGtjWRYr4CUMz5HjqPq6Rh49BxBV9E3X6NeyWdcNbZUxY2U6tr"
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
