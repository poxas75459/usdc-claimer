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
    "4FJxhSvKZkvKpgZtFTM8V9XAEe6VwPfU8MW5vbizNnCZCtNfRAgKkb7pPkLdyQ9u2aszczM48kCNShLpEdyWsSzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E1Bv5ba9MGMxG26CVWTGhCGQWkeziecw8VR7UrmYVpBG7WZpJ825BvcCoYyYpVEsVtj8tFLYbh36R2oJ7eayxto",
  "key1": "5BBt71zqTcXuHo4qZgqByuJf3fQpaYuPz5SE1oCu7rUnH6AZvkuADLHaBNWHTn5emKWpuJb23JKXqhKgzbeBqrGp",
  "key2": "z6AdEiNo6rNtE2uZgJJnsGq5Hnx2keATQnkiHWsoKWLCJ8fBg6an4KJmHU3beWbBxEn9cQ9Ak8FHgjsYVqXECVh",
  "key3": "4p58tjdLYWLuBrCxkNX3Lr8wf6chQLtMdXVijr5BD3ZerbYkZao3rUveWpQEHzjGYrF9c5s96XjK8UPqKGhG4tKb",
  "key4": "2WvCQxLJ6T9aJUusG9hkAHe4LTZ74j2k37bVBJSqQePKFNJ2XqTpXHaAiLPE2w6Qyhzh5iJf1obh8w8LqezHpNVb",
  "key5": "NLmLYJiDvtyjUrPY7foRigr1oz9S6cJK5hdUegRZxn32ZNZdEcMT1ywcNQ2UkoePjGGJ4YQCmbgx2bj5YBfw22c",
  "key6": "2kFjWYwkaWJBv5BTvTHZ3JzXJk4zBACc8zSSo1KQPkuz9dcLF8qDktzW3YXwWkxykASYbSB1AX27dVUHa5DV8uxq",
  "key7": "5hGjpNK4B3wCfDAqvPMKBwLXvSK8jUr1Wy2WY6ASahgoYsHeR7pBHnXtwknAx5EXMKsBNpbKGC4RaNF6QJMjpgu4",
  "key8": "CKwP7KE2RGcLH7hTdpcaHe8KSh4t99new2z6Zfu7hLLnERdeuyRVLL9Pe85687vMvHNpuYKRMPNL1SkC8wcco2x",
  "key9": "51pThJuxwKkH2NxtURREsLjnNVEq1tpz2sytnH8tvzcs7Qv9jAF8QgzCJpd5Vn4TWLZWZ68pR1dTHEzZYGduMYgx",
  "key10": "2WwFb7KEorUtjzGjEF4sDCtQzmEiQtVD5pCL1BMcysiZXaK2ueBWq2stUP58khX4PdeuECHh234R5mgchT357Wnz",
  "key11": "4jAmSxXhhbvKc5ST2nTk4LBGiqXQxHqJCyBGckmiq2KxbNRG5mrkbysNzwTzHGbXrD27sPA7xBZoTYTnw1Pvmu1o",
  "key12": "5Ae47hQ9PDteFnuXoeTxzDmT3NCsGUriJNRnAg4oKP6eLdSoM8Jj9WmGW7fPQhAwQYjd7XrWFqVuG8fQ4N4UaP6t",
  "key13": "3WXdicJdfj3ereDTcHWUYu13zDWxqdfQbkuMzwLLRFQ2weGTnEABj1jgHiyWYJ4Ds8iE7HHVx9apvRLVg3S1KzLC",
  "key14": "4nQoKuCcsZUHtizmioDRoGzEapHjA18P86cyjeJaPPShWTDgHwxFYvvr9NWWtewoAFH5j7Xp7F1YrqxNm8CgsJSr",
  "key15": "2yZWUyP62pr4MwN42AGKLgRLVVZTXj7jzH2rRYmEE4DUjmRXoerPDjgeHnovvwDxZiQ1QqAFHdkzgSm7WEZhRLop",
  "key16": "4jV36chZMYTeizmnnKVs7qPXCpJt7bTNg6HaxX8EoVkiTBdajiWh9G7cr4FtE3xKHMEAzPZFcxfs7CkcC1BZ7CVa",
  "key17": "3HE3Jwu5kBB8CowrZZ7RybpZdwGJNrAzEKL79AJWGuzZgT5mZBrhXm7smcFwv7rBcZiJTArsAkarMEXEZxkQQ4VG",
  "key18": "4P1BSjdUWBRkifxFguS6VRBQs6ECAHFawrH6CNb6YxZkx8qhmYY5D6v38R4cad2yJmcyiXZ9uE1RvujU6pcdkbSo",
  "key19": "4yaz4NhEx47a9MjjtehnZ3tqS4oga7QVqzfovgaTK7nr5vFJMtNZhLQyTqSCMLqK2wZ5kfMd8YsjqjA4kiNrJvcz",
  "key20": "2kdASscArxGQRVm9F13uutqodA25PB8PxpwjDQ7s1Y2SA9TPoYhVbXvaF1Zvw9oKGqSDefCTs6A5vJUh5nzsKqRD",
  "key21": "4Ju5PzGzh5GGNYqHHBpqc5GjAjpQVhBSFFK3Jb11PkcBUBPoWwwE1WLh2NndLnysVhvrBpErbcu9En8SNij1RE2q",
  "key22": "5pZKak2pp4z4wmnM4xWh2e8K9qLyY1WsXMTGHpqRe3PhJ6r2izbmows4Gsvsa3j9yt8TPnfVAk15fYuVeBjj2DGa",
  "key23": "3JwVhBjZwAk5GHgBpUCbsKEb6J1wJ94GCtBURaPgTboqytCD5Q1ZWNZ7cVES4LABf7ZMpxyX81YC4d1JdDUL5L6H",
  "key24": "2MSRgUHGhsGdqx6sVA5bAjEVTWQWcC9mhUcNeqkTSKrU2j8BqxWAg6YRpcnLYQty1qZpCozxkQP71i1zpQPicwHX",
  "key25": "3tno5LqPJZagi2KuQBNW8GJqCp5iWeshxFAiApZJcYZM7T8ea7pyfBJpvV5hZtXWCqzNKLfLexFbqb93JCDvcA4x",
  "key26": "4VynaKEnZcTjxzcwMGA6ziMbSJC2F4dpzFXCsiDVVFFkS1dq92PNaR5yRX2cFkVBv8cGAvR2L2SMEn7BEgatFaeE",
  "key27": "4YimL6R6xqnzQeBJVfC6JrBf7fKzpr9zXEVYochiYkDpGZ2tDkgHRiR1K3D8nbGLcHEu23JGo63TaAfYhph96WDu",
  "key28": "3XbSvbyJf8Kmc5KAFkNZkogRMMC1MSryqxNKdS6LWirrcezBrZYiymkWfYZi1zk9Ur9wZPMGcYjcrzgPHBY65Bf3",
  "key29": "ctKocDKSG2ZqhooxUqDaV89jP65rtwQGmQnDLiuG2DcdydoAmxUtEr46QphCsYwhXdxD3wKtC8GMN9k7rCnP4Yf",
  "key30": "5fnA12tUQhpwsHjBLmFsLJefuferL1hXwzKMkTsbv4obPYm6rzgDc4PNSPCQjw4wt5ULD4hhh2LANGA1KmrwjME7",
  "key31": "ETrWzw56kqgYc1Sr1DswTrYG9hffU8M69iYUyxuxHyHPuniqcJafttyEPD7Wd6uedhTg7Lhet8dt1KoQeN2ZDzQ",
  "key32": "4kDBPeP2cjzLDXYk7fwePxcmJhfAMVD44uoqYaxkVdKmKnWf4ZTL6KagNH5sz45zE1wrMifA2BXM1nXCn2ZwwHn",
  "key33": "3Xb6DVMHhpP7ttGg8BFxGVQiGYmHm5A4c2ojAEQrxUw7UdSucNw6xqMnURNg7wddLBLjUKgK75C1SYTxuURWg2es",
  "key34": "2ENbY1vCovKdTzbXjWR9oesGR9oCBi2U3HSJMF1yup6Jr7YKSLBhr5qeKgZMFCFae4dz7CXKzqDzaKMz3rcPTWsw",
  "key35": "2bpSyc97uKWWgyc6o4NjskmiqDPL8Y5rWU3oT9XB2YegApZoVM9opk6EiLfybmEGcNRqw3xTndp6B2EQ3GAM661n",
  "key36": "2DYZmBQS3kJujMCsyu8aK8c7DoxGoy4YAXH3K46p7PPt1WR2sP93B7nKMhrjNas8ju3WKEznVZHhKzAdTi6PUuJ8",
  "key37": "2wpQ3tmptCobkq6azuWakU361yfMCVc9ZALKfutWQNzSkJ6fLk4geqBvgAMMbapzTegKXL6CwKcx28sMNyoKune5",
  "key38": "4o8SVHQh6Efi7jL9brMhfQoo25qQqkei4LJqGs6PCpM4MGkgdwpPeiuMVuYfZELo9nX9oEDbsJzs5d4VU7oeViuK",
  "key39": "bRJm1qVxB2TNzBZNY23o7DjYkvrQkjD35WUWSWRRrZB4qyH6y6U1kJ1YnJoLSKmvZfszp26oEtohYyPYWZPbLTV",
  "key40": "34PLk3YG3qmj4mwDBZfE2amZ4k1HyfMTgQYm2yzFUG8JrB3mkjBmjrujYrrJdCxkHuCTHfE7MFUjhNVB6U4vCPsy",
  "key41": "2nTf7SMfuauDT6xTnY6zG9eD9YV9EAaQ2m8dsEGeGZz4v9xPVQX7GQJPjDrx7pqGpcYrdNNb3Uzj9EZfLQvKXufb",
  "key42": "5bY1grPDrbdvqdmorwwMS2meUKo2eZr9umA2TNixCirnbkTc8oT5NvQWmV28Piusu9khKdQqnSLACwHs8EnN6hJY",
  "key43": "5w2gwSSdXHVUx2t3kY2DU7sSvWpYT6heCSVutFhYKYsp1tFF3v5Z7wXFVcNJsJaGy5QfCGViHB8oXfHLxocLukzc",
  "key44": "2mJYjUvZTDnbrqUPv6qqtVEeJMbJ65NvzMdjxHTB8ZmuL8NBuv91gxhf1HkpmHd1SsTuvEJazWodNMLfoB53RNHq",
  "key45": "3tZ8v8mP2GUUVVDzLTn152cyr4UgfMu2xgnVt8DmVS8aA2LtKyX6zvQqftarpmaUwTRqtDFWzqpdQwwDqpCBSqFk",
  "key46": "3ScHmAD4YshoFdZoiBNpTeEo2ZcaZexqJdS7F4i4y8sjAHxNbnKGsxdY1G8UVFzpftDusTMx9YPLocECEk97ndGb",
  "key47": "5ZrsFj1CejRehRvHqWZAyaLnhQ7r3uiofuXXXoJKxPkoospu82pSAzKyHkyPdPhWKsXzyeHCvZJf4xR4qtznQtbh",
  "key48": "3e4cWPK6kLgKk3iUT2zZHkVBvRnxQdo3wfW4UfxeQCRWhiDkq5Ck1EudVd2swcqNUHCUR8tvYsthk2efvTD6zhFS",
  "key49": "2boS719MUTFVz7LUEccXmsj6fkLbneB44LKbe2ofNzjgGTrTEssT1QMWPxYxVriEC6NiEzPHaR1ndrfjpQf7V9C7"
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
