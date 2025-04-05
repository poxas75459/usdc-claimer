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
    "2n5iipiHkBGVvr2zcrdu3SaKK6AsCDY5XT63AhYr98ZStUDgHFMvYD11NxsX1o1DWLQPyvCEBphDKRmuUgPYEV1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uk6F5VVYHuWVKBbxeiEedfFZtbXr4dooDc8cpAcsEm2A5ivVjkWn9tWEsdobE5ciMHKJDJaG5gZjX1CsKwfzKmJ",
  "key1": "5CyA9asuMLesCLjseeU6SvcSvQU3MA4qjug5tPFfGp3PeMC9wXjJfwgVqSw9gC2ftJ9KWa3DPxNQ2eL7p9smwjF2",
  "key2": "XBv2CH4kfd7hV8rhTAj1Vfu7ds61KR6ZehXbXuEk5XGqmoms4wCNxSH8Y9T9NkVvUqxSa2vxUPGSt8W1iW8cKqQ",
  "key3": "4PwnMg2agdk5rdakTKD7DXEm6KtZCnqs6DxGXbcY6owUUWCrc1Gy8d51PsA8qQePBQ5mFq8hm2wmf8U6ikXoVGgj",
  "key4": "4YHfidzuSL9YhbVHp68t86UbvAMUFNxGhPgmcjL981ykXYUUnrf4Si9RzQGq8mEaS9j8kddP4tQBiKxadVanpzKW",
  "key5": "TQvnE2R4DvEDFYBQTWTSt4fYzGfRfnV5USo7oXpRg98aNxbFLtF3bsoMf3gvQRfH2f7CbQ3mjYaZE5ehSaNvSa6",
  "key6": "5dyRVazZyarbHt9sqd5CSswQrTCARYeFwgmnp9FRmUSN2f4pXQrNXQkpNiDx7KRUBENgWdUXHy1nXu8SiTJAc4qh",
  "key7": "5Nxn9KfJg9LztjSJKrzr7R7j72hqUrUJZa9UbjyS1RKJ6chntecVPbudbFEpHz3T5dobUVaU4eAB224Qh7oErYyD",
  "key8": "23SEAdDr7cGYMK9HYie9jDYLx19ZS4F5vTUbEsz3YiYEUwfXaB14nSM5t3YxKL3g1zmhRpUyzpKABRxDygBh4dn5",
  "key9": "58hDHyYDrC3RQrsTPzqGpzP7HRoqoBUEjEv24zBct9jpYNGVXcQt4zxerLBV8XD8KGXtGiBhq8ZEjUs6ka3CSGYL",
  "key10": "25SQLMJstDYuYZMFGnN5jL1K7YpeUnrkeveaYUnK66iPvMtqtqbuKFp2K94qRAvdjwoBeJ4fLQXA4gWdFaqWDnXi",
  "key11": "2ago6kGjZcU92iC3cCCwyj6xQJZ48gBoWdNvtSNmZUWp9pYBh5Zn6CV6s9FBUhBYpVrmxewa8S8TDuuVXKLQ5rk6",
  "key12": "2fTHSFRnvBitS5g4Z13KK9sHPq7CyW5uhMo5KGEfgbJfSog1ZWVfuMdya9tAFqZBYKPZaqRLgt5DEtdCzhBCziKB",
  "key13": "4rfpomxzTc3wqNsES8Q1Rnh5CFL5eVehgn3aUdZ6XPr27hrZHEVroCdBhNZjgEyEJ1U5fMhD6oUEnqtBaJervFuW",
  "key14": "5VXAzdGhJrqtVcwzuuSKg7mA7q5BWKmpyBLp4PUA6G9ZXMVZJhqA5j292ayJGspPBivi1N4KsgsLLTNg9Sdf91iV",
  "key15": "2hozDSJWstTDrHr2cQ8MyAggedtRFFweqipnnNb46YuBwunboBvhxyYLUxG5r5GxwKaDomAuLwUuPhjTHpFmHk9R",
  "key16": "5wzLzNBFgHR3QZBVJ9EVzDqTtj3hS78iB1jmzERHTHFKKYJnE1EP2MEwKRHSAvdmcm7d13LLi7TvRrLBaN1dbRCi",
  "key17": "4qRNLrp98XZaWUNhzLRVetDCmguRGuxemNkEA918QVBTSKQEzCoCLUm1UJWZzW1aFDtmzFyxFSo1Mv5WijZRtKiw",
  "key18": "5279Chq9V5XVMEuSSoCtf67NM1ENXWCbtkscb1ZHmDX3ZYRmvXNZxg1mLHENCgcXEmHgSNQnB6t4s26r1LvaVF89",
  "key19": "qt4Y4GyAYSpyUCuLbrpDBU9suLFyCcq3upYHrVT37cTEDWigC1kB79E9JbP7bvEvP6dcqNcCYsHwn5aGBeAQ3LR",
  "key20": "5cZLxHEDLN8NwRrYyMDf5Fm3HZ4fPxkgAa4v88xcPGKozXLwWT4uEWRh4VgQ6WbtyMbwxYUpcDLNsh8YwHWghvQd",
  "key21": "tjoWjbguBnHk1uAbNR9yD3PaMxB2emnKP1aLgvRdvSCeURhwP6g1cVBuRnp7SEv6f7zsgQL195oRB8YzKK5rCkX",
  "key22": "2jqFhHCxsYLAiUTNE8SGPjvSTXQW8S1iysJHb2mWxtxrQtEAhSERmeofH7wsY4ozfoRZoTL172VRRY3zYbR2YqLx",
  "key23": "5Pwx3LT6hvXAaUc6XQvTNpqnJE6wmNKQga3Rz2KdU7AMUjhfQioz3DMbriEJx9Vwt4YAdEh17DPDAFvsm2oD4FbS",
  "key24": "4ApPzUw4tQScCsverL2u1PhwBVLsPdz22kHbJ7wyeV9LcXXW4vcv3gSWgTP82XC5989ouS6rDyJbShHHbDHmPRLu",
  "key25": "4tZ3fq9ZD8QGJLbwJnxZMCQ5SjjWhcrkBwkqBfxm6N3a81Qq9iiVRUfDDjvXUFrc8tA4nsRT2SBz4r7mvhwhzB6z",
  "key26": "3Fw9WMYaXvzdTphSTxMerPA9zj9HG8q1bTE6dyn7ex3k3L6c2qtKhcYyAwePtr8d61RddncBL2jH84cNtuoJ5iMQ",
  "key27": "4Z4xzjtBiFQR8BXRrxxGgK6oDdA2urL1fVkSToscvTPswbpBn3jw8gnTsNeMj7zhnoJBzfnPBQbGcuGmT6yB7stA",
  "key28": "acrYiuBJuqUoupXPwmLyXxShqruiLca98ByUpDD339vnnNncKZoiW2yNLD7xKqDXqRZ7HZdYzDSSi2B3jECY1Cv",
  "key29": "4VcQFEZh5CP8z5LFv3ET2r23CAFrzjzotFBymAzd1GpPC8MjBgQXfQFmjSAB334vZ9ViU2anYenAw8waRDaZLCgC",
  "key30": "3rzv1mXdtXzNGDz7BKPrXmg8ZnD2BkjRvAduHSk4vNZHecfbKqUgRgbcttsACXdve79hkVKUfLwvnQ7hYGTnSeax",
  "key31": "4joa3cAt4j6rtAQW1NHS3majEtmh6Rw8mtdzBCDhCeEhFj2hgGARdDctQYNARJctrvxzcEjQsc2PxStXnUUguqeL",
  "key32": "31bhjNCFLWy3DSQfpT2RS311LGzSRSuXubB5G9NT1aDLAB2UDQuYoGzFeYzbEjA9y2nB8UxR1L4k2rzoP5PwcFZi",
  "key33": "3w7WdL7fKFbpC4cFpQWstoKvVJXFS6H6XbRrKyt1U9h8FionactDzthWevZ4SYTFeSKuAJcmhTNDYSdBGqp3vYcy",
  "key34": "aGEZV9M3BesjYdsccJLgU5DPzG3F395s5XazjdxAfsFMoxH4UQ3YEWhDRRZT1A13DN8wBd1DRDVCATSzALm4EVk",
  "key35": "5i61LSP48ijrtAbs6fpc4qjHCnzSiazvc88K4YhGk7re9638seqNFg4Xqu8XeN62JvEC8W1Mu2oGBtEok9kZ1NeU",
  "key36": "3aoCVGPG5mD2zjtwsP8p4kn7qLGYNn8aq2bpeceUqNW8D6q6bXDfCn5K4bA1KtGw26FbDkp1LQjQUGEVjLh8vkUQ",
  "key37": "2MraDySwNdUek96ZjYobXhAzfXacHXUE3ht3pnJU1iJqMPSMe1A6yumBa8ji6xpEmf2rMcS2a9t79Y7dGxCFjShz",
  "key38": "22JM4wKf3ETNXte9Gr7fbe9gutK8WAMFaEo4YxGbmjtub1EQmejmhYKRzT9KnJWJEWAiNaPwXcghNUPGtbN2CtrR",
  "key39": "4RXhoMQ9mKEmPqjg5KDauQy8Qjd462hhJZcH8BnLDG4Ear3tS4bicHXG4XwxWpy7Gu38UmZXH7FfTsEW2mMs8XHf",
  "key40": "5ZLJ7bwDFfQWYog9wAeDqFH9eLJw6M6qVwC8UhoYLpUVuXDBjyjFDFbS1mxhk3gMfu7uFHBWZ82N7bRQkB8UtQin"
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
