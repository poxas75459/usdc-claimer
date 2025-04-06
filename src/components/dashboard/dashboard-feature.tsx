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
    "4s84RqeWSeER9Houm7JoHULTLdtSzLujwix2vZPD9NSDa68KMT6xQW96SXPHVM7qoyELLkjZx8GndYGLm3QoWgHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vnauH7iWoLFXZz1JWoFpAmCKhjnyp8vw11u78yLzHri5H1KBCgMUTwGQ8qKMnaZr7MXFF81zBzhfubaT2xJjHa4",
  "key1": "2ag7YCmEqGCZyZMB8jUdtrtyRZhttHj1PHdbZRruTwoVnAHoGbkSYpGUFJ6HvvooRoY8Pb79Y54U58GDWRDecfYP",
  "key2": "657HKCmeuvMfxPn5fdATtUk7SBNd3KJ7sTtzvdTqsfmsFDsnTwqUaredEc39wmu2tK76uG9oEQz4CeWVrPqE82Qz",
  "key3": "47hjAuNTEP2ou5YK2h5kb6edKoeU7pVWqevcekBe1aNd4nKGd6CQEgTpmUqjvSG6x4Wx6r7wfLUFRiaiGEfToAZw",
  "key4": "4yZh6xBNEa8PDGcu13Wg2SNTqbw4JxdsjSF2kVSHL2QVbDfUKvPFws4e82DUqtKADFwUDkbP8Dh9qCTMfwipft8m",
  "key5": "5CxzKKYAVNzKTvCqYDoE6NcjZJB4ar1uKW1X4z2VnN4RxTho3cwuv195KztNx2r4qbtAqWrzHy46n7dTPUEEpH6o",
  "key6": "2deSxy6SLAVkdBRLLpD1Sr24T7eKWrac9k4nmAhx1GXLtpYNAuAX2e4W2Pxyq6UQTaT1EZNfziQyrGX5jbU4Kb4h",
  "key7": "fgueRMj7KeVsHqT5VJPpy4TZd7kirAqRrsSGtEN1ZLi8V8Tc13H7pBJa8fBmmNg12va88KMUW86v6DhYcPyW4RM",
  "key8": "61wfF7hZJZ4FqaWWDByNKNM7e39UKkCpT6KUVZ72A8hvrocztoK8JCfRhsLD7aeWPTwKoLhSfwQD4sLiq4ZnwSrT",
  "key9": "51cwwpGfTuZPFAMzPsWSvhznmYfwtCxbVpTytSJXXNsm563KdecEfJYpKWsTwy8iq3tbEdtRfAjDK9rDG3aUfD2B",
  "key10": "3FT4xengSL7fwH5tP4nZuVQjCyUsYke7QvfZj7cNGK9xCnEJGExtr1KFtmsHSKED3tJcAZ6j5HupP3Tqkf6EiDvR",
  "key11": "5nuUCC2Y61ZvbdogjjQevVw7BpvzHSwPD6Vs6HbgG4Khr3ebCMskzrT4paAhVTXT263rmzqsEhVBfufT13PyKJ9Q",
  "key12": "cPmNmK1S5T6yo6UavBqugi34LJpCR1DpjxMVtQANxDf9jb8HYMwvj4cEFQTaFBgsUGvga54rLPmU6VpGXjznqjs",
  "key13": "5nb5nd9pemRWQN65ZQTNSeHStpzbNiRb6fLZrrXtKdUNnHdrmS2V7br9FE8V3AmAnGAqjq9ZrK9p7gPYsgsrqn5R",
  "key14": "2NT6yaCJa8Txk7pkLqELTv4cvC9v75TQDksVmqKURB9fGvE4uLnJQcK82G5PNk4nPe65HxFfZZMin54Vau843VRW",
  "key15": "2YEMvQGnAxqXajkXoo8SB9zhfeVPZQPXF99Y7kQVAJpq9iaqNpcDyW8p5pPW6tsCgLjJpJHF4G4tA82jMNkfydWZ",
  "key16": "5Vyt3w1iCKZ5WzPz2TjhgdqKo8ETjPHGgMbyt4UxVVpsbHxAby4yBMP2gCSfsKbgzCzy7GJVSMKVTNbt89N8HDNP",
  "key17": "Yaehy85sGdSCJEj59Abv3rj7ZBPAVHkVNfsW7VufPryEcvgrDXqWJXqCgdytoRUdndiYkFx4Qo62wnwJhzj26hj",
  "key18": "5bFYtqDm38B5rh8TQgR3Qq2L7xDTPKzf7jgHx42JMhykapPxWd6Ljat1aD4Cckfse9YLorY79trGbA5cKeUtzyTi",
  "key19": "3mXwRyhbwR1tMvnRt1oCz4cjXPMWz7K64WKQrQ5zbQnM8jziADbPgBTYqBzPJmxWsDSGG7eSPMNNXeUDZoRcD9DA",
  "key20": "2yvw9qrRsEc52tW9cW8Z594CCv1TN7MDfiFk3eScjPkXu4Rwiwzyk99qn2nvb26wHwCTgCvJdQxmcu3DChK7zyef",
  "key21": "48mHbjeX915uYT2VybudiR3MxcPsWPkqEuYgtQ5qLgdfnxRUW1qp6ErMQfrFsmByhEdnTJxKoQQzC35rirRFKRNY",
  "key22": "5ZN8NjZiU9peeKkv54KsKkrGMyybPiwMK6SBJgsQSVicYipRLewrxZimGRvpfzKnZ5YqFiJU27zuFkqxi58prW7f",
  "key23": "4E4wNzzStY188BkkWWy3nSVYpWLZ7b1DUsqnDJr9R5NC177RLEw8hK98R5nYuGkRZ3KBuMYJ8PR5Fnepe6yuXYs2",
  "key24": "5iexMtMEkh1BTAGqNDggyNuvyCXiXXsNwybvn5gMwigTbLivfh4hZwEqZMP8raVL1q1tqCMHhU4kJbmgpPKthUNu",
  "key25": "22GkrZZXMjBUfkAUHv4rSvxB9haqnWdaGH5qCmT89YZx4N8bXjSVk8JthdBCgesAeHBTY42bjCNFr6P8U1kgcT8J",
  "key26": "4QuAwms54cX6uD89BQEdTTHfiohG3QfuHSXXZGxDBA4WRNuAtpH5Cjsjb8fSLUiNi9ca1vofRcT52ikmefkYyCce",
  "key27": "4XNUHAPo7GLoqhFh85LPv2csqCa6VSKwidC2wePfoaixWBPkXzZsZ3Xza88hu9hReuYuwN1d4YpZJKKJjxioxDxh",
  "key28": "4ZcVEQL2Tj6mCQntpfJvW6GhefdYYuYdS6DfbQj8RbRqWjktZN7AKyXd6hpJxv97xc8atorXtmUc2fo19DJcxv8M",
  "key29": "53b4vUE33bjiuBr1DU9eAwXMNM6uoKa1tsiG3RnX5qvyN1T2BcdPEBNcmSQuA4nzqBgch7ZPfghki3PCxzJLmLfE",
  "key30": "41oZG4apnpq7qcPpnrNXP9mhwojkQZ4pmxjDNSxETK23a74H6aX53kN5bDHouaa3Lk2ABjTmzrXFwBeknXmBgtcB",
  "key31": "4pYevRutEadvVV5CgFwsxLHjTuhipf26cdTgspqS7WM45is9FVUP47XdLaoYuTF3NChRa564yYfpQPnSnKwpxNUG",
  "key32": "4DZM3npMTuTTEFnyXR8EskHtWEVPoDHxrgPtMz4UoDckLmNSMR5s9kf9tX7UV499AJPLTUwjBfsv3QLjGaEKF2uS",
  "key33": "55djTefgcqjCrGV651bK92wXvZZW19kH2rFGSo7bXRsGnWWi6PbxeRH7htZGBNoq9zqByA8QaxZ2VtnasBcJZSoN",
  "key34": "3r3cQ7wJF6YKW647BJaukHykteqbinWd9Jfz2TQT8LZe5kgxr87LBr1Z6EuYwcz2vzSacummLM4o1Epy1B8CxBRJ",
  "key35": "KSnCMygP66mdPnB4uCEdhbgWHkKkFuN826ECtNbNKmvC87kSdUWuv3LPpzxJwiP7NFRkZTNYZe6oN6sCriYqr6C",
  "key36": "3oz3ZMsgnFjVGX1Wcwtvgz8pVyPjAqNpyJ1njKjX18asaCLevFkYL3cWjtoau6nLS78ACocrsvizoUuTEnT7LvUM",
  "key37": "uHTg7eHzbP2P95kz99Dx3yCV5Ky3hjrFaZMTaUAVA4HB9owrWzq7z8UxVQM1ivDwSTED5AP4EdDsZ63JZ2hMyp7",
  "key38": "43ibvvdPs8tFD64RnpqDgrio3fMSgoTnZSaEfA9WfgH2qsoie5FJaQU2HL6z8oX8nrGdPZXqP6vSUobiLAsTGaHs",
  "key39": "5YacSNB4DnqN8e87ag9Z3uEuKEoyYUFNgxkpg8dG45FXTRDe6F6u1eeVLRnrcrkdP18FHdm8B2SiA4uXmNxEXMVT",
  "key40": "4VejAEC52uY5tXz7crcfTLguznGjYYF2BndR8gbAxmWDrAjVqx2qP5ZJAfyAoRi2v8HZeRgSp2cadRNZgRABG419",
  "key41": "4VvTda3JbEm4snxRGHEWXdpNAr6PE8d6oeBGE7W8EkJGr4AwjT4WScWhou33RHFLmrCWQRNkhhMYb7gpqi6tzvoS",
  "key42": "4dknNUDgrSH3ftS5YFdtXWVCkdfDhWkfWgxcq5rGh4CG2Ljex2an4enLkVxj8Qon6fuF8s4rHqLG6f1yLyrFJBhZ",
  "key43": "2ef8gEdpxsDLqdHE5Jg2Xq4EUbmfVvVtxb4yYMdtHSgHfygyFqHfb9W1u5CMAhXs4nqWmm4mcNvq4ka4Cdo91gkY",
  "key44": "5jWCoCwEAUBrnMgfQ9hmcdjBzPazMKXFyBV43AyNLJga2DnrpsRRimAQGvc3iG2ZXvHf3vGbftgL56WXUwQmQKrd",
  "key45": "4mYaX4oy5CiL8wAinXDPNN4bvjKepBxxU6duf73yAq8B69EabBLKbRtrPWX3DAFJ5S2H18m4gNN8BqE6LAMeomHY",
  "key46": "2LgZUsjkZqQPBZQYgZiszxpbcGXxsah7AQ17pPSJdPuhvZqyt3uxQUHogE1bafG4yRh2KWdR7vX6g5XLXuo3aFfQ"
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
