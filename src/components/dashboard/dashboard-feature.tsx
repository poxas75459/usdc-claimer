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
    "fhKpuwtCbKVocCs1TGwhHGgzheJjUxn8nd9uzPCuheQrLQZuHYzhwM5HoDWmjYdqDwuLWcjD6E6fVUGrUYLFp2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jwvFEE4Qjp6vKmtq3ZR4P1bUMzr8zmig7QEdkYgi77nYr5pXXH656G19PraAWCXwuwALnCSuYqGEcEMYE3Q9s7q",
  "key1": "4sXdh2kUCyP1M8J61K1TmP85sJEXacQnRwJMWcE1KPZtj9NGRn5SZXPZ956qpfZm4DDwsW1SnuiaRLudq15NMMpL",
  "key2": "3JCxcCiYPiegh1d6J8eGYV9cCBokDQbwm53rLBXeADwocyvV1u9ZrPbMU24p6uhptC4xNUAE8gFUqYx8wwWe2vF4",
  "key3": "2FCQLM4sobn1yujafuEwz4UMd2rXwnygLoRhzq7J6BEBF2mvE6zthdG6ddp24bbsNiS5CgAEchM8jA5uSNgMiiDf",
  "key4": "4FHEtcGMhBmhV8uR1MWdFqKtWJkcLt2Xrqm2QFNnq4bBA11gAfAaCHBEZebMgXXigvDDR2DYAeQGVF1kPnuLeYLY",
  "key5": "3WebkBioMZhJ2sbWoikSycceDzeP3ez9As91nnUAAw1JxZfTntjyCCnPSmm1stfnxdE5ewA3rHkWYPE3yfCSxikG",
  "key6": "2aM2SZhAeWyA4YQ6BxHFqEA45rWZhUd84Y1xGezpFw7v2GtZSmJ8FtyW2hzNopPvn1BWu751FvEQttSjpG5KCA7Q",
  "key7": "3Nx4sk3nCqqX6fy4aFEQjohaitNWoWyqmVLhZ7TUVzjosqbesLr3wqUrAGhmcYGWkn5SL4thr35idDtGcxYhMJeM",
  "key8": "2L59JsZpm3dzwL5w2s6JbHPiRjehXT5tBnxfGL7iAcJZjiVhmYBHqCJ7LDnjDSF44y9mXBs2HUHVxxtfo1q1AzfT",
  "key9": "5QS5mfpfroAcjbGVPRd2gnnNweeHEFNzW1pc1jV7sgergjUUjVNfy1U9g9zArUmonzNLKooZCMHDbTv45HXaGbkh",
  "key10": "5X9MiuYAadDjdA5gfkKJpYvqcc4cuwDneyFMXWajue6J8NAL7cGX6MHeijavv4bAteJ2XxHWDkqfdEX6BoNoe75L",
  "key11": "2fhYM1Vu51KZkj7dQzpguPiQeXGR6nY2hjaodMbnKrtS7s6qaacANjd1bPezgWTCSr7bmQYpbPFZNnNgTRHyfscU",
  "key12": "rnubdaWeB4jpMLmcXhZKrknCuc8jWJk9BhQ214GfiJBAtxKs3D8YeMTwBGYSNt6HsfCpmnVhFpPSjvvNTSADBtj",
  "key13": "4McmeU4sfKu2eK5Q7zJwrqmDkgAJkZHfn9mXvUjTdf2BajvM7nki1DsWHf7JjX2CMW8L65etihcCbSqkxY989GEC",
  "key14": "2VTLWWVt5wJBcyNpEM22wFmshdhrRUZMAdYJiQXLv3mv7C2rmDeuf13AnbekpcteZDRMFCcySkpMepSX4PywqaKC",
  "key15": "2cMkb8BEhHdAWBDT8MAUgQXAYXE6jMd8bDUKTXVtUDbgcwbNKKKeCq8Jtqg88arH2CMVMdAAcghXVzbYwMiiQTnp",
  "key16": "2RTqi3zeCBDDvdb6yrCRzUvj4m9Y4ZfJs76XykZQzPV51uqe6s7XaCVSDmRg4qjaEDrHH6GFx6uicXQHB9n8HiyB",
  "key17": "2enLNakukNF3wU7vq3YEsttBzEMhS1VWzy1oDUQNF9mvFmp7Lw41vx7jGBWMHnzfwFBUeZpzvb1K7z7ppE2oQsNR",
  "key18": "2Gt8rermUiqFHkz2WKmoGCJQgi2JmhKKkn7ZCkqyaRj15dvNqWuYJuVGsMHm8fTtoJte1WfSnYEUiaXTNziQUMpD",
  "key19": "5PVbq7eF1FySgv7hv91QzB25P1D7uJBy26fPH25bdPDpmatJ2TfJFQrLkqLc4QzpFGhhFmFDCpb1Xiiw3NS6iAPZ",
  "key20": "5ZVzsr5ipKn2T3RErxmrPUkrjimGjDZNzThnZPf1Gh7Dh4ejH1ZZmpHdrYiX4qEucoRrcqqnrouzudkon5Bvreiv",
  "key21": "2z95fWStj3jtxBWmr7MjXVK7r92zouzrC1SQzG2pqKPpkX3yQMeJJLPFQrG8HCmtjoYkhWGeC7rMWCkNuo6Qtnwo",
  "key22": "2UeSrtFCfxbzXw5djmJa4jatKn7Kcf1AUu1exJ2V7YmRrCrMU3sAqfup1gQaknDMawG1bReC6rvXvPLz9EwgGYbK",
  "key23": "5SRXkUxe5SpXW4LpWmZ9SUfamFpLhH2c4qE19chqadi3Brxb62WhRNFmzx5jwshxsHcBc4RS6LKEsJjZarduCBoE",
  "key24": "5FmMzJ9p9JCv7Smoh6UN93kyAfsSffmN9aZPm5r62sX2iE1QioHEPbbJrxRLd6a6oBt7U58XyEL8FC8sJF8m2M3h",
  "key25": "WCNfj6Y2xshJC4Fmvo3WJvZBM5EJDj16R3RLE8wCNLUbc9A1hbW5w6gpnppcAQMhFLhpu48kzW524GG2zFUaidn",
  "key26": "55m8FjVZ6rzNgPsDETFh6ogiAPPbH4nFMhS9bGkghda5HnZubxZP7Htiv6gsR4XoktDNocVzcTaFaFDCiSndqJ6A",
  "key27": "3sH2wUiFMsJWvZwFop44m4fNSteqHhmLDNLZ4e4RXNdt9sch6kUXWZzu1dogYPe3hBQKLSnedk6854S5KnawEFtX",
  "key28": "5attA1rBzS5UJpYAkjPFn4fjP4U8QZ37HPqCwY4oCRPBoNfLJ6qMGRMxCJGYYedHfWJH3ca8CVobYuEmKFyJJdXv",
  "key29": "33kGZf61LHCR8d5hezx7hGhSDGEHKMNQkkHor4MA7TpGXKLwYHCkvrCDcKUvfJZUGehEaaLxh6gxQNjX6c5s6Zy9",
  "key30": "48yHtAgeRfnq7i4TexzNqFtWQPVM1XWk1KWEEe9gZUC2WcSgFjq9WyNY4cVmyCR6x48KbjcAZFKhaJx3PZZjvP9E",
  "key31": "3tXCCDjDxG99AiH1TDTPT13WDSWV1qKeWqnUKyRyFnvfst38R69zdzzw6Wbk6oPEWrNDktuThne8TSSQvDWTpzTE",
  "key32": "3WBVj5PvFTeHb7sxrEgwRcYZVb8BpHNNVuqyz9Ev6QucmiryZ32Gmzq5PgK2Tg4vgf1jCTWrYKVDvsYYUJuu1A4j",
  "key33": "6mhQruscAvxFMANWcpi6z5NJRxoxf4BW52BkswdJkbAzrzY4MGStXvB3TcySq8YJsn7i9U5sfGaC4Ew356GeZry",
  "key34": "2GdcLnbpLFW8sGY7oqUSV6BL2bMvszytgRkNRQkQLvXbWoAfQZ59rPLRSV8J3ta7fFehzBaa1V3mhmmQwAocjhu5",
  "key35": "41y7tABDPB2xrGk8ciMEsquEotVY4ckefP7yyHdfM47PoXnxa1Kx2Svwh539QFNti89ExYJx8zGcdRtqFxCgkeHJ",
  "key36": "38kSNC91pumJV1Th9jZm7yo7MrBS2hG9xz2cX2pCyjiZJsawrjLwK1qb1cgGPLMvJ1dyxAkm6fJEiVfuRajYBvBi",
  "key37": "gNdhy49mmxmTEDbrT7ju52gQfJHj5892Eet5SkoudwgJTYsHY5VeV4YzxQXyEHn8APsH3sGth5GK6AGBi7tTKNE",
  "key38": "3jTaZwU1vYo4PxtacSc3fxfGbugQg3YqZhbB244UL2DFR9pVSfLn5Pf7aU2ApsgmVyJ3TrU5ncDTVQ3SpmTWDwBF",
  "key39": "2WNwjyRSKDAKUTR4XxaHYvTXhBz6pWEZ7x3GPd6ANWsM12SnZLTNZLztKP9HxAjbcF7cQYoFDxNJV1VewyFfS4LC",
  "key40": "4rNtHe5rXAtBYprV9xDaueToUXbFsMsSj7TKa7gzWWzrxJMWSwgZtyz5Rkh2BEBo86pmopqDyqEJDDVnhkHoLqiL",
  "key41": "5S9dYw5nS5Y1eYXNdNjvzDBiA1rvkPpEATjywC2Yvw8qUKBWTReT6c9ghZ2wjEK4TezRDzPvY5JQzRkF1CiF6uaw",
  "key42": "2914KEVj9hnwrCNbQi3KVaFV2HwgRitRP8nRhKnGc7sc9oSJkcbUc84WFyoPhdHbV4cxjX7UF9fZHMRBaJ1FDiEZ",
  "key43": "2BCHP9hbdMPq9xix1X7yT2gRSH95KLznMhJuuqptzA1Pq9AEvYV1xJFSVGQQbgxXsN5jfnNujupJbL1W1M9GnHQh",
  "key44": "8b8rAc8JFeLZzhiJi9GWKHcUnCAn6iqvbuxDSWvMoocL4vmg9t4x6G15zCG62h3uhq3m4tNr3XPYd1bvUc6fi9m",
  "key45": "db2kbEFzhbw85ZFfdp2vY2jobERV8VVSstBSbGr2FLY4WN565gUtEEB8cB6BmkvbcEPCUrSQNwJngGkZbmJcPbK",
  "key46": "JUTe7t7bDvxJhgU793J8Lj7FqgMQ89Jq99ZtV2Rke3wwtwUUiBHFwimqpwH56vFvGKRdYjoFqWsDPzJUdaK45mG",
  "key47": "45LU2PbkoycqL9JdvDkv9P9TLLUjr6oAk69yVJKfUN9f1jAzFpFwPhjpkgKg38qaLq5AT7PWfq94AD3uJALhYGwp",
  "key48": "3FGYCeDsgEgYdU15NfJNqkwaktfCQekijMZbjK2bCvAoJw5kXeTSPyDm8rnbLfcK9LJgTb9Jrv49EZWou38E2C2A"
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
