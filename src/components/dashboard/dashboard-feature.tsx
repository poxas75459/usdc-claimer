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
    "H1xMzL6sJ6wkdw6TroFb7VAkfUmdMeZNxpVDWWvcLoSLqw6SwhUcwWF42KPnUrbN5veH4Vnk6xwLqwTwmidmXtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vDJrx16XZnGmRVVKRC4H6RHKTjepQdP9pdfMKV9mRqx3bD6UfXsRw1RMrgpaz8NWv3JAFSes3ch4LyL8zx1eetB",
  "key1": "3PQ4FRJdvBqtXjXCk5dwaEsc4knte2NrMTzH2CwdUy66Y9WhuYNzujaPTKCnrumBEYSefHJZJf8j1v2LjbkzfRqs",
  "key2": "3hamQzbctkD5yyGqYZdTVnMPeixEVs4yWWUj5xq8mGKLcdSDc1UofdTrt3MaN9hWrb4hm3qv3eW2YywWgSw5DH5B",
  "key3": "22BNadT8Mzp8Uj4eGQxVFw7X2Nrat5nvRNFUDfTpeVJ4LxCt59VVMaVivQ5EHzaRce6yUhnZyytK1SmZkRmCG2xx",
  "key4": "pNsK6HPopYWjSbLEYYTGeFSvJkK6gg3CWcXPZ1wQp65rbRBouG4iSigzTFeBFGft28567TCZiJxCXz1TX25DqYV",
  "key5": "3NSzkAtdVgH1o6pn2xotEAA2x4K2HZ78ykBYeeoqMJx1DiR6j4wKkZgmpdK2QkUJwnaSTZE9R9ueF33uvECoE6Q6",
  "key6": "4VjWgZXKCJdsaPRkvr2HS32AAk1mq2epCfrjpxk2wqfoo1xCvbCYgL9kgz6Mcve5rXKA8pBb7wH8jyyNyLXZEeeU",
  "key7": "3EcyfVahnd3BrRGk39fqHYwZaVPCFeste2mqyKHyD1mXGmDy2KdmMXcHEyGaf2Apm4ardtEqdntnwTLzg5cS6KKe",
  "key8": "268fErMkbQDfp5mqfa7orXayHUkR3C9uWkFkYrBCYNnccnr5mCJew2eo7CJHrUk4cUJ24ZDP8GD6PDRkE7rqoUFM",
  "key9": "CFYxCwaBUvdb3syxSckP5WzkaNAdrkuhDh5C1SkXNy4z3cHoC7msxxWoQmPpMtiHhs3epZJNxtQtXUxr1gsmQSN",
  "key10": "3ZrkcLURqTdTNt7iY8f6oY1zW44vwyqRUPvcyCGG5zRhVmz2KMaJmWGB8FuJwQ5ejmHJPbzMbbFZ5qga3dsvHNrj",
  "key11": "2gEjcWWV6ekx7wHtx1WLHFwKiJDDw4ud1QWTDmbsrqHdJt279ZRwrnrmaQJjkH6qzdJdouys4d73hLm1N7uPMiY",
  "key12": "2HH4j2oKQMahW88o2E6utnVhMrzpVth5J9Whx8iaYnxKDskPuiYhLy3U269q4FWfLEDRsiJ9oG4Hike9tSiAm9Wr",
  "key13": "2yQRXaP8A3mzhbktGdeGLtYBwxMLBMcmCgY8r1vGdzWMuxyqvQbzKV2t8z86uDpJ5bm716Bm4K5SFvWHXA4xt5Jf",
  "key14": "4wJigSmiLbdsKYCgmZ4FmpJpFWThMai816JhNv2ZXR7XXAAdyXWo1LYHkG7RF6UPrQp4QseYdW281RFt4ecLc9nL",
  "key15": "5gQFBEzDppTyrepp6kTy999ruY9bQicpoG5FcCTa2RLM9KK53ofMxstfQAByvEB1z5NHs68KhTgavEpRkhutb4L5",
  "key16": "4C1YH9Y8oab3oiW1xsRK9gZk9qSARh1P6Jz2v1S4JUaXM6rvtDnLS52girzjvim3czDRWtARfLJNw31g8WUvpbt2",
  "key17": "3YuSLLzTcQXJ2eF5WCZEHsxEfPcMdxzC1Dbx4MkYDsvtjc3zyvoiD3yHusRAiW34J9QaCpAPmMRmUj3zx6QWWDre",
  "key18": "4qx2L5E6jarvsConpcfV6xdFE3hmaAa6Ryrnqe38AWfcKZLH8bCN41iP87XWiD8kz84RmphJ4NsTe1tHbHj3py4q",
  "key19": "4sF3whKYkUcaDvJ7R752H4MrRM8mQqbu6aVrHDM17hCSDwhwzXA9rZKAWyVnTEQX4cfEJX3kaQhmmKEmg26FWujG",
  "key20": "3mkVD4vumcDp6yCmpj7yVAyqCgR9XBigmvNZGauPGVd9XVNVzi8NsFjaeTb3H5yH9ZAWzmn31jGNTA9x3CSrBR7G",
  "key21": "4NstZ5gLiSsZNEjCbXkHgkGEfLxfGLXRUbXUHgDmZzmDecAEz3889R3aSdoo1UjNak1TXHwA5dBeVHLaXLHUoVtA",
  "key22": "4nQjXDjrT9AEJ5gaKpM7NmzjzyyYSb2T9U3d6XzTVGSuf4MVKdBWcshJx2xPPZ8umxK4D6jEtNgAqXF62wPUvNsy",
  "key23": "5hSRMqCsU6JstjunaB1N7XYBLrFo3NdDX5GXtd7hCsXp6FcZxSbKRfK6WzAzsR2Cf6kNEpp6awm6xm6cwd7EeDGv",
  "key24": "4QPSi1opNhDyAmmbQjFzYB288DW3Yqad6UkNxKuKEcFWe6p6rTxbSzX4hUeq1JPAdghg4ZuqoXxVsLMvtY2tU8pe",
  "key25": "kbaMkgEnsusA3f68A6CiUKxYepHYVxqyzbeGRKWmdhBAwioVoLi5QGu4Fw1kuY5ozFfsR8HnZTdwvNuQnvdCRqU",
  "key26": "5CMQX74VKyxofudwGUY3EHaPxpFKArHW583gcnfHVHG8yPNxGwXhWcsXmrw1Fn4ToANJRUXMyPcyDpZ8o2rQfr3w",
  "key27": "3wDJMGpZvjjGWMDssa5opLJ7WPeg7cbSgzcbR3Jf7Fnfk2BeSoLtP1kE9ZwrzQH9UHX1c5KNxmnphUVPXpHAAfKA"
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
