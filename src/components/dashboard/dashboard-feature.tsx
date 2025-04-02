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
    "3qUgA2mju3PwKeg67bJu9sB6NLWabrdEoHciEJnW7pa6oGexRzMnMsBCm9F9Qke4kzdG8bLsB5MAu8CuGAHEGZ8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZwBaoyHS1KvG7kzoyXnfr1EtkT6E7HX8AmutJMgZbdn2VxT81gup2gLLrmSGd5SBDWKVMbkmJGLFSgHz1bHyDNC",
  "key1": "3rt1x236wyxDF8x4ocVFjyvSwou4NWpJTkWrinv5dyRigMZm2B54NfdyWXWp55vZdmH78v2n8PNMPSrUifSvSQqK",
  "key2": "5qYbFidxFE1egccuzuSnTGtyQySniB2GvU5xCUX8MtWzUQRd1ZJPKL6eMV1qNcCVu723eWdA8QfmHaPAfq5m2XJk",
  "key3": "3YJQBPJzruuTaxoHttxacvaHExFHBqhVNtjeTGEAKZZNWSmnU2jGdboJtp5FFh8g6pwzCufADHtWKCkkbhiVi2f6",
  "key4": "XvLvJi5cfX3QAg6Yq3EhpuMJaxntKc6UbAMg5YznDGeVEF9ga9z1HXtBQorm8XDiRrpSZnNRqUcqQw7n4vDkAce",
  "key5": "snZoebkN82qun9BcQZBP9rXPpkgcchhgwV4hS2hBTen95JE5ivZPtRabDQ5me9D8kmUFtGcyn6ASTUqeH7k2Dqd",
  "key6": "SKCkWFrFpcNPqx9ZuhucsTYgpSF1NmbHHmwHk8aPjRqG28dG9wKurghf55TJWn5kFNCqGWfzHNPz37mPmxCdw9t",
  "key7": "2NzM4rNddbdCVg54wNvsY2vJFJyGU2uHtJeVwY9dwxVJaFAz4P5n4MfACB54BWZjBm2YrjmHSPMvcn8HdLDf9RmH",
  "key8": "4ue1maRXaVJ66RHWpvx5adGLEujX7aJmbNUn3ZjPW2wSYHcumTdMXDoZX9P1NqoivvRNYSW6HwKvTpUms4Axtk83",
  "key9": "4B1Ta9GT8VmEKZpJSnUuZ6GNSQuRe3kqZbw2GJ4Mqp2ETtBpsvLdTKY6HfpMCsfTEcjh72HnTsH1dyq1Hw9jiHF9",
  "key10": "fASKMm1dvGfptQ2ZwMUxFatmAbSakqgsfkibCPp8xHMz7iCd4J4JjEPr5Qvz4QYRFFNjok6mYM8JJKeLCFmyw8m",
  "key11": "2vx2uvteQ1N1TnbBnX5uzAHMRBJGG6cDAmLxpCUE9CvNtQkrfCX5LHHmHqnFjxyXsew5t3WD4z6WuqDkRHLq5QTD",
  "key12": "338EGAD7AAZujsgvHwGgsQ2BP4dwaZ2nWdQiUDVyC89JDnwpdNexuHcpct7rg9E7V71hbXmyCAqUs9UcdfZZJyFQ",
  "key13": "5Av3zbeww9hqfkg1KSECRJfjbjZNRQgaWVzMCtfvvAYie4V1MtJYba8tzC9i24Pw2bpiCtt431V7vmHKUjTsH965",
  "key14": "TnKrm9Cqi9EraUvnrNZCMrv6NCFWAjY3iChdPRXbE8yWnU1krrV8jXSfwuXdS41ce4Yr3kfNL535cjqLP7CcBRR",
  "key15": "5zYaooVhVL8mwh1qYb71tNrF7tUzPLYW8JQVYYSJdKrgreBfcXdsSSKXQtjMF6nxDcQz9JNG23E2ZEnJqRdWaMVi",
  "key16": "2n2YErb8jtNTztteYTtHnHGysjkmDEdbRyvWurLEsbmpVVgzcmwERJiPF4DuipwzNrN5dr6jKBjnn8QtvmUf3tqX",
  "key17": "35ZeTTpDqm26msMyTqW5pyaP6i8rEwrVP88AxKkDRKUKE1C39jAHDDGkKg73Rwu4TMuHVZz2cCc1BJYTbqkjo373",
  "key18": "46qokz1T36MCNGRtGNLPYYCjLDU3uG3erwsvYbD4NjUYgHT46VU752wmjDGqQgpsNZDsRUQnn7fu3Gu1aQriFx9V",
  "key19": "5FZoaSqHX2uBwLo3dph7ScpVsRDLBTCXcHZt5fS2Tiy91qUmTgekWJ87gHEaDzefx6fjEadeHutyUqhNchSeqTsA",
  "key20": "2HiDVmh4bzM9A1rHNEkj1wfs5tbqbfvG2GGuEmpnZRGtXMkbz4JMbKHzNZvTKsB3rcacXuEGDggV5yJvLNWFmzEy",
  "key21": "449wzFU4oTJ6UcEEtRZkZBnBS9KDVxxQdLHS4L4phe4faDxzY9XNLJVvYLRdGQtX4VXnZ3NLNMqfS9N26REAW5SF",
  "key22": "5rPRJaywyWDhLkCJ6bBVFzgDsdU4prrhaBTQTTBtcoL4umcaF7ArriUfuEcoSbhndcUxpL1F5fMwRjboop6GQXK3",
  "key23": "5eSHTTBrd8n8N1rYCRvV1tf1H7E5u4QFGcBS5n5ZTvxV4mo1QnV8ciKHzCsMec5yT1Zd29iNxSotggTmaYMj2E9L",
  "key24": "s51Urt6XWLdk1Qfy7j1A7X8WeNfXzihpgkaVebdD2Mdcmukf5zUrpCZv8tFWdgJESZfNVd321NXZq1UKxLSoTCj",
  "key25": "3oggSi4eF1nUQ1ysRobL3gE4jdaqx98Gcoier1DbrHRHZ5qN9M2bmMXgQ72MG1xUR1STcRVn8FF21p19jtfi227i",
  "key26": "5gYuuVgwGzhwD7Gz9J95CQYNhGyNiivegAC1nkNzuSSCSLfPVUFDWwPC2Tbfpo5XuGh2KQZtr2Ajva4hq1nn6nom",
  "key27": "wzc2eARR3Vo6c1kTT8DkcomRVFjSJNsLJa2u37LgKnu7vJCUbrb5ca19hiKpjYfEJHq832NLvPWdNySLos1i5Mk",
  "key28": "4Xg2o6o6ngVjSXEW4zqzm91u78fngWCC5VxTgbn51MaXm2cV5VuJjRu4JstEjM2thScbUFJsz538QpYNZueS4ExJ",
  "key29": "B33ZJTp7K4TZfaPZikfQJV4nBvw6xsjF3qmL4p2MJnKpFT6N5td5cBqRxEEnjrZKUqj7Kx7r6BUhycVRZmVumY8",
  "key30": "5s65YWremYSC3CxrMVGACJ3gFc3mCEicfz7aMHkD52GRUhXmrM5weWYbycu5bJPzXUe7geL55nNTV6kzHkCW8XLV",
  "key31": "5yf2gmsFf9VcNjJdWUVvAVwGYBnpw8t7g3xigvQ6TV8nJXiUG9gXuyswMT5CuAjRpomTsSotBwSrVUffVrWKFhAy",
  "key32": "5Ae1rdmSF2sSSv8nHHn62tBNXU7KbUs1i59dTf5XjLmQWjgrCVHyTbk7uszN6fmNk1MR6NEpSJYPRZ3RQXE76Vx4",
  "key33": "D5ETZDApAEvGC725GPfaBeB7332nataBbJ7QdneMncSGKRQs4fdcA5wU5vc9iSC5AB94d9wJNWr9SZrMxvaxnZF",
  "key34": "4wqesr3avob59ymcNUm1L2WaqG58FLCVaUYP25brkWb2xGpSRtDyEJV2Uj6gYJucrY87nfnEAwfwoZTTFWbjfEb9",
  "key35": "45UpUtQchRA4hQKz1igbDzfvMQnzyZCSDvQeEtXinFgPXqaPfWZRzdDjsHHc4mHsaczQBNTeJ3ByuLMuAHEcEto7",
  "key36": "31kDVDkQ9TGSCrYkQmTRBPNS378Y64oVm445qEAsCi3v4xdHc541VwGHWLsK5cBdSMnPQbShTkfAK9Jo72DWJqYM",
  "key37": "W1h6WtNWTEBvsbSrPHzCDwrDtgQFgZjUn87pYS1FmvN8pZoFUwYb2uP4pidoJeZu5TscZ6Fzr8SFNW2Mz9mMsGY",
  "key38": "31JSmKmRq3Jq4bgu8bwpyMJNpieVwtGUimwhfNpU7MoT5PPEi6sDUi95yPGGcgMX1pobAYLJxptmVQE3Ky6ikZX9",
  "key39": "zp5uAnZXS3qk71rfyqsvFuVgoY3zqfachBkoF1nG2H5t4uELBG2i5GJYwxb8SUUBs9KRYKpFiFywEmbCkTExdW6"
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
