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
    "3ad5JdhfmncqMZGgcF1S6iU7XkAmwsWrdWDEDae8d6Ne6E4tKffJPZJErb7yGnL7P6JjchQD6xfJMMPhzv5faLj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NqwCrmiiNaFiPKjzgUt1TjFKf6dEmcfeTThg5ADXxD72txBhmS4z4VTq3Rv8A1ertkHQmBnjH8fPeyvd9zfDmpt",
  "key1": "23nqu1xq5QEeubWsvYa7HHbDdQpq5RcMLeb2PGt9GNzcBG8P1etJQZ3fiG5Xi99EuNRwgh5mrkG7Ac9fMKNXgC9s",
  "key2": "T5pJXFXCS5mdMXu6A2K9Ln17ruZrNg2ZTd9VRHUEi7rZpFDhcJUpKmw9LjpbKb8bV3Wak7vvtz3NKf8BiM9Dwx3",
  "key3": "2ygSTNAdxiobA98RAgEb1HPo5scTRHewQtbVJUnegbiNRmJBPLCjk6NjA3nUyhrr3BH4jzvmkH5M19baEn6ZL2AG",
  "key4": "3bMC4GgcxYGWr6qEQxa7RbnbajrkterTQ4PkUyQptpx6fWBbaPKdjxGePEvSTTBxkKjRiPhxopTdmiv3WKApQUYh",
  "key5": "2RVghJt8n1drnFovQbhEcdZrm23ZUaQdnmjRY1S2vusc6xZ2vEc9sJeDQazUTexs4ywikhoczZySZyge8gCUXrM2",
  "key6": "39DNmVoYcj3J55RAZ87ES75kjastvD8GFjHyjRebmfZsBkTxLTqf5kKi24B3ix3cQmrwN1NBwwHHvRFyX5oYNEBA",
  "key7": "4C6jVtSsPCQfjeKAC45r8BLaXDo2wteMxkJHChsaUXzmnBAUULSxLn5ci6SoRavspHT7vubBqCPtDmffAubtFExZ",
  "key8": "i85gxXpACJv1CR32C5uWKnTtXfpjnu1D5DGyGRRTibmKejrLp9QVshHaLajhfmgYxGNmqCSKc3fM6GfHsPFPrjS",
  "key9": "45j9AWD51BPX4JZTZ4VRcofz7YEmnXKBzfmscnKyZfbfsC9PjEPqjV19uNBHFXTSPmPGM9mCgvjpfacBQu2iRhFB",
  "key10": "3msfkePGKmjxoVUN2v8GWS7YhQjyaxkMxfj2yGxYmV2EJQeGshFYBL5xfuhQVpcicVF5t242v4hjvdUEJyzXtAvx",
  "key11": "2uEZB9ctK7Afjks22Pz5BmCegJiyH56i5KzwQmk8ceno6fHKVPESJpiGXNPZRurYW84uHJZhmjTAppc9JHQdFswe",
  "key12": "5Lx5S877PzJdyUFMnDmpB7T8d1KVEy4ipRV6J8jbkAQ6qbEJ18E6HAsHAyJXo84Bg2yh83yXDrnfSWnNK4pnuARG",
  "key13": "5UZrqK8fV6wZMow4UcJLHNpCMQvc9qm4vfyXM6hq8CPEqrUXMngQ8jSk9aygyiFacSjVWcAY8ozL6Wh9zqyBSYqw",
  "key14": "2wBRaYvBK2hjadAfDwYo6cw6r6eUMVsQ3ZSoaPWouoZqNFBkgKYjwnDRaKJtv13TbUP6nXBbDVKMxTYmXBUd1Aem",
  "key15": "4sQ8qSL5o1ekyBS6tuj7wBpjRX17eqbV1nTUQ2U6Z1n7RJ89hBRFYVaW34JTx5STrJGavdwcJsdPMm8LM499tFrN",
  "key16": "5M9KCTJJZryNkthrc1UQJV55BU3yjS14LCxaRow96sJvDG6zBjfEE5x2T88Nw5tS5zZUAh5jcqf1otR1JPF4NNLP",
  "key17": "3XHmEN7FtpFiaCehfkZiLufXCowE7u1Ynk6RpyGfw93zMqnQiSM1MCMS93AatDu1KDj7v7G6t6CsBmc8k1k62ZER",
  "key18": "WjJb97TBk2jbfHRW72Hf6Dg6wPUQMa2Cf81ceKfAMmcBYQYSLzzv1vSErYoqY8eVAqL4jpNVTqdVLM5TfFQzCYm",
  "key19": "35x9cXfRmzcb1CoxTWBBuNmx8dUbdJG93yFB21mkZDnBgxwRrY9t7SevdiogLUiijmfhwU6eJCgSHrpCSKXo9Jzx",
  "key20": "4uLGQKgTXHTQabBephwx3B7z95wBk2hFxdDvnVE4Hcqmi7v64dTezHHscZ1Fip5QzYwfTUaj2ghTvuHpNtrWtjgE",
  "key21": "5BViTB6ddAxJF2tWWnsR2MiZVetFTMr95Td4DLiqHscrWjTvPFnT8RiD89u4KNVaEGY6rQU6oJK91FHnjNT4M2JR",
  "key22": "e2BYZAJ5hCxwPKPrd6csTZYK9MTR5Lh7KmJ9iUt1vTdrb6aY7AJYV5dZVAn4PMeZSpi7SQ2bbtFKqdRoLMRUwmP",
  "key23": "4pa36TPgzqTnSHpEkGamRz1op5jA1NgBbmXT86Y9NU5E6vwEUtZiZowzXDrcbEYDej4BVbYRuLZdpUHL6uQngANj",
  "key24": "QLNCqG64R3rsRkHNh2Ah1q1eZw5PisXBMQ9AT5VDbsNYi95TvYa1YUNwPF4fy5VZ9RZX76dUiGoye7c9fq7fn9z",
  "key25": "38eUU4LspnR1ejpvGnqUxJAqxXrgFDwjA4c2v2TTSz2fg8kdmsk3FWxeE7uzKT7aNi1fDJFuzTBrERcKeDPcXpt",
  "key26": "pXNTFmnE792upauhNN8CFRSw2qkbt4dK1LavvaKvgx4x5uiVX1bfNP8uWCHoZZwbgmCCsU9ooqHZYMu5v9ZPjjF",
  "key27": "49dTX2mcSMiDkKdW3ibLgNCydVW3QE9CA918NuratBR5wUrTAHsrhL47FBHGV46NQYZgmypGFPtkFkxBjV8oJWRm",
  "key28": "gkncPXN9Db4V5rDbyUVgQvcPpoarprp8HFSXaz1rtyLmYrJ5ZFE6WoLYjDg7WjxHzgCKW1xSDM6s5eCSq2wPx9U",
  "key29": "52vz9FHQPPevAhW8PuSEpvw2sGxSspn9XmA1H2fq1bKmPKCJwAPmgsG8B28qFeQ935en6P3hMbh4BXb81rxFnKf4",
  "key30": "3qHJdEUyxGQzSuu22pcJmtHq6ATy4VpC35rNiueYQk4L9uJU2DBgHdQ6kCZ73mB1USBF2V2KwBgmGbCFg2Nrz99j",
  "key31": "26rAjEujFhi4rt4RDLwjGeiqwbxUSYJzoxXjRubmEyYnqaYNjE5FHgsvykrHHKqfJBGxq7KuAVosRw8TUyuc5dKn",
  "key32": "2qex1X9KjwR9Wn9k5Sp3NfQr8KqkUCzFU72swPZspUWVnSL3rsYhUf4N6u8spCcFXnnhaTeGydN6DWj6iGpBmaWd",
  "key33": "3patd82NX6UQgDY5c6wx1gsupg3cnPM4ULBMbgJ5yfgjKrHXrepB1zwUcoSDwcvYh4dmwHLBfcvfnWTJSUFo3KbW",
  "key34": "5pvrar4N4M9K5A5DPYpbtNJbkuKKQMUxj7NNb4gdsty4HYVdvFXt4odjtK9yMqX1RcKD8HkxzYSTM5EaPCN3gXc4",
  "key35": "3Sf6e8Kxrh9GExdLBCM1zefoA234ugoyjorNYHwPWLwX7B4qu9bW7w7GRB4gApDMbrtxuhtCMQP3tvawYxJKFjrR",
  "key36": "5KXqPJvsucnbFCAXJshc1iAxxw2CC8sJQLqLaDra8LnaNatosSXUn7VhLHx3a2xA5QqEZ2zjuFmYTQPtYvXtKcZW",
  "key37": "2ytMHyhVDx5s5bG7WVGeGrutziJhUom5AkG5oT6LpMP2EFcLUo44BryFmGjJk5spigUr25ytyNnQADzAr8hFMtyw",
  "key38": "2mswQ6s3Q6Vx8GgVUB9gN8A2xw61tA5TiqZQN154tyAnnHDBjaDXK6JQ1v7jQ4wrm9kkPnmFT2UfVXzjhYbwcjR2",
  "key39": "4DMuUnEgnK7gwftDweAbX1uUhdAjUCGDeorA7vFYdazQTzkXvZWZn7u2SzwaBSmqwttFrQCxqFLrYJXze91YUan5",
  "key40": "57apPGcueEUeP3x2HgtoSFnXH8KtuuxbUKvmGebTUZqqujyEWUXnPyee4qsrJEFzmGSrVgWjcqfN1mNEzSD2MPzq",
  "key41": "5Sma3Jm3EjNHSfYXpDpqPZdyXV2bwv4CdU5EfTZJjvpN56ju2vBuGA6Urm6q8Dz9Fs1kbwh9DHbnMthGNRB36RbR",
  "key42": "2pfhwXBnieTjxBm9yWuLMrTyZ2rPKmDskteCuqC1fizLCaTLWbTroCyePXFGH2gebPLD7ub8hvxEFjhzWWyxJ3hR",
  "key43": "667GWXMmgSNhoojFaFMkc8pEHHNKzfaWT1pNRwoZyfuwDHdmw26HRQesP9R9U7StpGMyQS5MA9ySyuwetH5tg4RV",
  "key44": "3dJh6QBYDX3vZ7cuDWQrRMak86Y9Fvij85TuZRSemG1XPhqZnKzvFXncNyvs9sDJQCwsG6RLbJYvXN61X3JBkbDK",
  "key45": "5fnZEaCGbuffMM6wNuDuA2WS2aMHd589gGm844Km39yezkm2Z2ytQpFDFidMJsxgVnxFJ38Q64nvZoHavDgq95Xp"
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
