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
    "2UjZX8x92uTXV1Y1H4gCzq63fLDrUyWJwRMtEjnjGNQfqbfPotQL7HD1vqdY64WDKtd9YAGZufTjXNzen4Tut1Lj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26vC4tfpar9vnrcnKfeohjUHpJbDpugHNvwxwWXiUekNXkufKA6g8uuSb7FCovhetDoj6L1uhEVmtTFep8UYwWJq",
  "key1": "4Dj1b7rVFZ3T7eUfnie7aVEUas5DdACAW81rPm9kmkiMBh6djixgJ12hvDPq5rN47FnCHk1hBFVKRxhxbVwhcizZ",
  "key2": "5CBAhMKA5YtLpqYo6hPc3hfpXbeA6DiwKTjqsFZURCiyhqChpQ5FZ3T14ivGSAE4SetYSrHxm7SrussfGCHwKXNF",
  "key3": "5pXHGeCA3jxd3uWSQ3XHBnbKZG1gYSCphD14wqRxBG491xfAEVQt3LhXGPpsPbzBe3ZjHki7eVVx85a8FaaPmKdJ",
  "key4": "3DC7RXPMbfpUjGayDhAG8YGA1fWcw972WuaWCJN7S5k9Q7nPsFMTz8iWwqcRYboi9ZGW9G7hCJsgys8j3M8c9uas",
  "key5": "51B3vEM4Mw7r2CyRUkmyx1vVg7ft1Pq3mcULBnneZKQ8LzcEkPq9PzQzc9VonUDizmNvuwVeMUUtYP8PGs4Mx49v",
  "key6": "4UESuc29o8favMzavS7i686dNGs5Df2N8vVWDw4LR2f22hLQNUL6zcsyVh7ekAXHNhMhQrDzDRRqh6CCfx9XLnK9",
  "key7": "4Nf1RUp6Nz2yYYN2PsAiyetoKRsDNVpVpQotTmnmHeuL7mShRuRHwJKc18GKnBtyeJxKVp7cKTcrvMcBQuJNJaFY",
  "key8": "5xE2Y2VBeqFUjgjUYcjUpYfZU6ujLuaC9iGHZeWMwvrD3GfJ3yHS7STi5Ebe3CpqDTPgkymYMbwhs56Eo3zrvr5u",
  "key9": "4ERV6uA8deqSjApopjHXec2SeD8U7hQjuFe9RfqWNJwpf2Ldwktw1PhHaUNkK3dagHcAYFTENBLqG138W7xYoMap",
  "key10": "47szdWZhFLkUVWSzu3i6B1Zw3NdrkrEq4DteaiD5w6eABZtsSrJFL9XGRxsdsksK3ag959MkNtcp5g8TSwDVL37f",
  "key11": "tdHgmS5J3cjpLsGsZTtzaUiejMktMkRAU85AYnP2ai4oV2ATNEr7F2JTbWWCWcESkmG6hm4S5rGUynxAH9S532c",
  "key12": "5pzavw5qD1YFyfKEcc4PZkhQiTg49MHTdwKFsNE32jB1X69pjNfBT47fd4eprfrYWvZYRGGDUMYXZXjH7ohRMUeE",
  "key13": "2KnygrzBeEaHX1aq64rUS6C4E4pmqB957xdEPSX1HTnihohKf3KXoLwFLSiSDuh1o7L17HbsL4tG6TV9u1u4FjrK",
  "key14": "4C6xb1jo2XyqtrxKeQGdnQ2WgFcUipTgunDTE8X9h4nMPVoZBZMkHhf1C2fZsPAbnDU3RBEYxrLJXUX1jUbB2PiB",
  "key15": "5ccUanVjYWYkBu6i5vx1eQGspVqJqxUyD7KuAoSPuSXNpuRrqkKgwAad7dr922FMNzTvxT95XFFDEYAJ5kTG72Q",
  "key16": "5zrfP8EG44Jgf6Nn1FBzafdypanzMsaX37W7R1tBjmCaMJLcu3tCdU9y5ccVDNSvLqXBJxg4KQb1ggPs7HSA3xVC",
  "key17": "4XCvbq1frv5XwhCX2u5jiohKN6hoWsVJxnWcL2yR9hNNu6XJPR9Xq9ADfquQ38fGCRjKKJFLySsjGqHkXfuRi7uN",
  "key18": "76Xd2iPcnqWhWFqS32md6exe5UaU6XqtkXCsnzaQe8Gak7cjwU2Cf6uFnp7cB2VWrbzwp8ii8zWJSHLTrP8Pewv",
  "key19": "JQaA6EiYbk7P5SauAWMF3fH8yNjaQiKGVnoQ2HPcweiPMcRRLV9u88LUW6mgMfPYVe24emhNkCQ3MhCeqnA98YB",
  "key20": "2csWjxTSeVwPX92Mbcck8YBeYfD91c4nGY8YFmaXUyfr2uV9FTRVGSXzNJ4r7fnjptCrC4ZaHjnoWYgB5jUrqXdU",
  "key21": "oHo38xZuJCYhMF6u1saL5jnabZNJgNx53kcLDKvTiV6a4LA7QMfhM1chK7F3NnETJAwB9X4hC3Bf8aPPxqE4zRJ",
  "key22": "4bm8xMoWR4gHTYMsnMguXeQ32NPQV1DV6WDHHJWMbpH8kNw8aJ7dwSzFSJeQ6ZhRc3VpZGNhEm4CFGHsrATX7Y94",
  "key23": "3jDrRPu8ZyTVv49wzmtX3A7UFQtHjiH3RJssjetKyWx6jjWsDoiv4MdaLwCtEeEaytbLiZdGqBtwXePTZC2WNPi7",
  "key24": "65UCP7xNmYYtUTg27F2sxe9gJFtnyiR5HhGwV3pzryomYTh4dr7XRfi96FPr3s2TRegDA63XNqQ8BLiYrzHcNSyU",
  "key25": "moxATAzUYcxouWhjjqVYDxQ72VmVPpe1mqwtMACHGJ4M66AbXGeEhrMtnZCKaeVZvkd2NvTFyPy3mQbhLMg7mKQ",
  "key26": "5FAnc7TkcWaArH9mpK3eD6ocALTr5jE5jC8Mcen6rz1iv8PMbvmTfCX9X6Hz1ksxWRDmUbz61rzyB8UbAkgVRJpy",
  "key27": "2Pqd1nKfxnJJTYsjDYpSRZ9pkRMVk26JPArRaF9uTUnD7x62eiNgBZfNMi6BbpYRr5Xpca6HWwrMhAysTc3UGt7M",
  "key28": "37eFJ9iMJneMLqpYEFzBaBJoHcdftN4sN3biEYPdbok32DghxbniFV7KDGhU2ZtDCqC32CMai1cJZpzFcLk7WQD3",
  "key29": "FNqSL5VzQ7W1fTdZeNJ8cr3xPLNan38i7xrNVwEXGdLidqDvn97MbvqSQEBZq7cNmodF3MAMs8FuCbYsB1ZLjqY",
  "key30": "3oMFPdVvG7jaV2fSzWsQVNyjbHPumsn4b5k5ZExixb6VUEoWXyUNi6fbeRQWj1KdWcbWNuA1ZsS2LKZ6Ko7A3px2",
  "key31": "4DpKo1P2gLyDjx9oiD2MwMVu6rwsLfxBs7jaXs2WVJ4mvwoz6FzdLWtdmxbjXQ8SLqUAqnJMsrL6H7HY6NaUDTbc",
  "key32": "3p9RWxVV3HLPiBAc6iuuCVbh2oWDWvMExKPyKVS7fkTctMN6Rw6RjZuvST8QGPdmwvbgiCNSwS4ZajDozwzt31rc",
  "key33": "5gPkHBqXEDYcLD39UQWzwRHG5efVygBfBAFeTtPgGPRgoCx5GiFDZCgLyDBRNuDRUH6QtMrH4tJGwVAq5yYdnzBa"
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
