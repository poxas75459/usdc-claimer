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
    "4KSjBcKGATfvc3fZwTBtJDP4a5MxN9UpGwy4TGd5MM2fwfENbsSouGAvEFYRfUj6y5edEXRNtB1cXbZU83fiBFqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fBSDqDPRX2y82TvK59o62APDf63tF8MQGJg2nutVbygmqUmYrxt2EumW6yP1ktutug4Pq7odnydK9VVKa51YXmW",
  "key1": "3mpEMa1HBu5P5CbbmJZst8qzBpgvtajqKN7FhWGHAkkQsSAgX5ENWHy33SP8ZicxFiEmXVptcPquouGKLFAXanKs",
  "key2": "2kXjpu5CwwYVt75ATi93NkLMTYKYsgp7RaY1rsEjMHt1azNMgbAoXqEH1FxJ8GYfBV46Swd8S9Go1sSZVsVKrxe9",
  "key3": "4EDPpLAQrp5LBs4BC3x5yxAWUEVmw6zigy1r8vicPAXVW5WzXUUKfaNZbc9n3md6azQcXNK7Ajpgjy57xoaV4Dqu",
  "key4": "nEEZJ2zpMiL6AaYfyQ16HtoV2hif22sj42e5qAMKWRYdjPZd8MSGJ8ojhFYo3t9wwjXCK6ToF45wy2aZ7Y9CW1t",
  "key5": "3CZXw6rniogxi3KMD6TcQBJi1mkguWhrg5iTqBqfF8YdtXQLLLdt8i9or8eEi5QQWmpDgPWPjXWdaZRziFF2eryh",
  "key6": "3dQpqaL2RPnrHEy9tt5tktx87igCYxoeNsUrnTfswo63agPpRDVs2Q1bYPviUD6KjxL4zfh2P41pdVY1J1dcD2z7",
  "key7": "5duR3ke5cGXCtHJLYgQcZrQx8QPtpS4h8pcguRfF3ExU6HuRDMhTULf3xAyvuuEUCyQMaFscX1wvsHMKWLrBWDWw",
  "key8": "4547bERN7gg3x437MCJGAeX6UYorfFeUgcTAo7YTgLFGUgHeHRy8sVXRxuG5YvAKaaJ2uhhGCWffkE2j3vtXPksM",
  "key9": "5g7GNKs2SpiGEtPMGX8z8Xe7HwrhpuXurZzE52rP7MYPYm3jitj6p2GeEyMgZgkqd9b91t9KhxSQsiUckYPGxdw3",
  "key10": "2GNUevuJwdXFnopxHuyscmNDvVjFtuyirxkGGmgDSDhCxdDSgQT1DtvUfWQoa3qNNXF8bQiHfogyLFMnrkUbpdqW",
  "key11": "KS19a1MhbfgVpYi2iDZC1jFw99aaFEudUkDJ2KnrCcnV1HzgmXBXM4d3wSWxaZLFrjgNqkMK2YfasmfkM1tULpi",
  "key12": "5fXWkuvQUZ3BcAbBF4SXpSJFwVhHcry87Ps6ywiCZKx3c1XMx8ERaCosrxkxA48U8y5vrd8iBDbxjV3UvyFNW6VC",
  "key13": "4yKY1jBZKsnDotGBuXzdSKfcZEb26ZHHjQu3bV1oUUEqFCr8TzjuifGS5z2Kf8Fg1Sm8ZRKAUGEdA9SJk6XbHCKU",
  "key14": "Jv9rYbKfjsUhiU7k52iUAvXC25p1t8TDGHubtdhP5mjjz5Dn6HGNcvjh5MfcRq1zyEgDBksC2udnJNnrzZm8rcD",
  "key15": "4hwB8HG1u6g3ooLDsN1CSz3Sw4n84BdRE3uctbgVJD3PeGNXV1mafrQuGZhWx1xcfxBxqfZ2brGfn6KPqjnExeAK",
  "key16": "41JrovXEeGtuQQa31DoE1XvoXs7Wa5SVnjUceqDcMhj7GcwCPRtEzxecBufgVCqx3p3qNStrssmMKhUxyRtVPsnN",
  "key17": "4qWW6mwPkUFW27LVRJrGreFrBJDgXwQHVn7d8BcVrqMgTFSSGQYXUxDZcR2owjtvr8pwYJ2zGQipJKAUpvqyMeyw",
  "key18": "PVfE4PTMnsTWNWWhH6RZqUamTQ2NzuDfAMbBgHBqzYsG4YaWFVUQG1ejnyyy1B2x2gxEvA7AV5LRTNiQtkQ5Neq",
  "key19": "L3QqgVY8yrtfun8fL9CH2nPd5CH1KDLnAzWwGh5uUpYnHvYWexFqUy2ShfXtHBt1WZMiTo9CdA4A3D2uAsWns9v",
  "key20": "TS83PYdunPgiaBF7x4tcgkoJFU2FogQukWx5gmHnFCSKAX6gShooncQCPmobtmfgJxDVJn2B4xwZ2e5hHbDUzki",
  "key21": "277mF52TxmVnNSUY3kLmjsyrP6gYHx25fq7KyXvu9HYsmRtXY5DnfRCGLzWBu1dP415zznE2ShEfzhw78Ni6Yy6N",
  "key22": "neT8yUkLfBshAE6HTp4izwvve5fENHdrHYf8yzxVD9xRgpWNsAmENrdvAf7uFL5Cpu58xxTRjXDTeuq3FJmKFKE",
  "key23": "YeUSqask47rpu2aWwGv4EzgxUk3fnWup7J5MgL7VC5b7s49xLGN7TWb88GBrLmHSpe5jk1h2uTkLsnBEZmAjDmq",
  "key24": "3Kbmu62adZCLRJU2w7vDrEEyqW1FmH5Bfqogyijg96aXUTYQgJRoyn8CQjw1iLgfBUwPLCvF96fFnFVgHva1Lz7i",
  "key25": "5h81xw94faBMT3NzZ7Dvzs8ih76rdXtmNKamtpUAPPPFnQj2KMK7UNGz5AtofEG1Jy93Nm9itNqeCoFA1gmomDpU",
  "key26": "5L48DWoUFeVi9y4Bdqmq8jBuKqFGbDhxFx9NYCcbKfKkCyXVYvZjSHjmgctHWz3XnhmVoVU2zQg7rjL1M7xokWUD"
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
