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
    "53VbRwKzdbpPYzsWcqCiMP2HXcPMCFywMH4s3rQAdidNUQXfF3zRcY92zXzjJrXu7xGvyP8JveCXSZAVyGRMwSGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jLd9hpCNxPYZYfFJf2v7pmNcvTZj1L6dYKgFdvrau5fBdEh8poxUTR5XUyuwi7QavCvZWBdpC2393dk4qZbByoJ",
  "key1": "4g4N5TaFdhWRJcBrEN8eBSDSPy24y6QJuvMwL4qNBY46SkV5tf1nzhmvNyxt6YzxJxASYL89uUXrm54iWbqwLC8T",
  "key2": "4bjV4SmWFXp7wnxuZHgGjuAP9pWjaoaKNQcoGFBsiscuzUkPDc5tc4X9mZ1cViFhWfjif58qfXuAqMwp6k5fkRNm",
  "key3": "XJ444hZnMuYJutq1cyJo3CQwPiQXikXq4JyFY2tbVY6jSpHdti28gDHZgrwg5L6S1sEJteWmFCtW6sVDeUZhJLi",
  "key4": "TBhbKhUkcohSSGp19HL2XixJtyPnLmqhRdhgRUJhvbXeXBZaQE9sfcJYPyUpquwW2bhXp4S3JzZCQEWJ1jufnNL",
  "key5": "3Xz3RpKFvz4yrAtqVUKi2rVfL1NGvipxS8nNifN8rDRg1aaipUhvUiJLmLMSF5G7hLmAAxe7k3gVJ8Z5tcrddD9z",
  "key6": "2chg8S6a2xKthGLbN7SnwniTwdTAkuJ9fY7UaDQNpAGi6GmLdoJ5E12rBR1pAeuQUU35i5QLQkqNqLjCWkFSP4rS",
  "key7": "3k1CGuNnh3LVrjD2SiRWspAZxMZnJDFCZjL3y8MiufCUFtXCejixzC4gJfBwNXxygDGLsKPeth5LQTZc3hr9RiXr",
  "key8": "3uP2rycTyy7JW8Ws6CzSTRFJNqCGKmbWA6HuvR9VSpU1bJWNGBmqxEvxABxMNjyMweRPR8w9VC6vZHXxHFg781dG",
  "key9": "53kiphsKxHcp1Wn9AAvMoCJUTXcLpJBBEhu3TN1wsh2Q27yHGS26wcTYpyELe93ewpNniQLV2KnkXLTJxPSauRVt",
  "key10": "Xw4RA4L1wENycf7kRNxZye6cLNGwUwia5sC3GJHRMm1jvSf2qaJApCb6GYjqv9cz79nwsjnXuw8VcztQmFWKfYy",
  "key11": "5TCU34hDz3xC1i4YLj25wd8ybiV8hu1TduqeWPvr723smu2uwr6MeL23Hz1JLjLqK9HFcWKCLpq94pjecDTiQaJ3",
  "key12": "45wxCXAoTk1tnRRRiJbgHFxxee5Un9TQEJgnMPRHirMYyV51mDy5jLa4gnRSJ6xrA4oVq5SX6uT2kr5b8o4fNf4Y",
  "key13": "4uDZkCk5D975jWFc35x7nZmcso9ZhYpa8BjUsGNV2B4kYgxHDmDKNsQcrTP1WFHKzvy2J2tGtdKXDkX8WUjJQ9fb",
  "key14": "2vcUAVwNGt2by1oyU1CrK8hCUuXD2fcJRdkCTaBakcnkpR1w9NYCRQ7CDfHR5CVJdkHfA5cNGoYpmtPM7axM3vP",
  "key15": "5zW2FM2RUFdYhiPTYwbP54vx58G9TTJYjWXpDzeDU4mM7zyzjguX7td7FWhSKk8rRt5Eh6VBBYJCJcAocJccgxdp",
  "key16": "nuVmvrq8D2KXS2qoRKdEzDeP9dCi7w25L51vmwaCAFUEsn3XT3dBpcRUYqje2fDgPePHTZFS99EitfVU9mFPeZU",
  "key17": "5pfrsUMQ897m9tWiDpwQzNL12To1M7fZaDHvWYbq7sV5shmMHnp1S4eWb9i93EUyBNRePmefN8ix8SdZCWDSbcmH",
  "key18": "2V5ejXAQVdW6exh5kyM5MXt1bt92BEzBPwqLwo4ZL7FWQtXA2j4Wr9SCqbUYKJusNjTtSYgNHk96LLrTswBoXGKj",
  "key19": "ZjPMx1x2hPG46S4rkN81NwgCiaugyhonREUYY24NUGT6PdVBNAKWgMDJhmkr3wur3QfyybXS7JCtN6KUCV3WRf3",
  "key20": "QtwDHcFx7x3SorJj47b6Epq464adutgct48aWZMjvpRPu4dpG3YJMHbBVXXGNTWqp665rk4UAmywdu4BHrhE7DY",
  "key21": "2YvbHTgWjW5ynpsVtBpYWGMciRyhmLtCisRVUfSaUTwNQDi3sskg8k1E3nDfTTxMVXjbDsPwsX18VDjL6eTaP7Q2",
  "key22": "ChKo5MRbTv2dispvpzD1XZ3mib9AZZMzuNobQD9mAdymATybHLSz6kW5icP2BNLJZdgmxfk31Va3jtLqUvG5bRm",
  "key23": "5gA66kJog1dgaTRbqujWg9R4oXcmwPvVMmz7xQAkgAHSz6fT1A7FRUjZmwKAWfHVHnHZsev7Xmpq4cajgXqdxJmd",
  "key24": "4Q5KSSEwoDPuyELiENm1zgZEPGwstwcPkK4wKNJEqKkYEXntvGyKgyuK41eptaN95AMm4k47MCJvrxcaAZhXRs8v",
  "key25": "sphEj5FNfSYJPgWYX4B6pg7YeiEwfxojmQCnkZeHT7DgA2nByKccXSBARXtiLHGgwD2evwnLFDViCCAmu3WHdm4",
  "key26": "5YUWduKAe7U3rcwfLUv8BkYEEM3EpG5QwRk1LfyMmk3m3mBk1YSAoCrJgpMd1Ek8db4oN5ww4Ey62gYoxTBCp5g6",
  "key27": "i77vEF6sgkcSCg9dEnGrVrL9vpuk5kLpQuKVTooJp51mGSnM2hsBiUYPAg4WbfsWvLNo8XAJmsoNvtV63Xtycb8",
  "key28": "4i8Nc7QpQ8JVWny2FYCtivy84pYdJNTKx7JDEeajoXeqM2nsv6oF1C5H4D8Ei9E6JCEa8L2KWeA4ehyWJeLAyyuV",
  "key29": "3T2pDfccm397dHfdHPWtM4ViZbUQ8EHxBV3zfwzrrt3y8UhyBkGUrLtckwKCYVFCKWJKY715qKSvcDHgSu5WsUsi",
  "key30": "25YmJDKxYbBMBXSRiW6v4Mre4eteDHeuyY4MnbqxxthFCL4qVZ9wGKj5QnRC9DnmKZPjfC571VgNpKH3xu1PQgUd"
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
