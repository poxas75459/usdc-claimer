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
    "9Nu9Uvzjgv2usfEcSjKwyysUd6MZ6kSErrrTxEuWqToTd3n81QdvzZuUgKF1hpfvSqSDSz3rp1hN6LZYqbtW93L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M8VKLKtaFaTEinUtb7AHwzzpF7WHy6QCDRL5jUVa7wqGcV5g9G5vfL4hABU7ayaBHEyCPh9fZ9yv6xaYQdG67Kt",
  "key1": "gpbmkrcptkvk2seDJcikydBNH744zqzrBUqyPi8QzVLg4EWfB6eHSpFqGGngxVmwyDFM28ENYmKafkSioHHfhnh",
  "key2": "3ptu96RoiESoahdCJ25JccL2sci1hRKbLCZphoSibf8abf6tgZPyWGpCnEDt9fb4QhpFZ1GdHFw5xoWLp7r6Avt",
  "key3": "UpxA1fBLMoSVAS3Ep3aCMuUVQJVGnESXramztohsXkcaCmj2J6qEGvuFR6ibvDnRFemQeWzkMJhsyMQFVcd8DDf",
  "key4": "5VM3kCMdiXZHzVgicgrbC3RdE1gMga41oR2EMXtufd3MNPm4JdhkreivTxhwUSuFFD1gakyy8EKPqYyAC6no3EA3",
  "key5": "4weRs9Fu5jCFp7gZt1n5xxffpcEacy7j8tTNo9XsgNbXdrhsqRHw2WH78yZTnDbCMt4HU1U5jvfBqVSe42zVmwCr",
  "key6": "AiMP6VcZrazLpnVU92VmTXzJU9V9B5Nk5SrcrHdNQ8wDme5pYahoZamxtDp4HYVRvQZqA1xiUiz6sgYmX4dx5xt",
  "key7": "5USFMyEkLfcnenKESJDXjnetgN3fg1oC8RZPuYSR6XxjBG1LcRYRdX6uS8oTZxxxRnbSSuuLhRiM6T5zFsrphF8b",
  "key8": "3zer3Jjgk6GhiUwCjdbzaPzGXVrDayEJvqxTgnnD1NMQdD4dvoWbA9JVK6bezBMUWGfXKdftKJPEJGhstiRkaRAF",
  "key9": "65LzeV8YSWuwp2K8BLQ8uJK7VT7byEAUQ4ANJSo856bZV9z9UfnjCSYUbChcYWu6vCNDrTAN4LXhKaz9QzS7E4EU",
  "key10": "FwbyUxSNNuqjaJzFvYRwCGbw4RpT8vTDjPvadTQhYQLgWMbEZ95omk7YzFQEM3Ae4kKkUJpp3AFQnpm6ViF3Vj6",
  "key11": "3CNkHMNwns1yPa4bLfzagFudi2tA5G88xTqYAqL8iakAd8NofnVsYyc68C2abCfZskjxGRRKpes15DT3kfikNSpJ",
  "key12": "4qypgvqxiYywNnziQ2yNPCgf2UpSXDRwcv31yi8je8KyAWaF36Qn1K2YQirtN8zRxzVhpVFP2jPWywh5y5Ud5iDy",
  "key13": "3JDJxPXZ9pkHGX1pBKmyvkJzWsEoU67qMQdZ5Hk8xVPGG3mwSbAvphxdgjoakA5xYoyQdHNPqPBz5vCPfmUhRCP5",
  "key14": "4rgp38R4NLN5bCSYmiJE8oDfe6jeuwgKeKkRb5c6mw7uM2ixwNaoTX8KSfiGsKeYJDvE358Wcm2ZU6j6hWZ27ZST",
  "key15": "28DtsH1kA2YCnhghL39svrZv7CdTi4xzdNxeGrfiptfBzW3ZqLompUUaDiURU6TjDzGpCWsSjLdXH8svvnCfhW6Q",
  "key16": "3yYuRWd3Go7WSSshXL14WFusU4wG8QwdQdCoxiL1e7CRakvT7BjJWHgkxsXhjh9aU5ssgDq2zCv31XpKeqrnkuBs",
  "key17": "iMSc5mnsxyqMQKVsjZqM1AHDp6esWiaLYPbP4m9oRcnzrrdAh424znzDQWXoZSLayhP5kiKtK8WWQUFznZuE3iB",
  "key18": "3aw5jt9zbAh6BMST9mJKxJfxwcrZ7xHKtPFPFjrLxUuN8TAxSYzmrtgiW2fdV8MvZuN5j9TfXhsM7H3rJj55QF6v",
  "key19": "2zn77YypC6Hg5xpnQvKXHqtFDnrNqvuxcyC9XxP5Ld9kKwMbsfXPk9fW9GQ2TW1mjCKfGSx7w3H5GWGSEZtniFjQ",
  "key20": "33rpWxJ9ZtX8hbVL156ru8Lq7CQRvWaXfYTeuL6bhHeG534poK6VFrZrQRVbx9EC1YhtAwHKUgoKu6Fjy2wyPsYX",
  "key21": "3TjKtnCvX7FEH6sYR4BXdxfs4XxY8P797bajY9pDDUVuPzfypZxjeakZdeD5fmgL4J4mvcLxTXNDzKjsznE8ip9H",
  "key22": "3T6tKCCpJ8UM4ucSLZ6Kh8hqUq34oExuMjYNAfyuE5gKMAfVKi1cqCbvMgxWgjM62wCwX227hdGzb3sjsmixyvVJ",
  "key23": "55UhXujzxUEJNKtdAQ8rafkn9h5K3z2xPJXL82J1bjExd8kj1FgZvGpUGFebm2htJcAVy5SbqH2GjhuoTEPum73",
  "key24": "kU5otYBb6jbqLRfwZKMj6pkhYRQpq2yZE8k4KH2xd5Gz2fpwvkUnG9oWNUUW86sJxqDcXy52pgzCLypX8U9bFXZ",
  "key25": "57RoakZMaTqucWaQ3igjj2A7WWgU2sxcY71U5cRY2wocxQo3VYC6e91dUmAayyg6LYEwrkNfkJ6VS94etfJ3UsW1",
  "key26": "4nTzshK25qFvNK7T8Ta4XfLqTEoRMsT2n56GhbzJc5WRqMx7SKUZfScF9DCFFpoi5Pj7X9BZ9pVzCWeZu6nAYmqX",
  "key27": "2jB6Qm2zSAo668fJuunGVGS8juKRijK2WemtRjm35mSwRqFXuFvucicckjevkVJKJ89YJC5XpP8kmZrRPiiddQ4T",
  "key28": "5YoTEdw1Biiz4xgUDNuufR7puYPS8T8mf1MeM9p3qoqKNR4DPxXEaDXYLi5phvSmC12Hp3EDi3b4RUuitCmoP1Cj",
  "key29": "5x5qDT2XbMKqtP3JBfd8Wrmiico4xQ1p7NvcMPs1s2C7zPRRsNuzjTPpK2c2wvaXZfQCZajQ3uCBDzts3UQBNnKy",
  "key30": "3pTmoBrvWk1x8YeNdrw9VwXRjbz3rNzfCmMvHTenphGYaQmsmLb3GfzX9sGLqSVmdk291ytNGDmeuvdtTvLNoieg",
  "key31": "5pV5QzXxQJMAtVEPRfhzZ3Fwn1ehrBM2oBATSaiM3ZkKoojUzWU9dY7DMKb4C3Ax5tZcdR45g9KRddRnHpeSroXF",
  "key32": "4v2UAsrDo5gULRqvtqHUmHtL4j7mAXr5YQ27RaGhaognGeQnGdf2frhAivBv1TwnsrQxoGgkdhFCbSyhPF4fNHsh",
  "key33": "rfodqY4okz8Ybn1gwyXFcwMTkisRrCnsy6QzmcDFET4KnQBYcqZ9eMCsovkDH7ySkz4DvyHqRZQ31EWgPyTtHW8",
  "key34": "65wNLEgjPLcoGJQmKWc66c3WnXSVUbBjNybWqT7kos1wDwPtFKAzRWUSFjmFhk4AJcjVLjxFXugs2egECV2NqjbH",
  "key35": "2KFxm87uuiSj11UmcADxvtHKZzevQojNJ8kH3pdABhuXVas4nVhKvvocvwzMQkR6hLs4D8JREbxrTGn8gDbPBb4L",
  "key36": "3iv7Tr8rGHZXz1gG2skYp8ws6A2pHXURk2hQTgKNhNYu8ofWh3183z23GhFufujkSTHyfpcZh2R8K8zfVmVYXqt1",
  "key37": "Yw1iQMDVfJM5um5EVR1eoo5iZv9Z5JYKpBVtGKU8NR4NsB7rN7CyyngRvX1QEXup1NpPTH9qsDPfKexriLLfdGC",
  "key38": "8k2RbDygZmHk7Witkd3W96kPSPLinKewfZzeASZQCEdpjyQ86jNL8FVgL1gGygAeaaneQVMLgqdLbeZSDBzjnmU",
  "key39": "2ybFykdKpWN6foiGiiDgWuubZnSqHaExWKJm62q8YJzB8mGpN8yNysoK2GXDbG9GaRQamH6tZ9SeULQCGcWU8Vr5",
  "key40": "66k7Smqp6C4F2mGhH6HtuLNm3W6ju7QSiVMZFVmbgf4twnh1CukxTmb1YxtWi1uLzQfpg7VZeQy5UvmfkexpkPKh",
  "key41": "2eed57ZA6yBJFA9bZthL2fGrykmJ4R3Hx7nMWR25nXhVu9wdf8EJFGCvLeyTJTsXrSycLqUvrA54dEAH3MrLh8EF",
  "key42": "29MzaqAU3mdMCbMA6M79kvezD8fRq8zEz6eAbrzSm62oBiaSUv3AiXb7kJ2SirH2Xd1jNBHwyFHMRJ5KWoT9bpM4",
  "key43": "57g4SJ84F3eGGVDhR1xdhj6PPy6z4GGNAx8Z2ZGm45Hz3VNin1zhjj5dv4eJNKf8ZN3wRKNqaSppfMiAsBjFra3A",
  "key44": "tqQctTA3Vayp3ZjcyGKed1zDuMvjjDSp4U13T8zpDfmZUWhLmUCNZJLxxXN5NWUrijavAVjsiCgN951UT6jYgzv",
  "key45": "zCVyHd92bbwsXtgskB6g4o1atbkoJvqRYu3HhwwKTgPCEJS2GxezCDD5dY6AqtR43CF1FuvFPm4h9ykZM13emXi",
  "key46": "6GH5ZY4buZTPRZb9UE5DXvtggJhN6LAa5k1dgmXzyycXczrLzqerXQNaknwXgdmSPjNcsNLSbeUWuXD3ZJsRh7e"
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
