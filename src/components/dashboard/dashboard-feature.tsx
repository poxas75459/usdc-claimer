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
    "28Zky5M1CQykP2v1r5LXegxR2EyqqHMqfASiNztuBXfBy9FXs2JJRq4vygGmwq1YQfpUSJgYY25hM3SbSzyCTj5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C42W2zhdcm7yiVqVECoWmqSLQP3ifBSVeeeAwteQVaYpNpGtLmqLPzj3smmQoMtdijZ6Jg2MGhmPKEuKwFAam3A",
  "key1": "5cEjEuJjoQdMUg7R4pUhSEyCZPYkamhSRHBNL16Rc2EQvi7mPDicCYXNG3Wu6jSZbDMAHvZxAyobZYccL7pN1nEq",
  "key2": "3Y1DAJapBRStWkC8jSWDV8VEE4qbH715hw4FzNvnqmSnKptayjxNapFv7PK3QHBCTN9NQjvM15XkgFyiMXjFYigu",
  "key3": "2gnEg9cbYB4i7f6uNdBx4274B6FHasGzMQFg9jGSSTEL5EcrGeMi8uS5npe9jF7PJdA8EWvhZxa9a6mU5XPevgCL",
  "key4": "3z75S4xwuZZezcqMcwHGVES8aSeq3thzSfmMvKSMUiseDjnsavLZf4m29hrqrxtCFBbhvepAz99tcrVPoiLjo11v",
  "key5": "5np7BvYNzKktYSprbkNdY6efMgn8e9n6uc4uPUGBBgYmwUW85XgtpMKonL3uD7tqzTdZ6THTDjzM7PJQcEdFuzHr",
  "key6": "EJVyFX1pbKHLSDaZjN9eFkDuxvV3KDDUfVTNxpyMGn87hSjADrNKrZDz7La6dYznTc5hL6b5Qqn2bNAAMgXL1j7",
  "key7": "4VYQAXHuwfrJfg3kRkES6PhpJzUph1TdQTLEs9ECDpprmjCsJPEYWpCCXyy5tzTihV7YrQ8f5LbzyEJ5eMosKKyT",
  "key8": "2Zd5Dh5VJXizjhdzM1hhA6n9Mx2si7whXKyXTeptVXTtiiZNkakjyEd3XWPiSbwVNmdtN39CPTHmzrV9gXjw5twK",
  "key9": "2jqRFtQ9AT2jfzyhXxY1kjwWCL9DsLZrSCbq68nX4Bt75UFcFww7ckyQH2XpAkjSE9GjJJXHDrP1VE6DnqpBQCA9",
  "key10": "4vTNbsbHyzWh6DnxZtEream6CeopVS1dPAbp47z5xEYqs8iFA4etUR5XsPrphSFyXVNouPK6zgNjWJpvoSocBjPr",
  "key11": "4CtAEk2WDujmC8hkC2Q1Wr1NkKrYRUsazZ35Wrbz2vdvADidW1Upj1TgFN1Xpez7ymZzBfmTF2C4Fb72eQ4AjcMk",
  "key12": "24MLvvghPePDaLRWQoGDju8SeK4g33FhrjuPhosCHP6EBuTS5zq9YSKWfTBLqEo5JFX5oBsFdC3UAZhKFNxqZhWZ",
  "key13": "2W4UhZhoX7vX1nSkyaZTdGAp2kh19xSEf6wYQJLdQjXZgf4S6G8WC28N7ip1NhXdbZoVEuW1yonD2wJ36F7RSWGg",
  "key14": "286t489RnEYVWPMgtZaAUWFpTiTGZHWjHx7F7F1UTyYGGmKQLtxUo5Fb1LHGpEUe4GCsSYKp8FFZvxm3f9FsYdrs",
  "key15": "2JHQcqLdmTdqx2ESXSBQduvxwFFeMpQGhukWwmBiMwvgCSu3WebwxrNuFuZwyS9zSZMHhrEFShNPuTQfzqj8WwEN",
  "key16": "37wtvZpWRzgTZE6nWwmqvMo4DWfy3ZvWG6tGMAy38QxUwrmhM3m4jdUfUFmeSWkCG9HMmGg6wwL65aAA9No1xUQL",
  "key17": "5eyyhf5S3WMrHpJr4EMwctq8JukkcYZcG5DtJRTgs8PUWAorfdRhwccN2c1nGnyTdD9nEm9pQmvxda9AkbE2NMK5",
  "key18": "4gxdjZUPih4oqfSu15cLHa1uNRR6ouYRbivHQgUvU7TQFGfsdPqiam8pjZQ7sN22Cf6hdLmyioVLW7dQenKWRyz",
  "key19": "5mb1ZvV3NwhVNMc5zJUpD4rHzxR9pqtF4uiQQiphspjW7FBtibapsq8Vj225pirzVZb8pBFUVpuRQ6A8vz7E73nh",
  "key20": "3e3f2S37Ff4Ffk1AGEs17Qte1eqT5cakPZ5eJsUQTZcKxGAgbt5v4tqdz8icdQErReJraNSHUw24SHoY1rHJcZX4",
  "key21": "3gg9DHAqPaEzQnq1KDeBzThfDDKUjpsMKqtQ4dsg1uvyMwBdBv7BjCQrAEwbz4sQmKDZ1mMVXUYzG4Rv3xVZQGEa",
  "key22": "5jvccTB499SNnbMdRFPpn4zcd2Pos7NUn4DSYQJeDfDwEbH8qynEvsXujPo3GKSX3LuwKUgjayQzDjhrXgfqgYuG",
  "key23": "2JZd9CKo4iDt3CtGEkNLYRDXhXL8yvkW4qCdJ8PeHFZfVKCVcWjT63uHNjmj9kSA8Q2u5t3GnGWJtAX49XoU2dhA",
  "key24": "5ivvrC4dDwVJxfaJbDjp9nzxsU5r9y5ugK7re9ejeFfMEjLGBmWMjA19VUXmRAdqamrsUUtaXmMuH34Ufg59KwTP",
  "key25": "48uepLTukM25PDQtaa2GAYQe86NtmLJcXqCrz2dcnziS178iiBNcE3LJRRByr2vjjZh8H9LRDN2KfzgBEdhBjWLk"
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
