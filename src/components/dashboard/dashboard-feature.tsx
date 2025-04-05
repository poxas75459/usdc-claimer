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
    "5hmvPxMCoUK9UzZD6q7CVTy6FaTosSFyMmxA9xxmrtrKDGt5cPrHyUkKuQ1tLjToZpdtHoYGLZzxoCkG7sodGtXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43h3Hd8vttJASdewWSdURR7n5Sf4c44Zvz3JCFi454K5krcEQoHXXjEe1SacjTzMrMH4AxxcJeX3jW2TANE8uZ7H",
  "key1": "46pZt3XZLfYAEVfxvK4L2Tgu3bAitwDKAcPpc7DMSZE1457jF4KsfLndhfLq8U8t3toQfVk35Na4UYqKV4mg3orE",
  "key2": "2S5yoFKeWdctoeX8GmJyV7frEmPcE3fhR6BF482xuV9k54WcYEFDEZFSFQ14gizhB9L6QTY3cJR6YScQ8Gceb9UX",
  "key3": "3ej2pZPbFtFr4yekoESxSU3vsbpQuU7wrbuPPDTdinCYEY75Bn3ZYyPmn6Vk3DVsLDhuLjDiiAH2b3RtoD7DGejZ",
  "key4": "LmhjhpMxaGJcwxyXtct6ERVcSNyf4Mk9y68bn4uxajpSQ2jRS9VH7LX98DFqHgXEzExPipNSVAiaqv7Sy3gFhxo",
  "key5": "32ZjSrFiUWdnzhibVf28rCM5fPy1oGjk2fsQr5J9rgRRJQoKNkBSziyX5NHNTmvbMRdnYgwsyGnnFHs5JA5wAeuK",
  "key6": "4HEz1cLHKcRMGki1C9E12Uz19SNmEfaRZAj9EmYCHRVTWCgiKV3fCcZo5hXWSe6BCBBuEnxFpsmM4cpYe1ucD72K",
  "key7": "2npSXCc7utucZ1fPAcrNSanu6NNkXkLTtv2pKMKp3fwmmu3tny6n3KDpvfiLCwBMUe889CbjDWxKNchg1q9YCtsf",
  "key8": "3oPksWt113wFWSZb39aLmKwYLA6huNohu1ziM4qEKaq42Rr3Uk8Z3gGdQUhLtRvgyhBPgSNfdq8gD1hXK17LQro",
  "key9": "5HuyDfzpyWpQC3t3tKqah7XoazHhe2MXG9By1re6XDEZMkXeNHcKMXsGLqfSWffw5DDceuc5cWFMQb4zUfPyYJeU",
  "key10": "3XDvyzDZz71f8JcYXkftMsbngWfLaAuPtjDMJrS1KVMjraSe47XfvrJdDXCYcH7hwHA7XpA1RLfSdXym6URNmnnA",
  "key11": "4BCwUG6Fjs6M3HTxGzLnXuwsaMSn5e5QQvRTu7GSW9TKUbYY65oW4UQA4AkBuJUn1eCuLqvhpT4EPGoduus2oQCQ",
  "key12": "F4jvLX3FHzgoy88YKaq1xsNSTCRWd7Nr4PFsXd8EB9hTB8vrpUydcD3Up6sUhDm5vET8F1Gtt7LsuVEPhK4TYWh",
  "key13": "3hodxPsHtee3GgjvSS1akxpXLD2yX84bfdSr9Nc5M9tXB6aMjfHMHpTE8FBUu8QAeMCz8Vr7QuQkdnFj4zKDHtJB",
  "key14": "3o3dm44SkWeN8cgMnZjeWWrdpQMUMvn3LM7nxWWVkyCXpk5ic9HrwjnACQh9REzEvUhAKQCGpibAQ9TVMKKAGEoF",
  "key15": "2b4ufmYdCeBr8kdb2ZsMacgBxtp7DZJWJkUdncupwpozNct1GJp995DdVKhzZhLExBozB1Q9vzQsx5mLEBGy5GqT",
  "key16": "65rhmRr2R957xzH6Enjj3bVqc4ZCgQgxUpSBPKHtXKe8EvHGkXDL4iGzV8yfk481Q7xtA5ga2EN54HB6qAkLjdRm",
  "key17": "55i1NhkCWrC4zBk5EV17Z8XZCivwoCycBzd7MSFaja2MCThUrSyS8Hayto7GV826CtfsYNSMAE21k21QHtMFN5Sk",
  "key18": "fsm5Z8NUFP7KVPjtVdSY3NEV4eLugxZ2kjxDsmmFWWyLTssykder9Q2fiAvkUirHZ4J9ZbkKoptUKFARTTgjAHW",
  "key19": "3gMqr1khFw2ks58rzASGkvgPeUbbuktyhPewzUBaAtjC6g4bbcvzcs7ZXAKq6sHynFWyHDedYePF1vT642xfMBKK",
  "key20": "4Ae91G6deqsF5NwJZhnbQ9W9xLqmooE2xULPS5BrFk8bQapjip73Kp8vXTJtj4Vh5ciKWWARLhEz7Wj628zzbtRc",
  "key21": "2SHvSrpGSYgBEEK1Whjdb4oJm15YrNYPXeJcF3deRDuTXFkpE7w8qWcyGQvUidcifLfe85HWTU3JNdy4FaEroZGT",
  "key22": "3uByjrXjQBn3KFKGKkS9jryxRqAhSoBgyg6mfA6Wuebmxtgn6Ve7YRGcFLbCCjn8ULHTQdM1ZNUifX9oSrngHsEg",
  "key23": "2z9RGoJHwgvv8B9jibFarQAivc5rGvxMrM51vhV4AT7z49CYEM77o3jNcshUCPDandyrHrFXf7cVHiKjtcJPt6LY",
  "key24": "aZhoBP3qXKTZtyGTrqw3xAMGiBUCsdFQio8qYpzh8UhoShfzgJm659tDWSb3ahh14guPNdxG1A5QBLcTM4vbYZd",
  "key25": "kWjcP5WrEASP1KvxNs9W2ZkvR113AdfpKXNVYG5KfQSdXCEwnYNPbjbW1gFWtBCGNkZr59ym7Eo6omntfALccjY",
  "key26": "3VScRAVjS4kmYKp7otZAFS9DuZ47nhHBcjcs8zPTsszdQvkstqrg3wLSMyunn6zT1KDySRBVLEk3hTBjnJgJVkoA",
  "key27": "5WzyrNmkjzuiK55PcP3JgTXGnDRpu39FVW9fVbwk1nTP2NVcGsgE1CtwCaNrCF4iR2eb3ts6ZwZKz3ozoscLN4CC"
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
