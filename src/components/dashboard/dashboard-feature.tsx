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
    "2L9Re3mTaF3yasFNgT2HBpqeDidN75n4rzG4X8M9nHYShFVExkuKEiHw8SnuarJzSq919XZvYC8jYxdoH3UKnkFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XsokBTgNsYxrGtYFQVysYHaPoaz82FSQ6y5Dgkd4F5VkRsxnkeyigcrjQd2HNq3p4mqiyRkWsTSE4pNMjNfkxN7",
  "key1": "37dqQLoM3DsigDMxqRZzMmSqDe1o35gMhdKRkjZLqDu9PmnNckiauvQ2tNLgiXtSpQHnVtxF8iKQDGdedZRuTkXb",
  "key2": "31YV8SFyGc3mUMfrjc7vYaHxLnpTdC3kE8PFNnGUuqDPbYfy2MD5qYAkwc7SxXGgrsP6xzQmpZGdHU7DSyoe5Bs",
  "key3": "NLjWkfnQ8mp1fThkPJbZmNJP9ezCEWZXBZqoi5ZMsyTUFz84HpLZxbgbfjVKimzbKM2ULPtSVM7yi16gi43HHLX",
  "key4": "29piDP7B7vNJN62Tdp8Uchv4G7Fp55iaXa4HrxFkmuLCywRktrqWGJoEtWBL75u5wfvx35j8FeJ5XtmAhTbAVCWx",
  "key5": "4W7bnd6DFm44dmkKYLJFiypbJmpEGLGuQtLYJfx1kwXgiD6Wciio3M1MiF6kKEi5MsRLA33XVDGkfNhg5aRoXigA",
  "key6": "2NzK69imCniJKQJvwH6KF4WKUqoyAek4PsakE621CHoSSA7cX873rfY7jnT1cuvbfcHUU9gj4uZPHCHtDjpDe15q",
  "key7": "3TAKhhJdjiPBVjSFzyvq8HeTi2dLpG4TckZGdq7kZUJNzKvudRXAMQF8VojDGCs9S2SVekzKSrb6fPQcyopmddzw",
  "key8": "3XaBuJgcV9V8jFRJP6xqPyh6FVEmgShRAAGFhahTYkUEQy7iFwE57jUrVChKZb9yV2d3WxwZeJPKP3soQEznJuPd",
  "key9": "5sSZVsz76R424ocjaTzef43VmLjSXSH67uf3QZnNM3QAA2gqC5X9ebChnv2YJCyJUH98DjvLGWz2GLyA2QXAtLN5",
  "key10": "53pj5xXBcVnATX92YZFB3RX2BCHhGRZaVxVLpuZ5eKEshg6tiubE9NNYff5yPnwFNUDfi6znzc3wxSE5zjacu8FV",
  "key11": "3zGDe6Q8Rbtzz59tcZetQtgiuS3itTxkFtpQu2ZLhoVDZheCedQmUTabwY7wupMxzUwsDxkLhsfNvQnvdAi1RPo9",
  "key12": "2VwtjRXSYDRg27D7k63cou5siQRremqbhaxqEQsAiUUSU4FKyboiKdcsUJF3uhitqTqgwJj3hKXdsef5fRwRC63Y",
  "key13": "2kH7YCbYScjvymU4R49YvMcswHvv71DBWrH87XHfK6keUK62FuhwbG9T898KHgq2TQqnqxgfiTfxtTQW43BmHwFw",
  "key14": "5dLFjeBbK82ekw1xE6Xekeq7zeHZS1KVb93RWLFKHGEH4Eppmcvat5vBA912AguepAzXNcH11WM6E1dw8oQa6b8W",
  "key15": "49GMoTxYdh7HqiazYqLjCxf7xzSv4u9iryVXDPmwyXL3WfTVLiip9dtFG27C5WtVGa3Z2MAgChe99FrxEzKTZgwM",
  "key16": "b3Qg1o4DeBRK4XU2JV9434XcpRnF9C2Uh1vYmm5xB9fsFxs6j1bACpsha7Uwjc98jwVnFTnnj98nsmkvoQVGW4T",
  "key17": "3kdL5mouDZoz5QqZ7MF2pzJgkMZdV7auuxoCpL8qdX9frqjsPZLwNAWYDyj7kUiQREYWkZJYNEjuvY2jycYQEKDc",
  "key18": "23WDFMawFoJYhFaZXw2cRLogu21embjKEFrfrSQHfcoj6t6vvFWSAcAYWtbk4bpzE8v1ZiXGX3sJCqNpYtCQa3w7",
  "key19": "46EMGCoY4TDhQ3vLDnSnJnAjctAuo6VPuR9p3V74J5dqvjdMvwP11Gi7KZnPiuhYLP9knvzUnedL7AL1yYTb4W1W",
  "key20": "3o1aRCQFfqA1Uem1MeSBuy8Z4UfgyWWxm4gALAWiQihLVc5j9HPw2u9kxqdWjTxK4UNanEqdtfXZJwHcdAaCEzP7",
  "key21": "fbtNCenGqNJiHCoUkLziZyWzfWmwo2BurjdXtF2RDaQSEDAK52oaursw286ByKa6PWS4iL3CLLiairH2QCFiG9M",
  "key22": "3ps5mDutb1JdK2rCauSKpsyFiREJYsYCj37MvhUr8xYaAPDtXV2TrTbe4cB6E2fPx7vBhjYaSwuJUknrRzZ7BkN3",
  "key23": "2NvHv9RXyesrjsFrX845g726JkjshB9ium2MDaf4NyC2TRNLfjWZV2LsEzxqoAUASo1Fx2dycqkRB1XLyxxHiku1",
  "key24": "2ttGZ1HRrqBqspsdfQS9uSy5Gbr6rwK4djSvw2yxL9oackRvMMDCXx5JJ8JaDEyoHQtdw1Yz8YcV7QAdHVa6rczk",
  "key25": "5q4PFEjKbQ69MR6WKVNvgb2QkKpPKY9nJD8WWsXP6dUbSw8CLCoKrt5GjuDffe3BhD6QS6dY7MCXJebCdJDxVCYq",
  "key26": "5CoG8JEZDBZKDm8qdhWhJanG2bDciYXPTfEC8d5o7s3LK1S14iyiANt1pt5ZXk98VPHrieJJbNHAGD8xcCYa3f4X",
  "key27": "5Esua9BddaWSaPXEEk8F5yzzjZypMqzV4mmd6tearPrYKi72UJgvDTPgLjqrfksyXKX2pvFqByV92GqjPvebqTKw",
  "key28": "45cGrEGTG3dRhoPWkGKPusoa62bUkmQN16viNqz8CyvupBNqsYUa7MEPtyFYRUBDAgahX4MKTHVhhBg7rvsm6mKc",
  "key29": "4qkYhBQhr1i9VU6wZ3eVHuaVkfEGJE1FGcbKM7pXMMGSCGVHYbBnqkDA79TLQeubQ2oGaFYyNXmEXVAM8gTCg1ES",
  "key30": "3CfijXqmrqqPv422aB5JDv91unLYHTTQ4HP1soDwUwGWj62Bs1tjKabn1Lz4BgidrVRgXXjhpB3wobd1dhFac2z4",
  "key31": "LYPVhVNLWTuAaBXNeyNGEhCEHdNtRt5ompK8Mqs62rBYvmjEsDiuCHRznasPaDFvjM6k1cxZry65DwrSi5c1tpW",
  "key32": "3R5HmbHw2o2fUvCvU3LWUzpzF3xv56t5j8knfDyUdjfA2QKv6tk2u4jeQ7J9AekY5jpHwTn9vHNTsNzUVTEq75i1"
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
