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
    "64ZXRf5Z8Zzh4WwPqwTTeSnfZsDLXix6jLVtyL8t6NccaL33qd8bkzLaU3TZosZTpSECwt7juSj7ge7vf7m5dN3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uvpFT5KjUF39uWSGNKQvYTvdHohejt7BrVHq5V9eLEfbtRjnVTuExtfbmvz2pP7HdDa17zPsQ88Kv53zT1tmTLG",
  "key1": "2FAasE3QA8woitqxFxqjj1LdAdfwzUcS6NW1AQ3Ea1oSxREshkhquyrr6C3ongQbKYcMmUzxiZpMEfeX1aiLJSsT",
  "key2": "TV2rD2oZMcguDvwnuEdzHyhpm1sh7PVreEbUjfip6zisx8WfFStZf4byz7rBhUkNrXXfvTtbNfoXjtSoH48rSbm",
  "key3": "63fGEpPgSquTpF8N1ybbkRg1rxTfM1xjDwhWPujzHP3uQ6NtJRkfXV9TMXekEQnCgM9vVD2pA297LUzgovtNJrMu",
  "key4": "bJLkPSLNrt8ZXpGMr6MWQWbB2C32STez2LXDGzREwqnyJo77VnicjRTpzGLW5XhrrSXdEUFm4RpTVRr2ZUjZBnp",
  "key5": "51Hhk9RiLr7H7fF6uKfH3Tx6gZHVJtEtEZd9pDtccZAfJXoPijTsFALqDFW39fkdSHysKmQGG8bys51w4s8nDSbJ",
  "key6": "HkHqv7nEYsd9aEEszpHD9jcQvEEAejA2i4iYTsDSgxjjf73XzuMcGJTHriX6TThVTTCo8vK4N3b65NgjkcCMTKE",
  "key7": "5Hd9GbAH1KSSt16WCNgAGj5LTSjCNmFb92WWEeqnnRJCAmWqD3gkd1G7L7eNYKZzygnc61t4hXmCRVRrzicZfhBc",
  "key8": "4wAR1tHNZpv9SmH2Dz4W56j6AtgvSsdrnDYZPsuQPN1bxdoihLG3xyuG66zpGR3M5HNFGTWLvV1RzsT5jvug1XsJ",
  "key9": "QPjC9KzHmopseqXAMJxL9TDZgV42XxYqq4btsvPT338hgQnu8pRbxGFGQ5Nmn4wbke7aTijKNHfgoBvLjbGC8Fq",
  "key10": "2qdoxCvYmDiFiU2RMNZx2jhB9HSFZ6KaJJBdMes4ATSy53NBCSBuH5xnwzarwfGMTmzMxim9QUz3vYgkNL4pR9iR",
  "key11": "GEQ3ttYKKFegFyRYXrFgJbkFM5eKfCfjLYtgHJnXrjbD3qWWwx7iVSAqKnnD7XudjSJCjDV4mrfHZNVuti4P1QN",
  "key12": "a572J2dCpnEqrvaVMjkcghrZZVtEKE1hhLkjPZzQoMPHQCKdfpJdDUMgC7W46AL6D7ccorov4tn29DmoHzo62hz",
  "key13": "FMkqpnMfCQ11sB9Fno7LxUcBNcDD1QErr4i24igLk8p7hjgDTwCd7VUHELCiZ6YE2MWJ9XMNNFiQGZzzsnn6Mct",
  "key14": "4iNqZEUxde8UTZQLt9vnhhukMwMisXR8YtiA5rBwxXjokUsnC8k37BUkLdBtN9nxfFJLbz3TBa1KBdXZAtLNcVV3",
  "key15": "2tZbTe6TuwptSDyHMzEG4YiekbV9Z9V6pZC1M6YCy8RY49dgj7WY2CZcXxoFnaPQNSWj7dPkcSGoX2TQeguPvJDu",
  "key16": "5je6HRhkPYqbZuhD6Vqoqi4Jp75be7MsdCwUnSCUCV63Y6gVCRVzMayADrF9QzoZhi46ZL1ifS9SEPWqKYjryRLv",
  "key17": "3FBJi4px2CpahLjQZvNkG2iDNMib32VDPEan6JoJU4DixE3LwyteF5AeKx7uthybTQkN8H6cKYdZrKyRnbkCyNBU",
  "key18": "5KorP7m9Z6Bg6B9YXpJRgGPEPBTNufDARyMrz1oxW5AoLviYSWpLkecNm8j7Wj5cUL1RANqii2vwCb5t7bhci1gC",
  "key19": "Qp88DwHJQQWtVttMR8idpkCoJx6pKBSMc8yjuW7jeWumstkg7P6VqLb5VrqP8d6Ct4TQ8hqvnSdA7wbTne7zL37",
  "key20": "4S2c4ytREST3UKWwpg24YGsJe7ESpogXZycb7QtG1m8ZBnJFC5VaZg2g7TVr1K3R5HdwKAQmKtAv9me7NU7eo3ke",
  "key21": "fNYUcqs8VKVzZkySf27mmT1uULp748KNSKj4Xo21b6iiBYGabBnC9rdnAYhDE4MVqsBAFwsrJCeCgBbGt4XHS3G",
  "key22": "46GAF9QEd6Gv2rrJxJ8acoEp4iKwhYDxDyX1y6GgFDNosdHeJtMrKAWGd8zTGge5UnYzwthyiYFFncN4kd57hhQV",
  "key23": "4XNxtX4FDaxHr5Qc6PJocs12dTrqdhENTZSruZL7597pjttySF1gTaSEaxSz9d5CrUHFYg4A8Ko2ktB8VTYJRnpN",
  "key24": "5MhBhe2N7oVEGKd4hhu52MiRfJbV8DcD9dNgT5bNDWkJrSLXwspqayZ4VYcM8B1JYUKVaFN8ndjqJdAXNitqYQ3U",
  "key25": "5utTmRmYkrPgMoNRKDKsiMssTmtAwdXLysx2jNDUAAfCS7CxsnEJhKceyc2KKRexeXNUcTesBjqVL5qV137x7iMf",
  "key26": "26NRbYLQHoE4dHC432Mnpxgr4wAg3P9gtP8ttCbtoyGCmt7qi8Uj5p5eJbs1qYpxLt2FVppV7jNEnvqvzHwXy5kd",
  "key27": "4ny6dKCuvfHphMPxhs57QphW4eQeRfyyWjJJZBUx4fEY2uWinimG1Ymqkp1pL2pQAFxoeT4EKxvykEVsAuBrpxv1",
  "key28": "2bxrqaKQjgJkEBGk7vsWjpLknB7RQ7H4EdWnMujVoNA7gV2pPGWafWvXArZxZhQjmFyaTRMijzmkB4ZaCCemyiVi",
  "key29": "3PipiRT7CvQTWwMXvftaCBEw6iZSwVJmz7CzBgtv1VEUSYq4rQG2pYpUPAmGboRnt7YPUHwMsDHob7k14hxsiXBN",
  "key30": "9BJ85RREzMtjs6Syj4VC4mwDPS5N1vbN9LmkdPVxTr1RVbNdyXBdEDb14Qq9DwuUswMdMGgMUsGPBtewbSYiPvw",
  "key31": "5Lgycky56evgKiX4fJGtpo7ytNiLa9hXicc5jPVVprvpfqvuwcZV5Gurd61GgwpcWAbsuFCUcdtfb8uEqE83waiF",
  "key32": "2JEzKtYjvx4u7Ri4oN4mPgNrXuP187o9n8LHdioMAN5B2DYf3BiPXh3A63VYxVwjE2y1M1tm6u6egHguom7jfxvr",
  "key33": "28ubjYw2qf2tTwbUUijaU39rrWP8qBN9nej6chcXhUccyWEtjdDkx6Thzt8MvvH3P9jgFRLVPxqd3Cg5HQowJsM8",
  "key34": "3jVRUgpgGnNN5ZVtRTrD8ghSkAjnpKHkMQbvrx1NTA27U43T2Lgm7pHUDHvAffxdK1cjohNJirVXmUeAkUdfkFvP",
  "key35": "45itQRpvHPp1tzAphqB3xkL9k4qwvmKD3MJZe12To7sY8V48rbP48Gu8GmtCtX6PjxsunTiFsEz8vPohXpoiVvFJ",
  "key36": "2MdLwRmosC4my4Znv7rBz17YUkUggUFbrWHqyM3x7ByGvogQy16E79YQeASjktuiZ3JJicSzuakYN1FNHf83zdNb",
  "key37": "2cUQFbzr6HHQc5pLMU13rzPRw9km1uGHEsAMoeCiuQufWRD7iEjmann8AHDNcZjv8MJEoEC6YcFRYhTE11gZCx4S",
  "key38": "hrEVs7MjjdDBmwSokJyC2Ku3WDPcs3pFQhNhMBBxmMQgDDNDV46WCWmMzrKhPJqYVyQzBTDb3JD5P9rd62fDuXH",
  "key39": "2p2J5etWczqFeuZL1NLzzeJ99vtkrfknhJpsMwhFd1ZHaXDwWpFc8ygceKzVVhxkHnKKUHDhDRJTvh152biCPxEm",
  "key40": "5axs8h3wksXxBRjrnfWM3ujpeXKEA2zFCxLow1GNPAxf9BKRMXyVRXVCANP2n4eLH3orBjqCA5i8PsaBckWYUEfT",
  "key41": "51ixnxbFf2nEF9zy7SE5E25cc2y54f1r6dT25VzR7k63knVf12W8VdJNdx6pLhRB8BurBEbGzPppCKXmjrKzM6av",
  "key42": "yX1ED8xEp37Y2RwFWSWqvZWFbrZvUSzb58cbTWdKdhjRjwBzeAFZfBCKYD3uFuSQeYKMRuxGnwEp4BNaa2Vec3V",
  "key43": "VvMpVGaw7gNbDcLjm34dmgdu3j8nXV3omXE2Dv68FV7oSMBHVHZnhd1kCPkCtCRXooPaA13Jp8pPUeQcAE9WH1w",
  "key44": "3faa5idaXey4bWR4xquXbLssN96UhCjcDhHMrNomsKHgfW213gTz591zKWFYxVzmsjp12VpgyiSZY2cTYuupnVWY",
  "key45": "2ZCLhcY7RHhTCszPTvpCEG23sbzCjiSdCP4H8QrpxSgEXnEPDAkZzLJoTTai3L5PQbG9KAhBSs4aDb2vdGkn6js3",
  "key46": "3sxHV9DBcG1TUjQZkPKmVsedjTrBRni5nk4DNVars8Pq3Ljxmj3KyuJP9FVree1aKt2aNhEssfjfmafzaLaPsL9S",
  "key47": "67ks2HnpdvPiXJcvcQ9QTh5VVo9PnJ4T3jPsqiuVsuLowaEZHHLHezqRCPcUx5RcJqQceiDK5z4Fgkt2G6candD"
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
