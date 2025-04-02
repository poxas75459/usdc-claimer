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
    "2RtSKyKX6LasDk5SS25JJZjLksSkezUWqQvLnEtdFVWH2d4opNWF9isEV5Wxtf2vCXjzXL1vmE1BsCTvTbwPrcPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yiv8UMBhg6rTsmVHKT36DxquGDwQ2L89nwRSA4rLb5xgYThTkrQq5mvvpdgqDNrA9DYdQ7CVruBMb2vuntfHyyv",
  "key1": "4EBfKe2hMUuTwoJ9BvHSGDSLX5ZVF84v6hWVu6H7LDN8bdvKFD6pJXGE9XJhM5F7fEjVuHzuxdWFaL2vroL25EEe",
  "key2": "3jtaefuxNUwnkwyCjq8XrhxJxT6b3J6c8VjmxuSpGBnWgyPvBt2n4GG8kzKw9pRKZqWMgR52KJ5Sr5uvYE2UbCYR",
  "key3": "2Sb3Xn8zw23izbFP9YCdkJUCibdDaAsCQF7mhwbJsuWtz16cmg4FbAvyLtqe8VTmmP5gtr7VipjZX9Gpu4NMCzLf",
  "key4": "Ay9cvjk3MWUbmkXeW19NNgSPjryNSNnv6JgvBVu3rTzYNNRccJkdRzu3JGhyKQe6EHYHARmnxrLJBtxwMXQc6xH",
  "key5": "65iLqyo2pif78iBdL9bP22ho9V9pEtuy19hMCNCF4ZkmAgPg8U2B6GN8mMBbNrevRZhXmHV7HyMsAk5BW9EdtFbU",
  "key6": "58GPA8dSArahdkug8wphRp2wGcpUHpjcbG3SzyAzahkuGGuzXp4tvHQaGSCvEnMyPjzWBRfeJjDei8MydfgnSQyg",
  "key7": "3gby4NT1MSn35A3Y6281PoZf2RiVtR3Lz2HUUZpFVzqCScTwTq2kpV7KnerZe6rYRxBjoHFyM7ALqApxDaS5acgG",
  "key8": "3rRQncAzfyvCjVwUPqufMYCXzzSP1Rjjjrh6NAPJqw7zg7SGz7srXDxKwsHYPBV2P8KfuFaxrpXbUWtXR2oGktia",
  "key9": "Ywzwf4VmyXUyabKh4fV8Gb3arxUWchqBhg6Scjh5nUC4egiZ8cTKjkjAgLdwDopSAzHHPTigTetRUMgU1AvWFzp",
  "key10": "n7rhzAujkEBzyxqvo5VN7zBd68XBxkAoBUZGUd8QNAmNc14fwnRWbD8h1A1cTNhZF4umfBce4XJny3jYymXxHpu",
  "key11": "Wqhk7KNgPbHiJHk6HBW57CusNV5wAazGBi9TZWZMQHqvCu2v42Dwa8gFjj9chodbUVTsXUW9CrUimqWRE49Ay2w",
  "key12": "hhPPnoYJfpcpVo25VJ1vBqqjPaWZmnoKgfksoic9kpSKyVSnECfjQjHiXhbLWpqgZUU5BTfAW1sWv6wGEJCdGSz",
  "key13": "3zTgCyn8s4hUgAx5opM4YPbaGg7NzHS3D6isQ7AS38iC6kKBjEQdr5bcyYa4dSrju2g2D5mbkjU76knrTDoSswyw",
  "key14": "2w7ffvgxL9Y2pfAFiJHvEomCX2x2Kj1X9TLAqGfrFe4DywC5M7v9yd7gzAwiesS8x8ube7v12RGYSVhgza9TkfwM",
  "key15": "3gyS4jqDqkm7b8yrJw2dTicbZXVUdNdn5rk99wtqq6qmFZt6ZtACbyFZJr2AFwEF5vCWG6k5zk7bzeCJc3xQbbrt",
  "key16": "4LYyMNrhfDmPUPdNYFoLZ4mqRGUgfA2u1wwWeU73jyDMij3QbZYcGNtunZUE3xfSYfW6QuVJyAax4iDL96HnVCR7",
  "key17": "3LYYnWJteXcuuisjR81nffPGwK8tMDn4gB4fXxdCN7erx9VX2dvZtjh16a7qSVHBchYhUMZ7wTeeEJ8xwpdoaEQp",
  "key18": "cnXC4VAH9TZxM7uxiwvTSaCeA89pjYPienGfg1JCoXwUpUW5uhj4y7b9GyTC9ynJZozTUZv5bxB7J2aySZs7HcY",
  "key19": "4gxn9zQjXWCxG6NGT8eYK8rRZMmdS5enyBsH4LcY4to8oPe9v3tPYdbbpNV9gSw83YZmcWr6rW1wB3bnFK44mT2h",
  "key20": "2x5HrKNvfZee23V7XT3RhoyuAy6Sz9HKQybxqMS4NnFj3SwYzik1PpxNrTKyfaYGMYooHxZygYjsZ2mD3BRj8FCz",
  "key21": "2jQu1sZiJDDipzuQNU7C4hVwHuTPubP5sqJgNJVgcWoT4Ewwk6pRSW1Rf26xVBSU94HYw31LdTV9ynKa8btLU49r",
  "key22": "2kr182JxLp9YVjNDk7JHeABipEZSWhkAtC1gTC1x25ALzik3caTuxp4kyFgAoFycWpR14XzZdqqf7uShLXXMpUbh",
  "key23": "3k3Hcbthws881SPhaQhm694AwvSjd1JKEGoAZuHuhTP27HqjQpukQ7SqscMZejBUmcNuixBeGVKPSECAdRSge1A4",
  "key24": "3GKdk1oSJXesf43n6SuoaSNnq2QpbkSadMv44eKvLELKwYZhm6NJgyXAhR5VabhUwhd8f5pUbfNinrhkjSWik7xU",
  "key25": "2CnQMYZgM9sMcuazdajZSLiic3LSX9gogVr4K1UKr4XaCtHnSuWzxx92z5bJZdYTJNHgU9DVZTKn9RpTaVUzEwwW",
  "key26": "4gGrkVX5DqMZxCk71gSgC4VFfcMeeWdsXZmhQ1dhTnfUDz7UX3AweCKU8XbjGri8CNKcCYJR8dAstpfMGNpf7Sp",
  "key27": "5TSTS2P72v8BDUmqwTXGaKcFHKUdCmqr7hfnQoWnQsia6tWKWgDUu879iNWXvYU6Qji3o2ym3diXYBTWq9NxhENw",
  "key28": "3pgWuD4SHDUsG4VLHvbDH17wejTLXRxQXpT6u8jWMM29Hb9sZCmQTCrwhwcbWvLVZwTmondkRcna5a1X2rff3Am3",
  "key29": "4C7qktZVZknV54eTPYkpRiimCKKkSnstk57KC4z1c2TxCD3yyHTzDeCabwj7TqR15oVYvMkgUQbYUun5tGb8h188",
  "key30": "3kR53MT1Q5MLZ8b4dBuyZNKcxj46G2ocd88g5gb8Y25qkHPEhYQWjQCJnQ3h4mxk3JXeMMhDHNPdScNry13CHzCe",
  "key31": "5KRh8w9pPFGBLFG5ATUV3nV1wDhtUD653a7LQa8r2Hj2RomnxvxmKKcSZ7qBYAbWepEJPi7AVBZQskf5QXGBZ1tg",
  "key32": "4BcJ1vZ4uNvgCwzx76uqVpPdn22XsJi27gfGZPiBpnpjiMt4FpLBbJTgwHWpox8K6p5fXVbdLfAxtoizhJq5Uups",
  "key33": "3qgEsCYCRTmDyM4N56j42KRxyNPx9QCULjtT7SsikYJw1yYGy8Lq16fiSFz6qjoiihg9NCQYg73bj7pMH662UXP",
  "key34": "4n2MGdRExrwZJCo2Qamc1qu1GV8yB6GMTyFXJfYHzwyCFKyLPfa82WrJWS1pLPnYXJcFi37gazXD7HkiDNY11rUC",
  "key35": "4oNW35BJtjDLpiem8aD3e28AYeom9VWmQbB7icrEkT6YAUh7ev8CAxPESbQzAswjDRA5G7maGKCe2QLyUqro6HzF",
  "key36": "41xVxQstTApGEkYfcrvoLJhzyWkgMrJ99hyyKVUwzHHoP8oNigEGEJ3BdCHpLweg8gxKv9dkgxzhpck3VdVT8VB7"
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
