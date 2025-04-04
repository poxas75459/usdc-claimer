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
    "kuk63ip4bkTjnUJRPCYZy1wPDssyCg34bpdH2Q3hb6zkQu5FPLmHqAVcQTHLNuaQ139QmY1MNw2XkgQaxLYzkuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wbbBQ7grh7XSsCFmz5ji5VZuWjD254JsaiyxNFACvs3QpWizopBvYjy5mgzkQwPWrFpshhHHmZhSQCQD3UTdcmL",
  "key1": "4kndj5cD7KtBcJxnGwiFB2cTAJ323P44V9jxoYCkN2M7KjgtWUoNwURGBwP2BEAcaTb85YpA6AWAHB8ntuqzbqhb",
  "key2": "59Gm3GL6kBxkSyicaD841arCgbsWBC1iYp1Sq6PqpLqe7gPv1RF7KeDZRCBSfjbgDgvb1qzzsMizMEKrU4ZYTVNu",
  "key3": "56RZVeyn8GapUm3EPyG1q64CHFRMMYPbVqpCTZqjpXU6xcGxPaYqjX2KttX3rhsXMRPcJcH994GJQJ3PZKuYB12U",
  "key4": "G5ngMEq16YN1yWe2neb6Uzj9V8GJiBDqYYtcqSE8L87vdyGEWDzL9PTCzWvnEv4wuJCndWRtGMQ3FWWH5V7M6XM",
  "key5": "3VdYd14hsSynZiN5mepaagSRjSY1DTLUhLd5sLTjWUWBCnMtRHjXizEy8PtzhT3pkrPBgbjHEKBTEvGf4z3wWiXK",
  "key6": "4fvtg37ZNjwjSYCPF32SQwdifKv5qEyPHQuTifFNboAt95aePGwpS4G8d2CQoDZNcFMGT38EkH1FtMULkWdpFDyQ",
  "key7": "3faUAbrFL5iYkrTui9cvo56MPCUja9YBFkfHrB3kLD5nJJYoPYzwDcGvt4xCXRLG23egYQFjkRnzgEt9G4oSyDvN",
  "key8": "2qaVFHgpUNPp72cH5ZYv16mFQmHz6bQJhhtEn47VDMcJ8ENGS5NZkCQEEsKvaLSM2WGgDLG8x5PT56QLbA6oMoBN",
  "key9": "5aUZEKnaysoCG3NqWEtYZhFn35QQRLqJ8Qu1DvwaaxAw3YdKXBnFb8JXi4w6sduBhSkgoMB2Xckz2TpWtJJxSVuC",
  "key10": "4hWJCgAYXoGrANfa9r6ZUgpUkiM1HPhvpkJyg1e3RkkGNXZVucJLAEqqaKEuAvmmD1Lyb3PPA8G9xjRQsuJYJxhD",
  "key11": "5MB36QeiYV61gWEqEsSADMsd5SAZUTafgqdTdTxHNYASuswEu4XR31fMm6nCxk7RKbAAB7Lt4ntT2n7jDQViD7n2",
  "key12": "2DSMMAA6s8DjYSrsd1EBv5o4t4SbSQBRtziddNhFym13ixwcUH2ijhR7HhmmkUu4H7YbCB73rWfW6cRq5r9w3RNF",
  "key13": "eGDkNE3r6Hopf5PFZ2F7gQAG68UmA7UhSUm9NR3viquNdWqkUkZe3pMjXAbFjYCtcDBNKArPUSpGP1uYY3MzjRM",
  "key14": "5spUe738fa3YRvSmMhNM7YQEhULrZFDSeMvbisWYukv2PsR1Gs2PDgNLufb6dUdk3WWaUCNjqcTKm7ua4z3NtQZe",
  "key15": "2rtsdiiBQstAZEhtRhyHpvkdeLiJH2XvysvvDpsPKnFf88zni5qbemLaUF8ENwGUSrgJhG6ge422vvqYyR7prT4J",
  "key16": "NAq2NMTD9ZbbrreLz3jXqVgg9WHkwXzKo1rQCXgxfYfztVN8ixXFFoqX7Uzi7Z9HL6Ym5qyEziE7dD4yHJ3sSBY",
  "key17": "5SCivNNBcPT6bc6fNw5xBKXW12rkEHxqNkp6yLxJNnchbv7B1nFHN1dsvnMjo8RQ1QPbNrCNGEdo52dU7HhwkZx5",
  "key18": "2ikVKTvSLwFqo95CT98hmHHXHNautc7KkTGnMgocMqQYY24fSbKMQRZeAhKRTAenD9itvfZbYUUQPM7PN2h7DVgN",
  "key19": "5PaQrm72btuntbKdJZ5g7KnUSzxA3fZ8MNtVSzwfksG2cMVzuedDDG6RDSYTVpPPRsthqoeGahzSfSJDLArQJTp8",
  "key20": "2jqH49sXKei5LfgY9zhnZL7epsrkYpSZdxiv84MCpiZMvSBrTEc99jpx44qfokZVqiLKtLpHmmGthRfRPqEYQQfA",
  "key21": "3mWCsDcdfYqMQKZowWFyA1tLoK1mBKNTLx6D767y5Jr8CZSFtr3fWaM2jA7fetgRxyL5byAazi3RmKBDDpvJquRV",
  "key22": "2XTcjDKUCMJmprxYaZ3HjopdhUrbhvp7EodTdxpZLDGDKtva8RQ6itovmXJNvWxW74F1NmTKcGDuTE3DcrifLWTf",
  "key23": "2kKKCuBMfvJCmZ8r5xe2oY84o3YcxsFPkbq8fQj6nBsqT2gWkm2aE9JiCyPtUMgKcAYNr7ycVsw7KRLW3ZWQCzt1",
  "key24": "enq9jyaqyu7p2hdz8Gyo4XmsGYreono47W6Hrknyq83je5Dk5hCKHqpZX8bEVkk8guYESuav7K5uY7raKPTj2mW",
  "key25": "ZjgJh4D9S3GaKdsntGcB1UDULvX1hPVQsF2VDY7fE5ySQQT9fZ5fWmQ8u4qwcoAJVYkQRg16TP2KEUw4p26J1dT",
  "key26": "2bK7db2mg3yvnS9yLSwtsoeh6ovzSCUmXPF7GVCprLGLMsGRZYkfqNkkr4rXLeU962WNX2oaj1mibAHMvw5gmLFb",
  "key27": "4d79hU3u531Co9XA6yqHwZJKiYwyAUZ7Tn8RfNWFv6mCP49FMNZMHV3msM5Dqph2iefGywj4KeYTVLd8UWqG2chF",
  "key28": "2GdoeMpd8a7UJzN8BkvXhUV9DahJ66Xp4HywNQ3KoxvR2AdnvsMtxCZYGnAyGFP8GY8F3vAkuwhS5d8xZiqeuzRz",
  "key29": "4UnvW9wrqzUi8d9EPUoXYhrtMCEGQX4QjS9C7yv6TkWETo3c8AAoMaf25dvzQ6n64iHs67ch1sQwjsNnEEZp26dC",
  "key30": "i2VesDmVzLUUQ4XZUeuxfZ1q1eajo38giqSWmpVc9C3eJijTfMPJekUAZQDRCfcp3dsW2TAYYpnYzFiyLNFY5Mm",
  "key31": "5oAyDRTKx2K2A15pW6Twg9snkyZiVvaEGcK2DLPRuznf5MyKPykv7NNzGxNLKC8aTHGn5exRAbFufyi7TaSHnGuR",
  "key32": "3dmMwZ2GDeUQV8Xg3ChiCQ6HKBzvzgGPwSqwvHq2qQbWgGJtQYBBNfDyfsk2oRYsAAmaHPy486SSdmfHLfmdAxUr",
  "key33": "5pa1Bdsk4fstMkY7AJ8PzEaBvJssTrBrMH4yvuNouEXrT5zSafA3bnegnDUxjKj3Twz8YhYEzcGqu5MHEicp7RmD",
  "key34": "sTj3LGk4yL31ySe8CFGgJnrBTgv7YTvL1ug74NiqCC24a5Yt2L6YCHQFHv3rXwdpnJm2E9AGQmfrAamYNfsNmK8",
  "key35": "2YudUjEbvV975gWz4AmJzwHKvdgrtwVYjBsVGkyJcK8xpFQRrr3BYc6akbLPZ5Tz9Y9Da8sM8HRixut3oVYQSfkQ",
  "key36": "4PV5qCMmcRykwuRASbNzcEoJczVWzGE5BA9wzkh7b98Ko4fEtFhW26Ath5LRYcmZzcrcf9dWH5YQvPqWGEa37hmC",
  "key37": "4fF4ndC7SCXZqYZ2GKbbU9NeaHSj6adKV99fyo5SaGc6Xq1NaKefdrAxW1J8kEfSN4cQtFp81xwnm2nza4iZvPKL",
  "key38": "39XuqxcH4LKCKp5ZQKRyqNVosiaXDNiNm6zf5w6ExAe4nYgjen8cR2JFjU4BqifdC8ftG6uKWSPNLfXpQ95eHJ7N",
  "key39": "3Db9Mixcak1CQBwWMcis6BTRztmRcYpbMXJUtrZS7ok68NTufh8oJPnj6n8jZJ1EatAXhvrFnWB8MyPpzKGC6iZp"
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
