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
    "4R8NVRNZdLWsjBZKuFKZcWNTPqBkXNtdaeeJGGDzZqAqQdRBYsWCiBZMpGXmb2hgXnHf14Gj7Lq9d63Freh4gzZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hvAahsfueHKNLk7VMr1jNFmjuydFe7HYJFSTQLKb5w7AWQbBiRUyxFARN8jnTxXiRpfJ2ncyuBNz7ygW1isC2QV",
  "key1": "3R51kkmMjaZRDUrdJ6UYaKpftpR66QNM7Uht9QqLMFsNhiW2TDP45gwAnrwz2XySF17Vvz8arsvZYa6yNfYAbqE1",
  "key2": "2U36UVRk5KeC8CAfwxkfMjXUoLWHwcuWzEpfknXcSQgAa3ikTNg8MjQwa2tWdv2UcF4BQCuU3yvHaGxJTfMgQtWU",
  "key3": "2qPqhUQ35i1PfeDqjgBXWyuAxd3mmyiFD2ndiSrpjXHHoX382WtMzSiVY4xMShBerdSSPP83gaVpWHsht4FGbbY6",
  "key4": "iKAaf5QEFn5SYnAc5SY7ZP5rkR3jYgZq5ZEwV27JN374bKbgUeHdv2rSZoAP17DygyuoKdrbaTngim7TdhL6bP6",
  "key5": "5KkZNSsd6qTt3sRQx6XNibSTyavhMmdkWwaxAc76U9YEM6yPj5QXzArRMYK18LxHSEmbuf8L1pCLmJ7dxyHbYQGi",
  "key6": "5q7Gmm2rJHNdA1KP6oJcHoTvknGVNKUMnTWwaRx1Wm7Jonkn9KzxCcwXGxmm13paWosoia3eTFuvV8zToYPeK2C8",
  "key7": "3p7WYELJeH2S4Q19UWyFQZqH4Dt6tdc8zGxmXZKZTtAdkUasWXbhgS6xzNsrX4eiCkVsq41JH5oYxRVgKC55FAN9",
  "key8": "oWSkjgTqwkCnLRLsfcbzPRMb1ZGkuGbinCv6nHTwV9VTBQ9ekSHYhjwF3JnwWRzEZLZ6oHf4P9T7UvSoUTmGaWY",
  "key9": "SuhoKwWPCMcVGCnNiSJrJChAKmZqpqydU2E8Mw5UZg9PFrZm96d3GCEwNh82NiG7huVq7H5yXBH2Fat5zEK7sxA",
  "key10": "3E1JhVXj3yKYePXFAygbn9GPikPmco5DLGtJXChPTJPd7pnQvBfoViqq21v8UjKrt98zsQiXaotkCaSNL2GLyj5L",
  "key11": "2LWJ6pcaiL2YrTvS1ppq9LJyrcAsfLtf6koLfSW89p8cqiWi275Rbm7AdfCF4HRkehbfyCV6mKhHY4dwcdp3apeU",
  "key12": "3Ukuyhd22D84UAjRVPTCLmw6KZNe98fP3jD9jHhGvsUDUGQjyFk5MQDLvLni48WJSEEaagsj1Gwd899WThhrZ73H",
  "key13": "avYDMfMdkrM8sUukCRUA9fnqepeWzW3aiyYwq1STce99PmRXFQeyE2UnXBsdTSzp8fWk7ob2ogdaSD21v7Zb1Kq",
  "key14": "3E4yREG3os8qDdwuuMAwxo4jDnV8BTJRLPDPkqxrhujkhVWXBhTYEX4PG8658evcPxWbp1dAULXkGpZqMf8jDRab",
  "key15": "2QXSmWgNbMP21xW8QMd5np4HCK95pdDwF6xc4JbduHzydcupDw2okUf9YYnsqBAV4Dtcqy8ZsFQS36e42CRodS5N",
  "key16": "4AwLgZTgU71djgztFNM9snYShzUPYSLek9kEG5X4vvatnyKPLBTnfww7B6ZC9xjBieYhqwCm65nBteUFvzoAh13",
  "key17": "T3sHU5TJSH87w4gWPcoD22JpGWkryPnw7U5knbeWevU38kFVLvsXSQkbJnnaPVyhfdjLfs3aNyf4MzDzkH5cMed",
  "key18": "5RjG9CQa96SWVkA5wfCqWqdUkPaLKCoUK2jnpkg5Wprue1FVmsBXefMFofEC4yzDzTHPhR3qJvB7uLdMcK41vSHH",
  "key19": "4RuvXTFrQeQSMo4D9QF1psi8Uqz2GeXYbFdyNLx5VQJ5N5haYekUDhXGw8jpWjbnNeaGRzdyuog4TKKW7sprx2be",
  "key20": "5j2AVUt1zdwFBgzvqzLRfks8uvrFjhTmhcnRNQE4TYbL7LFtvadp57sNgVATpRFYvAKqmqQBgiqNKWK18MtaQAZK",
  "key21": "hcDh8VrfkPzCSetueUNhfhnEMQx7ikgb9jukne4xEbAf6R31fxd8zg4y7gsChtPCDiPixf4Hq7M8VZoZuw7Agpa",
  "key22": "4i57RvsUp9sLXuqQ1X6yaMCNt98qEvBukJY1ZG7xQPaNyZafytZJho2yU1YyvJcn3WeRVWbkaozc2qwiPeJbQ5Kd",
  "key23": "P1r1YaM6UavWryYjQfQZwcmwspLcf1EaWFyoyw4jAqSL5ry7RQuoMrX9t2Wq2VUsHsidbgrxp28ih9yWmfubWty",
  "key24": "3JMDXTcqdZDvWKfTyAwNPGqeyc1s3xW8j7tUEaVZhXtiUYquHkFvU7oE7vyUiG9J9d7h1498wYvE5PJUnrZatSH8",
  "key25": "2xZycZHJp2WC3e3duDea7sirGhfADPUbj1mLnhTEGCnRapju5kP5LRzc9FPFBRYNRQqN4ZWgkeCQStxf24KKXLro",
  "key26": "2k3S764PmkdrEKD6KzGBd8nvd83bkUcbhbnTDPv35U7VycN6HZKkQvScqiWkixfrZutCkUX6UHgWngymd4iNi3Qe",
  "key27": "5xfUTEMGPeNh8p3HpSS4R5nCXLnMvnkuCSpWpUbuvTdfvyt9V9QsGdApDDPeoJKimtvyYJdk4yJgnTyz2HoEakdf",
  "key28": "2w8sgotkXxe9w1TaY1MHymuAR8rQeZp9DmsGPYEjvx91af8vPVgQfm8uN67xKqisnmrvyxVd6vEBTz6AzoFdFgwV",
  "key29": "67TgcEg199NFDrNuTPFttBAWHaKa5b3nUYRyrqqtDNhZE89ZidezFbMDLxfJWMxCn6DLCDYg2Di2v5ZVZnqMe6y8",
  "key30": "443tCqMM3cmRQrf4PASYowbYkJSXybkXHUsfnP8NExMvsSiPRC9hwx2keUSPynDuQm89cUruUCCdV7Xp6sbRZtFf",
  "key31": "2n9RKhNtPNQKn3zK5MTTXfdGqV7p7dfc92vnEgxGLRWHf4PMcQZG82nZ1ig8a9oYKEj25MYd4Tuc7H6W2Mavnxzv",
  "key32": "5i4Mp6krdYRLPy2yHBYhEytJVk4gK9YZuygPqS1vTrhePdwn6nemAfL8PHEJjCgne7S2oQwjJqVqKGgtDgjH1aHG",
  "key33": "4a2tiCYVwHhPKwvorYVALLCnPLEhLqbWTGW2gTMbsowrPi2kiDo5X6HaqAEdTVYzpjHcwgUQh2irCNFg9de3sUQ9",
  "key34": "4dt2bczMrdbNLNZUfA9DQ6WGS3w5n5hoCZXfCvAyy5huHQY6tyiAW7yHdjjqe3XJBttvc7CQAvmP94DhvM1Yfmi3",
  "key35": "4T4CVQb6QR8RjQTYCLVrBvGXx4ZRzGWD5sPmL4wP5XWbWLfSnu8i1Yvsfgb1kzmqtsdQfkEzBtmedqc1Yxf8shSJ",
  "key36": "57oSNubijDgXiGzqybxvt2Hv7rmkwmeB7aJnmfBgK7ezHQRuHSssVtJSAFgB6K8N6TzpyBSeE4AVJvRYp1csrBEG",
  "key37": "5vQYTaWt6w6TRXKpDwHcDTeSF6Nrx8a35Tx7qZxvw4bC9mScZWP5Fc7nQZQRsVwa78jZtc8NKjtyWwLcQVLh5Exc",
  "key38": "3jhjinvVgdHRui3e5tQcNznKd4XnSYZibvmksd5inorBJ5MusAtLWMQgFkr6tcvbyUESBvKCPqs5qcgC1Ee3EMJM",
  "key39": "2zHMStd6aN38Nxyom1tdpfGRQfw5gFfzJ31pnxoLdndW6Ak2ZE2AiF8Cv2tUmi2EBKVb1yTnHiExgMPgNoPgNFpX",
  "key40": "42xoAVXxq9SmpR1grNXz98e2WZ3g29t6V3tRdVxNyd5SusHvLp5h5yPjtvz5pjwYGhNAW8D9NqbvshTLDt71LqDt"
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
