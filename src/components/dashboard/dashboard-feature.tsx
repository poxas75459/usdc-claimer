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
    "2ZaRNuBSDxTLtBmDfuC19Gev7hHR8PsWwGYbnTc1DdgD2KQ3cRRctwnBWL3e7QFqd5QLWVEVCMzKFFCMPknhuy1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ShS8xGRApyGZGVFbRHs4rXjcUcmQEkxr2wnguJduQTEq3G9N4rUPgPhzu8Fciq2maocg4k19GNUcdvmPTsvkTm7",
  "key1": "3x7joqdhhfQHEoRB7MNZdTw2sJ4dsjiuXqsvuKa4dZNjUTPupcuLwejWfC98kHsbacxyBhvnwm5yHwp6uvaP2KLs",
  "key2": "5r66HvUmHv2M7C3ht43UarRMwzR7aFSrxaNjyKuQFzZTJKyRJakWrNYRQBB8imqG3ZZCvsET6ZsEDiXwP7DTR6wL",
  "key3": "3GSDEUXndeAcAyRMw64t3aSKE9KFi19vLNRTkPeUvV3Xzq6ciNbLTSizav6PXxUWr8GfjvoQavAB64oNJAoEXi1K",
  "key4": "2UGKuZZZBtFNxpttxWQLXS7XnQ7b14c76fKSvdWQ89Db73vh8k4zCWdZ5anML513rDfCFtYVgDr5XATcRCvZ3D26",
  "key5": "M8XUPPmxhNkYwAfTHD4xjuDAhXskvictMNtBJ8J84SMXhXUzQJ5V4oDqvci6q9wrRJuhShGX2dM93CWVojYqE7m",
  "key6": "f8SnSAycBW7TcEyHwKnYAzjkcnCKjNxuYbZ9Gb7eYRuDYkxNE9ZDe9cbRVXFncBWi8LYHs1iTAyo5mxYqJ7BmX2",
  "key7": "5rVagzJ5WZKmYLv1wStpTRAyrHxj1nTvWqfSyMTsua4q3k119qcnV5rLdyTaKdZoWuNEyY8QUJkcx8BASzDPcCbc",
  "key8": "DhS1X2LAWRFMU1WertDgxZT1aT1gxqDkEGZR6uMmQCDykWAd6HwaNy1euw9H2GGkCfhoFufwoXzBDQdjsZ4RkGp",
  "key9": "47gLxBVWspRc3g4Q9DfnyX24mHoP9EVu1Zf6uAtcufE1H2wz3sv8bE81F9nmVfxbrasGG4dJZWp223acmuUnrAGj",
  "key10": "4r2cCdgE56roaqFxWHXxtpigrCD5KEQFiNu5PKFNJw3atS3A5MxSttjcqNm51MEYUT28gW4fhdRJMrLktMRXdAav",
  "key11": "2TKTBQQ3ZnFAjKFRK7TwDueM8xX81qcF3mzSLfs3oqkBmsL4Xr4VxWkvE4EpJr2t3Xd3eabN7hDp16VU4n8vNa3o",
  "key12": "4oQvFDVmJgzbb9heM4QJSmutSyT61HhNaN17r5gmXwEc46kMjBeGknLUMGVKk4vQZECzB1JPRiG7yLgrUWAqrDaf",
  "key13": "2JH6AdYuUk7HUQsLvubgthZtPGe4yVwQ7dnH9wa96k1r7NHSoj3Ez3uMnbKqX3LUDpgbomdyZPXfWFfN5NpFbGwk",
  "key14": "u5gt1p4XUQP8KFULR5Gmz4ypxvxA8Xsry9VPEFjZzK5FQ4L1U9jp5wr844nPyEhMvL6RtgGXgGNxfZXfgZuDJWe",
  "key15": "5M5EdR76krUBg5SNWLTr4ptx3xZNvja2NM82GYy6SacHMK97rNpGQGeNukVsGreHhMkEoRhpZNKWVHRfAACuNxqi",
  "key16": "2vNYSt3MoN9fzDoVhCh3HY8kTiwozTvQKRAqXRxTgk2bnzkbhMD5f6NLGTMtFa6ywaZi46zhg5xS14Z5ko3ifm5X",
  "key17": "2cawfGmrKcMfq44utbDiXRb2GMPaf4BC668aUeHbECUFnu7f9QefNZmNQTERZTWJYJ2hVfpEEeiTLdoEdZN8Xzzg",
  "key18": "2WfQLTrSxP6oMW1M3aK9NG5XRKL9skS9kcQcuFdFAVW6wCvh4fJ3m2hircqVTs3ysDuz2hsJ3WCYrRqZsixzR6hm",
  "key19": "2Ha4rXPQhURNbCWfYLXVLQEYVWx8X1qZvW1byj9AJErbGMWWpMFW8oVFTFgztUNVK15JnhAaVLsENQXUBr4eLcGr",
  "key20": "4QLiX2cXvf17eNqZenJ9fmSesePANkNbwjYGFt4Vuod12MBExj8szVhzN1onab2UJchc16qYwErpMpLqo5LNzMtK",
  "key21": "4DNwjaZCyZpqPbxWyzhkmdcCigkSy9g2MwGgtPpKND1XztyPvUAPvHicEzkyx9oXyq9dxCQtpxf3WD4UqDLuSQ7J",
  "key22": "5gsKdPvKFVsemmvSmyx4sraiue2VdNg9CxnBkC4KRVBRUaS8HCoPfSTEfgN6LtKRsvLngyc6W7x8BiPNR1NitPee",
  "key23": "2SfuBURrqDgH5PXYWf3vw7SyhNmvvtBxc8PPjAxL5QKz8WfCi13tQexdcfvSixXqmWMAWhb9WAfjpMZ75cHsLSMr",
  "key24": "Rym7J3kR2S9KF6SbAFhBSRHe9u4SKrh8eszeqQ6tHUig1mkQCfXjCiTsXwiZTZLesMHtvKvGzdaT9wTtqBS88E7",
  "key25": "2jj7RvC9gvCW3dkwf2aq5cvjtMJaRuLmtXFiAW1e2iWpwpgfwUUNzJQEzhsTsq69NyasDPCCgkW6Cf8UW8g4USyg",
  "key26": "dTyyCHJbsiod2D6WvCZArNbVNQX8qnoLrYpGkFibvMELPKufv53hjW21G5WLCqXoyvKSjWhSGPxY7RYwxdSoZPf",
  "key27": "4Ke8BbhGAABmqnn5UTyGaZGUmkHP7FoTkAbpgAkMrGrX9eP18exzg2XLrXSe7vTKRERg1Hs9MA86a1ioZVE1Fijp",
  "key28": "4h2rpeMw1sUWewLcU9f1Db2tyJxs7bz67YpcGHBUpVBa3E3ZGpBYbnLj1DY9vsVnmjKGpfzjdb7Qfnd4J1Jx16zE",
  "key29": "2BBHxca8AA81u3d7w4eTgQSJk1mVMQEcoXnLZ6XNVpLFjLKwUWAJdWG4G5Wz78h8mxhkmVxJAVH6NdxWjX7GgxeJ",
  "key30": "2Ws8ydGiPhz4F5bNPPYWtV2TWFZfcgSTJXjexy3DTApMfqNJZNKw75ayjDfqtpvyjMHsvaVpsWwUrs1QbZb6Z9rx",
  "key31": "6efvEZxeuAYYeR4xwJhL8DimP3ZhBFvoEruwYUAd6oM5MjFnxLYT3PDgoA3Q2N3s41VGJS4jwpFtrchTphXWTCo",
  "key32": "39tJAqJEPxEc2JKhwy4Smoo3zek3XUwn33ijNwJZjVZM4Jru7FvdgrsrTAhtVNdYn2dhQBUt2W588LTAT9N93ban",
  "key33": "4UjDuoZAVEDRsBPEMyJw8Vv8t1ftrXVx9AnAwM9VUeixk8ZgaXU4RKkroYCRZQnZyDqPsHW8NVEvTLQuKU2yrdCf",
  "key34": "QgWZ2KauyV9tvqREbKgmAuxgEuEFhMrTLNpnM1vivSFyn17Er9LeBAWZjzvDLZ4qkbaWcaCcnLC3yWbPiqqTt9j",
  "key35": "3ZXJWpLeUZrXmKUrJ7B33nJmVoTpURCdSNZS2EWurMfhhhuxGweSoz3D8hNBdwKjPRDWx4G4T4gfProygEFds3YV",
  "key36": "2gR9bXtjVR6SZZvKqJzh4ZUNNHmDsJZpHv9MT4R1TduTtYM4aeMR5m1cZt2nmg4VM1Tt2egLFvpZRGSrf5KWKNqD",
  "key37": "B6G79krEKkbCmhMmHuSqGXqUafU8ARvUmi9849rRLeRe2oe9d5dVyhffGhVuJfBb7MDiq7U2c9kAL4bEr7nL3Ue",
  "key38": "5yqR3TDBaBrm5oAjDE3ryVdF1fRDjMNRJ89n8YpcqUefR9WsnbSMXjwuKsoHb6bfHTnadw4uupbLdAPQqcS7dmrX",
  "key39": "5aUjVREsapUcKxLWGPz491nnzhFSaJbZWCLjdVNzxRhYKzumz674rkMkRjt7mUM1wB8XyBH7XsWdfTnkNFpczJfF",
  "key40": "yboAs6JvT6LP4AXgRXyLrhEih6kEFXUPPghrCiCbv7VYy8vfhmS9BeSt68s7ciH1F8wka2An6HRCTzMZo2SN1E2",
  "key41": "Yv2GBX2JcQEFUNGXM7Q4vUSgdzCpDcpMDeMmYXCEE9a455AxawSGtcb3bBycezYqj4FsycPM8xV6eWNwddEdXva",
  "key42": "4u3jDWb2wi3hJhViSsswcKAJNDLkDJJHFBYyLKBjbX1EBkD7zkG4qQNr892BMqC67pX4TFdPqmZ2MzqUckCeUoTM",
  "key43": "3QjUFzSNmXvnFR2ukVsvTokbPA8ZYrxFmr7y7aLC17WnfKS7tU1fWTAvuwKM6239dv6Fw41o7mvKYMqvjG4Fbcky",
  "key44": "2ivvFGW5sU4bwAUNwnpLaXKbRRyH9Gxdfd8bVRekY8Pwfm528rq87aVMG1fqwoy1FALZ98QfkGpkync5jbi2NDQA",
  "key45": "4RCEUDN1Y3AGEhYf6Nn5Vh2gDuc3tCgmFidubw8ZAD4uztmWAEgk9B45p4BKn2FFiYDUuLJa14u8wbW2mqosysJZ",
  "key46": "5Ah2tiMdQQf2dZoaYVhcihkVkuMxtAZukTBP9XXnA3kM1KQaTqoXctTFzDk4L1c5TCqxrMzhUuXgWLYim4GcqQzF",
  "key47": "4y73EJGNEPqWBx1EmgjNNgE2pfKAmFiv1vz9cqXDprLjTxL1Z7qgoHnQ7e1qTLxxwXv2zuTKcGfRtCPF2bRUppg5",
  "key48": "3mkUdXtEStwdN8UKiCP8Ytcts5pysiQmYXd1xdSCa3rm7TtCYqpzdPCnjr6eKSPJKTaXs889rH8dguzou6cXuW4Y"
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
