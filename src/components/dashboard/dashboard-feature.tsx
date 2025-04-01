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
    "3RuNyTe2uuNhpCZWzWtn3ZYyZB8uhp7F3nev1YzRiLGcX3Ko3Z5UVT6a68qhQDPT5g9y8ZwXNzQE8W4fL8rjKJat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c15VjpJ4yv7jbZ3qmQHnatAj2ZahQcQY71JtrWR9cJ4ekU3Dbt4rg2yiDqP23yuqdjCXbx1E9dE4rnpJJ6yLzd2",
  "key1": "61cN243fH4qitDvN5rZ2Sp6Tvaq3Kj3BK7F7JTZZheDEhYin3RmrTJUxuFRTdLGnxwwWcc19sEbnWaNQSrSq22T",
  "key2": "vdJSj9Z8sfur7ijt3P2YzF96kGmNh54rRYHK3dxVqGAabuiKowTBNtT2KMtQQsJepNqEHW1gYCcYzqRfoKaUBYE",
  "key3": "5o7SpqhAXGQ9Phft9PKGeMGP5Jo2Cc8KEodWREj8mdPPEbyixgdHYn2iNn5fniFsTK6onMeGKNZPMcXYb7kSM1ov",
  "key4": "345DDGjxvTjwuS3wdc1NciNXQhvpa8zsbXCbVjdLCkkmN8k1bYqbYTh2B9pXwqNKTj2MLZNbaDUnEgVLKGJ3ZVz6",
  "key5": "3hzUVKS2FHcJkxur6SoMJ3veyxF7Amx8wpAEwV5kVy1dKU9aZKwS1ujQJyUkqgVV43GScKv7xgRfSzBf6wvzLXoM",
  "key6": "39b6GEBSvxepnAUZUDzamtsczLKAueuHKcTroMaTHDV3wqKqKE1cFmWWXBMhbjYXdWd1357MEz4RKQwCX3goMY7A",
  "key7": "Yx74cZm9NpiHnAqhV1wem92Vg5Nuue92n7STdzPN9Jt4CucKyXoqRmEm6QKtN9LZM8rABBUotxWmwwF3cfq4U3k",
  "key8": "2apmFUyEn7g8bfNKnJAhydH5MrNKkqubcdA3eUGDmZJfDt46X8oC6uWQB3jBvV1jwReiL8s2zPXrM1de5cS67E1K",
  "key9": "vJo4YyMa2XMozrvpEkV8MWLyam8XPyqLgadvDYDRpo6VofScgSpfwT57cbBXYfT5hTatCvaoBSYkGawSkhSJQ7G",
  "key10": "fGXbkCD4ZzKa74EbiiLubJgQ6FcVYWZYHwhW6MmVW5YMZ7ASNaSg9HSDBYS2SE96SQEKFDd3DAtEMyyrsmNruNx",
  "key11": "2B7hsrcyzsfqTgeTojTarP75YU1gEegFdaXZSNusPwiREZFGAV6abbhZ9u2QpKFrHoTX9kzUZrW7T1UFKCbXn4M3",
  "key12": "5PUfEfeJzxDxfJP73LQmqAaemeyhiuJbiecXFznYuhqdYjHirhHt1h9QGfTWSg63ZxjVfnuRoSnX2pHXUn8u12sv",
  "key13": "3aRqyCA5yECShk4cz1bBsRpBfXJaSNypKB43votb5vRP9BFXppQowHT5mxDSxGGdPjKho9r7bgVoWWsbZRhoui3k",
  "key14": "vTLYysmhU2NgVwYZQFVGiKx3kuS4524MMWHkWvqkLLscoCNok8mfu7x9281iF2EmuaBt5v5nLTg43RVv2s9n7SA",
  "key15": "3EGdSRkdSEzUPhppGecLf5mbABYXjGYanSLV9Gwo9V4YVGyBdXCyzsitcjx7hsmLkn5PDozrKhE96MfyGSuRAYoT",
  "key16": "qani9TKAYgnU9EVfgi4CxjyYBwD9RUQZAMoMFWKnt4NyNHubQUGcejeQXAMihWi6WYee11MpXKMFP3qoKz6fa2d",
  "key17": "WtJFY3KdBTTbhYRgsSbnK88AFo4hXi5izKqrmADRAZ22x8E6UjkjFk3RNcKPSqXoSrds7PftUEb9oALUQLqMzNw",
  "key18": "5fQiC8u3sA8SG8A5EAEHqUi9Qxs4kA6j2T6shmXjVHimo87si1KnMhuAueT83pF5go5pes3ruoHxhiURfy3275zw",
  "key19": "g13BDU6P7EtZrxRPjyLk3iksUknJpmpHdsgJML6CCdHZfxg9qGvG37KuVCxXKN3C3T9LZhjSb1N3bJdqvLnMczk",
  "key20": "1dnVs7n41uxog1roLU8o9KM92fjJoQJB8vCmwXJgPyFRtoE8Lq1TD6HDGUVDp6ez3XqZ3C6f2Miwpy3swSdfakS",
  "key21": "3qBdJJr7aUQyUYKRSW4kn8zaXq7nFBk6f3un4HVcwq7kEZSPL7g2SqLgLRxtDSzmvszZS3Cw4SeFfPzqVXFvEkZA",
  "key22": "4PVyMqREhxmphfTfn9f6TUK2bYTDk6HkevNbaj2mZAPdZf2vMtPTVaoWiWKJfgRgbvKgAhvVXZyqRbqhGvE7fmfU",
  "key23": "3tzYt9EiRZbPYBBB5Vxoku3iGMD4i2mrGZxZQb6Emzxp2D9WQPdKvtQ1zNxpfyq6jDpTorCBBMVfTZx7GtTyEvEY",
  "key24": "4s4QJnXzdzTjyeWE4mkYiCREXdUFRhyreDKtLGZcxa4bjeppR4AgjdqrQv5scRNoLAWh7J47GQytgqnVS1xPezaV",
  "key25": "2XcW6curASiCTJJ8VsC7yRQoZVs53tBZq3HwVCGoN1tvMadnHadGNgkRa3DSxhm4VoMzTJ1LzjosRdhYKfdamfE9",
  "key26": "4smRN37CCxt9iZRE3piByzAH4e2HZ1pXVmikkysXCtLNATpt5phw3VDKVP26sfTQQf3SQ1fj7qqiqNfqPvYb8qLh",
  "key27": "5gpfysfQVtyD9iwSneHcchvviYqu8sYCREdSKsZwnBzA2YSQrgL1sYNtCmuygEn7KFT2yVbzJEFJTNTDNJJFWGC1"
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
