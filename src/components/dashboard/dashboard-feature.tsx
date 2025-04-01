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
    "8Vj48RsMqofWdFf8hBbjR8embfCpPBk6aBHL2i4J7s3E12SNFRvQF6JDHzDD6iyQDpSaoEJu1S2ohtiPSg4fEy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YmHVJrT5viC5AX8pDs5PZacf6jQUs5fJ4oC5GK2ktydYhdViX5yJgz2Zj4f1o2wBmDdpqNYsLAv9eHyn5Jp4LzM",
  "key1": "5jCh6dwUzRve6b4jjVM8AFnXcFq3zGh3mpbiVnv3JCe72fKL7xMYR17aj7oy3fmoWEoFfFAkjiXa2kUxUK76MEQt",
  "key2": "3XYNULCpuV5VhRc9QfpdsajGAx7pG6uFHXHUiMoPg3Z9RtaG2h8iesVv3YgWrRbN2fmPphB2A3hDYEHapQZExzek",
  "key3": "2ADoBjBGHWAfnRasAqqAhw4AXLva6Vm68oydx9gjirm3cFdvkxP895PPcd2kgzpUKU7rnXAN7yqK1AJTMbbWbH9v",
  "key4": "3wpHFBxv3tnpXnpH1huCZXzEMrZm6KwT6FHmwb5RA1NXfpjZ3FnpSDLtQQtDG28g6Vo3DRJbZwyZ7YDYYbPx6QwN",
  "key5": "3PdFynWAEgtG9iXwdRrX36x9ACbqPw8pknA26GMP4JMKZWzjkQAFCq61S3LeyZJTNiYgUwiqohaVScNytvMcPfNQ",
  "key6": "5SszshAoVnmUN9sZyZjak5oF7uq21EVmyqE8Zn8u1haWz9vVbgdECkytgQ2E3kVNbN7umx3Xyy7vrAHmr5hjA3j9",
  "key7": "2Xf7cWdXTx4CKAbpf67L3Wx1AJQe9pmcEVcohWyJ9nMqkp84USB9PfQ4atH9h6rrEKfY6728wE6zecQS6Jjgj1vv",
  "key8": "3mxfCK4ekgfEuF6ith4A98R2r1VNpKDTs3F9KGUyaMWcDB2rJsgNUChSbeCVQ2J3mAC4oYfmsjEnwg3VTXyKLvdH",
  "key9": "BwpxqgXxV4z8YzDAYaW8XrKmZFb2UCoX9uDRpN44kAgWS3wDSC6NmM29pzmNSNXSFAXU5tMaj8oLtUaWV99CaNM",
  "key10": "2L4Wzo534LLP6QqtVTJScGknaNg9PWWiyHAzsNaFcfkF6suJ6RhKaQB6hgkjt6sEBDw9yAMVnCKgajZXt7XEdR71",
  "key11": "3qK2nG3exsacZNcDDCmmZcGzLnyBxSwnmqSxT6wwWSS71oQDsQk734r35Upmscg75y9R6r8etfjQt8HYeLD9xtgX",
  "key12": "22FhDRAPZZTYsaMK7nxeJT3wXS5fkW6G7ydkScmrG3YaTC7o7H2e8FhBhjdQwBsKadJei9boXUGq583E8mJ5Kw64",
  "key13": "4Rt1kth6CE6S9zXD4tmwPi1NUdFk8NaPMuXjLZ3ic5Drz8weMG9nm12k8ZESL9qFZmCKRgxcxJQJJoUuQUHXHMMn",
  "key14": "3wWcXEAPcDyKKdQiWUi3Hk2MiPhVsYF2A3iqM1TUbHrccwAPbU8M6PdUa3ViGEiFEgK9BhAEurrN5qyjEkpDPXGC",
  "key15": "3PhM6cJnsapmfbmTAdH3KM5wKwmEj2b38vypAzaoNRFEPZRbdnz3orFkKGyBmEnh4FN7SfGZPswWbyh3QHgMRr4B",
  "key16": "mhvuWPqi866DeaNi38Eh8ZRSEpvTt58aCyCtZxJeudHC1oQc55cSWrwNGWAffSujYkP6tG8KSX9hU7oRzG4BaSE",
  "key17": "2pexFEqmS39bwTKo4bXkrkCcSXy1aqREPRxVHcgScERGY6GR5HNLanff4WsPy6umYr9QvKytKFks2i2X7dKgitmo",
  "key18": "53egvFJEhe3XZzct3UUqc43Qs4AWCj4CfhNJJQPgN5ZhbEYEJUp5ePBRF1u2yf4VD3xoMWgQZFSNqtfmRvzfshps",
  "key19": "3AZ4YLxecDjfnWhM9FNnfF6q8drktSsotP1N3WaRHs7fAgMHA4YLW2TNkDM6JSztAKwSY5jdc6vScwcT2hsTteu2",
  "key20": "43e9UnQSvJGUSPvUS8bbu8pwoiK1w2TRmmLgcxSfNeMT3CB4GVqm1QPwa7zZ5hZBSf2dUoL5sBnP94qwTN9i5Ajo",
  "key21": "4Ry8cZz8fXGVu7m6dJ8siwChfAAtxNq4ouGgfZWTjvCcpjUYG8BY9GMMnJJqTJbqv6bYRGhh2QipXdTZVzeUSGgG",
  "key22": "4BPwuL7SgpeHXR8a8Z73sH1Tkh4pa977FZ2CdKjkrnd4MpmX9zEFE5T32E8ihtW8bfg4fddJd64K7EZfTmnPmsd",
  "key23": "3RXJgegVRoZrqszHaqQmmAX8gq2BC376jyj4TxFwTuyCnbHnxXo2ntznWHkeq5yG4Go9kaxcUm3mUDJm5ZwUNNor",
  "key24": "5Zrn1vxTk2VTturLXtwY5rBqt52Seg3q9ickmsv6kGTVtDNXhuRm67rLMtQ2ECviVrahokJWbyqhdvKgkicjGp7N",
  "key25": "Qzkr7UP2HCMaqZRLzXD76sPXQtS6ZRh7oJwY2sBCQ5tpLr5W4Ps6KKPngZFZHcFXhp3HbwDYUvmRdzXtreDkUBH",
  "key26": "2MqXk6hVWyJoBPyauHwnZSeYx2biCLBkTTkQ4n6x4PZppyV3LLPn6VJDryzW4yh3UHUhnhDmsf9gty2YnPvkziTf",
  "key27": "2vd3Aof8gMBdMGtwbGJ4Ktiat5WRAc4JP5sPCEyDXBnyX1keaPVJjHcf9GqUPcFTfK8xUZeiqwdD4aW4swQ9BsSC",
  "key28": "gS2Nn1vhhByg3uCQfFQofLhm8NxstdqyGjxBhitqFHNa9QXA5d9vK48FDgvpbV7efMM62XLzRuJvw23jVdYsugU",
  "key29": "252DRfpsAcQqiRqVD6yYAh27H6iFMGTzw1ZBNNEXZJB7uB7FPPYDAk9Kqo2kkXEGAZXM22sJU7ZgqdQnyJyGwS7v",
  "key30": "45sqNTBstbTbQJnQW8VbZhLp5RU66tNgXsayYSZjppsKnxUokpRmF55stYSsyrZVZz3xM3CFRL8t7SFrYgYqU1dC",
  "key31": "4J8uxew4CdVSp5LTpsAjuRFYiww9F4j79MvBZxRDbyAS1NPJnt3JSgbM7vfUnBb1RRrteR6BqR1uCq7ssdV2oNSe",
  "key32": "HJovUc5y53YZiBDBCUCaJTEdm5wpL6QBKFvtVY5QENc4mPKYAhmmM85iVv32qEwgqmejojVx2zd1xKS7Xtd5dFg",
  "key33": "4CQpqLZPVxQe4ebb4feiDsNZwCJ1NB4fg74w2xjDLywnEHfQod85HuvenwRiuRPtNdTtUvzcJPx3k4ytBJ4nHcFn",
  "key34": "3MRdrAAauRcxFrh2839QsL261hpVP3SxU1GTLzne18TjGRzc5vjXtaKi4N1x3DNLXFU7zKXpRQRcgsES7Xf2dojF",
  "key35": "XfdLm9THh2Gk48TQFVG8R6cPMKwxSYHfzu1EXAgHdpzZbaD1qD6YNMs3Dc2wPbof8MiiddWExSe9qDoLQvcTyLb",
  "key36": "4tfK84867RShgX6JkNt8mF5SzTzC4z7gCKDBY51AgvuRa1aMdp11vSyucYkzYBau6kgfB83MCDwZ1cPpa88dpMu6",
  "key37": "4PrCnpA3n6SrDbQuDh35A5HEFQvYAdU1BsXqPrJ3NM9MUYRowLuj6XgEeKa2hfSgA77hhdrdFq7sVcttk3fBmPJb",
  "key38": "K9PPqEukyzhFJD8XkrxZMtgGgmfNSSzC8yFnsYeYiST3XumBKMd3USdPqdaYrSwGtEwY8999DUzck3HWonqcB9p",
  "key39": "52zshZNKCRmNdFBhNuvnxr9ZTKA2CT9gJAdEvE1j2Y89MY8Y8i7BSZrwqQxoMNpQA5SMz1qhukNgqz33BL4K4EpY",
  "key40": "4qwUBAxUZ938oPp1jZnaGzJvbEiAeLDAzjKPmos4vfcJRsvCLcsPcnbitx1WfL2ze8VDbjRfnqTmBR5EMvCUDDzX",
  "key41": "5GbVju79FTL9WhJmVGWG7fWu3EtRdmJ68U4GwGvCvqtEdUPPdJ9wwYLcSUB6jGCxuFGcaKJax5o7vEG3wUKa6aAV",
  "key42": "22heDSWhtnEYLsS3z2t8ZvaCwbqKNdPatSDPA7De9sxZZ2m1tj3HDjTWt114syLp8djg6DjVpqvCRoe6tw8H5Mpq"
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
