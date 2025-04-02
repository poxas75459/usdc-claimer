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
    "3WTAUzYXNpjrpnhRjVWMKCwc72a9dCaBsNhe4w7mcYn7M9CkeU1bob2NAKL5zMcg2y7VbeUk2Nf7smtoRDfaUKGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45EJ4E8nbjDeB5ZiqSHBnLdXAZHtzmfDPtMDUEuDhEfFtDdAJpRvc8A7iasxfQda11RiSymf97vujcR76rX9gJ1q",
  "key1": "5J94G36juuXtMVJGVwMjVrCvTVT1gN1sR71k4Ub6L3zELH5NegftPCGfi7yPrgXazyPe3FN8q8B73P2MJqKBnAFf",
  "key2": "3xpM9YUoFzedJs2y2z3rR7Vqx2s1JVpXeVaTVgF3Rz2B5Afb1QTGXxGMYxQ59VCrybaXWaj1YJ3UTyUUZ2SS3fYe",
  "key3": "5D1hdSxt4CxQMpMwx7Jr6oid23iht9mcgpept36iCGi13u98JKGfhp35rA28VZoL2uVZqWGFvRUmk1woGgZWLn4R",
  "key4": "5SqduBFHrSC3BddbLwhBUNKRdu1cVMKZJLkRTiZhuPoDZgC9PASe4ZZRiVnDDAoGGTySDu5k8up6x8KaBM4fZ2Ev",
  "key5": "5iM6aPFMejPu6k1jWXmsHuyvQKDoHZTNdKJK2Z7MwzNaMdRtwmM7joREuvRjeXsGDAXTH2ZoB3kbg4GECWKvsPPv",
  "key6": "3nwoD18dPjqtNCLvgA9A52hLz8wLGWJh9CMwZ4Fmr7p89jxC8CZXvF8EG3gQeo47Q7hYYEz6ibdR9bPA8psaNwD1",
  "key7": "5oz4V2tpRCF37pE93GJTXwzG3pxo4DxcQuzyKqWVdVj7envQGHGjD8TTJJ6RTobYKEMExati9VcPWLHfXYYm1xDH",
  "key8": "yt6nRvBnH6cy9YmVLJMKYBDighUj7yTcoGfgMuAt6LJhXYxSc4ZfBPCQfxgGrGcX1QtT6gc6Uryxa2P6tpF8o6L",
  "key9": "5btyDDrrvMm2AyHjQnrQo1YUugq5xmyjtyht64cxqFyojTomcwxoJ9DgcDjteJ3oLkp3TMMo85BNzr6wCvCnSWK8",
  "key10": "UG7REEFeZH5grMeJP7ajSUevec57jAwJHCsDAWj8zbgS9EcpF2gFa8wffKpQGKzJJvgdTANrG6FcHuqw7AxnHhS",
  "key11": "2t5AUVAjJ98LVtf1yZZwZdwu8LfhNiMi1vUniqczfPcYSKGbaYgdmh6oVBPfqdYPwgmiRLSysFVWJnTnAtBTAuNp",
  "key12": "5R5a78x69DonC1YmZ86R26HQy9LEfTtXwFVH6mVmGxUxdTacnviLSCgRMwAFR5JykK4khbR5s14V9cXszmGBzbAJ",
  "key13": "2E9smfafbXP25dgzz2evEzoQWN2okJAu3DfuRuC1eRpe9yaoik7ZJgG1M7ofLJd7DUBd7sdFRTvvz71UiFfrUc2o",
  "key14": "5XxYFxi8qgLVQfT5k3mcY8bY6vHTw1uEUz2AXDVjNzrds6S7dPYHzaURWkPxCYd98kvzCLtXms3ffC1LHuTrkPgx",
  "key15": "13PKwiz5ZBbtnQmfDPGkzgEinsnzZsuQ5f3weHFzopyhrDhrEQupVUJ8HZPNHJxzTsQzFfKCJxBrN1Hbob5ooSa",
  "key16": "2WDYnckrBprXi2ViAbK1g4YKTskFCUYeHrMjjeLkcXsRQ4vwtUzdRpDquWPEcG8dscqBVfSejPyfyww59ZvKZLLd",
  "key17": "2HqaEqnVk4f5nLjQRYkqonthoCzYAZp7T5DK6Mdp7NWSb5ErdftmdtxbnHy7mm7B8no2qYEhxfcSTcngUZ1ACDrj",
  "key18": "49WPSQXLsEw7ZeRXscVsg8W1xQsv93DmxsqW3SYLgLT6b8d51c8ptwMfvKh55ZptFbHeF3MXLxLHMctG45TsGZ8d",
  "key19": "3TXiE18Ab4CHQbmHpo8GLPFC3EADLBZm9VPTiPmzR7xYAobRM2h4mpYKbtApXdM7xXj6LU2qha9LxVCXkxjFuDKT",
  "key20": "t5U18r3BVBUa1uFcUR7tgJZV9fjnLPmYTGzjvud2JpfQ3QXMJASJuXqXANi7U2RnnLdvL227VZ75pmEJY84Wb1a",
  "key21": "3b8wDXcNZ4fMM3qMXvmrvLvdKVqwYMupbS8bDFUGxhchJX7k4373wyFJL4jWSxgJ32dVboc7f58atANLwDVbxZ4M",
  "key22": "3ue7RZqaNn7kY8TaQymWLUPBGHRoXG1eVAz5sUqwXR8VzLPnjhnzGs3nNVoBuaFrVC9speKuQZZH2HP9cagMxviF",
  "key23": "2SUjdAvBUsY4hzwQyvWyKxUesyLSkMNoFZFXpAhhwaVLiVd7sBBrxx4MiRxmRGLHbTiiLGzQ9K6fh4LeGRZPxG6Z",
  "key24": "4HgdC9Vgi8AqQ8uWvuLq8EQFvFEPvTmBYbNUyct68T8QFBASepRgYfi6UJSS2Y6GGgMbbyukJwNDwRmaL66mDQ7e",
  "key25": "3wnvqdqvnxvNbaaT9Qgf5ZokNrF6PFuXdtm1NQJ2Kk89JgSpWGzRU7zBJ7EAs9vg1BHKhFVVBoYL8vXCTsLjVCww",
  "key26": "WnjhA4RD8rqXe4d2SUexV4ZFTycbFQDBqYG5NU86BrKRvqt1sfHoTRusQsndXTeweouPngq7RUcTbnesNdD4oej",
  "key27": "2sYye7dSiLws2B74cPaax2wTt7b7Pu1YZJS6v8RbA7CjJDLJVE4c4EoFhT8wsTsVEzLyjbPNPfPBaLVwLTvvdL2M",
  "key28": "3ASbT789o2y46vd5p8Kc3yQBoMdycUmWErbYb7tQS6qGRtZopGsNHk2SEvAASHGhbogUMV2zPyrNuUuizemMB1T2",
  "key29": "2tFEkMZb7zCqzb6qjQbD7R1NjEV4tnD5zM5877jEvRY1SDpYApYsTwtyRNAd244aSoNCm1LQsTDwxkJTeSNi7dVv",
  "key30": "5Kk4yRmbEKbbst92GYDwwhJTUVGCRHYSBM7PtXaWBxrpkUvsrznpq6Kf76keus6KQgZ6v3diL2sTuyqfg6wKv5ZM",
  "key31": "2Z7xFS79qttMsJPzjJeEeymHfRCpW7CHK1X1WuVL5N71tmEoqLXhh6GWxnadXq4jUbYA35MyhC9F9QA4DD6MqVza",
  "key32": "UdnkXo9pzKUcfhJ5YDAL3J8Yca5SjF3Y3icohZS8Sy6GXXcSuF1d3MYeHFLYsTJJm4UJhYVbYxT3ZouKBQPkd4V",
  "key33": "5WsxE6DhR2WmUQV6RHAVELz4JEAaoSDHxSxqhPQ2S2EsYbp1Qj9GFqSzTkRkCdxz3o5qm5q8hPLieDYtVa2W26FC",
  "key34": "4EdipKAiivpyZQK9TgZyj4KtJovkKYpuxPY6FTG96eWSLGWd4BvfgRU61TXdDm2xY87x9txgYZtCoaD4spPHcgyb",
  "key35": "KQToe3ujVZCTWBDT3UqYnHtQFgm4eoosdwFkBgCZrXVdp5wjKutE7FdDRWSf9Zg61z6R7yHxQbNk1bnJxrnSxpx",
  "key36": "3tEDpuDNWL5pqL4ZhA1uLLVnnkH8WhpDZVhxsTLNJystJDPLDKg73kujsUABaPkPm6Bc7xh8GQm7ysXuq5Jzizw8",
  "key37": "2hz3ioeEPargUfVWdmgXFm8R6HGSgJeZ6a9eKeofhu13aLB6wEJPeKuYCx8bKybDJhCeuVbBfoPuGbfmVePHwxgR",
  "key38": "3iqrHdbNsaSaAAvczThpKU1scReqzvaM16Dvy4yZBY1LQrrZ3HRPA2rmEBFspGnX7hEJ4dh6W7KN3AYHLxxxHxyY",
  "key39": "2RZcEcrkPUbikAoGDfs5wNwA99Rv5RimaaExkyrN8axiqNVtdFw8r4qwKEtCqTPMYrNA6zWVkUc47vQ6F9DrHGjd",
  "key40": "5ZwonU2QXZapmb933kVDX1wVkbkrrt5LnjAXja8RgiwiZzzv6NySqSrH1bQFHqFMWzAQtjtCwwhUvFc7gzpVPE91",
  "key41": "4M4GpRxqeKQfA6h9xD1NrhdncJtycckvkQSkqipWyfdT2gLp3BrZ9k3DaBQyqHinzrxwx1Vt5aSF6vABnKGuuFD3",
  "key42": "3XSW4ioBHtRBAzJWj62EZx5pXUdDtJ9WK2c6v5YM9ecLrZF7TmKo3hGQsmiQ7gcrQZt4xp1wqpLFhSePvu41AVAE",
  "key43": "3Ka9TbroZG8xT2tYzMDTgTNoMmPu22kt8GpTNDUtCiFnB89NqJct8g3upPRdQtjxYpncuigxJs5seRBCo3o7bQd6",
  "key44": "62QK6U7DoEzsyjPGGJYThkKHwgcKEsr6QnRG5RjuFujqk8YKNUohmDMgf34Eaze7zPeiQaeHu1jsxEQL6qRZRyHe",
  "key45": "LS2chBKJxGouHfQtSLPpZGzNBKah3swoW52rG3RFgfjaBSekXKVvknHNkyAFaS96BwQb5ekjA7RMJGMwaisGrYR",
  "key46": "23EEATsBpyqjXrLWMsvcYUSjQENqhcdU9sxRpMuqm6mZquJabTNbJntDCpGN9CLwLhF5XgSVWpLVohPdfY8aWPrW",
  "key47": "3PphQiXA5aWSBHtyn55XL5o4QX5yjTGjKpH4TNZuGzrr7DJKhLjQUBZ3ZYhvpvNdnnPbQtw2aMBK4sG1ktATx7yU"
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
