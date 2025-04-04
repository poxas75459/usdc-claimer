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
    "3tHmzLH99rnt6Udp5G3Rp4kbw1612NkFcNziGd4MhntwBMs7uogLWjPuX5dGJdNB9VJuprmTtqZuBpZSuK1DKGTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gTGGiQn9KFbY6VChxEedENPeZhChLQZphacUcqsooj9wRpgYVeMXBJQWf48izuw6VdRyPaZjsWhTDdbtoTa1jX1",
  "key1": "aijnj6vkYArFvxKR8unWHQGwa3jU7RrBZifvf11PMNyvb4J5yxPVQThA1rGbm5PK79twKvkDvad5CaSSExvAFav",
  "key2": "31CbuMD3t6vb2SwX6Hm479jSsUsvNpaDSwHJLG2kioHiwaWGJSDFZeHca1HkcSp8QfU8LngFYixAKoJ8M3QgcSQK",
  "key3": "3FSf9hSPP8eC1qLxiSw7ei1jE15G6LNF124gewpomJhddyjeUma77Wg7grcTDc1i2FK8zqzsvW7uwcf9JM8GrNkr",
  "key4": "445rWUFjyKVLCNbt2ujc7tvyn9QBAVNcowEoapBLbXqnR6AjaVjt71GbzMRPfHWN7kdgvR9ENFmGtNJeBPDG5NAY",
  "key5": "4MtDR2p5XviuWVmdGRWJFcbkkMGuQqYVrgSRuQ4jonmMmK4iAEYm64mgm4r7BG7ZUaEHzHBNoi4F35DVjP42rG3d",
  "key6": "23nXRvrxR4YmsBaQm3hVyyWkvQn9LhroS4b3s2BbLYWc5tDEpCats1Zwot898CRJvYtCGBtCkGDBktpV5PuhZ6Uj",
  "key7": "5RdZs5wNZ7p1FqLhMttELuVwy6Mo8XCMiskvsRR4D8C3Peyi6ZLyULJ1eg3X9kKfjav2cvDPBRAYonom1uTWTURK",
  "key8": "2B7Yt2UoywKCqCss88YarDSVApNaWHzhNgTEGUN2AmU5fsQPDZh2ZYGuxJfBqGVA62i7UPhHTxkj5PWvw5kf4bov",
  "key9": "ZMfVT6djBir7uzy7vwXuJbsSuJYC1F7ghXcyhb3LPxpP78JHU4KFexwKjaGffpRbvEU361Lco4GnLRhPTcajQY5",
  "key10": "3BTfWLbBgZhjnGbMW8rJJuJZZGcLNg3phJjufE7xc9gEVXkaDgUERx39Mbpb24f4ffLUT7L3eehi5e7XgBkUGwtN",
  "key11": "3xw7wMZZLJRdn4CuAdCFkcYzGgPuUePPjYUTG4nVLUyNpVMT8njcJHSim8xPUNTVEtTR8XJZtVYq1MUgbyUncWEA",
  "key12": "pZC5REG5YM5ThbzeKy7r2kArwxJTGVf5kYWj3ymYsz81XRt2Qi3ER2aJ88yZkSVXph7tn6Tyc6Byah2z9YZRQ5k",
  "key13": "5EaFxRCoY1gQZYixAeCT3sh56nbxiF4vgz9hg8XrSfBnYyWaQpt7HgHDnne8y4fWVXxp3dAx5f5nhtxmTjSgdWsN",
  "key14": "4eHuwbw9k9b9VXFcpyv4xSVCXUTgyumGftKkSaBrM3DZePhjEBKwJHwJWhydSJCPSW5BnZ1ZrtGUAeRANp1btLVE",
  "key15": "3FAUkRkr1wECme6hySMkE6JSgLMKLN4TPizUbo9aiHuE9AWp2pxFkA2hWj4kaqNdWEservRrdHT1c9ahCXWLQLBX",
  "key16": "2bs7zuVuaZGwDYZc1ZFLTL2EAVc4Dd72mGHUZLKULpYS3F3mntibLX6J1aZGvkQHeNvTomezjearQsVZNHacGYn7",
  "key17": "5K1GK1QuPK4GLqp7UondtzpzEn1B5HrBLdojq7FUmx3E8mf4H84w9vYDuXHdbMjbfC7oZ4bpFiRQ5MgGw3n5TAvu",
  "key18": "65HY6XadqZfaF7cRhqaaRZuCfAesmxupc6cTSRTPR2rkxQtvhy7Ed5VkTx38FRrYPYrPRJtoxuT1WKCqtMYPVx2S",
  "key19": "2pzgtEJeCBMZs8dRiB4C5C23i56hLp3LwCPqPrWKSHN24UPHFdiH1cqFXuv3cF41ULiuX6Z14GUuvzjHNzBe8Wf4",
  "key20": "25sysWn1yK1L4xJBVXJvkBVvwe2BTLviw2vLt4jAinjd5gTebyvHGUSJwyKRGwWMRnR4v3V9zc8PEcecUAiJgw5z",
  "key21": "4nckxnGbX23RJYwW8cVqzFLP8FAm9b1p4YADGiVCR5DCTDHAYvAtwtxPAcxoFntyyNcJeYEbpwQBvKq7NMFa3so6",
  "key22": "4V4ngYSFt7PBT6G1K8fm1duc3sX5ppqgran29VXxfCjAqeznJvLuKNpr1fN1QRkZ9NtsWzH5aDr9DGqowcGT7vr5",
  "key23": "3nENYJmP6ZdqNe1M9WxXbWFEae22vzT6bcY4GMW3YxVYTde7K7QS2R4Sz9nL8nm7JTG74z69r9ZVV5fjJSmr3958",
  "key24": "3nmfQyTtLwj7JhVxzWFRhd87URBMjK2GGrDfivSwUdSZRfJDHbYcW63ePSWH4TA1FJVgb33KmPVnmuZedteVfoQm",
  "key25": "XhhmKPZAgLZqt8k7XnVDDxV9zeiu3nujRvM4hg7dmnBi86zkBCQ7y81rNkCz6mUfLQdHEkdNwN2zjuEaEJ1eubu",
  "key26": "3qVbynbKZhmsz6mskBvXs7Dgb6KG4B4yVKmctSfm4Vrui7LkVQBUM9diLrAN1pD2Mixx3ZbTUk1Jgpru2HZLXuoY",
  "key27": "5DbvRhkgmDiWaxRQmUCneiaQ1VDPdZRxU2xs7J9Dw7n13wLtwJPap7xEYSMea6czFiAEBEABBwcSvvNNSBrX4rgN",
  "key28": "2RdefYFeHPVATpcpyzYfaZcwfP5ASXyL7EdcnCV6T2eJQt635x2vU1fuihqf7p7eY4dVAQ64DtLHtf83Ahk1oUZm",
  "key29": "5pPxjB2exZmFRvABytytf9N5UHQGHtqWJ7NfN3LErr9ACFUqfEnDSGcQokcWDw5MJ8khFJWPpGFm8yhx3JWhjiP8",
  "key30": "4wBvAiABtqhsLgBjwPzCvMcEvrrnFnFMiAfiE8UrN7ycWCsTxqmHsTFLhuBHCsCPoY8s5gtrSsMyr5verusGGx5G",
  "key31": "4EF3MW2H1x5zeMw8CgNXxGmFqWsspB4HTkeytj1JBYiYJYTrCsoRJVsGrGi9bV8qLA2JG3BY5Ma8PLr3VxFPwX2k",
  "key32": "4bykgMwjonw7ozLN8ZiT68AxvM7Cr6NJoYGCSvwTnEo9XkSzy8Z4Koik1EKV5EymMiQs9Upqwv9qWwjaCkvricNV",
  "key33": "2w7fmYY4V8CNdFCfZuLTG922JQBhE2kJgmG2uYgUM7mHLqrGasXZYCsJWomSNVN5CoTTDBYt7Cj1hye6iKuXEsqb",
  "key34": "4u7zqcv5n8JhMDbbexQEkVQbssLGAwZcuXq9nJpaZZ3BughqYEHQQBAh9WdXKAdg2wfZ2veybCbBoSM83RPpcBpS",
  "key35": "sN9225fdPY3nJKukSkgPrqeCu6xBhvGp8QrCGx5dqrXbeLQNYcNPQeBD7ZUgc89myDPxJfDU5HbUxNEE1ppPaYs",
  "key36": "3xf6hbnNbMuS6PcXg4fMyfczNmJBut53WFXMg4ajLAe5GtRgWKdNtZXvWXLGXwwLWKNgxKp8wL4n29Xv8jJdsRPH",
  "key37": "5edEibBxZTk7TfhN5X6VFzW2KjisFtS8e3GYjwwwBUY4oPHWVM9fp3y4JrZJXbob6ujjrFUPznqPdAwXRbxf55CN",
  "key38": "51ExzViMVnmmB7JKbgQPABY22bRNFAoMgTrU9iYMRgQ1ZAY7pL9Y8FYH1Zwp1L6jtUdFVBvGGWAHE9y1t73VvUbm",
  "key39": "48wwSxb2udLChdjfZqfLgBxg5fss3QwjptUz9mC89Nv2pnjDv3ffjayMnENZwEboFNRkfVa4CrHK21YxeFxUweW1",
  "key40": "3GPrQX18ARGB45ChLG4R6mJEmGY4qjEiiE2riNSojAP46utDSQm2xip6q9LH3vynGQasxEntapRkzarUYWHDsxk6",
  "key41": "W9iNsYSNuGbWHHJsCiJkqi2RgfYQJKRqZzC5zWbA3oAGpj9K2p9Zud1jEAwa5724RMQ3tTxS2JrS3j39PeWxHUp",
  "key42": "d6bg4Gk7KLf38hnQnYovptMfk1tVR3xQpHHeg1jvoEdtM3mwQbj9BhC5HLD2DYS4vnpDWicAYeRRj6oetwDp1Et",
  "key43": "VXVrmb8Sjr2tY5eTcgaKff4cuwdpQ8gH84695StBtd6trpLU2BHDXQck2Dh5Jud9P3h5JyGdyQLnJTN8sSNULgb"
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
