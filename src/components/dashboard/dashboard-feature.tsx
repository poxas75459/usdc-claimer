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
    "3V6ojkYC5Ru7GFRCEJkVPgArgUtJYwSKv4VPVZCdzUwJFJHsLa2p2y8xF5WkRfc4tGtw7MGc87crWaboojbVGnwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fcKtSmERau78StdnZSiTLN7k7njvXdnF4euBRUy5PQDWiAimCvwwBmjQTua3qLdxHvGuXTVM1JsEzMzmMZbbws1",
  "key1": "2cP8oe845y1wXY94qZmrYdyW8qz8JremJdRKAGRoMtjzNrBhKbkDRkfcdJQp6Hd9vUxsB2aCWZVUQ7yKj5WT4WnX",
  "key2": "HHScsRa4CaHUVWLaWF1GVaxYZkfN3LoGNyQEDbbdPs8k3QjAq6N32F1HBSoU36Zr2UV5Q3Fz2Ls3vfmeSkqzjRe",
  "key3": "4nEv6aeZaREJvDLxsWmKdhLANagd6qvXQxE1vZKoZTPC8fbc24XPs1Q3ePVPyeZw4BvGR3Gwaw3QBUhH5jBAyCeB",
  "key4": "2ksNuCtRwdGc6xCQvk5ydC9t7tAmYKQ9Enp4QmnGRAK3kBqJoctFxSAsxYc9HYmVyzQaG8xMfXnUNSV1oLLVYgs9",
  "key5": "4vYbkvE4cqZjGtmYFo6qEH9F8oDxbzLXhNGE5xRTnNMRtaJFC6athtZRtYdaBWKec3DjaAhFt15mLVVGdktTHVqF",
  "key6": "3fBm7HSpXZymUSnFtWY7PWzXhRZvvSgQcDLrqTaqXGon1TRprn52QYgEA9XxpVS1Zen7shiPQ3ECKEk9g5mtUfKa",
  "key7": "4MhdXGuEtBD3ns3tPa3DWjYxK2JkRPsxDVrBmRyGFxsWAcG8PVfPqZAx5Wiv3jtRJqHka5TSNAJKcw6nWEEzdw8t",
  "key8": "5CKsbKReUGUMR8HxSGCBxk9oGnDnPNHPP1aNXWt6xHUCV6bDPzatnu5GFEwkSftEzv2m1vDzQxLfzNkj7QWCc9H",
  "key9": "23KBR3PTPN668qf3qqq3UHq4B1XrNzuebUXCDRjw7g4yEvzptZC9LVgRmZVgQuJW2YcpRtZimEv7JKyCyEKAebwh",
  "key10": "4T7yG6fkkWMjgJEAjwwMQgR9qHdxpxkCwrrTRxUmT4eeFLjPnHJTSGni6zFHzXcRM8An1DMmVus1sSWNPcSRcH6q",
  "key11": "VV7qbKUAYmD3oe8k7DVVEGm5z37SJzzdc87qm1XdSsGWvyqFLcpSZHD5jg13EsuqNxHa944VPeNZB2hacAx22Cm",
  "key12": "37XfH7p8YV1N4jPe3k17gn3cvfzyhrFpvC1sWGe8o3neD4sMbNUdVd66kzww46UkiEfXdn7cXEGrQAQrDGpz1mQt",
  "key13": "2A6oW5atu4cDNjiir3XSecy9z4hotyE5BKF89ZMANMU1Nodo82d5agtesfUzqiE2hdqu7MHFnnL9PJ8XakMgwS8U",
  "key14": "Rve843tWYgkbkhq44CS8pvViMsmYNFJvY9FaGKc2bhJN5LBSXisCgX3wR92dWxdBjXWSASKRH2JLEjnMMd2ChsT",
  "key15": "FxsLWzsJmQUDya272DUPgH8har9iUw9bmzoiH6A6Zbm9nJJJzYnGNYXAANrqbYDZaNsEpoN6BeLLUa6JDb79NrW",
  "key16": "2279xbzG4VYBawZ5cZrJeoFuuqwQjtKh8LTru1b1fPvPjiKRbG64dMqwFfDwXavKiHAc6Tab5eredW3WSosQTApC",
  "key17": "5LZxnHFZpKS1FJUmCJCxVzrY7ZJvE9qKaM3EZeSNakcEwXvqJzqLiEovDiSX4jQos8ApSU6Ddfm52ku77vYCgnWo",
  "key18": "3pywjJqtkQv7kuYJa8fJcR7uKignNfwcsxKvTJwjXeUEoRo6yk7psw1NqJXGXE8nGEu5YKTMXVw9FEePGp9hXcQU",
  "key19": "cLPVqeQUxoTmjkcJo8cmFriQHqR9DuGg1biV5rpuTUNZw3j3MjPK9gCZF41T5QEeGSRaZNjE4MK3cgqQfEUUmrk",
  "key20": "4dYNYgKy4QgsXiYG7RDAnPJuNiRH84ejZGWfFcV59KD16T8Yw66vK9zEiHyWMMVy5nSgh7S4uSxw5fwymnmy1Smo",
  "key21": "59rNbJxoQXjqaxoBANJmM1SsF7xxfwecQJrFwqa8MpcB6pRVC9sZVDtHbge55SWa3j8kXxDHP7Euh41xXMFUmFuC",
  "key22": "GYX3yHvyWAtyGNKrA6YS5a9WadvD89hKd46VWgSEAb98W7EyVNWH31u1v6YWxGCavoaC26xFE5HRZ84mZMVBbxR",
  "key23": "5oa3SERHYdtGTQ3zLzvcmVgSV14Hsc2vWpLxrj1h4RZwNDaiHZdvBCrR99JZ39CmXkjfDaeoSyXpdySobRiLzc1L",
  "key24": "SwUSCuvzxf3V4Bv9XMBBoBXkKMpQu7bSRp7pb5ESYKXnr5RJV29idKVtkn7NmTSHm6b89RqC7roHhZV6NGpRey6",
  "key25": "3kEkF9fNgQKuo5JbPDES8ZgDSCi1NWd6SFFbCiiScnrCTMchP2378K2crPSm2UkQmoD52jS4K6Z7HBo35K7iH362",
  "key26": "59ERUm88CW3RR91VWEkZ3nGdwhHAZyJbHqv6iVHWqVx8FgR3FadsTeEi8CxuovaLfH1egFBMyNNQ4EKLUWPkZwKm",
  "key27": "5tpPT41DApVKvWwvAS3McnnXKs7tKFKbw7WCpGSaBwxQvHWRf3q3FXpYpu61xDxeGU2Te8L3hkXpPBrk2fdSuw1n",
  "key28": "FtaUW3EcenDQEBnJPrzKwCghnZsSAd2x1KeU5rRKopzRUbJptMjRohNF8BE3HCaD7FM897GWEZuvjdktrf7JLZe",
  "key29": "3gvf9LK7bZNHbpo78LLs6NzHSMMTKEuCKZ1UanDqvAo25gCKA9fgPn9GFtfuAsCjEK2Mxns2bwnXG2516Uvm6SY2",
  "key30": "2h417qSJMC1SAnAVmwGP5emA333ao16eorA334W7d3jWtHBggrCZhCUbX3Q6GXXpbvnKu8NbTYPhWD5or6Quc9RU",
  "key31": "26Xrc2LcFxKkKYNMFnzS5jBBwj8NkzNVxYxhEt66wA41pd6w4rMNfzY9LWaevhU7Kn1Vk1AB85AwJkUbSu5C7zvq",
  "key32": "5wPuCE2xuv4JvPWp28qD3ZkLwWdQtFDaY67JY96NUi2862WVqJ5YWFFy7hNWkMHqBi4M83BfFxkZqpi2q4jknZPv",
  "key33": "5KmiGdhsrq5tRowAcAPMkXQi12tJeG3APsY7hTQRYC3SSZzbxYsUNaBPyJLesCaCCydxExQ2H7j36UE4wkgiMuRv",
  "key34": "3dxE612MwbztevkuhPxWXgKgCyGW96LmDNTTRHh8VYq51JzohGzAajD1oPiM5m83yArczN9opnziru8K6BVREBFX",
  "key35": "5eeQre78guEb8yCtXpwEUW8fhUVkFKnRsNav2ETBjfCf9dZE3L3oKAGtG8f8ARrqbAwJ2jJBMVFvBkzk8qsh7z9d",
  "key36": "4EaZxV12RV6HimuXaWzv7xwxsx8yhBKxVnQkRoxcVEi2jf5rYQDV6p8R3xGhpkQXLMBiN74GkDL9vCk4cCJAHZw4",
  "key37": "2tGQUmvnRXZgbTqfmCyTafM7gXG9JSh75Y1inX3NJyvZKLjHMWEnAESyApymaymiopm68r9bEFzBEqKbi2mWzhcw",
  "key38": "3KxHUhXmDuFU2aevzoTdjyTMY7mYMPYc2TFfKUhqGLoayvnGAXLhbUqh7gDffB4w9t5SJ2muQpJUmWs2bBhZUc9P",
  "key39": "27Upt8KTWnmCS4PjMHdgsFFdc1AEBVuGJRvGpWzmNu1zTixe8F2t73RuxFznhjiYNRR9NqUFhkhx71LZSNp2KnVj",
  "key40": "3FNVxvPb2o5yHSaDuE2Q6eekFjA3tvP5E4t5nKbsBqdmpyzsVRswmVU8HccBLvEbuUWfD22hrTs8LYoaMwnhdo5Z",
  "key41": "2UY7tmcfWnARyDvRqDYuVzMyFYemFoyk3ncC54eg9UZts2HGr7zCcZv5EZYfkd9gUQQnFynbh8fbxiGpdz3Wqq2G",
  "key42": "2JdPeYQUSx1sgmXbxQWCoWPKVRBRP25ehmwc5FAJAYAbdMQ3s3wmGh2WD3jjWRJRD3pmTjZaW6q6C6Z6kW5Dkojc",
  "key43": "5d9qakkfqCnHPG1XQtNYX5KFZwHmgGQU3Ji8ULyw62bC9o77z9PcALwbALKXmgsuLZHXhu5pz2N761n1fhk3QGq",
  "key44": "57eRyu5FPcJ6cMFfutWYMDdSpkfG4JWEXicykBsvWwBczTmF8g3UTsDZbkXkiAyYe3anyNYDWFYYPKYyiPN3tvpY",
  "key45": "EhykEx7VprxLTUKuZzsqhbcHbkRcnMRjLeQB4y9LjqKGdSCTcqLmUwSkGoYCnLLQZuzE9fznS6i8camKB7YT1hd",
  "key46": "Jdjb1wUdTFfegCSz1dto4mWtGcwrJcrPoAXP16Xh9aKd7NCtZqpdWqwgXvNSkjpukFr1Hv6LKJnWYdLkBWApPgm",
  "key47": "5xNCK8BG2UPRVHEdvMsVq4Ti2oDqfqNsbPaqxZYpT2cNsws5wKnjsLXcgjPrx4sKWTs1VMUvz5bPrfEpBavoXGZx"
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
