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
    "3DcSgueGbGdAY14wiZYZKECrnpYzye2K22EBzqDJzFw2EHE3mYP7dx4yyuDAYeevLvazJxQFuixZjMiTC2ZpcfKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z8K32PpAYCveKTAgeHMepn3MRGbddm4yxvXd4nTSB6i13BHHwpY64DJLc3k9SgpxzA4CR1tWnygpN8g9z6ix7v2",
  "key1": "3XKjSQ3W3sf3b7MjNJPUYvsSearr2Sgh8LDVHWXoGuNg3TmZurvRBGxFdsshLJDP5TWiWP2MDxhqjPj5urBYVQsj",
  "key2": "4gLhrECUqraxLD4Ma2VpoqijTevRe6pqo5scKcTZWYNi3k59UyJvcmPnD8B1di9AstoCJbWZmCX9N6oRsSWvqe2W",
  "key3": "AXNNP9TuUuF9dRzF4SyF7oBpGGhZZXbapsTXgPsMQ3HoCUh4XzCaZfCk5rRwVybdwZyVskr8MTn6eZN3g6pxcvS",
  "key4": "zxmn2juxGUeZaJYMfPHdeNLdqnYM65HEj1vPyv8KNDMBqE9htQUBu6S71WVz4tB2TP3kqsZXJH5evToQg7nURMg",
  "key5": "4RV8GcNVdCw6t2EV9ENzgwtTunwzJ8zQJTmHUwRDmgnGhe48Eo9LKTgTi985kR6JQ1KirwPuktSyyQEJSdWHFd8J",
  "key6": "3oVcKRSKWjvHSDx9Znn7cv4hY2p97Hq1b3P9or3KW6eZofA41xmEEazERNB8ePKXQ2sbqxfLNcri5dLU5A5EZTyL",
  "key7": "4AToW4W5xToWoNbN69SUv8ACYXjSAyuSW75DhXyf9gK7hijcRzwprKBomMVujZjN5gPrUDhwtGdYMEXQzDLvGPiZ",
  "key8": "5nQmif5gmB8demCgLnR6AKZLdV8VvXdVRUu67F9FK6cDh1dWAYTCtW9G9iXTKk1vDhF5YBv3zcWhjCH9gDcGWHvS",
  "key9": "2Bd9zPd95XPirDiCgKnqSCbshARMVEF1i2eFNw9xkTfr4Zq7vswBPUSSjrDD6vF4vgiZFuUFFUbxb3GV5kupxcJp",
  "key10": "yK1qEKrP7h4um9Biox87GeDe5VtibxPwr45pdTR7SoTuLeZrn2EjXiiYYESbHKxBdQMPazysp9hyeUKgSQRWttT",
  "key11": "5kHz5Hudh5L9LmXt4QqqgE6FjTa7n56qeo9R6C3nqrR3yBv4fkpdCmrkuxEMh1Li6q4X4Q9Quf2N5V9eUqNBKWGT",
  "key12": "BjePyFwFK3Acs5s82XpPbtyQMMNah4LYbNSdtW1eDz7zGMFHUfm4Kp61B7QPWQPnDknaMwjUiXrn3MRWsxwjr87",
  "key13": "eYAPQ8V1syYqbG3gDZe8911FE8Gohs5N1YEM26qwyAtuVTZLYzrYewHUoc37kZVpQLM2aj6YgydHHTV6a3LRpJf",
  "key14": "5HP8tepmyLaN6mbsyuCwPnaCgivT4gVqBDr7sspCHRJ82P5vxSKxQCb28DDHNQWXPb95VqSAwZtoAbGZjM4oKeWE",
  "key15": "MGcdvC7JYPTwNLMWehmh78ABRfJ3wjkReo3X5bCM8TEeQsBhAA4ksSXgb2a1B494D4RTjpA5jmqVJPScwVw9HV6",
  "key16": "2qYbPvzyS2xJNAcqQBmYTY6AQYjMsWFK3A3jaFU1ictPm2vkd3vR3ywYeaPEeNF1QyNQ22FvUyJf1txQuHBoAGRQ",
  "key17": "5vQAyLKFo2o9tygCVAaBVm8J8r9iedBLvAEGdEgZywBu6PfVkrYWTVqqkE14ELvMsAk9VGUiDLv53gAa3VJq2vvZ",
  "key18": "47NHw45MntJTk1Xk12rCC4cACNRyseWhPeddRi653wJKrQdZ4yQfCv7Wwn5NEAoBdNb5GXGhfWhLZirzDfn3ak9C",
  "key19": "5bKARVjyadWy8Foq47cjWt2Hi18fWqDY9x4gCGBjzZPNVRsbFaA8GSDPLNVTuciCxFgQN4jg8pcsed6V17bkiLHN",
  "key20": "4BDwDSXa5vCGyjjv6GXsyNfucs9vA3SvwLLPWeSndVhb6UhXD4XmpeaukicvMsewXK43Q15hYb5ReavxEg3ERHeR",
  "key21": "51V2ZkTypkaeQ3xrXUojcqH5ygyguU44nnaEQT8Q12RFyjfpJzutsEqTfYe3xoQSPesUHRp9dJhRemFcByoYybAE",
  "key22": "3ybiGAiahVUBCrG9cTcpjESBAWw1jPSobf49GKGJCQE4AZBUzsJ86x8UZt9wE29sA9Y6wDxfMrEUuAPjC9MtaWEV",
  "key23": "6AGWL6V7cynukHjbgXRzA8hY9cznUTJ34vpNmwzzc8KzAnT6e2x5jHi9kwiZNZNgc7rMYT1YLpqDKrq1xtEm4tN",
  "key24": "Bi4ERacVRe2kYiiddkRue7QMxpQY15VKAsAH4XNvvGvyNm5gj8vkugotLWjMFBCtJQyKcLUCgpW49HvP6F3tfp7",
  "key25": "5Y67RuF1K8Y1JtpgHfwfTRdBaLTBLMjxNpgWF8KkMufdnYKXZhVxYnUVgLhu7bqPdU1LNxGCBmohvD2juvC28XE6",
  "key26": "3sLpDzvcocRiiRftwEFBNA62zFUWLa3DyQxKwRKfPrtzPfW1JNBqnTWEDe54TaTtoC3WKAfaVa2qXudkzu4PZc9",
  "key27": "4Scvby3VDoLw1bESP9wo1ZnvrSbi6ZAhZbiRESkS5hULnrg9i45EXEjoU8zK8LBjMS5tyjwFDdrqfWmzfyy9j8U8",
  "key28": "54j6JsHvc42SknFoV1P3rpb7GT6PNLNPwCJzKW6G1JuWxeqq7P9LjQfSMFS3fRfggYoz9znmjA2roC1LxNwbqgni"
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
