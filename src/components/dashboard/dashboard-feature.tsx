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
    "5wLuduynDDATzcnLbrBGKguATbFpd7RJNJxeqrox41Jq5ujnWG3yRQfnPAC1N6mmKPr1Aod5DPCc1iKTnwPBQpJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28CmhX8JG2gLiD97DsHb4pU1SG4XtiTj1Kz2NbKWiUNxVAdKre3br1hGXrEMLYvyWJWLaopZbwhvcjjrePrSzU9o",
  "key1": "5g3SppP66zhV3hcPMBqSXtJa7xJmxWRM35GcCqHey7SJoPmrJ6M1iu8ncQhqCbpPaWg69TKkFpWmJ9VWC5yRHQk1",
  "key2": "3DRy1AFXwQKtdddFEy6Fvb41n5hkhpDXA1Epggo3K9xL8864XSc3pHguhZvS6QUV5qp3eB6GvzyioEFSmeow82xh",
  "key3": "7ARQgn9633Yo8MxgnbBmAdhQK66bJmypaDuQugNGhgBRU7eXXL3XHDSkYpRvSauDYYUoR96wzA33SGamUQm8i2d",
  "key4": "CJZG7D2uRkDEKd6fzVivkQ5uWus2xQFtq7qbDhpwcZJjwbZKwnK5tfEtPfAzy91nW5yx8b5PA7NUvNkoH71H34y",
  "key5": "4jP6pBNtHzHJAHkW8XHF9G9zazBJj8hapPcUbLmb834LNi5FrftWAA5nwd299sP1AUWe3orPAytD1j7fzEieB7PV",
  "key6": "3Yc7vsEmWVX7otQUwgipN87BsLJShyhah6fbVvJcNqgwesSi9k1MKnSr3rj37EEUwxzxnT4y12vUdJz8er4irbGy",
  "key7": "3nXqaxdSHcX2fEdsdAV8wqNQaxD8H5DydoD5aTjvc9vkiW6baVsweQPyfoVSGpa3HMuxh35QjJc6hEGjJk3RNXAF",
  "key8": "vbsmxAK49z9xxLjUjxn1n6qMFK1xZPjjwZu48ER6rPuaaa4vpt4HsHtGB5un3cy4nNQ4udQ6t9ej2HKpZQUK1n2",
  "key9": "31MT78H3NyjakBedDPSMFDpAaTmFHUxVXioEh5vu9UAyVbawnNeazKhLvgA39c4jTJiEU4Pdc3MUpWEKghuhstS",
  "key10": "59D7vteVDb48HwfPNGmrsnrdWnc5pPWgtndeqbRo2PVEpF5ZcvwQBSmkANmXXxdoPVGeZeaNuCsRhX8ZTh4tY8AU",
  "key11": "2UGcHiLzvHygVB8aGHzxm6rAfvTJ76A6wfhHjWiFiZj2irC4jTXEsSSujtGzVVZ7wTkhrP8kRrTXYRdUsbghUKYe",
  "key12": "3j6KurkeVy9SFHUqdLmCsA6B89LviUSDKZxWkqF9JUamPZj9D8uXfDpqLt2EuswM8aQQL23sWvBcMcwpCd1nHxYA",
  "key13": "4iEpAoygqF1LCg6RZP6EsUtXXbwF8rvievpfW148euiofj2Hxi9eg22CvqUi8e88UmNG8MbviJ5ESfo55hG1WQX3",
  "key14": "65xyjFiSeXEo7LD7DXDJBErbx6AikF6DhvrnipzVZKyGrrn83NWzdNYG6MKY9kgjv54Dh6AaBDUwxzGUJmQPHn1x",
  "key15": "3jt3EECfvHM3maZizWc7nWk8M8E9JZ6sYGQznwxnU6aiuV1eQ4SxSF6Ktx4syv5HzmQVTxipz1aFMfJsz4ncbUtJ",
  "key16": "43CMhEzrDrbZqYLUHhmsmiahCSnvFMRLcpKppBLnG8TkoPcK9zVKQjP1PR5jY7iUSJkxNk2yKmqaAh9YjpNse64b",
  "key17": "3uHXbKaqVFPB88EUTiEwCUoN9Y33ufSi2v6ndJ1VbVwK1k86YocLnPETd38xFQknXyjTd52JPybFMRZBR8RRqiY3",
  "key18": "rhgwP6woDxGo8Jph6s3ccPy4yLBNsQepbZKPrLhwbx9iozWKTYavsYJPB6MGbHMeTFouUiR9dX6ncGFJtGD4Nc2",
  "key19": "5QiRErmVZ34nVz8evpvzSWBhbw6EPfH54Rnjt9xjsH8VwL9pfRy9hTqMRQkLhZ72XTjup2FFViJReiyuAyePNZXM",
  "key20": "3zbzqv6hJA6g3DGjHdmTxgBzYEGWvWiRjEcypvTiTPJDTjsTX8BhQssaoyAV8epM6PBVxpWJeUULKhx2hUcJpHJG",
  "key21": "3vfYXmKiDtrfeQAr4y3GsgwC5xWsCHd7vvVJuXNBxEoYqj3SBzfrJ5tMXxf5dvLXuUWwmxzbgFx2Sx9vUWBG9Qhk",
  "key22": "5w92PFBAhVWgy5zPXNUvGeu4VdfBgHr3aKLoR11mRhfgNNL1bCS2uR48g1hhgqTWWzNPrL4j3UwFxx9ynZkZs9AE",
  "key23": "3R9iuNLvJCyRY354WJ3KMVnRTsnzuS7W8rEQ6rYahj6wWevEiBFassjP69GVtHygTDYLNeFGvUt6Bci18TxHkykN",
  "key24": "fCjgZSrxfJn5vnFCDSNKe1me6pf3689pfcWh4FweMiZqKbDsqtzf4J2uRoMnQUsDFMgi3LpLNk2jXDv4wyAjTkT",
  "key25": "2d2Pb2Dwk1hLpkvBmrFbML5GiJDzDuhjyzZpThywbC5RehAJC969f9J2oWy4Dysbo31G2HRJQUWjZYthLQKSxvdF",
  "key26": "3baHR3BDKzgBm6DCRDJ6xtWJ1WEhGbW8eoKpPxgWTtksae13jvYK6tB4axQqVaPZqjurzVnM5df2VW65YdtChbmt",
  "key27": "5LESjVaiGCP3q83D9iKdx6Xe6ChCoPcGrKd9XKbeemaRBSmgduVD4Ec6Xkzmbq73KwTLXQ9fiLCHfNnABsW8GNEk",
  "key28": "4HvArkKsQuPq7HYKPDuRUavL6jywaWki4s2PseVTMhAULdUVLiGtvtCu5o6WiGr4cTX2opzEWpYPBENe9zPHtoZR",
  "key29": "HBmkrrpKWdBWRgbmdXJFupxVDyjZL3zXCnoJFS1NLpXZoboXxbsvwC4jiyPpC69c6gjyP4QFeD1g9bZk8eetuBN",
  "key30": "29D2ZeG5PC7a4SenVhigeFDGNocuwjtCxvUdD29sbL3qGGxfBdYMBwdYbeouLr7Qpy6f9eEZerdHYy3Shm7MQ62r",
  "key31": "3LDhAfTHNaKMDu2YhYrhDYuYs2MoNXMAM1V8ftcUdsPgRiuvkYv8M4Bvfjdoe6NfKKfbMruV8cFTW7wTfASu4Qh5",
  "key32": "3FY9Eouskw9VLgRAYEnfyv8TsHeQLqjtkw9m8YEyVgTuwpvgxhXCcZpvkzdCvKAF3uF4ZUpTLEtxNVz8xFJfznyj",
  "key33": "5ssdv4F4vRURrswAN61zDf15ctXitNMSkgshxJCDUYQYwNNg1Dcj1SGBJUfBw99Xix7grkVtF6ghAFAxivcFVdCK"
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
