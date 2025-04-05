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
    "5wQpKKTY9LGz8yiBtQ3mw1w64B5K4WGNAyrQwj7n8fLG9uPhkVyqfJVhkqpyMwRMiWyQKEKEUXVYfVgbGNg9nQKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aq1YM3yxm3MqxdKwbtrXFVJ8XXNKcBNGR3qdM6ueKeCw59W8KcLmYErsv7kiLQPftzq8245DrLK8Fi419cUZ7ue",
  "key1": "4TD3TdspxaYqhh97mBg2PqfEkztSqo54UpR19pQ2Xim1yABmFi1s5ugSTAKVDmQHFtMNTjVW2if7cH8Rz8m5JsqG",
  "key2": "5oRZZQoH1FX1DRFmTs5y116Tp8EmmkP6R7a9Hb3gorMzHz8RQNTSb4NozXDFC9AHXuKAwHHhGKUYXj1B5DPMFp5Y",
  "key3": "4qcbDqcLEUo4jDUc7LaTB3BcdAykwrQQveWLi4wXXirRQGDYvHQevBCPKVjFvfRJqav41V27mnJxzriJmJF7PeoA",
  "key4": "4KTJ6hee4YSLUHrJrB3VvyToz6sMybGaYj36Fed1m6dXt4o45YGLzgJFtQSGz7w98L2c5zjVScWY3x5Wbu5ZF4L3",
  "key5": "5XZrhaEH8n3xCGLU5SW8hfZhYSENxWFT4qiGvm4yDh46JCHcp1FmDtAo9Wau688R4KyUTCukTZrEUBAtS6Von6Nr",
  "key6": "5Qyf9agLKC1sHRDofWrN9NybrTsNbbfLamsD6sixWmkJuwXkPjrWPRn3rztiSKzBjGTbxuYJY4xiazf24p2JgrWS",
  "key7": "5v1YKWVMVztMNmqTNju4ZNEREgJQYWpe4f5zc9zFdg28TqtNsBCiUog5SCknqV4Hy6YsdFkSNxVwsxeFEWsCG7Nn",
  "key8": "3QPBWgb3W3yFqwM6GULafkhycfuZaFHLV463Uof4XcuumeqGNPS2iaXBSwJwQqxfTthZs7Wp5xFetRW1zMaSaygT",
  "key9": "mwPzRJ5Whpq8ZwsMSDW7wt2QDPucpYzPweogDDHiRFfMtyMsrRS3yGMs8kHL31CJKsA6WfmVXyX2mUeEy9TkrYz",
  "key10": "3nv4RCeva9hUjtAzWG5ZjXzaVvRLFuTzSyT6vXXtqccHGJTQC9uS6QCNXzzxLPqSu9kBWvrYqhA9cg8msYSTZMgs",
  "key11": "5PPurB71ngxNrxwG4KU767UeQLb5Kam7cmEM5fZLyBCRTxTgtuzaKXqNaPNEcUJ9BmkJNSK9Ysg8GfbFtVhfCUmW",
  "key12": "3zvJdUrjBFPCzXZ4JY3K2o8WN7zQqgGTxoKxdn2NbXJtNQfEo9PyrA6rxVB35SGq2qqjAivW3kt991iJio8yfJMz",
  "key13": "4QtUuz11P2cBCLvAemmiKDcHjbmf1tPpqoUBkit44k67RAxRr9czFDxHVKZZUHNjqxXR8inV4va5ndbJkbaATzEh",
  "key14": "3Z6Tr2MZBs1ny3oReqTcbc5aaQkYewB8CArYerh7a5kC58BmmRAPvZgSAdBjDZTgBPDgCmUnHYxqCw7Q5JPwTZKj",
  "key15": "zPNiGQsEh3AUQwffL4X8EJCD9RwtZHCuvoUY4o4uYnDev7Poit6T39QF4LLBQS7pm6beetjicDb9JSf9HgjGFeZ",
  "key16": "wcM7qzNofzyXKYiHKfmiDaQVc2HoADtbj639vx16jy3VTWMpEVWbFsLmXEsXT47ei88QS4upiSGEXDouxP7GeBy",
  "key17": "4Q1itiSPF2qTJbKvJ6i4APugbSjku3j4qGznyjmEQUVrbFNDUzX6Lv8KnHz4bX5WiC7RcF4LQMesjcrSnsek4N23",
  "key18": "2cs8WEhYx2uwEg8MteVFPpmdvDoByP2FmcoFMH2oju7SZsDsy9U7oCtYvHcnaP8dmGdoAuxUbsk17F3a4BhvMQwV",
  "key19": "21YuCoVgi5tckHAFjvjJDznPGBsqi98LXnU2XNVCXnV55W71mBftu2iXyo7VqWj1uhbhdykotd1s6oUzp5tpCHAQ",
  "key20": "4ssKm2cBYhaXdgZHNFXJprB8jfJsrN36mn5Pntm8bB3o4uqNjvF4QR9tUdTjrtimgCLyEbmWL9DqtjsDNypKV2pW",
  "key21": "4XtpAzgCKEZAbxyxueuaUZZhQmBPH4SbrB2YWKdGtCnVLhw1uyqUc6ssfqT4esw81cmvgW46FEfLGj9EPDqzpa6a",
  "key22": "5X1UQA67u6Qyy7cVJfadWdQsTaSJ7umz3TSicGZVp6LFVcMoX3EWKVc8Z52eoshsyRPYLaR1dGo21Hsi13LkUr4F",
  "key23": "2zwvMANXndmmDFZe8yaFyPRyny195jZYsEiz4jCWKap6L69PcwnnPSr5DvMDSAoVCqxLmZ73LAg3eEe62GpgiU8y",
  "key24": "FBL9DK9vFrsRGkDWPWiR277xk4sBxXRG9YCpwsLLSgqwiQCPdHHpQM9iVWSZaW2ziHWB9Luudt7Jv49qhhcnaeD",
  "key25": "3mEW3d8UXZLhSA5ZJCB9XbFj9ueW8N3DCh2byFg9EUabTcMRFXZVHYAnpAaBGZ1s4Ttnj43qyt8JbB2T8TCn6U74",
  "key26": "5bGwPfjq1hLyMyRwn5CyfWZekbDqYMVd5nqHhLKKQP1ZYhSgNeocKkGqNtKVo98D8PRkpz5kBkvpYqfEaTW67Her",
  "key27": "uLjg5N2JNeDKxvsje5qgmKu8p5koZHof5Wfi2jG1KeUMUgftwZ1HCGtHzExwLqhgi7to2m37RET42gTZiiFMuTi",
  "key28": "d6MLpGV6KdxyjbqKPfvPYTGo5ydmEgi3p4MeRvXCcuBsUyZLu5r8FrhSxEeTfnV92RAu7h4qBVBDTDZPDLjnYuQ",
  "key29": "4k9f8CiWPQg2HR4RbN8uk1qszrkzaTh3vRvakaxymEQuNLnctwffTgHWjvYC41V2gS9kKqQsUNQEZviKU6q72RdC",
  "key30": "imDG5qTVoUyQ6J7bPWbFHvFxPHVzFCtXQLoZuoaywNc9aunkNkgfwpBU9fB6Mts5SMkdbPeFjmuTxqDfDPB6D4B",
  "key31": "nt9djNGxuSk4Gxmcu3FYmHnyJGzKUmfTZi2xtGcfCcaEFDqd8K9VEXopt1qN7oKNaAFqfzPXSso7KQyZpkRshDi",
  "key32": "55iBf6XZr4zXcbUv1SLigKNQJQn5tpvFZptptPTF9FN8uDNJwbxYeTQJ6nFoWL6Wfvj8Wsq1cuUFpJEYXNBXo1Ur",
  "key33": "EXDcuTQ42KaoD1fjhixEnjZGYtAnLYYhPMJAV2tNZBCTFGF9Jj6w3VJwNjc225TGYNT4qcXPWyWYCTSgPb1QHwd",
  "key34": "HVtXbWq5CCKTcVJojyVXR2sGMnazweu9eneZrnZwSfEisyrT18opmVygw7brp9ZAbKMRwKkNmDuBV1BgY7tec7u",
  "key35": "4ygiPqYnYY8eWX2HoVwCE3wNkn2pQCr3SaeoQWMGtt2qzCiDGvFKhVmcNXmYBz3zxBTPTz7zgroFc3msHFGL9Asj",
  "key36": "4LCowuKCJcEZPFYHGA6iDE74dwt4arNn2neQvc8zLH7GypeH3GAPru824B9sv2bncWnaAKNLBokguo5u5S7qVTuo",
  "key37": "2VAdM3qENeKo3VRkzEhi69263WN5CBpHrrsmFvAUXMedQcf98iu56zHYtUzZU1jycFV8GBMdZtobpfjB4VDtZraX",
  "key38": "4CdmnyUQsFxNpQxtrW4ejYUHMYsqDMXLZKmGLLQg7zjzpGgv6FLdk9K6sm6PVgNPry1TwGDTKaYoa3ERuq6WGyGv",
  "key39": "9aUqBFey7gk66yT6nxryxj4MytLMgVTE9o739Tgyk8159NRJwsDSWVtdGHCoHzpx3JC9nFxxzQQzY7nceVr38VP",
  "key40": "5U33SbyYfv5HztkqF8a3ME2h1DAGTmLwwHrUYWANN8JrFCu6FyAKquPva4zKEiZcQGWUgw2JaSJpAM2gkMB7scnG",
  "key41": "2GH1wCH97DtYRAkXgoYxW5f4k6zegsSubKYzHcVwUD1bqzcGZihe68ASFRy7GKJcJZBfSvmDSmJg8u894M791iit",
  "key42": "51tydQyckZSaXzCqtzy25H8rFNpmU6GxJoVCWY1CLcS2ExGy61V1mLvQ2iowpoft8Vuk4LAAY8gx6uG9pLP1ViME",
  "key43": "5FSAeH3A3SzzgoiJBhuSWxUq9uf4MsDk8YvtYcfu1H9U2XfGm9drEWCfbJU6AeCYPCWAevPbwCfxkDkk6wkDwtcb",
  "key44": "3E3RkSQVx94zwmyNJS9mgH8wGedqia3L35FNyNhugcmY14VjPmBg1xRF3wpZDC4JyXNBKRDcTpmPWBp5S7jXAU1Y",
  "key45": "3UNFFv1xGQNpvfWbLeRu8CiZ1t4P8iYGAkeKZjoMqeuLAUhGwaeD6VBSdDc14LSWMDFUUG96He7qcKRzRfA4uBeV"
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
