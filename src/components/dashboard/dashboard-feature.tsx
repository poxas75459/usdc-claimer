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
    "66baMV4wsmekGCZyUxvBbcPSnKoZmBQzNXizMzriTaRjjSoC4mBv58eiSFo2UZyUzP8AM5iYoEz2iqemNXC3ZReT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mo63LtNYPDVJLmoP1EbWwc529kBRAdNXxCQvYSsAtjyTJkhHtHscWLz5NXMSDWiQuVxzXCGb85MaB7TnCWmGayD",
  "key1": "XFPm7i1QMnEnm8ybptUdyWprLjqz5twKxjhQZaxYe4nDgwnc1q2pjyYnn5wA3jCFgsQdXT614WmQFEWqf538a5g",
  "key2": "46nMJX7wiB1Kp5m1pohC1xaQsC3NpVrwn8UdRsvbwd9MSbzF1b3UmrxjitQBrX8iRiTvWHuFnJB8PFpTTPXeB9uK",
  "key3": "5UsqBcmr9nWR5z6r5UvTg6Q2ATQY9nbL3CGEitRUgpQezKaJFbDkDiCm96BXg7ZVbXDnrVoxrnPezGVEvXtxvz5L",
  "key4": "ShAuEDgYgsuBGeC1U9LokuvAobXh8omyFfiNhoADGveZTXfAMhdqLtvqdDQsy7LsuDfY35co9nkFD46drxwRpvL",
  "key5": "4Ks8rs2Kp5EEreNcQGfrB9CCxf5Gfbfu1WDrT1vVKVZbJ4Wq73o5MTAUGChYWrgi53cpWY2wcvtmmxqdYxeMxRTZ",
  "key6": "5h4Zvc1xqXLm4iHoPko6rxoz1nHan1sT62BNKyxiGDohkJJJKbdfuBvrC8itJnAhWQeNCYJsmEL8Eshz3tX2zPPv",
  "key7": "QZAENuQ2nzWdEUD7tLX5qpfVJGdtJMZU1H8isR9NQdKnUwVZrFtGLFuH5vFk14hVPvTLFoYYEbmn9iwQd8CHMvy",
  "key8": "2fZL8meLhGCH4aK6Sa1FArmD2JhTD7Kiej9zaukgqvd8jc1ywEgHLtynUVQ8VT3sMAQxPqZN5AUKZbUkDDL4ox6R",
  "key9": "3b4XFZUmVB1uTf1aRv3oqAYajkAX9ieMBbSKv312PMBVthXPn3kU75DLhk9cxpTNq7gGmqaZEh59g8crCqiPv998",
  "key10": "5M6T7NnaDfX8mtncNKhJj1RK8Ps7svCtjmyDJ5aHyzD7P171TzS1htVr388cFBeiPX7CHwQbSGocW3sQPrrQRBsW",
  "key11": "5Y9rCwAKzVs2EP23um4vzC1xERe3EU2B2kcKQhzoKLTGZASneZ9w7zzwTk9Uw9etNxr79k9LMVZRff6KPHgxcghn",
  "key12": "5UFaKvqigJSjfecsPJ5NxdFMUxgWArjCe7r6UGqwYTd3CcNX4d3FouhZisgfjX5MsRgNpUjz6crvCdiZupiCk1qr",
  "key13": "4R6UGPrigG34pokag2N8WM2XS55vCjSqVuv3CXxHgYTWyMyTF8Gbfif4YWgR5aKbSq5pYfmShF1s6L2abwyKdvCq",
  "key14": "44LkwqmK4BfAuW5SrXBcrCiGsZBXovG6dUF8j5K6HxbX2nccHLNJriqeSb7ynF4k45JunCx7xnVXAgTaB6eZxVRS",
  "key15": "64jDUavXgikdREPmVdJzhiewLRt3VA6wKXFgeUqAcVFLkkYttQs4pB1wBRw6vPXZq4dmFgsh5BxcpHFy9aqCYMM8",
  "key16": "3bzFhTdpWsm2KK4xRLTa4zZMGwSWQnEq78aL9sUrXW66sMMLWtYkQxwVbcKL3jLwjG6Y7PhSVPePQjkJfRjGhFQh",
  "key17": "W98nQnoScsqdPLDMHdPM32uTtw8XYbTBtwCE4Uh6kxagUps3yhKZDjdnQozkgy2Wodzp8Y3DJGgAEwvydS1ff3J",
  "key18": "d4ac5dqYmhtrfXfkjBspn4tDWWia6ksW5Pb4nsPoZ7LU1EQ8XVic8B7jw9q4gkSNWVosb9k7cDthZRsoAS53prQ",
  "key19": "r9TndPJ7MZWbxy4zWG9g4mvkQcDTmWyKH6EyAX1qLvpNrfgPvj94aWHiZ85NZhNi3Jeuvuj9e6HXZHJqUcPEEoc",
  "key20": "4Dw4YLNpS2nSK3xnrMYJW3sARRA6mrJuGaHQgxKeFZuQqCd4TafQyxyxMvLbnakCC48ZiqppYfGfEjjmdaTj2Q7S",
  "key21": "54nHExRM4Tkg8tFHSQW36BWmScXZud1a5buiTGoPuZCquGt5xV4iSmen8BpEbm5snjpsd3d1Be2o8diKWDoYChK4",
  "key22": "4RR5uV8rocLGaf4PXNnNJ3rHK2hWiMTit3WmsUNBE1KpaF2oagVK8kbarVr9GhBFZieeMM3oXSoQSioQniFQVTvx",
  "key23": "4zim6425wSa4hwZXKbELMs3hbBYWuyEy3nrSNQetiW67yLcnVjLPSGbGqE6z1XzYwkYrgDWYGYe9yUu61NAA7SXU",
  "key24": "9bbJDXLmCbvUhciEyUYbKQbpWuYenaJLaRrmf9dbRSKa6hYKZjtVVVByLE1bTdBCxY1CtU4txra3FQaZBmLwR8o",
  "key25": "3ngqGwghLE14Pt6cGhSuDJSXtbXS5ZSFboHyxVYWDDGiDoxYFiWBrUcjRaiLGgC4NURjHMtBKGL9VQqRn1AvLm28",
  "key26": "59RPfs6CwVj5AJ5T3nVMDnbHFV6FrHoARi7mrUXka4Fq7or1Vqi1dXYKzjs5oGq481qVg2BG4SdE3gxECNv8ETab",
  "key27": "5rsmwUuSDyCjtaiCicLPMextYKHc42Bna1pmftCAuPHUUsQYpvYyXuqZiQC1WxecF9d2fWENN557DGwQ7jn75LFU",
  "key28": "32RPL8ZTrn4Yhcuu76mhSJsiJLxUm2yepQGHhVWDQBViRwKLXbgv9HSBNBqUKGrWyPjGT7sZzMG49mMDwhpqkV2z",
  "key29": "5EZeuu2HpaUAPtKcRyuJVNXVMuPM91DbzVKZhXsp7Qorfm7D6Qt8ye1mTtZ5K4KF3BLuJpyNjXG2tvKn3mDhkxie",
  "key30": "5GxTBgmAkwFx3p2XNSNfCFrg2aaTRiNu5fqrCgyNS2P8rHrcy3Zz2JZJS2Kt8EbRYCzHAb6ymMNC8Fhd8JPZiyvC",
  "key31": "5pKpTeQGXnFMy7cANNzDZw5kHTMgQtAKR4suxepHah1BX8aiLwiNx13d5bj2M235MNVkAPo4gMRpHgX4M9CgkU6U",
  "key32": "3kSrtpYtYLCYdJbKLNR5s49hD15F626ZVX4Gvfj3yQiwM5h5K9yyEcir6yxNaecwaGBzSaPJARYbDW7UJKaMTUCP",
  "key33": "3iAdTBQGkg3YZzt4XtowJJKXyMfkyFQcD4pStkG8F6iDE6beGJZR8Dvcg7hmY1yihV698tEyVafMe1gvJdc3Leu6",
  "key34": "3phELpJGSdLs3zyrjCTVcpPB97BhPX6QWdxP5ZVu2SsP2J2GhdNJsihrbx8jxMnFqQB9N2GLwtzaa1dEdBfZxAK6",
  "key35": "2k3RKqgURi157Lq8GKyMZGd5aXeACdrrKwpu7yfM8Y82RwURG5xs3CSY1hPp2T35idBnAK9f72JEk2AhsLQvpgX2",
  "key36": "4pv6kyt88LPxTrCsmwbt5eeUA9uNaqNERMiFRZAkUnkCRPd4N6kLxcwVqXAuVKRtyN3aL4MRxW7ZE7cajMzQcRWt",
  "key37": "4cQYUXENiRu1D9t46U3y5XtJECja4xzfGEqCywo1rqoYjPqqvVUDxstnCEYeGBJ9BdxLaUFaTZs96tWY5m6r1Wp6",
  "key38": "4njZAUVF9idw4ZnhPp5ix8j6eGyMtHzLRhNaoQaJSbsbBLaM9LC8JnUNSDdcMo57A3GvT6fkvxLSUVaPE1TH7nve",
  "key39": "64w73EyQQYgArbiq1cW245fATZ3WKich5SQq3c6rR1PnwdxnoyAnNPVrDFEU3Z6zNAycWBcxiWjGf95JEVNihyXv"
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
