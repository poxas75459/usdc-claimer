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
    "4A5FE4SC6zgTjoEd37324iosEWLbAb4Hz458yqsEt2DRaSg25VUFQx9nk1S4LDjfvtbZpJ5H1G8Lp1G9SkGWMcrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8m8QNRsJkw2sj8JHSu1y12dWL61L3ozMYu9HWefDunvvnAyVqmvp7XpFGXbigYhnpAsSgBgdPctF9TwQxs5vrNW",
  "key1": "4PYF8vphq2c68HMjwbkALbiWT8e5nBAQc4GSh1hpv37W25PenA2zq5dUZK2RxhWrfMAUzuWwDNeyfcB7Wz1YQnNK",
  "key2": "4KTRSe7YXdDDNu39vHYU7C49JnqDAfz2WmyKa9trHvrakY7mc6X1apK3Ap3BCZfdcTvYPr1NMMiiBpfEGWfjgJNX",
  "key3": "4Quq2kX97bm4VuLxQnWvwsy9Y2z9npNbGJ1cg1xoEE8aj4oPeeDwGbLQCXVWFfii9CvT7MBGjvurfPphQ1X3fM3n",
  "key4": "5rh6fzByWoCc2ifL8eQ7Qj2RVNvzyiokNjFk47GUSDW3qVjZG8hdtoF59daznGq19QzyDenGh6Vm4VSedWn44AMB",
  "key5": "48NeRwEZGYjyDadtVb9CsuUM6mgy1NFNNUYuY4LX3VWNt6ptaSBjzVw3qKbMJfdJXr729GHhqEeH1N1DrYefjFee",
  "key6": "35kEJtGjH7PbTKCEJ2x2GL41eWcj4Ag52tSDPyuDYMaLBVEohQZeydY1HqvVRFuZeudd4zSB1kvw1Kvx8fJpwpH2",
  "key7": "dxnzidgG9MLiqhFbTU1KPRoUzGCA2ztyaYJP8b4j3Z1T3fSKzTUJAT9nWreRfTfr7ncRdX2KQpPQfM31nTqhSEB",
  "key8": "5Mbb3Ct7ns9CMG7p8zwBxFctQGEVgL6kYrFDGtR7ZykN8LYLe7MJpQJ2fYe8VxbPwe18JZp7qmvDwVVwD8ceKXeK",
  "key9": "3fFvnwEM1d8E9CcH75fvbbQskNsWddt6Bt8t4b7rudtE3JmUQ74KKxwG5c57FTiYFSoCFxHG7KrjWQKjpEnxcXYx",
  "key10": "3PnSHH91v8qoNp7ZAEutWD2cnhrJqnufZXuAfJy6Ph9Lv3kB95TxQQpu32DMKkUammd8Fum1nRvf5ozPAV3SWeC3",
  "key11": "5cE7TPdBXDTruMAF6x2L3r5XujhGQ6C3Sxaapu5eTaG2SE4CKnMiLUTTgw7YjtrN8z28DD64smCgQxNh29qitdo2",
  "key12": "3D9oz9VyYx4VStRZhQYqSL5zDhELaRNHkGfo3gXBbs9VW7dBMt1wmKadXsPbkXcvxMh8RiRCBPBvwjZqYm8HSCyz",
  "key13": "4koYhsbQU9hGd28X5RYCR6F882iRpU2FmqTEfgRQ9Lh7cYGBEL6LPHBzbZ42UPmRptH9mm4ms4Zdadmauv2CTA33",
  "key14": "4KWFrTYtJvf27tnHU1UjbdUd7o81NgtL8iMGfrZsss4hidttob3a8MUzYPTanjmsYUZfvkjHR9RgiwXiwrQSPNLQ",
  "key15": "2qTAKfU15YEMVPH1NXUVj9ae9wkD7KKAUAtmdV2avXDBSxb3LT18HB3RmKrrizyCDvdk36PfVK5k3vdDobdxH5Lt",
  "key16": "kJwWxWkYrgTeQVs8CrWaQQeBkmVBccnNi1QaRbKxZtMV9pspHs4TzXP8wgBnK2wXDoUtg4FgEBWw4DZMe2Yfj3D",
  "key17": "24fUraWHRLqfoW7icjGzjD91KCwSnjjn3thqCXh3wdJHZzWfydrjLsPjKmn99uZdTu99Bpu8LLbb15PUDHQ5DN49",
  "key18": "27kG8g9X9AAxmCVz5q6gvvM8uQierDHBUAbDH5j1n7TEVgKnpRu8UdYSTHnhxQDzCedN62H6iZyfFWNpZ7bRECqt",
  "key19": "5nPGY27hq9Y3ahE6w8Fgb1tWJ1HHWMfZS99uDZhTvmLw6LmgkTQBRQqTvNS297Es528Pex7PbGcCUgrwcZ5SJsnm",
  "key20": "aRphEwKqToQRNCcFHeDHQGmhtmT5tm9AEryEqGmTFM7euj4V2JvVNYfKb73aXety8ahvDY6SN34WE1BZu5sQSDW",
  "key21": "4BmT9MvUQkbZZqwm21kpvjbuxCa1t5owLcDZXjFvvajpTAhtDhahQvwPqnmCVNrNKckg5bbEnUD2Myu26sVBtSTz",
  "key22": "4mo5UmZHymhDMDvv5b87d4AiJGcmQJVWkCBdrciGN38zfSyLQUd9LexXtbVxmoNx9fCdPjonp9XcGUsBqJMBWGJm",
  "key23": "U2FXMPdLJxAMkAxEEZsV56jZqLZxRS8QvWdnyCzS6B3F8Z1L6w7B7RUNaFgqavHyCWX7v91Kx2VMrqJHGwwQbo3",
  "key24": "52ymx3SDFPSp14dhr7FGBCe6jCe8jTiPqMPbqUsgsACasgvCkqZ38AGd7RC34RGRpUjvhhXNwn4DW9Hf1K7qQRoz",
  "key25": "31RnuPDFcnAX6DmKH1n6YN6GMCHdDEjzeEsF5B6ziLJoRv28y6mXpiopc7L9ogLHNmhLcUvE5ovbHxtz9A5XMQZp",
  "key26": "3BEexp3StbxZ9bwe82e5dSvXBZCXribfEFTSYaCoxmWUzfmv8eib1Fh6pzUpSPtNgJkk9zn2capujcKZtPHBudHw",
  "key27": "mjpxGD8Qbri4oqw7TtuCjzF8s9w1YfkayuX7bhj3m88KeDDRTHDGzBYtWGk63QK8gHAjnhUvCQCQNUoV3VrSbBi",
  "key28": "Z7pb2WC8584XTevTbtiH29YcgpfXSBgR1TWqXxAnUSxBTDUuKfoPqZUvrEc4e6YrpRCayfvcUPTZ6hV7CeW9dj5",
  "key29": "3jHtqKTCBAz7nrM9z7HLFZQjtfmTQfYKBrgme7WWSaDExEZD53G5Wh3g5MU1d84yjH8osn4VfVnbRquTQPPnTPxo",
  "key30": "2JXPSZ1h1K6hUsAujxkqc1UhH8yaVGLTckY5iYkavPzaawutCnGhp4xearCUhB9ffqTzyf8vZVbFrJfpGvayDQ8n",
  "key31": "3FiXAw3mEHH6oyFmwLGPZT8iv7sM1CiR5Qh5bYarr6PAD8rdk65X5Y7aYER7MDfxdcMDZPRJsWxK1SM8wxVCpeDA",
  "key32": "hfbDG6m95xiNBdtnbNFeNwDj8xHu7aK83EQ9MeopA6BHhgKQQ9rcWyj2zVLKmqBvbhXTrNxkFEWb3G9EmtTA4ip",
  "key33": "TCGoqxAjWfqXQJcf7w64Zo6JpchBWNnQ3ff7C6sSHDSy1aBDRCDKqzP9tUJrSdHrbVterizgAnSUP6zTf6EeScQ",
  "key34": "5UHiV3tY8u3KnvfsjR2dURXetqqBx5ooe9p5dMnwGJVT1DwN9QqPEJSBX1A9UHmqh5Ua6Sjvrphc6AH4ieS9NR2X",
  "key35": "3i13yPh3Fs2RiGEYFMDv8gqXXtjortpLJnitpoDSkNHo1JX6yzdn91rmmc62zHKPJu1weHyqie76vq3AaW3s6SJf",
  "key36": "4t2cFXdyPrRB1sdHADU5CBqQ2SMmK3LuZ3wauYGkdFtEaovYgUqRa3xzchpQWkxtSZnVDn6PmcmL442sJVM63G9s",
  "key37": "2KJXJ16YmYWQuh1Fs3UdJE2KvYCphsDMPJ7FF9TVeYSrunqpBMLYPjjeCwEnXd89ukJjyjEcPuZVUFSwtP4STCNH",
  "key38": "3qrwNSCz5xYVRc6gtDyJfsqaxBxhAr5th22uL8iNGpRprYhrKpNJTmeF9tStqJSwLQSgN12ksX7MiKWdMh1rRgMz",
  "key39": "2xPDJybr3XkN4iUp6pvDkfy31uFcFwhLNPFktLTdE7UN7EuAFrYb2R49nPg1hRjv1isj8PcKszev63CM7TpMg5V9",
  "key40": "3CESo4HgGmFEdzicbcukzSb6LhNG3xdRhpAremJyA5uFzemQdUu1Rt6TvTyEdAzDNCJYBSTy6dJn8vH8xpVWYGuH",
  "key41": "4nHP1F4Tr8nagFtyVWjPBGdEjd9XDwR8miuhvw8z9ws6hsydS4SociuBpwzkN5ryxugy7fxkonUbTbCRbgaGUuSh",
  "key42": "67AyJuL565C4PAj2dcjMLwddKXpryXsWqoxg3g8CbBBtQYGWcUBF7FMkGnwUUqtza3vFPEEv58LbNVnpiCZ9Mmqy"
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
