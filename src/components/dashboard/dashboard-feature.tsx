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
    "2RriRaDamVSi47EKwDo51jCJdBdw1Bp6dM28n44DBnZHofmBL88sf1RYnQtABYCq5FEUMwRdZYRsrWTbR3AxwGTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HVNAB57CZKkX5QS1KuSZNW6VnetrjBCWwT8Fa2a2KfDSks72DoUtppK1ATszUByF7ASKZs3EfVmeAjNjtM5Azqt",
  "key1": "3j2Zj6RZcckbdUkmK2Fg7AracFW2W23EcPLU6SFjDHxecYWtVYmXbeoh9v3WGWTKahxWQpsXvu9L7MbjLX9LNaVQ",
  "key2": "3jFFpaVgkyw67KU8rHEs1h1kF2LmtdZC69oTudBnMSApf82FvpycbCzDiMzu5QbYaLPw9P7JwxjYu81yMqqr4Q2S",
  "key3": "4UHXHedtKRukqHrVJ8G95W1nbrCjfZKg8yS77sBNQSDCFAnmTxo8LKinG4mUQUM28naCZg19PZ6WDo9Ap1bs3KrN",
  "key4": "5HEB31HjCxBbiCxunrZuPQAo5XnTroTFdqELp4Aq8ZXU87mM6yDXY7TJkmNi1yrfYNKBvqt8dEnQoknMdHn2QyKS",
  "key5": "dwexDMWZgbNRYcFVksaeh1wiiiiakdX4iYrqwHGU9ehi33FkZE8uxG1zh7QHheECJVgzCvpSdrFFDgpXNDYEduf",
  "key6": "2DPVCU95uTtNu9qJQyHncMGjoQPfuayvAMpkG2ursNcvfcX1N8i4Kucy6ZJ6WUzbSqn9jK3UioYv4SQT2L9kd5TH",
  "key7": "3GjsBhm5WEBuJp7fzwANMC3B8ReLCkBvxwF3U7UoJP9zoK2xRw1jdUK2we5ha3ysvZHNwWv5zsG9Rw29kwHphdZ7",
  "key8": "4KjNVzdcXAA75h8PWaJUs8KCdHZoMnsBTcdLsAGHSnYHEfv7hEMaFJk4nDDDqzp7CifuPJwmXE8FhxC8UTFWLHUR",
  "key9": "5Q5toMxhVGJYQ6Z3FMpmTF12GQDfDUfYb7mqYdp1ixvQhBq1hJqHtgJQY7eRgRjVxfhJZmxwSJP5GKWMBUHrT5a",
  "key10": "2YBFUma3hw5M95naXqnV5C49MWYnht5Xe8fdWUvQywEDSuYiQHBr6k6mspMqH6VDt6tN5TmxjyBg4stuBm6neZCe",
  "key11": "3DHZUV6rfTW3zTKYQP5kWzV2TwtKmjwoRw6vrik81oWqSVPdsAVa2iyXdAMvSGXBEiTYxMGeMwytJLPjoVbaYbaR",
  "key12": "53YfFDUEjPsRhCL9VuMbmv3UK1cPDFtrhXYMJerq71C9G1W23daECavYHfhWYsLpJzMwDrgTLrapqe3dz9TpK7iA",
  "key13": "5bMHBZ8qkAChbfQ3N77N4uXfvFYF2CMtDBZWRqb2GNrkUvod88oSP99oD4UHFremuKJYwfuzeFgeFzrcE9N9W5W1",
  "key14": "5qFhzZcNt4NCnyG8yYfiPMsw9dZSwqjukcnseJm2b3m2gDtcQB5NekEcvMF3HeE8wAn91gnHdemxbkXYbp5ahzFD",
  "key15": "rmwTUsfNavw2AnThPUiE69UqghM9rjL9FXX3GdGx8fBwwUPYdukNvqnu2QuN9FWo44ZERa83JGXdiWd419V6UeM",
  "key16": "2sizABMuuD44JMquNzYz6e3BcZrjVJdHBmYQB6q6LqcJ1YRuMnqR8VJxGC9XAHa14MSExzn1JzPbDpcAdJkeT2wG",
  "key17": "EZEHvj63PYhPNFpDx4VZNm5SA2pshUNzJKKjU8cRXtAo78hiLi5gN4MVqzeJ8Fg6LVQtA9gjv1jtAchM3gQHhQv",
  "key18": "4swQphzKkpqzcji75xa9gVjcgHkJ7DnNDqCw4uZkSkNiWpj2H2SRNKiAd872YPCpAcyKtwj9orY1d3HPAHTCgMen",
  "key19": "T3sENqY6jF3EUr5JPH3KsVNY489H4fKqyftgtXFPqtArgCGx2fCjkA1mkdE8Wd9o1FyzjkGFiiJEaycyVBVzf7W",
  "key20": "3HrSC6gf8XCDzsDeQdSZ7nL7Ybc1TJ4vj2knkZ5tznNHAfvoT2DF7gY4wkRpMpdrQMkhpeLKYN6xR7B5Tkx8P9zN",
  "key21": "3tQE6oycETZ1S9QWKaoqS1NTjUrTxoxQYoCM2YzsnL58jtVWtCgQg4vL5FPXz4EE6w1U7ijNLfaxGxRV5E7Dzy8A",
  "key22": "XsVmheEwRJScv6yUg6jtj8BSd6NVCCLGY9imGrXbsjfFyEiWjBeDnnoD1txC394pTjMNTcSGv3u4hi4BQJxAnKq",
  "key23": "2QU7NazWdGZWpvbrXKiVopA9NjPN2sXL6kbh2oHp4wZpLHucRjmkyj16xR5atd7uhQM6EwndFjXuC1KigPeJxzus",
  "key24": "Ngb8S5McL3XmjYKqbC2LWwd4v4axkF44ogzUzjh7VszubPmx7MVrFCkk9FTg9GCQzXnnpJBPbSAsST74y2aaMJN",
  "key25": "ioM8UUuEuQAmNU9Hx58n89xctsnamCiPzzWHCm84pDwCmPCTFn72okzw1W8C2dM6rdgBvXXMoPEhi5ozrSHugSe",
  "key26": "56ERA4LDs482t6FoLWHJ2pLLkjSSHeTUMNegr7o6hUUktQn2bM8ioZfE9wacF6R7eAGC2nX7567rbxykmWuuvNSF",
  "key27": "5pwGv41rbqN2d2LGHzEoSeyDa7L16VwqcjXP5L4vCWYtY71HHTaeZRscGTueoHdm6e9iR94KSLWouxooY8SAM6cD",
  "key28": "257n4yhFp5xnxEUvi29tTzn4Bej84jC8vdo8ESpv6LXa9J62RvEt8hu3gtHuHU42tQwtXweZ18rWMaQSaoDS35LP",
  "key29": "2G29u5RH9nZD78xeKe212HjHvheJEQZQRpTa3s94NoirfP47hoFVAs6k9ns7oVnVZBjXvmTqrVFnZswtoCcyDmcE",
  "key30": "5JRxeQhdxENuPAFvTNJrt2SUmtcxnXS5fhgTaf5Z3YPCsNfxTGNJ9FCuSJH62Mwy3xivENxLC1b7VcaodFxX1dfE",
  "key31": "54fGbAssJGYinX6Xjch6EsV97DagVkgAu7dFLjWqcFV7DsnqpQ9ES4qc4UjeqBKsQJNocdcwBWfTpcUDpZ4uzBB2"
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
