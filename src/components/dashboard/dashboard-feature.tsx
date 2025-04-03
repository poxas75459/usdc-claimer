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
    "2hFWmopoLjCkGRNxYRFS8hCpaGFFMvvWHosoS3bqQETNRpsHjQ7je2YRhP7r7F76fEET5aBKsCxY484nqTdmDG9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rvFWvtci8LDn3PxQsePsfLDTGb43Tooi6F4F4yHteLCpQvoAKUV3B4nXXSKHx1B9iktaSAGPoDqhwFxXDE68yF9",
  "key1": "4j87bjbwGQZr4PW3oz1PN951XKxPH873EPRhVeaVDjSoPVfnULbJXmacZP8PSo1XgBEhipUnnhmxHzkbeYFkJphq",
  "key2": "384ZXdXGAR6Xpme1x4EDgTi2xQccG5Kc451NfG8jRY3nBJat21QDeTyqv77ib2iHrQAKtBhWC6x2eFDcZG4D3EiM",
  "key3": "3xWrui8SUZmsq5EXu9rFk4FKGY8J55QG2P1uUbSrsTe7nYUFeNYJQndZCrDZgmFUCe9LNiSgFNGaFrsNydarfv4o",
  "key4": "47JsAyPh7TLYCrSFcStW2TecpU8AWJJXqupc3kFaZXQhYvG14naGAgiDzhrzw7HGyAaN6kUwWtW8PEX9aEgC4Mbt",
  "key5": "5iJbLRvMmNPLHaDMRUM2N12XogRYWYAs4GkAbtayEEEFLLyRUukFpMUAUrNnMS8CZvEuR4BjBnwoiWWqresneJ45",
  "key6": "54kDMJtVvm4ifGSfy2yUcEXj6iuA3emZhX8Y8RJp5e7q6KMNPNDiksWPv7ZVwDEzjVttSqydx8GPsqEBVeqQ8nWD",
  "key7": "JRAAbKwMc8KFWPqKDDpGscTRfM9apP6Y7u81xmGZxBHjUw2yLkmby7trt5xM89hMW3Dq2ZzpvFPxjZWMaZZJNGG",
  "key8": "4c9n9gVkLLNphtYJWCPAH5Vujstx15hqZXqRHr56HkxKLq1HF53GQLhcnpffSrAzeJGuTjagDW7dRVsrG3yLCfLX",
  "key9": "3So5ExHb9NKZUwDNeiiTsEAjdFEB2ivPM5okonoyFmd3abFAvSWcn2nFhhAw1yqcTvRF2k4FPNU3TSBaHFA31do4",
  "key10": "2GCNym4qS1ZmcG1vsQtn7DbcUcnbTidXbSzcJb4ekKbTr8nkTkED1nPzR9bMurHcSUrwFcAY6YnC1kmRLEQafxJg",
  "key11": "5zAa7Fg5sw9pj2sKgQVEQxaCnRX5hbfXspbpbpqJQy9DzobzcztwrWfiNF8EzqjkqsKX25wtFsQMnYNvLd9Mg4RN",
  "key12": "2moGKNf1yQ3qADyeZGAgSD4aMxnA5hBmZBDU9W7NuqSdnmwvCTcoPNrrndQSvbSPy5wJEWNXnQxTrGiHjWsKEdAx",
  "key13": "2Qt3fExfvVgzh3RYbhWeEgEGENwhup192MBLvTGPaQY9DkpoEewP4dDPkCRX9QUF41KmxUBocu6fgoWbjaKdHGdg",
  "key14": "4ry7JvqomUK27bLzQHGy9LE1f72NanpHGYCsRfaupsynWb9DGyG3Y85GcDLTSFSVegcph3CiiJ8i68FS8Ue1bXc9",
  "key15": "4yEedEA8BWCzuorKnCSoivabXmvoirx96v9LdDpZv9StkS4gnxssXKf8wD4YaVa7cJeuCkDTw43EVzLNULxi7bp9",
  "key16": "5Q6bj9FJwusfYVRWg8Gx4TMs4iNBtPwqLNUJVz2rrPUNDW3Ki1nrbrF2uorHxP9YS7hYBFLNWqg2XLNGNxf1X98m",
  "key17": "5d6qFYb19cuuLf4PeSY8pG8XzXDfWHc7YMLg6ih8XaRs2GAsayNvdH7YoF16a8E8agjjV3NUYHVuk2HGVKX7jobp",
  "key18": "3LESxBJcgTXGg7VXX9sXxYPDumD2LXJyX74Y1ioQNKruAzqexSvB2xSWB8DhsZwJeQnRWTckCx2jYbBzYZRXHeGr",
  "key19": "KxbwacPHjk8zB5udWBSeARDbbV8oHMwhSAoL7QwidyZo7oyscaY6s55N4YBc8QSvvprUhqDS9iW2c5iWUumGxCy",
  "key20": "678z2jLHHqJof6QUPVpX6UU7sp2CFf4cZNAsrfhMHwEWdnzSiowES5KXhwbvAFRHReDYYKFCP5vsUt5ddSjkKCC",
  "key21": "9M5Ufu1ThKruNjikos5MBMNprs3gY9ohX8rcVmtFYVS7YpXHsntyju3zoqcPu8GaC9bZrv3JQkDz3syDMZ5uGPv",
  "key22": "XykC79HvXxgD1ymy49YoaYr2g9CSVUEeLNiwmUDwp6tWeTAEzbiTvdCyPo3ePT2fTqX1xtPkdapneYhzNLboz3m",
  "key23": "2XQib7r1od6etLpBW9ZT8veSg79QkjPPdYSxn4RSoaoYEH1QX9EJfDw3HbThkY1gRJBmb4jC9gud2q1hFnxCtVHR",
  "key24": "1QmUgEQrhsc4A6HfRWeFKZbtTZUAUv6g2xLsGC4zZypEsJ5huWEr18KTY1zhGpYwiHSo2fEWkpykE22v6DrfSWd",
  "key25": "3vsPNhoVvptRxiv6kpDiS1mDTLqCugD8RMZSZDjNByrcYYTxf56QCRwQyWZhVmxQ9Dt9GGLsHaBfW1U9iTBEPC8r"
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
