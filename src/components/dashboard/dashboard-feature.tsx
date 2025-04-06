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
    "4YaXEvMsDWoSeZNvSmf9U9JLeToZukiicsaPotn7b269ebZ6m1DBT2Rhp1dRsrCBQEdYrzTwYjrYYM6GWFaQqby6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LG989nwzZbTwnUq2ayCLNWsnrs3VhLjx1wUoGCuL3AEQ1o2tSm85DSTzmHC95bQYJqBbFavvregyrhtgnf8KHUY",
  "key1": "4RLyc9ZunL8hpdGYgHce8zVN3LnQ14LidSYRhcfLARGPeMatLYZm7eRkMGZG4k4wd6EvV3EZS38oXSs5a69LBXsz",
  "key2": "32dUhdeywhGWjAcQmUaR4h6eRZtMvNnna5cQBtzVZEvUhLT5eDcNqmpcbuPpNhD7nubCk9ryD7JQvJiEu4YNgsdn",
  "key3": "2Hg1HKPtd2LgrS2ASte2xfPYFZNbEhWcTVtp1CDXYHdypCGJ3gXVP3wBofPoLDEwL5gmmFG6vjejPr714xXMZxZ4",
  "key4": "2hvj5ndXZyWB7jPaPSTaGGGj45xUFY8JJws9jMe1XtcShyRD2TuwBopdvuErKuZuQNZmQQCG2WYRQai2RSFkfseD",
  "key5": "zwzQSFcA3W5JBf22LPPZxrwMYKs4CoMN2tALZLqw4wzXyEExnbMfV31uB9ax1jhdLpm8YLTamoLh3VhXJYPTk2z",
  "key6": "4zRYnepaTxzi7h5Es8ePjiGmjgy2zsKv8qWHd2p8xTqSpa1B7zYmMepYigFXhwtcqQ6UDoawinrxQGCGtKEBq5Jp",
  "key7": "2BhcjYJ31aGC6DMSyPmzAQ8Y86hKEQoXVaQeKVi4yaTCyBdtqcBYsBFbpPLxFX6geYeoRjYLXxvBw1uZNDfnq59c",
  "key8": "4ienKdPG555m1ch5qM221cz3zFZCYjer3ArnZnitYLTNDk133wfKjPXj3T5TF1YnafxpHiXvMmYyGwZ56FMhGTwx",
  "key9": "3FidbxxQhJbP7iVed8bFQ9CnLefsVn1tyy1TV9qukZFfdhoXwtEbDc3w3jYa3NYzykRdVJrBsgk876M6xKvvXzsS",
  "key10": "4wKQgaS6613noMEyEwRbbo81BDz5CpqSbPozBwfAPtpPUQXsF9makrGA7K46hTxCrTVYogJKgmPx5n66qJ6ayuDk",
  "key11": "3sBmph8rgWnoAsZczGbJ7625AFWHiaqcaQETjqX8xW88CUuZwhH7QMNiDVm5fxERt9M97YGfMZT1zeGD2uFi8B9p",
  "key12": "51JXXcHZdZoVHDkAeW9GXTiDFtnv4oTSbMMJZfk64tfzAjAra7vMyoYPj3u4uh5Soi9rkL265fBtdNNxiE7zmavr",
  "key13": "3Hf9kWVgtVYVBbUKsV8EDwxDfKTVZq34btzR9ZJxVzfSbZ8uHUZWZX7ZHNAoTkeRvMpdhZd7KtzdyKjYisemY4CT",
  "key14": "65X7RYEPvtZa4Y4GHGnnXQxQx44pd1ADMG3qn3fyPjqtAC9xQTEwCaJq7wWsq4qUqRsh97S8V292bXGJfXqHgPgN",
  "key15": "23rchVx5URkNLDm6jdTxw4hq7UC4JWUhHzjUMKGn9PxZDRk63dr7wVqCChpMq3k3AsPJgunCQAYuQQRREwjrPuEZ",
  "key16": "4pviyi7uFmc88EqtREwyhfkAySNu2thGssdBFABMCJQrPyudySsWFwPUECsAKyjtPKkJk9UAcRDkjP2kDJXKmuGu",
  "key17": "4gaZ2TvzuGJWMEvyHkG77SzXikRa7sEdt5a4mexHn9GjFnDdaor4efxb5xH8Rkcr2WJ95nXaTYUhhJxVkGaXL2Du",
  "key18": "3GNbb3d1MKczRfk81Yfm5tYBF5rJQj24tkh7Ad4RNWjhyA4u5rRAYAcsooJ3GWK7ms5WMnbgKPpvFaeLnafbuTEX",
  "key19": "5tgGzva2pXihjSza2bMLPSG4y49ZQeRCXfVcZpagTQxujBn5bq7PZt4V9FYKbUnJuFcTFMfoVazF3yWLLSwGEGnv",
  "key20": "4tn7cQUYd6AgJusNLftDjjhzkjpmz3qzTbD9QRKF41Ad7nhp7BTcWXvFw6TjXSqvE1AUJ31CAwfsUgYktbvLr9Pr",
  "key21": "3EehiGSTbqaogQ7hpXMGXARF8S3fkWhBL8uA1WYoMvRbE8GcRdM2S2XTKre12NJmiPupjemAJMVszg8vS5HKpNqj",
  "key22": "4tvz5xUzAd8tLQj5yjvn8V2dMjemvEWHXdAww1EqwrB7fR9Gf5HDpKKuZgWZ94MSJFUYgQTRG4yXtCJkX8EeRf1H",
  "key23": "21hKW9MMDqxKDD2ne1wGnZ2a6rGGUX3UoSLDZbqctdtgCZFEksunXMgh1vuCAfCgfN1cJkEELz7xeuGrtASRDwsF",
  "key24": "4mabAQtsBbryEAhgtP2ZHi6TrXhH8DeL5gcN4ABtFneLoKzrtTbZ7suE9siWqtUjPjdUXzV3mdGMUBfdqLiSR25E",
  "key25": "qGMrtFwZzpsAF5TjrzxCKjkJvM4dD5h14jHuiho9eSsVvdxcHyCpnBFc8qpoZABb6RLgiw6KUMGM3ajZGJHhZQE",
  "key26": "3185obm5zyeexgjk1M97eqXc33ojWPmjxHFkGF5VAQ33MT7RHzarwqrdwr9QD8JMV16hMbz4s1rZTZeMWgZCQML8",
  "key27": "2oC4rnqSwpvCcqcsnMAtT54W4wwwMdsADVUTTCTYzXcVjt9XDHKbfK2ETPWAZdjFZmQgC4gbTgJ8WD2S242w1J1A",
  "key28": "5672MNtRwBWjT6m4BzmBbS9YGK3H6DjC9xhEJnjxznUMw3EL9Z8p4X9RPN7h1dsx3kmceD1LBTPBKU5K53DYRE2u",
  "key29": "2EX5J4THf9sq3SznMg86LJ7GhBvRSWTeUhVLeKWKTZpazAovmpQw4gq1bfqjBBmgUDAvhmAup6kuntXZaTKnxiYX",
  "key30": "SpJgNg2Wy1wv5hmjfVzdjR5qeyyuGBd9MJtHi1XgBcM6KSTGEtWdaWH8Rd31XRau15JjqFUqjquJtNp5QYuoCUr"
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
