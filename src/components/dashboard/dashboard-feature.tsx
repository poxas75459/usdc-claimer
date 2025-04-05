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
    "4owCdXa7YtpD9SsYxBRutXzw59FcasWmz53msHmARB7iffJF8P1WEyU21P5AFGb2f5xJnrWXETbkXS3uPKxAX6uu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gav3o3iaa7fVuqn3snT5kyq9rV97Bi8bmTGhNzPLLdTaRNGkLGgjK2e8x1EyyULBRsaiKg9ZoQzidGzvbTUY4eN",
  "key1": "5NTnZxDeC5hPWedUaDdXX4aE7sVFhRVozTeEBwYWt3wTr5sEnZxWFVunRrqQMsdfXGYjgF4Zi55Aaybj3VSfNeeh",
  "key2": "3PUD2xdwB7jTrANh3Nv8uYYrzM65VppbcdvYXtYAWjBS5dNH4Kp1YK47xsoXR1otHvpzcspYEVUMbKqcfCHWyq3Q",
  "key3": "4dtRyNNLH18XyRhKirSt6gobMyUeaj9ji1ybArZHjdjTqGc1dn4cG91Czscehrcktd8LCy52VfhuYsNL4vD5un1V",
  "key4": "5rwjXpzBrPvYDoUvUZHEzpcKWuZvfz67VRcVkQ5wnjxPq418Ddfh5n7oEAEaWq2ubBQoj5coRGkGJ6vz3ghNq6DN",
  "key5": "3Qiw8T7fUzkULqZ4wL53HCmfQCRHcf7KXjT8C2kMD2VyxgbePPa6h8yibU8DxRBLvKA6v3JzrkikpvWAUgXPoESp",
  "key6": "55VuPPX43Evxh7uD3XTwaRyBkcoe9ShJUYbcE3UekDNszjYL9cYNwtxB6kow3Eabp5f1hf8tTzC9geRbhcf7tgy",
  "key7": "5MPsJsdtBshSWcqHV5eBCVLc6ED5a2nbppN5EeGNWCTTJb7UCyLK6CxwpBKJtZLhmgvnmw6YEHmsFm3uXVAM4Tvp",
  "key8": "4QAG6Lg7wbmLg9QmxnvycBrkiKG12LwRi1u1C5xdXYBhVFvKxi9fw2YEYBfko9k1ziqspzhg4GTWi8mGAoSPKJRk",
  "key9": "RUFkPxveAD9LAkGXEUDWuhfggEr17gVgdhFRW7uBriBy56gzWpKYWzzfEam26sB74nmcnCKZFhbGeWeAe5LXsAy",
  "key10": "UnhnneaBjgeHDdG1pL7DctCvs3E6G3fRbAtqZ76WLZBa52oiMwziZayE8XEEJByJDHqVT85H9123ZsinMBzrusU",
  "key11": "3iSDQmpugHYntRNebk69fU2wmYCwABDLk7AqiZ8Ze3wLUjGdYYcCZeTqAg2oiKLWimKfoa9EV8jtryD8dgWHSDsL",
  "key12": "29MACqhjfcuNGghZ6Seq5p5ECeuZD32ASZCCyto5VbUav7tSgqpcnePwXEKMN6CbcqyEb6R8sV1wdLyK48G4gYvW",
  "key13": "3HpAWS9jSVWu5TcptdYeEyzbaqi5LMiadXTPd1RfoUrZFTByiCSFGBZWYgvq3af2zF7AsqYEM7J6w7jGpkU1pDts",
  "key14": "3FVFkdaZ7RgYZbnyw4svJw3yhTtwtHNqJbq2Qv78BZg2JZoJCQZQnbVypRXKWTKhyjU511hhhUS3KhZFuvHeH871",
  "key15": "47BqK5CjFAEaahhWxXzc9j5BFbeoWfkQEG22TDgJAnXPxtkyZDqVprqRLpoJSVQvWmGA5GKdtgxcaBLnZQZcWY3n",
  "key16": "3iEj51CzRQ5v47PhZTBTn6fphXubLHXg9Yo8okA8zsELtcobEW6MvdXnwXDuRJ2LvZhCqZMEjnWXBV1Hyx68zady",
  "key17": "4BuEESTVHkwrfguPBppszFauQjHr2HV3NXXkorMvHXMeuqvUC9in98n3AvP6pNtBKRUDcHwn4Cx7AmQyicFLd1oc",
  "key18": "2WLCadJKHDvdMdmaDGzMM6WfkkF1QxDGkLdPyR5kwH1NwnoZnvWUbEZpiWns2mVFkBLeTuFmEcdS3wq6dZLJJi29",
  "key19": "4XtZEQtQr9RUKgszs4Giu3WU6DkD88Aez54jsbq99LQvW3idamPAZiHvsqdPBCs2DSjpQrBKRrEesXZtMA2Fhau9",
  "key20": "zBGW9HN1kMecoKLHmspPxRL7vhdNBe8JJY3r9FR4tCkABTMyNJw6JYM4XfBmfypskrzYTk6CpGoErzcam98P9uq",
  "key21": "5Vc7tpCYX9Nqp61DpYWzupZ5avQYoLoqE6Jv1wPiQFhmFEw4c26JDSyFj3b5MDqk1hwgcdyzUZ99pNKZx1qezcwz",
  "key22": "3XwDtQYbGxyfyTQFZKUJkNAfL6kCrqKFsCMPnb4xUgUhdDvVjh6NDK1Hwbt64Yotxxey6RQv99KSEYX3JojYX1fr",
  "key23": "4UQVLsprgkWGDqM8C4PDXGT4VS5XmQyM338YqVSYvnUPN6g459mM3irTeZmochiGqkgYKzf63Lfhy6PVKWfq37zt",
  "key24": "3dKGEwXSiJDv9WEN5BWh1fWV1pV6jJ5eeyrF3aYC83qdkL73AVoqzdnCKeoAUBkx1kWyvdTdL8c2f6uv5ZR2vstj",
  "key25": "3Ew9xLj3u9iGZT6b4yBabhv76UDb2xQ2Gaak9QCn9jY459SUCm1P7p45FdZUt1K86XvD9YyWwZ8WAuuAY91hABXR",
  "key26": "cmmSgsFkwg92NyG2GLmR879n257jCTN65ngJU3hbryWnRx1BGQcaekRciKw6aCrrcafZVRJ243K2Wp7WNvT2ohk",
  "key27": "tCUwEN7XBoWjSVdr3tBGYQt7cvty6GYes7mYSam2uZRRxsVHaFyBtns9HdzobaL8WDjqdKLHvBUViMZeW1EypMG",
  "key28": "4bY79BhPpB9pbwiDrgPGLy1cShhf3m8B1QJqWNkRBzggBRhik5wCLyBhKPENA66a2gRwS7kEQAJJWrt76mJbfiyw",
  "key29": "3nMtHwLk3M1mMi9peFmMSKayvS9hoRhrbiuySAtFtEHDdjDjZ31chyHUFHJK1DTvMm9aqPhCh8Qs7L1t4nTscuJT",
  "key30": "5P8dwcdVBBK2XfPPzfVESvqfB87VyPD6Bz1nNH6LkaWdrEE6ZFFUhKpoBBAwEFqMu77QaFCSpJPoza1sMBf44FxD",
  "key31": "2skF2x9uSKsk5oJ7yKymS2TreuyA21GT9Zm7rnSs76UKngJZ5bM3YZSpVNXxiERHQPBWoUvUfC6hhwsDUQCmgHcK",
  "key32": "VVnGy1pq2RPLGMSosw1VnDiUZ6BaojLVrMxFokNmX6w1V9gbaamCzNdPDKsK3uc2yPyjyrAiUVefaPKxHPZjj9m",
  "key33": "iY5rvSkbY6KQvZuTgNWvtxXC3Ygnj4Q1Tb6j1Af6hpFL4sqoWQwqKbGfZd1G9ACK2mrC9vTx3zfgN8GWAC16zg5",
  "key34": "5NTrnECtLj54gC1naq8X71AVsSEPUGUukbm17vujSAh7XxksBxBBVYYbPzrTa36EFjFwzzRqpkkiSCk1iqFUauqW",
  "key35": "3wX1GUeFwodK823cxdSMz2qfmY8NEwsffyhE7qvMtxsFhKdoRiBoJfBXEty8DhBgZHcthdVLUGYRy49s5iD4jKTw",
  "key36": "2CpftiDnCQAEGQfFpSETWn3JbsTm4uzmKohLvB56RSpeAYPYUe3yG66zthu97ygkgA1GdKaGYJgEbKXGAB2g4sTU",
  "key37": "5pjY6aAgsBkNarSWh1f9PDZTmzAzdLwLXRtMe61K8T1DLySWyhe5EPKs6DjQpXAiRTg61zUUnzxUxmUDGC1aWze3",
  "key38": "5j7LnWnCAtSu6dxHMLALvBWY1NXN4jLeNUQHvJ4bJxYCA2VxKjiWqexzvNrjsyRtxyRPWts6Ekc3K9JYpnrwf5Cd",
  "key39": "VxGAwend8wLSuKCqYM2StXiWbo5F2WG6chd46ndjU9XnRZ4NxegRva1WG3Sbt7vRPVcD1T7P19PSoUyC5h2gfCu",
  "key40": "2CsN3giAJEjscnydfD7f9P2vn7XmNQ4KKEMkmJQzZxHuwWeFAceq218VES9dVjmEdNQhKYsgfKu7AGy2hm39nkY8",
  "key41": "3W1D2jwkbGvwYXpS3be67dbo5pR5hB3Vy94zuNoy2gJgxXyhgtKMGgPBRcjLfUu2usPvByZXoUK4J7NgDRHKMSBi",
  "key42": "5XSdyxfLnWnrBW1HybVN488iwDEzKMR3Pz3ctobdUkTadSwUzt1HhEwe4wW4s6Ne7N98Z72NhbqNwPygDXWHvRVe",
  "key43": "3PB4xVJHt1FwwSax2PhZQA2mskmoUBNSygwdL3713KAtfJUAF3koosftT97nL8S7RP26EvGqCDzK412GKhJz2ccV",
  "key44": "2ZfBHBtrTaZeNzjppEVS3xxNBvEaAFB6F28M1npU2MWbkECTi7zxThtq6CJpJap7C3sDUWyEmEdwaTFibQzgDUVG",
  "key45": "4z3dQM1oRz5PrnvSy8VEwxJQcTDvAPDfBm4bvWx9L7vm1ydrTrMziycKdf1hYd8eJnq4k2KVsQRJUz9BuwPzASbx",
  "key46": "eJTfwhSDm4RMkyR3Mai9F1pDdufEaqqQEbAzkbpFrmALBSRM71b3cgn5YY2eW2UGZwEhG8eaTVeC9AvuvpTsCG6",
  "key47": "FhRoWLDfMpRS7yUdrMTSLpVDeA35YCnDnN62Zgg8Kjq22K7Jh3QzoXRDyrtdVdHHqc3Z8inUC9aZecXyh8M12cC"
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
