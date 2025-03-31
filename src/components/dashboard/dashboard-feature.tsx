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
    "4RkKiYWFHU1XFzCZvyywiRigGg7MhTCXF4go9bDuwe9Gg92fSoNh3JXqVSwxomD1FvebcAnDT8tUPk9AV2XPsV3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FvG7v2EEpQu2u8r773JbEwwu2nt4tmXhv4i8sqGr5KmsAto6L5HshCY4HEvvk1RUGLSRnMQhgp4R5kCrY3iy5VQ",
  "key1": "2gFo9p6UkiwEJRepNjBA93CEAACsMgaMNHsC5im1H4yARNv9xCSjzE9QEvPnAjMc5ifDFceAQepu1h2rYT3sSL8u",
  "key2": "rAK38ZWwkXC2k9UEZjAbTu7hKngANtbyRd4Rxumu4w8Xr3AgF3V3jZxqdFWQUiz2caX6tynF4s67KHe8U9nFtDo",
  "key3": "3DUxc5gm47Kc39LSKhSVe7C8WHoBYZwCp8PtZx8yikBcRVaUe2YEGg3bHjcZmp98xHXQjVmwUmWQJHrYSAZ1w8Z4",
  "key4": "vc8WaNbLYS8J4DtbW2ZbSk4GL2qqfcqbTAobJw7KNkYpUQbDsuDQUn1Ym2fP1yqB8GvJZm1PgLQyoRNd7HcthhJ",
  "key5": "5szzwGNf3uWxBvAc694qpayhW4a6kUHQhibLpLp12Kr8w3qkayHHhkZ8wb8Pj2dMJcSjp392inS6NyBcvT8FPQiU",
  "key6": "5MRCu3SvtP1ALZioX5msYtZAjBP1odxhvnwtisrJ6kixXEo1o3PP3gN2nBvGCyDhsSBUh4NkTEgNzts4Lq1Weom5",
  "key7": "4ZdLkfenLk7jfer9gVot5QXhxWgqYzkBqyMdARF6zR52DRZ1J2hNjMnNWSemq37y7GJ8D1rQn8DktNd6iPZ57G4m",
  "key8": "5oxpawJjYp3XevmVk5CmGc2LdNYGFbqesJnD7KAtRu38SSxfDSwCejRvDNre9d5x2htyfUJ6XZFArmNaTW7jg1eQ",
  "key9": "vy9dPrPazj3kvS5TviCGLVG8KX8kCAmcXH28kABBUHR83WnCp47boWe8mc9nnfck3Rx1KbBYN8cPLKZCjLS1Skn",
  "key10": "2jGPr36ueAa7QyTFAaWPDYwV1xx8wJrtvenjXnyDSDrckuFJ8GcdJNrh3KNY5SbxJRugYw1qtdHgwy9REvX71X4k",
  "key11": "4u6a31LGYUEb1ofrUtDwWzvPu1wmi8VoMCRaQUjugZzDtLmyfoUroSFT4yaZai1kEKMUsRVsSoq5MTTwKkWZoAsa",
  "key12": "3T5nVUvUJ8TRGu8orQ6wwapEcTwmB2kzQxbJnoTzHEWi7Hg1iusafqi5ZL7beYmt3Nhyx8gWXvwDPSQcB4HBhZnx",
  "key13": "4xWzgdwrQUDmsCHvCxRx8NPRsGnMmCWgGcQPXbk3xuyoYvLmGrKmbbSe2HXH3sNttZ7wz76aooMTZvVXfzQCQhxG",
  "key14": "2TY9BMy8Ao6s2kEwYZ761ehjUn1R5o35AhHV5gV7gGb3BfsBuvzvEvKmGidjgukArKm71a32uF8UQ6gbgEpGZKBQ",
  "key15": "3WFqhktKPcGdSRzRncAxmCHtUD5AayhEmYzQnA42EVmS1NPM4XGUz3SLVotpfvLNpvGU33cBCu6SM4rPBDH2L47u",
  "key16": "2Y9njpM4kjLMvnh7JGxqzi4NeWAefpB6Wm1qNTdxahZcXzT725eQo2Sp2SVtH7Y9YoDuJiUUFys35Fpoa6THpa3U",
  "key17": "4bFKMUAApp1T6ecBXr9C8LWjPT3EF8btDDLFsiNxkKxFxwg3nrhXBQLiX5PxQGcVyrqM6JSSnCtQW4gTUj5RbN8c",
  "key18": "svy3EJ9Yzz1UjmkWnUecNnm88LRjX4m4t3tGkwGpHqzHYUmrkH1Lb5tfiTFSNYHNKhbyN9hzvUQeKmnTYu6Dko6",
  "key19": "3zcN1vyyJ8cbSnJ84GNhaQFD7jBtUYLGn3wGD8gU1Ys5L6BMJQVzeZH6GcDV4ToAvzjdYk1y6x5wu2RCgxC69yGE",
  "key20": "5z2WPiecb6UjsJWcijHz73jiB77KvbfNqbCArZw1hhYmCCoev1KzEpjot4cbnBCpWZybHesGDYR1ftD1cxPfN7ZA",
  "key21": "2HSiUY4fxYrRPVASG6KxkqbE3FQnJnezyqTwf4Zh8fqZ9iFtRaHTDQHBZmDBJLjbD9DK6aB3nAk389jgTioGpSL1",
  "key22": "26SFfKg5wjVv8zAL9vo2736rpabyVvrPvoqg61YUXwrTQg1qyqm74uoUKdzNBVZ5GiumJjF9ynoXhuiormcSg3FN",
  "key23": "4B5zTT5vusHL5wBnEcyzVxFZk2WHwVcn3UzHjJ8i2Lqd1w7KMUghcphvw3Xad2dtRuZpkk6ps343BLABzj5qoBFw",
  "key24": "4Hq4GJPSDA8gkS1h1o2Ky8Dajr2EXeRMUuV1W2WVxpgB9zW2MNwvH2sT4f4QSZNykMM2aH4tvNShfaWCGSUpcTsW",
  "key25": "216f4JA9yCFoQBKkKr55xELsaUrnSEo4zWDrRMuoK7mRjwLcg7PWLBEPA9wioujjHt1croAd9kjjVNYt2KmtJhv8",
  "key26": "3JBH7VYS8GjUPYKEBNzVXCKxBmBNbhDd8JJgzhP8CnStuH8ifniuAWNUuv95czqbE4T7B9S7YdkhFD4qmF5mbDtz",
  "key27": "3KJ8wFdQzcGGKEiW6Jk7Jeso64ZnLuLDPCLYtn8z7GGVtguFxHWZHcDPFqqt6C9goFMpFyBm1i52ewUTswRbZ5S4",
  "key28": "3Vt8VVPSWprFpajzNYw9PnXv2fJSaGS3iYBNmXzWZR9Pi2mp6nLgPBZRoT6eoZCjom23ZjqpZ4BScGLEbnfFeb4H",
  "key29": "2GD5ePBDkjN9BcxVwtsJfpKXDGk8jDj1wAwbTVWftZhG7ZyocfmyFQbiR8ZNFAXDq7MnNaaNEQjMeJXiYskjrWVd",
  "key30": "2XPDHtm44JqJxzYqbDQqunj1TyPh8zQvcAZ6fU1NbrYWszFEvZYJx78o53mjAU4RsVeCt1epXzwXgZX9ygUwMCfz",
  "key31": "61ZY4RnfMx7K79hrTYYxWUk9aS2W4S4XdzE9QMWAfS8iezvWrcvVdaRa3odfT4TvP7MF9thSGJ9wCcw8gYoWFSHB",
  "key32": "4K1mRh1csTCVaM5GEKFBnKX2n2mLbmQiEcWu4G8n4gXDxHzGkne3BN1dx7aJMHRTBXFHvfovhb34m9kD3qRUNFLR",
  "key33": "2R4p56PEcg6sMPmKrGpGVety526ch83zrw3ch1ZqSWnYwuse1hiigepJUwW7yM3qhD95gZurxYa1M9wLwgQtm4qx",
  "key34": "3Vp82Zjdz627so8CLPDgCsSYZC6f6EZTw8iHxBGqEVWrm3GBSAcyPefVQv83paPxqDgdnUgtEVCxvaVShHWLCgbo",
  "key35": "67QjoAYG36HRnzVP2aJyXpEtRFywNBgcGy9Kdwn7TvXejgNmB95qqmGBo8Z4NabkqJwHwy7txUCCd1Bznh33iTpp",
  "key36": "2qxn1HJA6pzRFfEMY2AN89F5tNPyD5s71eoYuc2HCPCJ9kym9c2BPrjcNpMQibHmPpuaWtxRw8GZArBAoAaCF3fQ",
  "key37": "4KQnAYGVfnNMv7bLNJ2TG989HCyu7UvwrPBvAQbYrEpAn8s1L1diUC6rSUxekFSqwBzQuyFfzVPpLCfs6KmnptQv",
  "key38": "4EnroqeX4DzKnupFftEmVg3TxmC1ZTsQLdvTxCHFKLxMq4UN7WkjG9J7Pje7W5yJTMiQL3kf2CvKYV9yspRNvqxJ",
  "key39": "5v9h5tC3ksPEZYZnjrvgBtSpvZSoA2hcTMZpn6LbbqswTZd5HfUdzZU8ULvDKTHWwaAWNDrU3gxBFk3VRazNFJfw",
  "key40": "4fCUEYHV1gToaghLm2PtvCsyGiYVxSRJEXDuir1HTDFr6eB6ET1b2JD1J9TdJwcUXSqz31xjsFnXfckNEYCssBcB",
  "key41": "4kWpia41DWJr5W1v6pN4cXZEKXJUjavDwYpPaPNUjvMq5rnQDT7aHkCCxLvNVoCBqvfqZmKoDH9pu3McPVgcjSED",
  "key42": "3JjUUxpxuUUC1Add1afAbV28CeSokGxgvfhXW8fUYAqMPhZVBShMC1ocQTDsauRzff7Xy7VRVivRJdnwYijsxC5A",
  "key43": "3w2DHJ48PwDMS9TTq1rvWe8eU52MLfDZ4Y65vpfJgJhQ9PBZeFhXzKaYVCgUJD51UumaRFTPJjYroE7cZeZWXdpc"
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
