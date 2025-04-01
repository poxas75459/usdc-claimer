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
    "5WkSsJVgUiUVgGUcfXK8e2FwDoSipWAmPBScBXNppL1u33NgtNSGaiqe9TfGPQpY96oc4pUhJ6PQH9yar4vKAqnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32yfSoyLfewzr7czmnjfY1fZcPtXJ7hwN74wWMmzHUtR8dF51uY8XUMWhHJQ6bR4CMe51bEdH78jnRaHqKQGjE9t",
  "key1": "3StBJG7f9eNfZePtYnnMgaDp7iCjFvVHF3c7TAKmmgYc5FUMzYAWqRwguVeGzyiSy4kf9YDYK2n2sXucexp7vkMB",
  "key2": "4N3K3oTBDiXyLELQAVR7o9QPuwg6kjuqHQQWe7Dt5ZeeyYaaniubdbwYCY59kC2mcYXkpUNggHwdHhTZs1BbBSvz",
  "key3": "5r7H7X4p7mfpoWvLKrzEocjm37x2BhCBZVvd3xLiRMnNffJvHBPmCgCMwCPmu86w11HoBXW4g35ahVuvY4omJ2Jz",
  "key4": "5gvcRnEDG1ig16KWNve4QqAGpHn5xNETKVTMZmqURggV8Xw8Z9LcxSpxzmoENCjkPvWoHw9z65sz7oDWBfEvi5uR",
  "key5": "WrkKdSV4XaRUwB81EoPjCQJZSVfes4PQuXYEnQHz1a6UB6az6z8ttkx4EnCXesasJ9KMjoAoRhViNwDoEGbaJnL",
  "key6": "2h5EYqxXEBS3bT73Db9ka2graYWZMhFMxVX699v6KHxFb9t7VeTPU3ZuYMmvYBXDotBmfHojAgz4TsykBWPBL6ko",
  "key7": "uKmjrxUBbspAQ3EX9ZNgo24Q4QGgyNUts8uGtrpnWRdz1uzQK3WYziSH4wwcKaY5Ntuj2ctMRrhH3gmCboVrpS2",
  "key8": "4dFGZ3zvmoYXLs8xAjc1h1XHkAcx6uWf8SkhSPRjUKF3ng95RS2HP38ix5wqKQeKefQBANfgvG4ud9bQjTuCsSob",
  "key9": "4BtBXHA8qGrMUTPm3GdqA4xYpV5vTs1Z1d1J2z7MKrZftQJuCgwWUs5oGC59q7hMJhn7FJgrJuAyvrSKsVviMdYg",
  "key10": "4S83rJZwjdzAP4bNKqz24DvrMGQDjadtzoHDnfU3pEszy8TTw5nxDNSN7aWKg3YPpSAqPVQukP7ugND4Tjf3Bw1B",
  "key11": "4tMcf3CkEMtcVsWQp3icYo16nQY3LHQZ3AePKAWCQYrJwFF87uzFyUiknPZoBARupEJeyYTFqnJVYGrFC7HwjH99",
  "key12": "3mH4SqAaqume9CxWJy3c9NcgBgKw8a8H4zNDpjc9ByvdkAmDf8ByUUjwCUivtWV7fHjDNxY9hDKzzT5wBqe2R1zE",
  "key13": "VqKtmstB8V3Rdh8eYxn1H8dkjZbcPJZVXCLmA9MBFAPih3buj6CCcBR3SaPAJ7LoBxTzfrA8GUa8oeepFa9Yea3",
  "key14": "5JVA5CRxvVkjDbyMdmfwBNNvSA4fr9wXobf3L3BUGZDngTZKisoVQaSZjsELHBz6tXdhuxNE5ydVhUpkdQNd2F9U",
  "key15": "CD8FaZw8TyCoY27wVYVzkz2v8NXfMKthhpc7GH1Autt5D5SYYqhhghguxPqkau16F9oG3HJBGTJDUyETq1G3nED",
  "key16": "3PoWGTkCoewFvS4jRozs5UtfjdHFgsHc7iVNsjH3CkFRqoxuP4jXdxAY5t9FbHWUuK11yFyotqh3jKrR6xPDyGgu",
  "key17": "3dWcx4TSpNpPaEGR4nMB9mgiJwDLjpzht6g6HwAPDDMo5gS1Z83dWNTf7wyjBRxScNE6emW5qwFtx3Qn9h3Gef6t",
  "key18": "638xddM4QoaEAq5aqGas4rS9mayJ2HKvVy5eXtDUSHdeoyNzRu4QPyKxDK9cbEcYRvr81QzF5SiShhEj34YBS75M",
  "key19": "1nR251RFSRur73X99rffdH2F7xjSr889F4BK2HzJRiucdDwjyzfifFFyiiSoXfCUabrsXmRxPFg7dM6bjqCGiHA",
  "key20": "2NwJ3T3JzLiXbqF9igcJBbZn2Sw3egvt9XnP3VJegue5cDAGjQU86mfMNfBaJ7aUrd7iL9cGir2EZETrRG6ULCK6",
  "key21": "3GpsKPqVv8DcYNv8LfZeSzoxtqnBbWi5qbaoCLh3WqAgnMQ8fKQy3PQvq87DvZMyjJ1U5swUWDeFc8bCzYtFt4W3",
  "key22": "3Z491zTsy4GngbXnP9QSffKXHmNpn8PuKWvCsqeTfgYJw3xHSZJHSNQxWJ9vzZhh8CBMC4uXCe7Ypmgs7wkYKhHm",
  "key23": "2pwZpFWPXtqwptU95NGMnkcoxZBv8Ze2PVNznX2qq2QNPi2R5J4tW9NXqTibjhmfD7ra5y8NA8hp4rbx4BgEEV2K",
  "key24": "Ak8B1EWFxdHoFBdAbgqP7eCB2eCvgd8B94cwvS96ZCzbVSfXaVct4ApknpBWnU69AqVAVntcLhZjERgco8YpfNZ",
  "key25": "2civZmKYQ6PsZ7tR93Su3TEwTJo5d5bN6BHd2Ci2DU5uGPuy5Ax9MqtbvrDqRBkBT1FzyYzt2zLpHkTAmN2xkNgZ",
  "key26": "2C92dCSAdg5F4wRtc65LZwwrxyhyv1ihK9HqeHpuoWbtm8dvKfcVz1b6Pfwh19N9UyAHYNXRatraqY1EAhSffXfZ",
  "key27": "3aXTHe8Xb3TxNNfubBkGVLy3aX65ejCV3hA45vH3SpX1rFfR59kmkuMphwNGoCLogpqxZWavp1AcSTYe6U88a1as"
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
