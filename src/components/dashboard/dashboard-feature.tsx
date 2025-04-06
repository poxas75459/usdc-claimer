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
    "x8Ptco6Q8WzGyS6jAFPmiSnXUPjC1gW7ZqRpzT7hsLnwDwFzV214DzjxzsoC3sPgezQxbihJ8K3vzhvbZ9CtSC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56PXdDnriUPj4Ab9MEi9KcLbcQbMA94K6qtpHKaS3ufwP2q1NtdKJ3FwyvvywCmmkZ6yqG1UC8bBWPusHasREaF5",
  "key1": "2r2ndaSpYkeKC1i3Ctvi4pghZFpkBVgSfKJqnvzEkb7zyGZ6i5yqyPvngbYR46PsbrEotH3uXGJcX3ZMxS4ypqxg",
  "key2": "X7Ry2M5vWsJ8oct7bBVdTcU8KtG1LEQzfrkpgUeDHDu2yYkjTfP98j1NpUddsDfJ1Gv6vWwjPkV7yYNbX9V8ePc",
  "key3": "2fxT4a65JiCRR9Ya3WZQ9WjfuejmT8PMThU1VDvE3vmnR2qGCjnHkNe7k5Kw3c2HegYbjRdz9LhXMimF3pBWVRKT",
  "key4": "4PgaQ8qYJfDwKz1c29UoSBX8VzCV3zg66FbstXTjswK8LbvhKRmmVxRCo86G1fSwLo7QiNbEVZVX1fSctQSNTBKf",
  "key5": "wRZcawwyGmAcTZAfvDn5YTJmXDKjqceM3nqCMx7zRhSSYQWBJ2BPH7SkTMqJ8dQ5yCRhV66H483EKM2oVbFDEGo",
  "key6": "5WUuJhGvaE7kNTbjUGbvFGNf6zzmuc39BBQfKRHvRXSS2XDGRMWtNP2q6tByYpW55qxEAu5EqbqJXSHXmYYJFkij",
  "key7": "RNTux8txAQYYGhS9t2Z9Go2bWttS2zGxwEw1yLhF2gMnoU9NrPWNFtEv4Gm1k57tyxzarLmzcmnBiW8KUfCE6sM",
  "key8": "3EuTRw3dvYsqaXrwc5T5gSpGJcWJNAxU8Mr2UWfKTZRbcEJ8wL5U6mfKa868Rvqy4X2fbcHvfN7Z9cCz8QkFjBj6",
  "key9": "3BtZ1N9DAQiwQGktxCe9AcbDKfPjU4no4VtxYKxd5XRweALGzgXLwfzKR25hcif2awR8wcdkyHPtLyLzLLCLsyHn",
  "key10": "vZ1AoJNjoHMUtBE8itGHkDYD9z7nE6bwmZRzjV7CNUmLLjgPh1ugPxLvLCstrgfJeAreuqqPLgQ3M2ZntxQBvjp",
  "key11": "2tLQvnTYE94YAi5oQKi7XtRqj8egWW8bGPpew3R3R65esvLWZagTuwwtEehKW6DkqgBjQ6vKj9CX2smzG4vHnS2x",
  "key12": "5PFaXZfWzDvmAhL7dRUXezc5cv7nSvZNHbwsxs5oVfx626dR15DGQ3bWEMJewYH5moy6Wr3NF8f95ZgAGxaC9Pf4",
  "key13": "2Sst6PbJG4M8gVAQsDALVg7YXPR8G3gn2WTg3gfD56Awjxi6u88tsTXfnwZKEPLmL5sJQBMKw71hE5WSmMfwCZqA",
  "key14": "2H4bH1eq7sLhkUYbxFT2LrFQhCFnSHrgqF4UZyowxqECmZfYmcgz8HRntb91dCQFgwQuBizC5uJtdt6pHf4jNynN",
  "key15": "xVBeGeJYUCa6EUhmvBtwQpGBt5j4MmY53ptoxPYus42Ls1Mn7nvURsgRzRGobkdf6WRyH7jxxAwgD2nG12h6Uzp",
  "key16": "4m6zfD4AjewFe9up9wKyRtQt1o7qno8mezeMKW9A4Se1hz78FYeWjx2Q2LNfmSq5czJoBLdJcUNdjFsaJuz78icg",
  "key17": "2mBGW6oxvJWgEFmqe3RLtxnNRehW3SN5LmUXdHkiSPy3fm5AFbPynTSc4oZaDvzFZp9mNp64M38iFuAZrz9bU5wK",
  "key18": "2oFTqaRAF1B3w2DUjtRKJ48uMBCyAiE6cETLvgnk7pku85XR9aEunqFRJYovqMeXTtGmzwwx4UmHgHrvotdVH5hQ",
  "key19": "4T6Ac2tstPrDY3dnizCbMok3yaA6XL6jPFoWV2HgeUbVZrN9qwQFgrK3AV361GZgdVaUdDknShsH3oUovCwxfXGs",
  "key20": "4QWGhpgxM5BgjVfvQ6RTrECF4NPahLB77weaBwoyHt1kLPZRwMx8YZMrihsnkSZpAh6gD3xqxhTZE718gZCLQuK7",
  "key21": "4JAxYCh5tdCnHMowUPpwB5ku1XDpLwpp8qDZoM5yzksQ89XNRBFQig5zHXi4tCxGUgZdP8YuKoyK5feXvZDUy1DZ",
  "key22": "4UuBD3JNoAG4aiGvDE17VyY4BioUy55KgzkCv2GCWKu1CHSUfkSZcth4q6kgMa3VtP1SUPak1wDqkGVbB9pGEg1U",
  "key23": "2hMbzHUoWRkNxdnfCMjBc794K8oWasM3kjqYBWrPaa5cwhHCrW6gkEfkDC8UET2dgScqJmmAz5d79pwZR5mCvKyZ",
  "key24": "3q7HbzhhBJGJb8m9KfhAZZHTbTB9mWrYZDLvZTSUxkX1fSKcRLfR5oZcTjx4AQX9JSKcFaacoR14L93n7rHeygP2",
  "key25": "78x4nNbAy4X2S7LFEb8ZjwDQi2d6F7gJn2exgAjhB2BbpgGX4yKagEvMqXX9a2L8dUjAXRxnXDD1bsJZy61QDCP",
  "key26": "47sg6PR7WVwCScSYGzSgFSwL349ep9jvECShD9cDzrF5Dy1f1euzKaFjyoskdcfBVtPBn3tGZoWquegYQbxp7SPs",
  "key27": "2DKocDe9rtUK1Yu3u5Jj5GrMV4fkJ8pAc5uU681dR9tryeYpgENhkV7KWbAA6viERujDbtksctKXWKGjeuiZ8mFA",
  "key28": "2v8QrMe13i6toWH6i7xoNozMFUKrijnTCK4zWNmL1kzwH4xuwzAAnxcHCKRA3eSqNCUMWsNB17MUfNg2tuEAGXWw"
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
