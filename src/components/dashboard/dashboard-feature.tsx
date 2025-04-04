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
    "Rg6hHwsGJ6Z2FeUVdq8PVSEUNF5A46GGbcWfUuWv3EKFZrB1jcqEQUjwDnNWPDoJQRLmrHPe16voJ5eEaYwecZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ue4KCG6tSQcjxzQd977kwwyp1vhcYtqykUR93ze8MmJWqSSAnQoUXmWg9dgT3igukzcd1PMYkkLi2WBto83xpgr",
  "key1": "3ZYvHZ3wvRRBhBx8HQhhHq8CrGJSSayy3Rn6MTAjnsZ6nR8JYjpTC1sJfFrd9D7r6za5ycgZdVJTzcta9AmdU8mW",
  "key2": "2z3LRqK9S2jx5bKn3HE6vGP65TsW7cnRzowghros1T3qibAL3wHaQpNd1DxwMeHUJ19nFrFUXfKzQs1U6h2n4SwR",
  "key3": "52KpguLHtEzUrSCSNPAB3Z4D957Ye9qHcxjxZNfwn9YdEQg39ntSM6pzJpaC7NGoHbQQnsNGpKjZJsvY1hBpS6Fq",
  "key4": "3BtRofVUWMGnVvZFbPbynSZ7tonT7NG7QL4V7syn4G7Xfyq9HuaR2Ns5MRydAYoNJGMxsTgKdom7iKQL4N63sKd7",
  "key5": "3kr9fv96VhDGXXauait4pd3wyrEkh18NLok5oSsm1T96Rf8SQTDd5vei2LmahLcH9jwCkPuPahqXQs3C5QRhqV5N",
  "key6": "4UbF9gQc6pBCxxArsZaAREBKctt6dSh4vWMWcS5eyQrufuya1C2MSQwi8D1CzCjBNsAPQH2S1bczMdDDdrQEtjYG",
  "key7": "4fQ39ASZZLFbQGiqmdcB9VXpDHiRG4fbSsEJQCJCH8uTSBAD6oHTLDSzh1c11sjfNAPQXjj6JVdNzgRetb96832v",
  "key8": "4tXKGDZKeH5rr3XpScdxZAZGivftA4N6Gj7ZrSXLza9RwQt5G6onUx4XMqjKUv6MDRJqovBKX88gefpxNh93XARU",
  "key9": "2szemjxsS3n4KALRvnoPTCFd2MVgUY97cWtTJt3JceEh5KgkgdVfKWkhgsW45HMiTJGHjvXrEeabo5okaxYxrico",
  "key10": "4Vf72NTxHW4VkN9pLLyBYrAfApfvsZHK7KeE6ohhNKUV8rFPreodBvH8SBSrnYtSJTFMovkLJGWzx6jGgou4RcoJ",
  "key11": "2aLKYevUAifTvTNkzcNnYiToHBn3vjyX8jUd4W282P8iqWkEwUJLc3ZKmhAhoZ61K94twGJZnPUXG77UVTAB4TRP",
  "key12": "2pAKmVxCnqJ1ae5K7wEwUnE355wcSa2ramyacV6VwkxvCQ9FR1og6QshDGjMJ7fPDs4UafGReBgak2RVX1ixwWiB",
  "key13": "kyEb4xU2XKcPVnuiFxFLzcujXA5MHNteaHEXDQeYPqcoPSVRosuDKSd7cEEZ7c1qqNWq1Wnghi15RFyWeNrwaZG",
  "key14": "5sgBQExGFE92Cfy5RQxcSe9NHevoBBsy8TpU4CPNqx28KZDX3mbUE9kAyjRMf4zaQU5mHFCKziAYczt6pKzZvhvv",
  "key15": "4QuNRS3J7uC5wbbz7PeN9BNoyfzqV4SeyPcL6gFj9Jz4TZaSmvNRMPTZRAnRBhq7q88ZQ47zvHgoBcYk9YsiGKpm",
  "key16": "4xXcyZJm7sfowkktJDap7s7V5CnzKfwWgUbnyaz8FZjPKcxa1wjDQM4uS9s4snSqssX9KQg7qYPU1SHXZia2EzZS",
  "key17": "JDadM4TKn9QPUHPb6D33vJrWF2DU3fidNUpmQDeEgTuTDGqzLycGe5yiqDHChwfbsAzWin1kmkqnJ7AxAHbtL4p",
  "key18": "34FkSQ23iKXcKrY31A38uy4jjPEvs5NpBFXE2rdeGcnMUjCS5u5i4PZRpT2FqzE6XnBQ3mTmb4TUDU2Az9rBXkto",
  "key19": "44jds6QRvwzzwCAUSmcda3mz16ypNRPJ2fBSMjfGnNdbTwFxRN5yBfGAJK1x8FdRZN3DVDosboAzBBq333eMoFWR",
  "key20": "5Y6cgXwM4aRn9bjBnqbAYgJzzx84BsF2TRu72KGoCScb9eEVgegEsTv73vBvWLM8hTAM3QJRUMsATJYGKibrkwB7",
  "key21": "2YnLXBWd1HXjkuho4SVnVAmfBGV1oBm4bgQhkN3S3m8iFCVXHHWwPz9LVh7gseW1evD38vxPf4VXmKwAW5goJWKC",
  "key22": "jRTMKurNgJFpNLV5UKVubLrxLsgjHyRFdqxdMWTn5gctCJYBanfoSB2RCNJysCDG4FnuxHTg4qchCoStiapYtpf",
  "key23": "5yba9xVotA2MtBBSnTcLAzia58LThjF8KowHypKM7wXQhBQFeaCW4k3wYzg5WFPMCoD8t7F5CmBggQ1jVDM5L3Xn",
  "key24": "549PMk8e7eyRX591Yuz1Gt4U5HH9eJ1NcxH6DhrsDfvDgLNSETJqHWSAt1PFkCgvAezdPR52wej9LZe3fHcuMWzG",
  "key25": "4V4L4iCL6jAcTR4zWfTFgzU4ZauSTxGztb3WcgbryngXbqzYamy1NiiXpr96Kp3NsAesikiPtkjH9zJ5eTfKQYh7",
  "key26": "35qT45EHN1aTB8oZ3o1gkLh3No1tKwQLSnJNudLEWdunmzCP7xAAs8HfPFiyr614zUxamHpRXuxa8tkaWhYJiGKq",
  "key27": "547ptiw5JMqniahJJNPAa2nqMqFFjTTrcbqoTwADTjz1pTYgedaRNBB1C9WDphWdP9FFnbTmN5M8aWhFwgEPkLok",
  "key28": "5NDZKMRK2nK4MoXivrRmT5gRNQroY6PHkkf6DUnfsAZgy5z7wksASoeYVmGAfHdfpEXAJXv4ZH2RLzfC43rmYnYr",
  "key29": "2s5gpJ5rDqBvKMFT2q8gupiqkxcJhd5iVoQkTMXUMQcyWEPCNNFSp52h7P9NNpRju2T86q7JE15hbYxfdGSsLPtc",
  "key30": "j4KsZ5pueKrSBh6b5TfhgDWNjTfrv1wqF9pdnZ7V9mYxpsV2fYMvoUWH5MN3VtzvLAmF4XZycNJpR8Vp76BEg6j",
  "key31": "4E9xWHQjQvw64nJKzCqtAzQiVGiYNUwAocYGuxYAmm24xMw4SH4jLsw6UDq3jQijFLnpGu1ygCPUVXAPp8JqQ5eB",
  "key32": "RaqiercWY98jpLN5UZWkAR8D6bhZ9Ewt4yMQCLohR4G9cwq6oLZPaqamee1TBYoFbuy4ifTriFvJVRDs9orffm9",
  "key33": "3LE96daWM9w6vT2BMZTjqb1iL3zTfu3aKJa8r2XK8wM2MKiTutUxSRyqvBJBcFUj1W7WmsPWcrCvkDSZ42wVEDsJ",
  "key34": "4XNPp9Uiq5rFBqRavbMu4iR5qc93oUUrKuy9wMeTtQJ32RtMiq8FYBKMr8ZQpR5Kw3xTmgAKGfZ7HXW6FMmThGaR",
  "key35": "4dCraMnWwSaiDo4CzCX1GKqxkYvCrcmEHQd7KiF4LfgYUp3um7beLa8CKr8FrQqA1bi9oa5JcpqGSvGDagMuRKt9",
  "key36": "33Btx4Hdu3GSTrirJuxixaLAMgcettJJbU4crozGfZryt5aAxCPzYgtUqw5nLsSeiRHa88rkTEnVRqzJiMvnBEdj",
  "key37": "4Hj3c3Haisav1gwnMzFpCwfdhqHE8gfHScMMwPzrB2ihShR2z4uLpij3hX9FoCvuC1UYFPtjVuwwHzhmMFGiQm89",
  "key38": "2KNKmHURSb66NQZD7EsN41xhXZKnSKXeF8YsPsZsVxu5N6dMsP2NUNNJQMWpxQCUchrq8bidHNpWNMQniRwj3nqj",
  "key39": "4P1Qd5zj22BAy5u8VQiGfQV4HTXapfcKK4tmBUbJDkwm8pwXzWLKuZM2Y4UM7EgKyoyDhfBbEbxtUM4GkeQi6uA9",
  "key40": "3zFEJwjEXpNXW4maxkgUL5sLTccwTLg2vjnugxC1uzc4TcpaE7rpLrFyLnA9Xw6uJPVby5jyePK1ib2qFw1NyPmn",
  "key41": "59u6v7XepbNSgbZbSWJsuQLqtLmoDos5Mr8T5yBobTn6tDwDWjcSHBbKNNcNG14Lsu544EdViipabFV25yXB5DNU"
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
