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
    "hiQpWzrgEj7x6BMAjd2vhTGzRwCTrMkhvgvnQVaLcZHGjL4FWWdYaTw396YtTT4J9mKhuFmWUT4YCTcPkuzLHWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6nWzRdanHLQb2bFpBKtmUTK1tQiSLwSkSKvw8bWwKSVGcFrUE9YHvaS21v4r31ndUv5LDUzVT4aWzdF7ceyJgZ3",
  "key1": "oRRiFM8RUNwV51A7uzX3eUPGNY1H6N1zgotox34JsS1V1qoexuRbivTK4EvenUwy2d1znrfLsWchX2fjAU6yTaB",
  "key2": "3skExQaPs5WeC5WfCQfY6xDGHeVdzfnXo3wN25dL1LLWcuonVxZdFY7W3WdLuMXP86Gy4qmCLoQWRvZkayAVHi6E",
  "key3": "LXHnrSNyb3fsA1qzGQ5pRNByR2HEKoLFP5EKmjwXd7viR9ZkLXqorsK9myGj7PdagepmKnZ7rSPSqSEnb7gwdhF",
  "key4": "2fcPqJkV3FFG1R7Tp67bZWYnoby3tPXvLUUThX3Q9HQRduEvyP6ypbWvPUjevqe8ULktRfsNKEy7Km3X8BYagDpn",
  "key5": "kDBf6gyzuczFBN675MyAwzEAUBqUFVgjxadQtNqMDRkaCipPWDbzbeSZFSN1vt35FfiiMVKVXfa3SgiAnNdTfkQ",
  "key6": "3T2hHNmLRxxGv4HW5Lasc24d49wM5kcpaCeqeZfq3A7S5oYnYtpZyXTtiWByYL71HXTpSYaKVHkUaF9FmX3Tioqm",
  "key7": "5ADXNyFVuxWtoQCihDweQJrtwMLrm8BbEc6tEPxziSNpYBLXcrQwmYMUKcynfbXNJkryfBcF4t8vMFjiUBEa7eXS",
  "key8": "2CRK6gKtJwhi2nV2NkHDS9yZWV2nEbA9vED8PupdzkYDbxwVHjcQTHu4GyycHMWN9pXMaJLy8quDgPv3Xbooh3MU",
  "key9": "4Nnvr2qHFv6G4GFLdDgPZPasa1dwJVg37cb4pWGk3vAfyrky7YiLmjqKpqdoeCvtzjTuf8ddPNLBsENUTH15d8v4",
  "key10": "4gYdLXLRZuoyS3c9UQZ2fp6KjL3jTx8PdytAosaNWoi9JjDudaGweX2hYsZcXxke9HGNncF8Qpef9Mz4wDDhmJ39",
  "key11": "CRSz5MXnwY887NLGBesNQEmyAVMDC4YnEWs2svjdwDnMBkdiLz7ogunagbUhk7uMUTuU7eLRLygeuE1oRpHuV3Q",
  "key12": "WKg9FKQLcoYUAqWpAW9JJzVDoi2JQCk96MqYcCtisD2zaAxHK9MuZgvkLkKk2HctZwmTiQKzW1DdvmhYwg3AQqE",
  "key13": "4dp2wKraGHf1dfdAysMMGGE3VTeNJ5YsFfLfda2sFhnnpGo4uUCfVty47aqAQry6uWqRrbYD5UgQq916AQWcZ4oR",
  "key14": "2nzqFDnokokWB5z8P7Lfgu1XjZEuMEPhZN4VPZ2Bwuw4E8Trm8k92W5gk4zHZ7tusWjddoKoF6ecPnfATLtxvk1J",
  "key15": "21F7n831DyCzrK6Y4JGLi2ziJ4tcuUUyGBQ4CEiHmb2bzVXELLCca3m3t4Gs5SU9ETcxLaXhqF4cgJCuH45yd9Ku",
  "key16": "K34Hi7xKFCwFT8sW4SmQYJhtVxWqeww7tfABYD4KCSwJRosdKrgRFa4B25D7uJsZqeYuiLveF8hkkMFWPQ2tMSi",
  "key17": "56RTnGrAPy7jvENcqFB6RDdKPsgimJ25qrQco33hsxTwYpFsh8h7RdWJre8LtAvGXfphzrDabASaAmCbdSqY6BL5",
  "key18": "53N9UrhJq6cpA66TgUWygpCw7HSXCaeF4TMJsjxLgVcqqCKRcPuujuA27mAMyM67o12S7Mn7yCPWh99FXf9MJgR1",
  "key19": "FRbUfdp6GV5hsKXTgphgcEzerKatKEsGhdvGMuPb7bQtBEDP1WR8W7PgRpC23fd7hssN2nzrH76vHmrEunZ624a",
  "key20": "4jMktDKy5dCr4zdYPTEV7U9UcFqkz7AE57gZreNNmW78fBFBdhqgteN63WsjGqRf4vFnPrQWYxaJ2XHAem5wVWYi",
  "key21": "2poLTkYunYEdn3C8X6pfMijLGysEsbmxnz1xaswAnApGJxkMr7qxJHgasUNkj7155kVBbzRh4VRiq3BhRNad1nig",
  "key22": "2qZ3pFmk5e9z67kTRuGfN6ca5bwtWhsy7qKgDqcukzR6QubwW3SecPdg6s7wiA9n1EEVGyBThpNXHsSf49zteBfp",
  "key23": "34NZVSERGxCkZgNBj26HCGeYRPK2BTV6AaDTYYRpp7t9u3YHmsJGgqJJcEhzDzejF6boKxDmxdxyEJzoVJ3XWiM9",
  "key24": "2VQhM2k6Uyeju5bRfDcLW4JATv14cDnsf6Fg8cTcPjy7tNggZDS7qZHhTUpPnqiaULTXF2VFgNVEqndEeYTpBLo"
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
