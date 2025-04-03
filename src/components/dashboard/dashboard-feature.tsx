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
    "5JvcogFAnzJmXVrgekqwrH9VBXxoXzjuDbdCVF3Txh5rcgW3rUGLwvXCqKrkCt264kEv45BEH6yk5RF9drZvBTvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YQK8Ft4g5cuk7DUo3ejj8KMPnf4JGzqJw58jF1bgJYKwgw1x5UGsJ4TzCTxGbjeu93aDyZEejMtC8JrZh95yYDA",
  "key1": "5p9f5spGtXRF8qytsYBmmnVXZMvNPow9BU5tw5vTCm7aM94suoQDdQj2kpHPCzgctF47AzP8LG4RxSWcUQqzMD64",
  "key2": "3KCnfsd7ehVp99GVmgfwocuHkRtFFNYCDNp5bajMuKkagPZ8CheBJ1yz2B2WqiMaPa9TBDgWPnvW3Woq7hzEZivw",
  "key3": "AroWmCYmiJtyf3swzxqKs5r5b2qvzdyzgVtujba3Zv6f4kByDKLGeezdfimaU6ymJ9STWKAeSonemuuarbGu5Gz",
  "key4": "2utf1wNZFNu8t9PqZcyMs3nmf2Mvez52fNeYYqYxZ43Xg18oYR4UegDda4pu2WWT2B9uWRQFZjAZAD98Qai5W7Z",
  "key5": "TUnNMszXgEFR1VjYazrs3fZ4MHRUepbLz3uszNGBHQn9EKhAc6Vsi3Jx3umKkUSd627szPZueqwiwknLouRVcX6",
  "key6": "5XdMX9bp1t4WEHbwUkqy95xdRbjJWVaxAYn1diECe5Ycybc9yZPsx8WmerDyiy77wqdwgtjZFXSsLEos1XZ3rqTp",
  "key7": "xyqejQshGwqKCm4FuJ5HAtHGsmJhTkpB1fdV1nZ8i91KqMxhgnhpqk3hhUUGk9Cdxk1wGEeZ2qaxQFd76HDFXtA",
  "key8": "4dSq4vrQsZJKujHBauzkHG8vNtExhMTxya78FGdWChixeLKfcVqnftu3mYPaWxSNp1jBWoijgeL8mVUwWqBhi7qd",
  "key9": "2S4G95BbudKnrtchgEFe4ad7WGq9gAJ9zPwjw22SXdidmsaPbjMUwC7Bp28ou98Kqud9nbjHptiHWfY9qJfFHKFj",
  "key10": "527rnL8ZAkzrDEtLh9PKjCMVubEohCNGPhBNdRUDR5F8RMKBzwNX6bdS2nGfcTRt8S6nAeZZu3ZvpfBSUufbfkUE",
  "key11": "3ePihD64hJJooE1CTpgmCWzEfb63LqSeztmFjbAwkEHcDFtk44ZzqAf9VHVmGK4g61yYgm8FXp9jb7sLzAsrojFE",
  "key12": "2fxfdPN3ArU2Skc4QkcHgkRWiU3kH1TayXV2si5aM7R63UjTu2B9PKT18sVhApS3tjx4xq8rfAS8Gys1Gs7PV1KR",
  "key13": "56tHUDPUdsWgJymZyPW159f4qgi5hdtRaS5EVY2L5zmtkew34hfCJXnUjX3mEy1ybf1QAmjWJSHWd5RjkZKLYaSF",
  "key14": "B162WfdqTznKCAVmjsG8EfdvvNzG6ykHoTyz8z61rVZokAmNeYM8PUBHcnf4mN9zjjsQmagHuENH8gjuZxhiwVn",
  "key15": "4FKngNLmqriqT1zDRh4s7QY8PihZFb6ntCKQtJTv4d4oCs72MoQnHkbq92sgrggNpKqb91EgEpuDU2TZqG3SXxAf",
  "key16": "2DJNhxRGL68SPgerUd5kxAH4kBHw7dzP4hSSZ8qau9M2ApeY2tBtLqRJTnmR2PMAjaEZCa5CNG5m4hkbR1oijygK",
  "key17": "57JyTqg1gtAorRXYHdAJvEjYSaBxhKZCnLuPpsG2NqspwTEpANXXLgrEJst1Sc74WauC1u13tb5NKpetN8F9Xeh",
  "key18": "5iYzJwdRRzV9xcYXzdP2LZXbqpXND2BXDtBRFVd8ny3NvPTGXy7iNKyjSkPcdDvDysd9pLNoCwr3zsyprghffAp2",
  "key19": "4u8b74pXLChKyUc9LkQvREWhHJcE3E5Jhu8tZY2bndCp2g3E6gvte2CUpZvEAgdSYTspdrBs5GXx65wLUo6Rfp8T",
  "key20": "4bd2yY7SBGQG6UMNuJU1iWgimmFpZDogQ9ZonKXazA3qTCRkkekesEQJEvivagGE3djgeY6vdqWVAgYB9hqxz4tp",
  "key21": "25Sd9LDb2i36qNjqCenS9assVuXfV1Cr8oLofvPiSdJmYjrgtKLaaWFDfLonqxr8xYkB3k5P29J4kUdpg83DMUe7",
  "key22": "3zgu1Z3c6nE93JZRprompfPCo3Hj1fHQWX5j8aSGYnNxQ6zk2w3vfckDWeNqzUtP84oa6EcXRV4hmSwsqUWBKvnF",
  "key23": "58bS9damCciMj4RvUMBoKFT47nc4CZDw4PNvgGxMJna6gwRisrgGAWGFBTdhRPgNTVq3htWNo1rjkSijuQqL1EXq",
  "key24": "zMgXRqHHtYSQUm44h42MVnGHqiyHBuf3pJcT3ygEcjJrLe7Cqyniz7gZP45NWXNTGqU4Go6okpkbPiLhfiJgg3J",
  "key25": "5TKj8ag1MJLUcjgu3ERR9uKBB6wmeBAsVWYq12qPiTcWhmd9VYKcegjJC1v42XEV3UJnDt7ToSwqYqhppRN61Xmq",
  "key26": "531zmE2E7dSyFCDAbojjKnurGuCnwnPgL78QRuehQ15AFXNF3m1uWzoSJpR6NjMoiYqjwyEfYdmYMH1PHzeS9v3p",
  "key27": "4vEuHtFMxKEQPfsgNEfU59ykyBXsVWQMT4JBxMnopc5BUpKUqfJTMmkAM5aw2xJkRvHjPDENggf49i7ajULSx7dY",
  "key28": "iBdhhJn7yZQZVo7b7mqeJErFcbCG3GnLX11gNrByWKL5874unGLN742aCpGjqQTc7cRtqx4Yh6j3Wr55xspyd2U",
  "key29": "3daL1cXj5nuVQE5rvwuJtRUAhJbqq5Eo7fd5RntNv8Wx7qJBNoeKTvV2HyCf2BPnCa1D7jZfdYaQQhLYoTwoZVUK",
  "key30": "rD7QfhmWLLDCMZ4st3VX3ZodYDBzJQLzpqTq1cT8F4LWTuj92oBxUaTqe9xiA9mttHJk9ELfsxFcrYhWWdHi3eU",
  "key31": "4EmKkzGm8irw2RU8BZbqZkw8tgqU8x5CQC7pviDxz7SgZJezGEeQLZJ36JiMcmWNi63dLvDLhMzMe8q6EtHSKUKb",
  "key32": "5nDyLe3cShuoS8q4k7fMsnLoAa1QhmCC4enjrazCD52yVKEqt3a4puihfPx3RpvejseZme73ZacTfChVfsymVhPt",
  "key33": "5DWBcifppvFrq2Q66ipskHrUV1dbyVjHM5zVqddH5kQwYXEvKAXyuZJ7VzRsSv7LejSAu5Qy3R2oVSeoSSMbJuAn",
  "key34": "2VwyYX7ic7znKUMq8Bc96PLsmk5zALdMARHBqyzvnZ5rFsL5P9Yn6MMzUoT1gVnZMvc9qBTdVjA5z9WxD3BZr5sj",
  "key35": "43tu3pAHgK3ojHemE9M38ZZpzLyazMS2vLrBNsUTShi6BNETkdRnNopAMTvi5phxaSBMoWQ6uQvxjQHERYtr6dSG",
  "key36": "3VXDmpGrWWyuafDRRvTitncHWPVCEiXN7h9uHJD5L4p64aVgkS8vwjLqaQWCtx6qpaWi4iR5eZQ6gAoQY9VpfkZE",
  "key37": "4d558T6c3U3brXrbcM1FYp3ZX1498nQb4Zamn4XDjvwZP55jYrCxZath4w8hHmQKrwhQANXw34gK4G552igr2Dir",
  "key38": "5Hh1U1VhfKY97egQbcFUGFsGw9V6rnPaU4AP8LYcpC4GD7BdkxAw5cQ9wm755QTNuU4nSPqS9giVdxfwGmTu58JT",
  "key39": "2ryExaZ9YvBc6h84HYDZyy7wVy86DHtwLFRxyqVN2Ht9uWsD3kFhhmWrFnp5BPAprNRD9f9Lzktxk6BLUVUJ7fz9",
  "key40": "2TLKkvEksxsh68qh3yCKVQeNXTurP3ptvRZPsHCDvzCCQhAh9jBiETCdbHRvjXQtWceK9zLTRkXGERmFwgx5MuUy",
  "key41": "3u3ag9ffR2GXM7uXJrubHsVHzEtBBKLZeB9eQLYjT1bp3of45wdj4Z5LRV72mF76Z76BEs6XtEqe4kkQgkQJ4FZY",
  "key42": "526CXad4PfwbZ1bm4BUp7KLxVqqCKCUU47t7uzXATrs47FpAtjqpz4pP1K9ajFkaJRFUhYgYwkBAiSzTTHLLSFW7",
  "key43": "2FHVvBupwfC8KR7VYgD5wiNDQ76ohJYi2pH8NAUfDrsVadQXQqTS9o5Lz3ghBYo4oGQ34a8LRYnas2QGGWCHVjab",
  "key44": "C3DFmvWb7UdFgLrLrk6yG2DFTzXTsmzy26DKbDcrsHJe3r8ZDiDbo4ABFhS7Xo3fABspmAEDQVhK2oERHMYK29r"
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
