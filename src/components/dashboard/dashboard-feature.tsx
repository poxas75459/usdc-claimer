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
    "4ktgUJJktGH1HNsExkusTXC3Rw1yeR4xAJsVbwt3wv4hi21bFBFSyTbBcNeGmPf4M19Yr9QPanj6DKN2Jna2Ppwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wZKfzXiEby9n4iUt1c69ub1VydF9CpzBF2ApFoJmQwnAbhzgH8CxKgAsHKjjEiDE8sHGtKzuafsmav4T2XR4bNq",
  "key1": "38botu7A9Q3QXC47uNWYGJGf85h6G4kdiHj4kFxivrpTgnrwaGMadLZ4C7nMfBLPXbMMZJnqgAJtSr2c3PPoxj5Z",
  "key2": "5Vz86LNYCLWxhQZupfdByu4uJ4sHDcU9uroqz4axyzb3NQXE6A7WYtoFFZHq7wU1uhXR8x6Rvv4BHL6Wipj5dAvM",
  "key3": "YxUpHYZJyMgeLoNDT7Zux5SbbsZuvmupd6tcCGihcp22dnH3ZEqwqpzPa4m4wipYDDdtkccEP8r79129GKcL2Ev",
  "key4": "3WWXpAoMdCbSthMuh7v1mdNnE9gFJoEhvMJ5T1F7Ge8RKX3dVdJF6xJyPpa7t9V5LueHVjaNubpNwdRRJLBDyF4u",
  "key5": "2r35PU1wSjhYVA2gZp37JtN3iGFYgauqg8wNLGDoVQH4Sahw3ZEeiXZ7foyWiqQwaJLLpsPTd2ef3xrURe5ZoHTH",
  "key6": "rZvdk1E7rpTG2hxPeuLNNVgBeJ94vjYYbhtEf9uymWxEo1gt1CYWUfye9m67gBvcanD3qYjoa4QR3gKty2XjPqk",
  "key7": "2mZRdK6PhpmuDGL1afWWLSEpg5Er7sTzNdgBeq8JVm3YFyoKaTyy1L34NA61yAekaCUF7aV7A1hy3g7trsRJf3v",
  "key8": "4UJCxQrAj4dfyvGvyjkSg2aa8qNKY9AQxQxuYhNDzmEQFm1g7aENfDE6pPZBGBi1B8ThyxbEGrEEiWvXXQRH3oGE",
  "key9": "2dRdEWaaQD3DQbCKwQG9gxnHrrufnmfVdHSeL6wiqnUpr1JZgiTwdEY7E8J79WoJz73fEKM5Bj94FHNgUZaBeCQA",
  "key10": "hYcWBMUYXH3WBSqb6QRaCYsuxcdzzK32kLF55AD67PRR8JAMUQ8QTYsEMhLSPmGyyRzTzxuYRNcvctBKaTJhHGh",
  "key11": "2TYzoZ4oHPGNpavn6EY97GPTEptXcbe1DLCdn2hJ1UuYKSuKRjXBrVRnS3bUmHRpSrHQjBGDoQnfDApmFrouk2Wc",
  "key12": "WsvYCRcdg16MHvS7oyApXNJ4h1uWKxVxDTjgS2eRzUUdRV1W5ZGv2CTAKdnMHnDmLsKza29EBg8FmC5TJJnDPyL",
  "key13": "4RfcQsV8jfQtZaG9jSYt2Aa4aLMCsWzbRB4HPA1QGPxxd6YsVVsB6BZt6gWgw5k57yTqt7QSGgSDWTChB7XS4pkb",
  "key14": "cDz1cp5PsJ7ksy373UGZmZrdrVVJC89QKzB1iCZKKA2oXtw4AxJ4Aw66Xo9ks8gMWu3UaQaMaracPGLRvrY6frE",
  "key15": "4NRx8TizQEFNQGBTbY5m5osgxAfvwLmkDsJNHdMhbZzFWE2HThxbbX1WwRbra4DkpZmSnw24x7cG67QkxqeL9bK3",
  "key16": "tx33S47PXy7Mhd6WYMiegU2UkHaEp5FHMXQHChkupe9ebAQKFUyn1Xnx9s8EduV8ii4vfmBL4d4juWkc3Rq7Tej",
  "key17": "m8nmHHjvPMYYuz7JwKfDeWKhLHY688grDg7fgX8ohiw7F8qW8Z85jid8Y4MUfLsx9aMuJVUrx8FJvaBGgdfvGbA",
  "key18": "a6NcrmBuUHYArjYqpDpRNWeEx2d7K159gceRtCzGttdPaHUYnYiD6jwaKmocBwZBkymQKVfiLLcT1FRVXDXdRw2",
  "key19": "cqMe7bUvuKXUHCjgJywVf8eQhoEaEFGLaf6mj8Qqi55oEgkCts1bybiT7XLtEM1BSpRhSDjS3hhvvYc1YWXNJqu",
  "key20": "32gvTZ1xQkb96CGdfgEfgWQ7khwgGMQwP9bgm1Qauw7qLJnGHp3QMbrAYRNjm6MMJL4xMqQMRhJj87EgyCG6v9zK",
  "key21": "4CfazWrSooJS7UHMBJUN6PsozCzz6inoRgFqN6FaByFYEymMzxUF2xWqz4CQ6ajcL3s7Dhe3b9FPGqp1QcogTcJj",
  "key22": "36aoU7oP4NiiXDU52p8F5qz8FtBg4oK7VB57K3TcWeyCMM1RwA3bvJcdZVTETc2PjyqecyME6iptPfBm59N3rmaf",
  "key23": "5bSDCX9D2kHd9C7HfheKZmTFSurbjNnxPmsaDqPbR2TuYbXEQUiZcxYGjAdWagerDLnsAZVvcMy7epxv9yYrJgNR",
  "key24": "PyGuj8oZsAJscDVuKWGHnhRRjg6XGRMC996Bgs2r3Z1kZw3EPs2shzGJqojN6oeGyp3AAypDViaF6atN113xU13",
  "key25": "5LQBE2irWY7Exi2iGRRFV2LGqdaZCNDvYZvUk2rjwKxKeKjfr9AbSugSAPpdcuzRXY9ok2QnqsVkRFvaaqRJvzZy",
  "key26": "3yKSK9CPetuRRFuz4t9kZogjMwgiJ7ahF3BRxae5Q5tThiHMZAvWubqScMkHMEyy5tL3s2Vp8wSWG6dErztwkioo",
  "key27": "4Pmc8SYHfZJx3h5f3ut8B2drnfuxcmNwyRYe6BGTpKN6EazzwhXv5Lmd8tgojm4xH9mtx3H1XneUKYefxNgpv2w5",
  "key28": "3LFXAB9v5m3dqaap1z1ZS6nBWY68FE3VZTZ6qZJPZKiZTRv7Ajhwb9edFxKha97SdhtNAWFJZgxjxpjAuW14ik5c",
  "key29": "2mL3aiWgrfvi2H7VKPszXfa4gkxUem34HKDPbRncZWfzBuH2azU2mVYTTLLYSTukjKwVu3hAuCxMQNfSmZFnzZ6i",
  "key30": "63cRhvQSvTE8g62aqJ4jFTjMizECizLDirsY35fjVi7yM2BZ7NpWYEjcM5MQrCBqE5x5nDqcZPx1qDRk6qxDTJ9o",
  "key31": "2QqPJhQyozx1ftxrR2mCaSurnpKxNMZMr1DT8Uz9gD9QeU2Ly79EappkTByvC49cacjdh1oVGyHxhX6nQYTXE24z",
  "key32": "4429XGmDcUQPAQh4praxzEyTbs59av3vtcra7B58Tema5gkxZxekL6evKb2FHzFtd6S8XTu7BqvjqzqQeVP3rSkx",
  "key33": "SwNHrBnB1zAPYiZuw3Y4fDGMJmepZmKRtfSawri11yhRJM7G1Djm7aZrgXnwLcEVSL2C7mEqgthyikRocSKbcgy",
  "key34": "59sbbndDnmHjwE8gAurL5TFLYWNpRhjDYWkLNbS1hL1WUTxuGcwDdfBK9DTDgFyA64vfYc3dcVhpCq2Z2CNW4QmP",
  "key35": "3K8fihJee8WS5HEG9beLAdpA9BVL6L3A7BxJZhSY1dnnc6KKp4c87N4a2NgRpzggHRWPERH4tPQQsk66NrRQ5DBz",
  "key36": "Ak7H8xkfuy2Meq1eTSscE2JxRWvBuWqqRyfCusqjU3BzSiMVjqxVW8yTdiPqrVVZMWknJFby4GadR3xMhNz39eU",
  "key37": "3u4WBpJ9nKuySjxC4XRuVwsvy89AnVr8oGXx1SYfgTezX2bGJzbboR9wGtyiXQREYQ6qw5NNMcTPp5WCrEGcPVJY",
  "key38": "WwMG4q8sQQAeLFVG15Td1XL17hNydbhff5dkwZdTdy93ioAtyyQCJ6362FRir2PGifMjHxj3RVNyHLU4qATRMzE",
  "key39": "ssAjNFQ4Lkx62wr6ySbcUjuLEX9A9RBzD1T5YCUxv7cGopuDPa2d6RtHKJ6iDZN5XwXTH5nw2dK7hY2Am4pgbEn",
  "key40": "3ZhRHM1saxJQmsWd6eJ5YesvvjVnS2Q6NaxbAXZwtvyy29huntQXTfaWiUXFKYNKDwAqAmyGe6aa1sgPC9QmRLp5",
  "key41": "5zQF6pLgBawpMfEJ674fQHWqe7jwjiVwg8usjRYF21n2cZfvcGPkMzQ85xuYs2aQFGA43TREYHGD6frKBzhdZjBD",
  "key42": "3sTjE5R7Ae7kjqskxsAhWfr69MaAxCrjMwgEFxf7R39n7u1nEHQnUshWUkVDABRQt2YUxHKnx5A2NnPV9wnMymR3",
  "key43": "65YWXRyvrBFcWPZfdjnxYTkXMCnqLeDqeRREHH9g2Curb1tCwys1D7ZhUmEvRNPb2748rbx4J3VoYqDb5i1xy2Sm"
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
