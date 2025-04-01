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
    "3ZttowRMJANEgni2hvyGVCPrz7JvpEQsH3gCgeFd4S9BptHZUpCZR5ngrUfAZCxc7eysCyXz52WgS3nZonvQvZBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jVkgfXm6kcNAwXLbmEpUS7CkNkwZ3Wa1LgmYHyZv9oVYQEtbANSaoxiXaqq9NNHTSVpGScuRyC9v3tUFayD8rZW",
  "key1": "4zMcgEThhu95m3WF9R1LCAR9mSJpcGzqwgoUqcmajEs6rAVvjmzmLd2qk5oBbFhF5xTbpVDovKLLKdpP6BvygMJR",
  "key2": "4FHzUBqs81ZBBby9QMoxkBwEnPtYdzTR5wBpmPsx5qvdecHFYzs8RG9yd1LZXRPtX4jzqy21fTuvKwYQWAf1eu9t",
  "key3": "5rZNYPNJgtiWUREsix7uwtyZpZtY8azdBjeTtqnkNi1iMDpY6GPwwcbJyWMRQA3AWmWQSzvnHCiw7iQaJx5wm7HG",
  "key4": "4vbhFWUgtjYSZW9CeHT1yQk7j8cm5ZsmVgk6ZJ44r393KarV23sBrwPPts4GmuqBdG7j9BxT5PC8E9pFugnYgvdg",
  "key5": "2uwvuBTrLW9sDA8JGiuAtz56ndds2H8Y6Yn6sD9pssHri5s8PP32YCQGk1vCBYjw5ViU5iuKzFJgK4YFrYFZgYby",
  "key6": "2xHtJzrLhxHNadQaFkJYamtRjmJRWZp9g4Zzw5CvWqQbKSKAAfghmMV6G95vkbwSpabBTDmnrp3uXPHqafhYmqJG",
  "key7": "3UGjG8AhgKxQjMzWf7a5qLoSAa3ALgfBm6hx1RLLfmw5XkVGZ3Ys5rHmaNaPy7MMuq3tHDwCG4CdXjHWySbyJ2Tb",
  "key8": "4yUHeDuRWpdKeVBr1XioUfexX36Z9HYziP3nreB8Azh7e7zUFJrBE2myT7R5fJGqS8627Kny1RYJz3VZqea6bGAV",
  "key9": "374T93N9i4pjYCW3s5p8EhxzP8CuosYVv4DgHmCj65cL9BuuZcjY113yDrqbgiL1J755ZT74N2xrKeU4592MaNdF",
  "key10": "hwuN9vxi2WAGkYy9VAGffJpz9Mq3ginnG41zZ4QWd8hxvo9z1sKQ2Nc8BnHgqJMHurbroMoxTwwLMT6zTvjL3kY",
  "key11": "4TfySmcFWBKSa2TQD2B2gwJBcYP5CqaMccsZDyXDJW9iK9oQ37dhWuZ1rSGDYX3s6L1K4Fw8fhgTeUvzSAmeRXaW",
  "key12": "3HxuDjixPFzGya5vCb8mx8Hamu93SND5CCQVJCfXMoLYk5paFAwaWmWfj8bSrhbbM38Neus9va74QSjRkoPap1V5",
  "key13": "48WuoZnaudqpXRKQ8z9qmL79Qdy2JkgAX79jVTigxM5Cef1sRdZDvv2mPqHdXHJJm6aCnv8RCmCSWrHS8iAD9dFp",
  "key14": "WDnYRLdTVBhhbGvu51yDWiztgHDdN66TtDAnhpWoeUVU2jkA892BQGtgsYYkayG2qMK2BqVgLuymAgpv7sQMVtw",
  "key15": "5Q7NgsyUuELmky7MGqBjRXwkLqp2AC8iah8JSLpow5hsDhCYTP1PJP3uf4wbd8tgoututLL5yDAtTeNu7iK9chbJ",
  "key16": "N4uxCeTTDLMqFeKRTuv9HnU6EDcgAwmwVyA1erW3kABqjEhnk8ZoJzKKvXdEhYVnksxK5AFQ8jNqFgFNcPcFSpj",
  "key17": "xDTnsjdzLjd1g7E6NNB32gVMr1PSMpmvHJ9P3pNcsEe4JW6jxhBvyxafYmzUqNdd9gBEJK4qSiWMuaZgvV3ppCd",
  "key18": "4mKCEnGv7TPN7sWu4f6hvJ9UTVGamgPs1H4aGRkrj3rJXjRXaiyTpwzbmp8guRNKSV25mJTt85RdQhzPxrE6xBg9",
  "key19": "GCJfrVDXFVppWf5mqmwGo3copGu3o7g6LTX5CjNUZ5wndSW28k8C7PJkRwa2BsFnY98fic8GsLfrzWemht3Ht9J",
  "key20": "5Cn1mCNPF1S6p5yazkTeSo4YTWii72S4qQFdqj8pbPKf8Ds652hhtps6y4KLwjm1pgxYRWPiG7ZBsKfJDrbBoGeT",
  "key21": "5H8YHSTq5W889HRJriNDwQsARUfJM8MEkPhRruwgBM2F99WtuVn4MTjjRMCYUbHLwKAcQQvX4M26LGEvjrgeZsr5",
  "key22": "2XF5DthDhhyCwHyx79oMRuyjxRuwv4h9SpdXZmDatCorbNNxxY385y7ASh8eFQ5YgRLbmYofKvPCb92cMFozx2YY",
  "key23": "z9LXK7JoiRwwitJWs1NGf8oHER4PpEJ9FvT7o6hjfm3iL2FGaQXviHTbkkN8zxQoKS2UQB4vSSGfLL4md9kSyHq",
  "key24": "3Ed9yrcMBV1gYrHM5arnjJNsRhfTqMPp8cqNEwFc5UHtGpjPtmEaHGjbHeWFAW4YLBPP5wzKfBXn1sjdeSobFGeV"
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
