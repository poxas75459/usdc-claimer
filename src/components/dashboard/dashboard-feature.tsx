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
    "4auP1QMTDCgCpMzowiDbzmv4Lj8iTgefwzUiGgr36yNyH4kHSDUSxzcvCd7DDxPMdGkiRx4aZEoXY5pu9JfqcwSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WV1fNzdmetxvJa4EbTMpeE6kigMmfaCcDJnFvAzMJGmcYKnxKbVKCYriuDzshEYCHGLMpnwQ4N2BSDurjSPvGH",
  "key1": "61ZyzbHbeUo1WELGMW1yykMe14qgjWDJ9SmXBAiJTgz3SrKc41GC9jtN39coLrT3aGKQEK7aDoea6WgT4SBLY7jW",
  "key2": "LLmx3JGD3WH4UVDgAqTR9zCDZQRB7ZBvzywLmwrcuhs8ksXsyHHKVXC1NHsUwjmQbv1N7Aw4kk3irBs45Hdpi8v",
  "key3": "4QM4dz76RJy7p1P88e39HibEiwWZn7V2Jjd1mSK411n6zaqpKTtWnVgAH2TPiFZGv4i6zuXcqYvshJ1ZPiykPY9a",
  "key4": "4J4ArRsqVSJGiHaKyeu8Wud5xUJfV6HzP2fFXmAinfr6WPnN5n8UXRMvQ8uipDhMUREDne3d7URPof39QJeZ4Bs2",
  "key5": "5QdtYW2QAH6RAb89cdzcEpskPA8scJHTdXuJHd9SNBW9vNLTndVeiCvGqp3kn71ANDuhRKPxvL2YDjoHs43U1Nr8",
  "key6": "48PLscnp1wn5h7mLA7AZgtjxYStXMgxqXTMZcoNd4XS8oUx1ZnpnTqLzpfC5UCq2WRPNTqi8mJqz4nvjSpxugQ3x",
  "key7": "2oYduePf3G3SdUN9T9LbLkMf7UigDhDsjoZDd15PGcMkTwCZtSDPfb3T3FXNGNrJjuxTKZdyiiTkdtEoBMqcjFgg",
  "key8": "5mJJVErTya8QjTkR5UgMfuTbDoZqUkgVF2GX3jBWhhdgvGoPG5VCprcAPDPMb3zrpeWaFFxd1dswwcBXhD5Nxazi",
  "key9": "62TvLGwuFkCrWBFaQeC83ySrtL5YTvywn7TCepTDnjJXE6BoVXDGhhWCkLYiqn29A7xxEAmPCT2vkMxWaqKTNGwC",
  "key10": "2hFwDVPvek5DPj8e5T5h1ea99t4WF9SiykWDqxokmfYjBDJyjBqmijFV6VNeMYgtU6uu5TSukk7MetT6oYRTCpJn",
  "key11": "urwCRxuD3qUwfiqJFBwBfNhjHtL3E3Bw5SEor1xdc5vE7P2yQ5qJmMb18bbAT77wjU9TMiqzouYtSvAKwyr55zv",
  "key12": "PH6yTQBGkW5AS5geR4sW1zihMexLn94VYtNAmpZ4f5Z8AyPXpurBRNUzhgEFzMCfCFh3FojGK8p1W65agL2jtkZ",
  "key13": "2bCjW1yC7W36gvuq4HkYMfxUjtTSrn784rcTgbgwMrs6oM5NrhLmXiwBKChzuXdG3uik9yR3dMfaS7xRco5RbaeT",
  "key14": "38Q4dr9UZBM2ByEcvpAh9K8HbWrbquV3wybcAfwaGQL3uBauUTN88n49GZ1ZebCRnsGhWjDJ1xavKbtBVHjJprKq",
  "key15": "4r3qV43XzqSP13cDAWB7hRQDoLipMx4xM5v4XkVy8yWtpDTH9gyb26MGMkP67amjEUcsWWvSx2wy3h2cjSqvCmXp",
  "key16": "3eTuGMLtkxhoqc8i7jwSAEpY4mFoxRvgFNJvNt8YxpeGJxDvv8FkR8DRhRQMSX9mwjmvCqkTW6iUzi8A5Tvdtv2o",
  "key17": "4c1xexLXm1Fy8jTjuoT94PHaP4ZqMgnbBjLiBfzHDe1NGcrwQZa7Yjfd75RqY5oG4WiAmd3xTr7FN9ARJBrumM3y",
  "key18": "2bN1o3ytpkAP5RGU7pUdh3ggEsTXv9mHhBr7879BMeKgeQWDtdUH1oXJdHYC1WvbU7Dpmnro4kXyjxw58dGmLgrd",
  "key19": "Joh32TpvTQGiDT2JPZHZjoLtEoXmQcw1gMJhFfpTCGm3DSbRyhSkiP73yEMFA7v67mfLXQZLqpD3wyWB8cjjLPj",
  "key20": "3aw6QT2QrjRgeBMeYZapXB6hV68jaqLTCP6t4QKCs1a2twYyGJ689Aun9tGpxs2zjKJ1uh6GTfWkHqLRzgGzA8CJ",
  "key21": "3x1toUhsuGVXsAYtUWxfLjUPzoqEFPVJZAjmQEF1MzGMqwPsgjbztWsrvp8NwzhCAcrsgHtTp8Ptx2UofdA8ojqc",
  "key22": "4dbqXvu8hQr3ED3EWq5VNrE8PC1qwcDGrp4NpJDNQNo2CTwY7kJ53oqY1vz3YBV43y6C8f5WwxrxPknT9skShREH",
  "key23": "4NQ6okZXo4CWsaAp9nTfST4NhHveFTQE1vm25dL2D7wwH1U6w777m7yCHmd9H9MDNiNbAkQBwxrRgtcVZoAJWupA",
  "key24": "4fsimfz42STA7Kb4TM3Xia9otFWzEMMS3ZkA1kmMeDiaCnCBmcoBjYZwTTTxEzbsaY61GQEvbCPv4PvkrjxGfEsh",
  "key25": "53pbcM5wHApAP7KeaP53biTJ9AJjXgE9VWCogPYCjP189m3BjHh9zQ6LvBa3KaHAjtzS4edg2SM8sTuqWvkzmHHk",
  "key26": "44ThRRuNRRkiN48fWXyZsLY9ExKtJXFcoz3vwycpbkuLmcEBz7kS3VErcKCcBh1JSxLixJ3KkBLDk16uazYzkpwS",
  "key27": "4SXKt67p4LTtBENyGUPgNhFtHEjDAZPboKtU9yzUdwfvvXFZedfHj7AP9Rf4cfYbr1yNT48trYqD2as12vpvNx2J",
  "key28": "5REXWv1j83XqtKJ9pMVpBHRfZo7SYc4dMDdcrUYLvMPhKPjhzqtz59htB8wAMG5jHkjDf6pPCggeeQJBVroH7PVM",
  "key29": "5WsHZy7rmXuwzovbumh73nkMiVspk8Ywc4NAwA6GLuYseMgRezgsQ3QoFAdXTbwgiLetosAuhCzdEi61qXx29AsT",
  "key30": "3oSvHsJnJFdL4PSC3H7m5evLq4qTcLSW446yrvj1dHsZ1WSmy2qacLZKAZWgsSXBEmDMPfWChU4fGkh9fQEJPPdY",
  "key31": "7PaVtiLWZYHZxM4cB4tFvVHULnxUwT7mCVsy8VTmZxXPaMwWjDoATsL1gDH7eSw6yX4M8TWxW1EQbrxM2PZS1VT",
  "key32": "2rY6TM9iWrmXPcerSiEkAy8PSosobUzSAMcyM77j2dcjcei5R77uE13fBrv83xW2bcZyviJ1LZN1qKfbLXzYXREr",
  "key33": "37T9gqAhKAYKemL4XyMN5ZR2jX6aWSqvc7FG4LpnxwxCqweTza184tLKEbSYDR32VZV9S7Cf7hT4pfooJXkREpuZ",
  "key34": "4e8fs2qcYSTouSCu7pvZ5EHXR3kKHt6oLGLF9RvUdMfT5EPeubL22UPF3T2k1WziguuY4cnrXJPWxNn7SGh7Cxxx",
  "key35": "5p8oNtqGLPjvuktzygWofuvkxu2cpAZ1gPBxJGx7FJoNEns8rNC7fRuGCQ75i5gA6Ea8EhizMKqBD1GcAH3TrZi4",
  "key36": "2zJrmNGW564aJtuT9NmcpXvgyenJPgG9X8bzTQy5nyVsqG5VVGGBeLVsGokRaHYGzbyecBKYaoCSFPYBpcRBq2S5",
  "key37": "4bUXfLarhuoifM6WGotkmcBu1jRj5joCxkxW9sR8iUKmU8r9u2pDpuasskyx961wS1EXpKoU3PLV3Moxep5pCsr6",
  "key38": "2T558bnAnzMRrPM6t3FEHQGxcMbKuyJ8MFBVhNEHEgV5whfP7jXqsZ6ouQ6SFgYu4U1wiNGLcfCAWKLVtTsgwMVB",
  "key39": "59yb4FYjN1ZyWE3LmYePpTwEZVTHFpm7eWbh8mg5C2YDenT6nDHz5aoPE7fxRQD48uJnKw7gHRNR1f2yufrCY4AC",
  "key40": "7pioVoRk7nkedEdJvPmHz5t4sKkCjdkvSoTFHURthSyqoRTU2go5p43p6SWgJtGPx8zuS9JJzkirL6RtFYNs3UG",
  "key41": "eAthkpUqAm4RyCVhzHy991bAvbRoWnwpUdka3t6HogdkUmbuaVbMW8m2hS4osoFRQqmuLGF1VqUAbsJ5RHcBNJu",
  "key42": "3XFoS87cvQkN9aJAEkARkARCg6TSScR9niYmTiXHUecS3XY66sa31htrtfipxd3rSK3Hos4mxZjrqRL5RnE5L1Co",
  "key43": "YLGFanQAX7KqARjMfohMWrL1jb5Yck6BUNMSUWK5hkg2Jt3gC9Xem4v5jqv1he2uLeqk6zzzKNenQaA2dvqs6j7",
  "key44": "uk4N9YK2inWNv5REjp5xjZZSceWEDLAcs57KWE9Avn6QMnRDqSTuS9sNWs89u7soVb9Jmjyp4wjHLT1oVGT7Ugy",
  "key45": "3buTneST4iXfQNeeYc1XQHzMz8vVXtDuj2DgQtoUmieRqjTiXKxWGDmBGQvteaggmHtZFh6jVRce4eHYdXDR6hQT"
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
