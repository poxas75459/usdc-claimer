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
    "4bwTLR3VntZw2UkQwc7CumNeVfLUTSPbQ8dTyPfxRuBK647fg6BrJuPyLpdMwn4nkm15A2UxFnxPbuvC46BP94Gk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jt1WhRps41G7NyLEXcuvq7XXwUFCeU4mDuS9Q5W5Cse1rapfGS4LYzKFtQJjLnMmWCrFZUeuM1qUghQDHN37WVH",
  "key1": "3n3THVKjPun5aqH5WK6LAL3jhT3XRcePaV3fewBnQ4Kwx2jTv4R8afh82LNyQMYaerRj3T8ANp7HdvoDMvmkiyyB",
  "key2": "2Q5RLYzJNuQ4n5PsNdr7x9ZxyVXFRpGYLzrobkDiDz4Ky7tippXvbKCpnZ4cXkKdaag7SJc9bcgne1DGkN3YAZD8",
  "key3": "52wnVqDpFr65R16dqWT8VKSbEpNfuaiGPJET2Q9qBqc9PJeB2WrfhDiQBSZZ2k914PkaYfq9UmTgbbvLPysRsmE1",
  "key4": "3obsCz2h6E2MyEwUVMXJ7u9ahjDvTpEJYAVSEzoTy7HwAYmV8ziAWEAb2uJCk7hEhSvZZYisZKyzkSyh9YDdsrFf",
  "key5": "5aLhnDFRMn5aTWv3gL4nBeL7tbHw396s8XDKUXesofzwudvLve2RKJvj88aDSQFLzaEdn8tTfBURNwWRh9BcPVRc",
  "key6": "2VMGSQ1eMf9WtMvddBMvJvNmmrFc3j7G6FkXU6qwx1Xet8hJdPLCsYE6QaAVbUsx3qxrW7hnGYC18EeMMJrfK5bu",
  "key7": "8WHqufgzfq7T9q8BCc6GHGN7zDiniqapHdsjRVHYrpsWSMCM38k2FVzC6kg3iDTFut9oEfsDQ31LLRSP5vtpnit",
  "key8": "3shFvwB5FtP86CWLMBGichogeyLSKRTS8RpDKYiTyeAKcJ6zRwHLiBc1zMAzkuSvanUMG8cia5obwnAtAsQtS3bE",
  "key9": "obB2tx4JvKeuGvHT5dG89BCRgRoi6hQTbpF7mwdsefS2jPJPtfE4HHcfDcWNChiyJA2uLT446ZonJLbdzJgyVMn",
  "key10": "5mhnFdzRTRzrEBPUsPfaUHTnkRAV4QKWSKkfXKiaidM31hEoHwUSmktQFZX6dRs8QbgkH7PkPYKbJbvsXEdFCTTH",
  "key11": "3kbjJz7HH1WXhgQzF9sNApps3LuueVxKLMSfLKjTAT2qWLgNuL9DaD1jbhr4NY4cDN6iHA1t9mEUDzpMa645UfZ6",
  "key12": "4JsvGwUzEQzWcGnast1u7kBAWFmdJjE3f2bUy9Z13V7v1G1iqPPGdzFRX4t3Kx93qmY6wrHHTE4XxrLhvaKSnyCR",
  "key13": "Ai9rJ9pPn31BJMkyz3QXYNFFuL625qJDSf8xusTxoKUszxtHvcFhE6YUjd3JFUsdkxh48JnYYCzx5i72uQ7mwC1",
  "key14": "pJEF95dCpS9rqqEft6eHg8gW7qBjCXjLGQPc7Po1tmAkhbnTCbZKAtFmNdvNZqvh4v9KHLRhshvzToEHQfcqAfx",
  "key15": "7NBqzMzTNitMn8oSVsDdwPPcQgnoNdagsY4EZcSNxg1JMX2cP6h7X9qrtQbUAvD4ay9ZFfQRkMrEtDsrp3BZfUA",
  "key16": "rV97fvSWQS8noqqFycWdAmAXYC9B3Zo8Pdus23j5owU7M1jYyHa7PyFJucXgn1kgHM7v4Qmuiu74T7ek5Kmbabw",
  "key17": "QHKXxDtjT45jc9SX6zqdvXSbPaeSu45cxCHnptRvvPYsTbhuEdwyHpQjvqWFALLW9hTsqnLjAyV1WzzLtYv9tuB",
  "key18": "5DoayTFgvZ3U1tQ2767mRep9rVTNzaJk7aHZfBuVeC1s1pAzDV1LiM3nhmDDbUXvFMxHDEVgex8WFJBqnKtZnomy",
  "key19": "3nRXzX6kHYrTMPtxPSm3zjdEjbrog7oNdX2CgrDKDEYWLTwj9yJvwNG8W1LxEFCdFKa8Yp5tbe6FqKBFk65h7Qt5",
  "key20": "3SnPHoo41wck8gqfk2RGmT9rVAXYiqSwf1QobC8gV9eD3Fgvuw4EdwKeZKbZRP3KF1FLd2nXN4HdLP6Qi3XdyaEN",
  "key21": "5M8a4BCo7VC3DCuusJsk2nSKmF8PXDcKN4xi4CNDhoieuKzxxw4VRUaTHJQztvQp6X4j5x6qtnJcsbATDs7L36xU",
  "key22": "4s5c8ztBy2gdD9TDGzyDUzPniYXLSbs4G6sa4pNxte3s4XLSwapm4vHudWcoMJ81Yz4t99yaqN33nvSUEcViXmFm",
  "key23": "aQsHVzNmFbXuwWwpYdJkJJmP9NXSKe8twxGFiqeJoBPXgSQfUiwEKGYAEsL4zMCp4vtm4NPiY1Rrhe3ZdBitSX6",
  "key24": "4SzMvjsuqyhVjCXD1KBAGgNSRYxftb9AfS2y59snEWE4eoo2RPBowVfGduwXKyjDWkJh37JyEkSPh8CcSHqoXh43",
  "key25": "m7JMbDbacLgnhqLkrk53MHm7dbE7UwC7WofJZJ7BXXuxe5qWYACxLfJgRxwCjVUdJat3fLnKvnxNeCQEmdyLTrK",
  "key26": "4KXfGefcxpV5nbBQdMsW4KxJdpkWVDCEpNZHRNqFhRaEXC1897KbFK17PB4KExB8WdgL2QBq1zfWTASZS3v1xWwf",
  "key27": "2rNmG1TKyup4kg3MY4V8njS5WteZiut2JUB7LMPP3eD6CpwSQkjTaFUHstos5o5VUXZpeWdkUbEVU9faD8y23hDx",
  "key28": "Rdv9tTJXkCN45W35BSjYRJQjszrh9qzEUDwHGgJy2DuLnLX6PkPTrCTtif7ApyFE9Yv2xwG6G21y7S3v5mzqd38",
  "key29": "5G6aTLvgE4rsqRVWLTyiuwYLhVBQxEnrSnQV4ddbKuCgkWp3wzDxfmNUdUxyicWVMevaomJtMCXYdr7bcjbCLhyc",
  "key30": "9HaPodJr2GPNTV8ogxMLCqovnJcUXGgdHtx3yoSfoZX2BfJPLXWZmDELcFn8Hn77JxPafKWtQZKtBLhR9WYB4ua",
  "key31": "4zJcnLoqULquJXRFPxk7MBvmZbvvGeY5R3b7tdZo2HDN8TpbH4Sb64o24t5oF9zyLvS4TQSSFf4jdWrjrqXhkVc6",
  "key32": "3uuRaxYqo1ScVtvtTEm2VHjXM8QYkJqa7FRK1BdLUa7npfD5zF1phdqpWvB5cFhhMTTcpbiGTKy2xihzvTfVNeog",
  "key33": "2nL5rD36cWrZtZHYUTfxgogT6rFoFB8DgttMm5KYQq5Cmhmzf3WW1fK9yrEwu6LvHPaGqmYgVdsU5W2i1bg2GZot",
  "key34": "4Bon5y3HqtVKTJt5bLxAKGSRWJF7qPqK63G2KES7WM2HNUmZfyhr6cNiVXrxmJaKTu7xg6MR1BUjH1sDE5K2RQQe",
  "key35": "5FC6Yej8sMQZFWUf3qDxLJrq4LVZARmujW5VArkwoqbdJomzZY6KNPcCCQz9umniN91Jcox4aHnHb5iJiut3KFQP",
  "key36": "3jzH14msJ23ebBMzAFifEDbUb8bEAQ37wwKnQiLwS5pZwYyZiY57LLzdj4irPpu5V7Knb9M7xukEKsb2k2hpLnXg",
  "key37": "4vFmzMmKEWFb3NE5E3AVtDNafNVnn9ZexoowrNxkR2A9Ae2qjngYsDiPGxaBYkykJ439W4Qx3ZbqBTkE6PexQLd5",
  "key38": "yEqH9fDrztK1jK4BWaebyE3aCKoNyUWFwEh58xDtHmd3mUuL2tWZKTGQFPfoytLT4cype3r3tynV6QppdnNJUDW",
  "key39": "67h1fKvuQTVckUkF4qJMkeAFRTpqqCenKDxfz7xPG8E8aW7PBgXRtNw8yMx8HRvrS7CVxdfGumyDsJydJzhn6KW9",
  "key40": "3Mo6m8t565UrsDEW3ST2FTZCKT2Yk47FBkYPpvJHz5swEoY1HRV3g25GcAEkRg1YsX8fMYV1y8s72ubU1YSmVzVw",
  "key41": "5rQnDDoDuSEmyv3AZK1wMbF7mtYaSWG12y8D7jBAueqW92DKMsu17ipwrXVG4bAs11DQMPexfpqo4r11yJyfmnve",
  "key42": "2vuEBQjejqJkXRGsRkmhD7BjixSdcrZbdbBQ5vR4gSxGjUsmTtjgzhBwP4DB5p2deLnq9cdoSw2sNpXUWy1rb3Yd",
  "key43": "wbmAwANa4rMPwDbipgySnjoSCv7VWizg4KnnhUFMLJSi2EPC95yCpJUoZQGp8DRmxwhsHn1QKayn4Xu6sFhBt7i",
  "key44": "4gfCzRbmXLFuwmMLYe9imLgMKAoGqbMoV7ikUWdPRVqKP9g5V8HhjvYQyzaRQShcGZDop4g1zCUovp3uo8hFNekB",
  "key45": "2MHfBGfmquRGiimitFMjGari1QHWwKkLM4GUpipgQHD4QMtLxYxkxYwjMxjAiBjeNm92bXN9wHk7G1gztMBHCmzE"
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
