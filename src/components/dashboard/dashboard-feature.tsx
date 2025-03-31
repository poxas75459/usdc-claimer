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
    "45tCJk8WWBkBtTqXuVuB8TVY1Tp2bfzbfarjdzLr8XhXUyztVbkMuohhRo46Gt7DSoKU4S2MtLpGmZK8ggeCkDTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cbZSbZVvCjBqdqfHsSiNVooKb4qHkeDPj1DtYjcfC7rX2pLp9CT9HG6KthqEWQcP2xATBM56SAkFZiKie74vm5d",
  "key1": "5otSrwZwD4nbPwjGKZi3ST7L5RjyHQs3GZkcsCnPxJTASDgiT7UA7pQjhqBDPMNn5LiDC7ihGzvMQP5V8AJSLQsY",
  "key2": "i4BEJApMwkqMpHFua8uRE4D3q8QnPCUUdAHz5UFaMWQwpmjvDMfDsqXwGeXeJE76woTwVXvCJyCcDdvyEJYxtDG",
  "key3": "5presfCi5Vx2gioTKWnVva46HVL7TsvnFs3qBfSqxTASWbKj6BJr32suASanGXywn8jSBthJs5sdEscs8t7o7qhc",
  "key4": "3uXzcvjKUf29Yp2jHBxBSrmXZq5vPSQj516e279aKAiR2U1EKcE9mVV7BxWQwDWCQhnvs9gsAosEpdeRHV68UDyN",
  "key5": "2tKvSW34Xj7u9zXfBRj5ye17tWZpbDYMRsgip6ju4Wcdnt9H4KpUHShbDJoYTufeba9g5akcLAAk7nRkjpn6tvYC",
  "key6": "4cng1cYBUAdnZHCGwgAs3abuC1DWac7Kgi9Pj1S4jb2nKVfkv7oSjksvwQ9GUyYc2fk1QUzJEt7CrxyC3nitjdNV",
  "key7": "4bYbUS8DWYM5EiKLg72VbrtCD8DiwHsnK6XkGVjqG6LQpLKJdHN3ikfPmYwfaGFSLMz2XbYBaSaZDkqT6c5VQxaj",
  "key8": "5xoaNfJR4vLL4nCo4PKnQU2yfkoEEw1QWC6GgMPbb6R1Sd7bdbpU2UDhkgAFXeGwhvP74Tvur4ELeA1vsXAbKwEU",
  "key9": "4sZfZQkzh1PZYg8NsirArrhPS7wFdKAa97hK69vRaBZua9P58BFmxe5bFzLGWfMTDjVARbMg74PCspExYhGkQb7k",
  "key10": "34FwYUfkmo78hBNHscFmoeWkGgR6rNxVcbEXnSSPt7Q4d4hxCRVwd8m8Bp9jkAmzvvkiTfT8B4rmfXcaPDxe7eR3",
  "key11": "5o5VeMy6G78M1WwEZUzn3dV1j1UHWkiPdkmeya41Ayv2zj7rwTVwuQY2BrwemPrPjFonwndxw2NMa6J3GTdFAKMw",
  "key12": "34qLvstu3MipBQ7gXFXAE2v94tduMVPHJ4Ag6hFgUzJsnLFxEvNc1aowHfrSq1pN1b9Dw5p7j6EXyzjguSqJewVF",
  "key13": "Yocg8mzmdcohunZgx9LJV51tPqHTY3Hi8J4UUZy8V9gayp49mBYNdV4nbFy1Utr6R3qwocQ9qABtZTcy8XJdJsZ",
  "key14": "escrwWHp87P4SnhytfQvM378VPRYXJ5QzYPpkD4Hv5MBoAXkGEeccNgZ2JbS5Xq1SDb8TJtf6wRaYuVYs2DcW6m",
  "key15": "4F1j2vSFEQnLkTQR8baF9wkPRd6Dis1SUPshKk9DW2DaLbpLt23kYEgcNVzq3PYDP6gTWCGuqCQQ4rwR1seSKzK9",
  "key16": "3s5nzvjNsSQYKo4F7YvsAyvBiKBuMroS73ADMLUU9g61UBL2CVfinszPUyjXScFKFQyvWnFBsMfVWjYsKkQPAEjJ",
  "key17": "4yXWteT6A2NZg2L86Fk4a6NDdFmEp4TsEz6heS1TCGAQR8c8hFe5yyH8ADGZdF4a3FC6GStETfLohHXV6JcoCWBA",
  "key18": "3c3B7iWX1Z5ATDbv1AjKHrPK415xHDaTWW8Bn7Fq97VcMP9yrccoN2H7U3Cu3pZwh5CYvpiFWdXYFQFU8hMxuTQj",
  "key19": "2QYeBdPxMAYnEtzbw8mcDDHpaDYB5pHf7XrUk7rBs6LuXpCjwuqw69tC8BvyiKGmAG4cqGumWRiLZDXuAvM2AaWJ",
  "key20": "CFni1HbRfjx6Gpd51r8hZxtn1XRWCBgCqrAaUdbDCmbob4esTaAuwYZFUZ9M6j7HQea8FuUUScxYpZkVURM9Xad",
  "key21": "4c3VpJGQEdoDgAQHEt6g4yyBH4DP8oYpPEsDF9hu2xmmXZFxz2jLKjtf7AbchtccXEZvom7Rez46idYntqWjDffG",
  "key22": "33ZdGwipKmc2sXa1gityCaZwukcH2JU6tYxvaqphRnKSCLeivRY3A4hUYhetYNjefKb4hnfnGAcBmDwcJp9X4c9o",
  "key23": "3maoVfzxB6PfaapJ11FF91D5Sk437rWgJnc4Wh9vJTs7p4FBBb987DvQVhRJEesfGYntPiqMVn7L4EuX5D5jEWYR",
  "key24": "3ZQc3dQbR7FZfTLWNyLeWbBzTHgHrk4HgqnuxHKQ2xvbQpHwwWRwTQ2hXaGGkoXc7FGiyiDhnrhac3zpHACjwGuC",
  "key25": "2Jyf6u8h51fb6CpbM6jf1QE7bohWd9uf4tFYPW6Jn6tSas3mU3w66frHw1ChVwWJuzd69zPSRFQpQPASCT49T1rB",
  "key26": "2H7uvXCyD2N6GTZMz6eyMf9ifMQN4uTmqADu8qKYmnLHGaetyXuiPGiQ67NMrtUJ63ZcQYUWHULnHf76tYViX4Zv",
  "key27": "42Bj9tdJS8435f77SYcW4gu6va8ZA6Nzpbn4U1zGJKzhYDewaBkYzJVnfg6PXToAcrqK3QGMQSG2mxbDF7xb6n3h",
  "key28": "4EmhxxX4xDD8G6oXQoahL2cZUE6yjVxAWv5PpVC2sHGcdbce2yAkkHse4KY2h38yoPJ7DiXG7JYQkSuzPyPm5FLo",
  "key29": "5Jt2ZiSWXWZnmrmep684fHk5AhqZwDkj57guXPogd3hzLpCjhXsFUw6v9Md9HqUtZW9nN33P4xuMqL24WN1c1btF",
  "key30": "3Y5hXxyThZAN6zVExR21NYF62yuYYJDwDo7QeyoZvAsfsFZRE9nuxiK6FxPHpWswYsLDNNa8BHZEHR5put784ky7",
  "key31": "48cAd45CgfNXDb7nsGe1NxV9RQkuoByEmMwvWbDarzUEYMJbYhVq1qXjE7AxvJit85XgDAVEKkGwqQG9AZPhDU5V",
  "key32": "424dZE7wVUBnyMZ5t6RSXafozFPdCYPTjAMCePPABHB5P3sU83a4xVbUvm5611hv2gWGeqHwgRB6VQcqBL3B1A3X",
  "key33": "4USUJJpqS8V2946MCQrdkVSfTHsyYpZmqsACQF7oHfvtuHAaV71JKb9jKhEQrcnHQpHWJBdUZZsPV8SQC9mwz9jB",
  "key34": "6zy11DbPX1tXg6pXUhnWRwWmyW2Vz7czHjLsFowvVoKwdne6GotJ8cSGmH1K83NeTZVYoq1MGqfoqvFcF91tPWB",
  "key35": "5Cy5qhhsHDpkX3RCVTXTS2jZhtonJBA66G9mf6CbHzMsbKKgDe9aBPRtUZdHo5BHBWXMCi9XAp1f7j5VJmyStj6k"
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
