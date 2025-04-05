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
    "3g7527GF7eXEwxQ6UDMCEMKik55r5hq6GPMZrtYQDLpN5QTnQAYh1G5biEhRfuFjc4FSc6ZLmZ26LPZk7Socriiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sXKDL8DrpcMN4ft8pkw44FkRrrtxpD4S6mDdpURSvMuZqUHEsYbcUtfoKzVqVc3gtRRpyqcqToNeLohB3fPohY6",
  "key1": "49iZLmUmEPY1bW4SuVZvpHCicL5VTnbnHKA14HorVpu4cpokYKzrJ7oqFD1SXPNa4H3TCYN4sMT6Pdv2etUKbbTs",
  "key2": "5Gd6VmcvomycfbPA1HYaESSHdyDVC7fn734dBwtrQvCWXaVh1Qz7tmE5EeFjYyGjwcwoSmzDUWC4YEgtxb5j9VUv",
  "key3": "5NUVymiN5bTAhM2fHfZ5AK4K5Y7mrShhLKrtNaXnAvvKYAWk7VHxcj5QCLF6TVDAGPcgvoCSrDQRJf2WAp95b9KU",
  "key4": "Y9xXJ3w7WNCbfB2GfBNEU59gMy6BrWdQPoLxGKad88zUuSfLfZtNK2NYGL9WjUouDK3Nn3LehuJ9nNbpbno6TJh",
  "key5": "54tHv1mRXAbbpfaEHciC2SgkPe7mxJJ4N2vBuvfA3BffjtAd8EgWR4a3pM7jY6inHCCWZJVZR3N1fLT5b317YnCp",
  "key6": "5pQRVP2RKk2CsmLmLkNbUwiqp9Y825wUa1wYJD8KmzFpP7Jt5BjzysnvTMBCqT3PEs4dsvPrcnRTetL8CWneMwzx",
  "key7": "5yTUABwKmHwNZ6LrNtjsYtRKfxd6o6Tn3ypdjqyM6qoVcq9vBLDKJNg1jDkTBCwp9LhVm1cE1ys3wcexGs4fGa2D",
  "key8": "5mog8Z8eWqmLtqa2ae39rGMKk7crY8msAJSD5a3W7yehdxb8LNcXEyHyTL8mLVpD9mtkhdYSkkqfgrwNDaeVBQF5",
  "key9": "4jHJthQcbXuqcmzYz5yxhAkCcvGQX57ReR9LAmC4ejKHyyKF4axGCMamw3zMKoJ25Wpw5X5cMXyfJayZkQ2rPVcr",
  "key10": "ebYw1UrxZLAymh1e8yMzpz9FgDhuuA76f4dYgvxUxbDA44r4Sb8cmFUT2TUGH4jE1jAn72ZQAFV5CUsKrz5VQ8o",
  "key11": "5BvctQQbktAkR3e28JeLRsu1ss9jPZem263yqnYDtPuPsHHr7CYcYefo3eHEJutkGEoXau4vXqqYyrfZ6yz7Goyf",
  "key12": "jr6r3MJkx66qWSY6wNAkLfDxAdhuzMiFafdCgL5BxSiuKA1fvFpwNEhxTmW9xfWiicv6XXYiRLbagA4tXtbsgzw",
  "key13": "31PAK58fNyqzVKw9t58vb5kTC13mpr4UHAzZHke8yjLiC8dYHjLvL1KEDykt5aTw399gMTH3ciuKZGNMxAGk5Ckt",
  "key14": "55vxbepXJFvy9zmuMBrcUPL2r278efxwM6QV3ugaezf8tZwYjMgajKoU2DPCZvtzEjsBqodu56bA3miEgHjprUTX",
  "key15": "5tXpXEWezKEXYW8R14enPzTEs7GnCNhAU9kAj9oK5s1vCbu1epQu5k2nNBpzLwGFGEjHCcdf4E5XuLdX1wu31MBq",
  "key16": "4xUmv8F1iugaSi9mtFETgcdD3hBdGyayg1Nxef1Zp7pFUmA9HS4z9Mm2UCMsBrqyc5bCKrdbFNJo8VksFsPhT5B",
  "key17": "5hQdqN1yJ1fQgQS3bC7iyC4qiCrqxFCfcwEXQgWvNHpV9dfqWmErK9orrpRHQeHkUgwJHLf8ZkUBWmF6WnPJfFi7",
  "key18": "FX1d4SXbBHA3mbqN6HjR7xHZFPFa58KR2fz3EJw2EJ9Ny1ETcMNHvPjqSQ9tGiJQok4J8cFzhqwkQoQ8o4YX515",
  "key19": "4iZL7gPKParpFEj7o7xMZFSZF52Wjqa8TQ2nbCHMbEeLHZnaUBkT8RHYK1rk3bqKZF4q58LKniBx1ZTVp6EneyZ7",
  "key20": "2izgUPHkQVyDd5bsMnu2gojcCjJA1MX5Vh7dzc3HbtnNCQZffDKDcUATN9wYYQn3tiuSNtqZFv5q5KVaPaS2ivy2",
  "key21": "3K9Xm2Pkvr99Nx7jLcEp5Nur9mzit7LWdDiCWimNmqZakCXXURAjDxi692c3paRTMzd56Bqv1C9h69EvMPc8LTYA",
  "key22": "WtN76j5hz24bXuRDM7J8VkyN9fEtm7Uk4jTUXXhZN4nDFTCJKz4p4jzt4jW5r1He7YDdKszadNxoDrE91gSTLWk",
  "key23": "4Bg9a6CiXazq5T28tzkEzcrmTNDgyq7vgrgZ9hdvAB8YYwAQJKTqEYbHqEakgGQw4x7JNKAb9SvbmxY6JfgUcWht",
  "key24": "MKhEgMtjzTQBeUdGiTNGosPj9yoiwuDERzA2zEDZdEgXJcGewfSCwfXpCEAEgQU5rY5yXvHnCpBE6qMxNk2CFAy",
  "key25": "3SzzdEc3PX4HsiDDxPpCn8tW41FpuJh4471csgCa1mEvCpgvaPJbRUZ5GzJvkZiQhjwwAqc6eTtGDKQfQXAWDmNb",
  "key26": "cn93SCg2Upvju4JuerUBnNzamiK2EjPdc6VHvAYABp6mwYfqcLz5K6BRiNxrUydJ1o9dthYYBLmc1RWxedTBWYV"
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
