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
    "2N147Q7UchsqnmW8MujwgbSdsP2vP1EFsd8AULbA1x3BVdE6xRBkfZAjKTphV13wUDd9zGJEFSTtN9FCrUeqGKqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TkfyQqh2wS8bNp4S2sk1o5Whsi3RirDDSugLK9cj8t7LX6wJCSQ5Ypd1J1CTtn6NpULJtrQ37ovG4ARRUef1v91",
  "key1": "5g59C9Z175Kmr3Rvnk32iwbE96DUFfFm2GnAfQX6AKMG7xSSLauFZ4YA3pxtveJcmGDRUhVWJyMBYeNxkNQiRNxd",
  "key2": "ipzZ9GyqTo4WU5PRq72heuRZXTY9ufUcceTbjDmXATGhcjjH4ycY3z4otMXPmNzBssd3MtevVyhLJKXM7eYVo7m",
  "key3": "3wUsK1tPQUT6XG5bvcoSpPsckbm52SHqMJ6Nm2f4g94zt4rwdzeAiXt9Rcx3o2aNkT525dmgKorH3S198uvCxDzN",
  "key4": "4qYeTZNReVRKojL3bjUTUbN3nkZ4R4cZmoaR9UPqtpiXiTS5fmD6jjKGjgsb6xfoqdceSnwCtcCupTqu15xjdqfq",
  "key5": "56hi64veNe3mDpayzjteeiwBNkzo6CZFnmwcdd2822YA2kYCQHZNxR1YLUKp1j6yYbmmxdw2Ra5VrapseRLLReVK",
  "key6": "eGfCSGWAAcgdH2kk3GsX7qsydTP8zNiNgsbrWhjWU2S3guisAQ59eJKf5ecaEbQEyXFxEBvEbqmqUcRksQenPhK",
  "key7": "4zGzuW22iyZ2nkCSdD3UpvngCM93XqeHFL3idYVfFFD4Ug4q8R8RLZhEzW5TyrFBEmkMfwkUvAag3HuVvfeP3rCn",
  "key8": "2t3s9Np6nfK5gfH2JCfjqb8kAxFPLhPtkVZF5jJErkYXVjq2qnPrVJoS834SZ9UPzb9y3WbdoyHrdqETJdJ9xb5n",
  "key9": "4om2jr78iX3myn1eAwG12km731zCrQ2UFjjG7gEyMpxwzVQZTfv1Lps4sti1ofD3NKZTyUoUxacVPk196rvZgyqE",
  "key10": "67ghNq4AtEtZBNqgfximRgLh7hZbaf13Xfs29Tz333AA4HLaErezWXYaW5fe8C3Gyion7hwCC2gJ21eBXPPtmZVG",
  "key11": "314FNmUSyKNVf81oJrPBWAdhWpWcvFZkY9eDxNR31pr1m1zoGZYmU1kqbchWPQ7AcXrT1SKwfEopSRTt1AGcKaEy",
  "key12": "3bGbPfueaFYGW878ivv8zRDuBdrJWrh9bLzm3r8bXEmva8gxUZMnJNNxi978oZwrassJBpJYYExnMfJ4Nfc95j1U",
  "key13": "3nkqBeY8FwyqSSZcnti2pYE7rvgfbN6qbd23zVAKSQQbKwTMciBXLW9Eg5icBdhuEyTzkqv2cXn8XqSZwCZ63P8b",
  "key14": "4Z8XXiVGgrDRKQQs7aBkk6DFcXutUz1WnsUsoBPx6zSSg8ZEtUq4S84TfwZhWk81a3HcURaLJJcQ3SKzj9KTTovX",
  "key15": "N5ASLs4MZfsezDL9icNQ1gWxSdRBY4P3BooVERDoUbA5FVHgnvxhiqGoRrTGGzS16EYeYU89T5Y9yxivMWeAAXA",
  "key16": "27d2pXrjqJpXPuECQXqy8dvEAoigvmzRQNSoLZboqf7eBYwPLuGAVLFnwZpGc9xw2DuaAqrwW3Kbdxw2A29CMp8v",
  "key17": "4cRm3GcqQcERc9tzekP6J4xY6eC527u69RC9U2RCDQNjePBF7xf46MR3AH377x5MhruK7sEgJcbKuUj3E1xjpKAr",
  "key18": "3QuFwt8nwVZ6VLiCf41PCbMC8syqZikRBPzQ3TAzAJishMmFZcsZAGp2q1JWEoUU7KsfS2273eGYATnQ4TWnLnA6",
  "key19": "3NLAqk6aN7qJqaY7cZqzKdL9swp5M5ZNLj6upNJTuqGaCXrFL2tg4erwDKbiaUYaUNgxSnK2XaZQMjW9375cCDYi",
  "key20": "2kV5QCfvuxZzviSTVSsy5XSQBjse6c8FWqQtgP9NyH3hDtL8ymfzNiuPAdmohiyjm8wh6NCQH4a6ZxhrRMDtzKEt",
  "key21": "2HFJSMrrNTmX2tdLbfpCW8bSEXLwA9fdq6g9SPAxKUruNKZeNoXswBTSgZo78R2CQExxxdaZrVPHfbdvjTT4VRdV",
  "key22": "3H1AZMgmegAhe6mvDvrDbYJJDBidX71DwnPhexXucn5gahpdYG9uiDzpKMtR7KiedVz6XoBFhyncwD6rYMUjpsRU",
  "key23": "3ahrXNApU9RsLKPbfhU7cZiDBzB4hZkfw7XViywmiUWrMhmnLQZ4LCw3D2DsigbRnc2CmS5NYa1ng112PH63i79e",
  "key24": "45mHRmd42FZr2EhPSRPJLWxvnPN8WSDEhddnRCekrhtgSFQT6TFV9UpJKsStSLX43gvJc9ycfKcHb6urAxg76PDh",
  "key25": "2iytU2uA3fg4cCeHj8ockEy6YZ1qfozDkvoNAYcWaPV5ww1oGjPUfbBTK7K6gwh6QDvNWtNRD3bdqZYdHB9NrrLP",
  "key26": "2uHwL9KmAjAD843QoXy5XTSxYQP4vmJiFm7JjyAJ9V5GZ56L3n7LsgDtk1jjP9VnT1UtosFXUtQPemWmkJRFY9Ta",
  "key27": "4mQuWTQKe8cptSKvMt2WRsUfNzuvFpkcKu2c5wfe8GR6P5VLCd9yMwWKsKGsVfkavSem9a3js2EPmKPa7wvJxP1G",
  "key28": "5cdw3aWWxVozWZwCjJD8PxUhR9JSBVbqNddVFbzGXURMBQ3q6o5zfQMrVZ9LbGgtMU5WN6f3PHbcrVtsGBXsCGqg",
  "key29": "3nVQm8iy2A2zDpiJgNQ9hLKz7k3souKXopQ8dbmY1SdHJt6h5UX93Rwsf8teXe28vAoJSFbNFZQ3p1spu1Bccqdo"
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
