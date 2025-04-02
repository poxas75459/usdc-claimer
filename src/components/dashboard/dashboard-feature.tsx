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
    "4RnoaT4ERg5BeV6XBQtVNscq4PjLs5AGNgbQS5KnhiHU1uqHSb9xFUZfzwdwu9gEPG1UQJTFc8SAn7aSsU9E2KVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wwzYKwGj7r1ri2ERBEdGHmd6VLkSUoxRKV4pUJd5Fbckhzkd7TskJ3bSJX1kEgZ2fdvUD8sNoVp6rYx5RveZsgN",
  "key1": "3xW96UVPqa5BCbFgq32qVtXEqShKVZyEPWZkEu2DM9BBE8gb4iCbBDcfxUhyxZchqfH4ZdhZA4tY4XGbXnaSWEUh",
  "key2": "5n2oHKPun4i244Wr54cudYj27AwF1y6B4FvwndzPq9S3xEMKe6MCgTYz3adM9778iRk12ssmtaLkGYXnqp5uNmBm",
  "key3": "4LAwemGy2uyPDAwhBTqs4tpaSUCNnUd9L6UwWigw2RoghXxvgB3Ac9XqYZExQTYso1sF3mYF8QLqLQg1FUtC7kZZ",
  "key4": "7b8ZzdhvgfsZdTAkYpM5PYRtJnDDomEHbCLW4QRmxTnzH8gmHZ3493BVEU3MjCox8u65M5uhGCAMtwm2R4NiWwh",
  "key5": "36vvTdpjkZTtBxBw97CV2cj1PCvs7DgyopvPWtuo5mZdrihQoF55k2Zm2pwDeMX6jHhyogTRzM7hBPJNbtECxHA5",
  "key6": "4dTYapeJPSfwvwdx4KydmNTxoA213m3RbhTKjwivbe7mMsW1xBDLtFBcB8iyU5SSgLqDeAKeaTgWZ5rmJWB5vQ49",
  "key7": "AZbdnrvLeYXFu747u98k7Cm868TKT2nQ7QH2RPR1RjtjGwSiZynQ6eMuut1yCWQMG1BLPgu9VtWfQpwQ2DKd4CN",
  "key8": "4uh2YaSohMX5X49uaAB2tTzxmt9p3tycVrxYz3cit3nYXwTQyYTjRLv55xwQJxmAMpZmzN6Myy9HApQVviT4jrYE",
  "key9": "RgVGJHn1Jsp7VNabucJTu3EZktaJwkUTpZPCapFRTV1LRepQmEb2qVWP9MvDRR9WF6Z27s9rckFEJxb6aYu6cHw",
  "key10": "Pb8cChgLsStpUL8zF6HZwSymkdzZ9ybF9irHuMkk2xVjcwZidq8VvbwqvDAcFHLVCFcepyq334peqXhUFvphR18",
  "key11": "2vPhrLk9cduHuyYPPyccVd9FLtLeyvaYsP4tmHqt1kYMVM3cYAke99bBVqUp62zVaukWiooRHTjGnFy9NUwT9KPs",
  "key12": "3GVuwKegGtWLUhrXGHJtGyiDH5t1mjPTfXAAVEWX9fGGYoGz9xdMjtwJ7ybovtXJ5665q7zBBFMwuUQ52oSVVLnu",
  "key13": "5oPnCxWrmU4deiQZH1n21dFZ6iuxhZDtVNZq3vB5DGMRKTgGEVCdRvnBsQA2m2MKXX3cGm4p5avu1Ld572vUyvvR",
  "key14": "FAwR7jVpfDzAw8YhEQgrbA129m1hrrQ8egH3tPq2R7yoRNptZsFsMW7GeWQUG8yJjRZNd6MmLvjy9iaB5FSfiZZ",
  "key15": "4SJs4mPQ22ECfxiuRnGTrZMXcK7fkf29nQ4UkDvUPn7uUu8cB2VKSqTPrLvBoyk4RMYvfCpUMDmKhSXzqx8XspcB",
  "key16": "V4DtvBkofBpWQgdryJt5WT5TNo7kQQtjPuV43dD7xDL1xHCro3mZMFGFa8BdA6WP34g8vuyco6pke2DaPRtK6s9",
  "key17": "kMtT6Z4h3kc5kFTNutSE7bGKKcbuTDd3noXZw9u58fbqU3h87mtxuiakfFLvGqu4o6gefY4ymMGLySDTJPoejet",
  "key18": "26beUupRTGzkFgkMCk2JH9PHpAqj51L75vHuhEaKFRb3nEpx8RfEhSqDULvY5BWQbEb7G6ezxicuKS2Asbbgw45n",
  "key19": "59iwwMBWZyeppX2UVkCzeFUmTW171R1UiDdirzBUa42ro1EUfuVTxcCxYd74JMvafUKyRAZdDsEXwereYkdQ85Nf",
  "key20": "59Ymtx8xcWAgz6xTXnkNDnmW4dbWniCKyjYgEfgL8y7VFSP4h3Hrwsxef2jYNQF9ZN2a5FheY2qYLdZtGYwMLUS8",
  "key21": "5Lnsd6uWVA693weEekDkJvNqnqhrEE73cPLXBhq1HREpTTqoLbgZcoTwE3UEsM7nv2oxcnHYyW9dBCA5CTv6DCV9",
  "key22": "38yAr32cXCL7fxFm4o9Kc8aJajutxZeTUUegmMX4wYn4Pp1iU63WqZUCQNN9pHarLM19XQYxjz9uXUGg3zAQ7XNi",
  "key23": "36Xt17hCKTQi22QYFtfnq8fLPdTmSN5WZRLfpfZTivnKqG5Mu2GB27iimCaijRx6XngjrPz1omgBJ92YMsNcdLqa",
  "key24": "Bw8FbTeqCK3jWTsgGGg5KsUMPEhfrtejJuXKJEkWm4JMiobCV4VB2sqw3WR2fZYpjrtfQi2dbuZAZcFWfZs5VQ6",
  "key25": "46KFvMZTLV4AHwHDbCRjvE8whGFBYQhefuw1KaJJ9CTCSjEdpC6HAb3QWXb2bgwisNDpR3jpw1oYjAqTQCvrpGRD",
  "key26": "2SVfm8pCTepf26eDJX4sg2vZ1GxA1NywQXqTYxV3MpMAyZHtE9vqyfvSLAHVQbH2BgMwL1kRALmT5vjPVxZS6DGh",
  "key27": "2pDAArCgUfuLfyrxe4tDa6fbekVF3XEafY8FqY4wykpfTNaQBkEU8pqVKuWaEUnuGPRgY3ULJeY49wr3u8tmacVc",
  "key28": "3hV882zjpaRCzzghbYXNB8oP4YE5XjpEqLNnmfngJS6puByWcUQ8fd9tiWbEcbFdeqNxx7vZ6whdDW2u9zjxQDLE",
  "key29": "2NHwFthnEiX2cpArGsL3jzn2E1JNXFrq4Vv7uuYJnuakshqFS42rrQzpizcVvHVoR1jRQML3apjAGFP5aZNaPiYX",
  "key30": "37KWMphVsWPgYBBk15y5RzMAiKRvC3vS5X8MzNqSEHWX4SSa6TgNaS5BPTmPtaG8C8rn9BUenLyHd5ruXvH58Xt3",
  "key31": "5YwkcvGHKcdWGP8NchSkCZpzr5EscGtAdEfPrJo3bnTk1hGtpxVR1AwarbjNBgoGz17qWzzS8p1tdnj6AGk3pSZu",
  "key32": "5CPgC4pJqhtE6bL1qbn9hyyHDvymPiuuhhY2jrrJKQ1FNBe9zm5iGwApwu3DELamnGpmQYUqZYt7LUMariJUM6qQ",
  "key33": "5gWgrw9kpwFznn9x3waz9hZKLNF2R3EJJxN3MAYcWMG946ejPLRgM4etj5uzqk2awM3SQunkRhXDBhd2AJEqYLea",
  "key34": "2FtbKFZDrZ2NumkfG13YFpcNujZzss1jkFPukWnRE59TDJEEfHdYPcUTvBGrUHFx5WhkrY39APBJW8EkZ4RMDi38",
  "key35": "3XvgdY31KnsxgwNCTGkdxZC89itCx99ngm9VyjFUqDkcimu7eRCjGQhizVtY9i8XRbDTFfU7RWKRtU2jyGJBuiBh",
  "key36": "4wXz5TtDcKNDV9JvJQuravtaoSVEyEpZX9HEKfrsaXLdNMUq2gLLhfwd3SxHuXnhB5WQyfc8W16DfJd6C4982h5n",
  "key37": "PUfJmyHCeypSrzvayrmcbAevbfPEwaCaB6KfvCukhnPAJQ9ti6Y8y1HLJRY8FMPnjNdrLP8aDQRwdq5B5r8uDvX",
  "key38": "4UqUCKeNudGgnswDRiqxtKMRCQCUoGWte8kiuYkWjiyw2EUbEKkJLjCHFoTsGGbRnajebxfJ4GQWd36igMrpCv3c",
  "key39": "24buP25CgTwnePjokYNr2bJJaSApXo7Paw9uSCmZHHb4WuZSQ8pFgVYwhSijpFiMEDKBDMsV3T3LLbctPzZvmsXn",
  "key40": "4tUiqseL9poYywsKmB4AjP4bLq9rspcdboFBBxNikdbQ5dDbVgj4QxprFJQwXG6KzuAqsaUFvU6b5Mar48RE7BGb"
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
