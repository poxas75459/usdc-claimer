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
    "5g1QL2VYXeJnpMR2kgQAzvydyuaGXpu1qr8Tx7VziuLga8kDkDufmxv4Hj55eHSNPG6Nuk8fhj4rjyYmfjCgFJ6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dC1RaCgYc2GQmE1ot2qgSnPJdgugzS51mF5wFvZTxrGNhLdHmS3HpD6mm2YyeMyqXZkKtBdhUZScz7hyxSxjmxq",
  "key1": "2LZ7zS43L6tzfsAH8DAuhrm7mGRL24cgiYVtdVuQoAYT8DyybFubH954DScwptDYJmSNqgqrWtFk513o5UTqdPnw",
  "key2": "4aDTbG1WZurcYvt1yyn7MqhX7Y9E9r8QLEJg2QHjiKa3BfcAR7aTq1NrTUoWf1JBJ8dEpDdHtxTh1QogdvLWtCza",
  "key3": "3zSsXvtLFgQiTVr26pMsp7JQWdJioB7AjcMGU7vWPFq5rrQdQrmef4g1uM7G4Lt6jQp2rL49AJqLimqFrZorbSw5",
  "key4": "4R65Z6Wp2SmSsHC8sgihFPGLqjcuZDMS1HEkAm5FM2issAYvLLPgdHJWKXJe19bKDXKTMwRJYfVbXvkfCWe5uUYA",
  "key5": "2QA9AvXi75XRQC7GUozxPeiD7gPKi5wGAXvm3krschFLiyc4JteKTapztvYSJ4neru25WdPCo9Y7VD9QSPMe6ZYS",
  "key6": "324Up8NCxdQBQrcXXDNoPKZk2uzwZb36Zx4zESgt72tvVpaqmZzZ8vxUNPoVoLk47Yb78Piiog9RHhMj7tEHL6oi",
  "key7": "4nYi3P9EBPaiTmJD83YWgPErFNGDcp4V5DACKx7UmxqA5vZQEUZi9xJNXMfhvDyrHJ7ouRP349Q6Usk3XgpwDRqU",
  "key8": "2bJTNQxTuwT3VE1jaYvc85TzX3pJxvqXXhhaEgoTG38XEA4fAjxcJMXQErHwBV7R6suLaUKZ1ZBDsV6qfVq56LgX",
  "key9": "23ULfypTDHezDRCYBBPAsbjfSGZn1BqN3Cv5V6WQxtt3RMFa4faXbTSmjE3id79U5kcULM3JwRwTCabv7C9QeaQw",
  "key10": "4UdcWY79E1AXPY6ThkD64bmT779snBishrauHuMqstAwBVzjinSQhvRGSxnAh28qGSjM3uzgBVtvwR1vX18raEyq",
  "key11": "45Xz1nfLKFmuDr4kop9WjJANPiz1vYcmL46Xff7p3ySqs9aYucmdSxKQTRkFMdtaFS2T1itdDwHqmJ9UqQzkozED",
  "key12": "4GgxzcP7vGsmL4hefHRpPdGMp5r2Hw6U2rooKZhunFJz4EhyyhTNFLtTphTVTGHKWk6SJiKKmk5WFsLCNqb56Qof",
  "key13": "5TqsSUcwxPQZvUTpp5ZEpjKXLbKTZD9wZ93kK9AgwQGCZvZwGHetiFhDDbdBz59R1u4mBY4ywnnZqMQjmj3TUMBt",
  "key14": "4uhQ42Mf7e1nKsPobeaFChfre71A3xK6XnsYULb6RQsv3sTjoHzAKB2ebjCdsjZqe7D9a6SDxqDhZ1hCnA8AdxKh",
  "key15": "42pLQpUTikqf1X4836EBRsJwFmhsaqQfq45QZ6iEnbqbvXsG3ksUKrWvTA4Q4wPwki32K2eb3XGg4pXwXtvmdqMW",
  "key16": "RGUg3AhXcZsXC8MTDiXa82BTLaqHmyqWJgcNvMRQNf5m2iRDUS6SBnsBEE1VQyVJRztuufiQgZLu5Jc9MgsjKot",
  "key17": "4UYpDYiQsMvRGpGhq2L7CT5Q8FjuKbrsGY3hRFR1NNouJaEs1SfrntAbJ3UoP7fJutnuqT4RY6tzabAeRHBnSDyL",
  "key18": "f9G2VQfmCJ5jrbGrCfbZPWgh9NBLieLWEBzmdnsxqvoGeZrNzSQjxKPeKvjgJDGqMNRe4dBchEbAnRcqKWSEk8s",
  "key19": "4aQzFV31q2LNbrU743ZSmq784nAHyW3RUnYxfW2SPkarzp9DkhBg7JxQWgtdZyrDs62MDDPxf5ywV6E59LRtZbUt",
  "key20": "4fp6zPcMUM5EgdMS4VgSzwt9s5Yig611emDYgMTjdW8eRBKWgwsEz2J9bExorV7tMTJcdbVJXauTsiYUEDdS7pni",
  "key21": "4GxGWE1A8CUgKGU1NG1HkEAK7SKEc56FR8NhX6AsQcbZJSRmp8WUz4SaVuEMTAm6wo8s1yMK1Uikf5RYXrQzEE4K",
  "key22": "3tXXoGYgsfxMgi8ezLbcQDaNMxEHxgAXrFHorQoFBLf7XH3sYr9Z9iAshCMKYHrjdQ3QXFuC7iHoNzGU69nzNqkX",
  "key23": "3gyxfAF7mhdr41gDeqb1XwsRfQav764VXLyiRpu5tu9XYrmcYmtvvgVFiEr162noyVMKVmdLTR5iNak4CYGBMoKs",
  "key24": "3ZEaFZty5Ba1tYb6kbbxjNJAYjeosCHwginvphyv5tXUGA8xXxD79XHtVBPnpUYXr9AGFkndcQVy3sQnM66MxkFQ",
  "key25": "67L2bQwDVtyMcoev7S5M1CyMmAGoM84r2ptD4FHMGeDfbkP8vENpoeGnE7qMfzUE3pEEibRsmKDz5rdcN1y2tQMP",
  "key26": "5FKEGU2ufExEc6myMi2czjDH4cwQyny6S31yNTBduzMnr6Y9atQZNaGQDhmbmiASybuCEZF6w9BFPvJVWfgtTjcM",
  "key27": "ZAsPH8kqy6tEXzFzL1T6cfJZcSsf6VjgDsEcg8bHACNN4zdkigk2czLfALLEFmiutSrW62sbC3Df1JeHuRJopXd",
  "key28": "3ABVJzH6AKqbVQ9igbKCkJrzLE2fqKEQRJyaGj4oxbCfVnpD1ZZTxPPTSQ71jcCaNK7NE633m8NRfKP5vDhqW9ZF",
  "key29": "Sfv8VsSM9pfHpfy5on4wsMtf7uNck3wmdT2q1MZ8pnY2LCgyCmpGRqaP4u7RvW6sLdHnF7TxjwUqJygFeuWsA2U",
  "key30": "3Fxq9tua1sZm47n5dPJzsvvLZzULLvPpayzUn5U5JEMCThfdg96HQfpt8pc5X78zJ41v2UKSM4EeTVfMYedDoyMb",
  "key31": "5tE8GoFUbEtbHx7xa9a5FaJH5zwsH9Bqdk86kaBsoqNPgcHepEypYwuHwF1eugyqxbf7gx4d7VXEeCDKZ9JNHkez",
  "key32": "2wKUXTB8qpcmTaAC6tcbkHSZakung2SD4WxwHcd11JhysYAcz9mzVccFkdPoGPh8jHSjRAfYfqcqdQMFQtMyDG4C",
  "key33": "5WdhRsEycYCt15NKLq4RV7av8H32pioxJ1d5GQRhR4WHsakbqfTe2XbLQ9Kbfs94TjYhWnFbH28iRyYT5sv4vPKY",
  "key34": "4VoDN8AX3TmdkRRbtAoPHMcMuC9rnZTDeGs5JyVc5R3VJY5FRECRoUYifPVm5ZUaBxDnRc3nEWqeeFeu48MsfnH1",
  "key35": "5HMu6zsSyUe7z3efrvJBHw9e7fsXAjnMCcoFZDoram2JYUBHnS41CphXXH4MuJ85ff2G5UpR66vyiBwTRPernR5z",
  "key36": "24a8TRCEhVnHakLNoZfVqVjeXXy9vpESdWdLDffBZieQbMQqiuEzSAUyZNDhP9VVoVc1tGG14qp2TKe41ZYhSYCg",
  "key37": "pqNszBFv75H1Z2cGiD4D3PEsd3HeEw2128UDmZfCoBkLHRxomDdhxM1QSFDJtLGEMaxeRjEVQcLHd27K18HEdgh"
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
