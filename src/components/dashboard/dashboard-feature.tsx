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
    "62pHh4AWSath1PCzeoPkqQNBN2jgKsFFaWGnGHufqkrRVqPFb2yvf1iEeXiqrvGZums7xLRmKmh1JzdPTzqS8bpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gwEGCUDwWphBFzJZAaD9iNPe4FGxqZ9fuRxndmKiKepURNxopskqf2MHMxY8znVvtAAKEkDmHTX9HE9LcTXUKym",
  "key1": "5cofx6twifbC6oKWnGhCwi1ic9EYKW8WoXkmHQSEpffuZ3uxMRtt9HnKoZTYTDBNQh9Zog89ghVFR9tUrdTca5Pf",
  "key2": "4H8s4tTVdm4WshXzgNUSN5Hm5nv4Z4Jw9qhcUcbYCwtutHbbahLisyPjB3cEDaoHHDis4WQNMRS9uuzUV3ijc7Z4",
  "key3": "62xWEdH88nTqTFjYacYZP4Y6WtCmMh6QD81311KTygQR1vMdV2MzAhVgmAWxaizBcK6gRVTvxCsDPkeqHZMhLVBT",
  "key4": "vpq473MLKbP6xYbLtrwfxRpQPoXbEmYHbZwgGmXMaHuaz8KKVF8MUe8FDHijpHSrHWWHRoZUjkH7yEUHJeJtXJr",
  "key5": "5aQyWaskutgTs3qbtRGwzXX1DYdnoQxX9bqg9FLk6qTjgezbwDmT96d3rzDGHPdvHThZ7Hro2RTNf8Vbxe6SvXCJ",
  "key6": "4od8Y1XjKtHaxkCka2StSTWicfdtaxK6XitALC5iKhsJydT5JLK4MjjmKngBCTmAW5DmCf9YA9yL9stDA6NUuhEY",
  "key7": "3m9MCQh4WU67xgeKNAsaL5NMtwS2L6bakxPD8dEeoXZVCnUKgGnAEt4hPCw4BjBohHdcpBbdfwsuEekmSGcZUx5P",
  "key8": "2B7gjR8J48vdLXN1e891Y8j4vJpZBxuX9eNMvX8m32pHfbXZgbYezskK9dVzCJtUQMY594Z7udVUYKEAkqcTvgWm",
  "key9": "STkhTGfU6VfxD3qgKzkUDDN2nU8xpsKE4YTL5qoVsRH7fyzjxnQFPei48kQdeZqxy7dy3qJ1h6oBeeshZwZvTCq",
  "key10": "5piaMBWU22CACLygdH2SHLvgZhhwTaqqNegCAMkdCG6XmBNxGFYj8sXn64ypyy653Zv2Cjv6kkqWetdhJcZ29mob",
  "key11": "3bh9HhqyPkeDugJwRhjuCpw4bjgh183enk7rAvqTDE4m8NGXn1nYP5KnrqWGouDctztAB29QKnGLqChVFXWrNsQv",
  "key12": "4454PKEhqvQS8MJT94dJXS3M9nJXp47Wy2qhHnuU5Yz8LiBRUSwkjQsa7KYCVydbVVQk1HKSVZHQaoZWwhw2p5z5",
  "key13": "2CWY5u5AQ1yZWgpUtMWHifig4u7xGk4uxfEd5ZyCvXyhLAAq5SNDjHjMttwcXmWutVuAX9JbcE5uEPhhKmVRss3r",
  "key14": "BBFQeG3KbNf8TF5jRHNoDT23SR93tRpBSSQH6eq9ZgqfJwLs2kRBqkEeMEMA151NAV6NqY47qfE5z7iv3CKM9to",
  "key15": "2pchSj9YVZoScVgDdyLxi2Hc3kCsXPvctkjaY6ReBX6Cx5U9F9odhq94MQJGxmrZZdLpFSC4oNSrGPznMCZ22Wdd",
  "key16": "5iiQ7SchGMFkJ9AQdvfeKCSmrVDUnJ8Cpp7W7qzAgRoZmjgxPqCYMr6vFRfhdiNoT7bNJR9MnksuaAMWpfUWtnH1",
  "key17": "tANbCftGqCJteKcE3PsDbBWCwdaMLBEniqpdNfuZ3EWgGNHH9mpUzB8UyBWsKxJkY6AamYL1tHAB14R8HdZzHoe",
  "key18": "67Rsg1geGZWdA8pgX88GP7vNxS21GpTfihUE55X8szEjASGC4NFQuSUMskrAdQB6L3TWz6mrRLtRfjY6MhjeL3z3",
  "key19": "DMr6Ez2ndakJZyNLSR8AHZ4ydqTMJ1NET68RSw9Yf3T4YnmhWTCsjt9omv26JQwx9v2mHbJs5Qr2qmjoVHK1KmQ",
  "key20": "5H1ppWvqA6VzjntUiJevYuqhUWSDUXCBMqjK8rZJAvRFmSfMb5H2Hqr7VDY1bnLQji4uETwqM4X2foLqe6RUKLuq",
  "key21": "5RPauWn5TtAugfn26foHtTpsCpYsNG5v967kGq8QeELwAQoANvX2bV2u1xfADEFpabwwxsYdrb9fyFRszmE3k2Hd",
  "key22": "28j61h5JeivyXuSXuhGvLvo5BH97HtzoEMXqsiSs7aMqhouFjpDvYcc7LLGk3UqNMDh4jNfdY3k5ikQzTo74eiWb",
  "key23": "3oQS7MJCyecjZnNXATL9fSFrshvfByvKvGnmPf1y4CMTq7b2zjfMyyt9vk2fYRsNzpHQSPiPkN4KdmGbgBx49ASh",
  "key24": "2KaChwKxogJgzVfxWeqWCwkWLHD5r8kFsubFUDEYoDJZ32FKzCda2W24b98Brq1fHGTeuSyQbVXLzuZe3H9iVsxE",
  "key25": "ou7itsrHgK3m5ZU1TcCytxRHzMosDaHYFgDpwXwt1YTfdnXUDBsaq7uSenVWo46KjtdT3LeVztbuN9s6rXUDAMJ",
  "key26": "5ez3EWxnpe6sLJzC7hhrZ4773GAubq4gaADjrns2iuSR9u8VBkYXztzDszz8rP7hm3ftHFYA7YboRZJNGRPc51hK",
  "key27": "3SpunHW1No73BDGLP7Yn2f7Yxmp1t88FpBm4y7Sv4PYXKMNB5iRJrEdJy6NZi1pFTyqSDd6R5pBThbsNwFbcjRyH",
  "key28": "4fcSzNK71Quk2axBJG8GhhGk9xazfWyUrnLy6HW27hKaZPqzmJYbpL1rtj2gRf9XNRdEmkE2oEgbtLvD3K5nGNM5",
  "key29": "NVjm6fLm3cBhkTcBzHyJvWGD61Yf5PqxVzRi8bmwGhFmmLRPWp2GmqrMHtHfCizdzCYpY5aVyKS9tQm7zF6qS2x",
  "key30": "2Rc1DfffxvhJZS8eBDgAHCiEYG4ntPsfScccwJRNjBhWCH2fkwDXpMShu7kvPNLCPcrxYoTLcY8hRzADhtLmAHtD",
  "key31": "Y9f27V8nBX9Rjr8C6QRUsMQQHQxkLsKnfezCeqJmgX4CXF2aRLKMiC5UcHyvmyEN9V1HUMyKrXgqDhiJBvaXf1r",
  "key32": "WaVsJSBjY3a8dMYj1yxoJdCt9iKJcXDcqzkmd3E8KKVuMS94KLhNUSnfYCVgjUEM7LyfXXRUnwJeC9nafLWkpbK",
  "key33": "5oevxidXFbFc9xCnJXAHxBw99dZsNCLMoEf8rNmjUSA3KVGuXwrzAjSDdtbnDqLDLRqx5AXe6TLaSxmuheXLqZrZ",
  "key34": "4FzhfhdhG3d4pmpAFZQsRYpYF46U2kejvnzN3ABjQT53RdXM9q8E5nCVbZLo2bMRQQVQM7KcKtHihJ37mUJeXEZ5",
  "key35": "3rcrQF4bA5w9FhDhksuNKogq4e7qYRv59NVHDkQWY3qVELQRVY3NwtVkyAu52tgtJNKM92cDMhLp5kzeupqRFf3m",
  "key36": "5MetVkjGBCWFWwTxQG7NzwT2KGKmBT4FyaMXfJ62L5R1H6MtMPnNQa9vmm1NQ4hvHqtzpWmk74cV31KZu91923cF",
  "key37": "2mF1BH2vFCYF9AXFigdvxds3Hu8HKrpZ9QjBSADu6acEt3TdCYVmewT1DMpYiKTiAsM48V5RVjYci6GuU2qyHwvs",
  "key38": "3HHv6CnSR4MVhnJrtEKTzKmVJZ5RQ2KkH7UcCF8fggL8DB3DpxKiyghd4KyhjMDh5F6oU5NRt6ocQhzawwrenvqQ",
  "key39": "yG8ErgoDohAm2MSMb9v71rFsFiB289xGV8jsXZcNM36omgfzUav6dWJHvMUmMyW9Be1JpNpcg3BkN1QVn5ZrAJr",
  "key40": "2FQfYnXrg5igWBFYz1G1muHxLK4Hp2Wp5EyTMNWma7y73CauUKKDUJYp24hbU2Rq3kdyWcRMKkoG74fyBCXQUPcF",
  "key41": "i61Ue5Js7c8oA68WfAbkhc1ymeMp9ptAKe9TezYADjsrQ6C3MFAHkuET3uPLqeLG5Z6AQTdCLEHVkycaSsoVvY4",
  "key42": "NKZpJTJYY9SQDmK5T3NSmkU1ZJXuMZqrGiA6NKgLnaEgoscvcva5eaEkTAd67oXdKWwxBcktBQTwu5uueXTCbrb",
  "key43": "26a7ggUBrnyxNbAtQZV4UyxvPYt6RwCFHXzG9g8YfGwN7SN8yss3PhdTa1HKfi1soZGqx1E2Vwd5mmQLkHaJkwUY",
  "key44": "fXVLKfsvfxFAJ9pmpLRh6rLWGqWLCETWYmVv9nydSqVxY8RRUndfqCe4WA39ygnciD6ZU7eqnk4v233saJ9Xu3x",
  "key45": "2EstNB65DRmmiE5gVbr2XBoRmYHaKDksBAVTgMZ3yURkcJyLA3HFDS3oeRA7s4EadJn14wE1q6cLgDXXMJ3dK5ek",
  "key46": "3MVCoztdmoxdAhNGx94cCGokDjiE8asmoKfNF7HvMuF88hbCSfsdfDNJVZnQ5p51XZLDysNug66sng5drLMj48Vv",
  "key47": "2ArnLpDo5w7aDxCZyy92hPeuUzB8jPK9fo77agta93vvjMwhL2mjPG5p3PDbGYLJ4cWCqYFgGMJDnMR1DmeEXBui",
  "key48": "MBPzXDFS3JKAezZF4md3djQNFFtcEtLdGF2YZVU7DedG7ktGuGwyWFnfneG1e7S9NmQxXvF7ymHQf9hq87uQDcZ"
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
