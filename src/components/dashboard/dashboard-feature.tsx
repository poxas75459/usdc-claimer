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
    "31YtGmeaLbCawAn2gLVDUQiU51ogyw8Ya57KEqCvi8RGjeiZNPMmx5Wb2vupih1myPCq7SHyCyEaVcTV4t5Ed5iM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oVZu12mXC7oswHSvpvLyr4R5XX4xxsWWErT4tsByAARwA7ZjTRHWfGyyck8JwL4snFePEgqxDfje66h6YYAh1dq",
  "key1": "4w1Q6k4AZXYwycHpwvRBbzH7xXr1KQjNamG15wu7g39ZNYVxm4QQXvkrcKkCteviXPocjzfZMwjd6HuT4cTPXHpR",
  "key2": "5xyYFZhDsCiWzhWgZzobJKuexyXyzPUxmfrBqhEhdwoo9QaCbqHneiKZMTgswoGrFY4o4D5kcT99P96gc7FyH8F3",
  "key3": "5JFwHDsJfXeSok9jGQkSwUTkyBX4g25vwsr8mb4j3ziXCGFgqEXr2pjtY9BGZdKirbFuvjXn9zb46HbZjeTJwMYG",
  "key4": "5tAwFshcU5DLxi21YASWK2cC68hezqmYRFzBaiUH7fL8pRsXKGLtzVaiwHskdCAgGdPQrnJ17zYiw5WEWxGdqH6c",
  "key5": "2DVY7DKxYvHvqjHw9G86QMwW391iQi5ogf67QgQofCJ4tj5NDmXnfX8i2Cp7Z1Z9EKjosSg8mPiKXM45TUQYc2Kk",
  "key6": "3u2k4dLrdxc65zWGVJnBucNqMACaphE9XHjzhcq1AGWS4vrXdhhhGihrY1fU75i7pCdhNNKwdu7YMJKtSd2jPbXU",
  "key7": "4ZkfcmimwrvYpWJfDTKcqqi2texcQszMnYF2hkDKKuoF1Sz4eSp2hHsUZUnnniFnrV3h9Xb6dAFDtR33XY6XN6p6",
  "key8": "2CKwejYk2Pcmsq7PHAVLbW3X2b74zHky1trSp6ux2NLVVVP2Lf7Krffz4GjTr3JUJUB6y4z8C3YZ3hF8DY9kAj6S",
  "key9": "3MVhANy4Yx2VNrTz4ygpMbrSQ8vb9uFqpmQWxdvHj8x1CMFECvCi1RvooQVovY4TGTbBcBn9W6VD3ERkPjAta6MS",
  "key10": "2z8rZ1wvCbfC7GEfZ3xeWuV472Zq3wLhVGi3ZZXNk4dGwptPfudKbmmg1KdQQU4gZRtvM99eCbcfX4tyPqS2WvYg",
  "key11": "nVf5bu3nkUsM2gGKJv65cEjwtY76QA8EeL93ayPo2rsvLZQTJ3GDem2trMFSzDt4VQNNzYfEAwnLcF2HwxanWNH",
  "key12": "49G39eLyVw1q4wsGaT27e4ZefQPGHK855uiopVzg3mykpGnKhMxUMP4L9vU1W2aYesXrC4heU3HwnFoQ7pJbmWLJ",
  "key13": "38UtWJRq5SioQjq92BCYZkdrFBzv3zobnHCc3qsScBFs4Z8Yw4ExcjBKnw7aemvPE87vkcHxSRjGLc13YT3T28CH",
  "key14": "5RHbKNizKi2xc6z4xFkojzvtrC9YNbbhWojjJgiRzAQo5jYLuwYbjT6UiU2Eq6m44kj7jQ6Y8nbAJspTTNp49eBz",
  "key15": "2Jwi1jk3DswRqPbSyTzBUstJGmK3ALj4EavNtfxesNNzrbMYeVqqqyu28KA3ccmNGu6RtwfDL7GKQjE85SRa9Zba",
  "key16": "5n7be6C59ndKED6w4gcaDuZE5iXzEpaUzZ2CoQQfaWCK6vSAt1YnaStaHhNRFts2bw6QDdexdmwgEuASZTHio92S",
  "key17": "yFnbJGF1LBhGt8KHgN2aEjF8GDmqNCCCoo8UJAcw16pjCD5B4UqzK26M5kAHNAxffb6GJc2Bo6EuREn3mbYQKdu",
  "key18": "2uJNBsu7mfs2ipisguE8yy4EEVhWuFkcEUktdxCNxUsURUKqqK5EXpFsbQK6mrF9FRiNtGBKGbeozB9mZajkT7tN",
  "key19": "4g9C7wyiwhtA3bCLjgbFwGAdosZwmDmK3SrAA5ZKGLxpRvpkcfnsR2k73e1iAxz5YjF1yR2n8kXuTP4Cpo3hRwvZ",
  "key20": "2vrPHDecqVf4MLPQ6nP758RQnDL5YYJnfb2yXjg86f7fwfJeNmJ4Etis5vPmA7tDFcxQWZskLz6yhCKPSYjn6LsV",
  "key21": "5J6WVBd4Ued9CxH5B6ovj5WTHNKfxvrT1yXhGr9MAEdt4jLJ2DH7kYMvwqo21WgeVpi6nX35Up2cDDj6mTxaKjip",
  "key22": "4dVXxoYhxyZK7ehgJDANjJkz6VARbYupfn8MNTnUUBgPKTf6wwmEtWBmu6LMAexMS8KfKta63TWB49hbmkgAoX5v",
  "key23": "4Fas8BBoFDDRNmhyEP26S8XNWEBg4B56zLmY2zoF7Hz99WnQRPaSYGoxEkaRnxvdw8SzEa1e4sr8gdKntv2HNXbU",
  "key24": "4WEpq8L9PUczX4rmN73tFcHymfouvUaQprcUkZf9upY829xWLv8K4F4eMA4QSs7VcM7LPbAyp5krqoPZ5wtPRjek",
  "key25": "3Xiz7vgUbxbwuuko1cMFh2AoM1J5vEqJtu2iuX6cqt4uNwf1oBXtG46qd8kcekQwNctAFSR8dctV8xTSsUL5Q44o",
  "key26": "3Hz21V4oMuAVkUnWdpGpmGT9gtVStia6Vx1AKeyKZf62vEZeyug4Fp2FSY2BjTQ9it6gqm6c58qmrzAaRbPUWXkd",
  "key27": "4FYPKsKcYzmNWbCeLjdH1heJgd2FGMmixzWTgmjJ9mU3K7gKSoMe7SUs5qg38HBdMM71QdENjajCqGU26S1QRuhF",
  "key28": "2D4yzbeHMazmTUznEJnGYVtRm4GJQwZD6NSgC2pnVGCVaV3D7vVAsTygW4XcJBerMVwXemNLJuGjjbhVBTKELjfz",
  "key29": "3aNH5qPq81DU7bhVyo3jksbvjCZaQqxzD6DDAMUttKKctj1ZamHEBmvDuaYkDHmKoA6sZk29SHJZhdq5mX6zNaub",
  "key30": "5JtrR6BF3tZHAay1MwW6cHTWy3af52yaeAc7L7P2V6RKty7ig612idF2UgyQ6uqz1A1h1AnQehPthxMwgwcoz2rL"
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
