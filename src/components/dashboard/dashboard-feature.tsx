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
    "5ysaf1CGFYitMMhqgR8wcbEbZm5eGoTUSsPVwFUdPSoGvc8F3x6w6aAQPEMmr6HS1N9PejePCPAAmxt5czVEvkkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aqjx3HLYnYAPnsePamm66hKmZiwCA2TCMm2bicapTRVBZ7ujDQzizx4nZFDoy2pBcGH4BCiZrXs7ioQpuRdKXv5",
  "key1": "4P66dmUgwZwf1kwJ9LUc87Zrf7yYkXgH6X6XMYooqXUtz2LSLMkVjHwntBj1M9CJdghiJHaERUWsAkV3rAhwrk1P",
  "key2": "4HEdzoYEsyvNSThvdiwAbcNHjN1mgLfycdXyFAzyJjzRYQjcSkJQ7Zpj39AbWnZt4Xb863wdJrxmrx7poPBFAjD",
  "key3": "HsE3Mqx1935JjUweNyKECc2dftoQy2DZGjtfoH87VaRsime7jYK7irqkrZjv4H77p6fTkxPkUxqfLugH5WWDXaT",
  "key4": "LgXqssnaZRansE9UgX8PtXXRD4idSfvpuHu5Y36YUrvHiYt9B2hnzGUDubAvJWtd82Gd2xXNubgng8yMbSczE3V",
  "key5": "3X3yaDLW6QVRhK52T2a9ZjtRrFeSwgE73ZaEi7XGGdYt7WpNvmo1Jbdj76Xqm9Qa3B2AeS3AsVARqawzZHxnyT6a",
  "key6": "5XZtMDwdeQMs5sCc9Ryi5wCneZ5468VReuLc2rZ7oK4YXNym23vmUnCoJuLiKfQypBhBPc93ET8iMX4kPRCV8Fjy",
  "key7": "5w7Uku9mp8mL4KgQJztrP35BbuvBkLCLotVMUUPefN5NZTWNHHTVcdto8eDZTRdoS4ZDofmGuNqTRV5rLzj3TN47",
  "key8": "3FXvyuEmqkr98NsWkQTSJFEaabdHPqwztDhvtgtuFtdokFSxBKSqJgLQ7SsGt97ghFxSgMP3u9jkPSG9kAm8RymK",
  "key9": "36WSFnrbE1bPdU2G4n5uKt5KWKiuNQXqeYRLA2ywMfcSTcBRX3dqTZmjbtXMa2N1kvGqVcGw1vb7otKq4FtfwNpp",
  "key10": "235K1uVdHVJAp6XTRn2EsyFDqnJgRRbcMFZF5ej7gbegJZJ8oyVaqZG3HzBKDnAVt6DhfsZ84odDTTX1YTLgu3NV",
  "key11": "5USN1RSy95U3E82BJ3gnoY6XWq2XS5VeFMPRbUVxjZprqJfKg7yx5GDZ6oT6AFWxa5wbhsVCkHzcE41bnC2cmQEw",
  "key12": "2PFzTuZGnn1JKTcA5RCDZestvjhxxnCbshZ2tjxrpoALuJnzKA9Tsye1AaqC2MaTL7ehsgV3XyDKtU1uDy6WrWRa",
  "key13": "yPdf93je6ddvRqtoPeQRXX4HPMo1QiA14E7qE6Ym3sBWiEGzuGQUvPbgt2dhTXSkXJxt9AMLTMvz2bHVqZc7b6z",
  "key14": "5pShbrUNbYFGNNJ5Xd3Qt8jDLPL8S64bewwm9ur9uyT9Vso4jWo9SsjmQ8DAthmNVQfsKtAbS8MPYCnkTS9aoEfq",
  "key15": "5p8x456mJ6tPZ5SBbTTSCgc2kRcbnUmfJBPAsdPtozhKmyWfGrPV1SwpmQWdBUcMoKnyCTCD8o1ZQSW2AqrSEgff",
  "key16": "5uy8Sa6NygUo9RJWTjUfu8wWEVETG1BaUMgq9DqXzJjL1kC7MXrSTaGocaXKSdPtKgV1WQxBkbBLXe4TmwLazCj7",
  "key17": "2YAQrfrCYDJHmbx54VmaDJiMsAtx3nP8tQNHiPqUMawcADNTXKib9XzyvbPYRm5VfqDnw8vwcPd1zr5VSjQi4Ymd",
  "key18": "5szAtUNhbbBY2Hh3ZSVDqsdqCFJB771DVZKUECSchALqZVMcNDz1pW7FpUenErJT7GjqhGqTLd1LTQgCSKMWBAhp",
  "key19": "hMX3fCHJ7YLM8u365LrkGTr8boFnNSVAkJURvEWyqcLK1nd319oojKiEWUvHKDf4f9h4ojW7J1DuPZH8zhSCHHC",
  "key20": "2Ew8QPEmovYunMC7GoVYj6HjV1JebknovYFPF5wYefMwHBLFbF8GEqvDoo5hWPQtGhGoNo33ZuNNCbwZyrdGe8JD",
  "key21": "2Ze3MYmNfrxB81UT7D4P2yvFo9NURNJoxJ9YNvX3ntHkWJFS9mrZhwNnkhNGaA755P5Q1DJzYVWkDE224Pj6a5sy",
  "key22": "5HLyJnrgdaKKLxwj1q2kfMMFXRbnMTWZwdrpdn4YE8ghph5u6Bzk2gyedfwQPZPPYhMs6T73ycWE4WQ9yJX81cpk",
  "key23": "3Y1GUJQ8HjA1UwPvKvxBdGcTgdDkriqiW3pmHqJD37FJaTvf3zQZPp3YQVEQbQgiSHQTrHzBFae5DpSBZB4t8cKw",
  "key24": "iSDPyNW9vpRi2ZUoRfuSENVbFZciWf4XU3R8xmMnZTxmi1vjXCCNcGtCzxSDBb22aYe3UoqKuqHoPMG66ACzdsD",
  "key25": "42TBV96Q7NvW2zR4qtyAD5TcnHFNCEtcEt6t4oiWDHCPn3YSKKnghEy9EACEr2bU9h5q4nvTguEB39duif6ZJc5Q",
  "key26": "4ZWPVwoktvsLYgVGGv7bvmnEGNBtUVzyH7Cv5fsH7xVdczHA7a19zUTC4KmYL64iAGCForT8u4sS3wn5h7jsAPEq",
  "key27": "67AYKzx9XQjgJ2xDzvCtdPkxUq2AuYem6ScEXi9XnV81WrxRt6Dj3UgLLe96YWkeVQYESYNdtyussai84JN8gjQU",
  "key28": "5rSSGCwKyEXLJeafWfPCkd2dxGKghMBtZEcW3Na1apbXoJyGSDkJ6KfZjaNvyUP5f4wRPfvTSZ4QokvNkyZABKLF",
  "key29": "2TFPKvZYP33qUi2J8jtp3ZvFNBSXz7rt7NCpKPdESb2wUyYe4PXD8VQMqEbEj1KKmj4gsD9g8EFcE6Ks9DkDh1XV",
  "key30": "6291yCYwzMvkHJZzNBHEzv3Qd7dfghoBiEzRi5mSsmtsA98Cu3yxmEgxaqeR5tBpLr77MDXs8TXPt6nwhk6qbii4"
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
