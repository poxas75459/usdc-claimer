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
    "64is1DFgSYV8Chg7tRx1fGVVnwfc1nU9SJcXLPUGnmtmGBkEn8dkgqftHq5Pd4brgEUkUBExANoTsZfxcdF4hoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H8pZCggP8aaKCNJbDgYdDptCcEe3yhZhrVM7vuPjQyUyxHhJgGk8H9TqdigrqR42KwsxS2W9pEjbrG8RWjbPQ6n",
  "key1": "2wjHhfeosz5cAjDLE473kS9KmYBEQe2Zcor4x3S7pAYFJzMu151tHY5YiXLHG1W3VtLMFh8inTMwQA5nm98dcvh4",
  "key2": "4y29AtW6e7PQYNpaKjDbVeP3bDcikEToDeeftRLvM3uVtf4zZDwga3s97jxgEBmmit8Dz45ELEMift4ZfKHNxUwp",
  "key3": "4J9kuVdFmmTAYokgh2VXtx6xeey3ATLxpvATcWPi6dGHxthjF5DjVKWuhoCzHGzZATjNDRGLzUic7hbg45TR5wUR",
  "key4": "2uVNpy73Kr1Y9iRfEGQyFnVN7r7GUoMmzAWUbc5NNCPCFVQYvJgiWbjEsniSBYxce5ZPGBeXs4fMXX73NeEQSzQ8",
  "key5": "5DRCAcYFxvm9SkUJgVtNbjcpHUzAh6PSnpMmVum4Mhrj4kAkah4iwqkSCrkZgs9nsH7gxNoby721AmHeQ2WFyU7n",
  "key6": "3W3WY6asXXNwVd7Tqo5mu4s2Czoz1HCm1WNEy8kGb7DZeydyQB9VEVNmgb2LdyHYokgexYTH5zE5mQLox6u28FUq",
  "key7": "4mDtVZ8WgyTJmHS3KLyjVWdo9ojCtiGmJMMSv2N2GPVwoYQLZ5w93hapys463GyhRMeRcskTmm7gjVV4wAQPEEx8",
  "key8": "K77zF828i7ZvwoWtkisjTyDCJdDyUMP81MyfhFhTVttgQG76hk7VBqf7f72esbperQz9w57gqF1Jq2mNNgaF8G1",
  "key9": "5CVjwUVXNCG7fR2nFqPqH5PRaKkvP4tiorcKFUs5W595CaoFFhAvjh1TR6cgdDHYEtkdx3jyApfsVZYiodfAfcsL",
  "key10": "uj1bqCLMH3hYm9t8or6tctug5nTBcGoFa6q3oxn74oWQyMzpVnjor4Fqt1XuGF28cTg5jQZEGFeqEVhyhjZ6G5j",
  "key11": "4G4yuWfK1qusjDd24PuCoq3BLLCgXq5omEEbaweTNPHRB6wtQj5a9x8b4K5xfnffLPfnjmgDXmrJq656WSCnVRNs",
  "key12": "3wLPYPf6MYpoRJeBLNpFVmXwukqUrUWXk9JjEqWkYuqT2fCZduxNemNHzAjCY1DAuLFuPgo63ozCHWG9gog7WvU9",
  "key13": "2ECFnchZbCWx5VHh82aDyHP2J5Z2BDYsiMFSJSJRYg1mZmxTivvYC5Ehndy2V7ap5pHNM1eaNU2cQ2fDeB3TW2qq",
  "key14": "3sNCiLujovrF4QmDFHyknd8uVLz4FZ6NVNB8coYZCwVYvgnPRj3A7fvQNvpsnat5nhH4NyhZrR6bFmxgrFXJaHz4",
  "key15": "3S5XUZ6zfQ8s8arxzvM8oFr61wG5bPHnC9MbrLZxUT6doujtrxupLZL1WPXvdgN3aQJKQkuYm4PTn1NFYwMkVtGL",
  "key16": "3ooxHjktEvYfgU7az3cVCM6pFJ9JFFhR5zAykzTJzufoAJhFB2PxAbMGdZB17ef5CdrjTv4APqLmsgWmuoDVHcKU",
  "key17": "kc2Ny3RAMc1W9b1LFmV9uBFt31qw5qonsGed3hRivQgXBJx9PNbvELXZA5HoDWfQBcdzzdx9KUC3tqGQY87MoBB",
  "key18": "3M5qWN9M2SCQwUy4HLVio8B5mkN2mM1V43axG5M1WNyGQKrzA8cbBhuVU1Y3U2JhZAXvqhGCVZwbRJvVZ2Kdwr7L",
  "key19": "2NpQDxNo6ckoXrAsvJxaRCkqWm3aHcjQJr8uHYHmvQNsHjBH9mpquCW91uJunEfVruzPyJ8wiYzhP99pcFr87kSH",
  "key20": "2s51y26injGAe5zvneM9VASBgzXt6k1YPmvCCAzVMHFhADj7Tp3XXRy4hqhWWxy4zyHkEPhuAechRA3oDMKMYt3N",
  "key21": "2nCr9HWw8dFKuqeTRkXkGH8vzpz1YQamf9PdKe5nLrCgDnEbJtceNXw5udFXN2E4hk5CyBDoiBwvjjkNuTG6G46H",
  "key22": "pb19nD4YFL6zaExtDmcyrUsd5iGrHRGdBp7fDj8uauXMtRnJJSe4w8o7pMHH2UgGnkXK26jJK9F59voroJGN67t",
  "key23": "4jecLr6vbpK5nKKioU86d25RS8S9ngmGfycSvb2cYadTFj54BVrypBsWhkFmBwojGtbf6PHDefVz6hWTLcBcgott",
  "key24": "4zXTsm8Y2h4nNdcKodWCBw227sxHC4pBPoqEoRxmkV89eLMpneC7jUduVgC9anvWR8oSrrcDFTrF2bN2qyukSjLu"
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
