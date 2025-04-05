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
    "5KzByPpZhHnb42UCyvfUUwW16U5igrUGSmRQznQ7F97uEkaHP3x277E4K7zep9pTJzVxyVojgiiG91ehY4pEwbRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jBCM4QNEdBipXm6ndQZ8kLjPxSxMDaFCi4Wbem21FoBeVKMJAoaPGAZWZi2HHR6v8oXqdDqiuCCGwdWXXCpyCUC",
  "key1": "2mFiq3aS4XSKfQZeWXSyVxJErECY5iooBgYDnSreACmM3BJ5QmCgZ5mJAr651ayMQJHv1MRAru3mVFK1E7hS9BJM",
  "key2": "xFk3ie4SAMnTnLcjLAVsRajmnVjPgJrde4dyMEitthKuBS28t2fpGtHAqX3qzNmNsDBpHu4L8XUHxuQKLafGkaz",
  "key3": "4jSkzgX9q7CLFcsgctsuGcdJKRyY8tvfiG8LFat5GYWh1zDXTfUR6KN1o5errVu42oLy5f4KBhBRy1TYkf21SF5p",
  "key4": "5wqzkw9eKHR3WccjUwA3NP8xtDHnkGGUHwz99XwWzCWzpLLnXK4RKiLKnFdEYVvJR23Ki7k9PxXY5xAyn9ucxx3w",
  "key5": "3dYyp8LJGeEwhCX947MzgStejJfqAdTgYpvasdvK94fbgE97MwMaoucG89VaU6LFcpRGT6YNEiW1uYepNZSdvS7R",
  "key6": "34SHg73rkkH2W931RxbuSFpFSMnuzqmfAo7VLekbLHbU6PK5grZzDSJSCcGJGLX2dnkcBBcYc6o5cLFsKFTjHK23",
  "key7": "5vHbEqtb6gxBGtu6fRx1ZDGP9BNMdjUWk3XULy4ZnXfK95VveHhrAZQWdvKswMJD6wiSkxnMuTrNkMEATVjwKcyU",
  "key8": "3mZsXT9mZa6riiaiSFUvZqixQB9gKwRZ8KcLeVwtA6mQ56Qf7TUFdNShP8H1hmdgdGXVqygWXPwTYrmWvwogb5sp",
  "key9": "aKUzNrM8wZLaGiXymsgWmZsrJnejRUPRAemqzL2xT5p11oJpBGcpywDEXKdb233mHnhdPEjAy6sgLfbY583EhHB",
  "key10": "3ZGzhqYk9cVE1g5q1KzzrU6t8LdztstqWir2X8rpcan4urTYxdRwwAs5GhFZtgoh8cRqN7UKRGtt1Vpccrv5rr2o",
  "key11": "4CMuvNKSi3sRdxos2VxuFf6kDvt2DpMPq9ckb9T6LRQSvKdRvUNywymKXzSZ2VwXxeMFKsr7WE6Q5427HxKo3JCE",
  "key12": "36xQ9tQiwNfo7Sh4eHNhh7PKvLry5hAthjPLBS2LbYyTF7Y2DpPypDYFeWWoctc9LozXjoDVRcbK3ygvc7Z4BtCg",
  "key13": "5dZVGhinNtiCJS7LxJoqnvHz1S594kvD2R18489RQF2RoxdDm74HH2ujrZtvuKJ4eaBFexMYwneEwkCWBDMBu6H7",
  "key14": "2WU9budrCCkszjLBmVkmRJx9k8zkwmbUViJVE7DYADjiEVeMQhn6vCoHBQQGUTixDFmVwGCCLmQmpJC2UBhuygjq",
  "key15": "4Fjnjxpqssdt7tronBAHwcbMbSdoYWRvmZLs3VuPiF4cZYci5y9RjqgXa4zN1gCLqm1vRMw46xJ3hd6EbJZhSHks",
  "key16": "CU32q7GVbRhGvgf7nfHY8s8ZjDwKQ7rzdMxQosvfZJ38QdXQ8gdcHLRfnynQtovB1L1cGseFvmjXoA8fTcsTxnN",
  "key17": "3hTcLYiyXzsEEzb5txF4ZiaJSPdWQjZ6pSpNqVY58Bqedq4tuuBCFbKx4Hc7xDBtmaLBCynbJKjBiZWWLBZGibcR",
  "key18": "47sJzyMd29P3AchtbhKSYq8BnugQN15pWisRFChhjZ2Zg8yQ5yrygx2r7Vr2Gi2nQnwPSmEXBXcCd15Uu5iSKWUX",
  "key19": "2nSa8nEqmbLPop3dk1hD919dJzWArt1w3mXBfx1hiwTqfPPmRGTk4rLbE7tCvxYgnRZfhL9kzT48bbZ1bdjKKLY5",
  "key20": "59bTqRJUjYnd48Xf59NgfG6vuytNEAop2vmsHMJKtjxpxNuF51aipQ3jVbgw5b9A4WmRpMo1dyacmLFMtAmdaepn",
  "key21": "3F8PajmChAYV8nKPXhDMWZTkFPms3SjfxqVmjue3E8z9EbFAbxzDeecu97FRxdFgbC2zZWgGoWqcPCEnnom93wXd",
  "key22": "5itpyFoMpnry8riZvWHFHWU97tqSqFj6oU7oh8oiYeKhahMC4Pn3aSiKwGp7pvnSLjvNfdQNEAsZsvRAu8i1QGLb",
  "key23": "W2JGTR8VhXxe6gSefRBgyQeCi8wTQGCUSmq2Cex1jJBow82ScZQmDkPdqidt6SBLEXXJLuSrnWKdxr3DwwZDnE8",
  "key24": "2SV6AYZzoDLk3ppxD6cKnvVuuk1LadCJZpFPPKKnRhvpujNc14rAxn756KwXfyt5amX749FDeHmZNFCHJJYqwaJt",
  "key25": "4LAtr5aa9p3Z3NWoeFPkB5627UyMQukxjNRU4ReR8NiDQcJbF9AYqkCKWmYS5VnFQaa9CbdN88HyYhiKPvi7BFUr",
  "key26": "2LRSEgF3tNk3e2ijERcZVSpsHG2ZHEwVQvtDLRpCYGcKQTWFjCZw5JaQ9Qx5ZR6ZJVcS6JmC1UxAjGRiEEcZ9EJn",
  "key27": "4oqQNZABq7gmGV2qFuEXKb9ascKzb83F4DRBUsLcTxPhViu9TvjGyWDkmLzZrd5TEthWED36X4MJmHJdHW7C8meC",
  "key28": "dbiztqDmJ2Zorqg389wd1HhpyeeVsz5MEvHJ8PWnvomkLW3d3zCuy2KWLcrhhuQJsTx7uPx2kWuu8vAyXMSgDzS",
  "key29": "2oBnwUQYyTHDsztiLYJp5s5QZ9feJvJhDorBbcierUSpieG2RjFnspyzXcrTDjsC6QMyRm6xYboqkU76pa9qaLoB",
  "key30": "54kDhrxJcgfW8awZyCMrzwscxhX7T7aV64zTXe5xwzV1wAPNxWnYEmKQH5omjRWsAEdYwWYa3wrkaiDXJcGebbDf",
  "key31": "4pGwrgPckG34SYdH3jCcTuqtvZeni4rPk6eXzEjXbk3BmJ8LjuzZLre4HWBKNbZ18uWcos45wTC414zvqeZcCp2V",
  "key32": "2WYzRgS95iAKV7PVtf6eubSmSEqQRStG6KRpZAkMXWaDN1xnnReeGuHsLq8FMeyutHMVSatwZRpjS5h5duJFfMTy",
  "key33": "2rSMK1vEBpPHs6SH1ZHkE55Unhec8GY1sRrUcmEDphmMgLEtA3JkpG8JfPNfDjzAPPTTfrwUAWyYut9tu5TT6WGg",
  "key34": "4FPSB8Rq1Xdi5k8xS89EEY222r3Z3WwNiaMRQohv7evvqbojMZDq9dNFwRs87ghKgw1xf5Lr7bYSu3pGCzpPbpv5",
  "key35": "5Xwy3Dg6pwggNZZGE3cYYi9utq8VUGLD5gGSsBtNnHdKdp2GvqLoNepkFeVjns1BMv3ksrGanUCBh6xwA9uQKzhc",
  "key36": "vums7fch5nPGseS86DYqDv2zgBEtiLvNtNjpQwWELKwLfhx7P4D6meLJEQxTAN7G6p7JqLAEXTDw7DafhHPE6Fk",
  "key37": "5xZUMnZk4t1x8foSSozBWmPh3XVa8iJTT5yNr2BAskjnX98g8vDeiguYpXpuPranFe5HEKhJjtkWSLfWusqGgtt5",
  "key38": "5gwQ7TAbDqcdkcgnC5BZdDCBhtZemEQVbvgW6AWivJb9sWZ21GeaHHw4eCTATeZ1xVUUyQW5LqeWqo99maVnLMYR",
  "key39": "4qMgicxNZHjLStfsoC9Fex8qvsimWWyuR7khaAmEpBWNrC5k8t6pLTctuwMh6PPz2YVDbvAxaYiD2Ek33KC7SA89",
  "key40": "3XUZViiaAsscZLKrgo7LCKdzQMwA7ZTWipmy8Xw9ZPtGg9qyq9hmYGsaxm6hFrHfiuHjdETQC4Dj645f1qw35xwK",
  "key41": "4oXczapK79NY5evW1bGLEMxWoo5UeD5zZ8QNzeUqocMCEUcaGFh3V6BLfTGTqK5E9m4RbEUgd3bpyhfyWGLwdJtC",
  "key42": "26zm9hFVpkDguwDVMn1iegbDtD7E4M2fYuNkczBAagJcrVHPhx6bKrk8TE2tTwn5P9n3TxJtyqNZNfeLEYt937tZ",
  "key43": "2JUvFJSrmcPEacEAekfGjSmugarALEvi7vMi1raD8TYHWiPz66sx8mtBiLZzcREu3tQyn2eLGxe4QxAe2ouw25fD",
  "key44": "5rB5FXoH49ZWy6Zqyrw1DGTM2MsYvtS3BCgoZHwupY7uSkTu8JZuhdHYh4jgvmWKejUQ1nsgPvgqMzaBaNPmpLr6",
  "key45": "4PsgTAcoiB5V9xXhCK89gVetrKhQAVnZPmyDsGG1X3ybRuFPZsjUq2pMVv2VYGszLdohpFdNGa2twCEqPqs25ZYt"
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
