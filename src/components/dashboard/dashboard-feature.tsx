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
    "5t6sj1uTEJZ28paCHUjsV3EzWu2Ubd43miLWTtcLU2UrzMyPaYrfEjEWXrAjf5CVYtR5EfPK5fJV1rmdnMsDAhci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sBtnMyqcrKgDyeFcq7QAtdNc9F3bkobyHMKaT8RYgrNa9dY9Lg1HroaLXHFqPmZzUxv585mhEQBXP7HUhCSjgsv",
  "key1": "4FG1TEvJCgCAMvZbnbdQ6qhahdx4c8VeerBPTFGKU5Mmb57d5P5v48H6enAACKhhkAenCydQKPSr4WLxJdfm5cDm",
  "key2": "4kXqdfwrTYeskuhMz4w8AeUaoTuW1kfLnuoP4gj1oFHZwRZWmwj9ebJaJscep51vcTLYqzfGkqWFzx6wFnDUbAF4",
  "key3": "4sNdRJe1HfN86HyZkrVzpb4u3QHypEmB4mze8N2T8nzS3N65WFDuT1kMm7E2qLvVv26V4wC4HMrwKPXwFnqW693B",
  "key4": "3synsgvksSAJSuLNVRkmWgo3rkKTsR4ZLKLX3mqzYhM13WMwbrKbo7Y2xedPx1C9fYbFV8f11E5wHEiFC6wqhtrC",
  "key5": "3x9GWzTUj3qRZ8BGyqq6BEc29mfr8hJhhB6xvwkkBM1BXydMcxVRfPTPe5yeL1YYbX8iwEsCZHSRChLamh8zVgaF",
  "key6": "388tGZi8RJjk4SAKKJvHDYFWmBspZRrChEaJG7AfNKi5vVtRjbgv7ArKQjcLwC6u89L9kK4kTg7VLjLXskdBp8Ev",
  "key7": "3dNRcfdMfN8sYhymzgp1ud97cbyjMyTd5vXLGxXSiwVKTAK7sshMStnYxjDArymHinW5FZukm1zUnSzpRgiUxAPn",
  "key8": "2BvaU7r4LzEAULxkCMNEv3uFMQaSd7vZUA4bdCSG3Qo1DmZe88j9zhcXpkXYxDwD7ERUmRiUs2wvGposdvDD6oJW",
  "key9": "21LhA4z7RVDp18R6XyJw74irgto279d7TVzGM7wJ6B2vbTFF79EW5W9MmCWRjwRtTVv6RcSjjzG276bn5GjS7jyh",
  "key10": "4gUZxACZJPRNRsDXcxgDoTMpfftiinzigK1rd1GxpiobZnMhfMsBikAfZge6LJNQ5dFFxp2XLUHEJ9MGorRqFJCh",
  "key11": "3tYddaSiHLGFWkX5h5CUf2Z2xEkhQ1B8bWR8QHUMQaLcdAkCryPjwDgkYK3FP2HtCuzdjpn4waDc5DtzQQR3mqu6",
  "key12": "373z1j7KxoVZi4XCuyPfqS9rBgeZCLU9vQ8LMHBrMEZt85PPCVofPxp14rADFWzJFEcxsKhGEcZpJtfTbsxetciC",
  "key13": "34yydcbzdQyEX5JgwK7WrmPgDBT8tJjt6gAe4zEigtYr2KDCVk7BGB6e3mXraKjvizFVccuQpt7B8LCFRVVqN3nX",
  "key14": "rExGUtpF7RBQMHeoiVHQxZNwjZN4swenr6kFHZrgqHBvjTgTrGto1VkTYXeHE2jDxfqtNE1ibj3NsJFLWjeRfrW",
  "key15": "4hAZBvzC6ZcDccbY6wV8fuXTVNYqSyc2v4YgQ7Eo5YxWZeyoLRmq2J9gynHWidXH8QStNvrdNwbEwNGmas39sH4n",
  "key16": "ii711SAUcPohipRnJyErBg6JAPVvmg8JJ5APMCdhUMjYDfinkezSKwtCQEYMribifdhJHyu6GBKSL8yoMoW3KqA",
  "key17": "jneQhVKoys3c7Hpd9fam1WYkNQyuJKAjHQif669MdA7hpDx9W2jepuD4FJDgSZ9W5Wy66R94zs8Cj7mwyZAzrtM",
  "key18": "Wou7Trz4YwJM4YzbjLxDDbNRJwZD5uqMDDh4YyfkL5HiN6fhZmm2ckDokf2HiXfrJPmGuj2aQweZk2MmrmnyYBH",
  "key19": "3Q189S8Rt4qfiguZr6CdjgtUvwCys8jbTsgt8T2jLUvQe8G8gnZ8cFCWi8zWcRgyTnTj3GasMbTiM4E6Ynh1CmVC",
  "key20": "3GAxkxzJLkvPvMDctvG8aGTEbK9SUFd8RfSzqvAekJAokvSFK3hdLC8LjrAGvs3SKjngu3d9zKAhANLn7iZMg4ZV",
  "key21": "23sRa34fi7W1fsLke7koSzs2pPaYikwQxG7JFKQeCjjhRMFiGUwYQSYALp2k1ULuUrzNUZeibHUcuv9w44GHxsdQ",
  "key22": "3daLQXH41t3oa7bi8SRQ5NM2W8YQyoon6fjVxPrSB7B8WV3MYj2xDQMJf7FLPUwGKpWhVLvbQ3BoD8Ttsxh3Zdas",
  "key23": "4fXsvKV9Pa1L8svTTwLXcx2MuvvVZYtK2yK8tpaB48ADc6qX63cdwd4ghMqvM67pntros47skh9gvafrWfSv3a2U",
  "key24": "2VdK2YLhHJcXwH5mRrbtNfnokmkRTo8HXimCoNLYDw8WQwegqwU1MWrMqGwwFzBbiq3vz642jbdFah9dmc8d813q",
  "key25": "5HYniamJk4ZVoM8FqWgzj53gvCc6v2X6BbdH9skTNoyxHT5ACNEWzyGhbtSxC9GezBTWvGLE3jrKLFzPnb3tS7h2",
  "key26": "646SudrtSe8v4z4ritBah1V4h4MvMkhE8JS8esKxjD8qAy92h8u858U6ixteVP4aCfjmP9ZcknSc8ctuwuLwA9bk",
  "key27": "5XZyLc8LvHiyqxGeK3dLdMBMHiSYQPmRJhpjVRRfbbmVVdQ3yPfeE1rErinJgJfShEbb9J7Sm7h6D4VFEghPftXX",
  "key28": "4S7cgmmXi8uxsWqP7iyvok3gQTDLvr7apABrLr6rJfez8QfNM3f7GvqpjVNjY3U4FEZHQRmLXeoymvhpjLrA3Adg",
  "key29": "3HH6F3Tmu8WgHRG4y3zzZkHzTfpFFNxwiL3oRYfJtdP5SrxaMjKW4ALiZkKDWetqrdkd3zpgjh3D6mGQhtJNszWt",
  "key30": "5rtiASog9xrzmJK4oDQddRuqcdnrL8DiRFB4cNvEcLSXnj7JqEcK4BHDoopfV1Cka8jjww6WGWduaxuZ6YTZdJTZ",
  "key31": "5cGzZ2nJ1kRSYnk2pmV8N8ZKKs93TYxSc1wJMdqYVKc69D2tzeMB2tGqB6MdypM5Qn8KHS7SwwdRMEb9R5shmfp7",
  "key32": "5pqXxNsDKsueCURH2smi1dFUQZwETMwdpj5w72349CnzoM71jwgawK4sMJwuUpjVm2Njpc5zQdXVC7eU1LzWD5bh",
  "key33": "3EzRFGeY15jFW48yvdQrpXq7FefvS2kzYwvzHfe2ic3upLq4ednWMrGqgynDqqE8Lvka6cVQ1qSksBHnLasjnjwy",
  "key34": "43BZb66kRr65epAdocmy3jKe9VRwsA6qaz6m8LcSP5QSsoHmszqC5kHysG7a5uJVknP1hmi7vWPfmxEHvYHGraLv",
  "key35": "49bNBWSSBfqceiGD2GEr5FouGB79qgPhAR8SuwXuHq2Zy47ZGNkgGak2wB3bDWrhnH3WX7gnFJ3Y2LoF1BYpcHoY",
  "key36": "3w9oFKjCnNPvMMFCUf9XnymwaDaSDqTdpYMGY8EskwLT2NvHo4BArekgBMGRLEiQsnG1MKkCM4HpFfb8CwX34tXB"
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
