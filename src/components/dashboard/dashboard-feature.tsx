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
    "42tKYt2boZdc7LMLGq8nLz1A2RpjZMvZQRmke5dTQc3EiHRxaUXtRYaLLnbPzMfx4zZNHBNWEFBdN3f5b1WrQLEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "677oEcb18qteVfMH16Ekb9mfL76gRgnjreg2BuzcaUHJadnUg3o1kdRLnsz1P9npiMnm2ZSixYUZwoqaT5KYCbvU",
  "key1": "5rMv97LJsxVhKcaoQhiApzGKzf714xBLZdDYYCjrbWT7Kz7NgEb4uGtspSnMW93rvmpif4DA24vvcbpUmdeCzMjr",
  "key2": "3yJ16FSgvkC6mrG1HNisuf6sp74frrZjm1WJ4XMdw4HoDfzYPBAQcaNtRndMKAzAcwy6PifLEUgELJ5vdjVoPVmp",
  "key3": "aMZWeht3JTrEA6idVbef5NGR9cZWRUSFaA8bjkmjnSZLxqLwd7wRnvhmZXEqekwBFxTV8foA8QGNunkUNPPZ7eg",
  "key4": "2t77BnPm6BZHdkSKFziZQzXsEtsEttTKcUDnP4AZJVgdyGt6ZiShj4pPsdvdzbSACjy4jTSLPQZewmtqx3bDrneG",
  "key5": "gJ9eVV3DThXUHQPuTq11zk14GzEXJRNKGeM6X8638XaRYdM43QVX5DqseKdCVMr3b8vu7ALfpBVj8n5Xozxhaio",
  "key6": "63TxYPe3zCoAvFwFvVpeXxBuBWz14csYjvSEQZuaYXGxZX9HPfgRThkngavKfLBG5FkNN5Us9CNb7fTRYbcYw7wq",
  "key7": "3kNeiiEBtRk18XF5UYwk3qXuSBiy2uUMVweJRu4UCEBcSwnHQfPU3nk49jbY878rqJLm7ZoQ1uPsNoGXBFz6Gb9J",
  "key8": "524L4y6KNyiHaDmKBRYtrtD2GTobmVSjF5RDWS3bpJRTe9NFj7qCQWrZWLsmMTpoiLLgN2esvyF9yKfGTMzQeph6",
  "key9": "2Wccd3dKfocRZK9Br5wSJWZjpuqTBGqzvthgp35AA28aa1f5hEhZcvKmG4HPJmjEzJS2v4BeCrMgRvD6gFNcDW1f",
  "key10": "t2uqT3ASmcQyBUNPLG7Lqa4wXhpf3SwGNy6CNLutN2r3WbWxCSPQDwvjkUMxVJGDnsTGkPhk1Tt2Uz71taUZvLq",
  "key11": "x3L6EWinQ1cSBa1A6QUDa7ENy1NbeJWJ9uPmtBQ6pBpLkjABsPpLpEFaurTgn6h2nTKSThMPXH6XPtVpAuE3R5o",
  "key12": "5eSzComJGQs44sFuTR4fxA8u1BZTWeWvLhyetvNHexN3Ztx3d47AcKS3njfwTkx7cECSgfDnFcmCbfdRtEdB83Cb",
  "key13": "3VH1FkSa7omLfBURRGMyCNLsqCdzS1436BZiGAJjujHgHtTE5Trd1h4buoVfLuaWx9azAHs9M19LhQsmfe6Mck93",
  "key14": "4cv4nbDSrCKBSgRCs6NoUtR1XjsdeSZPRCPdMaqpRSLSRSTeNutvjmQRDVETMx9CBKvzZvvoYeQASiQUubN6D6rT",
  "key15": "3hb4RhheLzQM4MJ2NBA9svC6eFxYhgzEjUgsAXCTVtGxXKaeGmyBbhwzbU7ue8GEj3e38n1r8MmhAVLQ3G2K323F",
  "key16": "61dCc3ydTeXmgdAJNxmihc9WMD2AZAetXfeyQbg34vQrUFHr5E9CaPy8zFgqYCMXoREvPjFJRf9JPCDrFVrE4Rzj",
  "key17": "2xRGcFNjB45ueb9U8ETqLJAc18ndYnf9cB3S3uT9fhzm4s8oykzpQPwucmiGtv9Vf1NyWRUuiaQU8EqvgtV9aR89",
  "key18": "VNnkd4JfF1qYFX8QJT4B9uPwgnqpK59nGuizXBJDRa9hcXwosHRksBBSgia7Esad4BgxazzMdYT191UHJvct2Xk",
  "key19": "2iwGFZy1ecEzYiMMxt5paXUvGKyhkffCTvyDDGm9vezMdb6ya76f4cSebk3rY1LxqiEYFNDEzNYJuXM2A4tYsZLK",
  "key20": "91n3kjykg2afjwvRtypbUzj56M7U1JRVcNjyvUPE8Xt1Yw6nJ8pmeghTq7tBMCbYuJSe3i7PT8uduDUPUYu81e4",
  "key21": "3UUFeKs1xUH4cn8KLAgSc9cZcKcmJdjZQ6irD7MSv8bNQBLGpa1QPjUDoZQ7rWUupimdTKc6FCyGSxoBRR2XTZZb",
  "key22": "2dBgXZw923nd2bgik4eto4tLhBHnvkeW34EKKq6w8b6Ve7YYBu9ig2A26JjDkzY8gsUNTTqTAEijsmV3VGLJY8PP",
  "key23": "5cPZiEdHy73dFXCGD5Xo9vgWJNxc6ss4JqQB4gThbbVWxn1QxpNRX4kCuzSVjsuZR5hDPs5mKjZs1x17mSsFz6zf",
  "key24": "HJmU3izFCTvRU5YFust9kWTTSBWzsVqMtzr8JXkEeL7yGTruCRezfuc7nVqJbbhJXBxUWeckxZ65oTGDcFzAdm5",
  "key25": "62aevfoT65VqvowYjn5thLMxEPnsrKRs7jyWEcchD4fvwwhvYBS8U1bVABaQzbGg4RsJ376AU2f2UAvYwDCXeLU3",
  "key26": "2SmMN98uwn6eF8KjXr4RL892JMZJkvUo59nd2q6j7ghsSCtd6kVFvuq7uHTuHLV95YXksvteUe6JmYXb57odVbC6",
  "key27": "4hdNSh6X1D4JTz48TNU1KEvEgvLFQnvmZLVThySp5FsMZ7btxcXYvbtZsXCsQsw8JoV3yb9q9KZBUX6kyWpQurM9",
  "key28": "2YPNE7kpycQQYbhHJoemH9UdCWCEPgLzpqRehYWiEGQ8N4iFmoRwEF2yqNMBQayXYQiv4uhaanMwcdbe1ZUygA3e",
  "key29": "26biFa3igyUGTtRtU3142kzAPa92VPrerUizpfSbn8xyEKpJ1QAymyMVoSabkbZkvfgjkcMp7ovMnVELFU8CZC6k",
  "key30": "FLWPRg1dKHD9U36LZQjb46L4kMiBZirtRH3vVf5R8wim1F27MgvPSRZ62P4EkaU6Nf1SLXNvYwDoiGVAnfpQRf5",
  "key31": "4gazb3ig4dj3TFjGBvnPaDoRH1LKQdLCmhnZkj7PidJcvuHirVDsgCVVbmsQstt7iTa9ipxxU5Y75AKe63wyj2fi",
  "key32": "5tWddFU77UzoECBZdr6gD8JCSuL1Kntkeyd6XXnYSK37bJdcojVGN3W5VX8yyDYYwK8A6wYx92ENqZrjZfiv2mNW",
  "key33": "55khyH5iVtWmTqQGU9GimB7NVjjjrjp5Dr85hwqPVsXb3ErQnX1QiZ5s1xdBNJrySMFprADbpXJcSqir78nwvDCj",
  "key34": "4pLG59ShxjELECEs6ttaapVYRdgEJEMiXMwYmAywBXDoF5ZK5RSgfWpLhiB6zaQepi1CRZ6kvqxHWZ8iAHuD6PZp",
  "key35": "2R1Xy6zoKS6XrJxNATBTqhaNP1BxEsRFYEXZxF7BSFEvCDDLxTe1YGHzCXEjFcY9GfCMZqw3THKdZs9QoEhPAQYP",
  "key36": "4XjSaYDBwJ5WcSbSykrLBV67Be6GcQc34FFmY3WifCSg7iM8kgYYev9EPpo21xY4ANFNstErpfvhRDiGFhsFb71G",
  "key37": "5897s8grvHYYV6FconxubPVKFvsneArXr9NHdM6ursqXF5wRy18JjTuDv9dy4FKJUq4r1DWygihxFubzH2qXDFgr",
  "key38": "3Hk7GUcyLSZdaKhUnmMyyT3F7UJasBRrMsoWxaXagXBErC7nWHbny1cte7S62qXGdG36x2pyDSqcx6NnpmbB2BoY",
  "key39": "4rZYrXHS6U8n14YC13U4YhouNQHADyRyCpf2F5sGqZzw4Vyc7sVH8Bgm3qob9z4t5o9JrXCxAajXiKFTvXjoJd9c",
  "key40": "5RHe4aiYtPTbppXoRcKV7zKxQob7GqB7wfSvLCP6JvMc2v5XiQo1W3FmGbxt5CRjDYu83vr4Znszdjb67BMbESVy",
  "key41": "3EKtJJvv3cxwuiwJjMbtUbWh1cDUbTckBSe4LL7Zcbs7hQLEBLKbEm8M2gzFy9p32BCEkx5n1tRKgGuVKQuMYEyS",
  "key42": "3wZR8LtGUE9EiyN7jgymLiU81b8bQZUhMLFrVJcxpPRWAKdHMusojEasVmGtAoY3ProGi4mcT1v5XWW4hBLsMyED",
  "key43": "48xvW6iYyKxkMHYNhWHH2Ka7aXrc5cyQVmwuefk8pWuJmoXFdMegtSUCe4aaW6JB3S7E6RTrCKTftXR2HU63up2y",
  "key44": "SqAfzFLYTKF2fzhgjMPmPk3AhfmnS5im96cS3HzzkupCCBvUswx19UqTv9mpPAXiqqTb1VavkHbuDQBYeP7U4iA",
  "key45": "2iF1z5bheUkeyDMJ5hvbmEcgJvbD1xj7GnBMRjZozXL4PzjvYNKG9nMsS1gU1LEnWsjM8YfFzGq57xVDwB5PsDsA",
  "key46": "3MLSktonpHMo7o5UcTbgo5Y8HSttceEiVE9ZE3SRMJaYd3A95iVg3KUPEar1GDEzGeZRosjTF9wSTRTVeWZq9qEm",
  "key47": "4SbENDBTsAuKh9VEMU6EjYAtaVMhPHhKZ48QqDx318SN2KeCFATNcyRWSRKbKVXypt1PW5gKhJ9bwoZKRB781SZP",
  "key48": "4kES1yWpUvD3stB3nhBU1t2BfJf37hzQMYgig6Ak3q2M2nvWS4gtNVtFBtct3EgtNGsMtutnkufuZyAUH2wUbuU6",
  "key49": "2vFQLp3zduB1LKFcXoX9Btt7Tewi8zAfzgkHqQzHSVmnrpjHwpewR1GEVhx5cHJmYXMwPTUZddF7yioKQGQBzouu"
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
