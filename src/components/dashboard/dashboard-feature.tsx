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
    "3hVz1yo34p3MPtgfwhHJAyD9LBdVnCc4eZta5HSyeZNzJQgh8FE24mwXCjrJuGJzi5BM86dtvjNUgwgHMmLsAiDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eRhRmnygMitidHnzwXRBMLW8wMJWmB1tD98qtv7WKsnC7ZgbVSgMqBd3NBG8d2kujo2Jq6gNY6CtDJg667fbqQc",
  "key1": "31YHdmb7CK8rcgtdjk45dQLx63mETM7UjxUBJ3Svf1yPxGoWSZQqLhxzShh7ezQ42RK9F2CJuhWkxFUs68MXuY4D",
  "key2": "5w8jHkAiCuRvvYqKyhtLTXyHjhPbz5gXf8GjgFiyMJcMxGfXU289Q8heZxr9Rq1ESiK8sMSUzS8aWKfBfooCiBE8",
  "key3": "3aUEw9BwqFmZLXxh9V8WaxM5bJVjkpFcLx5z9g1YJg1iLF979jfWgoyDreXNAkTn4irXg3tkoPiBNuJWFKhQULy7",
  "key4": "3QAyqvFcDXmfpNT52oyUGG3S8AwoMmH6113DPVYZvPaJCkmsxK1GthCuRkQABCWo9fGERiqLhAULvzjKuFk3MQTC",
  "key5": "2b6jvMD7tyvdund4ry7m5ebKFa8DQtoaMmeDzUcwQFrFnAfsxRZM4egRmC31Eew9dV8qj5HWqe2mP9Xsxxu7JAkz",
  "key6": "2Uo8b9XH6qovxzmXqG5kGoZP12G9bWDYjmeLKafzLDJwK4VMuAzgzHs6WyPMFWPNLph1s1UThQ9k1EampoWx9tXf",
  "key7": "4H8ESQxX4tMUKYmmpj8uppUCM8aGhnFuo9De4uZ8VjJVQmfAyppJzUUQxFRriNXmpAyaTR84ZfYonjc6bmz8hiTW",
  "key8": "5TWUtFCdEJYhyaBL8tLxDy9KEQBEFVgkrocykEKjTZEDQwTiJLYqdLQdqujseXzfcgVbYtCL5ce2r95bko8Mij4h",
  "key9": "5W7ec5kDFZAATQfre9HwWhfPep2pKZLAZr1VbtfJXMB6H6hfxwS9EQnWfCf52wMDJznRqreoFsJcs5Gm8irCzAJw",
  "key10": "2GCX7X225BVPMA3UJq1qeQEYoHeYQ5RvuGsCjP5UFc7TvKfPKvRGm7UwwQbfCpbVZTd9kEuv96vCX6Zv574xSKFv",
  "key11": "4wgR6jm39gqvTKbLYPg9VHdpBPTqeF1XBUcK1MfBF3UxaFiP2h2KjaAgWzZdFvPi576cj1kp27KEAhoDTRp7BNaK",
  "key12": "26cgsYsXJMWXm2bfDc4yjmcj4n5toeH9jaXNRZPCx7Dcv8mXdUcd7ySkD81gGiQrcxe5b8iZvUdFz7uY1ZwAE8Qf",
  "key13": "hDwdg3GqDYVJHgE3n2iLR8GCGhrtKsTvyFcJH21wiNEjpDTGwptkYHDX4qXTybasoRBaTUkG9J9HNe5vkhkeiU6",
  "key14": "4KKvEzZfE5tqEZhYs6ftHyj3opnDh8RG3LZP2wdbKhTjBGZs6fYMojVga6PnfYDVvAafo2zRqa8UkiWWiFKCJdhE",
  "key15": "2JKMpXnUuGT8V1sELiWGsxrx8ZGox9fehTQGTwCqxXuio3JWDQtDhtDJj7kxrHayNxMAU3Gw2T9FXBEx6dJLVkU",
  "key16": "62YkkvF452E7B35ptAcGHjNaKRYBmKnKWjSfYaoUx5LuxPS9MDtayQcCnL8WNobswSPT51Y3a4vdTZzw6DwoaKXb",
  "key17": "3yAFv1ifmUarfnxstGPzJdrvhkEM6HG3N2QciJKZnCjEz5ab9wUst73JH7LTYzSkS7Ge1wnc67Tt2P4WHBLuCMhY",
  "key18": "MghpUPNzsu47pS3uw8hE49zu3MY4nA5WMYx2d6vbrUcUy5roPfe84ErPZdwcnDAC8BKqLHCQSja8BsnpuemdFhh",
  "key19": "5HWChKpnrBD7PRh3EoLVkpF9Y5qwYE7QuC4GBi7xgBnFbew5qDTKKsdhEwtMxLCnA9NbZsPP8UyWybjvBPh8sXfs",
  "key20": "5HR4P9VANcnFWAB96UD8uF81Si168RvuzB3Tgx6jpauziBiYAvMvJPvF1FMWysU77QSFfdrTSVXiA2Bz9RthHpYw",
  "key21": "3ijMMsQgBUGWAKqAUqVtbKrpSLYZsTMraXtVMnLzfVyHHEUcwCXadeDxyFdwo2TaSe3j1MheCxNHxdTNtpeq8C1m",
  "key22": "3CN8oE9fNAMiAsX55EExJZ5V6B3PtsgY5niCpWdKFKoecfQEnogcRrTz7869hnbfjtJxsPwvHUipefntbCLLN64R",
  "key23": "2bdmECXXM1LkTy9eZQYqigqbjmwtcu1AesGqpLXkKt1Tq3vziBWbvSXmAqqZQmxqHnYjrk3UkAvJXYcG9s2DR6vC",
  "key24": "2HVHX9EhfiADAd1VS5k6LPsTAQDSDkVY41zSqgFdYqdhUwE9pQbnMosarHykkhbGP6WcSegFcwCVYqAKK1WyLLjQ",
  "key25": "4Q6njkkNvFScrw7nqjDGq3tUbjAmz1L3qD31MgPTKVJr58Ggkm27MVLGTM2ntPoS3hH3DdL6EjmtkGuJ37Fej71L",
  "key26": "sVosBgy8f7EnY8BesNwWctPXGyJvXDaWSSH5q3UxwBRZ3cCccHucpb2DmfeFRgLPfZMcyHZVqTb5C1SDzYNJvdU",
  "key27": "3w7xyna5YemNBTfUgGxAsFpPNJ8zc64Ve3TNfEpAYTkXZyhSvAkna6UFmowhaZsgwixutidFpe5RfWrL5W3mt6VK",
  "key28": "5tSfzrXrKFqyUMKRYyy6N8ENNseVDPnArBA6uofGNWbC1JAJbCxrwtnkfzKYzsaoie1d2kEZhrHft7tHK9Kd3uCc",
  "key29": "YVYErdce1X7tzXpEVayWuH9Cuo3ZQ25hYUdkUd2EugQUnuxjd4SEr2AdzoKdcx7BUGZ8mAxW1B6CdUe5uFWLgYb",
  "key30": "3NFZcSSXrhNNyjoPZ3PR7RQn5FakYNZDCBvqvy4CkFnzkaJYm3YKKSFtvBiB1RbsSnrsyijaGQyMnAFyb3c4z6Vt",
  "key31": "5HiyQzE641CHFq3a5P6xTmEA4FXZ2ZrUTd5XC7b23RttV3U2Uajkbzqx1g7FLWu3LJBWc8Zmi2nSgX2qdL6mqurJ",
  "key32": "66prQiqscZ4z5gKwPwM2Zwq3VSnPDn2iHZwytCLyyucSHqEEpV9snbXYGQMZKcP9enEjAhS9CVm55Z4zLctziwNG",
  "key33": "FzXNFNNt2rPZjyK1fftVpitTMaQRGEeiVfYPL5AEXUQDDGPeVM3gWe88pT8vzGdAvTKzopGWFcHfQ2P8DHvcQat",
  "key34": "59ChxzRPtahhQz3yxsa3npqXxLWW4iBTaNkVEzuZAGffuWZKKpPpmz9vYjg7YWp7RygmFqWZpsiSrZCe8T6uGWD2",
  "key35": "2xBHJahzcVcuDHN9qJeth755jeVJrvRbeWpaEW5mqBpkWVsfgUmn4LnL3R7uxkgXdJVzoWVRwhBwKGTWhihVsWdM",
  "key36": "3vMCTAfBXwckY6P5QsGtjGJFTg4QNUoevxQh9Sx7mxmA5DhKxErky1GNCkWFLQAMYtkUPAvH2tC4Ao6BBnEioWH1"
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
