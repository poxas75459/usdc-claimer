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
    "2twPCWmP8WBmkFtjy89C8kXpRZV1sSm5K82Vq97vF7HDN8Yp63F7NLfR9pmbj34ACZihudueif84xpHdWYM3VuAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wxoPY4sZKh6GKMZatR4CbRQgKqMYKgZYRfEDLSjTbxjQ8Ne39cW2kNf5DGvte33e7JHCaMYzAHRp9rRfWHERKTf",
  "key1": "wB5XcLvmeyf9iqXRcisfPqJT97KRnnMDd8xmVdyPRgsLRKDa1QUGRFXBQXD4Lu2siJGNptbNuLvBmdVB63XQXkt",
  "key2": "3pFQaqPQjb31Ti2jHpcxWTRdbRrFCehKwif1i5ADvxS6d2naBfc4XW8KecdpXrH8xXuU2xehLEhyWWWi8JxrngMp",
  "key3": "4yYDp92WWhjvCa5wGar37DyWGHfsMEaJfnidcq387D66fRnTusmZscmXyhc4MWX9RQ2HLmPDLAaeTu8TtUzpAK4Z",
  "key4": "2SxYHjMyTvdqWMwYHzbcF4qTQwUyPrxCmBs1Aup39EAWv4sd7BE1gywWSXfd8DvD2fQF3GbNoCrfzRoBwiG4SRfC",
  "key5": "2dX3SuS1wYjwFY6Gg6RcK9G7ryfoiZPG2EPpS7PTFGqSo3RwVASNJLKds2czicnN3ULaQbWRJ81pqW14KA9K2gFX",
  "key6": "5KkQgecAM8Tb95tgEjqVpmM81cyEc2JPPGJNW22n3aNmgYkKbBHC6RoXJbAUNWqhbH9eTj4yetrJUDirC4wvRf5U",
  "key7": "5c7mXmpAk4V3fQ8vHSF9N4MYkAd2zrmZhjRbaqNXcggF5R5mYydxtuGHPxdMk46cj1BFe7bGPhhZZucj7qAhi8te",
  "key8": "56dJvFCWvDN8KYPLN6xvA71QGgi4kXGMECwB8UWQK6qS75wNz8yC6MK3YqiPGE5s7jf3PLfpMnbEVbFwvcC89ckD",
  "key9": "WcUmcsryvKRsa8URCZvUeayLgh6aDbuVBvgdT2XwLkGBGetS5Em85vzGFp8kFAqTGPJCzJrFuMfipAKe3v7ijqM",
  "key10": "29VuvH627EKoeA3xFc4H9NQvnmPYH4Km1tHAhNdCEmJ8jL7iRUi3t5y62JKvGszdBnxekAttdxjVZ1PbKN8jC7Uf",
  "key11": "4skrHVMZHm3rzfAf6G8b4s37X774LRB2QBuNYdDPCUZkAJT6MhatxuioVZ4uUN5ZkZgK1wkC2JWwot6wuJTzNJ6N",
  "key12": "3fFPrmPcXv8vc78o7NiWjhswa3GB2Sic2LeEj4WFPmxrdxujHjtLcPZFkDAi7fqfZ6NnLyqQBnhpiLxtVQQqZv9u",
  "key13": "2uRy8tZUi9q7UrmWvJrymJPLm1VauzyY9H76jVwUePKBes5iuCABuKUJUniXe4oDwNhA5iYL5oy9xfkHfcYPickg",
  "key14": "4Ft5VUWthLmrAxPveVA3NSPCqT9eKwypszmTUv2hRA8uJEEvFvREpqk7TZr5gE5Lp6bjtkEfSuV4R5rye49rHcsp",
  "key15": "4UKHZYbvDMQ7VeFZZHVDnHAuuQZibJ1TH2XDu9qqxRBHhBayDxyGr8mvzSJ3aNDMKBEhvZRRtc297dTYSDE9zVrP",
  "key16": "4BH169zZ8FSPUmDk4qjNLpg73LBSuVQDzRan8owXrmLweLxFWvt4mqQAeHTTJ9kw1gq41ZzPeLCrdXYyPdMqBXuU",
  "key17": "2SKw2Gpoe1H9XeSKK8JCGj59LSTR1tcjPhRF2qzaM18ncw395bW8uj6PNqZ1BKenWwxDiaxW5NxWUZyFKrjJ4QWJ",
  "key18": "4fDTyqdhStoxVkD5ww9br7Ja1rMHBYrSy1AKa3Jths1WbaGaJVcrAJZ46hNQMyveHJdEWPXYRtStWyqSZ513CzgT",
  "key19": "5CbysGkARVVkbdSktUMvwHJSaY2qHBbGYr6hPXvtjZzHwtjuHPbBtj6euLWEL1MWu81MRqSs3A9onZhzknyZuzK1",
  "key20": "4iYUFtc5RjTUYMfbRVbKEbHxb2fFPjvhhBbyM31RT5R56H88G9fhxWijrTTf9XAxoUQcDxSRSuZeVmvi3oLoopXZ",
  "key21": "2dbYQ3nB4fivK7u4tAUxM4mCJi2GAfEXSZhqucQ8nvboBrC4BEsAYXySZ5SfbzJXPstGioseenoPSwrsHLGveTwK",
  "key22": "5YvGfDkFpSXtTppS14z7JhTHKeNdms1ftFvypirmMPyshzdobJyFZ5kuvqANjX4D1b5WcF1x1PXLCgKk2VpzHBg5",
  "key23": "2A6Ahm66f88GFX71CKqiK5AWJoZYmdAWE6AW9VT85nHTHMsfzVXHpy8Z6qFg25czwBbzfJfYpVMXP7dDBKm3wgiV",
  "key24": "3nudnCgdR3WwAaWigpoEceXE6WkuL3fteat3RKMXuphb1m1u16Yv5aSxn3Jc7XdraPJaWKwhTX9AbXnhCrN1KysN",
  "key25": "UYALciNediMuYWXTeQpeRtvQcN3qnzHAJRTFsdokE8LK5KxkegHub8H1tiJrsLmkNAQhjfg8W7Xv2HsRvP4Niho",
  "key26": "57rVKbQSgnU8knzQzG95zrjovjs1tW6CrVT66ykGSGqQXjJKV9NTMdWB6zWtkpeP1puQfPARDwBe4vYyS14CJNzQ",
  "key27": "5UQcBjECTNJdakxJszCRyDwrT1NUKJEYBWfqB8kZ8sQyCYTMqMdE1V4ggyW7QCMngyiaRyMesKBwaMHGbpKM7kg5",
  "key28": "2bnmHmszxJ6shayp3pjdZfiU8oMidYc3SAkNh8zSXu6gHcsw8XTXiyRHtWFgGSg369dHcYoAbv9cVudxbygrrP8K",
  "key29": "5C7aD4vXQm5YWMBpqgw8QTz5h9h1jBMFJ7VpgPLhXtJfAeN3zfW7E7xUeccjCTSjoGZaBBUmDrjNSQqZqcGWmoQo",
  "key30": "4wtFn7smgdq3JrBEoFJ4v89b4PyZEzWCd7sHoiLug6LCUoLWxYnP23MiDwT9PaiA9ZLroLSpffJ4ePuzzsUVduWe",
  "key31": "4YyaXt1UKwZzERaKHosmMsEd5sReWEfcMkLe6DgxBHU7kMNoeVcNj3EH2YKK4at4U5WwnMNrgnqP9s9XmxpV3NPx",
  "key32": "5cRSf3aWL8d3c6GoCD9ZB2c5SH4JfVf7YZVgZRCRxdfFdrgaUisTQpCsF6GHfX6pm1zvyUMRd5St8Ey9CUZZy2XM",
  "key33": "3GW5WnbpXRhWJozyue5pka2WGXAU6pwY7VbTuVWWimJmw1eWsYVGfBPQjgv5yC4Vsy4Uhgf7htLw8cdvAC8ZN5Pq",
  "key34": "2tDdxu28WhK7BrW7NKvJBfUHcNvx3DK4oynqVbwCqx9KsMSQujqKGRBwpdebGtfLvGCbByHEA1WGgreQtimiKbhd",
  "key35": "4x37kxCtrJzxXjgx7672y3aXFktBv98S184EkRrPJLHhR3Apzn4qA5yvET5BMTsqRkySgFrP9yd5h5VVkdMzaM64",
  "key36": "3C1wTq9SyYvmkoTwekBbT1d7ZdWqYxFWwTePUUWiUdw6j2sqgUfVKgiLpqWk3tT7Qfw16DJZPghKBJdgCtsdp9WK",
  "key37": "47ZWvmjk8kUmrJhDQE21wARWYvvb3TsGbZKNQ5adqRP3URJtBnRtyNp2UfYcafTtZNXu4bewQ213xAZqs8adbErn",
  "key38": "3jjGGngio2iKMSnrCGsAX5no4BeuYHTJsxZrvwfgKVwvd5FLwGpyoqZD1PXgwht3Utsv81u89Dzvw2KGYrahijCY",
  "key39": "3NawR1uDonh56DQRE5qi4NyQoGeYGuqX6A94HFMwP4Mfx8FXFrHpSF8YPqahqr8Kj399WsG45SyqsyRFWfECehMw",
  "key40": "5S9TbWGs3CBDWKcK85gkBJSNLTirzXa4uzVpDSJKEusfBs7uRPxcZSGWX4rJEwJXa6RWrXYAPtz3TZFDz51MnzPL",
  "key41": "2zyCrRWpugC9ay77PSMLfrr13QNtcs1XdMBbEYsybcr5WB2MEPuUuVthmCRAb3ev28De8XvtfE5ct2phbqA19nqJ",
  "key42": "gbhn4ChtbT8QBZojBwziH5DTMtRdbVJPC4SvbnPpovTKs5qYuJYBE8nx8hUg3yavRAQ8VF6nKjLva7QyxnUndyq",
  "key43": "2yJSi9Jx4eP4jNP2ZaWFrgVbj1LosYDSBMMJyAHeNJUmUTqq3YjKL773Po3KyWxKMyuPhzLFWVooTKP9L1G6eCSo",
  "key44": "Vp5QY8DD8VDjvjZHciS4T3rHULRCR5N8y5FmbZunS699VA7vWugRggVMJXnAMo3e8KWYc8T5u6yNpVWumg91s4G",
  "key45": "wQ4yd7BMPUgWEjsT7kPBxKTtZTG9vx7VMLV5cSzvWXjVHbkyPyvhDePyHa4u5j2BAuET8zUtDmXdLdfs8rrq6HE",
  "key46": "4mm6bNeocKmXuszcbXnt2td8fPqy19LM21Zwov7cfS1otNeBv35CQmaHoJcqQJ5RDhMFnCZxsn5fDXLLr42VAFVV",
  "key47": "qHm3Ga9krFVQnxXJ8R9KiV4KGkoPuCoRDky3xomiKp2k9PRQL8of449qHsrPCikUsEJMZxkKNbpeTEzMGZx8asJ",
  "key48": "5j57d1m9Yh6Q6HdHscMroh3i5htjGVkhFtcRhtziSTSwZpWZqBduVvTo5eDCrcchoMms6kkZ5CAY6MFCeJFyEQ5p"
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
