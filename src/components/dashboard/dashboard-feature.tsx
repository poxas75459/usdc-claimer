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
    "2mATifHgpwTh2pkfE2pmn4bmjxbGPfMMgVCiSxNyjPpCorbPCBo5k7nPEXTQSFGWd4Q5rvTJEwHMuBvt76si6fs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zFYDgGLSzyhk1T4gECmbYf7QgZpFJ5HS4PvUibiqvXazry8PzKEEona7rHX9gwEfnRoDLUQCxL2fKDwgCptw35e",
  "key1": "3TEwdBNpWVZyHeqyqrcDENMGMx3zoUMMC7H4oEjyRw8EZr3fu5gLbcwwG6KxsrFBTzjanWCvdt8MrjFBXfQ8V62Y",
  "key2": "29w84xJJRExT6nF1A9J1QMjrpufR4AN9RMGmJvbLsz9PnX24cQZ49ZTGBGqt2SsdZoYNjgYgYwcFEY8mNYqfAGAD",
  "key3": "3VyGzjg7N8J4hd7bDNS5ayCAySDiz9szAttrZqPvkcws9gw1AWQ4u1L6dDL1QbT1nJyxJtZ4SZmS9e4hvLc1kFV9",
  "key4": "VvNt511157gUoRmXjKBPr5AsuE6khCAdeHX2WswmuiR3B3W4x5RRB98M8HZNExYXCQDs5jm4vqzWEoEm6PV2VAU",
  "key5": "31SYmz2wQ85xyexFDrjJtmq9tG4MTGGYqMezKbV6hpkQMR2ZzKHrc2gvwf9hYXY5G6vocb9T8RExBe7pMyDtvJab",
  "key6": "4xsCKVyQrv14sz6digGwJoRAwBEGaXeHXGJoodYuCYtMk9D7uP2HDJivCPPA9nSaWRncRds5ts7WYMLyXTQYRiFK",
  "key7": "5zNHbjmKJg4ovSACLbs383JLmgSqPLEYwEQmKCX1wtASd4CRDWbQ4ikzhrYbQzVGAEhCumgGChrtKs9vjhuuvC34",
  "key8": "aPJNuWHD2L2GCZuXf8ycbz65EKxmhLyGf3WfrGWpk4LSHz5qzeUtvBZgmpCsDzZQ4J6aWR7TQdXJbhmELQSUvwA",
  "key9": "5C9xG1Uw72yLo5RSPb8w1XuokLkedGqFW26cvqUH4WExo8MSE2PBtYKuwhu8aQqtha1eesBhfikCKSk1cnF81vuc",
  "key10": "3F9jcwbsAdD457Y2B2KL7SiZKgW1vRnZD28mGhyZoNYpb9fTyuq2oc4ZCjiUdxURBVnJ4AJm3z59mjGxEw4UJTg2",
  "key11": "2kx37RvQykWpYD29EUMyXczusPpRj14U36n74VsUFfMxKy1G5dxXbwhu912yyWSJrT87kYuHQoE3oheLLXKpCndn",
  "key12": "z95Vm4ABwBxJBuxc9CpZknsfSx7UtQ2T3jgc3UQEckvXLNPKVHE2W3pjGjFMqFiEMQqP54TkqaxCmzfzSBW9Rj9",
  "key13": "5LVw2cEVZ21LdDpBkUdNuTyRmjeeQPwLrd79VVSZ1tb1edjL7C8VojnGhPyMePGUE9cqNwrBDNMoEnMA2Evf63Ee",
  "key14": "HmncJQwgSTMeGg9HbrgiqtFyj1JZf4vdJDT4HynnkYC1fhTmfMzhqP9GtqHcRusdj5s4VHAWKKfZZhLHA8WUJMT",
  "key15": "Eb3UfSW9k6RPGFJVKBZq9YLrmphHFMbEGSE5XpXZozBp2vkvWJd3RhaEVQm5d9hfaYj5gpHyGq8UdquANMwur74",
  "key16": "35ikmuriLy1t16152pwD5eWpmZKkjqEcmD9CLVYZoawbPEeQLhDz1eSgRQYGUYe9QktL8mQJGLFtF5eQA9H9AwnZ",
  "key17": "26zkZVb5rZtHoj143YSfDZH46nFnuwxnB5hwe2Diyw6QacwSo5psf5MG1JDX1soowHSCK2qjzeeeFqQ8SVcuMnP2",
  "key18": "64kpNVoF2cJbBs95CmiSruh9Fx748MUCXciJK3m1FW8LR8DLSq864a6umuXVkGQfwhDVHPMAGwvJryWZFSmRjX84",
  "key19": "3cDpuzN1xr8MVsPvHFLxY5rjprnhVxpbWq7uRR4qnsKUkDAwxU9XkhD6eJZy3WAiyEnRWo2mFDmqMrFEW525mtxS",
  "key20": "47KkaQMHeYzUZztb8LJNKsEhLuHwm57f8aVMGLyXcnnYHTiwA8j7vSqyKdvqSFdNUGXQ6FBjiygxrADR46VwkYdt",
  "key21": "6nzyNZf4oZ5iFCUdinFexSWwyf8QtEzz9Y3XuCjA1Y22e9m7k8fMtpmNCUpYiFu3114iXCeK5ydaGnrTToUfnR6",
  "key22": "66vwhSb4sJhzgGt77WVFCpYKwws41wGTH6sr7bGq2NpCnePVNiH5njUQAEz2MZeJvSBHEs3azNApeuxUEtJaiRqv",
  "key23": "EWbKSHEmpxEjrGDnexsA3YxEuxrAZwwPE7tBprsXjsTF6mQ6yACFgteN3DWqyPvAJc9X2paHZqnVFr9hx9LKRaS",
  "key24": "4mk1L7kCShoK1BfoxqygD5fwFBansc7DuXHRvK76DyjdPMiAj4hRLjTKnbLXGmniiojsQ4HqC4PjENQys1Vvyd7A",
  "key25": "3xbzSvZoyt5rZVgLTkptVtgwv4twbBRgUZdVwgBi314Jg28Y33LGPX2ZGfpikd7oepSTBDX1bupFmW9Lkd33pB2F",
  "key26": "6xusahCABDQXAgeoUuYA6DUtjc5r1aoHBJ2EHMS7QG7966zYt3aNzstyqZ86pk9CzRbFsn1ypnXsibda8qMNs1J",
  "key27": "2rHXdGS1fKJpepADMgHNBJeHiq5ecrCk4SMb5tuYdriGgjiUyxKniuR9yvvvZrBNzFmokm1Q2ZSR3b5XnzkKuQ9w",
  "key28": "64gt6dquwiBN53pGXJD46HoJP4aHiZTNG2XhcrE6cjH56pyUZN8ZnkiEirnEpoaDPQvY7or8y1V3CLzFkx4kHzRg",
  "key29": "3hepYYuRx7z8aNbkrELg7SofLmXfbBcsKW3P6GdGc9NWMDsvuyoiWZ7fQfuVesQT9UoJzQqvXvxRKVgVHSukcXc8",
  "key30": "2NCqwMKt88kgicUaJGnauDoQiB5FsLJkVUnsYHAeU7B5fnWATeDJoLa248K96wTPErinfaMBh5VhzT8SJnMwzoNx",
  "key31": "2txePzKdrqjM2NKeJjkVyMhpj2D8gTW3UYUryneWJFa2yQANVEqMqKbKEbhApzEwRzAH6AjKBc44xgD2sEVYC4ge",
  "key32": "4SM3xu2da1DxLTeuy9YqK2QiB9845YQx4FJpc5BpDg1JHf97doUYPwsduQKXABSUnzrP7fHm5Qi14nW2vCtPowTp"
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
