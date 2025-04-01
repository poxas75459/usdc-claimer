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
    "3PqECrJ1sVMMSguujVvusMZTEQbxLxPV5FdSYZDN5Wszse7E3xowQCjg2epjGNgt7EwFbEQdHMdkfQxUVcfa1k5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4daa6u9Tqc1S5wdDmbNSyzi8rQUHn5ZtwmxzqpD4JPHuJRQagaiSK6hAGGB5U2j9ZFjE8C7zU78rt18XNDxhcEFw",
  "key1": "3L1GQvumym59gVFEEczvmAYU9pm5RVC5GeU4Vp5U5m8oRRKbEs4TKH3nvF3RVsZsaMpDDh49YP4omjVWbjTFvbPD",
  "key2": "LpfANbUhHrKZnptJqPicqYze2anQaCKWwiqmR4HzC6Fmb5qkAhWjtHyUeYEdiEqbhJQQUjcUdtomRwATKvVQ2nW",
  "key3": "3hVmeVa2EFaQ5MrMmi5BFNZswLwuatERAL4455K6hg4u9XQSSMvB6cf7LSxGYwr6tkxnmK38frwAA82XZivVWnd5",
  "key4": "3T9qFBsxFzNFnFadoYjEDRaJBPWRKtFufBjqKk6QyVH4DRBSwVP4AbAZkPQqsTcfTgepzZmJQUZX9coEXFi2irfj",
  "key5": "4trm1Zu8y4N3YnskM5ofVpuS6wDomV6gDeSkbcFoLC9Sr2auyotZBNQJPGQUUsrRmm7U1RM59jAh7H4GMFkWxTmq",
  "key6": "3uwPNVYKoKf8ncUf8sVeqjrx4W4SDEEtz6pf4KT52BstdwB5dPgMW7s4DcoQDEJjhzjFWz9SgN79iVv8iYq8szi4",
  "key7": "648uuy5EUin66124R6L1QoXrCLnpS5VGCDhm2SV6B8Uwdkz9yM5R8tn1L8tRgYJwgv8SDU9XxRcuF9U4A4aRdzsa",
  "key8": "4Zsufn98Xewbgdj4fSi8UDWnCH8k88Vmm4ya96hS16XZEWb5XM35TCBvpn6CEWnDHiD29Gyentm8KE9dJ1Ddgbux",
  "key9": "4v22yvKv1RNDmww46p2RWdMpPf2gZyetTbUa1JpbkadRD64wqRs2NZ9k9QhBqwRGHPoA9GHLeSvDLkCuDxHbiYvA",
  "key10": "348o767XPvZmKjBNaUMSYReQmH6KETGRgnrcvQW7G1zwDZ3g9pkJvGFKE1oi7dtJcziNVycohKokc7shdsSxLz7t",
  "key11": "4QAvzY137H63R8iN3snfhDvSR9ZzjCiAxUcKA62pD3QMtsriDFaYWDFb1Av6ftBGqDTBDwWxftpdhRyadciSyLEV",
  "key12": "SyJdzBrHf78h4bt19Azuxb5M9ynSrq99rLAqRvoWfeZv9ezpG56eKMjm6M162JwuQ22C8k2ASjQCBTjzPkAfmj2",
  "key13": "4PyZhJKdRNRRJqDPdB94ZTbMDfYmRx4LCaYgMQa3vhM2GktRazgy7APTMpxW8XfeoDBCkiGC8ckchF1RqVt26PHg",
  "key14": "36s1e5FHFvWjd7YsCA8Kb5MxqeFHhQtWR5bMnLdqFCSP2zak4dTXrkWMvg3CJCcfc1rtFFaHnubn84DK1YmdgGUf",
  "key15": "5BUWB8c4BzcF4n7ZE1HDnF6Y8gvYcap7GJhFRLBqLkD3p3Drs8TPtMVqtcoe6Ak3eKdwrpGZxkqZRW93jhJkNtK7",
  "key16": "4aZsL1aKJodfT786LGCaEsLCBBiMuUdwMaLqczFn1feqfvCxKTLGvJJY9i6HCT434h3ZQ4iWzSpk9ytKHPn9GbcT",
  "key17": "2FCLdfNYrDDRKE8Yp7DSag9SSZmhr6YYh6pZFDck8VAQboS8ip9Mj4SudrZutmYV11bBc8WvZsBu51mcAbA7M6vM",
  "key18": "3bUxaZwjfav3chAyeu1vu92yiUKm6kjkFLKvfvfngB8rd7hjUSqYz2zSrahbspcw1JCnjHpt6Vyv3Lxh7oT9L8vs",
  "key19": "KmTU6osra5FtuRA7DSAtKxp5G126sDN5WNuyeWKQ4QNuLp6E5DvLNRn8hqbzzQrPKEimpJmpG8oPDHt4PdK8XHa",
  "key20": "Fk3QiHy3UivBB4KPyCsm3RkbghYxEcicpQ45U63C6kPE2ULMgC2wymc7Qqto1HCSBLcVBh5W8g63XcDcuaugbrh",
  "key21": "4havpvFU81LwB3XKesdbnfLKXTfhHNMZQF3Br78funsLKJw48n2dFEb9GheMpwbLydTLsRSKJ3q4c4kBrnMrCyRy",
  "key22": "4NPnbszLw3CyiaBtomawuRToDwQETmX4eDAG85doeXEe86ffhR86AJDmP2cYPH46njcMUbkj5hdMk1QqM6TUMRwK",
  "key23": "3v2YoZzQKykTaW6gSot4UDD9C9UoMAxRSvNPiWr16LZLEKe9RNhy1EaMf2t3hAsivCu8dEZuD7dzeJ46gqxB5LFk",
  "key24": "4mqLCZ1mWHQfWVn8LV3wiukXsvsN76RAjeca7soCvTCHnokvHrSZzzpu691MMERC4kNHdejAEH3mBzfobeYVACG1",
  "key25": "56gGdLezXVJi2ry3eT8t4tkj9hmto7zkJk6Enx3PRGeBBzYgGPb56ChWzBjxnikr16o8YKZ7gHKKgfYsSM24TcN3",
  "key26": "mJALSwewWcAwaTTShnZ3WfB9TBMVG9WZmaotkyokB6cneq7JjxKfLXTF7FFcpoT5rjgQPsYniyrMQdEpfewuKZT",
  "key27": "4gC6ZiPrMTpcyqtTSWyhuhDaeRZygUevyYSKugBp56iKugYoPTbdzux3XUiBpTHaiZQJBBrfApxczxKsG5zhehFo",
  "key28": "4vbMS1d78JovwLVazrQAoYfjr9UqoD2nuD9WXH6wZpC83H5fyixPrdaDh9DuyWxESa1ApPp6P6qKxM4tuH3M6rak",
  "key29": "2gXnvpRnXorpW2EzG3eyk9Mqkc55PVmyuob6pUvQayMaUZ2BcnynfQPsySp1sakGRvmYrsYmagzHvbSdwt2oETr6",
  "key30": "62CDDheAbD2RjF7qcaKGhwzUKfArxoeC7t96TXWmGUd5zyt26y5ZbuVEgdxzB2FtzfDGg5XRGuGUsJ1yL8KF3wy6",
  "key31": "4GCZgJ3vwFmsoAc1hCYRyfABKh5oqAo2d9rjtAQtJ1U71sDjwCsJ59esKsH99RscLoGmGP4LB71LkU2AdhtQeVxy",
  "key32": "4mjzXzXRfkvRSxN1evK28uxRiWBhgvHdGwhnQiKq41ANWcs9p7fbcLtgHDeXtHAA8gzkVYoMG7VWSJpWjYYuV8qw",
  "key33": "2dKRcCAGLeZcG5YcatBC5EN4NntZN8wFiH6qp2wSfdPEdhBuDtibohbRaMkourLScCSjamU4SfsNjfvxZchrdNDV"
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
