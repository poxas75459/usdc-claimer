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
    "um29EjEmeWWCzbyKyffC35BsmXUzdEZdbgxb6EFsw7wrT5HGopn6VUtJTMNCrpqTBUAymDMQAVJc2KQvW8UUNvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mGdJaXwttf5EhWiHRnYjyxjVyGxREFE27LzLx4yU7ppYFr46vAbTRCxhrXrkKYjBUfKMUwpE4GZWftydd8nazVi",
  "key1": "tYGGJ7pVnFHah2xqL2MwbtB1WyF2Jr75KLVQZNNhywszMZo9gWSQbDhQzWTZs2nzPMRjbtgHyfcVDcRC19gdt4J",
  "key2": "pLdHcqcdsbWsKunbcCYWi5pYQsxD5taMyMNNAe9JWaHbT39smDxjfnkJKYcVHTnrRmUZh9iAzdh1ETy1xY4rfpo",
  "key3": "2myvr894mqXupRnqxnLqSNVN54xHRYA7geDx8hTfgCHHoRTbnqVGdcwqecK28PTuJXbjiQTvAPieiwwFitfAh2Nz",
  "key4": "4coXuEavzKNyRkqdy9opfB86vTnsBVbQr1s5QcZH3rJdDadvnQvmbyjmitTGoPxnitDquCmam7eAYxY4ecDtrCQs",
  "key5": "D4BUBMCzCEypLFQoroicvyt7xgdqRV2oXbTEyF9Fb6Eyfb4CP8d2PDqhaqcPVuUNFrhj4qs3LoVBWwoWZxFpFaU",
  "key6": "5iR9uDwR5VnEgcJVeaMXWPhTTXBY4EpqosXaigvAw5PCXKiYi4CLPvxnFKghMytXjBwhuXKg4HNMb9JqP7QDBGga",
  "key7": "51G63RTrREgsBhnKvserriQ94n9D18cQ8GnroeL8F9yf3wcdMwxp81LbKh1R1vyoSGgJzrxrofdDPzyz8eLLbHSe",
  "key8": "59ptNaEQaaMyF6iiiAdcpYCF19P4ADunuC7Rb7piC9CvwCC98SPsJWGGbjJyzzChXNEp1rJrcVXZbnTxNnbnkBvj",
  "key9": "3L5p8KiusSM4CMq9uVwFpp4U4JhbmXyizqt8uCcAhx9wdYyscDJdLXeqB25zCCmW1ArVex4X9KQcdxh5qevmYo5S",
  "key10": "tcdPoHdjuRj6pzF6dDLA2PZFoFi6HNszmmrr43QDCny8wLTZ5oEkX3jWruR4UG17uZbDTQTgdP7FYNXMARKnLDD",
  "key11": "qSV7g8Kkhns9LkDgtnKbg8JVJxHXt2tnrb29FRH9RYSonE3gyoKuEErSsR6QLucibGwL7VBViQ3TbvSoPGKFM6T",
  "key12": "4Eb3yL2neyV5R6AdG7AfGPRxbL2GdYKLa4ct3uaQM7mwHNS4c82rVbccctwdf41yrKXi2hBukYeRqUQAXa8htK1F",
  "key13": "4fYkc4YokJKgqdABq3cace3D2h4oNk9itL9RaB49xQAXJEEs3MtdHLzpg6ynd6AJEuHcyjmispmRUMEeMTvMQo1K",
  "key14": "3SCJ2ETezvKQJBcM37KjApB5qyDZLP4hP69TY5nD87efN6UnSSxRxDgb8axTMJWyHFCeJvBH9XaxNnVPoYAaFEzj",
  "key15": "9u4mceT73GB6bSjEN3xXQnJ7i9bwurDVnv1pXZJ7RdAXnpSrmT8CJAFRYjCMqLJgUraGox8sAy89Qc9oUeK5T38",
  "key16": "CTabZP9wdKcs4f5LProzPbV38ccsJpm5AfX6pzccCkErXWhXbBq8L5DzQtxnPenhEBg9kVbmBZegUXrSrNt1GEo",
  "key17": "4L7yU9akGk7bWUg9BxoTbDhducaRu7JWjxxAou8DsiUSD4YzHSQMVrBLAVAnAuyi8dURQtiKDV9mFjoy8bJd2qZM",
  "key18": "2H3uMZhMVFbRPVwaQjAsYL2FksFiZWRMqQENtRFNXW3vdSCGxKvxHjNTHcXCtiB5LdnSRq6YNLxCcUfxSrWkf1Mr",
  "key19": "4CjRguptt8qxpP6UEGyqkxGgMF4i1fdFdmthz33igtj3gsWmLin9LEZneAG4t1FM7jV1Efh73La3KRyHxTywMyJo",
  "key20": "4rqZ5p15nUZpAt16YxrVyEdwP6nfrfYmya7YUbm4NDSDVCNkSHz1STm1nRS7t32QBX9KppMvLRcvi3qCX6PrkMpk",
  "key21": "rgDyWF7ZgnxqERngsnBTt9xDGQzgDQuiy1nEki622SXgLwwCcbq8nJEa8pP135HJwag6G7wBXmQLoX19VvDimru",
  "key22": "QBn7UuLukoJaznrzXih2ZaL8BLtTkt1VWEi6DNpcmvCVHwtMukWKLRCZy3XKGU8zDVcmm6mq1X258jMUYXZshUr",
  "key23": "2DaRiGtS3D48iw8FK1J9qUBGH9Mw68XpAH81VYsfLGE5GZ6gz4DMSr1QikQ1JjjmbnnjfQKMiMbTTYU8Wohh4V7T",
  "key24": "4aX1BmBjnD3gvA6aKTm1jtEg6yk5tqJxeYzVogA2RXm1m3bQSuYsFYvobvihdyMHXNcvqBocPGQJKCE8bjQKW2vH",
  "key25": "3aPMtjxLTBrSoqtn5NFJfKfJR5tAamquiDuHruawUdDfL8hF9wdyg8uroc3tU2S959WyGUT1GpY1WMXF3iDbdqUj",
  "key26": "4H9rKbB4GQMEnZDwKHKM8Fhn3Xbw3aQw2E5HhesDY277kXmjcsD4Yk38pZ9bUYcnXq6dHUKQ6kDHRSENEJriygvL",
  "key27": "2HXg494KfXSUgUohvddYGKsPoyxS3VW4tUq7HTQTvFf4HdktCFBzuSW8GGgRXSCwn9G4UhLRYw8Zty5Lnoc5GEn5",
  "key28": "VQ13gedWGXMjUunBT3hUdFaeDdwhhFYtPAn6whThNpmNKYu5hzri1skFDXPAUCJakDUFZ8RmDifqLrvSNt5qZNS",
  "key29": "4FrVfFUyUnE4P2WXhJFYHnr3KRp4joN3izo2HxE5MFKMWe9eDPgXY8jWKZQc7VE4mUdtMijTFfvUn9JWyw91gRAs",
  "key30": "5qrZKBXAivwrv9KhXbmcnWZrtxWnADU9vHMs3ZzsRvwSXMgspXF9JQpbCdHWkCsqQg3LyUS5uF8WNBYApz1fQ2Tm",
  "key31": "56eyUJ1T46Uf9CnrjY7saCNzU74zfzrLBJKFTp7kYr7ZtHieon3613Q8FoUPecWt6uYwLBC1CDG18yKD3mPT7XC8",
  "key32": "37JCcczhvNonzLTpdqRNkWCDnfaJErLv2KzDzkvWBQmtHPMgj6ER5DM5PkAzz8YY94HUCVkRSYtnBP9xjijRhJxY"
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
