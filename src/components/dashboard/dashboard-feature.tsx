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
    "D1LrNcZyRg78uCXYRxniAKtXctkqJ52Nrqm2pn4X6eANRtzURynFvzsbbbxGuXFFuC6yLwQPRGmKoDb4LpwUJNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2anUpXATYmUUUyFX2swPaGZHaYozFFK6Ex8PdDXyWdQ3VUz3VKHPKFcfL3Xj3r5FJtb8mwEXuA4dJVystXuVQCuS",
  "key1": "57hApPuhByhoKu2pQSaVJPLmXWxqvRc3bopFPvhfJMDtvBk79uYChUiaxngBh6jxdwrKw6feeWMcad6qNz891Rvb",
  "key2": "2daAaWqZd8BSne863ieVbVzXJ7qq9XXz5NQDRTrwiiDww8RyMwYFRsbc1t5QMwrkJx7cfoHM3sVbhWWRSiN3aRFb",
  "key3": "2XJn8JaTV8LH4XpPyD8AwK6xkALLaHctmXo7xSkHqSnfuBty2Db1pyB5p8Jn8qizYrfQ8AESB1FHsFgFFUfroxVj",
  "key4": "4o2ZxJAzKD8w5ajgxxxSbk4xAABQcDfcQyQmw6A6hZaEPVxgmYz9t17i8xQwmojm3mCBum24c677uv9KPepd4Juc",
  "key5": "4SmFfP2K8E2L1A2Z1iaZJDMRxhLg5y7n65ACMoG6VKXy62t95uowGXSzLdKUMZQ38EDN5mg7kvKmVH6gLVohqvT5",
  "key6": "3RJDX11cbSxyRjKE34yeW5BzNj1DbfChmswBJiJ1AV8rPmstoGWLBAywApcoLJe899qx5FhBq1TuxZfAjZrpce5v",
  "key7": "3YvfSJ5bdzTFjqXNRGPVNMNjae5KevG9nVny76M4PYLThWoJqgdHWnUA5Adv54RaGAnNKaV1bJpqyW7j9jLab7o9",
  "key8": "ZCYrNrGnfeUejmDJSyQVKvbtDS7ffGifZdW2YvVtZhZj9zDJe3qSADZ5vy63xuNGpJYHmSBhh3Q9ppPckAh5u2E",
  "key9": "RJpVc2N2BW5Esuw9sKgn1ZEfTnyjwGipzWihbu3PCBqRuCoXGzXZYzsZDy3mGQoT5YRuBhuxFrEgTCQXzBjpDdb",
  "key10": "4Aq3AjJhGsvcwkwrvW7Fmd9sCqe3qFqVHgZRgmwJgmcT1TZ2fQ4HwGE4NyJ32h4piyR2MQRNuhxLQq2mYVyYLRjM",
  "key11": "2LGK8GuvtP4BZPxLY8DtYraJD1sTz1tsf3DX6EKQibKcWLWvQTGs5cTZYio6uSUhcEXGMCBZfEemtwAJvZkNCqBh",
  "key12": "5GUPANPK4A2gG9iJjbnC3c9U1tymexjgkRtTkYeA2KQTNYXCwUruyUskajctrucYWaU3kd4txjMbfFJC6a2t5ZPf",
  "key13": "5Me434PhiJ2bu9fikLiAk4mfJfhS3omTXPYr2yXDHFTPWWuqeyHECzBVXoFfVGRoTNMAkZtujg3ZFDyUQ4cBGcrj",
  "key14": "5zMzjWoezBiUbgf9pB6yJ6n6yrWH2JVEspH5QZmMcoqs5eTb8RaQour95GaezLg2uWssunaKLRC3iHriKKZpVfpq",
  "key15": "E7zEYLrgssjGgAL33ETkfVq8aCEMh7jSDxua25hHGQzUjwd8dYy2ukZmXXsVFhnZLxCj9Pe1QTH9GJoer7jTxUr",
  "key16": "42Jh3dkrZ6xFB5jjCZNim95ReMxUdKurRmd1VQiDrj9SSjsMDDTpBRuESqH1X2dibeFhvEWDEy6wQV45CmnzLCp7",
  "key17": "5991UGcdCPbZjR2uvqpFSkhLnhta6PAi11N3yaa1dK3X9GywUgEwFY6wy97vsxdqYZS6Wri8SN7jzpzxuSdK9RRJ",
  "key18": "2HEJzcDwQiKiEa69UVdzr1x9ko2NVBbEWb93mRDFyGwJKrVLxWsGM3WJxbd6ZC3U7MTBFXZkcdZDksKahoWUyTuC",
  "key19": "2H3djfQeyNCo5eqjWVfsKoGSDr37c8wL43yvbm5Cy95zCjzur6QthBa3VAQxYdx46CyskYyMq7MXMuC5pjMcDc4N",
  "key20": "4osu5iDiikzf4ic1KFkPHd3nAJa6fnDeEzkL3YuMP6ovc1E3jRSjf92bDf7GKVw99bWcXMRQubgaKnTkRGzZC5PM",
  "key21": "3uTmMnXrs4f3BZJiEVP3WZBJMLVL3PnNtLLq1jRAWfe7LYHwD389HyuZT9hbF9vNfDQGLu7XZENs6Bs5FyREqBRW",
  "key22": "4W5EAX6GeeaUgLaFU21iuQJC2YeY46XNAwcdQV9LRDMkvM8bcFoPiEuWgLzG28yp4ANBT7xrttQRwYP12EEJ7kYp",
  "key23": "2PCsdx4BTjVynX9t63KiGvRcv9vRwjq6P7SC1M6DaCJwUQvTVwpSgfFQsAEjjkz1QPyWT9D6hwbF47DdfdL8Vc3x",
  "key24": "211iGYs2ymZVtfbptjiuZQ41T5ZZSz5WRRJP6RV9VCwuPm7EHn5iXbKEQDWiF2kB7rKH5UzQk1iuPNs9wZhNDYEX"
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
