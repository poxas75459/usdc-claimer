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
    "4MTosFnsxh9cyuCmABSmfbH15SEuN6oQpsdP5mKeqPdvbWWUiZUBYfEGzB8rAF4Y8PQ5TZH7PQBTjZPXV71Qy7jh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FR52ZEZM9snVLqiWRhsf2FvPSRsTzmXmu7mQjyfY6RbiwKb1jSZE8HR8sKpPUZxEg9U9P7ec7GWboBeheLgJy9U",
  "key1": "3CmZkyqv4dmMe2BDevnPrA4UgSBhJJzoox2r9LxcdEMX1aoebLCgm26vo8BhRQ1KhK3JvwX16WdqaKqzdkCo2QYo",
  "key2": "5Gqb4V4tMXbuGyqgmp6kqx51cJnJySVBkRA3aZqitmKFbVTaYG2ENNC7n5N3PLFJfyNgVCdexAWdjgT6qnnnDkhV",
  "key3": "5f4VQxSokwEXa9KmhgHQCgecY7iFeU3XTvyFHsiWkXK6KkD1UAcwJbnmy3gtUefShZPkaVfJvU5jnAGBSXm3e3qB",
  "key4": "3PNRmUWDK7oJ3SxiCTYttwiygHS9eM2nJ1jwNLGeCTB1rxrVuYjS9tnzH7z8ZLGWf2YhtcLJzsGBUxftH3WvVExZ",
  "key5": "fbsKAxyc7ot3WRT74LJftv7sqgJJEAhW5aWPZ42EbbKyNEmJUBJff7G4vHRZteAmkYbCdX8cka9iM2LYwxJVd4G",
  "key6": "3cbhzPfGPdhrUMKaXGpAzzVfF3QK3XPyKVCrRj35KAgzzFaLs99D84WBnbRga6jZgVCn9NvgPv3Vbe6nm1SVdkU9",
  "key7": "3issfhDuQFUkeXkFjVE5oK9Y8B2FFgJNtP2JhiFqb397RiZnPNnEnMUaNLq4X7XgoDpqVCMEfMYG18VR8L4P8eL7",
  "key8": "56WPRtcYEECKzsHF5w9zrgpE86ZE3TqbacEwTYnxAUKyimcFhivRzYbKRaAbW2BtjUq3NxUWBkvXFksEjPxs7iog",
  "key9": "2qLkTZah4JXLjrGvJeFiXrqDv7k6YCUEkUnBJRvXc7NTsRcnQg58j1jDhuqFJVPBmmsyTAdjp1dyZqawFUqPfxSW",
  "key10": "3YsfxB5fcWttc6HQ8q5fKUJQKTY8EYesSuVMG9DvsnKtWUTTcXXm8VJmUBWRyMoBcgmq25BmCt3uyAqatsE4byUj",
  "key11": "rMq171qGk29ngdRM841yVuWXtPyC2bDkXruGyf9aQJPRLm42MDKiPzymFVQVW6ub3NZJyaSyy41RXM8FVG4MwEA",
  "key12": "332HvBguTUnNRf9FW2ipxYWQo5CwPUAMir6Nskz2FqoEg3ZPT5QMxy9c7pDyQA8PsRpK46cov48vEuBQexERoZws",
  "key13": "4NTJdsZifFhTvvCpPXC7nLUfV3ZntM5oXNPfqdutu9CKxkzKtQezCtcZVXie6ZfmBXVvUXErbfAnn4uZZApN62vy",
  "key14": "C8kFYKb13gsvhLDo8f6EVgjQ7ZJa15YqSugXWa34uM53Lbg9mcy7xBb9zCyRMkPZ61mrWvktFhRztoqwfLgStRY",
  "key15": "3XB1FvhrXuC3LhQhekffj1e5entEpX7xjUmUouFHZ2aQRSTx369cjk4GMGidki6QUSsRwkMDD1ZyAJnpTzMVYu7",
  "key16": "Re14o8ixtPq9eBK1Wgzr2Cc8PSVovzAqzEc6DB6refNEH35xUKpDzAgpmx9KQn6pxMaG81avcdCVKAFmmn1LRaU",
  "key17": "4QJJvqCV47Eaqz3VcTnR8RhxueP3bWbjVqwhoCEPG67q1X5gjkwargSjrAHyTGWm1fWDyLut6CdnZzoMBXAc5c6U",
  "key18": "4rqjEvfnYM1xZXsnjZa7ArFwfHDeBCHXkYwt7hbnMJHujLj4zdXSi3L9TfrFqPrevxQo3Y1d7G6umWsizKAZRE2Y",
  "key19": "Mc2E9P2U2nHSN22e3Fcptw3QYB6vxPvS4D68tWjZxyvUWXdxxTLWW3WDrmHibJkao4NRjmE6tPKcpHuwGCcnaEB",
  "key20": "36H4nDvW3JgvajnfjbdKbLnFuCSqrt52fWQjYefCzdkSrbxS5fybBohqZPVFzSH5LkHqYvi5njqf11kWwTtbHpdw",
  "key21": "X6oUAfPieyD37a3HPUV3KYAYB3oQdPKqTaBWHcqbQBVuGxvPaybvJJHgRjuwLs6YPRgDSwBWyn98h5XB1Du4TiL",
  "key22": "3nmxxYhYQ8TfJbwtaSi3RRvcXN5iutTxXGnf5L8EiCQjxp8Dt3c4k13dMU72bTTPP9C5VsXQQJJQ8MiAcAvbDNBx",
  "key23": "5acNPRE1CTV1cJAHG89yKkA8ZqoAbvwgVhVhpxV6zxmrZQzc4734dptUjoRj6nPotAcmzof6Y6mvhEy3wUu1LEya",
  "key24": "2N2TmiebrdHkWWPRh359zk2GXaNabpKuPiopr8G5K2oUHHWz2zaikJLsow22VZ4ASDKHoVnS4CLKjJdui2UZPuRz",
  "key25": "5fDLUhtARbHYsFY9ek7DJQ14tyjLah4v7VmCArUTUhiHxnutGzfiCuEedLhh3fSkSvADk6px3GAcJfnSDrRRBb4J",
  "key26": "49RWCGuGsR5E85xDFdZmwfwc2nph5iSf71mymSnwdooMw9NtZCBMHyLPuFqipgpExEQNbxmKJAna6gpAS9eo4haN",
  "key27": "2WjEaygCyqBmTgKjfWwavh6JwczTsgo2ZNKwg9deiDUdFgjLW5FcBxYMz9zeQrGeiSttHBnvDnsSEMNbPEjohHBw",
  "key28": "5qBdMq33ZvFAX3xH7DfBTr28LXpa8TmpGsZNYwRNhRVEmTKDR4XLhYgE4FEd8dDmGC5fZorgzMnja91u9gBTKpJj",
  "key29": "5SqjaNWn3aZCxgMynSLSRecyVF4SKNNq8sZXMkVesJEFvDHKZHbDYPLnCZ8rQJmCgYKPMEi7Twt7iYgGNckRSZw9",
  "key30": "2FYrotfz2EVs6MbevznBrKFH7zvMXT158Aw54NbCJk9xUkFnyX2c7Rc5NunHERHTmsVphBXtYgWsJDutvJ7ss6jK",
  "key31": "5PBWXdvchVU7kFNCKHvwQ7XEmW8iizmQtFdAjT74EnPLtm4nXFvouMH5jaksKa2dsmXxNa1gxZAgeqiyvUrN2kf8",
  "key32": "5UecJRGroHfyaTsiKV8D23UzWoDLyJ3XHBToaeoQSmHDDPCf4pDo3VBwdZUoY3w5ynLN8yXp99wbNUhmNVHLWyxJ",
  "key33": "DJpcECFdEqZwG5Y7mmXuzVqnNCgzB1FHFsZKKz56ZbVcMdy59CjjL3kLCQmz24dPjkhc5ijHtPdoCAtyDPbcUvr",
  "key34": "5UqM1vK5F94mcQmtUy8m86jnGd3g3YCVZG4hNsU3zR68rq2t4u8DtwjZdymiv5XTw63suZyMbpJzPUFX9DLT33Wg",
  "key35": "84B2HwGysoujfWfRsYdvgfN6ZY87u9mr7NovL5Db45JSqMS346mwSoNr22Jgfc5KpZ3GDtAT2ePAvqj6MDATFPs",
  "key36": "5CQLbaQo2ExhpbWshV1LDQeib8x7GrVbQaCkwphoy6aAyGGHuNvwvtyWjDpf8yoqqt94fU61Jn8v6BzALebCXm8x",
  "key37": "d9bZCxaVWgFAGjoiuHBULdeEQPzPK91mrc6fjgqzK3PFHMLNpGhHpFdTRyRdY4aA6vhRG4NCJLb9QaSvyWjPuHg",
  "key38": "53wN62TWn2kLaF2UMhUcZjSgZsMSPj975gerFkPBeWQbbvEZ1kt1T9QqQ2BZBCVMjY6FxaHbd8CwtpNQzeeiBqYV",
  "key39": "3E5thWZa7CkJphraBYBtAHTgDfLCvkQNdh8hKhgoknwrxJwXocuchAhy1x2LBN4ogK23PiPKTUdLiqwpJJcFAr4e",
  "key40": "2XDm7SRChSJ8q76VFCAfQcX311bBtTQN2jXMCz9Ec6wFDJd5g3tAgcNbQ5joqCNqi4hoEbXzm3pXNKzKUVuk9adQ",
  "key41": "ZxyX4iV56eC1DEFVjK5oRFHbzLjzSPTaueE2LnnBYGtAReyjyAZgUVrinvo7yhog5WWPzUCZkRvS79Kcduqrd52",
  "key42": "4KuHsqHjA5gZduTPArc3mQEwsuiCuAM2jscdT5fB91aeBSz6syALP5kohCbant7iwK2P4heSzrSa4Zn3iW3BoMZC",
  "key43": "5XVjdvrHoQ2Q4RVMZvy57tDFt6ED8QbebCCqWNRr2EvbP8QNVx4htwXJ9fBBuJPzA9dm4s3yn5vVyaGKjbELy3eU",
  "key44": "4GZSeg1M61TJ1QEodzzMb4rH9K9FHkZ9r9zo6LMUVy4jiiGE1ZgE7vrfPmWGjeUQY6v1A9MSrw21GmHosmzqubr9",
  "key45": "qk6LMPF83BRFudhrukDHX9hbD1uU5wVn9PqJjb4ngymjtWfce3g3w2KKM7aWrnwdUx3Rd1uBwBK7PGKAYta7iqn",
  "key46": "5LmL4xm1ETSW8HJuP2kgqYrHjizBne6zMMoTQ87E8RRFuYnPVhsgcCuTZ1e6w6yoecHR6TFUvdWHBWK2UyMrzLsi",
  "key47": "4W8Dtrj9Pa1HoM6txvw8CHMmwGYejchQSQNsg9ZNStAHtKzZFQM1xaoX2YFmAu7dVx98s5oQwSJvo6JcPiLAPzyo",
  "key48": "36BTY7Bg73BEpBRQbhSVqDhpAEcsgce1gm7QJeomjtUKLMxep9uunG1XgcpqXjf5TxvCHLLEiGa5ZRzZkBcMuf9i"
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
