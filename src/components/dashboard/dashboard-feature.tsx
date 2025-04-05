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
    "wsSXhq8nrGk4DJvyeuBh6ya8hbMXFrzfuHscBrMB6mU2rDfY9xSdHFtVrEGoDaxE8uzXCfqK6FKRoBkj8RfoLjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h3iKcNEiQLSaXv33vsHNDAyWX4XtPnZeW8enz7mxf5ZaYWzsuZ3yFhnSQhpSk2UUEPz6nWkLysB9tLLvwn7BveM",
  "key1": "2sP276KBW5Qmead2AubCs2bRKmSbnGD8frBS4nfM5kVn9eTdSvbyaXToTkrPsAXxrP1wqGpXKHoPiME1TmESVP1M",
  "key2": "5B7NwzLu48bBj77tcFpihRW3ZaumfNxAZHSPv3PXQPnfuKYF2BGMHefDgBewnqV7QHofvoDaw9Qd4ZaYUhrzCfcX",
  "key3": "3PxEZeCX9nrVR5Pg1MWzudBQbsRuiPT7EPHgC1fJiE4GsRVWcSP8LPB7Ut2NY8dKbQLAQ3esKdW8mCekxnJkUq9Q",
  "key4": "5cFVAqmVGtYZDVFNKEW7pDncyu84p9yTJ3oEMVdCBXXMHpJGyK9pNfNoaM7L6Jkahd3vDTKKQcv8tq9MbdEG9wkC",
  "key5": "4gQ97KEsYPJdCRjaCSvUhMLAeg8UxMhn957Dx8a3gbsrR1z9ZVm56s82wn5pS8pdQ8zo3fskJekvDn8vZUnikUtB",
  "key6": "4fQ7mpeajqGuvW2nJxCrxkvzJQM3WqkaPo3aVTyV1Ks8Gx4GtrvWHvc7pznJ7cwPLYkEwd29y2gAdyTLpjkVtoit",
  "key7": "2BzbpcfoxhAwFczhWpirpo1QpakLsAvT5cn57Hzt89DV249uopdi2X6146ch6c3exTpV3XyYq3aEN3tL1mBUJX5q",
  "key8": "4QTw4QFyLaY4sSrhyKWqxYHWGsDDBehoNCfhS4MgBP35MB89vMHRZqgJmh6jHMQ5RJEoqrdhkt9msTiqwYszNWdM",
  "key9": "2i8xmyPJ8W9gEKfMVnpP6py8iXYk67dET5Yp3Dy4mrK5BLpgLr6B3aXdyqH9MXUsEK9he4gDuCkLxbXPRvEwvBRt",
  "key10": "4kP9tpqHBSh9kvJG1MgpxMnTPHURJ4d4Lk4pJUmkNSAUtWhMXUkfgAQT6B9eMqtPLwxhWKgrK1SvZ9GAAGzZ7XzW",
  "key11": "4qovbixp1NwUZneHLELxo78bLYiRGxekFszjQ9azkRcHUveLFdARzRxtT9NJZ5Hn3kRQarMsA4961iHzFaVvV6zi",
  "key12": "5JT1aHDJUT7g1qWCPsCopfzLLgoVtHntm5xmq1anmfAYwM44vBeoQnQeyC5ifyNTsJ9KhaVXPFmRZYf9VH5uGK8N",
  "key13": "5pEZtooVVwQCdYB3E3sPFkhiBMqemZTNNeDGaUJbShEVVED1jp7izAShb2Vc2CaUA1M7joxUGJG8dAQ3oxf8emGq",
  "key14": "6azwDnprHBFhUFtE77p5MptyZyxwVvmNeg1dRijtZYq9E3Nc1Wk5UJTdrkMTLvVgyUH9sa2fTnXWoeNgd1bfPN1",
  "key15": "Seg2kbgQQW1VX4PrxQyztAKFeVSkBqcg54y9oXTkthgJg3Kb8Btc6BqSEW9FBjn3TRs5SLk3jpSDz8Dh2E1Cw6L",
  "key16": "3YrV2qpmcLjLaauFkLUQkUqzPNWwyAT5atwwE9MvsxARdzvBi7jLpSswcEifr3HtvRB27HAHXn3MS1CHLyq6PWse",
  "key17": "5upaUybZ7q6qwTfasep96G9JFdtZNX8bGDdV3jSpu6ReHyrHKYErLpYiSCCfAPtEA1amwL7M5ojcEsHRfKT4VDdv",
  "key18": "WBzLH2jF9ybSrfdMTXzfyYxK3jYzpZWS7d2LJ4YZBbCvaXrrEGuPxcrARDQYn6FLYGHQ5RjnAVG7WBYjAgYF9Ts",
  "key19": "4Z7xVvDaXKGjsL4Lvzax2JjxcFKyq7KxYeeEJqGKSYTashdRCmijovNUzoGehdyHk6yLhfAyPYS2ibaPCqbbggT5",
  "key20": "mpnkHjLAyKo7FWbK446vuhxZ6oz6hfqNWzDUjhrw4zngKjqsZirDLamiZu7w7AxK3gJkFtAAEh1FpUMZtr9hPq7",
  "key21": "653KjfcYCLYDEDzRkV6aTKX2yazaMcBatvq4Lftxv8DKqrr6GCcUEGV69gnRRusVV9cJRvqGjVQBnH2RLdkc8EAc",
  "key22": "3nEekfRXY9yJbdWMnH9VrEfdJjfmmPYDZFtKT4caDSmcYw2KrVgWxZ1xcSFkS5XRmZxPTorPtP22ukXJKfsK4Uf9",
  "key23": "2MtyHw9Gi8bomtEf3tyunm6RQn2Dba8VKawpeBg48nYPZC1oiGZSbtcr7oGSohc1EBfMwecf9svEbg9hD67Pf27s",
  "key24": "2SPXmScrpRLX1ZWe2yNTRtCKgmDXBLmzx5bb1qTdcmeD3knWzE5NuLa1FzV4zkAMQcCibgRzYDGpdLEf6bvwtgRF",
  "key25": "2CUqDgXpQRLKphuZsqFdiVCQ4ehgQ7iDoRhA8y1i38msG5Vqyf8gw5MzhvJ2AmHobm7fQ9FbbLooPaBai7X8jUr2",
  "key26": "2EhD1JLwHY1QQVSNyHhvuByGHMCPRKtpEmWgax1vj73uGq4RwV5Jx86b2pdT4WSjpiuKWKzUkeMjuFyp9AmjmN12",
  "key27": "4C2Bk4udfL1scHSJ75sBXmNRZRoW1rfSehKNa6c4oxuShxmacPfVn4TxAfbBJZRvhPj6mX84xYZQiZwEGpu42t4x",
  "key28": "2wQTz5whomZdHRGJ9eYatNYQapmNBeR7ZrxaUamnPUV6x7zJaShpDvvPwub7R69Z8AvqhJ1iSf9pNkNM9xuBLkbk",
  "key29": "3iJKHwN4jRv76fKqygrtJusFDqb2hh5JasYnndnyRfLnH4MyiKgG82rSDaGoHFsGMqANtziG44vzGpQ9JoiPCqUd",
  "key30": "yRoeobZ19sbtN53g6XscSLXwrZWYVj4Z57Jf6bPswgLeoKW83zkn8iEoTSuQVQPMtN67G931eVFXLU7FaNvuKsS",
  "key31": "47Bhb2p2uhQyk9nXNNtEANHtDKui6K3hGzjk8izPFrq41TjdKNgaFduFjwdFGTar8f5hnpDTtCrk7xFSU4xomebv",
  "key32": "5Ut36TA2c3sRJ7eZ1vaxZGFCTx512SfnxAQkQg7bWmiJyhUeHG9TMn1nmprHWTnGAU91yL1EWLYWzBZYYa5nCkos",
  "key33": "3ezmR3ruiKEfi6K4xe8ZCA8rNG7HzXsEtP7oCYhiM59RrXq2H7F2p7D48FbFUaTqdHxUHEXaXgPf1T3A8jxRZSMs",
  "key34": "4PSoXFhJ6DRsiHDoFWG5zyzfmS2J3JWZC6BVnq5X1D9jiovHX3bzSBhJrizWqmxS2ZVF8C7nwLd2ULqAn4Y92gbC"
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
