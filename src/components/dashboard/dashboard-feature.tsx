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
    "3Lg6pz2oeMChtki5ZUWtZyEmipMgytat5D7g6wYdp3QzFgZ8MrHhg4HgKNzuJRiGMwXKuRoE3fJJjroSDFxh3cZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wzVDrM8irRBd9QrzQUmYdeFVXKED5oVkKwgNUMTUzjdzpBYqwVLQWssUMUwALtEXZ1qqDyj6ahyeGeHJPVigjgk",
  "key1": "sxseVQzrENEHZSQ6EUQs9mPM57j6M3UhaaHVPquQzy6iv1aCwpaNUuxaJqN3P1MZQPum5xUQR36NMRgcnRd1AQU",
  "key2": "4vX6tTzWJVAP8b9D3AD82VHGhLREDdnj3PZmeqyQJkjtLVNj7KTwkMEsv2JTEjhdXLSDRF9x8vF6WnkE7TMbvvsG",
  "key3": "4az9Jysf2qH8MiY6VFNYZMDcypP57M3F3Jy8GtAAhfHwZg3qEBTn2NjrFGynFzZFHFkFAh8ipdz7wgHwoFNVVAp3",
  "key4": "5JeVsugDybYrEdJSNQ1amviNwKv3yWXcAoMNxgzLLYZiRekmPSZvvfVthtRr3ZDCV2uWAFLYUXfiQ5iFpmCHijY9",
  "key5": "toUDR5fb53HDy28fkXYMd4j3754hJDugDvwe2Nh1S6Y1GXVbu7V5GtW2Tit2uo3X4tfyBfWMb7zSBh96u1Mi4to",
  "key6": "2gx1niHzNcWGg3uaw7T9hfbqunW6QwaFdSBvUTfKdMhhaNXDrLv7BoRCuHi6skD6u868YHtiH5k2EAx7f1waBf4s",
  "key7": "dPXzi6mjmvFEprqKm5Leby8MSGKnq8tjP41pFVrdz1PHrm9CXMznHrMu8W2QYCQaJQ6ggBqkTJocgvq3RjbYpRG",
  "key8": "y6N3LvNVQJh9iXpYF8uK5XTpBRiziN1i8ybpyiqUu2G9FqSGJg3EiY6FGcDRQxfRAseBPVW4xZ5LmVZugSjdemf",
  "key9": "5q4tq7HbKHqydXCRt6M4oNKTjRQK33HLjDFYB3VK8GaBP7TwMo7fZi98ekCAGtwXCN6bgmkfZvGd7zANqrhDntn9",
  "key10": "4qfiWN2LYjeZw7eNDFpuLja267mnPZFQFSpbSc4fiECE6V5cctJJuAnQrrqwzFYaBXUmRrY6RdtmoE4wQDJwdHp4",
  "key11": "5fVBJuKTjpG1G3zte54yK8VpSV3x3KY4xGnhJ8WC5AqPaYVkfFUwa8vb7rX5xbuoqC9LcWjypsvsUzK12WJ4xKRw",
  "key12": "4ctM7fcX2pvKADXPoYRUxeAU2ErpGuHfvLwTKowS1JwU3GtgbyWZgVF2NhoD9ikZCq8dMsz2DrAv5VkZF1PqxE5n",
  "key13": "52moeFW5knF4XioJssYNFDC3Rz37FbxvDopmJUJNek49LcJMcEdz6uQobP2o4Xj4w3xn8q8RyygU57Wwkf4kDQHd",
  "key14": "sFWWVJJwbnwXZRVMosrywuj5DwGFAgaQU46GAKehzMYvm2pNgXiKDDMqJM9JGZPSZ2bSYogXFW7mKSh8XkUKMyb",
  "key15": "38aAuF7WynzhGGcGKSNWrLyUw8yUmYeZK4HCSpHqfT4YeK5Ag5FoimkaryDVNdGZZvq1BDf8WdY1SpHSv2Csznnv",
  "key16": "3itZ8haai2UpZcGpQy1rok7je539ykMGi1o4CRDwWUgqeXBF2Q8fD8Xx3KSp3eUXSmpUWMga63z45Rz5NzXbWQBh",
  "key17": "fdxnBDrmoHGNm18u29htPQvvqtJyUQGkBKfb1ymDNvHdhs4796WY8f853HDBSyU1GUGWY6hr4Ur1jyQYcTUGt2T",
  "key18": "4b2v1MDtKU2hAmqVidC3jger136B6Vk7yc68JFjpHukkaQFyU5G6MGkGbD47ZcEBW3QuTMyC5hAugiBDFkSqz4g1",
  "key19": "3B7voL4PJTh78b58yxax6FGxnm2657N7RwvNZcVm8s1UNQTjVSLrVfZ2RaahxJasp7LD9aLhzgE9RNtpV91o74Ri",
  "key20": "6242MCPqYUL7RNKYjCoJwmWXTefhc1cxwisM9rvwfcDfKyGamMBW5EUq5rpTi34Bco2QfH1VfBDPsJCMBeSE8SRU",
  "key21": "4T2MK7gMgBRvh9Uqzd7vLiU4eNRJHwne8Et2HkN7BAqVv4tud4mk7ZTLJ6XhXMHLNNouF3nu7bsCwHtESXMh8115",
  "key22": "wmpWexfpuHQbZxzUqFSWcNakvbgKspENWYZzm3JGXqgv9hUGeSkGgD5oW3wRtfuRMwFRX2ExFiZk9pbQgEq8YSx",
  "key23": "4W3uFifkQXCj8esmLNMcPEVzfbMQZzffHVd1biXr5YJpJBuHX4kjMQDGX3mRMGv8fsDHAJ7e6524ZLgi1nQdBmy6",
  "key24": "BpTVWJnGvfSTi6T3uihNfBEY6HyWKrHmXrWTTPR4zRYFd52cJvxgVqK8M9ADiUMDjWAtZsqXzwNV5tTVqfSZ7Yu",
  "key25": "4yHvxGr5UgLuRVTEDpMkrAQWPcbLMSMcixDiEomj2DTXJhvoqTTCXBXdYVzWyYkUCGZFnkeunRgEDDCH6DffoaCX",
  "key26": "2GJghJTfYJwDNT6ZBpo29r9UEqj3j2D5xL7jUdG4LWd4FJDnzGKSMRQ7oj1R6u2GDJWQATcistVjs7vpDpPPyUy4",
  "key27": "5oYAXnxLzRywsAKGcGuJbeJpRE7bgVLEFTs6EHhy8YL2jA3NdCy65SwbFJpigR6aG5TLed6AWJxszNGPBbANcLMg",
  "key28": "8Uy5DkhHQshXrfkEQD877CfbGRxyWBymE74kiaKu2D1ixaHQULVC9Ukzpa1cmKJRykvbA3oN4MzJF6yBwc45NsN",
  "key29": "5xmDK7KgjQLE5ZiemZtNVu2jcVjR5UcyTTvbAMZ1riTE2ses8jYZi5dS2cfSdLYcYhhTxRh8B4sHguodg2WBjdwp",
  "key30": "2G9TBgKgzAFvyyumFuHUr2Z89Q6a69kGd4CPvBx2eGbWBpemMiEE5AXoc8hGqkjiqAxE2AAfi9i7CdkdCvgyA7qV",
  "key31": "5hQocS8Q6GXqMA9YvkExsGzWQvNXiM3amAuDesSGa8eK1FTSe1oS3DaNaAdpgMHeEbXxW1PSR3SvhuRjuiQ46RoB",
  "key32": "3V1NDAC178z1rFJ8eTtMAjoGTAyV8Gr2bG5ppbXTsbSYT4uHw6EwBzAZvUQA7U7QFiLvQPHg9K639rXKV1RnAyNb",
  "key33": "54qPX5hT9d24aWFiKdRkGVSGXUFzmRFJ1Ac3QLyyR9oRE4M7S2Qufettupnhr5sLA5nnrJZ1USn9HjbCpcv8h25e",
  "key34": "4EebQVLFUeRTtgDNytYJnzjQZdcBw9EwHaTs39dFY3vHJVKma1CU8VEzv3kP95mfQ86F1kfBBSetwBxSAtvraWqk",
  "key35": "4QBLdWnURyEkj98ercibU5fTBuV2zAJDZEx98Rvqbdk2JUbTsbN8HFdTnkXorGNXmaacpJm23VAhhH5Tn7cNxCcj",
  "key36": "pGgRrLiUSLJ8GnYyssuiB9rF3pxR2jQhdk8m36M4hbp2QofHSNyuF3WMS52QNUvFshd7gXitesSEg7JwQA92N9D",
  "key37": "3C5hfiCT43eU7mgkB6yV3KWsLBpdEPqUY6LqHrvGDGAdgVGsJVpB4jWbioy6RkT3EZcqyawmU8ELkBPrmzR9moZi",
  "key38": "2pWSMUiYpWZ2PdqPncbR1GZGHDxbzpwHJeBS96oc9768ZumtmeUagqF2ndre92rUVQxqEAY8dg4xb8WcBFRQ62ru",
  "key39": "2Z7nFmpWti14ceeX5XHed9ArgD8Nak2NwADF3jk3NNKmS4UBmFh6KysEQWZBVbvFnRBJeqdGtPCvBn7Md9rDDWHJ",
  "key40": "5oa3Ddg1z3VKXbAAfMi3KAYJYDawsEAoqYYkAQCyjYMsUc1XDxAvRFco3JmpwJyN6K9UqmSZex2a2p8x3LKUtNY6",
  "key41": "4icWqcFZ9ndk6VtE2AcSjFuGDEaxjKLSXRrWMemERjRFM6CNFBJSVto8GKji4jVgqHLTR3GrZQRmSZTKHTPk8hP6",
  "key42": "5uxR5hq2mmvdbA9VnoWYg6WJSm4oHr3ywB4L4b362VSZa72FvAC8NyoSBS5gX5D8ZXw77VSh7RoF4rTKAvDJA2hS",
  "key43": "4kWzShRZyq57Y3ic6TaifT2wrmbGTo1sEnBooSfwYHbibfo2i9CnMqFX9zodsQTm7GBnAmvfo4r78nYaLicNNdWJ",
  "key44": "4x67UytioV6LxCVbnaLCNdJVTMzaopTHyzCvBXyw7Rx5WNtbRZZb2UPo2tGgsNkB2jCNks13QXco9svms8LxcKuU",
  "key45": "5VRXjjzyUcAUex477hW8FN7ijiTY6Wc15ijArRWvdH34tHDrpXTfyAhm3ZjZUHgH199EcoaEiiLy4d8axcsNJZRW",
  "key46": "4C5wUoV4BaYq4kZu97rE6ArETvgLxhCjMxCih7arjfuUg3JxMUcNeVSJ7jHBrrQQKdesQCBGBjK1yL31Mmtzuwfm"
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
