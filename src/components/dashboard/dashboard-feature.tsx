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
    "KywzgQwuu5q7oh6hyEnT6vZxdnzh35dZG3uJYtmWA583ys7mj2hQBX7otLP6UQtLc4PMS6FzuYBt1MZ5DuN187F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mcHjQDxwSWJ6SU3JjAtaDZjqaEzPtapuj6jzd8AwuxMfgUWchsHqYGhy1tCY1Zse7UGckGDkwV1TcHAgmXKepB7",
  "key1": "cH1Fd4HS24hmuiYfexMfu6DmujojUrcBGYdNLAfk44T4o94dr2hMF98fpZTDoVLDNDF8Ssk4vXeLaJz9cbmM9B8",
  "key2": "41u3MxoDHxJJRGgS2Lv6g5YFq9GU7VtTFdibeSP6hbbPVSR7BudzaSWAMMyu7fxqoLmNVDRMET6sq26hspwUNB6Z",
  "key3": "3W8H8Bg8ESCFdj89uFqnCqRGuBCneXWPbS6djodS7ounxpRF29vrTq19LuT49aL4JkeLP6TCW8nC8SabtWnEVo5A",
  "key4": "4dF5oopHkvWkfTp7Js8ZnFy2s9T41V4e8qiG7dMz4iXMypXef7epNWtuREeB3wRfytALnFrTLSZw987iLAhCtdTm",
  "key5": "22QRoQoZqfKVbiVF3rNfAEAYUSQTubhM2EDBdt77ec8vxjhyZ2FSU7L512rt8HHTtBWoyVq7ch8W295VPqJwExaL",
  "key6": "4xiekg72ayQej6USSyJSiV85Z64UQY38V5ZVGSDJSeu9KzDPaUXhcTfrgDwMr8ZRVdYE5VbJqFBAYcYkjP1V2gWe",
  "key7": "25ZHsaqmRm6ake2Bo4WfBeV7PFisBbHiUsFGKAFSebX5SwukA1RpCRyTR2mhj6id6pXW6qHgvhktCHGM1npEairL",
  "key8": "3tcYhzZKPcbrdbncRiNHGuj69S473oNUCmT6p4n7AVXQrSRksXyvcCrmhxmye86xqCYUvpT95YRWxRDEWdyBQMUb",
  "key9": "4ZfZwdgBQzcj6agccis6ERBGKyr9ZRh4ug69CTnXNiSwPSd2Dmbkyg2F7ACnZeDjYYdRfJ9hSkBFqga1uPJvX2ja",
  "key10": "2p2y5TnAmCivhHKfcoPJTNqavzpPcUWJc28nhJCei523FgoNfvTrfF9fAJfNvSkhhvuXQ2foNVDjf2NeRXvp3Kgf",
  "key11": "2hY4PV9R61fpKY2wDSECt3ZUshw68WPzqyq1LwURW6vZs4pJNHD6zyJL1gEvS7RUSYdzYWKkRrSsAbFqTDomBXaQ",
  "key12": "4dxvEaURtSHasPYgs9jfgGUumzCCSJj4vJoKxpchLqommoryyWA2go2FfyqDNC9DmWFdBKvn5NhtH22bwTXDSjrm",
  "key13": "5ssHP59iQc8EWxoQyT7cyg7FL8dsA3SSTWwQiD6ZUJdpR65Ydim4d8AFL6HJjqaMjw2RSdriMjJb2oJzGBteBLX2",
  "key14": "5us4Bhk524SrXwVsh1hsRRBE2bE6RQnDvrfb7Dbcx57Q4NHod3ZnqRtH4UWAkoVLKRkxtWJmFPbL8bnXzq8S48Wk",
  "key15": "PQQ796tfBkfjYy4b2rWgNfMR8zWrMV9t3F9bwNfUgDST7R6e16bvharmGngnPAtSeWsxU6P9MjLyHZc6Bm23hXz",
  "key16": "3TMG91F44mn3ewhF52dYnMRYDSXnfRti5s4spAo84FzQHxXbv1LiH1T33EjJHPAt84TJspyfRqFEJuWFgy7WSzdb",
  "key17": "Sb4jVEXSYLnDkUA1Y1jpAjAEhkDrMyDoDT18rkV2rdEvaUMmcqtA9dwECbtRoactrKDQSRYpqMhNSrQCAcThBsL",
  "key18": "3fpmkgz8rWCerf2pCNT7sDpuoWa42ZyPfstJyfqCoKsYLgb6LmxPbXGxLXw9qDfMt1DRQyF98mPbyQzx3vSqp4wr",
  "key19": "4umbtcXh7NYWs4herVcx37ueapur1qcyhVoV9LsdeQaaxuYoecjE5DfqSj5epivdWNb6xiV4UaYzqz37Xi2AVdh9",
  "key20": "4GFUkvfovvsryDyAsYVZwf16hWC8FYEHYyQ1vPVqs3ySp5JY1AcLP8CzYrdCWV15DBE6ze78iweZ5idFkRd2uM2F",
  "key21": "ZXiNBVzCYZMW2x4xDijnkVT6EnLQ1DfVQxEfebHxWqrtbeYYCS3AUJ3QnjC9Qk9sPYUDueK6Tq5Nzc2tSTKQAnS",
  "key22": "RMCcfwhygBuVZavP3LW25xoMsfRtSZJdiieQbdsC5qgvKBLNFzcdScLi6rofdHMkwvJ8tFwZCtt4VNYZMngfGuU",
  "key23": "48Y6v6NPMpcoAgVTqt7Cmbjho19vW4tR4njT6ZV8gqFSDsPyGJqgkJxaHHwiuVqy51V6ttoN7DmxT7UL1pe6e1dG",
  "key24": "KupvzdKd8RFekE9nNBiHFucqXG3raj9TZ8XGJP2oXSvYvPVgQ1YqxTnNFw1fTyksfVfLQoxUZEcH48VCX1CtqWC",
  "key25": "3vUaBWYRt1cvxaixGuHyqsQH18rpjmNLr2yCnyN38yrbHyjLozyV8tXAPP18sqRFPUzTjVKqnsP4M4HmV3my6fTw"
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
