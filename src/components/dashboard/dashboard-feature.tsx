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
    "2XB2BKPiCXn1b32QGEqiB2WjS9NNFnBYocdpHLsur51RbnbNpRpgdgVMFnsb8Hai7UjNRHfLarArXyN5ifufc9tJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TLKwWDNgmmiHDME7NkwSN8jwekc2EKpGt4xraFbFJcWUsBfvwZ5U2QWVgR4HVZi8K9vYshWmtAYRBfsV6EEifD5",
  "key1": "4kjL2RxKEsrUzbTCZU2zacd9FXH2KHkVQTwYacmE1eULDj4J83iYZh9WZNmDSrhyRbKWaVqRfHPSDX1YLpXcJuhT",
  "key2": "4Y7v1LwvNq1wh8ammjwPvZStceB9dpqeDb9ymENJJfRS45ZWuUejxeofVdqCHzCa51A9VuSoJdzzKzWfdLjUPEfZ",
  "key3": "4krv13ZEBPYgcr4mMzYajKmXdDwsVgTkHXUdEQesFTZwke2a4iGF6XtYEVea8WMLbrhxvUf1odxtxdtVPfgWN5dS",
  "key4": "xWFH5geQbvD8Re8YXLg5FbCNVrXTmmuaDET7rRi6toHDKiKgkes9qks3jxBiLTv3mgyNGW6QHH4UiWGbnAQjREf",
  "key5": "2ZXjvVQuRyi4GzYctPAByHqAij17MmAGL9KoeCw7u1vz7iBryeL8vVbgEGxxjVgt6uw59yEeT8Qsy8dNUmg7wpSo",
  "key6": "27qQbfrL9YYehcEUSMcFSky8u5JJxaxGP9VFGu1rRWShJENh9m9qVK8uAnfJzKTirFNnouEh5ojdboGg91kemXaK",
  "key7": "5wmVAAewThXV1pYHZZdDx3q5JPR4iWyAYgVKCsXtKLwhJC31xXMVRX2ruLmSatcRoaJhjSG7Cf2wCjV1fVkp29AY",
  "key8": "4LEHT1FUaPnq3hRJyo2FVBrBeNx3SzJqebxvSFpdg7LYmaN4JwSS5Dd4djiPvwVb4bXD4qQXdTY8noWwkrdtFXhw",
  "key9": "Hi8iFvZvEgxriTrDR2RVZRcosT4RkSbNd5zxbBDJSTVCkLX6MH21aWhtLaj11hHuG9JkQbPp4bTrs2rpmKorYkt",
  "key10": "m8SJ7PimP7wha57Lw5M6qrtJmCkcFtUWFU8nYCxyvBXjwn9KfL9Nm1txt8GXRrmJSoJfYETEn9xwJTcWy9k3T75",
  "key11": "4Twdbp3PobE6RgXBifMVfcxS6pP9tCsW5T8DKoqnqAVKND3Pg8AJ5cZTSjSZVLgZhUd1zgPctpLD6LKYg79F5Jsc",
  "key12": "3gn72Aarh2ij3nQuibMy2YDUe1asRwkMNQY5APVnQ1WStia88768a8Crz274GGMpD44yebKpN9LhioiLEpM4cbMH",
  "key13": "63so6EWuaxxmR2PgzwXQWtBiktrw1kwc1EkAQDSFQThkJHtsuxtrVqwvDqBTU2XAifrNhTvf7CbCzmaZGcgFTiCX",
  "key14": "8CU5yupkFJLZKfpjrzPzJCbCw1XzYkmmjzQyQYzYNfqGng9mHp6mL8EoYZGMTVfyr4hBrVa4nZG78pXyKNwoQ4s",
  "key15": "3NyLEFgNdCjj9vv1ZkmDxbjntUXnSvtxAj1sqW8NLsSRCkWyYtUjnUtpKk8uPgvry4M6Y9vb3pRCiYEjmjTzD4ME",
  "key16": "5m2ozWsLMV3NDEoWsMwnYZ1eVbmDuwdtv5jZZ3kUygSuwUG6eaYKbAdjXZiJPoo9gi7HNhZdyHnwKHoEkEerKD93",
  "key17": "4oDM1Pg9tVMJXQUdZPDvLSxzEiWYGLp1uCELY6E7bA1jsLzVAGD32CXD3en8CYEXJweUaP8u5B1RyWzJLbnZDZ5",
  "key18": "5xAsB1wrjFk7uhEUF7GRs8ZpoBBcePsuXjAhDyzQLgTb6ktbVxaW7jprCFfbkiHVNQXq3m7SD5ryc4xmKwPdS7Y7",
  "key19": "3CYF5wHubdHftdBHrmjhqsFgxumeDSf7nmJfehqL4Pt8jpUcKyLYDnfrJu3hA8ZA6BdiidcvYoc5jNjSrWto5G9",
  "key20": "5f4CvFXHKSiyi4h8Q9619uc57cZkZ4agsXDzaGWKYYUmw6YydEZuHREZvXgRySKsW4j6jsqSWmRimykFzLSg3nBF",
  "key21": "5uoGeGYXngFsjUdk39EzhnDVE1xzQSyjmFWUyptVgQNCjVesCVsns6Q366TCAdKoDS7cQqBGjGFPLN6gDkC2THsb",
  "key22": "a8Qodd7Pj3BuNeyfKpHUiKxF8MhLsnpdSPH8KjUmjQUrWorMEwBwMEPoAw7heEyNxX9bnfsEeKLpxcAuizGu1iG",
  "key23": "2XWpK94VQkLGaGQcygr5fF4gAncAHwCAwivBfMi2YxmBNCG8T86C8stMEphhxbRzwqi95f8DwoSwTxMoQna7HQ8X",
  "key24": "5HYArKbb7RMBCqWQGkW5ghgfQFvpf2Cd1wjJRktkm4aaUrVn1CHFfKgqsMXiSECQbLfNf49MpvtAdedgpRo6o86y",
  "key25": "22ww1B3esXsGYcyzaRXWcjRR2QDUXADTwWM5KPd59wqu3DJQgmtS6oDQ62SMq9gtBUmYB7Yx7cdZrmvKAVRAP3QR",
  "key26": "2zwZeBrnW1pdvX14GwCBDAxbQjb6QACCYXZbv32KVJBcVVUpMkJ4bZ3UEcH388ri1Y3qLbS2ivPjiDH9EBAWKJtw",
  "key27": "55v1az25zr658rU9jp6edKyzJ1nYUx2uC1pQ3XhLMFan998p55RX6gZNyHD8FGsXuFY2uyoMx6qiUpqCsMYVwwLM",
  "key28": "2cG4MtvoHNn378Rc2v5J3uGC7XSc2mazaCwReZUYEv7FfA2LCEqQmc8CVeUmwHMrBQeX1dFx3tMzei5iPZMFxNoZ",
  "key29": "fFVjDnGhdPSGink2W47AnGG8uYaDiTqgHPTpSThk5CBeLS6L8z3QkHdMmS6vATJkbrv8aWP5egtGS9NY3cGdhbJ",
  "key30": "5cwjQPuyMy1qP8gRJoihBw7gnJ9tRoQphckmLkU4LFX17v5zGXM6xuLtqHUaiUijDQmEBaDQAFZ3npeqRtqxQ7Ax",
  "key31": "wgD1yZ2QSN4fd4VgHk5xy6irEcNd6nMWWN92YwbcToj3NWvDCf7TmYEBVfGbkfCshJNzgde9SJqjqpgo8cU76ST",
  "key32": "4vphyZ1GPKkTFf3o1Upq2aDbaLL7SnSnXze2VRFoBkdSpVFGamU8oEtqbxxCme6HFzwAWnzSKePgVLoqmJW8skm8",
  "key33": "37DEQULPgEVW3rcBfhbZGUpWe7ouNZmoDVbqPsdDRF1otdruBu1LZqufmW8eT9URRWRaSDcTs1L18owQgM7KkNu4",
  "key34": "5iJsKTrzpq7RgHSfVYeHRwVtUn3R7Te6sFmTmCKMG4gfKhwngi18KJU3Aq7pJNJAYyWPifgvcFFMSuFadAgEDtfx"
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
