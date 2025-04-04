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
    "Jr1av7qrfiA5Xzum7CH86WPbgBmACoSdNAsJqQRnBjR9C2E6C3NjWDPDay6HW6GkaT9jNeLnE4apvBEiArzKcyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tVtNukghgxSPk8MzQYnBAcC8iYEfMrDnTHVZaaV7i8FFPqrzmbi1HuGzeUvVd5mXoqP3bXJHo2jFz84CphoQnyB",
  "key1": "4WWmU6B8G3AtQGkDJmtrnU46GAVQZNWLsTsn1sXkBBUyoiR9wXNqrgi8qg2yaNc1VP9a7PSYR6v6XyVhQokhctFh",
  "key2": "3fhgSD9ZdQZi1cJUwHwFMwfRHregMiwJdUYuRddzznPhso9dkHE47jvX1NEWTzrMZWDpgap6ii76ZD7a4yuga1gC",
  "key3": "2ve7YAQcLHA5V9JZQibBVQLi9EvHVH5EsCRYQFokYiU3zTRdVMiAJSuY4MRx9krEbzdRY3XUjerdxCt7r71LrsdL",
  "key4": "UWe8CgbsDPMy3aoVC3aWcxZoBUDXrLvTDZ4dS9ysPW3mcT15agarxb7mCVdEAbTyi7eMq4GJ4BmwjdGZEwmYkuY",
  "key5": "4LJq5NotjsKcLpfbBU1a6giWd47Z1rurRy2GtUuG4TyGhex8ePuat3ZVavHZAsWpJ5pMpEtQWRGLbBJeCaDzbhj9",
  "key6": "215oRo9zvyNgsBZRRPkwhsJ5AVe9gcYMz5pHs4pNRxDjCVqvw2jokZCdcV4FbHyANcD5rhU29Wi2uHT7rGbgGPzp",
  "key7": "4wGoAU2v1oY4mXjQyZ7Uqi7B247kibqykoMD9G8YoznW72pdHPH4hbuqbXDtpEA2fNJ36jtTVpA46zmzn1BA8bs5",
  "key8": "2wkJzHs5By8JszoaNKg6mVG5nRBTP6tNdZcYp4gUQE8zh2KrLHGiDwGDyGAa5GZcdyAEnYMHamyQYshGPxEca8z5",
  "key9": "4TskocnnjhCxms5oBjyedR4GYbvip6jcLyj4QuApEdnSLmCJfB9o9aQ8mgmo84epBHmiSdTzsbqLSTasqhxzr7Dk",
  "key10": "5EKZEvxh5MPiBGU9ebj6cQkmAicSQGJ54Ue466S6USAUgUvuYVn3NNoHQgrydAGPsgjgtAXPwZnduC5KKMrHC282",
  "key11": "61bmVAyohs2ps5RhYYqDavnUNYmPTetvHVPur24f68AJbJuaKZK72sTkWtGsqaQ7nG3chcPzauELRe1HtwBxTiaE",
  "key12": "3MhGyBqsv6tCpe4UQz3aVNWNzQG5Lp9QR2w6jFHg98k8e43tbRBb6XSZQEpbXpBs4g6HqY9iCNtRqCg2LqdQ1W2e",
  "key13": "547uhjguCR4UmL5kSpJoQ9wfKY7zkBCexzr4cTRGf1uLWUW3T1caMmFdf4MQbXiFtiGMRayhu2xX8JdZtYvJdnzF",
  "key14": "4pbq2G7GpStMXejknZ9a8YyZxhJudv1QsXn8EH3TVx8fqWQpmhH8T99WuK8A321jWr7U5U7tsyC4TkgnJDtp9bmt",
  "key15": "5hUfcUzaxaJNetz2cr52Fya8V11ZBqhCtymyuDXFi2XPpMRqS8aCqbgQno8t7LE29fmC5sqCzPKZYCPMSUQh4Gyx",
  "key16": "2KwZQYq9SstHKEeCc7cPT5KPJgGY9XhJEHiPz8jo7JKx1LtobAAhwNcLUaUNdfwgfWGwA8XGfbjx5chXtaKU7612",
  "key17": "RYpRnBoVHTTZoQWCDXVZqd5nSSwQnaFDW3JQgyaPGbWAycsX63MF35NxQf9bvEVjfWJWh9hUeRDBRyNcznyQnJZ",
  "key18": "mVsZnns8YZfgg3RV3pKnD8ufG3fP1LaXozHR5cvKBpVKx6zNt3jnfvK3dcD8whA2FCLAtrtD2BRrxb3t7mtqKVt",
  "key19": "4ZBeEnGfFf1SBTYBnSnrbsFVR9LD5PCxoXjCSDwBcxMZCCXt1yRwWBpkVcnAjhusVp3TeuEQAp4ZkcS9PoTQwZHw",
  "key20": "2naJLGjrr9JxNoFfHx9ALnjHAGEUBYAoMj8eTDiaXV5nLWmFUSedyAcMAaCNN8po8zJGg562dwLx8qdWcX4APD3b",
  "key21": "5NaBZq7wYb7HnYK8dHCiHU5uHa4jrqLm2c3XgeEM7NRdksXmJ44KTpaUrbVXwgCdf3BCMuXz2bD8dAwgGkLroVii",
  "key22": "48acAXEmjPt4XW77s1eqgb9DULw5iixnec2qRcPHL1XKUcNFjJnz5P1qLGjuwzv22eAqnmLExCCon2kpFbLcpkGQ",
  "key23": "3Jodt8Z3mktvMhHWahgovnWHAe3jXXms6Z7YPB8Fw43T11M8QS5DhufQozzFsCSkA5kvRAfZYcXqWL9SZWtrewU2",
  "key24": "2oviqW7FF1V8AQUfUvG8CBFvRc4X9nqBonDNG363RD35YVmJP1yNotd3kxNhbSMWda1dcAL4EBg5ogRDfsqSJRnn",
  "key25": "4biMBFwtVGEZ6F5doU8qBUowLo68BmJuvRkHjapXrR7UofJSpZPULtseFGoTZRDqFYeVDsM4pdr55zNw2yrbcCcq",
  "key26": "4kdjhnQh3uR8UdhLCFQiGWCqYBBs1BWrxZupE8dcWCZJuxDLv9suAgEyrzCJPWu8eKcpPUrxc989Wzrc6Cwp4eTk",
  "key27": "3G5L77MBrAR6DgU68T74MYpCxmd6SsUHBspVDNMQdkEQMSdWTyPgnw1MDdWqViFSjHxM4AN2eqBbcDxHiXn1mici",
  "key28": "3Po55jzQdTYMaBovuqXnge14etjHvJrZKzQD9XRL9LEjUjfwjXfPyHAAhi37jdvXshPXPKggEg1JicxpvBVhsTPa",
  "key29": "3Uyhof6E3R9siMRk6DXj9ZQ2S16PYqpUp56dzzQTCh8V7YxAeyrD6BG3rVhZqR9QA9jCUvNrvbBhm1BR4qyVSiTk",
  "key30": "53grQ28jeuwZ61XuUfjCijWmHd96j89LvaFF4tpkSdGVEpip4SAMdf2Eu3Qbrbuo1aLGWgckXgoAcuLeWz5XGnmf",
  "key31": "4mud3o14WFqy3BngKAPoPsN1k9FmE1oSevmihBMcBJbyYRoCo2HojM5PN2ch9GnbMGAQii8zwCD57m6BxBbXvbvL",
  "key32": "KQnSo9Sn6TmXcoiYwfLKHAvmCLAvCMugRkzChw772n25yn12PMiuQBs2DzktKvYHEBR7dpx8BDmqkbwsXzP8x9n",
  "key33": "YwKLJ5wtaP9QDYhLaekJhg5FhbR7bCgvuN6JfA5L2H138ePqXKSK3FqXFMjfgCNg4vaErnn9vA9DjAW7oMpxfmx",
  "key34": "3XykXihYnEtaewfYknZYhvTQ8VVoM24NQaF3nma4cXbkmuwvZE7e8JCTJkr6BMPwPTrYb1c2V2XwS1dYVcqEHktT"
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
