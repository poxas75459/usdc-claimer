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
    "jaavgRBSortn4dw1dTJmqTHs1gW7wfTuMksihVGaU5RyYK4KejVKyWf6RNiAUPdwMvUszXNVQE1qqgKFupS7GWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QDM4dQYda8zmEG3meh2bUjPmrhT9asGcwDm4SWGqBTKn3zwee12fHfrG7w8CgZQu1TSpR6mBccKaqrczHhWKEeG",
  "key1": "4vfB5xtv6uKsLc2zUu1JBvTPUiStpmcnehfYZEAhEZyeKSvabaKB3UAVUxq1rKKczJb9392GfTPxYSVn1fxJGK1u",
  "key2": "3Y2AcnXGdXsrr34jfvNT4QcCWn2Gm6FiV2UV9bALuSNX8QQXdKAtweJswrNtk3BoHAEU4naQp18v21NhyGHHnNiS",
  "key3": "5maca5BFN19yY7WrGxzH1s6xoNXuoj1SSsJDWFwmCZPRYjKJBfPpYeY8RvTHbHy8LB9CZ2KY4EHWLbNSawaSUayR",
  "key4": "3K6BrNSgrUVsyBGSVJvUNwyj7qGFpNeiyJoJNqQ3yfDF65bCF7vigApJrY3jzEhSFep2fP9Jw6tg8zrwgSaQYuAP",
  "key5": "2wP16phJoay86xySYv4yNHMzrZpVZjSNGQBH91CZdFhtX1T5vTUphdyD9kA9hUyq9gJZxqqhRe55UNZHuTRimATd",
  "key6": "37xHz5jHQEfqyeK8KwXYo42disAeDCDo18wJQBkBAnjaqTVtKQJsj6HQ3mB5QcRUAhAfpJsTBfhiFStxypYdr7kk",
  "key7": "2rw6wYTPFTXFLeoLp4ZfrD8i9qD6c2YZEvMBv2FKTvvz71syPYwyc3LhL2uLucJDBC25CRW1xvPq7AfD2Ce9MAEf",
  "key8": "63UhLCkKkoSU2mJwkYp7HyL9b1baYdkcMi7t8EVQKYF2YyWNsfvLqaLLKNqmKDdTEnBtsZpmMiT1cS3ssPvVUrp7",
  "key9": "5vAHN9vi94ewTLwgt8sYfn5cNZdRzYh13yTXewm8RDfqfvh2S7p6pNmVJmNJV11MugkQYbuG2T9w8wgwAeFMfwpk",
  "key10": "4AZyWFUAtzj4sQ53hUYNkBZ3ydVWDMBnrr6cc3c9H8FjUXnQDGmbcfRwvFYH4XcDE3hoXtRvQH5xVi7g1wTVVYhU",
  "key11": "34pENNMDUrTeZ1bxGQbBLHm3PJ81sjcVQaM5ciUGjjBvLtVb7ouERqCbuWkPSsBR4rVZVXZqgeBhLDdrd3RXde2T",
  "key12": "3ZvMB8WQ96k7vCod8Cco6DccJnYUDDbqjfYVMTkbwUFbB8udFNCkSYAvKTPNU4R29o5A9HxcmMBRi6rTh191u1Ce",
  "key13": "2uyfQbk72GhbsZd1r3bxr9FoNLxPf2kWALueGJMB6E1dCpN3fXYSgTS8GwTrrGCR2dBUFNTbex1V1mYkk9imm42",
  "key14": "5XTYXxGPFjHNGvMgwwLwCvh5Rw3Fd3L2JgjYh4SwpZ5EgefFv275i868yCmA2LWJ2HeJvMYtMPj4zWgZqFfabQRB",
  "key15": "2qhRhYkJ748J3gz3isMhnV1nfLtubmQsZaEAJoNsFhpy4FzA25jYpGVftjJwESiWD14Pi4PUZVJ517YxfJLweUSf",
  "key16": "5eBRYsNAt19aXsSA1AHAVrALq1V97YYGgbSi3CMH4nJDxp1iiJoD5J6HkS3UVwukaZnPY2wkQjqDfhQz9cc5NGaz",
  "key17": "4Zv9PLbjvSdBtvHSRpvs9ct4JFY5eWZRubQGgX1ayKtLpStRTwZzEXfe3qwv29weuPacg6Vy7bd8S5HqfC44752o",
  "key18": "2hCNQUPFXN1z3WpbJGt75qRSQ7yqu1iSTCgQKDJQdecGehpBBsuzqz4oJotnU4eY1skR9PVJFHq4RhfPeXsXn6CB",
  "key19": "3cpDFnLE3ZXqpjt1PrJiAjfEv6Gww8LHq272BAiURVYbxHDTW8wGPiS6DGZZoT9i7BZjazVJZ4dEDWZzqk4ukvVN",
  "key20": "4rFSGevoyU2nGW6HPbZmpVj1FdghaESaRq35j4mWX3Q6VqsY32y9da5hugpGw5yH8GbE43duBqHqbeqPrzhaEYB",
  "key21": "4x8P3Gu6TdzBRnt7Kz8BhShTvFnUWxEnkSgna6yS5KgALQAfQAUY3ZFDEnvJgJGrzpfh218WQgMibcDUFFCUdKvq",
  "key22": "4ywAFVQTC27ujez8ZsbKq5wTaHc2oQVSbeU99znuaJKdwBnffQBpHxMeRrLH8basZtGbwxGGmxiLo7tgEXAiLaz1",
  "key23": "4dN2XY7C3SA9Vxrn2iamD45zTBtRG7s5uNoDL82bAWMzR8Yy63Jfcqg1B3HSYL5zvQ35rMpCeLkj4q4sZXusL54C",
  "key24": "4K9RT49BEyJQGvzg9LfyR7dmAnUeSnkuuLk6MKUZvv5YDZ7kzdqvGWGnrGJdx6gNo8u1KrCTCuxMcP6vXaLbpetu"
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
