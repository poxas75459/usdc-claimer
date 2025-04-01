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
    "4yWjfUPjNVMewxKMwjvU2NAehfwp52cK6GdkMk1eGboSsy8Pe6HHj2KJV2D9W8dknDS1RwhPysH7cCymFg17PqNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YoQFP6AB7RThwDF91v66LNffd8K7ruLLntvgmAPgpT6hJMEUvsdPii7s8sPNaYzhm7Z4Q8pLSgD1d1cnd1C4odb",
  "key1": "3B5JUf9hTWdR5nrVaDAEAdC4MFhSZajuGg563tXYYnAHox9jbH934fAkDjncugsiYSF3rGxiuQXDjG8HZpqixApq",
  "key2": "DNLG4eVeYcx7KZZqfKJpkHPpNrngEsCB7tkE8YbBY5pyynd5Cuj2eamz87BDK25kabFxbVyo33Nj7qeTZvCAfja",
  "key3": "5yE89eHZUtFZGNF7aSt6yqe3vjN433nr1Ujh2ZycPtZ8FPJPuaXMt8g9raTs7zRWcbh8acx8F7BiVXwcKwyu8pRX",
  "key4": "5hGrfd9yy99RcFeJSczmxxSLWZ2ThSGoJyRihvUzFf1RkN2F2DoaUFJf23vstRdCTLamrsHtQuvZ6SABYqD5YB12",
  "key5": "35fk6UWmsgdGbkm8G8Kmf5bJth9CbNaSn8PQXFWEYsiDnschaZnAB12K44mfpERFRoRJ2uuXWmBnzxwhwrxB4jtp",
  "key6": "26rgMaBcva8EDhYSoEi2gTfuWJYGnDQwufsGb91vc2ipRUVA5Sd4PmnpFc5CouFfG3zxySUN6L5sQsmmsL9GYTCK",
  "key7": "2fwAkMBDk18CRAYLgbSgeXeh6fKrSXEF4zQDuzQvz2VX3wGauS6AHhtPevsDjdmvh3tE2HxuPSQBYmrjimWUMsFE",
  "key8": "42gVF7VqTy3GSVrCpWU32HxbmVBfT6i2cHfYUzWWeRo2YHTgSNxF996riyKWudD1ZNALnBKtMVVHFtv9EqrP2zXx",
  "key9": "CJkWozybYmMaQ45F5soBZd5dQveWqwnc76ZxyF2xY7xMakGwEbXntSLMY5KHaAmNeWu8DuqFMmzqN63eGH4Unng",
  "key10": "4DPRTBPi7ooCGp2cRW9w4JorENb5BDTxgZpzG5kBhrjLjJjL5sresY3gSmDjbQMxJmn9ydMneQ8QVT5dggN4eBGo",
  "key11": "5gR4z9YTirP1ncLrCQGR3ic3xYA6o26v8KL5biMKWTk48TPQWZjD2e4cfAbQ4QddHhaPfpVJGFjacCJkuxEeTfXf",
  "key12": "22gwENJvMek5kGipfMPqPymEa7mwBKnuigQsuTwNyvaGLwtJybRiD4S1Y9GaRLJdMTZdVgwiwAKa8yzMxtjF657e",
  "key13": "4BLekRQZWAc7m7YZUDszfPz1a7eKFdazeYAFxwN1oykLutkVxyzt4BQBmJCeZ6wZTNPcdWzZD8xc5edQYF98C4bs",
  "key14": "35BJVerud2UdLuyty7Fat9DXYchBt9FUHFJHc7wpU8sDzNjBf8bwHn1fPopiQ2ka5BZn2HnG96fsrWbJ9BgYKkFx",
  "key15": "EUbjhCsqDGCUSQHcDDNEN7yUzyKmFvV9Bci8c8PnUow6yrRmQrsdKxFPDHzbU8QNaT7ozam1uc7RunSgLbR9HYz",
  "key16": "4spkuzjtCNYUTXv2s1wvRTkXHH2yvKaDaBUSNLY7Lk8CLigA4i4auHswRcdDUQBkSE7y3uArqDQhHvH57jC3Mi2Z",
  "key17": "3ibepmzp7Zo4oCEqewqk45ibPcSekPvuhVRMeZMgLVzn3EntWw2jqEPFAte8zTRDSgorTskSngzhFWu3HyxcdJW5",
  "key18": "5xmNwmY2cxWt1N46SR3StgiXYuTKhVx1kiCNwboESxyiuGzEqLT7FKTH6snttZdDA3MyZbSgdUzBb4aynBnR5hPW",
  "key19": "5PomftLb668B8oGeLUbME3ZsZBnv52NWF6Y9bo6WbHkZv9YSBTN2iswvHrzmQC2WBwfstq9n4epDjF2rx83sVSWn",
  "key20": "5wZsjESVGVV9kgW6KbMy2xxn77DvUb56u1RxkPCzuJ5bPPLSj5u9Rg4daLAsz82DRLN6Fao4V8yB3rv1WDNcxoBF",
  "key21": "4Gyj1sZqXBXWqWCKc19PdVDZFk4FNCL1RaPzz63LJ93rACTrvCzkhbVW7jR5jtyqnaZciYsjtJje5FUHvdiUqAe8",
  "key22": "65k87nEqEJvHPyp8ZZAx9uWv44dNYapeRi6KQxuDwv4wd7fUKqwQz89SWBKnceS67vhPmS576qwh8NdnjsjxSsNh",
  "key23": "3dhV1yYSSjk7X3aQH4Cm8wTRJUDaTiNSYKrm7EaWZXG2HjgHPXHFz623vXUKsBo8WsqhrGVBPsGsydVtLaUasan8",
  "key24": "5cWySGMcVnL9R7vSD2YTUwFYtKhujEsZLDAPCuRfAVPxdcrXrYUC6J6uTU9z4SJ43wQzCGSZXvNpZqqBsrtbdzxJ",
  "key25": "3KnD2yiMsHkZUbi5YTXfmcQBPBsnUeg6nVsYxgtU343KGvmyt416MjD6GFrDWiJMub5qoYHj6qgQ1usN82c3RNFk",
  "key26": "5PTG6L88JuVQev69bNkBWMDeU5JuwMnvjK6amjFEdcrKZJpsLRAFQrWEdk8hHfgEyp8Ai59jj8i6Tuth76bQ7Yg7",
  "key27": "58YfmtZLv2XoPG236joLAudvaC1mweVHX6Ee9iaLcuL6FAqthtV7GXN6NaqTL2FPYQ3nZaUkiBym2zDBcH4MZiYR",
  "key28": "2kBzFcVbNPYUDEaZwndpeL4mSqRLFJhkaMU16UcCZDUtaR9xgyaCSAgu47bXoJGmpSd4GwNGNxGQbnWWDPuy3p81",
  "key29": "66WMVs6YtAbGhkBHUzyEfbZsKscQAiXoVFLw6UijrcKeHqSqCVDU5S3Fr6M9FYmAc9da9dAggHY5NW3m821fygq5",
  "key30": "24WqriKG8EwKaSB6nsSzEpK7978GwqouDRNjqQsf69xdGVYdS2W8CwPeudHbQWbaHPc25ADekAKV4P24pjCa8M1g",
  "key31": "3rb7bBhaEHNnBUHthfU9HsVJXW8Vz4WhZoyXiSRUS22aThYiYGZkrtaiCtorN6D52t1qurweomVJ8fRmJB8WFxHJ",
  "key32": "QM9XbBPiDS8BSE32WCckdGs3ZzwKhKKodxaVLg4r5k9n3Q3pYPpQYtYGxHNj7MjGnGzyugpvFHT1Cerq3tQHZaA",
  "key33": "3HCUf4Wzw1qiMN9GFJeUqKJUEyDUHVLHR9oxiWPp8m6UW3cZMyFXqGizha4wSjuF5QxHn3SGZQ2nc5rAgkTQ6UqL",
  "key34": "2nDGHDfu5dFHJC1m2oRFT47pWDcFBHmdgjtTVBhnYYaqcJd2DHwDQrr8uDBRffdU4N74CWFAfn6c4qGeLMxsxKNe",
  "key35": "3gs3hyeoaexKFT8LAofdYK2QpmKMk8ABrsmjH178ZU2QtEybpYAYvKoqfB6p1urJz4jNiBeME9onmYBo7XpTpab5",
  "key36": "4LCBg4dzfAHoNAWYzgqNBzgqCeSfX822pqvK35eFrYSiFkFstvYRQ5Po21aDYmVPhmo3BLAgBZiE3igtdG9Grjkp",
  "key37": "2GvdLMcu1C88b5jGLmapu37Qewxzo3dc4nsDL3p5ztyDymj57sSPuRiaMj7pT7EyYrwDyJ9PAvSRpbEebG47hbSZ",
  "key38": "QA4zobiGz5xXx4c9aHWQ5KsScECgoDQTXkWqfz59cWMFX9Hh2cBomm6C6mixU58nz7KsxrLwu2UQ1v4GYjhN4ph",
  "key39": "nC6XpXhWwTtxpW5c7eMWE3MRPmj5TyFLGnqdXNuED7RADyaKvfPNRE4SKQjduUy3jsfY72MCSfUxe5UCNVWMhds",
  "key40": "5q9rhSzH5VWqy13maMerWeFTHNA5tsg4rjEF4zLXfc7YxmhpNYfzixtCKZKLXFPCEJCVAHyydqRhoTNA3k1CGNCa",
  "key41": "2cBSQbDqE5NG7z8Wqxvm4qHoU1EHjMqKmtRM7FrxUm8nDMtV4z9Q1noQqgAGFKdrkQJq2SSKd3zK5enYTy5ipNUg"
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
