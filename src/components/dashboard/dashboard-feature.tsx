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
    "3vdjbppsEfDkvrcnhoNcZCPPbgpSxZyeHjhGqVRhoc729QJqHsSmkJjWsPZfwi9eMCtsSzM4Ac9fzkEFKV5qc2Vw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y6bybco7LWwHf3JgTC3VsTas9cg5uQk4yyqubmbwhvtGhFhDQEGaGajpQbTaU3Dc27NhDDGj6ERZx46EK1DzcUe",
  "key1": "aFctAdzBkyN19GhHhwRXDcs4WnU9q31LwUU8rVbwV6TEFpj3TpqAhQcSZzFRWi5NPcZhQEg4MgvUypMpdQfYitC",
  "key2": "4J4yYwBPiJZgmNY21nTrdzVgJVU4aTcbAYwdTiPeJpYWgUak3f4NdmdhQEbKYBUwJv1tz5XpZUqxcyAQmCnS5UGS",
  "key3": "2WbJD2xTibwnWepNwT62nenX3wWx83XVD5X7nfRdDn6qDLYSs9vhQZJFB13YDcXqkXr3wbEWKqsfoBNmCvJSyysH",
  "key4": "5Zis6wbRgxAYWDRXmftzKUWSfrpaZ4wGVyGUPgp5kVL6u5J37k1tN36FB5iAFW4EBA6WeXEbFAwg6vypQn6BuCsh",
  "key5": "VnEPHh9oGHx4FbUusvaEQhzFV1L9iVQ5vUGRWRH7QcFSvnSVt63WVcNkpqvpzaymT1hW19tFqy1uvxnqTtMcTTg",
  "key6": "4kfEjkx3fvyXDfZayxWyStq5NesSqddCCVNFmMN4Zaiz14Kakc47tD1km5RuWd68mAsQsxbXmVLawgnFbiHRiCmd",
  "key7": "2rNhnaaaKSUhxLNYy1aC7Mhck1XxqYDjgo2pFKCKx9SodoiHWHZJQNa7yxRmNCg5XSrNXL3UpBifbaEHzL3Ba1Zo",
  "key8": "4xFLbEnjyvgbPEtK2SECJhwWTSXLxX5zhWSmfG7ak8GFm7YL2cG499xEFucTZdvDXCojz4P2oeFTo8h2VpnmyGCB",
  "key9": "5ZYpvmJuNjytywTPkYiTBoF49aoCyK2wBCJx42iQYvxnomTRuPT2hMtuAvzE7tGUQbVyzEtgqyiYyZPUwTSqJWkA",
  "key10": "fn59hXQV3WPemi6fzQksturZuMHeS1iiCVK4ZKbB8PU2Pi7Xb4ugvrzXCAKRjZpuzVmnmeqnubDAKpHTaaBfbRy",
  "key11": "2hzJ58cHGvsvFUseBkqVXjM9fjBed5LVQuToDYudtL7fZXGUa5a63WjLEBTgTxfrXrRHAcvYxtaQkGNw9apXuUBo",
  "key12": "3ifL4JA6zPh6LsizyoQMNwkS71AmnM5RGD4trES4kT1Nvx1T9zqiqQk64Ff4pjvRC1LmX8nR2SZF6fKADdbWirSp",
  "key13": "D2jKEaoGozgoe1G9MD46ac6L9QGh4LyLcjVg6YvCzr5kJJTT2h3vHM68qPDfV7kfsmsgPo5MVmXHzBFnQVk2osT",
  "key14": "4gDcW8VuqLdofM5VgjAMsviFbKBtpQkbbLoG8QJnxAAE9vPhPFiABoRhEojdYD4kGxXPmsbiXgU5VR12K43MZKiy",
  "key15": "3aaNun6Z2Z4quDNAoBkNn6aQFtpHsoVwPLSfGwEQqUfqnrcZhQcf7bHAuvmh9PbGS3Q9gR5FARdRRwmfPnFpVnKR",
  "key16": "59F8NTVxYEuE3wQBMgm4jjUPM2v1GPSRHERUoBRqbTe1cM4JkXaguvYDZ4GVv6SYVXpCM6924zx4VAQqgmTNPKs9",
  "key17": "2bF9wegXzQwu8dNPMmDL3W1EXNK5Nnr6MU83jK8GbFBadSgEwM4Tcd8NvQWPQeF2kiGUYf34eBCxVCUzEZeyKLWX",
  "key18": "XTfUXUsk3Xc3AMypoMjAG7mN1KKQMb9uHSNCtv3nddaSjPByS8v71eMwDH5xE94sp5mHR9mPqqroTebr4ktXnkH",
  "key19": "bWjCFnMJzpgtwZRoTtJeieAwZgiEXjpS9YpMYbMTR52cbedyGnsxVroVw1auEvjZwcEF8D94v5qtUytfQkbSU1q",
  "key20": "KU8Hrc6u5C12zRmuGYgmuZvxiEfPxL2cCqPUr88KG7TD7HD7wU5rBVSYQfwcqFZnPadkWugKuHhSTaPdN5N2YMo",
  "key21": "53S5sGh44zuFQUpVDz4MYQCSBoTUJphVTzcXhQhnioENuV1yo4ds7f6v82W6yDYY6UgZut7uy5Q1brrCQ7XevaJK",
  "key22": "2JG7upQ2wmkykxXffhyB7hZJwBHtMGYbtbWgF24h12G7KqfwxWgPtVLngmLpW9BQVQCGxpahk49sYT2bbJiwPqgx",
  "key23": "2hyDNZ5hwDfM97XyxbT3kfq5UNKjw2Tw2C67dfoRFBVgdJkALyqF8wCR3ByxmGkUf1wWnQ5HjE9P5arsj9Dg5Wrr",
  "key24": "4pE2mJEZnoAzusUG1XgfpEWkY8FqxDALwWxupnpeTP7mu3gZETASNyLXtY3iJkCJ3EdxczQ9drMZtb6rjVzGjuuC"
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
