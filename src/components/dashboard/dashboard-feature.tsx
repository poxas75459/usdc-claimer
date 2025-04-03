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
    "3mXuqiBj1RhqHp5bcMwzFUSDZSEVTqaTj8BnAukehqbAtc2JNvWre1YsV8H8m5iFKASvtu3ZaUVVnaXoW1oygJZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B3VVcPwe8qJrKUbxTkSqcGQJuwgT2XDSDRYpHokCnrxw2uWgMv4yRxSi8UcwJ4VsmmEgd6vnfZ7LoCN7wxuDAh3",
  "key1": "STM8XqWB7KxLkqS1VoHvvQaAjWCTuGoyEjbWDJHXFTKviaLHZ8ba7GozHgLgtoVcBCWkWqqVuua4kYnAo9CPHbd",
  "key2": "44Rw5QNXEgbZNTqraRRFekbjfwMURR9nymhBz123EMqrEGYsUyRhQmWSMdGfPpQbdfhvpUXUdr1MEXieCk2EZ3PT",
  "key3": "5HYiwAcntTFSCLEgyLwPDrsfLGZtRynY1JgFbdxjQaZGcJcmD8jD5BQT6wPevoEc3t2xtHXDoGWTebUsEzGtHKYN",
  "key4": "237X5ze5fduQ8S4PJbUyDFfDHMyNA1V8f67rkJQ68NbmYPYDVHWnSseppmgjNYeBjQDc6vtySsz4nQfAEECb8j2X",
  "key5": "T715REc66Qt95J1eZAMkZJLgYV6TUp4266uptsz5xq7DmiHNY9KFiGkzFyHhKni6SHLVbd93xhV8GRwUGm9Db4B",
  "key6": "4zifgX37nsFksCjwxp5F1gyb4FAuVYo8DrvEZ8ixUyzVmtGvVLd8G2ZT56SUcYnEhfMQbbB8k8UPwAmXsV5eTcCs",
  "key7": "3fv6DLbZgZ928bXj6gnRdgb1R43hJ5SAPoxsRY7Lss2pXHXG3wc1ZPS1N9hncJCEAdrSNvy4YyHW2QS2McppgJiw",
  "key8": "643LzEfvp9SjeFVPmKxpoZYExQbk8GDo2FwTKFUq8KSfQ4r8Jhzy4dcE3fw8z4YEsDz4P5N2zLr5sjdSHFoHnLkH",
  "key9": "2eSDeQJPC3toRp2P7rZmdEUjXtGmzrGtFvDrHqNQgDUx1taZuJP63mtShtjLAVtRUAWLBZSZ7XBkbNv196gY4eZb",
  "key10": "4UMS5QXjSHpwQyi8Au3ZKYbWcPuXy3G12PTsszmWKc8yLT3HWH8w5b8kSHcPy9Pv9oD71bFXRviwEMeJXYVzAQZG",
  "key11": "2aNv5QmUvehU7TBAyfgYYqmbEYGY86wnPya64HvATnQkgVuo3r7KgUEDfTipYiU6woZr4Q8gkLFriDruqAqB6dDN",
  "key12": "39kcaadv1AtTFi35ZnvRaA4onJznoWVWKJLpu2ALAyinbssjUq7bRV13z4ecX6g2iRVaTjk2CGATBPneTDNQrWbY",
  "key13": "5r2D6TozCuajQ6sp5SYAsMYXZtjGnK6Fpz4bwpCanhassMg38abHQX54GyTqQ4hNy6pFidogRYVG222RLUw5x6p7",
  "key14": "2yQmp6XznSeuNuCoy61ZYPRNuFJbvsorRwDwcvLdrFdUZAWgKWKEcMkoaANN6Ly2kYQEc6CQ4XqvLm9p6Nf3KAbe",
  "key15": "3C87KyCw33suUbtUzJbTMJFNzA3DrbwRbkvvMWVWN7Yp2DGzoi688bJzuQ9YY2ayyQQfChVaptFNDitmSCvSRdMH",
  "key16": "51MkTdJ33FmdDrfpStMDwz5KXKL6Cgv7wiK7GtkfM7dCCyqBHG9rdCYpfuk1erhyZEQ6Yupg5zXpht9K5pPCw1Px",
  "key17": "2uZDHxFLqpuj8EqJpFxxg8Ykgrot1NuhHCjozww2HxHa7soPwatsCeK73iAwTrJRMKnSUWWWSckhYknNqTXEmxSC",
  "key18": "4dLZTYy1kv8GSfZWFD4hVVBnqJubkHVRdy4f5qDQ3zqKBUGpT3vdyjRAz6P3q7RBhQrJZGaLpMFgSf2GdPv66Nog",
  "key19": "2vPBJ4LhQmaSG59Z1JUYsT586yFycUwXegoVtAfeeFwVZrGBJ683BGxivHxQJUwxnrL1JGEyLo6Sp2FTwVA2Qz7B",
  "key20": "3gz3NSGDwDVUo8gLoMaPbR5mxGzU9C3F8FZhgVZ4ZggcZJ3DagzkC8FcESRaga1GSEPu72xZGzXyiGk3AcUPUHF9",
  "key21": "4tTAENfuQ6S8aV8K6D22mqhvHu1YK7dnA9zoYTJmJHWs2Jnrds8AtGLLPwNkQy33KdFV3sqsRByUCwN99KyirJNr",
  "key22": "copRLq1btwkGfiHyTeHWyJFKZxNu8chF86iQTtHWtuPLowN5SD45rdwjsiqkNHqifpZWavLuU9a287uBduYyqPp",
  "key23": "krZPbinvqQCupFiRXPXkdLGMjooM43i3p8qB1DsbuhmctAEUMUMFhr2jT51CXjNqTR4PaMa1dSYWLpjGCUwZEtH",
  "key24": "5CneNYqmTYdPDs5gYuhK6SPPc7Y8hUqdi8d6DnrsUm4LcUQSTm57rRoENUe18tz1u81nqeUo2rZ6uamLDeLw8K7J",
  "key25": "5k9LNP78H7rBFGKZLJm1KaCdTRiFdJX2MjpZHNvwPn5NR297tAhQy9yxAexvWSWkXE1LCQYb8BmtAkxvCiZ7FYej",
  "key26": "5zMMhhrsmMaZ4kfjSn8ASBUBWRMDjBRek6Hpa8FpfuA1so6keo58ShP4P39z6YSJhPCrLWGwkEfQoCpXcXi3tzex",
  "key27": "3ggaSiTLA6cBrhv4aARwbHmiAUCzgyfGW255PdveUG2G5G7dgYUqgTzSJUutEzEtG7QWjgErTENLEQGt6VdxW7bx",
  "key28": "3RPgpC8kxgDf36nuSXvxBHzHLxzJ2hkfY6iiC6Jv7hiaGg3Zgq4QXDYJiDLReyMWPPq61EtBzXe8xKXDkgVsbjCF",
  "key29": "2Ed8Ujvh46h6ZNcU2Q64jv5F8sSwHdTrbHYAW6kp4P1P5ZoEX6nyn7QNP8HWfo9bnZoohSbtCvLVJRGrzyZANaJx",
  "key30": "3vckxeQ8X83RX2nZvQCjB6CefHZA8drrYkbrWcEokzJ8Rr4GY5rc7BFr6NtWKqtGRu6DWGpgo2a8btCY4aQEZo5T",
  "key31": "3PggZJFYf6cvMY2kUB3aqyiMVwdJk1AUVTwH53dBwi29trQZHSanWDsGZe281WqHN3NAyW7eShgG16ifcGeWr55o",
  "key32": "4r6Sn1L2fujKb32iFkTFcm4Jo8LgerevfY3cwz991vzQJVbrjHHVmYqj1D5iZBtRhS6CKJWhP7kkxbfp6DF3gySw"
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
