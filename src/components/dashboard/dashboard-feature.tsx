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
    "3hSAMN73RNAKdHFsoaeS5wDXpwuBrD8Pj8oPoWMTGwBTgVKHS8cdKMhcuSJ9LuCXdwV2pBALZYrxJHZH4TNZbf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34r7xtb1PzwJZ9MeCfNNdz5PuNhn8cWyKgzxNweEGq7HBpXXP2fche2wyxRj3w558wQfimJ5Gbmjin19kKRWCeyR",
  "key1": "3Pmec4mLGMngdC93v6kj4xbBWEtMqh9wsQmS6cG8G6FrMnt4oFQr6CjPiyVGyacnszmv3Ru71zuYkDoSeXdZbrMv",
  "key2": "8jMK8DEtHa3WBTJcAqB3W2Kfrykv6hujhesZ56mer67pGnfnYjzV2vUw72Zu6RaMacihmmySQB4ucGgpdZnoSTq",
  "key3": "5QMhw6aa9asHhTBLJRdaBJcS4Y7DiGiz5i5dfxGcco69bRGzLCu1gdnEpyov63TwiJKKWWzx8CTmVZornMwNtFJ3",
  "key4": "33WUAXNvx3PKcHxzmBauQJtAGZ2w8m8J5aZVc65KLLVseB5uPZeYGk3wNaurfzkZNQxREUiziPrcHx1kjSJ6vt8z",
  "key5": "qSTJnV8SxPZP1PWdskjqxAyxKBXGrkwEEVRXiKkhKHr6H3ts1vWmUBehbCdCyTYJAPNwA37T4RHXdDYaxRZRKvQ",
  "key6": "5nXptezrv7gQ32pN9masouuDMhRxx8JHhh8a4GBXnA6G9XgDM4Pqcq3cM8ZiGkdK4APRV1v8fJJvWaVdvwHMRHj",
  "key7": "3Rg3EA2NeyRem9cgwo8ufaLwnQwTLbY3Z8DnQHjP6KRenU9k6wh9C8YNpRGTxy9gZ6eEdssicRDFmGcpSGp9YXbn",
  "key8": "2RrgxSyoGDXQn2PcXfTi5CbgRpaCQf7g5V4QYBn4x1wtdA99qv7enFQFc8N6XagSFtrFyx8cqdKVx1qadSr3VEry",
  "key9": "3y94UQLZYKLn2jXKFo2oLvMm16nkdvMpTYvhZJ2ZNz4obEauuwPtRmmFTd1BSvgUiav5rcuxS47HADerBtpPEpWa",
  "key10": "2wi4vGC4U3XzSMTwCTMm4JfU9ZppvNfqRiNmQbHLbndjkG6YF5pSq3nZhAFRAzeYg8hRr1sp9pDYaA5EZoR8ZrsE",
  "key11": "3Hhvykrw9xappEaGV83SGJL3GzwduayT56WUr6Hkgq75ZbUPo2yWSr1Lui8kkVSmg2DhJ6Q2wEEkp9Qv6pfnJYwy",
  "key12": "5ZMAjz1Dt9BfBtGvxfcxo55EKNqBh3gVnqx2E7tPtvLKs5Snu4Js257KN3VYGuquRowZi2NMwxK3uoL9AtfwXAwH",
  "key13": "3iMiPdajtuwEvHz6QkLrbaxe99tkcu9d6gbuurcE7qgSmimtAf3A43MKhmVkzweCFUquymBN5HbY8jtjvVnWwEoD",
  "key14": "2trTTb5SbNe4KZM8vdXzhzYyS31n5mLtftUiAfUffg9qR8SEoMypDExLLKsMVzbZcwSuTUB6qqevWPPv1o8jNQPU",
  "key15": "2CJQTFp1B9wQQ8CCtrJe14sJJ2kdqKqLqjgdEPK9kvPCVyUbCdVTgL6R6mDLZMzYAH3pPMkFjWwWcQ9rqnhCXRmE",
  "key16": "fJWZYCb71GVofmQzvYEVemoEG1jp8T6UuCzyatjWGVw6b7hb36RcsbUTXGymF6Y7CCYKMffxy2FtgKdjHTnP94o",
  "key17": "4wejrKJkshnwE3nwwAe87AVtXqQDSZ9aYHUHYnsyRzJnxa2X4p76KLABeZSFPqohBakbXrgsUwa6tTbVWz7CMm5k",
  "key18": "2UJPwUdyDDLKRBhPCV6yauNJhcHATmdfeJYDJhaWNtHVLoU7CWQdFSE4EWfLSLzghHCZjgLhGTg1JppWUFBwZ5gJ",
  "key19": "3zGqSD55GkqFD38NK2hN896R9fy611Y6iFhtFwF1rmaxUobaWUtRSXq6Cm89qygN4BpghMbv8zboRHNCeVizZRq4",
  "key20": "H2wVYiCHELT2EeUxGifVpiJizTyoYtWmGAxVSwc8CcaVnhFmRmsbLGceR3z4midA5AaKrmwbRfKG6MzsPxJCpk2",
  "key21": "WuaA3FBwWrNUdFJETbMNXWi2RuWySF8eH2bXy2otGkneXoXXJa1VLHG6b73aeC2H2m4FfgxJfFwnTXPnKTDJ25S",
  "key22": "4QQcSsNeW37ELLjc7UQLyDfVhmTw45rMWicyqoWhLBrgh88dFYDCCsCEjb2XyNhLme6uyeXA9qyfWAMNs4zpU7Ge",
  "key23": "5vpDCWkxWNtsBUvKQBbr97BSzAveK8ZYAQhX7Q2cNENKBvxo5V9tRQLpi2LAyt1FHNUSm3jo2z8ewmvjvirW3T1J",
  "key24": "4WpnBTaH3DkYkMX2wNHaWvYeJ257wvkjEPD8hmrYdH6nbBReUEHLESSV4trGtrgW6T6kp2oUiXBHfyJthy9Fpgyz",
  "key25": "4NT2GwVAHtTZc4DQp2xsYGtQ4my37Q9zzXkLDt2VH9AAZNwcFLAkt5aZ9djtWiV3j8HP3tb69iCeAq89PHXiEGm8",
  "key26": "4pnsdknFnSN6JMfCxYoPhZ7BG5gmGTmVTJ1C8RHLSeBYYAamRRu8SyGR199p5nrwTuXpU6JJHDKr55G3fydk4mLG",
  "key27": "3kv9z3jUqYsG7DU9QRtgYAbHv6CTczjKRiWXCreh8TFRQ4AyDunQTNEguqm18vwP92ovZBXCjBeGgLrYP5vPCScw",
  "key28": "5DdDSyD6wUW3zqvstuTVZtLh8t2RsQHvtL8kvg9FYBYRtCdz3zD7f8neuw9X51rvFXFQ9mJwRT4EjvEKGJToJSu4",
  "key29": "2QPecnVLLojGV9HmiBV64fipYxvCFZfZm9A45pAtx7NbyGWJuY3tBV95hqQNkf23t4RhTjDeyrG88ATXv31Tz5eq",
  "key30": "XmitzmTut4xcwsnBuJpzyNkm5KQ8aAEPwP736aCF2b5HfucpQ3kGpbnD3DXR4pbvjwaxUSbhZixzfJ1D55Tb7k8",
  "key31": "YXPCHT1a73LfXtVfRnbuWTdARhqG6GgTfaXweYskiWEyEC546zfUoz742PK6ojBYBF5zDu7aQPbs3edY2D8PXtB",
  "key32": "5mM2VnJ1xyGXcwya3MARNMdZhWKGkGbsJXQoYxUKCnZEwPD4zN12fMeiQ7ApzEdRbNpLKAVfwhUJE2SRHuNPakh4",
  "key33": "4GwJSa7RMvhga3Zt9YeWDTZj6wsiNcLVbF7m9Ff2rDSxYWnBw9391XGdCCHHKDnxnfxCWcWDbx2VCY37BabuyDp",
  "key34": "4k4hddx3m8QdNaoCrosad5j8hWWW7kfRT5PCXFPmmZ6W3YHoCmJYFHGw1UYSkuvgrdAGogtm9q31W8uovTkUY7D8",
  "key35": "H8fM1keNG1Jj3FyhJx3QQ4ai6CdLa2KBgz3RMkpPEpCTevDfhJ6wDgWkH8YAuWkEYcBNmtqCYNcbLxCCcRGWFYC",
  "key36": "FK9eqZ9gQ4R2duUXyc3WkPLippSUaZ3TUnJ5hu9iv8Kjn1gVGGbT8sQfcCaeftBXKKAcpJLz76P566TA8JaBa2K",
  "key37": "4KRYY7R7fZgAAt8DqE26o5dwZZBu6TYq94v6rGh8kbGAgXYnDSHtGu8iEqqPWmGyqTDwNbkPFgfrLczCt2Z11XXN",
  "key38": "3gSEyTZXWAZYbj4emCjB6pEabB49BavTT7xdcFWCM5QzusVyVZ2MHZ9CJx8cPkGrWNfPcPqCvXjq5CoYHB3G1XuJ",
  "key39": "5YDj97DGhFHfUK1BUY3cPF4wAUALJdru3Td9EQCfL4GwDvsKe6PSPbNzVWKoFKN299GNiE5xcQHxa1G5J6d9rei5",
  "key40": "26CEH2sCV5hBmA5GaJuTjMuTCJTHP3dHhf7o3fuS7GU2busPGEb3h7eQJuU3cudxzj2fGvHnKTWZX2cJJyYegqaU",
  "key41": "2YniPBEoLoHbNZ1wHZP51PoZg7LG4f2TFG7nw99SQJLcaTMhE3H5HCVRKDwZLXwtd2AF6u3VwqVcSbAMBerwiMSY",
  "key42": "3PEHVWobMknrobiZtx3ppWZUedpHavx2EGUx4ZsANyG6ZWueocFjwMKD2tXoXUTsAGCGHfxdtHjqGkFjYwrDQKGZ"
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
