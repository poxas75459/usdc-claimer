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
    "j1JoLKj4ab83N7hZUoLBrPruPpTnCr5LComiuMyTK2rH55krc9yWuhr3et4hTzENrdxZd49oTUu3Qx6tWVkwriQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U8zffbYaMqTZ9bjNwedCZBPSyppL2rYe9FbpMb3fQ7i2LFfknWK5diiH6QPGR8N1UGNgkGJXu6eXzaGmDVMpN3h",
  "key1": "seWAzSsecnmoNM4xAgYUdQeVM14PZCfkEXfr9oi4xyA2QksVRXtoAQKBnZ1ahqQDSDQHMngVmBpujvMaxP7Fzna",
  "key2": "2d4U1XtSuZ5uUSPThH8mibPjiTK5rJUS3F4qWi1vPfb4LpYUdqrBytcEXRcRG3n6Gr9m9j3ijDFcA35GXeFXzUbV",
  "key3": "5qKGYz1URNtgwiyN2ptz6fddKjkNLWnKQHbVzSsMfCQ2X2fdDwEvG8tatYWmA3WnumwuTFzoXLb4AkmAaHuWK1N1",
  "key4": "4LNzWHtHJFHpGDnmX47V4FCyXYNxCyqaZYx1H294vsVQdJZ2x4KvQsMuD36opMfK9WCYu16ABss5ddCeYfumW1mV",
  "key5": "239uTZKtbvuX7n3VYrNmdyRbTHFqFjZtrYBdUnzmdQ2fLnnxdZKmhqfrdn3Fngr7EKrcZhtznKb5TdvyGbqJcEQY",
  "key6": "3PEv1E3LwjKAaa7G1WAnokatVVwzLbXirA1dGjg9BSwFjVnuoNvbm7p8WAxQmMwRKdWuLoEHj8UU1JAwwGQUBich",
  "key7": "5BEVECAKuHA9zye1f9RcJBnwUHRCJV87a24DaEEAbsrWAB1A8LNuytTmTAQZ7HgYcw1SD7gGwRg7PCUkN383yb7i",
  "key8": "4wdqsvKNGfuWpaNWv4nHdH7T79skLEkFwzm4nuQcKLUdMm6KkzEmKAfsJxLtfsQQMmscfyD2xanEoFSr7xWRbLHs",
  "key9": "58tQifUzbkcCH66NBwGjXZYmGs5GmgPE1ArZ71Pp3RTzLEEQFKGDTLg1qoXRoo6DoPEd2n7WkAB4uu2weDx7ezyv",
  "key10": "4wikBMAHyZiQtpQxv2i7HSTCyPFdYmmYzyabwhod2gyZ1xtgX74VYT6Pb6P48BBP4K5cLJRFMUosaxGbXxndbtm4",
  "key11": "vtjYaRCYPrn1FgjCAYC2XQURSAKGB9pg5x65mn5cF1KafvTrG47UM138m3Xr295Tkp9yfmvZbW87fByJEo4VQb6",
  "key12": "2ZPtjH23M5NfgbvAQVRsfGQhDShDMdpAfyLXNur2ccvZFX3ySQEpbyHLWZmEXvSDMaEf7v36vYUMpXNzCmeycv9d",
  "key13": "4XQkfm5LqwZvHK4ZJmuo3AKCN4ScMJjh2YjTyEvXojmf49Dvu1MTQRSJCbMn7qe4FFwYZHZCQf18CnN989Epe6Kb",
  "key14": "9ZqB7LvAvUgDiq36CC1XSy6Zj4wSza6HMTH5QpWqRwVCbSA6yiH6XC5qjTChQzr3hEpD1uWCmS4W2JvHZTgQms3",
  "key15": "3AKC2Ta9fSFCJFExvnpHvhQpkHLjghuj7QEWcaBK5N1xdBRVofhT53wDt9KJhqc5XE4Gu2hbzWfPY6t2wiNjUyYr",
  "key16": "XJo6oaqua9ecuq8bD26yCt315J2iY5F8et71g2gfTn75Rg45MS7iS9feQUf9nnUiVXAwLSwvkGG68PU8i1QDtFU",
  "key17": "5sLTvRTW7Sg98wzYxgfu9Finpqo5S3kuYhZdJ884rWo2jUJ5aeDQMPokhckr4f5NKbQ5r4KvwWofxKGZUuo7gCtY",
  "key18": "4Ug76aTpe4fTu2asvcD3Vus8EH2PobxkbExQwJVjmQu3TZTjxeoz8jA41isyUM35LaaqwwyBqrR59dizoLmcY1nH",
  "key19": "231TSYz8nsVm82fpvw5nMtkMf4aPFpMTvmDCEPC1B8xH66AwxEGXzwapFKw5WCbsTf1LcZTCt7fUf5sLUcxWCq9H",
  "key20": "4L6Qo3yjhCaiYqNZecLSgdhBvbZ2BfZZ6KusMcttjSEvccKkSBg7UzUmCbSLGDRHKGJ832CJktdGSXzZoKzwSN1b",
  "key21": "3Lc5FC7kwgZ16E1Enb1Qc9v4JbyksHC4cSK573oKmSQPbpx3LBJLUcWWjoocQrM6jwheJ6AASC5RNKs42bHD6fqM",
  "key22": "3RU8Hd9ryJy3ouYDW8TgDRq9CuPT8YPynxfM5FBSrKQN4hKGaikoJbTY1QzJHCqcGnQDN7ucerovL97W6apcmaJy",
  "key23": "4UtAdod2tFeZDLNdzwipeN9UjwfPDfKt15Qf81i32UXBcy5oEgg7wgb1cM6MvYterpgwDpfGTtm9R3iJzyAC2vPh",
  "key24": "2LCqirrYDF5QdifNUGbRQBrLhexiijqGF9cRVsmedemfAxf8dwpxZSCxuWwgB9cLYX67M2WpAndPuKKkMZFsCPeD",
  "key25": "tdQSS12XaaooDRFJzfjBUNvmvGkJguVoZbkBzYmiayMj5GPj641qTjyF46aWcZNcyaTs4ycLFPbkBkkG6Lj1UZX",
  "key26": "4ZSNrfF597pC85v5D2rAQbLad4ktLztkTfa6GWEiwrNQEXKqdPdF7W35t3R2za9XbMgKfUri7Vm9EsTLwT4tFsqx",
  "key27": "29NzXiytFruwgkFenn3oXv5TSAvyYmCUW2HK7nip8H3RYazsVHfPm2E9n2BmxsZEXc9EMo9xPPYiuu6WL5A98viF",
  "key28": "5XYKSuXV8vzzC4eYC9YscqwC6zafurnEYVS2gLzUjG6ywRNq7y29hHnAWecZXAuYkQvBHaACQdy213geT5E2joBo",
  "key29": "47fraR7dFwEdGBoHtWbrZrAPZQ51d6PJ9z1nHeCjNrZe3ZZkXuZRG7UME4SFS3uRy4JBnSNrXMrXcYvCe3b99VqT",
  "key30": "2Eeq4NxEBRiRBAuj5LGrY8PusWJHh1z1e2msBG9j1dcFDfw2keRmzCG3FcsuHhH2ZmRCKL8cjhXzrybW34uGNZMj",
  "key31": "Sy3sj6oRx9gKhUdTc9V4sYZhY7SPXfnCUYqtnK96fEuFTJK8g5e9r6RkpxJUd5CCWYcCfq2dZT78TBFmtFB2Gjr",
  "key32": "4Leo4agtL1GeBmTwrD5vPt4Np71GZYwW9pbcMo9HWVfsJUQqT6XU2m9xz3UfHkZGQWSuXS1jJZAMi4kD83ANfxHe",
  "key33": "hz3Rf94UytT5uWMnKqA3tMYknB9jdXTPnd6F4Xt8fxzxG4xfsfB2i1Z1LXYy5G1WYJ3s1j8gToDiHpcRpoviNq3",
  "key34": "fsVYnutFp5BjQrurCudRcHdNExZYNaP2puwfmZBcC6t4TtZ6WrFymkJ1vUxyVrAT985mDsnPCCLQrzj73nLtTQg",
  "key35": "2p1domjCKuAbfgT5iiasqWhbCUhue6UgDSespAzXcSDvznF3RgZ3ZbYt8hnPo7sXaUbpQ4X5xyoFGX2s2HtrMRBS",
  "key36": "5pyYT7BUVNRYyXqJnLCUbWZ13sPhauPQWBnygunpCzC2w2RkxmHh4kXHTBJnxsmuMYeJaDjj33y2em5NVpXXz3xV",
  "key37": "59XKtVY1eyJtQS8VLWE3ddLjKCan7zMixoYXW3XG3MK7QGD3xKsNqxTvu2VPgXWfQkFJPjNo2o7XQjLAwdgk45od",
  "key38": "3XQNi65BbmU8XHkBdZ3CxDNTMUoLsC6NoUEpS9MzuKvYx4sZCZ9GZNAmSyLfwHGP6xds1mqNz9Wv4eSjqAnc7Jpg",
  "key39": "2RWMcNWK2fhrZFaF5kaUskppFyxhfBhhPWHU3jbP6xchbwu7CoKE5Q7RLQstM8UZdyuSMxLhD4Fn28WXPNJABknW"
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
