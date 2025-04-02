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
    "tr65XG2XHPvxiMMf7YG9bpffggUSNetnQLFJhZsCpWXR94gxD4LSkwaAgLveJWPveSLHAvcsHxRrFGrX9wi6pJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vHgrQvDFsyFopgCQYTEVdgrkd9ev7rvxYzBVUpLCLcGuT5ZAxemKW97ErFqu2rRiQNEQjNdzFAniL8ih3V5Sug2",
  "key1": "3sXvr2Gh1ivs1sW9pQ1kPKW8LmA5KTnbhk8vfB7cN5C1VrgcBmk5KkeZe7gDpSAcn5kf5Tz3EH1NW5Cv6Vwg1SPJ",
  "key2": "45HchJ8BPSygcQVqRibaJdGfVqg92XviWRuXpZJ9Jho1NxoqxvF8dWGfXKkhQ9XKnpRGjLDNWjKWNQXGXkSTtchG",
  "key3": "4NE6PLSiBeQXmw3eGYnbWdauBLfeJZuCFjEvD5CMNiZCeP2GN7rdcrVVgZB8tE6zEc741UXGG9FTonDn8UqNkpQ5",
  "key4": "4xnY8qxJHwRmJSSiNh7uvYYDxeV51oHZa28Y6XxrAQjdcaWWRfENYz6MPP3EYN9mtaBqzAv6hKhqH8SjTF1nB8hL",
  "key5": "372EUKXGw3Kt4imkeGe7fQ47tU9LRwut2mx3isDyZA7XyuUeKn9PQBdqDmUuBXYVNUxJFzX4t2uQFVEx7hzXxFsX",
  "key6": "5kfFyAQHqoYrDsZAHMjktZnrHTM5HYMZNPANGLD3Qd3Vs3hYD3JRmL5tozo7cLaVyWsNbWvTLLRdd3CYUq8BtjVa",
  "key7": "5L1iHGGzXLeLKDT3N2jsP18rqeJwnKw31XDzNmRYbYHQ7BYk8hvSDqtTzhcnZVzFe77MqAEJCtMaRL4zgPFEHrGg",
  "key8": "5FNVNu4uKNksSyXeE2CucAycWT8wP38p4NjrbovzmULokCrsh5rvRftCqdNLUKH9QgD9uvkkjLghEYCqWQVBg2zE",
  "key9": "4hUhFde7wJ8VudwgGhmn4RbE3JjChLXpbDpejvaMBBdbnjRtXhZp2t19MaXyx875gasaeCGmoKUkCefGrAMPib3A",
  "key10": "7KA29NHjjA34Ub7odC4CKwNLaZU748RouoeDiA7qb4FuywCHffYAQU213YXTLeKmhBnhchnnFMF99sUSg3NCdzn",
  "key11": "5K9Yj7yrE7x6XyRJUKPBhxWaZm5a56DXs4UQJ4CbZcu7x1fcVAW9NKiwp4gpRFLrrgQFx4oag1stNDs7F4K3WLSE",
  "key12": "5UVag8bcvb7RwYbAD5pWc8MU6J1Yrk8gTHCmfHs4VYQqLQLiynAavbaVqa7UGNvHBHt7YniPdbBuwAtTMFiav2o3",
  "key13": "5NfbGz2Kj5pogTEvBAJD2gvrcogR7GLZZYvJ2T7VhampzfqNpCPcwYPPm3yFivr61GHF2trUDmRCQwaMe21Pjf3W",
  "key14": "pUpwVUSJUhoPfSjXwTvomY3GmKA4vVQ5yJHWCC5BVzeahyjm5fYaZuAmSHtktmroiZ8z9qb1rXLKKKq1nLbp9v3",
  "key15": "5HCV4RSi2rVCAvSKgpRPDAysNyHEkCGBhhxB3DmD36knyoZ1ZNyChWK4sowHp8kTzerCNCiDGrVobyyQbkACcV8c",
  "key16": "2U8WHjWoEou4WusM1ZaKMnUWMyjC8pn2gPRMkdD3m7TZaG2hh6UGy9mc3k9fqb7nzEDyHFtsNmddEZ6h4i3jAyL1",
  "key17": "4CH6PRnTydviwz9m6YXDi7erpvkLdwZNQRnrZM4kov2kfSKeQH6C71NzvZwNvWsYPGeqYLRYk376PqPWaXHEWYg6",
  "key18": "pr5Za1rtkA8gov1eUbi1JVZyjzM6oJ3D3Qid7p8GVmtYBAc9oUcbZ2jXmV71D3jHxmxtrcCqhsjg9J8gkXtZ3cs",
  "key19": "5Bt7MdGfAuQ92MPYfnnYf3tmyzzpjdt3vo3FCR3QccATaGmJnNMneB4JhMsU7SH2GHT4cUrWU4PYXV3BBgqPzUaD",
  "key20": "5JDZbbBR4NaGEoa6wNdXgx8KQpjsYz7kTjdSP4p5esmsYN1TxTrVAZeKobFqpGPZQSBYSKav2yPvgoxqmg5bBhNZ",
  "key21": "skepekF8Vcm5Un3GHVEQEz7hNxYcyAnCgJwTJyqCYeyBiCbBVdHvWP1i4VMje2pvV1RjmppVj8sqBxBQsxi6DwH",
  "key22": "28kY4Hj8oJtYuj4rdmLF635qt1hoX5dEGJMzEA5ejBgnvA1JmFcWxq6KND7go9YRubuoqAWS5gFDisy8mRxcWrmu",
  "key23": "gk6YNHp4ETVA2bcZLxDDJNYTXwpspdLidAzSxag7uiSPm1amKiHSsP3JmX9eoFW8M2Pt5CbKbnJXsP29y8doxb3",
  "key24": "PNX8eEbjcQducTftg2eeH7T959YEffCMpsTB4tcq9PJZARviwA763pZWaHT6zn8wEq8pr9vYGsyB89U9iTwqqjr",
  "key25": "4u23gAsme9VTk4o1XrCccgbH5c2fLKwCVyYXoJuwoie2L1BV3G8uiVyeqM1AfXJA7nAPTNCkCgUs1pQTQLv2TtH2",
  "key26": "3BZtosk8GMa5bHuiYyAdQD8hUDb3nfVqouozo5iezj9FQsRqs3QCVz1pNBAojbinaMvfSZW6xCk8kHE1TE3mD6AE",
  "key27": "2PwiLwySu13ZMNrPPMErVLFBWpHTGNcUnkHGVtZ4kbR2YJQRU2knheukT1tH96QuQagWeYZa8u2zMqPE6G4Y8p2a",
  "key28": "2zpd7txL21r1jUnwSmy2A6QVpMhbjY82t1zbr12JnLSLFGrC9M9n5rve9KhTz8kE6Bokd91rsX8JX4wCrAcnxBGk",
  "key29": "5nvMd5bVu6QA9v5sKAqpQWUHqaK8yE9t996Mx9f1zKBvCRjAySDR6GxgFvs9PwDtEx6bjD4psMzZrNcWuG4Usdm4",
  "key30": "3a9pVLLCvgmZZr5XrNrdcvJgobqZchPjKjVvzQk7P5nRMAUXLVCJY7pJdXNLXPPukrEiHMpiJwX8Kd1mPaqXAcHk",
  "key31": "5WrRihCyinAT4XQmgLXWF29wXdkJ1hfkYsuhGxrSEZ2muk2cvH96BsPEWAyXqiNVgjsVeqGPScRwVHJ6yyTPYGK",
  "key32": "3yBmKp7bTynjQeveC283FjFx3LqxbsizXNnYVHwB8mpZVD8oDTdvJpE7vgGXdCHpvXPQF1yu5tPeTcAyKEiTLyD5",
  "key33": "4vSU7m6t4YSqWcMQdV8XSpL4z8nycxYcywc7eiyAwWfFBYPWdU4hMnwEDLmdd6v9msV8YpfQse3VwUH1aD857Q43",
  "key34": "3Py4iXKP4tCxzoWMh6tyEyJy7mVzN6ZChX25EgNFg9jbYCh8KveNwFZNgD1AH5JUYSJVKsiGiPZxXL7hKDyFZw3D",
  "key35": "2zojAhgbdk4nPStq1u2GtutUgQZYh3KM2kuMkFNUrmsXY42NNGycqKjQdrd3wHyavBZ2CA1CefCR1RsKJEJwFCP9",
  "key36": "37YZ5cGRRVgyMQYfEVKVwAVqAntHiCAzChwhQmPDde1qFNMMYyYrWCfLfc6m93eBb68KEGiJo4GfQ7aymHfRJzRW",
  "key37": "4vdwJmsjv5ZaYhHznRrAyozDJfdHVM2UkKB8oS35pJcmYTpW418shDweyLQjwHwEpk2dFDw89ZpcRE1RSahQu9Bc",
  "key38": "2eGjmwd98n7zr4QvXLozs8pBJC6QNbZA45GwYveYhg14NEY9ZUu6XZaRivqqpWQSJjnZ5SS9axGLLPe4nejh8yks",
  "key39": "o4uqc2Hksq1odsGREBAe3vYh2MC6epDqD9QCbpnQXqKmSmxoLTZFfj4wZiYvB7gVGzhwtnAmzNrJ7JAEjATqVCY",
  "key40": "WW9kuttMp82hnfTbFEvj5iojQNxuV2PJLBQCExKzgZUuwRVFxPxKzYw5ytsBFuv7AyEdvohyDAyF38BTng5qpHC",
  "key41": "2dVM9uEfWWQDmADgv7gnPDhCKXVfEFyK7gUCRMc5iWMNQdnhXe7KSnz54ApK8E4guZWqXEjUNz9htW4B9YK7iVUG",
  "key42": "WmwCnan7scYQEGf4aEAZo7Gmf7mSS6FCzTu2S7q1T6kAZbd1ZbZna2HD1DwDfK3x9t6pfmPfCcx7YS5KV7DtBbT",
  "key43": "5VxZkPk3UQNaEyUJd5dfk3rFfceR1Zc7Nsshmus4PtjJme8bB2eX94raBDUtfh5P1LZrxv8V3v4ZFVJpqwD2XcKh",
  "key44": "4MfQUX9k59YmMxCeHYq8Mf42TXFHRWjfLzS7GtSiPQCXN9aNaar9HsDBiTwKsgKF8uxTb6t2mxL1iMz4ZAqEuGmR",
  "key45": "3qYMA6w3aktJy9B1bKKaPVdx8osLnnMPwQpDk6AKX79o1sSGkBnigxhwmSSyucqzvp5kJ4SnUzKt88WjX29dKRot"
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
