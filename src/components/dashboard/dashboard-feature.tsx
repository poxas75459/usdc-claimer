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
    "8HMGjpmZ94teE45etatpWk7RHM2F4XtFQVwxVwojdFJLbHZA1jNynwejHiC6EuDQxehatek479u8QLmd26bJiSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HR7C4TwMebd2J3g2P64zkzQHhATRNhtCJdP6pvyEeTW28Hi2Pc4we5J86khnpexZaVoqVw7oF2WNr7gixGJZ6t3",
  "key1": "kZ3eDTQP5vUAHkZW2M4ZYSFQHuKLQEAepqYB48X1w3oqSKZspo8AjqPivN3PZnWJ2SkYpTZX7pU4wVdFRDLgQc7",
  "key2": "2mWt8b9vKTh1fiERTEEynVoTYd1wvA5JUEc2zrRNJkEzy3f6WcSKP5FatZC9VHMxBSoqUHvuTjQWuvjNLuLXTQfP",
  "key3": "McdCMXjfVZkV8xj521mecJVVxZiBNquJRX1H81a19eUA5CxPtKwZWFFxaoxYqZwoZmNnaJMpovHQpsdXMtqie3Y",
  "key4": "4tbpU3nm9sZNXgzdZPrvhUgNZFK81HfTyPDrwTHjC5qiUrKuTfFfgyoNKVsSfqc2w7vQVhoBHXmShC85DkEqLs67",
  "key5": "2hWstLCC9nFGcxwaoXdU7gPd7GgSqmHxRMwech9k5ErxdEez8P7zpDhRzJR38eULDroj9bTKjLcUh9AiL6r4DamU",
  "key6": "4eUEzLs31i189PRAYymwsSHqpXYYYsSF3gcwyqokHQR2AMvfHkszgJ7ZhPksVZnwCkddqJGvimBW3kebGmK6ySSP",
  "key7": "3aoshx1wnCVZzMPqzJ5irUoYhmu9kjaPM4qhcnNkTHh5jMfFgttEUSuWkcVTvwE7tBw5tEA45iXjVnTFK7594B3A",
  "key8": "2PXavmvaAMCUs7WRTfVMeXCbMDqPwCvYEt6TEPCbeFjydoVpabXx8pJRTPvaUF4WZ2hXrPJcLg8goNi2tSRa7eo5",
  "key9": "5p1C6kRyyweL59YqtScEBvnJpiRCZk4Ry2ddm69SSxqrmsrZKdDYvNkiUSnZXN7ur9vCMF1hVVMTKS25Y2vuWixy",
  "key10": "zjBhcJQRHbKNNFEwFhJzBih5ZJC6x9ahKsBchihirYrBUk21MRyi6ufoXurgMh8bZiniTtgsVjatri1ezbeaYLc",
  "key11": "5aSe9n6ko1YJ4c8tG7ABhR45qMunJXBT2SEQJEhF1Ei3ZsS8BCz71hUbNAY4HvxaYqNCp3Z45bToKFKqgfWa2RCA",
  "key12": "1HCgZ4ZsRkX9F225G6qD2x7r28HvYP5mRt99guYdQRzQ6m2ERATiCN1rA6mbrG8AboS9ennvLWHHd4VFS2fDwmY",
  "key13": "4MNQYRrRNYfpuVpTfDYuuuoRZZzGSnW6hfGWdw4UZgCvivzGueUWaqdXmB8Qi4EWRfvnaomEaSmoLk56VVFEt3iM",
  "key14": "3kVSKBEdnfbNj48bBS6bDT5eZCjxU2bu5HE1hoPVSeYSPsnV3sx4ksQDuu4tXR6WovhvpeynzQxVAFYoLv3dmbty",
  "key15": "b28AMg1DMaP4CzCg9s91g7r6JAy1iCf7gVshjW2sNaFJRKukp86G6KkCxizyrNeEzXqXHrumh7i9ZKrBZnJWQwM",
  "key16": "3CM5CHiKj6PuzzRArQJtAvQufJdKUcnxedwEZ9MkNw3uH5EygBWn3wfCrQumCfwReyy6ZKErzetKgibpZcBowXwz",
  "key17": "5XPzdA4BRNBbLQnaCw1y9dYVaEMrkdWjutPYHYK3DXg2vEvUAbYJMgEKT4Pc2FFqNBcCDqZfXyoLRa1Lp1zL25nf",
  "key18": "SydRZxXDMxiMirmZaK9W5TzWxnXDLFbThSCrfr2FBGD82FPL2QSNpAKyH9kTDp3ETukxFf7m5NErRfT7pzkiJy9",
  "key19": "2SyZeLWyduSFeBjotJGobNBXGE2a8oSqwFHfBhJf6NZTACivUrjHLnimJ5WGZNrpTfQyGWFeebeBvHuB7pVjvrfD",
  "key20": "2fu6U5t3tJEtL38YSRw857zJ5Dz7xApEMC3rhE5HCpbGxANsDG9CY5Jo4MUWEpRCuWjaGh55CD5txftRqPSBkK7b",
  "key21": "3nLfEz9WEwuhvzLWoKJGXRAc734cGwaZQVm8QJ4YmpZB8K9xDFZKQ2LzThijmrf51K6DkmQmgY17G5TydtEo1nFz",
  "key22": "3jmcR5WvbLSaQx1gESDnoBtQcRRZ3BDoihyX4RakbfrYrZimVRq4zJzLsjWg4zMr8iCuKDb6L5E3YpfWeUv3SuzH",
  "key23": "2jnpuUgsxikNGy7uuD3KmsPjTEFYFLw8YeRNvsEMA4pFVthBSawjZUGnLpv47oGJckxPTFtfw2QTL7Gyc2FZLEVi",
  "key24": "5pNJ6wfFZWPgcTSLqJf5amdZGWXQbYYgwaw7MkHAvKHThQXjehrnhXFRbGrAaXtAiZKSaRwXMb57qPDDcUSeXqjc",
  "key25": "4tvWww5QYv12Akn1qmkKsx9AvHKFtnCQbjiHQ549vWSUqUAPkHZR6c6tYd9regJmeKTxbs1NgSkka4UxqYdv9NpQ",
  "key26": "3Jz1Wbw8MGzpaQHPbC2GAXjXrvXrZmKinotZ39FKxGB8BRGv6odHdQGZqhy4sPnJpQC5si1qs9CKSERYdRKFEvr3",
  "key27": "2xSaiBD4sheCPf5KdZv7f8efnePBZC5NLQCe2xd8fZ541cmFGLKi993XtiRLPqJGkWFQahwZo1QY6cQYXFhwWPnQ",
  "key28": "3xspJovopphprKeVhb97zLsdoAjnvCpdJnjC318cNsiCvp4kGVZwW8exoWmKx6CqZN5Lxvw3QzCnuEu9kwe1YK9r",
  "key29": "5N7Fd4bminWr5XKgx25ASdLwBg5y2L1BvtuFfvDU7TCx6RxQbFnvLgXMBe665By8XHGXeNCpR5aqzyn1ZiqQ4J4U",
  "key30": "56fsWtCmavohYz2spycvcUqx9ET2TNx9Rh1gDXCYp6bYPnuWsqaAzkH97C5Ub9BmXgkRzSKofzymwoM9wzdytnnm",
  "key31": "4va7hioD4NZkf5pbG1HUjECsBk8ttoMWCkwHinHPGLnuqd3cKZewY8xoNYSeZRMYa6GwUXp65TWTY7NiUjVJNX92",
  "key32": "4Yqc1eAMj5NBnCTopJHtVkBbWCnZfi5o26t5za1ZSxjDHoWmnAbj2r9uC8WQLyyVPCdQjAXwtmTKvhJhzJ6AC9S7"
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
