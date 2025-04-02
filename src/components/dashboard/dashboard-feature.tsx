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
    "4kkwHG95qC3aJPHHgPqBdPxefmWPyEFtLRWqPYd7LEpUygDPo2DJoP7uNfUv148n1PUqu6cn5NmNVEZ6hRF9k6s4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22fRmKtjqP3bHCCjYkLnVAGzLc7eKzJQdv1nA2zbHnyyd7Zj7Mks9RZfmgmCL19c9uA7nJa57XAzFs67v8ftRrwx",
  "key1": "5B3pJvhpZe7hoNP4vEAau24WXVgRcn4TYfQsowkFQF99tZ6QixJbcp33meQK3RmU1SHGjRmZAEGaW587jMca1Gtc",
  "key2": "iNPkRZuaeFwyoCCfK2mvnoUq3t2mh1opuLgUkPZfmDuNK8SWHJvXujLyA4NDBfrsTCDZdnMr3DCxjEV7RxYDkzk",
  "key3": "4V4cnvS349pjAxdeZekRwFSUb26CLQkytic4p7JjiPs4eypYyTjqL55wZUoWy646pA98UgvTCtTFxMCu8357nNs9",
  "key4": "3bbwnAa27tBEqF6eVv184vxJr4uPeEoV4KJxXxHQbc7DLRtBs3ceXbNk4G1CvoueYs7LBvZAahL5YzzH9MSc5WvN",
  "key5": "5yxvX2ZpQZTQXfnZBdR71MNEQKkdgpqbecCRvBS3UAr4jLbhxPcxstKnEbjHR1FctSh5fbNujWEZ6Vh68sqFbka5",
  "key6": "5cXfzxJovTzqyCeaU5gYePDrPR5d7vTDMy9o86vKTo4YwmnbMrzC3wa11Q588XTQ3wKX6xjNDoGEGG1pNvCt7tpz",
  "key7": "6JgyQi68WVQwHeeYMmUp1SZnS727wbSAiYbuJHMcFxe328BCAtKW3cV8ZJH7GQgWe6sQFvgAkrKyfTycoikJULb",
  "key8": "45fJxEZV3BYMHcESMe6gHRcQo1kY4aCP2mHZ8eraunVxamA8GMQEAan8fHaD3ZRgDiTVxiAkPNHLPqSWhCW3fpmw",
  "key9": "4dFyLTbGo7pf42JW5qmcMjYPmsG23F2Mpb9g7vhoAkSkQmXnsX1TED3PC99ZEG9P6s1mhUakwwjjkEsqeMrKVVo9",
  "key10": "jynjHz9qYnnwuKTJTTTG1oTVRZTbDYSbuV7XxiN67X52YnovmP2YWJDs8q4Q1Amog9PB7k4KbT5Txs2WiP6cDXN",
  "key11": "2i3PdqwFXDAmKUoppXngiBqoJmfCmHRDHE7XfqgP5AfsFvSaPv9F7v5mYNjCQvHrAkWsaCBvKQwvbDKSBxdWN9Xu",
  "key12": "22w6BsyR9WEn6WEd4wrJsLtCoT88736D98XRh1jSTTPPNTt7ctdqSXkU7beqDNNHdYTSMK1gMcnR78pd2brsfPDL",
  "key13": "55FMSkwAQsEffrMdfYCdGfKGqT1vpEaZvdfNNRwBEGoWhkUDMq1E1SshgfoTxUkFcJCd1Uj29wPwmqwr1wBzDGxY",
  "key14": "KZj9j7tfetyozM4a4mXxwBQQKEYFP3opu6WogDDW66zPZuxF7TEKiFmDNY1EXfh8pfgfcDMCM4WMEiBrY5q4sbN",
  "key15": "3ncXbLG1aJDBq5r7wHkrtS3UNrikYjjukZfaihm2ZT465y2JaSpYUoU8y2JjT7WTmeqJj78oUoG4469JDU98dSxv",
  "key16": "FfB51h3BqMcKu7izhY6FtyXdREwkJTWHLHfRjJVGrLocuEi79CgzYtycvUbA8Nuvk3h5yNd1TPVe5DHPyZb3xSX",
  "key17": "64oAu7JijiKFfsAcjdWbekiZdT17CZLed3g3qtLvYykqfsMaid6oqaVtcoPjMJuASookxShwWrhz1XjHVwqp6VLM",
  "key18": "3aKmL8qDkEPwCrXaHDMDbgV3smCCgdT4FBCDsKFGts9YoRqGjJXFdkyw2MhXeH98bmbnjvPR8hDtvN7JG6AyvpNe",
  "key19": "3BVXePbcsLxTNXfbpi7wLxnfT26DXGCQANaFufyp11yyh4W3qM3LrYJkM4bCqRM6m495QMbWwMnR3b4D8A4zuZd1",
  "key20": "58ffCxiMtq98HkXWaEsiS5M159ccpLmcbmhMC11CRMdUkhqAmYTjKrDfuBchGGefYLFVdwr5YDD9oPfh8HZHvkgU",
  "key21": "5Gn7AUozFeUCbGXFgUJG75Qrn4BXd8F77pWBoXUyuUmaq9m4XxswGUFSoseuSwYxR1rP8GZ4Ri1JbdXU9a11NmJE",
  "key22": "34PtojKQuqZmDydnUA9Wc6tWQfLquHc9FukaKMDhF1pygj1BnA1engEpLd1i5vBGxCNjtheZRLxp9rZrbXP9qf1F",
  "key23": "29QPmSxyt327JGMDSQ1fZRW62djPKePUz5qQus8ATrtrnpKUwUBUWxiHvN9QrAxP6kSq9KftsNUvm5QxZvM7KrUD",
  "key24": "4qewRdn66y88BSWn8r1H5E6jDdqE1AD4pRaRqawz1JADjLWftWJzcKW7a4dTKjC9ZRQ4gRVCA94C3tbfBfmfPpLc",
  "key25": "2LJwGhnByCQCx1jDApfLd1BDDdBqbEvAr6U6Fty1MVLn66bSdqt4kzCdqhb9Cz9iuCGZNDGoLxtGR5ZjVJZbHvoP",
  "key26": "33qSSfL7UzWAH1ri1kFGJ2QjFA31oBSm8zb5Si4tAPtkGAWhQEV1htp6SwzFE7vgELMQERUsWJTu5SfsSboXZMVD",
  "key27": "duj1RoKo3N6EtBxwpM1Gj9L7Z1k7NJEfPHbwMoZy5rnwVmiazK1fDKVgdp1dYauUx7uhr31ZppkGLDmXtjHkR7j",
  "key28": "63e4SR5cEdkr8tnPx6e41LEZMJ6AwmaBWyKrebTP1MRWJMGngiJmbffSDXpRdBaHAVFV6FHLrwpj5hwiGJYfVY7t",
  "key29": "2iJsZ96Dp6jvAhZ7r5EayTJY4AQ2knY37mrbxecv79xFBD9uqdRrq5wt1VGQ5AxrHcbC9UQGxzbZWBiMcr4KhoUL",
  "key30": "3fXha5sC6pPB1vLnT5myoJw52vviQ81xKTGcBvkjB22LSzYLtihD8w8FvwKQiaDUhLYqiUb5oaDVFNbEpHLVpMUd",
  "key31": "3AGfjYpUddaTBwnCzAMxa8xYeeLKq8JA7TAxyBdCtwQBjiCpjo9y7XZEF1e3XtYhuLjDHtRxCM4D95nkWotv6qs2",
  "key32": "4jmzvvPWxhcGye9xXQRB9enfw7d5rqvr5MFzK2xS9KCmaJFDGCBC4GrzV8XyhsqCuctJpjdy9WdRuCgBcRfHXeGB",
  "key33": "UWZBQ55NXjicadB3Hf7vbp7QDUJzng1hivtyFDxH4qY7j5mSNQShHrqB4DuHYSYZzUmqVe2norSxuaKTbNKbGz5",
  "key34": "5ytJcay6cLW3eZZ4VRDsPm1WmwwFoMC4b5jensJn5iJpLkuPN1sfKxUCkYxf6DQ9M7XAfqKtntD9kTynbtHDsYf",
  "key35": "5ZFXzzHxnckV4apYZnua2byBZN3w9qKs7do1LK3Sta2z4GZ1xPt4o2WU5fFKcGna3xcvVxnFPKqL12PbueyzSH96",
  "key36": "X63Cj99myNzK1f7ggMkUJkVaXY8bMukdbroBevd381LVHjWvzHx2XQQSgrsu12eaRUSxzwpF5zT5JpScJWRBbBx",
  "key37": "2wTNfMdbuu2pch9q5fMj8E5gYZ4LpipGZgWfAmMdSF39ZLN53FUt7M4rKL56N3dxuvXYkXCo3HgmjeEz9j94vutp",
  "key38": "5xoE5sGKZ6s8Q7mBUfGbCo6PHjKW5wFoiDmBLCTZUoTjyHcW69JFmhesAk86uPsJGY4Z4yMXMRs9SR934KZ5ZEaR",
  "key39": "21Hb4SJgjqNxQxtBg7CiRNkS7LR5BK1PXoEX7MGUdQj42bXwotbs9CDnQcEcYkN34yjpPDRuZ8hvCktj5yakFLGU",
  "key40": "37vHCroQMPrD8XCiBWCbxpgYeeuQVxoVitnTR87uM8Hr6qVwmuYPuaRGPewVoy4df7u6ssSRteV9WgXmbLUhKZ7",
  "key41": "QLyg5kUHoR6gawobu9ZUscqAdKr2c81o7fSKYywG1NF1oNGwBw7q7pdJL5hRegCiNhbd32KwqHkLbw2dsofQmi6",
  "key42": "wasgAA6j7RgC2LikGtMGQHXfdHV9hbAw8BVsBpKMA55sAaDrgQFmraz28MQujbuTEwmvkxjk5yhU4CW5X3wpa3j"
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
