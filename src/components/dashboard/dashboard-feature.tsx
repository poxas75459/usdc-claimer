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
    "4uQ35QwKs4uDmdeotw7ZhaVHLF5tN2hk4G56HYe69VfGgHdCtyP7Rfib65gccnENTPMsg2feUu9ZrAtnXDsJ3buS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RWLQEZTJqPf934KizM2fX777cCoX7Vfykp9pVE2s62qA6fgGQDxDCfxnTnjJfc3YcTjVjfEJF8tfMj9jvf67uVg",
  "key1": "4P1CpQ3JLawVqtXPTEMPnJ4xxp75YDrkJ3tfhYNH6M3vitTT1tiXPuTjPy2hS64x8BKj5tu9SmqoxQD2RLS1VHRa",
  "key2": "2NAaUFGRVmLHMakSFHcq6rMpU8gj2qDhf7rhdjFiCAKwfCMA5PDkQQVT5cbmZ5pAWeKgFgcPNSzkBFGDmFgiiy72",
  "key3": "4wttcTJWN4VuS2DDkrbXYxQsoXby9QeQoYaZC5QYNJH6kETXp8M2pCWS3d9GFxf5K2tQMvVtqJcF3roTCQpjHMYc",
  "key4": "34zR9dzTLvZcUMSXrvzJJs2udPr9BrrK5EXV8FQAaLNds53BMRSsLHwJjjx3UVnppCB7e8SDnjKrjhYGJEShTBey",
  "key5": "4NXDikB7dTf46KthuKp6B4uQQU3asFW93dEZcy5bQZzmknWhZm181fFs8zpv5RtmfqX8Yky7NdLtKG36eqedoHdj",
  "key6": "3MqF57QsoksMbt1ZisErnas4CJKdz3Ee7G844izMjP4JDkovWGasapjdWZUYAkzFbDySbuqJEtDCf9VzpjvfFh1i",
  "key7": "37esQQx4Msy6oJvuYhfjZJAX8iz1K5B3ZE6q1aCwYHtZkrVfuuQSLcr56NG7doUiQyfRF5qiA2Ln68RKZXHWTqG6",
  "key8": "XQwKBxxDKY4y72Tn1rke5adeUZw7iLQpXLE6qE1MoKyq8FnJMhuArH4ge3JhZZvcSUyvzfYYwo3FMAhaxFmYWUu",
  "key9": "2HZYF3fX5hbWx16eHHzp9bUkEFQR2oroj44jgkcMYUtEMiBbjciRARCscymKwPTuJrbuZkEAfTz5WvdDpbiezzmH",
  "key10": "259LmNSiv9uCTatDU8y79EZJg3J4ynWJLcavLgrwrZPWjBM2KMJabx4XUNyAUGHgDfHq7fNyLZNZn5QdW4fz5cNJ",
  "key11": "37ZQpboLCmi9Z6BQ52F9cQb6Azri33ACBD9DTbHm4rYjVA3oQUm31kX8bwCY84q3hSLbQixdJWPadNQPCxRVQENL",
  "key12": "2EeH4bTB327vwsVNSqrX5FMxYv4uYpHxe632VdWN4UgtAmmzhGbiNV4WXATX7Vd33GRCju5KG3RDVM7P4xfUK3zS",
  "key13": "LxuxSMY3WQHjQQrX6orXQbDGTYyeivCKEvfn15fxkwesLHaSbUaDdavNL8mnAqK45rzkNLQvV7CnZWJPnXBek3K",
  "key14": "WbCGcNmrheUrERup9xXQuMnDweRumFTLUbQU4aubbCfUPBtas2QPeMTBrHCiStVLymfasXG8R4wqKte6nGM3GYC",
  "key15": "52xVNLVvdWE4T1KQtamdq2cj9Z3Jzzb8EcJRPP8mQ3aQxdinHbEDS547UzdAxbGzv5FsySYruEbBVsLvE9gpVWBr",
  "key16": "2WQgm7p9hXLokFhiavvWPqV3hhGDctEW7cG7orMJyxqXBk1mKTHiKVbRpjzRhGZMZCCexnW1aTpw3GfDjopcqwG2",
  "key17": "39o8fpVCwEJnuJe8FitjVSCEwWbAERvj3oJ5Ff1F7qnBaymbshoELzPwmVBknq5fHyrifTefsJS5s966o3v5w55g",
  "key18": "3VHncnn3ytWBdiYK6n21CDdta5UvopjW6tk9htBgjukkpX4k1fh1ZWK4HUZDnbJZmP6dvaXEzi5PgmJhnF5JpMCd",
  "key19": "qrf6xFwydT24bq6ShDWRBtgomM33A3UkAvCbeTx156uHcKPyagck9htA82dCUrcRfc8qu522189sxHBxvjfS3th",
  "key20": "4aD6Bk72FsHfTAh225H2hC65cqrL5Q9eYtAB9EjAnDwGk82rpk95Csg1nd6StdA3Upjx444HCDpVcM7jpxid6kG2",
  "key21": "4VUa7gHqKkPBt5QZ7Ta82Zc8GxT56m985n9sbhg7GefFVS3BX55gYzZwJ5eYUWaL9uvEhDeqrSbN5eoVSqeCr5Jb",
  "key22": "4rzEoqVE6JYQR9DLtifyHndZJZ8UqDsK8GYXeUBdKVuCE1QpQsRBJ3wBLSDc1ukeQAEHPspQHv3ePc7be2wK51JD",
  "key23": "5rVivkhRVAvm6GVpUwdw2zs4vUVQfSHN853UmLLizighxZ7rcDog87DPkpmcdRWVMbicjxL7toSPqpokvYESHVyr",
  "key24": "3vJHqFusnVFTtmKLRt7z9RjVE7EwfnowAHzZHFiju1G2C6VLeVSQtYK5HNAkDgaHf6TQnQ6uFA6WE2joQZWCihYR",
  "key25": "ci32Yx6sWfxTbqeC43EQWJKazGYmsW8RRqZwup2GqHL2tfY97zaqyegucx1kQraGKGX9AdfSgbs5VjTMXVt7RP8",
  "key26": "JCJNjLgsGATTfuqS9jr2u2TwcthzdKMcwdMPLTCwvPAMuqnKNAy3ZsAABEFpwB6e6QxEh9fNPk7JJ2jC94Dex3H",
  "key27": "2SHvB6qZz4C3sm3EziRzyihgQ6Rd7LrqMEaDdUx1u4wfAvZoomYWSj98gbh7EeyFQLuPnhJi5sVkANwT2g6mCxHD"
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
