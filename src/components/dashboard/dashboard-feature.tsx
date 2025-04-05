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
    "eB9tPqETWD1Lx49oaa6tmpm15Fm1g2we84cMgsAHMq9MK643iMPiHjfWG6ZUKn9s4FyucoXwe6bvcS1GRG9fT4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f2mnEs6vpwNftSavhZe7FooFPcvPgKZeLpDyeyAxr9CCFFnfwwLbUBfcJgFJi3ZtzLHtVUCnp6vuGysPaboA4s5",
  "key1": "3YS4H6p3thFb9WoNhXHNYLX9eaeSqrPLySnC1yTyrqAyvm3u2Df5tiS7BR5GDcDHkwi667UgCPfsAoZtR9NXzjoK",
  "key2": "47adjSsX2HceyL3VJJBHrhgwthCSx6dHHz6Bk5xAYPUznAffuGn4M23LAPvGdAZpQgk52e8KNo9J2fqfHnRzz9st",
  "key3": "2QGnbSAv3zZQhY5kfR45q1iCesL2ymqSg5UNkYgXmKeEa1u8XaW2CnDib17QsjdKHVHEiNQnVJTuyznv3M8PFzWM",
  "key4": "4wHp2tdwjCUqo1QyWeFfpjkXaF69fkZN3Tn7osRqfD9RJC1N3dvEFFkuS9wdApKYu22wqViEaWnJSTerjtLu4q73",
  "key5": "5HrX8ej3h82ZKFtHpFydUVA2A5fS1AUnvepHaA9vLa1oqSo47V2rNyTcMC7RxheYMafH2FNst3hfzozz1TpU1mxa",
  "key6": "4pUttBFPJhWeVb3b7bNbqpFRPu3spsrbYijNBCmrKqwvmd42cjT1kbuE3E2Gtsvj2tWMkJsVwtzjvzyVUEFTNrwV",
  "key7": "2H5gmx6Cqr5qnJo6HfrKKs9JXzHEMxLion8qvJNQKedBoF2ST7fnTXjiLeCY7YK2RzKyNzFRxpjWatT9xRzrLyHb",
  "key8": "3a6bSLZ7HgiZe6Tg1pjoju4mYDKmCH69q3P17Y3o7neBzGuXok5AYCErJ8jExj4nwGNFLDUAWcxnc3Ajxjuk74xs",
  "key9": "3yukrbkELhcpGFeXE19oEp33x3RAFcdk1TjtNorha5kjiyVfB79m4aKE9kpTrQwarMLS333rkwUt5tvbQXmkSbFx",
  "key10": "5dRZFN4CTCrK1hmtSW8HetamKPxJiocr72riDHsHfevPMCJ5kcZ5H65TRJsKwePLbrgibqiiBRjSc3BycQKDH564",
  "key11": "4xofQRchjoQqHeLs3eyTDwjHQRwDAB6oWUqgCu26oN2QtYbBSRgZhwW2EcbT4CQVRNz7smSo7gVqp4b9kmefuG8w",
  "key12": "4QpJT2eEDJ6ByjqHhRUbZohTYGjcVZZfV3iuhwdmQHFdKLzL1qn8BSXqFoCb2BMG3L9rYU8iJhZWhazStQY5gLGJ",
  "key13": "XzMy2o12fb6VMPVgda9qN76RkuC9Md3jeLxcHqpCKd17Hnp168c9vuQK8RW1p4b3NBFpzSgJBWvBQ1jmuVjRxt5",
  "key14": "3pwgzFovgxXKUZ4iKcHXemWQiAW1uQUHADT7rD8a88JXazeM5ScRKmGbduJngjjDwaqRLj4qFQThPCTdo6tcCT6o",
  "key15": "4K7vx1raebiLS2gAp7GwUT8arMu7XUsoGwWyyw4SjHEyxZ37NaVpo9q8Ktfw5w6GgsjFH29wQmHYSTtFs8M7pFg7",
  "key16": "2W2FEwxY5ws9tejhdLA75MSUigPyh4oic1ywYVjaMVdUtqj7n5NgtAU9FRsXYYDxqpUma4my9iCRxCVPkEhia6bC",
  "key17": "3TBMP8eZYwKVbLn1kbGH45ebe248xwgysiALkwJprmZ1QESzB9Kv2tuhV47oBc5bjft52Lpg8qugZApg9cGUSJLh",
  "key18": "4wNhzuYirQ92n4v4ByffDPxAyvgWX4JjdnkAnUGCpWf9d7PXZBCTKSHpPziUdTggLdk8PoaP1jcokrrmqavmVS4h",
  "key19": "2ZriVx9XWppfQG6sD25F4tUxbVyWA6d8R1SvQm9oWaC2YC2EqgPZX3LH3eARJexYH7QWzBLETanjhY733GQnbB1i",
  "key20": "5qk97BdqbERc733RNcZsedgiUQHqxwm9QQutoBMdnxVuUy9u3vBFDyQ3Mwp4myDipM9gsNum6tLrt1YvkGjJWpXz",
  "key21": "5CbS1qEscKeVWdtsBWiwJaj6HizvDq1jJKUv6mqk2GgX2G7y5LKKxu7WeSJ6GFHKYQ8Ewiobw3RAr8DTtBEbrqPK",
  "key22": "3ATSMuRwsQdAEKYpwXxwaFuxP3UKFi4bjfmbcj4Htrkz3LeeSFHSH7HaJi79ARm7W8dkJc7Mv9HHpjsFdmbjKWpW",
  "key23": "57vHtyHN3kbzZ7zgvwq5SnJZK8uetfiujEyyFr4uC7LibuNcxFQkkt3aNJMJk9k6QnoVNjQfomvMy8Yi4AZ4uETZ",
  "key24": "2HLMsQL9Mc4GrD7eYnbk1uWWooziXYufYKSi3xk67Rjz1oaRjTpocGVVVJsrHW7NMe8eoz9m8qFT8bPG8P6cFxhg",
  "key25": "4bUPreFgCARZ68Smarxbd8mFmweCVCoNC7DtKXyDBtvZvxvMhvnJKkRwtgrKxqxPNXUYvG4ZqvksA7LdZ83XNALj",
  "key26": "43k2f8E2uWcWzkYZRgqa4Hsw8eik4D5w58mc8zAGu6YNdj7XwPD5D8wj1LgrqUAE5rfcaSdiP6pyWhP7WdvaLC4Z"
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
