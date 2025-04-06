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
    "8w8aXRRKMAMueQgMJAbhsUC6R1vD7VGY1aqiJJANXZDeBHyeLRpCitonaPwz49meEsZHxbeWUJbaL57pSUsUAor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HjHTNri5X5U7oxw91hiYDjtDH9NpeU4261MtKKEKvZEgYMUoHH3vA7n9nAiCXf7m1Jz3ARcZ73gd7mgaWvV6aEY",
  "key1": "54B5gQYf9NhP2a7PhkMGQK4LePenEwLwWLhnNbd4mcgxyXLLs1x9KQfKV4ZBD2Fg8tSgFhMxh8J5WMJbLn8EgCbY",
  "key2": "4s1re2V9ZxptscLVaSKJr7WjdoVnqTYVtZo1bwQkkCouz5wNBMXmCDS69tHNT1dLXBMN5cqztQPyKgM4NqRkzWYF",
  "key3": "23JApFWHxbVLwxyUZCevb6eY7vDk3CEXPshPVjTj2FgDzuh8Jyekic4A4c4S6mAP8U5ymQL7mpGPrfTvDnP5K8dE",
  "key4": "3dHdt1oDPsTPn5ftQ51j2fygJskydNU4cYnDrhNQ8NH2sE2RDtpwDk67CppUEmxSJVJdfNanCMqKySwc515RUnqP",
  "key5": "24mYe3y1ZucePqMM6iCY1ibUgwfDCv6aTmktDTA1sP6GdymUrycyJPmpgiV58V1iSiCRPbqY6JXpJmfUvuGni8st",
  "key6": "5RvhBpZ2Kk1NdgMg9iqC9AHwUNBJ4zp8cifKjggtAteYBHqaJeZeBLcLPtqqDz2qgnfmxHVFQxif4cvDCHjiM7rm",
  "key7": "639RLwxgCp77NrBPKLN2VrJrnSKjmTzMWi2fgTbeotyM1V2MatBAqr5T22RXP5U1hFCTKPKN4zfU6to3ETe3LNB3",
  "key8": "4a5dcNEpFKBk9YybrepuhCUvUNfYhhaXg2vPCGPQz5u8Qyyv9Ryag9KqTaozuUn5GteiXGoeWP4jz5EVDh2u3rNv",
  "key9": "65oCJ4CRPFNBDSd43TZZev8PSxeKxvk8Hh1mb9mqcnkZqzD4NZTtwYpSfMizstJvRcMSFL1tPyvY3qnbFhJFeUpZ",
  "key10": "39XGJW1J81hMeCsjcZNubZ6KzyJ8geCfSZjVszVEg3fLhEPi3htohZ2UMb3EtAsSrNCWP9WvvZvA37o2e3Wn3nTg",
  "key11": "2dk5VJAKosJqJJ81Yd7DMg8QGUh53Bq256MxwtBTHVSE8zU8NBF2hkkzEkuvz1PS8uC1KtawmiKLLz9Q6cgHBEi4",
  "key12": "2Xj7f5UDzVoJeui5w71AZK1EJVpZGHFQRfnTsCsbymDkXBn5cWvDjLzvFcacsSHxQEfVB7Q3xBrzHsBgeoLrwkwi",
  "key13": "2BQYHGiD1bWkxgFZYRpSzdMrNm2y7f9swPCZYSVk9Us4h9dacuhRpjv7Ad8jV6ykmnxk4Lgi6UfPtBjx4XLXv5uR",
  "key14": "3emFFBZxj86kZC1XFryMMjVsCDxtGeKrNQyzLjFWqMjuyhZvLiJ21JS6LfL3ZKw26zjy4r7tcqyj3cFcvWLoAVPx",
  "key15": "2a5czk9SJz5y92meYXjCtMJkq6t8PrZoYk3v7GEmXKneH8gEFv44ZwHBGPCekjEjgZtZbvec41KB9Bt8rVutwUys",
  "key16": "66Zna8BHh9Sc1GHFSeDYA3VDTwZoB48FeAyg1vaNdE2aDnpCxjEGxT8ootwLuXWFVVsmcgEGbEurH3Go5QGaQfA4",
  "key17": "4SZtGaEiyvk7qiihNJKPFhgHDsUhhYqmfnQCZLqUcDeKMKZiPx9T7nvtg1sz1VS7JtYChK2BmfCYLDkxXN3wquA6",
  "key18": "i4CrbcscPrwATxMPHxEVr5z3Bpqab2hC37Qno74VkKtECgxUecCKa2npEh2LvPW27JegSB5oJPzFHdqWigN3mCx",
  "key19": "4Qpkvcas279FM3fGe7m2vTjHT52pUpukT6LFvbPWhrs4hKumVAQoJAokZjt1MT2o6AVDV1xTjtsKDjszVaQsAdBR",
  "key20": "5auSiPhQqCaoHJv9vW6LuJc5RdHfAUgZvcxLpTVsxGUnVBBa7LbUF5oiW7VERKTDb9qiSehT2rv5BjdgMMzgporW",
  "key21": "eKcv56Tq1KtPVgBzSWN8Z6AZAXdzADuQzUcDTGzqRKTihAfbZLq6exo9LBKUCmJbTToVVdesQuqUtKraGJpQCji",
  "key22": "3zCiJQC3DJnDus8kBc9NGH2895EM6FofxDcg5jCAhn4Fmu2zHwMaHD7EkhZvmoMQ1jpstSyibkLhBjDzfpFCx7f1",
  "key23": "4XwocGcG9U31xova28A7RUzWwBQBcgRanWqonNvtPnxwibVb7DQK5Dv1TuzcULYoQxvYTuKbxhqDRNYE4SL8AgRy",
  "key24": "25TRVhxzUQC7CpUd2txCye6pNpGjevtmpjgVFQUz6b8CuEZ61L7AtjRdzpjKqz3ie6N85AxJ2nK7A11XsPUso69M",
  "key25": "5NLDJnM7EApB3vYTCHXphJpMx4YLsdDPt8ekDmGdvZAAsMpgRjghAVNCayV3yj6TjGnapymQc2skeU6kQwLeHSaj",
  "key26": "2mZPVp88ww9obKAFPTGJmMsSLkPEnAgZWpjZ4SH8TDxVMrPrwJUDUXCtNGxZFuGqqJRaBnxxHtPzaHnkaCz6g5Pu",
  "key27": "2yZs8EQeTdntWQmVnE7Y9EErvVxt76xnhZpyUCcBappCeSAgB6hxzmwaevZ97ioZrYf3AaVu14EtZ2EGFaDRvAFM",
  "key28": "5gx9WpksY4J8xb1FDaUcrXvVhXuDEL5JqF8sRgvXkxD4JJJE6b7SrbnYmbNcFVmAQwVVZPXREmWE86Hfq4mekaB9",
  "key29": "kYhLV6hChWbneaexsVXbWtCBjB21169BcRXSrRdPvVZX9nmqhUMDizGiMqSQkuCWqTAvuAXvmf6DVcToYR3i6pz",
  "key30": "4N5CsVRdcYx75kJqUB86yKsNvjfkgQkrvLm4Lgx5rynYLr7TXBvD7Ae5MC8Mfmh7ptndSfX64xHbo1PC11Tftod7",
  "key31": "8Len7kANhHcH6XxkXMQSc2yTp4T21RHqg8JQ8U9PkoRvsMLvyA8ooYVqrVM4jDMGaetsyzWH9UhvzPwU84dGqp6",
  "key32": "53TxqS7MvNZHhYUcfhUbp8bSZZUmE1sVKwuKZuzjkQw3KwXxUBmkgmm6i1PuA6gwUkcjgE4f5TjnX4ojvRrfA55w",
  "key33": "3oJiKNoH9QQG4cGdSbqq8QTtysFnF2zw68gLyi8ZW6Bpaxn8N14Eddmt6speYPsJF2UW6TYHpz6AdDPFMJYJfDsv",
  "key34": "3kuCPW9sVQLHsxVxmr6wpra7enKjpXuGg9T8HmBmKLhr5wqNWA67uefWvjh8wKf4tW5bVPkfWksSt7WX8ArJMKDZ",
  "key35": "5pScBr27xXWTkiC8NCMNhgEZZ4kdcKCVg3giRXuENkD3ocrZYEv5mSxGejNroKFYeeB3farftFM7LSSSNMVdNe6v",
  "key36": "5FUyuZm3NszD8D9cmW18oSUaiPEJZH3DC68QiVi54bvGSgcgisyie2DHJQpdqAGx3573dssXMph2AL1bZ88WR7G8"
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
