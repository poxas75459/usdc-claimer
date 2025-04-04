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
    "2jmYVgNUBHNo7QURh4CXXiaxUzocNgoA1yWek44wsWv6xzYRVLqAH7e8jE4vCpppSHSrs9if3XCe5DQZiGAmfH8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62kJTxEQymn3bYufnbW7kyMGg2KUPFVPvK16q7HtT1MzdqKWoaGfwtiQYGT6XN5DfPpopsBD15NvEFjvqb4DaMsu",
  "key1": "4pNELVXtmdv47h3VfUebR5sb3LRqrUfxXxanmLi2ds84f4nQx4Jpjhi1NwNe6NcYbm2Gr2yqxtJvsQNSxjK71VXm",
  "key2": "jfmkZbEcwdwDR4wvTKwcLcu5f2F7T82Y1PepX5Jq2EGDr31h7GatotpgBSSZtHK9CcMUG9dSrSNZSj7wdPU7fa3",
  "key3": "3a67PsudC4tKx1bctTapFLYHXn7Nq2ngYyd31qDU9cMTfMFMLpjkD1qwT5JHgPqo6uLdJr5RCdqRm6CMKFq4MjJo",
  "key4": "2AaFnQgonhzbs72R4zzCGLwJNXQEtrQ7rvc6iBajw8PWKzR4HBUFbqzWvsn5MCZCi1Mkbho3c7zwtkvyLaSiQqGW",
  "key5": "55FnciRdxGoPjWeqFreeGjn42xdmqyU6dS5s2Mb62Lkc16syVcMqdm5RXjVwrzL3MMu4nnsqcVBj6bMP2AwFv823",
  "key6": "KLzwXUw8SrqFmW8Pmd15KYSbzrXYrmowp2zShjYx9QKz8Thiy5tAkVLxzu2F1KQHRjEdjAqHMZs7YxAqNiHf8ZN",
  "key7": "46dt9smohLZFiNvMT8zpkQzM2CWdz2zyuc1T6Gux6Wwq9n4xyJLDt6uYSL54i1TDJXJEczC79SVzf6WtbmLPM9DR",
  "key8": "4XVftXwQUFiPLhRzfGKNyEUGDH5jUa8r2qDaNFiwej4cuNcpUCXx2ZunaXL9VvUep3q9b31oaWbEKJ7vvsM3KmBC",
  "key9": "5Fz7v6xZy2mDkDcLLLZGXZWeesB2yBAb8T4nexqPXp42o6y7VykM3QZe2dWeePGZUEFvoMcKXbuo46dGWUbbvVbX",
  "key10": "3vxTgoaB31RHRPGt7Er84kxpu6abL4tAcmwFpJBxPkU5cSsxTSzr2Fd7YcrRbAx81z2XYwEVX5TJ82rT7jkg5rpC",
  "key11": "3yKcjRDedbd1FozwxxuVqsjUJ57Dq1fzrQfoPbZVnKBDwjLqJCJPSnLgxrnREgjQnnoenmFPm6v1YnZ2Ltv4K1Lu",
  "key12": "4e6jZs6JzjeFYfpi6b2YK6ya5s79F7ycrMFhXzfHLYJUqhzpWuMmghtzZBnxVw9JQYQT7QQUNVFz8Q55qM7za8tf",
  "key13": "rdK4asE9tq89UhMwsgfcdtcdQ6P7GmnR7tBSQFqdXAJtYdgjTrEfQcy5qa2W5o6YgWFo1v5trfXmWWGEJJCMp7f",
  "key14": "4Gz8W1qvdUugvdzaVbCAhQ9UhZjSAVPEjAqidM5C7i6rPmb9snegDPqGN7KtrQRPwxdFonoX32A5TojtBWPm2BxB",
  "key15": "4oRNpfZdQYxBS2YNCcRWEzq3XMXgcuLQtCaVfzwhKoNp7zmNVevJzjsovaFSQDF7fF37jFCDakbRZoR3gpGRRkPp",
  "key16": "3FiRnHJRrEEhBQ1Xy8XAdZXvSwZ9jemzhhfwXe6M9Nqhx1BLBBjGRcYDQHEdYPdXk5ou2sFgHMFPJtWhrPaKDY6t",
  "key17": "e6NoWHLs4QHc7YXPAy9nvpkpHmn9mEaaDbA8J7kWXLwzX9SGUt6v1eGSGgduPFgGovxHbAJaUfUzaJGEDdzjPnV",
  "key18": "4UK2PxMzEVrf8g76wtaAxxHfZCM3zCoyzGtU7YB8rVGv2F26MKuzM6RHu5wuzDH72kTH3PiJHABYxfbixgHZQHYW",
  "key19": "2iSa9KkPvhFbgxSsdBHhsaywWkgttxVjgUC4tUN4tp1C1zupK4n1Ag4bvU4WYCjSsauYUWLf62EfJaoR5WrXvmJ6",
  "key20": "2QzsD3neN2mUty7NxoQPh5yZrW7xY97R11Pkr9uyroQ6sDvgDMMxpxv4KYC9wnRXLmNoF2UPDeomPSQBArSbLSR4",
  "key21": "2dj2f2UHVYpxGbqT1xAmZSG4FPni7QvjVELbMGgEy8jMhMX81dfsFFvSsWXEzgDkNTneYCt6TXU1WWpM4giV7pjC",
  "key22": "3yhD253pJM7zq92cURbEhMAFLa8uvmDzQh7XoaYCjrMYGeejACatacKH6AncyU9QekJp39HnjoVbT8139vCqdfXc",
  "key23": "4d3qUiqDsAoSt9fArRawrjt46V4FbmxvLDr3t2BWztiQDcWTCWMfVwAjaZ4SouUXE9FF3XP3tXdCYYckEng1TPYX",
  "key24": "pUzQdn1tEg8MRyRXxoVfv5WPysaFZmadwbKLiUPhuUuJ1WLEkT6AKhtEtKPc7usqFX8KqTtzjx7byvG1rTHcMST",
  "key25": "3huxWKwEf6RHBXCy4qZhgpFRr4gWTZosDVPao5f83rsqeTJML2V5Tr5pcTv2QgjKCRVNJEAvv7K7ipPk2mqP3BWE",
  "key26": "4hwqf1rLQTkGw58PouodmiWiPa65Y1NZ2EU7QWxW96wUSVKm5zKbAGPjGtejG2a3aDAMdtCn8ztHenLuz1uji7xg",
  "key27": "5Yt7CqneFUXgndKqrWm56RwBYZigUFPadhrHC5f3CND1CXixvoMeq34RjCQ8oTpVSCUfNcsXs5ncZFrK6UkvWRBB",
  "key28": "4KwVpioKAYbdhkZRmmbrzsJcbQ6d9a2thPskMC3grrvCxJJpkysfzwqjtpq7GXt2wyE84mParpDyEy3i1EMTByTd",
  "key29": "RTgWsvctbyDGpn3yNyNRLx3UKd2TuwcNqoy3yk7BgR9Kdh46nrtyCVnXTBNx97BSgrLprt3dnBjkL23sEtt2dGg",
  "key30": "4V3KWHoYqRxDDhWvLuzWWovzmQ3SvKoz3eeR3PXRHSqLeABzHfy1HHCc4RntwxKH1BrGLEikBxJiUmt3nWKDNMdw",
  "key31": "5bPt41dqLxEkiMAJWxcbg5TQydU5ZtoHC2aDop11ycnva9QVGgKegTTPvgVarFxe7TxKx26bfYAtpVrK5QNXCZHP",
  "key32": "3BmkheF211mhj7xcZgAbf2gaMt1Y2LmXxQ2bW6gLn1H3XBZBVrrndHuc2UfMVwadkxaEde7DRzhwS9TzrXtLkqyD",
  "key33": "3CFDcF89k47hnDzLZeS15HUQ27HEm2jUctLVN3KqJtfzeCfWtbmsHBZUXSJPeSeghjACe72k6Joqo18PvPx7u2hf",
  "key34": "CyQbjM8ijGifLEqY8dNtQyZvsJkQB6onfgFa41C15nAefG2RTkYmArVtCth7DsT6FgVXc6hHMgGjiNtW22eWg92",
  "key35": "3r61nxaUXU1RrWmEo9H8pQbdUY2BPidyb9hVtirNSZAw6QnHHi6PUbFofJHQPqDhksSW2QZyCy4UuZut78y42uan",
  "key36": "4HF1YxmpZFEmTnqSMyGvqyuyoYmZfsqMDmWM7134HzmA8bsZ2xskLzznoJp99MFeYEYndVT9ui8T4qv5rytvioDy",
  "key37": "2AR1rnbjuaUp6JgdHu6E1puDimDAW3xTU11BnCZz9J5m1TVRHiSYDzXRb25uzSHkRu8kvpotAYgCKZ2dNC3ktJUA",
  "key38": "3e85qqjreJPDQSUTCC94cvhVFQvCFBf57aKQB4sTbCnbDsXJvmeX8geazhSoPesX55NnWKs1qzRSMtxTPrssDW3s",
  "key39": "fnYAnYaEjpuG7SKUpW6pdfdH9ApNSybr82ZPi7UU4hHhADHdCyx2WRhmfigtFzHmD7QCU2JJKwSavtboPx1cSYC",
  "key40": "2x5veAXAbQD4jmkkvit7YprwyPPegQVufeSuv4GP2Z9E5Lqti1neSDUpBExKSxpuq2M33ogwzGYJs3vT43zkV9zE",
  "key41": "4UH5SF5zVXWH4pq37j1WywmPw2xYngnNHzXDez5Vy6ho7Bz4RWyD1v5SC3LomzrQaAsxMbeqo6SJpxgQceEfSHRE",
  "key42": "XXCgpHLPb4DXVTwowzoqTdaXNtSq4SnUfLVumLFDMqLGsSVCfTWeZYKkRPpBs5CZoxEJXHiUcCUZwchnzZLBXsw",
  "key43": "5APFeeqMGVKGXdfWNwHahgEkpeKWAxrAtmSWgXVjeNaN8uPVJM8KpDbgazap67PMgxNZz1j2wgW2nUWVa84nRSyi",
  "key44": "4hRiZRX31Ftk7HVEWh9WenE3okEBmBfFS2XSttfAf5f1GnDGkQ7AoCbiHhz5pdwzKHCofXZakySGusxaxW2MrEHw"
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
