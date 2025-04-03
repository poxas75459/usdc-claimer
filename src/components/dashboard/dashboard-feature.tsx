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
    "fMkituRFuWzi9QkYhTHFVJx6MYTftci9oXQBaQkxnEoQ3SPKg9p9nYefqeucrT2Ujzo5kwKQe2XZpuGo4VzuZKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ti1TjN58E3ULac5VvFre65Cois4J94QLrxKXrRScGHUEa5uWsU3yBaooP5oYidLG37Yca4snmDUqxHg6XQZH5W4",
  "key1": "41Z3mYn6bvYrz5tXCoR3arX6RTksD22viwMJB4yBhCPYVgW8hT7oHkZH98RibKmGA8R6fgwfUM8Swd3PY5Ld7yzH",
  "key2": "5Z6hRBqi64sVEu4xwR5oaZ7e5nHTQwjot5Ye1W2oUSxuVe4GqWz14xQ6BeZ7c9CJ3U91Cg6ktc2ipU1dbM9i4Thx",
  "key3": "4TcbHso2qv4HmkPUSSk3kJGCReNb1CghccfcQePcuovboEZYA8Xr6mRntrd7QLqm1hgXFZUi3zGH3QMm5RVdB7cD",
  "key4": "2tf64DZ8quWiUS6FNBUyTkbqeqYFhnoJjv6xRkQT43XbpNT2SkZgwsQfdZ6zXyT6HYwbcqPJToueLrM2MvV7xVP1",
  "key5": "4HoTpZDdWqfwbBzARNJZqFg6fqJpHPWBQcDFPeyhqG2ecb3DMJRu55C8Lm5dfm7WaR62Ug8L5o2tNHawQZWYQheU",
  "key6": "43iizGJ1y3UfpXpHEb96a6sjiKw9eQ4KksZqQTuBp1iLaYbyU669QwRAZfDpYDbL7PdpbypEZhz8i8FWE1U97JDz",
  "key7": "31worW6n1sCGZdtx6g24Xn7aT1bWxf2zu5bv8N4dSfht2VY19ZcHxtP27uGUZrcPSoudNzWww5zVqoiQvJQtQnZV",
  "key8": "2kpKhXWj1EtETZhsdt6ryZ2crsF7hFSXg21jFhBP1JpMTAPN21A9hQHLjBNe2m7p3MBqGyq65GSwCnBZnkswk1Nt",
  "key9": "5KvKQhw2CaQc1iDqBLQe9sPqC6Veghp2wAYX2E5Sekwctzj5xw8JehcUE1bvcBikhvV3rq1j65visJYbNLB1tQMU",
  "key10": "8dLzKSDj6m2PbykKcXJosJyk2wKVjRdk1uJTmKj3m3jfPJrLqjLnKsAHwA5FsKPf3Dan2spcVL1Rps5gGXXWj88",
  "key11": "5eKWUmHrvNY9XnbqxyjKvzFFVKSq99EUXGfHWBp1Zz4kVp1cBHcKzaEFXaUu8v1GuoV2F8teGzz2acsxvr5sExdy",
  "key12": "5yQazezdDbq2wTZ2iyag74PSBmALTwaUNa4FXnA4UzHGPcqk81YRcYYCLSsG8KMd57CLHgC3LF6os8aALjWFg8yc",
  "key13": "2rArCMUmdy7cHRZUN8naQcBiadHYZLfKLqP5Gi1EnkpCaCvsFhyUppdc2KS1mT9KnLZZJwag1USuW2foSSov9rAK",
  "key14": "2ENJfb3zEhQLAxaJzQgze2iKfwxGK6LK1ShAfVhQCUU7XhT3Ji1AKbVJRCSb2mRmEqzdnNd1fYP3NvJTLFwtPRkN",
  "key15": "4iWaGyt7miEw8d5aJWG5PKVh9fc4scTUyykK6RJtYmJTUDnobj6xcrtTzztnGXjWoQuE3vRbQKDYcVjungsatXYo",
  "key16": "4rmj7TJ9npEJfVjSEoFzZqSj3rPqbWePYjU3cp1Sp7ACM8R5KoUQwhctCyPt3pBh6ux18DuTsVjRRNSdK6SHscG3",
  "key17": "5nvhvq33vZRHWQFop6qpLGKAHXEQs1PcbPzee6o964gCS8aSoVRfgfnd96E9xCoKjzibBYKiVfW5VpLzdvcMR61K",
  "key18": "5ntpY5qpTjRH9C5CtJNzdFBv8Qe9CXsJpbQfEsVnyrDx269qrDaGF5VFvN6xTf9xkJTBsE5WWghxt2eCkpanywTD",
  "key19": "2sZk8RW8HVozpqdGXZohmmY5UfFow7iW92z22rVGys59SWFy5aa4tysPSQxUMF1AfjffdvUvKqRPY7hczopgnwEF",
  "key20": "4eP4KDs1YFsPVYku8Kvr4bs7nT7TR2auV3ReSZLqpYnm97r5RcTxjCm1LDhYzGXwnFfB5gwor16hjk5hYZzTCyB",
  "key21": "2f1d2AfM22H4f1sZZqcV1xFQPKMnzy6UCdRvDwdGgod2GS5cWG5cnbR7W5VTrfoS7bDvpKwbgidcqyKwGdfZaWdJ",
  "key22": "5DZ38g5hSdFMEN8JjkDhYQk5gC3C47Lkx8aUbDgCvAvqyvKWjhuYGgexQoguPQTmKeGxARUagF2yeyQvqjY9TBg8",
  "key23": "4vvziKCAZiTiMvFAyHJ7E2eNBNnQsLC17t56ziHzYWU6bEGRUNedYg4rV4BH4mKGBgDBPghcTYmepGNFqnrTAe3c",
  "key24": "2pgwTVTStQf48KWXujuQPGFZBwoqKz2qobBzjPYBrDtEddQpARx1MKVdcRQF82yaJeYy3cYDCXP4mpKVM9Q8LncK",
  "key25": "5QEK1qzZCRVJBZDTAHBqGb5tGarxv3sz6F5MegNjDTBQMeLCStn98By2FRNiGuMpN2HArCf2pvJtY8nHGUpuzEmh",
  "key26": "2RNEBVX6gbgYCsDvXYUj6ssTj9Kx3w8vkU3Fmp2hFADejifU6ipFrvhx7cr9bv3sN7VT2bYP2ARVrn8hBe1Ut6eB",
  "key27": "4XjqWd2pcPRQhVrcJjHUvyvRx2JzJfXdnfKbP1EebovcqBZNEm2LFETdSQ6RZthvspZpT27RjrMJB1EKbnJ2Ycnt",
  "key28": "JbVseZ8xPGqQh2N3VyskSWRXxSVk6RcRdbZr8GvHN3diQYhTDaoKRZQiGuV45v7Q4aNbtdRP4ibQZ58VjoWbR5Q",
  "key29": "8eL5jQRbpDd3XjS4zJpYLdoedtp8857mtJaDGqm5oWfFjCqJkvjnX92b2EEKMWbdcjoVJzCpRnJifanqHNmv23U",
  "key30": "34yWKwJL1LZtAUuvLAakp5CY7xunRxR2SNHSQ6RMFD7RA9ku1qiLFVFNoEC9yWcRoxmkLxH6Guk7YeuM96PjpDSX",
  "key31": "3KhHvHFHHAN3vj6Duym6jdPESLDepkSK1u2ZAPBcB5dBxtY7k2pbuNhAZuD9VnibhPZPLg3TkKAXu3mXoDBwQZW7",
  "key32": "5THvJBoK26FYHnTXbMtMUqrRtSmbhgqFKTMrZsThZtdQLjcTM271QADNH55MmPFKHmwaByMZC5BJEpQTNpWzfC7X",
  "key33": "62vpgpCGYmTNEhfMgZbeFEgJ491c2naZjLrB5huV1BF2fdmgFdcfxV17su9wZMTMRNZskuHvBaYHRBZB9xK8jMAf"
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
