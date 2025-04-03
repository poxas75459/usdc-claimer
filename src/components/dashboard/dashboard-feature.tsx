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
    "3sEsaNY25beXvbDRiDzTYTY3R9cjhcDRmKGGhvZHCy11KitFYD8SwyXCwc4CU8oMAX95Hax6RnKKGmNspmCbCN6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R669autuzZ812U65bGGUyLHZSRz3g8afcNrMr7UX4zkkHFTuNWa2JJW6h4YCwZsEn5Atfu6EBKZ2QhWaGDJyX8F",
  "key1": "25Bmy4toJEmkvfvF1neL37sEG2xbMhc6tDaj3afRN1kFEW9Bko62BUrY3x9mowMdzrv9ARUo1Y4eAzrRGFNTNRxH",
  "key2": "3aCBx5ZW67cAWfvBvmbEfg81Xq1UzEJwKDT3wnj1uXiEJeDNUtTdQ7TvWQCDAr1MxFtUMZZFCM83czbYeUbcr2Yh",
  "key3": "4txz6vrfoB75CGLHGN37Wt6383ue3oAZJfiWagV4VnUwDPuUEAfdpHi6y5rfN5zkKh1PaP1QU9P2H3gsgYhXXFjP",
  "key4": "4Q1fccXeycAHsbtWZjPrCpzKNuQZmjsPPnGh6wiE2BXvXnnqkiwK6Yuq7Dq6XQPieCuhfsxVaXS9Qsp77Gz5vR2V",
  "key5": "EkPJgofv475Dq6pMbURiLhXQ9yPdhKgmZqLdbzSAfyFRQe6dEjCvqWCXbAfRRhYAuXSJuMKbx6H4p3emHeYUWq4",
  "key6": "2CD2g9kXiD1y5QXp9yCRUa5KvCzvNneLPsrYiVYsAJk8ASLM3aWg9FycoKBzF5uCqs1AzBzAD7vzVVVs7ShMjkjh",
  "key7": "5qmSGtmGrnqum4BSY1nLigwhntUWX3Ys6ReVvCCZeoMmrW8CP4mVNEb7Gd9TXAfiYno5L1B8y2nfeADVaUinNKie",
  "key8": "4tKoPTc1wYVG7fTCU5jkF85ySf3mhJURx18erJj31bEfxdMChHGH4wV7vDpNSudaNAW7s42tuNZEAWdymuRF9HcN",
  "key9": "43gqHCF9QL28gc4ZwiKt2RZvxFHepCXL5szJo1TQsDLWPyESp67BCgFSfYFyYHPsXqZvWdtUqaMjKs8RvdGTa49a",
  "key10": "5tNaT58925cYTfMLExvLyAcDdLu8zzS6oQebx46ytRXVPtikgVMyyv2X7r2Uip82rw6cxgtxnWzsfzk6L7CvaAJd",
  "key11": "3rJFG5UaPmvAr1JK2XZHcWivN29Ne1GUPLoSUNUmS3bAaA3yxDrnywn748D2oiFd17QqZXQZZeavH3Xi1857zHtV",
  "key12": "4mJAVffjGTBWAneTyZRuzX3zxckwU7Do7TBHCJtaXXAVfCPmKS877iH3avyngZ2pRPvX4rmhzyqyvNbWkf1S6X2u",
  "key13": "GfgmdzkJrYju98kFRGT6VoDKtdPuKt4tq9d9jmipsUUv33nh5Xw9AnqhFPPW8yxzvfSLUrHx3PvE92jZcHbS6CE",
  "key14": "4aKqL98hhq6Qja2NPrCMGnGsNkonoRsDabFQa1Bx16XTmj9hf6seftTRaK3D5p6XKXcFcGENp1xu7mXmGsLyRV9Y",
  "key15": "4Lbe6fNVMrgrDQ5dYj3Umthj4nNvcesreGbdeHaAwCUkXxrPFBxuYbF28PxvLjx72nNSTrv1kBE5TTzu55Hi1fyz",
  "key16": "3adnmbrirXGr2LAvWNoRjxvBfZboHJhYq5itU5givKq3NrkU7zroAb963HkycU3SUFjQPN2G1DXoTdA7y9UWKE1c",
  "key17": "3oDxfJ5cuDQZ2npQ2z8nP7nspT8HcCVC61ZVfovv5cJGBzKLQHoermUWzdWGJM3jzcPvApKAM64LjNwuJBWeP23P",
  "key18": "H7Tyr2rvNgCCwG1Tp9uqUBmM6nswmHGsszy7JEnGh4VgwftLwsK1t5wdezj6ucHjvE7MdzfXnbnF8KkRdMzX6at",
  "key19": "3YVu8DHkhfPZ5WK9VsoFLM5dyNfRtZ2fP3ChTS8TkeujNHAtDqPUkESmAUevTmuYsy4ZtifY2oAwN8WKwfrdA9rC",
  "key20": "3ZNPenw5nKCQRujop3y9nc2WEMrfJdaqGGKgYq1HxkuqXG4QLpJt46E6d1edwXuoKsfatumeQm9vsPi2QYUcA1pJ",
  "key21": "29N9xMPCtRwNCXW62KRBSBFKtq7R9Ay13MwSJZYbbTzJ51jMKBSkYfVoybujvUnrfw4hh5w3Uz2DYU2vHzrfuk2S",
  "key22": "2YRLJVe9SnEUkK7ZfoMBVTVgLi1PfFuzqr255vNX7pvbDfdwjP8CPiuNuRCet6nuVe4fF1cdzfzR9CTfbk6aTms8",
  "key23": "wXLd6J7HseP7Xn1huYyd8xpfU7fjevU1Hq9b7K5AnDW2Apv8GfCqZRxEvUtxYvdB4dvgD2QapPdF2A9JvQNNduN",
  "key24": "dwS4oaC9YDWeVYqfY6wzXHetLtaqV24HTk9c8TLPuTkW5iiKNeofvh3U1XRkzq7yxTSiPf4uhqPS6hUU9DTFeJZ",
  "key25": "5bC4wxEGSs8ez3bFRL3SJmtGJhS2rTMNCWVUUVPk7JyQPJNNQrN692hasw5nG8RCpwVLBu8yG6KnLy24fCXWWzfP"
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
