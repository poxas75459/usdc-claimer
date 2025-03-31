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
    "LHUqgWFyd1xMVk7ezYCUrcsGMtKjj7sQxGEuXe4NC3ydAL8Q4jmyBfnar3FL7q8M9nGZ8waDVBqSRTToRJE9hBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oLG1WJKcqP9due1SeQt66UdoHWNLp4SfQdTFjkdZsRiBLtga3FGf9f5fD7YYg3GUXxotZcRknbX8Y8fJf8QdmRb",
  "key1": "4rfQK2QaVKfu7sw6tgif44nmZpMDXq1urm9QA43vT4Jt9fJMjat9gm9BvdzV7wMFhLnr1UEczNGcA28srvoH5ZgZ",
  "key2": "29XeLmyQoUDmAinfdoj9MosK2U8rq2MJAdudD7Fy9rNEspC51wk9kVF6WCD7YWfD4CpFabTyX2UXDNr7RX1fpYM2",
  "key3": "45ZoFXuijU1Ur6tfniM49Xu86XbzuBtkJH28R3A9k4aCMxMrVssuPt46weQyaoJCQyN5asbj6XbGSX3e56p6Hg3d",
  "key4": "87CKF4cbXPQbDPgWuLAx6zAQizjLZNiPaL68SsP6qfVUrWY2RemNoM1eLMp37eX3A73agGWeyycdPQg8A31eLgH",
  "key5": "HEinSLE3cjFy8A9dRrmPWcYToFuL91HpQPXCvqGigYGtyq13QCJ44Ea2cEu7R4aEE4H8YFdEvfPaXLn1z8cT5zH",
  "key6": "bJoceBtu5qK1S1J2Yjwv9e246Z2ZSuEcattmPPq1id2JdocG9iVDUzkbRprcFcp6VFSnnMEAK9KfX1WPMzvhTRe",
  "key7": "e2CKXYeaAZzPpKceASRwM51H2horhVJUTa2rvP2Gvt1ZSnR1jDmsrocYmSfBf3buUQPCZamYCQbkgDBunvEp57X",
  "key8": "5Pu9B1N2gnvWrU7wzmoPWxKHwYFvfwZ87wxdKh4uV6Gpy4h6uYWi4gCEqEjMUfUHZc8ukSRwfbLNCRf4wzJYqzno",
  "key9": "3AhoxCnKZbm98zMsub6kciDboKsiPmE6TkpkramQcB1DNAPYNp4eVNDWS26ztNjL1Mb8eDJm9kzsiqoAxDTVmwBu",
  "key10": "5CmFmhVasVa2nSmTb2on8kziLgbS1nqJnaEdjMMx6ZJxqyZ6goc3NvMQ2vnhUf8VXxMfrXjZmCrAkAtMf21RTmXk",
  "key11": "5mCEj2P4uDTXkNRr98mdab5JuenHdGvzhdCmVXLjEAptA22k2troqf7REWn7w7WykjozrtUF52W4nAdAzRkhrbqU",
  "key12": "3a2JPW7mmvfDf6LhkUjTGxiG4NyGKmtZuyHmzZtYAD6PSkGEtWotbTYWt7AhrHZSSFYtgS4gLZRNCRZqtHdJpG32",
  "key13": "3kx4hmgqQZsmmd9hRcwRJFuQnJXGBYzfwECEChELEPU6i9Ziig6jWzyXsuvfAZ3EUjwe2gfYWbuSh3MHHM95r1tc",
  "key14": "264JYFKu4B2WxLDRbDEBoKVS5dZpA97VFWWcvm49DDb953LDXnx5gak6wj24kaBEMMEghMmg6Sr6iJRTT61nmMc9",
  "key15": "v7XREavZHhWp2wm9Dit7GDYs5f1NZPxcqxgdpxbHMdhyfHFnqui7SJA7sWLKoqRVrtodCy9S7omd7XrAzc6PSgy",
  "key16": "22wdbBvMwNnekwZ9y19T9r9VfaQSmxkM63kXFvk8kStuMV4X9oL8eVx24shBJnvFuRYbmhBLxKXAgcuRuzixy8po",
  "key17": "4LRne12iwSNxsqfY8TFn85s951WBiyxL5jwPtQxLbUkMZ9FXc7EnaPgtcfb4TEeMNDs5TBJNWpU5eMquTq49qpnY",
  "key18": "2GxrwfiU6QkwraoGFVqCzQLHETnWKbL39jUTw9jduJxdC7qJUX1obBJvZK9ACS8aA5fcT1YTNbnmRS2h8WuZU6ys",
  "key19": "5db34umWUiV548bvX4aF7ni8hRYt2j6Yc7Hokw1yRjTvLHUkAyBRUbqaNECLNeMkiDXuDDAw13Hf4u5uneZ4bpom",
  "key20": "4Gp6ox23j35unyavCjuUqomAjPwFFURwgBTqYYkTr4t9GfJZLvtjAjPmQcdjGxC3bkaQL4zP5mXZiaM2XJdPsGdP",
  "key21": "2GJQyehSx2qja5EQ8LXKVhdZHN7NKHPXixnpXSby489JRmTrTGsNYQ4CRLXrWiT6QzdzJ5GsNCH1yWLh6sgKysSv",
  "key22": "5uyJZyxWPh1QShss25vShucfZYjPyvYxqnXPCtYMYSnXnGHceSLc8mvEuEcs1JD35DaPvRVPtMw9D1sdbc35nndi",
  "key23": "4LzK9DvYSYApeESMmQL5p2sKGXPJdLhrNFepdukzvcGZG2yc99LnpKpGgy4iJjgTojvJqoaw9mSLtmc1sTJKw9Gj",
  "key24": "VbCZp85K5sCTk5q7Ss8u2EZcucoWfPyektBoupXkpqhiqNH8THJzfKvuncHyMCTv74NSvC5CsF3uKMRx2F76GvR",
  "key25": "Z5JE7nLWgnW7xPHrvfE1Fq4kAYgzA8K7nvkxveYj3tovFmp8EnHroszBaHqoVfZQe6MfwkL3FiCzNsWEdtdM91k",
  "key26": "51skAbSbYUWRzyPTndeDPM8vZamgqSAKdrNNMe3FUFSh5CyLT4RCHayx9BqfeHfZs4jCW9oumYUSDCeUdaJNmbsM",
  "key27": "5dRSkD7BD1dpWhP8TJ8ij2SnQMHptpigjN3TwRYoh3SZsfar1YjsH14QwnwFAJjQmEAgZri9C7WJxMoUvvBjUZHH",
  "key28": "3zPxx9xn1k7yrLrRH8uJixum6xL3C5TU28ztiTUbCuQM36WqinKuhnqP8K8g6nkk6F9pM2BYr9eFvdcqV94hsfzc",
  "key29": "3uJCT8pwCjxBE8aaEY8DrVdMZzyvQkm6EQy6n8rXdnHcanvRmk3zJvbnGduvqDwNrjryZ8gJWbqJSZbRncVGZSjU",
  "key30": "3nKEbYXj6Ch5FekxCt5Gfgws1YrGet6Rwq7fi6qn68LahZszrEsVzXiUGiddUrEcJroCzk4SHshkpjpDMW3Fd1Gv",
  "key31": "7YCd1k9XkZfDhQ4STmN3NXhEYvwhxzeBhXHwhb9SFNWFFWB7VKsGFvc4w3qX2N1chQikvL7HfQcddWUmxfMUtGg",
  "key32": "5SYPE2AZuKSi9ZAq16iB7Fh5gMQKJH2PfWbbHa2GLJSY4PB6a3vdY3vFZqXoZydfxEReVvNVPiWSPJUvVxMKBa55",
  "key33": "5oZW8zbjz4mvDUBz4vnrCQ4Le6GZa4Bg144XbSzM6URaZvLRvk4b8tBmhUAPYsrt37YX4yfg6c8721huPCMQBwBt"
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
