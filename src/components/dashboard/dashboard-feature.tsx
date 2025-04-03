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
    "5Ti2cWBnPVc17atjZrH4ENEVg9yozwgq2aj5Kf8rbUgLFnUKGdaQEezcYB33uUGvimJbpTnRHPSfmUeSB2L81j1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NAaKyni8VJGqvgrFYDpMfCEBYyCe5oGG59PbBP4u1q6yNtJQyqRE1GHQhJHzX4mu99EBNtMmB515eYjh9tFEGWK",
  "key1": "51BAAtZjFfS44KjDP3YCyWhyG4Y9e4EQCe4hKroA53bJcuZJtZZZJKub71JLZ8FeXve4DgLojDqy4SqxYJKWuTwx",
  "key2": "2najqAEKHN6TBWTkSHiB4g77Q7FKmZrnPs5a8qo2Wwb9ed2ZFEMUYEvbeE2wsnVp8XmzADiWgWjBGa2C3FsQ2UTB",
  "key3": "5R8cNQZET8AHmVN4GmvPJ1XoUeKgPWzM5gfkf3dJuumXHkGooJXiBK3HMcgkRSbjLwTMTqEbP1SvH7CTKwotrm9s",
  "key4": "5JTnHiWVNqjorLxMcJ5NuciaufmYG85vUWbDZKuXoFYeWnH73MoR5TCTvUgzXVSZyKCatbYFZ58sPA1z72CCjEot",
  "key5": "4G4NW891HEaVf5msV8hojLaZivjw7X1tMg37mcsLtXjS9KuqSh2GmkotEDwSr5JgN13SuFa6Fa2i6L5vcBvSKSiY",
  "key6": "3jzAsq5TZFVpGzyEZuY5xKBiZX3RmQgLCPhvKqujZ6eBsbL4j5GjTx6rTEt58dsqVPQ3gFjsd8Dz3ZnuzkwEpDJK",
  "key7": "5iHZRGSstWnmzwkKRQALRBXUdYHocVj4pnM6WmF1VkeMQ7dVPY3Ac7bRBunY5ZSVmBqC4rx7Bghn1vZMnk9dHoSc",
  "key8": "osnq37sCQtoH2HWXKAMzFUwXpEfoBWK58v2FgJuMnmctgCRvpSzn7TvNxEfj9DWLscmWHEC8TSFMYix3agC1NCb",
  "key9": "4fmS41BEy3YVjdcaKsemyYXi6v2Phjq16tnn3tjpY6XW7UbtniCnUSWJfhFbGdHRVLYo1BYA6bmHgnCfdBdTeaHC",
  "key10": "W7NPEuwa1GNpL224caDg6UMW9e6VVe9Xpr7c5kYg85KkGAec69FQ6spi4arWHD9kcQyEspetodKgFUaZiSHYxSW",
  "key11": "5jzKMsSWvSE3eTBHdn3RkyWgJjFWzzsQrvu9XBTsbBzeYkakFpEV5MzFRJgASyrsiFySL24pkcy3p3Hk9TEApGTw",
  "key12": "5vcb8yDbPnKmo5FxsH2MJDZQoWSBDhkDr85mfwkviPciecoAVNY2NvLtKeLNmGHFM86UYNXSNb1vpU9258ksNDyt",
  "key13": "35uEmLzYbvvG2ANeFB1DCkLn4Ja81kiDimsFTZnMHQDVgXatLMwdPd4bsrGa5zWy9oQzeGM1JrTcyDxwo3XatFBv",
  "key14": "3vRPdywWJDpuERgDASuqyaxYfLn9Z2vUVcHuXw4JD75TQ5UMtJoRmK2QpyYWkoqrsmPkm3KxkrgVhHkjJ7tsHLYz",
  "key15": "2hSguL59U9AVjfodoLqeQChdVedABoJjwwBtNjrmqeU9N5pYwPofxHxAPMrni32EpUXkXVwcShGjZWBk5rBfGuhu",
  "key16": "D6opPmPFdEFWxJxBDDKrSKmRsBdivNrH9DuC5jPfgeUYWypgmAu5ApCfFGKadrsw82GFFS4LZUyujDPgEzK8xH2",
  "key17": "2f7LDKCdsnoeYE8F3hu5kGiPQq4jXWSXGhyWeMKdhA1rVHiE2xe4ntMqeZNMTa1EjFiGq7VViaEAdaiWybwbj9Dy",
  "key18": "27HXLwd34VLxjADUTSrzuGfqiMcfS3pytDYipXNDwVG6EXRFQifoxfybj72i95dfShyFrMaDi8jH69x8M9tbXQxR",
  "key19": "58QHyGT39KnqMWjDfWB2bBKRA676Kjd1mHAisGXmT1iGyZggghNFNXC2aYq8U4EeCCUwdsT6yUfHoYyvQ43Cs9Zb",
  "key20": "PHw6LGo53CpvGGvQnkmtkkBhFMtHCwg7hU3A8o7vRWDyahddvKpLyUQPJ1WJKUuzatcGxqQ53fncHoUxHcukdkd",
  "key21": "ubNgZUkbWoR47ZUcGjzkhY6giFRejk37phjnJ7i6srQzYPh8L871SrdyiSmFPA6iZd8h6NvyzRNsKWv8JBATc2s",
  "key22": "4V6HA6iXYmuyFE8c8ruo9A5t5tHUverctx3hJVg4oRch31vYj4UckXoh31ucqhEZ9gz6QUcm6nzRMajXeQCdoiQa",
  "key23": "599bf1jk7hqj2TDTgXMtDLTfxE3BVmPtz7KeRGaJU8eubwV8RoknMWonkzFWtEkMKK5XJ7xWuY7K14LaKRGtHe76",
  "key24": "2KrZKh4JDFpvXn5hBVTsmUNY943DWWV1GADZw29HrNhtYcJNsM1ZTSufovzHSXTHsZtvErUUuYy9wWevy7Dw34Ns",
  "key25": "5mJXA5jY6aRKDWftawKwZqvxayFmbEeYJ4rdvN5Fw4EbZbWumL7Ns1grVuKGpEJQUgQ5aZMxmUmBx3MXQ4t7qf5p",
  "key26": "2r1yqj9X84tCiUf7WFpLGiupQXDq3ZbNWDNwp8Yk6zhj3YMzN3FcQB9fkboVFwtfH7GzuUzFkaqkmEaEmEWPqLa1",
  "key27": "3ukfmH2C6EXdxqUZq96pkz8Xo5ZwAoXBxni1W9n57X8dNjK63UydGqHkkK7ip7Y3YRWt1tcjejUpdwpU1LQ4rT84",
  "key28": "2upY3wU8MmGywkn3vKMK1ZuiA2oLP8ZZ2JCMttSoTCSJErFPuyBsUvhHxW5RiEZCofEQZY1LA2nWindtf1RnWkkL",
  "key29": "4N2AYB1ogN53wZp26YLdnwkLsjLcUmvTxi86EKEDMM99ykdix2U7FfPnxXxgMFy59YWCvMashjHRgpeVH4jM1bjP",
  "key30": "3MsgGKf7Qb13A9saRna4h8GrGi3EW3U8m1Y4jewMPrjoWgVmZGkDMTrf1v3Ad3e3VCV5W9S4ywMxwCR2kFz2XF13",
  "key31": "214oPX2GTTH2PsJpwey1gzQgPYrbAcX6omfrVJ3RQWbPXEunivf2M7qvjHsWhbMof3EWhxkFr69pBwA2SbKZqsNm",
  "key32": "35iQsfSRR8bLpq2rsibuS68TebkVZuSSRECNtsthUNKsCkwN5jTSxLfEQ9pF6K9ZLHLswJYrJ9oagJpG1AjmSez7",
  "key33": "2q9WXkHF7hqH4W71aVzSWTrtjmgyqpqqmgCoMosNufnQbm2NWuTfRbNdXNRTSxvbVF1TfUFHttuAR7e4tn8JQTHR",
  "key34": "2fxxiFEA8St6YgN5TPbZVH9mWeb2wFZSSuL1b4vVAX5eF9nhVFkPDFezWBQGJjXxKTnR9jsTWCa1XqdNfucByYXm",
  "key35": "5dKedY4CmUmqFemJHLeU7Z25JE6r8Gg227JmmXfe8rqKxu5LPh63664bwqA7YdZmGh9uXvqcEHBgqdMCjX8WLyz4",
  "key36": "312fc52w6dHyEwdP7sF9YiTp8YgiYxFc57o7bLELm2c5LyBNNDGPEQnbUoPEgFoGmxgJsvTLbjT5aRqrMrgzuA23",
  "key37": "2m3yYpC7kht9gaLrVQdDTAYEFC8gukmtPd9tNE46vKHDkLySpQLUEnguW3WaZ1ddsji2Tmgke7NfobnTBYy3r2zR",
  "key38": "5u6qzZfXtsHWLBjbdHwAWA3udAE2Gju8SyFX2wiywR1ZUXcHf2Qh5j3GTXeJYAKBteMjQEfzKjhbirwW8NawRf3r"
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
