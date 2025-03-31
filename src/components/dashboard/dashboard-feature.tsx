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
    "4vusjYjpu8JKuqoM423kKDwUCLiHQaaK7FqqPX5Li5tTDbpY8rb32oHKWeK1KFdu2Gkz641Nm5XDBPeeG6ukb1wo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W5yZfG3QaE15HQk6yZpq9AGRhXkiZz6bU5ZP59q9PuahzhmzSC8nWgQxEojdf3hV1dVgtEEypCWxx3Nw94PbFM9",
  "key1": "4Eg1t68CbubnN2AEkNEQUPcUi9TtSASRS4FNZANaCiQhAUtUJupRaznCeg9wjkXqi5dZtzoTFRT9UKhMUhdbm3WL",
  "key2": "5Szi7g6dRy11um8quqdYQocuuqx5zj7Vgad1cTqkkfV7HXZZcwoann2ytcdZLrB5fDgDj4NVCoQ4VsL8aNpWC324",
  "key3": "2PvSiKXVmbRReDvsr8n37evbHc8Rz2e8s9V2EKKTbwjggHyZoX3oUv39qdtZFDhzugFiRFXUF7YRsCUu26vUigdq",
  "key4": "5oj4yCKnz1rx9yrk2aMoBdApzESCn7FtVA2c38S7HK5i3MMNpctFMtrM2FkWNDjYzPkGS9CUUAkA1yPP4LW6KkZ6",
  "key5": "56M7nBpup7PYUdepqjcTsKSVE5EYwYN9UexoFSaT3vaYKWt23Wp6XpkUrzRbtoauPuTmLrUWeSWvarpSJErLdd1W",
  "key6": "5GRqTpBqQqyQRBBSdq7zpoposuc5oEgwbkCEDoJRC9BWwK9W3M6XfnGhvPcw3Bi7FDknYibJGui6evm8XEKBC4YL",
  "key7": "2oXwXz4hvvmY5XLZ6tw7buU9zMYSJigyTQyUaYX4J5iKFQfcK3gM9ouMjLf18MfSZXFJrkTLuquqJPV6S8K5xawr",
  "key8": "46Kfp3gRTZAJR5SkBEmSeRL3kKJDYgFoDTHUPXVSvygkwR2HZ8SLfF5wygQ4eVRGLy6PwmxUNeZdYTytzN4kXr2R",
  "key9": "632mARdgrQqAQzbnddo1trnbXjnWzrPUa2N6Jon1EPWwmhZGpSWXkJgcF354U5JtLuKgTa1tohGcm1sJRrAFgR6B",
  "key10": "5iPJFsSCs2FZmyWrtxRXHjg5ihsziNeBsME8Wk1UZjBxS5oWLECy5jy2CQJ2pvCkqjmVQC6hvgGRGPpyWFDBeWKv",
  "key11": "2WzE1aoYtzv6yBi5YDEy7a3sTWDJAK2DNdXUj7SBkNejQurrQ8hqtuLV3xRxzJzgUBy8u5KSX3aa8rNs6N33DFo",
  "key12": "3hwTJkmNekwBwEwqRP5ShgycVmAcZNsW7iQ7W8qDVwB6Ek5fAMhQapCZxcmKjgpUpdLrPZpPyqJgEuQFhYzMo7zF",
  "key13": "4cJk36D449snkRTcoSUhg8MXNhG9P7FQgHbxFKCi8riqFoPidUAwvGwGYCZffxTnWTuk1YPaqeA9moPjNgzrHg5j",
  "key14": "5KZCWJ1TLBU6mzk5iG21GKzGTt19Uac4scXyQpEUzVPuviFUynrqm2njoZHKj6ZAP6WbyLozVzCgGfs4PFkfSbiv",
  "key15": "3xmmEoNLM4iRJxg3UH2JKP4qoz9j7aAog6pZpisJ8ScYk7Wn2jdPyakpqy52X9bptwZZqExUFdJwq6ur7tMJYPkg",
  "key16": "5WUUA8wmPpKFtwe8Q8QrDbQM3u6FUEBZSa4qmJYdkcrG6pUsZsRpD9JkL4TUP8hC7L8t8o833gcuApqKDbLZEQ2Y",
  "key17": "4dJN9wBhk34ZenNdLxszJocWuPuN8C2N8F1jBmfd1z538WurtuVbTcnYCgPwqt8Gc94LP2C15j5tJN8ZavSKwMrV",
  "key18": "5C6MrN8A6ZoPBuN91Uj4ifvhMmgW7oiw87cKdtz49SMtxFNSwHMkRddAotQRPupHqZ4aqFNSPETpCD7CLa2kdTzz",
  "key19": "5yvk3jofoVCV5pKEMn8eLyCZc6KbUrH3VWMgUr4K67ueNMcgumKPbTmVL9s5YCYUav7gQW3E2PsJF33N9GW3fAL2",
  "key20": "4HoD8myKm9hDxxD4kCJzCsfipWqWXBtR9AXM9D1esCkPNer5rs96rLChH2CRbMkUzSVeZWsprEBVHj88ETuAJTQ8",
  "key21": "5sVihgWNYYUiJZ88YD2h7eW4idwWoDki5SRFZxZQVNEUPPMq8c71aQjaNZCZH4QJTvY1ijvc4DPhXRAjKDrdxt6K",
  "key22": "3uFsYj9YZmAAY9pDCaKZuosofCuAckoLrW4RLuRR8cVqGrdvpKMXXoN1fbiu8oxYgwQanqqMfpdWPakBBFzYr7wK",
  "key23": "4JBz1aPmU13NYnxndLq2CsFuwYg1NbhVzsu4zbcZuWN7mqzUj7BnCissashmVeBM7oqR78fmFzAU43EgCC4yfEZR",
  "key24": "2KUYxsfyw2zJX24Ce5hMRQUGZ5n2bsa8wR9f46icsWBu7aWubrgbHf9ykugX55QCJ9e4dEhodZt7FXnxZJHLe2pR",
  "key25": "9KApuYB959szN5YjyEwhF7Cryrw6SMtfTGzFHzL8dXiPC3cfNdwi29xwYRRFxsYeUR7aGpRNiB63KsN15UqSCgB",
  "key26": "5wDo5EGDrc6aMKn7LAiz8RHL9x28oe1jjhKMUT5HgGWRUdqSiz4tcvKzLYj7fejNd6xQH6njeZ8wQrDzNPxFfnQz",
  "key27": "s1P7MdEtEoSZpdjrERqCEBU5RWSRpcieoxWMyA7TNqVVexEtXPGmQSmQEt7vryDAd1waooxSzHcc4f2ohTqk1jt",
  "key28": "uDHscrwBWDjWfUys4TXA7cnj1qojw5BCbfqUX8UG9Liv3KKk9c8kYFZKo1ik6DryZ59in6xkFLf7WKdmjyfWUcF",
  "key29": "3MhBReXhBTWEjZdaWMxfeRUwQPBQV2FShsv7nW6oa5epERz9dXhTTarqYoutAXuhnQpX6u93b93aM3Eo64WFZrZH",
  "key30": "21i1ZpKvwJsd2CauGr3FgRF3PiB63GvNQUyYj8DFgjYrk891u2GD9bTEki8cmcNi13EtfxpBdWNWhcosfbM1uA4F",
  "key31": "59qs2suKobmvuQy8Qs9MYdjoXBKjbJUYR28yhrxyDrV3wQaoVc29bxueRreTBXAHqAAUgcW3mAP5mDiGKd3GxuTZ",
  "key32": "4bbpUG5uktk2RYZoshkwuzYzKrxS36HG4Vy3Po767q4ApKiApRxQ92FdwX29XNK9SEW63aGXvn4CfkJQEpVBp7W1",
  "key33": "3MHtUxpCCYvFGaTVp1x9bQs7ngvYBKgjm9zADh4UG7aHSkMz7qtaJQGRrywmiHsNeKPBtbqHuZh78LzzhBwBYFKb",
  "key34": "5fTBfoL7zPVm8eUWa5gkhiN6XNjMmnrrChRFjbJzWZMGtXcSCaoxkMyqcFeDYSgEc9WTeDhN3cubgMHmVFcLhf18",
  "key35": "4UXNxfwE1WxyoHu4my7PM4jwbpZfdeKHUe3Ji4eTVBusN7c4BdRJZDVxN1r7eeyGz91jR5EJmhYAGCPBDjnvu47p",
  "key36": "5oMrQKNAxiNVRcuXkE7vX5y1anW9mUiFE4wCCf3mi31bYHz9n6ibHRjnufYo79TnbdXyxbE1nFgpryf2ppU4YrVV",
  "key37": "vTLQJkHs5FuMqAKFdsoRZWpiUwXYaTKLoY4kUohpR55CfXn2bQvdXintiFL8o1ZZMZ9e3oquwGwxfGccWxr45kQ",
  "key38": "2Ju7Zzdwp4MBXJwFhKnNqtYDXax1DzvY3bUe8on8Kbz3hXvJBTkH8HaMSoKiVq35rAzDvczYznkp6U7axuozd6Vu",
  "key39": "4eJ2YBGskmtDoCC9eZXGuho1bU3BwQMNfDtRtvWwDbzcMVQhWLX6S2bUam1CV92cXNCEfsCMhRFEkkhq9ibuSgrd",
  "key40": "3u2R2c3tTRSYuGGz4B53qWQDGzRMT4x7AqeT1MzNCttefjf4997dcS6m8XdAMcTnzcxTY7keKPC5UuTJBq1qW5zw",
  "key41": "5n38JW334EXHhA31E3mUtw1Yna3mgu4anLfxYvrvgPLKESmRdwiJMdVdh5n16GBEWo2vmfaXGFx1syybmcHhjPK9",
  "key42": "4MNApsdwh5f647Jvv92ZyrGUZQkbRNcGM5fNhHGYUsqbzKxFj6QgCtNKfziHfAXrbtZKqnqk6HPDdkdnrRzuzmGY",
  "key43": "m1k89sCRYoZvFfDxAMnTovvg8Pquyjju1T3HBi8XjcziLnL5dfbquWJZRYifX39ZNYY9o1L7s4nmaCjY13mj7TQ",
  "key44": "4H5eABfiFBoKK6zgtg69Nn7TBcPoi1QsQhUvARK8djxxCCHU1XzyAGgozKEkn48Mwg8mjnTvG7HWX8kVhJpRinHF",
  "key45": "9hDvh8emroPDDkTZwPA8qSkGuxFXjAq2XGWYbUYK9vT3sifXYHLkwUxkwTj9gmvUy7xNUpUwufYmwrYBXKSD5Vz",
  "key46": "64STCzjRBQFoC84BGvVxPRGspxZ8Z5iXhWQK8KGXVVv2PSZL55GWu3JCZAYTbNkj4CvPzVohvrvDUyU2Foxc5LEr",
  "key47": "4wuBKTY3396CfLwb99pjRrDvXb4qfSAtnjwKDYUGbJpzbyz7z7hY6Ex9krK9qHEB6FK6x4W9WPbAL5zm8Laffgih",
  "key48": "55FEsus9j2poXqzABBEmEte8mwavQjb2NDnSCMSF9MF3JpD7Mux1BTznrj1fC6FdP4yXqKRi7bH5dXK1kC9TY6sL"
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
