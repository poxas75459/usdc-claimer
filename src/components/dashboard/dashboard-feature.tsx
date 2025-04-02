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
    "46gQ6a2mP7ntis4DpUEPUDJqh9SZRYh6WTmvi266PfgrMr8sqEpp9YUNefBZcnCvK1ggRw2pavPQQyxqxbuVRGuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wCqvkN8S3Lg5iTYtqsygrEq3e3y8y8iz7RFNPazHYcBEkjWC4K9ULEUMXqRss36Y3oKuv7r83j2fkzNLyTMKKdx",
  "key1": "4sTRLjTrWJH4j4H7V5NCnTWfN9jxEo4R7fPJkVTFpwg7ffJJSXyBXEGQppf1HGjbriY9mGbTJ3nTH7o35QHXyozn",
  "key2": "38zoYs3tkuGYAnkpjLUfk5erwju12L5vobePxVZRZWR8kNXsRh3s6Xt9929NfwbG6AiXmnkJ8ZXELe41QvBfi3GZ",
  "key3": "4mCVFDkDkB2b3gMma2pkhGuQDryAvxWPcYaLFUajewLmtJB5HDkXEEDtV5uRcNey4bAUxS9MHyJvqFMBu8my1V7V",
  "key4": "5XueroUHVLa2dvhaftALQsxYGttMmhXPKSavyNRfrrpgLBPQCcXSyVfePDtjZtkRcLASWHWAt5hbMJQshk4RCS4f",
  "key5": "3VAyFBKy1ryyopfM1zotMUY6ZnRt92Zwfw5kc2yqE4ag2kzQGjkpsGxGbENDDytC5qWor3L51u7RBkYMxYPi3HjA",
  "key6": "5tnREdb4UnrRqbVHgKHZyPiHAnemg7cd97mFrX1Xc6uCqKXm4cpQijdkA2RPuQq3sAvnf4BDDLxqrKMBvZVoLFGe",
  "key7": "mmXpjQJ5m8QNuUu94J8JhQBR9K8BHQxqcRkaWo8xkwimzoZ6x5VkRkc8PQpRoUfPbg6jqBfKVXMpPbSf2Lqka5w",
  "key8": "5YNVxVyQFyZa6rFrMUJhUz4QfpKfd4dr2P46yD66E3m1jNc5D8Jv9z3XPDif9eNtvJtXfcNVV7ows99XR9eTCc5z",
  "key9": "3gPDouVb1FQjzpufTciJfj6DbRvHxCkVa1tHa5vA2xMe15u9nhQtte9GW6txj6PJyWA2ny7eSY8ZsgbPhxziQdT3",
  "key10": "2mQMKf9aqpW3KRqTxUeMLA8jaUKPy9EFBxfY4WkViM22jfmerba5ZbEycRBRkDwX66C4Cp7wA7dNCYHaVhUKRhJS",
  "key11": "5qtBkWnqXhF3qjJg1yxQAX75Ebh1mMxnJhkUtezXgBQYbhnEZAhBVdF56WVNa8R34ZAkH5ufy6auzzf8FS48y4xK",
  "key12": "5szcxekRgL58osWzt5apxCqM1p3HhRwBBhA5Vv7G3vLGVPfTcF4Fugd3BQVkdEDHVGRt68guWkDT6PMh9Dk4q3v",
  "key13": "65DNfsYqs88MaPcwutrRogKuquGL8nAcHtLaGiBsEAoT6Yt5PxWtAEBGeqHRWBfaSkMJqFyREGDBbfCxT1mk8b4V",
  "key14": "4FETgbi2ZDBK6cAfT5xVgCrzM65TuNoLjPPvG84wvxBdUi7Su5a9vxLSu5vnbfGezQGJquZe1KwKU4vPuDTe5DuW",
  "key15": "3BLJbPV6cYT7yYu4xvtvjJysmCm957BC7B4zEMbndnjbGU79hC9npxXTgVkJArgT2G8Tnn1W1qgwLqjbUsKzRHts",
  "key16": "4dMjqWfY5jQ4coLmhLQ4LLuzDx4iiaMsaFeJ549wUYCDkFEHXj6ZMTQQDYu2WiGhEinGg3fzTStP7pSsYc44wFC",
  "key17": "5niS2up6HjFAYuKExx7fCSkLArL7Hwk8HKvjDGVnRuTKCLGrsK3XgfxZN73KJnnfjjkW24Y55zGvQ27wg6wkpyiH",
  "key18": "24ANx1Wh7YMhd4A3UcE6nztB4exfWahv4P2L8acjShpN5EEDrf4LQH7Gw9Zgtug6W2KMqEMwjLHsuoU2n595LuWZ",
  "key19": "2M31EbYsnsim6Ej2BJKZcbwEqzg1jjZn663PvDSvgZ1LkadtFa2jVnbMAMQzygVmPp8VEpnJ2Eadz8HB5he8qSHT",
  "key20": "2qUt6DT7ioYFdozW6Uc97VSkBMArFoFXVtNjuLrHZPquMWAR9LE7hZg8Ev2cCBYih9AqTbG2gM6UWWTfxYeXWWmd",
  "key21": "sb9Y39ef5SC1zoaSCCbRHDfiWhZFJ3WkMchBdxLf2v4GfxgYRGizLhk7eKCgne9Fevd2hgEnJ39J25KuctS7fy5",
  "key22": "44j314Tenp6EC8hitKMzeKoKk3jEuJTSoZSSLmYHFREn4vezwLC5nyREx4eEQ9NkH2Zf5Up5JdzYdMGEiJxi46fa",
  "key23": "43wy3AUjMy8FyDEEB9u4cpAXizJ2LLJcAsnB7fCY4aquj3DDoc2MGQybncaPnmjfy7GozHU3Cmzz7ytjN8mSqoDu",
  "key24": "rEyXbmovthhA3VUCBi2vbWGF4drpdErVpX8jeR3toQkNGbgWNbLUzxZE1epzFt5Bg2db2TZ4QFYvA9MjR8V1YqP",
  "key25": "nSLbXypNKaAhkarLaWmqbKYaZwgPcFj82cNn1DDzqWQybmvGzKbspgXRET2uHLGhoqYsdLa1BnRV5So5153sk18",
  "key26": "5Y5jwiQGQvVsnGQo3rdc6gTswRTRfHDQcH84bydiZzv7fiRRmuFTRLDEgfrgZMEcmhRnZv8iJtzD3Yu1jPEXsfSR",
  "key27": "nNA1UyPqmEKL6xrnEhFAuoxh12UBk2UekgBMMnWUbLyLdqniXFrEHtW8xqRu2Efm6P5FrTUYKdVF6KKxiU6nLhb",
  "key28": "4gccCXhcZn7BKJciRm9MVXX99VQXkLksUvVXFYpcT6kHXBHz9CVtPauQbnbQJPG7eiPvzmubFG2xGpp46GEJcnGv",
  "key29": "teZPw9WJs1xEyTmUoZ57mFdouw82HTbDSYiptpQv9u6rtGqDcUtUKunH4xV5s1tNwyTG6mpoioMWDpC5uw9yw2q",
  "key30": "3EeKkqua4tS4UhYv6zsM4gnr7taFbqd7LMWyDYETo6wteE2LDLtvMWWaLN3Rij8k26JPePrUULWgoUVccSzLUkSy",
  "key31": "rH4ZmnpSStwvCWAgTEcJ7NQcuGf6jdJxFmq3czYEJEjLXVXpUZMp2dUbig2Cs5tsFAYLeCXBT9M9LrShKRai6Ku",
  "key32": "9zZ1ST32xkSzkb7tN5hhYAPzL2vyz2BexMQfy4xVh4UVCFLNPJLkhhQzwtdaLphyVZdAj5MWELrARhu7CLkUBBB",
  "key33": "5tRkcypbySTZh9SmtaqwT9xPjXpjJAwMhW8dyW1gapUsKgVfd9ZbK9mCdSGjmFCPCC4M51yXS1Ywpo7k3pvfcTcr",
  "key34": "32C2UdYFvh9TAgVR1zPDArZcLGKGodZrUM4Dw73Rw6hTDfdgzpBcUYx3o2yuqapjHUfRmzTxcRemipXC1GjabysE",
  "key35": "4n3KmVqUUg69a9BGw36iBTwTLnFGiXQazZMpS8JPAGopTg9XnWo5mV2phuTDPkBZCvti4szYwShirfMiksh4tV7n",
  "key36": "NQJkUBU5SH23Laso9kHKhx2wSXhSZDMcdyPbaxt64k5UuhJMYPbqLSxaVK5rFknxGSZNhQU4aMPK424HMuu1JXQ",
  "key37": "cZUaMVwMuA6ZoiDATJzW5zrPrRiKTosQeNAh1khWwiq61mqX7BbDuEbkN59YHoahBW2adUX6NcgM4QuGQYWSSQD",
  "key38": "3VrGqrayus68j2wqC8ZfXxCfyBX4Bwybb9xURCTxMm8HJ2xkAVMzSt5kpEx8sKQD3HRoPtgcSxRqt75TYAbztCZa",
  "key39": "28tU6rGZQnD5QzUmheLx2z56s2rPCpBZCry68exWur5k8N5k7KrcWvcaMUatsvthLebLWVEsUxhhcfesY3CeNi6h",
  "key40": "5sJNipmL5px3Au7RB3hSZS1CYN3NdFEWDj3ZMZBphMGtJsoaGMxk3poswQGa9oVEwe6ytzKVETr37S1bUxhS7G3Q"
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
