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
    "618Ci7copT4ArZh6ZiB7VeoPmiY25sGbHxpz1bLErRUGfMpk6X9YbKswGomBcwWNpwqEKxHDrwKhWBLDLG6coTrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kjLvgQW1xGY2MDsGpxqHTV5itXkSzVmTbJqdNLakQZ9W8YcmH8WuL6RoPpj1a75TRWYuGZjiK6RP4jcAsvENitt",
  "key1": "RT1y3H8o5r9P7vwGSXC5TZYZyEGRRGoADBXn3VWhpXTaFWaetjNaBkFkvzaJAop3fJrQ9h8LRxQVbB7KALJGnhW",
  "key2": "3TJH3w9vioCWgav66ZDQxAucbRSpzrkVha21M8KP3UmiwtWSNVMbAcFh3duL2SBzEygRPiYLu7NvMErhtQtSJ8hz",
  "key3": "2EiqAAxoDh9EFNuD6bAXvf1DdJnHiSypGwvZ7hGJ2d9CbDyK5pnAYyjy1YigKwuf1Wzesb7NNsW5fVso6iGpPH6Y",
  "key4": "n845cuQRt4yDdvPXCL1BQcd5N5NLqoeJDGPYNwR8h3VCZ3VNA66cZqAadfbrtEr7UubZWECSqUmtxsG6E8GsnWP",
  "key5": "2AVtUzPBbsPtDLKQi1HtR1c1UfQc9hGoxrcc62cvxAAGmwFqrCs3SuMdjCQZinUB5LGUFwEc9csoeYsziQiNRqFn",
  "key6": "2mJYPxW7Uji6RdiKywenQFZ1K8BwWCsGwzoshF53LdEGHtHyp6W5WDrv85sXGwCLhM4zqofj1SUSJGmziux2pFoQ",
  "key7": "4SnbXyc5D1DZC3EWTKmd2U6MoiRYDZN24wFp8JrttPoHcP94KugGr61BDhHZv1sJTo4Sbxfhjw2anmyfgRSmArhZ",
  "key8": "5wahA8K4zZ4LnGbFZ2NtcvEpRbzo3c7KkWma998b7AGck1hxAYS9SLzqK4x5UKvQbW1fKDTmQTTwScLUNDW4SZ8K",
  "key9": "479W65WpjtvvWnkT91YfGTMfY6dJTu3dMF7ANgcaNfx3FheLY5TEcteSkoMgrugjN3NXAQfByrJd7KsVxy15HkUC",
  "key10": "3BxmvgiPqyj8uCj4GcWxeocm6yt8VPJhNHPScep2YZLkCZhkeJbU8Ts5KjmhFyQ5tLBtMUQTPeS78ueCQQE1xrbW",
  "key11": "4WPRDD6nizRoQJjnesWFNpMsqQ2etLm2JDCFdggtgPVYm3BgnwbnWESB5NgXDfv7UQcCgV8kyFFN5yeA1osZWYLp",
  "key12": "4c2sM9mGLzr9UhiDp8VFFrR9ZZPkfYWNUT2UnGJjASaCnzFmwHMCjitBTs19dtBRJ5uKUdMFHiWn5AQgNkN6gcyi",
  "key13": "3u1MKeSvxc6zfvUTVJgk9ybJKjB4AQDZm3tZsyvVjM1qkivRrj6ZhhNUEbEMeS5eEx9nhyHoE4bfcUspcAwCKUQS",
  "key14": "whNrpdVa2FbfmfJ6mkSSutbEEctumc73sK8oWqtWmz9LdGDQRbZVrtXF6QhggWW1cKxCJSc6aLR3f9ajEcDhytu",
  "key15": "4NTBKfe9MSiiSbb25FvEHgWh423P5rfG3QzHaj23CqBmi1gQvmmLcRPsFNbN24Xjq9SHz3q59N9kZQZyP3cFv8By",
  "key16": "4bxNm4YasdZYGDntdfDXoCLJEDfLx5uKW7VqzCYVXULQELZsUHHTJTUEGmKwbungeTSsYpsJ55y51HdXH1xhqScE",
  "key17": "5FR1WGW2jwUEJWDgR4vLbDKUHLtqM7CJH94YRKdnJ5owa4UZYPiNod5zDnq88Ag4xaVUaVJBvo8dRUhoXP4TnzLZ",
  "key18": "9UvMH7L7WcqmV6e72PsKEXGKRZ1RrDcLQrK1dgUCsB3z1QE4tLtaDjYghhcnRViKdLrGUDSzQrtaiDr6Ti7UpyS",
  "key19": "2vNydcD8Ev2TSSR5KFsWFsDaZB9f5LK2FqmV8HPbDWJWSCF3Z6ZB29nccSixWiRsw5uV1aX42YnRSwJ96m96XtUi",
  "key20": "5kCqWU7UX2iaQeDtdsU6DFt5RRbqEdT4SQP4FaYzT5tx2L7GoK5w24bXrq3krQnurSpAz1JicQAmFr1nzd3pdG3H",
  "key21": "3sCCE7wU7aKGeyzeFMeCooCLL5fWxkTC3DWgEWnYQEQ5hZBgHLhuSFCutZv6Gj3ZfBQKKvMN2FmnqgXzVTdaPXZV",
  "key22": "3XGb3PS62aJTWGDFb2ZP3Jnhwzcjb2LxzzGCAQLUvDYLf7r6gmZKXW8c6nB6MWfM5LDANpo8JAxeqT3owRbyXq5F",
  "key23": "654GYcRTjVCqSbGiCbaXs6Bk91rRTfJesBZXZTYjDiScQkCGkkNPVweJyVNQgoyjyrCp8vAk9HVew61hDUoYCt5i",
  "key24": "2KafLtZ4QwxN1FwXVRZa59n4mQKykT3xPETozXfHAB34DRrGbmHcxAH7YX46SuBw93vGAGopDugRfKn7Djy3gKSR",
  "key25": "4PrQhPGKaVhQc4RCzaDpWGm2ojBVvvKsCszpJrRFDe2T6jQGdfFDgTnD7KPyPZeQHvP6MHNcPaMbS8h1owJSFmEc",
  "key26": "3pqnHBaNLA6NGrmFWbq2Q3sn8L7LicKa2M9PS4XkNgkAB8Zy5vbuLpG37LnReqpibT3yE1xApzdSPzx3hAPE2eQd",
  "key27": "MRtU4e8JwtWg9YJmnAkzfiHY7Krayp4mQYiF2Y5kSBFKcStE5kTqQAZESBwz2HvPRvfT6PKfve47kDdgFu9WWog",
  "key28": "3jYi9f6Uq71WRgBkq933Ef6yMYnTfD92sWvshq4YfhnndvEMpDvQHCguQuEdXKmkHAFNTrupuiRB1ofswnKxRG5z",
  "key29": "43YDp9EQsACMGJZfw4eFgS47Dc1Ufpi6XznVDccbbJHsZX6KheSD4cWu1LUCVyReazfQG95ty5szqv9MkCFiEEkq",
  "key30": "3hFwg6bfYuE3v2br9zZEQKcDceaMCFdEE17MZmK9FLtWwWLtEeqEG8EDgtUNyse6ioYJSd1oBSpqPiFEYqhys5Lh",
  "key31": "5hDgmS3oPBZSuEj5vYryG1cQcTmV4xGiDZtM64ouiZiJ3CVTVybcxeP1FLmAXUSXNfnFXDMPZ8J4mEqKDQYuWVH9",
  "key32": "2Xka4ZYqZ4bhpCQasMbUbUV5FTA2Aj85Cw8hMUAp3MQeBCTNPZidssnQpCSPu4qL2M72wqtDYSrBcQ4S2una6pLW",
  "key33": "5qXaGHn6xyXfQ3J2vaVBar6dKBTgXy1te8Jk7AQLv2m38DLT39KLNC6aNX5va6J4Wenr8Zpug7byM3RKUa3v1gFf",
  "key34": "5FCLHDip8KK7kNoV5LmcD2ahEzmSZndfsBua59jM6eTBEuY4qBm7wwExrvg51nvhS2mA3ThRkRMzB9hWw4CxLBXq",
  "key35": "3a9nWHiQLpjAHXnPJXdZe3Wyo1NEoyp75xJvHmnAidiKKSVNanYw7HNKZJqXEUzEUEPBXp1wj5XYMyTBctjvDQVA",
  "key36": "KLy67Eq2DsWR2f8joKWmmxFbZteuvJvL1bb9zU1T7MAmbzqhFYqCnBXZZUTurEzHMRvZt3S34hk4Lhbi5rKQqrG",
  "key37": "4eifokxzByS9yLYwpPbc5LvAc9SFvqzrzbAGY9zGDDsFjcXM7jTViMfrBkLCTqTxBHKvJyTZpTAw5kK4spzgYceL"
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
