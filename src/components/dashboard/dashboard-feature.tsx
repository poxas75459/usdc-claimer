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
    "453CmZq4pp5aZuNMgjdi2SBFHBQ7r3yuuCg5JaCgxWqTdR3YQu3H6WFxAuzJ9v8VReVXL619THeJPwMnDKyBHa8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2myrisqNZ3Mr1E8m8gXfq2VxdPWAjuJLmEkDnhkkR3dHEfgWfNiEhoN6yCqB3Cxd9P144PsarQ3262vt2GC5eCXg",
  "key1": "9gWAD93ekLHvTihfT7n8WzQDktxogv5tGFMCN2L9GsFoUApUSK6SPA1tyxVBaRNJKutGpGfXbw3aVqYmwiQw33R",
  "key2": "5rM75X9ZopUrTXa4Y7ABFJ65NXWvZ5zFEhq1P5pHbYDW441kcqR8e2ubB3JHJoEsHropt1WGXVpcwcQCQoFGzRN",
  "key3": "3yHLB8TTrzyd6RSDetQyCsntuoaLqTa5XWu1JPbivP3LTFXMnecDwYYAMhPi78XkGxHiJWBtW8AsKNsh5HpGKjR9",
  "key4": "2vGkfqMjS6z7fbXmFid89H8AFnvfQ2inQerTXFjmiANrwKMH7aqXEW3eqqDT3YTqErAJKGa7vhx1hTDFQTDSdMhi",
  "key5": "5ueGqT6mLNyZ2GZRhKj63mJQGSAoFq7iu1BVtwoHr5niENrogWMWb4pc4BVsj1eFaWuWTLnBWZxd4xdHaXiWErL",
  "key6": "2GQhNFwksJpri5A4bfN1xsMM4nhJaQp2xdJFYeH9QftzdyHLQHevPpx66gZYwdJAJ5G2pFuPyaKbX8VdWAGbTj5Y",
  "key7": "zfXsREk9wXtqTSQP1PPxY1CuM8TwENjRcuaQ2FJaR9YpvD5zDw86vuh5wGTzLB2DgFFACk6cpDXCa7dACQBejWd",
  "key8": "2vw3EVicEk161aCGXCyfotoQwwMVm4L7pv4fPRTXZsLwM29yC1DEBUfyMGP95dN6fW9rDb2rPwjeTBbMgnJxLQ9x",
  "key9": "3MiRP6WnvYPK3DT9Lwk89nGVW4BNny9NLZWVYBqUQSEs1vcCz9imVWdU9nG8c5775Lv1C3MrvgLBzqMwnLxkhCPn",
  "key10": "28Xi4An7JQoTnu8rUK6po8hecVKUJ2tA6oCZgxcTSBhtQHorYaWRjPsCbz9TbmXAnMDUPCDjvBKnvHE5DEqSaV9E",
  "key11": "4yMZo3CKKCS7qC4VQuiHnSwR9HURHrE1nTn9An8q6PuqcR6Q5tS5j491bax7UR8xJbzA2XAuL7gc1kRwZ8kix3Ub",
  "key12": "4s3uCcckht9AofZhzgWCsVwhXvu1anuapiGonLgpkZDbWD9449xHYP1VieW3zJ1vHCUZbd6jStSz4BDgRjv6rAr3",
  "key13": "5jUyABJo996wvLiHGWUwWDjPNHr3eXi4tXG3APsZjMZm9oaWGd5TKYeMmxe4zPP5mKF3j9RjXzcDgzKY5BrJWi7t",
  "key14": "AxLhupELYK4tUnAhgzYWfra5XjdHatjvwy5e8QuXrJZ3DrpV8Bpmj1YadLpfXam74cT9hJHn2FBi9Xc7Dr6oWX5",
  "key15": "vZRaT6sEit8mPrJRNdcREdYm9FJaUYqu71yPhPzjzeV9JisvFSRDKswpumiQTtH4xx8YRMzhKMg7jjzAUxRHPUw",
  "key16": "MKmmf3xKvrVkRh972S7s6YerUiiM1eoTbu1pF8zxfR8a4bMTMR7FYhxTRzXED91zAUCCDXTseKYP7XTwozZTEqJ",
  "key17": "44kMWxEVVBLMji9FWb9Qghdfzs7GSpfXW8wgQcFuJLJ3wig8CWCrMbUNS1SVoiWQsRVSUqm1qAbne622kfuKsqNi",
  "key18": "22oPs7Kr5ntJCcwEK8mrsDviaaA6wTPhYwcWkzFHKvsngPFGhkf8dH1YjZRjwBbxsKwxcg1dECKFAgRonbzrNpVP",
  "key19": "5XdhJR5UC8qtCe5sJm4BnPwouHARchE9VDU5HQUUYqcG4YTp51nNvHyGoQJKy4X8T74g3NQhXMqrX6kZNKyr5hQ4",
  "key20": "4VHN7deRXgr5PuReuoMSBqKpqm4hcryMCYaDHKNoybtKUCRdMp12XojzdYawVE9fx9U5NCSYPeBxpZ31JkjuhA5b",
  "key21": "4THRzUWdFp31wAoCyJqK2r6qiuwxms9tDQCdjj9VpoSFXdSDu1YyUqcmMJari81VzToPdQFJN3uH4ecdB2YZiT2A",
  "key22": "4CQrA4skDHYbP3eck4117DeJok91xgswkdWHu2DTA6wWm1z5ARXb35FERRjwB4VLmBmfoC1RQ3xB7ozbv7kt9XKb",
  "key23": "2sPyAEWh52ts62VbXBX883dqiUnEcaBCNLkjUbv3z71YZT1QBwtwon2Qx9FBUyhSuDH6awxX6zbATkY8yWSNVsHT",
  "key24": "65YnWac3JsNP32tckDb3bfiz6zGxTYP4LtoigAc6AiksHtX9gRv5CcZQbsQPobMAnKeP9WSev5Yka9owM7Esw68F",
  "key25": "54Acj7nAyTtGbxZ8pvz3FE78fKVBNfrVnw9TkF9WyAF2irrtmp1J9A45EBr93b1vLjVppKRXdzPCHsaqzwF4eXQA",
  "key26": "3zmWvuiNmvoKdD6oBtn4e8j6RoxZfEsjkjfUp71nfqN3FAXdvcQQmjxxu9WEKvw7yqThETbFg5XW1x9VyWC81pJ8",
  "key27": "2iVaAWk3t22oyj47wZTGL6HyFmbAuDJEXVRagW8iVtcoxZmxUdBQV7wDULwUrVMPxAWzYniSwbB1gtw1MWnLfecG",
  "key28": "3nJj8Kk4GUFFmeB5g5GREfmo2JAKS32AJqaYEUnDXQ29usNZBmn8J4xxEcbY5ZcgqgjHZjNh72TxFt1r8ejQiT1r",
  "key29": "5Fzvm5d8dZV136runoC6TFWRBhrQ4Ng4rBuXkfXErg2s6XA8g5purWLmzxvwm8zKKLmETEZ7QgykTGzfA8WeJAZj",
  "key30": "5xMX8faV7zQK3UrPedgkdTNvhcfRyAEjJpQJkbMLkWE3RVWLfrLdL7fmVYoaketLNDRGgwLnb4Xg46ubxL6HMBav",
  "key31": "3UK59wpsymjHtDMbMpnqT8jyg5Jod8nJr5r5Mrj56rjp43AxnmvxALzMdwfa9hMnNwFcd3KBXYLG7xGigjmaEj5b",
  "key32": "5cUyerx2vjEAALQdGdL9x6gGFeukQRrPsY81jqWL2DkQVQocBjJpTk98UgbjGyKRU6dRPT8LGWNiC1YXUgr3z9Yr"
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
