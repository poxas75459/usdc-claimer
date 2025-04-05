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
    "3C9eAyzTvzEE4Y6r4KabBPFNwq8GyjfJjiSfmmDdYUqjK5d1x1uFEk5VBxMoVMHYBq3n6Q883eDbsApd1Z26vyPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kooG3aipBMa6DMxPaFh2Cbvvdrw1C3pxKiMFDXsAoUfEkDYfqEDxTa2UAfzkUXDJ5Z2H1orLCRgFQUzqY5i3LGX",
  "key1": "2M3kk8JfBuu2EmXpt9jrndaNWaG8HbZBsF73JPib9rDEdgYSayssw7PM7BB5pn88tAK72zFp2Z1zTcavHL3sSsHh",
  "key2": "4w75mVeFQ7zddqBxM3kZGLkhznSH8yjFw6NEmomKcmRxVKUBbJCQRUNZL3nFAmh9z2et55TGdNMx6mQaKdtfAYa2",
  "key3": "2Y61dTtLPtjrzAighAADeCeNnnYkjGWfQSXyR2nDAoFaFDU544EvDUH6aT2jBMj5JM4o6PoRqVjQaLBr23Yoi9sm",
  "key4": "Jpa3XWw6dTgKW7WTpRCD9QG9KXnXoUg7iKmR5yi9rN8WuuW9yibhS9XucTLR9ZQXgAtiq59CHGrfWXm7Y7zfM2X",
  "key5": "4pxSLCwzMx4WirZnDaYjRGFnSpqrxnB1mDi2Pj523P8PQGyyARFFCoStLdTF9oTbVPjGbwz7iowhnNnmx7TPf8Ko",
  "key6": "2RbNtom3NnZLWnXZyDYT6HjyrpnHo5bEZ8zWat8xGRk95mjwEqeQDvDcs7hvcs5BEkKPTzzWsqauztMTH8sdya6d",
  "key7": "3i4AP7TpY3k1K8TkwYLkNw6oHHafXNWsuFUTrrkUoPxXhHp9DBonL2AvZsV3Zr7wxRLqfABWGmzVASYV6L7dKZFw",
  "key8": "4ypory13y11A2iXvUHBjsFLBFEr7yeyNuNBFjQJ3pDvgvbJpMHn1iABSaRFm18Po3DW3jkcg2VWscdtp3Tc1zW99",
  "key9": "v93SFNsv2tMaMRrgXCyGsbMZQMxKRszoGuDmD3J7zxrPouhGXri1jWZDiGusuVRYiYJetcYWSbjdjXUMuomSt4x",
  "key10": "2xTg8Bkc5M3xqdTJGPtAVCnZrLbHDGzvLAKTwDr1CoADj3DZ42aC7r7pefJaDcBxdqSynmZooFqSJvrb6iAYpK8v",
  "key11": "5LrTxSakzAYh5igDTbQvUpoEm5Zo3og1PL3dN99nDpyyD2skuu2yL1Z2KBdXCQskqNxc3CRqQQMmxM1iJh3A3dtQ",
  "key12": "4ALe28hqL5UtrzeuqLxBgJr6vkpGkh9LzDXFncVtMqtHYqgAGY2hpFjEtQYGUsDLB8n8LiNC49C1dv1neySzKp7n",
  "key13": "5NEUvxKXST6ied4cKv5NgVvNXDLGggCtYq7ANDLe614TqkSWmdqA2MaTeNihRDJggMMGbSCED27ZHUmMz1KXi7uU",
  "key14": "2JdfC4EMS3C2uDwzVKpp7e52e72c1xTpwMmDCpd5z7kB8t9GzDAhXSaJ8335Zqsxa9odkGFu6FPrLicrAdikLQmh",
  "key15": "2XRcKb6TzVEYWjzPxRQ4gC5xLa9P8pejadhzkpF6NgRbpbPJUUmV49iuT5b1G5yu3NkrCimCwiZqE88AnXtwPJ7a",
  "key16": "4hhFdJ49A47NesSsGTYQKQT8dUnVrWd3ZGAWNF6h4VZ9AZtp3Y3DoF5mvfWTKtTKaxWL3xVLQKdPuG8DeQzDns6W",
  "key17": "5RKmUqwQct3VKDVhZPejJ3yGYH4NvtuYJYAgby5CfRd3HPBBV6x4w9F9UC1WdcqL4egAseR6ASHxB93doA4GYjXc",
  "key18": "qva8i324UvWmSHATZh6Kx4x1nzoe8nDReyM63MsMSio28gfnscm7SQeSRGUx2Z1PCjAGEeUADywa5dYwkkZ2ZNd",
  "key19": "56d3J4oGL4JrewFVdT71kHh3tcMrecD7QHQb7NP3QaPdEN6BUmjFjTySjyLmd8Rvm5WnYjR4C7q7PVD5gEt6ps6M",
  "key20": "2sACeikH6NfNMpms3vCjZXcdh1gWxXtTYTbgFoQnJq6KcMySHSe4JGyjUQVRRPFQh7GmWRf4dLostrKgLbarrgWr",
  "key21": "4nG1tAidqc8rUF15GGHSvAKoJ5K56w2aD8S9ucdZ5GitwJQriPAkmTkqkGdm8uMRPZR2xJfuxt4B2TvWSEuGt9Fn",
  "key22": "65j44fb9pPdBYVeeGwqEnEgPKKCkb48wVVcGNXqtbEMpBLxrZsaS5S2KWC7g9j7gkNPctkfne4N4jU2dc5RBsRpb",
  "key23": "273Zv1fU8HKh9cR7uQT5pdzpeHbsoNYCKFGyVct5euq9iaR52moBwPcYG7vaX16AFr4TkDpGPjL8PmKVp8Xw3wNf",
  "key24": "36ggKHRM94xeGC76ZBXJEVc7WhhmxuNCLMFyL56K1jhADPkvsmUaSKZjE6v5ngRHybnSD9KQEUrGj1ofFbPDWBfR",
  "key25": "62Jfj7qLbY6J4v1Ew2QpujtKgABuGAQYHXDMNJDaKZWCP3ei5oK6wxY9dK99ZNNZvLT7BbCZjYWTHGLHpXRzRjcQ",
  "key26": "3FTzqgQCnNcgK2zWrLRUKB7uzpSHJT8XzjQ8Bov2y9fbpVk9kCxtmsAzoW8m2KntFUC9KiL6ie2UsCzcbPkjcSm3",
  "key27": "53XTbrC8PkPDC6fpeHyc3x2CWykjcoNjDRxfvUQKw1KU9fSbHX6ZsGiiYN71C4KbX1VFUbgNymX1K6nThyQcH7he",
  "key28": "52fywhauzU3oATdse1tkTXbVT2hSH1hKTPE3b3G5Y1QZHiN8kQrv9SkhA5L3KudFvW45pXpPqkqnVZTKZinzSxSd",
  "key29": "vptRWLwPQLuyM4ow7NfEw1to2knZoJRkdVytCYXUE8Hwq5SkKXHAWHWXHVkNbidmKNefGc7CAVLffjeJf4kncoA",
  "key30": "5uFeG7M3mizATfWDRKWvweXNkEtNm2ovMj9B2JEUKRXSz9VF3UraqDT8EmNzBWh3A5BqpvBhfeAsP3FHFog7iSc1",
  "key31": "2o9WsbkkCV4ztFQLd7D7BW3N7Tz9gC3jnWXMFqH5My1879zi13C7oarFvTqVvJHi2HqPnf3kyjJq3bigom5aiGab",
  "key32": "3XH7MUL32THgr3nuLTgFfVLqYPXutVhpizVvVU9pgVJ9rJDuwAvEgtUjWuswNyZqyCeDVRJfCiRAz6ahyk1RctQN",
  "key33": "ogLayG1Pcn6gpgzyUAZEzDPgiRJz9QBGDC3EkYGFyp74REYCWhjGotf7yb6ojACLu2Rw5C9obryd61wzKviK9xM",
  "key34": "5FYojRwBdG7aJybKKVzcuqkHZHSwmtNV4N3h1tn8RvJEZr4JueC2zjsyx54pZDA9wEugMnkrJqAbkRxvJx9DDaSm",
  "key35": "55FJTuea3oevXySbqhehoMzLHptnWWcLbKnzC4o1ScnDJJ5BkLMz2kEc5bsdqGE1tTmMuaJCaFhdFFo4qszerhyn",
  "key36": "4bpS7HuqaYWSvxbJxJUicfgD1qkycqv8bTWVJxYs4EkpU4ntYkyR63fH1zL2eSwkGa36KgzZaeqyKgr7K4XsqVQc",
  "key37": "3ibzwuN1nKx5yMjRFsevNTjjTyv5E6yg7cBsc5GbHw8SjvAPnhFbCM4zA78RAeUBxNT7HSeTGWDwju3qmFXcajzX",
  "key38": "5A9fvoD3i1zUXHimwJzxHFRU1HHYFFYdaYGN3ih83WxihWufCrrLWnM4ibrecyfg9h6KZWzubeYCiGTS8ujiD8fv",
  "key39": "2eX9zrJbQ1EBfEAbBSqt4j5iDpXyKbiV3L668mrbPJ4tMvmQGYiujo9uF1qBw9zCLyubAGjVwYSycGYYPDFfcmme",
  "key40": "g4TVDaitan74zoVCvt8zH1dWyxp1HVFCTCB5v2XEoFptA2sJxrnXHsDBzGJdmzpMwS4QF1a3A6HMowRoaB4Ra8t",
  "key41": "LXt9NtUTyHAp2gjWcDzgxPjL5F2z76rnDobXZtQyzNQKQTM5ZnW8mj8YxoLuJDU533Bb8FvRJiZYS1mXpYMghcp",
  "key42": "3rjJVhnDbd2eoTKm22GBLXKGBPmGJnBygbMxFWvGiUg8bTgtWLsY2wjDg5JH2vikH7tpe2Garp8T6SrGGJyS52UL",
  "key43": "nj3BtSduAvRYkmXUvpBjpVYYNRHBYHo6t897JYFCweLyg3AMs2g1wfTYwMWnDP3NcxmYbJFbHv58o6RmWbTTJdV",
  "key44": "4GWtKZGZaR4PBA5kSUVtmuPdtZokCUpYhBm8sm1n2jVUjdnDcWhvKg3RcUESeGxTFrBZbwT3ntatXaSeZv6FYzGt",
  "key45": "56GC15zDCNEPiQP9pZ4sve5nu73Hdap5NCjVggBo4UAKX6zZQtaZnBAkVKfWVM5hLJQ9Uo9UBLUh1fH3UvMekAhv",
  "key46": "mGz4zswuYCFDuxBy2HUCPt1t5bXKFVWuHzcvgeRDnZi1cUGcFkZvLqd8wMXyraDLZL1hFBCDPgovWrp6sqz8rTm",
  "key47": "4bXcAvCSCajZX67exoJQ4tfdPgwNKgkPaWJdRXEWVGZW8e7bgnCYcddp7Nv6avJpaq7jNdmpSc42VETyLDCyuuYH",
  "key48": "3TTU3iS118qti8m2kxv4mbUg8yc16TTmH1i4L3baWV38KjrFrbDMk3HygNvGTi4CWTgN7p5i4SmzLbUUxr14aUAY"
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
