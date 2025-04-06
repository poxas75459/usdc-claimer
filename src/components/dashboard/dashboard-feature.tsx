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
    "aZYJ3s5HZ6pE7aovL4cpDCRe8MFucTc51W2uXJCEt1fhdqEAfy5wdJnUTm2kSJwBvTs2CnYBpVKgD2jb9ZFS3EQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BM5mHgCJYKe6bbBZe1Hi87Lv12uPd2QzJsCyHKwc7cdrPfxWb8BUf6zVgg4meiqfPvJk1LQnHaBNYPCit7qo6QQ",
  "key1": "611WYEAooN77dbbwWZ8ByC31LRB64rejuUr2xsNDaUz1cCY92pCmLcQtxEvCaCWiCr62fNDQEujWQowHa4yv1m8v",
  "key2": "4WkrQByj5S4bQbDt5Gwg5qKj8YZyUgfA8fbbSKSwbjWYeDUWaXY4BoeCqud2oFTsS3kNhHBGA8zrnijsJki4cAiC",
  "key3": "u6jbQbJsFUjzYmYhQK8UTPc2QStwBsx1beYovkV2KBpYZP7KGNG6pb9gkokjhUuJoH7pprxXEdRfrN7eFwUuQ8A",
  "key4": "HkJAXEEYN5PRWuBtMJuxCdPfbfqYmCyAjjY4PzAo6EAeSzsrX399Aojr6gqFgadk1gbmLCs3cASSWyWG4TMKzVi",
  "key5": "5rSxBgfCU8Qtts3XpvJzBxM6M8jRzbhAHFLuSpT6LnYqqP4rWdNZSXMkfseHQY51UVekrJxntHmC1TEnKBHAQLgF",
  "key6": "2XyCxoUrzPQhirowBqtbSeV5xeVaGjNUqRK8WW8JWxPNPa4U5xC5QwTosHZmTu1qgVL7UPvKstpvBGXpgb8X4FU4",
  "key7": "67U9mWoCqbP8NDq3o7iRRi9QRQB8LTPzonpQsvohyK6FGtcWbpvTBXBetUUn5omoh2KVf6kXFGyJKCBWoshbSyek",
  "key8": "2q9R6v2DrWXyf3xmyWfFD8UGs9ZmJK6MJLwS3wGszTnSRpBHyHKoXUTjqKpwonWc3DfJy9cSS2i9rWA9b1xC3yt3",
  "key9": "4hYvpAa8LN2DuVA9K5SYWo4bYFZ9wPu35C2kEc8qei1Pt4GGzi4z97tyveStZmwsSr34awMmyBF5kG9LwtourR5J",
  "key10": "bjHafSWK9yxpSxyQoWJNdpxdF5VbYJew2srqk5tNnyfDVJVu6ffPbucAMfyf4mxzAkxVmg5meDgknwokcny3Zqz",
  "key11": "44XKH7TEtroKk84kWGrAPJwksro6dJJDmGzLUu13e76PSaypmyEsUkHSPmjRseZPyMMMBgywvSyJ7zvXAc3Qt8HX",
  "key12": "63EUmbayUNEWSiBDjY4Z45DMP4rdcEoFHK8bVTETcxK4xra6KV2nUoGRaESzZRfR8ufMSzvX41CRTrck2rEoZcvL",
  "key13": "3Kuu7mjKdSdfhh5ziLNtWKjjz41JJCm1qMPoSF15mWDacjj9i6DNDf6QJ74ZX1LNfT3FB9gxRBNcgWtVk3iMTQon",
  "key14": "5n5x4HvSEPrSMNk37o9FpK3FUbG9ntX1NFz3EGRPxdcaevzNyFmYTVvvYhuARaU7XTdGEiXUZQEvA249FJMVnj6w",
  "key15": "2Hq52e6akiyz9Kgyy3wBhibPTbw2A5Wjbfbd7xPyLfLA6XUaFMUd3XfqQf1WTjZikaHDL8AxCmEbcCuxstBvAnbV",
  "key16": "2gHzSJi5EYaLUXvTwWRxiKunsLRWaXAwjudyPSjPKh8PUyxEm4QMw1cdNA4PrqsAZcSRKZTVu3zoMUR43TuCWtei",
  "key17": "5LKx36fRvW4Dc2YF9ejL6Dr7Ej7Kr3ue4b1Nu5RRmnL7wnPw9GNzkubLTLiUeHp53RERLfeyotPF6V8RvT1YXC42",
  "key18": "4YMx4eyFa8UJaE17vJkQxtHwNoVdbCXYomv9k4z4emJ3dT79KN14fNurcNNBFbHUYMJbCn5WG1iFWoQzb3eKtKe1",
  "key19": "2csWuG1H5QUyxrbRyygfXJrc44w2qe27jM43kJFktYupLWuWb1FfZATJArm1gAJM1GLLuGRneDNaAU7apaJStry4",
  "key20": "2xFNrP39sAbhdhEToSZLx3x7jNYYZdG5D3N4sfV4oMzBj4BLAZadZg649wLobo8KgahRN72c9hjGhZjWAPAA2dbH",
  "key21": "3DwWrKBrxgrLoPosZEmCfSzCYSJqYbGYGB7TAJuY2GHUruGPUN131vZF82EQ3w7qR9mBvXedEc8p74xTj123ARGr",
  "key22": "23xvnpFsfKUJkX2SEszpV8FQwjkec5nGqnCksb8aMi2Jw4E2UbjHF9f7Y2CSqNA5P7xQwKu9pwPUuXifTWustb47",
  "key23": "35w76PSkTV5TJE9FVV4bRWmdsCTE5yEkib31LcYtvgrDuRvBjLptguaMRG2hMuUsMmX5eAVVeSxnyuXwidkjhZNd",
  "key24": "3uWmshHd5csLoFCjPzhoBzLn3GyeD3mdVpNSGdUeyk66hqccDbTJbJfKqwHpGPeVZgmhBwokiwhaLPxvhbTX96qH",
  "key25": "5XNBgVAYTXN5ufskz16ueCUnQjtY8Jo5TB46ocWtM3VH6QWd7Jo5VWZEqm6QqF9cn6kTMuxYvwuNSVjEoXy5bS7E",
  "key26": "2m6S9xx2wLCxXg54Btwpj7zTjeg2QMZj3FL6cn1n5yD6mzPCUjbGxaaiAxBeLteXrb79wPouErct49eVeBGn4r6a",
  "key27": "3tnD1yyV1WV5cVPH1a3bAUCTH7Yy6RqoQX1r88GzoiTJc6TjsF2mZKYjZSmdZsfmBdVG7hcZfqCGkpSS2L5N4cWg",
  "key28": "5PjtD2G6Wsy8jMrV9DKCHabgngEobHQU3Gcbq2KYrvnkRA3KuEizRzBtgZX6rvEUNLtS8T3NiAtzf3pzTsPsKsvw",
  "key29": "ZJj7Wx1aav3zrYoQA1xmN45cD5mSBehm31CDtviW1bNwqFZeh6qULBT4ZAhyvsJWkegmjG8w9A6LsDoXEHUvL6u",
  "key30": "3Ba4QJo4aRwXSqNKUWPG9TD6VPmLb9XZMkiZQWeYgHfSCy8nFiPqF73s9pJ3MP8aQBxYJC5MbXgfqsRz6FNHcZXw",
  "key31": "2ky8xUSQ16uyfypNFJ43BK5i6UCeCYsscjW9qpMcHW1iaeqo5c1yQf1aH2cwbQPLdR6ajU9kZd3zKGt7ZkprvBPj",
  "key32": "4HbcFRygh4SXp94nxRFudAvEir9ty7jnwL1Xvs9nzgkFFaLLKyNsk64MgW3dJR5MiezPFXhrACtEc1qxCy2QgHpd",
  "key33": "2p1wJpXEXkBBx7sgNfC9ech8bM8izZKnmCdQREdg6zgPAeU9Wid5DYmT3GF3WCiSwuFwoDo8UUFeJdU5YWNYoQiS",
  "key34": "27nQ8VqUnAiks9hqpkadxr6nQEv7RuzCbMdF9VpH4qnKRYyFdHZsWDUbptVzrtcKncvyPvbjBB5LdXz8mR4DpR9Z",
  "key35": "MMxHP8wxyHEtocR39qt5KhwSSuUpEWGTVYK4ANwoayGcnJvFdXnp4pToZPdPYuVxevNGeUJNGoP8Mu9uLKHx9uW",
  "key36": "5hGmzQy5DnbSjaWZPF4TWjngz6kSXRE3QQ58xcfEe4evUtuPqnJrWy7BPvmDCcJcQQhwkUSf2n5Ug47qDW1sQYwS",
  "key37": "Bk2j34ZEWvZ4Mv4hFfVUcj6DEi8pxwrVGTZ5xhViM9g1DYCpeLiaFhh8GB1bXBjVPP7ioYnrzFKAtZxSRtwtEu7",
  "key38": "3SCLXo6vJrXCY9mp8nYCGusByjSUsqnLkEWHoGgiSsWF4UMNK5ZhbmaKHgVqpZTMNfDWPSVGPqyKx4fYv6FXgvrb",
  "key39": "5AtNEEFXzakwBkd7Fjm4Sg5PeqKpDYvZU3C3nKcQzboJFJa2wdRmArFuAK61ynsRAbqQyToMpxmY4C2U6Y8eeiNf",
  "key40": "4ZH9oQRgs2NJEoFt9DJ3QZkHT6K8n6hu56bNQeoVE9t2qYVJ2AHTobDNiCs1HWZw5CVH6XjXkZkuHtxdSZYLTVaB",
  "key41": "3D4cA3Ci5mr1GE9FxfDpqDQnrC3V4jdWJy1c4ULaj2wV72WHUsUGNTwJP92DDY3wvAWHtidpGV473zDzbxEMyUV5",
  "key42": "61WhptavbwtCfF35DSgq2QeAto5Jy7vcJvPqzUWoQGA4hKaJ2q4AAgWY86pfxtpJqEioztMbTE4XdfijFZCwQ45b",
  "key43": "vMjA5Ntx3xXyNSGw1JxcbCbfcWooY28MnWtXpCFzc2gQTcNNBsWB8r5WPfARevmTFKbQpXQSpJK6sS6j3gKKymz",
  "key44": "65YXPXKgUraPDr7bEGx1azEeccSPzzZ28nTerppXRAjg6qujvFzeS2RXwYBe1sWdV7uz7bNgKj15kywQCYVDA5rN"
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
