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
    "5S6DGnYcqGZuM3jrb4bsV1g2gsC4rYH6MDqdCyi1rq2wSyxdnBcBxpKSzEfpkq1firZoGkziuG9fKQtbcxRHozik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TKU5LdAdN3YHWYjRcG69qvTnZgX4fW3qQd5GC69KtLWbQgJ2z8s4PyVjSH5zkDYTiawgBa3AB5Ab6f2U8xCzCns",
  "key1": "DSGhFFsUjuhH7tqorop8PfNYLKdmPVRXYza9mzk56b4cYE1fPRPznBj6P6nyEn5A7F5JJowG5L9uQ2KLnmWU71W",
  "key2": "5FwS3azNmkJxqkxbkKtzS2eRA1raoKmsv3kw3MFvN3TNT6daAhus5Hxe24fWnQHNq8pMX7rJo3mPqgwwo7uqNwHz",
  "key3": "4TpVCwnQdV4gVwLxQUp4Pp7Sc1ukfQusdLn5TcfUNDccgE66gCZxjCQ9m3wbw8CiDyytFs6AUFMdDk7F2jMHGu3w",
  "key4": "3CiiutcnHgHfvVB9duqgkhwanGaYnC8uDcc2yiT3tT237qeWP1Pnd9uvCbpZFjQW2wzt13JcmTeU7vz8MDmMz1Rt",
  "key5": "4ByMdfvmfSSALK3u9CeAVitZMqJjmpKTViHr41SUop8QYbLt2TprycqFdmZTYcRLz8Nkh5WFdJH4NfGqicqMievu",
  "key6": "5BQFPsu82x99WxhTRNpeRDTQgAJRpHCxK8KeZmCbXn99vajY1QpG8DwAsYKckveMWAzTVRNW5a6XiTxmsm6pdrNv",
  "key7": "5rG1XFEgRrzNuCuDjPcCxnNUysEMMjrCnmMQ3NutPf3sXgcXS584dVFKzkacAACzH8WVJwJufrp1Qqdnn5sanMf6",
  "key8": "3nfKUgcxqNxggc4vBu4KEfnpiHLh7DPocN6bPQLobT3KkbFm7898dxKSo6ae3G5QVKnWUHayA2yHpGqxxwq6rCDk",
  "key9": "27MJ8x7MS8yETgGpbecSS3T6Qk4vtiFNL8bxVMis6siX6P9bZMh1pE6yisQ1DnSKjbTA7pDSAyPPKX1jqp5KVQi1",
  "key10": "63R7YhWEXMQCnDhymK4UYAy2oU9Vaj7TMjyMugVmwQgzz6CbKDbLJehBj9HgDoUrapMiFoec6AmMkvBL8yLmkkSg",
  "key11": "2WmWQpy8C5tHAxzWmvjzCMYJeENcBoAqADBBG77oQVjQKVeH9FAvcsLrwTqZJiChSo8DQJujZffo9zboc1q422Zm",
  "key12": "2LQAqhe2LchYH51MkC79rSpgUzwBv5Jd84D7xzJAmeN2gXuyqKeBXEadpaEGE8EpmxWEMePQE8tc9PSUjr66U4gG",
  "key13": "2hs7KMxH1ZarzFmkFaqwNC6Fp8h9b6Y5YkPHBDUPNZyoKB9t3XuvDpWcAJBqozsQ1VSMU8Ef2kCHc9pjAzxPQV84",
  "key14": "fKmUD3YznAXMLVM9nwVAchZasVfPeSqAnsJCDAz2gzcMeoAcWn6UkvvAbE6ZcdvoBfQokKR1wEn1BLq17NnXbHn",
  "key15": "2ftRo7uf7rPGpgVVCszkqbiwtzc2Tw8qg6tDchKpJnV5d4KbN13LHkvnvSMtx9zSoggLYTLD7Nb8UMpZboVHsXGW",
  "key16": "3TEey4eog1cvNPbpffA74nU25WqaNdP18qEMAQXnBTofJymYE2P9F3FeRSAgStn99BYSHETD45yCk63NYHxuDcyM",
  "key17": "72ZARzBqgPimcjfYeyMg4vtKCP7pT2Um6k6wHToTk8LXPGrUMLKECw83MKNkuT2LAXtcae4gJGYawzUC3J45acC",
  "key18": "66k2jEhji3viNaCd9CMsAHsuuSTs7DiKVdJB9U24pQf738XzqymPT1CsXmrVGSnCvMvDNrDJaqd2Efh83DthiLjH",
  "key19": "2BvryTbZEg7eNymZRyvdQtHidPikpvAXE2153946zWXY3AJV4yFUCJQY81tFdWaMBNqLo4EsRqkDmWmR5qHR57d",
  "key20": "662xc6YKEYvy8XE3NT25GjtpzJtSeoQJzuAZnewkzwzcjngd9N9F4B2GREVnJ9HdrBtsfMUByDr97kxnQ2mEDpKJ",
  "key21": "45cjGpTrDiEpG1JmCXcobjrCArcHV575m36tNnEYVDmJri8xcHbDoQzoA1MVQsTy3eH8nNop38JtWpHYw84djUxj",
  "key22": "5do31Qsg4gjc7V3fY6hw4kKi9TJzQhPea9Xz7vNz2URubmK9hvHk8XuAihYg4C6SDbUD3ZJrpio45iAy6XVdMEEK",
  "key23": "5gePRiMyX7zZEK4wifzCxTzmnmC2n9LbFjNpA1udbXMvXw1GCjK1iXmieZA47y6QFc2eyH7dQHdRptKY8ygw98fD",
  "key24": "3racbZtLHNHxbTBDzNrPKnE7ZUCyN6FSrpgC5qQFLyjeRsesqzDbmNWV6YfZJbYePK8YP8b5zjJGKamaBwduXKtD",
  "key25": "28HmoPMJoNwmizX4XXqrNQdZMnyYJy78qyY2d1W8YTr1VPyasxNEJw2xaQcNy5Ebro9Topk5e6ChxWkVLDforRed",
  "key26": "3E8r6XBXsQqp5ZsaTMX8QtYBNtStuU7Fv9u68yaLmMKuvwHqVdYAdfg31ebsKQ65LaLfdSAcMP2v7LeCCVsnf1tc",
  "key27": "24uHof3e8qzWtQL3mdZedH2HhNuZEPP2JLrEb8ihC72RzZ27iB5y1aJwoqcTbY9n7J3GUrd6xRpfgHQAsyCLjU7W",
  "key28": "3XdauBcAgzrPUaPyQrPT5orLv3n8eMqbyFFHecsHrsXNBNKzZUGTAmi1iYfzEGHDfbPk5dWGTevqPQa2kd1npXXv",
  "key29": "3w3Wwz3fszmbyPCTbSDH6rtDfnPRobcLhceZ8gTGQRPQxj29QC4htcqFwjiRpGjPsbkmMzmei1YEcQdPxapDmD51",
  "key30": "5PCAqmrfMZLaB7kf4C3YmsfA1HQtFrXvVgBCfijyLLH5bY7D3u1Q1nchJYoPX4TC8xY6xkJmSQGbRATiUs77ZWuY",
  "key31": "64s4LTwsmKdYHDRQXjWQ73CYUcfiGxoSAUnBjhF1iGahNdDRks8CEfePreuCmw8PccXTnYUpStXEZFfycrZr6QGu",
  "key32": "gGWzV2p55JoUJ6T3K2ZdT2h1cTHgn58UJBQ7KJhQvCS95s8obmq4Q7dbK7aLU6jnbKFXodzDLpjc8kj8AQrhk9P",
  "key33": "2iGbrDazXZsYYMkYdG2NyYDGhm5PmJiiGnQVoaNWitJcbodeaMz2AgEocHFhFnso1pCeagG9WxszN7CMUFtaxprR",
  "key34": "26QjneieGH9egDmhUvPsrDpHh9eRmu3XfVx1biowXrHyjZaKnFKd3kFicTavrQ4yFp5vWRn9f13ivrKp9RWyWHrv",
  "key35": "Jd9QcNcSgYAFAsAxCSpKnnzhcVjkf2AaC8HAomvDrVM2iqP2n4CKbHQnGs6iG3AUwzMQPz95jJhV2WqBJRh73TP",
  "key36": "WabYA5RNahj7s2rCdViRJWe2ugM1NBxmo2y7kLK2A55Nrcj99BV917Yh2WXgYoeijBJVRxqkXhVe8GBHCszngyE",
  "key37": "2zHVVNyuWBXSZ4xCdGE3cfwgzsVgnh2XRdWXaimNVe663f7LrzbXKSbQTAWM3y5iMiR8rPTMyhXQ9uGSSkS5sVfp",
  "key38": "5adgtUe9CXLa3uE238TRAANPYFz3UhQUf2UMAgwt5y6ZREXiCwkHLtKej1eWYU9APR54DPwaUjT5QDMKjakhvRBR",
  "key39": "2dT48ibEs3KS3X6uREXrWVe5po14hWEQVrwTvE1E4e74r52iefvx9dMxPTDo7SMBoyScNhhibwBcA6gsA4wjFXjM",
  "key40": "47eFV647aPKEQx1duygW7go9snyntczsiGyNoDRW2XHvFb5yJzLZ14EsgsrJpEznGbRd5JdxxjS3op5KxzXZQFHK",
  "key41": "3MEsaxwqkari7Fx4p2NpGKftHvq9bHvYj6w2URiCy6pt3oeM9bsSEFrTabRvMrzA6KXmgCzy5wrqakpKNcvBB6gN",
  "key42": "5s1s9jERsGbsJUUcsEQmNJjDg46pUd7UrcJi5KwiJdtx9TQyXemDdamn8qSrSaXMR6K5yrHhGe5bdVz49hMWpsqN",
  "key43": "4QyzutNd7oWxabsEhrFDVcLsvgYELjTPoZ89jXoXwnV2fxoigaZ1HKdgAwHPY33emj1RubRQCZFGquVxCkJqr732",
  "key44": "2VGe14ujdozQ8njhrbXDoPKFbqV8YveZ2m6JoSYVahrKJX72Z6iuGHPxUiQ9sdd2iN6dUNN4CqTNq5qG5zBfpQRM",
  "key45": "3UfeTxMSqR2gmC99DVFpiy7JEazaZ2un2p7buLuvko68ZvAX4W6tLfEXj4UQ7szXCyu7HVaRrnUNpLxFmj3LZbu6",
  "key46": "3GK1fsHeo48sVbPT7yzjUsMPgNUuAZ9LHUQoBmajdcGuYGQt2PXBEY9xiSCbbgnmxoDU3VWPr1QrcViXKgiZ95nX"
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
