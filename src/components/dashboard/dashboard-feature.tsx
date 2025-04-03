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
    "2Qg1o3EKakRRf19GS2hmUKD2tRi3ust27BeLCT8b5evnH4y3TJbRqdjtze9YhMiSX8fgv5sXRin6XHPHWoVhctqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WtX3HMF6kcUcuKUdb4Ad7YoCwrJB9XBi8kupc4aUsSmjd1CM4Ek4Zc8HwjzWbKx66iH3sy7tJ35hRgAd24T9fDc",
  "key1": "63fiGd2uscW4EUyQJWGGNW6g65iWHM1bWfUgqfQ87rnSE2VHdyx1imTGjmnddyeympT1gSrfUzF8NCJs1G62nFf",
  "key2": "FYdBcKASGyeeh5z1BzR7cZzVRW2tv3EyYuTJpWyf5vyx4gXTmPWCzqSPppWz5qcF2tnWQBPLkbCLjwf1Jp6G425",
  "key3": "5cgX6JZVATN7Na2uMTf1xtHqUxLwyCzZVrdrqR1AWTyRweFGYju3ADfoLjYC7CcBGEoYGGCBiqGeyiT8acKMZNTJ",
  "key4": "2iwcgLG12GXCzuSfRrYT8tUtWY4sGEPN6dRME1CnrETEbzGs5Z2ngmRnG2Y8fz1woqghCKUxQFkA851yy9AJFSck",
  "key5": "3sB5hwKCQzgeG9zfZDBuv7zuzmfh6KDd1Dyb5y26t1jAFTpRrL5tVzdXr2JmeScrexG9BqZ4xNPNiGcaXmZfxJkc",
  "key6": "2AURWEAuCa5i4xMHCGzS5usy7R3ABQnZBubFFY5vP1DLKTLT3hWLNT7akEwG4VdCQ2DJ5vWwKk61QeNAr8KrWLG5",
  "key7": "4J7BHrsjF5SQUEw6hRtayDB1bhu8reFX6At6Bzc5zH4nRZn8AWiVkNh4cw6bWM4Y3zHtD4jgZVutvN7JhqrG1qWZ",
  "key8": "7DjvdvZ7X13dbiZnPJa1czh5M3c3HzeEqVkMs3AN4TCLQom1x4WrX3sgqo1eg2vTVvTev5ZwynN1tXs7g8NMdVF",
  "key9": "4FGbnJxEptUUPzb8DwSiSbciCJ8UoBkGAvtxppYSimbWp6mfmprWFpT3UA5cZWMZU3kMJcPsWfLzBx7MsGwj5gGC",
  "key10": "dYXrg4tHXQoaLVeDo87dRKqnpWBEb2hUJLCXHWYzP6zpJrE8GQ8F5SJ43aVF8tdYd1SrejsXCt4xmcQ15R5GQDc",
  "key11": "5MSEVSyJEepnF3E2r3xj1ui5TkBD4rwwu3C2ZWaZAjQDgTSyQe92vZqQZTg7k21hrS2tJEoJmS5zZBPmtkRHCVGi",
  "key12": "64FqJaandn1sPemrRkSpxx7nfbuE7uDEoybdRe2zc5bbEH5ZnjgDrLUX1YwhY7P5obe2HXntHjBd36MrtDeH8yRq",
  "key13": "5ZegLnWmcznvoHRtzxFTgeghEKa4misxDD4j9hXtJam9JjdyK2wFwca5HvJmvQK5QxxdNrCScSp4SnqNNQLvmZbQ",
  "key14": "2usugVUWoLsee8kbC9xpADCxPSRtmujRZgEBXfVow4xWuA2yVBjB6rB4f2aEKtfRecitWwjMPjj3oGyjL7Y16Yvs",
  "key15": "4C9r8bzk6UzkZBs4TJ4v3AxX6fzwzafy9Py8BQ44rhWrRSTNTZ5fVbKZYZjRnzkq1NuA5sU5QYkFngP9KzfbksmV",
  "key16": "66Tevqcq8ZpcfvoFz3M3P8MKU3HmiF8SYCKqmysUtBTjsEoBoukMGaFuCF13ddje8tLbTxe9vqAk5GGDqr9qemVa",
  "key17": "2pd64jYxpjQfNi8mzB8yijeR7zipP7JxSvFBRjFt7Ar5xyidxmyp26CuNNKiGN87JBor4uFzdY9bxNvkwL84wiSq",
  "key18": "c9ywTnL7hb2M3As5yrr5pnrzj133N9qDaprf27YrzhCAcxK2vR91yh1eJxN5tfE923B7DEXCKDgvcX3tEBTpwjF",
  "key19": "3MjdyDuaQMzvBCSJNyiNMrFryhosr44jt3TKD7gsj6V9utovdXngunYkLuiggM8UV7xYY3W3JzLNXnaG9iMtfa8Q",
  "key20": "44HMY1G6RW3LjmkNaHzs9HWgKZMV8KqtscgWXfjnihoVsnn2QHoiw3ZVB6rvnWqx7mwKoLY1xBtQ47rQUMkbLPij",
  "key21": "kV3cQ24CU1UgaMBCKwWx4VzJHPDJmtfWkXLz9kF7DYCD9YKdZgQLmyC7PLMFAUBzHGa5Q71zoAjhWimDecZmgVn",
  "key22": "3r8YFRSwGcW7h2KLZt3ogVF6eNCJ89psBYhksd9yo4TYDrVhJhpdZtvemucQ9MozytFAbafLCZhNhqouPug6FaUy",
  "key23": "66sszhvNPjkEGvhrkiSeGEjhUJy3zX24JJP9P4L3JDGQ8PozPSvAYfMxhkgsCbJRbx2f4ska9qJgkVcfPa6QPeqM",
  "key24": "pv5NaUBH3jJM2UPaXpWJVq46qH49S2DkexAEYkHNUr7GRQ92YooZTRmGhCnFSKvUBJ5NgZvwQwqK6Yq2iurLvXN",
  "key25": "4RvQ5bBcEbsXJce14w877AuYrGhYX6fkdGJJZmjfCBupgT4XxfRsBE3yhdBm5FqoFuZjZEF5pimKRyT4yAVF3maD",
  "key26": "3XWhjrjkovnq4HsVxhxGw84Ya9ve5xoa9YANP5xC8HU2XVVehoS5yFnWuqz9nmp4ciczKL5n6EFSTwwcoRqS3FcP"
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
