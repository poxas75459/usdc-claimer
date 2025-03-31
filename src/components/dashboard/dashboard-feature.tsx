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
    "4qgSDupXZXoNK1ahqFdDptoruALi4VxebstF4a2GzJd5EmE1fkK8JCmVHn74ULgEfqwifRLrd9DuzJnkuBdJcT7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vq2qnWKF7LocJK5P8so9cZ7PWu95Mdfe7Z1Fw6d8ji5vR8gX7d8u4jV7X8d2SGmRmqKyhBWJbrpkwD2LoLpnJ6u",
  "key1": "65j5JKNpJ19y1483PH6qxiySayZHanZMn11JSuTnbnF9jCHt2eHVcof2CVvKMkc5R1tT2HDr8RUET9U73PhtEsN2",
  "key2": "3D2Lrhar3NxkzXvw46qjbzsNruqZCgZiMiMHM8X1juBPqoXGYjrSTH2Z8zL96Yv57mbq1CZVETz1ohAH8tFGkG4v",
  "key3": "5gLJwwM69QJZU2DvxLJxUBSynbiZwMKpC5aeTUgaBGRnkcwqXpdP6dFECQEyRzpETFaf4MZJhdDXrpSdiK96QjaC",
  "key4": "R69v9399rBL3HjnuBoFfY35teUimCFwLr2RA65qrSA1K6qmb26FoohefaksYSBrWxWcE5aqSAJ9z3ue372UYKZK",
  "key5": "4nrE3RbE9AqDQfTfQ4BE1TzPbqVN7vCdeEyAqTSrpqWNmVo6QCQQMdw6Eg5TYgdAFFaUajSqQCXoXCgFNMuZGM8J",
  "key6": "3aBYpa7y4b6oUyUFLo2gyamoqzAfmkCauWfoLg8nKz6GpYDrpDXSwfEQhBNKCP9wWddDjqCGTV8HgPWZnF5ZZjrn",
  "key7": "oU2Wv9CgWmCrrnUvvJmgkr1ckGCYeWG4g1EvuNyBFAc8qEf7Quvr63NMR44G4Zeg6qcs6horezUzkGruNKA6wtc",
  "key8": "3Viq1nyhMuBCUywzcYUnaH58xN6juZCi4Q4AAe1FEYHDbHUz8mFzGbL4Xpdayn7WytzY5WjS8u8RgoeBAE2WkCvC",
  "key9": "59CLtQBqRDJkFVSE3qLT7yCUAiDWk8fPjryoHUVKGwni8hHwspzk6JvxAHMWmpgssgxFXhWan7H1Ghy4ezffJ3cM",
  "key10": "5jdorBotruwZ7UTMnD6MevR8SCsP7vDf6AgZTkhVKKnaxnEVAABnPCZUcUWT36PWzi7YYa97kUC6v7jtVB3a1p2s",
  "key11": "46woD2Dr8fQ5j9yB53dbVxiH1XDkwrpEQr4euRjaQfeMuj6ZmvK4xBqEqs3TWFD6cFCcPNCeA1X1qEjh9dAxJEBp",
  "key12": "4pQLaNgZNuHMDCwbbUpgGHSB5kLnU1h5LPMTAcvo7ChWC3G4fXhWACAw33msRN6WvcKK33TGtAxW3QyWvy6URjwD",
  "key13": "3mV9R9h2X4FLSvAKGJhRaoGEFASEV6We2qsRZvyRNB3ZCfdA6H5GunHZJzjCHxLJ9YjJj5p6me51s3wHhQsp7nan",
  "key14": "3FACTcDht4CLLL7kZkyrEFVQoDoazkWJWG15TmiXP4449Y3APfjnBmUPuXjLBnoGPAVsDQrb7m2GqGJdy7VfJ2vq",
  "key15": "AYmkkgietsXuz1aBYM9dJqZcmNfdHhVBNCEnNeb2DJ6zJJNdX5EifVB53PeSaFGD5MrGJkBaJbFjb9wRwxMHJYX",
  "key16": "2DFr2uBxVBauuD1ECkTAi7P9etSCXENN7c9mKGmPTBgG43VmxY378zfLnPPLFBni5tscmfG3Ypsk6odmbfaskm8d",
  "key17": "2BbKkoPajmv7TFgiF9Y11JyfdfQHjCDs9HTJoL3Ha1SQJpDKJ3twWe2gqhYxsx33mZrU1zQuKC9G5xo7vykmr7sE",
  "key18": "3YEbFFzUpNhGdJNubFbdwux3xRKwu3r8xETZKmmTEuwXqivJ6b2SsGBQJKFo8aRwDx4XE3Q3HJLgBiNZVCHBMLQk",
  "key19": "56UzcmAWoAbzSRCUgaSzf3bycmKHRsQ8zwaUBRMT4Gs9i2JbLqifVkfocdxMphjQLEtANPCXPCuGLkRg7EBySncz",
  "key20": "5paBvCK8dqErKXNqGggLsX2Ep4yxFvtCi9XSyzwcr651CNpbaBdAKVNawmBURnzFRWATNYixAUjKYRWJPS94sKQM",
  "key21": "66ixArRxZtEyGFYgK3n7pKWcHM77rhhxqVjb53CSeLE15EcfNAkys6XGbcUuPN3v5h7HMAr7MEAkY3XqfHLi8yVQ",
  "key22": "5jJooTyXkuFB5Viq8q9SDeuKjwsEDwXzJjcyrwHcpvJ7f3fcdg6FTktgDuTcAgVTubeooYWFDbqPVxVYFi7Lu5fS",
  "key23": "48LzrVcymr1rJsji85t8YMkznMoezgPJaifoxiPagSa7t4YYB5VHuwDGakaeRe1xKpkHib3UjToZ1N2BDvQ8Wp5a",
  "key24": "4PzFxQo4dpSXmpbaBm1Qr3M5x5yNA537KsB7rwc2WjfLk97S2XhCiQY9rhWrYbmFDaPHSVgzyNsN5FthHMPU8Xz5",
  "key25": "4jTZ5gmPDkBYjBdhmiGZk2f43f3LAaXDbKpHqL3xEJu65jaVtQoeim9ZPuoXn6Eo3CAKrKbnkQocJtjsfefgacnV",
  "key26": "4JFRETVqcnB9BUtgrVPVtChhNjUPfN97PhhfGY5yD5xwLWx5tn8zCvCGNG9mnxesk5maCLykePd6Z9eMUoNKk6NJ",
  "key27": "2z9EzENYo6u5JvaEv4WFer1ABhHetepf8BbhUskMBL8b3kUue5GAaVJdnXpHq57cXMdkcYaM2jMy5WkgpapckHTG",
  "key28": "2GcxxEtWQe2iP8JYk81CbPmKtEacFbZnrU1HTjZBm5iABSFFd8QVPt7qmurdcRb7o5DYbYh8n6nFL4w4gYyeSGhr",
  "key29": "2eM5fBdK3KboqEyD1P8LoifHhxr2nSMRTZdzLEdcQRFaB9LbtJT3RWApuezj8nJVMr5nKBRtn96EJMJyewFA6c6v",
  "key30": "48nFkek6sf2WjkTALkEyuMgronWTfkpn2pbuLc3cLyuaEbDXD1UvH1UWjT4gGg3MypS6AVRore3Ja2PkFjKXuJcm",
  "key31": "5WsMSoxHv6S4GV8xMyZyvNiUCp1PxrxurvnzVzseSdWCZRm3AuZxU41QfFyBfX4HK3wvMKaFq98J3XBQoccXvGri",
  "key32": "2HRnFcQuqS8VxDYAqTSk2c49G7urgTLiSFzVd2EvP14EbThfLoQzepCDHXeSua3qPouRthcN2CLECeHy4hkeZRQF",
  "key33": "4e24HKqneNterZMFJXXamdtwZ8ifucsm6g3hK8X8Lfi3khtvhbUC97uA4QFftEWPLJCbiCsBguF2VBHRLN1FmRAC",
  "key34": "4FvMSz1bJH2fprzLiRkW74Cxi8nr4pQ4Pa6NWqivEZKENpvohaQRURJKpip8MgBXCrYccQvrGB8BVRFBEZm8BZhq",
  "key35": "3xTJYpS64vAhZr4e5QLzfNLTeaCEhHmTMjtnb1YF6h6GbZ75q8yyRtxnPSWpovXLJrknW9oLoi5hY2FaS3jAkNVb",
  "key36": "3mkJ2K8G3wBoKBvWgtpu7rH9ZbdH9aG1r7zRetViYTu3uwSe4js4syjAEQ8Z2cGGeciEnyk3hwbiJpqkS6s7ZJjG",
  "key37": "KViNbT9izNDY3fb1k1MmyDmuktZ4LKzpbCHTsWdpTnQL86oymavBjz9r6vfVECrknA6sJXHkkpii55GJ9pMSeqQ",
  "key38": "5hGbfbBJ4aB27rn3gMMUVNcaWuwoXnvPptW9hn3HMkufs9HMxo8bxvhXwrCSx8rQJupg3NcAcEbEcXdk2vgL6WEW",
  "key39": "3L2uY8mXPDTxuK9wF1Fj2NPg2BJ1GymvBgN9WVRfNX828RfnhHkDyYWYWMsoSyTBovAxu72gUNMk8R76UqT3XSJx",
  "key40": "2PKL9DJgoqtNyXcjZvynYZXNGm6QVx2F7Lbc3LEpCYjGr4zS1tcpaXbZsGgzHFmmgPh1hUoffTC8TinvAqkSYXHW",
  "key41": "MHWnoJo3F968kgNR7Nogh6VMX5Hd6nk3DakFwQhWmBtQimnSQuVTbxXsqfeiLmEGWbWNcqkXKAQN65TgAT7dtio",
  "key42": "5U2WMC3DZZ8sJ92o7y4zFHpcZN7nY1GjgXCNxqmk8KLVdy5PCaNDNJ8P59BcHMCS5D69dMgRbi1bCeL4VXse69bY",
  "key43": "65wE9B4rs4nDi2RaZxRrrCusYFxf19YpLm1NG1oNZ4QQkHATNFhxwuUV75fY6q3iBvT4PHKNLxtYMnxDdGyrQsLv",
  "key44": "3bf1cwFpNcNPj619EYuqEE68vyaZKwo7bv72jkkCEsMjb8NFnxHgcdJ8gaEYMf5nvKYvZEYZqJsEdwLo5gz8iYT9",
  "key45": "4dzpQSmhL1VcbShcqjRj8krmamrrfSW8DwAV4kj8tqnKto5KVtd23BxbB7fkv4AJRjuvSVX25HaMFNYJTSRx77cQ",
  "key46": "qUFXwU8x651N8y5UMteHLsn1cZJtR1mzijV2fj2kFjoymZxiG8pTSp7ZhHytbwTuhW4vrEdJcfKdfKKL8HL6WMV",
  "key47": "3oV8fftquNwvNz5q1sRgGyxfv1FFVLvC7uBUoRZiExBymWuj5tZHK4gAs9yGfjPkApjysoASKpRcDvkAuShF4pca"
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
