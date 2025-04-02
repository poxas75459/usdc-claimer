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
    "3jRrfx8LGcsPAdBnn9qzjPFGEQwvbAMXzgkNgNx9keMRbswtahfD3ZTw51EPrxBu1fPSTxnPmLYsr4qGX1ddkCki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aiPt4nYpt7R56zAvBCh7CLWP4KDzVBiQ2uXkFh8KsadDrHhwxB3SdeWaMhigscdgSA6kacP3XWumhcj9dP34tuf",
  "key1": "42BG5DG23LqyY8eELvrb4KGs1CFVN8MEtndQLeqB1g1R4kMTjrzogr9Rn95My5ZLFZ87U8EGNMjuEQa7iyGzARia",
  "key2": "2XWAqEfveFdjDoegGNLDj2X6bdUUxTezucLTNfey3fB3TSFuy81sxzaGvxy3vw5mRU4fLTDkKf5a3xtVUrypVK4o",
  "key3": "4RzeAETFa1wQKvjcV8ntJhLT3KMHqzo4bqGE3wbyn3TiUNX2T8z4kD4XB2akECUKBkZxh6CmT3UL2AREPqHGFYGz",
  "key4": "5vx1RCq7Qh5cS7HFwhRRKwg9X5e4KN6iPD7zMU9S8wQrbFJGmXCE9Xwt8LqzuZ4MWQ8J8XQN2L2Fw8f8YBPFi92",
  "key5": "qfrtymsFuykxFiEcfmtQS3gscoXs6W5mmESfuexkvXF84v7ExdEU4Ydf75rUwpKsLMcqX2f45ZA5JavjXHrRgLQ",
  "key6": "36jyzEuUa4EEBedtnheZ5R26S4HMjYmArhCnEsFY3ZF5fMfHrTxLBDE5Y9eikDH17Bb3VwFd4AfV3U6xtEUG9tJx",
  "key7": "2tgoPUdsXQ299UNKQSfrkpqeDJVz8NoYMxrQzi4kFEZBSBGpZsqjRSAQC4Kat2YXGGJXTnJgDpfPyBbxBhdNjmuX",
  "key8": "2vVWDcsuDm1p7fBWBggKSwQx8JoQ2UQtCqD1BX8sJ7vVPNRqBzp13ZQiFxHXeDdHkseKUUqCFkoUwyZvoLUoGkZv",
  "key9": "qY2LptRuwitoAH7DjukcWem9KFGpPb2ZAFqJ8JVfpN5Crsso4AgUFtg6RY55rZ9YS5zf3mpNxiQZ4QEe2NW3LtS",
  "key10": "636GsnmmcZBMMwqNfgowXWv7w9KmsjUHpnsjTC7FKZw4BTtBRkYe2SrmVJdSM6SPCzGaaNMgpWqE6Kv9Cnkj25ZC",
  "key11": "B8P4EeAd2SuDSjH6CV3HFANNSRbCxRkbFDMGqpQCTZkbuoSzkWUaatLh5PzfvyMCtM5nGfJKwX2pBNtpxr5PFR1",
  "key12": "DfSVrgGrcFzjjRZion1y7A1hQYYvNxWUgzj6V66dzZSdmmcqDiiH1dwF6rGkWpwfXwR5t14pm352DqY9FLCUhn6",
  "key13": "dWenDDv6ECV2GBb4rci8nXuK8HjHbsCAipaw8hEitnMiZnCp3hSfkG53JzsjqNiHogfMJW1HbyrWx57fpC539tB",
  "key14": "3DteSgmzdY7Ni7ijGSGfK5cswMRMYMMrHuvgvW43bH18GPMS87CDqbh3QEigazPSDrptVkmJhFv6G7LNXy4kp7Si",
  "key15": "7qbtY3q6qTiBiu14C998w7wVPrmvnHWprmUTXWSz8ubuzkmWgxgG6ennxDUoG4LsstF2VPa8TeDXwrhKrt2R7CL",
  "key16": "3emGuoZvwKrm3iBmnZWpQq1HJzW29Bu3BcfkgQK319kU75MH4ALvGD93D2NQ3rsXVUcXg7Pg8vPfvw3tuvEumkSH",
  "key17": "2QEqVizs3xcA5QwxmgeBAef45CqsJfh5DSdxCP27DZpShxCBcsFvdPv8bHcUpT4VcpRpdstsiFtbyGMnPVuD8HMP",
  "key18": "4FnyVBpZ8m9Vh6f5UccpRRZFJ1RSwKiCcWQBAwYrGV8LgRe67yJRwrd9pcAaC8u38pXJzgFdQBGCycnNd9vpJDM3",
  "key19": "3haLHYNrSCvf94a79VTHK2fEFZfbSDQeuYv1V1pdghYWQsnBDjVdzj4dmYsyXPdPJiQrU827kX4up8hGm6ePA1nn",
  "key20": "43QcUfwhDhpQq122pMwXCUFGrnxMY9Edd2JtpVsLxt7pAzny7HRuHXSac6uh5151QUo3BJQRLsaFG1ogyu41eT9w",
  "key21": "2g2X8CvPx5xpQ1qh7VoRQJ5j2dqPRMqtDyin3SivE45vPZbB23ThJb2itKVdZnaSE49mgBe7jcjyLVH3zkpz2P7z",
  "key22": "5qHo9apPAcBmbbTfC4BRU7oZ5cgAJqkMVPLU9a6aFV3gQokrkqXyqmcv9sqkiW9QirVf1DdQSgsVfrbQKQyfmj5c",
  "key23": "3R93rRmkQgURatAEgEPbLr7NSXGZ3uvxTzqKBhPYRyHYoyUo7KVZx9X9vTcRLBW5Ap61nR99XDQET97uPbQajeFa",
  "key24": "gV9E1CkxnT3Jd7w1EanYNNRxbFqLd5jLTnv2gSjmFStJ7qaAk6C3JiXPVpJJ6otb5RtNorHKZN42dGkAzijnqC7",
  "key25": "gXDsAHkhQtq15rgrpWdGT8cy2WZhkJaMtBhjPp24Lt6PYEPMPGbpFeY14G5xHFKJhaFA1zLSgX9oTZJ8aac9KVY",
  "key26": "41U38iJ8xTGM4b37ZrNTKEnMbA7Pe88z718U2mn3mfgMwoQsnMHRMWzFVMmzFYWXxHqJqcLmVZw8jFe44Q9K4oMm",
  "key27": "3PWFeicrpoDHWfcE31xo4EeEweSyG9VYeR79UJQx92kYecS2xnKtfByYom15PysVfp43x1hu4RUC8gUeh3nmmypG",
  "key28": "2QKuxHiKwYtiHMhbEyStP8QhHF5sAbNaxQmLNC4GjbMEcPZXmuVpQ8jLwogHad95uiYoGehUrp24bwA5C52LMGVD",
  "key29": "o1qURWMu1eY6nqKbU13AEfLXgXzns7wYeo7yDNMYFx2fQ9E2HVRjy584UKQXVekHiy3TFsQnTbFy6ZSBDeA1XMh",
  "key30": "4Qma3nLTbfCkjXDFhvaCsMhZo3xY24Vz4K7SFx4mDC2JJVbY33mhCDdGeeCA7JLURr7F8ztAmpkWwypeNYXEmQZL",
  "key31": "6TXcGjuCAG9XbbZXy7FtsJ4PsSoELeJDZ6PoECfZQPAfoQS2fMbw7L4M5RFdKkQsgaQ9knic8fcBVynvwTYESsi",
  "key32": "jqMPhndNaRWWYjMxXRPEJmS7VJqpuCG4qwsVuWQ7AWRbZXA1Euqnrp6AZwVNoXG4XAq9JZzV2ckkbkuV4PsBmVk",
  "key33": "2jqLhTS1o5nXHh3CwyzW9dGMQ5bXLM4mYWtPLCgbDYuVk7Q4eQWyd1o9FqtkuZhtP53ctwsiUeN7dLAGixhpqCDD",
  "key34": "5g6zCDjcypNzreqyEbWUCpSDFXZyzHYXN7uos1bKdapi2bio4fMAxG8oDxF6YKqTZvJubMhthPa7P5JdQqTGccuK",
  "key35": "tgWxz2gELCuBXEAs5cWots3aEBcWXQLmWE63HbcBmbpzSUqEz7jzF7AH7vrhw8UBSvDWgTWnicb9DFXjmECAW5H",
  "key36": "RZp8QSE1xeUM3skZUxsmSiood3nWPyonxN3hWq7cBJsSjwWYdHmFfoKLws7Eiydfbd7i7TrL85HZMR4Y1uW5SEe",
  "key37": "4dXWa7YUK1VCFWT8Qj9Z9pMVx6qMYsZgxbgJvDfhUju2RUgUNnDVsDxkTdNZhkXCfqVyP13HFQ8P51BETm59x4KA"
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
