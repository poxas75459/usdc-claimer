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
    "3yaXZdceaUGviz2gDFEWYZNHa9Zq8LWZRuo5U3jk3jGXRx4RiHhB7ijbqyxYGKy88p2Dc3VepmgGBm3ULrGQAg4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jcm36aQy5bq8JvsygvWLpkqQfB76AxAWa9rHXQ75dm9hyip7EpSmMBWduXs8aQ2GBwV7FAeJQS2T7QkDjSYK23v",
  "key1": "WLh8fCaLMTgkxUkMxJ1JrGmwW7tU7cGFs2RnFQowGwJt3LZcqMNUNzkr2vxNAVrTW6dXccSUoDGermNnuNqpKEp",
  "key2": "5uYDqDLSXKxQ1ojAzTP3BG3y75jYYX6o4WRbr6Cj8kMApUvycUv62smDRdWrRDDEqmZdnwwxWu8BWn3hoEe2PFLk",
  "key3": "5JHP8omSw4a4wvkH9HzYNW6oy5RvB7eMqZPmWazgJLuNKfdy7RNxX84HGSQ52WhcL78NnjiMjSqxhipUNaMP2Y74",
  "key4": "CzkDKFy31rWQC2cbsMRKfyE2m59P55mK2qkeNP4gAExipChHpeoSivWqH6b1EEHjQKfZFCRWi8fRtdimBgaib2z",
  "key5": "3xaAMNinUj5mj5tyefPsQ9GsTeR8CRWWRfLdUf43voFydBWncCVRbkWeCWq4AKxz4eowScVdCA6jBeWhAQQ52MJb",
  "key6": "5w5yU2AFETE4f4soxBVxMLAGDXMTsotDsQD3rGv8xPtBdaEZo5kdH2zsiuGC7fjn7qNsps7mRAnYdcRVzQziCUeu",
  "key7": "erPGuWVdP515s8qJL4py5wTmmfaTDKi7USvkt14Gtf5ZLM9oF4EbgorzuhezL3LsFyV7W4WEDGBpKSvuqNNSgfi",
  "key8": "4p6PpA7J5zaQ8nKsRYiXidrsS1fzDpupZbncdF8xwtUSia1Bss2fgvogCQRBJ2hm8DLrWm2n6PuLM6AoFtqi7kTn",
  "key9": "65ydKF8BtjJcSZnZHsFznR4voRBmWtAAGa2X5KwydQkPXvTWAVQUPeDEdTtQcenNbLWt78ZycAdmrmKF9b8UGeUy",
  "key10": "3M6TeNofq6ZeKGyExf7JoKXk9FAEprFpcTtFc2YHk8LWSmRerbdVEcTRfC7hG7HUfbyUHBX7o7t5uisJPpRBRUWC",
  "key11": "3p422HmSH8mwXDowukANULKi4SCA1oysitkGFrkfzsv7taDPnjGkwgafNPFw9qtykPn7MBrcsjNkyRrLcUc4Nk1a",
  "key12": "kGq3yWwNKfE4PWkHohzzCp9XmvmaEYTF7qSKGTZX6KQVR841gworEiVDvunsrqUqZG1KCSHXsEFNFF1LAXoQvNm",
  "key13": "2ydy4HWNHF1yZY9J1vXUijBiMprt7djqq9S7K8Jt7dmBH5jXEu3jjmyva9tJmyDt9LcgoG1hbRw9r9Vdd6ExppsR",
  "key14": "5ou3h18tnR8WnAai2pCo97F3yzmMmLnjvxmTMnNbBJk4qTyVkmnRGLtLYvN7toPMWRs9TqoLJX1FnHxvMrg3Vizb",
  "key15": "j3WWyUUVvtSfdt6FBWwVWyZXnLRDHSjs8zTh9JxudHVFocfnV38hq5t7rYEvsHvDf9N6KGe8Z9XRfgNXuDj7gGt",
  "key16": "3hDsBSwJi95NU8usyZqGrTYdMPkxv7ALLMvJ45HdeSc7yAk1bWppybUd2Y8x8E3hDoFV28ks49v5E5EsrHucMt4S",
  "key17": "5ndGE19QsnhqNC7wMcQPWo4QRYgrso5HGw2JvCD169q1b1G1h6TqmPRXGWnQtAAZ4HaqQkc49qnVaZAnhsJTBQvq",
  "key18": "342gZWK5xpeELq1WW7SSdHcRYKBYYpwwr7922bgeh1j8HcKzRbJmnY5MuJ1mt6nqPRhVCbcYQvGdRToqazPqzH9P",
  "key19": "36Tnd16gzkqUeYpwQo4QqH54QPGrscZUrf3eRReCKm7cQZsK6AoDXDJvA4h2KYxafpWJg77VQD91PEQBHxUf2kbX",
  "key20": "5RkvC4b62AmHnURwAbssabHhceV3nrhdXWrpSDijo2PRLzLSXmkJDkFYmJ2tXN5CBSxcbL1Axcy7NMBKuF4GtxKD",
  "key21": "4DkZTs9ocvQmqPuUcAE16U7Bq9smU97Thoxz9P6tgouU9prnTBZG5DVHpTkzBmXx39ArVbStsb8rFwF7cZTpBkf5",
  "key22": "2kt7VGPbt299vAEnH99rAZvZuizxoKFi3G5VmdjsXdJ9eZBgScw9QrRnHgAQE751Uq8fWERPKnTgsSVSnsw7DiFV",
  "key23": "3FctNKa9FhWtHbhRxcwN8NLNYH5NdQzKZWLTodrY9FZcWpY9PTB8PsZHepQtsRYEYwQg9wFmmEFJkAHWouMihD7n",
  "key24": "432oG7hEAa8nkGENuSyQ9s9Xd7gGfrPetrxhpquMH5AGxBtmXrg42HQXY4y7a1PPSXjdk3Q959FqBeCz1fo3ymEq",
  "key25": "6prfq4Xh9bVZKGN1n5sKQ8NQTm32BLrk7XNjHJupEJMvJf4G6pcxXHv7SWpzuabBpEAXxpFLEaV7RvysKWXFQ3B",
  "key26": "25Edfc4tdtL6jViHye4ja9PpWYKKHTRSgLs4DjQYDnW7bNXbuUFRXWWhQmcMr26KcBhTCBVU7hDB7YN3qYwZaghB"
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
