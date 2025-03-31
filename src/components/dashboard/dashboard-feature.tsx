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
    "VnictiBEEovVEPpfr8zV6iDrTzgHUMNuZLggABHXzBrRgzDzWRFyG3tahv9uxeKVZpUP46WcznB9n91seWMPyAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ttWCE7NvSJCqgqr1spj7oLVcx5noS4bMiBtbDMT2uyBJa3PTsvrNqYoKCAdCCgGA9Zg9RvtXgatjAENtNbX5YYp",
  "key1": "3LMZSDGUMjUtrLpR96HWcVr5jZt17vVsMDXPHCAVzmaUA61qehGgwLsFVdQdK7cAKKJsGw9VMa2dg4MGsiasCSpa",
  "key2": "49r2cUyXCEYUmMyTiArFGJuCob9AVvTuj8VVx1GcSWMeEiPPaacc9MrAMCNxGZhP6R6ZHkkNuBTSetrcCr27vcka",
  "key3": "zbzm1pLiwyLZwmFkkDJo1Rh4bPfMCkpUuEWJoKSGmwom2o4njbjQUDZ7rpFUWojHkknEo5dNt3q4pVZVFGKT4Cx",
  "key4": "4xJYVbUzXhB9q9a8VXDzpKuYJP5NTVaf8oC5q6XR8HK5YsgroyEfvVYULXVadau9NnAzhSpKW5XvfhMvVpgRVM5R",
  "key5": "4fvh5VSLfquqNsZ6p5L1kUVhWc9bnDjaoKHboHgHANiui6UemG4n3oJdJ6DgqrEjHKE7QNaU2ociErsnp6htUJYC",
  "key6": "4Bhyo5wyZBRM1PwZapSRxvsfX7JsfqEdWNmVbhcEhekPaM5kG7eE2xHAAnUMGYT8P4dU1wV4fikex2Ev1fwEE4C6",
  "key7": "2wZMoBY43KGdMaRxd4ZG2bCp12VUWM3cGV37sd19pgS9ZJsrZtcirCkXfqA8JybRba5YVqjYzGTmj5aVDs9kckcj",
  "key8": "4AKxXVcZ2gxdnE9cU63VjYqRsYBN1bHpcj3ymDi2ByRFGcHVUb7QEue2dXaJZCJgdMAPQtR8VtZiSwUK8rFF2MHf",
  "key9": "kFJG1TCrjWfLGWUPTjMnEjJHwLwmkYXf4A3pAArYGHoUmufjoAAPx19C9mKgeiSS9y3nuFvmEux7Gx6YsJ3LwMJ",
  "key10": "3EvwkDfE4ApVdeb6CYyJw8dqaJWjo7RGGhfHh236VahT2c1ren8MaLTnfoDGuhwHuK4N6X5JJsakSoi9nskkb8Zb",
  "key11": "3uy3ScmJL9BV47NGxWx1ovs5sDmEyE4qiccQ7AAgzqudrk3KpNLDaGXRZ51j8RHnecrC9nAVaWszArCBnfArKLiS",
  "key12": "Br8PpQjo5RZi6jqPYYNNrngqTzhvjBzVSDvfhDVnLjyvjjJCgzPRJqjmgtASqMT1eVhrso21XBDVgZHzznmYCC5",
  "key13": "3sUgdXVq7xz4jm2zkbCEQQaARVGsGU6HCahLtu63ZqthYsa5LLP562kK4vTJF3Q5jY2jFandrg854mxcHw5UYVP5",
  "key14": "yAhLU8ty1EoDPE9DWXYpocZYCbU2Ez3aig3mTQ97GZmhS65VRnrTSF7vbq4cPd4v1Leb6NVjjftS5aAWXeJYsjs",
  "key15": "51E8KhcJApjnps4pr6GQ4exT72BdF5MUv6Nz9RHggoSuvWp8NGSMakYFnLtSXhsMiTLWsJQ3qE3c55HRrsjFcRoW",
  "key16": "4YL9Ve27pbjrymjpS7n2B5D5qqHUgZ2gvewa3fpWoTnphGpZwZF3A5ETEH5ais3fXYQhtNcTE8dj3my3LiK1SCJz",
  "key17": "4W3Vj5WRbidXqFqBrdA1WCgdwxWyTSdAKt6XALiYNxjJZmU9rNxRyiayYs8HwisQEFYGqnnG1X69HNTRfFc1X72K",
  "key18": "2PYtvLNxtWveEeqWYmnZ6dbxC33xUtwwGFr2mSuYbuJZ1qSJurZxdpMGryH1T7p9ygN7BpTLBcSKHqpgfcU3DHSR",
  "key19": "5B2ohALMgAyHELfchEvTb7dmmrbZ8uB52YWPD87ZP9TJtt8wtMpq1BUCTPXGWWtCBssLEDboQhUxZbdWKuzoH6jQ",
  "key20": "zS5HgWrPwX9d2DrADiDy7vuXPQdCSV4rWtgXFrJrGyBHWcXApDy8vJuZav3pks4o6Zeeb9jxRqebghPFdWxgBe2",
  "key21": "39WoRf5zHkk3U7xnr2d4wzt26yUxz7AboYq3m77hNuxs2yZ9dtMyWXAqMLEdXZvjNGa2baPtGzQioRYi2Ttqho7a",
  "key22": "4aTh6GTw1pKGqs8jnVxN76Xcc8wyw21EPnTZRfyVC2nUxVaMHZnugrKjzAwmKJUCCZB6VWCpLw59jRFCJV57fo8L",
  "key23": "4bisknwqXgwRzXS884z2U4uSFH7rybvf4DRRbz5Draxm2vAqGzpkWYgc2DRmJmYBwtR3JJn3mJcQsxdLc4XvPLGZ",
  "key24": "ce6ckdkmamg83sttQfXRDSRfXxUjZpf8HaHvWaA2yUC3MaxPsogRPwUXyR8DhPwoAp4ZhetjMHX92hyM1Twg8bk",
  "key25": "L1xGL8WdHe2BSuZZFHaLkBiArLkQdXESDWkZ4TWabPtDu9RXu41Nm5w3inhynEd8q1naXAEygF6xXxymg9tdHaA",
  "key26": "p1Pp5VigtBa1qidij65tDhiU5m8ng2eVJG2VvXEv7E6o55p1DDhfdX3q8X6PVUKqEReV4rDpYqdWEPBiphGLKMh",
  "key27": "2mFnW9KfeCjTY6H5GeSMFsbCKCTY4gQMyFHVmVCAoK7sqJDoHzAK1ZaPednThRPLRbRPT71y2jTFkfv6eo5FM7kQ",
  "key28": "3xfBx8WVdAFmNpRqZ7kM4k2xWaNCQJ2921VUmN3b3QyRS3wFN5mHWsgMLENdf7xs7RnWtcXe59KSmWam8ExAzSL6",
  "key29": "47W3MNWZVPeBcEsvD2JLRoDzxPH9Mk9PWnmzB23YJKcsVNPe71vUPqMqNgkJzTYy21w9Aq5FoM3hAEpfb8zy84X7",
  "key30": "5T8E8Pw1mv9kisVjjrKHsCF8Z1umW9M6dSQ79CckK4WR1TfLYYYTtoMySxrdxA3GdV2oye2NLxiYxBBcaTKbbB5C",
  "key31": "5QB27Erq46je8RgU9rAXgya17AGHXbwYENRBgBYp2jeCbWYnGs7dunCrEGaSro1pNiTceByo7bQoWBnFgvS7XBMF",
  "key32": "HzA3nPKYtsTDbCQvnL6CaCC7cxzq3QrvjW6tu5FmWoM8Q5eVM27rXX5pTW4NLYjytmzsvxLq592VyX2wY1udViT",
  "key33": "5mZ6MyBeDwFJWVPqRb8ispzrZTYdEShfoN75tw9MAHKEQSrTWDPwACy2Uiyjvc4Rgfa7rx2yFcBsEVKhSZLKLhtb",
  "key34": "52VkLFbcnoLjMSvZES4itWnxxySKjAqouviSq2yVuRwKsToTXxY2QffFZ4h36g7sPnBVSkzcsqn9FnBJgyNo4xQ1",
  "key35": "xbVgT2uKKWojY7EVkjjVGquf4jatWRfVWYgnje6R3dQuf7xF5YqLXvW3kAMXvAD4upkeBZHLKsJQWAVahyzEyLw",
  "key36": "2w3vw7FQC3okuFwDnDdK1bKSTZ4m4VUpQaBkdVVW883owuB1SQYfPXFVZbPfycmHZ3AHhbeQ452ETzJ3Uou1GfR5",
  "key37": "QpBmFiZCEg5YWdPXFbNs9onntq6PMfj1Wt791k2tEtHTLGffZYGZhcCdwXBPLBYxzbhxjjiwge2CptWUBJjbJj1",
  "key38": "2JjvEiqczsW6Fb8GRyMJQqUhCW5MbuJTD8WJCAQBVjaViheaXM6UeoTvJXzuvqg8iPnLtDRrJG8RQt19BbxMX46n",
  "key39": "5d5jDEEZqBnpCGuYCeYZwkHKP1xSJk3AFfPiV4Uu2tJKYvhYBpJSz6xmqmLP5VzYUxj4Zv1EkataxtXvxVzP1FNk",
  "key40": "UeeiNn2HbnxzVQHvhoE3Jwa4tpHduytqx8B9dx6xUbW5RQ2pimE5Pj2DpBqh61N7HwNzYfRZpxapZQhi9g6bm63",
  "key41": "2MKQvQv8xyTvV1uCsiNJ1V26ipBfNdUzG3p1wCLMtGFDLyJGwx98DJHygQ7dmUx7qkTqje79fdBr3e4qejdZkDwY",
  "key42": "5VYC9mqX3RtRzdKeWGarX3BS4X2K1K1DkkB4xi8gRedczT27XLHxVtP77rDSk53Z9sW23UBHasA2GkCpy3GA44ZT"
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
