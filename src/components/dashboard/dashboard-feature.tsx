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
    "hgnb9gHWzRiddTTYthFgyJ4cFi9GnVLfCm94881iTjfGx7YQSGXLhBky8CyeGQgYS5fhDvC8Y1mJ79zCDPQmBfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Agvk9EbUgC9cJfYF1A2wXkWFsaefFHnsqWqa7Uc2pwpc3YRFzW27keV47SLxqhEmwxYEQYwwsuks7CjVay1P8xn",
  "key1": "3D8VCFDxRe3gRBd7moz4mQ9UXAW5kso6C8a7VnUphGvwfWzyUhKFAVqZDinwg1rHgCerLN75Xua4WqL1dxZ2fv7g",
  "key2": "k4x6jGSsLdCzah1c7sjHoAJLEMRGYXf9a7yREXnixZPJ3RftihSxHzzqyPihjeo9Qe6AKvfUZZnWnrRpaYWYXqm",
  "key3": "sqFDPc4dfANauYFYnxkudziB8LmP2gboxJf32WPoerze2ncpPdHLM5qeh6CDGM85YABLCuksnFm4sqoRUHNd6DE",
  "key4": "uiqMFFRugoutgcbE4iPbse2Yu4TuS2ZXhnEwoGaMpQCEQWdCpTDvSpuCQyY1QFV7rZrTYj4BivAxuY3sXrD5wgu",
  "key5": "4efVSDZkZaSZR4RZMC1T349i792j6rAgQPDqRz4naznnBkLEELtLEzGuSS2VWY84zEPqqYSayRdh8RhPUFXyVPpU",
  "key6": "3kN72DqhmZeRcVauNnvzemJw93h75Zw5cuADV1UEMZxcFKLK3YUMmJB5gSE963xqrTZjMzRKLBqYjnCLnCPu8Fij",
  "key7": "2M9i6X24q2qZrAf4fWbpqwjZKYHKCioL4AR5wzpcmXQiNp9fxg4Gct6v54n3ABNRh5fgZ8CyV1D5WriLqdt9yL6d",
  "key8": "5bP14mxRJ1bCQvYNJg8EqzoQPdgRTXJdEEHs2rvzPbN11HojMdUUEmQBzzieB6urx2bxadV1vkund8YCSLTjyMVz",
  "key9": "RjRftezCXB6656q9NzG2CYRbEFQsSLxgxJrhwgtrpuDka29rkaJ8WN3AtDLrCAXTzUGTrxV1t9uMqMktzwETFXc",
  "key10": "27Y792mHrcHBhcc5AhzchqenWdddiGAfxdZT1vBtjFUzeFRtHT7jhKthkUPugBFy3HdCfyMVV543uqzUPLFEzeEM",
  "key11": "23AnFQfuggMr6AnVPTGcbN3UpaMhpU9n1XpKCVXKfrRrs2vi6TTKr7Jcb7QEdQj2GfcvY4ymAiL6G7Snf8G5fGHB",
  "key12": "4vifm86La8TRWEzYJfEMo87NUAiaPviohqMmp6YwAqumMuZXgFFrNFeSTmrTq1jwxgUGReJcefomoyqrx9uBbKhQ",
  "key13": "t686RQF12yKJbJRcYCPgR7XtTtQih1iYsZsJgCKqPY3TYsvHYt5JmQzhNPyf1oAVJZ8526kqA4NdxWEENwv88DH",
  "key14": "kEdauNQySegTVVw7oqGjXFkbBR8PQEvacViVCM5YJCgiSXzaResND16qz8MRfmP9PGcf62YPJSSSniJkcrSL1rH",
  "key15": "59eJ5FvusPRgn2dU4to5Dp7EW9aLR73cHPRFBHtRwWSicya7imMaNQGbT1KN62FChZvLyCedqgaFwJE2SLr6XtK5",
  "key16": "2D5kjbdZehzWWUSsRUxWzkEbMszXAfyHd6kmPMeVi9BZFFi5hXHUKVjRb6QySYqvsx5AH4t5C5jsnyqcExtNutnc",
  "key17": "2bs7erVsiP9tivbs7jEb1NPSv1XLtCJfF5b9X8eJGe9fJGYpJo1Up6wEDzDXvHtLrj8rw9juYgMAegT1QKATRwPa",
  "key18": "5KuFnQboSG7qyw9ZuggcAN3ra1ypv3y6GHE7ZAtChKEzEHs7HVigS4MzvgYhkEfDDQYpmn4dYpA8YUWQ2WuA6wxE",
  "key19": "3kwh73rS1F4CaxN8NXqRjSdvWdY46pfSKManxhvHis8AeAgb82qXVwG9bLrV8LmQerg8ip1A4WEC5jpwkCEWYgwh",
  "key20": "3uhFCVhbPQZcSnZRpqsAXWXa39Ko9iPHmnTK99JNCkVkE56S68D45maz9rJDoXiK5WzNLz5BHLtky1K4uUt7YJYQ",
  "key21": "4YXB4mQ8b9FY6t15SMQ5pYUvJ9dHX5RXUgM6TJZT1Yjq37wgQxUn34kUBwR15g3Hwg5MQRSaMHvEDrPBH2RfkUp9",
  "key22": "5XJf7MXppB1toD2Ltfs6FFrYU8jEHCjAV67KEGa7Esejow3Vv8akfFo12PEexzaFaov6HxfDWQojW9hiRSvaPsJu",
  "key23": "5UP8bV16Fdo6QZh87P4ARvZm2skv19A4pU66KGeEAtjskcYpfBSNZfdgNJoAXxCsfB9ztQREa6jTirUKPRiHmkJk",
  "key24": "2CjLip5sdMBYEs7RdS3qNqNzJfNnYjdTNoBTSaMnRJNRdQhkgxadUXY3abQhhyGyYbefmexemZmtX4PJNt78i57o",
  "key25": "4zdBDq6p1gy8QkEzYtA7pW2sK8gdChhL22NshFHzBXwNEatPZf4J9KQevUsdcXwiYK6is5uNoYDA1HGJVkUihngm",
  "key26": "4cg25Kuh37nzHxkV9GN5LGPXS88fqtHw2buZEKngrLb3zAf7iYBmEUuFMhK6u4mkcTSaUfsNVgwd58jqm8hePUxG",
  "key27": "4EA47Y4MYg72a9NuCiyNQmPZEGTMvfwbpuEPeGufsujsWM37AGmdJBjtf4s7eztJTEqe1mS5QHc1cwM3awAKdh3h",
  "key28": "2h5EEc7D4kKQJfs6hijLr7o446NGDWT1VGprm59snwyfSQGfaKV4rV28Q5JkeMaKsuRfyUjffqeubZwLHjKEDFWn",
  "key29": "5kuNNfMHwjwkgVj55ErmzcZDezXTrLfQCae4ezwxtB5vdj2fW1nnDqLRw1jQcHnc9K7ewbAkHuiadCPXL3bQDFrJ",
  "key30": "3rT15B6K7B5zgZGALvnnJHS1KU4PuQDAnWyC1sUu9BeocD1VHsd2x5HUyiFpo5LvoskbMreFvWety3X62pWbwix4",
  "key31": "4Xb45YbWruTjZFv9Zn8KAfsFRGjYVcgtP5rdPxAdmQmn4SCFWrjc9JDWG6omt9TAPyWFBwriJjysSQBM7TirdUTv",
  "key32": "5E3qu7gY5W9WUZAViYgqCw9dP1ZSGB7ZyJGaziimDqGYgVuzAZGsW943a7ZnAg9WAymKq2Sgpehxs2qYH5xyPKCd",
  "key33": "N5b9tafGnUkCShK1JEmGgpTQUKTe8MPpByLZvgw1DzMCuz1wQeJ4MGkoAH51VucXZG54ovuQD9PJko8MNHVkFtE",
  "key34": "43mNPWTqJchT2H6rj2qwUXpfUQ4pCgEqyYTMMur5raS53DeiMgopETnfFPZVxYwAJos1EMVNetagUih25P4acBtL",
  "key35": "45AoRRa3kxdsJniuskcruNchQUErYcQCyRUBKBjzMhSxCnnyoa9N8FdHuRA4W9r2JBfXYv9jn62CnLG7H4nBtRji",
  "key36": "51yEsebog4KDjHrjDLUMpttcDaF4q3CDr3EpZ8Be5jsrjdbvTn5pboWbmyQoo9chwPXUBs5UkFgrwfdaSVVLUbaL",
  "key37": "X77GmLDQHoFdQXMBKxWbt3bFXxXBMqt7ELgGbUa1qs6Syf6EkNYPDnuwagRfaY2ER23pYAdzVPaWmoxcpr25JEf"
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
