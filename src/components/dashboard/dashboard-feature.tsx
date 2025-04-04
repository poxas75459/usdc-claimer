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
    "gUsRw7qrh4RfaJhqk16CHqxK2B2v8kWB2TEgiyskXDrQ9WboTf5UHjeNMwaS1fPXdbVa7z9mFLGf3AUuWStyuMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ZttLqf8MZsEMXUs3pkQ9HfQEuTenEPeKJMyKXUeNuoYFuXxq1s6FFQUa5QNwdUNcjfGj68RDHtQWV9GdXXKzTZ",
  "key1": "32LEsMmbyuwNzrPZbh291m1Qd9hhvEPGwxrcdewsKv8Ybd53hkKyH1JAo87yhEA7ieKvU8yB4o8L4xoXe5E2XqpB",
  "key2": "22HA28QBgeheoNWvLPFAWhGbvup2vS2ZQwYtkZwWm5GTZvAiULSRe5Zi4icjH1V4g5kFtRAGbHmxsDeGnFn5xyiZ",
  "key3": "5r9Ac8R4NhfS9t8LrUGK4FrhDeAUwmFgmS2DjSPYZ4r9vXuaqEjGdnFcFf4cJXFpxJ3x4FuE1aLepq6sk5ZUAVSc",
  "key4": "3YrS4otiCYHLfP7BGtNPfAMcEKg2CCoWs7e2EQ8UjkAEUYtwMBNMznaoSECaxa9s6fkebPaq9Z6vrkViPSSqLNrG",
  "key5": "3Bt2wJnZ1a29phgPwAHkP3tmDHuGLwanvJfySv6zaGrnQxxHRLy5vaunfafh5kS6WyXEtpQ7NYFwmszkgBjmnQxM",
  "key6": "XASipL9sh4nCyBcbLZzjbGwCNbCRySnzVRagJ4kkSEGuL3ZzSEAqbE8y2jUW7rfAwSHd66zLpsAWRXcKuxUyAWK",
  "key7": "2aUi3DapnsjjP854dpe6XJ1krVXDmPzQqDagkGrM4ETHtCeA22W4ajhqvYfmkgYm4iNhvrqUkB1hXFZwG4CCn9w",
  "key8": "4eHqQQnT9hW6i4jw5qwWNdjc9vtHiVNKwtVQJBg5P7N8oq71jXgeUii55ohtJWpk1PAA2jdw5VWb4D3Xr8kCS8c2",
  "key9": "2zHLmfMyhryp5gG9KKHvKrp5KyAB66583ydMBE2vruX5XLVzLJ1ukStMmVmbfx77eZyLPKvb2VE2PkqYqMQi2hrT",
  "key10": "5JSawi3bjp3MpXwSuxVsDh3kJPrEgnyEV7yKmyr4aZqFRNuX3yZ7NLRvKrCBNMXtwEsTsMGuFYh4U52AffbZqgmk",
  "key11": "4LWCugKTHWbPYhheKuA2fMkEYWSATVvfZKNCVPWSsH3QXAcELDyWFvBEu6nRu3spkLfYWXdR1tQfHd5jnYNHZ8h8",
  "key12": "4ehvEmmXGxQ5uGqkmftyisurdydkPoZpr7TWwq4oKFTNb8nPF3k8RJ2RE8rHa4jAJrpgTXDVYaB829HNwN9DaEz8",
  "key13": "5r7vU4UzXMBqwWeUtXkyqgix5cjzDjNwNaFcox7TmtbUALSTd2px1Eb5wSKS3E9TKiUsbeizZeUB8JrDJc8Dd5tA",
  "key14": "4RNDVkFoxA2ERVxPZxHVHBvNK3Yc8NTwD9nxjQuz6FiKXYTxTLB9TaEGXNA8btrJxY8PryuHk22rzuCdBmNtqeX2",
  "key15": "4QgoP7QeYxpfPXq19nMokabSXY57z2VXkP8ZUQS1jYhAAJZX23RFj9CS6ZX7cP7rggz1KxX98sLQx8kCoyQWU1im",
  "key16": "5vbA2FgUhnMC7UidRjaDWv3AnBy3pPjPJszxLnJfS3TEAfBnRoA6tdU9RRTtF6diWfHYxME5m3ioeTqpK89vtyxV",
  "key17": "5jJJkhEmdiJ7LUyvkcGhoAccGEN8Sx5G11ASmUpywVFAZtQv5RpV9tEJzaUvuDtCj5YPjQ8BaLNM9U1XPDUGtpE5",
  "key18": "41P1hgR2GmBRYa8wHyqRgFDDH8TyxRTgPS4wXVvdSRTko4YdUr7Ne6pPbteCeyQoDy2zefBVRWWK1jFeDpfRRhGJ",
  "key19": "3FiXWpVtxGGWYPH3DXCu6tzLfoY9WG4wLQEf65GC6NokDvj3iMw2otW9WPmB6aYaTEtsjSpFJEk9JLsQwFvpMQ6T",
  "key20": "2YUJwcLFmaTKox2Bm5e6fy6h857vvk8JcqM4jG8djHMJ3htq1z8WLxyRxpqPSwEkRmFguciQKPMnfNzB1uAGyFVz",
  "key21": "3uE2QYWyQ2gZqXhcLjHhmV4VxFpc1f3Vtn8DqAJ76YDYM781Q5uvsHp8uGPBPqGqiUzgw3D75rPjP7oBwDx595dD",
  "key22": "3VJyu5ASLHt2CCEEQ4wDcfJPd52J6ipaq3StsRJykBmJ8bni766fSXC1TFi7hKmsYQr3CW5UVYt3r3s6ah4AJkez",
  "key23": "5Gogn9ZmosrmBefD6cFU5XTJ2FYiz8uuvb5QHw1otrED1ZmxsEEV1kfiVBDHysSVka3ua35HNri7pKeFj2fiC3fK",
  "key24": "ymkNQ3P96sdip7CzYwkaHwCKFBRZebNFKKpvbfTM7nNeMCZxeBrvhsSdY8d2tCk5expsV6gdXyEiQXybzd3CgyF",
  "key25": "5NVFhChjQTFa1p9Y1qHYZqhtdY1pxhhsAP7CxHVmhsCo7WkWFJvZGGbuxQN1nwZEEQBXtQAaEAhsJRZK6sKHR4T",
  "key26": "5nDgqpNL6iLBJn9DXkWAYUWnTKLroG4YyZSioS2wWyhzdWoLtBuhF1U7G4ZPaWRrUCQVpsRvp3mvvumVdjV1kERy",
  "key27": "mjCAJZt3xfd7ZH7N8DBmRipHjaVeDBVXLtd9cFhYanMa19R9MEhKV26EnoELtPUeNhVdj4azZgNefy4BYUh1cW7",
  "key28": "4ZZ8Yysw96sfafEC2HrNL85Raopd93T3GjjLDv6dRQsjb17Bzdim9oqMwCaDoek6bPzv3zUasV8umKLfyAKDVi5V",
  "key29": "48jdhXXphGjN2fLSPbQAMdfufaLBhdJxAAAjpqgNSSxhanzpk1pbDGA5QBVL9SJqSn4TqNj2xj6baYQ89oXF3vF1",
  "key30": "5CTDS4ySQgUr6e46eSqMMnxX8RpeKkv9u41vhfTc9X53Gpq8GJcWbJauQfbaVE29aBwviXP5eg1MSBciePzrjFHT",
  "key31": "5QteemmRmrwmzi1fxZLqeuYsX5B8C16XQYDKvwk7rvz6bgNjUHscRtFMGw4JffszdjZ8oPn23WVZ1q8fm581uoAG",
  "key32": "2t5kY8Ysp9crb54w7NgxxrCPpxSYXMYGc9aXZVfKfCA9edSp4sPsicatoEjwQmq1EKx5M9uc87sAqPB4TJAnpDHb",
  "key33": "588kjHPLAQjYEgyWw2AmV9rprPR11oiYEsPuq2nczjFGPDoqGZRwKR2C5q1toWwQkTEZCEWuecZm2sYVU47DK2W5",
  "key34": "5LpfvsropSCecD8xE5bpSaFkXR1BzFw6zRYU1bDp1o5mX48UPezCsGzzfvHhexpusAEgXLeRwLmDu7u7k4Z1WFbU",
  "key35": "5T4gKm6eucz9HBX18T86chYibHQxyDaCfSzJ8dnRpKTjozvYk264RhRbQdEH1SXq9B8mgthrAc9qUJ31tsb5B3YT",
  "key36": "xiktkZNBWLh2XBjML7m8izeX9bf1vPUxpuLo6mmg4UdFcpSxkSBG6dmkeYAFMCcWXPbJRSSGQ4gaywTV38MPU5k",
  "key37": "3rc5Yps39wzg8shusTSu6oJWCVWa4KZLE2kiSY2oHUAnbaJJSWMctYbUsUjHQQ1AKqfbkDCDsp8R7h4RgUbdWj7E",
  "key38": "3acsxbng3UZ8Yj6RpG2peUzv9FXmzxeLb7fdvA75mLzwsxTipjitqapAkNbB8mSJaaMW5AVPoUzxuyAFtc1Uyd3r",
  "key39": "4crvXHHtkzYQq4HczF6dwHZbuYjbrdfKwNg3ym1UsqgefH75KZerXen9SSJAeHnDXBH9vkhD4dJJvWTLT7YHSoUE",
  "key40": "4wAeVmn4WDUXoz2Zrmgtj9tX27A8LWJeYauiPYsaQEwskyxRR4JZacDSYAtg4cnr1kdN5ATipEHZt2a2eimBzie2"
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
