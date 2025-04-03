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
    "RmKy2aisKY4DkpSo2kBAgFnVgF2Y4EwzesGMrY2SCZqdtRjkv5dmtW7iG2prhkUnn3ZZ21o3zFtaEdkhsHLp2Me"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SpmxTRyML9MZpD47FDV64j7UhJwJjmXQAeRi7kEFUHEKfJ5kGpLTPX4WRNiSU1qrzu1EQZY6Mrx8UDoGbpytoT5",
  "key1": "5uDZ6a4nQ58eSvrHarqanuJ3wnHWbmLjhVmPns7qAkMpYHypEXrPgMn3FEU8rnoT98LodDzqR8gdDR6chz2fS9YE",
  "key2": "4c6j9cejByuZsCbcvwzwDnxp1tFuHAvuofNSK18kwEHMFxR5Ms8zjJyq5qVgNKi3xowiRYH3LSXsU6PoCEEerrDy",
  "key3": "brBBwXYZoTQecFextd6ErPwWbfPH9i69Q5QyJdVfudSvrJBLL3MY4b8nLKEwSF9e2vxpY1DAVkBJwdYxnwMKVT9",
  "key4": "4nPGHGMUEtSd7ojAMkSFzLgvFTmXEAsJ2G3qSU7taZicqJqtvBYaGr272U7hBkaMaGLTybCVoXhNveDSkDqKAYJy",
  "key5": "QxmZv4cUUmzr9DB7nWSkktpzaE3aNT7f7HD2gRNAmLuA2Lm6hhhZsFusy5yv1KMXCrpQfdSw9W2mtd3PjXLcnck",
  "key6": "yEiQHvFSPwD5fbLFvpJZURgTXwbjPgH1qdfDhyamfvtdphvP6bm8ky2gdgcaWPLXkfn1BwbvWcVSo9bQT8dAfjm",
  "key7": "3zo6CsntDHJN463m2xRUzqKfpKJ5y9Yiu2hLY6cx5okhLFkxsEsqYg2yW3pkep9FtVBcpbq9yTR8ZucGQ6iqm2Yn",
  "key8": "663rjoqfYPPCssZTJ3miStKcPZTk2Vf2PMCSM9Mj5AaZtbBmWrhji3S1VQN8G8XeLBJeL4h2tU4eKGh1QtApaJRv",
  "key9": "ga2zur3RrxVZNVFiuB8jsp8UqHnqh7Eksw6fUKXckMWvy6U31Fc9xwTnhhdhyMDkehMq1qJZ89Ph8TDZTBKkcuq",
  "key10": "J2tNvEAdogQzk7ew6oG5t3RNSVa5XDWSdqfC6NtGa5TRULNY7GneH1Kj7zwjQUVFfNn1xUbKzbCd3N7toWBmhoA",
  "key11": "4VjwCxKpym3nQFzSFKhy4oJyzG4QHu5kXXRA5t8B3gxrEp42gkXyUELcRctthgvhSQLNhy3W8jNTWSiBjJiWrHRK",
  "key12": "4H1XgNozySLwPzRpK2GTw5pVYKMRvr3LSxAWzrNynL9y8Er7ZAHYYASAhRqxvUAbmeRQBqS2MGVYtsXXRfCdfdgS",
  "key13": "4xaNbi8wQzU3nbVqp9bz6oKGLqDfeog5KJfgzQ9rxsbFjpgi9288PhvbdyyDWCYuwj9AAar5AXgR7BGaH5vRHu9k",
  "key14": "54AXpyJRLBg3Vc97tL5A7Cg4sJ4wGwrhqrSvtFN8j3bEjbCab3mMuKpWvx5LvpN3QaHjLPMoNNUY8NGkpnQbaace",
  "key15": "5HL762un7nATgKhHnbLfFYMMu3o6HzLz8LK7xQ72UeVKZDzPDzGNU7aRnuE2JDwJQFbNs2Yn5PUkjw2GS9NV2PaZ",
  "key16": "2BuS6vjVdyPZe9XapYcMx8jEgnenwk8AuSrSHrUvp2mky8MEoSoEJTdSwgrNtoQRpadyQ4TdF6FvCKHLszjTZV6T",
  "key17": "fUbuBsZwiTtJYmhPpsoax6o5NzXTW5sNFyve4MmAa4cP85Um2D9T1g7aN8RafVF1CrMUv7q65j8ujDYWRhAhqBC",
  "key18": "yK1rjfK9nXpvRJK8btTtsw9twCbcDkv9uLoxkwTHZ9Sme8N15cM2FGM2Ddyuqw2w5tNdBBCbcti9gZ35HMLdvW9",
  "key19": "2jkQUCgKBNsQ5X2Zq6K9YxyBr9UVW3JUPCcY6bfGzS3jcHPGjxDAo3YgDsVLeBNEJRyDQtnpgLo9vJZPoBcdey2L",
  "key20": "79Tn9q7PzvwdoN7wpJfi8E9rLRQhMB8DCCR5XsgYp1GnvmwJeNKdKxGnSMUJdqkg1ppjPNDrw6bCaWrSCUU7VH1",
  "key21": "CMDs9ZNUa93VaU8NgfBUvg4e6gbjmLVPvZNo2GRMAQhz667dKBTcPtfoKMgxk44YhpM5VKcrqUC3wnctvgroadH",
  "key22": "YpRE9MfnMAtUyFbqv7uTxw15dB4tyFY4g7P9DCn5nJuKTQghy5SkLGgXNxqgAGRpoyZNiKM4pvvE5EJpZQBoSaq",
  "key23": "4jzBSC7wHHUQGpZBPZ8fgyoWqzjnf9i9BSg3zvC46ZxPXzM9yfp4nMKDvXZMCqLujCCndXvBKmQHNAtRwcGkjk9N",
  "key24": "5Jt1HybqRnBBRF6wPrDDo87cAqBq9WdsMxRPMEix1hqg5XABtYmAy4QSfgQaMt6d9NDv2PHAB6zr8FkQRuqJMyEC",
  "key25": "4NZK4UWJgJzKfQ8yd1Ny4x5jVm9xc51TFGhnbcvLtWWA3iGsAG9QAeeyQRGkAjwAABKRxY2jadEZYEdDg5e3sdPy",
  "key26": "5KxDK1TSHea6p9jzppxukuZWJ7Rdgkdb4RDkdgWkvheCPBEwmj6SHSkFRLJ1CdUmFPoX7TcgSQBUCrFLg7MGj9aw",
  "key27": "3UmEnCAbqJB6NE9q8AmoRCNWgZamwq1axbq6Z1uERdusNa4MDBGzG6HQwRHkaCscLk93XNGJ3ZHDDwcGT2Ay5EU7",
  "key28": "4ya1Uay9K3nKj9mVe6Heg7VQ765ZQRK2wZsgye9kD6MXpEu8YJG4q1WhAP9vDXYrwb4oXASfABo3bWcYDzvxiGu",
  "key29": "3AuDrR3MoqWL8sqvFc7Ucd1EzdRFGbG88SMdgMS4pYmfu6B9jkecW6CrDwiwb2xWHsUqkNG7jN9cZhXEh7fVEn4x",
  "key30": "2qEEei6ZFZB5pMmJx1j6iuLXRN9Xo9HotZbx5hc74iX1T8V31NuFXoj3PZK1fBudWxmHDNrM816x335H8vgn3rBg",
  "key31": "3iTuCCYzeDkv2gXhzKn7BaXH63hF81mGnnwmrU2scJNYaCwPUw446FPpLVfXZ5AC71iTyUirNoTXmGGGpe6QSCaV",
  "key32": "HJMPQDUsQo6LcAHFkrk6DRXWgK6d1KGEiGp4LSNnrXxdkNFpYFKmo4EYu7xS1EikCQh2RqX6rh6Ko8tAVGFGCSZ"
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
