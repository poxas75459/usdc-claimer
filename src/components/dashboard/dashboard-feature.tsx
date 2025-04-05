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
    "3kcKH1TKNjECkQRivdJBCEDcFNbLXqZXecNmp5BzjzCDS986yPf7qMGNMNhUyN2SYCkPb8QMBCg38xCJLS18EBCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MGWMxs3K2PRGyUm6DGYVvwwNQMkXPQz4Tf2x6obEz1CFgfWsJYKtMUmeuogDfGXZhsH6i8q4GUrgmvyJ6jLZsZz",
  "key1": "VWjbJ1BkV7qXVw9pGx364YxqzAvBeSLwAKLgWaPTfmKWeGr4jwEM39NWAKLrt17USQHn3CPMsjyvvsmjnH6amzQ",
  "key2": "4GwjbAeoF9joSGEGLy2y8jMXjL9X9uNaJBvinBUdM7hHaZ5SUMRDKV6mg6WexQ4xhV5WGUCoFizK2TFVWGhkrCCJ",
  "key3": "28AdfpcGgtoDXENXx1sxXerxvY6K71G9s7XmCjDqtpFzbgHb28FSfLs3VNdKG6btwhwtLzMzsqxM4Rp5t3djpp6H",
  "key4": "5kMt759EGnjzu145PesF1zf7ZfaR57fKeu3hDwgxVVc9uhycfBmrzLHWMk3CPSX5P4cH2ym48Aby745cehTHVX69",
  "key5": "2zrg2hD6q8p18wFKQkc2LajwG17AFix7DgpdQLnP7cAciAPsq4T1YVp8s4E2NzBWUSYeFLFGXUsNeCbuRpfVw8qz",
  "key6": "3Vx1xnapFeKhbkNeCgxjQA1226UnLvbBAkWKHZ1ZPjRBv5VcFejBupqah6bnuScLT6ZQPdFGj3jJX5dJQLv4jJg",
  "key7": "oSbhNivW7Lcy6Ph12VPgnhTzRaNHPyYB42UqY22eJEn8TYB8dhCnrQQAjeNkqwKoX9vB1GTPmrVEZ4acuNfaeDe",
  "key8": "4G6HifrHz8e7i7B5RHRqDfaPJuLBpP5dCjFqqKJjtcRcP5rzfHUGAJWEAdYcViihgkvThsHBnhKP6AwBtPeYSzRr",
  "key9": "4q8SUwDtS1GZt2EKK59i9RXH26ckehymCv2KonGfvyKf1MB6BP2gVYUbzkcaTAiyhp8Rgx3VcKwCH6qR7b6fvnYi",
  "key10": "3cim1Yoiy2vEyYpkR4c2CfnLiq2LhYNtLhaq4VrH2aLsc7tCPZQpdjzgYpZaDEwyAuXZ3zjRrriR1Wo6xTurMCHF",
  "key11": "27iBjxVj3jqJHp2Vgd5beQbguNyrb9a2PpnJkWd5zq77iT2YBfPRC1cSgkpcEWhCgkkVXkvoqBqxQ4CpTvbUet5v",
  "key12": "42NvwRpuHUEkZVBcHzYLvSy2Fe8VJZPQp7MY8aakNGeZ5MmAf4Wh1KhRyYRwuxa2ajdKqMwomgn7B1nCYMxKeaaz",
  "key13": "3RbJ6M1NUVjixUwGpj7dLrDwkQGt5sEZtD8jmXSpNKRnDiGMRDLZZfEhhTstmJRFzze8X2zevyMjB8rPZvypvaAe",
  "key14": "2qMqv4fjBnQe1R3vbZsYCm3JoeHeMWvyV111fKwUsZfq4ji2urAsN8e8CnuVUmBk2JMPYSBuBKa7VMsntC8rPzsg",
  "key15": "2AebGnbXcNdopdi5Q7JehxWYRYyV4QDhw5peCKddrfwvGA2SjdDLa8zkVW3gkmAr6oZxEVJBDKr8WL7w2VFqEyC3",
  "key16": "3dqdCnt8jr5ssCPEYz7Ytrx2BZDvaQM5LYugG63argidnnsH1Yu2zzKUn1Y7MZ1DLTp7fjRoRxY2c7bK3DKeS5k2",
  "key17": "3Hmg28h9tR3jry4NfBE7KyKWhM5Ykqg9Yw53ycYW8nC8TtUYAqMfBxHvKxskSnGr5PkeD5LEJLv1TPr3ySzMWpMm",
  "key18": "2nKgfZNANpScM4aubjZYxSjueKfb2AyQydqBSAJ9nPXywhYBxyFzjiLUvgXGuKrVd6Pneoo3RFayHJF3H6S8Ju9A",
  "key19": "1q34aiDddD3Wz7dF39YCQVbXXwExs7P1AaS9i2cGzRhtPqChiwLMUgVBkQuvNeJLcaVeMbFJZSSF6QbFwviijqk",
  "key20": "39N6yPj6jYvogR5nuoRWxW6fMJASEjDSnZqonLpycfkj62pg2pEjLT1YtkgDkrW6knoTNRPNbfWT7wtqVcy3PJ4t",
  "key21": "45D2dpzBFyMKrR5rr8Yk5dijkwZ6mNBCCckjqdMq7vyz5QH1V6cwDKaq6zdDipV6DvAj9AiC1qEM4oGb8SwLN8kd",
  "key22": "5Ti44Gh6rurwsj1FJM7fkz6ZLmDsVUTKV6RVhMTEPdrBoAaukdGHDYgdWtX9EpPrvBvEyVaeXJg8wKagKPjo92Td",
  "key23": "4d66G5GKcKbQHCeovf2tj84p3kR9p9Yiiu1fzW7U7cBwEi8Ewax99G4gxo6aZnUJtBuUHzS2KGqSan6hhwoKPp4i",
  "key24": "2JGC8Za1CNyoudv171Vpd6d1Wt6XqcfvV6cHvuyHxUQPz9fRkzLscVcr3HK3rSzPyXrtx4ELg1fwL5jdiaqMeV5S",
  "key25": "3hSPXCJv9kt5oeEQLKfZdpBuNojwErFV7ktEuyqUFnAPR2N7BZbcDG2WpRYqNdNrfG4x5YP58zjNbEvPJbeXyd91",
  "key26": "UV3fa9kngEiHbpvdt2HCYiiFfWSuMrjtjHp3LW2QWPLKEWdm2Yk8A8FDTkRjVRUfTNekigyrzbKHrY3RyfoMSt8",
  "key27": "PMkHEeLkifvKaHovTWkoNfQRAq7R7sPkH4wXi3W8s2LuXnRF3T9mzY7iJicrnV2eGFqkWy7bRCoP8FUDZEu5WVC",
  "key28": "3qnJ3fgHivg7udwCG4K5B8UWhEQYqnzhaQTAspJqzpmL2L7f9a6GnnkgRRkJ679DvKNvcTGUHb9X32upxt9csfvh",
  "key29": "5Zp46PtUxvU7z3xMqH7p9DaqtXY1YnuMjTT64DYxDiJiZSN5yWrdsDZi2z2Vf9CJNPuYVL91dFGCDB6xrjkuSjNr",
  "key30": "jm4siiZqY33SEqqFRoAuYew4DswWGyTCrJi576oeTRGSTzcMxQbYh5H7sJtD2vSNhNFzPbEYnHYZaxj3PyM6G4E",
  "key31": "3Rwa6raRgNEi7e21c5djTvdwVo7ke92MHY4LvhtecAPAB5GBCxiEptKpovjJnYQTJqattwkZCHMLsttTz9eczvLP",
  "key32": "4vVK8BRdGFxE63fctE1Xr5iKZMXyM9869baErXtvUEuqLBVAiML5pA4ZdDssdsUwhoSAKXdQ5qFXoByNtZtvG7Ph",
  "key33": "5TMTMUSvrVsiAAqmSorD3tySGbUoHN1SrUHMUC8KdzQ6qLdDfpjor1UxyAE7cxu6n4DtKMog5VAzqgrp2ey9Df3x",
  "key34": "5ZhkdYEXFxHi9xNZwdD2B2thGe2cAXNKTrEf8GYpcKV9uJt4xoFtjZw9qYeBzFGdESmNPaMQV3y5vFwWNk8ChrdJ",
  "key35": "3FAdksnBX6yy4ekbN5oMT3QMZCHmM1VPBdAWkdadsz6gFdeBTiuRGSXgfSMnLD1TgbmQ5hopaaQX5iXkNKiSyzvH",
  "key36": "5hJucxNqMZH7H8cax2QDyonJZjzyjE3sWWYXnm1x7eEKd6rS6TBm1MVi95oZJE5MQB9hGPdbEmUhmapAWoxf4WEY",
  "key37": "4ogWVBQBmcn5JCxaKWvLJLqbfjjTKGdaex3ZnfuDzKx9z4HZcFnTMWHXEMQnozmtAiF2CjzmS4xxs6uKGZ4Y9St9",
  "key38": "44c853ZLKWBL9saJaS2coeKiKnsyWd56y1uTu4uHFysbD3fS8HUejzV9dwbgpyGR6weTTNJt9wCWMBpz9rnjLBkt"
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
