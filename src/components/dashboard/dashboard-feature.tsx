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
    "4CmvhKvNv1kJnEW1fTLdMRQaD9oLontSzBVcqMA7rEAJAaQaarzyAxJwyS7b77CXT7CdHZXu7yzmXUybXNvaCDgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xvz4NtfTX7CxAw4uGajY7PTH6HXQw7GvJbANSRhFogcGyFpXRPyW7J3fgXSMK7jYZL6JWsXhhT4bNpt3StAVSgo",
  "key1": "21GBDZKnkhdwcuoSWTrFzRT1HjrgkYiqXARu7RD7hK6ZmMVG7a1zPksRUgbEjwQbmCBMw9P8zqm5MR8DERZUSZz5",
  "key2": "488NcvC6ZcW1cQinbpxDZaCi174jWfYK8MZZt2xkqGvWxy5wpQuWaJACH4VRJ8L4mjALS1SoxN7FmGXWhhSNHduY",
  "key3": "4NR5UgfyyW6FYbin46G9My7aPh2Rg3kUyxU2zq5z26tc8vD7XUWSoernuipEYqLhXcfiACWtRsMigGqXLNSM6ZRU",
  "key4": "3HUY5fr35BGiAgj3XL8HiTbsdtdztqiPWt8TevVRUNP78GvSFbuQ1Shn2jPpsqSHwzwKK2gzNgDTQYtZBbq1vQj6",
  "key5": "3i3BD3Jh2VLhnSf6eXHdd6Bj9hskq59pF9HHaQfne1mwTk8yGSXCo7PRH9MTbV1T4Rxd2XqcZ7LcuZW4iksBfMzG",
  "key6": "53xD4NCa8X6ea9Katp33Z1KxnXraR5ADuJ3nm2BpsgHpeWkc7NmPyRu3MWzrYjAfs2yGYDLuxA2Kp7ZHMt9kA5Fw",
  "key7": "57wLGcVGc1wVS99iscKW8KqoWTwvUBrfSB25QcpkrL7Vg26nJPGTrRt9PYhLHsYacTq6ZvcpR1a6C5g3rScKqe76",
  "key8": "4a3Pkz1TWhaAbTQU9bBNKAmU4d6G2xyVJ1LKp5Fv27gJFokttdXBha2UzcPVToEwpjPMjy7qnwqDPC1Ho4fpZwGj",
  "key9": "34D7GBhcCrvq29VWhcxEjiy2fv3W5mk8DK9TeKGjQVb7UQQNRnhPCMynapC47L1p4ZZxSm5ozgeJGLjuBhzLFBtu",
  "key10": "4hmAKanYJRqd9gTskFeLCzDbnbni4iYj5rYEcdai32g4CU6fvpgB4t2xWPtKkssPTZh5f69RAqg8oZm1oUUCMFdG",
  "key11": "39ssuhzPrw5JRz5j2SZFAFhLXbvTnDQDdFi1VeE9BpuM9chwbnPyvrVyAxGk3Pa5pdrCFL5jnj9yMtXneFLbSoyw",
  "key12": "5Kg3HKD79CdKWXWmsz9cKV5WjxX9ZipZko1U5iV9p9ZzFPnYzc6XiNF8N6h4s2tvgXjiSAaqSqJxAXd5xjhsvyHc",
  "key13": "vhUpZaYDeVJTZomuqBhwSQBMoJFAT1vLkqSqxLjuVSYpFH2SffXHejdFa8iP4cLgGQ4pPzFqwyD9fKMYZv3Jyhh",
  "key14": "2XMsY8jQKfYmL5TqLFgKdkUEKAfRdnZmqMu5kGdgtbmJLcaSjEC3kFvwSEDreWdcDT6sEEtjyZ5e4Z7N6FgbLaGj",
  "key15": "3sYYycCv4SoWj7cVjYQPU9iqKZb5yAAUzVYUD9Qc4Q6qQrEgf5LYg1UpGJ5x1ccK1X2N8vCCiyMtDrsR3cTrhd1t",
  "key16": "2FQ5Ry3Lv6MGNrVGa7MMJLLwyzZHuknWKhLZnZ2cZn9fd2sf3wS5oh34h3nDJwwFXgCZbEXGWggLi92kkSp98m7e",
  "key17": "4Tv9SEnoEvooYhwqCbA1YH48rztvNZLXQNGt2qxzcuFLAP94NCXR3jSFdBjZMJURFq1HWfGCWtjgPJPyUpCg7WYg",
  "key18": "6DwHibsro8qM3rEcxtJ61vfC9YHB3goX6cmuAESx5wkGAuss5ap5bqmqBGjWWProETyUW4NqK4bJoQ7ZYN3X71y",
  "key19": "3hGu16ZurxPyJgU5LHk9nNg6gPKvR8qcKRYdEAySMkE2aZbGA9bCNPzC5ANFbMjhJhT2n8FZFYG4i4FwuwNSS5hQ",
  "key20": "MQBkGSDuyKF6MWmPqdVXh7mba2uYqUZ6jEQPkoX4xUtKMyMR4WfQaH6VtCacawZmvsbxWVPBE4ddza25hmpQxaW",
  "key21": "2ypP568t1mXhjG8o6pEkbsw9YrGjsUCCanj3pock69St14MY1wePPjCXUaChTMvXojhE4TC35CjNsGggwJitqVXT",
  "key22": "3US6X6WaHQ8mf6VAnYZMcf8cojToAB1mi5PRSuNbgjVpkRaX1a6XuCt7qithCk6gv4f8sX4XNwjFYQh1jL3zBano",
  "key23": "5y8LM5EtC1HLGwXDA3QHN5ZVK79Rruk2jmwTNmekzt8ZeyTzX1X4QQBGaGyCBh5eyoonEYyW3ys3vVRe1MBSAyhz",
  "key24": "2FmMrGH2sUGWXuHZ7uDaU3PDJ7W9AUwjVtPQCwPiTfmkioJjpUk37HLQRAv9KUzZbVKxa97zJWg9o9MFybvRkdsg",
  "key25": "2AbUV5SojFhefqGXCqx3ru2NdQfVVyFtQGmDp1n8JPLYvNPQLKLjjW1iXSc5CGqD7UEtZJ432j9RxSSN6utd9n2M",
  "key26": "vN9No6VaP8HTfYuzfoBFGBAqyKHeTtDkBW1yLE9kNqSrNxhjJ5SMHCP1X93Bf6AXfzgwAmy92dDpU3cXd2BPMUH",
  "key27": "57shnguFfyTEJcTijtDbEz5NRT2G9qxtzt79NuRz4WmRXktzqr2cWjBLZwiBVq8GDF263PwZaMfyooCJAAMYzyFh",
  "key28": "3YKQXES7AbBYZ1VqGa6VQRgPtJHKj82VL99F6xH153yuTHz8LqG1iRtpgMvAc2BQDCSX8goedseEQ6P43HpmjtYB",
  "key29": "3jr2WXBMKBVLN9wgHy8NDr614Q27NKqxA6gJkEaaPo4AnnUSmBkVC53D6QfzWH2x9A1CdBHZkdCbqqMhkZ7PX4yA",
  "key30": "45YmToZJM1fbeTNNQkXia2Qd9rVSeSBH47pdvyjekFxDnDTfKg7nx2KKPVP2SFnHFXRwLzgU5p4aQU3PVYYPJrjF",
  "key31": "3UBdURpDbHPCJS8H5CYo65EntRG5nkfY2wLbfqFCm4ZYUdZoZZJEWPhAT8LLitXvAXv511e61vZAt5G6Jxkukc9e",
  "key32": "3pB761pKFbguDZMrDGdRsHhLVKT2LkzQcdFRd9mQ7HYsehxQR9KavENg8agC5z5ThvMgX5z7b6xDVhJWcytYHpwq",
  "key33": "2deWszgRLpZs1MHdcbJtnyG58beMWpQ6pkp42Pv7pQMt15yvB99YvpCScw9WNyuhrWHRhSAQUr93EgmiGf2B76VY",
  "key34": "5UU5HuXPp8fJxWqd9LktFBmfo8zf47tu3XXSVMqNWbvAHRjogWgdeGY6Q19hPv87qUab3dHDnynp3PMXTW8g7yzM",
  "key35": "4DBLtcPFLNtD48VVZQgPtb1Y6Hpzr8VuUa87kLjR89gNU4UXTdEPU92PtjQwAPowRSbxTViWP43zJnyYELuSpaii",
  "key36": "5Hfihfk1BcnTemNDnxyHNEdcWfDKWnV7KGLct6yuPuqxKXSreb34Yeb46ooQRxB7SZHyD3Ga7YMsxPJnAp2XyfhL",
  "key37": "2XmbxWr7mNfUmoAt1KRFGuxHLhxjgjEbDyaayEEFin7bD9tPZgmaMmAoA18KeM7bwXgtCGZ4MkczYSAtqgQvjZhG",
  "key38": "5x4yozMP41CsxTQCMBx7c6tBiUZyWj7y7tHGH7SYpz2Wo7SeKBLb4cpP7LwwKnGQr3ou9MeCnnqQoFvRuvDUFvH1"
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
