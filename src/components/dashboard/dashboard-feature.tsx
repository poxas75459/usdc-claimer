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
    "37g7nF5irxcNWUXcjPUNhg4Y4DjshC5CRWdYuofzXVmQgZLRQLtRQeAKPQUQdJbPqHkmysauX5rJ5BUzTu3PnpdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58krgw6UJMoYRFLZcgV6TJ7CpcMCJ8BsWtiYQjWnizLCecD2tVEWp6fZEth76BvPftydQB2P2tDv2cf9jTQoK6hg",
  "key1": "u3mr4yXQwoSPka3o9P6o69gUDmY7xqjs8msuJ86aW9QbGaQuhkZZUzroGEUq3GtWyYd7F9EEeci5HSHQRw1s94h",
  "key2": "2SVe8Stawa9k6W3i7En78KdLAQzzGjYQ8RqTeNKhDqgMo3Ji1YzWbFv6Lgj4Bv4wiYkrjJWBMH7B4xVPrB8qfXnz",
  "key3": "36TRzZUUfmpMJdR14jqT17AJWJUpdCo33R3F9FBtFDXU9rwxE5TXZnW8rtMLo7J1TPR4t82GiV3zjzYnWWfiNJpQ",
  "key4": "4fPTwqQc4AQ8YJKXWWjSNAbGm8rhLjgSencjDK7zxs5Z5ZCAh88AB3LCYA3YK7aGvbQUcX2CN7NZo8Ny2Tp9Va3R",
  "key5": "4zd6ZKMWsWgH27ZoP7muhR9YnbD4vdMF68erhvH5a7YwdTpfAasFpwEj8sZwvDezTryPZsC2a66zwAfgXasjTCZW",
  "key6": "29BGbcbkMsm6h7mUKB8qGLK89UNNorYE1zza6sJohineoTDs89FcX9SrcQMWwLBe44ii2t9agaDBsMd5iH2cqrWi",
  "key7": "4Bo3hZz82PdicriMbJQ1oTgnHyx18uPFman1MEcQscnDWQRcX7B7KtjActSUibJPqt2GcxJUwbXcyQt5GSg6cGt4",
  "key8": "2MbQrCdJ6Mf9rnuXeHpSKzdDARjUhQGGSMYDSf8qCyo8hnKspbiJLawxbctJxMssNJd8XnKYqidQwqtqB3Cx2txh",
  "key9": "4ZTwmdZC6QPG6i2G7MDvKi738MH21eQkCvjQk3bAdZzFnnKCdPBhxmS8Eu9r63QieW6ymXUBHbBm219wLXEbqAEt",
  "key10": "2KckUb6wK3yqDX8mZEZEnJWYhTWpYWyX7mGqwvetDMCAqPVXVYLm6nXzakswG7xQbSimumECRKHCXjLvNEebErNt",
  "key11": "4YQJarU8ttBWyGDgPrTsWHQBU8WqMwiCAy9u2QYQo4GRKE2bmCtyQ8ny23WMz1hcum2GHFctXQXSgCvMdSPbwhk1",
  "key12": "4AJYJjdYcqZL9bDN5VJbFb2GseygztdAsrHS2ZuW7xScgwJzsmBGXLwuS3t3R6KTvBfbYrGGt6w1RTifPhGSPZai",
  "key13": "5CN8k61TZcLvYrctmWcSDtgN35EVjwxdWsvp3px93QZEQSwcgAvG2FspWnXTNRaiMNyAQzVK5Um6HgkneXpBqaGw",
  "key14": "3JkDRgzFkCLrxkZ99xdjjMvKgoT1CxjYPipLhmFxkR8mmA8xZbeuTFXE7aJdG5FzG3yJuWGvgo2zUYMdQu7kDYNW",
  "key15": "23c1Xqz3ugKPtuNPa88GRYMazLi5819iaXhGDGw3Tnjn1EYAb2QwnboqKaNbBZP9EZE7SDXMEL6b5J1VrWRFz86F",
  "key16": "34YKQ8TniBZGKvqx3tXzwPvmk5WgwJKJyPQgdjtfipCKGS9NVn1AjNJiJq2XBghVCqGdSnMcf88TghfnkvCeEEfH",
  "key17": "2nHAPk51MG9ZDmMSpNvhi6X1U7UMa9fig7yFBDK8XtmwGwVqJdVy7JevymFubVYQfzPShdstiwn8sLhb9twiHQaB",
  "key18": "4iuSa2DEQxLVDqyhiRJiQXGthg9BvTDtt1R7spWpkQgdBPZv72EYhdoRtsmTVW5QUXxpMZkwAwxpRwx3eSsnSfrW",
  "key19": "61MoFFrcPFP1cVXEJJ4CPRtUrAifYwoq9VGbvptXKvyMrBD1JRokqRt4rrcJXLQESjAa3GtZG2JJw8HB4Z2pGVNR",
  "key20": "2ovdKqtrb4pX7fJc9u2uoTkjHV8XLNRRhfWAdU6ZgwBFtfsk34uhKiyDDjMritv8LMD2bzo6Ry7RJ5B5L68nqFeX",
  "key21": "4EaiisZ5vBcrTuhmcoWqdBGdNAWonCCnbFpjoPMuu4Jgmgj3iKdycK6zQmJddLTPfZ7eoQroqmpbamFQU9XsTHS8",
  "key22": "3VssFSPkFQddmCJwYNWBk51T4FDV8jAw3jyf9jSznv8uXZWP6sGT679NtgG3sQzjY1WXNMBuiHQnYwzoZocAPKY8",
  "key23": "4CFCnkHPnh6KBrrsivMoeokmDwCvZfd9bzvY2KAEd8hojcaAs5fbFvaZ6wPfAv6cmYXvqamtwy9PjZmuHu6qubwi",
  "key24": "36t6Rcf24xnrC5REkjnXQtiRNHST6ab8MeH1dzEkCseH1VE7J3m2RDV2qi9qwg3U92dkfwWe41FB4mBLjQfUNwp",
  "key25": "4StkMM8cKcXKTwo9MKvEBXDAjDfmE1zVyLXcBCChdtYPYvG8LKw6y4Ad6LREXZXnLmAanyZ7zHztPtVTEi1j8HrK",
  "key26": "56wdPQfhss9r8qAa53dJYp8rwtCx3qXjKCFqERApxpyAN2oQBFqb17rQWhv62r9FakusEqKNqoaQ2FxJQ4PbN4i9"
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
