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
    "4MrsgZzvMpxTPybDP6z4btNVZ5MfupW3HzNpToAGEPirqaBJ2CUYLQ4kG7pNfuty4BabVYuSpikA89qbEU2cofQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VyA2mYdKBX1upyWVNC7YZJ42nGQmsujPuToUbwUUaMhHdrAGWmQjAQGEAcUcnXgFZW6z1mUNQWw5Lsg3KtW4cyj",
  "key1": "4J8MsRZanMmxGGL4sQ3ibALFiGuZoJLy2woGqgJgL4tHsAjeYutsBrkKJoxFY8K37B4WfVWsf9VfHjkR3c3CMmhq",
  "key2": "3LsN3hDfmTrHdn8ohE8G9iZuDoF67ppeMMuog7dTtzx1dq8MuLc7EYeAckuhT32dKJzNUUEPiu2iKDT3dDrDwpPe",
  "key3": "3tqHMCTVrXvdUPtxLpsp5aNbb3zcstc3ifR2QXm6VA6DB471wQQTkLpDoM4G8EF8rPLLTZvoqHE3sAbrFBfPcx9F",
  "key4": "5Pv6KvF6ThMekGpWo4fhs8wLRRKqshRQHAG8fHUHUBZ7Ads2mTx8f8ZDjPp5VQ1wHG9sjAYWd9DU5YHYoApAd4nh",
  "key5": "4Y3ojbhRMcoRS6WPDivk4RWfeCGJUdHizAgmccSbZdkkY6PihgxCHdCacNFeawQodWmqVosjRngoCkHXo8d5Mnpp",
  "key6": "2pTnmEj63GeXAecyFzuNyA8a6b3nUCSXgAJgwZeRuty8xZftZpqfsKwvDG2mVcAuSUxBYVj2K3Yc7LNd3gdovnvd",
  "key7": "2YAAQ6WupU3fkTMki7NYhDLcyGGNa6NA4r3jWykqg1PBA25aUL6Lkx4LeEvUZQzVA33LFYjgvKL9MjgyG5zRV1V7",
  "key8": "3ZhbyEXx8DEZrYVzuZnuZ8twgbFqvvGvNEEpVKthyMahJB7hE9t9WnUo3gybTszEBQWEDTjQCpJw7AsRhgJbLiVe",
  "key9": "4i2wHMEk5gBNhX7ju5Qk93BkAJH6wkMGc17v3avo33NpeBmgUsX9BqSCzpZbWX8enhZ1gb3KyVP64bUUbLik4wGL",
  "key10": "2LPV2ETHHxS4J4RRTYhXxCPB4NMiRk6boiUiggaqgAMT8YkTQdzmMLjmMvVx4Tn5q7BGXnEj7RninoJzoWHox3oU",
  "key11": "Xd2TF6b81cCBKqP1NP46CE5gNPcyXhAV9ZY43kDiiS7QA1gyqH69y6Wma3DC8tftXTBHanu4p6Zh7UGbQyHAKeG",
  "key12": "8zc5EF3bJ589ANmRJFFgv1n3UYhydnN5RcBSzoXX7BV32krcj5gs1Ep6NML8A3YzHCEdjTq5vJewK1ksyat1z9u",
  "key13": "2bxLTgP58n6eBDeZW9R9NzGTv6mkZjiXM2mdBoRWGevDCrRu64NrddMr7GuHjDbxCDArom8L2kg7dxMkK9qBkuAe",
  "key14": "5m7dD5rvjydbgVAc1SWRj3kvoeo2A6ZRULb5ER5tFALHZEzoq2mKSfv2jsF67GwrLYVufvtvgcbKJ8pDA2oZJ4fR",
  "key15": "4jbjfKJp4PVgJu4KxXY4Ajc251kzf2eok8rm6QzghkHaPTLxtEQfc1h8PiqcHFQMs2DnB3DooVxjgbtt4kznvdfq",
  "key16": "3TXAxojvCiduSPc7WzirJBg6WUpWmHSTtopV4v62vy9HCM5EjjhUrYsm7ge9739xx8VLmAdiigwzVZ7stkvv9Liy",
  "key17": "2gEfgx2n2V8zv23BcZj6YwvsiM82uA5xGCD4UMdidnneoz2rKB1kX1qybkDnpkTm2E5erhb11DzHkLAAASTYSQFU",
  "key18": "2YLTy696DEvYwapUQpGTrMiCJwWpQf5tMuaHjzhrkMA4wkt3xy2FQBmXrP5apQDTKSpNqocLX77CGT1tg5PHCHUD",
  "key19": "bAkfwExVtPfZksR6q27YWBcFgQBvxdVHTfgEaZoDGgZjUoBW6PGbQ5UrtknbkCxhFkGpCtMBpx5MqzNz4c5Bzyr",
  "key20": "37iyAytUdgssxHJpLsKJHGxHz9v94ArffAg4wtGRZqZYZEq5jKjpr1rt1ik6ykn9oEkwFdVTbzf85MVuVpv7LgLg",
  "key21": "3qv1pT4JRakmw1ufNAhXbnuLzgEDLXHTs92TV5V9T2SQ8QhY3ZKPoxCKkmVxbnHxHf8C6hbcTPgNmnK3Jia86BUP",
  "key22": "4hS98LBX7mvzcM5x3dzKSUhuMiPJ9oRbiauXUE8ySVsGXrVUhtRyryNDyU9GPqwouhWVBra8Y7rGwpbwasg47Cre",
  "key23": "63LBXfXCEsp1LBCNinmsTWSMQjjMNeFtRh4ZaVEUHJ6wympuDo9iD4sjEYGveQBqLrz2VSs77VTQXoibeScKwfMK",
  "key24": "2fKEeccU4Q73btZcoUJ8vVKtb8LFH6Vo5ZJigd776wDUkcv1AtRvWsfFvkLFcP5PtpbhP2Xe1KnjfuRbaHUphqEN",
  "key25": "5L6yktsGuUYptUqtYRygvDoy5EMokASRN9dej2rkKhkLYRV2o9oUHUWRogcNwPFcXzPojfK7ZrJVpCmcuHMdQsnd",
  "key26": "67mXxpaPQx6GHMhNobAK3JcQQv59KXRsCUwydbCYBjQ2N6Z2jLqQXS9QAejvMqSZoGHihRi86AKTMtt1fgESitJW",
  "key27": "5xrpUFuSmyzH5tMtZQgZjU6EVGqHwLbNtySbDJrAuYU4KLyr9iGQGCdazVbhp8dgd6FYzsRQ4ExqrdiyECSGMrkS",
  "key28": "4wS5vMv5TZukwMZyU9tctRptsv4EjH4zPQRViDskVu4h2WNfGQaHKkfidRhJM6YMSN5QX4o9EfCPhboVL3jHRey6",
  "key29": "3fHu8Xg1EWQt5fbZ52w6NU4EBnGTMHLZev86wF7v5TNkS9ApTbowPUQm57oyTbz5a6yeRnTnmQdqqwaAwTYAtseo",
  "key30": "5y4guD6HZmThqKdKnnaWzbwhrcdX3QXJh7yAbRtbj2PAWR1SUdH7Ej4sMecw3NeNQgx1fGksAidy7YofASWLnh6y",
  "key31": "5QWeni46R18gsMHn2MSHhTif1hRpSiSTYr8tTsYci4YZbyx5NCHXkZnrYabkg2pQDqKk1Yu5BeysRY7c9NEgaSD3",
  "key32": "4ijzFVtogMjDXYr36bww6ZfRufKJfnPSDby5eWTKckVBVU4PTopbPhpvoUkD9EWdtcqoTxj2JsKQ5iFSe4vmaMy1",
  "key33": "3RoKyWtMX78c7srXUEhvgKQUFG4mia7SK2mYsQLY728t6HPuuX2HfsDEAqBpaMRUEjkZaX8sungigymuxZdTuCVe",
  "key34": "39kV8YP6exsmVmpau5Xp1QWVpCKeZaxuhAfryXPBRbSpUnKDbuczyxWhZtceVP8GhQpkXjVxxGqAwKaUV7kSAvMP",
  "key35": "3VEwHJmCnnnYRuDt6UmrriLQ3Px3FcZEe95CjMt5vkArtXEeTp6TQc3WaWAGnYVFHbayPS1yCXydpExcoCVSSUdz",
  "key36": "2nJf5M27CfqRx6rweSq6Mm4fzNQzMjBmJ2WTtXTrS6LwTBgRNRM9ctqFzCfWGZiVp5pyRnD3NUK2u5EyLH6QnwBJ",
  "key37": "3tWbKXUruD5teRkfYnqzNRadb7jz5MtxvisiZSVEaHNejUHVREmJWFCUirZNjcjPpBwo7xRNBiKoJrCrPLqa1rQm",
  "key38": "4FtAjmYTtHanwcvFfbsnGCYCGUD6n2i3DZHD2MUcwW6cRTfBWwsh3muQ1TuocB6KoZy94wGHs9fTc9j96o1K7jS9",
  "key39": "4CREaP5ALgys2sSJBwKR367rBGLRi2DDgrK4EGzqsYmVQUHf1e5KkyCobPcjyqkxz5y2XqCTmvZfvg2hdAiknCrm",
  "key40": "5sQ7n9yyTuS6SaejXEr15efMEdRAtCWNvpr8rJcXWBieLPejMm7jQ4cbL647Aa6M9KtGGuaWsQtgh8XREpHJJjgE",
  "key41": "4zNtmYym6rQobBAR4kB9esVNHda6qNRBr2kKDYbfC2eqwPjr2FUDErCAhNEGf82ZbLwKSpEs53THwHGeqfJo2bd6"
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
