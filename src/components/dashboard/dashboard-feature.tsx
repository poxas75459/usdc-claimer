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
    "dWv2ZJMnXJivQUEt1QYsKeLbAu9c7u68orZMLuMr6gXN1ZY23CBkidFwBpDrm6UQ7xf5e2FBvaNapudJ8LCp2yk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45XZz1mRwvvngNyCzLdkGqNgKAkCBdU3tncN2saeCbAqY2KdSUDv1dap1YqU9jf4fCbq52h13MFfY8F19BxwXmB",
  "key1": "PZgwurvzVp1keX9SUA6F9u2EVoPBtsu2gxKZjEtE9edsx7XabZFxFa8ytvPhKBMXsVGbBfk5AK7RYA6FrmFo2ZX",
  "key2": "dzJ2E2hBm1GoThwsNGHxum7JvdFA36xtT6grcTThs3S2keaLsPyG4VgEZyxQkc3zoHq4vbVN8GDMo1kS5WR4SDG",
  "key3": "HVM783qqpyTrMNeaYDrCYdtLLZycDXnos6dHryEpnzpQVvXxV6MwmRxjbCnvgzYWqZ7wQahRc3Kafpic3hYWAnz",
  "key4": "ge8cAQ39aiuFR2j3nzUvBxSVfKGzZkCB42A55DU9Y7HRKhiUJxRPk8c3Tttk6syFB5A8rZ8mAZHyQED59mUrQDm",
  "key5": "53S7RpVn4mWXhPRtuPShBbK3kxtvdQi7yRXhpBW2Zja896Luf8AFC3VvaQxCuiLHSMhmZG1VgTyRi1w7AFhQXkbs",
  "key6": "5QDDk2W8bkRv5Hfw5V5vcC9ViSs2Vtyy1rsL7g5wi9gMVmiGy8dTGiANUR23EXmjG8oqroEq6qyWuHTP15rHrMur",
  "key7": "4Uh6cDaG9VQ7xGqn79mQU9sD1Q9Qt2b93P81YE8ighsXVbZEMDejKtQLd2kR2QagKwNtQTyT9V2bmaXBW4q2ahs3",
  "key8": "18yrJpKCU68m1PVUirKLTk59NYQqPUe8RtfSh6YghxV5BmAqLpZdXXLUaW8vRHHsvLTC4dsyYUt7Zxn5ZmLNVh2",
  "key9": "5kGLmVDwS1LirNdvpVAVmcnGgUsBFNqp5sfXV4ue9E7FJmstRG4BJey9uuPdN9sp1K7FaYLSZJqqVcPRLsv6EraA",
  "key10": "5JRzMd2UdFw2EUTJwUF3cxV4Tboo7QQ4wYnNJuwgiD6q5rKZfbpJPPsWdAwQapASaSz8PCFZUscdvArgNohMr63h",
  "key11": "BZGUNXYdtSq6A7SWj8DmWnEsCDFqE4wEJbHW2jgnZzebfzqcd1NwEHyo1kYiHQGHeTHz2RCHLNUYLMU53Ujifkk",
  "key12": "4yfy8cf8LwZpsb7hj5zR2AkfN9GpyNovC2YWAidxSEh7zpLGSuujYSV2gvK2vRWv4UG7eVJwcBpsiJr6GfibhYuz",
  "key13": "3Gms9TX4yfgU1mQJUgkn4vkBMZJruefA85oyphEt2a6tcSq8GhiNXCRQjJnrYGeMCo8UF8P5bqArLrKbHPevXzdS",
  "key14": "42w7ddBFcXapPs6or6AZkDoSUhtXaHn3T2HTtQJSnXVtb6YrVpSCJnZo78Ty7enY8Trx9691qoHF4KLnx4XJCJwW",
  "key15": "2LnKGwJLuS9ywuA7g7ARn3EJs6howZin53VHhfR9bvxXHi25oLqDcCna43BQpT44gzXwkGZCoMsbRFdEL4BZ1Cbt",
  "key16": "5VzGvGnMxjaZpJMFZjfuG4oXWJMwxq6aXHb3Q4J5P8yWkmq7P38kTATGgWaxDxsJGtpuyYim54oeHFY8mWqoKCJR",
  "key17": "2o68WaaNguRVeB9BaBdWUm5iv1ZzzqSdkdtN9BrSk5DZNNoEJR6nUrTf28CxKsMzPnkGbbRCMeVnoo52BshQqpyF",
  "key18": "6mFYepebpNZDf3kCtzD5fFRojLfF6L77u15go1Xz3mQGwxCbF9sfkQwLnb64a5y5zeymc1nmL6zX2MMzuQaDPD6",
  "key19": "UrVQLfNAN3KT3Cnhhc3735oHA8WTr2e8RVzkS19SZyBdTndti6XHUyAsdaDokFJriLp2dUVv7TdDhTkDv3G5xv2",
  "key20": "2o6UfcxrrRYPDTJKxLfnoYyPx7e9DRnzJXrUsm5hXYGm5ftykA9SypWwzJPb4UDitpXRbC6wuXXBsnP2pL7zkThi",
  "key21": "4QfTMszf8yaTE6nVuv1ycLiJZTtD9viHeNCdeMUuYr4dtifpcU9XYykdQuFRW7gFLGiPCmLg19jZfjtAWL3HoHEr",
  "key22": "eUDfCFAye8Guu7TUUgLocVUQAyPt2fWcfLSCivSA85n5LKxohiEQ67jYs2XtFwxvdiRh99oZMTriNMSFgcL8Rvt",
  "key23": "3jubnMQDWjYUEhUshmsgPxjtGr9yYrsTPa753MkjB5DVLUoBEiEarcf8HKpXSb9fE6o9pTaQ8eZ6j6BPaHJrfjrC",
  "key24": "2zC5aUeMBu4Hbpy4xCEbLTERdUboJQjnTorNozTJjsqYixtkNPNa1kLRg9JXCwCR2esMypRkJDEdKLFjHUA1m7VM",
  "key25": "64JD4A3PcC1Xadv9LojcZ7CWDisvADWNABzt45ynxTtqH2cL157HVWfoaaN1RUvGbd41Aj6q8nmChpM9AAc9kF5C",
  "key26": "46LfZ9hi1V6kirppfK6o5vqMeegHTBHHejUWzF7UXvS1yrWrkTv5szEByXowujw2cbGsS3vm5ZjL2GSrRP15ZjAR",
  "key27": "3przBAnaxSrwK6i5NZwoouzEP5hMdf6SiHtPDLEuDUb4EhGSizYacxoevYE1hYDTq6DgxSyp33A1bs8PnxRktJGP",
  "key28": "3MrySDmK4GPrqDjMj5cqua9FzVvaEH6CpBUFZTFeRYNtx4M1itgQ7zygZWbMZbDUGjoRSpvRMzDMEssK37za7fTG",
  "key29": "424asHYhz2YKQtgaoiR4u6ce9fS11Kt2MX9MHdRTwsn9Rjj8y1ebhXN3PpK4913L58JzwYDspxrioVDGrgAVurTp",
  "key30": "4ouVeL3RdPSo2NFPcMPUv75yZ7nznM8REoUEuS7SrfHNnEaedXBaWFw5ayJ4dt4CPJVzMcoQfLkMRyCmEPJksD7G",
  "key31": "4cFZscoab3SzNYgWHbTaDsLEefz4r4pHwwM3Vn29gaVdAedpv1ZqrCyRJhYEBYWfkvbubxb7hAPy2XENxwL5UHkT",
  "key32": "5bv5RpyZktDBpSPmpyzsLzwHpDxTfx7QzqNkk8u7gzTtJKYzvgmCU3yHtc5GASTNFThdvbwKGuHVkQVuWWrJM32e"
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
