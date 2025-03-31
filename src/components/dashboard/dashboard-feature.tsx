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
    "qmAZufiF8eCfrHTqR8nwE9uexmzXU4pttvcprA3bfN3fDrZ84jRTR5oc2VbxiHR4aoVxhThGyTB8Xn1B16qnmVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MPNd1fEYxfZRQoVerUwPFmnLnR4c19X7vpQaz4Ezrg5ELjspWBBErKLGiNznEbRz162U2MUFGmy32QCeTfVEGnH",
  "key1": "28VU3WynDTvJm9Lhxd6bbvHzN9v2RzEAhyW8zQSWhCy4WvUGo47TSNgcAWthvie3gBj5kP9bd8xhR3xAgq8NKL7N",
  "key2": "5GxtG6EY47GHxRrFcPWNEK1ccvMeCciDHVyWYDB7vcaFm3s77Rnvuzppzdf5EHiFL7X92HSoUDBTUkhPiLvMNmD5",
  "key3": "3FQuA6VHHvV291k1FUkzKabGkxQEjQzEia3YSMSzkWRJmfWedCMbRsBmGHc38YPARgQW1nvvCc9RheBV8TcAKEcF",
  "key4": "62cEG3mHzoPH7R4TrpNHKu9RAGm7dwCu3k8fZCNyrD4MRyB3wMnBfgw1st3zcioYvcQnWLdjTWtQVpTuQdHoaokc",
  "key5": "5TnSbmmaZ1H1u1yHT9nHGVsfayPScu7hZZAnH3Wjte3oZgyAdC5WGKg8aooB8tyHhDw5MmjtBnVSzYuANj9a1iaN",
  "key6": "4WfT16MiSaXYaPt3C3WtZvdEzYSMcZCuk7aLhynbB1VvNnBhpDNw1sH2yxZE1PfSDuia73nQHTeeL57G4nRGoCaS",
  "key7": "3hQZy5bw36EV8WBEN8KHicCXGYirHvZWrhcSGLb2GDwKP5Tca4g3jAFPAeuZHbBAaiR6VPEagUrFbHEhxJ2scQs2",
  "key8": "41JsJaiRmqepKh75VJiLL9hW2dvDnTj4TgHqhYyqGu3uNxRvk9q8taUG6rJqQn6c8JcLjj2qaaiMXM6icmmXpEXa",
  "key9": "3kmJQJxsbtCt2sC2uaufQ2VmGiAUMVHBDeRnMguvxc5xEixa5TXNs4robe6X9FJmFC2LBeLrhrbzq5zzv87YD97m",
  "key10": "4KzoY1G1NwRiNHiiiBsqhuYJXvJBfWjC6vBtDetzeZvr7nvUdHnJ2Vr8kjtkv7j2hm2aQr5vWCsAVJpk23Lch91i",
  "key11": "2PTQaXjq53uEhDaCykm4teWmRscYwSbbTRsvGfExJRz9ZZ4KMrnMpwXjG3qaYLDoGvZD5pCbgm87MTjPAnziXZXW",
  "key12": "2NTo5ouhrz8EiCJfHTUZgJzzr5XNe2zZNGv9ZbZsLr5snPLTrHc5qkBBJ27gkFdgtxum8pGA4yQboCHWh56kNEv9",
  "key13": "2VQsGBM8iZzJrV5eceoaNzmKpx2XqdsPvrC2tMTjMwUUNsjMeTyNMZtkoSs4JoCrf1AzJrM5dtcHUkQLE4kMJMkq",
  "key14": "5d4kcaUrNn4swQ2eFf2aC7ssKD1NSq5faLpMbnqviLzYdPmBd3RAw6MMUQgy6DhPryAHGvn4DA7EDk6pDA8hGbd3",
  "key15": "57hqsb24YDP49x5YZSSgeK7xHGJSA1nmiEcC3N3gL1tu5se1ujhwM9pjRXBn6SmCytxxDgTs3dDiemr6wbf6L62a",
  "key16": "5xXmsCvM8ny3K5L4r3UPAXXpZFfSYPnWYED7KgRAwMzYaGydC9edHoX13f1MvD7Yn9zAnW1QbxRKgJHG45DxxpeQ",
  "key17": "7vrZ1vac7zARs2aY35RN57zHLc4RcqkbJwMjbKy6UJ58aaEaWUH9zfU7qMXLVb3e8RhfSVcUrpZocoo9pSrzEHS",
  "key18": "tJh8X8SwUQVWdQrQbTAaF4xV2W58bttgF9tQCnMFwQhRDjAA8vQmAfkmDt3LDUjhFc6YuYUJDV9u44zaNFt1jd9",
  "key19": "36jqknvemoKrLJv3QxsDYc4Y3sMd82RavwpYAxxfsyDcs2fn916PQNap21J8iJk7M2NEH8eWECB5aS3J4w3TXZcG",
  "key20": "21XWSf1Ajtf1udojpQ9jnDrMrwzgHUvpR1MAYmXMdibD5yGa1vqsma9ruyM1JhAVxfhqdzJ7urf1jQ26FsGrSgr2",
  "key21": "36LewYpKpt4BDTqrecNxqMLi71xB8PtXNCq9qEu5GTtmGkKip9idW3gULnHgfzs7jn3UpKnSJrvSC4cEPFmwCLrU",
  "key22": "2a2HcLmBqZBmfhPYssxHnCGKU9jK1ux33m2dpiZmazknfqUGBSBTxTXjfxpbfkW2Jcbkb5Wg5duN197YRjnTdPQW",
  "key23": "xMZ6EGgbUrmL12Kyhgv2HDGV2JWr6SnXM4NzdqEeTznLjdH7pNsZE7KXeE7CYeVoBLhFQr9Y5mag9QF94oFnCvX",
  "key24": "5NB65fcwqvv6SHZ4r2otb1LG12tYxfZGxmUBEHj7qHFCLx7CsgpR2Nux4soq1Kt4f83heYE9YjB7fPnrXyqpn8zB",
  "key25": "581DRWLEhWxUmTzDxGHE1svMXaT6va1KP1ehKifPmWaipRE5YsNJ5sh2ZZLHjhjwzBQcmE3Sk5vt7iNXK86MVCZg",
  "key26": "33c29idv1ZTGTnigCf7CCpUB1QvKzLtiDRmuEzjWwbrPZRxnrnqVqDzrvJb4ygVsUenmNWX7vnEpQCgtoAA34TPW",
  "key27": "sYkvm2pGpP4vycKUtSYKwLdozxrkkzVygE2MSUR5juwbEnoEok4peWbEqQY9XUMuQLdqqsDh1T3gACEkojxTCKh",
  "key28": "iRb52AC7JjAWjpetUCvCSg9yaGqsxiupsnuVUAWWZLWpdqf37oRW6UarJdHrxQ18qt8nQ4pGq9nfrkq3E4BEwem",
  "key29": "5Kn9QBc6U3o7JP8TNk961HhSYhvRfNzNTk2XtGnNU36b72b5opWFcUm38vz7B51e6o89mPVbeALpnuynZVrobE3T",
  "key30": "5wd7NMqG4k8FwZ4wUDeGk6FruUQer22GjZCMYXGiYK1bndnNTdLU1GkihEDMQ257gLMPgPjGdRJ6u5wgiPT23L9c",
  "key31": "58epCZygAsbW6LA3WuaKqa7FACthERknLXQFgpDfVig92afEt93VqFTFKT2HKttg5AS5UxzVd1fvGHkAkFGrU45x",
  "key32": "PJ1fsWbU83GK3xzDN65DZvB78REg2tDiSuXnSYkRDozSNsPh1dQn2qBsM7iYoEKkgcwncBu8yUTmSQzHVPNxQay",
  "key33": "4FehbSJaofaTg1yejKU5Syv7KDpqqYJTkED5qoFUz58UfzCzWViVnajsoPhrbNo5mxACnUv4pQVGe3S4FP3CESDA",
  "key34": "45XuUksMwaw5HPeoiSLM7aGUuZhYDEPhThfjhU4H4dFHwwBDR6AdacUeUd3arM4sSDjABVDHRHm8h4pixDT5kFTZ",
  "key35": "4HqAd5MWPxsBVPExUZzathPkFCDhrsRreXgzsS9To9iXiV2qDjZWapyToJ3xxWm4eWsZnoaCbiW1VqNRnWF1k3v8",
  "key36": "PFyVwg6BhJYNGyN4YDtjB5GjC9394UiY77rB9cLtL6HiQq1hkCTZSApaU4Rp2PoMK79MnGH4akBrXX7uG3jzWv6"
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
