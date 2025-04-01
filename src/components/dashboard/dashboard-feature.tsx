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
    "2zyTuG6CAfjkg28h1eA4VDj8fuk7XD8ga2gg1MRXXQKY9ALKJhHWVkBLkgEgKvuVRN4ZkHfyib86BtVZXayjkNgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qgdXRRA7oUFrYC4u5KgHn8cwmfLFycatPBXhxbmZH8RPoWrpP8iDgj1ZH8HDhbdTUNt663KX4ZvHdFgw669L296",
  "key1": "2AT3zaJ97dJEqafqY7zoAnqNgcVpBouZcnbgHsGeJorr9jANvmATD1Km2suRwQj51xmUuz5z5Ymxw5STtXgceU2j",
  "key2": "64YDm2wNyEgeUCe6yi4YkDNMct2PMmkrm43aUNeJX7jvSUSWuov2DjsQ9HD73CadAphptHauqu2f3m5Gm23muZAc",
  "key3": "p76HNua6CvQu7TL7frvirxyJkqeJ8Qh4ZFG6mqz8S3GwabjXJJaqpqeoQpSC6BbaoNhgvkGBjcNqwgmBtE7CWfX",
  "key4": "3eccWQM7zWGWUio4i5jsPAUu7zkgj9rK3v57S9fzTY3ZKJNfuwmQpvhGZv59A3cwfQGZTiPcJTDC1rrCB4rG5fLM",
  "key5": "3inV7uMhS8o2sieWHumbbybnRdq7FxxncE7FNrRANckP1dh5414qxDaQkNxCaW3eHYoDTpTaP3shn22ywdpN8B8d",
  "key6": "2PDS6BJqoxVYtU6y9YNvpevpbsBkn3U1asR9qjyiQUwFT4P4b78opDWMj14E1VUikDdNuEJjKKzv2qgEjjDaoVa3",
  "key7": "2Xzrfq4NeXU3f3id5gw7LLJKa5Cki2skMK5BbLkf4ir63kdBT3376yPM89bDbMzug9sLPTp2a43ENetmoNqBJFGm",
  "key8": "4cBYVzYojdRYscE4LTLKinLJZe6mKgkHDWjEnzgKrqRa9TMQfBX3dQpwYyPnHSbL8cxtEGeFMrwLJ3dsaq9Lwoi5",
  "key9": "4EkG7TBSHt7n6TWZTfx1mNz1p5UoxuuWUXaFQTotg1DiFYxCnYqPVH6f5zyC7SKaoJUt8HkiDbgKQ8d5i72f9XV4",
  "key10": "EwiCbFf4mZiYbKz5LGiPVU8L2JZ6usg2jqrZjm5qw6dnZpcyXpPMPHDJX5jLbF1FREyPDtVq8EbNEk3ktjBRqok",
  "key11": "3oCjbZK6Fd2AXnJv6KRyKEWNsFPQ9fzrkEEkferouCWrUtak48uHbr3awjMJfgcjnPJYDXDUg6rsmBpSpF5WbHXZ",
  "key12": "N6GELzCYhaGqi49A9YyE4EXx1FqeFkRauk5ad7tQND5pwdc3teKZDsLHajYNeGRKi4J7Lak9an46wvXb9iUwQw5",
  "key13": "2Vom2WRx7T3deFvcwEX7CVFRqiZMDBekbGKRhsEoiNkB3E4dYRbkxjEtM6yoEWqVxqVTKrNcw9GjmKsAN26M898",
  "key14": "TV54XPAxfxM6gsBb5tcDtuER456KgJVgnjDhFAQNaje2ZaCzBJLzGawRZZEU94SGv42NA3E3yyPgsCWedd4VL5T",
  "key15": "5HbPN5dwL8zTWphWekDr3adLtoerVX5BuT9vEZ3TiJRQiGjo6zuy4MZ62BfT1C7rgU7pbNabB2SQRuKYwRdnqfgb",
  "key16": "43u6DPCqfS6k9ivfgKf8nkQxKZHQeys3tjkEkS84WwDm3JmXzL96wMo2XH1QiBsTtit2aNPFVj8zqHn3GkdXi88N",
  "key17": "a6JDHYyPCGKcFd6bawvucYCgtjqprwt2zDA9uxpiwDKsDKVL17AoBS4yi73mMJzmTU8FU1nVpv6MhTjg7xwfWcW",
  "key18": "2XyQpwrwnK5SmoPLfUA5bWB9U9j8DR7Q5W4whtVy5ygoYjAywNLkvKQNJ7xCY167qjRoNLcbPFQc9CfWSiUL3Z8U",
  "key19": "5aGM5vH9XGHE2QNkM8km3pKBhsSCJfhk9Y7YoECDDPNej8PjL3y6dYa6X1rSakRza2GxE5i6GNyniy2Cwk2fd6Ka",
  "key20": "3eov64vn7uLqVtmrQusgBNf98Fz5VmyvQbBZoPuUikiGp6E3y8BjhMnDn9dqES9imxWMgzGxtNqC32svHGPUeXJp",
  "key21": "5NVuU2VfjCc4TcgXPYeCidC7GvAENGPgsBNedNTTHSSvreWromipcjQoHGx6sL7B6JwL5gffkCXyLp4AQEtHUF5m",
  "key22": "48MAQMP6zBq5GuTYC5XYZ9VtFqCAWDpmwmwV7dcNDPAE49C9jdqg3wUeWEHHfHS2wrri3quWjTTDxABHofFPhxun",
  "key23": "3k2bgJbdTC9MrhemvQRQHfCZ5rASWqHS8pA5c2utKYyhocZRFh4b4CxdcBnnAkTbPJ9d3wrFqefbZhBLXtj23oXs",
  "key24": "57PHwWsXvPMZofTpbWfJMVdYPmabwWKi4En4m2N553UocZv4rSEDeskn4bSD2GjHMwk7BsG76Rn6unfMqcuBdnzj",
  "key25": "hH73FuqBxJHHjH2gQJVPedoniJFCXjZrJZF7bHjt4H6a4GARQCXccVBTmVU6dwZAbW8aJMfARty9WtWvEwa6KYg",
  "key26": "5E3MpKJn6pyJjvzFK5C55VLszpBVFa6xc8asaSUGhSsud39qdNszy8iwyEuY2CLVF7JRQPJCtmJYo1rMYD4fGQMQ",
  "key27": "2Nt9GVe6c1ib8WSnNTCfBnb4oqN15wSun58t5HzM4C9RC6mE5hiwkXeRXqLrXf7YZ6WNkkh9RXfuNsDFhtVoeTke",
  "key28": "2WakyhLm2dzAk9i1a4uhhzw1YuA5CbfCJ1tVPqsvZ8rKAYq6Ed5AGVPQ7ZyyxvvhqXnmJ72BnGMhfMguw655uRjw",
  "key29": "mu62ivVM9dfoaLSQZo3XTZiH6jL8BXg7XMu6qxNDgSUyhSwiPctq8uUBuYtujQ8abRFN28Nq3GxCSyyDbTiHEWJ",
  "key30": "43bsfLMhFFxN1hy5LtfWF3KCiU8HG1Ljef4JSRaor6NeMDHRa8HX9KezmBpzauDjAqubDpAW7qYGqnYASD2ZFtwa",
  "key31": "5RBWmLyJjs5SJicTjM3vZz8WXPXMCC7wFy1PVZr5DJ8R8qRnQJAQs1oDYFfojFGk2rrd8Tnv6L2hKzwDEaui9MxA"
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
