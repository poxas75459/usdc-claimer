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
    "2Qkkgr7c6fCkR64Nz7CZbW6xbDLHEFjV6nfErYNm4d9s5tcMq2aHdQQKaKSd4DU5nFShNijAUAiijaZTxYW3viSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5papQuJYKVtv2mSYWvjxWxuieqQfSpSDWxycnWnfAC9gfGnjCGqdCmoTjLKBt5kwaZLzxo9wnoRD6oWm193iamQ4",
  "key1": "2qbDPmvAXBCddkSsoEcJRjN78MLryLwr9BxZ8KURwi3WiHG5RAXgtnzSh7KRd7G3iAXpvxuGCBS9V3hh8NToandw",
  "key2": "fZCt67W9BEgP9ubc1SASCvprT7KXHU4t3WvvaNHaEYRJD7t7aMspwMU8bJpaHwdsFPXXdyj5D3CRWs1kxHwLZqS",
  "key3": "5LtSZpbrYZjxestTht3jtQCd2sF8n8zELAnDu6vA9a99bG9KAxBvnKpuN5X9utpn68hzW5jzZgyeDCPYYLDp4fhC",
  "key4": "54Eq9p4SNhnyb7hdzR22bfvRUUvaCeVJxvGkust9Sb8evVxFccmd8i6HUhRwGj3tRoUmVXessCDFfi2PZUF72muT",
  "key5": "3GLArYDHqAKGDist4V9gYMjRU8tNmpZuaXcAKDD7X65DubPyovxUPJn5bmEMzP9TLT7yJeyqQroPNJDRTJaQkkGV",
  "key6": "2SDFUG1DmwV3ARbquw8yxFrpvva3xtqzi8D3zrofykWPqNdDFZu97jVsQj5ZCCgZrV9HrSxD1R7H8jqNYa2C8ESB",
  "key7": "RgvD5SwZQHVAwzCgYTWGB9yL67VHdXVw6xoygAdpPX13oaDqJvxTkDpuNx89ZbQSBeaNCjQd5YWZa1bDR3oyQQP",
  "key8": "tqPJx4MfzpLaaBRV6QgeD9VoQpzENwrxVAFjGK9wm1mHNxmwGrEyHDs9G1pWp3LA16A6ZVLuWtCr2PhrX7xS1iN",
  "key9": "4WkNALiHKZsXKwd9tqwoitstwNBJTUukQQtaNNAnd1gKMa6NuPQVjk6ztRSwLDqqEJqhaEVCuV3C3HpKpQhTKW5U",
  "key10": "2dXfGBtr5SFnxXWqfemsYs9NJzUNMFKgDcmoyBSZTTLvHNjc9M6mxBSkJkNQo3FeX5RpZp1G3oZpoj2gdaEAyTrG",
  "key11": "3Rkayv6pVnnApiQiDgtCtGDGjsnWPgLTQtEeXoiysaFNXyYAxqwcMWcQQhdGBMkh5GJYCzw4fA9uWiCq6DC3XwVk",
  "key12": "5ipByFmzK8FWyt8gxHXCLTQedjDG2DDTXPhBEGXUoKteCoMhKo2Z1drYgq2ohNfkZaRLuQD2BfintBo12gZKRwhy",
  "key13": "4ZjwHGioMwdvL9ej4xoutrrFDdM9QgxVTmGf8QPwNqG5DegtauHtFJxFug2JkjjTsss5ZfgoQuc8Rd8SQf6ANfmq",
  "key14": "27NJv86Wk1uZiYcfpimuwYGDEdpCp16rptGvpxwEuCvokwBKHV8q9ZbEBT7cgFoqNjm3z2zoabvGucU2QXohJpfz",
  "key15": "2iapwSWxewUp2t7MLmsnUYJ37wC4oZoi6k9C5WtfbPmzrbEYXTGxRxrm4fdsmcKeHs2EiXhn9gARx9LnWmR74Swd",
  "key16": "36ymzihNeYf2pVqpRW1bT3433EYLinmYMehiFEQ2d9ikj61prgX2ZEFaWhoW8ceqo1iDsyfTEXpL5nfptoQ3TPbb",
  "key17": "2sr5rC1JmzEBrdqFBaAT4dkpkuPd9d3J3xM3ffKF4U6cE6PKG2ZH7zNMAVkfaFpnBoUVEsipsGQmVFttxxNgmdDu",
  "key18": "49eWiDxJWdqBbq9zUcx22NnQ1rff4LpZcnyFnAizBcZQAqfQ2z4kpBdSNN6fZ6cdcur6ttcNMtsyY4pr2GYGpcmQ",
  "key19": "2zPCNgrBSZPoaKG4W8YBYPrp59KQvgG6xLsEAehYVefeYnJLo3UxJMN9svz9N2gvPdQc5oXBxZdahGLsxC2q8QXe",
  "key20": "245YTpyz6sLG67X1c8yVTzmBAYwfK2ip8XYswfS9SuxpAJJ5HgK1yP7vDmqXHqW6v8RkKfmS7zH3CPdxgRbELmFY",
  "key21": "5GKF1VqGjS38bvVtcX8cAoYbSPYoDj5zq63qLFLpusuwsCrZZGg6D6PsqGapvwAxt2ZF8m2ymmFvhoHfrDB7AG5B",
  "key22": "3jZeuEUgbXUqG2ZkrvthKnaH7qto7UaKdiTAJZcLns68WDETMJK4Q1FHQDF4jrf29PzECi8W6mTrS46wuixFyg4s",
  "key23": "4f161ejS55MxZQLJQ48eQhJmysApZKN95zNCFQCZ8xjZuzXvajxWEJG7EJXb8a9MZxsaFi49TWCvc9psZ75pEDZA",
  "key24": "5iQwgt1CzxekCzn9SBaGn3mwQJsUro4ie5XsgntPR5NUeMbZyCnfXQjJdxrpZscKyP5M1W2yR1cKmogX1WomEcqY",
  "key25": "3QbffQtf4xBrLinKcJj7PqzH2HAdLWC3VfrGzvk7bU71juq6WcUe4YJ9cBJFMf1EePLNxT6n4aj1fuvBSvYGHBDF",
  "key26": "3LH9WfDj5NLdZuXMxs4YRYnBn8J8dPLL1XhwLjMJ3ncpeWJvN7sixffFG2gijTYoz1xBWEFD3m1zwY71QnfB8BMX",
  "key27": "2hasuKQ3BNXLAtpAMPSEs9bqZdHTmUY1rg8tWSowZhcqy2n2f2bwWgXGnXpGefrtSHMRecoZMzR2cjjYwL7P6rHo",
  "key28": "2i59hRCqiiLYBJU14ZqbKLKJbe6MV3ESMNzaA6cCCqHe4uvz3grhZN4ricQEcQjo8e5g4q5pGtKC68wvcG1QyXy7",
  "key29": "C2oEaWkQf2ceDbZ4S6UDRZaRvcHxWiwJNEJWV4yyUU9qSkAhYruSxhtHYtzxrPjaD1c63oeMLhC7eJLpjCUPWXC",
  "key30": "5mByJEEpD95JY4p7gob5QCbsvYt3tPWCsuT3mp2d3njszrK7UzGDf7iWRzetwUYQ9AXJgSeJTsEaggLqqeno9irx"
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
