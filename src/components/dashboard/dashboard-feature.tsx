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
    "AKYGWRDb3XhpngGryo4xU7phRpAxZamtUg8G98UTmotTZKe2kKAxhxgK3eB3zfgHxYyW7hXv8YC8KAhxwxQmA1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pqHxrL7Gdce5g9CkZHTDB2W3PgcrZymXwtxkcY7FKpo8D52RhdokPaWfzt5v3PEE9HuS1Vp6b7rPYuEjxWXsKeN",
  "key1": "3CKeZ2w5vdmaAzyKjHGc1s6BdnyuhfPbCPwhHXDyRY1Y7oZ5Dvip2rRwkAy6xzx6mTeuBKfyiPXaZwXVzqtrgAsf",
  "key2": "2b1xrTgGUtb5Y36hkudUdAaFnQGMVm6ZAWyCv2qzkrZGad5LjtAHp18cz7TEYy3ovnTrDnGEBwMnZaEzjTSoS5EW",
  "key3": "2mbZgeSutEc3ftvLjQpjRpHySNxha5zBVPusCvn8hmGcGaFZEuaGdXu3nXUqTm8r4Z9yUEyEDTjnuAZM3SRXSRMG",
  "key4": "K45PL6ygNEhmtHFHhjpE552pZtwTiz2swEMPeEd31uvVeDhQ7VDZ2wszBu4pFPvAfp9URPTWRFTqHKp3gHRFGG3",
  "key5": "2TcKdNCVkKixZ1ttGQ12gmUecUDbZvw3gEzKFY3SH4e3B2wU8WwvyhajKC6QjbvxCwV22u1ciTmQJPMiBEwK9L4U",
  "key6": "2pf1T6ZG1fQTjodNUPjBYu1Fn5o2DGEb3vFDqJ61qJEY8WpzCNJVgQkakXQb9NAz1qMkHGKvxs7mAJKZtgfftLH1",
  "key7": "No2eodyad35djmXP8dU9fdSe86o7AZvXMEJF85vj1otnj5HgbLw9TRPQ5HxSNDbiakZHP16hfo4yjZuT97Z2sw6",
  "key8": "5xkorV4pVQGMv24z7ADpHED33eELK7op4abVLtcq5aKdAn21BQ7fpP6SmfQnrPppsGRkMwf98YhU3bc34i1EuQ3r",
  "key9": "2QgcC615noheYq6rDtv3SszeExkCKf66J9o8HGbZkdTtoQ63pnLBqJxtQ8DWfEag5yZZvWoyhikBWwDB3XhiE1gn",
  "key10": "5Pq8kk7evk9BznqwbAK2EG9PATCGZuNPDgEYkhDonPqySfaVpUDNE5qNsLdCJgcjnaLQCE7uvdjGdCZJAiEPDtkx",
  "key11": "4Q65Si5EkJUKjLBwCkUSPPesFuk7buZUGamjRS7JC3jWQMz8eDLkDpZfgxn2d9gC18gYQ1FRVQtJHx65x33EmKTG",
  "key12": "5boyjDLCdX96J6QZWEJcRb8yXtsFAQHo8UXvR6AaoYYT29jwhcZ1ZXairPiE4KkmVUzK6dKhdgkzf2xXhck48mfB",
  "key13": "4oHrAmW7FeXUVzA2hDNCtXDtmMCv2r4JLYsSyvMhLdDwbASTy7h121Lqf5vZdsfvADbvWRSCYCiKHTNLsFdTCc9F",
  "key14": "5NaDHF3JoVAvCYa7oC9qaxaNRQEnjeQaaDPsrbMzabdcwhxeXmfyErjEyzyRWHWQ36912Mgc5zhW3fWFjyANnYeN",
  "key15": "5jeDyuWzkoeSBpCQPwfqEr25zkhr1jhSe3UstNmF5zsJ4hSWeMD7yLDaSAQwZnaZ1nq8zhs8oNHb9oE4KRYzxJiF",
  "key16": "2MUWSsszuKHx7cVzHpVQkxeaJAAVen5nPJdJEpVqigVUWUXcUUNEt7txKejVNiP9WrZNS6yaLT6dcXtezLFSHNd3",
  "key17": "ZJ9xinRKpo11WT6DAksqjhXJ98U3XtLviK3bVBGA4iyV5ZtLJE8fpeLssWd9WA5YaHX5x5zeSPPq1SYRhNhdYaz",
  "key18": "66Mj5UBkd5xDU5KcW9zjsMUcJ4WPCtEQXg99HmnMbknaLE4VqUSeJjaxaVzDyNG1fwyJKph7mS1Pr1xdbNGqZLTH",
  "key19": "5qkNvLebMcf1dGqwrorTr72zsyMx1LtuHs9t1HQueoqyZr7dsrQyTisGLhLz1Fu8gNnua9DJz6aTGmttiJR7wcDj",
  "key20": "5A4knjFrr2v8gBkjZyBF2wwXXdxPce8r8f1u4ryiAuqcQhsXRAfuD7MebfxFYCLgeBV2CR6TGaya9mPYuUBNqZPE",
  "key21": "NZx3Rhc7JYrr7QHQcJW1A1gFuyEQKaMbKPZyDLUyqEA3LJkPVWNt6JrdGRxF2JV74HYnf7hZusg4QrhZymzm6ya",
  "key22": "4LTSGF6tSdXiSXAU99y9ZZ6y9qWDqXNCCWCoH5jUSiVHUhfbK7hceTVJLCX81aRra6d53NNr7Lb5FQwjniiJCiTQ",
  "key23": "464ftDnzKLpZwY9LjbHRnT7eei4KaGLLhZVSCikLb8SnVwLAnrfWx7eubPFCq2b5aBN5CgopdvyfiuuCJeh2UsPx",
  "key24": "5akfdxvxxtZzeerNJbSfpr2ECQY491kfUvazpu4tnS2HDdoqYvivNmA4fqz8VjJsU1V7jDBsQYRBLWgkj8hjUkCi",
  "key25": "4RjmMg4uF7R7cS8wVokbeXLnnMKQJvhTeuJDVGSUeSmtb2gvwZnjEzLkqwfeBs5TWqRb5v6emm4TqcnV9uMz8wzx",
  "key26": "5W5WyiTybukG73wViHn4hdXhRLGhypBThNoUPHWm2gEqYYKGgUoKoLvbJGZYMSHmTxnWX7ho9Vqus2cuFb3USfac",
  "key27": "5eZnZWhVeePTDJYf1xvHjdDytjN2yonn67NFANZpkUAjEdLexS622cKhTv8m7YfVi4TivYMJnZXkPbb7nWEwJqqR",
  "key28": "MbfuLuL6bj3bdBJevSDbughbQrUgUDtV3kPLZDe4oGQnfbPsC39DccSxGmbZXVbVVRvSi3GTz7jqxdGvRS8dsyq",
  "key29": "2sptL5UKCRd1THavJULF57FafTB31wJBZFQo85Mg2bAVqkDhGtv5ia8hwTrm8boiraZkg14CHNhUyWs8WTSGRfJ",
  "key30": "4cfYegXYhthw75gu4rH1fT4X5ASLSYyDzQhye9TKGNfadzwSwGaQZGXDwjoYdzVTqFHsZAZrQiE4ih9c9hXFFXFj"
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
