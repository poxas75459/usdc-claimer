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
    "57aL6zp3V4eRyJxwV9wxhgvNSddgjRqz5a5RNKwjq8mgQMNG5kLzdbP7EdvSAqJwXjQtrfGjTzUZgNBfPpwmeu1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hh5CW2iwC1L7tAsSsJGFY3MeWrZjP4N2Au36YPdJDgaB9hP34MNwCPH17fnifCP6nExUF1TqhBziJAhgaiqyx6y",
  "key1": "WH7kC4yFT8hS9vocv9PahQFvgG5FYc6XKdQHP6NZrFpGAUi6Qt5S2BXjgRcz85oCJL3h1rBWmZ6NjHmk5nLXKcK",
  "key2": "2Aogy4WQZVcJUbmXeNVVjACgu3sr275YqZ8FNiDLBqtSrkUYxcY4ZsQbXUhYi8UX5v82CYCnaZGKmD49M5VZMrvR",
  "key3": "xjLdvja6HVEDzDwmtUiigCeKaDiutkmJYLteAY2YsCGySnaaWn5Ts95tTBUahr1DKE4vs5WBU9HdyG1qG7wnrGi",
  "key4": "5nGvdTx88J6hsvMDKz4UFiJ5K3p1GRRWG7w8aHX9xfh9tvonXiKhk8Hz2tJh9noqaiFtFuVBy4KU2pgCTLnACXwZ",
  "key5": "4BTfAvXorvFKgauhotmXzaLhoYgxJTCs1xxjLGvmGA7k8cqwD3i9sjUT3KBfjduCje6KGK8hyuS7sb5Wj2wv7svF",
  "key6": "45bzafuj6riDU7t8KYot71QBxN7cJw8cqBT5qfQ86D46eVnageXbhY6tNH6VTVtxLhnXuhqgP9NVwoLVZawEnMsX",
  "key7": "3t3vsuHemQZ6WByzb4QWvBiMXiANuRZgqn1ttVBBQqd8aPz4JRAjyVpGoCwytWQ788WtkaYz2TPQzGbtxMRD3z1F",
  "key8": "rbR4XFFuU2Z9NfA9VKm6cZnCD4nu3wpr4XHqNv5ga5rL7k3bMEBx1HAP5NJU3rKCvp6nvK2CqgYSC4LzJPWbmYk",
  "key9": "2dfzW5b7e2Z6rEeKcBQCSqQMsS12fHEmkkkesXFHHRmvDD8zSAim5rdnYNqQjEJVY1xFJuqGU2hgDvWiD5WHj2E6",
  "key10": "Lt3KkAYgD8UbwiM1dwcoW3CPKnuPR9hseF6QjRRbc66m3DbF4tRCeEd1KStMphoowaectzQFatMR7ms2FX1xnHX",
  "key11": "5VswBFU3G3PJ2KsVijW1125LE3bNeXaFn9HZtWahd8zN8jPkDEmanDwHDrJd4SUJxXa9u1yWSp2gkAiaLBzC8kMD",
  "key12": "2hQWefRCfVeL9qFQWXi3AfCi7NgBTJQjWuLhMWaJC1mvLdnpQTYmugBZ5AcpQAbPwaeFVSQ8fxMxeQpq9xu12h98",
  "key13": "4rr76hrMLrqWUPut2wEptHJtTLZNhp2JqGoFuCmWRo8ezQVdyXMsskacCA2FgTJfQSWwesxMjgtT3uS5YQs9exNe",
  "key14": "58hDKmjfcHih5LrYzRjFkZVdfqC8gNpZNVnbCzDS9vAR1KzcFA1Ta8qhVXdsfS8P1vXb4szigeQ3M8dgkFC61J34",
  "key15": "2aeTzAAMQovgD3AqdNyQALV2qNx5VjnHVV1r2oygSyoqMqQdKwRLatwcaFwGwPS34witTcxm8DWR7gkuukQ9NbBe",
  "key16": "4HhxHoqqMXtMWAWh6PVJtx9BzwrrfTF618arneawPUV942d76mwEbtJbGZXk5c7SRJkkYXAftXiL8cjNqSX3R75u",
  "key17": "5zbCs3ot86Sw24A48adV5BTcWt4EjT5hYgjAUAjTUdNP7cphy92jhsnqPFqTJk5MxWkD7oxLKvp2iTn39vUuzYFS",
  "key18": "57iENP4cyj2x52SbkwhCBwV8FqnkKKjzBcwGmJhUmJnKEKTgCnqC6wwyPvV7hoWDCsd3CKTK8qnBfvJfxu5fd6vF",
  "key19": "4i14daCFPK4jxx8cWwzfJZ1YTGno1fG6JB9bNnqFVJ65DTS9got9MLPSVibysqycmiuTxNngcEGah5BtQPwCUWwJ",
  "key20": "4NEHnAfQ1hbZ5a5bMHYDpU1CfoEf9w9R3CgvPsRndbmaW7rrUQPz1GAn7TU59qgmhbrqrNuDVanPmAxzRnpBmUkr",
  "key21": "3jghdq2HNyirFA3fyEikwup1Qcvrnc4Mh8dt9x43AuEBkfq8xvd2oNe15TtYMJVd5rPUPYQVGK9gC915kBUKbjJq",
  "key22": "2oTgdgu1VAHvcG9bxW8CFLJfet2qYrRDqD7Mtqj785gYUuhXn64bs6hDYupW8k4SBBRKztbVypxu5rPXpfHJSsLG",
  "key23": "2cccbr1JrjJF9AeCikTTgMkqjsUdQYsWUMYtMBGBTLgS294csXPZWf6ugJQ664E9iG8vjdEt1WByQUP1g2zTXvJi",
  "key24": "Ujq18x1xuo1RJYSyT7zyWSm8dbBsX8ZocSwDDPEasgJ28xQMn3xFABjvppvr4hSqDiMpHT2D6rAYixWxKites4w",
  "key25": "38497DtC9RJGKtpsLnGZeGp7JwPo6K74TAN2PvsrgcVNWQkWDYFNLajVxTshnAwG3tDuvZziZgD1xHrjD3amuhit",
  "key26": "3bgQoA8Q7qkh62iLa3JdnVinzAZvvRNVcEcjV88w6taugq1rxzqimNFHtEA8cdZQs8Mg2Lurd2KpY9BJuxG15kDz",
  "key27": "5oMStqm9vtqPbZNH7BmxiuBqE3oxTvTECdSq29vLww1Uegw6CdnSKWjszXTzbHPdYfEFiFGJnMSRSFAwBxU4e5kb",
  "key28": "2YoxDxFdR9CmubvbQk8LP2F595v5fjtKzeEPSxTVizToMfv3eAABkGtwzA9XHfETVHf7FQVYm272811Ezrr1J1hy",
  "key29": "2GXan9X8ky1MUtYKNg4937fwJEaxCcre9C3aMvnFQ2xxjqBmRn4WoE3RNSf5US1JmnVphvL4nYbvudxeBoRP7sH",
  "key30": "HuxvhCqn6p1oescqAXuAkosDT7wkKPikGzEJPscyjvRTsV4JLbiLYmcwKRzqkR65zA1N8sejpUPmt6FKmssgY7d",
  "key31": "57gqvrRsTaJi4fNJs1Pkp1GXofzwjYjJT54Aj3WuM4QV2cnceVi59LBkUMMuZznsLepaABr1ZCN5RREpv89bpjF6",
  "key32": "5rW1cvfFFyrM76ZTcHMEWimur7vdERaXDajov1ZuwFuu28La21xcmFvMt4DcdUQGJYykJtLZeAZDY4j6MsngM74m",
  "key33": "5GUwAr7V3PGE4N469xdybbwPo9X6fUXr3ymDrPHtY3aoCKs9FL8ykSC1TuP5e1rjLvA5zn3cZuPVpSUZzQv9GLf8",
  "key34": "49jZW2pypRvLvvDFmKM68ucuzgzvcrZZerJjAqVynpX6yj5niUyRZiFk8uQ76MbTYsmGAETZi4tQSBdxmpLfSNsP",
  "key35": "2vbFyUmhnsdXgdyEpgktnMNu8zvyNRAsHBybhP9BaYGa38U9beRg8FHdYCY7uVoKzGcgqEKuoUEoBr7GfsnEbCJy",
  "key36": "4rgST4AHtkEbh8Fk69iicXAJCKUCimHEf9Xu1FZPGGZRBngYSWmx9xnTbA15eXaHyLYrf9YnGvHpFpF6jjiBPuJg",
  "key37": "2XtuQWKSBVxP1nZtDANSBwqegpxg4ZNCpsBoD5qHgYSzX2LiTDGnZg6btGR7iZGNJQVKnAfBVsRJSDt3J2NrNpbC",
  "key38": "3inBEKJVqNfYupPd4v1Amux3Sq4EHP4yzctntxAVdjNPtscXaFvRH5fMmTzpvZEgu9UcV9NECaE2mGzzHh6GaJ6n",
  "key39": "yZxHnnhpy7jT39iAdjJazc8WgoQqWsURwgg2gss9nQNGdNYumuCJBz4Rd3kUmwhJjwMN4wz6ypdUheR72svw3Bm",
  "key40": "TJjuNuVvfPRtfkQRgb1ojFVkK2Sr4EVwpHUbdGXumMS6Xb2FKqfz8kaQxzyyixNTKWYnFAXgZ9mFCnzwVj7WJiA",
  "key41": "2xnDJgzVPdak5vHMvaLG8ykt5jWdVpxCJ6Ujf8CQbGRxeQJGG5kP1eP8FNNp6duMzXgq5PmucHAB9VuGVrccZ3ER",
  "key42": "5j3heBmz5imqXHZhDSKkwBx2NAqZtgdxaW5cgC2M83Dx5vKT5jQA2zXCPnMbV7v5svT1csEeUGEUPaN4zmHsgSEa",
  "key43": "57nKFohYxj3GrDPJ4AiRWoSQMbaqYkEAiY32aqfweV3iP7ZhQRoT7mZu6YoiWaqZb2ikSAeovqUM3M7LXNLPchdV",
  "key44": "5JLvrHhjnUvAaeABxpd2Wz6vT2wJoJENgP1S9kGio2vza1TMh1HzC41ksDZHPjQZmmPnJsotFxknBA1TgwPLFDgG",
  "key45": "3gVczKdGM2PFqTtm2ChBPyEwNivGoqw75Ei1gA4YKE47rdZ96DDNpuPU6HiNJmPnnadWQSopQMpvMG7heGfHfYCg",
  "key46": "4KnNEWE4RCNHgaGbC13SvWASKMqLWUBwcYYytgc2gPNRKvBZtMoP8PBHng1LNABUALi8ZB5h7VuNnFSgFbT4Tddi",
  "key47": "5hdBixwePTMaU8ys31aHbYCjnHSMjax8sDVE4qwf1p9TBNq8RbbPVsXZnG7tcdbe2RbLypuzbJGfAyzkJFB4cukd"
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
