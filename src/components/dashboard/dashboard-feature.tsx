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
    "3HikzQ3PfPTPswbkBbSVVsTkqAxi8qJ8mku7m8moehkFKtQ4vkDMzJ4pwL6paghgGoURez39nnhNfByfR8588mDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NYrNeCu4jeveDMbX9dqKetb8BMfN72fC1LrdpxXF7Q1NPnv3WszcQg3mtPrMhNK1XAPXvvi615z436JvrJSmhMD",
  "key1": "4oKxsce2Xrr3rcQcqmqMj6HrbSuzeeSmmc77EUPWYxGDFWPWNteDh8VTvJMFYZDD8mqtUrb3qsnft7nsRohyFQLG",
  "key2": "2Y8BUrYMxhg7SXtkxSBJJubhyKxVjQe31t3F97pBLTKZqbhfnZE1CUszmMe7LPguE9xZvAws1oh8f85P1dj2WCYv",
  "key3": "2Bci3FhBRMoMsL8WhvtYcU4PEUYgWoqom4iqTVjLHtNMvDtyzpmZEgwGWVX5srebo9ixq3SmV8LgEJodeGs3Ajup",
  "key4": "4ZdbU8gWFWyds7GJSwBnyt8EQCN4DNiUU575g7js6e1kcu45qtrN7eP7vi3GADjZhw75TY596XmneoAFs8ySQgpz",
  "key5": "4EjUNDNfFhXMH7EErRx1eF22uEL1avk5DuWq3NgDutC4U7M9E9E1sibmW3dkbS2zwxuudsDXZMyXsipiMGbKXNSZ",
  "key6": "2swFkHen5SYKGSkpEX8LFRD6bCz37mXsZgzdoEw2vsfGdEs2GW4ibj2GurmZfpAfCgDk2YDjPCKQ8Lppf6KBQ21X",
  "key7": "4NMU9u67Xfi6mmUYUCtg5tGb4q8QkymA8xtctBamihXAwmVbqfCkWgWPvQQcuX67hbz1d2NYLzcXFg7UCpDbhWJy",
  "key8": "3Fiaw5bpaF9DMEwnmmtUSnBZ9jzE6AfAsq115BF3sWWhcK33JTSGgQW7mkmWGsxmjkdExLqSgdj6mfspZTtWDxQH",
  "key9": "3Ro2gSNgeaWgWWhPoqE1Rk255c2D3buwaoQ2iEzqsLh2FxmBnmDyPgomcBgvm9gNLRVG3XvNHmm24vUMaXfUwkqZ",
  "key10": "cpfq2DAtSFD7BGE9xm6SyBCmA7xq1FoFuK7ZbfQddiaUqe3irG3Yv18fRpB9gACeo4Tet9auUTyJu6APuwM7dAS",
  "key11": "4uCpzAsRwSJPPwNQitknUeheMY1AcUGmRcQDU242DsD2C63E3AVDXBHJMbWx57bZHeyQyEy3vHor9e6viYBPb2vL",
  "key12": "3Cv4mK9x4HNbnnBeTq375uU6rxY5eHGz36XXFXjL4C5XTbS45q5vwoFZVTDP49icogrDSdQAr4SmRg1LxFDsQ2vn",
  "key13": "4bwxwD6wN7bdWc571nPY1HW7jrbCL6iFXmPGLLQK3ss3iFKk4HbVjdiyHL9vR8Q46iJStkRhAyban16cM4HUDws5",
  "key14": "5FW37WQpaLmCWEq9TEeKAxbPm1AnaMqzNyPadmiAE5csvCNjeyWsT7CEj8Zx41dxSkL9iko27yBs3qTNnwUzkZyt",
  "key15": "2z8VWwQPysd5d5Vw44w1esoRrA9Rb4WhszR5APyGJT6tCLaYFJ6BKK7fkY9bwcxzSLBWH9QWqR7kdsitod6yctqp",
  "key16": "4Bm49zYJidjBkDvGqsyFkJUazw3ZAoHxKHgwZdLiwhqYHJ9YR6MP16dJWtsmCTtqdzNgZZcMcEaaHCLiaitNTVTf",
  "key17": "3tqWCKsFJUXdJci8AFYDjmoJMFt8jbwyDHupnpw5cvjXfYrgzr6PGKTxqAzX6Yn8r7JWs5aaQbkiCcnuNjMWsqXP",
  "key18": "2KBspMzq5841wU5Znavy8QYRjEwdACkaRx1V7FL2cFPx6HzqodCbskuEyXhLnicnhUz37Cw25izBxqMso3qrftKE",
  "key19": "5Vmooh3Ce822x5DyF3GgvY6QMYGd8pREEcbCAqcBYFtQK2eqcqzqDx7M6yo6AG513ywVSfVYESEFAeUFphPxYrCt",
  "key20": "4X9wVuE6NY5i229i4eKV2LQgn3r2Z4DeZrPtGwhrvLbmXRayKBWV5zSZGJKc1MSPZiEb4jPKsQu1hoWUFSEogxbD",
  "key21": "4Yzryqj4eBtYgyhzFNQwgPC37qHhtpu1uiPj6k8bLjMBYXE57F365gkXZNbKugB6cnsYVT9LLaZ7cp7pHme9NRsu",
  "key22": "5NLkbzsS3CbpzfwLFgNbsRudNZk1aHEiYAENssdFrxJYMj6rLKahb6wdyo9KdUw7d3NgieKiBkrWRQnB4ZdU5zYF",
  "key23": "gTSxZCvvf62dGqvw7m7dM8YQbx5SUBqDaBiirXgzLuUB3QgzJk1A9nS2c4qHsHQ4xJaxXBKXZ643wrppNCvPaTF",
  "key24": "3PABaFwZMZY5yzMyXUjjycejq6qRGKS4u1ToZiud56xYK2SX8sCUA1HNHaLcYpZnVaNYbYtuLvDzq92j9zW52LoS",
  "key25": "3mv1LFCvsPkc22rATayqmeqFLTWrAjb8okXLTA7oJZYoBvQ6V5MYcuRx7gTYcyWRf7Mo47X24R8w1DLcD27UxKPL",
  "key26": "2WvMKo56RcbYdCpp8UwXhvwRCpK5bf8a7sSJwn1oujEHH6Uzhs8pwCH5NmrXrvm6pE4XxedvoXJxfQ8gRUxH9XsN",
  "key27": "5ws3Z4dMifkwQoo9FEjNYdJCv7rUC77b9S5R2mLttjuAw4KBKB7yQ5tt9VhaojfbwHuf3JeeNgkHatMNJHrLPuSJ",
  "key28": "4Gb9ZzfuFFpo3ueTqeVECaFTfAY1GV4M9kyJcUf4eGhKK6Yrj39gFbpzWNL8aqknahLby2We3pyzCcW3G1AAoyM7",
  "key29": "5pnBpseAZx5Bt8EkDcHk8adbQ4kzZpHApTzZguSXmeS2TQJTiBR5je9bHxXaQSStCUMRw7xrqE98aDBNGVBYx1EU",
  "key30": "2tEbfhgwyEMw2QKWr6vFMKfQyRzSuGJJ57UqmsGLYkcUPKDbk3eLgT1hFFbH6uMZA3VNU3vJo2QnutBCjXVagHHf",
  "key31": "2fTqhf8Su458TFRfj4ZfAPabuKGyjiz1nDYv1jAbNk9xD7FhnEpWH4meQ4NJbA2yDfksU9KN5QH5Lr6DfYcLs2Jh",
  "key32": "3ZtTcKYKw34M7ccr6gMhwsdkQSePwj28qeP8L6LPDANhHmRUX4ncmbwtJFVyvvhQSVaAdChp47pQhgC7D4YYFJHT",
  "key33": "4SP3yT2tUR6WoKKNXW51zFPXbyxGUUfLussgaEz46wFipRiC6dMVQnCcPDypVp5QeYcmAWsw8TbUR71TnkEfEQ6A",
  "key34": "5LrmrwnotXnY5Wpsnu6RpmhFbBTKJ1LEssX4M5wQpsDQtrEuNvV9yHWJvRGxJnwzqiZL69g2KKCrGz5Ta6TmDCga",
  "key35": "5RFfJZHDj7f7ELLJMC4tvcMA3kh4RXgJF6DjD8p4QbDjpbjnH4hnUZvk35dpDNjk22dcL5vTwF5yPb1SvHTg36GJ",
  "key36": "dZRPNZT3xjQxkW9bBi6pvKFVTCym1g115edyqMtXJuga1U7stapA2k6P9zZbELq8tCD2pNCrx36p19C4V8LWHAy",
  "key37": "3AxWDL6craGxUPovQmdwkU1sEfzNLPfkKzVD1cYAZ8YyagLakYpuQQvB8H2HULTxqCGE33yqZyUEsegD2tSzfoEM",
  "key38": "2sr2yKnkwAExM7VDD9aLGyAAUiVRJWR687tQuuk6rFrbfxLnzgfEwb3oTVTWk1zddxHb7QcD3JzCRMHCfQmDqv4c",
  "key39": "2w7nPxzMQqkr7fv5rRYLzoEGWnDSQGmPPWnzGRjABNNKGs2L8FtfCgF3CXzvRsEahkQmGum39pmF33EuYfKe4iXi",
  "key40": "hkfGDQBYhDGeCP8eX1f7UcecMQSd86yWoYYM24p4ajCdabQUQdLc9MWsKydfLDV2Fdc9rzXwFQgZbRFvW58Y9cb",
  "key41": "2bcbNw6gSyZcVzXVTWf4RJvGqBxKzEuSun4wPYYJXW41PRDnR4WCsXJvpXZuZUsxzPXuRJi9cFvNZzjAYvYPf9FX",
  "key42": "5P8zfqbaxkRmndEMJjhU88BkiDawu6N56UbZmMHeYQenqaBCfRXVrk3SRLJyL4ru8BhLSnBAVQ1YtA8ksAZRNMi6"
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
