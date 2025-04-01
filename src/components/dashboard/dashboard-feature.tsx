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
    "2Xc7Eff9E4S5Zxj8aor56eVLe8KnQDbMQ72g3v1hvoLBaF5jWK9ji5hkxyHZkWE6ATz2SCHcQBksnye88N5t45VS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yuJo8ndp9ZDwHzk9muVFTgu82YGaSBby8f8w3rxB3q2yasN8t9sWwBRtsTfNdJcNAs8JDwiQXmeqfr5AsKv2d4P",
  "key1": "5DKvoJCATwwfhH6tDCWaGZHPEvDP7Z9zwYzTsjEtuF6Tfwn95y7fFghMQK5yBAs3pJZni2AKuVWLnkLxDYbQpStZ",
  "key2": "5F9dvhD49FgCA5tk2WBiipZJcKF8RTr5RVSYF32hNmA48dwyy5nDGGrTfcvcndxrZzV3SJLgeRMTmqQywRfUHV2z",
  "key3": "2GjWKLamZhbpG7pjtLAPwJ5XSaiMFVNPrzcCqFdx9FKa86iZUm1D6LU9ttFJdxbDnfU1bgPWiS5FzpzHFEBkQTqc",
  "key4": "3uWz7a4uxjM5vRkZNXYH974BLSiXCo18TuFgeCT2uzSVkxQuqfFP5YxPGxrpYLap16mNpX8roKfGfeYke35BVDAz",
  "key5": "2hYnHvEpvirZtQTQrNudp5H7JmrvNFAetFQ4LeYqnSYBpWWiyHjz9x2CmSD5EArUKWJBTPzkLxYgQXep4Nk5p9WG",
  "key6": "67WfRvqBti9pr4XUbZdTGDZNMzvi9TA66iZRvRQc1Mg7jLoUeMPcEJnz3tA9HFpXzwth2pinSu5ShoeTdvy4zJaL",
  "key7": "28BTpmXnjgtrio8uzJFTAE2koGXWDBmDnRtG2QSUchQNUTCrwihVr5fooJJe6SvzWT6P6BPNtV9VEagUMgShp7Dd",
  "key8": "3jBnhnSqd9ZVGthKzXMcW4X8YWgV65DK4e7wnzmDz2S327zyf5kTmubEmwPK9Dnwwwrx2kwAJkM2kFU59UMs69GB",
  "key9": "5KAuvrP5S5Sxjxqmoogi4uxE14siX7AQU9hg6JQjwKUiN5YwM292vhBAVX9m5q1qBWWuqYLwxyKy1fm7Bb1R6S8h",
  "key10": "4NssbFfuszFs3RAZLnVwi5tjocqRR6RAgLonU1HL3ZABCe1JGzFY3V6JDaZhfZ1TSKDCL6PyRghZejrcf2S5j1kf",
  "key11": "xbQbmZ8t4RfjwjFmifeyYecxkWvXsD7HqqJMA3QNgo1wo2QyWWZCc9KSbMWdBVbDZuVgPafXup1iFhd9dxMw7Uh",
  "key12": "4nvsNfDhWzr1RJBcX4JhuYpabvTgYsEsu7UUgTD1NhGz1F6QP6AjgwqaJkcceHbKpmyM48QW4GkZ3uP27y5ypG9J",
  "key13": "CWzasWRZGFeARp21SXUMKTMMGmy1NgfX5K3Jcu91nZCbE6X7zofNmrRq8cYjgo1WbGTbqU12tSDeKfMf6W9Td17",
  "key14": "brjnZq2VFPiWrSUcmEqB2GQLj9BTooQZGWft27X1jQLAYXkUCvDQ6pAY7sMCQUBJ3jANPF37ukzQWTYAsX5hXrt",
  "key15": "VGLEDYthA2X7PiVqd9EVNhGbKvvXN8PYtR9dVHeKuMcVyoLoojBFAQtbbY8jt8in1QuEzaFrPwtApokr3v7KGDn",
  "key16": "2VJmHn19E8EPbrZU394rsPSk2ehR7A9Spy4t1EZCu5v96PSsGatLqWYoRL3U2xxT4XYrTnNwuqoxAbCCjWDuS4mT",
  "key17": "Yu9AjyZxcxuKZKApNYMLRhRNiFAAqUZhPjkDmXkYRjA1MPyjwUcxbX9taskuEZFkAf5G6qTa2GoQ1C3mXd4LE11",
  "key18": "5sQULtAVCSxyA2uMqjGbzY6oujJ9cSqxkmRAdYi2SG9vZXwE3qjdbCNqxwz5wt1TMdbWvcin34pseSDmdQ8Tkmbr",
  "key19": "4QhydF9ucerVQWsnc56zesZdk78XfoicQbib7UPQT1c7iM3CRoWqFkwYRVtJhFjxwv4UxFGsdGYXbARHkHLLoRST",
  "key20": "39UZZDgCn7j48qF7VwuT9gJDiiLQwJ7A1zgMoSkSD4ZGnkWgBpRZsffiJ6aqe9kSyXSLdA45mWq4SdsXZdZ89GfJ",
  "key21": "64ZJed6HBsXgULQqmDzTbfBbEpwRh2uUoi1c35DKvS1S1XGTEE4NY5dBmfCmk9R73fgMebJ9Ua2ZpBv9bBAPBgf9",
  "key22": "3g5gKt1WUb8moBVWsnQhcxjYJFYf1yFEz8H23tt3sjT7SJxbEhPMWUk5Nj6k6iq3zLig69XveL8tWPRS6xkZHbr",
  "key23": "5k6H7bZ9kVHHkQJ4t1FkAdQ1VHPb8sNPUX4YQxsXqGjJ4eCFBnGwHF3TR8gEuMnKERvjhWjWgPYdeYyxYqydW3sz",
  "key24": "nubEA9osginmjn4dNGonqL9stSrggivvLNL1QLHjixiQfkQeqwq4RFktUkLU4JPZXoaTDhsPGmeCwJhRYYrsQ3E",
  "key25": "45D3iJDnP4w6kCb1RRoVBDT9epKxwfanfsLHjZPDrKtYukRrbix8LZnsLfJiRrmKiYfUtA1nqBnCWWdKcHetYzg3",
  "key26": "3dSoRXRxnKSRDdAYGMbcCcj4YqiZUyFWfCjuBMBQFyXZKUGBCxQnsbmPEkRpY9Kpo4Jxbwddk7LDUyrQqY4wEjJZ",
  "key27": "3otCcgErYMWpLX8GttMr3ECo3mFhHnjxxPpqfNvxaYyrZwSXmmLrYmDbWqJkYtq8UEiUUY4MndTxVxYNAEtU5DRQ",
  "key28": "26dBcUbmyi8Pk4QGGVt1RLBUag6Mx3suNm3EnkZ5pwfaFxKk655fJMXMjMiuyTkA6wqDZzy5vazNkuWpAL2rW3wN",
  "key29": "57wk6Nt8t46Z3nQVhzSiRZFuRRjRJ4j74Frgajd8XGMNNiGiDZj7GSWnZJp9CwgJH18jVH7MSbBe9eXYGTZzHvJa",
  "key30": "47gdN3dTxBoyPPnQbDjtWQYmLeWc6NevzXD81t48MUQYfHdPjsTD3crbwTktdKahVpAWfZkgVDk2GLzBKdGm3GDD",
  "key31": "5rUNYeRk6Q1b6frTJqGtUHva9cF7M2cbQv4o5zcoVQwx8Cnz5GZUzswG6qY8zHrNvbbCQoRVcXKeprKeFmsQddz7",
  "key32": "3iPaumv9xiweP6JNmBnUdK3e9ZVQQ2pRb47SfdvFo8bkQDuDRAfNtV9UtzS3rpprJo8HWf1KR3wXYhMAbqaGvB1h",
  "key33": "5eKSoB9nYGGoZWCwbnF55w1rcH3vtEvCatoroTQmCLcNRNeUeokyryrAPND6dL61HG82ot7tPm1GSLHn9z5iEctU",
  "key34": "3o8djTcG72prgPUwB5kGran8Af6DxuchaAgALF7Q72oBd6jxRG8dpXfhR8TTGBUeRLbA3b81U7WWcTzUzEggkbkJ",
  "key35": "5G3DK9JF7iEVqJjTJJUNPpRr2eeNftnKVyjR1oFftEYWVAgTkxCctUjiukowq3g4MvHR1gteoF8kj2wDmFoB5iVo",
  "key36": "FwH2nuF2tLTEbkCAkh1fy9atqFr892hHDGikSaPtLqcKBi3AbyHiwXbLixPZLNdfjrWYAwgJctNJ65jUzUZrBUh",
  "key37": "2UqViWWgFqrt4WkoiH86X5enx7ci2nzsWSTEXsVrMEh2LvdeEXptmzY5R7nX3BLVHERWnkBJThUu9DDhE9QtLFUz",
  "key38": "5EPoMTPQgeYzdXihNqNPh4pT2nNio5NBnWgU5kxqNb2wYWt21hYzsPjFgibhFU2gR9Aspu5bhRibmTGztwLUAEiS",
  "key39": "65gt66SewZAy5L92gupf3Le2LK9HC2EZpgp1vmF4EqXFYe62DbYT2hgdCv23FBRB6kFENv3LviYpBEQxdzVAKNxG",
  "key40": "3GxKcdzaf2B222QjfuSA2ENnxyZtWmoLzbDsGdAiuwFKLqucV7KfbwScnMgh15j5BypuvAYPK9P2CJXH65MzocNR",
  "key41": "5RFL371GjYA4Cg4fDMR1rRH5KECMA4cFRjzNes2De3992kWZcBhmda4qCcKS2yLgJhipaCudvekH7h2JGf3EiCuN",
  "key42": "3rpRP1SgQiUeffW9GcjLz4cZBTTfLmdYgZZaQHZRxokw23XCcigctg9V7YRyycEDnpaiEBLHggWVGoQaNgmUCqYV",
  "key43": "2hwJp8tURHt4G42xXvhEK2sKLffwE4GKyMHYVAJRLVHR1zCKyAGy97ZAWQQari1xQp12siYxWChP7JWaBqP58wd5",
  "key44": "aWuWHyDY7Qs9Nb72b2YuHMn3MY9TiMr7um5z7xQcdnDi23zZcw1soyYAkJqxyR3fMgv58KgzfrcCtqS1A6JrJRT",
  "key45": "5CgeFMRRWkSwM1kZBcdErawAuCekn91an7yizjEEhq9BEJGpfc6YpnKyCJnavMSc8Uot1MYBJc5JoQdrrUWttsgh",
  "key46": "JUXh9iZzLpPw2DQpg8kcyxQGDSUhjdpdnRTvbztM29XuUYYL5YMfyUfgRNJgF8qojYcnBJ5HHsuKLFtPTTGmHk7",
  "key47": "33cTzG9gg67WtQy5jHPHf8spfCE7TvegbHyZnWCfMAHsZd7AFyRDGrEMEXjsiAQqNSe8bZbdh65hh9ZfofMsDxg6",
  "key48": "zct1VL8kox2ms3M1uARDq9MQEydZdan6UYKFbF7N3Vggm9oQcT33uD55wfmmDX45a17t2Kk2ZvwMfCEGcY23sgN",
  "key49": "3FCnYwaG4Jm1S2CSJjyiFoEpwiNa28JKspAXsCMwZZejnNfvKw7uCV9eNzppwYzqMfPXBSvzEm7fU8CjADMJNzV4"
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
