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
    "3cgcmjKKp4RtDwYRAR3J7sJw58xuiupweD3Pqy4fBo3CCDCxBHGdkNUV3bwbaLWzqhB5yPqTMmJb1hNEaQT4NUPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pXZwT79pr3ndXQXQDcFH3UrkhPCKzazT8wcfK1SsSRy3dyrvqgQbPik95CwskFjqeoxMhYnTp2E1cCYJ6GCd5bF",
  "key1": "3zeZDRyKApwLDx7DhXBxehJieFme94H4Q7YAtZSrnjpQjVRrETv8ib85V6eQoY2yytKrgr8voNRnt93VVVPRy4Te",
  "key2": "4ypdMuWMCrXikSqZqXYVFm9eurNyWxhxaiRhRd8dKw8aCJ5TvwWMqmapeYyX7DTCTn7PXVQzxAqsdpPXPzCafLeU",
  "key3": "37Hwph1ENSirJi61gVt9FsiydMppr1FVG6Ku8MJ8YpKJ5j8etQ2rgHWMdBNHDL5en6BreeB3BET1V7WBFb4JWRJY",
  "key4": "4D9fd4h2oFXzVVKfjXPu3Ghb87eV14CHauz5FV179g5QKxf6eK8hRXnvDAtqVT2UYUkvqkiWZ2CQj5ne3iG1NJ9f",
  "key5": "63zUBPhf9rHVwCjqxDRjSSyqEzLW2R9PEYmoNGDbHvZpVZPL1tBkzc2hB4yC9cAxeXwuJeUxZNcqwEK54sYHDLEy",
  "key6": "5AdTueqtH3PUNG9n7vTdugQcQTHSFK9kySqrhm8mqtsrbsVM5ZLWtJEhYip5FkYa8929QvZ8stduRLcYjKpgnTPj",
  "key7": "5BMQAd7BwzC4ATEzFVfcmdo9tFbe4UF2GDYZJfgWGTvEn68iyi5XoHd1cC6WrUhzfc3YTVnahYjFankstVGYDD86",
  "key8": "2TXTSF2smDNBsAe8S3zv9pRNFFLxSG8uai93EBhLcE3ZnDezoXnUFZ4aDDSiNFCEbH7D9rfMez3W9qgT8HwviESA",
  "key9": "4DLU18jHaBRbvSPnmGY1z11N1rLBfzpS1jzTogMBpGtv5bEBKVvBdFutPFPgcHyF2VCcJv2viSvDukCRUPS6Ugek",
  "key10": "5JmkWPBeWjuuzqMKxnx3S5S17MBPeJg9jgYrbSPtPi3ZBpVbU7Ykv8w6EQWcvjqR1VKt4SoGBbJ6wAg1oFE6sRvE",
  "key11": "31pViGfYu6FFTRAkhE77qUdgGA4sQb2JhhWfTAMZcR5VtGGMfFW1BA6MTjBAqbM7QW8b1UeFvHZMpUGvandp4dbb",
  "key12": "5qndQg6NtFj5XstV9QKCu91qAe2ewsjHEiriqR4PH5GbNNZ2PG325AenB4H68xkJDtZyTgPmik8e8J69ERpWk8GE",
  "key13": "ttUw3mVcnM7tz3Eap34qZfS3xx4u7nN36eh4aoaz2QEVRvwgBCtwUtzDomXih541bfEhe3AJ8VWE5PYGtFu4kB9",
  "key14": "2GH2yHWLQuKjWtXv9bTCX2eQDkSmYdfhg7dcFCXUWXMTzAMjdBzhK5xvJxSz1fnJZsn3JkaUs91EPEbWMvMHWRi7",
  "key15": "4Ly8p5uG3z8GELnND41vpQ9P2VspwC2zdFR5oKmCaHUK8uJG2tdXav8cWRMErFrmqgvDVUjJuTyPsis7NFUnXQQJ",
  "key16": "NkbxtS1SXLmy82Xqe2s5sCV4f3rEw1jefQfBLjbKMMnbPfstAt7djUtXQkPCQAjqM9PrvUzhncZY7u1X3RykPHY",
  "key17": "aR7fibEWDd4c3c5xxgjY6EjK5Unc8SqXMHHLQQZ2T6SSVi1pS5sjH5KDdSDNawmpjLPvagNu81tp7TaDrnp7cPo",
  "key18": "5U7YRoEBFTwfpuNDUzruAh3HMT5iuyy6EFKXDaYA3RAPZBS7P3mqqomSvj4U2HJJkJYwgHCuoSwdNGVEQjEjnzf4",
  "key19": "58912dj4eyTyPreqvzYf7PDzNnnHj2YqZ6AKsrxtJpHBQ3Jy2tXwzsxFLRZTZKghfuRj9KAKU9NuGYoUNk5zAZDb",
  "key20": "2483XtWKM4j4NzZnbwZuaAQ1jURmK23KXJxSQecJW8bDRuoYKF4vchjEwqyy7ZDVH5sP51wVh1iHYHN9A3tZxXjS",
  "key21": "44NjLaiEAa8QrfA21HzLnR9kLNe2rfoaf7MwQqMpWPAeyc9fJF5cmCMPxGemLsm1nXix2vHTZy4TEEtJG8krd4A2",
  "key22": "34wMRzN9s8BD9veuZMBh3mYHWGa3is8LFRgzzB9vHcekNaYrqNVJWErrGgag5u7iXWcMHr2Y66BavxftjRkENbZm",
  "key23": "4W6sRNV6dWtgToAY7vji4QR5dgNoLPJRyvRCq8QkCnpuE4mTEaV8BT1qPSWNvRch8yAwdpobbj9MBEUyQ3h6KPJF",
  "key24": "5KLyzExPkAQKkk4S5grRpeQ984BnLBL8YMjtf7Ss32MLPWT4SqQsfv61EjnrjGMfscTDKMHUNoexMSnAjhKCSiVB",
  "key25": "55tYmSYcwWW7i7udSNv8yh86EaaEv6UxNDDeie8h91ikHV85iRJzicbqKK8E8JWjQG3bCU8NuFJLrn6PkQobgy2z"
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
