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
    "cmiC3ZQsVkjGu7JqW1wuhNdGzxCkW8Ky7siyEdPn2Ac9ut4Vdq6StZW9PCypF9GCaD1hyYaT2iKtXPaD5iBS3pS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c4WepvG6ySeUVoqSNWDCdG8KhusEVqUNm6v5oj2NCkbX6EgKj3rCs2xCupVSzBJshX9zZYB89wVche9rQpjXHRo",
  "key1": "qpR18WPCJ8dGe6YGnvc9WcvNa78fwtzkjFfYQwEKxyeFSRb9VguYbFxrHW7oC2rWwr9cqpMnjW7FxEenWcwqbAg",
  "key2": "5pqH3jwtcWZZx6R5MAW3pq6yDrohVch5wntP9k29BunpJkyCkfr4RKvPTJUCR6Ccq6kZZw5M2jcKLcGbxPFqWbKj",
  "key3": "4hk4qV1GWTxQr7XgFsC1rAdzkH5Rujb7t5nML99CN3szDnjKBUfVeK9u75DCVPDfsCq9EsAe64vj4mRneVjqyKPh",
  "key4": "pouA6PRa9BaqsiVizbeiVurtMvALsA7QdgkzsZEVzsDLUmwqQbaeK2tyGwnT3PnbrHJj6JGgLdyAYy5gQdYR6AR",
  "key5": "5cFNWuvWbjTGBDpXye3bJDv9Hb2dgHsukDpjZGvBbsNqYdVmiSb4uSfoopvBUseQg8C7vqfxWgZVk1u7xo837N6Y",
  "key6": "59XU1xvzhUgcdKKXyNJPUDD7Xm2X7hTMXx2mCwgdBEdibRsMsBgXChjjFcTq9XdivbDvzHtpaxhS4g2s7vGivkkK",
  "key7": "57K7DNfAzBG6fk9jfqgjYYrU21CTqb6tRt4KWvYq2kM19AFhTejKndvRyjx2p9HdwHBZ36wpGbfMNLxtbeP3BTp1",
  "key8": "3CbViLpqmqfPvN7iGyMN8F5fCwzxPFmqMkzdU9sThfW9tajQ8gTvmXsKCXa9Cjkrw5pbHYZetzmWaaK4KCMBNra8",
  "key9": "5wQpm22JovWJeJPK5fo4x2XKVhA4UQ1MEGMv6MRm3hn6uHLS8mQxXbYdR4FbUcbGb27YtrCgjDZD5ptaLKv36YPv",
  "key10": "4jin4KA6UBQh7s4KbsY4F2cfbGXLZR9C1Uc5BH48RrvUGUKobAZdZdk5zds2tk4F3ubpUAduKh7KhRyFk62xzKT5",
  "key11": "5wyZ3FtpcDntfexJFNjtKPgHhDgW4fMzwSv19ySSsHn9LVSEfooh89GAcJ7DJbed8bfU8LvZv9cN3GEMHU9fr3h9",
  "key12": "62xyGoPFJz7u7RVZDHN9sw7YKaAVgjtYgHEvxhd8xGSJzL8GQKkXacFFNbg9sU3eQS6wqtRfgbEaYpK6gStXyv71",
  "key13": "2CdAtm9529LKfdBEjcvxqax4U4VWmTb6Lc511QNZijPc4suyg9UApWj19hPEMS66RNrjzNVs9gVopAm6nhwjJH9c",
  "key14": "4TcSgCyYnS675CpHxrpWBAVUrFPUukVQT9HPFTK9C9C8WV9DjPKBubMawmyerTbvD6NKjUvJ3voireqZfmN57t4k",
  "key15": "2k8JbN288ycX2n6beiCR3reU5EbciL8D2ULNybpazM8AcT9Mwecv99Z5j3EMSXvfkBrHvfmWBuvgEa6Yt4J7vKo9",
  "key16": "2sDJFgYPs6KpVdtTaJBLXJ1YJQDNtiwhVt3khNUGxsUu8WgL8J8YAVcT8J5cMbBJ2VGnCM8DnhZXFS8EGcSNs6GW",
  "key17": "65LKU28ozbRkjQCtTVzKF8jyYLWKGKtTkNWK7ELDcityKPy1SRaF7CNHZoBn5WSFNKK7LLvJcqarnoQxj8Fz2LCk",
  "key18": "5YNmhWQGtzHy8RSaRhuwrR9JWM1SP9rnS8RTovU7wP3MjbGwZ7YP4scJDBj3Xk6VdMSzFHnmrc2kGhbjqsFf4GVP",
  "key19": "29Ygr7HrU7SfcgRxGZ3bt4stD5MVkDrbmZ7PgcENWQUK8fiRnNE9GRXqWTRvS6c3FshAgAAN27Wt1qzdbAKSKQp3",
  "key20": "3oCVxNU1vi9x9Nt78b9X9qAJtkZQWYZ142WHKwPhWdChXpTVXMXqNKVmW1W5SG9Mdx1xAgj6fzZdcbywLbAG3bjm",
  "key21": "5EGpoMNr7zo14LWCbbzYy74gUsapZPvmoL9BgoDRTcVFZeCgTMALfzAHhEkbsaB5R4LDG49TZsSehRowx5g5WzJU",
  "key22": "5N1QHPuPUCUAsXbV8bRdafRX45EmKWUebpSbdDisvXVtkHZv9MCKugyA8mRW9qpBn4EBRWqD7XfpaXgMkzV5TmLW",
  "key23": "46ZnVThATBXrJ7cLBctMe7ERLyaht4TwGpzNUMSKUYquXE2m6PBrxH6S34SUVeAKrPsLXV75f1j7XD7PnSqUKTnG",
  "key24": "4BHHW3Mpa45rrbi8cQk1fLZWpq4cF1SX2q1cK7KjeQZkqUGkEb95K5qmg3hUhBYWpCEZpREWViADYWissDheZPgE",
  "key25": "32Wg5UzKyUaD1aULHirSZnRAyzLKPQ5qaUwimZV4gLXzbS7ohdKSmpUkx2dTPHwdK76y49q3irzKXfsDc1yEqj3j",
  "key26": "qc5mrEWn9cWViNFeiNX8LvhkXr2HS3FgX47Tiu4YBagzxDSEb2ccV7H434utKPQNnXeEqoCD8mPmiMM3A6ELGbT"
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
