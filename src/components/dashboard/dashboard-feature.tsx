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
    "jftxtoczUoRU9RGQDpq2we34vug4dsVGJhT88P97Mz6zH7TkRm9Y6hYopZ9Nnhj2w4LDWm4vqukDWpc4Qc1t6Y3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m85tPWZQ1qq5V1yAmyG57xgwp8B555zTYR7hf1KumjmsTaGzz4Tr8AGUDNNpJ5QMdX6ANMq2NzDfth9AvSHthyo",
  "key1": "eGhydLdfsCpR6bRRoqCmHFuvuCuxYtQfnW2ez9fXLmv8kv9g6bL98EQKaPTT8Bid55Bztwgaq8DqAjSwRZNM6hE",
  "key2": "3PteXVi56n5BhH35EZG76frDBvqbPSWdKhEdKuT1fQ4C8zcHfAoTUFnt9Y4VpetkGRG5xqG7qFsxRU6AF6unRprm",
  "key3": "2obfA7RavgH833PxDjGe1HPRZ7vqAH2TTZ1Dm1u13DhryGZau1dsnGqeiLjWrsqE7bY5bU1p2DRAJMx6762B2MfA",
  "key4": "59KC22fELCM6RAF3h1c2UDoin6PySHqw6h6e12P5oo46RttqxAsKmgM47ntnJ6jpbF5yx4GjNZ5PhcRFZPRZzwkW",
  "key5": "5fZ7ouQDcYc8RQ66TNXdLo6rCvjTCUjcSmWzoci3yiNPcoUQ4fPna7Pokmk3Zq5dbLiMHqeuyU3NQGJJQUbngHJg",
  "key6": "4tUavEPvnQT5q3C1sWZfap8y6Z6iZmnT5HxpQXUKvre8ub6Gmtd3yhjcnUNTQKBC7bDmq5Hi9MakqKNEZkMzJFu5",
  "key7": "gckrJ2fwEuR58rB6dEKGCxJtqR21dafATQn2J3XNQiZKPXvUxD1exWDqTAyVv4vQV59tXohScBx84KKHr97JgrJ",
  "key8": "4Hss6P5GpzeBBQPcGuFsNuTiv5bUq7TYBi4CKVvoJScsuPc248sAcpU7rYvqBfMsBzFhggC7B4fXPK73tBcFyeE7",
  "key9": "m1JApiFUnVkUKk4sPZJgieN1vnAmBwg3wYDFXzm687zd4xZPJwFsBaxpfxide9eu7jUZrUwuEoJco54QRLkLzbX",
  "key10": "r8pit3RZQ8q6DAteQxqQCBaxE9CrFD6FMaUh7dT7exEcoEmzKob1AmhR6argcPTiK95bathNggAP8mrZdCBjn49",
  "key11": "39xGxbK1JgRTWFhNPEr1EuxmT7yPSPeZUw6N59GTmQ2KGStXN6b3x2QzJnD57AeLmdQHhVsqAv36XqWEKtFDT6Dc",
  "key12": "qvpRXpKewCrc5GYo7b3NpmsmBCmeSYfCFB4BeAo4LT2vbCA8g5UFbvCFBN5cyZKMcNFSKN56EGVP2SFKvttNpUo",
  "key13": "2eKHwaRjLPhB86b7htKTy773FLk8TVixe8ktXNrdint9weBAnRTRL4hicHRfMdtGZkbzWTKUkB5kpTkQRz1FwniA",
  "key14": "5EDF6eGECemFLjjYGryWgyB1BTppGFJtfWbNN1yft9akoJxzMfLJp3ijujrcYcgSRJusTacedyBa2F46GDtHYxWu",
  "key15": "4kDgvv6KuwTwYqGvHkTdZYbTtWSVBM8w2bqB2jfFKDThsjEmbeYvcpKcKYEmhPYdCDd6EbqXoqSre1EUyyhoE1bD",
  "key16": "31bXAoKkM4DnfujmqnUooAXYmcUW7D5WBYyFd4ustjPxdT886kcbztZE2PpP71vRRsanTsbcgHfMgHgPhcZdnz2",
  "key17": "5iWj4ZCn8zHofUuJjjHnY9pMzHtHMdX8wgCfDUzYwKsgTn4b2KZ6i6srVGtitwSsKPPrc6y9uZEpgujj21b3Z5Zh",
  "key18": "4EoqCqB8yXZeUxcCG94DAoYbXony6RPPSzLNdR592Bht2xL8NWzmcuVb1L4fnFtwudeEWhb2MGNcuZLaQsFV1fpz",
  "key19": "4NhHFvEmSxjKkUMDP8vTDEe76yJqbGnTKEePABTQTmuwFGKyVBQofWCw8nhmuNcpqJXLMVAkeaWWmMDovz7Pt6hY",
  "key20": "5qBJXZ58VHVDVVQEepbM4eTheNqB6hxLGLqfjFTAPQRTS7oGvWVJo5GfK48Q46gLVuu3n46VcrouAHmk5ECPYFiR",
  "key21": "3a9fMewL2BveeEoTASAdyPbaaJp7gqDXY4kA6hXaFFVHtkUaGCJzeB5oik3agQ7NW6pWc2e65wquLkyyFd2RmNc9",
  "key22": "2zviCjvNQCxEnjNR3sXr2heBa7jxuPTWqR8QUiR54jWwqsbcPADQfBJ93o7674JMM2ZG2HHHi1JWuiCyUuvf8cU6",
  "key23": "43QTNk7tm9NzJBAo9zEPg9d6gir5wZx5B1ddSZsDHJRYkL3HAY7qjhJ3PcdUY7Uk1cFvbekLD8gFhHJTFRveSho5",
  "key24": "27MqRucre7sz3SYJRgZxzDRMGWvuh3yT1ffpc8bkkhL5wFu2AGJNm4itPJKh7VKR8p9XKCBZJU2aJL74NXvqbD2m",
  "key25": "KzKk5wTr5mrzJDzaKsrbM2ymfJvq7DaKwkB3xkXPDf2aKgvtXKwJVgViYmqc34xbYvfmDAxactRwk4Z9fjXLLaw",
  "key26": "3bdtUwPhJPsnEYa8uZcasnWE8P7DNKDkahBJuDuC4MUQnnk4erckTjAz1cpHNQzDhP9wyZmy1LvchN6DkX7MdXYi",
  "key27": "3qTADaiWs7DEyh2VfwLCp9WrYvHkpoV2SXHv733sn2R9eSSFy4ftqVPUJA323Lt3QMTMYpNyPk1ctgKKY7CX6mxj",
  "key28": "5hZubdd4EfCe5ey4nmqkygjwUJuCTFbmKVJRmBA37Aa8viHziREtnZLsBn866QZ54zb9KHqVtwVsFLYqiXMDaxMM",
  "key29": "pFs13D1phVx3o5RUc4DBEpciuQis1rp7VMqp3FeBHd3kzBiq5DPwhMRyEZNpxZNk9JXE7bgLWV2SxuEbmYH2nkq",
  "key30": "2abAK7vqTK4bPdei83v1wrRiSFdSAu5Se2aUzzZqQd3MXNxFY1gZsDT5XPeXgMukmyjZrn7LSkbPZmAUc2iqBqUh",
  "key31": "2Xvp2pZYdBfv6wEoXyfwxzWiHAAWGYdwC2FMubddDKzRK9SdvpPpv5HAcbqtQJENWDgs9NQ9Q39D6gGgJpoi2mAX",
  "key32": "3NHny21CPb8Mbrjv4mdzXQeLQkwCqZJLZWNeFsAEJaeAyShRP6vgJeqAkupU83Psp3n5HR9hNEdxodVnfHFvVZ83",
  "key33": "2vrVJJFvBLFTQfWyqK7hwJbNN8fPd2Ej3UeunFK7ueXPyKEmF2WWmXQYeGbBLh4UsavCkSHXfoCvFSt25bEBkuUG",
  "key34": "o5ihbcQuovvvWA7uoBfTnGjULFtP87WdkjBqamiV2VxcWKt25J8L7YRX6VN8UvXwv7wjnciFo18TVhVr57vpxaX",
  "key35": "4LLDATEQ2P1h2sRWqbzsNibpPUwj7uzCm9yXmEoQcbCBoWcJGeYxnC366zA7WMz8JxkgvQTU3YoJFbaAWuzuym5j",
  "key36": "3oDtyPtQTAmWHLXccxevE4UG1mHaai93QLiVCk4GQawrSFgWNsFk82SpV5g8GaSEAvoqwSZX2LxW2N7LCVuHMpZN",
  "key37": "2K6hcq6EGhpZfRLxDuJYZdGP5kHdmZToudWH7Aw61BqsbzFgn2uTgjxxQWShYWmem89tXJ1zPSmgzSxQ7fRVU8QN",
  "key38": "55Fb6N6RKvAR9cbgqFg9vQ27qE5fgoycfuXU16Dodf8LUvWFKsmCvwehJEDvs8GBC5UhwwokNhACLt2x7DzNArMW",
  "key39": "3MmmC4CzmrwCe73PXrdKMFwiuBSMA5b8eKBULKLaKJF7DiDCS8cx5PdTgTvJ9PsCKQKnhRFVT182THJSvCHAs9mq",
  "key40": "28ZtokCjd8tkZR381vt4TcY1ZRrrvXL1RTDKcNFxXtamptmivY5nGr1HGswk9NpPuXmvMnAWu5fhNJgs18QLpdxH",
  "key41": "3tbPxaiX1hRpHn88ZYKcTv4wvK4X4TWM15Z9JXnsbgDhmwusi6nCA3uGJ4WbZ3aFwEG3fsKQPVXdRcZAgPyc2daL",
  "key42": "5fxFCma6y5GKyv259qrNXgcqUkp8xEGbLHe2x5qEPFPXxgGZPCbkF5SYxCm4EM9bUk98Gfbb9Uv2xmh6W6pHqvRN",
  "key43": "j33RfYWJrgHKMkotsNNLMKXqMZzFaFYuW3TvCGyAiaACU7YgeGFoiPVVyjSLY4stBKo8s7debJr2fhQfcVaLXr9"
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
