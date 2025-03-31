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
    "5pr8n9SrNxw323hrGjsEqc8AngyQkmFsGvGZ6nMGrMEJ9eHfHPSrDnmGyD5bpRAsK5c1d1quEgLqn73bZuY4hXFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bUqvrQk2PtdNPZbVJuPVT7BAd1S6kxcGsojhALoaJSom5rbxMqSHVSBRVC1nyMTGaAu7a6v9CvvcZzmbMifomyB",
  "key1": "2sHZemz8CSnefgsTfdSbejUfcVW8Fhnp1JGFuHGutQvRR1FUHLbNPz3uB5PPrS4ke6ufVvBLcwfhyL1HqASbXxpJ",
  "key2": "3qA3PGihBCrhspE4aYSzVuo53d1XFf1aFw5pNVr2G7m3qkKbFRwQjnEXjsTwR9KUP9GDd9pbsNFtrmtJXNaFKFzT",
  "key3": "2kFrauqPny3tmjTfq8xf7Q12t96JcbV9iZywYGKycRvETJFKpXgN3cTDCAg1fCWaCdbdFbvk8zS3UTBqTNxzEbYz",
  "key4": "pQ3GW8SWBoMJTR25apG8iRf5o9vM7zAFLYHTNjMDV4323dxN53GRtXbS8Fu28JUi2h9ryrDbRVZCeKE9F4ZztHA",
  "key5": "CdTmrTZsvWSrEAXe8u5iY6dVZCHudEzcebHCvz8fpbv9CBUe45Mv4D1Q6wH4oqdeyTGc3n5kJeousQAnha2Eusi",
  "key6": "m5ZfvHEwczWnuBpS5gtjMvW4L9h6p75oivhyMhWdCgQQSHaKjxxdzcuzaQUABfKSp5hb5uhnAvgQqb5uMJzhQo6",
  "key7": "48EPG3B69Wb45cc9wMr6wjqTa2Wh8RsDi3KrCsV7dqwvrddMhBCV9pmZTZGuMaUzsi5ZtymfwP6MRvBivW1vTVuE",
  "key8": "4VQEz9WG2KbKLhK4RYKB572XNSJJa3JHWvdicSRSMun63yViHXkVzgYcFEcUzqprc8nCtE9978aMP7ygda652LJ9",
  "key9": "2gTKpLrxA8fLkEbxugTZJjv8QHH3e7Yfq9NP78RcgHq3ThTEMCGwNxcEV87QX32C5JzZoQM88A1dewr895Df5Rk1",
  "key10": "3KtZm5VLJfD4wUAXqG6mc4qJ1b9ECAUwL53tbZGQgwFmtsjEjo6gVNeDDvUcGkZchzMUKj4zCxoEvexWMMbcg5E4",
  "key11": "2v6L4MVYww8AbENPWe7e5u25Pm3oPTR8De9Bq6cJRiPv8nSF7zMXziPdreK4aJzjwn5pNf3HZLYudexrGpGa9LcL",
  "key12": "5WAyiip5Gad8PnQ2MEak3tsgU4efvjsq88JEkah4zWecjrH925uHeJHzB4m3M6eLcJuTkmakxSPEiSsqPpiNJ5yy",
  "key13": "3Q24yGep3zzBqfjTXwSi6qP2w25vSBF87iJYUiuzDfYr1ED9VNTip1S1q3ZFJyWAz7g5izr9GizSqJPcJpskDtUC",
  "key14": "3SSb9uofqodxvfo4nMHG6peP7oRQPqf6iqnweKMi1NcMum2A3dN88UjGm5Uvh3Q7sTAk15BgEv1sprCw4C6FMXK3",
  "key15": "yv3H8J1sEr6PvGrFJQdNbRSJWQtp1ncdnMspLVNeZtbyHvb1otbPiAmKB8g8uRZbDpYbSaojAtzT7uwdPmaRzD2",
  "key16": "vKs1F3VQSDjFPsfRrACic9Mb5Rf4iMhxr7nj6z755a2D3Szndbmb2Tp8zZzFBwbXupVzCFYjrTpv3JgpKjrhkVn",
  "key17": "2aoQo8ZM7GzVT6TcTg7ALbgBuEBcCGq1cmYoAUD7fmH8vVexF41mXJDX8uXBUMuhrxCZ5KpXWzTFhTB14TqwDc2b",
  "key18": "BNFRD14NzitWKwNCmhkpA5AWHpfFq14VdKVKp3suYvgEZmG55u2dRxR4ySGXw6TpBPASQMUTJSZpCwFFPgGELY9",
  "key19": "4YLELgHVHveMZnbH4uFnAyMpnBt54sSK87f38hozGfQHBdvFEjiAEEiYV9wUbsNoMXQNsx5U8eq6tjAsxx49Qrvh",
  "key20": "4M1qVXY9jVaTLQzLw5LfKRyDBwfPyJWTD3v93mXtwuJ4kqdytkRz7nUMU2jJRX6e22FGn9nfipxaSgkaUdvFyVFp",
  "key21": "NRzMx3WNxd93hxXbEi26PTvoP6xFrQPTZ28Ruu4z6arL8MgUNxU4HoKaxbLxtLKtfKGLn2p7qZSwjBn5LSnHBDo",
  "key22": "5FSs9ZGoXnSvAR6jpsJa48eaKmXsR2KmPU3meSXwY8Xb3ecfE8JMa3XnQe4e6KTTR2dCaoP6HWGQjXQG6seswsUh",
  "key23": "3mawbGpH8eoK1WDqVj6Qk64jRTeAFcPJM8koQYiX2eJKQs2TfkQFTZnSkTkerxBgDgjDYVDBRhNaWJZ6AvSQmZPp",
  "key24": "25mrUJBx9EdnSUpMejavZQXGTx6RSBX3KsevC45vAy7NkKzLTmkKBuQWvViB8gxWVLpHSkFvJnxhQpy3u7EDo4jU",
  "key25": "sbyuffyztSGn7HazJHP9KXmTQKGxgAr8EnBxfgtD3fc4ScgASwZ8NC3eVD1g8RcogEbg8U4XR5ak2dps3kAvbtU",
  "key26": "5fLY2AzZmzfyquRmL4kDYs35nYsPJvDnNZ6iwvKYzmoLfS9aMVez8gjFkaT2o9KgVHYPUp4YbgLXpqGmxYYyQ9H6",
  "key27": "4mpuubKN42wxEapTLQbFNVLLjxgRypkw4G7svvSYQpqwPVwuQeh9HuKxe1cpaWQmvw5kvhp9hk1R64dF5vo3y9Mx",
  "key28": "5rrMMvFx1vE4rumdXkqLqVmgUPRrrkcGvMVauDiKxepnTp4cQ5CmXNZZDUY25oKRNAuvXHFAwwCbkNyBodhinfho",
  "key29": "2GGehv8hhmp3TKZtehUBxAudc1v2axrDmVEXHCMns1pWwqvjARHzwgdkDVGmhsqS7k3wmX6JdYiVv78j8Ha8yiM8",
  "key30": "2gKdudm6cRQxCKsFW2PNq91kVgZtVaZbisPsv67BXGCc1yAtBEE2LrgZk2xFDW88JVQexfeh9U7rMp1JVuU6c52H",
  "key31": "3w2C9weFEyG3snQMKzLc7jfbv849UHm5fLy1PhhNfW8LJSTbfNgWHrhydnaBZhzBQJQudPn6kTKXWibjVqkbKdMR",
  "key32": "35PA8dQ28waHxgr5DENjJTPFpxS5TJWLsuCShkYDB8B3XwngZpeeapFNPVowTp2APKhzKrzXJqzbfHihnSbdozp9",
  "key33": "2PurXUdxGneySkaFUKQZnLVFxQkmGZ9wMQmQB46ABBjEreCfqukxXczTSYPEfz8WNsM6RTCGMhQ7jsdzTspj6X9o",
  "key34": "55nFMJZwfaGdzDW7ji6rAu2po6kN5tRsjxNiUuHAPCLcpM4qt2xUQwfoniudemkYK5Z9Mz5g7qzGZjsjhQPfbvcq",
  "key35": "265H3wgbpwFE7ppPKbJXFwL2cJzxXxagqY842dzyNezTLAZWjFscFt79BaJbKEqxQg4RSCNiU6SnBbDxVja9fLxN",
  "key36": "5BiR8JEAW1Rpxnxp2dgHz7dBMza9T7NEnvo3KrpPjMCcVUtcnrGF7HG8x5jFsL1iTCaozK8uUg6dZKAceWdktpkj",
  "key37": "3mXwmM7V1Fa11mZXkCkjQ18zjuWje9oZ2PNuUcJBB5LQ78Wh3ZyA2Dhx21oVmPrA5xYsRugU4JztZdfXK2UCo1aG",
  "key38": "4CEcsVURTB7mz1LQwiELXRFFxPtPJPxtDSzVsMKBrF2WTRWTCJeBErZ5YMBq1uommfVSaqCaWJaZFqN6yzy3Jton",
  "key39": "5xUfAL4TqZ7PbtGEitgvgdLL54bLL96q4TP9h7foTPE456eC8hYcMribJGEQ8o4dtZTRCLUdhRVSMHkwoeqNX2FY"
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
