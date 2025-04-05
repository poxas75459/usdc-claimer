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
    "5s5xoUPEMzhZiABNC4nFcnfu17ARmnPAPhD2CdDJ7LT677KvGFtLoq3kwZMQu7GmmgD8Zy8w3D8T19KPX6XRWWV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gps6Vva5ZCao7cgpM711gZiv6xw3XGwu2zRotYtGmttodkDXM7zATuDcLeBdVi3hBBiYXJqzqxZxNddWPM6JNvJ",
  "key1": "5ei83SAKZ4EMdiCHnYV7dyanGUjxDuLzqcM6LDykrYjTWMthF4ycCyofE7gH8scv677mX47uAuSayE2uejVbkLNz",
  "key2": "o84zjkGBMNvHABbmF6oZYqo2oNCMDtJyBCi5xjq9eh17DxiNRYeTUH2tFg3Tunjjuva5TXGqdH1KUNvqA4Xc6eC",
  "key3": "4sHoscoemi6iT8Wj31ZJ5CvSxzUSD767vQ5uBBBrVR5qxvKJvTphkF5Zomg1JpAmXLXqCHAZnBA7CGXKbDDGoxE8",
  "key4": "2ysRyWgTHKwA6GZ9LvYCT3aSKB1aJU9EhPDM9JwNZ6BAcLxE5JQmetcocTB9VaDhCENZJkgSMgfCR42vgFUhwuZT",
  "key5": "3A28CFDRBP6ryXWUKSNmZVEKiZvJe2HpkPNyQSaQPWje3me7FRTuKmuf15GmUdb3yAKcogzvo3TnPWyCHwZjnumY",
  "key6": "3jz6EnarzQ7MeaDzWQbbmuaWm7tEYBKPVMmic4Xp7H6L5XiBxbr9ZcmfnYLQsiRHi5cAgxmBYMqRH93wDfrmT8Nr",
  "key7": "27PDb4Vavq7TY5sEV7aeu2Y7ZSfE6RYyWT2oNQ7aUDVrLxNKKppxWU1nMdZtgCZZ51xdp7K79uZ1RCaEgnM7NP8B",
  "key8": "67QZ3EcjsLpwHRnsVTC6zUYxT6jAqKw9ZDJFK1u1zfuTdXcm6aT1NrcWSj2ByLyLiczXNUS3WDxJprfbfN9BkUzL",
  "key9": "2bsh3QLQjWxuXTZVpWPz49YEVCUXuxor7E7CBVrdYiy8zJL7YGXxWG5rLQeYwLmrJefJLvDPDTVcEcxVPrRg6rMH",
  "key10": "2LBGg4CtGCVxBQGkf61YaBF38gM93yrehnA9u7WXGac5r22zmWj8x2Q2fodL9oH91wSuMA3ALXVUxB9YKuTxCZL9",
  "key11": "4mRfpsPg759g35t8iY5hDAeXfAN3faQ7AjQjLQL5r8xKSUuoykRnLVS8L5K7MsjA9J3iBMMKcJoA7b6PEaWuLXWy",
  "key12": "2Qdsczw5gxTTHBCjTj8rwP4oJ6AW6RWEaec4a2XcrUQM7mefRuawRhmSGUX9rJdtE296DEFzHD5HQAxAg2651C98",
  "key13": "2rx7ymWWwuc1NpmsT6VUWqeKgbLGFyhwVE2ooh3TR6wpynSmzLZr1CsAncxrNHyWLN9UtY96u7dCtsuVCUmmFh4G",
  "key14": "24mkhxiC2ngwFyCTa7SZ59Gbq9pNQhAbM3JDbGTPakW54STaPCTN49sPLyts7kiNzK1JXiTLuP2hUHHmX6iXyRRs",
  "key15": "5K8wVU8RLHeNU11afXqPU3H739KeArKvhzK7Xy9rUmJs1yxZwEiUMCZUm3AGjisLBwKPRMHFaFH8TJbptymewPD2",
  "key16": "5FDfBgejZkaVE5xnSf6R1dR4Ve2hAftw4AeGQuXL6VJshiLBkTnfBSpSHg3vB93SASXZ24JgtyJR9V1eu4PxjymC",
  "key17": "4DT5ghbgsEU29knZThzfE1q2LRRpGVwnpn6kjSC8t8HL2xN56e5NhL5j33m7YDQMjuiEKCnuJtb52JMfoRpt6UFw",
  "key18": "zY3bMXBMceidMAJeRr2sdQhCMxrDJAFKsgyNbbr5hkA9KSmd79JUSSn1ND7BZd6u7nSkbizLoGJMfi7hDDUzXVP",
  "key19": "3rWQkYefM7asB2Wob78skdyPX1yvBmTQ9z19LPAyWmhs8129ZDy9kuJdpZCrziVMXx8XvoxyzCb1SYA9X9R5BZsT",
  "key20": "4MA5radWjPyQeNP8pufN31881w6NGFgPWTPBE3oz3UM31mFW4EqAYjdNyk2JjCJRv7VguWwpRUShosfwbvMySNd1",
  "key21": "2Nf9fiQqS2yVhgRudikK8Zp5TKrz8b921MksXsRvyMWA2UjqBprcvrTLPGW1mQFxvTyA8ezoWUuVV8wFwCHycbik",
  "key22": "35UTyobJpVDKUNympiLcANUHFvFtbNed8ckqbsNNL2JTHEVbFbEpTgoLutKRBFegSRgAohbCAR19HJhdM2UBVAAD",
  "key23": "33F7UcGNzSJuEx6L3SEU1de5ozMujKqgxmWK7QJzLob6zpi81VKfrq7GFU6DkAxfNCjeA4ci9VUbAC844dtSPh5t",
  "key24": "4jkTkVc4FxAz2rAzveLiyn4TtbpJ8XYHxG35k7ohJ9eHoSxkjGtJQfSfr2ExtUTeYiSLpk4cgHzZkhaQCMFsSUz4",
  "key25": "5MYZYJ2tNdTgHeFuEV5ST9sWBzZ3iLbhjVDg3TNyWvRgsZwDWdNXWh3e4HwxbtBG58oGvza2mA3qsE7GxDcMMtW8",
  "key26": "QSrQsZjtZW2negVc7KNXTsNunJSd7a4ViNzgSVhAbWV5mtsxesXLyptsWhuSh1BYaFzjcnhNvXHkEh8YvYcFCUv",
  "key27": "56558n3bLStHxWxncarg82YCotFcYueS9aqUigmmYksLTFmyPM1tQXGkP8LW2AEDvaPibLAWPVHzRwF254WjkLrb",
  "key28": "2B2LogDTRZBm5Avciy2QUcLwLU5ykK5FR6qzqSSxfPThhAMJS1BDbxqEuvLFdztUcba9b8X9LV4MhqBfPHZAyJuX",
  "key29": "5kdqw1q4dVqKc5MUoumenpF9KhkjW2UAPtKDTay7WJx1U7d514xVCrKMNtZtRder8SN2LDE1mqDZsv9HD2fBhb1j",
  "key30": "3GwyHvbZkXKfYvHanpniwzdTQ9e7jdJn5FFbxVCum54BMhHFd1C4aRT5bhRK5aR97aCS8yDKSxBQsdWPXcRqyyzh",
  "key31": "5T1e1N1bZXVqNVCZVUXdTT9tXtqUD7aQhDbFDanmXeJkS58CJxy8DNG4DvHXx9iUUuSUamXkyekgRmq9auTddpg2",
  "key32": "4trreTQcSXNtejxn8tN8fA6bBySPH4vFRJY3wdaqd9okjhWQTVqzUHYmZN99XAsPVvDEUEYiATcETcWB8pJY8HtH",
  "key33": "5q6raowqV6hU9uNkP36oWBvS8UAa6WdQT3zyKSotLrCFp5zqcBVZ6qi7BsTYLFHVRFTqZ9vzfVp4d5VsHrzCejKv",
  "key34": "4bpPH3gcFD7DR1ert4PBVPgzo97Md21E3xYYfsgUNwcuJGxY1zypm9D6atKXri3fmJbPduZg3qJPqc9fmRkhc3US",
  "key35": "5pGdLDoygTd2aC8ivqC63FFwhHh7q1N58qen8QrbFXrPwduqKQdRYdQEixHkm6Gd4RRSuvhBMUuXJn19TofFb33t",
  "key36": "4SeFR8MVER9pQFSijTuSujuiCTPjf1T5MZi2DP7rzvNiw6UfEsy19BU2GM3FMTdQyC2V8K9RvsKB2SpBcgUYaHWA",
  "key37": "3CsqPCT7SUgGRdMRYeZrgssvCcNAm6MmYNi4SujrtBWyRPTTYwa3c1TnyrcC88VZkkwWt8nTZoAGxV1rGgeUBH19",
  "key38": "2P7aViRBfUfXtHBvsg2tT6tPKCcdH4TFYXCgrDNPTMv69v4UsnWjtMSp82pWPmUBUQ5udC7DNhogBqTGdgaif45h",
  "key39": "3nxVsHYv5bbXKHtjzvpaH1XeSZD1PthJJPUgMARXReZW8QLqvEdttVWjgwP1vq9wcL73vTLFyuCV6SBZhGGvRLvk",
  "key40": "3GczReDeVeSH3PTnLXT9JWJ5rXGc8zDudTDjU9xHgB8PAWV2T1FriNBA6WkHE2yoPATJbf2nJNtUdbdj9UFS6Ltw",
  "key41": "66ddL5YBsdGHo9sNsuj4G8N2yMGBHATzEaAz33pdgfDd56meKXitQZ4fFpJA7Kdka5ZBYLKmv84nnuJKBBhGRoXn",
  "key42": "5UChFb54f5aq1afzJ63AVxygLts7YUpTaBnXiuVoEjKiU4e567JUzFsFwTEvzY4LreJUygRrhmutZZSnXLZZYmw6"
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
