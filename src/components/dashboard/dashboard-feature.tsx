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
    "5Mxnv7DSu2GSHD9Z5885n8ntZtwXWyJRqfLtaTjik1NmXkznGZ6U2Xp5zfwWuGXH4DN7kszozRmk7JxqzrDG548"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P5dTfh6TVbNc1kJTuaqjnvbRD8f7f5XoorXoDBdCefcTvenr5sPYG7C2Ev8VMabDCiAZTryLUyU8wYVuvCm47AZ",
  "key1": "5aJsEAnAwzrLXkyVgV5vpp7a41DjAweEz6weVQbUrGxchTxNjzMTpjDge1mLi4di7HUKu8GjpLyE1TPSRyen3Cvy",
  "key2": "2sdF4YKGUeX8NVWNw3EBXR3KWcNeitoKLPtVFfVJapKGLPpgACNd1nwvLRPymXduqmTJks9QzGj9yyKZkMeAb32Z",
  "key3": "2SEARXWQhBP8TP6my24ojPgnkwYXrueVtqbHzo16uV1FVJ7dVDCwJ5UA6AZoYSF2sp7AG7wHimXXA6rFeYfhHGJg",
  "key4": "36sRCrLTZMUWGffMYsR4o9625qEEL2KH5oSUB6JcJ55op1aEKPUqui5mRhmsKGp1hfyPFwpasy8iL2bfgW4Wgfd8",
  "key5": "66hoaiKgJkMe6NfhrjK7VCzCjKb86AcqwCLEUiyQuvGmaAfwKeLFDiuwKy2wrLAsrzyLd2RvJn15HyMAPJYXYQ9K",
  "key6": "49P8KpTAYM1GbFxjo6io4rK5oRmRLKpSJojb35MSYEJWxcLqmK8JTgwXGnbNmtPQvgATCiFpK545RmtaTWtWKFJA",
  "key7": "2YEoskBtgTx8zw4Gw1znh27EgyP9omKmQuhGWmBr6v1ieF7Ly67bMaqe4xoxjDbEbUVkNMdyhCjYYuLVH6z9d1K",
  "key8": "2E6D6qJDFP3KLfDh8vxkZvhonwSu2fNBg4qQ3sQec43JFAD8rAA8WsW1qaR9rJtM3cKtFy4SNeng6H7JnLsB4Kjb",
  "key9": "2DHxgekAoMcECyrb3p8FNdppUzARVS7KNP5G5yVsx7wzn9rfJjZgYwL3wcqMD6ZAC5WJRKtBDEDFyAN39feoqU7E",
  "key10": "3CDzzdnLpkXSvfrzC8Tf3D8inCF7DSmsPRKqFke45DvsQbZpT74o5KEfDP7FKosLwWaA3Kffa3J5nZGckQyQEsTX",
  "key11": "5fPi27BaCNoQ7tKYa5LYCSNiPru95VRt87mNu9ERbuv6y2ZCThDRuutTf3JofgQ2j8mAxjMwR16HT6fGHV1k9ZfS",
  "key12": "vQWmrbSg4YsDFfyboiAyRoLDYyLfCCekNALt4BjDYxgVJMJr9zcyJWksq4CHU85UPr95bGwisMU5cRnxQShvi1R",
  "key13": "3Pvrsxdv7fcE7zZPSxj5YmYzCEzhTy4fnaXnT8NVcuCFQ2sh4ZCAE1CQg7GMU4JSe5woEcCRkq1PTXsdp2NYyrat",
  "key14": "4q9V7oS3Rv8LB3BU1U7UjhHmKp2EPxQDMmgTbXh8GkNTY7L3BpQEHQGDmjmux7EpQyNystbvVQPHrEhioWWJudPr",
  "key15": "4VtuJvvBtgwpxS1JNFNzvt4sfBKkR7QW7Q1r2P3AN4FHDWAt8xxHUJBAANgBz4WGk4LuQZmty6i3X5JBL82igNhq",
  "key16": "43DGeoKv6A197GW8VuTS3nzfDBz1KgRpHCfMhf2xsUaMoeYW8FG9L3iS82MKTbcCYBnmihwDZ9N7KVrCHGvphRL5",
  "key17": "3K4AFyFh8V993e5Cw4GZA4TQV7yTu2bhqH4qtQ7gwMiU8R8dDMp3Aw7By8RS8VXWxTfKrkQ9sqsztDs5tweyzbFN",
  "key18": "657c2L2fU2NHtRQzo7Q1ZnhAmF7E4PBVvmgq6Z5zbvYYLyqGmHkLhBNH7kDZmkW7sP4Q3MxP3hgM2x3PAsnr4hNs",
  "key19": "4WpZnxkQgGfgvjHXefEHLyw1kYR4GMFkBDuXf9R7DP4CvYFzFfkGeLXuPJYniNrHWGMA9HLZw1wfgzgJ8oDwdfBa",
  "key20": "4DtCBBDZvE4AEVfyqXq2c1mBKXzwBJfFjZwpCmHGStGQfgngjzQ8A8WAk5fo8sYT5Dze4Xf3DywbC4BL8E1sr6ww",
  "key21": "zBxNfuGpKHv1JsZBpUqABafAV21CzEd2ep4AuoYs5Zcunr1b1H1daS6znRW2DT784FWGNXEHQPpXG2AJjFvXFMy",
  "key22": "4A6RLtzYwsF9t1JrF4PyFaauqBW5btNLbPpwN5fWrsJLaZzXjAuXAv1eA6KiskVGGoAyUa7hs9htMsNYRmrv1eAc",
  "key23": "dnrDqEKPH3DZgYkm2NJAeAvULJo87sUYJVNyFF66PNiWeBgpC627qXgYruLX2XfUXeERx11UuHB9xd4tfQdxS6o",
  "key24": "3tv8S12rUEZhGGxodE4TYLeqTMKQmfrJVE8iab5GwXfeC6wKKpJBBJfGeSWMF4T1o9e8Je9nNJNpuCLxLwj3cbqJ",
  "key25": "4NEQ9yzgkYvFnpnxDD49jBREaTvtFfAq8orHyHVUfPdh2S4rffuyqQrN6NFVWDNdxMZ9DpTG3QG34xMop799dJ6h",
  "key26": "dkoVLQZo45mxQktCFahdEA4BX5AQSAUdQhsBwfF2uMxdCmgphdviBhPb1tJoo4muAmjd8Uy9kvQQd2zYetvvoCn",
  "key27": "5tw3uSc7zCrzFTfYrZ7ZZQSvDTz7Y23ynn1hqFHPCXGmR6Up5vWmdySD8KnND4XD9AwsiVXCWtb5qqdHQcAxBsxC",
  "key28": "2rRU7WaPTzMoYM7oZMABrGQBeXL5DkkZ51C3uUErKzEwrkcnVvkdoBbC5wjdoEucmApidfzMAwz6CE4P5W8Xs4fj",
  "key29": "3622HiL4cHxqRhUS6Z1ryuLAQ6ixfVmc3grFE2CE3KRiCxfwbTWzxQUjALyYbxp8JZsbMEqVLgURNRh5GqR8ePw4",
  "key30": "6a38x9oewNeEDqc67kGZUK6oyjPE8RFK2V3jamrV2ijJHGrb2RFXLyzQsasT95QMhhEx2CBDwVHuquZTazuZRgL",
  "key31": "cvHyWw7DaRWoUFtczfDZnZ9LKnr9x6zBtoSYK6kpX75QYaEP8jUhbcRjFsE75fzumTuobGyBk9CmgsvfufvgGcC",
  "key32": "tTRe7vni9DawhHMg6ACGLWB5npktCxP3cd8k8dZnvjP9m2yvpMDMAw1GRrw6uD8qmAuVzwNbZgjWS6EMvxNPwYP",
  "key33": "47oH8kmzYWPbvNyT6gTSro7op3cBiDFMgf8ZYhewJ1cDrsc6mrhSbw3QFrVT2w6vHWnqZ9ob25nZbHPcT9cduf3H",
  "key34": "sV5H9pjNBwVGQGS8MYEHEtpHQj4bWy55mzH8Yne7SyCgRdXhvXavXX1VFBtQsxZMQJkKEDohcuLg1rcqzdozmGB",
  "key35": "ThWGMEbLhMVgthUKVh2A2shprzH6u3QpYCTLGvtmJi3wESbRP8a9KddhfrMmVWQYLUqAY93JwBZCpR4P4G91Pcf",
  "key36": "5pFuBzQsniDfYkK4rHMdm4RX8H9vDpqK3sKvfga8mkV2VvNuqmgEPzgK3ArfzfQP5tH1LyRrWx2BSBQouffas6JS",
  "key37": "2fRKMVrngmPEh7xpLqmujS6ueiej4KsqpRK3rfihcRmaE6RdrqTnEdFwPMJ1pqjvqpdvuPWKMSFrfcHa1WVAGhzE",
  "key38": "2uw769wegpuQGg8ayMRdk1oCjHVVb2NdwdUj8jHJdNLT4MG5NKdxGaeSP5DdUFwCjpqMj7KebugC5fWaLU6GFoCp",
  "key39": "5c9C9DiczwSjdDSXFk76x4VdWm3Tf6JbRPUr6hfgCuaDiqfzynAA6JvFzBnbfzi4QYyHBJDhuVsn6rByvP3bzcKu",
  "key40": "7dtbbNe6fr4pVmeDGvfsX8aMmeAHstDN21PSyLiYp5DYU9gsezHtpWNAaZ9Qw6RGzB8WMdmRFvFdvH4TRukW5oA",
  "key41": "2LdjtYQfWJT7xeSXGqyyGcsPnzc4p7hySkCD6jnJjkid3mzavnDyK7A6Ft7n7m4mgkWkz5jhzDdbDFaiQ4tBnHaP",
  "key42": "2FNAMiJSFiHxE9iWRbq5TR1tNUg6TyS63adHA5R7Bt6YN31p6eY8EVLV92rZoYSBPy6vXwts1jQzb1L7JJ3UYHNn",
  "key43": "2CFftsy5mfuVNhuk4czwzc1pEZMXPSGUf5uhuxrHiy4jQgTVsN3X8LiuC7KLwyJVxGnyMmLhBdDrffHStt9kH9tf",
  "key44": "4JTa2cE2rDJJv9hURQEmVyrskWZbJYuuWjXVKTJT9haZmXqQZQFvC6hNH1hB1j1t1wpFJHDHM2VFH14MNdyqWDwU"
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
