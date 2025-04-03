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
    "2voetGf1ijtS1hntqezPGkobPUfc4jT7kiYhWNysnH68QSpdoBKzyWJPNf6M7FTsLADaux4ZSVKCLvZnX6Q82Wn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j4CLSC2oC1u7pxQ7ZFg5xXRvZRLk1ZpULTybPXGLC12nK4cvAwX84hAgFEKAzdLCTycXuyuxtUdhsKRMu4ADtJA",
  "key1": "4vXSMbdepJKW5RnDbjV1euR6C6PrxNE6au58f1iTLk2yb2ayYuFMJxvUANmEsSoCVHozREyS6bA7nJqov8591B16",
  "key2": "4USqXEYvKaNBgMN8z3mT55nVsdANpaD8hVMtoCPvsqX3tg5T6U7ABZDXeXZnFh5dAwgbDHHY6nizmN2rbjXAQvp3",
  "key3": "5GfKvpExb93SzvYEJGkZvekYEF5QXwKL84WVfzsLp5Sc8DoM5ESPZ9uS1auqGvLExqMBXAMydJCn1sr6fyHhkgfz",
  "key4": "2Ls63a9NForSsX3gEQLomdcNh2ciS7s15LkShPyqzCLdCh8EJioK4aCe1sUjKc7tutbeg5EDnFwqTwh9HU7Uvjbd",
  "key5": "4NVdWRr3b1uPt5iP5PDMCW933ysK1nyDdQ1FGZwQTLAKsRdjWJfgEpdFtQ9WjMYB1U4jqKLo6Hr4hDAodJP4fNzM",
  "key6": "4vjHyyxBLdWqvzdUctB8GPpLenSRNNG4k3wXqfhRMBFf66rNpamatV98dt6pw9DrZyVYWAHXWsD8Y3SFkobTAJan",
  "key7": "3kZHZXgqRj1UNsCUaiyaBe7roqZzUXWUQ3si1NLrSmdZtFRbsRETkK9xQBCVenS83wBuGjZv1Mxn8jdnM9rstDXg",
  "key8": "33P1tcFYr3ZGQjDFqngnt3STEDnStY4e6qpaJ2SYE9ruToCohDyVdWHN6XWrC6jaGmU5KZ22bw8WnPnEyjRc6BwE",
  "key9": "45tUMWRekLfiNnR8n4n68kT6LQvZbg2Vigysn7QoeCWMGX844wZoutaFsYBianex11Vuqpp4yvctYZBCDtBNtfk2",
  "key10": "eiX4vwVuwjLApPJAhsM69ASZZTdkmUDu65NLQzhWQHW4qTqMUnbvYqTPetatsVmvZCKP5XYqxZHgcVyhbzu4GgL",
  "key11": "5bmhH5R3DWz5NUg4E9Th9DoVoKejZTq3Bnb7fLTNdhSvofvXGFpZBJHit3PbD8MDQCNNemoh1e5j1UkVdc6MqArv",
  "key12": "4SWV9zdZGr4yVhbHwfEiezVENGuJc9wiiX6JZjy7Hved4Kso2gNEdTqAZbNeSCJDH2snrihoSadXVrAHGF5jTzth",
  "key13": "3xGroGAwEYWSGCrm4zakThGmyTK2Rah2kEHQmVFrw6WUSZeGor3E4JWSSTXErb89AmAqsiBCHRYn8CkryWpjG9qR",
  "key14": "33HnmaiEAZXPUmkbmRuWXZqqpLp9iaZm751tNKN2TD1soyhBz9JU85Tt4tG24ghTaii2QxtcqhfTBs8yrXXUsZQN",
  "key15": "3NanH89iH8227xf99Zne7mvVpuZjcN2wyYjyaifdjr3xrR4JbWoDzaMZmgxgXwpyVhBu6gXQEPS9SzD4M5rKADmN",
  "key16": "3dfdeywWn75nSD4WTPjptyQZPZR3R3AKmpwUiKjN3WCzNsZUEscsqR3YA8zMMbpy7LMxBpLSfPHni7R2hrJJJC8g",
  "key17": "3JbA9CeVhfREkh1PLFp16j6WbEJJyMkmarnk7VtFvjbmPBX8ECmnDz8eJY9pf6P1m7A2XqLvnHDbeaWhPZeTm93T",
  "key18": "EutJW9j8jJT55PHoFwzk4fFLzwswqqpzQinyPtgHsqubuXN2H42UDGroxaeUMtx6MGbEm8mwwaNkVjeveax8mbh",
  "key19": "2XdkiEkaNyDEt42GhYf1aaS29Fh9ef7RzEdRGrVj9LZ81vVgCANeDq9uQ9y6Zos6RiqB6e9qJxbQbuXmFuarm71H",
  "key20": "4VG69hyRj6rQbo1g3f2LdEEgrm4Af23nqTrRyZ1Nr7e4prEHLRbupZ2JWWgUCyFuQiWHjamVd54GP97GUH5jsmTJ",
  "key21": "yA4SR5LjnEpqwbi2GWf3iYvUshxBFtCqBJbKbC8FjvVykwXKGiG3fopcWrZUhRS9kQdpRTF76w854vFrQPgTZHu",
  "key22": "2BGozxzvdWEM8kURrea8qUaHACtFx7TZq5kHzfrrzqufSw5qf6pKxmys1FciR24stgZtEYiTjkUwdLUDroKoDFR1",
  "key23": "JihQhvCv3QD1chHg8ErHSLr7wNUsmE8J2NP5123n58Y2mKqdv2GpEnKE4oocxTeHkBM2ZtFyrUmbYpXjktmGgP1",
  "key24": "4ukNvRw4CFG2RAkd6DLKUCrYoDzBpRGQksqnmEjYYnSP7Hgtvsjxi7DJHbvvdaZ8cvZsavxDN54TfH6hsVbvDyD1",
  "key25": "3F34zW4e43Kr3XshhUvFcq33AMownXKrqmZU17Ds4txT7wNWJcU8uuL9qtM2Zy2eCYekhCQWaeMZoCCg5Six5rdS",
  "key26": "4p4zZf8Rdvz69Fs1anfDo8ADVCixymLs1zH9oHieyZK5MndTmFkVWEixk67XxN1tETL6fQM37hgE7M8twxdo9YuM",
  "key27": "65ZgxBuC6ucHgS9HNHaVLt3TpuUZapNy1VNznA8a9ZrXnUCJ9L6mes1zR8bJgQ2UwMuKzsJhMvzqkotqpMjhHJJR",
  "key28": "u2fEdWs6Ja1xopQzTYotbEqMxaRwbMoJJgrJ4mEkwbs1AxRnfKjtvQJ1KtRDhnhAA2hSTkf7nphMqx6hzSwy7qG"
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
