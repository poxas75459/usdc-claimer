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
    "G1q76hEMWDCfwuXfHvFE3SUkA4hee7BUL31QE9ufd7HNZcPzYedBxqyp7vVj4YhRaMi2SJRKmjVkvx7rtDPNbLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kP3hWbuesNPib9GVrSniFcSNZRhXsGU5cBwoLRJ2KytPVNwnBEun8SHaaSPBgYa9QxQPyT3tm4vf2o48hFommPz",
  "key1": "4NGcADvxFqozHxkjV21eag8EC6x44ikdZM3bER8XnjfhsQJrmr8zAMfqbVjgKTj5ZWWCbtF5LoBzniqHpbLJwo1c",
  "key2": "54T3gZNP9vikQmzyRYMhs4wXEcFL9iA1oTFXrAHVJ2GjfTpzoje8ZBSHQ2cVAQ5NT24snSxax84XGBKfwbWhps6A",
  "key3": "vkKs2D7RT7sT4FjN8nm85SdgCLAqAtfvBqHEVr7pwm4gT38tMgH7tLHpmJzukeHSG9zShFhgF3mxBHPkDR26idE",
  "key4": "5J4yUKHWE8MP1wwXp8ZTEzJCyAB1YjSmFdESpdwRTGZ9Kdpug24ar6qL2Ui15mpT22FznBKHpdFTZBiKjDqyaGoc",
  "key5": "5ZtGHyiWYzuHMCYMWhRhfYF83SsGNHnB8uBmcQsWmucCKu6LPjLdx4UL5W9f9wSNKjb2nxXYDxfjVk28x8Wow8kh",
  "key6": "53tNMdgRLdfwEReGeQ6jGcmfEVkXw33ycXMjkwwWzAZ7HWjH99TFh4UHLa3WcSdkkozM1rYFYZuczvsy2JHtMAMp",
  "key7": "46AS529N5KSErHei3h5C2hLckC8VBXnTudZnWawYkVdiFSZoeCesrhutzJ6czZzhsA2LnAG6bXWmuimN5WwSyr29",
  "key8": "67KVBvfcqzXcrk2BzsXNxMv8ZYad7SNKaZBbkccTRtdxmevJ9bAygUiEdTgdgjvCisHmEBRq4XqA8rFm3xZFTMh5",
  "key9": "2nDimPWgEJJfHU6oPRDLVgybvgBwQWJQ1YEbRAaHFxy2UX3BDLjhK61KmwTHrjP1Dmovvr6KCT1xuTuyuPhhdHa2",
  "key10": "22z4diNhiyxkpDXBjZUsq3yvydiVmAx3oczB7amoDuRY1bUvkwPNpDkXjU9pGXCEvEb5aho7jGmHp9ZFHeoYLdkN",
  "key11": "3r2PvY7M51eLK8EAnQ8bunCWCnMiGkhjW7rBSmWGWZKraj1SjgciUs33z9TYBehwKxXzHCoFHZF4UTAkhEXu9yrM",
  "key12": "569DSv83fPa2uZD1c1G1TyVAJBZmszqj8PxS6oBvhYLRXmkE6GFgs9kawcTkUk8wkgEzQoM1GuAP4DsHEoZCXuXE",
  "key13": "5aoNM1QS78w4mSdKCn8JSrt15hKthbLdsQNU1Lc21CM62FwNDapPsByCLmGNCWH821bf7TZzsUwYRKGVvV1VE8Cz",
  "key14": "2HkRcTBZFvUniVMaFcSfEEjD5A7gnSchz8XHyxLm2ECf5ZM1ifGaxHpmnLazZLG3pAXmtpX51oQpC79CMiwr21i7",
  "key15": "2wrm1dQ6kUdBePbCi2Q2w3hW4YaEWiab3bstxtdSPUGBLdnxMe2zCJjZiUpKibscNxLeD37X1dRLeedwHXnbvtB2",
  "key16": "5sx8snzcmzkEEFwD4Fmf1cLry9WaFuZ6PYnNnh6sDTckpQMgkUS5Ap2c281j7Tod8MemeVnoB3ozgmbEd4jDxjAg",
  "key17": "4crE3GPBwoiugpT5fcqFkxgtGraFCnPbEsaJ45PoqZfHbhSrPZeUteCC5xx1TtUJbEd5gBfcYrWJhPzCEg1Z3ZVw",
  "key18": "4h3xpG7qGCYuCjdFZW68wzhiz6s6tRgbptmGWKyAV9WkGbV33LNe7BEjWMcbPFRzer3tXXztLFiZxaaQjCpyq32v",
  "key19": "2vVyQMpXjivKV2K4qzGUysKh8Z87b9TdQgtApBPCnM7g2WU9Pc7AxzP3s6v6Tf9wZ1pz4ZbRkDimc1M3s9mDbuYB",
  "key20": "e6SinwAXWqCusyKRc49KTU8RmxkV6JzHDxSjtcJntxPSMuxu5zpNtDLDprNzwQ9BFsFQiP4u7YX8LLk4eBC61Dk",
  "key21": "NEnEdHNTcSnNGFwtfxPdmUBCZjFMKU9SLADsaUYPLUtVi2Sa5Ueof3wTfXgxossL5RtRD7QMsMScsGLWjH3ESxk",
  "key22": "5ub1ZghWUgmNDVho3tHYLLJeaQjqHN1am7ZpqJRucgqPVX8AR9wJEZQPAdeRjjEryY3bVwJ5K3EGo3iTzHKKRAoq",
  "key23": "4djAHWBVWftDZqnhDVvRitw8TdYsi7MZvTuaEoZvzPP9iNjfcyP9Wx5uNFiUw4ftJPM4Rpe3bZLJKn1xN1FxP1Wu",
  "key24": "255gniZzDDXH5Ebwgu64o8zVwH5ENgNtydEnX8GbBuR4xx8sjeTdjN1GQyZRHkTKxFV9JBy3gdCbJjkm5fzc6vma",
  "key25": "3u1Tw9hGNRYGEAhWCje7WEqLXWYhkGXDj4dWHs7nZUFnai2JDuAPDnTCmFBtUSEebs7HiBGKiR54CazHgHAUncpe",
  "key26": "4jWc4a3uNp3hzBVy9WoSj8UHMGBUTz1wfq61f57V2msrX2KETwCL57i9ecu4cpsMtxKEC7UspyscBotJgKE1EKgT",
  "key27": "4d316nob143xxLFmVRx3GDL6wFPkAJXJxaCuetUG3TTqxacTHE87i959YAr6AT1rRvc5oYGXXUEp7cbArJqLgdu2",
  "key28": "8pD2CCThmfFyWf3hHBXRvKcJi9gvSg2SrfPQpE48iM6QZEPxRyq6gQPjUa4rx5uddSKxPcLXTvMDygLQwKi48we",
  "key29": "5vHuZk2Qk5WaZ65HUCDscx2ZCEDa9fT1kA5BKJCASXcDojgnobKUeKZTH5PmfdPgCtvJeuA4mm2SkVCUu4kG3ceg",
  "key30": "4GWCZu7YGknYDQtWewXa6xtbxKPf6PAMH7NDN7VXo2cVe4V3UMn6sowK6CjoD1e4afhAyMbitzJSbgnRk837BSFL",
  "key31": "5zub4YAPSuWkbBRqtT3anNsvt3s4U2F5fFzkQmyurTjyuaVtjMXPasTH4rkKxBRKr8b819AZYtwN1hdz8QZoLvsG",
  "key32": "4rpgTXSNqZym1NWbwon88WsJJLEN3Wth2v6BmufwUvKoqev6XS4vU2KbuBaF4dPxXNghkEYNBFPUoCpHvuYBZVKq",
  "key33": "MmKERePKNb4w6vLJkGGwWtU2kFcz59nZCs1fePyoJtmSeD4UeEYs95aztRN3Mp8kjTLivWbYgYWVK3vXPxrywFJ",
  "key34": "5ZpHWapkBoAHvVFgodYd1KhktAsi9yMzV48JNmfk97BaoACABG2wctqf6SmeLd8wgS4fqK4ixbUL1x2XRwJmCe8p",
  "key35": "4FAWaactP8Lkgog2yN6S5JeY74YDwHAD84Zj8NckBAo4SVSXc9AhWPoJj77MWopGqEBTc7mCgcz7uqcNZUcxdyVW",
  "key36": "4Dm6yKyqcfNx9fzgSuVAnbdUmdAqMgSnsuRLvNUALV8zMAGH6jUbDLVetbExsWwWLPqK2RpKWNP8xSL2D3fspCG2",
  "key37": "4za7VQ6DMhDzEbaTa4btMQvsXGDvhtNeQuepGqXLpRCLKZ4LRkgSWrE7S4YqCgQd6xVd3cUFPmogSQkuLNFFmfNc",
  "key38": "3cECz4uAjggc5WPNjrA1AmiuE7bAM4Ubh6qFGBqPjmPC9sdD7HCEadR3NTPcxYUiwe5pXjGbBF4ZPcz2ySFuJwQ9",
  "key39": "jQ4xhpQHk4ZA9fjnntUU7hLiDg5iQXjWqBpL9XW67VgnQ8nqNzs75MfzqtjBjW2u1d6bkidY1RnDqrduCvVJAib",
  "key40": "iUJ8uXwDJPwdRdh1H957vsLoNzsfmBQGSghFWWi4KhDCxPBspQwQRX8x1RskE8jwsZA9V5B1nvhpR75iyukgf3d",
  "key41": "rutx2wyLFNdBj4rkmzG8hTbtEjYueuCuPcNgeJCsEW1bLuooogW7MMwfyp6QnhZ6W5MDtdash1uMGNRryhWsqPd",
  "key42": "5btjiNcsY1CoPNRPjEuCWrk6tz1gB1zmDX6Z3RtLZHRtYAyfbqyxwnyiKGSgjHtavprsZUKLTMvZDMuFdXtcss9g"
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
