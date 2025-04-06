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
    "HafedjJpeRmR5YszzvxEEhamVoBw8uyRQMNsQVGbyuSmFyYak8V7F1ri31XRUQbwm3FRN6DRiiapVCMexYy78QT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EgJX9HjoW91qKr94etnGXM1zckEffGtVbe5F5U3xAMoHGX9pY3YCTmH8v9p2HJWfGonQq2t7JRzgPRwJLk1ow6d",
  "key1": "25xsFNo2Nij5qvzHY2db9KExDET8yZayxcxaVLM7paKcgGVjvkBjJWFkTVBw8axjxX5vVB2UUzydUpMmHqTUuCKf",
  "key2": "WKqaEUQFt38s1Uf5aAqUjTfwfZAhe8pPmzAHRQ8XfgNPVDjTwibqxoNqABUw9QY6NxGMfgzDpsM2fgtj9hirQ5m",
  "key3": "5YcqXRWWRf7EXZ2Xfh1TConfs8sdKSt3CTGePRv8wAShocY5SV3UeAcmitgdAX9naeKzFnxNUPtEQkkzansEVqGT",
  "key4": "3eq53EzwsGt7g8FhrfzYWiA2stVvZzDgjfNLPunNBJGZGmCL9ngdJr2EtMmTsqLsovNwTMsmurjXgFHdtpfZKcML",
  "key5": "636v1hKCVniL37sv5WMZPN3cRYhbHyQexW2boMkp1DWxpxsMM4kvcSkny3JTgooBaUwe465x8bbTKStFX6AYrWaf",
  "key6": "oyoA8hDpfEcYycQT5ERLyNAYxtvtTufS7qW2vyQJoMZiiQWTsUKJVVouyhcVJSBWK1dygq6KCdRA4h7CHQPKbnk",
  "key7": "3zpn4Gqe1nh4PST7NpHLQjAbhNCLg84MQ8ULuG7uJAgKToGMUpPYVJdkqGk9haUGmsBzi14oG1AVhJkc3b4zmnKP",
  "key8": "5pfvYFiLZmF33BhNxK4HKtsNKU2BBSGZ7QqzZiMgpZaootQyJthchcGXBNVJxrfTi2TWBqiHGn6MvZvQn7UGCaSy",
  "key9": "46WjJ5wDHTkBBABgWkKWtnbzRLKZdqvFCYz8JmCTUhUsaYdj5JA6xy7z4c4f6b3qHEGZqiZ7xCbuvbBJL3N9LMnU",
  "key10": "NzPFPsDFWo6XDBBnaJMcT33Ea9Dwe1CPVB3Esr8K9JzxS2w9A2NYqyYE9qVNNsm3mt3919ALjbeVdMVvikcmUfR",
  "key11": "5osoPH7gWs2ckFkYjJ5yWMcKc28NfWMGK1aaV6wA4qVYGP9midKgZ9rc35v13Sf7Jr9uGh9jQAwACkoHSjB3g5ZW",
  "key12": "4U4c2DxHxrTcG1x9n4Ue1poYgRY2xicRnuza1hzVFnwj9VWfrw6H3QUzhXT9a1d9BGKEeRyrggYyYqQzDJAXenFr",
  "key13": "3QmirAz3BtLH3d3HQ2mFYFwxEqLy8bqmqfgF8TjDqUcDez7qgVs8SCm2HDsDLxqJhrRUZAcYxNYVjojhes8jhDjr",
  "key14": "3EvPXGz2R3hdi7NX3hc2EnvQJHjZXXrVaFyjY6hQuMVZchf7gdqno2QkTEu369VTXepbF5bsexv69hWxbMtxLNKy",
  "key15": "4iVeUcQpa8oW9sgcfj1T3fBhkpi8qedvR8R25GCMZwAWyeeoGLcT14ffw6pw9mJWKe7jQqW6ybPtAP8MdZppWVgv",
  "key16": "4MutYYXA8vQg5wz5M2MFwcapkHm4YkqoGVSMCQBMdxgGGPbBDtV6MwLpwr6DxdLhuQJdy7YGT6S2fkkhsW8GY4eK",
  "key17": "2kwh8hPv6YJ81Zc2fwKxSAyzVAsFkVyntJraHBTtzjyPdCzzX2mWEcctqCpCez8EYCfp6eZjYCfgPiwUpm2XNxcS",
  "key18": "PDyPRRNc7GLVfFcE3eVttBArMwC8sLBg8dTsPwoutpkTFobgh3q4seVMnirjAuRivqxLz2xneKzFAJiFMPnj2Kd",
  "key19": "jPFo989NBxP9UShGREbBEvWcqJYX1RnrPFoEms2NySSSq5sJ8FyqMqAV7NSVB22KjqTBgBSSdNAYYeTkJBMc6z2",
  "key20": "5CycAb8PJsu6b5eXifPAHdJry91R4UiLbXUYPeGG6ECztXZXKJBEMdkZWic7ZjWejeAyBZeAZxHpdG7utQvUpByZ",
  "key21": "4bbJav87R2w1bmUmguJGazPrHpywtrDiH7vU4mPJXZJVixRdht899VUV3fszdiKVrqBBGdcDa2nt3URUnEGfK58Z",
  "key22": "4BzDMjgTcHNwaeVAgDKSQUAmk5ums8vmwPHcpkiJR2n9rR3JDtDktZVQ6jc9NL6HYPCibWftFVvyHptTdgYEPAg9",
  "key23": "TB3EHQ2QSY74672ivxwzJF7aajnzFGVbNZvTN2H3TBXBwpg1oiUwZyqjj2uF1oYUSFCdHXYw4onG3NnEe9qFBr4",
  "key24": "5kgRWzjgLv4tGPnFspiVDkZdybLPD46B9ExdVrTTroWyo2cmsXnkQ8KECAnvGQvAQAdkJJzFxj5ajzXZiktbAPZZ",
  "key25": "5v6H2C1HRqhTb7mAKbTchH9BF5kmazaBDpM1BV7ECgoJD6hFu8QZQaYLJ7kBSWyFQjnYdV3Gs26jvK4hZikji9W7",
  "key26": "1GWM4SX1XzSnVSJMC2L5Mdof7cV7DySBKs8KfXZ1ScTbMYCot4BTqB7Jemt6pqfvq1BPGZvXUTV8phDt83ebjWi",
  "key27": "2wt9aQ5uqk4gYjoRjm7ZVkKENjZ4K7LhxMhyX5frZ3hEdq96U8hZg8qzMEknKKGgrAnN392oZAL1EoSSEpYtAqdf"
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
