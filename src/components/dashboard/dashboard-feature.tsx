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
    "4shcvyrawHeKi39wfHRpzhNa5cPCD14qjxwoSeQ5HWrCuQzD8XLiQjXofMrg8ACWFLeJe8AqPhQwvnhNniYjNk95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67EEL6ho5gSaApPonrWQk8nLwgbDPBQz5ffbjmaKTPbT8oXNkuxwpTsSkKpwM7vE9GteAeMZifuhxjrFxrLnFyRQ",
  "key1": "5XtUtAeuBjBAsDaJZ4XrnzV7hE2zcroY82mECJfuJWvDXQmtFgyCR4hZqydnM6YbbSdHYMj4z9CGuJZQtXRACiLt",
  "key2": "jUqR9F39XP8HsQke93VxpcYUEVXHB4fBbYA5FpVwaNABEVq3CZkYFDPBNKkbcQd77fQi5qu6n2U4jNq73QfW3Kc",
  "key3": "5SoumeU3ScsGHnihsXMX5ESqCKbGVjUMKZGVFBJL2yZXqWRiB6vt72iigJo1qBuy4zpdo6YXMX6QPTM8Gv8satbK",
  "key4": "5jqDxQAnjmmnbMHCEzJaSi9BSuu9TbLZdYDDe1jQ6jGcnG1nNZaKAVG2dJzyp9oSqiDuN1knfp2snRYTq4fDT9L1",
  "key5": "5sWMjPxif2itoR4nscfCwGo6RAxdkS44uA9eDxAPmEYaCj2CE9Wig2C3FYs48nMnn5TXcyQL9eg11ZpzSrF1CGHL",
  "key6": "362pd1cA9B1Po3pnofzDGouy6NzrfETCFdhBb1qXeB6xTVCQkC1TwexZLHMgwYHNoLYXeu4K42tLRX3Dn174KVUz",
  "key7": "P3taiG37fKWkD5dsF8cuvY4Xjk96BeUr3HueQK5fm3KLToHfPVtsuHdhNFfsDPf5MyWvJXTr7vLAvDxHfts6iQ1",
  "key8": "35qGuoe78vq3b6JyoR6SQKpAZtKUuRkrxnsR2wwrGvCnfd1W4xG8mEmJsUABBatRjtQJn1RqmWAaukTDn7AHordP",
  "key9": "5dtBTFSz7e4o6qDcHPwQwo3ZSF29Es5TU7nhGqCJ8tdcmGxPdWD3JDnWXiVsWpjYMEW3f6fp2aoN8ZvDKAXkQVsF",
  "key10": "5JaszKmx4HfimdJukdPcsooAF83gH9ZZMpMqD1WhK4bXdYMENdBzqP5Eauc2unU4vDTzghjaHmu5cnDcCcuwh6uF",
  "key11": "41ABQ7GgCfHtdBzWVmf2WnLj2eRm7QrvuxW9MQZKNVyt2kRmuXPtDkyg7Kfd7que8R4TxKmZ17PauZgTJM8jj3PS",
  "key12": "31f5UqfPHXqQLQkUGSw2M1creAGvbk9DRrQykZ5RBJuBU8SnPvSAYK55723WJ8CZ2ogytrzULYKsNQz5BhafYRAB",
  "key13": "WAWCRW86CpZhdZFronYPopgBj86Xpz1KsGct76Zt2PXEAqVZiLHDCJ3VB176qNYk9QFEyeTqhzLThgdy6NuDGnK",
  "key14": "eKxgfqtzU1qeRypD3mXHd8pxBbxty66WA3i3XsC4VxcfU2tNRpFjHCkVUTnJBsnErgFmGdX7JpBS4eEW6nXteUp",
  "key15": "21jgiVvRQ5noNcpHT4vdXQZrcapSAwCSA5LUQoVT32xD2sZ5TcTFVWfNr8MZEkAFbrgfxMf6NgYqE7yYUhqKGvbU",
  "key16": "3PPV5dmqs3pqBwgK5ctik2ZbAFM3M8GubqoKMZA5WcSqzWrKUFVrm4sSSSnpQfsZcKp4CVwek8YEWsUuNTsZE4uA",
  "key17": "37vNpTrLMtLwHj726Z2Noc1qmAFGFxU9szFEjNsuFxzuGZVLtQDfdifmxCXDJRap6QR1wMZJ2mLBaZ2JaCS9r2xk",
  "key18": "3sqJz5ENmAQyaWpfoABQ1eiKP4hNvG34fTPKYRtNPP7wiV3K67LVDVoUFf1A2mFE7pAyytftLyWQFrxKvKxpTPRf",
  "key19": "4CjqiPGmiWWyTtdjbyq3vBWesLhjPjtrfYGTQjKpkS91YTdVAKHxnhwSRxiD2yd9K7QCnnrRw9jXL9BAonKnRWbA",
  "key20": "5dmi8JuHuEP18qQQRpf2GEwGHPQAd9GH4JrcY1sSrifPUr3pwnT2gf17uGVzyCtCGMZ4bg8LH1UhuZXzWxn8AEbU",
  "key21": "5LueqKMjbdTtfTQgwZ151u1eBWz7XKLsFvJLrkfjQspk7PEYEqWsaj9xzzZbztwE1JCPxVqSmf28JUc9Rd8aCSxn",
  "key22": "BiPabzaLEgLvWuALxs7RxEGZHGwiZq1LPND8jA4VLeqBNioxxEDd5rgv5zPoNvt44vbJdrss7jiiYFVXr9opSvL",
  "key23": "5MsGdtyvzuo6ievCzFameBPBhZ13K5QV7FnvWMXDpMXHnTcnBvJSkfknm8KLv5L2dK41Txcwdzc6XLepApo79EhC",
  "key24": "5sVL3UzH7LwQyymNyc6TL3H3hG2bEg5v974XycxsetipibBdpKTTgnnUWUwjqjrJizbSQTzJeFkbUnyVxjm6H5eT",
  "key25": "4mU5MPfvqSk363EA9xTH5MXRqcuXdZntM7ZUcu3SY86fHhfeF8Bpn4sBt5f1vvgB7kMjkUXsTtqjXkCE3iuK1Hs6",
  "key26": "2ZZtiLx8wUNVY21uJeXWjvKiuaRCscp8FThzi4CncLtjQHozhwShzLdgvg543oorwganc2sa2Zmjd7MQR2C4AErP",
  "key27": "54ZYmku5CJSQ9vU1hEx2BZWrQTwibqhSpaK9Huhqn4qq3f8YELK5ydpeyknmY8kJP3HHDm4bvRYLTnE1BaN43NYk",
  "key28": "2tukuugaTtcyPq3tJTKWGyJYc6Rpe4FvQizZG2UB6jjK8NniRxgUCjNM86kZwJaBXZsborTXTSVPb3bBa4Nc83bL",
  "key29": "3btTw3xdSLRLNpyxNRXiZ68s1uW9djNwXS5wA2XANX1QCkS6RZaGszYwVTVXPd39EbjV3vvqMA9We4smLSzb8awJ",
  "key30": "3is57ZacGezpogJ2PkcLoJn2Nv19Zxihgp6u3iXBww8oXRE7wQYo6SU95E6kszHkoKCUm24hfjy7pgbzvghydrVR",
  "key31": "65MQrmVgZc1fkpjx8k5AUrCAHtJWN4kSGq9EKNesgxBroispVspbcje58qFWght2mg8BFcQnyTdkb1EoDpGt1ygo",
  "key32": "54Vt8N2GCSuVN6o7w7TWqiXaeuFm2uWY17chMzqov32mjfBbxvczay4SjWhCsfGnTnr65xiwDsfc6F95SBaEpq3B",
  "key33": "5piQ3NamRjbM7Tf7tyuEcVXpa1MBAjaxfqzGLM4oxN9UNQYiX3sD4VdwtDwMqrCYbMTxpSKEmnBe5sP3HMSSNJmJ",
  "key34": "4s9L3c1KMJxtSWrNaeop3DD2UUQBSEcsiPbqgjn6is1pQz5SLuwPYF5agmhGnhj3qPod5uZQppUht9hjRPXVSNH7",
  "key35": "3fsPrr9yW96nAk8ovBtFPKpVdKTYdr3Ec9dFogFa5Q2WyamNrfgDkaX9VHbhDsYH4QQcduo7Puy1sZw9GyXg8s8p",
  "key36": "jLFiqx676ykRePBKiTQE6ztGVPeY4hdRfWwMQUFcoH8HC5M7pgGVUMiDpdgqchDNSNhY7L5ZkbE4jiKpCrtpnBn",
  "key37": "BUYRcLD8CSJJqVU4QXKZG1dTAr6aRQc97sQPYaVeXRz4rC4uEcxVwgYBqfkc7UyhCjdwnZjbZascPJCu3g7TjM7",
  "key38": "2VKtB27oGKXx62TJT9ZzdZJbggD6JDvDacGcW57CK8TdYsd8Ub794C4ahfjJrizVGtC7Q8f2ABrQoL22BwW4D6mD",
  "key39": "D5RYy9TFAc266AtXdHeBjW3cD5pyJgEtssfU873TvrfuegGRfP4BEe4DpBZ6nHP9LDYnFpnURRt7eAahdqHW6Et",
  "key40": "2o9sgUuZG8PeiyHddkLbdbgHAJKtRS73FuxPeEWrfxQ9M7gDPVebcf4DAPkfYNxUVJaFv6g2KXabUNDdvkkLGu7D",
  "key41": "am6QPYQ4ErP44bER6a1yHbqPHg8DXrBDsyEtWmGSbw77XeP8rjMoGyCkRXdXYqYKDvsbXBiLGANiFh9ptNxFSN6",
  "key42": "2wxnMfdXAv57DsEJ452x6D5FRWybNgX3u8F4bJZYd57ZSx3jCzBpH7Pja7uMQcFw8mMZNJF8qRc3FkuiTXpETCgk",
  "key43": "3g1iSjAomHgU16z7Wdkxpkgg4T6cxm55F5Pydx1E42zL68wAmfh6h5ZpGDxygMgR3n5F4YLDJ3Jg3nHrzcjbxi1j",
  "key44": "47mWEajeiKhFoj52c6qvw3atTia67NRvWqw7y4kFR8wsmftwiTWCq4G2ijYanNiaxBD2vYb1pbW4yp7vM64WhTUu",
  "key45": "2ok84WJzP8Ga8Vg3H3TtD4s1wFKLjxik2aXjgqMU6ccqz2zgDi6Gv7uncmRRqqtRXhGvJzpXLHD5ou1g4axWZgYb",
  "key46": "5Uz9rkrPy7ZExeKSMJFzX7syptVWYRAWQ7nR3Q2zjCFSFUME3pkh1UyNKuNZuGbiBHcDFmL8aRs6DuxFMAFN2tet",
  "key47": "icGVVV31t7yTpjXhfwromgNkyYQDb5AExbuDWEenVHFVKS2VH1ub9KmBrz352dZoxY7nTZ9xRZ1GsWKKqvosfaD"
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
