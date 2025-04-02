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
    "4Q4LmPoc9XYneCfaTcxo2hHZcyLbj2jvkCUqnHTVw6NuZRKWSfZnzAac6xxXdXNgseVMegASCLjvanXBvBLSvbtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T7PSNQNRxB31j5uAxU9GmEcq7xSJ73FggtASTkGCdx7gEc8LsJGNhkpjx5XYqMReR4WqVCMqoMp8aKE3pXs4WCy",
  "key1": "21n4rBDMP9mxxQzKaK7uLeeH2KbNxmfK2XQs7rsSrH5Fgs7zzKdGpxLNzWA9hX7jNhXmQtsLfcVTYoRXUkLmuPGX",
  "key2": "3AVGzPgeWm9chD6hevnvP9uFiEwacLoyHhZ7PGPS4nPqZeYJq9DctD8ENeYpMrbskCwCeyudMRAfrkZbvmyQyCQo",
  "key3": "2RKrdZHFGrGS7ddjLBUadiZ73a3wx8ZWuUGC6Qj728tRtxD5QrSefPSosCUZNgMMDtcaNLpGqXJoHz95mayLNDR8",
  "key4": "5UkDd1hTyH65Xc3c8DP9yYGFeh1EerGZzjyruNnA29HoYziyZh9oGecdfvM3Wc2U1Tvr4Te48KPn9nxbMn54aieZ",
  "key5": "5iiJwKGs5ctLUcXucfXLZWGMw5KyRYwvJ2zoapRZim99eMTyNoY22kbV77f63jcueKUTqxxMaqrWF8xhyBDxytd6",
  "key6": "Nc3oPQFJECkDuPv1w1WE3fq2q1HE2MsPXMqkNMwidBCPuSWqpL2yDAQRCt8vyYq3P4MNZUbiPJBtqbvfV2jPqGZ",
  "key7": "3nrAdwK7fwBovghrY9TMks2Rq3Ud3gy8LFfcc4L8VQeXJ2XyBXxfLBY4VKkrBLhEv9bCZ84mdvXDxLob8CBrumtX",
  "key8": "486UJMWaU8uAQgjFLprmtzyfKMKR7yyi1KUHMxjEBxuCpFEVU7BgAYrCcPiGUK1j7QzvyjozTxMKdmgizvZ4KmRq",
  "key9": "2pHVZ48EqdMENGYZ2r72cDTiUzXyJUv3G57Vs7sCoWCkcnRd41DMycijEpJDhF13yuWcS4VJ5iDapyVWcrvrk2rd",
  "key10": "5LVH6Z8SZRKnecRXntqzKhCaosM7wmAn9y5eW2DGaYpDQYpKh92BGFx8wDZuf7SfAEQKU1NpyAiiAvd9nzJmjUrt",
  "key11": "5zp1imJ7X7YVUwd8175CvR5aFNk6XY1sz2YdfR8efxFWnfESYrzGYTLoVeCmC6Z8PDaajTQQHrg66i94HbitrHm",
  "key12": "ShmvtU8j8GeMcwapiXgiccGsQsgVnB6VdfqhrdLtXjqjQEnda1jDmCnksghstpouftNFh9btT4bQ3ZuV6VRF39H",
  "key13": "3r1o3Kc4HiZxnkEQSUr6s94KL9wWzVi5g9BumadQqTQwK4sJEiY6MM1nMoeDHkd427KswtoCnwWBmPfEEdHGU6De",
  "key14": "5Z3Y2gSQzZh5pJ3q1z6jZZscdeCgVRWazvEqjmBacfjbqexWVbqjdLcv49ToVAE9hnXDwDNgda6uwST96hSUEuZr",
  "key15": "4ynU4adzzpzfM6QMxU7e6kcVX5JGbE9Y3pJVH8vuYk3Tau3DVnDoRmKGbYoNwhKjyzkfRbL1YMTw1yvKndXipEsd",
  "key16": "67ZuARC1YgHgP27NSRx7pnnMap4kJSPaWAKkEiduZUmpRok9TJMaejjxTDWJVaS2FYAWq7Pe3u9Y6QGzFYD5SKdR",
  "key17": "463QHGGQtckaftiq4xHSQExDknbfyEdSycsHJ51DwPaXcsuLPgowoCzrtiKTENhqcNaLu6ZbBWAvzgZ2PDsWnkMD",
  "key18": "5gKwvw16wpb5T88UePUVVTQc5TizyqciiKDmxQymsqwQEzXopyjiXaXNG37X6YLdyXtRxMX35ucu2QEXNr9PYxHM",
  "key19": "5xHbCiXqrJnhMj11FdmkQWonGHmz8QH6pg9SXm5NL5ak4CcZw6zisbtAtohQbR1tvvRjkmvLCksuxmwsGMteSU7E",
  "key20": "4GcpoAhKER5DLzfgE2d7C5XdtPCPrZNiVSH9ZmAR6ymTiChqXTUbGSgMKCW2b2BaMqi3gAWsK1m64iQVMrQNUUMY",
  "key21": "YMAVYqznx2UzDdqDSGhcJ2mZwS2NAedVnPoZJDPP52YRfAJ8vqA3cUXdx7v8JvgEE5iLC7yrrkwWL34jox52DjM",
  "key22": "3rm9EAY9agv3JoEyZzd4BcpGaGJMW9pCYwaZK4CmgcpMBSaYBXwvZT7KQPC5GAJq6Heo5qLnXAJrFrBG1uyNwjtF",
  "key23": "5FsvM5UBkx8BgxXESgSgQdQgMPpJ66GwdN3UvwB6rneNekS7psxgRV7PFqR7cfzankJ2rovKGRzDcJ81xK3MAxxu",
  "key24": "2tXMow4ua1gEbAFBe5JZnGxintc64tct9TX4ZpjaSDGmSiafxDLqQt9Tf39HJdAjh3UdmJzimpymYqCzFawFEGP5",
  "key25": "35Q8nSaavG7qt4d92NqaMaLidcq7YK65MGzVSkaMjybs9FjjmnmwDgn6mWqQDc4nwPCewue2GZTycS627F2esJD4"
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
