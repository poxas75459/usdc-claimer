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
    "3KR13muMtgVzQDHsESEaBMvfma4Pi6C6ot9pGmZXuEoXdRgrMcq8yNXLw81hPwuEDBWcvYRYqFwKMet12Gyqidce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZK8vvAghqsWU1Fi6Vh3RPMmqD2B45LrxBceE8VEThWn4jAt4DAanrN3DREwTHvLjZSczk35FfxjmqbBhmwa1yxT",
  "key1": "7j3j2fqEUdkxPNJWAD8vDE4qHMcqNjPpNeFXoQpDYZW4kaRiCkax95nkS4rEGfccdPBfJZ6T6EfMiLi3rdLdhiQ",
  "key2": "99M7zR5VK5ekuw8EmBwh45pbGKGQVugeVZQ7TPms9eQQyQiKqXnop8KNHo1tXTsQQZ4v6vLMa5rYrPNHv8WEc1i",
  "key3": "5QUZm9yCTtJ1oidzNPKoaWnuf5oz5LXYHHqywiaVFBdf5bFy8M2PJnDknnxcDykZJLKSePufphJFWcscLUADYV8b",
  "key4": "2YoDngmPLvUFSEKREh8GFrV9GBW8X2s6kg5XkgJvzX7RBrfZfqdNJHaTsAVAxMofqD2TKgEERsoAVgwGyd6nkTgP",
  "key5": "4jfGRtHuCauK9ky7tgEjQKBqWegR5TUvbiosVG4i2LQKPXkJeEij3RuTfUxwo6MAHizGYadA6ckqukuE6r3AaYKL",
  "key6": "5wTgZ97m6k2RcVfnSkJTWeFnDU6zABxQbVtv22GZJ1nuzbQXk15GiE5tRMJQ89jftnLd4E4fZZ8PwGRDrwBfL7nn",
  "key7": "3Sbu7ytNQbLQRn9QSoAseURccArAVRugLqHgWHk19CvaMNwKd9g7thchhAG3H5j8SSSmEhh3NuLhJy5FJr4ViSzr",
  "key8": "2UnkRVgLEz1PeaXuYa8gF8ne2mNnY5u1exFKBbYFm8JQhnrwwYUs5egjp3ts8TgozJTXy7wZNdrtB9bwmo6LnnHk",
  "key9": "eiXMZCiJuWeWNQDaTgZiAcgDn1UXtpWMVfKKTpAfVWAyCii5gat7j3xe9JY1MepZYZiPfmfWmM8ryg6MpHiBZDu",
  "key10": "51cJHJPAYtbi7B4tQJZztUJmZBKXnHqGXk5jRhE9guz8vWBJK1ZFfdCAWp88NAPk3HYVZRK8bbZkwa4tUyfQdToc",
  "key11": "3DvqWcgUBWaZc7jKhWNffUPrFMd1SbgurUVNuPMpYHK3acvHsNvsaK5f3HSZCcQEXco4sxd46RjWfRGrhuK9rCek",
  "key12": "53Jk8JdsmspT4xV17kw5b3UoSgbroWXMNC3Fym8gUwWoDjr1CFLJdR8kedJAKNZKjyZ7RphxxtkYo8meTwvJXwUK",
  "key13": "3tBVwY1PSFRiLiL4yDiJgtZSAnivp2mj1uGpjpx1QVZHfumbP1QMntnMMYi5qB6iQNTcJ6KPUSHCsXtGu93FvMDM",
  "key14": "4Eg6yjCD4Ufr76MZQzWX5qPLs3hgBwHySbajibtv57eZP8gVCiev4PkmkMDX27rgT6EfvcWZTGm6eekfEQ5ojB6d",
  "key15": "2gp9J3Rp2HwhPqoazVvv1PW4SDo7qBJbwoshe8BQCefx7yat1Af1gAF5N6FkKj9uUVurEVeieiMpQwEUdV687ddK",
  "key16": "FtJuw9Yh2i27uiFk9ZvNgLiioaCqy85Tot6gU4KcTBCv9bpH1BM7hmDan9PNdko7B4deiyMxfP1m4SGAFjjL1xu",
  "key17": "2fYu8ube2WBMHG44BffcA6sYZXvUAoWVbxYGykoi7yVaGQ7KDCLZN5dveUSyDQyzgkrAb2NEGyMdNZRVEi464WVM",
  "key18": "49FjxXsppbxDpW9oKxCDdZKNbogHtanDoKtYQYrgHrhXAkmbAPMDSZnwvPykRfkgTsSRXPLp2bXD2a3xpvZKCiL9",
  "key19": "4ZzXvnTfr3rXDeQtrsou3AbeXk9DdLTWWBR3K6dDEu7FdxZpsGZkUuz8bVvHkEHWAd23fHHjqUvgK4MRF32zKhT4",
  "key20": "2GLGFwSX22VWij5hYKRHGxShc9WHNoBubU1dvfmfwcUk9iTcG6SEbhctkmiU65Li5GBFo1zsJASw8SMzz3UJMzjz",
  "key21": "4T4WF1sEH7N96mhxi3qiNQuVevsocvrWSfmH1nB6i9HjNEycYz47gRjhVdFBoKfKDzvLVK6CDAkaNUWQSV2S5Nam",
  "key22": "PWnacc7EgLvBtFiirZPnRy8bijwPyZGNCsJGGdJbeyxJ1jUWZEKEAe5PJR9ZQgYEFCH6r5xZG115S8fJBTHvKdX",
  "key23": "2FBSmmm9FKiDwrTaZ5Bwt6tZDYGJk151cZFr1QW1H9Z8wWCYeZYTfWz6VLjvyJSsQrUFdCGrkTsWiXJhmyJjwFxJ",
  "key24": "3nqa17rabn6iwgkgJESQcxSQ1GxupPqvLApU27hURgfBpByRi1ZYKnr22zKzTfGxjYftWf3mt6QtkzpwBWtogbd2",
  "key25": "4igyc6xk9cwTqMBqLAQRfWZN4sUUpkM3nkKEkLWpXpNPYhC9uS5g3oLF3q8YWo3sTZ2xNpWHkP7zgXyG4Qvw2REL",
  "key26": "29JMz1BZLVUSNEcjM2Fi1fpFN5xfW4H8hJXeKQYwBp1z2NoeH5YgoE4YzwUj84jp5V7Zc4t7YdRSF6LyRnPRo24R",
  "key27": "5kUGLGZjPvXRECrrrppAH79rn3aeEbamWG553GKgob3enxJCzUKCet8c5R4xa4eprxFEeK7RodBy8GJQDCrVc3pm",
  "key28": "4FbyDzqQR5AX4VtXREHX4pHgP2J7fvQ9MCH5AmEfjmykeHw5V8h6CzifiPLH1QHjAg2didjqsuDP9jVPeV2dv1v5",
  "key29": "gmQjpkV7earvHhwbE286CYY9cTZZme4TMf1bvFHbQynEDRQZmuXVV7WN946CfWDWvZXgFm9TxgZqwoAbaDsbFKd"
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
