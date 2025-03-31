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
    "2WM7p8YX4mg6ZE3hZsWfZKUX9wm9wTHCVBofixudaLPYwJWD9Ac8DbfrBkJwvTUQPWEdLbPWVmFHWqyjpM8m16w1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pYaE7nVXHJiJKJnhiqzxUQG5eMkSbETpAkdCxSyJAsB79SSzVM5uZMDdvDm8At1XTewUbAbmvW1BMai6EVNaowG",
  "key1": "3khzrgHheGzNCTnWxS9HzRiiNgLDunp5PC5j7jMEuzoHFw3XeyyuGRbV5GUUYYBUgm3WPjMRrsDnTouZVA1jy7UG",
  "key2": "5RprycEndtYgMCvMMi73TazYPTXQhTnNNxaQCksQgNEsNQPWBTMteDkTyhMW6YoZdzCUt6be3JmWZiiKBFkoa3RD",
  "key3": "3XftTJmAA2XFgZKB6WpF5hhYobzzANpZKFjAvdXF2xTaJoRjK6BFiEmc9sVPfM8EzvvXnXf5fwQc2vRQSrF7feWy",
  "key4": "2Ktvoqi61K1NBMFtqog8SxQJRTn4WpoU1swY4tiiTJzCnBcm1z8QhU5Z1kDgraDqG377pMZm8qPs1suFephSAkBE",
  "key5": "4LvDWUD97xFvV9C5W8VK8TMm8sSCqgYUwvG5HJvPvid1bzJbhQ4pPmfRaXVDsaPedciG1Xr7ujNVnPbxUjnYaVXt",
  "key6": "32HnddHfQjhmJtKRJTDRDRxczrtPsdAYjPnbhcXEsUqxbKFrFSSWzUDjyvTtf5ueTxh3tcyLhHyUPKcL5jz5eeLK",
  "key7": "4vK21byGYxrG4CMKxYKQCCZyzMwXAjuybbZbvUdN1nYGX5mmppof1J9t85X8ouYnp6EFoYiqDiHFSu5F4pxp5SSm",
  "key8": "4KxpDuGVvd8cBUL3eGyj9JA5rNqdhex14YCe1atAoJmima5NFLQSa4LRWXvFo9HJaxRsmF1pNnsfMDuCbqtGWBoM",
  "key9": "32i6E65FpYY8dFnf7dRhQqRjFpySMPyj8LmXEWcrXqQ13VMVYdQy7AHErwTNVuNGWRaeWYFBNmxEGm3JUzSFfEwD",
  "key10": "5RfrfPVnzbCCLb8UA8Dy9VETuvhafYUJAPfxLs7C9bmg3ZCPKiusfk9MNUe27RtH1mx5hQi9k2exBNoie7GkfHVP",
  "key11": "5tcmni7qJ6stPLqtwiNuzaxdPYfpWTSz9PJikthjVFV8ZoTZqpPkn4xxPgS8R7RcR8yUQq3Vgev4Hdvw9fiigrwM",
  "key12": "24fHhsTkCBx2CeBMex6u9PN5Jxk4ZZuHKtUgXyFnd7ZAtS9ZCdJthtKa8hnVvf4SrdcaXkdmAttMjzt4n1wjwUCW",
  "key13": "itb4zjCTKRDHK9vzvXvthnUaqBq9nKRRr4M6GoBC9tBzfS5ANq9jVhRf7BiisENxq9ZTFvYeQG2pcwv6oiGXS8F",
  "key14": "3DVAsGcvaXrRPvKPWKRGMikbmF5TZ94qAqkaDpcmLWbkTtQ4jk7hNtbF61SFraRQ6pbmv31LJJbSj96bsXFb1Z6R",
  "key15": "5MTMXvU7nGr6D5E79QP69pitEVYQY84SJzXUhqDUYDcUdy4J82vcDnWpC7euSfwM6eWdPyvmfUmUL4saxC4vQRqb",
  "key16": "3ZLRbbYAw1vbHDAEHSRvi8pqocRSbkab4TG5Neg9cKEZ8WotLLAh4rDwBPDKYCsA3uYM9udLpxfKQbJ8BJ4FZ5t6",
  "key17": "pkPGZ1H7Ps4VyovmCGgGJAchkS9CFv4krZVqdCTrQ5zKGhMXzH6YBTDDGFdDkrUm5o9aR2DaEzcPPWRXaoUjxbh",
  "key18": "4YuXbpNNZjPwXzWTMxCCiroyxjmYy9eNsE68qmw4u2egCSeJ54TqDuptSyyv6B8cMMA1GrmyfYoHim4gVaDbD1c3",
  "key19": "46AL82MjzPVJKaHQeBX9VFJrzdb6jREevGFtLHe4A9VgmQEcyYPf9b2zDbFZ6jyvLEYg5m5qXgKfsU7Ei8DiNTjB",
  "key20": "2WzVFnvGqDmWW4oXjF4VShTTGEbtLrDCjqLSKk8wknjhbW4kTqN5uuNeuWnZPqVUPTXA8C6h5g9EnTSVC6ec5ZRk",
  "key21": "23jbBsEAZMDN9hRLgpdCRtBxzvDonv8ipAryyb8836xMazKgtQaVpxR1Xi9zGPRMRWPoEVch74t7QZrZW9Qt2ExC",
  "key22": "5HkqvY1CfVMKWT9jH5N9dv9zptEDs7AkF8etcsSVaBghaUNqfYWqAHjEQUxnBtU7qvnzgSgkahwKRgfQ7NNvmTuN",
  "key23": "3g8KMCDnwAMGcCT59yUnFsVz1EofhZwMpeXM2ejRUtMZptijaumHmoDFAg4xa1eKLZikHDyua7SFLsCL8jgjGMzJ",
  "key24": "pUryFf5ArR3HypYjvdoRiYbv2KctvE2dr9n12wY5M91i8QAcEZCcaTFaZZaXWGxJ72xCMgJZXtbwQ7t7N9pJQDp",
  "key25": "5JviKkJXo5ii52jYwfvHCe3M2TGpbwCFD3bGJVujTn793YsaPWAvSBKtkMLDgaxCfCb8PjLD2RvLuvrRFRNe2RKy",
  "key26": "3pDtvpUPAVMq25sKrmxEuPAmUsRXaXTVmLBKpQGo7C1NCNv9UT2Msz9ogDwAE7ykTKgM6bSPB8WL48iC8T6MArYr",
  "key27": "5UQBCTmgXfdDkSwM96tnYnQm1AD3dcH581sxyN5WAfaqzwVAFCgFNS6Uy9CYh5xpLkmPJxD8fRu5HXtTCMbR9djL",
  "key28": "7prEzsf43Wmr4Xe1962Q2x1fKwshPEHtEzFUKYi8heyHLnE9v1cMAa9qXRkB2EYks383dbeRmGrL8xPs9EYea8K",
  "key29": "h72iSKJ1BAtj84EEpV3WRDbKtPyoiy4jt9YipK9eZWSWLux2Kpt8Q1rQyGsKyoZuYNDygeRbfrUR6697yY9vS4Y",
  "key30": "3Ljz7fwNneRKutYBEm3f2WRMFk2jTbiQXG7bqJjLj4esqDk74L3n1wjLTAqYVfDVaKbTMVrJYx8Dn9fs1hqMbWmj",
  "key31": "31DkDPziAcioCNexNhraK1r8fixxwchsaPLhJNyVzP8HmLVhvDrMbotHtwF1PtGkj51GmErfLDuCPvbnxZfsjSqe",
  "key32": "3HToMMdrVZYcYcHgkpMubGPWivackjFJ1fx39Dq9bJaSXDLDtHji5rVVuYjpo9ovai9LPLwsrqwt3ybF5RdgnxFo",
  "key33": "Sh3r6kicNYhnFAf27WHAhzQNMqVcCuLVbBtPifdE6KAbJ8W29suUgu5jc3rn9oYv52gYQDmwq9DeJ52evfdatH4"
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
