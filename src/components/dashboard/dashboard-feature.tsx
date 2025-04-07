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
    "3yTWm4BuSiXSozVWmhpbwpVeMeGwRVKvH7Nyp1VZ7xrJptmYNtLF1NuXrNCzNcv91qT3xN5PxWywFgtnjxDToFhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GV9J4SW9HG4ktvHLytZYjQs8N6ySMpXR8sDgWUWs5vXsjvND4Vpfjv7Wi1x8dLq3tEi33kBEGMohTHAiyPtXf2H",
  "key1": "HChSXMdyrHx1RFG6KYWJLB27j8xKukEWJN7tNcATgW958gt4PuyPDMqn9mmYGmDFd1tokhQMjkZ53WsCJzUZdu2",
  "key2": "5EhHxF4SPQmAV9wgWRyKNc21gXmqJkfJq4tL9aibgbxevbEdSpazpMvFXPX3W47Rn7K7VDJFTrXQsPiC8yFbk5Hh",
  "key3": "2racrSM1ryGGRAtU1h44a8axoCBkxfRHXGbGsPAV2SBu3GgLyL1FCgrWxhcfdAhF9dnLFPoHrT4PNEcsUoF5mcrH",
  "key4": "5GFRbc1ubH8TpUCMSaidQ6XQttw1NXoqbWUiJvMkFhBU4MyNCNrrCFsEHbpfghFmbHf8NFRfp7YdJk6TrLw74wMX",
  "key5": "xoaSjc3pwAfQj3zPbBPrwf1MwYyVHeu1gFJtZEzUo7PV1xBCSp6j7v9TDfuvmYkCViynwosbDQRZFxN5ELxtaVB",
  "key6": "2hDbH48wMZwkwrvxjyME2Mi5ZNcPWbEJJLX2U5Yf6VSXzcSp4wJhw5KpFvgk8bDbpEUuQNMgbxXyJjXUjBY3JsSy",
  "key7": "3wRgpz4U1NdY4cKnomGa7LHgcmKDmHRvxprkP6zQD3P3xxjV7UKthf3HX2yLk8H2XgBT16VCXSiJw16nYyxURQMM",
  "key8": "417HdYTQ8BM5r6NqkWsUztES8YWQns83hJ7WmWmrLhtwVPFshAinewGxsNaXF3xktURxs3UiYXKZXP5fKTVRYuKC",
  "key9": "2jtzJrvkzUxU28NWm6HfTxatkmoyRu8DawVvQ48xGyeoNmJ8WtYWvxXdHGExZLbYJM5uobRRwGw1oviP3Wn6HmV",
  "key10": "2oz5oi3ajqbAUVFjHkvVyehMoCHxFxwThQpLDG1QoT7xRw2d5zFu9BqmRzjveT1ugPidMGm6ERi1k5Msr8kzyHyG",
  "key11": "5HPFz9n2xkkyJPAaHXgvJowgfUmLFmeK3zhMWnVM56YLWFb24TatcEc5FNiPWYDHjzU1L1yXp6HeKiv7Dzgu4Yc",
  "key12": "64NaRu8hyuBaydhyeqsUDZfkZ2Q6ushMt4UsbnakK8D3zwpZFYCZ3CaCt2nJ8dM9QBCQXp5yQ1vEK2HH8hnpyFxD",
  "key13": "3uQr4sbhijhpMucwQT54SRTDxD4Ud31LShS6DchUmKJ4FvXeKtejJ3uzVeH8zoP9FegghA6hWrZ7yexhUzZ79iDx",
  "key14": "3spvNaMhEXhBWZoJoJNqVwR7NtaimgtXbsLuKN84VXvsdL64yR3G24b5mz9qZHktZ6WP6kp36waj4juT93Aepr2M",
  "key15": "2xzsuPnEbfFAxQxgtweVJ1sjW9CLm3cJefjZjvpzgbW2nfoH68Z4hP2iSmQivkAZwDPW1RqoHBEC5qpeq7xQC3mJ",
  "key16": "4ErZk8P7MDjevDKHHN8b93HrMP9ffndeoHUmD2oqQJKhtkwZzRBw3LxuxAh7oK7W7rdVCC1orQdYHbgSafqoTKWE",
  "key17": "2NM1PJ6knEa1rw49rTnCc3s4wupJYtUDSACFfVMFio59tkuUrWiiuXjTnSa1wsFz9enwVhv495ibhRkfpux63A2T",
  "key18": "4RcWtpB22aXZWRJk2L2TRgWpY4qiauCZMFb8XcXue3PyDT4D2hki7wwSJRFmwQ5kU5u1tfMXXxtVx9TrFt9AaMTs",
  "key19": "5eez76wMaByhehCYayUgETNhwLzvQS9APBHigWFPMwuqRExbvgotz9twVNUUKuLzs2Laq6bSTT2jjEsG5X6PH9g8",
  "key20": "8PY4cDdffWCnBr46wjSnEMHpEQdgCZCzYQfbrtVZ5MpN7jpvAVLsT69ogTyQnPC3Z5ZFee27vcLNY1uG69y29G1",
  "key21": "5ad489hidzH1ak4DvagXAVVA6AEiUdvG1oPVW4N7SZRRapR4XQFqCbMXu9R8JTzcb4nMk4WWemQRnoTHXcX5EonM",
  "key22": "31JL4jvDQo99rU4eoH2PskSRTVkwEFSb2cHtUj8fG88ayUJtLHLDq32A3gEXr2MjyCN9EDM2KGRdfsniQi9wW8aF",
  "key23": "aT9naFia1N3fgybxkT6bYjqm76DLYoE44SwGb9XJCEQ6ahGznjgJuCYtnYPwjmAjF6WvbkHTxEWSrcL8Cq8uSc4",
  "key24": "3HJu7eKisSthWt86uTCQRVD3H9tg7cy44gDEgF1Dcu8LEbE9LfFrhD2yV38D8oqo6Tvdc1jJyqqiE3DGEZmpjtC7",
  "key25": "4LUXXWvXEs8fJxctoocX2sSnGSoACMPLoi7BKaUtmyuPFbKa8arS4YU4knFRP4zD5YwcdbJJAfdYMsVSqgzijnsB",
  "key26": "5Fe4tSXQwnJAZvn8aPza8a8VYdBtneyHjYmDejSXwQNjdvS6wVzQAv6zzKSnd76wmiMKcj1Z8fEvkZZFE9L4AfvJ",
  "key27": "4V7mfc4bE6qDmY9VuUAUG28KFXNPSfj4HrUhukFz5hkAVYbYkPKPpb6bMBMzhnDvAK7mvuJn6p4GNS7dC1B9APor",
  "key28": "bddo9QvQT8PxFuNoSeYLBnPDmUro8eH9BpbmbGUkYWXo3W5dPxMFMQWiJzPuG1yrrYtp4UxVGqkh6iysMcs1b7a",
  "key29": "4Ab1hSyz9zxCMHFftT6B6XzMbKWKPKjUpMGfZE6XiLoRhCUM8rpkCqQGjkdu5YCVJoxwtQNpX5yL4Zdum1igwGLs",
  "key30": "2jP1mqDivNjCRJ88yCg9F74bkrjbZsntYrshdNhNwvreHxsrZsN9QSpRBDog9vMvv1s6ZCPbZwF3wcgP3utK5TU4"
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
