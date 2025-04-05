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
    "3mW6ca8kD8jfmNCYXyT3A9FCsAnKFSJTfj8cZUZxnAxmKgxrqBMVt8eDQqwfS2UogHmNcJuh7ivt1vQbqDgVszHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38v6MLuineoGQHhXZCh3P7W96oR3KWm9UBru1jVrFoVYpweWwDMxR4SER6xYoWwJMJ6mFcxXCpF4PXhfP5MZMtTF",
  "key1": "59KHubWpAY2SS5zVobgcGFUTdNoBzG75M53RErxFWXLmmiEqFAxwHv12k97eSswbcoBQqs9T8AX4JNLU5B7PbAuE",
  "key2": "4jBg4WyvqTcAqtUGeTbDfgdGrmfritXWRz96W2zJmMCddBN8J3dbF4MxDKQuqebFCJzQnM4qgtp6JBW96d4QMtQL",
  "key3": "2NLscoaH2QLRNRq7y1FgnzoXoyKzpMmciCXXHvDCMjHfYWjGMFdbQDJThzMMmSuGj7SSU6EfQNTsyz7cniu3jhDY",
  "key4": "kJA5bT3TyqMNHwXxma7Qn68TmUKXhfVJ3xykCcjxjTQLieVoVgQnh1SaEuwgh9p4cAmgJ9seQuQyFi44FJQarvf",
  "key5": "2CAYtmbqhjgfs5JUt1arqBsa2cGktxHiETtocViUoESXocngcZ3MGVt1JQr64EohSmKgE3twxCq57HXGnV46uEy2",
  "key6": "3okoH5PpwY96QTyHqT3f8YcGbQQvcRM6s2q5LUA1cM5tpbS8hD3ECLBxTS2GwcxKiESVykbvbXG9efJ8BNdXK5zf",
  "key7": "2Uc2KhJLXvrNyavQzD3BS3EjMtvA1QP98zQJyPodPR3tGUz5uPgHU4VSeRQXycMWYFSAnDGTvF9JhBBiqbx5R2JJ",
  "key8": "2r6ozwvV7JH1cD9gE72FwYJw8zS29reGFWZdiEqtXCVtPShkfUnBPvL1z4g7FZx14ju2RHcsTYaVGvqtdCvnEEvq",
  "key9": "CJy3tm7TmkK1o4d5CqRyrV1tZEVGbVghZu8k95kN84dFymXwSRmt7BH9oKxGSoePYSAmVNUWMRti3YjYs55sSav",
  "key10": "42pg6rQyQ2uCbRM6sCc2KhzrpHnxzT9pYLa2ffofRZLxmFT6s4ew9BtjRaADKA5Ec4FFpk5r3aHP45Ujf8hm5XFw",
  "key11": "Lb6hG33PgvXySAhwczqoKNtG4qhqpbTTab4DfoJ8JfuvWkwPBdcEBqcUBSLhtTY4n4836XGivs1R8A4Ju1CgJRt",
  "key12": "5uLvJKukbj762C73cC4xCm4V6KF8rXz9LkgZp3cRQTxmuX58xzQs6tQL8evM6mxbQ63k2t54E52YiUYaceMdDbGi",
  "key13": "26zSSYCWHQY6VBJHMwudBinNbwA44N4rJVNzfEwPh8xwMDa1TjEL5439SKCBiymRde5ddUoWCWbyb6LtwGHys1mo",
  "key14": "5R9W7r66tGLWgFiLL6zYqgWkQBbVihCjGj8XzpYLibXVL7vQww5qWyAWsV3HSPRaTBQ94wcx6XgQzawrPe18fV2z",
  "key15": "2TQM2tcdQd7GPF7AypkVHcqJroE4z3JEPwADxwUo94KUcePjpES92H1X7xKLVPEAvCQEn6rpQAwNfMCe15Mm51m4",
  "key16": "3ehGhp1CngoWSDHsdZ9LQrzPLRhc3rwUqvwfzoig4rKW6HccDVkgsmtLqTDJJUKZPbxKssErmRNQK2XRQpEdM553",
  "key17": "4h19ztkuRJStNVtDmvpreW2EwScrBYt19cj1F4DNbXPLsCnwycHajq3XRN24YfHixcMuK2BUBx6RS1MFG84AbP8B",
  "key18": "38HvwLWmDNwz4XfNeY8RxZP4AxpbX9cGspA8cYqpV9SUUQW7Qvw71rywCATna4s6WYMVzZxpmifSBADzrV6tdSyJ",
  "key19": "4MFtSEX2Rzutp4ztrFQ8zTQWhY5EU8sfBdkohvoTcJzX39ATHESCQhMGE8ffFEGL1m6uhzNxg71GEytGt3YJc8zP",
  "key20": "S5HKCqwJCNKsqafzeBMaNTrkf2PoPkyipERZ18mJzX5uESfxuFZ3Ajx68cDGZqxKJHUKYiE1nDugAcmiFaUYB9p",
  "key21": "3wyAtw7Zxj1uuvPCo4f1NR15v7nag6etCQX8Xqr5fjDnReVHZiJ4VmMyWj2cEnAps9oz7ebnGfqJRA2GDQYgUN8L",
  "key22": "48qk8TG6qs2xVSopwxB4wwHBGpZ38rVtt3FQaVEPpEzYnfK6PYRKw3W1G7U4GTYVkigF8fdNYJMrhHkr8F4quAw2",
  "key23": "4cZnoVQ6ULXYT4pA57RHTm8gWbyhiopq691of4ya64TGp9xgSXojU1xFZ23AywQdjJhf86Mme6iVKPRipZ9NQvYq",
  "key24": "dc8FmttYMhh3XhTswptqurbJZ28WHgTbp2TNzksrN6oLYpadaK3wecSMHRHan5851YF9xdYJDsUK16HQZcfX68f",
  "key25": "3JEjwem1e47xqbaYrAy5LCEMebmfHJ7mwmR1Tvpwn65uhReS1D1pfn3Ed64GnL3PEBc7FdViMYQrs6ekeP8dCxem",
  "key26": "ANUxyqdxrWt76txdBG1rbAEWS5isd8he2YVhvR65iRn9nH9BYb3x5hMMTxXTErC8rXJPW7TF2QQPy7Cmq2Xi1VR",
  "key27": "2uLmRYkMvK7pbTQn8HDVyDfk1E2QNm2vFStA94b3BnwknCTP2aZaWGGZrqh4hXesDHVBbPhzUb4LonQhtMYeSecH",
  "key28": "2oo6LHWmQW54uDUwRaQKCxRJBtyzfZ7UM8ybWWqh3dJLEoeh8ykjo2N71Lm14dYjfmSL6cr2KNp8F2Wn3gr8J4A",
  "key29": "3QJasAtefJkEqmwA88uB7gGfRu5EDy1CxJQh1UkUx19K6N8kagtqHWTmGaH7sQNg4BvxfBFimAFPeBEkACXKJTNg",
  "key30": "22TDzrQ9xjgt66RQKzBPskzZuMvmAjAhYQnYELmCVSJxov8RX5ibvoC7thnQKf2Lqssj4nRP8ZAVbhY1BtvX2rFX",
  "key31": "21dTQbs3v9WGn3qVM6JxXvfESWdpboUorcoVfxggW6S3AUkboQC9G79g3zHRq1g1YD18jC4q7fEQzNi8fAAXb1dz",
  "key32": "5V65SS7FQoxVE7EmQbngEKmmZcrD3UH12DUTht2NoaBaTR9k7XruLn1qpeeRxKu4JstNN36PnVgwC5zeZitmYpnx",
  "key33": "3Mf4Cg9FpiFCfkWyJgR9GjLzjooVV7YmWL7GwHbjt1bAr4N9hpvX3GNpUL19trW8rWxdRFveEgLEMKfZ8TRURtVR",
  "key34": "3J4NCfeEG2fPKztdQLG3a9TgjNsfxVq9jZcG4WGPZkagN8egwPqMxSmgRMGcP4qTZ7RVoq2oMLLdKkfBz68nvi7Y",
  "key35": "AJB6N3gaS2Vh7KUvZDGMDBKPwutchGiUWpCcYnMwFUk7gEe9Hg83Te7J96CpgPKK9b7gfrMCfyGorcP22jC7ES5",
  "key36": "3W9bTe8pLRfD7rwzJuxNwDHPeKq7EjS61x1zuLZgrPwbSwpbf25oZW3V5K7pf2BWJmSeovefiiXv8UifRHqNX59W",
  "key37": "2JeCnz5ehQHd7vDyQwAiEXwhnH7MKaUyWsZCnNX9piyvbw36hA4HhT2nf7kBFiMyZgirHTwd91pkMREwenJTvrK5",
  "key38": "3HFgkn3tWHaLCG3Pokx9pL9nKPToPGnG3jqVUJqjso1y9ErXRaEJEenReTUDsKGwLydHxNHrrkBb8gYSahypUN3a",
  "key39": "dScVL1QBQDpv9sVZosw9spETtnEvJw9upF28VQSXHMZYdYMv4Bf6rvcsZ5NJ5F6Dufc1KdHe1mf2VniBFbMo3Xe",
  "key40": "471ZFY2D6knbh5kWMA6k93vaAXAfis1NNJhk5NQsZsQsCsdhc21FpFRDPaYRiDRaNhyGxx22uVy9MFzWRkicp3d7",
  "key41": "3m46RAXAJmMZ2M5uYfCr8fc5taDjHdpxVRv196YxpJd6zKBmgjYvF2SyJoxw3HVxX6PEyGPh12ynWPjQ1ZBEVLBr",
  "key42": "5DNLTyRkto2tjtMF5Ba7m5nbdfBN5MK5FUerxcHeabKqTJ5gzfqJPc7MuFmHx46irDTHm4qsVUN5HGGFQhr3L2nS",
  "key43": "FhphANRqV6kf53wfjiGoxhow2Q287GZbfx5YUWM93mQe6TaXwj4r4cPdAWBGmq8DaaDYAokJEErqCeR4PJxdj4r",
  "key44": "4aKVvSE3SiBYHMAXfTGGdfYVegcSzkb3hs9vrXBdAjrFVCxHqugXqsL9EiicTitskw1RRv981EHoQW4y29uXsdpq"
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
