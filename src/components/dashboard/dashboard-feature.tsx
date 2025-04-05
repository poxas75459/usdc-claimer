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
    "5nqMVTJEinz2f96ApfsXZM4qWb9CrNS28mS1fufCabvbuWYyYjxSMUNRsfxXgfuzKSJCbvRxMDgZoU23oLRfdPJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hQCLok1oY39S3tBWbV6wZFigdnkPFNbgTBRHd8yvJge5qWe6dhP8nLdMixpAZ8HSYD8GHmc158c8r7BpN7H8BQA",
  "key1": "4arY5AvqpK5ALGe6ywLf1Luv72iE1ifkfsSYE4w6T4Lh2GGGqcmwuX2uAR9i48cW3gYT4yL3f7S9g2UqUhVaU8sS",
  "key2": "4DRJJKHDZkYDipuRGyvUQnnsWynsz8ZZPiYVTDanL6CM6DciR8biNeZ591kRQKyEVRS77uMX9iDWYZvWfogbyAYJ",
  "key3": "2kC9AnWL2Rqg7KWkSVqqQ33MNbHCuczPmm3z7AZ23LE9UPNQ42ngJZrm5Fqe4yvvrQaiKKuHC9sVNLUTpF4kcH5W",
  "key4": "2RPKwz8SGDLVpLLS91TdZhCmA1b5E8azAtjkYAWQXDaHc5h2KJuJKemRN7r2YFgF8qossA38Mpbyg4tz3Gf8gqXc",
  "key5": "Hc9wFTK3u3TUu9Ueye9G2xUnYh4o55BkBfS4ZrBLu1JqfXuUj2MdkUoZZr2BPcewSv43NWr8t4DhDXrY5WVhEUy",
  "key6": "2kuThonjeHpFrP2fE8sQiDGgac7pNavrgi87zrgoC56jxdvK4T2FwquiGE3HH391HJWFycfep4y6ExW7m56yx4vQ",
  "key7": "3AJvHnhuNhk3rN8T153YU4MSXGkZ6qRVBCYmyTwB42G3hm3VYrFH5ZvMKMKt5tNe4ay34yCm4x5Mr9cxAhfCUAKV",
  "key8": "4FqaDyPxdroxMCD4Mc9LZngUCV7Mxg9NLAWesPjwDFoBAnoNG7L5C4vKdqog3HxRwoDza1MwjY3aGzk5dpBdpaPG",
  "key9": "2aCx5KAvo3wHvxKKpwCDL4X76uoFG76wc3MnnZDqZM9UTLaoVK21SYzTpZncm9PBEqaQLd5Z5fQc9ohTb5bVRcco",
  "key10": "2mbdw8263LmCERPxbgWd71vHWDRMnKyZcwZP6MQvH4acrH5CNneXyG13LNCAFXGpi5pAJLuPSh9dbJnxEd6dNDhE",
  "key11": "5nfEVus85u1wHaMD3ifnqrRp1RxFjNYsQfAcYZAU7c92AdUmrswMDbWGVxXtbSXR7btmLQE4oAkijNEQWWzcTJ8r",
  "key12": "4A1k8Dk2KMoJ5utkTAgbgj2Yy1RZPeKCMJQcVCrEG3UvewwbWrSRxyPPmBxY9DAYD3HBQnGY6A3B43MXRgUxeoUk",
  "key13": "Mfy1DRuhK663EWgK8w7jYTbbZpoE3Eaujg6VEEuMmGa8hEjsE12Kem5135MW9PWXih3AEqwdUN3936J2r59DomR",
  "key14": "4ueuWTzT19gpfo214we7UwhPY23ig1FZ6fgtJWqUM8cSgK7WgXo1NhFSjE3EeSSEJNztV5KSwvwuXD9mz5jSHADp",
  "key15": "3496C4bF3XEHmrm5pL2zkWJXRLYU9tuYGNn62nmwwgFab76gdmHydgSBqk8fZ2zKYfgwp2FwjsDxrLMiBGYaeT5X",
  "key16": "5nJM24S3hG18KJxBRkVTA5HVJUWkx1m7oNyTK36jxNirBzAPuBuWtEC331Ke36aMBdT2SxSkhQyvjJpTp4jGCij1",
  "key17": "5dbsEe1UoiR4yBuLJHP7UrisMJnMRYcBfRRxbgTTnTVRMHerxrVZUkBTrPq9uLda99nJVsrZrYZVvmaFHQZuufk3",
  "key18": "27ar56JZhkEoGhUgmfoFJYXs6MdUnC5YF3BSyZcoyXMUWextY5A6RQm8gqfBr4GM6d5NM9QkYoc2UR5R3PDYDWqP",
  "key19": "HxDJe194vpQG8MoALzT1RBUmVt2TmmiwUbmkywVFzdE4BdAaY9kZPd8yHYnhyMDFDF36RQFfKd8gnh9GWxhsx7P",
  "key20": "5vjbZSF7iNjJ4ni5HqooN3wGMgEJZJShnJ9kwU8by62WnC6JBzk9JhMuD6oLnAeECC5NVxJ2g2e2jk3pgaX1GiXP",
  "key21": "2JkAqeK2vMwd94GNxvMWWihHK3YJhQxyjXsmZyvGkRjQ8emiW8ywwQYRJLtUwdu2Yp3L1RSSp2sbgHgAtfihXSb5",
  "key22": "4kWxfYpURfYJZ4U1S8EMhmS2m4h1vFjoYY4YL2ZdJhRccTVaDTkqAd2T5FiJPBdSYQMeFHyi3beTJnWHMgznfArJ",
  "key23": "57WuF59oGPARdUjQVN6wmJ6gPhyL4Xz6NgmXbfZEXhaWPCgXFYranex4zNBbGCAUrxKqtXoB4STkvnntQVXo67Vc",
  "key24": "5cFe3ixfm8jFErUnURruZ7Kmnq5ebGDfSWQoAZmXQn9TpqeqKjQfgUcxKDXA68Wi7uhyK81JGq4Mk6cUeuhsNd9E",
  "key25": "3G78t1xD14NDuJoXH4aJuJGrsHE9jDdo1voBG7jShGkqEqBEhWQ5ojhgUEee7ZcubvZsbduoY4UScsRHnM3voyZ2",
  "key26": "2jqDMKRanxAMpccQJNNDMA5uC8kTRyX46xxxUZskVDfwtWWhSdM6m44tes22oxVbxZr2xscjM7MmALf86vBJmGJ"
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
