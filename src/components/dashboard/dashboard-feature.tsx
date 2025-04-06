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
    "3cBR8RRdEcfhLD1Jqz7xaQtDEtt2b4WtrBoJLxqEjnkrdBdrok9t2qzaUV71cm7oqitntH3PNY88jhcgQC9dgY8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38fjBRAZjw5HtSTGXBwegtNaVc8ysF76BF8EmoBwAeQoD6KgnYn1h1EHU8P8DtCdNbhQQ7bGwbkKt2Eto47z8JAR",
  "key1": "474CafqvCe6XGECmqdXb8efbdMsCW2Xkv4zzc1RAKTrSjj6tyrBGuZEj629ntYGsJaPkX8Zmo1RpNMTg9awVsPtT",
  "key2": "2KHCVQijUXQdnFMXN51A2KBms8bcPa7WCRayGfzMQn9yhWXqP9z4aJnccGy4zagQgFkbAqxGvpNJeGQ9khnLz3xp",
  "key3": "XLKBVEt9zhqc5RNJNVy5oY5JF5RyP2J4j8baSy5g4SoreDtQQnpCz7rMvYCgnL6uHtd4nb1qSd6NugGVSbUCU6H",
  "key4": "2HBcoPQ2CsN1QRmLAKZinc9dk6K272bBuq3hxG7RA5jiV7xb92KxGduxBzZNNVGW1JBt5mLTp1iusu283EPrFcci",
  "key5": "2WiCcbAfFiubgPxWECihC4XgQ9gqcUYEwnwdxwFgKugXDQCtDJyAZrmR6WDcCa4RQ6AC8pDDHABHFZY6oGZor6zp",
  "key6": "5xn3Bgcb2ZFNUthdUnydYVowSF9MuifT9FAYTu7zMGxMeVj388MRb8dKgBY6HaRoSvc7Gz3Vj2iFfFt4SDk6x9Ms",
  "key7": "FzbisPdmn4qAuv5PfwMCaFAuhrNKWLjNDkmWfkvtYu9ia6fwk3sM2a1bXXhRERmoZBhr79588K8Ls9FtiYepH4h",
  "key8": "2rRhVYczk8MYsr6jw5xTdEXFy671j7UFL5wLQcNc2ZT4TXvrseN7FELkKjHRT8Qjmi4QFsyAdyKJTnx6dRK3ttTB",
  "key9": "56WdJ25qT62KBaQhL6tm1bzwzzfiGKGYCGwo7axnJuUpRd816LurPY68q4NmD76oVotrc4A8LMbuYicsjxrYdtvJ",
  "key10": "2bhZvEFKuCvZCFpbsUzv97K7zU4vawqfzamUxyr571GT6T9aD5dyPHySL5PtTxMANKGRsaRijx4EoVFfJtbvSxbK",
  "key11": "55AXeVjJwLvJNqgGR5vH17uHMu1WHWr2ZbLvDZDLGakv9CBYXfVE6XAnTvHNCrebHVSNRtwknVS5uvPtKTiMc6H9",
  "key12": "BhRMuiDz9vHW6iuUEEypmYmMphb5ASpp6DU44AfdAaNzXLAHY3f9kTCQYkq49uz1HVsHwsxmtyA6qPSBSpA6Mtj",
  "key13": "4fButruxwiZqtE6NdW9iequMKPo4qUchYny3RAVieSracaLTT9Nzo7E8yxMLaFwWrt6qBy339mXsw2zL8AuET3N5",
  "key14": "5V7sRphZuAGb4M2obBHPnbsv1cQD6zP2Q2k6DDHwysCZqHFUpVqR8DpqxEfeUA18VqZsZ7fMVkJzQYkNntVc8M8S",
  "key15": "2BKDuCmHXEeiiKZqUhRnMrGuatF3vFSEGisvvLEmPuWYRcU8KA1rL345EsKotf98iad7xUkF2NTocHEQvJvaCcAh",
  "key16": "4wjB1hLcB4xG8XUoVHaNfW5aZMiapdAMcofQvD6nB4jHRyg5ayjAWiKyuu7ZF6tArMSCGY6rJdkvq66Qjo6FvfMk",
  "key17": "2rfJCkogQqYKZAUQHwdV3LGuvrd7vTzxBYDKUswziRTzHm77swvES3Wt79FVtBaLJDbQoB1qJtvQLPk4RzkwbsCZ",
  "key18": "3G5shDtpaGaD8Rmm8tnN8TY6Mwa2qVTinqhki64iZeBJc6FjkmvkzVGXi4e51CQwThJad67opJH9wAoXvjHf1tE",
  "key19": "2DxUhCeWLcwxPF2joP9tSVWE87xarBjtkbpiEn7FBrs7dbyNaRjehtrek4jofcRkX3ydbMAEzCL6CXYHmKSfKDiB",
  "key20": "5AzMRtzwUvmHynAUnyj6j6JDVXZCQokFg8EqdXtMqSMmVJA1aHFUqbEmDVQiQjFjBimm5DARemQ5AGfVh5FX8ys4",
  "key21": "2UisqBT6oTZLQV3aDaSAJgfokRqSi3sw451pmz9tqw9eGnCasUaSYwWMfBfKV5vBR8JkK9k8kvYjvXTnu64mgRVr",
  "key22": "KhjmAX24cZnEUpoBx7waoJAHQtfjbr1RvJnsWuf5k1JmVcYcTaUeoSC8VvxbqUgP7AHdyhgtXnLN8sx7LEGpumc",
  "key23": "4nHsbt8DCpfi6WBP52rzmZgwmFqPgTUz3h2PQuenetcFCgayef2hQesRA6gztunsaY5zgZqCbfnVP1jYfYv2WCTr",
  "key24": "3xxw5K72zLR2cniXrRmeFr9TGTW8f7D2uJqkQKpoinQnA5WVb9a6GKDCkBqRCB9PVxLwuzFL6JxMgrcD1bJybuq",
  "key25": "2C8WNuRscsWRRtDu3BQWG7rJ3eeGz7pgCZfWsxWyrysRDeUg3Zz5H1DN7eHWt4nx6t1853drPZv9BYvLwSEnvdpC",
  "key26": "BK6NwcW4kVR44EMYy1EAb98JK9ZSfDaEwZofnXboTzXeWXBKkdZcx8p9JeMuzvPFuZTAGK4aJT7fkeafqkCvGJK",
  "key27": "64krgsxkoE7uo4ezyA5jQSS9gRZfVCTWtqFh6X9jUZuuyqQycy7ZunuZcPaWPsmFad8T7ZhbbtEndUZ8425qAgSD",
  "key28": "3obrVi29vw5FkofJu8cCVWqX8MGFC13bQGFgecr5xNsKuKtfi4suW2dVYx4uAkkXG2WEkeyEXjuvAgfoEdzVa1Pg",
  "key29": "4rDosSavX63F6DmbZAVqqfRZgTxnrpQNWvZRL8SkweSWPZWZgLCpT2N7Rn5rQi1xmsGb91vqtqDmPVXasqTAcBt",
  "key30": "2yqEEvPFVKWMm71dCuFBFTurZEr62hWr6Mi5AQ1sGct2SQQGLDe2LG5Cv23BP2v6RwozmHUo1N8fabpTxU2Z2BLW",
  "key31": "wSFBYcXt7iPJ6wFx8vGVbcoR1PSrxXStgSTcSNyxPCas2H8TLPE7gfUm2GQWx7zy2cbLWAnDt4FQPfErYuA8hKZ",
  "key32": "MDDFcpvpvUtqisJm1rRKbXUnKr95qRTAPbd2RHfnkSoh778Sh3cYSi7H88yKXURzHCwP4xKLmxDauL2GYRyWenK",
  "key33": "5Akoz5fAa9FKNqphSAJUqZudMLtu7CcZwiwv4U29gXfMGJvAQk9CtsJAC9P9iLDLsQPxnr2ZQNB8SLvcHAXJu82K",
  "key34": "5ZAh2Qerhc1kDqGmECmnB8oApW9PR7nVFvDh8q67vwrVGPqoRKwhJNrkGa637e7ePdeHZs1zfs6EXhvThWipHzi",
  "key35": "5BB3s2Tr5FL1uNjrTiLB239bdPUDfScYQ4NY66qEfn7QCg6AWM42XsVojx73hnCTgDcLQRN5ZrqRkj8eWGAqdFzJ",
  "key36": "3MyA4gWznp3KMp3MwyHb8d15c5qv1iMfVAJqsHHGcyYnStAN5iwqgRezFENvNLvdvVBgCAHWXoKsvzsaytcxvSWg",
  "key37": "5r6TCEsRDMQRTb4DBFpVcYS2VT4acZx5LbsjQchSzpANubcAwUjEvDmLALVXzrAPQeodYdCfUf3yNpMJE42vWXB",
  "key38": "1eDfUcd5Z18AYvNWQuirHw5y7wk1oXniakqZFpRaVrj7JA36zaamENF6NWFZ5xDDm6zJnH54fJrpRyF1KRyabAC"
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
