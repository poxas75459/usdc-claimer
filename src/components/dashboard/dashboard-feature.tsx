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
    "2q1iBYMGJbsHLUTQPvSixoBR2aDr3fg61UjZvThDrKZrPh5H7Cfm682CmbgMBi5MvdDCrevAVyNTwyZmQL82C9Jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ji6M8b3tg4xkJ5cqYMvYABJJGTgdjjGk6G7tjWyazKMDxbhQgMiKbETVY8gqnNYSxfkiKYhEYrXGtJhTXbnrAGm",
  "key1": "2z4xrk8RXWFzq3g92QmZUEkBr9g5V2uNCQHpPK1D5jbWUuz7jeQyyXBD3vzDFd4ZiDui4RDHvdBYUs39vAanem1s",
  "key2": "5njG9eS6zERUnexN5F5YZ1EisoTnYKSKB4qD9p2oVnQuRLHksopZVqdXi7Qf6J8iFD7KmVzD5NaHHYLranMDcer5",
  "key3": "4aNMmLMArFX4FdZdtiFN6eJoR1BA4fFUJDK1jw7vxQ3h5cHGb5UEBhymPRkNP9bSqev5mpHgntFjhwPSxYUVB7He",
  "key4": "33831RitreNnNnrXoAC6PDqPr9YWh1drrrhzEY1LZVp6m4MXwJ1dGC5Mdmski3n5NMBvSZrUYhv1p4sAg5Z6GAWm",
  "key5": "2sXe5u1Er1hgbyBpY9srxvDFKQSMzz3NPUCb2Q8TSPvxUiUi1pQeKp8wfhyaxFrZNfbxEQSz7GVdRF2vAMFchtsi",
  "key6": "66Y7tQphhKdwNd6vKSjbomcqbGoMFNkjQ2mDzhePy9P7iNs1Es1pF37fFasPwmwmSFe4eL3iZ4bHSZ6JHkKvAZLH",
  "key7": "3AAfohXwjaBzhusHxGtXv7nYrbYicbXMNM1YpfP7Y5CB7eU8Xi58cCQzNhHPaiRrs95AppDvmmNcYd6bLbyn3jVP",
  "key8": "3TJboQ1ieAZ6DKY3XTaHQZwk3fj5AJZoLfKoRGKRA1cpVKqRxL72L9xPGejve1tBm6tsRQTVnjewZ4dPBavmN3HU",
  "key9": "zpW2WuTLq3qpzMWYAfyfk5QhUhDFhK2jYKYn2PQKotWqc4mEmVi8zhW6EBddvH5mhujMh2w5Jehztp5GTEfo5Ft",
  "key10": "YFWzw8AWY9rMfcXyLDXcYL9vgvB6m99QGPLGXdcWmh71JmrdS1c7VfcDdykx5Y1oDd5cTcjJVuLtUVbRYsc1UFG",
  "key11": "657eziq28AkoyYJ8YUBUZgiBakiKa4Lx3tsNFEc6nSWycUpr222Rw5ZfoTJAz4nVJsESjnCRixXUTza31S9BLrkk",
  "key12": "5LU57vBNVVgBvva5rJeS99WDE4D38KyvxUjxYQGU2tjW1vE28gfMjgNLS4gnX6whkohYKLrKFczYFYJaT8S8frKS",
  "key13": "4XKV9weu6qUyejFuipauhfQhbPN2gxxUbcJaaESiWBfT8MtneEHXAXvDFNoeDQixSXZBPunpeeBmayZfqHzYHba6",
  "key14": "2Upfr24XzogLawwfS8UGxPi5MgGjRBzwJDjGSNz1Hs5Xb8Eb17zzjpLMJMGHZWPEw7fwPrarYg8JCsPn9cFcFgnK",
  "key15": "2qhq7dPVp6mqt5d89AV8NFSuJaPxeDbX6PFE1QMHGE4w2oY3a4UwYxADskSQqAn8UyY4WgF5aUhLyJ8bNCXRzg1F",
  "key16": "3rZ27J9NYTLLRqrvUkQ1xJPkHsN9Qf99YwfChT9Wr6hpgmtD51SRn1RZf2jVLoLJcy75MB9gFMhZxg1SgK5tsbFD",
  "key17": "3A3L925i7HUrjU5NU7WsPKRFAZyySWgfDdKpvSWUauQmsEE5QDxQM9J9aXcPJnwB5j3jd7eZ4S9UHf9NWQUkawaX",
  "key18": "5Z4MTWgoeyaVNEf57BD1kEofJGrTirunCqTL3tmSM3e92QGMWHTT7jqQ9AakczjubSGV1r2tzZnw5UAxHc6ycXei",
  "key19": "3vg7ENA5twTcyRmEy2ozVH55gZ7xPDPg9J7RPokTbZGAFrRwgvRSVHzrf7aB3Gve3DfREwTaH8WMq7aNDZsKf9uG",
  "key20": "2JyWCJDrAAPZqiSdQkAXQ1kTS5R5WFYhhkv4mYNuSnoLT1DpJv1fL9qJ91iA1mZk7uFLmcLCqxA3CWcSKYqLapFn",
  "key21": "5ekGtPKgyjeuXMrSAshtRijaYuAg5YuYSLQMLFbucxDZzax43ZNW4SQLZRFQ1jAnafDvJ58j5vjabRLEjGsJYfrw",
  "key22": "55CEEaGEQtJNu1nKUcQhUrEZQPLiHPiH1heeSaDyWJivf6XHHAMAhPGZZ1xAwE3bya2MpsZxdoo4FntoLovupxxt",
  "key23": "2q6gq1wCyqJMR1uCb3ViUJQ36zV5F42dF1vWd2ZZVmLJT3hMW3B7DugjsWEUmh978BN29Bchaw6dgUfBoQpBbqrP",
  "key24": "3PeqwCy3W1D3DnRu9DTC8pjJ3w7CXFzjD13rdYCrnEf14SyJiFnGViWZBgGpfbJm2oMgkRxCNgGL6kaZKSUp73mb",
  "key25": "5m64A6GoxTLDwXn25VRY9UKezhZPj5VMkzxAoQ1AS8xo6makENTV4GECKsLWCZz5fZq175vJz3uMGeLxpgGWpnzD",
  "key26": "k7JD8xmQfRwBUZBn6ARregmzVQ9R8UZutcd1nrDbz3bqhrrimJE3EdspjvYoKcbDc9Kh8DgU5QjiRczm6oE9pgB",
  "key27": "2ADKVNQKVmJ2r8G419UcmYjSB8shKcHb946sHMP2GPbpRwwQ26zGiDfYo6TGbe4fpSYFsuk8GFmEsrSKBUcoCAig",
  "key28": "55PKdPPXnfzV2Vn6WTEBbtn74zTPaAeMZkiVzzZpNrW4Luqg4PtwxvfV6s3j3ySUAR9wQZF93vTQdbjpuLJXtJVG",
  "key29": "5DBL6fviofYk4rp7x9PoJqCnuVdFXaEDF14QeWd5NAJEBRJzPzEnjbC8oKVDQK5YJbHekKAbYRnRk3XbXKpSDXua",
  "key30": "3ZvNfbXxAn5izhn2U5WMkfZmcJJWQ1jbaRM66QeFhLwEfNDdULXz67fAYVqxPhydugUfcKhKARBXfsukStS69noE",
  "key31": "PgRvQt4u424jn54WaZx4PiJs5sSe4dRAXAwczYRGn9RjvWcQ6NqbLLpgTxoLt3afSr7YQgH9yXhva68oRgKC7wx",
  "key32": "5WsGQANdPVtDGNmPdCukC1ZRyW9cpyUULg7FLdK5Fk1w2WHtkKNBGSioiPjm8vUpsdaaLcYesMdtnyqJmHUfY5sx",
  "key33": "64UfNQN2XffRPWJRBUXjeLXVzcdEr6U9CmjT97fwh6rXkRs17T4Ct7xmJ3yxoLW7AQtDgSMHPjUEkND1T6XJFnxd",
  "key34": "2aGK46d31uxHm4CorUyWx8kURqRqN6jUn3ePkGqX1DyNjB2BUS1Wpw1vFsHMfnBYHzN2F5MBxXYHLeMffbcT7XHt",
  "key35": "5XHVtPSRdiiW6E4uptwZydjaQy7J47pPNDEny6cEdh3RMqoEtdojSsoPG15nzCWe7vyYRXKKKf5xLz9PvzFWRvb2",
  "key36": "3RYHSKxiDdiypWPMyijacYBE8Qp4RDWXCd2suJF73rSfvfoU51affXudSwnxiUehmC39eeJSpjfKgqeGWeMKkfQq",
  "key37": "Yfq2ggoj7iz5hBmZMfEqB2RV6Ak1J8YFgouahp5rZXiRQbTYouPcQkJznRBfPb112QxddppDaEANepGPQJzjBXR"
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
