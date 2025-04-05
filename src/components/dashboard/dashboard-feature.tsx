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
    "2KwcupK9SNjXTfePTn9iAChDPemLkJjJ3DduHrpydmFjht52Xx4aUYGbhYg2xNLvU5GgBXtnzmTh3tdT2tgvfbxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ptywZmVdxDW4gcVtB2EJBNUN1ySo8WRgg9ejScUQghqd6EBQHprB6NiBndCaaZmFBjZVxN99UyjeM1HwRp8EbDn",
  "key1": "5aNW98pzxfZQXKmEYeZxPTxtUBYdTq2Z8ZLhyiKazLhpywJo4h32hLkj1QkT8UZs13JYbWj8gwbHdsNzX6gfwFW5",
  "key2": "5yKLRjTeR5uNit3PhaoFfMpjkkrjwiSMtHbudai5gWooUZgGL9m8jfZW7PBw4QgvDd5xN2o58SeT7uAg4ET7PGJC",
  "key3": "2LMriPvHg3pBnXUTovkJaumoUZ69MU1BAahFJjxLPj6sxEbJHNoww37Hpyu2EHG7FkQoF8TWwX9j5x34cat6FYfq",
  "key4": "5MBgNsLhKNweLT3oPTMsrsqZcMiiPNZp6waxkvhtZWt2uC1C2pR6tDRMyYDC34oFNouJ4idxUUQUz1qrBX22D48K",
  "key5": "3ZqyH59nsNbEiJovP1QuQ4km1xvJhoiXcFpUketYoWs7p8NBgM8QhL8VyJvSMAWNary9H2hdX57zRE5Wtf9PjXr5",
  "key6": "4aZ4drwVRUJbR37ziqvZrhzsdjaofw7BD4ZZKYCfBi5BXobindiuPzHXS9AdR5TqNbQ5wsB49CcsuZb5wdTkqvS9",
  "key7": "4h6NjeZqjGETbzVu5HHqBvSQE3ujx9nbSxnhB6XQmXHkJPNfFrdzMisgLBejzvVCPRzm5bafncjQa2uRzttfa5oA",
  "key8": "5Qsk6Fp2QhCJuVdnE7oWHUXf41vu8e1oUPJM5iAHNyxNY4nfHNpr6Qu2MeMkUru7zJNxBm93cYL17kk2VvVPzqQy",
  "key9": "5nL9zaZq94Yjrwd1xuCspqTPXxJ6Ek4SgX2T1awCWu179yEGiGbrhtaWFgtfEUFLTsVVxQ8iJZkKLMvGLg8Ysct9",
  "key10": "43fv6wrJEi3gxtyBtcZGYLHhjNoNMRWVwxwz3uzWeNduNHDgc6uzHGKVfCpFPJoz7jRY3d679DT3aWU7LkahrLv2",
  "key11": "2UFqPDMEEdsi3CVwtuYw76qnwpQvrEZG15C8xPANweELC5iXTTQTNBrfordQiDNCSHCuF3NQkvXfbYFWhhXcTvDM",
  "key12": "356AWDmA5LEJSWTMXSFiuk2Z4qjfGNBmxFK24pd4qpmFv9XMjLNokrocbuChNZrWXgq1tkopAYXvYbXrdS8jpngd",
  "key13": "4w5HEfZuKG2235AqgPjULP2qMjETS8U12WsyFGGXbcyZ4FUiWBMwbW7kAHUWuRs9q5mM3qqg6qtNYkJCXHBAP5dK",
  "key14": "3LoVYE5Cmrqe8QUnKcxL6gqcNJjtyW9tSJSrTQZVv9QkeXaFAjWZDJpFkmCqzLzQEerVdWysHxQ2wXLM9sFa9KkY",
  "key15": "26Uz7T5SUctGxhRBEtPWGgJPSnBeBrnXbkNdR88ahZGwSA5CCWSkYNypXcZE1CYGETRfk6Tgt4Lwket2ewwLY1bZ",
  "key16": "3AQqvo6enheMwqmEY4Gok4hiBVneUeoukXwbdfM75bT2qQwBsEGc52axs8xV49uu8QZSfnTQZbeNbHd9W5ryBLyN",
  "key17": "yteuRCdcJEgp5v6B5J11p1DRbasXnGN9V8RXPWpTmdj643mbehz7xTNCvRzk7tZ99M6ZK2VvutkU16K5U8Ck3P2",
  "key18": "33ndZi9esQAPgn4WMv22NY6e2iHyLJDWpw47jvxfSFe6ehDHE8PtnrjdYRqF7SRvyT6YW3tmonTJv4Z2rpWTtVw",
  "key19": "2sPSfcPQH8QZgGbFrD8ECgh7zvAQ7hy8PQ1VPbyCgniyJcs941amvpTdZsCo79CSTRiTK7xD8dSFgmEZ1jubhad2",
  "key20": "2dmHzRBxNgwcqwUUVEuJHMsTtYQoWsY9nJxEsijpHqHpMLfVoqqcwJidkL2whSRUMJXM5XwHPcLFpMaktN1GzAEZ",
  "key21": "2eaE7WxL1oFPPfVqmKRFApxfQAM2SN5dVzCZbcF23aNSQm5WrPxzHojUgxz77fpemwwi44rqwE6ny4cifyFRoTuL",
  "key22": "ytbxcYwAVQG3sUFP5cLj1DoBDECrwkJ9EX6FkVezgNvhnXFH3V9g7GwoipEj4isWLEzEmVn2pKF9QnMedCZqx1i",
  "key23": "66846vvY2qto5XhpFQDbfVKRU4UCSNe2gYktwqfR2q6tNKn48HDd4vngCCjCuJAo7k7qBQmfuayC2y1Yh3y2GJzA",
  "key24": "5qA4v6Tz5V2Cug9RT4jwZt4PhkKdS6ypdqSrhHUBxEwworbhLAgwR4XgVNaJvijirGpbDVjxYLiTuqDgcmbNxW6Z",
  "key25": "3jufjBZ8FKvoFVGLfUfoZUWv7kqwPhbevY8Hwo8qbz8X9H78fWM8oiUQtMoc7eZNRojg4e2YyGnehYscuytN1Kmw",
  "key26": "58TGLxvPgwX7VuzUDc6jrYwqkKeT25R6phM41rJmGQh1hGkoBUsGVb72sHyVJYNcxxDWdZHT3wHzmmYAxeevd4zm",
  "key27": "5bmXmajJmGQdeGu6NU7LkSf7uXKzBA13ZrLShG5txt8gzuUqLwtvKoHdWQAS8uXVRqVtdmy1G7eGVHxE8hMyWgrN",
  "key28": "2rg4yqw8UBSuqRZiSz5QWrwcMcCPYR2aowHf7xALAD51dSDXAr1Qeo4kdY14SqpS7bLriN4v9sHkVRbJZgjg8Qb1",
  "key29": "3n2ekzciuphi83xGjANFkZewEKPm8RK79NrDoqK2vMppR6mavWcoKw3wY5bVt93C3gqBxpR8srU4ip1wrHKkxrks",
  "key30": "4Vk43owPMeVqH4L3hm8kWGgEGprLvq17CuGYFQuNhQ1bzokHhMWnWsdkYRHVZh6FgA2RehyzgPf3kv1fgMJnkuaG",
  "key31": "4eSqdjraBaR5jgC5aHxNpTmX4SQzrstscEEa9yFESGFVPGchgaR8VjowGPRcvn6PPEEk9WMbikjPWEfAZXsqq6Fh",
  "key32": "66tMwPX4dfKUUoNZGjMbsnmvhoDTspgqmRpLCMDpQ93Rkxrbx1xDNnrLBiwgzzmuZfMzUKid5RVSdc8yoCWSdtpN",
  "key33": "3Y3wE5xTmygLYeKE1KsmkxzXf1thdW7cMg8KKesD4kqTDLXWHBh52r269UYTt4VKLqUuvbXeeXgq9Q6hEawPrVF4",
  "key34": "5wJEUzDEDD3NCj2ZMYwpGWtvqnFSxhLxz5UCHBCscwAvG3L6hDfk2zgf6KhARHGvpF9miCJE24GXa99YzvenANMj",
  "key35": "4tnDjRV4Z5yfDwjRe78DaE7FuWoTgJjvyvKd3DqqgzZEajZYrCEgwwNHbErBNR3HykKuWxnRzpghb1f28bP8RGNh",
  "key36": "3GQuNX3T6Hz6pXt3bd7F8XRG3H4wwzhLaDZet5Cg3Tk5Sprmz5ttveFy477dCJmTBVMTxjvVWbYFEeT8imzWLf9w",
  "key37": "66XyVGTogUDhMSvW8ujLLSFZ7VVzhAnRr8QNqXqsnNbQzL1e4CXsxsLukcKGuxsXsfZ9JAgUTRNBo8nP2HZRKHVA",
  "key38": "3tTuCNpSLWPnyS7Mti8oGrWB8yfjWTtyzZUGuVo7AsCP8Tj7QfxKXMz9S49ScFBhLssjyGyhg5WUmvtkTL7WskYp",
  "key39": "3sn5g7Unr8WojG73h1Fj7M6fRHWEPBAYQhv4tKDumEFZfL74wZNtFcDQo2nuxeGJcKu48KzjnWmzawJt2vDDFeX5",
  "key40": "1tXGW9EFyqFFWbv3EDccXL5FEQEGZHRrG5H54xywarUdJccAr7FByPv3yUdFQ19sJVJw3hsVtYKv2GAwzJ4RrXv",
  "key41": "47ppTXk9xKWKUV8JSgNtKDtDozWcqV9YN56HFkUR85XR9jduqW9zcDj3bHwSAZAthkVuipdnh5uKD2EYnhuZ7fy6",
  "key42": "b8SzQyMRuoGQRsZ2wmVCn7vkbv15r924geZrEZ1dyEwGDQ1ZbRfAaHAaezXsYCyXUykJcKzGUMJvoAaZf7rkdex",
  "key43": "3x6mMpDs9T69SFBDBM3ap6DWZ4h1ZM9r9tXTsG2LaLnynLZUR6CBmfER1wmrbJABcTVxubTkcsjrrcFYHwwAcZ3P",
  "key44": "oHQUykDziLmNs2Q7arMZ3pZNRMsFtgWRwVZze9ix2Z2ChBySBrfUh8oZzaobD6gQ5pXDGXndFb557HbvMB1bVuM",
  "key45": "2pHVL3MijsqDRit8ugqUSAqkZ9mG1UQLaGqJoJ2R4bzZ8BzqqRWrKDq3jjirvn83tnDaJZMuAVNwGL8HTrett6Gv",
  "key46": "QosmBPQ67t3zQZzBbXu8wM2HeBAcBG9Uxq4MgHKPqCLgGfQkSbKn7GBDtpXHbG6GHvFEwniqRcpJZ49xkxfMHr2",
  "key47": "3dBBHACVbkL9mfcQP7V23p2iiKNKt2Sq8CxqKx6kfqR8cFvjzXgxuy2UCkzA27cFDh3cJRCwNDwyd8rBrPr3N8a6"
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
