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
    "3acJNchtc7M1iJ2BhSXmkUt5yaRcjrxwyh1Dd1CDggUJC88CdwXRRdAoBGxfZ2hLVKaPJt4HwfL6ARui1bMpSYTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23EXWrchQmwTVx1GAhKUYMq8f3EWdk8YmMisaHSsN2LY88wTfAWTeFZZNe4BCBbXFEXtRChumLiTgZDN5cAtmYtS",
  "key1": "4SSfqtnvPjAVH8cWJegHrgNj8XvNTekg2oSYWeBdKi4PNz2x3Tnfc7Mhxy1d7RXSfBrEPR1Dp6vUoETPskyamrnQ",
  "key2": "43T2vAWhDWA7ey5b8c583Fbi4EPCimHWU9H2iWZtaNw8gMaJqXbjqBDHngQBwhjfnJR2uwhGe2GToYR1jNub23u9",
  "key3": "5VnjFjcUPaPNXDqcb3iWDomZwR32m6DSNi1MfCthjqGGpKwg6sdGoD2kLDCCWgeuAnN39DUen1zGtGYbdkURwHGB",
  "key4": "3eiyY3vabFoQr8bBnZjvA1Zj1cqq3yNPT8PCXiTW876T6ZocRhy8DPToxZ13bMXAuxXZMjGGEpxUeRtKqXkHjTcW",
  "key5": "638foyLYC9cCGgXWXtBG5FKFVVFovsZ5ae7XRoz79DqyBBTR45o5HNxwc6LLoNtCwbJUjaTiq1MRaQVdCk5HVsZD",
  "key6": "u54hBUFrVbDBrELbWkpU4uwwmVjkTsoqoZHacVafA5qBSh1364HSYDxSEt7PBksVjgS33yNS3wh8L1rpU15HcKX",
  "key7": "4sHsRC4fYB3FZR1K3iUTxvkd4W7LBg6yvq29SH5626E7GcFyp1fcFn5zSwumzKPQZ6s77ZGf1gcB1SrPQ1Fcjkew",
  "key8": "44RVaMXK3bY33RuMHSEJTb2NJgC5BuZ1mRppkdGxSBMZktpZSkfbyV8WneHmij6NcHYmXutsQ8auzkSWcEAHBnKG",
  "key9": "2Vuk1Pb57U9gLBRnNk7SubxdmJabcC55d7S5gAoxJXbFAXtsY8iEchFMmR259s1DRj5f6oVZhLBsV2gaRxBZmRyW",
  "key10": "5vwv44LWGTV8Hrz4boe6Z8vrtwk5FnjuHdZ1dTQG51LigCioR9csP78mdtiMZdY66ABQhk9tYAvhEskvcbpuJaYu",
  "key11": "327YJjAGXd86VkzfHHsY3LRN5gK53BSyNkSwndEXChWdzmT46peurL9TCFqhFqNAwUHMpHi6kmLJBCWxNjez2ywm",
  "key12": "onGT9MGYN9W1M3KPmJzgwQ2sxrpFz7jKuFXiwPEAoGXzTcv235Ecn1RBqufrk6PiiPNJKRvjdLSbAW7Qd784vyd",
  "key13": "5Lfr6DDx71PiefQ9zJujnZUYxT4BiYEVcgyDHEGEMHhzWMn78azzMrwC192F91NBZnwqGuf4mngPrFDYUgCQ3DmK",
  "key14": "5U5Y39bghft9XpcDQHmSutDBeoy5Dp4GQ2Q2nhZKcL3ZXZkh5xZP6HLQQz1YzdftrQTyzAvckLnrByNLSzzCr2bB",
  "key15": "3T6LjfQ6hC3hvtkzG6sBbEE9JwmLoBos2jMFpWbkg9Biz6jSGWPAsFAkJSMTTQFTYQLgtp61Rp28jWG6eyeWCN46",
  "key16": "DMu9eQwkGvDexFu4PB5JZ7NoPP8CGpFLtGLnEhQWyCYLHT5jq6SqZcpcn1CQqWr2k7tPNVneejcscuXXK1vn7L5",
  "key17": "5avjNaywjop9WUkSXg576GmnoKRoJufy9A3Tn18VwGBKDUfiaJQi4GNM7KSZhPvo6Xwgy6mVZGN94o8vTDykQDHs",
  "key18": "4dsbcG5T1n6VYJ4wvUfQouzMhZvA1W4BEw4LqGsAKFcSgUCZ8gMg34EFgEA28LDJKCzXhLrt4rA8XxP8qViMB52H",
  "key19": "3RFCnFi8BcM5SuLbTusbnv7dME6FHczhvzgoAReJSv91bSvDUPeys1bg3TS6Ak8DWz3Sk4PQn9BDeUBWX5LzvmtJ",
  "key20": "63XfFokeLDeRV4xn6aiWcXJcEqSSUHkvMyX1BZForC3rbpuyckqxq53Db6znzMrjRiFd2T8eQxZ4QsED4ea7Y5r1",
  "key21": "5YG4TCN1iPAQf3mP8jTijzwRePUCMss12A5DgwmN4WK6grkdsyV4gZshoo9LojRgEZAAuP9vhG4KfzvkkMHHNRPQ",
  "key22": "45Dmej3KqBJaA9mM4zZTCJpntxHmoa66s17zGT8cR3kTQgEkeyEgd8zqrVhW9ZFaHe7VAFyEgHFpZ1fYiTqhZEVS",
  "key23": "4fdQtC8qa3q9h2KyDTpaE9bH8764cWkmAcuJQxxBE7PF188EEWnDHnKmQj6piP5NfWXgj2AT8V3amDTdQ42EzQuT",
  "key24": "2v2N78SUiargkAFP4oqtDgmziyqkXeng7M2J9ujCRDHEBBCvKJhMBJdTbyvWh5EizEDYLoE4Jxfi4HirEZYfVPgC",
  "key25": "3NmczCzMeAP49TdGAAV1MLT37gTMS3vFz2mFRJAvhih5L39vWEQqpXik3Zod75LYr8UTAqggBqKy6NPATyBYJt84",
  "key26": "675p9xMbyUvqfExAGjFZHKPMA6zQ1NeXz4TGcM8v6aoygiEuKDpjfhq5pJpLEwXr2XHqNiBtWzdeA2RcUNQR5XSR",
  "key27": "5rB7JnH1Cas7UR7Mgy6Q6PTLaDwAKHG3g75JqkEnVdunDhSVogTQz6qcok9xLrXDkr5enXBkxnErQP1FbTa6rNRK",
  "key28": "57DkpjnjvQTjgCdxBCfM1afWqXMaSQjqY1iEkkQUDe8xemgm5vkP5WVvjpviAiKk97kqdcKKVuvveTzBA56mUdep",
  "key29": "5HgDT2Hw6V8kZsqgCmZSiTdbPuEvX3CzQCe92EkLXQ6YefpzgzBnaHv9ssG64TaNwDcTCBdQej4p1azrdS7TssPP",
  "key30": "tr6iTnttCUK4BDgig2RfPuGz4ngopyLnUHs7MnXRo9y31oMbhE8DjiSKWMmGn6Cx3L1GZwbQ3wCap4ofogPjuUz",
  "key31": "37EwA6JuFTzhvsVyoskb5Z8pDp3Dc41Xnxz1YM4ejti9NwvCRYxu4KC3Na5sX7G9RFKdmzX6TSN2qBKaPbBTEqTw",
  "key32": "37sZWm7TZyhB8Tkok6UpTfEQyi1nMvfSLyPVu9rdW7Ya8NJCHkQJw54xCWwwZHt6mmVYqR2C4MFDnnBU7ydR5fCG",
  "key33": "3pTjNEwTncZDHSmfQ3R1d15iU6UmGEqC6AYrPkWWfwtvigof68qcFuf617oK7NDdh4XJ1nETwSPoYVUApcX8hTDe",
  "key34": "3FLhVQXEg7Zsx2b7RSU4UYS9csev8VBbd1vbKa1XH4dNVwrXoAx8bpbt1dkA1w8yAmPFCVPmij1zrr6NUSDU5z5v",
  "key35": "3hcecY13eHSXM8MeKkGHS8aG135cQa574ypzjfjpzjYafDGSuKodrAL9z7qyvcxEMmahmACNyji9yQEHSpZ6yL9u",
  "key36": "4wekHbdqx9ZYPFdShL4obozUeqskWz396pc8spR8VmSBVuvFkW9F8xAeQXE38CHWyq8ZZM44yU5ueBMEPdjtFfP6",
  "key37": "3JJzYzmrt8XxJmDLULcVBJogbkdeowmBfrSGEuLbgsan3ppR5UkbuhXdrhVUqDjKkx6CxEf6SZJzfH2gCzkvWYWw",
  "key38": "3wa8WKkAnjKS7hiVsHLoPSXyi4nt1MKmm7bDd5kANgSvUv5eVmkKaTbYAFWCdskUx8X84yhrFeESsMuMTpknbq9M",
  "key39": "28KsDhGEW7rZ2TXGycbkeE7WqU98427qAmtThLkE8tkbNDN6yukc9NyfphQBaqFdLm4MUhhUtgSQoRMozArXRB5A"
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
