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
    "9RmebixUAjD51gR8n8i2zebPvJGncBcNHAVYLqJ9t4ruX7DnSpN7YTLy6fgUeJJGnkD5FYGyVfbmMqJHGGvkuR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e1zfDNQDHtyfgTQXzighcRhfEHeNKTYPTK3MUzU47X7YshiTt6V6DXxvBDLR3QeJZGLW1a2zPHjxFxg4ZuwRxQZ",
  "key1": "31DB61jdkf6Uy6dGx8t4wgApoYgSqsx2x7gWUEwwXwdcr416reBANnSx2XKLTKZGVRpnYDfz57p3V6ZLfFmNBSSB",
  "key2": "33v1kN3aP7qgTp6gWDKP92PVH6dgxHAm3nNcM1JbaenJsSuPQRpJsN5s5wX3ALgVgVWVQjxBoZGXP8NzGpGB1rkN",
  "key3": "5pcYrnzaMNYddvW3P5m2Ethr538kqGGqiJMsX97dJWsxcMQD98cGi3R7RpLUc9xwBiTWBiSzQ2x7Rzm9s95BSW9o",
  "key4": "2WS9n5VNLP9ndSyrN1gums7RrydwHBQQbV5HnV4eiYJMuuLGXuur7xySkha1WPzUfPkLqH1kL2rdKKJmCQZAGZtY",
  "key5": "5S6bZZ9J2oHYgzy5Snr3XWiypABy6KufbdxtYPsthkfyMkLEXDqDGdwJV7SrBys6oujqRuDWuUPL6seoiR3psNFj",
  "key6": "4nrbP8qtnbWWeTGdbrsZKXzjMh8w5ZMitua6FQemawWMo9XHDDVCCgMYFdZQhbaXX3AfpKrtpfJ9LhdH2Y4XPpSR",
  "key7": "2ZyDbATcK78XJfYKFqWFYgnxzQ6Sgb9Zs5cLmPTvEevxKk7ouiX5tS3SUGNnwSMaHLyJCvg8XjWj9WZNoUen9FYh",
  "key8": "2NquYQPwod5ZyVvddFdYqBeZuSkVNSFc6MWgFyqjWRHuNSJ6WPdPVtuv1KvnUYz6VSNv6nzwhhVohEdL2dtbtELv",
  "key9": "5zXY2rWpA4FqpNWwgQ9qvSc8ZCp84fvFCrbPdh6dGzBWBa9m4fcmV7ki8MH8Ux7dJyEd7p5Xd1pJYLEAG2kcipBB",
  "key10": "65qS14rMVFAoJo3xgoe3zxDsyaSiaCBgGGPir4ng8hL9QPraNR6NepHQmiYEfFjYm43qkroGtabD9LFXHqhQXU7m",
  "key11": "53HV68ecMH2DMZ9VSxgy1xQZLn7axaQSDnVezbxa3s3drkbuEqSc5SMfzNQzy52mY57r19aTL3oRvTwavn21V7fW",
  "key12": "4VWgmRbJFTLaPt6zw6rsu8EH5sV6NgM5TaMWzq3UvJseMTe6bncSFhMvU5qmRCNKFNborxc6ki4Exj5osiA38ovM",
  "key13": "2CxshP4KA19E9fExz2Qg6UPAztGX3mcULv4GxLR9Mmxb2Qm2vydLjnhTtkG6rmPCnaShgZVHM1xCEeWvfvWykXse",
  "key14": "288v9KWwcrSWJDn6PZ6YyRPzL7DLge4izDHMDXXXrz4RkDvTeDqb1xaSajMj63j46pTysDhaBC1VXsxhg7vHMQY1",
  "key15": "9AmkCSbz9tQuBqaxw1LHZtukV26M4cdGH185R6iuJJuPed3aNRBdrxKCdJFGFeSW6xkuWK8BNGPhtPSvsnewRwN",
  "key16": "3YV3nY8eQcuWXDAo5T1FfPxihAeG83x8Frtz76P9MbxBGZBtLBp8RTGbSeRpGjWDC8wUy5rwLBsN34GHctczNFy8",
  "key17": "4tBrUr39JMbEpyy5PDjuwak73T1VCfkfooR542RWDs2SiJqSFxXx8UgxHuxTDAwzQg2VNuDxHHSWSMJeR4WfFkgf",
  "key18": "5mFnoRBc9u6nWjTyVYGun88x2wG65Ns8nxDWv6jrNQ2Ucu39rHkgKvn9ZvqZXfpacZzSJtwp5j7q4J9LRSmFXhhH",
  "key19": "2XyNAg2aF877ayFEevAxEHi1nEWWJm76xxHG2smGEYbtdhXnAJ7PypKK1cX2ypqQfRCZaURkWnRfosYeERFuPvWJ",
  "key20": "458rMQXPgXMvF9ctKK8xZehu9wUESoBiH1XdZYGqthdvSJPq2o7RERAPEKgmUWqQ5bchfzX78xtBzLKDZD16run7",
  "key21": "61GKSQ18HGUqGSVSE7kmPWtVe6veEjar7oV34ZmK8VL5fiKVKHyUJRCErvjmi92FB48XPvTSxD93JaXc2jKeaAsQ",
  "key22": "5dBw4Azxxh2avNkLrBk5w63g8ddyfYFWKbupfGXVc9NYY2PnqX3m5scygjC45sUnNU4rsRPDA9QvAsuzobmZxYhb",
  "key23": "3wfR6x2yNHFYc7F4FXBwPv2FYpuvEfbbDUEQCfx1ruvxgea4QP3mzGh8zzm4ST4L48rKY3ru2FbVrSjZ74LFEKEU",
  "key24": "2BrunuPwBszcsh9q6gXim6inTsD7mfG7kAXjjwE5JT6SgpQXMhv42GESiax98Yi5n6ZGx5hMhMLZJ8vELjr1kEyy",
  "key25": "4fstV296JxupoEd2VU13a9vY2L3yEVoo4o2Xscf9PsGyEHdiC8mY32Z3bLZfNFzSpznA4DbmjTrhycJckd2Xz8xL",
  "key26": "3EwQHxx6a2VMycJ1zt7o9FC3xuseY7wLxWnAPcY5abEsFGTv6tm9sFzHQW7QGZD6iuApA4b7DJ5bccHrr5YaGbsV",
  "key27": "3kgDRcjtjGsAcH78gFwiCwtkZ3mWvztjH5epyuRsXGj8EgnnBVXZv4UZ5KJTzeWdirkVMvfFYPJxEBaFMuoQxSCk",
  "key28": "3r7Xf1v14k2zb5EbjtUxp7wEELZyuJR616gwcYRXt1K1HxieGyxzgCBctrvWYjpqHnSJ1hzvJ1Lq5kdNtJwfU4P"
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
