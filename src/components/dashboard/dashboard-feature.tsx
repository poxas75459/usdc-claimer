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
    "3RYWQ7JrKs8QsrWk5CrbKByYXZQKJE12FqUNGbgTULFCFrGXT2M3h2ZzMvyF6jCY1BUqLQQwdYev5YXDpnepDqSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27KwyGW7tQiuxecDdB5imhPchZYc5kyFesMrZWjeSgJ7k3YDNwJEfeNNT1FjNd6bX8AKdVswuexV8Eighncz9c9s",
  "key1": "yNzS9hUTFvG4XJWmp1YZewscrPsnpQkvcSXsc5dFKsDfu5ww4kjibiYfEK68q1QAbLPygxtSr4LvRUW61wtgLVe",
  "key2": "3g82hGyjNAf6fTSpzAAXT42mLPnWR8F5u3Xf7MFvDDYzeY2XAaUAcRiKvu3EN2jbAKYjWtbATatuyrUuAYhNLyqE",
  "key3": "4UFeg7F8NPvbL2JHzF9XcjaAUCyrXk3Vgv1qncWfHNt472h7ufbkrzDYvuKZR92wtuENbtvgDwGSzkqyPkZakSox",
  "key4": "3EQxt9FVZjSirmfyDhkVrw9N2ou3Fk1yS17nMaUL4Y5PWigL6nK3P38sNqpQfj3soBnbRjdNv6gY7gwab4yywH7T",
  "key5": "5RDoCnvhxWdCNVW5tN19giqjeTzBns81LhymtCwGZ7WsKeENqom5x7ywd1PyjBjJkGXqjyZPQMaCoLrgQ5V5PGqK",
  "key6": "77osBssmBFJcoXnJQS4r9Vi3xewGRKuXpq8A4JLFcaeQty98dMnsRyXTL3L9Lo6jqJJkwFRhWzNKQekCH4tdFXW",
  "key7": "52zQuQW9TwPSUndAc492ZcSSuMj7eUXSsbLc6cPb9ejwbuAcinQYJxG6wS6V3xjsdmtwnmZRdwsdWEPMNSUu9QU7",
  "key8": "3qTc9TQV394rc4A7Wrt6MkNVFPeYuDMJJ7TFqxabw1AweratTZji2aqK1EWaf5WZu97PaFZsaNdCxLoqdSJtG6dG",
  "key9": "AWAtHNteNX5dcTU5oDti96McafHBe1gUZoo68JhB5UBKfXsWemBYf2H9rszUqUPUw2RbnDaiejdUZACcQYP44jU",
  "key10": "5XU9gx5rTN6gtxBFqhM5UiYiScGp1ezxwGJzZ6t6g2cMyQSt4PPzNoFPdhjHXmR6t9n3ACquXV79JSG2fF1jxNE4",
  "key11": "3UmBTX24Y4zvQ7HmGme4PbKZzK9LB1u367z7EGv8GQ7zq8TuAjcF72azuaWChadG3yomsErkVa61c4BDVAc45bYC",
  "key12": "3nbVSmZ2gavHJtgh2v7yF7AfjgK9XvF3oXL94xQDRwGucm3rJZQXjiKKgkrUhUDFYPwj73FkFxV1mbjPk98WjwE9",
  "key13": "3n2KobMKtbTEHcDitMM6pvKbSfrHGmuJRbcEYBZJXhsShoRTfmAqU3K1z6SXs1f6EvGJw6p69aYJpikUgH2uHNC5",
  "key14": "21M32ouYNffWv1xKWzEGzFwzj3hXdB3CJofb43tE9pdvww2jAKuyc33pFHYvRWJiS5Wifs4PmLB8tNaS6wo6jiCT",
  "key15": "4cQnrCZENEtxY4CNfEabra7THu7EgTEVPTWwyZVWYPqV5RZCqnP858MRwPhzsrcUCVTD2pYwoNp2wVpYHoFTt47d",
  "key16": "5S8jC5CUKPTWrB2ofxkGBY3y19YEW19af6yPvggb2YuC9KcjVQeAF4Tu4ebrKc232uf54Z5J3F8552p89UXnKCTs",
  "key17": "5zDVpAXAXQjJXXQyN6rEX8HxMo4WqTCMHPbSRWGSh4TXJ85t8JpqWAYD4bQjgqN87QGwQegbKX6u1FmUuGPZeDEF",
  "key18": "5Tk3QJP25pQGqaBXvRfHkDzTYo2Xbm5TNeemHJW4Fou2ec5H2aMa1f1QCtKGNacMKzhdU6gwXiaK1BU1eKo8Ko42",
  "key19": "576Jftp8FVywFQGTNm6r42mx7M39t539LX1ddSjGLdJvUpdDGxvWj2gCK4SpFrKLLrtQXMiYEkfzRwc7ozcb15PT",
  "key20": "3YiQWiaCM5jrQVXPa7QydJ1J5qaL4nCwpipzvVU8yiU2FGHfpJ9G8Aj2t3o4mMrVY92Di1f7BRfgxiXgEJW6fTgP",
  "key21": "5TzMrDdT9g2Eq696tuycr4G2u9jHvbVwD78CzgyeNbPC2V75TkEcqhBYrm9mZmJSXDqZjgEBSK1BVJ5XQhFZpS8N",
  "key22": "ppQ2ZHVxSRku4nQyowTps1LdpQXF9FyM2pfVsKY8oJTuawKciDd1kyccfVdx6uduQSLcUSg7b5qHekSon4zfLd8",
  "key23": "5p4wGT2Ci9GzxizSFATgENCYL5nHcVT9aNtJBT1PPL6oys3JCkTFyuspH9ywRDkoewzD9GwHmduvhVW1P4qY8sjf",
  "key24": "qPifUBhbmjS9UcXe3AkkRhv5G5dKj1Zvr8y6FFYJzsVzb4ERgXiLBxCHUNNGDi1T8aTdT7BrLySfgyzCUMmGDDy",
  "key25": "NEzqE217Rg327hQCWHoC6utLqvCxKHE9GCBnCPuhsPknDupopvvdbypy24Ka6xpyED2DkDbpDcaYfcpK1WzPw2J",
  "key26": "3pncEtod9MZ6BFvKJr4r6hSsRMsUo5HKvrjVnKtHosyHEaaBLES5AMVLLKa8y7oXuJTn1C5Mzea8Cp4wAdegwASz",
  "key27": "6fjpghGBYYdtWNxkGUbBaNQbKxJZBRiqXWZLngsZRzP6wJ971cKJFQz1moFhabYmke7EpEKmEXJTQounKrcnLTa",
  "key28": "5Ct3Wdn3fjPb18zZRP9ydspxwvBygVcpQM8vFM3weMttm5S4qJUSiD6mwi47HpYcQwFFCsncdJUjhEvyEoyX7uSE",
  "key29": "4Zm1L7D3rYq1RfEsxoxPDoZBUnXN5Q35ePmbBritxweGa3TdrkBthY2R1kcWJHvbroWEY5CERWnn68psiav9fgqk",
  "key30": "Z43epFanFXPmHe9WMBDskexF6uhm9SzMhsdzm3mGFa8MjzEhTQwgi95th2Uu5oivi1hKrX28gEconLediLQPTB7",
  "key31": "4kUrrYZwQTp5rgEMTuSPX9yG32aAxjvvQYNfmqeiaHYTBwtBSRw2Pz48gUP7xPRfBaerzfKJ3n7J93ZStfYVp7qD",
  "key32": "54GBJ9doCRHcJZFNksvE9VBZGAJTR5CnsBFgo8KS2WUXdss6cU3fRuFMMr1XjMEw4coNMaE7evCzUCM7iqY2NPb4",
  "key33": "3RzHGVNsScUFSdHA99c1iJ4EuY7KD5GziN3FynnocGHp1hze1n3T4RjW5fHSjN61DXbWkELpShg9SPhi1MzfR39T",
  "key34": "623F8YzSYBPH5NMPGRwByvonqD3xZQnPQMgVcU5aZgnHWsJPVnJ3pYnaGcECS791p1eAN6T82MWnLAo5BKJKRcVZ",
  "key35": "3HRSrN3w9S9ccxuN6ftAsGKWHhsz4bK4mfuJXyDnBs8mKLFD7YHhF3Z9FtpjEK6ESjpaGimRv8sKtBHV7H6AXsHk",
  "key36": "4W5dpbhbBZuZHU43W2mDiKFwKaS4yUKeizTsb2JUFCaLPqjrQvVFiGcWt4dky1yGiwzLJk232gUfo16v5hKn9oJU",
  "key37": "2JztfzWqGYxCDE9DqAxo84XrfPaHBUn4P2hE3L9HVZDzo7ciaBZ2tuu3sRJgr28fBkd4nKVqcqacTdNaajQBwT9K",
  "key38": "3SGnpaggb8ezc54Fk81FGk5WUDesHXqNbzpvtSuQhGhfLkKU9rmsAAaKi8BQtbdQkBks83jpRoFQXcnr9EiT8EoP",
  "key39": "2xFK9xBzuEWhdMHeEBmBrF65qoPJ3dm7Dpn7HAmvA4e8GcVzSKwQNAuatYzsdXJ9iY7aq9eB9dBzmjWYy23FEi5g",
  "key40": "2JcGTqWiYJUKQqX5MfdLrcha8ZAHgeiTMCikKenoJKaAyBDFAESqQj34QcduyeVokTmxz73kvetRcmvJD5ziz1N",
  "key41": "4XqQds2UdE1so9aeAyCgZKXFLV8L6FsNxpJhvcghBkzTAgCmo5AKK3gQ57Eok1PLUCuRQfq5LdntzBARiNNNZvCi",
  "key42": "5LUsj7nWHzJryNLf23uuC3GKqZxhVo5ViDudd7t12MTGy76QzZNYnXLQG43G8z53zKgMQgfpzW8pLMDtHZSAFaK4",
  "key43": "5E5KZnp9igFq8hA4RWyQcumsNZxAfoDccRRMc8KAEVgSBN7r1rmAK3Pr4SmNtnqy7LL2Sp4HZeuwzWo8JhT5WK3E",
  "key44": "642WXJ3Co3LpGQMdkM1WW4GCxXc3hwgMM1dLRZRPYmh6D7msecqTz85ym4316dDiVzzLaHcy61TP6YFps1zZdUB6",
  "key45": "2oneWXBri1CwJsxFfZqotYdsJkbZa7MvPDZZwzqdeeFqQa5HVTgGS27rLZ5uQuTGVXMzcEVRK94abGU2zoKzWE39",
  "key46": "3HxHRWn7r2r9xK3Ns1DNCbEWaeQYrStaGMVx9qt84HSTKdvrtAytWNpCU6VMWJNp2f1Z52qbd2nN3L171FaA8sz8",
  "key47": "4GWSkkEffFWDhtWHetSo6J9RWoSB8DVwvEYA3wGN4W1uWDnEXWPHkZqQLw6LQREwggFBCtTHCQMbwAvnXTTKKDjA",
  "key48": "62xcnTeHebakzM3kZo7WM6Ba2nEh5XpYGaiSkn7FSiZtX49VTsnjmx8bafSBd4EUrmt1hU3sAJ7xayzHACM9UnGn"
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
