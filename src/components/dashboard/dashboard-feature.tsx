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
    "228Dqa6mTRvjD7R4YKfu2oyWqPUH7zYrrnq58XYDCkbnXuiDNTsyUFu2AJFsctcYzDkHxpQe1wox5ssk3BR6Sp7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MptNKcs1BCVkVpVWqeia1Tb9eTkGN1TNQH3XRnqiKSoSM2snyxMm8Tc18ZgKY4srXSRmYefVqwwURFm7knR13d5",
  "key1": "MYHQVbd4RUKAvTLnfvjGfSG2G2DZt3siKN6CK9ApwDBDY4cw7xALFq2QFzvFiTamh294x9jg9MB92jP5oiS7dWj",
  "key2": "46Rvd1qRG1LAFqqpZi7YiVwxwrxjFEmvYQzUucK9Zvp3PVQNuHSgTzHuBcFg5hMZjpr8oP7JDxMWoEZz37yVyXgZ",
  "key3": "5aQLHQkh4trND67pgwVzYRWPHVqFtVpWmiSAd5isvFRE1htq632LACz9EFhnqbq4tYztLfC1aUCs8bCeC6VWLQLq",
  "key4": "4dkVCRVDEshKzxwsEsgUs1TyGDXLSfP6EJNi7YhmZRy1r8HiT2fdSJVfFW9JTmP65LBpNuuSq4rRbJccfLF4wnHG",
  "key5": "V1pLno9zFb5RdQKwQKWxniij4gbUoEFZzrxqCcz1qEMJ3x6so9ga3ED3MqWoUsuxRrz2mboB8ys13WtyiokWsPb",
  "key6": "yfHyVdw91f2JgF4JFTSuWN7kSyTkDeqkm6Gx7FPwNRLDcXwaUZWLkS686DA6qpF4QGgJzWG4mrHVhc2gmVhrfyd",
  "key7": "vBrMpzBgoTZG8apg9BziivW8PZQrPuY3Za8bySbgy9L3MrvjiRs7UfG4X2yCg9ntZZMQxDCoTffm5WU82beJsPY",
  "key8": "5EwXBocVJKjkoe3mBHSfdh5gcCj8YDfWNMRbYyRxphouRciB9AS5qnEQTM5MMa3EZy74y3MbYKtiLwC5nApqcBoY",
  "key9": "3zUuhNWNBWr65RunksK4fnVpdzxkLiVcLpeSbRCc1iTDbYEtsSsZYiyjndFCnMe4n4wXrepP7nagNm7MYuGUMVTZ",
  "key10": "4zgzFDi5frFfkprxLRDKhnUzn8NmozezZpaeJPtdjPPXJo5CWVAXQfcEq7inKKoejkCohTRejdkUyFjApLqedqHW",
  "key11": "pUxWJZBHeyZwRH1YFHLn5z9XN8gwxDXdtokvZXEGCL6UpfrSYRANBqGhQNJgzMf1fVvuLMYmFNoUfm1Kg6s1J1S",
  "key12": "55bxyDH3pKPaqz5hfHKu1wvDHQJWhAVaAz1yccSryL33DN2XMW7yPHv4UnK8BGgSEb5yTwpvkFzoDb4qC668FUQq",
  "key13": "4hAxkH3g18X7Z7JU3yBLqBLNsBDJdDFqa3g6NXCPWy28TM37HyaXPk9tPjRWiw6SZLCf9GuT714AjWbEm3r1GxCn",
  "key14": "2Nn82MQbCgJwdXq8Hw1D7EcK5Ayi2Z8h6g8XUjYFmuroXUTfuXnjJZZp5mqrEsY9zKfhdtDbesgr84KW8LkDyiaq",
  "key15": "4Q9yfAmzbQJaQ9tE2NZd3RDdEL42f6ibYiDjFDZJmwbWV7V3FKYVgAdJGK3Dshu7rtqnahtKrMj9knyva54YfjnN",
  "key16": "42NN8p961enjrRugE6jLfkPhC6Y5DiB9yJ59tJcBSSBSn5iqLBs1YPkNsxtQirp48jC22ufZWVPUxukufd4VkgCX",
  "key17": "42B2PcswMJq5jLMyo3E7xxfemVK7PAp2hXB7sj6ixbruf3q8pbyKnmbhG6DpVY4EoBnfswPRhFvkeDKt6SMAcDhu",
  "key18": "2thkkCEEypeDkphefJ6FcnGdFgscUaAAoPcPLL67bM1wAWvfevZAQXEB34FYcGscmAFHjTDgRuRX1MwWfpWpxPq8",
  "key19": "2WThMr5EBSxDbcLDkuSHidz5Rx9BpJv7NDGQ46E4uESy6uKwf6orT8Wj8qSf5KNpUN98QdRjzAvPaKmNC63N7yCQ",
  "key20": "VG597hmrgw9pUGUjiHov5yVJRXNVpttNT1KgadiyPs8msxzjNSSngC9gEYkrqFQfaeQonj6GBganuL624eHmrbF",
  "key21": "4reiA6UM3H6kUKVnfiAriepwfhioKBYTHp4gJwrw17V2qdHCUhdkJeXUbsdHmSQdPgwNgHG8Qd8RukhLUgo8RKwr",
  "key22": "N49dZoBYTSpoAV767Np9atmgNxVwpKrDfNVa72AgvQvabB7uiCEdY3dmuBfuKXNcxMdT7tXo3HbBoMydogxZPF6",
  "key23": "4KiZSxfuHGLC8JUV7uSsaNAbY67zpkeiHdJCpZjjisj6YEmjiC6G4SUWUoPq5z4mQa6pmGXK9hRK5wTX7bArYjSq",
  "key24": "XCDKNqLN9hm9CN5pFa1YUkW4hu4JjuVe8t4mFxbL1PZ4hF4sXoGJah2f9dMFQbqT2mQDpP495yajRmTgzW25LhY",
  "key25": "65wAUVzHKHe4neAwKMVhmznjcpUYKJ5FFBzjZunC3zyFbEy3cnfg5QxSuBzoxdGTqXRcvbAXXdRgXuFAc94u9eqe",
  "key26": "5vWVejGhWGLqecVz1s7FUkaUJ7iSarzt71rW8bMPj8oQSmA6CAtuv6NF8Tddfg3xYxMRQap9Bk4szc49vH9BuNU3",
  "key27": "nVqj9w8NdxyC5JjrgQjRQJPvN5KpBDgHX6Rb9xFQk3gWRmseLNX432aNYRRQkF9DYjwnFTiBnQirP3itKKYDzeV",
  "key28": "3g7njWBq3J2cZ1iL63VnZ75AMCqLY8TmaVR1mmS35YnmiNmR2R3zdYhGKYzogprqNchm3vraPaaV4rWdueNxyAwj",
  "key29": "4KCYAJRewYZC198uPy4fcz9pNiy893t5pgT7B4iXW1Wews1qHsSi5gwp7kTV8CbJq3ugmbGNAjGk4CCARJnyRTBZ",
  "key30": "SUVGUzx1bg7YJpCLrAmajFpMM7uVB6N86NpfJHRZRf5D11w8A53P7b98acirob8d4r7hLYSaJy5BMYdoxoL3gvN",
  "key31": "3A77gG2ASHWPemwst9jZoSwd8LpRgPfuZ6QHaF9F97QDWJEo2Q5wAhxrVnQc2YkySHJKmbTsbgeaCeG5Ap2f28wd",
  "key32": "5HPyPT2xWpKWr6bWrMsz6hpYoQvzcLodT2ziwWqXiwvvmX7gNfJsUSr6QKwrH8eGpK2DJ8ZeKxFZhpAf6WHxNfCL",
  "key33": "4B61gZkkzpcDvWMi58KbBviAnvu5Dd2AQaqeRiMkrX4Kj848p72aN9hgeaNrWDgaQtXK51nYT6CgN2oVu7RLs7A1",
  "key34": "5a9b7r8X8RW1cQM17u5VMyK1PW7UMhNsWZB6V7619QNbZD8PSJ3tgZV4JUzk9BAZWhWCfkAuuGNWbF7Fktadar3H",
  "key35": "Z1V1jfCbHi5N5winVR1itHCUQByALbkbAsN9NNYWoXtsZ2jYnhJoQK3XNSP7mkBQWH6um4ADr4or7UsNMiXbNTF",
  "key36": "4vQHa4CLNQiU4Z5mE9RDjyNMB1B51bweX7h22BrNLz84AtNRwEGZec3erE1MYoMgUYZqn5aFsttZZhyBzhKBh8ZK",
  "key37": "65uhbHChY8yDZs7SpQCSZk1RC4NtJNPtEVGKL1wrTiLUdGwLZ6ExBVXyHdBprgYmdmbXjQcdxnK9V67LSMnkKVTB",
  "key38": "5emdjkE7a4iTE4a6au1BkLtp88T7HXSootSfnSb5PJoomsw9xzSFETMiNr3DS8GC4eHmSdDu1LfVYFmL2DXc6pC",
  "key39": "4fG9tFi6DJrKGExcrrrSWnTMHAfnYBHJ2un4QbHJeM6cf3Aeame664mmNbrob4A2JpQjNPpxpEais6N8SgSp9RTx",
  "key40": "2sFhmPtxpf1zZezLcwvn6cWiSyxqCrMMKmfv3i4fothNzLtdgN2QZzr2GmUfB4xJ6ER3nE6hJn426Ea7kthDhMhN",
  "key41": "wcDpnwsaXVfjFa4aG5JTZ6GVe7Yranc8xXyzuZWyn7R8QoXGSEB21rhjxCKcJPtQ5Mhydv3AqPHrMYVj4MeYh7L",
  "key42": "3fTmAtf1nKpRD9LbTakKuMcZ27uFyus32PTrYZGu73E6krBqr9VFxzKwCcTWfjWLwnMRgSwM5G1MHA27DtfF5VwC",
  "key43": "2nGQ74TYRrgiQN2nq9bMQPLCEH34iFwiVAETEKULMwHw4iinwkGLY6QSSUnPnDVCGgMYUTb1hMQ48VwYEpPSJ5Zs",
  "key44": "5CTybSYmgGihRr5zT6EAbQNdhHdxuywvXbPj212q2FfdYaB96YNfApnXQwhr4NC7iX2Jt52jmSCNYp4i5W4yoTPU",
  "key45": "67JgFvfbSkHn7Qo8nWji2ynnXtny7WnLyDVZwTtejqbnin4K7b469so5dKwPLPCUsa4SDeVV2gSAo9eqrbwj7Wb6",
  "key46": "HVc1xavEbk7aUrN67Gh8qeq79RUEQG1vV5CDUz13GgGyGvzHbfYzgcuqnTH7fjMgBebVJ77GPbywKCbMfUsNef1",
  "key47": "3HqEcrxo4zyo465niVwwi2xreDUbHNrFCLTeMqZSs8TJt38W8eaBryuVoVpZuMKiJCiWE8f6Lbs1L2sMFLPHPc5a",
  "key48": "3nuAG97PqvdHB8WY1gTXmZxtkoDcvy7yboZpfDkJ7v2aR88F7bPKmwbVkUJhRwJYAPbERSthgfdkQYjiP5TWp4BJ",
  "key49": "NB31hHatvrzmEWBJvHaNDWnwqu6gEucEJZEA3x2FJxmidu62z9sc9ENDUBxF3fVLxqFa9V7jAcgvvEpr5sjzrLM"
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
