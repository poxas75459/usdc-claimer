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
    "2WpNdyM1vqDAaDVrZ6R2w71BGsYrKvPzzZNQG7Wxv1BMz3RdjcDDCgAPEzCCeiJ9HyWTbdQk7Vf2noQp9ejSrVBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39sEyK6eosGQNquoNoYZzvNZ2edNFBfKwgcWYMmC13czr4q4VG9mHdXi9Hf7xr7CTfiaGAZZtm4Vh4rRTBg2s9U3",
  "key1": "5bqdUkLkQWhRTpXgAvroEPNV6NMWq1PNYXVJz3hZdHgu4vsixvsxec8U4aCok8KkZMC7XtKX7Xm2skCG5NPQWMhs",
  "key2": "4pnEq3tvJEAHbH75mDt7JgubrLGAoN3mTseRpaxbutkC6MsfGQFw2GfVoFJ4U8YKwTsZ5qsF5bNLH9h3JMG3FhmY",
  "key3": "Em5qVbJ2xGgA1QRT2whUAfGNgbe9AHYjAnUMUqPUakv8xBk13UVrR3tHEgxJyYfciALk12xPBQgred6qHsznSQj",
  "key4": "4tSfai2fdoGiRuBWBWHRpdyBzDbVqgd6aXWSV4tD9TBfAMZLokRfvuvGxX1jifBvchxjS4EBG6ULDyLwSLt9ixcm",
  "key5": "Zq3uj3P61MTh1XVn6gmPW51TZh1MYHPhG3JV7TQsDgG8e1d6PrvWK2H3zMhQ52qGpQqUDBRbGUMnMXcd9hiT9SA",
  "key6": "VAbQ6ynKxUyL1VVekX6ztmRBsLY1oJfVVPC1fZE6yXUvrC1vCyvyWE2T72LTtSWX3qsjZtUP9i3cLiEiXX9BrTf",
  "key7": "2VDUTde2qjrbUX3TEjgQN6pudF4nqjrkjUsp3HeBUop6Fwxt5J9pjnJbJLHgQ55BwV81Ezk5yo9tPouhkuAkVi21",
  "key8": "278Le7c8FiABDHKv789oYBigrb9N78jNmu2CJ25qVwz7U9S7kuJ82rdtytWAH47rhmw3SsoxbcLeqpd8uoH1Y31X",
  "key9": "4v8xJVSyxPhptQ4chTV1ZbjeNyZBVJovoLbegC9oe5br4Pf1kKtvkLD9mFB1mbFUgoiDaSHaWCTW8qPB36usiw4k",
  "key10": "41No4ozeG82xPTgPhMf29DrWbCW6uujuUzEobN66UZgNWhCCKEAHh4cFbJsjmdgnxuLRgiseTVvtm9iDWDiCjwAE",
  "key11": "3ResfBV3ZnvZpQ8o7cqRwhhXEUvXdUkEDpaXnBHypjSyhVeYbRAMAuGB76ZkogB2kcqPADPmTJK1KxXQgr6JUoxe",
  "key12": "Ps83tYniidQG9BsgyA9nEvdv8ZgMbJ7dDLWb1eTpAkhp7fGivGj9ZrWTzS6HPD66mu3zMKaJhedYDXHUafBNd8o",
  "key13": "39SvSBNw1n1b1DMJcjY9tZgK2RSmgWKnHP3UPUZrrVZA7GHtzqAkJqH1qjq7wkfkzbiY2KVRuNa9YhwhnZToFCbZ",
  "key14": "3AaSAPYyvDrkJWgMGUAW9t4be9j3BNpE3Awbj5k5UZV8nBsPq6Py9ouSDWMCebiPT53CR1qeDfPtuuNAMhxKAeCA",
  "key15": "25S3K1trxW8HcCAxERZ1rUH2PMSHnFpAtvfMQnrrg3qbnjnhgPorhAtw76wDtKS5XVPCyisKTj5rhmSEP742BxJ3",
  "key16": "4ChWRyMheHbKSxHCEZw9DNWx4mQ4j3rep5a4pNrHmSFASK1noY2uTARFDMfns3A8a3HfnXgph2d293g7ZKc1MHit",
  "key17": "55C4tqiQaPrKHr6RC7BDqUa6UKbvWifd89Qcfz5tj8VnAJ5AUfYxXsfwmppD3L6aH514ni1mMtWTktfzAxSszEyM",
  "key18": "2EaY1jpbnwNMDjtt3chTauJUjaQGCKEpU67V1NQwaACYMdEQxx6wgRuK2X2KeF6fe46k2QV1oZP679Wddcd5KpN7",
  "key19": "3odDk684nQRYR8VBmAHkeU5j4KmGmZiECvpJ1x8JUWAUqFAN9fn6rY9B8zt6z6Hy5yiwFRtykeaQyVZYQM9idKFh",
  "key20": "5qAX24Nw5gonpQFTRTRLDakbN6ob5p5LwabAYEuXHB3vLJhDTTjYjAXvXgxpTMZmdiV4BqBWKeG2j3Wg1EoJSULe",
  "key21": "gEycja6e6XmwVhxkHiUKRzRAfQ2JKoC9mSoFEqwAdCU9CaFadgBbSEe6CFTRE1kHwKiVa7QDFYwNqRWxij1MR14",
  "key22": "xjXUQaMGarFsKMytwJC9rEhMouwv23P3QL7iF8cWs8XY9RoeVsWP5FJszx6FJpwXF5DvcjZ1jSZNHQPemrSGPw2",
  "key23": "5MnW8qmvznVCU5bVEepWb6DYovGzwZqpNdQ6KvGqTd8fA2n4ggWaW9FgxUJWKVYW4e4AnquyGwYqnS2Uxc5fqSrT",
  "key24": "2aDiHgmyN66DEGYWSQ8rPzLsewPpn8jPUXtUa8bQxJheQcoDud4xcMHZFk3SkEAKFncVv5PSp4nHCdTyM9YKvxRo",
  "key25": "m5EBD8H2Yhk6BjBcrZq9BhhEDEkUNLEnjampkVNeXaLxRzNRRaiawBn8bj4HYzyiURe1P9dzUEPqrwK43hHgv5w",
  "key26": "4Uh8g4CrKTyXu5zJwRuwmCzfz2JY4qa5L2o6C33YbkYUYP24ypRgBSKQUuvrGUq5DKkMncc8v7tRjGf7hrPQkGSy",
  "key27": "4dnpMXfgDMurwVAHyZ6S8ExhdxNe2DvU8PxJorRZprENXw9R8yaxdU7LLTAw3QRCvu4mhZ5nwd6Ae5sLAmrPNYEx",
  "key28": "3BJ7ZeTB4PQz6866cTLewqd8qix9nnzE8YxZKQkk4yQcvynDf1HQiw4SM6xnxDJ4hywgg3eTs6JLMP2tDGRrkWS6",
  "key29": "2wk3LYqEgGUtFQFLRqgyH27vC5ve76osd2U5c66Cq6CHYCWAiMaUhsAKUohTnnSHyseBP2navezb3n5NtRmVces3",
  "key30": "2dXRWumF9UJMAyqVfJyFPqKvJsWfJiDiztngisrGHF7cznvwhPBZJJaq2HJTiaztbPsFhvZygpmVjT5cKSrBM3eg",
  "key31": "5YqP9rY9dsm1JrkrWnM3uQibHjUtytmmgPoDWpZgsnyQuHZ67ZH5Ank5nCpSRS98hRgrkictMVQGfLe6CaVcWHci",
  "key32": "5V2c8sro3hZKgZ8M5H8YdQPDEon7CAdJYsuUNt7P2iZwCWPhej7whpTgnwiR6MQotGuzuCH31ap3p7MxcW5v4zpc",
  "key33": "2yz8jQyyFKtkmq3Vaz7uVcQPJRQS1TxLddLY2cRDM1ang3cZ1SUq8dNrPoQA3EGQ4gAV1o9qdQbnQGtELSo9of9B",
  "key34": "5gzBoxyk3pDa7Y1T36dCAf3ZiTe5wRhudN2BwdguQNZiExnNpAZ6LknFJBCTzj4VLX4DReV6mZJu1Bu9cQMt6i7h",
  "key35": "5Bz1tefS9g3rXvX8h6gQTuiNmjQADfAGVYVomnBvcMyBU7YJfZFsovbmyJFNcP4UMGWnWGdBh9JcN5EBWJ68gMjv"
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
