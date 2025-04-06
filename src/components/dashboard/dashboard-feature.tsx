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
    "22mXtemRaoyjCqpGRJdHQcMcMbexCyx7SXDF5xcAMQueej9tjuQi5mm5ZGP1fCADA6yJT56NbZnwSnT56dPWzojh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WY4w7UBMZcRfnw5dCfrwX4rwqTCs6As2j7ng3FdN6KaSkyWnZaWHRdmxLbWX4FVbdRdtiESGNK6neF3MAiVFh1w",
  "key1": "5Kv9HsEgKcBZtqNRFBJKuNiruZr7MA1UcPQctLPTET78DEQ6bBmJ9o3tSCrqcZmn446Q7qmaNs9Ssq8wYKQiP89N",
  "key2": "55k97F3VB7ybN4YVJFwj3fdo8ZL1zTFuDZoFem3voGjBcm9xCj293KYpkWyt3SsNBefqCPzzkGYAEcE9Tk6F6rGU",
  "key3": "4v1Dq5bV3GgF9mqyuwwmZgHMGyZggQWF3StzHtYwjguVPjqFSu9THLVjUxuQQqKXP4bQKLyNMgmLFmBB8chojroC",
  "key4": "FvNbyNKUiAUkFG87L4uvxHgKwPwGmKSxidDe6qtKWissmpvMBAUpNBJvEKvzTmhDMyRp12JGc8zE3XMFhJcHFjn",
  "key5": "5F2WmuqNeh45bKnCwhaL3TVgDak7xEbgj93RjAMrkxN3K1AsE4jKwrVkEHdMC23VWkPSeuU4jkx68bWojemdnroK",
  "key6": "Y3jA9dVshH5H62dKYPjGQhFrV2E6jP2B2BuxJaoBdMeQcLGZryUbUVp3HWbNBANNRYAHNGbGJ71PjdTnyytacDF",
  "key7": "6Zm83U3A74pffVXGHLcq5CsctyP1eT4U2igHPPhg6yRwHpRzcHpsxPwAUn4hPA48C6rqH7sk3tH74kTtuuKMj3a",
  "key8": "4MrWXVJridohvoWYSKbkJ5WLGvSW3BpDkNwGqn3NDKtZ5Fw6xYnNXcxnQDLFJkVuseAgcFuj5ZTJkfTUK5huavEg",
  "key9": "4VoUayfCqWWNd9QJBEAGNGGsVoPjVb541Grjk2w3PcwQVtwEfGTdxxB8uLu8kF6U6AQ4sugv8CdkxVvMSi1UaTy",
  "key10": "31bJNC8HRD6oeyC1vJAfvnhbvZ5ZK9BZZUTN42qYjM4v892Gzf2iJVAedzhhaVz7pe94iDjGPYaokRE46vaDk4dH",
  "key11": "5P4Hy7tMCL5mMFXYWc8ozn4R2FCSJyLUpwuJHJCtryksxc5FthM8DuS2pbFZtormGRV6L5azjB1sPByYcfN6yifW",
  "key12": "32ZLBfuAFncC2ih9KmTgCSAjzYCaGJeDbbq9KfB19kzgsG6A8NMDRYFYAtS6jRDjZQVEUwokNqqW8kyduhXhiUN1",
  "key13": "2u8vNPCiqkMQrK68wvZRwEbbPvzQorWMhNF7JC9PxLxDvPQFQLH3gHSCpWGdaPp5C9nRm83FcFRp1ZbGLjzyZrDH",
  "key14": "Y8SBj2rHvzuP9LqS6fWFkMtFJP6Wyo25Qxj11o8Nz5rj8YPMDd5WMnVDrmN4NPXr3ce1NMMQGRfn7bHucEz5gV3",
  "key15": "3Y8DASn8Pjx5ggDQyJZyQ3cJHSwrJ2m2kUEqByVNxaVC5vBvkR8gb7qLSnQnbadXhYwUuKkXgVDtQEbeGoeDUBb5",
  "key16": "LmUrX58zLYSMzQgwAsm7Jp7bLr11um3JMuK7jDDMhRpLUzLqLn7BPaKh3FBMsgU2jVjpzrEJhUhHA9aZcz4Y7Qt",
  "key17": "n3MMjLPeFqX2NazsuVV5gS2cPuXeXPXCegpGhfThN4AXz8oE4kZ3MdM6TPqtNgExthGAer6NoEVrDczDf7JAFEN",
  "key18": "5qfrnweAhLrsMPmZzkWvxnLrcPwYaABeAjopcYE3XF2oH7mBzyMqwum9hE2My9gHgnNp7J3eFeJvKUFrRrJPLSGp",
  "key19": "J1GGzZ8YLTasNsfse7Uv2ogEpzpHBApw9khDgiA7LvgJXbqoKF7ttw1hBHRsxASTfKKxGQjVYArt8deTbE2kLS8",
  "key20": "4pEh9PbotaiqejLX4c4Vw4fjbSGzG8uRXwcgZUfpuB9jrufFjWG7ixHX2rXpfe32NB2sEroS1fg2wVmuJtYzzocB",
  "key21": "AkSxjSBMRYukfwgBE7SzP8Cf5dP7wdDLwFahJEwQ6WPrR7iJiokxn2KPX7oa3w5BKaW9PS2c22RMJP6YtJd9kWo",
  "key22": "65Jz9htaWnChsMTwsgHR6tXtoQLorZ3vkqXsYXWSwLeokAR6VuaWRFLds3tXAUsHCHCVG9ukcKAhMr1iuUAwj84r",
  "key23": "JuHNaXjX6CeoQJrKxvRfrubXNrCEycQjUHJiPxqZTXijxUAHWa83jsW8hgjm8bWbhVdQBfSCczrimQsxjDnwtup",
  "key24": "3yEX6iwQSg7Edc7y8VhFvbRzNbKuZ5Jyrx5fE446dNxJQmEf14AKWqwFzAk2dq7EmuJpV8S6DumKGWYG3Ch688zb",
  "key25": "3dY1EqtUvziEQ8ptCoPPYsXngFSKQSmTUGmH7MtGcknTSur51wCWJn6QMcWunF1wj7LETgWerkKwx1ibq1EDE1sf",
  "key26": "2FU58ev1sG5djFBCVYJoJqLavS398sPr2KVfj2WEKHsxGUY7eTn9ePb5t9CQ8mVJ9uqejmgHgzWzdxF1yB4f1R6r",
  "key27": "KF12efXPirS1brwL7qjmdna4SKMxoW9LkXC6ZMMguApVqCxFUWu5VaxeLKbyCY2WcSNbqmDRAzevgYzB2AYA7dT",
  "key28": "3Lk1WZzfGVZjQsmn3WmUSYgCWA1PaENNfndgmpzBUonMrNBM1ZsMTdY8pgbNmG3VbU3PGzKDbp8YPwWw4ZEuNAGT",
  "key29": "4bACCmBEtZqmxVBMyN66phqRKMqqzQgAZ4guDUEMb4ai9qApd4GAuGyVZ6sLe9gV563SPVtC85scBny5yfKbE4k1",
  "key30": "3Q85nJu5mcDfVfvXSLzX1hbQPsdcEDmWFBSCizV2nuVWJpbBw6d3ovnwg1SsGj2JrqWNmYFzR3trCUMbvVz9vCMU",
  "key31": "49p7z8pK9beu2Xc4Ngry1fJNDy9jcEnxzwGqtShYSA4kUn23uVyaF5BcLMNgv6T3XhmCoukpLhY7KyfRAJstzCNT",
  "key32": "4d6XHta6hKfYckN8VXE3dXG8V9AhA8jsY8tXggdFuQc7FhkiYcXcLss8mHnAWk1vC2UUAbW3JYe74K7QwsMbqPeS",
  "key33": "2VhsvWEQJoRG1FNUdzrTwABTnoMzU2fMi4wmb2boi5btD2Qs4TTjuDn19bQQhBzp3wn4e18TzXKBPhVTCLomGHU",
  "key34": "3KTPk3n7pXAeFPeoaHS5xosgX9x9xXYUh6yWN4NsNEFCrijjKy6DZ5Txjt7mtadVPvhpRox9VpsJ18m82hfEsJNs",
  "key35": "4CM87QYjYz5dpEWWfhFQoumEAMBHVsbZFZq3bLGsbFXLSTUtJrpcqBzTDGoFrttE1g4NcnFbMsAzfs7VFZ8AnsaG",
  "key36": "2bJd18AwudPDRVUCacP32zmz8KWEPazxXinJGJAvbMXmgbXB7iUNpeQwyGNbN9krTfFTzQ7Qzs2AAtTfo7Hh1zo2",
  "key37": "57PkKVzk1QRfh2q24c4mXaRZTcMJ966rCJVKf6bHyjw12emqKqq9rT7hrntXngETyQE3tyMe3C16BwohCEQ61Dbb",
  "key38": "eJ6Ko4raRzAjiJbJYU5rmaZHZDUXAs2tmTAxsgyFLPJS9QbaCmbQJDCysE7yHXuf9pgKVWFtrPb7VQTiEMrENbK",
  "key39": "3iBt1X1f8DSPGTbqQq7BpJ9f5GG1usuMGXaq8Y1VBia8s62iVXcEEXcJ4jCYygkNXPR8jJFFdCpQDbTAYYdS99L8",
  "key40": "52jArs4Yvvxx8AzfMXq9Y9FJhqnjnLYWnQttHkMziGj122UkUPweXVS1iWEdgFzYhFrRf2kURLa8Zjy7ULKw1aV7",
  "key41": "4Cpx7KEfEBh2gBfjEZDtTLQgzrmH1nQ1Kdzz4xenpMMB5U1qS3bGdLfEKFkBWFZts2ZMFnwcBeAZnLQCBF9dpLpQ"
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
