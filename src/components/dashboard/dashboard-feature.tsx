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
    "2T8szZGqd98jej2wSYwEvQC1rgDgsiyiJTFqajyBDpLHuFJchY69LQP5LtX6grJaQKM4fKeA7NrgQvB85A94FZaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CDJrxWSdu52d3or9Lzv6VUHh1SCXdZLCw1LeQAWRDRpXsMMXtU3Vp4xyKEofT3rcr1yJVWDjCrBMLyDupZSFFQs",
  "key1": "5txEAMJzTCHrLykyKsmG8Zidy9Z4wBXYKcTmXkzuP4yYYXVPyuvrjrwZbPCJadGyYTERVRw9zSX96QMv94fBz8Ca",
  "key2": "3JMczcNHBwopEksikFt7Wbb2HYPHh6xZ8ZpiquNcMRKDZEvYKfhD8b4a2B9ikbXBZ3AqVQ8iPhK1BEyb7DF7sBnS",
  "key3": "3qwmj4kYMR5Zxy5z9BBe3DPW1e5CAAT7VsAqtuszveAAALCkLEGCNvxVFTvSbedzPdV3Rqkvc1o7S4tEYib75Pc7",
  "key4": "5ZpRujCQN4aHFjVrbD3zUHzMLU5rV2u2qe1GrNzFqpMZu5TYXTayDrRpe9DJewr7kgfoTgBYDDEEmEhowJvzNUdd",
  "key5": "3ac2uHk6FH9hfjcHzDknwicZ6dd736wcLXkd9papAMngpQFP2zsghRZXJKuMRDX4UAsLgL2q5pTJ6GxmPd3tR8kz",
  "key6": "4wuvv3pEFJo8Vw2pACKXXxD3yJ6GUsEAb8nziivC9YhPSmPb8h93pDURcvK1MnsAbZd8cHpSCLJa2LioaQ7MpZJe",
  "key7": "4Z7YAFw5P1uQGvwTs55dTszUokaVD7VVkqw81Rv5ZLWhjazUxvfCAvgD3Wz2SnDtNhpenu8HsfWCYgYCKtngcjRz",
  "key8": "5enRr7vc56zSdRUAE6FBGw9NgAehwNqHFxCqPTDzM4vVT2Yzp4n4ztSdiJcErDtyRVqcHZKyWHUQVJoK6NsJp5EK",
  "key9": "555QZfmNBAyzW4NMjPiPn748s3HpawpeTw9irpHXv99L8HKW8dTRr2C5Vwg3mS4d1QnS8pFnH4qJDWbSRhpqGnhE",
  "key10": "2f9gBR8UU6g12rk3eqHYgMXHhvrjnALAcarLpMyq255QFrKr5oRoNvKG9DPdEm8eQ4hba8rcctg7CfEQiwWKyQhy",
  "key11": "5PyxUjA1mppViZopQrbhsXXJYSZ7PpPVwhoqGerK7jniYywVf5iLgC4Grkcm7hbFcDe6dwdF7PSUALBf5WQcLF6P",
  "key12": "2v57XjDzgeCnCA6FynDstdDrJ93i6uJsQfLQYWu78MR8Nv7at8HAmCToRwUA9FzcepfxmdDMxNTk2mLxt3L2PsUZ",
  "key13": "4GmGNVyGrEGjC5qL3gqV7s27N2shdt987YhXMySLNsDJTX35vPpj3wdBwAAFHW8ENqxx1wmWU2V5Z7e6SubRx3op",
  "key14": "5USYVHCB5Jn5ut3qWQR8F1Ln1DZRT3qoWv7zZfXKWQQpJcpGXdLf61gbrf9AYrJXZcvcEyydxkiGS9N3n8depRWL",
  "key15": "3XidKAbgVBQMT87R4MS8hTaikpJ5NxvHCDUu3ti9xnphvV2i6BowSHhi861J7DxUsb4eaqGE3xArLALMucRH9H6Q",
  "key16": "3pbZYnEoXEFMUERQr6wpThc3wG9PTT42Qvhhsp79k1QPnE2HjDZ3ZovdPahr2H8FR8zVgaQkHKdkjkVXxaD7rCbH",
  "key17": "57yp5PigsNaVtGRxeHq7qrcy464RDpfe45XRKJXauEHm5SnSQTFWqycEnXinF72LhAFURQ9SasCeopoK2MvQrx7X",
  "key18": "44jPzu4meaB4jY45rFfYAWdhCaSUpzih7D8NzdkDpqkHu5eQTvGgmxkKFtMdn6GrD3gy5hVfJGjvzrPRZKYFBXkz",
  "key19": "4Tw7k8d6pafxyEsZ2xxyG6nYfxufcCioUHw4HdgjL91kmvoPAAXDdkUA4jN6nnsaHpSdMBvs8gZ9Ueog6SFQJVB",
  "key20": "35yr7D5kBMoNFQckgX636fxJm6KuV7dNYTNfCoKRfzE7dMaYuKupuVAJVbg56kwy2zqaYvb7MmASTx5HdheCZp3t",
  "key21": "2TocXmMYjZLq6VarJXDmFXKyEYmfaMWh4E5iTMcvRGLyDNPcX8a8UScFk2qGG3MP64F5vwZF6DBhE2nA7o9K2Ah5",
  "key22": "4WmqfkxxEbcoekRqMgn8ecKwSbeviMvhfQ8obvcHKJpdpu5YrkPTgqsv4oocxc9MK1sJ1Fh3iLWKPSkWTuN26fBH",
  "key23": "5NYPiU4re4TcfqRDvuiKkZd8kMctzQRj2E8tbrF4yUFmH6cVQjr6xDuq6qwN6GwVuzXxxpTSqWFoQgjRZcPFBv2t",
  "key24": "22ZrTi2Y25ELMLQmqfN5PfFJgT8a6DHvHDVjFZZoF68oRiSgtA3xd3qTuKdwDYnC1r7pTGGuWjCGZpgcpJW5oZrE",
  "key25": "CVMhDV9yMPbZBHh4MjqhNSUe43Rx7RfB3bB7NBsJHUnHNapjjQwXkEzn8gkTGDJVQRNPHmVgs3USyDjgavXmEUU",
  "key26": "5RwYByce3VrPQKHSsoonasZLiV5GqTsconKH2V6fRpTPi1gQthcqNTnPGcqtTHAvnBZpqGTDCXDmyiLDDAU1Xpj5",
  "key27": "3Dmk7NAGTewnP6ihjTnmsAN7PAWACStDZGNDChU2sXJ9LAvvT6wNgAiFrvjkGH7t76NL3sUbdVMUf4bAXGMAvbwM",
  "key28": "5AQ9CQg3kf4sWn4JVGF9AuYHGvdNW6FStGAMLHs59LtjAh38DorhF5Zg5NRcfLRJHupbRwXL6aCbyMjwhDgsdPJZ",
  "key29": "4VN4J3HMtEdbTzTAHHjemCD92oR2hHC4aXhk41fNW1AnZgtnBvdj8bkS8ug2VmNfD4RY8U9mABcWNpcHDKr3E9cb",
  "key30": "2mzYfn3MQ6gLksbfhNcv61LhowDTBTvaPdQTcvAGqGDYub6osTVjh3vxyfDBoTorpWBAwWJZ7G9DVCgZDjUyvUJK",
  "key31": "7E5DCKX7ej2UVDgtmp75mhPrjLwG2zpw2d8rLJM28iT91hmRXzR11D1cgp65mWYLW1deiQNGP7mKNfVQZaqYMmY",
  "key32": "38j14TH8u3gLPwSMsDW5GzpXWttrXSJGWscpCZTNeg9jsMeACM5zwtkj1YhSMMTfsQAQGYgbTsq1yr4hqqarxCv1",
  "key33": "5KYonxbkgmz6ZTQjD6yhqFYTyGYoD9TBC4eQqiAzEfqjyW8dAFg7mHZPTHHmafhPgZaUsa7u6NTEZ1gH5V8TK5vz",
  "key34": "xvTJNo62Q7M9cebiM6VzqgEsbY6tUHbWV6maugNMKU5pVLZQPzdKjdpgUZZKqLpwkD2PDn9HPtD2ibogyYxJv7M",
  "key35": "ba82f8ptaEXkU81o3Xi8wjjV7hMqWyi9zMY8FxS54XeJrcze9wcjsgy61jVv2yRH3incPua9Eeyh5V7i1xCUYpG",
  "key36": "5teCU11WQRaixkpSw5sox2H8aGe1FzovMpbgeaWcM4XDkMJJtX8Wr2KUTwu1qz2EuMrKG7PAe6Lg9UE8oSV3iyaN",
  "key37": "rWQCc99uRdZahZznSbBSDg5ox4rXwbPwwzpJqEFDZgZvACG7myqqBxDMXjk3MdUAFcSjb74SVui6eiX3hcaxpwo",
  "key38": "2h3KGDa4gkhGFcaReAZbE7gpqc5rFnXfu2zZU1LpxBND6cMSHYgRSm5iCn9R5uHpcioJKeA7acbNa1KJXaEisetN",
  "key39": "5pRa72kzv2Qc7w6hv7XQ6sXo1vwqoFQoySc3t9q6QRuBaBisdas45eLsDfbTKFL2p7G8Z7L37E1EXgYBmxov4qCC",
  "key40": "3foCEssNRSXJxKfzqhS5QrLqhvgfFgiWDesLphet2g9pnwqZdWe4kXc9TXp1axs7eBeDxF2gSCpaK4PjBWkJxi4Y",
  "key41": "4F2BbcHieeCoXbGq6S4rAs5QW6hCC7wJ7tZ4Z3sd8R3DXmQgPetzT4ti5DFwUvxC821tFsSoyA1QQiL7QTyZuADY",
  "key42": "2yDMRcyshMuRfprMdJkiN9M5LL1JAckFJH2rKKuApv5UYFTzmXqZKnS26zH3gL7bW6cg8paPjdymqd8PvUDn9MuG",
  "key43": "5ZrnbNE5FC4tH9RJYT9X52Dh2cVuN9nv9YbYn2naPvkhX7N5xzRfK3NURDxjL46gP7cbojeYNtpVfK19HXE8VfvZ",
  "key44": "326M6bR7zqki51BksCjNCL9unn6CtUPDuHGGFN2B2U7RytwaWnYd3WV393HN7Yg4S5hHpbETrreTacNeAptFpdNw",
  "key45": "3ibGgrXHwMLJh6NLRwPTR6ko9JGofHZwd9GZP18dS6NMLD6hENkHaRMTGwZsQ8ZH15jYteKK3jDbwLQ2w1upqtyn",
  "key46": "TY7cqtuu42DMEokMXWzdW7qJiJ2QaSjqZHZGoWyEeSDFgkZ45aZ6pWhYtTirtzyw6zeEbL6rBjw8vX3xXT614o9",
  "key47": "7hJLQamcP9aZadrXUpkzTRy8tJgWtdPUfx3biTGyeqJiLQjZdWNpEBz3Zuoepyd5XV6YFxNVMEWA3L3vJUVrwHf",
  "key48": "3GAeV4ziF3v1jqVSXMUpf88QyJmh623RkaLgjhf9DtcpcFxz1nzZpZJC1j29szoVKb115Y66YpReQyJrUNCpF4et"
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
