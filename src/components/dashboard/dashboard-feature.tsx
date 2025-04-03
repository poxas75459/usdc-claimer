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
    "3jVRVj3Zf3DcHuk8Y8zt8GxRABSjyHdMh3wR3fEEcwa7NfT2sFFXra9gmy4V1tagpPdzPPPEFZZRVfy7Cr9jocDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kNkSAF7KCW5DhcVFk4VQ21Ain9XcyhNghyb5Tgj48FYB7meLckTUGexkZzDsz1eLyQFmJCnAXdbJ5wknxCvgVjZ",
  "key1": "2SbGxcSzQHfcrwd5rMQKZmCHw5udNAV7aYi7bYXwHVnen16yUZcBiiaTnfUvhsWR4f6jfBq6bwWgLvTviagDqyVh",
  "key2": "5XSGmrU3WcYUuQBMP4NSVVzbJNMSb58BZYJhQLDeowdnbAvHNP8Ac4nGD2EGShPoSRefRNfiQ24GAroeuMwKqHJ5",
  "key3": "4ddbhkCXCCekg7ciTSetpRoPQpA9MzYHRc1vTzCz9PX5RhnwmjXsXH74NdTAJ4tmip29rRaKQt4SWF8hPX5ko4rK",
  "key4": "46kUVX4eWV56Ce6R8MrKm96BGZcDFJckouGzSwMiq37YRZEzhGrCwLQL1QC4Yy5R3bJjwQxN4r6qn2fu39GkjuvD",
  "key5": "27zjH3WeEuUEHYdjDbdKKo5fB1NT49RuFb4SSer7Pm8uGZdU4rgH5btaHi4u28rgqqk1iwdvn4L6RAD1qMv5EBLR",
  "key6": "J2V2kQnQaR4Le8Mzt96VzGC7qnszYPzxeiQAYx5142o84m2aLxkeEqELJLRosyyvVAcNxXyWU5uEWNwwp5cD8FF",
  "key7": "2KpMSF8ycehXgnFhzxjW6rmwLXWzyJSXnYzWSQyYJJCXbgvGDAd2xQwnfV2WGPjXqJiuNVKF93uWmERWCxtyg56x",
  "key8": "5ZzmCeK1nyDKWa3AP31vqLZAZ2pZ9nZ9SQJynG6NwNEiCXurQYZt8bLo7mPkUctcaHXTK8P5iuNztJ5s5jEMqGQT",
  "key9": "3JcCsgfCN3a1nxR8FWLEhpMrU8nQbYifHjUHr5WQNgcjfagbhcu3fgmTJxJegK4MachBQ19dCUup8wUYZ7byLHWG",
  "key10": "5GjWGHF8fL2mVECUkSy7RgpqNr7EDcUtWZcbRY8qbHYxMqWz2So1wknsPBy5iKtNSUA1YVmZfY94GKu9gMsgLEtN",
  "key11": "4FaTqiqig2TGXYxXLuX2k6anYF16a7jqUtbM48bmcwCkbhd8JRfc6RwE2FqicciBSXRmjyBw9a7KS11GiJ5YaWdW",
  "key12": "3WjVsWs7qDde1Un7apcdzviFaGM3JGJk1r4oKCyf3ZPUGdhrxPJgeqhk9XxrGDQanFQ9WfmCAiELiEGoThGjqzkF",
  "key13": "3fANkArKeV57Q75Q9zHZbKGsSfZ1tFC8Qh2ajAKSpFoA1jabo5f47KSjUQ1D2hAZg7mkiZJo1cwUcRcxRRUeGxqM",
  "key14": "vckd4FnCaCaWMmTyXxA8fm2qEdtLzgYYDc9FhSNE4vuXQNzGMywpCEDpsW7ufQXVGX9NZhRghxM3t9iVdJJnqvG",
  "key15": "LjbYeHsPgSsF6yebaCjwY6ZSZWm9KkVxAiAMf9vK1FZXExkw43bKVTePv1ppGt3LUot36Fd7MtYX7JqbpWbMHND",
  "key16": "bNitmQPwd7ry36fRYhZuWY2DBDTi93kj5y5gKZdfMySeUxoc9AhFKuJJcuLkhqJWMKEymeyvpaM6p9arw44wTMr",
  "key17": "5JWHJdySGCKuNq9exgj7uWgQG4K7XXzN9r8w2LUMZLFwiZKJsYV3zW6oXRMvLUuEaaR4hqxH6aK6Ut8hgVg1bije",
  "key18": "Ssr1H2A4bxYTEAGvT76PNudvC22p2GsbesMQk4FusRcXwkagP8MVdvVYHi9V3AXoXnkveGXsiqFEtNT467p1f1x",
  "key19": "3Pzyo8JMWSvV6LJd6ekAv7rBxZzkjuxhDNvrvJgA2Ex1ty9ekBpnoEduBHizdD2qpU6ygNeRerztocmH6sDAcjX5",
  "key20": "592PiQpDTgNv4ctTbANejHKwA1qyb2Y6NVmj8i4HKmVxdfpzT8i2PGHjEZFJMHCqrXEmWDyXnij3DKJa2T2zMtuh",
  "key21": "5EeGf2CivvKmv1jnC6gdZ47JWxQ8HcBkiUsyWVQb4o9tcQzmaBBgcWETX6X1rLVC73nhwTwx9HfHhLf5oJ9SKcBB",
  "key22": "2h91kLvnDLjjGrQfFaHNAxDbTUH7k5VASbPUvArdpB9CTk7EDu7xsbXN5D3uUajpWVHFoiSGSb148fPtp3RAssPm",
  "key23": "3QprgJs99HPzQ2fhRMVogaugyu5GkwqxCGsubuZ85KybzjtKVLrV4diwjcU6XaSGGjfB57puVKtsTbruM7RLdBD",
  "key24": "2whsJ7m1eRvhnEuDF5bVAjHoNjrpNxWFUrtywhWGWZLqzAyxEejtT2fdyzY5GcSuPcFYHJCpLmYuPeBbWJnNHEkb",
  "key25": "3nTzGWTjde5vtjAk6iQFdfc4VHLH32B3BG6bddmtpvKbdM2jezoVRW3skAjjr4Q4PGpZehHjnTJtuC3BxnqDKmdw",
  "key26": "65cv3M7B2G55NvbdXuxg4x3ejb51RYyCJzfQFBszDRtGU9H23oZWUTbqEnPFxWZPK1TFAxFXebCSxrvytoQY6YKp",
  "key27": "gePHW1dr8Ncy2Zw7WL7PicEZeRKVC7eWc9nhaZR9fhFLvYi95N1aTKRQ1kkHwbFVGYApL2utdxPrzRDrSM1sTbH",
  "key28": "3TvvxKASUoVQsFEUcm6t2e8EFixL3iHrxPuVBxaFXe9tfjiHM3zqf9haEBdAk3ocNq3L9HHoFj3rcYmc54gUHfUQ",
  "key29": "4qEReua6Cxsa8fZ2AgGxFcTpDXVY3wdUWLwj9oQssMXi63HpB7B15QyXtibBJqqndb7VjV3NHMUXtZWs3wL6SPxQ",
  "key30": "4PW9DVhbQYPcPkNLL3C4YCicZ9yZpWgAgQ7veYno3TjHDza2Y6WGEqmUVoLPfD5phYKVyt2ExerbBt6XTmdUaQrw",
  "key31": "41hvywXprKUEJDK4HKF4KEatkxSG1u5UqEBEkHG9xV7VMzXwNe8vZYm3vw8vzugW9843KbaW6rkqFNhiTyQ6YmKv",
  "key32": "5JGycQudzbG9JuZEP4YzdLsYWvfk1LXadoj3AMQGSDVV5dotWXQmywdGqehmWx72n9iafMgddRiY21GcciLaTunP",
  "key33": "3jKQqXmjn7JFuZBBDAXED5wP7Br48cWtU49bVsLiea4Ef6t35W9Cd7RtgwutTKHkMwZdScUJC2Gj1fxH9FWMBqcH",
  "key34": "5fC2tNPp4kNZpreRiZnusR8L2egzuk6Lj2qkRvwwtSB5obsFrjqTmB7AzWwLdAUbNMHopSBgfsjEDWzjThm8krk8"
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
