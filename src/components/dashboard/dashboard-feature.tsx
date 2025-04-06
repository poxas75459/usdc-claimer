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
    "3BZz5yo8sfUFGxfjEbrkz4HJCEhxv6B9FBEhrXefmkf1ZB4JHeHKMmwGsG9kQpCyuCmdqUgYKZew9khxm3a34okL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23KvQ7jVdvqZKxMkrsBWnJc9kb5HdZbFXbqrwm2SJUUn8qbPKtMwKJTydqbvm1BHiZNoGxHCeAn9SdakzNe3LN3X",
  "key1": "Dfp35meJ3LFhyFZxA9o4TdMGapPvris3yarGEGPSxCYwXfcyuaQ718beDjdLMTnML8XSm9oJYCDQgWf1SKNcFpF",
  "key2": "27H7rUmeyQfmx8VHWbFAzrX4SQuKGFwr5HCx6y857Venf8J61V2rJyGqZ5M2yuZU6pS9PfVK5DvUCDnH23k9nmWD",
  "key3": "5a5hWTDXcnYPfNL9HE2ifoQEJa9szpbtoCVoVNSe4DpWP3Tc8hJs1e1SmMLagqkG5fb1vLVjDMDxF4H7McSWoWjZ",
  "key4": "4pr2e6jQLTPkfoaesJWdmv5ZjBnKJNsdMvErMdcrbZ4n7umqPdtLy69omuRBD5hBNbvKTT6P2vTRmc9WuLBXmz56",
  "key5": "UHSDHcSTifgnYZhKgF9fYc9PvQxL1Zz37V9y7W9ktwvzYoUxzkSJSnFKYEtMy2UYE1y8CjWfZg93tsYvLRDkrif",
  "key6": "3eV6qUo6HkJt3JZ157T5yw85oS4F6XtUXNSwWqHXaa9oYaPH1ySWKZbgBtUXx8yGZ9YfTWTn8xcuU8uLhxTzuHEP",
  "key7": "5jsqJqGDgNVegQijSQtVMvCDYWTcHT4AJjqvuM29fQ8ZzZS5Tvk4oTcLh5XUymYxZK98Rh2kSj41b7P3UFeRwsB6",
  "key8": "YUf6NW4eSdeopE76A4ApjWoG7PcGzYj553PrSCx9gsx2aCh8hp5z3kVpFUQcF6giEnUrBZNQRCeDn7r5RWLmq4Y",
  "key9": "2aVCg4r1apfzSNKpYUd3BB6aqN2kruR3QQ8k3FuBWMB73mpGvdefWGFtn9zFMkbcEn89BprXJxkCJfJHJQdWP2nN",
  "key10": "BVYRr2kpZPz78CfjST1aYHLeyGmVETBxt7PFzhWAQ62KJa7UNHsj8tQEmeyBkqmCRhKLhGR4ocHjv2QgXA8bKe4",
  "key11": "21uWfkDE6rkiSx2j37kfZ14SGP1HMvdFwQYsS8ub43TGBncyRBLz9S7YnSmQAgKyW9qi9R3ogqMA6Uh2WQp7hDd1",
  "key12": "61j9DbFs5aCJDwYNxgBa9X5HnkhCpYZE46CPd1MXLBJtSefvkKmYMinCpS53e72FGA6J3dttb6VynEB8m7EtZedo",
  "key13": "D4mpaN4NGknBL78bHLkixSjre19hJYvd2A1igjFbkNwmrEkoNfsHU2wEN3xFdXwoWh4GwxDfPRb8MThjjC7MX8y",
  "key14": "3C21SFsfdiyaTpGZGbHe2ePtaFN5StFKXFdMYwdmpX2KG8BsvJd5VeF3Kw5C3UEcENCXtYUxEU2ZfaG2Vw7YweKg",
  "key15": "54FnMRPJNiezbTuPpmCicTJ4baT4xAZ4T3heR1iSSz7iXwk3qStbyjVyjPG5G3RjsMA5fE1MAkTsHAKc8j7vUoXH",
  "key16": "24GvHppcEpvyhwMopYKRgZ8mWNwaUNQGna7URWv27RVWCoxyEz5GNdJiTrX4J9Dxex8xnuTSfKr4q43ipH5BgeLi",
  "key17": "4HDg76WG1axt4jKya9PLDNendKaLKsmihwF9JMUijPJtc3E1u88qZqwGZ5x425cK6ASSF1nEVBkjHzHdHXtugEgP",
  "key18": "5jTtYuqebibxusY78CxQLfwXYuqaYNy8tT5DmrVYnFQYX6DxDECAZpCKATm3RKDXjTPYtXbhNc5w3oKN6U9rpHez",
  "key19": "3q6W8sR3pkHXwbLwySjthgK7EXdt1UjKbBMzPRwFLWjjyc2xA95ckE1H5jdTqEWWEyo1daQybbsGBSobw4qNVmkk",
  "key20": "QWLtAdHwoaevpdmcerRUdR2GDg19uBxomyygRTWCfYkMHdKNGfmtdi7kzczBn9JD25mfKyQdGGa6jNTFMzqdvVd",
  "key21": "2pPqjL7t9wWWuX5gwy2DUTSVg8koCp2d6aTNiY1pyBr4r7uMGppUkKEdEVyXPMMCFXxeEYcsSxjTDKAVpaALrE51",
  "key22": "3xZq7PMmGuchBtwxESRMY4EAfghCvvKp7XEUBShmrsxih99ya55rDDi2ksRm8uKC7HxnZFqu7SfGxPvepxKoFDrv",
  "key23": "5aaz8dFocQFf98rgjNK2m3SMEuw7PJTknAqHHxrCKmkBwqShrpZanseW3E5Cx7DSRHjKMx3bLPaSrg5MdC2ssDrY",
  "key24": "3LSTdVkaXcviRBuzdqWMEZZEvHUQMBe3shQRx6qeDRctHJ7pdTgAbUEAZaDyBB4WCDRBPC2XeEgwN4sBdXe91WHH",
  "key25": "5Ef13bYyjriAr7oQ9Q2JAG1QZGPLELnK3WYDwzd96MwT5YRbjDZk4H5TCzq3jVHjMn88ecjxihqzRQgdoVCNSatK",
  "key26": "2QCfUKUgWJMg4TYUT8k8unH6pHKq6onnJCcdynHNny4KWnK4a9eNzNpYuFLnLjyuU7uZcoMhse6xZpYNmP2Vp2Xk",
  "key27": "3aXU7CZpv2URkSfpujJmvCzTt2XrfQKqt2EpQ1PmuKA2BtqsqRGTJvz9rCuBrfYu6LZVWRbc1fMQxeWmxMKHLtm9",
  "key28": "675ciywqnbBp5jJJ12ZC54tHdHFnujs7KVKLJtH9kaRFYrgiYP1GzqqTePtcJyYKKMdaXCPNZJareJJqoMLwN8b2",
  "key29": "4rQVj9dnanDLUFH9cTjjKqrY1bWGYNJnjHJjkCdqi1DcNbawUnrWP2htXwzpUgd7bbhg25CNGpTcwbXh5TEe9o39",
  "key30": "5LnhNW4nS3EuuMeyyTpW7K2YXJw7qeG1XzWHDhoxDedQ2Ts5vUSrLrYRBvEbpgTXvmU7tVhkfMEqCNLKfzTLxxyn",
  "key31": "33LbR1c8R3dPUffFR9HNXn2HQrDJRKfiF6GjnacyndQx1KAbuDnM2CLfTJVwJtMoXjkim3icrrVNWhfTnSr48Gkm",
  "key32": "46pFM7T4q564kQKyz6up9Sn4KiEDKQ2BejRjXHPNerqRTdvJbogT8AxvFX5PcHNYSjPnY5zV9vtKDjS7gU7KQTF9",
  "key33": "5PkJgZH4hRH1pbPSSDvchVSGsSDmbfyaXBC2MD5pgTxWQF51XJKVTytsWagk2bpw59VCkRfAfoPEykJY4UcwzspV",
  "key34": "UtkU9wBd8DMYruojwCn8sT3YjfmhPBMfbXMUXmBW6VSrDtoGojfFEPMeU9CqV4w5CTfBjapjXQx2FCgPVzVeKL8"
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
