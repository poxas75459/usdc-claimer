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
    "5J6dFyD7QLaf2FgXYcqSbAhTcz44rvBrmuizXFNvF87gjkPxDAaVyZJxww7SWB3iRQXpSjPT1eQQtK3SuvoG2EcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xt1YvkZLbFg1q3DgoBkWN4ihVQsUmLcLXQK4tUmoJd7AgRWJ6gv48HHFWSBmbP8Fs49bdj58KSKCajLuELPtzDJ",
  "key1": "3iyj3Ldp6pb81g4JdoRAKJVsUQxWpc3wppbad8ZNRmi2MRo6ZCsyn7ABiFpUKZipyqabzMUrDZYa5oRNLKv49ouH",
  "key2": "3EU7P55sDXvxAXoF31q8hu7U3vEmtvFq1QYUzoPv7knF294rZrPXRVpdDtvP2UvGknNNv6rK99HV1JaKNcR8GyP5",
  "key3": "473Tn5To9jPatVFc3tysH7mN1TZqszMaEMJust8NXpdMQjbVLj4PwL8U1BVRsCxU6qBzCrp538x8aTASn1jRsUV",
  "key4": "63zHyF7cUR43J8Koow1TUYr5wmyDTqqMhGFxMzrF8BVLfzmURhEmyRN5JaLiRMgmBiMi3xxW7RHa5MzvoKHyds6X",
  "key5": "5nz6uqumuD3R959VJHxTtFpXtSbkbN4LBoBQX36N9GJ5NsAU3i3zeHrxTE9i6GkwtkK9rdHoURyLXXno6MHpp6vc",
  "key6": "5bTvyjxmpM9ZZGVyXBU7zGomq44ZAEkE6UiN9Suod73td2AxB8r4RHZAM9kUJCRnynGtCWrZMJsj7gnxS6MwQNir",
  "key7": "64X8LTEYaELTfndFQsLtvmoTUQjE7W2sgY9w3bWqqrVpobnG78FS8Ko9H4fG7envxAMsRcvj7mGXWiwur93jLZCC",
  "key8": "3nqC1bDQUddm1MQqDu7yqTC7b2CVsHEEJwEaD1nzej5EdKpGoEApRu89mhyAaqj8a818b4cftxgCBrAtwQsHqCrj",
  "key9": "3WhRSsv2C5bw2aiUigsQRCVYhLiYgVaCJxaKzePTewd7exMiRXxdhaBaVJG3v13YBv5MaJtv9C7GUYAqtv2ALLB2",
  "key10": "4GvpZERbp9uvwRU9UzBUiRQVCLBVDHrCAQRTvbTQ8He3ypC8Z6D54JRphk2b7DLLJbCLJyg6cEFTsovNNxfSAizb",
  "key11": "53zgzZJxHDeHvvdpkNu3gSYG7Mu5951jhQ1R6hxd8SRJGwJVrr5ezUEXD9mL4B4kYXuaF21qLDH7wG8V1B2QP2FW",
  "key12": "4EjbMNoj6TZsJVpyRVAVQBn6rRCzWsBgJSxrVibP8tFwtG99GXx1R2nJCVbckrMZSejgmG5PLxP2knqMNi7FYVfK",
  "key13": "3iCbVrKEqmPo5CQNXLmJKypXnPwTm5a8nvmZ1hVNHU4MmNJbG8AzizpSHMpb9r1Jb3TfEahBteKgMWSjFYSbWLYq",
  "key14": "5vMM6PjYeKnLXT6gaMajX6pRnn7KZdoNmb5GLMoSTpw7P1hrNSJPgZ4gyXk1ncwaCxXp24EzQ1K7m4SX8e5rkyni",
  "key15": "4yDX6ER5x7LhfKGyWAezg8NJoPNUzSVMWrCjyVvCEZUXWLVScvGGXj8RHC4Bn9kKV2wb5SzctKH61QPg2vmoVpFy",
  "key16": "55jNScWcmLKgvKdLqjoYTtGyKgk1nG2h7xNKepacSPnfTk4EsTSKcSumdfQdbmFvefYWgU5gaLD8hTxtgZHJLcBM",
  "key17": "j83KbZ8VvEjJCFDJgDSTep2VFCV6ZoBX89dYW5DKvJw4vpdW9e31DqYw2iLwenNrwoTVoJisMUYwgFWhWACq3A2",
  "key18": "4NBcLnRkUmyDiM2Upcx967UcxWNHn7mLvs6KMQF42uHUbSKvY5UVFE483zgawjUsY9PRbQZNzWM39Lz7RtQGRkM1",
  "key19": "5isewxNfgyP8VVAnz7BJoMPxxtmDLi6dfHDJbmKSmcLUTjJxFDUyu4qATV1RzQqw2STQc7etVuTyKghKAY4bJVRx",
  "key20": "47CccwLY2szjWT6p9QNtqFUV5tainyB2M6bx1AhJxtrDJCiQyizgVbcsoxSxk8jstFFTNSaCq4hqnXSPWbXGPWVd",
  "key21": "PfMidYdx33RfN72Z7q7Kfo5v9eyq2gRX7XU4WhraMwutQk5evSmMhQn3K9e7AXvT9dAEGx5cXvqWHJeUaBEFCAN",
  "key22": "A6svp1z9D8gGc8Qb2DPd8FQuQ5gtFh3g4En7Zi3jrzKqpgTT7oEebijAvmniwvLqGvHkPteo2j74yFELBrBGGZn",
  "key23": "2f3DjSZGmiXxkX5ytdEGPR3qmWquLzCZvGRvVfuSrQFka8vf2i2v8dSm7fjNyDmu539k2oXavX8qwMGjVMwt9Toc",
  "key24": "285ppnfnrPDG5UN4Y3i5sWd5amPFB7mGWm4EvxjKubMeD9d7LyBJGWMzie5Apcc45PG5fZxs22AAY5JDYouz9LG6",
  "key25": "4Aoc7S9HftjTxqYEEJScBpmZgJW3LqGVdUUuqruESg9XnBv9G7NsXd76Pos7oQKuwwfE9GyszwLTATXw2beTEUxM",
  "key26": "2sJtwiYxbdF4WYLSDuWenHJA6tPEXN5T2pmcgDmdqrbrAEGAv8EfZDiYmQXjgUv3QZ3oQcUTZFiNVTPBRiUUXmia",
  "key27": "2mzkZrjv9SgpctVwMFWaDKaFzJytoe69DhV1omgWcyHikhA4uBXDFj8hM9z5B6ijMTMVK9FyApg2bNrGKgUNTDQ1",
  "key28": "52z9tgVqcJxJcuiQDa1FcSSfLxAjaukcevMxjsivqzUzEoueB6SPzKAbDxVeZyX8gK3NBz4wC7x7ZuMoCLXsa7p3",
  "key29": "4R59WGBgJNBeQehoFwVR3zXN9zZDDNWoccjJPMkzK4m7y3UfVd5PWyHjMSrpdRaQzBodDoCBV2g3UVXFL79ZNffv",
  "key30": "2uYJ13bR92U6qfFHrH5Wv7nUUcLbBzT8bpsZZKTJ3UFvsgU1rpayb1UJV8kL8B1AgVTNuXFgKe63EYSP5nEsHWb6",
  "key31": "667x1CnCM67vD5Npwn46NncsdPUuCTjCn6eBaxhXFd69V8zj85E7S6LcXUqv4Tn9daJTyehdSueN9L7YvZAFH9Ky",
  "key32": "4sfMyxMMLKqmEkZ2Aj86Uu2w4Mwv5waj5qbQmNeMxjzwLZsfEEXSAL7MiXLZ3jRju62yssAvQPxeSqKKFDadzbyc",
  "key33": "5GxWjWptcSbmvZChCQNW78MfTkQuxtEAL52uJ6iSQf9yXC6N8bqU4CbTDqmqac74cqLCWZtHJtWhPD9b1bheR765",
  "key34": "5gPBFgjdyud4Ab3UCUv11Meoy8iBTcjY2XxYg9ru2Uun51g1a2qM5qfwAdgkfPVThGtprCgjPcRBjAWVJCjt2d2F",
  "key35": "5xAnmeWK6383F9fdyp5XYFJXyDepcVofM5DRNNAdT7Nsm7Mah6EUvkqkU33tpEhENSPvEQ1FoJpWNjKz2a9wDWNT",
  "key36": "5Ffviqo1u43KBGkQMqQwLPz2AxJQc5xGwnojkbKmZvVSwHAzXQJLBgVwoF1bzp99EVCQqsz64XVV7jhCP2fPPNgX",
  "key37": "5DtDY7415E7i43Cbky8mook3aFi7otMtgmJVTHTLz4pxbar8bjTxDRT2PKvGCYazXfC5ZWiX6J46EhqJQqrTJ4zS",
  "key38": "2Uy3x9j9uBEDjLxHfoUCQ2pSBuHfAGSa6rDq6CW1hPrMAWzvkqrE49QVZBckQXQwucXcKGMqXcDUjqoCwmDho29M",
  "key39": "2HajKgHQiayKngyCrgNzywSKeRWsJTVKGfbvNwpZTTfAqUNw9MX1DK2mW3HK7LFhqnd7N3JEq4YFGX3nngwxvriQ",
  "key40": "KfYgTin78wB8FqnNMAMiovDxpmbEucNLNRDeovAFjMTLVGJgvLMkqeuhVF8QHVETdNk42pkM1MQEA1M3wzT3Uid"
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
