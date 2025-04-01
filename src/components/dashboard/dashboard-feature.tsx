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
    "2jrQjuhcwhUeyNV3oQURzk3DDmHkFDh3dXCd9GzMtcyjf7FVbmrn4WR4KfAJ6Q4iVD6LSbW75KvWZXHmpPuPb4My"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dHJ9VZpHuxq7k5jRx5cUoMPfqVe9djT6Y3DEczAkv8DqqoSxrSCLrzxAN3FK2LPVH5QvAPr4GJxmGCCc6MyDgVf",
  "key1": "2UcdceGLKfYHDVQtbJ11oLpSd77xHsU7T8ujSvhzoapV8WGJcmav8FF6DyQ9DYxKsZqL2zwyo2MDw67JeRtXSKvn",
  "key2": "Xn4KaKPG6dqUHL8Fpxw4NfZHgiQshUDcKHpZwCVuThV5o2eHvnZBEGnYipCrvDSqj6bg1K466bGRc3tPbvtzRBy",
  "key3": "5TE6eSvnQNVr4e7uDLCPxgQcXMPZT2UfrctFqbxbAc8f4U1SEDLaf33WNx7t9DPSL9QxFB2VyEh5rn8f7C9umar",
  "key4": "o464rF75JMB4zhytiQMyhoynFnMs3TSFneZkQKKiAaj2sWWc45gzKefKkx4WGghJDWiyNLy4PN7uuNHjZYUwXK3",
  "key5": "5x8BPQUBzm8UtPa8DJznZ9YZfdpnNPHgFoFXa9ZVTxEU88vGfvmrRQ4gunCj523wHbKhf6G79euiBy9aeKUDvV88",
  "key6": "2MXiC39cSw1kwgBwoEgsd4ZqVZ5v6n48Ywuzeo7DsLDxkwPt1X8HKDitcR7jNUQXkxokyGYoqNuusjK173LMQCUd",
  "key7": "2S7mNZ6Qw97yeCE3cY9vrKXfPqCMc2rxNK9mbpiPJtb2tSRRYfDRNBYvheMqZJc8ZBz8XcUq8M3RYwYDnGgsU8sS",
  "key8": "2N5diDK8H8n1y7d3UQ7AsoqnjCk1QsbRbbxMQFuztUMQ3z9nGYHkjfziZiwZPMN2UpxGWm76FYjDAG6PHawXkBNV",
  "key9": "5a9VV915vrPWPZ6eNSnZs6Kuc7j5nEg4Z7CfyHAHBumpDRo3BE4txccbgTuSG3GxbpddgLsH4gUHBsGqBLpPr7Uy",
  "key10": "3H4XJhiwmHEZQyRHLw1cws7ciot8nHLrFMq5wLwpxeuhp4YEN2j6oUPFXem7vvDUWy9m9bbch1rtd95KTr43E2mV",
  "key11": "5rA7AFjwDUiGNdNDYBkWszu34j6b14GbQkBawfiAU59t3v2jzSipqwSTPcnaWXTwJEiLpZECH5ZvMAQau9kVKFhG",
  "key12": "3mxTcBoqC8utjh74JcD3yDy1rBcHrdVnX8tw9xtVdtvHdvFXH2nGi7QPEnEm1bsXsMbLFbcnBoB1Z1puPpnDyJFu",
  "key13": "BemuTnBYUQcnUVEwFERXrpmgG4NA5knHVyqq9NCUJjLrKVd7wiwmpbfgTGcA2Ue1CwmEMNjvJxxgMRWFgVV1C1v",
  "key14": "39P7cYy4L1bFjCkYiDJU4Er7sd18qZGm9C4KGLamVmpQpdYbuFxhRFRq3TGRcc9GGRM6M4UmGt4FARfqebDqtr4U",
  "key15": "2wh6o8fynLzVbpF1aw7YuxY3WWthkuSydjaS24i1A6JFYwHydvSJzRmQcJZECrqubRFWWxQKJAJkD7cvU5UphT3W",
  "key16": "2Gk6aY8cUZ5wXJrc62t1VxPdJ2bJDNj8AhxrZJgFk5tFZWFfMNJxTwk3jaHAgLeb9utmw2V5vbNJJJrewtBukPMF",
  "key17": "khXqRxjztJfVD9w8mDyTL7Gy2kH1R8GCXBVg3jdeM5nknJKr9HNVtnL294xdPd6j1TjF5VYoyqpzxic9Sgo4y91",
  "key18": "5EXVaz4kYjWWigEnQypUYpNugdSRnYvVGHJ3dccxsYyvqotWWKv8h1y8hquXzT74vrTFN7X9ue3C7BP4XJaZYqCp",
  "key19": "5ESM2HodRXVKxyzCVAqTEsqBaQQcBLibvoHvixeuJQxdnTorNGsBfqkXYGoQbzmRdYGAG6464cbUAjuYbe3r1tCg",
  "key20": "66w8FSgS6gg2uAmLgxS5soGJwhM7fCoB6qkSNzrF91uceYFMcjkQtJ9oEAiFqPcLdnXagESvvySNy25RvSnfgDnG",
  "key21": "BjEJjmKsMp85YEsdnBBQtYDQgGW83jbXCPi1uhQm62d9rhdBCuk7UMSWrSLQb8mN2YtAXPkpE5rNT6rzQz1MWnk",
  "key22": "5Rb9bjVMzWGjW5AiNb9B665JBXVdhsvXgakNfQod6Wv9Ek1wkSK6TJmuAgu14Ne7MWtUAfWDdoMPphCLxyZap1iY",
  "key23": "nABbXM5DGAXvioJ4Msy7k4wJXFqoSaa9MpcqJaF5R6fuLZD2nuysuLdhYzFNn14cTwoSFYC7tePxy9VtFFMN6UC",
  "key24": "5j9jcfgb2ERcJ6TA6FHWY6PaUPsD7ejZnsGgyiPxd4Aiu3fVFceQzKy1kGNsNXwqQuAc7NZdd4zz7jJpNzjb1uWW",
  "key25": "4AFZCweM9hXYHQBv76qASJwWAociBjjPcHUhKwsPtNibmM7iLFj5Qtk2z6X6JkUcmnMHD7mppPpmSc7yde7kAkQG",
  "key26": "kcZSAgNrcN14UGZpiYGuZDiGfTJYXJnyEhFzPkepxsxoQRW9sTgixDcfQTzHeCz43nFiMYrzHebcnG6jmkMFCpV",
  "key27": "2WsZYaV9gxpy4yfF2VY4HeQ7NqTjYkbahFghjm62zGoWkz4bVm95CkiMCQNJ4ipj2zFiF3K2DeQn1w6DUyagjwJr"
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
