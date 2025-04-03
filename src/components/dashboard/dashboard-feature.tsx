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
    "43ddDSNQmwWYTGYUQK8DGmURh1ZpdLyDFWnvifwJN5ZyNYdksXyfiAjM2WGcjHhR6VFogGy2C2mpLaXvR4ZexZCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YTxY7uGPMzMyrvqeYcFbhJD5zQvqjk6T8hpiex3BHWoGBYXqRGDaDh4QonukpUDVEbhPt9aUpetXWphiAbT6Mu1",
  "key1": "34b1r1FdDgY7tJTBabmTKDQttvz5w4x1P1F3w1S2gjuMAPHDwjTMRpoiNv7xmDp1P8MsV8ypdFNhUPcWeArkzEy",
  "key2": "2Ut7SpZuD6bFqnruE2MLQ8RjRXp8TEPEZoDEfRNjTRtc3XfVqwntvS2wC5Tmx7NwCWSzEtMusUbrLVTAzmHkihMt",
  "key3": "3xeGDsjTnZS8ef8mzr2BBjyv1jvBjXQ7KTy2Ztt4kg36KwUXNvuMLR6wDwRYQz2puxM2QUK7Nif5gVNmNCUZMMF",
  "key4": "5pz7VLHmeHrBcjP8gCpCZ1K2x976MThmWKx79JHXXZ5En2JULDiQyVtTVA3TY6mwtjoQzyqhcUh7BnYK3j37cDFP",
  "key5": "4R759AJbeJQGXa8892fuD5gSfZGkbFX5LUZQyedMyhXwJGhFchuC1PjUrdGVcXqeQvspmKM2rzXVDgQU7AkJZAPq",
  "key6": "jDcgcgqrPBZRwf6y6G9t3VGbMGgrLBjSGiAP7j9M2JpPXbhV8uTHbN85QpyubJoTkJwHKNPTye9Bup7RAT9RhCZ",
  "key7": "5VgysSVqwUfZyKvsjkLNMgvHj42nTBC85jWh57NHj3BQ1hL84aRkbSXF7N6Rep7CuVr96fkpHdbw3UZbr5HMGbb3",
  "key8": "nnQyo6gGTBDUnYsJiNXZa9fvkGjyPfidyHCBF8CLnTV8LJgX9NjuuMjAHKT5MLes43z8CMPSg1os7MuBu8AJVhq",
  "key9": "2WHDn2SWjKUhmWMsSt3bXkzJzctHzp9qpKN82JskvWwEsMBSZiLUkscfAHiUzZVZeuXTDYcFLpBSpS7EZbX3aTPA",
  "key10": "4KsU84KPhDqyNH5iQZhkLEfjuQTS55cDtrVuaV1WKamGXY2NjYrBzfthqgi4bhEwS3Rzipy4iMBqzbZ7tt7imaRW",
  "key11": "pDFF9FbCn4DMnbDfyi66KvQCGQyL5hVWLpPVf2R3pdnk1pCHcub9mQsu3zhWAEfy8dBjZJSsy1UcvefZjJwaH7m",
  "key12": "3Su4CwWgnG8P2ifrHSzMMUuxRty7roai3EGyGZj8FGXkUdpRcHN7hEBXcSERECFybHgvkDN89mHH8H6C2j7gzoyc",
  "key13": "5JWwqvY3FnMWYhcNmoTAbjCfAPGzZtfT61W5we7hMAN1FcvDdFuxmeEodsjJ5AVCxiJ61xhDPyXKCsVKkZgh4PrX",
  "key14": "2jatrBfnqmBXFtmenfUyqR6D2xrCh18jCqQPPng6Xwi6nwhXEF5UrVnqeq5k2mpd3UTFeqTuATariJwNrrXhLeNV",
  "key15": "2S7rBNGua2Y9jt4rhk7KXHWjKmsW3XuGSGyAgUeyvEeDRbGKVK9w9hk7HDNrBWWzb2BHWs1NjvtEJ4cjEcTJ5THh",
  "key16": "2dmczombzy5acjxkQjad2bx33ec5fGBb49VpeswCJcQcVzxRK1QyjXqc8PuhsuwLkED51HpDcgVR6dk7NHpneZX4",
  "key17": "1BrDzAeFELY7fAc8tPNr2LF69KFnrVSskcRdpc7CpUDgtt58KfNjEE7vu6owHB2hmecC84t1hP9ounaqDFMWifo",
  "key18": "3gFGPP4bnwk6ZiuugcZofbLRMQHb7QYRo6BoHByT9CN52N27okCobzFA48tqQdeP8fM4xQpZ8rZNxAawyv9kQWkT",
  "key19": "2TVMErzLRyWqdZ77C8LrfqMrjGptZamiFjt35QKRuuCF6oTtjKZwFhdociLXtbNettqMfuUX6HF4Mh7yw5WDmiQi",
  "key20": "5XnF2fQwDWuewUHjfgAjLL1w9ju375qQi4rWsDmjZPaCYCkemLS9KLbpDtq1LoU9VWtxRFsKnc14FbJNw2UwPr7U",
  "key21": "5HhroHys13yzzZhkfcFgc3FaJYTvqw3fb7kHNUAJsTQHCdZmKaFDBbitFnXM4bSJCFUHBToJfJoot3KEz51dBAUK",
  "key22": "4XNMwkaQYwYxMLe2WQB3PX1Un8yJ8Y7nZ6gCHFD2PNtyGTKWZipypYaiJS1bpbkJmWPCUoq7t4AJf9MYwbsvTtZN",
  "key23": "47paXQyxoa95SzuCqMqDM9YQ2sKTbxk4wM7U8wAF6whtmUtXAa9tCiGd4Szngg8QZMQDK9HjcUXFnnDeNA8rLLyG",
  "key24": "hTpjFL9rrfivDEVNANjLQpqMXG1KmNPDvYZig5LM88siELrngY3QhTSFMywEfAmDh5SbbYKGUKsaPzZnNHFpwgc",
  "key25": "3T3SosMLtNwjpA5NV6MapV5SpzVUqC7xhCSTjH56PFyV4yKRK4dpFUdpGqdrkL2U7xkxbGvDUma22Nh8JaE2GGVp",
  "key26": "4kNCPGv5BMkkHzN5nzi9DfWdz6vASN7d18UfV1uuqb88Kc3tAobiCSi3dDkRoRNQ9gp2G1Fsn4CqQ3n7zUQ8URmN",
  "key27": "5o3rHXxtDYByNCFgCoxVbM8M65aP2pAUQk1a6NJ167HJoScmCLAKRENiV6UcMaQwJsjpGHSbLrYpweUqS4KapLgy"
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
