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
    "3HJ4Hi2c5HoBso7v1do2z8cyzcxfVx2kxRqc3fUUJtA9tUYUoVNBbpCCe4Fnzrdmbn3Nvi6P8jpr2prGLC7nXBSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BaoAQhphHhibHCjAVrZjrMYSC41pejh5qfMP8ARMwyjQi8D98tyAD6n6RzouCgJmnf3ZgBCbPmpbeTbMyUHoGWp",
  "key1": "4FhDuYDoRGJm6F2UVfpRwh9yzdsLqJQUPAMVHwv2Tc8oGbN8rMTzNwLa3U3FtidrXSv4PLeQh2VVFENgMsrhwQ8y",
  "key2": "2mRHXP6DzdQM1cXBSMphTnHeJYd36DkN3iwbV3jDgZLwmVgrZSVi1jkihZwtV5wsoCNArZtrEqjjjqEbHRD1XEkk",
  "key3": "tBXThPpmPoZd5rHpjCHmBMUY4vcV8XmtkFcqBu5SuThrArFUbMdDyUXhB33UNMprRuVTZzv9pnne5CxLFCNZUEU",
  "key4": "2PrdnZAHLmtQXZwjUUKWB7FvD7MUbvJyVxsZQjJGTi3oQ3UoN1mSrujaC1Y7NLM2ZefNRnYpKN4LKqD8SYMAXahh",
  "key5": "3mgFQF6RGeoymvkVCZCe5SXw2Y9HExuv1dPHKUtKf6gVncF8MYPjAVV1GXtpMmRvqWVc2KBoK4eh2TiTgYMxMDyf",
  "key6": "2Xekt3AhXnTsFPAzoa2osT2Laobx1K6hNXxWqMwtXkaAWLz2F7LBjUxoCS1UGkPZC45tQpTV3tmf5fBGdMws7dJd",
  "key7": "ZL84AUizLhXg2f3VAPGR6bEfY3YZWvhFPNNBW8Tq3ePjjip3ZgzUDzDzQxWM5o9jR4qsXmwV11bZBQt8KQ9xotQ",
  "key8": "2VoKRG2z6s9Vui9EwmnKyBEJ85xLjbdSfBfVHCfjZNbXMkDrBnwzktccq5o2RAmYaLSwT3qQ2YvurbTunJB9ms84",
  "key9": "6GiyzqDZaidvg1QDDEe1vt5Dc2YsUJGhbH4sGA3KViKbhdodHS7gST6sK6KfjW8cSL4vcPXtKWXf2DpzMcei5Z1",
  "key10": "65JeQ5YAhodEbHsz7tz9JZ16XU9F6bStfZC9AMPVU9xjjpHR5UKzE9iArJ4qhCE5XmRJvs1eQPpzktRhYDix8TkK",
  "key11": "5Hq7sEBxFxeZxbY97nfJaojPuXZzyxBZHiVBcXmFVtyEHgVcnCKCRitpPC3ueCBK2wnTUo8H8bJ9vaBrcrydEFrj",
  "key12": "rTZxHxYU9f4GMqyUGqzze55Gm2geQEhUTi5dQEcGjneYNuJrKxvDcRYKSTmSSC7RSa1JGYBiPfZQnjbuuLStxmQ",
  "key13": "4UmhzjkGXJWAGrggxriwuq91kXhE4cZCAe3bkYRVDXYXiUpz5UhDv8X1zDBW9kKusF3wbUj62GsMkhjgkn7YzEGw",
  "key14": "2qJ3eHkr1J5ZTT1ZvtDFfPg7G99Z7b2PUpnnhQ7EM5Lf4uue9vufs8zZFJXvd7KwgdSToi1XCq42cgRjt2W5FoDx",
  "key15": "5vYi6KKw6gy7Lx3ZGtLfwbwLjGKfhMdTp5qQvDYYSN6UEHm6cii6ZejAMRJ2AxQzvujhvmwyPsfUQ6wPHw2mUucM",
  "key16": "2Xog5NZBfqY3RPWLVwAoYyTMjY9T9fs6KCFPzYQGzTyJFX5hF1HhqqustcqrGzrLQwjCXPYmeEEbbC3qGd4h6JnU",
  "key17": "36z3qHvZ5V4Uj9j3WyvxJEf8XF8q9VoBS2cDW9pTzHpeZuhZJ6FTBXqV6hyG8n9NpHfHJ34nsZNejd4dbNZLVhh6",
  "key18": "3NTJX5zh9ZFQhjZ5VQfPcCkQWkXbCYqHznPtUN3NbEG8g9Qr5cHDYtzWWBiUCuBzahyTGhuyZHuTD1xer6eJe2us",
  "key19": "59Fu67S4NiYHvw4ZLzakjvRXLiBZg6bfu4x2xsCfvvWTuQZfcEgZnYcGETkp3r4PVWRnR4Kzg7DUgXn9erfkjKnS",
  "key20": "yNzSETYHxcoCNknLQBWoBoFbaDz1ze5xqQL5uRtfkSzryvwJSP1wQymupVTEk6taps1YA5Zrw93atjvU9KAcdTG",
  "key21": "4AzCHj8qgRDPBY9suxrRhL5qU1qKw7Yagtrn9yfoHMGEfW9xaSsHNAyVF7bHerriKSj7N84qJEAXZvgxGvKkeuah",
  "key22": "5F59iRrsFE524bTAYLipUv8iTenArRfgDeeiqx1F5KMHjqJNEEtAkEuTQpP6afk1vWxAb58a3HdcE1ZwLsEJSJn9",
  "key23": "84cy7ta19tMimEHNJ25ew74uCRKNTBU2PBtTRenyLRMhicDYRHydLk7Nssy48Qx5NTocXwcogaqT62R5vLWQ1Kw",
  "key24": "fdU4wVHpoVLaQa8dGyFaCigiJ7KJ1UYNa8M7V9C6JrALqRoHerKvUuwMuBNDoffaq47SkMC1sgQeAXy9pCraN5V",
  "key25": "5o79phd76ag46x6sMsDek6CtAf27H7Tp2nusEMTfJX7ueFFuQYJDQyft1L92y6itepxSzTfodWYFq7gzbDYkxo5Q",
  "key26": "21nfsTa4VbkUkdTetyvh8SKGMsZpAxXGisZH57vvhshysT84RW23iVuzMNFg6VrWEZE8146S5pHuz19PjpoK3np7",
  "key27": "5uvdqpz4uCwqTTUn2h5CQhbo5UnwGuuAiPZUSdu5hUuwSui7HtgKxeLkGSiz8D7GWH6pX5uT7JciXr7K8NVSNMy"
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
