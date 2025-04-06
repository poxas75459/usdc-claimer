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
    "3cKYCJNz9qonDiqXJ8Txj8e8kLNZapm1iMZQgALRPgsrJt8TKrCbXHH9nzwuiwr9mPZVi7sZnJLhUMdXyia3nrm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22KzCFyK7axRXH61zS9EKWpJwTAQoqoS9NxPKzuvE3WGYtzcTpvzehkAKtYpF3igCCJHbupE5nogjEGvqbtAoRcn",
  "key1": "3wjyLnjx41UNEXe2F2oEaK7BapT3FY3BZViUyhnbu7qubvN8y3LmAoh1W91MaYBFRK2vQDRALTtqyyvNoNXwMqLx",
  "key2": "3Rx6GfLy548ai7RmKugFT1kbQTk8mdC5181utd9BhwfVfm4EYpEQmXkSNZTiMcmTFwySzFRLd3Wb3e5xntim5Qhu",
  "key3": "2cwXfskEcJL1Gce4rQ9DNjA6ibJmewMRmPqj3NtDfYzhm4z1trjqtaSByxqkV5bRqcGtVGMNTBJKi2UaTZtztjjJ",
  "key4": "5rCysuPsgmrYXQktCTDjCaq53QHSczzNAsxhYvTCsBQbXe93avcEcR3fsKKv9XnQnNvbcXH2tPz8rXcK8yfBBK8Y",
  "key5": "AL5jYCDXbYC9e2JUEJ1dFwPWsa85ELKVdAYqJMzRbMEnePuhQHhTXG6TVQBfMaiW2MEqttUowBms78MArKf4fGc",
  "key6": "4Vi6D2cK7j5xJBdEP6bx3L3M4w2PM51UQ7S7GsDVmhhBRrycrsLj2eHPXQZGxvUewxAc7r5PkTg4o4HsGSTJZ7Vu",
  "key7": "2R1EBEHVWyuo4Lr8EFSzBpjbZF9rHKqb6FZeSbWBoBpdYAZqiLa9SerpoJnbxgmSywGn3KWEEQaNgZXTYp5PAhxH",
  "key8": "5jciRiSWLrsp3fe1rLTCcQEjiuVWcFgBascnzA2Hpxu9BXRM7s7pBxxqMVU1tL3kWZtG47DURLYjpxLHz6meeANo",
  "key9": "3NnJe8sS4K9aQJPEg6UAbr8uJWfgphAvrFCpcT41kCBBY7iv3b6ANfpaEHsifLreYzmetMm9VxfnpLdgic5AMMUw",
  "key10": "2nV368pFNxFRT5pGeNTrZDYJ1d2rYQbAnFLUDG8qbjoGKegK9JwvZuf9kxkZhNVdwrMKnwZUbcX8Kc1ZzekhSgaa",
  "key11": "5hH7dKAKuFaq8C5mhBACAmjQx9R8kY6b9S5P8kaGuGNAcfDtTewkSmiWmhg9NgX7zn8yX3XB8vJGPRz6CrC6WcpU",
  "key12": "5FhiDnZmnesr94hzyEwajoDx9SLLGLzEf5ncu1u4oooQHeLoKjWjjgTsQkodBujRfHQj18Btg2NfbT9LfWJfStJ3",
  "key13": "fSAQgGPheLXfZPNFzUqvgjS5acGF7ribPb1UyUEbvuSdiyZRjhTJuqEa3AZeHNY7z5441vYHpQHVSytQHGhG8dJ",
  "key14": "3CQgLPR1N1Q9dqZwkaRSogCqYr1J7ntzmyXxNqdRfZ7EhcWhEPkEsMvydoovD7EZNr3CHyBXMWZLq3oyFyC7afWp",
  "key15": "2hVKjVtV5a97EEo17zQJeSsvP1sTWXJnqngge3eBajhCqh9XcVo7XtUjdNNYtw7dNVFzqbESS6q1HMCyPLNLtVFK",
  "key16": "3gvzGvjeK52kpwZQTPt5RyUbq3ifn4ZUrJhQsNmviheU2K2P69rcGMsrFKeQVY1s8CLLBDCbBKmQzFiun9cX8nCj",
  "key17": "52pMvet3icYJzKk5Km2jNUjQ7PT6oRCKaRvk5PiDqawcZN3K2EtW94Nihmkk25UK3gT1D1xdigEi62jiiZB54QQ7",
  "key18": "4AEZBNpwpXME9FiCBTFh3KjSm2svehgvA7qjmuxUXKxMNrm4DKFiZULFkP6Frn9oUYsS7uPQ863rodRstjwMpo7h",
  "key19": "eJgL8FMJF6L4vXy25FKY1xdovkJLYurCaqUeRKA5KQiTkjUY3miUggjP8MU36vqpddCXSBa1GVUqWuzggWThq4W",
  "key20": "2vnAdJyvQczHCDVTNhRv2SdDeuqufp43TSkpsdiJbcRsNUsNPLrza9LJcHkK64hyQRNex7WCDZcQQefz9gPVLDNT",
  "key21": "5KqdwjuH4XxJSnan7Zfi3mT4koaEpSree17zHJNHio9sEU7wZU2ib1CCaf3Vxp3RN2bPQqrmj4rYNW9jrFJZKeLe",
  "key22": "FynMRZ8gyBFXN5NcEzuFx2GPRKASnYTfDnHFra3JmDQUBesz9xW5poTGGcHvFRTdbzbv2nLqtoqHnwUvR2Ydq3D",
  "key23": "23jACSoNMRUqhHUq6qLizwzy5bjQayWj3ZVxpqdwEyXBX1L8YczvGwQ9fV6rDgpD8DhQjrYuB7cBTXoxEg9ES82k",
  "key24": "28FAjDy5ZQbgrB3j1S6nkcSaxZp4LkaWnyAekpA2Z9Spqhx6J7EWbUmcs9H5ev4fRU7Hyrd2wL4pSKkWTWgKnh3b",
  "key25": "2fGcdNWN4s3xbPeRot7Cxp3HWwvsko2bsHtDTv4BhnyYW15TxPabTqETwt3puk3354zxKh4PHwk8qAmoTactY3Nf",
  "key26": "4xcFmxXiLeZ7fcJDirp2hXcw6qmiwvNj3K8kEYr3rLwMc4kbXMYWBuUweaTMYHP5ZJaLK1tvsWhGVAL47ZqcbpFe",
  "key27": "66Fwk1avKjeBgw4ACRGDMu5HFS5WM6EaNB5yPZNb3ABgb5qaR5xXYcPEd6xyhPVGW7PiJpLfwDKvgiA15FWUb1t2",
  "key28": "5DoiNK37FxM9jUNUi1xvkjWPVnJcCDUSSzPMNriw7rEyPf49QWektSmU3bMCBZDQdWmVdqrTbUyX7JWHWjDbHf8K",
  "key29": "57EFbhqrGhPGpUmAoN6Xxs5Pe4L5L7dWXgFN1juxfMwQ6MY5XaaRxqvJEchWRcLF4vsE3CUpDsqcbkE1S21c8tiC",
  "key30": "65xRn6Tzvuh4Ga6atKQhXMadpcWim75d3g4XJHdHhiK9v9usMAhStvZam4WfHchgZDFZVLAcipcKHwKWo2PoCjRb",
  "key31": "4ekG6fhxMsz7GeQRaRHYGzRbNPJWm2q1b8keDV4NhMo4Pmdf7fxP8c8TkutDYqPkAHAPcCyB2f6ZnQf7JFxjEjrD",
  "key32": "ZH2DcbNEYbyg7vqziWp1Gc58uR6NZywJyeYGw3G2R9krtRvGtjhBUFehmhNj9jnyVWzZH9eC4TGhpdhU8VtKT6w",
  "key33": "5KsB94yjC1bH44ijqifvKxR8MtB535T9HUVvkfuMyapLiTqkzb5fmMfGSKHY3LpWYz9FQvgQSo62pcimJ8nQR1ys",
  "key34": "KzUEj3nF3G47Ba9xhpCctiJ9eLs6w4tMtrKBmywVazRrtaBxiuS9BQg7vFgYTNzeXSC847hugwkjHZKtChAoMX9",
  "key35": "2UaXBUa9TTUEGqrV8wQpK9evAtDYVZ75RyZrSSBqNjfK5Fyz933j2p9XKaueMGJbjCN1ZJLajunVpHtqDTPNnQB2",
  "key36": "3G3kaoxYRyA8HHLckCqZnG3WApZaApJg6PvK4zwiYgJtpJdpPef3RdcURtVpedoNGQHctRUKzfuXZyMeqPHgJd9C",
  "key37": "2Zzshd5Xw2ZxtHNiPZdvSZ9RqZrK3BT8mPtndLTKYGShg3Bb83qHMTCGyQS2ZdYShdNEguAuTuQA9dELZkMyz5oU",
  "key38": "5kw7xYA2gZBep1dbvWQvF9bm9DLS8XwpSmEbgwiWEgwbBPSApH6N2C7APMgkLEVQNFiSdZTJ7ECCpbJL86kmNNFp",
  "key39": "2TRnQ4r3osWSKDSdFNbBLJ1Va8RN4YCQBw3E5xScBQpFPawmquWBKbahaMT2pSSchTfr8mpf2yynmtVZsP6C7oEH",
  "key40": "3Xx9fGEw4KVQdPL1ZDA1VGubYhQWrSJJyaVn3eyry9z7RammCsFFN8vKBx5aVT2Xu5DR9VrutKtk2M6BnPX7o41G",
  "key41": "aVrY6qqnqu1HHtGc4DCBZkMQCqJxVUWtV8yyhTdUTZVUYCqooGdtiZDJdpzL2P5pvxiaX9QTxpAVuGoyx7kqXoM",
  "key42": "2DfMrUD26sDPX9No6aB83yZJBe427ySPidsAe9jcVGCsaWfWbS85H5kZc4jm5hJMpVnTjDWhxnDpKSmGk75DLYNv",
  "key43": "4JC6foWgukSjqPAA5n3sr4ggNujnX9sHdhdhjWWLK6C4bpW2nRdQ7ZJ76YX5bfucJxWoCEW9VCqF9NawwSGuJAxv",
  "key44": "4EZmwaaKRc5JT8BADk3QJy6SrwjGGvbw5FBwptMEcGovE7Hwwie8rSgKzbCGzpqcScUKHJPw2NG7oTPb16JgCand",
  "key45": "aaPvAbjRxoeF3Eza9V13auMDUh9at7EuVbX13bjHyoUm3qsGj8S8Xku6CvFm6tB2i7ecQdmxyBcNAV1TX15tyv8",
  "key46": "29GifRsdLPeX6UsGaSWcb122C7M3jUwUEBsEbT2WM4HUcks9XW3NYayh1fp3Cuhh51yKgQ5mTmy26jB1S68TRyrB",
  "key47": "BfoKGUirU4DQQjzqimt8riiVKp4JV9SapHs3jL8xzykioZgSPXiQFPzf72E1huGSSvesY9ubieRn3V1nTnXTuby"
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
