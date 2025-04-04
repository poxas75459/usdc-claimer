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
    "3tvwey5dtAmTqtFXDvkPcWM7Wv49XEsfcN1wr69z1pJehQiNyzEfwrw19a8pzixVp4Ss4PDDEeSUqQQRLBJEmtUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PL8sB6Q4L7zJfAfSNShQYQAB3oBiSaCHGZZcbAtv36AgXoptNdd4j3zktewyMKn3pgpkVcC8g6MdEEv9YJqc3by",
  "key1": "39LeiuzaCGCW3eDKBD1aEUtTLcHj5wM99x5QbzNRfpEJipXju2QcMNYuYiT8poJp5YEvDpbcmPomaBqXfVw4X3NU",
  "key2": "3XWDG7yaHm12wuzTNue36GJbKsXcJDxtVB9Y2V1YjJCa5uHyZ8p6pBcow6GzjtBjCZGUPwiV8oRRKtzRacDMwCQB",
  "key3": "54prc5oea5hWkx8on4ZLm9bU1KXsNLypyTJkMd7nJnF6MaJZVJBusYBsx6njWDcDAjni34ECfzBcNdcLNmdKqWvi",
  "key4": "4xX8odZ8443qG5S7zQ4XuQYPi2LUbqcqtpqViVaBgNrWkF3ZrmKGdL6P7Ezqj6SLrB53vp1yt2ESm32yxEFM9cV5",
  "key5": "4XvWXNc7M2xPZDMyMVWdsEy417PCePcNMttdoaeN3tMUPrJEfddTStBgEu7T4nawEdaVH6CPc8MVeKPjFJfRDV8L",
  "key6": "4wJybUHsQhYAjhajKwfJR63h4KBhgJW73bcR5iQSHnQyXR2DnjWmgxvXMgJBr68PpsZAYFFMxDx65vNLwfCJ85Tu",
  "key7": "H76S8wc8o51xPdjdrerAqmKwRUejG9mwb2UMCtJy6pCYLetrDsdFfBxxuqDKEQfUWEtqRJZqeBJgRgR1tLBqXZH",
  "key8": "3Li1rkXUDNvX5RUabF7AbGVFr4UCoC7wRHGPr6v5xzFXjQb5npUXsdoDULuMzRgphG8MFeXGt4df8w8hLTWA2GK",
  "key9": "5frtBeETDbF3NJTskGtWdSg3RL8zRPtT5Sd2LoMryQ63T5T818WgJGEQPdfHbmU69TY1bHkzXYn6Sn531mUCu5D8",
  "key10": "3Pg8pDFSvoSwVd2MwAKStPo3LwUPUGxjkR8q9KqxSsETxfvpCpZ5mJxFYwTsQD554SDmJPPwyXqtnoYuSAopeKVU",
  "key11": "rsbhfUj3JdmgFKpzvmqZmigCMqffaRKpBvTCS1Gjiuzp8nNogVxCLUf4bgQF4g9JS2tscXyWKVT7ccmrcNwFQPn",
  "key12": "3kC1QyYFNXw1hoZ1HYWuZKvnXwyq7yTnZ3EJAfA7nRcKPywith7Mj4hQSZengxfyy6T3GP3zAMJ3Leqax5k169Xn",
  "key13": "5ezfNBNzJeiXztd1nmk3ybaJhehR6DV5ZMSk18kMm37qhknmtfZStVyWp9HAwDuGegxf2NqQGE7F53CkZvWx5S8Z",
  "key14": "3Me5UvDwU2GHeLa5pS9tN3JPEi58h1SikdhnqdHAF2ZpqY1zDsQaHj7Q7XNQ8RRJ7p2tkU12KgrEqwyscAkCAQjQ",
  "key15": "4Q63pMiY3VY4K5UUmvwKbR1Y3YXzXEGhqJSduotbwgW2QogCEo12zBQrc5esMuFCRrpJPKkMWqsTnhBsJEQ1181X",
  "key16": "61EQMQL3vZnGFzxsTmxyuZhfYCzQuqu8eJAi7YhoqnfNjrZy6MQsWHNsQKenELgkj7hw3bfEEZTtHBzoA1CPZbEK",
  "key17": "tnbHEsKhQzXqeb4QaM7HprYSnG2UhhV977DhJhM6KquSkcusZkLhum2NYRb3Cie28ntrqXwndr6BH5hqzfFCwLH",
  "key18": "3vG2S4qirPi7ca7EdeufE5MhqEnfZLiVbQv1zh2ScBBwXSzjwvxGPQDZWQYTiNaXAy4wyirwftfAUDDZmVdHtZkU",
  "key19": "23gt7ESqw5Dtj2vDDmdSiJSWmEjBfcffVNKvoXKfXnXYNQAayUJt6pCBxYgLnDdnbh3e7qHFBmSXJ3qb3UpHJT2J",
  "key20": "3tu7MeeBA1A3yaeFe5j6tHqvY3swMsmHDc7tRynvSLRxTq6jTpgVuyXhnSVXTytEs8BxFvJ3M4Zudt1b3sCnsz8S",
  "key21": "22QpC41yEs2R2RpomiEWssqkcorDPTEvz4tbVxmFSeRkJ6SHQhHRuzfifumDjNcxxQJNsoDkJgS8tFhMtH7yohDT",
  "key22": "mAqdD5fWNgWqYKvtdF6qagpzEXccdwYsSVS58tYw8hokQjg7iSbxMNJeoSD74EqUAf2VVtyUAbgqhbYp8ccRDLR",
  "key23": "2xsFfdCXrGFcGdLB6f6TRQ8cJrEcykxa7Jiek8vD4SLy9zmyhujk6iMw2PMFCie7SVFEsYZQXGgYVHZtSyytWyV5",
  "key24": "4NxaVeuqgPZzMprWNNYgv1Wi53s7iB9GDaYuViuS5L8CK72v4Qwg8uV9Khc1mGu6ALjycRKqGgh1jD9QrCaWDotv"
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
