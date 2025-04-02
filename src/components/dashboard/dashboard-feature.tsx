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
    "4NgK7XnFQH1PTC7jtd4R5J7zAMGjhynrTVuqp7zdLpDaFceTezqCUxHPJ8gyWd5P8ZM7R5V1A3MQfE1wDiKr2x2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bv5eFcaMab9FmaAarwZgaL68Hf482rBWDaWmebGEAY4UiHMmbA6XjvW3js3UDvUnQu5GieGSa3xPftC4BcNXYKu",
  "key1": "yq6RQdsEcVbcqwfaNozXbCUxYi41Ry1egL7F671K8LJCQkDYWmkJSVbDGZz2vKCYKzsM6aMqRPkefkn3SqnPvdY",
  "key2": "5th2aM82hqG8qcY752DCKUeQLV6WdehAxXPZzcR6CV8iJG8ymsZQZmxb8nyZk6yaMtTNTBfGjFUT9bqWAXc4YRYP",
  "key3": "WVKHAnaJTJMJZeg7PZodsNGU4vVAg8eoaYBKRPrLWqGfjHNvznyKRyQj6FLeWRmVg2DjmQaFNGAat53b9jwsmbJ",
  "key4": "3YtqjKcxk4r3bjtwAFCeDrX59DLnzhoiGLchp4r3Xv8EmD9tR6q2vEZfLVQ2eHec2NvrsBoEVyAr8pphepWygQoY",
  "key5": "WHKWxaSeVdktcHaiVwUJL3YieGweV8j5BbLXDCFQ8fx6DLmm3aYwqqpjxBPpDuM9cZZSYysvCpNMQuu5M3fyPmg",
  "key6": "2Skrn19ffEYWNEJcMqFDgnsVSW4vqZB5kiTH5P8QJfzA5B4heHGQjTD7TXiYjUG6dJuQWVbzkq2SXZPuGtx7Egef",
  "key7": "8sXwFWeWq1JRzhNYdQZ8hqifG72AtYgWpnetR8wLZ6zw828tgCZECTcGtNVfesi19k2exXMRSF91MgV2W5zmAa9",
  "key8": "56oaUwkGi34bum7XLhpWoBg5bHNkKdwMxf7TWtRED5JVMc7xpjuLQj1cLeUXz6F47kbCTmiEeWLQTV94PaVYWPzP",
  "key9": "5PwQ21nqY1ogWZcTb4yBUCzafqYtxJnMR6ge96CCYp4bEi7pBS84TdqwKdXAnZRVCSQLn6yBMB7pirQ8SgoexU3z",
  "key10": "43NiVpyH8FMBJFxeoZNawvieqdsZMjuVKYxXRYH1L9THsbZpHif7uyfwMb2DdHe4VLVFe9Rogn3LuS7Etg3pFbwL",
  "key11": "3QYPR9R8cKaRaF3zJStGajBcx3CMinyj5PA6415jhXPspyDZ6S4C3Rx3s2cqTuF57CTTAVUmV3yBjLr2usMNr8eX",
  "key12": "LHUvEVoAHyyzUNV1czYou9qvUr9MV2NH1vptcFs6yLYy8R79enqDUU4VCXg2Mxd9bWL6z3J2TqS2r5Rf83gVLQM",
  "key13": "2ZfQRXr1k5ghQatKgqEgG1KVzjvxZrGmErb1t2NQfhNiZPSHbKHW13icAekQNgWXaXhLa3u1cbGiVwnnL6ujMVqE",
  "key14": "35TkEkSyCz8GJNmYrMVR2dvegtSqhgb1zkdb3GFiM5un2MrcC55EX5rWwRYtKHzXTnGe7iLBuk8uLjpmS9Qyx3Mk",
  "key15": "2BXrNnPPptKwKDZJ1L7dmn9RT5KqPorkjCgeo5RA3JLfEZfDb3R8Mh8kDQDPbfy66Tm2tVavSGDtnz3MGvTizyRp",
  "key16": "3dVBJZm6DekGcQCRAbTEo3tgLiwj7uergEwMM7PsPvfQtYpyYGjgyPafFQqYVKFey29b9C9fW2bwUoxKmxnXs6Ab",
  "key17": "2SbDwRnvjgzm5A2M31Z6nK7csHB2aa6NHRzPoDHLpmg7DLMe6jc6PrNqWhiQZoEZ9R6TmQnsW7hyfU4Vx7ZPT25R",
  "key18": "3VXsundH8wvZ4qkuUxLjmar8TrLPd7cFahAtni7Kas4n9Qw9dFfQGkA6JQq8yooKgTxErw26pR2V7ZqaPCx83Lmv",
  "key19": "GcoFAn9bHrp328ipxZZHnsSFtaU8eRAMFMrmD7zVNJqriWdj2aXmBvrGquF5vs4pwJtc4n6wpLsUaNLW8Vqus8G",
  "key20": "5hKSQBpWYr6kStacLy9TYisci9Li9VZz2PCBrtx3CgALZdcexJEfHDgfg5MxTh5Vx3cgfujHe13UJRQciS1nvYBP",
  "key21": "5NyrykHCo5WFpyJskmjjkcN3x2VtLXuvfoeeoAHkbWnJ5rXzHNBBD3MwCTDNzjzRqyXTcbDVLo65LKQAhpx9uPMz",
  "key22": "maUQRn3MLVeQaecDW4UQyceno6sDJCS4iqtKhLCLXoQFYcVTn5CZhVMr6YzwY7Ty4Rnr8ZeGrR7vipNy2GfSFJ9",
  "key23": "4Cey6wc2GAsa3Vg1kAqWubMTfhgjU8r4pZqHCWFkRzWrer78P1DVHBWfUV24jqF3frTTjj579qwxDs1YXrFyrWRB",
  "key24": "2bCbXfEh2MFzZEqzurDMUVud5ezxU7WwTHFEeqrpNmUZhKXDULN6TaHhYBzaBUmx1eTn87hB2it2rrgMLL6Rs2Gm",
  "key25": "2vDtFNiVDFcikKVwbUebf9kMSk1S1pSG3CXgktgf8Nuzc4LMLnXzF7YMTUD1P7SeEzwkn13uimwpp7fscqRVaPN4",
  "key26": "4Bgn13raEVFdwTq4CCQyYxFVL5pAygUYvXFHHHxUDogH6MyuReYsa9kGGKChJohv5E43iJpuRiVZf5Lwei3FGvFm",
  "key27": "UtEtsSmBuPaKxyK6drJRBZjLM2zU2nZq35qDpnvydJjDUgFn7a2wB4T4KiaVbiiMkx1H2PbMftPeiqqnF6AwH3n",
  "key28": "5dGBFK8CXu1PNSLFBTHMy7pNxX5UdTVp1hrE5VouZAtNLnxRrkfDHzcsSGEneiaiUWfp8HnzyU87GVy5weV8fxaw",
  "key29": "2zc4BuEjQJCTMBoh5Qkve3jgBV2Femw1nyKbhgGc2k6gvcQc3WB3Eztr3AD4YECnynS9ybewcXipz1h8GFaktZ3S"
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
