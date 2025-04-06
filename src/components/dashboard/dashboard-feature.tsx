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
    "4wVgxEFy48kyyUgtj6dDT1EdhViKkpgNWqAq3y9zSjxeAwEbCYh3NXLginLYWyLTmUMXxjME826rqGN7B255MgKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wSRmUcLMVh5FzUZg5kjpJGr6rMgNBEbA9T1rfNoG8E9pvSkiFgng3eEiJQCYpxu8NBpZjcxs6KDGxUxL2FE4sgf",
  "key1": "3HnuEZiJi253Pz2X7bQfZghB5RwHkt2hPLUTnKPJEz8xGrXKbAeRY1JqJT98wjjPg7WHM9U5wDhyr23Cb1gM8vmx",
  "key2": "3vC5GKh1nhqZHakdnNN7gtA5YGNLVfdCRssNX9J4BmjPKfkRuDxoMreFiVUwdtYNT3VEuKkbCZueavZ6ddHJhSnX",
  "key3": "5PXSnBLhaV6Em4rFKHnCBhr83fJjtxk2uKW7zAyQYX4XArPoRJbJk7BHM27ZCdv4gvWSKwW6mN6cVELNCncF6o6W",
  "key4": "5xCThD7hGBU2GynpLm2sQBV2BhgwtZJkpCSMhiro3uDHPdnT7Q2ZWqPuuUzWobfA8bY4FQnQgg1hNwq8GjFGrzj4",
  "key5": "VbSs6dsEBf5yuPrWE5uZguLRXGrRfpRU9zwLTum9ay2eKTj7QPdpF8uNqQA2wnFCZS3cU5R3ujan1nF9LdffWSB",
  "key6": "4p2NedX3zS1Xum1cM42t6LJXG4VFu5rLFnewgoRo5Uy4Vcsnn9iQAMnvAJqeSTeRT4kx751fnfKLbTAQXkH4TZSt",
  "key7": "2fxGLSH2iRnKhqke896YJyNYPy7PhgmtpYgDzzTo3z1CNGFYbrvAuYbDxsw5zJajvtWhEgL2DiHPyRj7k9qm46kR",
  "key8": "4SXtPukzoE7DnLth4SJt3VznQY91Hm4w1Ta7b6H3iAb4BoYoJpebdGYDERvm2RjLNKmRVuPRNCHQtHxryz8ermXf",
  "key9": "4S7z9dDUbxKGsYuoU6yXaG6wjJaa3LArq4G56d19pYjT9MNEx5PS64VNGZHzLu3j5hH9Lbq3soQ7CaPJMEA56DTJ",
  "key10": "3b2ENAPrLYx3KwLxDKkfBYJYdHoDR52XZtNRGn9695X7UNXuSS5UxF3RNJgiFmw6qNXAYjkHhyGScHLjhczY3qo8",
  "key11": "4JbqZXvWA87J2iTeJkSY4dnYeysAhmn2KtLcncPDjsmvwPEPTURTGUwgw4yp2RtA9tYkSUYtYBQPprEkSaosqtWX",
  "key12": "3chtdnpSauGniidkbbXenivYxUd1k9F7dDjTDW49vNLUq6nkzUtKf7mLefF5Gb546uvz7VrRbmGPQ2TAn4wvee4N",
  "key13": "gYZvLUcKgvPQqxcqSMj6USZZvyZp4r8njaWcWvaEpvsfin7hLbeMfaMbmTVnt7UDFpeofksw9JXk2EHCBrzAuci",
  "key14": "59957PtPRsR99YVTqW46UXC3m3rjdHE4n1XFoc16ceWMGvJT87NgWXXfWNeKweurBCmt4H2knkLxuuRaxD3yHMLL",
  "key15": "4AaW4KmGo3xf3aoKYPHkwGnohTzRw9nXDRcoAn3bcWCDZvRs967oL4BjWwSLgipR6zKPAbihPnqnUv82qFYzu3vU",
  "key16": "4DC8YXj5h1wjMi56HfNf5MUf9GYH1hc2goc2muBM5M1zzQ97tzRZv5V8PMkQNefFy7BHM2zMbvKKXofR32VWiJgz",
  "key17": "2Se1gbwZb5BT7tQ9hrQ3U2D8PQaDYReKE7oF5dLApCP1cjyXE6wWQYNavhn1LTg93UQDpJf412KqR3fAF4QxpWoT",
  "key18": "54uogcsVLCs6gNqUpJpHNuJyNdkr61xaD9LTbbNCRYnzom4QVtFzPW4FZpXPW6r9WAMZCjGM44kRP8BsMymddr2J",
  "key19": "23Nw5c61yUHnHVAVqSX2NJzFLg6c45qxC4eWDLNWXkzpXkWX15Taobx1EikTagUr9FQ2qeC4eUKGqKwom2UkZ4Cj",
  "key20": "45CQKb77z9w4AGjztYAaBxzeHeKRHgVpt4kHYaGtAaRjAxP3ZRf9MiSPcKnfncj94axk8LK4zPkDcmP9YaqZQY8M",
  "key21": "duE2UCkX7p2nU8r2bNe71RYtrQhA9fjF3ZbwTdGWzW3G7AgdWn9UH1i3wn5qhnX8RAiSNTzrNvaegqbTwav9J9a",
  "key22": "3zjv745Zp4aNpesUCjaHv1Ye8yq7qYBuhvYegc8BAyagqk6ZkSemEVTndMtwhBuE6u7rW68K7jTbybhjwB8irLmy",
  "key23": "PuoKevnPXvfvKzmBG54MqNYxyTakKULNoFq9viBpw98zNTYhLbYBj3oGK6q8dnLsBDV1rHR9nLA3AzhHZwm7Zdy",
  "key24": "Be9jyzPPD7mqbWh9W271VAiwGYNbDvebfx6UAzRPRfME5nohqjT4tVURiuQoV5z2AZaVbX6JYgTsmRTTRMwCEM8",
  "key25": "UFGymCmLEqgxrAy8Mi37HP6kg1PdfnvW1YkxghRmKtuuKGujRs9cq2QJcW3v5Afe7caHzC5gm5JqvTSHhqMV5J7",
  "key26": "4Kq6dkfhxZuU5TMMUS5ZgKZKQxzSiCmAntm1pwwVgjvf7dowEUNrTCVxDswvMTxFvuANWv7tb6y5Jg1Pv8b4grXv",
  "key27": "2zzEkg8QEhSkQhvte82pAfXExQ4veS4Y6Q8EGCz9PyaSBN9hTDKnhjneaMpjqWG2qoDjHfg2hCeAWATtdJstPJn3",
  "key28": "3bjjqRqXohGhdea8WkPEktaNbCQQRZ5BYmJZxCcLKLHAwwYcLk3sN6BtSBuxceYSPQCppf6EL31vYq4wWzCArC9r",
  "key29": "Hx59EvMixX2x2eVSrErVPJoqFuKQp1P4SmTkkdhvQKt3HXHhjrFjBFaLpKLt91Qrdk5xcf5B3Y837PTqf7Bn5MY",
  "key30": "3rxVNd4FevToV7MJBLmNpDNgdJmYLeiohF26YxcNGeBnzCTrdDxXoDjjaJ6quSbvqRSXi5MtcJrHrnt9gaiHKmJM",
  "key31": "4jQg6J1gFS48dNhLypqyb4bhshqaRCygfrZQ4LzcycUP5y9nNCRqnKkxPsHB5kkNt8JYzw6VJJfnxbCLUJND224a",
  "key32": "5t74YZeKLq8Nt7AjanS9AM22kALQG2PzQHg5mLYDLgGwJsyrhs4DiBcVVnjGxBr3Y6HyYcCKuy4DgQHk6KVDRDUt",
  "key33": "HkfHGUsUt3iy2gjFQtsTuo5spgY5Hnea95TAKMcxB9mhSWsoYoV6Cm4qfTVagL9BiJsPzyPuncwBuYQvBsvPvMQ",
  "key34": "7LkJa71VwN439iHUM48euUzMyVnn6MTMXd7FhqnPswq8p9cyNj2sSoV4UnHS465cQhx1tnaxjU3HYCEsop16Dda",
  "key35": "3LH1zhedPpa27cWW73ucAm39HHuTKbDLDQkmyBDKL2rE4EvaJBRwnNqQBkiSG58emyBMNwfmeLVfmm2YfA3Vim8o",
  "key36": "4VmbQ1aMvnBsh2YCBNxrPQGUVTwGscXyq7xkNvx4q43RpYysmahBvzRRjVTPsoY6oyy8XNtUYT2L6iXyPZ5xNqk",
  "key37": "61PSZjubSsEAsQTWayeRerVcrUaJFQponWSExVXdmiLJokWnsCQYKFkiHKmJRZ7PZaKRKypdeHJv8idepNhAPh2Y"
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
