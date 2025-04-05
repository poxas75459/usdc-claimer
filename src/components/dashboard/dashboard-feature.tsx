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
    "2LWEyQgwxkK43eekpxPYTifVxxZ5shUbAaw99SYJi6tw5JQsy1ndcvQANqZEGVz54jZWMWrXuBAjbzVHD7LqsrBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bJkqWFR23eteZnXhnAD2PxpTPya8133rfiNrpUzRf6wAMQxUiUJhNiheecUdPRE6mg7x1spwJPW8srKcUoLQczD",
  "key1": "4QyKzuq64QzwtvF1vGfvrMEiBSWaHUkKueQefkFwNVSSCzsQszhfmwzzFBtCKzVa8ZvRJUA4AXV8vKfJhDqwCvnw",
  "key2": "3XkD2JnNyYwbXpG9bvnoXdgYFqN58eeBeM8KdyzSWwhUNaT7qTko3C3sPTDD9LWfQFt9gkfho2rc6HQNV7dSnBn4",
  "key3": "5oRYiSM3MmtRrDU2bGuNb1S7RyiiGTx94PvpPdrPMng3g6TkBTzqfB9BWVAWyLdAwtLqGrLRX3QdFKfXj97urH3h",
  "key4": "3SpwLeDv6ijLkhKy6MGwmUE3f9mHXqS2KoCDdPBPMocyZ6b8wKH6pcaKLoTTPWacZVhsPmBWKdkftXu4XuZ9UGWY",
  "key5": "5YqsVXT4zeccweWE2WHhNb5SP5eHTJZYKT3d36XuAivStMsZE2Kb8DHMYv56vAzQoqPAmamU7Y9vvzLE4ayc5PJg",
  "key6": "2jTMfuv6VTdzm7EC2JDwL6DPadK8TtwmL5fhQatdVudXxUgVkcEsggWF4uhvyV2akxsBJDZ6HBfeCokTkngKY9JX",
  "key7": "4aWwhXtrkU2R6yoKZa3TjUjLeXo5o9Jxxiqj8nfj89PMzzdRHmMi2aXctsBp1WtpNwCdzDVGVkHShrM7gCVNVmAW",
  "key8": "3jfg6XwaFEHVWKHa7mLcCRTfdKdWdJSZwgWJcps5uW2PJVFtWxBuMZitVGjecQUqgsvrFXkCrdHKWpnF8XhDcEH8",
  "key9": "4r52zuXnZoGWKBkkRrgjs22m6ca4J5oWoHmnJXXZ1orvmX6o8z4LYAzCJJcZ6EfddHF4iqTah5mBpcdBZCJj5xXR",
  "key10": "586MbLnrFmkj5KH9pcBrVq2v6UZzduN4bcn5z47xNwZSzCUW2LSc9FFxuRj9AKRtDKtupetuhTeeYC68LKBAj9Df",
  "key11": "4NiNPP7Gpyx2PCjqZ7tCQ5wTLvLkTbYDZ7WTyhbPRv1uYW84M2JrkxuvfHVJjBiHneYnUsPjW83V37XZZvaC4gm7",
  "key12": "3pFKQqBCvB1Ugx5JfRanxC3c9bTpJkgidxSnaKhsV2XDSQY9Sk926N8mdY1nyfaDtHPLBoi6hBfBRURCHvQAGBrb",
  "key13": "4dtyoVSE8WWsEkzRczUY2J1FNBcWqMzqKx85GLtmG4HB7CnkG9haeXpZugZ1TbWmncsn5hDANY43WySiknwUNMs9",
  "key14": "NTjkpvXA34fSKeVaTjvt56RW4sRJpXTogYgvzmzPNsVW82EzXTcNDSCJsytDfukL7tphUExGfS5bYppc9PuM96o",
  "key15": "4bqGgrCbxWrPzEc8kzGqMN8QYEds3D8brr1c5PnwAB7qF7hMmTxU5PWxD4WQpkQXVz3MX7xVtbRMNogx2DQetyiM",
  "key16": "5UnrHwmpbnMVErwoFzYM3dukk5p78dKQoEDf7wVvCngavpwyLdqvqvQnqJTi7wnCuZZopn4UBWX75PVVyDTnPr4N",
  "key17": "Vpuh2MqgTNwuqJUYFc7e48rxZnW2U6PhRUHz6j7AK68SH5vti8motrNKnPVSUkdWiYrYZBi2XDgeAKUnpFZwPK8",
  "key18": "45AiGZWNaCtZzwSRUkTic1G7EYgJVREQqhwHvtFtytmCZPb2L5ExSDbsPR3bJNUD5APwPKasm9PmTtc4GCNWAbbh",
  "key19": "soP1sdrBVFPezTVhjtczk3TWopN7mLqo9s7BQCryNTURkKcnZHnMfz9fQqhUH2dZeETtqHC7EA4VL8AUxfsbV7C",
  "key20": "5JmxvEz8tw6QG6nJafL4tafgjSeGejdHz3FNkWmR43URHaUZ71mvaoMrLf8jMfkQTP8wbMBH3RmwL8WD9YY2Uf7w",
  "key21": "2PQiumKw7CXEJFgQVKPArGahqRxpnA8TYMG5gry3PD6z8SQdp9ZR72wrkWU7pzmkwh7xzT1XxxmeD8jjHEFAS3jH",
  "key22": "ZeCEuBy2amPU5yFsSVnEcskdqi2JG6875bvdf87Wgtp8RJQcbLCsduc6WPiUCTdcMWmNCz2Hn2KFuoxS4diNgtR",
  "key23": "59UeHiEbQmzXGgSBNEZrSZTRkzi2nZKrwyXxnKNtLyExVuvG5fxh6uxwRwL4ji1tbp3BhDcKVn6ZTPUB33s5d9Bz",
  "key24": "51VS9Hcywen4j8kHErWDwMJaS5jKrAJeh2AwuvDdeh1nP8ogRbM8NNoYMvpeT1mkPBKeDX5Bg5MxNDUzHnffYn9r",
  "key25": "5UBxL2sX6vLChHqLTaPbieXLHY3VE6aDdf8wYZARdsoVn9sDBzSZ1ohtZmbAUSd2jAovVY42tgKFZNZC4cEjEQ7c",
  "key26": "5QUC78nknJUG6LFYe7XFWqZbMCJbayabxwHLVhYGUBuH8FFNe5UuYudtaVYtR3aMd8YRu9KkEA2QYj6k8PvvAxjs",
  "key27": "4ZSGxVAk2Y5BN6V2QaeW2Pw9JHorzmYqFqXfAvithW15JevDHk6qac4LpxJ1nHiWM2XSqGEVnxn5GsLWt5Fmfy4x",
  "key28": "xobtBPWm16grWAJgWMtEN9YsMoDnZ199PTPx4JRWrY8froCUvBeR9zmyUNDwey1iRZSUYzKP6rFSPAEihAJzRDM",
  "key29": "5t9qibL7dygGcgF65fnsiapazzAiJmGgjDt8yMre8bHnr3a4LQs33HaSYhKxnH1mXfcMTwGTKLc9N6DNmKLgqUVE",
  "key30": "2dWco6qroeeT3BtWt9PpGoPR247cmYWjpDpuNbn92mQbDHUUAvt4Uqdr36ZCgbVh4C5AnLYe4g4KkHfofwarBc1G",
  "key31": "3ihVcjSfeYb5D7FJMvNhPuSBsY8xiQeJGYaGtchRtgHLr6kmhehq6avZoYp51Eo5Jrikq8A57T2R3uAM84cpDeUi",
  "key32": "3LvBYB6bWAXqnBQgUQ2ckUnBW7jeDADKkse4gXqEb9aa2rvMzSoKNA6WcTxYSwgJFJ5QpgGHLYPeMHWTf4Gfkwsc",
  "key33": "4qyLBSL6oSScJQfVCpKnmn55he7xTBfpXo86PzobTAf2EvbjMg5uvAbS2Vms7gjZaZKyCn7wZ92JbMMfVymGMRQS",
  "key34": "4DPdy5DnVziEm8cTuKNZ8xPJLR1MZQ5qpeLFGpjmPZxVDT47KicGiR4PSypsdTGrHdqUALErjfYYU3if7SUfELe6",
  "key35": "NqmosPCuBoavgoVjXPM1d56fhXXpizFZAePkpJEywZwjdHad6s2HnSyStmEWg1cz8dfzodkrPSRPCopfckQ1kB3",
  "key36": "wvS2KJGvzx5bgnypJMj97jmnGcbK4xP7gdYtYZ7uD6NE7nawnXid8nxPNfHaDCgnTG3dDKbxSzLPaP9pMQ6nFEM",
  "key37": "eKbB7ju17JAatuBcCdrs26G9nzKNtp8iEqHxwkjNCgJjCSC3WDAU7tdfJrymwBFY1YiiDsqa3CMx2CLTTG3JGcM",
  "key38": "39Wmb6bWSur3JPbTgZGEmJYsfBLhHtZu7tByCZj9JVW112ZpmT9ydeFD9VwSt1i2q6XwuMwkzS8EtyhR2asKy9hm",
  "key39": "RNZth9Yni4426Jk8MPL6RCAocBShLJoxbwCUxtUWsR9r9zbXZz32RSkwFpYTnPUUVJW3BdHp6TnzUqag8YGZScw",
  "key40": "XWyhuYbMAxc7T3KaPD9JiBMJcUMMYwgpMJy1s9JrvBAD4GR7ynF4uttScX4mTD4PEtcG1N1uTXeVR2S4dZY2aEz",
  "key41": "4dZg7eSxw51SRkJYmQ29PrgkZSxPrJkPdsEjPrH2CGYcYqPLUJD26p1vbGQ11L8Yb8F3PfdtDfpcCUNzbNayPNjp",
  "key42": "4N5WpE1YKN5r1b4NGGW8RjKKcPRAxB4SJBgCLZ7Mo93v6bSGvJxHJJDggdvqPFpJXz2mgCFWutSKTga6Kjrbb3YZ",
  "key43": "4yZRpex8n2eTXu5AzcCH33b2wBjbb8WZTSh2NcduBLWZVV5L8v1asbjx5jVhVfn2Q43GjT5bTis3wkdhJoV8ctYk",
  "key44": "3RAF7ER3ZLoHSrmJdn3Ng1h4698GC5J7ffXg2CDyBWXWaeHqSC6v6Ynmo9W6r2znbVG1dUugr1vuXisDz5fgtdcQ",
  "key45": "21NnFqP58M7Fp96gxGm6UbeV5YV2pcjivLHHDzRkGY3dhFDTw9rnNiKYu7CXXxZL9qy5MoGjhLx1ZT912Su45UiN",
  "key46": "4qmGJpr3DQz3qktf96RGktqAnYLmWvntJerzM7mpi1a2DuasCe9cwjAC2WCLeNG132Skh4Vsi34ebtCtdyv2txMA",
  "key47": "262Zwt77mu5MKLYvtcscUe6j7s2TdrL4MDe7KFLvUvc1VGbZkdt9HYpaV8GBufVuuGKnodBFnPggzPHKsRyLTwqM",
  "key48": "4SWqD8qgCqapHRqHebnqH8V6nSq7xV6RDQEcgEXpuu8eVRu5jiWx53g7UHnS4tpX8rcPgsyfLdw62A1HjrwxrWgH",
  "key49": "2qJgmCDREHKzPbZGgdTCsvVUN8yHzXiJReBPWHBK1Yr1iNoAYJ5D5HSzM64dX1nq5cLFVLdPhTogtVYrS7tHtrgB"
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
