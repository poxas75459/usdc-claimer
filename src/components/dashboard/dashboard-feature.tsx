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
    "2Gpo5tHd3zjdfz458iagGdCYnfzBTXkNg7xs3t2q3xGHq9G19WpzegMep7fTEXD7xJrr2Eq1QWk5Y94QyeBA7awu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mC5VPf7JeTbFUtJmQ6do4oHiMP2qjoQaw7UPTASRSwUtnurHhdePKszNd3YJcmAPycAb1HXwTWH1Fj7hTsJXP7V",
  "key1": "5xFY7xMVGtBXsRUdkUs2L6aKTSnkNMYgmDtSqtkKgFnENjeBUJkoHsNfGvJhe7qhCPUNpsSfhR9Qs6xZNeHsv8AB",
  "key2": "4KmnkRsrLQaiYEVo3Sh7GamBrs1CwE76xjyZKdpSBtYjxiN8ncqC2Yt4vufjts7G374dbhmRZPpZnvxd2916g5AK",
  "key3": "4gYUUbLk1WBgqjyvqK7M9eHyHv5YBXTk4eNfHR6jKGkyqJubcKd64kVgMUuxipMJicH8MDghx7RcjPoRaitf6tC7",
  "key4": "2mFWkQrn6913dpnaDoVLTnHXCHzeAx3Eyxg9h1hpyT8SEwy2JDi5ZTwEvf2QGeAT9xkVVWbeeX9kvcD9pggvT3Mz",
  "key5": "3zrYd4MGAHW16DxDumVviSs6ScjKYgJqSnUKPgkZCnkaqBjo9VUUMi59pquduSZ8Ay7GYJnr7wvZwHACN2tWoeem",
  "key6": "4PtEY1uiPRqbw48yxiPZGF5hBBKbebtUhQnDZPqBS4D8r4v8PfZF3YB468nu8xuWX6ZiNjSRt6pCCKg3mncyRUC2",
  "key7": "3wZ3VKQG8t67gmRc7c4Tmb8EtK7RwyCt6fU4Fh1iK5GvFysBhsENts6CF6oJq4qvsmUtkW7FoJR6GmyHizY7EM8z",
  "key8": "1KTdRGr2g1FGjDQ7K3aDzML2wFJFZcYGLQb8z8AaPw6jLuNNjxN7YUtRrJikx3rQmkPxxqFeijCcrU1fAw3GeyC",
  "key9": "5keUeFp9uSMiD2cY6Fsho9koF9hbzzq3GaQRS9EbSC4tQoToh21ZW6yfSFMmcQsxyyCHUtcRKegKNmdP3DEC9GUa",
  "key10": "4ZhrVHTK95JdAiJspfhC6SE98AWsBK8oyUYVdEJ4M2SSxx5GVjQ52gNSFGjw5eCfLLeJtkYnU2QZpuQjPPTMZTtA",
  "key11": "2FPfathqw4X3q7hpJRfGi9VuLGhsk2teDstaojagRDhjehgbSRAWviErCXCJNGdduQYugwHBAFM2HmgYpz8NonRN",
  "key12": "5MvktHvSsUKvvJQEmxGdrJooLSFpjWrd7K1xkQgFPFCj3d73gNqD2P8UTWPh4APaFV96QGmHUXE8qemt624ayXYx",
  "key13": "mMJpy8otJHpPp2VPKhzQF4QNyDk8Rb1kFZzsnSJ8xV4FUWxnXmPz6zaLM8hNa4mJ49jKM6Egs3RRhyUw4VxJJ1T",
  "key14": "3wXUJAHiCSpQsqn4wMhA22Zu3Y2YpLUD71bfgPSZMJ6p81TkwLr9w9MnwFNv4df4VzaDsHQRaZGEL4yAbVquPuBf",
  "key15": "29EcLyu67wT8f23E5ZeMpN2zWHcV2bLNNsP9tcWjxjHTj1NUPyBvxxd7FSu7J7pKSa9rBUuQNz7b1fwpC2dr1u7T",
  "key16": "3c5nekhnTujsPwQfKJJCyC4QtBTLWUt6eNtVXiJt4N57DUvv4dsPf5LHBzWGYnnehAYSqSMcuNANXgEqeGa2YyQC",
  "key17": "55gQJvkcLfzASQbDzzfmDWCvqDsCUNiiFU6gVoMeThRdc9JJCTz1PcFnUb8eTNpyrKN17fWRnL2cyFx4CvVWVbxB",
  "key18": "59rvauHugposHwnenrhkr6XUK4AKXU7bNuRHBGJewKhtYxbbeJ42mUQUA5UXFaGHpmz1ATDPnmv5abMQriNsDrc4",
  "key19": "56FfFUuBnUErfW1Yp7wm6yjVPDpH94bjACCqfEsPHnQZEQnC7oVFPcwDLeUhZsGSPFiyCMaygnqkXb8HE8k4LjRP",
  "key20": "2g6E8jvWBTA9YuDnWhHvhxhwWpy7teFoAzvSHvjjicePViBVhfWmW9nSbZ8W1mLzRDVRwK5kDvqmJnqQqWHxBbAx",
  "key21": "EWot6nhfrzgAKS4g4PdRVQBfa2RZpeCpJYNQoZmcCFMisdoSpgRSq9GzvP4KbfoZ7TNUijWgz48DYhrg5XYAkKV",
  "key22": "41J9bhG9FQjkfybQr4FixfcESPUYn7dgx1QCNgmfGX2RGKYz8kFjG1EF2KvPrV53fqVm3NpY5C7HAp8AYRE8cV9L",
  "key23": "5m6acx56Gwy1LKsiC7SzLLh4ZfHjbXNyusaezsu8SU8Z35w6uJqQA7uVbD1LEfaDeF1TLN1U5PbPLDBdZTagSStp",
  "key24": "3n1SYh5X51quRek13MC9DS61RXzt1LZ7HG81MokPAZhqhkD7we1KKJfzRUp1rGe6q4dEVocu1TMSGer5or9D3xmk",
  "key25": "4mQFickMysbBXibhwuKVPwUzXmB2E9WJGoAKK89aKW6Q48ZScJdKawf7FqPabocUXYmaM491JiMQRwzDjCUpvfgF",
  "key26": "4rXNjXjuzvYk5yeDgE5F8GMoAjbypBxVh1iCMKewVkeVqFEoLYR6oNVEBbczUkgRjwdDKy7Kz4iwsrfnZ7g51n5T",
  "key27": "2u5XC5ERLRYPd9Lyew4mfMDVokfofwcw2StnyQMho9WJ52J92EUDpgKid1P5gibSdaEVbc1csZjpcHWkf9RPMRt3",
  "key28": "p83dAxz9S1bc1hZntnFTpgDZKiUyxqne2fQnF49wptPynFxkCV7QYqUcSxhSMj2ztTfP3uU5uUv57dCwBVRVbQx",
  "key29": "4sPVzxrRYmhJrr8NJ2fgxzY32FnytnCkDzXRNXAEgJe7WvNNbzW2Jo5fG2BHdGijt6ZKz9x4u7bPo2VgwcKL1zJT",
  "key30": "4Q11PXJpLURRDEyCZqKyAh3F3A8qvbKG93h9nodfNA9G4twprY6aJausqz8UGZVJd3H7zrZTbDroF6zjaPsi3dzX",
  "key31": "4N5qUVyvMi9hE4gQ4Pmf5Zo77hbBeosvv8tXHr4t99EFKsn6nrNSxMPu1jeuQ1nRVuXvf6JmZmG7CJLx5XfxnYr2",
  "key32": "4Yi9nN9aHuduzM3H49KPKnZMp12LuQ37KVsRTeCv5qj6pPEGEoXhduEFf4GCmFsMZji6TX1nXX83tZoqHzToaZsh",
  "key33": "uARYhsrq3sBpQG8rGDJyup5e5WwAQivJFRA45Sx7aG5zqJekorC8sYWsEaj3YXY2bZZahdQSF6sJFNc4MGNnChC",
  "key34": "4mu5xGNDt4DcRwtfT9A86KXXMgZWfvrjyRFd7cN16h7p68rt8uMcm8CicAnS7YFXuLxWvG4QY4zsG45A33bGAfxy",
  "key35": "4GPLmioCTjXni8uhNSaSPWQfjEvsEnXaPUESstqSLA3TmATxXSEizhNspoVZN7zm3h3x874BMYHNtztmZ7mNLufq",
  "key36": "3fBusngykFhaTTScU9VeASbRFtxfuZoDSotUwvYdNForDZrJ9zNRGfLBBiSq2rPLn7WsXBUPcyZxTha5BfgBj99R",
  "key37": "2LQN3S3b9HiYea5SevF8ocZhAU91N7xctX3m6DE3wLBsSvYwSYCwH5Cca6Qv2ByvBoyo5GHLA57uM6Ux3Ate1D3C"
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
