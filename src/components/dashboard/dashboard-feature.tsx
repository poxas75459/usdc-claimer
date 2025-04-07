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
    "3XafDbQihTsQNHKLM6NhHmEe6L2SpcDq84fy7Ug55NT6b6hAutmDbtxwdJVYv18Un5N9ggYPFabgefKqXcV9oXBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RwzCbMzT9zB8Jz52auMUcE28JoBLgLAQG44omUDmba8TtKMYQwnwhBaPQB7cR1p9ywTuu3piPV8XaqZLWVMiL74",
  "key1": "3wZFrE8oerUbhdEwk7TLUQsC4tkbe85CPZoCHqN5MK1PfHiGPXmtE8tHRPRnHnpNqiRwsZ547wXorEAK7pAiC5FH",
  "key2": "21N2Tg7Vs9wvywwawZ3xySd8GdavpWZnzbtzRdSnrkTpGW6Lbifb87YSxNsDoTqmmaKVcYE6ie9pLWfkdMumNKed",
  "key3": "5LDLgVhGYhDjpVnJ5EWdu9F2i3k5Vq5G4oYDZ7CN9pFsZgQnj5kJ3cEU4toqsi9WB5Hp4cN8GDVPCubqYCXBCa9M",
  "key4": "5bVDnukY8U5QTKuu8pMjeZa5vdb5QsCEQLq5mFWHJSqLGS6xzV3C5kYp8HGsXAyKUiQfs7BUmvqnE9JE2coehZca",
  "key5": "562At8PrMygkcttkHztjWuk5ZgRuG5aAvdmzJDNFmGhJ6AykbDzhfV7koPAwkcCeGhRFcbswNzVcvqJBydzsYRoy",
  "key6": "3egrNSRMmkeFmuhm2uEtqRuNqexhLPvvTwfwcRdzzs5x5DJh6tgrVzHxjmEksyKGawejqreMETN7opW45gcQDB3B",
  "key7": "5QcNM6bMTtfPAUZSwjwgMrG93QLuF84Z4uWc3UNZnYJEUZKnTLkwS4JUjfQSw5SGnpsykRxSkHRRAzNQyKv2iRzY",
  "key8": "35Vcj1u7NGB3MzFwtTpRuBxtbRVzqc6o5B17EcfNegFqezRA7fUz11wfZ6kbL2eTCRaQSvVUSTkDFBJMq8bAUC2j",
  "key9": "3Wg8PHYfSp4GuzxY4swo9GSRCnECpKkDrcWZMULRKyT1HNSsWdSMaimnJ3w8HVYYzAET4x1Xhm4wBdb8nqCiM1BW",
  "key10": "3GsWmNom7VBVLKLpKcWxFNGkQNXXhuE9YgjKZg1aUzHYCZFyJn9vqY5mCawteRCeboyYi3DVgU8qAz3iYRUAECYT",
  "key11": "5uw6nK5E7CZkG9Yr6wRoYJVxyHSnjDHfK2j7wV9y6QQQ7maRCeaUngUMnMc8A4vHesYy2CEdAdNvXqFnCWU5nZqL",
  "key12": "5wmYnonYz5XYG3QsFBMCaHfF5ED9xcPmktr3pwujrgvc6FhgcYjssT4mbcuNcFvBrvs6hZJLAsDPYpgvPHkdBhrF",
  "key13": "4bPbjT7xs8t7RmcmSx3VGmzbx43xvzCUEaaqJQErs3jeBEkooornrmarABF2cndNtBCwVgfS8a9yZLyVbgRJAC2H",
  "key14": "34tYNhTdYD43UhJX1hRBjunaZFeaQTU3WP9PRXSdBfLPRkdKQfX8SzbSa8pTkFGsirGLGuY4bbgCt8rzuS4wdSWF",
  "key15": "3doDGQZuGZJYpon1m8dJHoWRWxc1RexmrKzCdYJvx5frnCBCMuUS9fcduzjzXVnGMEtUpdB8zkzB5VEwh9kC7GFz",
  "key16": "4LCVidu2yuugmPzwJAggcKKo8b4jHqK6WZq1AFAodJh4KDqe6dPTiU3d2ueVMWBbz3BSpqbxeNtnXdNCVk9qZKpD",
  "key17": "4pq9owuyx7YoZc3xw1K7dKqvrqVjWQ1mttjsW8X7hNqffuzUH5r6oFFjr8LFULufw7xjq5ChhTFZHYJp7ii8RtoT",
  "key18": "48VCyZn63mksujKqmYKTrJYcnuQKmLy2BPpWgxxCWD8twvujX6uf4FMJ5dZT3ATGaBDJdoVttWxwQjisTVawRPkJ",
  "key19": "5V6voRWTynk32CkiiiAfsYLwvWHAE5iq8oa9wAtCSmPKbyFvoykKkKVWspeHFb8NKYT2oiYprk75BVSmscUwcJFx",
  "key20": "59bJFhkm4fc7fnz5B688PiiVx4uVuA1hTmdayzFTDS4fBHXt9rYKzvvDt1AUCTKiUwf1ZNUGancET66XQrM2ffh9",
  "key21": "X4ywJcVoLrC6yLoV44Ha7bvPt127BGo3cZxtsqzy3DBsHW7LV5xnqLCumJPpyt245rQtyusu7u7Wj7bbhLHgYYa",
  "key22": "WVGJJFu82EEFFWfsLNVL6kKWswxzu4913RKm6LfTMujUntrckEQN8sQDKkVdGq78d4839xMQt1nAQLZb5T6JdS1",
  "key23": "4q9xQaBpWvN2aHHq57GC5FLs9ppybtxzZPcp5JUWZcZMiG848adaxBL8CfwVxghqZEvjh6hRQhJBGGBw94aRSB9E",
  "key24": "2UhEpWu1gonh6GQbJzgPbksABmaNhKzCpiNVa7whgvBThVhWQjXDPc6KNHaNiQVxqX3w6dXQ57YsPyRrzdSLLjnx",
  "key25": "3VtopRZwWAyLCE6iQW7pwMGSH7ms6eAPouMnweoYJSxKYmkMS5vAotYPjimJweQ2H9JeRLLTJXhM7Uab8ny8FPSq",
  "key26": "3oMsCCDC85dLafGoRGpmBYx8cDZsM6cdLcfhibYA4CqB2CmstyVTh7qUJiz8DtGobxueaUGdHSa2c6EMBW2Te39C",
  "key27": "UgghcR2F7X9h6XzkLXpCVAsghcyz5LJTHuanqwzFynyFYgLM9GLwojrbFHLQxnNQomtENZ39Uzk9u5kRj3CSe6H",
  "key28": "5TFSzLFZ47KARPetScYQVZ2o3YqVcGAwXgzU4JEJe97GiJ8ppXMaAY5mDHAUv31QNCaJNaCbFMenzoPjoYbWC4zE",
  "key29": "5mNQuzERzqNFayVfXxYbpKbKaEijxDx3DLidXEVUiorUrH9v4uaVf9kM4TP6AZTRhCyAMzSYveJFwf7p4YED6gX4",
  "key30": "61Ph7gaJvhPG2iEEPx7VtK8UhZcC6EvNnvdZDdTZU3TmznK9s36PFmNQLQkTz8ebig1N7MdUAS2dvfYHyrE7KuPv",
  "key31": "5PKDFMx7FeXnhrnec2VEBGj7dBneFVvQk2pas8vz3ErLrTcAGqPFXukXwM4C5rme8wMFffg3tCnCwnUSuygohCrR",
  "key32": "2gDnEtfp5Gutxdzbi1LxQkWssq2W46FoAv3eyDVNrRtywrRyz3HoTLSKF6Yd11r4E7kCEHcdrF1ZqpGo9sHoX3g1",
  "key33": "2Ep5uVhjLyYnpcNFUEaXgGRrnXLjbx5vHGarS6aYL9FhW5GeYp8VVDcDgQ9mVpCJd6vpuU94Hd8HV7pHAHaravUU",
  "key34": "2yWb6GJ5LWX4fh4RADnCRsZzyACfk3qND1KzXqSxaK4aYPqRVVfS9PB28DpqEwvu7Eds1e5pAeY5GBC7GNXQ8BB9",
  "key35": "5qYn1kmS3GEPNMMAYpfQJPsj3wU4zDs7KhGQUREYF9xej4QYCsFLcmuRUbnAte8aRtp1S8X35Lh38Weq7L5EHoYG"
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
