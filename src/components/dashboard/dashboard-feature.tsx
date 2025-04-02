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
    "5DF1L8PMngF3bTEVYLWdN3w3eAoddYhtoBqyeggnR96v7xWHC5rrQcSJY5nMETygLcqjqky3qyr7TUZqxW36mV6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KYWEQmTSC9UwbDE7FyM8K7x1nWUfYKFqVjXBKubyjShYbBLj2qxqCzcJ16CXpGyt6xZQ5S8XUGRamAWjZ7hXmAz",
  "key1": "5jqJyHhsBvT79B9bg1YNaHvGGQMbh8A7dkjExoDCKBXsduLT3toyM282HTzqhGVwBKKkMsKAec8oQBu2Sp4bmbHQ",
  "key2": "3morwBqqeaGpB8UoZPxgJSVGu593JHJXHHaJZwuLfMpqibSHs8oUJT7Exd59pwRs5cFwD4Cj1oGhiZF9KWEYS4ES",
  "key3": "Y6Yt3WUA2brhViFciJguS2wcjYTQkF1b5dbQAtf5ccZGzLmKjEYxkrhLm1rhJxGNwsUaJbMUv2siDQYUcHZsUtg",
  "key4": "5DPzxKoCSkQbV5tXKGAeKsnxjb2LJS6G98ssdeG4eNWG79iBRdiy2EJMtjUdeWxU5wfreby4fNj51dogJntDNpHa",
  "key5": "ACEvRKUtoxrQMcfbfkyueXkpbKa8LcwmfAurrTtA7aiAF1VztWeARRfcAmWQFToEBsBAfmDcGahK8U5hRESB53A",
  "key6": "MPkAhKJt6ywcwoyTafdNhrvgcomTD8brUjPTDad8bjx6a3HCXN9pjK6GsofUzPXBto3u7EBVxYM7G3zJdrVv1ZR",
  "key7": "2jSeCWTHJ4Q2fC6NhE5cn9x7LAVE8ctKKCyzCLD6PQfbxjpKMgbueh4KmZY9Xyns39zu4kGKxfLtZEeP6MPZtD6K",
  "key8": "xdgYStfq7rAr2YTHZh78FPmFZPFLTUSisdrBjA1JhTZzgeuDZUNGMq178G7Uxn7i9dDxNVMMqzrvzEVjktmFJ1v",
  "key9": "3e7p4QX3gHJgdwmL1MQBgaTNCfXJthBMhnPzEP8HftV4Vx6hvdWALET75kft7GVXXjwCctNQKRjDnveKNnzarYH7",
  "key10": "iaXzKQ9eeJHzGZC17PkWzckn2JwaNEgTC5AWP4Fygyn854LmAHeeBnfUHx7kWFnJTuXyBhqsrNTNgCGeqQqCUwy",
  "key11": "5TftAyhX2UYWPcR8e2T8VVm88qmo9ujQUepyWdgTdW44LmtYe5XrDQq41nBqtsNXXDdQrRAux3vjdr3m18YUt5r",
  "key12": "5s6YdckEcYHHEc2ZF11QBwJXXbnG8yAVwF2i9RPbGzAY3X2Q1fERYWG7Jnyi8LZxuBMZv21HChcgdY4HEaeRw9x4",
  "key13": "4e6sDLEP6dRKQ9mmbkM4qGpHjKTtngWMJwjLyxYA67XAYCdNV3rksmPB2wxWf71rahVMKLkus1UAbSpfGa5kua65",
  "key14": "3eKvNnFYGKkAmsAd8DoPH5mXAR5mHCgjiZMYJH19zgKqF2ZPoGB4RBnFgmRpuma2pkeUxwLxa5NQUomrbkFatSkF",
  "key15": "rqSFJVbBVZfLqgcGF8ZbRumz8ndPZTNVnw7TmppBcUNLZwNLmPLe22W92X7jxAMi7ePbib7k3zQbreMb9PvfTRy",
  "key16": "4M5adwYBtzNU88zitNxRb6eEWGkqJ9RKcyQppKReTizZvybBLU6b4sMrTi7gchf6i91YADwGJp6yM4gH9kM9ocK8",
  "key17": "5eaBvMiT7bSio1nvPSnMZrJ3pqTazCs3rpa8pMc7dPy9DKr95aAPrE5to37dpkMFMHKhpiSRccNLMoqsFNtzHW8J",
  "key18": "4JecKJsfdNmmeguwj3YsCggys41D7DivSbqLwsvxF2q9X4BQYwqTpUEmfi7fqT9hgd1HNzFH4ftAhh6hfDAgqPFJ",
  "key19": "37hddAytcmX4qgkZcijChKkxmNVYr88GMuWmAxC92wWo5tJeuMFfMVgjVzr56oDYX7ry2ETexVjMxMadrnkaxHvc",
  "key20": "3PoyKTjgx1AHY3GLbQnLAPTxz25UefwR6ahC8dGGYhzDbWotqRrczPU3AVBAKVMNnx974G6DwprGGGziqFbcH5dS",
  "key21": "52Kh3h3dH1ckmA485y9XbV6rfTBGQoLRowWkTDq2g3pPrewHoCcrBNcPUXfdP6aNtYPYZSHAixyH7kPCJ3NjnwUs",
  "key22": "2Ei6AN3RLCdJj8EiyWsqGHFkhVYyXtxcrUDqaBW54Ngd3eeETJpwAm1GQHCA6iBw5QCrVaqLAXEerNSEZNThY6no",
  "key23": "uc3ffz8sr3WJhHKVvDAYGgjYSkvLMnBKrchVoEvNnawL77ybVf76FxScdFdSB2Q9iwutThmgdQc8whexRFqfF3x",
  "key24": "5cj7W3QAjyxdawY2vqcPnzdNK47eX5hnfuDYZTwRRZKif9WpS82Popq6wtjUDpTMsM4n5jZJeUsfLnX6FzBfrS6d",
  "key25": "2waaVMW7fbWViSYJVjiiyRppnq9rpX6YwoqvNkZC7NGSyYveMeUU7Z6eEimD3BPshrDRT9BvjgsdNnjFjqjszBZE",
  "key26": "3ENFQKh6qViorC4MYz1iprCotWzXE2dHjaGw9JyXWdBZsiuJFHvrddo5CSRZMexox5PCL1m5LFnByFGZdagcfsF5",
  "key27": "58qK5KhKoammDtfULqxJxPveAagcyy7FHtCuSbimDNyg4Yv9HApjqQ7tXFgMb7BpM3RYsADwAPQzPgytn7bU4nCJ",
  "key28": "tid8JjYoE1NU6UYmHeeX6bkXNr1xq28qj9LeeaDSzuBRGxnfaU1e2Vi9EUDrY14pQAPgtP7PGK38sUfNuSerV6X",
  "key29": "5jLJiBv4xCAXeDDxj9oGQKVBywCmCNfqRUenxbyu7UpNWBLYCL42LK8q72jCChVNzUmnF5vWxpdR2pPt1CJh2E2C",
  "key30": "3dE5sfv9FBkXVZwYnvTb1hkVqsedMbLRSDwW115qvRT2yi11ehk4cdVc7XWMLhFbJSs6SgLzpPeVyG2SQa4ezKdM",
  "key31": "3VKUZ6vU2hTPg287jvjgymBHXEwKufizpMoDqiQc9mEumcJeoQscojsxcKw8sfGvA43fuf4EFpD6M1KuNf7CUgi4",
  "key32": "3Usfas6L98xHbh6yzFm7kg6MVYRmBVqgpin6256retqijyUxJcLd5C76whiBGjCWibrfoSubu8Wq7iQghWqb2eM9",
  "key33": "3qkkbD2kvMHi3Si2p2rGXGjhB3Ydwa9SoHLWPAaXcd5imapHMXb3v8y3aUJW8vrHkAW88LMi7b7K72xyj7HDqUyW",
  "key34": "3hdbnicVAruBjmqkt722PND7c8HtJBKadHBo8aKi42keF3icXPkegQCzJZbsvDCv3ENXo1GTZ2UFgxxxoksebTw6",
  "key35": "3Zbn391cXKe5zc6Z1wJzghxQxPRW4FfU7xSza2jZbbGKSzcexoTbwQC69q83oZBMzYU63EcizQKpUyyLHSGpWAo2",
  "key36": "264wxKGfoD9GYnFfphMp8ENkxSSNMjjj83cLyVaL5xtw4mbV5QbdpZ2pDdTMpTk4peB2RRrFU5LtB3MiqTAnhUT5",
  "key37": "5CrsysbJtVGDEY3NvF9hL1bBerexyDVLhx6wzSGhCRNf1DvKcVuLLYKAKpMjdKvSi9TQunoVNDMnfSjAB43dxsnS",
  "key38": "LGDZcPNwUhKbUpqvG1x4geGkqKafiCxKjTCyMMVex4z6wgk1NXC3vdk8pgHUXSjoEda6SEHLhcXUaHW3zX13XQ8",
  "key39": "29VJ4LuQ8ZHYYkkoTxwojSeY8ZDYx9dDLT74sLwp5kRfELwHyDK16Gv1qPNgakQeSrAYBhisFM9QEQRsJTLBgrGK",
  "key40": "2LzMRCbPjepYDyvKyJt1ejL9AmnYSBZqUXtXX1CBXSWYEgFqtjdHtxz5BtodoMmzAo6FwLugc8xRRPadAbm3w3sn",
  "key41": "2x6Y3XavKy2PfggDstuaTBaHTQDNDGYfAvHMJwMKUr6j8aNTn6qStgw1qyVTbQATEMANf1qMcqQvWd3H3xUbEK77"
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
