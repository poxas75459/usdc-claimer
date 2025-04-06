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
    "p27n1gtrnoELgm46SByauovwNuvgcmbmyio3UkiPTzofqnUv8bmYqQmTB3sAJrhdgGUoXViFP3BHDvcBw29vhmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QF1hDZGkXjhhuWY62dro8xp1QK5VojopnMCKYCpaMYUKhDFhegcEPF8mCgsczD1nm2ehwhvGSXPv9rzqVBu24go",
  "key1": "4v9sxV1zZ6ep54TN1wvZzGwBq2rJNAHkwh3Pkmb8VbLhnamC21UpQvNJbierMqT7XxAUpjAEuukfr3H2wxphna4y",
  "key2": "2zYrj1HpfxSc1bQh67zJ7Rz1UcbESRq4GxLHs8k4F8uXdcqcFifauPfZKKVXXgaXaDArYS2CZMKmLYhCLTmASFgB",
  "key3": "V8r9wsc2BMpf8H3eUogVBxUWSvMPZhQGB1qZxGJ91ZzGYrkNnTStd2D6qG1kDPeTz5kV23B9me7kqiTxCLzrKNY",
  "key4": "hCUGQS54RczcicRS5CHFyPGsb1viY5KSu9TLdyYxpkETZnH2HrJD5azKyRobzd3q6GX3AFespGCkyJavCHoFj7D",
  "key5": "LfNKxcL6biQ158tiwXBPcKproE1gx8Bu8Xjs1u2j6AzHDUA9rbWpGPJNGqU1fuhUc9GD7qL2cyBtB2rukWq4DRo",
  "key6": "23UwspTqzCgj4AZJjew8483TeMdAi4uB9HMTbHUYpa4KBH9GwGG6Rp8kx7fcACq3wVt2T6gf6XjGdZpdVTSYHwAg",
  "key7": "3Eb5PBiJNntPdLDLVSkp5BMAjN6pp7RpQ7wYcyzfPNUs3LfCQARX4EmuUQJ8pfF5UZwMr2TaUkoZtdRxw91QjpJz",
  "key8": "5FTyXqNNWbQsdinSGkaHXGoN4vG7m5jQPF2gPk2wxcrfJr2ohmnyhxjqfjWAEJAixo7F2DdYakbVN7JQ2e4PXB1f",
  "key9": "2ZohLQ2AodnWmQmFhL6f4pwqays38PxtPJRVNJbb7tpGZfwxY3omCGMcfLmP143eVGPW8LpfC3Vh9fVzjvsxCwNg",
  "key10": "4u2rX4avr9yqmtKv7fsRm7ZWQMjZFDehfoGQkuoiTbg3PfFtFz3Rbnjm65s8LSQMo9Hj9Uouiyc2LgB581HvyUCq",
  "key11": "4DNAyJM4wpqKemrueknU6ohqXo8N7mCvdkwxLvoR1kpphWrtMkT2DmWQgQNQoRJPoBrqq4DtAmaSJe7XwYFFvtYy",
  "key12": "3F2iwWy4XXx4GeDqiF78CLzbxzp2wjn3VbrLMPKJbnEc6ATWZN8UBowwgZNzSo9vwBmpYmhuj2wVrxVLF3v9TMoU",
  "key13": "SfPecNNh2kLpFiD6dmDk9yrMZphNHZdpSHg1zt2BF7YLVwsTT9jXLQJEF78doqpUQF5Q93HMaZPYASqMpi4APUZ",
  "key14": "4rBkZzWxX579j6iH2HLvoEne6xnmaz3JncNgu8PLXtzjqAyJEbKyGEratVJCmMM3VxACdsDAZJXQ7NHmXxpW5zNE",
  "key15": "55EqFYQya8ox6Sy5NQF9URYY4oYvJdpkCWS3EyTELiWNwwRrGji3vrz4SbyR3tUDx5q5M39WRGgyUNKzSQNSYFsP",
  "key16": "4JYVv1ZPkLGCvc4iqjUs92AG1WBeav2G4bRiLjmWhFAP81hV6Xh5DSUmv8Q4VMzLPD25BTRi4tYfwmb7MvNHhmhj",
  "key17": "65W8WmPZAiKKgZ5KQbtq7U8tNaNQAvCidPTorQ9dLZ48Uqdkg6WrRnCDXs3gL34K7TB4MACv7YiRjpzscNeFk94z",
  "key18": "52VHVfqhxWLbFZdoxrYbqjKZ7WB7HeNbafNynQwvszng6X81RwPHT2ANZrt1pZtz6hKkGU7awf3p23GF9TJBAjwY",
  "key19": "4cJ2GBtafxFQ4bXfvVMnLSpTDtL2RmfhwNDTjJ5J3EQzTRwQDLUArn7kuWQdhsU71JKFFfYtVxhN7TcLqGj7LJQQ",
  "key20": "5WSLox7iWFo54ejvvxxSLkkAZQPunnSKWqWKdKw8nCR2L3gKUtAwxXCVkkDKK8TBdkh5AGNPHqq42UVVPGGhtTn",
  "key21": "4A3exQmkAZkp5c1WUH6oYghJLej1P6qdpXDyQo3YTCAeVCRLgTKwwr81cu39GLuJ9nS23Bqvt4vPStC8PQ8mbqEC",
  "key22": "2f5Wumn8jZ4TZgQMDUDqDdxBiqaCNsC5WFHY8TvEWnbjfCVmjNxFLy898TpQLSDhfriukzJ2ASUi9BhPeE1ErSzv",
  "key23": "cs1am2BrNJ2Na7KJcVz9qqxq2RgbdRXqjXxs6r7b7WV6ajGJEuUhs6VNFvSLCRZJg6upH6ovPMMKkEdrS9Ma2VL",
  "key24": "3zMUaAyf2kXgrLo2SAZxMBuo3T7sbifiEX2qVMe8ftRWXYQKyQr9pZjddAHZ1hcUJFH41SqhMT2zmqp1vMXpK4Xo",
  "key25": "3z5vHgaJSRDhVVV5dud6aKKQMA4Ac71ybz8BNBDDzXeKoB5sdJeU6NnbJMr4LDg4SeDtTJAW75crUyVWy5rW1Nhz",
  "key26": "4GM4TtmK3aNJ6RQFYHFXdK7sZtwqvqvtB3wm7xUSZ1sPuyZscnJsHbSmxmXpLk2KDrqRVZgBzoqMDKU9GS4AJyQW",
  "key27": "udfKao3vx2hajG5mQqCd9eQqHuqTeArXymw4ndkv4SgYX46skoKirbjN6BeSNgFbp28bqUMg9ZaUaq633ZwhzxN",
  "key28": "2GKRL25xsViEQMgZLQM2Ho2Vj3DdhFAXq7wgudfzoE3gCd3yVgv4Zuca33Fxhy3TihF3ufyHKpmExNFrmVjH7gHJ",
  "key29": "4QZRbc8R3TmJRzRCjkdM7Jph8p3mzbTkGg9U574D5JmC9XLmx6eyYhh9hG6JzfC54hTT6fDThfNFLiVSZrhZXK46",
  "key30": "2cmCx7UQecR6EPw3QNvzhkXLBmuWaF51W5hrNyvaAjunGKNZsEBwkFu2QC6scb6xz4q6uUBtoMiqfqEDPUkzZGS9",
  "key31": "dQ1YVqrXwHegGZLcGNG7jpZedu1uQQTLns5qU5AfxSYC2TLaXvKEj1n6vyqVbAvDsNkUb82doSRdbqaFgBDRSZ6",
  "key32": "4ywYXD8vbNUb7XwQ4LLMVWUARwVVe1tmCD2pPgfBWBT4ypkiEUZGXFVBXKWnhKCZWGeUARxvFYu6VgGBVWfXr6yP",
  "key33": "5cL4fyEeter1LEmbesGzbWdRyr8gV9w8n4QGuNa11cYjopXXkNcnvhbDHXo44VbXVvC7ajoLt2L1zckFR2D2W16q",
  "key34": "2SRNq7XvYtp5v7PRe8CrqZTxFQGujkRGP8wH1bfH7Tf1eGi795RSFd4FjhHvNnom7QAS1yc6DEgoCaJPH7RnAMV5",
  "key35": "3QkgVmHjCyD9pWdsim77kdi7mLjhgEEvDQ1fefG1vjTV3qiM8M9S1kkWdUkYsz4W2vYXnFk8Wr8wJojBqn1vbndU",
  "key36": "5n2j3YVHqGn6b2Tp14pQFdCxj77dCBBetRey22Z6djk3cq67vWZqG5o2pdQhkZbeThYcjsp1HC6QDbAENUdyUMfH",
  "key37": "4aoJGRxLoP6fUgc6Nkd1cRjdo94bZ3Lf2iUbnzugxUCb5ESGseUzFttXcpKBh2ie3t6yzVQioA4qH6nJhQU2RX85",
  "key38": "4kRTzxpxJ3jqzZuoypThbEDDRwdCXk3PMzL874ztnxaaNwKu31KyNnGS42fETYLGZb2Bi8p5Ux2L9mnNWMWLcTHh",
  "key39": "4AjQBGnM711K6vTfr9HqGgTk4uU5KgU1oprnxrTECSBTSkSBUtuB2rPJZfanoXvAyVUaHAa7tC9T3g5Pp4RLZNpC",
  "key40": "243ucyrH7zqoa7kyXqs1n4NhrNYQHCuT1iSGkkk9NCPx4yjWYZCDkoBNJ6fEvuyZp4efAK5oSu4D2i5f4ZEz18Na"
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
