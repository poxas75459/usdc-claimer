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
    "4KxXg6Qjo6D56VqhKvjjq7JFkPoWkqGKvngBQLZPJFuJfmzJSJ1ghz48c6hMYQ9wGMfYUckBE6De8BaqGWgvF6Gv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ZBUBzutCSztHkMAHKDpgE2Wafw5tQcr5W6KA8tAYkkMYj2AoSMSXjJBNWHgfyBAeJdAPxUMvc3LkvbXDdJArCt",
  "key1": "4eAkPjf3sXBzR1GcbawBHfWchdG528uZpEypWYRVetiRdoSmSueaYtptSundiAoDLgWioPnkyw8ThF6cM4xcMqHA",
  "key2": "3CwxfZQMDMpDWXU2DtGxJdEnUuXqpaEjxsgSD6MKaj5cBarxnzmmj8Cxg5WxUofW8xGALa2RA3FHpqV9FcaiJGTB",
  "key3": "2Z1sE9Wa19B8VMeR6pEDZtnrvybT2iEoZES7L4av9Wkxy36SqxumUqFcT3qsJiTdRDpiNmk9Ct1JHmXEszbekEVF",
  "key4": "3Ls3e8maUKM25j5CtHdL2uTtH8ET3QTmDxrJwSRz4sWenJ8vaYa7jk922MXri433igRwYT8H5Yrknv3nDQA3xTXr",
  "key5": "3riXabizcTtpbVw75w3jvKuWyUvUmXxiDHMCj9mC2uQF3BPY6Ar6J2Vkg8j9xctqMLSKqaMxnQW4LVQ1Q3cDRaUm",
  "key6": "5r4MebdZoupzjpjKAmAPTUTuXvRozX4L1xbMJw9tccZH4LnsbuL6BnpavfWWvUEv1JLCQ6amkqhKqnWErJK8iQvF",
  "key7": "43sn1es1G7HvEtfCmExnQxAzN2UwxDJ5rmUcmHxKVFqcKbgcBPg49FtbWRDVTsMA3WA33VCC7YpM49SmgXCEcpj7",
  "key8": "41w7N464XhR1kaqpa1cqXtSunCKSpubSTDqHW9s5Jgj81UC33EjGPp4UxJTm1tgdoBTrj4vYCmLNXc2aBmeuU76c",
  "key9": "5E2rXTLkFrsLfjqBs8oy9XpuQDNpTs89zckubU4YiMLXXwsu6qJo14ivDx18qsBYm9U1XZL2Xa34hFQcf2kuAVZu",
  "key10": "3H4sFXnVaN4S1BeKPRZTZuBmpg8pqU6rm7GKWFmX5vZwDktpaetQGzCJqLFoHkJwG5KGyu77HbCgj35rQeo3PTcG",
  "key11": "2JmmGtYXdk2J119HKmbXcTgy3MkU4AzUCY1npFHXdrg6X2KfWEyYXbzUEgSP5j1DKWd8cGTvHrqdSCb2mLFgirD5",
  "key12": "5bSKm1FDGtbz8e1rikfHPzrJGv2QS9E3FKz169m6K5bzZr74jNuHDQxUpudMSGACcKrFv1v7GAyGE8g78V7YHWkJ",
  "key13": "2avRHkdKhTgwfiur9ZkicH1C5ZKJF2PcmmUE7GyvT45b34aMwgKM4G8XtXLVRFxMcoGZ3jMMugNXhuKS6iborX6d",
  "key14": "WDBqgkhhkRmVxiy1ANNN2s764oWMmaWTiudX3xuPtvBHFvE7rETWGKEhqjpCpPDEyvuDGkxAWaS6yUb3igyZ6AS",
  "key15": "2VequGZuuGemHCgFVh7wvAearuXUjJcjn2vwajLM86Pp8jVLMaJjkn4ZTQFebAGTBStcThDmxci3WcdmX41g75z8",
  "key16": "2aV9kiKivbVuyznWccGXNo4G55pMenWvkasqknx6ZLvLFDP36qXk67M1GqqqqMBssVVqN3A47Byzz59afZF7kjxr",
  "key17": "4mzqq98uo8FLMnAHbBLKRa17ascyBfBUdYec18D9QykLhCQd7Kj8cXQZ92QYDArV6qruH2esCMxkHtb4pwsJBwyy",
  "key18": "gHAPrqsHTbn4ejv1wBHX5v5NrRzozAu8sGdkSwTLo5JCBRAAvqtAFT63kHoY622ZFxNdDJwEBK8GFwQa9qP2Wg8",
  "key19": "4j29kyJoEUmcrB1C49cdhTf7vvDJNsVjk7qYiuhaXNiq1fs1qKLbVL43h1KGYodr6BiCeUhCE6e2yGy5rtiSGxnw",
  "key20": "2R4Mvva5sjMBUCRfv8uwCSursqgNyNztm5nVQFTMJL5wA756FDSpKnBUFgNt8fCQCHDTw5JdcGv6FrpUHoTzVVN2",
  "key21": "2aBJzMzvqC7rrU3RCFL1suCLx7ZLRNccV5VedfxMoY8zuPECBV4KByw96GE6EFA46XTPa2zhkov75KUP1WokA9bG",
  "key22": "rDiFcmhP5ju5yK5DVMc9Yu34xGf2NtKa5KztNdTShbia6ZtEdWYLUCCxgtrfadTCAFnWhGgu8V8bCwj3h8s1fCd",
  "key23": "5vyivwibt1sSM44zkTRpVAMXmhRP566urnfUMj4FRXfg9hk6DWq4u6mp1b91M1yTGL7sg1o7V4qPCQr6kcWEDK7S",
  "key24": "3K887ujNP2SMLLRqvWXPPJQiyLN9NhFvG8v5M59tQdAgF7J4rjQ6dx1vpJbL5RzFCvYExAJ8QSnNZXcDMHRrWxD",
  "key25": "26eZnGcGo46uhBAGSMQRC6AGYNzfr1PZQ6DdNEikTzTPpHUdvtKhj9tAimJAVR28D6Uri3yKDXrkpjXy2CvnNvai"
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
