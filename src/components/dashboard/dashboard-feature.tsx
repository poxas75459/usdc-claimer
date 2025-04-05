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
    "NescPchpcUayF3WAj3Hy3293aGdxks1UAVJZLeBas7afuBRMFtxnA8uQtQtyCt6rSqqPmYHrdiypHaR6jFBCAZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jerq7wT1DpC7wMZrLDuyh9rdcgHvyV1xwwsx1eDeqUYWTk7qV1aHUyDeRHE5uZWNwxTnjcqGE54sL7XECgpb4q6",
  "key1": "66ZAXyBch56D87ArsrVYXnFJd2GAY7YZsZpeMujwayGmHZxrAoBYpDmdVCEeuHNvwjcHGXnuURY5SFZqGiXJ25g6",
  "key2": "2uNjaY9CWrkm2dVf1h5FCYSWtyYT59p2DKoWz97Sz6J3avHeYbFAhQcagMeTmTF1zEDAFHjdBaeqCkncVE7FoYfb",
  "key3": "4cgCVpdcM8F5orgwwc9JHboa1ENfoTwGd3oMnSmc6om5osbPXrurdm5ekFsyiAYLPcbzCrCXijWi6jHvLEsHtGtA",
  "key4": "Nq5E8RChCV4YeEfFENb2eDbcxDwzbrSNQQ92eZfwdRiccvN4L7JbnUEXtKhAFpaJVmHsKWnz2HA7b7zBspGv562",
  "key5": "244aERopmi1o39U4xQ8nRLH7L8wzTTozdhv8kGtpxHfdxH253qfNVPk11bJHnshfeXUYbYJVdkvB6vs1BJaxeyS2",
  "key6": "4DBGL4Y2GcUmMCJWvSBVtSapJKfbRDZJnCRuYZuJuDmBZL2VztSAwXfZxbjC61T6yLejaL1JRnu5rQCE1UTJhYhB",
  "key7": "Vw9swYVFM1ahhMZjcWjC7qj3bHMtuxxzNqPmhM6Fajy9CNrYYpyJxy7TLxTCzUff8ViFUSmeFuKbfNo98iQMCNo",
  "key8": "3pZhug2ADr5VX8ybeMbu91y4W8m7iPhSVa3ULbTjjv2dnLoCBJiUS6Vn3eTUZeGtUfskWF97acioy7GqAurKrm6h",
  "key9": "2VsSw4BhZjhVnNeRdttt68J7jSWbRUVMRqaHe3xw1GGnrM1wv18mvJGqgYL71RYtFntU5X9w48UTkLGvtQCd8LaR",
  "key10": "2YkTik4cx6dway3Kd4jkLnXHc2oiQbrRCvN6dNWrGdcgVC1R9QVbnP2Y4A4LRTpbFwwVNa4Z6Vjb3UEBVok46Ecv",
  "key11": "4PMWeeSy53TVNvJXQ35rfLsszm4ccRGkzArbgxj8wSLuJFNmdXjPZLGvXncq5qFzgQpbg99YXL1Ray74JrMdDhaT",
  "key12": "4u56BZhd2Ppyyea8245NAaF91YXMCMZXjMbdTY1Q3QS1KEiHV66ZRoqYRYUbfVWRzF9Eh99m7TGerphB161jLfa5",
  "key13": "5KUCTzw1THAChv2yY2kJiysg2cBqVwrDfgBsLxdwdLLMZWhLiBpRE7DbKBEdN55rz3vonEGM7FPNoCL9kgy5FDMj",
  "key14": "UvsaUQtpVQq5DnycZjUxbLVGMaGHsde2kVL5Cv8tWAxEMwRpmVRkDeZizKfZjoQhpBRnKUJfYPBSHkUnyYnSgUF",
  "key15": "5CihT3KkCnjcCkMvap5UGcEDRYqs7ozN6i7B3KDyDzviLzHrHCiQ1R7rdrk6FauapV1asBWLqj3C34RT3ZAak2LN",
  "key16": "xRLPuWAT2XTKsCxQFyDbtyn1ADN3aDGaUFTYQQNGTQtSF89RXBohbeXc78SArgsXZLdy9BZKq3yQ32h7vheUULb",
  "key17": "5xZTvv6TCPanf6pXHtkpswYQHWv9Qx88KPmArrqrJLGG1CDhytDE7Q1EK6g312vYADuLUPxNB6LHQwcFYwEpicWa",
  "key18": "2c7QKYTizeiqSewn5Nx5T1m1PBXnUxGNB8pZCgfLd1bJoY4nStV3Y9LdG9BkcUSJamEF42xfn1ts3kknUq4QRZT9",
  "key19": "3cyaHe4hKCjCZogkgwcBhwDezrJXv3Z7ghjwhZPMULJKNJscyDAhWk2nKppwfCHJsoqLaW5p1unUCYxAVkh33XDD",
  "key20": "5v2tCe9bCw6nBJDwjpDM2HESYZSFLLqs3Ye3phd6xJv8sHZWKKT6HW83VCrQhdJXrzyVMJ3neTCFxuAHWEBTXsGn",
  "key21": "4MmMwSwHnQcQouyJKiqmL32kxEh4qrxgJqBm7ARWk6nsLEUpwth1aCedKfgz9pHTneBxbB7J4MBzia23X4VGSQYu",
  "key22": "2RZ7UsaasFU3Z7C7u5xGLbq4MJFRtVD3JLXhj2iUZ6NaQ8DyWq8jVopXvnYScArDs8dAZEMUgEmvmJEmqk2hY91V",
  "key23": "488Gtohqbix7G6yF2ZhJKEGk73Z9nitHZ9B21aEhfquz7wsKh2EQUxtyxFH1rKXzJAfEa3LUZpsBenv9LUPuD22j",
  "key24": "3nFk2ZMse8288NbA4BqDebryGV7nJabrN5CGkmmHWrimumSMDMENr9ntiHtcnfRUhd65Fm2CSre7UePbjxLSqb98",
  "key25": "2DBnyGDXkWTBp7HuPZ4cPVCbr8rw7bpSo8yZj2KDcvH1LYC3LVoefekEsfo8fPjALtwJqxn7vHGrP3Ty2oaQNrRv"
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
