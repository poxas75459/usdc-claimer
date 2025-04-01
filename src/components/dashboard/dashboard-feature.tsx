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
    "3dGtGNa31v4qGp2kNEhQXXDqwCWiUwbmY2LDQ9Ch5Fnhk6dJ1anzNYLEQge4X6A9p54GdidiW933r6MHxFs37SRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HRjurXVgz121Z7RuC36MKv6Hqxi9paqP1mR69S2EwGGDo7yXoEuC2W86YjrpXhbUw8ZGdssm5ZEPCHehzFqbg1y",
  "key1": "8Go84cyZm4Y7k7S5itG8q7CbyRV659K2CGp5R3EUKCCTp4suQAuNPrLLc1wWVaVBpLG985FtpyqrzxohoXpzEAc",
  "key2": "4un9StixmJDRhqDbyk7FAxhLNqBxQd3TqKC3woskFh7yvDEQ34rDkZZ2ms7g3txBhzoWXxH7FTLyFU5FafJNGcai",
  "key3": "Ui5Vmux869NKD7MGM839eUnCWKAvbP5PZofBoApXf7Rqsb6P4XU7w7acLhGFm7syQrqGvaodfTNZbTV7fEaeaDz",
  "key4": "2nEwgUiemaMMpxwP3z5z7E5su2PfG9jBVTaHs3WdMNK6XmFPbeT66T2Pb63tvFgaVE6Ysnsaq5LewbFRdUPgwEvU",
  "key5": "4SZhj2zTfuVhniYEU784kyveofSTYvwjhqDN7nEiheozRYa3UvfUermRqSuXSw73gAfiMycGNdczGYtqJVmQgsss",
  "key6": "4yFVha31APUarrTyycG6G99YuquxAL9Jqkn65gETk4YUufon7ErfyyPB4rkRRhNtvy3Ry3NUBDPRzoXY5fwbnoWc",
  "key7": "3kCz17oczLxyBnW94xDLUrgAVk5QmV1Cva2JQqQfQPWENChZUj9XaeoYAiBxMWWKEcqgzgBZmv4SfHmrV8crLKtF",
  "key8": "5GCCteQbuRYF8aKzTLf9oQ1uLbvPgArtu6fC28sHASJrPCs7s3diW11WDp4SvGngsPAMekMNfez5nJ6gE365SVjh",
  "key9": "2TrGB4gJ4PV4pYRDvzVBuEV3UMbZzBVv3sgYqWZ4ngdTkrin3xeJq9G85EdesLULJhBFcjUMr2m3vi3c6wZqcCyh",
  "key10": "2LJNEGcYy3KStxbPtnhKpFTkMCrQiSJx1ju6FbLGagjVuFYD1ssZNtp8mspUaVXArWGTju1wunb9cRugCRqJ7R83",
  "key11": "5wpNPyrcKd9NhBtPNDWQ1EeBtTjUzB8nayDtn9YmXWFf4w6p4zqcMZuNNxsDai5CVnaw12CgsXEFyeyf8moXcZ8Z",
  "key12": "UidwLEVZWWTd3ftU13XMUJwe8tubsSkYcNAadoYxkxDQ6S3Pm29ZCeffFYNb6whZ7cAWepWL59fFYmumwSSbBSP",
  "key13": "2vE7eot1iXdc1UDZhsVHkjqiSqDzWnwPaA13BDaB6UHP3jVd31CNU2va5fXb5r7eTeG9yDwMUhpt2hF5Z7BjkxfH",
  "key14": "WUsqoVGvFvh5UEEgkrJt3xdybYJWVkvHu1EeKCZR6jw8uwinkCZw9GoAktA8r44ebp1SxXiezNcqZ1UtKnketmY",
  "key15": "4DaxyLVQgo9WnfPdK8jVSXhKS671y9xyY3VECkQnfFJZSwocbbFM7TRe55o8qj4c5Wun4WykQbw1XbPcEHFhLKVt",
  "key16": "5uHzwsjxzE5chKFAjWoL55qNgDQfnJMGKBmpX56NT8AscP7Rw5wmsfFZuJoYv2FytNtAJNxHh4hEEWyWnLtrCvRZ",
  "key17": "V7wghtsGezD3NXddfvaWmMtMeqNdr8FNWUSKdaFA87WZnHqBJDs4QBTiPoXdATN78teuGkkeYV3XpmWz4r3HzvB",
  "key18": "59idnb9aAHkumFCTde7kzpZWhunr8LdJff3a8cF9do9qvvSD33xA3hLf2rUnadLVVqMbcUE51cQFqkKiodhHFWGx",
  "key19": "2w7MrJaGLf1vxxiiruxXvY1Mv5LJCPZWB1mCfpmsWQcB7THAw3JFNpBgaR8cdJRFtayA5HU7bcPDMKof3znJbc5q",
  "key20": "2Qy232NLrm5utMJGYtqnbydmBddSGfvn4wh9RV4TqyRW2zERCFAAMdvZKuqCSYMsgiS7NEP8rHpSQuUhfUFnJNgC",
  "key21": "3WBpN98DAoFhcuMRYCuAWyVzZBUNVqxQENfSdwbETZFB2gemoEdXZqfuW7dHPHsvaPto9PheiFuhkByJo2Qe72gz",
  "key22": "2rMB58iRXZ51GAqUhqTQaX6NzysfgsfxGsBN9UEhGnrAKUYg1V72fZgdsEBA7SBKtRGFXEcV4W7tkNRFad3JfkX9",
  "key23": "5vUS9zBLQ9AzTPfs4r4xZLn5N3u2uJx9G1xvez1dWGkWQYqPiGnQgaFS8KMnYPC26aDMBSzmbUGeqqUJBrQbzQcF",
  "key24": "5MS69nEegndwTPDVKjsQB9c3V7GY8Arw15BELWJoxG1b1WJxrcWhBRiMLnvF2GLHV1VPMZUbBeHfhFWsfMJzon79",
  "key25": "3DitE14v5eKCEGQn18j2cjdQrLCYwWgyWh2woP2JykgFMN5Fdg7F7EXegkbKUxJpGUm6iC7AHf92Z9VcMLhh65NC",
  "key26": "3feSdMCgwdnhYhseq26U6j7wj9wq1pUPLK6c9bqMeQrVEnoohwnbBVpcLu61cRzmsCpWnq5WWFbaBm4JJULS6wnz",
  "key27": "cNmvx7zRP1h2d8YatP3haZFjERqV9iUkaNY4anU1k2MLnGJkn57Mh4Rcr5pXmAgVBgytCzMuDueWaskzV72j6Dd",
  "key28": "3EaZBtyhSvgyN3w5AAgxhcctXfoPuxgEKtupQVwXzPvep4daBFRdwSwFBrt7f5c4HoNyYHa78VKxnMtG7z3Ex4ow",
  "key29": "5mZDRTMTzY8gm79nSCcxYt5ETvNts52yTn4iv54UJQ7n7ufnfg9GZLmqax5WbUUcyKPdtpSNFmYbZqeX3Mm32cLB",
  "key30": "EnXxeinT9B7UYbr2o1ERP4jsfa8Ak3HPgVEfo2CmvXdAmShiXsms1icMBEMvqzsMr31TWure4tRiiqLzc7xMt7Z",
  "key31": "3RcWBmNg3FYBZyDjG9YBRzHFFGgUoFvnGzq5WrQWj31fdvfwUvwv59p3d9tf8ot52PS6K6ykJGr5SF1dFcf7jV13",
  "key32": "YjRtaRRouJmDbfNLKNLhnLU7q4Qp8c7yHZAqFWcKcY66Hd5anZU1rL6oK779prWUyzh6DP73V7XTRfyFyk5R4NZ",
  "key33": "TzsnemnobBv8kJu9Hu7YmfRyUn1Ko3Jxsz3vJeimj9stwQrKQMjq4Neu3qapMKr2xNrfVX2oyx4RzLrxuxbtzji",
  "key34": "3WjFqwq3wb3VY4NZ9Wc6YQjoGYxyv5rzRtCgFmxRaLczHyVtAQty6F9fj4FWc5vLiJyJxDnKjsWPAr6CJCYdGZQ9",
  "key35": "4yaHWAFYHZ42YUh8kh71CQq6mk5L4JDCy4kmi3wR3eiqqsqefT4ASPtFwZRedw73BcswQsiQdt8FwFhGmCtwfAMp"
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
