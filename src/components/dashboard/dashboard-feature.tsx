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
    "4yxKmMfykLcvUeAhbpC2EYWq8WVnLiL3EyG2PpTXroo6q8fqftDV74mVDW82gjzqjxoUPUiMENhqA8Jyv8GrpMHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uhSPoXmxYFmrbXvPJPiwNYFYdNTNERD2kLzi2sUZAhBZrFDBWF6CkS8zvgisSWJx6gAbXXdhwLLaEsPGe4uH7an",
  "key1": "2XduAkkKtuaSk8kfHBz6e7VffhR5zCVCpvC1cjdSYN7dTQuMkk22Wvtjh24Eb3oHgXgHuyh6TQ2ire2HiwRJMeoh",
  "key2": "5PVkDiwrU6HRZ8Lx9GJsdWGaqGjnDsMfGi15iyzggvLKChDXNdNt3r2nueV4Ur1hsU3AfhtEc5ANrERfqWSaFv75",
  "key3": "3xVhuGWS6TemUsWLRPmZvDJ74vcoaAR6qRoF1wPeMvGg8sApxuqTtdGvpzLqsos55mTzoLxGRsPRtY4sBUyd8Rem",
  "key4": "3wCxSCuYovyem47DXihxnTH4JSunUNTgtrhxfqVw3BiFDwXxBtSUsficfmCMAMYqt8JaEYqy3inUnE1GyjYy54PQ",
  "key5": "4Va7s2Q4FkZkii31HPsXQLKh1Kp3bJhJLiBVoQ8LNBSxPezGZg6YByq54Svk9b2sbWZ1tT75Jj9uEFebYyWvYcr4",
  "key6": "4GLu5yv9hE3iva7vneHFQPMzxMdMPKWWWkNPF9GN67eshVvfX1BPhJS14DHz5Mjsb1DNrf9u8nzyGGu1AsCQuCjC",
  "key7": "vnKKHkx3XQ7XBKRMepWP24BZvHS7WnXpRGef6vfHTBcEGMKUzAeLvNsTTNixeLmfszaLXVqApfAJegMxfYPbHpm",
  "key8": "2wpijuADi6NkVPHBUa4yqkxrHmDnD6mzxzv2qpCHfnsgoNkmgY36YbcVpyiofCzYrBaALpvvC2gy5VCzYj7ZccwU",
  "key9": "4n2NTLC8GXREd5fm6LZew5GUtMWJv6QBPUMA5DsnkxcBeofxMvaJWhW7emoYsuqfKhsbEco79M5xVWNHuEb6Ye17",
  "key10": "5e3AJPRtNLB21L9hkcUo59PJhipMy5czfdN8YRgLTS7uzEX7urSRSxhGTnZEMo64iofgsRwYamxXvAonE75CGFnK",
  "key11": "3WjfRGCTrQgCxwNQAmXJRir4XAvcvG2xmawYiarAMNJgiKhUwnsJ5HdBcUNm4djL8EJLgapT679YK6bvmScFH5YC",
  "key12": "5Sfzuci7VgeR2jdMG1anJihNM53deq1BVwrrQcuthAMSsCd1J8TEetN7j9RLyxA3khmpFMgjHhq3ZVszQAjiXD7n",
  "key13": "3iuw9qQnm6EGB64d5kV2K8fCS67sNapi9jcEPHATEB2mrajmanf6PATvgjTLJm4N2JaeoKPJ7e8Dd6QABR8Cv4im",
  "key14": "2i7CJimYvX3PNnXXz2GcSJHLuNK2rAYCTrhBXzEehkPnB6cRdd81xBDoCVYyr3kg5CPLr8ZzZPHk6U4L9vU5Tmp",
  "key15": "3nYNiVD1MpNtNateRwUtXMY1skxeJpKJqY1VELpnSMGia5VntFoyNiGh1xCbyqFmeCn6iPDD4Xn6xaGgkmPZzWVR",
  "key16": "53TDRaS4AiUQkrrUrtxNLZcysnDBL4Eh1tc5APLU48nbxpLmDabGErHH73DjxiNrKFhzUz4eSmqxNpedA8FPRJMj",
  "key17": "67DdbvBUedAVZyGr1auEBXJZAjdztcouSkgtzTCok66oxbrpHNsYAqpW9dBGQSNSnXMeYgCkC7xCKzdddYFfxhFT",
  "key18": "3iBVtawuZPM6wvQRZEv1GwXiuUkPpzGhcR38b53679zhdNHqGJksnE3TCcv5GRcETJ4Ae2nhhbNoM3YJkZNTe7oY",
  "key19": "5DrYkJiPkb3f6GEuYnhjnHGftZ3LRRTAVQ7jKjwNk4EtVi6kFEhEa5wFRYrxnzth6rq5ueeJDrPuQTiaMcS6pM67",
  "key20": "4MqSBoHuEM1KKLUzYrSHu5aJJrnkf27Xii81dzFWzYbVRk2mh2yT3onMVYuimkEESdXr6JKQjf1mkT4KQR71k89f",
  "key21": "3K7eNxfe2kSBq8ANoJ9JQ2BswNMBRHTcADMhz7Vt4rm1EN4w6C2xwoZJ1ciWSTiG2cF5PGi5cMZKNWQrXfTg86XL",
  "key22": "sNjG19vAuE9rSMnFrQgQm638MUMyf4qhp2x5hHDXHw3yKHqEX8b9KGLMkAiAkr5ogWqLiZLf2WZ1hRt3Pbyph66",
  "key23": "2d44kjt9KmmpvAkkVaPZXFWQRAeGqd5QdFG1Wey5LEqRHoi3Cfu5dMXpK2dLsHfNw17UNhjJuDZFAPg2vukcnCGo",
  "key24": "3MXh3WpfeSPvgV6m4vMUCX1HbTUEZ2oQcd6NKRX8uoG4czTgsEdoqBKU7p3ahMry5WcgKgDXyr8iG8jDXPgNWkgn",
  "key25": "5pwKHHs4KRixaKNPaWcCEBHtWz2AicZxeVo19psQ2kb8QH1dzum6CqMQyncZWHGpACLETL4ANRpkxjxA5iJL6Vkn",
  "key26": "5oCdhvK8EYR23sQSNeAmkQnf8pkkENEMq162aRezUEctqFSPp2Am2kaQ8WKCSYfz6bTSaU1ggLniL89AzJSbnpBM",
  "key27": "2Zfh2B5CHMqjyVRzLLfGvVzGqsofJX51tSJLerG4uzA9khAYmJqucMPq5qToNZnwNrkwM5AFjsJgN5S8yFHX3MGZ",
  "key28": "2Jf152M9hUv4HJmcDYKwSaiWnmSEgUSzv9WWEEmReZ1TSJERuRAbUzUDxyD7W77fzmctDo6aCiwctdNjAqFGp6qi",
  "key29": "4DkYPxuNLRyY2s7HixD2zXXVHLa6qTQP1MErW7gXA36Bcm3R8M8ZbKyWMGqfT2SeLzF8rjD67jtjTPow1Zwaj2Nn",
  "key30": "4cGU22dodmWN8NgUqHjb9oGoa1j2E3r1hS6dvPnfmRDddUHy8s2MdzWvGP1ymu8rqU2spUTtAk5Jfixvaf1JY2G3",
  "key31": "J8RZ5AY8WawopvqTopktjCoHjTm4nPt1z78h1tCiioUiNa7U78hKSBJgtuPyWAhQiFhNP7EZBDMPasz7QHjo9Su",
  "key32": "4uGQcw1udd8xJyBgJUdqem7Kq1P7Sc1yGehv9QtrEnt31r6RMhuQVqT7ryTfdup4eaurnZP5mEpXQyKDuRLaM6aK",
  "key33": "64WSykAjKxMrSUteFQ6EUnaMyUd3pWAXEaaiKBG8uQv9B2iViuVQYRB34sBKYeS7tyKYmDVBXazpJ5Vc3LW48FjC",
  "key34": "4G3snTYJV6ErcLpTbxgUhSDHTZK44yV1R1X9UV73tW5oSk19YwZ3x2YfFa3MVKXvh8BStHp74aWHV3U4qLHYPyne"
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
