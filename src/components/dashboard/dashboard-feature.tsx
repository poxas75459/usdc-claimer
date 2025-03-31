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
    "aZUm16DchzCapzzY4qVipu5tkTzqgTxsMgb2tXkoHbBdFEasxzeRJwfiGfWDc6QDPEewngnhvLrw622KEy8d9B3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QZqT8pXtJo3hAD5Drq1YNWTr55WZNGtPZruiGgkb6SDj2WU9By8PNTyG1sC7oFYKXZcwFwFhmRWDcboHqiJ6ap1",
  "key1": "5fQ15qEHU6GoVW9mSY666JrEPEjUmSgmdXH8XdodwJnJRVEpeg2Kzsvt9usyjkDAxFJ7J9adsFaDMajme4iwvwdP",
  "key2": "3NJzNptuVZupFVqayaXyy2HGDtb5yNzymjzNgAqneRbgUUFjT7rpLy5fbEaPHm3DFq1JY2bcFP6USa4MCjxJt2Gc",
  "key3": "45NFroMr1ihnbpYrueY75Q3AYkANyXS3EFrxHeoBad8eCctfXVhsK7HnWuJoatKYoNVanZUtfQFs94tmuMFTF7n5",
  "key4": "2vof7Wjq1UVfxtsY1ezqdyVhmFgpNReAZZppzVRDLYiEuM3N6z4rqnvhLL6fwuV3wVftDn3SVVg5EfMETUdkiFue",
  "key5": "4HnFGG9X5Jfvkx46NnTUn6T25YQkVY1JWAwDDF7HwRfCDz4ZgC4Lv39YeUgU5wp9Q6ugoykEG1kof5bPLRq2Chyk",
  "key6": "3wCKyq4MwXTa21iFFH9gPfhZKwrvouaUp8waqYDgV9TREjEjmQPohshBgdbLGwakHZU2XZFWJko1QTXTmhD388MM",
  "key7": "4sawR2AojsA8qTbKyyjdYy7VHvfadTNWnyN8DuUok324wWd1Bc9rL3AX94S9S8xhFZDjYgBQts6YsiPRrkePVpNr",
  "key8": "5SvAt8qYjJGKKprkJ8FGfYmnS9AdiKdDir4uEViZUvDAoHwgx1pnB2c54PCRFtfsqeV4JKHkd38mHDUZJ8Jgk6cB",
  "key9": "DpE192qQJhBvorCQjQ61zdMRbMzpHY1kq5zCmYvmFTDHXgnd7m57dErZnRTn85vzsptGWUbtceWbXPFR9T431f3",
  "key10": "4SWvVE17EU92mgK6gMUosJr5yGCxHyfPJGwqXy9avH2RWWrd463PhpoTaBouC9MBL9NMg7vF7sDphTHEo2MJNC8x",
  "key11": "645MngAYuz3MmFLGshRZ1qWwuGQxUvvN14zMU2fG3obHeX1tcQa7NdmJb9i9LSA47aqE3iD21RCBEApzFJpEYNLS",
  "key12": "36pdLJkwr3RKEQUoK2bNDqyFZzvas3E4fFcnXmmXyb6MxXdgVsFFVWFKTA4CytQGsWT2oubrWoi4ebk2eVNLV9Gz",
  "key13": "5rxeZGdoWk62W6RUyndYGSf3etpBe7wBvJSFZuC5VwTo1DbCw1iaQJpnQoJ28cV1R1qXFy56DepWyqkZS54XfryV",
  "key14": "2zNqFJ989vSQEpg9cUAXcdEJVSgj5DRjMmweCoLhx8g4v3CG5Qp8hA9T2YGxBRLttZpA825xfxd4swjymgG9NFX6",
  "key15": "2DhiHipUKzdgfcAkLqSTXKmzC9Q4mQ2JWcHij46NoTcQWiN3qpukx7kxdjD51oac7G7VqLLiJ4WV2gNbGUT35u4g",
  "key16": "61NWMyX2e9wdoDvDqnWe4cXgNsaQqo1a8t4AWHw15t65ArnrzHZsQdKSgLwCrR4tMURExTobYfL5HJP1ZM3xZ3d7",
  "key17": "5F67z2GV2mcGMUBJ24QeMF9pvdtBCDbLW7WXSXq1naG3GorwLhfdCmTqcjiprnSZomHvUSbYuzT93aFBHTvhR3P5",
  "key18": "5GyRH1UgnkhSFt8XsTKysUKA7vdmWwuCQYh1icre8qVnseN5S2hBkkGxrJJ856YTgGv4A66eASSDGLgo4oRJGtMM",
  "key19": "zehHdEuxzD2ULVfeWU4r7zVVF7yuweh6oUZNj9sEhR3viFqmW6yQZG1NkANWuX3t4KQgM7qvWBxVmA2EY4DCBNX",
  "key20": "2YvtiH3AbF7Axi2yrEGpncj5nSQKjXvYFtJZrAFB1JBq9vz8yBrJYGjfmze7bTR6NFZWp9wyTnWFD8tBCHREeuja",
  "key21": "26DLgmetTA42S4YvBS7WcoD6tJSFnaZS3FGjVR2KQwWH1cfRLaUUogPGAnDsqo11Tdmeiqo7E2Vqurmb4scCgUy8",
  "key22": "3THTrCLEWV16y2zRDUbFReWSsGPLMBFAZRUyYRpRE7e7Jnos9hNk3E87evhYfZXw6GNLRr8kEekpsLhav1gkSA1N",
  "key23": "xZWYQnryyZYxoFpjtWGcsywW3iQJrZ2E2B51fMNtoeF7cnCdV9mN85wDjuhsqMrV4nGrYpUooBaFJWVfoY3dssf",
  "key24": "4Lh8gU6UffAVLSsehZLu4cm5N2kDypHSQZ9MyAamrBuiLWRpr4m9Y1D6JU6N5V8LqrLNvxQiMTZpsTkpJGF8K3hJ",
  "key25": "4D2muYjmYr99eN3toyT73StssnJXZAVFsLkpFbV1WRqZrxitJcvJafEWizzvuum2zny1qvweFeJw3mTFmAdCG76J",
  "key26": "aEb7q4daMeAQWBWorZTwHvTSJiwr4Svd2QsDSpNue2ymSpZ58q4ToTk51QNPzR3SqdzLzh4fgnkG6ouo3bFLqdf",
  "key27": "2QPMSNTP39sZuTmSDfVHmD9JTrJjYwZ4qq9E4xjRwkKPvWsbwkGm9FaFSnVDRV3yTYFr7YUPa2KHFNy6AqF4euxU",
  "key28": "22KUApaqH6iV1aU5rEfThcmg29KFdgrBhRL4EQMZ9H9AivH71bTCp9wpBLqpcwK8u6YF1H4MPPVM77SzDdLQ1ii6",
  "key29": "4QxWByC3pdDTkGottygh7StTPm7Rz9WHFf4ckjUWMtv1aLBXMXNkLCmsKX42KyRoBZVk2Wp6VBm6eeFY58HGPhpo",
  "key30": "3YAcy8Yn7m1iZ5Pqcuw6Hj8GsPZcRJMFwPpuRjMy8iRJFCfKp7ffV4khZiao7xdnTkhyCQp4VAqoUaXqBQCfVTGy",
  "key31": "3kz6ZzkfbUpcT9r18aVt6kEnvLSSVnrv585j3Qncn6WH5C6jnPQKUfZVRjBgZE3Grn3DnSxGB8PrZMSRVLnmWxYR",
  "key32": "3Kkhdq44n4asQssyNTYmLmQj1jERuUKTdnTqjFTMnUvStA2fe71rpz19njAHRbCHHS3twH7zbK9RfaA5w5fpdPgf",
  "key33": "26aHAsMuhpjGR4JfEcNqrVFek5y3KqNwDCu3Ed23zxMqB6bykXLcsqGmyV1XfEyPEtLLwELmLFjt4qJ9Xh2EVoWw",
  "key34": "561tUf8p6Q65VAhBthhTT2Es3ciDqSnNshhZYb3gUPXBUDBdW8e4upcWib2FwUhKMLthrfmvW39b2fAQkQRqttTH",
  "key35": "55KmoZ6jiu972DYZintVBQR5i3HTrimCietCHh48p9TU1MYWGVZj8NdCnqTMgdSV2GR2NZZ6tGhF7DuHjd9weVGW",
  "key36": "31suYce1vneYEcuL94voZ9tmFbfcV9CNmUUs5B2fEfwqmxUtJm2QsP7NVzsDBz1NwRjm3xg5S2vzPGdYTxK4GFKL",
  "key37": "4TfLRoM7pBwt5YviWrV2U6dFpzZqoF2VWdzsfPtRr2ShEeFExaPKBcE9bf4TumyfJK3vvdPMiKtXkdddwKf74xUU",
  "key38": "5RwuTh7hKbxuAKxPf3MjLcadrTGqWkQkgqyaifqxRcai6QejTp5ye7UMLXoFk1uWgJmcz3fV5Cfh6uy4RVtdv66c",
  "key39": "VuMVQKKorA5UidSvXHKQRxzNsdcE4PxhiW3bkTSpcwHmj6xDDbwm4Sn7SuoFvjDdqPamqAV19TipdDDfqAdR7cr",
  "key40": "32wTU6SHfMG1fjtMLpCLKqwCgj3nRrvZ2RFMKnu128bsdPDQemraKZmcqsuqAaEbsmHkxSV9vskwQo7eusyGcEP",
  "key41": "j5K4GrSMPoTQPZM1sC4eueGMem4HeVL4wZKRY4UdiQMa7bnvTk37jtbyKsX8WquTYhdcmHHCKkmyG4w1Q3AQuhv",
  "key42": "4xRiVcNR29ZFsqq9gKiRjrvZjANkg51etqNwgUNmM9Ndo55AQN22zWRBhppPDhLPXrBgBuwq1SaSiGfNahMAetmd",
  "key43": "2mms2WQcofFKGDKymvu6dztamjiPdUQDfknEWErGHoTBSKCxSpMJg8R8oawFmo6KeJUje9dPdpJzsGWyLZAL1Y5x",
  "key44": "4fa7urgWdXj9Nu69vmTUpF8x5yd8byGaaBjAgunnbExrk4RDWZ31qsnVQCUYBSVuF535TxY6o7S5jLmQLGonyPPe",
  "key45": "3JUdbJYxcdmN7E3yUuz48rZCLxxiZdbEZawmhgxg3bzPjFMUfHvzcyRFWfe6oTZdcDaGpgayiPD2gkDZpndWvM2s",
  "key46": "5zbe5ZDhng4iXwrgQD3UdecpyxsX6DitnQvfjk3nHBPHzozi83pG6LrpmcR1syY5XmBx5YqHCHz4bEMoPg5kbewo",
  "key47": "63GquZQiD2Q5J9PbuToxRJCACCbyCH2fzHyv2Bhvvu5ssghvDkEQ2Fd9F9gGd37GKBqtGueXH5X7ugJYJozxEUoJ"
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
