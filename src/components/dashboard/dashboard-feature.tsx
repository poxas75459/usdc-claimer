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
    "3eYKsJA7WJka2SRCM8NW4PZwoUfEBj1naYk7YCpdcPvjDZiu7eCuPupS5ZkMDFkNHPHweQgmG81LV39gGJhahxiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GvnWmzEBibbLf88v9PJZQWDSuHkjAQnS5PxYnM7VgH1JAGiW2LRNdKwwsY4fe5p3BspBH62WK84AsDDBppcN3yg",
  "key1": "43qLuTUYAc91uSnLd3zpJzXZroYqpZqRj7YCkwtoxBMC6JAuxvsq5L3H7TAjpfQCT4ZWLaMF9XtwLMXbCCwPL294",
  "key2": "177TQEKxy68rAUF6QRZhSfuUAzsW7tg4vXmYTWLSLkVSckvWEBYJ7Fy5iLJFxQbpF4kfERaWCD1ehzN3DohK64s",
  "key3": "5XQ5ZMvK2SSZGo4BYy8zCyzBFyfUKzeUCWaPBSkTCcEovJM18CAxMYqGYPC6XhGK3LHmr5EiG2sVNZ4f432Saug2",
  "key4": "tgktdCUzqoQFNzs83zAbZagyaXpqTNjJYjUtzySt4JYZ78mDrFUp4Xkpb1edq8PxMKaHjAYJuxebREQPYyYtzWB",
  "key5": "4GFF5boCgxdFmnZLT4ig9DFBYDYqZbbUibb3RbFFvaiatHDwGR3f66tEYPYHGEHmswmnP94expBXps2uUZuBax4Q",
  "key6": "2VZM748fTp8EEA6sTucQkL3jqHMg8ZSojEdoYdn2Hue4UAnCwvR8UsLPS4tyjB93cuYJXqjSVDgmfV3LPEsG1pFv",
  "key7": "45i7RkUTa4Su4Cbfhurbx6cBm9VLKfMmuiBW4HKMpubTsXUrYBrHUeAVR4S311EnjH8fQPSy17C66oZ9xLZodKEJ",
  "key8": "66kpNyqZUmVeRxRYEFx9iGUGveinTVniBxUHsKViCdajn9k6Bwk2GEE8B3ufpkPLNfDq3uYcnQp2t8wsKVugisik",
  "key9": "5iphDsF9pzXRMdcvTHYp4dpERcCLaLT8BCpQYqy3RXqSjP6ZAFSRUwz2akAkjjkeYEz1sG1jriCTFKAHomZpeT1x",
  "key10": "3zZ5WdZpWhGn1RJX7xobogrCU8r4YkDwu8BZiq64Yvs1kqx5ZSHPVYpWCWMeaGQiN6ijEUFKHbnGC6qzZTaj6jJr",
  "key11": "2t16CH8vVUNW2SW4ZmnTy1AgBN3ypJLLEx7GbrQ1d9PLhBQJzUqeQigjuUYfHrg1rwXmxVMfifMpPx62AXdoLjpu",
  "key12": "2qEBvhRt1WsjSUbQzFGrKmgV8w4AEgke4R9QWPFg3WgLts5KBdJR3Nsm8pgyCmZuwMKxTtCZ5Kgh2peKV9cu2V8Q",
  "key13": "2687EFk79sp5EE9j8AFDy3kjNc7Wv8469ryJbNribRnNpSg2C135FSYGBxZbdJC692E1Hs5W2k6yc7LP44YVCVWY",
  "key14": "ZakGhnQ5eeat5SQNyMQ2QSQNW1LyvsiApcvgAxefxhYTJ1ZZBxzyH4NgVaBFo77VT26PsDkY7sfXsvGohnG5bEP",
  "key15": "4nwmDnY7Eqx87KcDYxDCQhKuAKXUnUtCLtBvVeoKGvX2D5TksrXLorJu8zoeogVTV8qvWozwJ72RtwEeBXHobMaa",
  "key16": "LiBi1dRD3QE86yJVDSXkvb65iii1qfpJJMedDis89ZbwSPH733angMdQ2uWfuwwLMsX5CP6B7EqM8fMYbYVoJ9D",
  "key17": "3qU6dSQzQceRCmxYJdJdkR4NJtw57SRJqgbujSFU8iJWrDSiTgKUfpA6FUVKm4gf6C8XRR2c6gWULNwWUcqZPTAi",
  "key18": "PvevFCE63DxCEj599rpUKXoyKHr1uCQp8VCwz1T1HhSCzqNnuAsgBoooxHxdPtPN13KjRuNW55X4kgddVciznwX",
  "key19": "2kuQcTJTEzK6zvRuNgoJb1kgWeJvGyiVB5V7yFHfz43hrzRLQ37VVt471Gn8t92PFbBfGQZfzLZWmzsiMbw91zYy",
  "key20": "4H936vpddKh3LA6ht6a4Knv8hrSQkYWc4mqMPkEVMVt3x2FDhpDuTaqRQcptVFkegbs2EARUuQqdHYeWKYaPZzpV",
  "key21": "4G7wiEoaHheikxSdEtfN2s2CgbuC6BDDjw9cmvNpaVRov6iqXM7p2i8mf5jmq9ucqJz5byRvUTfurRGTMFXTQnKo",
  "key22": "5sa4sDoEK5hvpAwrPdbwWb4FGZjWsAMQBhoYNWmRS54qGJCkmJpgyrfiQ4gAPT7kr2FHBaRf3Ca7wzruS9rnwkWD",
  "key23": "3QwTR5qoBXHCc7JGiCtbPX7s7RkL7LqBL1uUPgK8LiW5jax57oSGSEsx7323eLH9ePDCQZN2jXpHmsqH7gUNXDAU",
  "key24": "5cLrzsr2m5fAWhzkv8boQYAcZhyFFTeJctoAkHbCqmXhbMKhsh1SYBaTP6ktowYFNMB9K2kZEHkhpdNPCbWwQND4",
  "key25": "3SHPcdRxuA3WkyZk7GVZNvTN5ZdEx2sJCBin1471WZvEChm6GKch3Jp4KeeMrKfpnrrwPxaD2Uh57pqPueWg4j6w",
  "key26": "52Sbh2NGwpNJJjcWFJmevhkKr9bGT5fvwptfkjvGQsWQAxo1u5CRfqdGGA4asgqprDFHFiJhEk8cYAHL99RUoHQd",
  "key27": "5MYFDTjKDvmHJCzQETTGRz8LyVALz4sRKkxtDVUbyiv9FdFUXqLxzoKiftdcbo1y3x2tvjxqqrSSz2xE1RCQjf5n",
  "key28": "tGASvsZruoCSXbdTwpZD1FxmvFszSEiGtLQpEf1tTtmfskKPjbJr4unmnCQXWEbTR7vj1bimfvB68s8xR1uNR4V",
  "key29": "Q9umn5JYvmvA6BY2298uRRYMy4NekTdfbZK7pJ1yKH4GjgsGEZeiWb8qz2hChQK3shRM68EU9wfrmjvTwW9Rcxj"
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
