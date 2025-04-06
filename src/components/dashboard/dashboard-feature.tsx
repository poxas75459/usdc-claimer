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
    "5N76dEGnyV7LDPK7oPeGRKnGPvbsosckpBEahi5Egh7ZF1btaRd8Fzj2oM694pgTVR2tgCCEndUfqYYtXzvDLjax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ptaMkqoa8KAbG6bQmi3XKrfgofLXAirHUkXy4dReHsNaco4Ljoiqs1zdNnBDPx25kh2ng5fywDVNJJ8kHt7Xpqr",
  "key1": "2YQxE9KB4nAvpjD8iBvVHpiyLKFiGSrfupztTkAyCkniEaNKuMkhKcNoKcnTzZmmotHs5zBHSJrTZD9kU7BTtxUT",
  "key2": "2HRcD9uFfXKktydrv4BLq6nBZ8LMZbvrAbetwXXXVHdrmDwQgFW5LHPNCFDr4tGYGQ2vTo2NCpBznbrhgNXydhxX",
  "key3": "21p2XwxtFEzDad3jrgLYZWUJveatAfrrZX938udaS7rqTzzhDYuyxHpuqbjtU5Q1SLF7T3D7VGX7V262pXdfTr7i",
  "key4": "5raXEouSNVii3e76upC7dee982n2qiC5nc4mcWnGHDEFaxQ3Uidu37bwqKHUbwVuiikci4RXK5q7hDSVF6zsyE3P",
  "key5": "4mwLSd3bP2GsevfcJG1DzD6VPNUEnqZi7XTZTCC5PxxQqHyQxCeagtsHmwZEukmpo2nzortHtuQ5n11nuSJXenmT",
  "key6": "2TrAtB5rTHu7eNuAwTGBkTGvKZDYHiiLaYYmz1kuHtgP3NHUyypDKXpJ3tJVS6zkiGZe5CXvxTeG5CAApjqeazLk",
  "key7": "wt2c8k88LfNSET3jvdgWkhs9q6Fwc5aL9dpS7wNd2RrGx7g4JyXKXmaHHB5yTF93gwdbLftdrJkNQtpYgR82G3K",
  "key8": "2Mxzr8UY4RGwGD1hTcnrHRCmd6CxkqxHA8drHV17bw2f7xJFKWZiufQjsXQ2TUKbnafFbh3sDJMvtYdEWbMSjRoj",
  "key9": "2W3JvWttA3z9tW6bnwpdS3UZaBQaGQBnGHpv2min6CeDPz9DAnSxv5uUFfo3mpia5VpMxzAqzo2fwDYa4LmyMy61",
  "key10": "3AG62Z8vTygH6TW6dyZuFTL6s8mvcY5FKi9BsjAFxAWHPQ3NTkAXpKUpfWhpQArE9ZKmV3HGMHsrCa4PgXG2Rsx6",
  "key11": "4U5s7RG5YHxgyQQwgaX3iDjNbv15zTdgGZAhM8uor6Q7dMqeSApNSyREvoghXthDX5582gh1iimiWxQkmwGtQpY",
  "key12": "5du8o1cSd33wVjoS8WPYGjGJy9KcXp7j48HJhUQCaHSKYiYkYzW7SGiAqjBunvwfbrXBKpBSjD9iQUWgHNJyW2bd",
  "key13": "4jUrkLSB7Mv8n4sqaYo4jGtVUVnqVJu2Di7cX1nNkPRTdkpyF9vjgZSq2ry5HyGx52yTRRBWW3pSRVbHWukNP8YK",
  "key14": "3niMmf38RNen2UU3uSNMWumkPSNWaYpQLoDkJ1TKgUm52KcpbR3yJxN6N583rGHovzNWyQAqvK9DqF5BUgaUW1pL",
  "key15": "2YS8xQjb8QE3i5HGv3sonUZxWo6QJUmQEhBwU2m5HzHJqqmbVeAnZLoUFZJMDd2N9nndR1dZm469J7XU9vFCyD5u",
  "key16": "4HgcFjDA2Kd5ZxqoTFxG3YeQdxvba3rutpCbVh1Kpzn8RE3uVaLDLiG5hw6QULuRBfRSjt1CWRV595pgj1dabrnN",
  "key17": "591kkj8UhCCh2U1u5YUWAM8xixiaftYA9sXW6QeHK8UW3m4CVyJdeSkygm5448N94YYFCJULhuJAgEkcMAmBPXnc",
  "key18": "2gqCTokEk6mt5vRNesWWZtMr6DGDBWSpCcCu6JcACPtopfaQK2BK5GoVNhqWTbDi2TRoj1HPhfD6NgsrsA6FyzSQ",
  "key19": "2MYqmQtV4BxSsviyWibeZ96W1ea9EhGPszaian4aYwse65VGjJew4rAa9uKUgb2V7sErFrMLzFvgVaF18J2u4yrE",
  "key20": "hCBbQjvCJpmvXhrp53Q7HfKzQEub5RcwHCSeuh1aMJMHDqg1KjUFWtuxM6qHUXrDFp9z5YYNMggNF3TdMr8w3VS",
  "key21": "4P1pGtSPpSvn5ajaHoEAGsmrM8DLEgYqpqe7b8Jqwc6GZi2pTExo44W2K8S9oQTvf6br6iT1zNJXA7KZLX6s2qtH",
  "key22": "4XaTD9QM9Kq1zGjRFsSGkkgcy7FzZy8n9DBmYmJyV4WhK9NTWYjz7nQxgnTk5B9TGokLXHrsvreYp2T48zthgM5L",
  "key23": "3SAeaXwHvpDPh6mukNpr8Zo4CTSC7YJruPxb6rCLfVUd4KoNTFR8C37VWX1PpypojATRtnUKzfcM4oXpkZMGQg5N",
  "key24": "4EoYYrNsFbpeYZt7YiLrxK7A3AnWHKZaNJUWHFzEuyPNvR6Wm7XVGoU8gVHinyQdj8Ff8ArhnSac44xKD3QYLqp8",
  "key25": "49f9CBgzgt8pqn6xnQikZDzF6rWjjdr7Fsgbaf4PWwF25ZE4NnAAKH6ESY9SozuFAQb3xYcqcZGC3Czn2cT8QhqE",
  "key26": "5j1n8NVRRF4SMKpqzdQ77PCDBoALCtujHAhcLPC16J2D75i6AzD2wzroEgcLEw4AF3u4K4Ka6Br7hH59NReaznQ4",
  "key27": "4tdUgiPeTjSgAS99cdHxRBWRY1drdQkX36CkXh5UWd95WWmGNceptimKpj8MKZLtPGTjFyCCgtxZwkQ1NbGT4jZP",
  "key28": "2v1he93KQMqDksnQfmfDCrRajdrh9Ykis4iARECDfwpWJiUZVdE93x3v9jHawxnE32sDj8L3B3t8ZH39zfT8JZmx",
  "key29": "5UyWHWauujx2ia249gaBBHzoA8WkdCDiFeSx6YJg9WuM7AhgccUYtNyQdHYJ92esRADTUJ5WnpTnKuudr8R2ZA2C",
  "key30": "2SStwry9Y7RifMzeXPAZk3tvWu7gujp5wGgdH4epJuHvWojt2H9w717SSpeLTJqrpgU9nGJim8s48QNQD3oURqbP",
  "key31": "2vTXN2AZnb8PYKC7bL2sAz9nU88TN144NTYCoyuKjP4qGyjG4fJJaZWd43EmtRmgBEzPQNo8srF22aB6NgEwBKic",
  "key32": "2V3w4RgNcuGyvcwiZTiZjfwsqun5dLFH7GHzP41CaQHgN91Fr4CJ8NgbUvQ5TQ5HFzJ8FR6Mgk7JnRcpxg85EKQ6",
  "key33": "5mNpJFPCRUVkkn9ME4V1A4Spfc5vMB9QuMJoUzAmjesewSmQLLESeULGbSxkrbMoJEUEPB9QdBEwFgBcSjLavvSB",
  "key34": "3yDLuUyo6bZwbAXn8EXAapeSi3MucxnSk6TcvdPibJnPE6bY2nPC5jYFFLxdtSrcKgJpBUST4a3cHFpGHXofE6zX",
  "key35": "33agZ9UjCDEhEPxDQXBHB9tgE8jdLSd6PJPhJjLga9xh7UdJ9gkJyLB2FhhmnbDpJxfWZpYF86zvNqtTAqyry1Lb",
  "key36": "PfJmJKvkwrofwrJdx5gvXpeSctuAkjbrLjasoDPU1xetUnqdQQ852CH93yf5bfBZVjd8NrDp71r2pWVTQeUnXMG",
  "key37": "54S1Vt5qj3xycgyNcaVtQyLYtzvnSz6qZ4VswMtLb1v23zmrfaGCqVHW3QvqBrhdfykKZhz9GtA5cVLcByZLeirE",
  "key38": "3HBiyt4EvT5qFEhkpRJT3LBX5r4gBE3c11W2sJYGDBYMH1weAYqbb5fN2nwdrtCVrq2N39ziUCAuTt2GKtj2U95E"
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
