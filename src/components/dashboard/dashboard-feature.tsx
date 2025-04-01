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
    "3FtJSrjn5gza85wknwoQk38fHhFWSiYEn8NZKjVV1G34GeVQryP68c4QR5PUEsViW6tAVRea4wpc5aGq6cWLNFVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VLmma8chu5nYe6pGDv7Styf9jByb9jycNiwyQMqebDwkkxznPkiEb3o2Rgj8vdj6HVudWJFLU2ytR9gUYD9tDC2",
  "key1": "5LteZCW3ZtzfkkvskiaTY6vFs4g1yn7SkLZydb5vb7BRPcdW787sDJi39JDKvkGqMS7VQV6wTnuwWc2qn8r9nzcF",
  "key2": "4W1MAfcwUDD1TTCUEUAEoLkWwcse9QxyAWHHTXBp3gqGFGKdrckbVzayUGu8bR44SvomyAChT2P3p4QDBxuDQ75n",
  "key3": "xCcvMWXC6aDpRtvXvXjSpHpBP5ACDuZ9RBdWdxALjjSma3NQkfri2pEgD1ywJeaFnaxsPy4yKwNxB47TqzbWcYB",
  "key4": "bpQsB6En88Kxe6fVV9bfJB9rX7XQQuQqf3p3JUF7e9jAbfvKytqjqudLzwgbLsqBAGyboMuawbrDXZM1bAZF6sJ",
  "key5": "cNaTKeBLN5eTfh8Stcf7scjiBSfFN92haRcgjfadDJEJuyRz1iAGK9nzzAJadWREiyN6iMTr4Q6pNYixgBw5stm",
  "key6": "2i1HgKAiz8YTN2uvtQeRN2ktiEjTmdKNXeSpJsfjPUuXnFsDy1SL58HVNT8XWcrGZZ5kgAw3YumKjNZF9pgGgMkY",
  "key7": "3QqKvg8tyvUNzdK7E1Agd13NwmPRPpJ96sjs3wPh2rgSYzz46fsgAc6VA42YtpRh4H6d7Zx8Nfq95faF7qTAdhF8",
  "key8": "2QmhZqTdXFDWQNVM5kHwMEoYMdLJdKSL8iYps4LPCX8HYmijN7XNUuUuNcbKSojwCXVWAjMquSjRfkE17UuN6gMf",
  "key9": "3v8P7vtHUKpAdy55FZMDmAqfyAkMRqGSVTnXAmrbtUd4GuegLXoNsMeCfFMUkBTnG2UDc2PMPffeJgRHRZUB83TS",
  "key10": "4Jt3ginR4yoZkava3osLPcbPNfrdgRhGokUbgfUQqFAh9fFUX5wnjKhyEmS66qUrQMqtdN4tELaXuFTthW16Krme",
  "key11": "54b6ephwqUhNxHjV3USu3NSB1J3aRg8RqYRjgsZkC3gpeHM48HxBK46fda9tD2T15bZefs9SUqLfpBYjzLV68Eg6",
  "key12": "2eaF5vM11vVxd8fdpzs4zcnVqDhAi2RxaccVXcSprc89nMXus6njqVJoRxSYQnGKQLnUuKVVYVUSwGCret2Hw3pZ",
  "key13": "NFiAVSM8Xi8DXpJ8nvokJkshwvYB3fmtovC6xmHYfWFzmc77edNM42PgSSGFXTa24n7B62EueR86UYdWbVvrtLq",
  "key14": "4WVofkQNvu5kd8kuVPEaHUpfuj2vqvwb1vXEuYDfVww6PrzaLbX5Xr8hYYVNmUn1VTuc4oc3FxTwFYC62cdaSbKX",
  "key15": "4rHF2KA4U9hLwGcqXYtGGRdewD7NYNcQL8Yp2x5KzwNuEqKJqHuFUxvUomRsLqkcDPS568hRSvAzgDZ7SyoWfwYX",
  "key16": "3JJBz6dYJw45iMHtS7GeQTvsFKSfDZTZ9icnoLWPRA92QpTNgeyu4ujtmHvEbH8YcQ6jd4W6hWkAhJDywuEruRx3",
  "key17": "4MmBasxSsrnmo13eXratzQARrgACkvKsY1yHBgWvvDJwd3AePjcTk3ERFnUkxLgkMaQTTKh4Uiv3eZraWCav84pa",
  "key18": "36C6PCokPfE4iz1LypmWBQZAwQoYajMpqdo2y4f93MbVmx7YTEYRy1FbH6sq7dPicsinS8yxwgZtqe1XXKtfZnvz",
  "key19": "5NoM426USkCbq17ENuG1Khbnxg8bFgaLNTKsvDrTJbHCm2fCBTFfLJepUNNY34pgNm6CAExxRPtc7jDjiQ5f2kNz",
  "key20": "AqauY8phg7FFNuvUXbnFMpwqfEq4PxvagogvdDn2jW48qsvKDPzh3xqoBkGLSKtRR7YhvjF3SLSEpDjefGfQdog",
  "key21": "5qtAwKmNR4eBKp12ULFCu1oZC33aCXY2dcoXERL3zZF9sFoC4S683MmCZKgftFtWTqzTkRt7icERNtDwwLBvJpGS",
  "key22": "4NSka8NGG53Yq22LMqYbWrdkSKU4F5QxyotaAM7S4Yr8YaAW4dYh7erCcbho5GpjgC9AVMN5xL3Qqr8HdPH1jL4m",
  "key23": "3Wmx49LHJQvYkdSU8Fvp3LzuXC58tm1gWMCqHxGirKpVUUu5KUAKM8PUy59KhAgqyAAbRXWrUUBYrgWhHUzxDJwa",
  "key24": "4CnYQVprTRAPCxrbTCgwnrASuS9Z5FsnF2kH53sxKkdaUTz3nLzHH1zeubPrvXAy64BezqohYtJWUjEAnAgB5R8Q",
  "key25": "5ghKWKZKEtoB8X1DYNTF68nT9CJXBsRzepQmiRwosRkMA1dXQEMZopWP2owRtee7G1scNvjAnWTscuKeurgyFJoj",
  "key26": "3TyDQwHHqTmjBj9uAjAqjrNqVt1cgGy2UoavzTuDxsBeLorTdu8XZC9JjXEPWNePnv5e2vByreeF6dkGT2jfascx",
  "key27": "3LvYqkf3c1vnh4kNhcM6CkQGvccjgYdDzHHM2m52tcWxdMWpZmuTn2fEdVANmNVPbZ22XPFSmFjfaRL5jeU4ZbtU",
  "key28": "18NPiRd2axJNRvqWuw6PpABfPjjvr6iC216hquRykt66oGCns7VoNHqsGxkRMSd4NEwT1p9Cenu78X4AxRixnEh",
  "key29": "4T8TFTdrHgz7T6oVFvQZhDMbHEQ9DPFwUXXQcCZ1gY4QB4h1FcGgFSaafpZJb5N6u3iGYcf3ak41dqobMsLTfM7j",
  "key30": "Xt4sVYPsk8135CE8Kpjh6arTn6MhyxqiSPKvYCuJwqnjC9FUr5duWeGFE7kDrWCE9diRLa4byQUqBh15Hr2i4bm",
  "key31": "4hGpDaQ9Q2fJfjwv37AQXLmLKyjDb4aqrYvp5SSeCTovhd7yLBK8HVRgzpG7BXyL3oZWj9jqGXbtPAM5u8FxxZ2x",
  "key32": "3RXiu7i6Vi2bV1X9bH9VhoiCNbfWPFBZA9vg1vveG2LgqSQ8Ty14jWiTGV71J4v5udpiGNkLpGWuXSagtw5SaQN4",
  "key33": "4PCdTURdTR9XQmg9sjL5KX7FFwCW9DuJWTQyqDMrJeqVxaXy8JWs9Mreq6YXXz9CKS9PJcZ2FEtV5rVNVyex5vWt",
  "key34": "5iXfNLKiQciPdTmuM7NkEU35EqUk6nWdvCGMfUAgs32auhDCy3F3LYC6XKyKfzCgoEx4KKTEC1v1kUizVPGgmkAm",
  "key35": "QnRDTf1t5iFafytBwzwzNJun6ueqcZURsXkXBGSD9cKGhZoncMxaYgZGzFXbpFTTYdfkwXnqKjr4eUa4avyUmCL",
  "key36": "tDS69jmBSH2QvUVV2yHYhi2SavUN7eai98G6MoW7ytpcA4mXiUfTDaHvkZJAgDGAFamYPFNFqRAc7obt1bA6p2W",
  "key37": "5vevbKXycSsPadF6PytsuGHAGcmQnKgnsXwv3wBKrtRcNCkH6wTCpcx1bwrKSBBsFQojHBWRiJr2v9snpJAbdHGc",
  "key38": "coNZcTXRfScCAwxuup8rVfT31EDzm8NDGBRMZRtHh4KTBag19KSdS3zTN5Yh1ifJsnVKkgU64WMAEwWhmqdgXAo",
  "key39": "2EkqoG1qpZhPro5R3kAUXkQ9AuNFKfqSPqp33A9gJMssapVpRxVSDuQLEsdGMSbyRszGzmt2Bu1ZxWc9WyF9rfGv",
  "key40": "2nki6KVKHzHkd74Lb4Rc2cyP8KBmQ3vMBVkBxzGJ9PEih3Lfq8QxhuJGo34rSEa3EeF43yzaLXiZJ3T9e7VjzRwy",
  "key41": "3Vqszc2HfLPtxjNhXtyf8ZVPbhbYz9Cqwk89PFEaxt3ugPeDQEdmUgzh5QmRVYohm1rHE7VXgdADRauPywDz2zJU",
  "key42": "4cqEeUEx7a6rXP6233qa9dC7BfosaiM26gxgfubByE4zhiPhi1f2z6D8qf4t1z3ZaBsJcYvsNxytbdXM2XNqAzoy",
  "key43": "3Ze38mB1FgWY2uUFEDP1gFAJTiyZj2JzFP6TCX4SLEL2XpCffN4qaLmBGKywuKUmbjTDW4fW61SSi5nyveP1Xq3j",
  "key44": "5wRNH5XUfXhsCpYUj5oucvcm4Yj3zixpL5qriYWNvBLEZm16p3LUoZQiz6s5BEuPVah2k6qaLZPWLyJ8U7v8qThp",
  "key45": "4b7Be7t6NwBVUABUvcCsmjSuYBh9tGQwgv5oL7U9g3Myo3zzFxH36GTjQ7deLiKtjTtcBpcmFXiAThYJiX4cP7Ec"
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
