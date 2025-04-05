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
    "3ttC3DWmsFzRZbojRXp5kpo962xdhyWEem53QdsUtqByp6fHsTaP8rHhGaNKeVXrMS3FyuDmpCqpG9Yph3xmqoJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "542XFuxck7ob1H7swVaRhWxw1LogMypqTwpC9nqWYnunW4U81iVX7pTRrqbXeVAU6qvBaiENVTxFVhB1MRKLNNx9",
  "key1": "3m7CE27mnN7GSdb8jfQjS3S7tFCgrnHrjYGbRbMK3Z2LKY2Wghhid98EB9Z6gEwE2RfiqGndH4bP3iiWsmiTDGjm",
  "key2": "sU7E6ej48N9f6yRX5ngpe63TyKNvzmdBBQ47LqePmuLgEXt7N7iRTvUeD47WNQkswGDNhhU4B125vKwXJrmwdmh",
  "key3": "YmQ6X2tcgZHykX3LPCT88xjszLy7FP6HS3qkJp87AeuR7hbinB4iK9Hr93khzAsaVZKByKeUhCafk8xcF1AQb53",
  "key4": "4oWzoUc4QTTBx6JQi9NFc6iRL1WN8hBrzgF6ufyDsfy2uvo8eb48R1i2ZzxaLzDf6X5r6HuvqrPzeeEP7BF9wfrX",
  "key5": "Zf8KxyeEDxr1q3M7NaHg5Cn2zAo8L5BbVPyzahfEAj1L8BroAtiXgyMJrQYcg3DzdGgCouE9SnP4zKpC2XTwWxj",
  "key6": "ypYnwSB8JvR2bFEC7ijLf5V4JqmQ5FdgKt5UNMF1QguvsuyY2ruuUEvKXqnPDqreakgZjHz33Ybdnfi69M4Pn88",
  "key7": "qHF26NcX2ALaKRCJGvFMd32JK5zH7C99mPpLtCLF4tGGp5x2z3zT2ECZ1rEFkUGvPKEhFfTtyV1iwjQb6cqDS42",
  "key8": "9pgmU6GDHoUskJQuAA2DNpvpjbKciPz6UwzgZBvmxkDfhpRSd8hGyLgQTYhQE2XyZmWTojduh9caPuQm6W5AXJF",
  "key9": "4vJNrKgvpdG7TTdMU2JKN9qAiisMemh5wXSPUVRAPd9RjxUGsRixyqn88Eme9BrguhdQM7yBvQAhbnucuce8AwEm",
  "key10": "51USi5TgNZvkxFQQtrEpbEFXJKwU1a9fT5urzdTy5C8ZNzVfYjaFRMuCanTJG2hY9RfvPVaSPkYXdRAFDHe2hmQq",
  "key11": "7jYyMcrEs8LcxC2NamupWvF1whoHibhtkoJ6hMXD5gDYKbQQ7xvH2KkzwKLZKcrmxHBKm79YUqReU1nPxpaqH7s",
  "key12": "5GyEz8CjpzBQzFi9rhW1rD32muxjxfSinUKf5y7RDjtjcevHaQdZ8Fktg85apr83afNpE9UEX5k34KjZfS9aeAnf",
  "key13": "QD3v44jKEdW2kwVDc97HmWtXdLkWLo2bFBML1H2ajVte7hgUir6nno1yqMLfWDX7EV5EuhkTPHcmu4AdSWe4o8s",
  "key14": "4Pe8PFg9bitbeKhdUsvwrryUFYkUostcgQhwNnZKVx5wtaJzAoqT4CwVLvS4NV7usfLbWr9VEfMMzuyUqYHHNsPp",
  "key15": "7RPmepKG2fJhm4EWZw2xywccMR9gitZJ2YPGLPBR3eYVRtQwdcvwHDgYg6nB4KRXgNUBmXw2HiCGhXbnvYqcvPU",
  "key16": "4T8w8rQJvpu9Te4y8giJAsfvhnrmgiiCpDdr36ZwkoGQZe6qQdA6zV1TZSXsqckQbwBJzAfeoCrXJcWDRiGciABK",
  "key17": "5SGNRHHH6z7LWbb1H3Ewg97Bv9Fy9DnWWXpNyEGeatcncNQRwtVeaYbs2ppvWJLkoFDMtYirzaXcTy2MncK4K6Xk",
  "key18": "2pfvEqyvhmhFMJMjFCv7JQXaPXCqGw5TJJqUb5BDtCJo1A5Vi4EtKKmZL1hGCM43YNVKi3EkWtGJDwyGiTa64qc8",
  "key19": "3BrMEkmQnNaS5imQ9tX34VR2uddKqCdAGvVFEMRnhyPDyqZ216fCfnui6oJFUH5CdX3hExo6AfNrrSrjwEHwfg8Y",
  "key20": "2XD4W6FcHNNrLYpcS9BwjC8u7mEJz5T7kVKrwiioz1ytHuwwMbpYrgh5j2xiVmV7mqjB8S5ABKUMPBWdwasscv7t",
  "key21": "2qZXYdFQh9u6UhwFfrVs7gAk9FCW4a85Vyo38YTiAhYMZiESscVo7XsNSQVy3WN4zn62anvoKjAqTJdeqMitjiyg",
  "key22": "3w86Hoh1KhDSGsfMGD2NuFT2b6yhB2nmGmxDBkUU7qrwwc7LykU4BPWjALYskEdYxwhKsSAG5zuLA5JrkvobfFaF",
  "key23": "3cZqC2BVThXujdQvQ3d5fDzhAMLm9KaLCau5Mi66PxbZGnu11EzuSKd8ibGX7MnAj6xysLYGrvVE1pscj1hvv1do",
  "key24": "3LciBMMWjp52PyScvcaT8DommHgnnKNHKqtqjGbuTmjFDd57URuWz68iychiWahzaB8tU8YM26fTLVUKED6GTwME",
  "key25": "49tQzeGS4ZyFdUHXXXcxKTc5YKwEzbNXGkoBfPQHcuA1VoPkLm2aCH6vdtmu5ajmEueaeDyHgo2fkVz5RKe4cLsT",
  "key26": "4YiNtroF8M8ZNwhDzS9EHh54w2d2AgZoPz32uefBve2b95N7tedgB22ctgGJMRnag3tLmzpzt9HSkKYd1spnXzPF",
  "key27": "48Lq7YvvHQzzDco7vcduQbuA5xQ5QAZVL31mLTagfjqpkCGKAXDyaEvc1UfyJhCPYztrsoLZNi2BstuRMouZhC7k",
  "key28": "Ro3Mp2VSjwovu9AXn8KCrh8zT1hf3RBbvLNGUZwVpzYyioswQgS3VgHrvVVKPLhvU2LS7SiB2zWgypxS398PjWa",
  "key29": "421pzxUKtS1cHTw4AyZHY8VZxkmpuxG51ePxTkm8K9pxHMGHf5cNKaPmVeLReXfTdBrM4yYadj6rATX2h4AiwoF2",
  "key30": "5RoFeoEKeZxf5Tepq9aiyciLKXXKs8M3p8jCYDkgPwhQnXwQ4RKssH584tbSso7PEr9SUwBQWrd3ba3j2T8oSRY8",
  "key31": "2Q5mXxY7uQjNdqqHxWD6WyyTvvmLDJju2aEJNWaQNY36gjTevPRY8kAAy9oxbgF8dzbC6xvNSi9Waf5B92MTKrRJ",
  "key32": "33xrTCH81o35qbc6hzcExtQbZcn84LCfJdrCfDMLp5QKm1btEQj7t55qZ7qCxhtFiu2ePb18Ghn2YG7jkCmiXHzg",
  "key33": "5hcTFEfrkdXdSLUMYGtCtsXXwbGm8QKxYXeKBirTgRpSNo5BvkPe6uvkzjnTBzEEBvZZobNfEqvdEQCDv2dg8Dt1",
  "key34": "2ujbcSNFbejPYJSnkxcTyrjyWWvq2jG8KpcqhagzP8DR4eLbFttKp1bR4QiPvNJLfE7zGNCb2cFzMcjV8ZMCYSaN"
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
