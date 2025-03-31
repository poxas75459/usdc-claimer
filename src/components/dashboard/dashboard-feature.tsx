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
    "Emo8n7yxvVMTwvwzAFCxhxhLihsnqFSA9cEGJzz4nwRarPiw6uK6jrQ96xFGdnZwwthQ76p4e3GiouxA22u3n8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N892FgNFvnzLoeW4R5ZKVmJb7a5jPHWE6zmoxPSUBmQDGhykhL944KSVCSXEeUEq6bCxFxf9u7phAiXwWdFcC7G",
  "key1": "dN9hRjzY5sHJ4gu9Kkj6W1EpAdAsTP9HwBFygyEa9M5wf3wRZLxEaUQFzS6LG55p1UFCPAH3KcPPnagSqfGBQwW",
  "key2": "2zmXXJnqGFHAgV8ma9jmutzLHiKx74kXuTSV8CyiyDbqTyk8jJPoNXHW9fR7ERvDBpzbuaie8H461FD5P7wDfqem",
  "key3": "3DMuXc3HqrReszFN3ekq8gndGh8UfAJXpVeY8XfLdj2qM2diSdnif5BVv9X9MyKWBh6nS9nx4wBQX8iUWDg93bbF",
  "key4": "4E29imJPzxr3AXeHDRizhvXzezKkDwsbMGMujYMtEtgXVoUTDAiVUdx9RJQ7as5AySqTcxdZK6Fm9giVkU9oEdec",
  "key5": "2yWsp3rW4Lf6Ar1yizkFKhFePQ1tLCLiwUgAN3dj19oR1HNJJjMqFVz3smcafhaQUzwidxsRySSoSK7qATqPjvcD",
  "key6": "4WVgkY16HTLwmWPJBTBJDnU3WVMQTYfhRhdR5bRRKJG7Cq2iM9t2L6GQXnV3cwHSoYNjuJca92LrbnuhWSRzbTUx",
  "key7": "3gt8wYC4yjg9ZyNZBLtHNihTbQy5zJRGXGGeC2U1YnB2CbyiDUpVPm1xSCtkP5tcAbvUHMw3D1yNxjstWeUVaMg6",
  "key8": "2KvkyjzMa78NT3W5pGFqxef5WXdnvNwt91jSUmFEiNkYWXAfn1fgAt1hzwD4feWMT2SD24DL6Yw5MBCQWnzW3MKk",
  "key9": "2GDkNNcUgSASHKC5DrsDWZ6njdbVupJ6bccfMZofARdtCYFcMG2ntfnCmche65kVbCgiikUMKDSNPr7PCiuzJfh9",
  "key10": "5xKqEmm6WMvhk5t8AaRfRANdVryraryLK3wV4HLj5kq9Mfw6BETRom8TZkN4P2UqpMRJQNarJJQHPNXFxwCxY7Pj",
  "key11": "3jwpEd6JVW5c1NDqcSSVuzNS94qMQG6jNJjWqQZJgqMamXCdKs3yxzMaAk1i6pkKU8M7cDiHGpJ8Dq7V5DfNpdE6",
  "key12": "52WqjfuUu5NMxXMNjsTTnun3zZUKLjgrhYiKhPok6qsqUksdhpooqaMrndanWJp6xcHYJZVVQGwNR9KDdhDeKxZB",
  "key13": "2fqT3BkY96MpD5ykS5EHbUeYJxUYtnQaWirVSmqckdXrRhda1QKVcK9eSuuvPEacA4r4XLmLbZFdyCs9yjxYCR2q",
  "key14": "46ca81U789qWKWouHkpTuvNmSnKZ7hRV7fMECkRgsXKqAR6z6PiV8iVzZ9yJoFocLM2yd4QLU6CHP5GFvh5KNDt1",
  "key15": "47YnuY7s784mEoe25WmFBBKgbz952Ki67JM52SXxn6hoBq6hFNznvy2Bv4MHCHPuWzNK6DgJbagi1XYxzSMwsyB",
  "key16": "51CndKizasDb2cDDKzWdnZSbZfnKXC3RoBJaWMJ3sAa8KeqwpsDY4WptQBbNZZJEnJXYCAG9CUSWLX98iVtKehZR",
  "key17": "bKYMfLeoA9GFsXSxMxa8H6qKVAcJDVCSNcB2Mj2A2XoEFdUfycX1CBNQUuuQy5RaVNBW8PEDYfEFJRLo6koeYoG",
  "key18": "aPLFH13xPBEfCiX943cip9uBBrasHut42WWmNf8KSFh9k7JeGpfCiUnURWXK8dycnA12oXBWQbMBmeXjUBfrBUW",
  "key19": "jC5fJzryWKvwdtTKg8iis2YdidjFkkNbmCeoxGLGm6HDZZ5LxZ8gzTXyPsnXR3DKcGyfLd6auzUnYpZp4HVJ3qy",
  "key20": "24cZLnAo76mwwWdbirWtiJysfP1fJ81PXVc919gNVZck6bjy9EfgPZNBcVwUJHb716fZQ2MWzueCBabPCJXeqyB9",
  "key21": "3rdDG1MfKn6uy83hHwLrk6d1Bg5Z7NBzVGqS69FVDaHZ3EguPiUX3cPfT7WV39HE23dwEkxL8Zu95cnmfNhdT6Mv",
  "key22": "7TSUfpatmBYNvaaFE9Qe9xy5WT8NxhUZqK4qmm65TGm52zPM94SiQWexB716MdmwjBQss44aug3ztKsNVFfwPWK",
  "key23": "5uyrB1CasUTWDRn2q8eY2m1w2RMembftQdnchgUnK2ou9pAoeKqD3qt4tL8s9PJaQxzhr4JsTGd5vAPa3SoYS1Zd",
  "key24": "4VJhjGeozFTDzaLqB4zZndRFW9ffYq8hXYDAJwNzRTgFj6yy3nrkBWFCVrD3VCmrw4DavtwkzaBaf3FHoMxAQWy4"
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
