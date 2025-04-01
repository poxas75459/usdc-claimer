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
    "2yHuhdrftvZ5Uo9ptwZbvwkEfVYkeTrhFJ9E8EUSJdJohT2wdqMH19adSvGamG8EveqwmJoqDhY6ew1Jcr4FVJTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kA9JMThM9CayqZNk1xHTG1Ku7u26iSVzGeRtTsm2zv6Nsyz1rmPQBaFTTb1SGgmknUWYsiuhmvrWragrkUzywCs",
  "key1": "31THdcpub5eLbAMcNBG4bc26hWYYfKTNjhEnC81EU71tfro1zyvS5rEYw97M5aLbLb8eK86N3b3KzHA91nHV9BSZ",
  "key2": "4E5CesJjGKA28fwYkfFXkH2HwJ9hrjyuiJPRRkdL6cTzLV2GTLs2jzT2HY6KMYEujdHUSMSpEuuqN74iDEx6VRfQ",
  "key3": "2R3HxWpDkzeXEt3Jz1Hoi1XJ5LCY7dFoAjFHuaJrS1YotQnfSH8UNhbBHuapgPCtqXtMV7AfMcBzbTcY6G1QyWZr",
  "key4": "3owG15e9bDFAmvub6uRq6CDvncJnFgCqoS5YdfAPnv6v4V9suRgoYQCcmk7f4LzgqBLjjBUcMPkhpeavA68iJizb",
  "key5": "H7cb9AFJgJZik9ndfvFkEEASjsg8kHzXm8yFaLqXt6GE5CSGQyUdvPVRg2DLWxTtbC4RXTZwENNtmWkUppxJaqU",
  "key6": "3AwGi4Gt14sjGwGUQZm5nf5sjAk9kj4LojhdnST9jL3Lqqvpxa7F75HGc1tGaUiTrz7F9eMT9Md8RUVKuG5fvrWZ",
  "key7": "G1ZBJA11wZpj41QJwWSeEcLku4mVSs3AY5WwoNL68udVSpCFtqjXWH9WxjVpha2eWA2fQgu8re4RXY7fsv4nsKw",
  "key8": "5Vb5vp68r5nYwfzaWoxZN8L19uZ7gEJuS89V23cWhBQpwCJT9zLiNrantCk4pMgmKvButD67aTutsy7zQP1J98Lk",
  "key9": "52podBXYdGFq4xDvkpqVqYvef3JaJUPZHa1FyjoGqjs9i1qXSv4nzqRJ7zmkZeS9YbKutH8L9wno3AjfhRa8JFkN",
  "key10": "X4WXvr3RyY4V14D1CtQSoXWffEkaxgJrNxJ29mss6iqefGPmncdVTCCP4dMKtiLZ5QXx9FKyrb1BVDdq2n2s5wd",
  "key11": "2iUvsgTQwZukzPx7LCneNjDztGntzyUan9V1Bcq4BncFGCoFVe2Zi6LAAmvHZvxWhbNN5mFCe9E8LyVzpmDMRhT",
  "key12": "3LfYDvg51YoWiZLueuKAsS73PC5UZHqPpn2s6yijj5BGDH7iysLjexmUg4c3272SDj1DxNYyW2z9x9ttrqdNMraP",
  "key13": "55VGnXK9ozJB97jwDTaDv6yrV4qqrMP19EYZaYNHYndRi5tRTHCSGBRBvPQnWFVsJjg1cQWSTNnESzBMMUGfVjs8",
  "key14": "5uaSjuFCxctWkWBz2st7uPMf4cGm4QfkgmFr6cJSD4QhUXm1MnGNRfBEjKGpKkkxmYw1BNuKYe5mD3JE9Gn6XmFj",
  "key15": "2J2r8rpbWx7wBWxF5Uc4yc8MNGuGxQGUD7vkFitRUu6NT4RXtCX9sHL3uVJV5pjWyHXxPAFtQfHKpvEMpgPR45LK",
  "key16": "5bnVSVphJhcqJa2mhHeFo1cpE5raCGb5uiM4K7FLyUCFKEZZZ4rrVm66KAJBiegwmbp2Q45aZYC61ux2xdAQd6vs",
  "key17": "3N5GbCH1kkxHkqLNdQifF3MEKKNChtKzQ4fZ2aUowSq7mPQ9Cf9nwHRmfNvoCJdkHe13291ijxDVLCL9re7nYiqb",
  "key18": "4j48JuoL4K1J9m4EFNhnnqjWZ38vksDbgwMaKsrPk619QNeNweUg2xdn3RZ4vXA6JUKHbq5HtBaX7CsnDooDy7DP",
  "key19": "3pVACCpuLmpWy9srWYgWfEycepFqcaW78v4UTpAGtQ7Mo9G2YUrjbDJnF5jtsGEAX1Zt8cebr6SGxbtg3DGeNSd6",
  "key20": "4tsrSv448gNZYJczKLrTpLuhXxmxo6EqqgHp9L5ihXoQy2cznJ9NkvwsoXzMQ8XEkUj5UZtSVhfRwd3PQW3ZHoRF",
  "key21": "5fyS34hhdspLoU3bgTsbTzDT5BM8zvMmupo8jribpmvmyfTtrN6w8Y5EMSZdRXsTmRMqWbGpNrGvMZziuSjsPDrE",
  "key22": "4k6aeLTp43EzH1uXEbmZLmBxPAMftxXUc8joSP7BvQLn4rqAh5fkCxgiPzGHQTv4xiVASTVGNFtxFdaoExW3ik4F",
  "key23": "5zDvRecKiPJvDM7rsrNdt5b947ev9fg5yaS18En5rPPwSr9x3bqUQBd869JzCcgYLqGV7DmZfzVgHPw4zAPJz1fe",
  "key24": "5iYAcRKpL4LHbFqGkReTmVEkZvrZB8hLC5GmRaeBnqEFsxTZu3oCSr73eqFi4utChLMzxoNBx9rYemGYJWhmAfkQ",
  "key25": "34jLLbCUZYujNAGcDPGVabezzRC2nYvoYagVmNacf4CQy4iKQY3eqKjunkhL6yMS4vK9K3UaXbWUuWsZLrqMoW5R",
  "key26": "TFMHVkoT9YFQkGQR2txzYBXXZkKo2FpFJvSng7Mmmmco9YziCjvZ5XpPMFEVLHWH49aMDCfNLxcGKLZYX8RkxyS",
  "key27": "2G9Gdc8cwALEWXa7uX4MPexTV68GBpEKvjbAirHaycXcNLhfiW1juVdSQBHPijbLRpGhJNiubQAE8ivu95SeyCxu",
  "key28": "3hcXFPDZidmv8SpdmkVbNaPh2EijrGiA6zTSCyWXDRgKqE2FfYkzZviPJVCocUPLfZYbAJJxWdC6khCXvtyosezm",
  "key29": "q1GA6wGA4mdUrvKHyXu7MBiHC7bCgoDrrBrsRYf1is4XzwYN5j59XEfNqWnxK1P1n6sByC1KraHpK8RQU3YEtjy",
  "key30": "3fCZnbk6FgdWzi9XMHB3BrBqfJyDzASDVhgkukeLAupXFbWt7AFUEiJxDSY3tPvRWLkNLZJ5PTs8QFp8LrDGyNmK",
  "key31": "ZAWEiC4VnYU8cnm6RtiArSujg4KfmWKJXjjkuvVpzhba2KsBHednkQXc3v6X2DuhQTVxfrUF8S6rrkpKhtZtaH5",
  "key32": "9egmKv2MMsChxL8NMbUhdbm4WfAPw3wbdDzskRgSfS1G2KifsLsmfb3nG6nL947MwNdq1FMai7rB2kd9CbNeJau",
  "key33": "2MSss61vD5szSC9V6JejpcKMVA1nwnarTTdvYrc5TdqiYxs5Y1HsvjGrDAwccfTcsPScpfPPSvDh4LsJzaVUtx93",
  "key34": "3rbV7D7PwKmvZdna1PEKAQDQZocX46DFifYkhowDXfpwtoyiqFjghDa9Do7NcisrZWeMSHP9stwU6KfcUexK79L6",
  "key35": "3rhd2hMRRfpG3vgpzPAWfRBjMHnbGU8iYP7xpxPNr59YJvj5FbxM91XRN36jWz1fdeS6rnTqYmhoX1mWXPMg5uVt",
  "key36": "ySoKmTk4xdyADKFZu9FPCzZ3KvPuNA7TVvUb91g1b2hTrhFFtL7HzGdtpZp5WRk9tYYJLiZgRqdiffNYV9B3E9F",
  "key37": "4ka3cP3Ly74Puoywx2sm7bECJSyoydHqsnCNsUK6G9i1d6LCEzokZ8idsmpTvC2JeCs9BcMm76VtqqAc2AvYxfem",
  "key38": "3sdo5qtBXdFNujxiSLhznvdzemww69qYUcrjYVYii7eAydMfHK3VjPxTSv74iWFdrWM6gd1JgrjqNEpZUv2mEvSe",
  "key39": "5LZLmXyJ7jzUuLPei7AjMxapCum2tTm5cTVGSmRAnBgjyQRfrddfGuUmnBBYdqBGmjF3CmFqbsC76xx5VcYRREbA",
  "key40": "4krahx2nCXwMVqsJ9weqs7xF7gzgRo8aNh33TZf7onVcXFMbN5jnrJETHU63GECHB1mbt4JGGxqxyQAViLQX5Wc5",
  "key41": "4WkcwNuzH4AUK4uHEXCuKFGd4Cck9ijJwwWDfTqQeMxLqkFovfq21UomK2nist7nHgZ5JXP7YLygMgygtZtdR8hB",
  "key42": "5W4jJEeMaESinxLfYPKeZbEakcmwkzzZDT9bA3a3RGkBTgADzBo1t5B5oUF4yqstkkxtpu1iSSLk3xf42HX7A5ip",
  "key43": "2aRgp2xQfoCT6aWqXqkzsbhXa7HiWtofV2LrFhstjwiWJrufafUG72p1yuEggyQF6Zk9x3vMSEgtPEoKTPk9FfJz",
  "key44": "3kgAA4bSk8AnMiUW1ps6xNo4NN78ny7kjkhMHbrDEbiACue4idjR53S7WiRHY6MVhb5uoGYXoDYayi89PyTZDaBc",
  "key45": "4SGfRVRQJnb47suBXHe3w6iLHzuMfaofEpLeuw3QnbBQtropHM191cu3ERGU3udxBCq69XVNxVFz1mX74Wk9kMjW"
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
