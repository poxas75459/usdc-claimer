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
    "2vyvEu3Vdf65JQoyWjtcvWGHrEPNiMPhtgbsdRjkmVc46XovuafsAoxy2qD8gzLuHFozdAnzHAwySwu4Uwdcpot3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G2DHdZkEag9YSASg5pWAj3cjn1o7NmgKmo1XLS9vfvjT15QdwhQSCUHfzBHzMNFfGM8oPjW5ZMA5imJ9Bt5Fts1",
  "key1": "5YMhbBxGtwFcQAnEWZpgiC6EYzHjB6PYAA7nYSpM8dLzTkWdQumLf39WTHBX3NU6BYaCG1EF32VUZYvvCT5BJb9S",
  "key2": "4vHDn6mPqtBThYYJPbQj1xjTG6uAbr5wqbPtapztuWgEQaChsyoK5AsiSD4zec7dHR2i1amPiYaBhANTc2aHu9im",
  "key3": "5ezWLBZ6x7mhT349uvrfxT1cLmYE4XBy9FJXwsCDFqydjtxHzFu6NQZW1AdNMWLxGzdc6q8145iSMkjs6GyY1DfC",
  "key4": "rJj8HQoXhVCTLXu9nwmcLa6onmEFvh7AXKXmhekuhWSqfR3E5fbP4RqSfwxrxyYq2oEJDndmp5MMxfUTdZ4CrU9",
  "key5": "2B1LRMkRd9aHQFC7K7RUynHKwphkVNosBVk72pXmNqKLRQW94Z1Wnn9JoPTJnzSGuSELe9tG6z27NFA4dAeFYAgT",
  "key6": "65W2qAVCV8fTLv6udTvG2qPQ36mthNBrJC8J4gDeXFVpPawm1tw2WJBELdnXmuWWJq3kZxaQZUa2zLTrWMBGKW13",
  "key7": "5gYE3n6jVDxqkKSDNuMHkvKQen1ttApYTpZe7YX1WaHvkmheyeccEsxKPjBjwCouPijo4ZpSX2AmHgjKQ2aqq6Mv",
  "key8": "4VRKLqmku13AzLhyCLne7FK9CbB7iaeeqpTSHbaJEUxsrnzSHyV3PfMbZcb1bKUmY5WrMdbaxfkBXLhrQtGrYJTv",
  "key9": "yzFZbut94cPMVzty3GNdtqXg6L3jKbdXLQt2aFMpfMHYsn7L6A1v51TNg5wpArphfugMAvS6HxYa4i4PGQ7VQD7",
  "key10": "3jYQKy5sRr9hxKwrnRrJsC4R6dnQ2xQi41JcLejYrAhGvqnyiq8JVKucW4d89s5jj9aEmyRSJSwcGfLtNmVbEZgu",
  "key11": "4VgRauCim79wTT4vZKSEXr3q4qMooiSthAARKt2yvcGJm9eaUQeRLovrG784AENi9L3u6ebS17TqBHPyjS9ZrACE",
  "key12": "2w5Qz1G1qtPScdN94auGLrFt1ck4QexcU1uFNqqfko81H48cTtjRGVnz2kL2sPmPrqrMBo5JPuYg1LU2QAVsofad",
  "key13": "2JbyjCdYfbKXqnjZtKfJd1M6QE1CWz15EXtytxjwaMC2ifNsKAbexXeB7k2Q7y9Z2BFogUPsrGLG5nDukuQt5uaD",
  "key14": "sKB82KaJo3qynUacfbMRUdAt4wzxzCTwYPvswna1bCTyNFn8388zh4khDqS5ZFAScJf3nKK29aFCuz5Mtva8YJU",
  "key15": "4oWQB9w8rkc8zrCA45WryHyQRHAmzDxuHEXF8kExhwxazy9HF3wLYtppGshcNnGHShGPj4xbGV3v5QsMSWWtP3hn",
  "key16": "38QTj6k5p6y2Z1ANKbUeNf8FJAqh4F1LRKJcGYXQF1QBMDNrVHGB1QHU5PMRVjXarDrQPD1a5daTwKL9Qm7cwLMY",
  "key17": "64zjDoooSxp9GixPrtx1C2xitGcyBYKbgxYsu7HbuSZFpipXSkPNXCsBkFqnT29obpQF7Lk4sES7KLt1m3h6Pj8c",
  "key18": "2ErDSGx5t7hqLzFF35T8Pho6xzYtJoibrpsv7HXA8naYsFhoaRcXFN6M7E5NW3WoKEyfmPGW9MBJdRRbMCUo4NfH",
  "key19": "3Lmtj1zVKXCH8HjNuz1bcehuX6VTX2djWn1rk9ehHdX888JWxVLf1ypxMj5D7DiEa7hpo7HxuKdogX7Bp3YDWQo9",
  "key20": "2HRkJUaqey9zthXNaPLbxWVvUX8JRzChRsaxHwkS1M2Vp2sFuGxpkoQjFfY85JvQBFjKgX7CVNtMyPX5p2NWVAMK",
  "key21": "4vHVVnrPnN5cTwoHrAcQLyXFQ46fDtkMHXcZXTy4hxY96bLWFMdYxYnEXKYACMHf1dBjLWTseQ5NAZvPeLXso4Ao",
  "key22": "2tRHLkTqyHW6QswP11CHBxBt7BonZK2sKe7CRvn3wKF84yBSEUbkbL3TYRXjZzh75sJxPHss5ZqfKuscAtKeXBXk",
  "key23": "2dpVUVY6W6M3mXtp4FfAE6ovJquL9vasJ8G1vMsq9xnKC4XoTaGy9BZ4WYLp6bEn6R6A7Y549ewXTwMEnj6z85T8",
  "key24": "4w6NVrnDfkmKiLW7tbNxYzdRZdHsxprQXF1VvZ9jiuvkCJuznrqFSXddYW4q6q7c9VprWMQpoU9QbUyY2aLBu3q4",
  "key25": "4KTgr4swWLz1p9BAtRjgiCjxpXwBwRRBiQkXhDpd5CCeMn7jCAZH7gXtkpJHZYYjytNAEVodqMuPmSSwDaC6cmUi",
  "key26": "Ke9u5BEsJL4fQChnYEqGaxf4tm4PxBgH9dGHy2xCNdh4y3QcgEJx8vbRkvyP2RnL4EZUeA18vAb7WAaQvbyqKex",
  "key27": "4T9FkwjDttqxiyTLZ1j4FgrgkFvqi1DEc5vbdbBWjGQiMr5WZ8Sb9QPnyvnTLZQgeH5cHbqpmvT5NbeYcxgarT45",
  "key28": "5PTK5JRicWy2yX2qkaWWArnyetVmtDXB3H4LkcviqBsAznmeCmdmyNS8kYbev2GvMDSjTvaiazqQEJuWeHzr5Z5A",
  "key29": "3v7smNA9zk5wUoYMkNzsD8Yzq8Qy9RLm3S5iqwJ7byempL1rJoDsnZosNJMgjuhmQKJSuFKwc6B8N6Qb6psmh6mA",
  "key30": "2rc1qQ39cbNTMXaNopZ2pVdzYcb9WRoegKWf9B6j4S8iUsSPoEWQzq6eUkUiB74gkhM73vdS7giPyBfGybTmo71h",
  "key31": "3mqb6gr6vJYBR3VhzKQhUheEedxLBaQWaSgei6h5sqEgnvZXY941nM3ioW1qQTYBgUeMxHXxLWRDdNMpf7ok4isy",
  "key32": "2Kyj4Lc1DimYiatdCrWwWkkNaZHe7UnMSack2wLNRA3xqSQX8hF9UrU4FLU9xPqXHgDHVcgZV3kvNJpcHouUsyyt",
  "key33": "2wWpHXykMzSqkRxykiP6JFDSN4XWxHGjp8qwvi1tbxCB4VQGwanXHxW833kDPxZqh5SmVY3FyNAJ6gQT77frqajY",
  "key34": "3FJqSjXbqgBP7BXnrrKQuGnZ8qbNdYAFQ5JbgSAuMgZrBNCQ3ArqkPGu8giQbVkwBkvdfcKjrkUbukQyqTvXgFUD",
  "key35": "syzoLCXdDS6WiYjWv9wLjuPgpPJ7EqMjg9Q6X8ELHy9ycGRxoipBaa4YfpZZUKDd7hrreZQtdQXdX8v25wJUikm",
  "key36": "SNWgChyP5UX4en9SpQVZXB9jnVDWnpJdKKSyhZUojqabP3PzqKsHHnvGv5WGYk62cpjkeP16H73RZfFVDkCxqqX",
  "key37": "7ECvGJdLXmvdruAJSg6Z2yvi5gnj3pEAfcC72YrD6Hnm8icFnQf45Uip3Wv7hRT7UCSQ4CS2XuYWovwxDfaabFN",
  "key38": "5acRWjk4uygGTy98ztpgD11bThkHgUq7aZXEiX9YvvFudpXhUx8rPG1jjz5D9ZjxxQvnpjkedge1Y9MFnpPrr7cX",
  "key39": "24yAszjqc6s9WSUXbDM49kjKo8VwQPTdwb6Abr3P2deQhU3Q9ZLqTR2EoijGXRNvQTmkjjF2xrksqknHrKJytp3G",
  "key40": "537xVMC9aH2QbwHhB3jf1ophLEqtW1MQgZ6Ai7yGd4WJsppMf2FxcgaxWHQrKNpsJYfBt5vEvXaCU5ZPkt43xy95",
  "key41": "3sz8xK4FiiamHUgdzHNYsd2hriWwmE3Uo1tVLWWHtj45AvdaNfsoRYRTjr7AULY1BrPtjKjU4gCRZkudTwxGEgPu",
  "key42": "4BF5eKiGF5jBUJ28M6BsgVx1vYcEPF7NVzhCh2mTX18pngq4FCNBGmZWayyqJykgu76CKRFE7xdynXBGyVHqiKAx",
  "key43": "2zUoxbfGWDqHUcJU8QFSwhD5Gc1DCAp5BYdJ7zqreZ7rhzwekxLkBrFDY8Xsg3xHBqGLo7DoBQG1pNviHW5SK5Sy"
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
