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
    "1HwcequPkRzrfx4u4fBGNsLDcb7yuJPHEAW1zjV1D4s3TNKVqodRnQ761bjfYTMR1e28qqxQKrQhu7CqJitaqxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fnQUk7ygvDzEyPpPKWTQoAc8RJywduWL7spvAVjB3mUoKxp3NTjgLyKGv7bAKLKQyFiiMFr3WeGRHM6nyvG4e2n",
  "key1": "3uSy8WtntBD9fHhmw3iuLFHruA8o3E5dXiQ4eaaPVhePzYGLbXmRrbfF57LremV92aZWJqdAL69GcqogFK9RpqTZ",
  "key2": "4rdi2f4BRd9Gkc8a4McAaUEXM17g9ekrGTwi4FebKhD9WrMzFiycGQYsUeUWGSQd3tsvtg6kLPqH2E4XWMpqhSAk",
  "key3": "67H2iUtGiyy8EjNAZ26rhZH9zg7ptKGU3cc9S6wRVqu6NiLLsCLb7xcUE9dXy5PN4MzLFhNNwGkgFNFGKsx2H26y",
  "key4": "sime7cWxSmXRaHZv1EDJNEbWTkfWh7X39y5ZnikNXWWfywjECDowozdTakNMLg2AE4eQfA1uUSEpcz3e5H55xsZ",
  "key5": "5yvydkj1EswBLeKZ4XyLB6v6SytVzUvqDMLYyVSGWNZ4eStgpjGivusiBku68naueH7a2qgjcPcJzm5i3a3HUkMe",
  "key6": "4VL2PqMdPXaKfRrwD5qJwrKKPqVSzf1DWYFxjb1uabWNEpL3tpomgKfHtdDgxrahRqSRnEGJTYxERM6zj6vs5GQq",
  "key7": "3qGoSu9vaYXsLNgUF1S89xc3huTSmkhaRWqptxzEBZaMpqWYDsckYK8E6QUcv4cMJ5amK6xPA8NJGGZCX8Gp9S53",
  "key8": "2SEVs4Afay7HqeVsxFbcFaaUzAhEBrbrSqc77R7BMVCzZBPHu8eLTuo5NNt1CXQcqh9A5ZpBpvDq8ciZy45ASTQF",
  "key9": "wiLQT3TWrajNfFf8YjsVF7JPXoMAoayLnDUJPedKFaEqSacw7ZA2kV9EVbiYeMf76iZk2MzGvQSbkjarZDCzAFs",
  "key10": "5jytBL5RVmsBE5t8CbkxUAcmWKs5ZzAa4m1SqSRK2Mdzh7eiDco4cgbf3cCpuFpwjjAv6DNLPx1Ydv3AHvXeE5Vv",
  "key11": "ym5zReCKFP1f7ZW9whFEf91T3XXg6KkwXYb4HiG4kBKL4xLGwTo1YqRBKSNmMHkZinXRG6iTEMEnkqyEG67mNRZ",
  "key12": "614gVCz7uViuzrMwyxDBLh1bfCvWV5v2YrtQccdC6WE16TwAojWRgxfL6sZnxgcQKRZXaqZRjf9mnvSjtEuss25P",
  "key13": "4t47VEmTej2WHQweY95djr7TdEVXqdAZRkjD2UfzzbdroqsNZVe3jEqqLuxt3QqQec1Q72B8VwwnCDJsL27cLUZ5",
  "key14": "5rgQcKB3MEjYqwDWJw13USFWt9Q1zitrpctkaLrBugJU68XwdvszUoFfczi2RTBpnrwuJcwzGLBPMQpKQMRx7RMY",
  "key15": "2JPZ3ao6w4or5rVCWKvQY1yEaQFKpBeZnYt6QcFEezSeSZ9cziWjqg1oLgMzbZkKPxQqN2xuE48LkbABXxKhEYos",
  "key16": "29cmB39z5wpvBpgaEpGwgHouwxLeqqTmHYPQ5iGx8142odC7BLg6oBJdzyoXSenGZ1Rjt76prSwu7hY5e5VG2JWe",
  "key17": "35zsqYCgBjR7ewb6vThnkCs5TXMuTVJT2VC8ZQzt9zpdg2NZYVkKdiQzLiupWkXTmcC87BsBpqr7hK36nr4dwsJ4",
  "key18": "3vBpjEBSRr1gvKkunrPubnj8e5TRRB7y7RqBhBCGMHo8VhzVf3rRqnx4FrS49GjVBU8omAcwduBTdzGGJ1kX9iZp",
  "key19": "RSzkppRm4i39rwrLopu6UNomWRSPAec4P9PrvFd3Xx7GdbrpV3FhBPJj9swSj1VhXUWDE5kqyyYqTAua6KsUYFX",
  "key20": "qAzo1gMr3WMsM6AzhMhUjLW8rV2B85ippmGysxfMjAYHJqrZJoiNTKbxqb6cyyLBZp16C7fsjg18ao7swJfA51b",
  "key21": "2SzgTE8EDYcUXSAS9QwB3K2Bi85Lk46pvNhm9aEEBkQN9fUJ8qrQirVXpEkymE5zqGxd6vScDT2F252Sw4u5JC9z",
  "key22": "5dhr1eDSMuzGHjFEC2LtGq98rDwz2d7WvdZuVscs2aQufUvXJAGiCBrmZyu5Hhg8axWXY75kXyhfC2tNLqJArQDf",
  "key23": "22rguZa67eNzVggQs3Sc9cuDsou7HdiD7NEYvEhCDv2s9RAC1mJowsn1uSpHUjuXBmYkF9TVc5Avyx9G321tiTUr",
  "key24": "ZSJEyudjE8NdPDcoqT49NCMShiNJUMgUJkkP7BiN5wuv9fVom43sE5NUu6CR24Xte2UTndX8CDGqh59mK3GCvoy",
  "key25": "5A5tz3HwTigvtQqqGYWUff4vWWLWg1cUDArwGz3ZB2XzJm8cFcXMWNjyZrDvNc5XrLLPyBEtdDdhMCwimcaP7w8Z",
  "key26": "4GwYTNvhNzHxXv2jFUNpxPS8CRtSHQfYPpfPkk3aAFjtkCFjsoXV7zRW2haPQZpJ99sLnvtLiTn6t3mdtAggq1SM",
  "key27": "5Ut8kQPUgk5z1hYq2uEbctECphXUnQWMTq8E9N6kWASGMPbufgWLrj3s9WTZ2wUYYVfVZTtE8XCuVpP9Rm1kLJXA",
  "key28": "4YZotRDbNEgBu85qVsuB6nPAT4jDJY9vqLYA8wCYUEExK6sX1TXEeJGmA2gAwkXprLb25qbMmP1zYzWLe3pacvdP",
  "key29": "5ASM5MBkBzQHup2yy2Looyvq7VqmxJaqT3CEvPjVhtZobRBuLbD5YHz3YjLyVks3QxTwEXdNPKUmfsqx3VcpC9jD",
  "key30": "vpC7bhd1vs8cin4MGci9i2X4RKQwFqCkkejgx2spTzqCvL9p6mbXFt43WgRjR631g1xWoszRXDchUKEiLW9qEKm",
  "key31": "MMSGHBMHFfozfJnKJYrgUmWM4W6BaDuTjkq48TuLTzUjMWrVzpJ7mkRvuTGjwsZWE3L5ewqX51dfd7XXr95BXUr"
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
