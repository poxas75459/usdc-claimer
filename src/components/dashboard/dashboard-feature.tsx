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
    "5K8fPrVE5wbsyNT9DKSyxJerrdmG82AA5XQGcZdnQ4zbwphzDWajxeu96oY8os6WpyiiyT96E886DbEd9SPPgBCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xNdwX8rSxaRiW6gwg1Xv3od4C7zf57uLzHghA5mSuFZR8fbgM3TU6XYy3ypGHfkkdaefMZXGX6ixZTDgXHc7S3L",
  "key1": "2v7nJ3bexc91j6dnpmyAf4ZRqBWcdJeiGb3EzywNXsywGPCf4oGDvfmfWpJYC9Zb2obHuFpkrJ4kPaR3kU354ewH",
  "key2": "tRHKQooVdGj62jNCvr9ax2gUKpxFJmUq1mA48zHBJ723ZWA5TLsr9NtWzLPvR6VuejBq2SM8wZcCBFMtNgRz6yU",
  "key3": "3PPg26nGDCRUpnAgqChG62JjwoJSrz3CHahrCp3YLPnrc7ZHjahWxjRjDyMgYQkDn6ge7zxESAh18xH87JquDeHV",
  "key4": "3wksufY4cE8f4iAV9UxB7mtkgCCcThAL8pm4iL9U9bu9G9miEsbGFwbGzBV3qGpbdfLfQQfpjRavKbJ2NqNWGUoz",
  "key5": "ADLTfmYgtxaLvvVXhm5omnrEXVJBhYezoRW1H5wdMkszMd5BA4GpJYEBa6Pvk7P3qaLVJxSDEEGQJ6Wuwaw7xuv",
  "key6": "5FXHkgSM6N8frjjX23QbYmQKyBMpZGZqQFmfWwytiYH1CXRLuvqYLVZBSd1Z5XjZnH4eomjPEjwuCgZryHCBSFez",
  "key7": "4ge3riBeHvzzt3eZBA3EJwuYTv2Q3XDPtJrt43WpoeAJVm5hc5QwPUdZck4syvvYrQj2qUeFxpf6fSkpHCWq4hXL",
  "key8": "4VtGY6JkBSVQzAKVZAux7QESePzMnoVgtEHdJCb8i6TjXChtSuWeAiXKBGahU2Ay99QmxyncgN8EtqiDfW4QeVU6",
  "key9": "3EARyuK9n8C2GtJzNdtzsA7EPidYTY2iwgAAnh6mrzMBF9AUsrcfxnGaLDa9b9FZ7euAF8o7sqqhpBod841zVzUp",
  "key10": "SpZxFy6R96MxHoqWomXhGwFQDXQXyLijgXMyL4uJtf6gomJzWMZvcAFRVKmN3FDY92BFk3uh5E8ikF1sAxUYBPx",
  "key11": "5LyjxwDRYYnNGZqHEnL3zimLSJiWWBVDYYPDJ262LfpPw7g1pmGXENJ8nGmrnjNEPKULtiyaxadMSnompCs4qQrd",
  "key12": "3jqBf5Wzt7dsD1QQEuvSAdhXwW5e9xgDzaJQhvyrJNUbRVjR2RkqhUPtMkuNKFH5Kn5GNxEfFskZ9TCUUspcumxF",
  "key13": "4fbxUhhGHvhNkTWaqqnXz7gWxo9eKwHigwes9iom1Zkk1WziqXkcn39ETEfNshfTbKxYrro5SHDtQBxQfNHhLXzB",
  "key14": "3cdzSoKEHstEqcg68qzomX4JeNPkbYHDbAGpShrNgEg7n5FqHfxLJijVBKAiUQVU1gx4qBeXMSC1ehUfgd3gw33q",
  "key15": "2Lh6Vkyc6gj5awwwTVAZoRu6vvbucg2YT9Fy4t9WMeVxPut64ankg8SoguqaQP4QMk7pTQ5rQcgPxkxCCAtN8Rhu",
  "key16": "4bYoohUresJrjBCfF6kKdFoq56fjgWppdUBKP1itqE7LVbATHPXh6anmUrCnrBE3A5tdC13JurmpFgMwqnGzW7R5",
  "key17": "hWk3umNAkM6YPaZheJvrXn9At1DitBxCCG6nrBuEejfzV9qKc4nPQYZc7xz65L76rjgCm7UDz35cHfAeRbmdcbk",
  "key18": "5H4KZz2GXx6hCHp7FVvrFZBXrtMCGMzfCxxa77JpN8u4J9MmpVUJMf82k1uxwiPuFuGvBGWrfAVXX1iG778v3YNv",
  "key19": "3agPFRFYiCnBWJfG6MRoXk2n623Rk4Sn2oZmihtca7m33PJ7mojDnjTq4pvqD1RWE6rtZQWvTPoQ7cpXUfEmjEKd",
  "key20": "r6SLnGUhU9ePXifTzUh934Fxtnr9AeJvxxLP5WMNzxsjFYbTDsFrKqLsu2Rknywm3CQeK48VNUuMy1rRKjQDvvt",
  "key21": "3CdjPxRnvR9jrMUWhZXqzKm9yz4381Ujow8B8jqdF9cdUvRhsYNqhKNP5NWoceaUfwDEphDVxXC9RhL1TVsBP9Fb",
  "key22": "4jcBmjiHrUEWp2t3XF53twJ4BirQ48wqAng13pfcVyexfLWruHesDySE8DNWUEwW5yiZ3QgCgSkC94yZYqXcZt2v",
  "key23": "3mfouu7KiySVuQ4ZZqvWRGtpxaSasSVSnkgeTwaS3BKCN17iTzrVumsumvZMnH5Q7ts7wKAEFrgf75nNDpRdGTxg",
  "key24": "3sD3g3vraTYmARbbjqEeGYDkreYjDjYdQRY7dv5PLPbw5ZmaKt9SwASc5pz6k6NaaxRRTDktjkWCxAPeHBpj5HkM",
  "key25": "5aVxNF96nhtfvasTSbBLwcyoToU3TXEZWjU9T2QYXhKQoGrsE4FJyTBE8iQFCMPMifQqRL9u1ZMQp8z6sz1JbjUx",
  "key26": "3fBzyPdX3kTVEfPoosUf3iAtJQsRx5PhZuiTZpyVkoD9X4PD9iznEZTT3nUr2qXrneLsLFEscHgAUZXPbGkzs23W",
  "key27": "4uTgPxuLW5WwxFjxWSgFT4AJh7TpdHZeaJGwaWCUgisrjwj8EBB4SM7SU7F9mzQgVWMgsV2KLKJecZY2f4hVTFp8",
  "key28": "3mRHQj19yir82SiWytkPswwjeM11GB3NbepPxR5NywfA5R6iwP7uUbNGeuEwsDXaWRnGTuC22Z525T6sfEMq6UNf",
  "key29": "4UrsikmkL9JwN74Zhuz1FFygEZB8vpik2TM51cJwbDZTzofjmCd7mzJowsuv6m1ixBWAP4fMRKgWpEhH2J6k9iBQ",
  "key30": "2KdTGQHCnGLTxEm3WfjC34s2A6mTb7CM4Ybq4RTWanQKektx2sSqwbPn8Xt7CxgB3qrBUWs9qF9ctBBp3foiL5JM"
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
