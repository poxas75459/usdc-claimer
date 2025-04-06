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
    "4hE6GCpS5Jrinbe6Sdd1vwUazY2WHTFNmzwnJxZA79tsNsaComxYp1n8fxv9KTqjZwUvxgqsbopXyd1HzXJ9rCRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uvvPCKQtBtehA8ecNqchczRUMf1Nz5YhSkVowWGq6crapDbpgumw3mr9Z7pAXq1q1BoQabJYev1wYantjgJi4Qh",
  "key1": "5Z339uoRpGUNXCnbUgyHMiLMYRYrrpV9aUSy3XFhQLmsPFE3Gpg7i6ALYPhECV45C9WQKrs8Qibb1iG6kkYkHjeL",
  "key2": "2YbgzkkcJE1wVyqPE7Lvg6QJeovem8oZ1RntdinaSwEvuJxQfEcvGz2FqVw51PcwX2eBvjfm8NxVmdDiK46Akxr7",
  "key3": "nu9vUe7vSX5U7xQhj76wkuLaqByNDvQTnFGDASYr2dwWuoycrjanB13ucXCQ5vBSxHhbMNre3WPVUCnmFzLuzaV",
  "key4": "4uRMD5vonC7ZVxzjSfzE5KjQPeYtSYAzd6kLRj1Z9zDMRjpWtVxTcDwNmmg8JvFqVR3m5kNNuVz1hUtyPHSSZ3pq",
  "key5": "5JEzwQ7YGVsM2SJtMz8Y7r7GWdhW9ibJbPyxM1XBiZ9XBKmozaidFqENaVYqh7gVMzgMPFaZNqeZ87PdgyiL8V9r",
  "key6": "3Y1jp6VFsD1kZAKHGMgnYpG4UihGs1YbX67et1ejM5EG9pFchhkvkvtyeJvpEPyzEGgU9yjTj6mhVaMYycm6G3ir",
  "key7": "5KyXaGL7wrxACSpCESFEmFv2M3RkJt2ep2BUNQGTWr2e9QsPXsJJ672JU44kguRWfPhxWHNu7YRMYemMAKXKneH3",
  "key8": "5UP9vccKEtsnCXD7ynrt15oEvUSMRQLWypSAvoM6KHm8dTPrKDPPjfKm44Ak4tXKQf8HceVmeFeECKcSmUW7nrJy",
  "key9": "5DoXJBJHnq98mbEHRssbNmC4EpYem3dG9cNFnshjbDxmWyPrBCTu9RmJs4KCZjHpLvUitt1P1WhrgNxH2WSRrBzt",
  "key10": "38ptmWMrwEy9nnmPARfcDcXzGMT9tgGudn9Z2bYMrT7kBWNEXQdczNRxneCuppddDiDvGzLQQb85NydYZzexQete",
  "key11": "LpW3fgJf4Akzup39m77FGjC9xZkqr4RVkaTrEBcpzJVcCcFAiVGjhxpDwthRT9VoiUodFQK9fGRMRFVnmqpJ3Du",
  "key12": "aGbRXdXUzJq3pDM8Pgu9KJDgYqhLwE8w2HEfbZBbHG9JzZwC887WsF4ocKG4bQALEoADTozzpmtdVwGEk3h8uZh",
  "key13": "2Mxje8pyrLVZY3m5cFsbnP7NNyf58uZ1P9erUnLKKafRmZ9tJtaWEhGmSmN2Y5ZHwGnFSLm7nYnHrYSYQcaUKVT9",
  "key14": "5481wH4JAXzn2jefBctFArUML95B56FWTFJP43A1YME1UfKjNaaY94NJNxmvcto8NUYfhE2GhvVq7ZLk5VjqcAtE",
  "key15": "2kRSjvJ6uGj97MWkzwumUH56scHNacbk9YiF1oStm4wJmtJB9rgyJJD1nVw1AbvgeXDDrpxQCyVnyP7H3Eyv46tN",
  "key16": "x15bL2kdTKtPp6997JYSFQsdaPbLKusC2Mmt3AwBcRZd8iB1hhoaCAEdwkDRohU6k5gQ1z6NUKowASPF4ZyM4tx",
  "key17": "FZdjr5LMXGj4WeqwAcmaiaBcut7vzLAJn3C2x26dFd1CyQ1tJEEPWL5kLkffrHdv5CwPkgTtuAbqauVuyZ1ZAzC",
  "key18": "3aam5s96gfRqUpyjMaTR2ABuWhY2GbuJDaXXyoBujQYmh3NRtgqMeaueQAov6qfXgqzHDkBpaWQ4hhnzXMwyFdL6",
  "key19": "5grUM6ckQk4mWjxdiRo8wp32sgecTbfA5uNLfR2mprVzy1aPmHA67iTZ7qEXb9rw9M3JWseHaMpbHnLyPYegHe3m",
  "key20": "5JANSmRJ4JMm4KStJbLLHxpzskeCMn1JZhT9wKcURcjXBZBDPrBUBY1PYtxJNrxcPkmjGPqBVJtx9hWgxgTfL2pi",
  "key21": "2LjMnW81eshUZ9EQArBHt41hgfkdVYdPSRqLgW36pZQJDsaocBNAuqSqnDueUbiirHAkpxNBRK9H9jto88N2FvFD",
  "key22": "iG3T2J9LJzyDDu2JudbXvovxBYRMQKGuqUXt6k5FbWBFDfiSvnb3kpkkJtNA5727D6vvTvGrhdfV2rwqSEU3PUc",
  "key23": "4gWZNP8XDQuREmtjYppjs5dWd6aR7GKJYmXCrxLNPU4FpMFfmPRT87e7sdvv1YCC8vqeDCtjNKaAafE8bhm9Phe8",
  "key24": "45ML2rS6KZGJsFXJLXD4Cw2D2yaVNhyypYxceB5Ki4mpPKFTJLfZdCeAhNYZ2Y6CNXx4FR5PKoDL8nS9GKgM5SDP",
  "key25": "5JL5ZjMadsmhwJ7SfmaNqsqSJ6r6Zyw2qV6EdAhzxQXpcagwPEosp9VkSLMxRVGt63VsJPc9ezFxhrDtyAWq9XbF",
  "key26": "2oxP1wZr2goEn8kyxdYt88iqdGRS6SKGwh7hFUzvaD5j8RxRAcRP2xkmuVN2cwYcohH18JwenXNUarDCykHFN5WB",
  "key27": "35ZCwobf1eszpKLoLpj3aPeaHi8CNNjqpmgtQi3Za8C4zAFLUNfRreyVPpAXfVY5wMAFfMtTGad23yFXZLabsvxJ",
  "key28": "2qsStLvP9h1zAMFtLTSjgp9qcnaLDJk6HZNqXLgopHhJo1y2eWBCt4Do3H48FKighnxK8dq9QsNDSBgHdofm9mz",
  "key29": "64moMG114R2T3MBiYvWi9qQQR1XkDcd3ihawc8cqdUGviv7Q7bKMyBYFifEANfFtuKBNhGmum8W4ZPh8WvXWA1St",
  "key30": "5UXqzuELkQvvmuSN3ZTsA4Y6DjXBxJb43UhFA9Uys2fgAvQRLbYpri2JagdBseCz3SWjLitW7vK673JCy7zSjFu4",
  "key31": "21wEFxi84HTZYiUDRuBxJ7PKSoo8FnEhDaTVAuYpRj7mPmsvf1GPFR4pTyjDgoPGXUZ8i9Tp7HPhvg9dbR43uPYv",
  "key32": "3jYcprirKvo7oa5MoQhPFnRKeyNYXshNHpwrRMML2XUv9aEhaeYFn4yu23fnsdbVRhARUyPwnD9kSL8JcGk8yHiy",
  "key33": "mAS6ogTh916VFASHGdzyCP34mWENqK2uWJfRDy1HBGjkBvUomBeKWzdMjktwu7jjWpRt31ck11Vs6Tdqitbn3hB",
  "key34": "2WuzxSQpUyZt5nLQNPih8MyddfyGCxtYGUavvgEnPWvZFXHNe5XES2HbvQP6uZGwsQrvYvdRX4rYaWg7u6eQrFSu",
  "key35": "4xb3XP3D8MPnrSEMjThGokqnFEQMyFvpN1oPZnVu1fC49ZyasYzPK5fdeYXGXp1EYzHHJ9FSmj61Ki6mc3bNet9B",
  "key36": "2pT4eFDip7ugfbxCqrTkuiiTNpwU9ze1bww2xZX6NyphBRwayQLzxjbEQfSJzwLS2uwAtDvrNpJBXDgLgp5yQTvm",
  "key37": "oo5mqAv1nx7cdVWmxWrdWcUevPYexXAj1YcHo6d8v4fWz1dhg42WTaN3rVpfTTKuyzK3RJ8VbWNMo1kjwg8bggV",
  "key38": "2K9GwBoJvmtwWvXunJPAjh5KiuT138DSvrQNoDbwRkgprjfp5GQFieHNYyQnLn3gwoqW9P8z2gLKAJotwTWVuQQV"
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
