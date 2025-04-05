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
    "4RHGadDD8piXRDMJeJCJLmLjvnzZwcRB4SXJRZkUHy1jN377Vd1uG1scBorh6EP4M85L4wfUbEAWWVc7cKvu13tg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jM7vs2dnqiUwDveKrhVts4o9KZ6HADEX8DUPfXMMriPuANDnrpX3HKcixyXdrXbX6V3aQq6316jhfnjuxt3AMTH",
  "key1": "4EpWxA3dq6Yejrq3MGPPt7cH21ijhkRRvZ6KQiUxSHgA7JmLAjVvQrmJ6kejJmRXWr3X3Hos89y1BQUUT2sxj5Xs",
  "key2": "622CrKGNtsFnoQzUaiCba9843drp8sW5qZVMbtqXPwd1H5kAQsXcNqcHz6zZDKsEUPGW6zYWXrgp8NYyioLQF6Sq",
  "key3": "2RjSCh29YjeJeUyyXrBThcSTosGCDUSiRmxZeRuhcRdxwN6gKMoJHxYjjXRFzEB77j7Stdj7fyAxdarfwZDoxG5C",
  "key4": "55M2YcuxkCS3wqcxUZ15eNR8P6EZygKSvDQi2zafGMCvv7S9UxhhFpYACajWyPAKrZxXmTtNEACwC8RkXypGj2NQ",
  "key5": "89G4GhvNvWCSBhsyyu4cTdDM74kefJKXUMKZhEiX5RGcwqiSuKQdbztUXk1pBBLk571VFSckDGXEsqfgnwH4gLg",
  "key6": "3cqVbW5VaqwwuXK4SYAEZfU87Rcjy7bvW4JXxLSj6jb48fVto4FRXfPLg3VunVXRjPrwKebvTPWycxMmom5XRDmL",
  "key7": "2eH92UaFXzmVkXy6mavtc7gi2nykPqZU4wotNJ8MzxPmJ1d3bPYHH2RS3wHcD2Ef5RAprP1qhTEkdmRMARg2Ag3d",
  "key8": "5qc8LDfasouKbWZEgNpqkJeAd6tgXAn6j4SnrUZLygNmYDGLpFWcaxHqHxZy4if7eikU5qktHdA1sBnT5fsV63Tb",
  "key9": "4eV8vGCuBTCRYdsYt72bB6Q7Bdcw1NhGTXJf4Y85KxZmkTm7f5F9v8NanDMnhbU2dFNBRztVP3cw3r8zXYh8HXSR",
  "key10": "5aPfnFLtb4j9WQ7Yrz3S4BMGsHK33kqN5NKQJBBYYiHYt9P4RxtTHsgLfWDAZKnTyhzBAFn6zaFYoke3SUx1sbc9",
  "key11": "2ePePM6SEvHCGHRLZETbv2aX2Y4kGVpK6QxVHFjGKMpWRD8nUBuQwioQfAuWSLHJL5fHu31oxsdmQzJaLpcWS87s",
  "key12": "23AZ6JykqnSDHHiwxx2WteZdVm46q75wKNMXL46QawDpHorgkk4GEijSt2PdB1XsB8xPz6HtcWeXNP6vuE4iAW6C",
  "key13": "5MWYVJfHiSqBuPUmNfE8eRKE2adDXG22BqSfo7Jj61zMJVzsbmsoZ87sDS21DbtXrRbWC5SQjCP52fJZpzWaQn55",
  "key14": "5wpRBBmmEznAGk6nZBhmt2ncwG7cz16FRCoAkQ726MF4x2TLA2gn2qaqJU1tEvUhXHKuWQM7cdocS6xyPgDuoUBb",
  "key15": "2GEXWtJVPvYbJTKKeRAkXUsBgjwEDQrxuz413KZoBqKr91WyGKWqTiNRYtXZhE5xoEvAUXbYGSXNojFMMjDt97qE",
  "key16": "623aXeoieCgXbaD8gBQVmjY8vyMRuAXeKr3TeRcpRE3sPPx6Xhb7t1uiXFrLou9DN6Unahfjgy9ciNRPUftmBiqo",
  "key17": "5MmEeekJAkmu7gP7RmdZZL6PbfMuc3xzUDc9u4eryvCtAnvtMMHaXxFtNRndSa4ekrPfdnK6uFqoTSax15UpF4Be",
  "key18": "qKqKfcLEoZo9HN51TQGKVqDBGLffsnB9VfcR2PRTcSQJx557ZnAgZrSsJGT6e4dyfqmae8LnJY4fE34pi2c7UYg",
  "key19": "2WeUwjQ1sFdG3SCz8Qi3AExGFFnXDGtp7JZ6faCa1NcEYreoE311T9vDukHfk1EShiErKe2JkorXbCUVeoMbcMys",
  "key20": "3JujLHHfGm883TLgQgkT2t3SFaRX5PqXUfsfKXC2JVfPTnw4B8Ny5dNJSqKQpBqYjomFDykF1pZEcCdJnPn4cLxC",
  "key21": "nTu4mdEkk5rduMsQ5TYoZZhyW29apwQdAUKeocxzqEAY1FfhZN5vgbAtPttW4PP7vVGSo6isEd2juhexHWkAeHq",
  "key22": "2h3pvw7HSkB8pCAWVatfo6RhsNN5YX1nug1AHzqbj4MXiinG7Cduz8qPtdJk32Jb1km6ML2Di43m7cvwQHGcNbWq",
  "key23": "3Nih9FcAEtaHsy9w1ix1w7bLB5L2NPkswtqRYQkLXELWAg4Zsz1Gd6dxa2kAP6FuoXJ4PwTB7DborBmDXumNqP44",
  "key24": "sqRHBVQXZXZBbemgow3dt7LjR8AWvCqjkv2hYVzqTWjo2w4YZqdz5N5qmoEZA9c6qbZqQF8B4NSatNhUFsxpZdy",
  "key25": "5VVcqff4CbvPfCTZjH3MHYFUZP263EhJwtZvXGCLBaBCzV9W2XrhVmYbKZmcZhP5TtuYeu6kuprgDEK9dPKYuYNh",
  "key26": "3d5zPWBT9aZdaTASddfEFMCmmKiCtnsKWGUFaxAsLqWa3gnGokpz3y2mPXH61koa1vnCAUGC2dPqDEMYjPLk6i7F",
  "key27": "rnzBMauBhh5aX3CEs9WmtKfaUdTuoDkz7RdRRAuVp7p519c27sxiLBBQF2DArM81yjryDYbGaw3GeAH1umrzCAJ",
  "key28": "3Dwgi33e8sh8YJAUaaUPSTywVmsmKBSLCY2Q8VHNH1BfbwToQqYG1jRev9PacmtADdVvX8eJ1Q6wTkVq69o9ruEH",
  "key29": "A3joqLHWV2WhsDM7j2MxDwNQoNzHzHNrASeVw91WFxi29xR1bJrMnypXZgQdg6ubp2c4uikd5nrszFXMiEcEfxm",
  "key30": "64iEFUPxJWR5dVcTAdjgc9crttbimKvJ6uTiNpD6ndHhnhvjsApJyWUtX2gW4daP1CBvxWXzyAM2xFTMpdyrMbiL",
  "key31": "2GNEbN3Snmx131tHVAW3HG5GHc68yCNcqQh1vH4N74PnCMYhME5QQ3sPUQ1d7p6mNNnuRPJeh97Quq5DAwfQnTn9",
  "key32": "4AdTfsgB5maDjAmugwSH7e8FAyPSMEibaxjhTENir8SZXbBFKo5DKzHXgZ3hcranTZk6wdegkV1pDDqcfuEWFkDD",
  "key33": "5jLCp4gKhAsbkQrztMpaxGo77bKA4YqKBKbcH9ttmTiZMCmECEGsBQTFscYB6HttWZF2p15mhDAAxwHiGxvxQma5",
  "key34": "3FZy9AvVEnUfVaV522XhjhtJ4DTcMkVEBa7ti9ZXthhDMr18g4kBXCk1PidQS74bUN3oUf3cPT4ED8C6WJhmfUSE",
  "key35": "3WBD9fWZy2rBH94B1KECKXUVoKxYvP9uTGmy2BGHw3aw78GXdCVc9wnB3LK9B4nKt8k39wRp3A25wVqPuNY865Zk",
  "key36": "3xvGVDLHq25ZVizkAL7yELJ3QsTDDEDCT3jiXTeQ4z8BJBBX5vLuFFAs4RxwEcWbhVPyrTYTFqnbPYThnXoUy2YL",
  "key37": "5VEQon37WufbzgKJT9enywcPN3P8tZxeVBqWbehRpAjwj4D2YASGNWnnWnYfdcP8H26c2fbq3DH8FtnMKAKaXS8g",
  "key38": "5qwgRnEYMjJUwsLMDV6551Zedzwi1KtnobtQ7HPVWEEhZZmC8jUaenPeu62deTqzc1DVH355m9yMq28KnwPYR1SS",
  "key39": "5ma9Zi55ykusqjycmedM3VQJWRRdf4f4AtwMz7bYDsSMbFmRMVkPd4EcSm5yHEATqd1WEQjfVs8qfYTXWBw4XwS2",
  "key40": "jRfJegnCfaFfu72HqmY3PexJy4QkQnv8C4pdrJhU2FAF4ZFGbUXZy2k4V6NndVVrtHrUE8FHZta9Sf26SAWwfiL",
  "key41": "4TowVHk3WvvhvHy8xcJJ9ahpiQNqMb5vPznotf5Q4pZZXFsYiCs6gLHZgdTGKzEKeSWZJcxmSfro2KY8BzvxfWh",
  "key42": "27dXHAchWPZovqZ6rwKUDnEa89PRoHFu6CxLUnpCYKWcdRf7BXTu7Eqh146M6UWbr9zbdxBpToYx4Fusz5QZ4YiU",
  "key43": "5fMjWaB1bF1dK6szRCwKtSwH4kHNdaCnhUWXE35y1RGvVrLyAt3AQ335kokyQDA2KFiKnwcrnmFQdf7NU8kJ7yde",
  "key44": "WdArhTyCLcEezXk9YqYbaP7dwicgaV9QVtSyKQVx66NHxus5mW6Gw6uA4iCqE7jpBcrVLyZALS1bQBoyAZA553E",
  "key45": "aYp2jBnyP3VPM1jFhAfTeUY3QRnT1SKQBdpkPrPFAbL9adNS1DiNxJAWYCGDpjrpXvT3yCqqajLKArUFNphwrgf",
  "key46": "31vDiBdAGnYpfaFiDsyhz53qM599TuMU1b22Lhqr3nw42mDdgZ7p8iMu8epnerEaDSG6XTS8PRTJKqCXzCwguUeZ"
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
