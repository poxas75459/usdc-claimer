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
    "22iNepwNUM4KaeCGmat3B23qmynXv4hxk3kKKN9i1QMuMi6r48kChHHZP1rBetLsHuCzUqcP5DcA7qhggRT89nxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DvTtD3usV9JdnnJHqMyqDAJu56LvX2Fh9dA8ULsVcWzVXhTEjBkCGu2c4LUsPPpGwmvzc6m16ESoKVGEHFVgWNP",
  "key1": "4eyaeyURtqVZuu4eijU6fGg5TLkotDbEw4hTHfMyCghYJ7H7Ciwh286DNwxvUsEhk5e7bRGNvgAMXafhf1YP86G5",
  "key2": "3DgheaT36tFmJxksYNYZzgchwoqQx8k5Q5T3Xo1u7G5Kn1MTcgdHBV1wu4eigznWmRJYhtZGDsXChJFnfGUYfixQ",
  "key3": "5D1jaVAfavKKevtchg6tV8YH6PzsfgfMHa7jdMhUfDhrn6MndFfAuPofjXx5xK3Gge7LasFkeocE2ms4oJqU1R5c",
  "key4": "4gHhQqmzCriW1jBceMzVo2zRDMZU1duw7UvFYrTkxMkJfyEemXRBG4z4fNL7sQjoa2U63YBrYjEtvRBZCMYedNLZ",
  "key5": "2EJSZ5Mkhq3gGBkJ3rXLp5koZHqGeqgku5e958kXTuPyKGnqaUDpn98WT3k8SivEPpC35xowzhAL2hiHAfUzxdKk",
  "key6": "Z7MpyQmK51ZogdR5kNrz7CWeABxvVoVyrpz3uVQq56kipqgWrrCnjTCmRhWeRWis4WjLYXuXe52T5KLMTFbYYWm",
  "key7": "4LxN22pPcoVC2Lbex1YH2tfkkZGtRyutdjNLkgCdQ6ynVwRpRfrkhnv9uEgUJ2rnofacHxhHDxf38AH2qwy4a4py",
  "key8": "5Chk4S6ScDixqih4hVndK4kHN798qXXPnr5pnaA1BivKDRmQgiJtT1kNVCi1JNr9JkR8enuJr7yYxwxkoyFcACuZ",
  "key9": "3wzYEGjcz2E4BsiPLqav3GHob7a8UkWUpfeuWwnQAD3ZDGE8ybvQ6qaRHzgcdeexXv8kYeZpg7LfpgzwiA5ywGVb",
  "key10": "r1udY5tTofoKLvjb8QK89ygwyLmZY7KisvSCWNMGcueLxjnzEiz4keQsrgU7qrsg6hz1bJVDtXCJzQZ2HJHEk7H",
  "key11": "2KQPsq7See66UXse7qFAxDY9TVjFHAGvD9eANyCEJ7rW9Sd9xpPpfiZXvhjsaPGQm1ySNDyuAwmwipz3Rc9qY6MH",
  "key12": "5Wcf57aa1RE1QtrAtQqfokuVEUa7NYBfcjED3TWaaMFPXqhNobcVNbzf6hou6649GJ7QDWFxHjDzVdHL368qranQ",
  "key13": "5wML9SUT5cpgPCycdfMCCKZA7XAx71x5H4WXuUSNXZjuqYLHM9RezrZRHRzJyCAo6frgsE6aPQtMQBw6bxCNYmeX",
  "key14": "4aPy6yDQG5EG8sTacevSspHGV13yCG8gkLSbJrFnVcJnZ3JK1FL3KsJfnUKYpKCYdM6xKYkVLZV6Enf8c3Ybi6S1",
  "key15": "62MUbFjE3h1own9CRgez7sBUmHP23ynJTJ9MdTuZiDoP3uhEmesxeSSJ8S2tREr9dK9cG8KN2njQKf2U9qV3EmH1",
  "key16": "5dQnGg4xGxomi8bQWtXq2EuXGkMJUWguqLqQfJVTDLMN9PpS8dy7rJw1HcSd9CScuXdc3DP6gqe3MmFJRwJQpPZs",
  "key17": "4PE5kQrzTsUsggz9P2F9JEjAGut2ynE4tATFKEAkgfYPCQitxJbEVqeD36gLuAxoNp4tJ6dGy4tg8gqn5m6Nfe8q",
  "key18": "2Rz8uaeXTPPKgoEx1aoHC2PyKwMaUcKgycRZm5RyDmupTQSvQR9Hr7mGyhcUNsaQmG8RW7iTqL2KJjLuKEZ5AqPJ",
  "key19": "5dRiQsLNwwwhE14oGHjcBksXcPjpq4L2t4ia67unHVTWwiJerTFrGiiEmE7daAXPRxGXcBzQiqYyVk6N5oJeY3Dt",
  "key20": "3QZZmGzeqHz44mTcDugrKTASCNjrTgRJZHm65Zt46q9EKfhs6wfkspHbKLyhGTSQYRdV47M91ekaJp7ZaiYK7Ds7",
  "key21": "64tuwLUaRQi2LXvwTBR5iHQbip83SuyDB7CX67Jo9qrsRrbYnGgfr9NcNPcQHbpgyKersXke5E5uB3w7N3PkHwRp",
  "key22": "2VZjaN8M6QHxkzmtm58jfRH6dPoH1HxfFDKKxr66aw7qxrhp1tXFcZUqKpejQkoehmv86YpygRtMS41g1amuQ9UF",
  "key23": "4g1zmym217tW323cbxnBabTtjNqKVqkmTjq7CTEYHNF1z25Zmh95LgukfBHb6AHMvjWc831FTdsYSxDCRzjV8u4J",
  "key24": "5WkScsqEQVKy5ysHcUJWnbrrS39XWU9ybdtoUtkRGD8tdrGdS3hisXyqarztB5pT7b87TEMb3aQNky91HzB2CHvt",
  "key25": "7zqFovCnDyCvfN1hWDHBfYeGHrLfmj3MJaRX78CXJVKek4a2ak9C4T49cNbQTiQPKA7W1cRBC2Q6ZVGafLGEPYG",
  "key26": "4HMUonmc3zbf7P8dan9D8CxUrSaYrD7xHJ52UoaQu82DhApkNEC4DLzD6rnYVoMGd9SjSUnVjnibP125qNK2SzJ9",
  "key27": "2PdkTC7jkY8of9QykN3MsMDhVYf4eLfVXkZmK8YyQgc1tpTAhiDSUFpPCs4b7RjmKAa4ZBbXifkJLV88sGGG7yzb",
  "key28": "3RSerYy3o9BbPXZh3Ak72fjr4kNpcLirp2aLcKBkr6xa8vTeUYjELnsYguQmyTMonS47MU2RyhYx4QotHYSjCfxA",
  "key29": "3LM9PYp1xrjN8jnqMio3GUoMs8oQj8zAGguXQX52weiEFsHuTGW2Y81Q2eDuAcauokrxa9TUa7ph78PN6hf8288a",
  "key30": "2uo7i4uTamfXoJwXnwHhVKwcSPdyraq7xJiVAViaGhn18J6yNycBtoQLtqGEpMPwhsWyp6ekMJYNSZ7bHbycBZnW",
  "key31": "E6ZdTdmNo6eE286EcQ7eXvDoXWxvBCA1mgfanVmRfz7jd4XLEyA2gp9Z6n9P9Ywq5CytgEZnCGV5gpvQ7bCwo8z",
  "key32": "2EM3XjG194gi6B8id4Y95HtWdXzy8Rt2JPhXZ9UtU2DJPjYkbw1kFkyo6J6aPi1kQtcy6vLadv5bJSCLeqMHDqCH",
  "key33": "2oqjcdujfnB8jdBzndSSvG6K46RQb2P22dNEpqgZqPxCu8TvHxrmU2ysXD3CKqoLoFrPttSkvFP3qKFw3FWxgXra"
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
