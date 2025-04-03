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
    "2ZPcprnDhU724r8P1dwTn2SYoduDCYF2k2sDMKiKXYCMFMBSLRvgnTMFzkssnTy7HngHcqnUfGC2hsJxWxFCyx6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41FATepuQeCkFKfnomNdyqnyPK2QNgjucoYu1xwb9VWSyJny5jngFV4sWYXFbCeTaa8zCAJKvRFbn1VFouFmrHCM",
  "key1": "5eWqHz4SpWS5KeVGzv6cv2dzgsum8QR59hc82ZqdDqKJVDdp1oNv9Ut4oMpKAKbu4GXaAxd7iJyqKsTjEe7Dep7w",
  "key2": "2tttuWQQm5GG2MtSewrwcdPfLMopKvGnQhXR1KPXtTtBKgb55Q47cKabBNPdpntmqz3yXaKSbDPDYH5WWFRc7p3t",
  "key3": "49vx97GVVLUGWpFqWiBb2yV8GE8itufyCAdiA31SUeKwKumTyWQ2XwDseHhQ9dYCWw8emZp6LKnXEsf4kfjb3BpP",
  "key4": "2H6AQd2o7WfHCtJAnezayqBM2Mb6m2BNjEzhQoACm5nZgbYJdfXRWUdxoro4h5RH3vsXHKr99nzbeteT9T73fhB9",
  "key5": "4nQMVP46rW2gBfa37Ho9kiqfgybAn94E3anLr2pD7pZ5xXYu6mu8HZkFxokBZpuKywqVb1PD4FcYeev5EQx3dTeG",
  "key6": "5o7ecLEaujYMchN6PbnjHGd1cpsaXuhjdpbLdQGQytDKJ5EKYBL3x37FjnTNbiRp8UBV7zUXH94XEbW7QZadJh5F",
  "key7": "c9CCARCQ7jen5wUcGLEGtxCuQH2vsa7ejN2XRBZ5gWAcHPN4KfNfojCqTM367qcAzMsotZokvZVrLB6dSRoCagm",
  "key8": "2mza7sRWZgpvkL6jNmo6ECPrRTMnbw744akqTU4TEYJprwGacDkGvLbxHaNx8oi6p6bEyWNSJeWK1EQ81MkL49R1",
  "key9": "5UwmbNT5Upkp4KAj2TVDmoRvUFsVMBvq4Ds3cZ2sQsn387gPqagaWoGX1NHLi3qoa2ie5ogNve9k1FMrBPfQfUfY",
  "key10": "QC6exWXAqsnYeh7kVg27zZxpRqTYgX6QNMSsfW87Fsu3HoevpK3jLfrJvtZRFPhBLHbD5ZQ8WMnXSXxEmMGaJ92",
  "key11": "4gbdaqzEhRWSNQt9fENYFieJpHP2qV9Spny1cLGrWgMkrfcQrsjdVzr81vWX2YaXYGbBZHR4aNHAhnX1NPPCzcQh",
  "key12": "4pq1m2vC1Nrbp9fVZ9aEjPbbehZZ84DZnBPr7HmvPpe1o6DccDfSmehJ48nDQ89xtit6BqRqgPjC8wqwB2rYirCy",
  "key13": "oPwUxtmuzpC8EjMPtchA5UyNq92Yhv41zJzpBszmcoUHVVUzs4gGtZS965F9Hiuh7NwroZUJmtYnLrzuJsLhALe",
  "key14": "43QSwHcB5iY9MvCoQd8DuhRdCjY9uRdwLcmAb1hp6Aud68oeBpSx6upH8zG1NetAw1pZUbXeg1XUvMndnJChU9fk",
  "key15": "omCd2hLruKKDX1UM8d9RYGZVmogL8ky4Uyy3SEGcW7se7GY6rWdaTrCpUwehMTksX1jgKXdZeKqMEvkL9gh2ue6",
  "key16": "3Sa1kv69N7b2Gp9uKJ6GvRPjJfZVHyDSnVzinQbTy6zmfNwnoZQAJaViSFUUozYH6Krt1YEL2dACWeLcWELWcQRj",
  "key17": "3jBDF4uGVTbCMWFyqRcsA8bTrimcn8wgqR6JpomxXqtpdPrbuAaCJ2gsPyuPFSwqXsGfBCftWk7a8DRWwrf8QkCj",
  "key18": "26MRoLUGEPejsUgTFjGH9GMs3E3oVQQ2XN5s57wzmcVsNui4JPpdz9rpsCbuEXaBzWjpRPYUyPikGz1BjNjcSqKo",
  "key19": "2hyptweu2UMZpLNty6E3PLSSzey8FTUDoo5aTx4fndJyVYQh1nDkUopZkACURD4HmXy6m8KmTrZQT39DvYCurDB3",
  "key20": "3iNTi1guG1Uiz4jrbKGMdwNpcZxvPoHwyodZ9EobczGFXVvAEJs6NoFq5RBL6uV1hABLmJRreEhCfTikxqgKSy2F",
  "key21": "7gb2rz7tSNPYn7vvfunw5X5NsXCvHaMTriAGRPUhVZYBb4amQyVPixYYynaoQmhdteoXqMTNgQS9pxTyeXQDp77",
  "key22": "5gtNEorMZiDmx4eHyJQu2fzkoYNP8fdf7TmEV1R8WFoisq8Yh51SrqtpFieTdiASpgRcKKki61z4GYYZZbBB5mTK",
  "key23": "3HBvQ8UfwLHm9sZXhSwtrQrNj5H4mvgAVTtZoKrVFVjBKDeDSoAVxUqfmjZg1cx1ufLt6hD6ToGaqYGWzD2U1Fnv",
  "key24": "4WR5voPPRNg3zXmFXuDpegHRUQ84Aj8Wp5QSPFogoaWVzfNSUJsP5LAngBfmCcZ5FvkMk3Ykv3mUs7U1vb6tnNbo",
  "key25": "5LQ761wHBCmr7XFucHeVP8Kzz1i3HVVh2jXgetwS53j34UuKc7QhbCHYMcYyMFuQdNFVE83jUasxfzFpHmhmA5rR",
  "key26": "X7wA5s4SPpAqreN6k6kuRfHCzDdmD3EQuuzr5G6YHEz6Xg6LfRZ5DWgaHkrDZucQjG4QrkhDSkR9MehjfdfmZRn",
  "key27": "4Szq6ykBW6PcCkkgNuHwZBUriA8zyANyiHkBgPQhUqmULygdDsWYW4tpY67PggCaocryQt3nh735tD9cbGuRVfqK",
  "key28": "4V3x2CkcZLWK6Ynb6VgiZARPsSA3MZi3uEubdeFpeYEVMNdkMHXQoUkywD4YGKRgLichry9vjzH4oCorTWr3KpyQ",
  "key29": "siBkvRBXo8zncXkQowsSzzQUR66KvapQFVVUUBYLt65vprd3zRnZYL8EPH9oDb4Rh15utC6aJNxLUQJvaYqsMzs",
  "key30": "2zw2PZfHgbBq2hfAyueK4XWVmWLu2b7ExjprQATwooeNdeseUVjU7jztAfphFscRjb1RjFZ9TGhzEpmYGfR6uDF9",
  "key31": "2wkgMJ87D7LpC6EUot8s3tgkRdrjfBbuWPyrnTLMg4wutTpmVxGpmXM3i91i46LUDwjZdBCgXUrBgp9xMeucxrAs",
  "key32": "5dRNV6iz97tEiXi89g7DWCSEBpnynMpXgGe3hHUZD2Ye7Zrhs1QChp267LL7DcXLyWSydYkAtA6GdVk9nqkGoCrK",
  "key33": "3xNd46je67krUenfBgUmCHWFFMcpAiSba9sPmixQ1wydU4vRGVWKgYbVqmcnRbDncwDjfSJEtMxxjiN4RAqHukQN",
  "key34": "2SAFKCpxf7SzKbhcEfur1jVbBfizVA9H53XzAQgB2o6aSjQGV7NXNA6dVULPuXGd4c44eZTgpJN1KVm6PHGvEyAb",
  "key35": "3PpbmspfaPTPQRqdEBtb5RdnmxPiJNEgA8wyaxDCC7iyxeeox6Bo5ktRAP8R2n46j31bWo31z6oQakBUo4299ETm",
  "key36": "2ZVgJVUKDVWy68XQSpBZki8riwBrGkD58HssDrpz2KB56N4bP9tDBwPWcLkLf9hzjBPMgTR4rYPPiFYtQjmxKNBf",
  "key37": "fVsxGdFvJ324pRifjgZGCiDTNTcepLv1tYZaXAVYVqJKj87z1A7UC84UCiYGuJE27quLAz61Eb7gBgR4GMC9LWA",
  "key38": "4i5Ks8od67wzfumjnQvB4KaNREJnwUzxWvTs5H3FUfTZoJiM6xVL2GBLLVTbfe1MjFwhdnYmXYLKm7NBKuDJrzUf",
  "key39": "5PPUDZCmMnGUGk1Qn5SsTuWsv8zp2Avxd3kQafyiPPfwwczvRbHEkbxGPMnQ22MSLkUY5tgg99r8WJiDs1mSGsMQ",
  "key40": "2UE4A5ALKXywVEutxird2cgtTuhJZDxvmugeqvQS41Q4AcRoQAQJ6sACfQGn8ufr2Nk98FWHetwgcs5JZpobtPVd",
  "key41": "4uJvtGhPLQHZwbF1GHc9THNnayppZ4aXczPBuKA7MqUiVujA5XEnr9UjiuCEHyxvg3Wt7E8qkdsCYrLAbdf3PKC5",
  "key42": "3hwxUG6WTNTVeqw4sQ4XZLprex2oCH72c8o1eLe4YALuoETnbEXdhnsxx77tR78dmmycJUCjxKSNAwvByQsWekPy",
  "key43": "4qDJBGR5i6ui9snG76cxwQJPegbccY5j7Le1cDioHXqMHzdoyuWuRQX1V5TWDdY6n1QFMDNsd6qrQ1u2f4eyyrfe",
  "key44": "4ghEbCA7dqg4ehwM9fBsqmvUEUxNA8YCtzvkar8cPNpo4xTSjS9DpJxj3ekabMcS8niQ7z5PhUjGRSaz9cAeJYfh",
  "key45": "5sD1mXR43x7mC3FzGStKkB5ZWckQ5C32EUu84tC6wypJgn9xx3q2rA6Hu9VQ5gMy3zvHmSLrMtnyHjwAv5f9ihyr",
  "key46": "2pXREmJQWdNeQm9RT317Je4vd547R5C5JxoeT1tsrDiQGD6aPF7JBnQ2usDbDQT4ykfAr7SiX4DPSxS6S7CS7bGL",
  "key47": "2ay8LEkp4JjSvypzKdm1iQqpHJ9hTCzo1Kyguu1VLAigwNRVj9TUg6k5LrWBJpZGis1CLcC34Ux7eUh1n9jeLT8z",
  "key48": "gbg5yf8eCszmwMz3UkukbhekCbMN9qGHzQZ4ehhSrBd6AHDx6FhzBcpucuNGCssFAVfPpc1xCfkfc1b4e4RNEn9",
  "key49": "4RojCUh1SW4b1kmQXGexGXGVhpkk2dwGTwPjbzqYizcbmEnpB5Lw6rioCJNsUTjimwZ2NLok11qevTGmMi5KD6DY"
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
