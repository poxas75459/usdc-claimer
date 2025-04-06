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
    "4VMdhoNGXtGz4rWLsQv7a3N1nXzhD2mGL4qZaH2J99RiwWih6JyDVikK29GdWGzR1dwUWb5WR1HDKhgrFB1PXzK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xsCNLBQxGB8ddW7LEat89B9oGeg3ZTpodCixi7CkFHnbBh7S3a42w6c6AqLmeF1b3ApbLi8ADcCcFweLjsR6vJB",
  "key1": "2WzrZH3MPZ9GNbswfWZghaLTFPS4WE1SJsL9REoZiLpEdeCAY2R9reuSNU32d3yVMtzE7mqSGBCkXQ7FSMSooNQm",
  "key2": "e3QfH1kQe9FMFG7W6HMYv8XES5BPvf4Hf1RiRz5uxDz9obKWqxBg6bx8KK16xEg5dys4GW1NMmP2T1GoK2czVTo",
  "key3": "5LBygMkfnmKSkceb7rnJgRM22g2PPrxVdxrwJv2eAmWufbj84982DYzdA6hs5wGQrPV78Fs4XBNXrigceSD6VWv7",
  "key4": "5CG5ULV4CgNhhSCoBeU3PGJJRvBdBwRS5fBkFQU4YUACcune3WjtzVygvNFnLFVPxje5seywvBRSksL4wvD8RM5s",
  "key5": "2THrq8E74jdjpc4P2eVa6w7Q5opWV6Qvpt84rwoeQsYhJ6NM7F5yQURfrrxGgPuvLoheabYpBRGoELqMMHtdT2Q2",
  "key6": "5Nn21M8f6HHea16BmfjWPnvzWYbHGUaL4t6eYfNkAmtCFXvTtRTDkK8ATGGnQ7BL6Xt3PdNk1GKhSEFYqvxt9aDd",
  "key7": "3ZZTiQdjrQcm7fTapCstnDVZDSCHKnYB9iQ5chrGP8NCvcRfrbCD7wRzEpEbbPfjNnbxQtRoKHrRgR9puWtqJjNH",
  "key8": "x5vJd42CXgp24N8qeShL9HHzV34Z5oTMkjpdT2NsVgmmKXs6zWKcG48L554XBkru8P41zNJoZSrQ13J2qQatxUa",
  "key9": "47vhSZFMYjswVvNsoP8hzZzJBpmzFREHaMR4XZGLsE9donyej6iYQvNvNbY94Emm2kMvH8E1VG3UwW1uRR4JvkP3",
  "key10": "5f434YaNvGLecQNKRo928mPbmxo5HqtVCoQPWhnwssgrdgmo1uoXZGFECbq27R3wWCqTQbGWAkNKobPEPVG6CK78",
  "key11": "4Va19DNLe3YZ78dnxNjCkaPXqNKjcXCdoL4sdZruBJafBsPpDqoJd9CvgWBkQKqEbS9SQXq47fsNbbN5YuwaveF6",
  "key12": "5PU6dA4MyTME2E5RCQgdqGZzSUicqyacpxmQJC6BHPPJLVSKHJJ2cknUYh3VZYhkHp7YPyJow9piv9CgEJpXT2DE",
  "key13": "5ZNxZLZm1j8Qtiorh6gGqB9A18nFuigjTMzqshWXNeUNVB1vDbT7Bav8NGSziKZ5V7aDRrx4cg7xjCUD77haVb4z",
  "key14": "3RAWmKymioBVnNYTXrqimgrLrc9mbvr9icjFjddSSmimAVrYJ6mSuWrLM1uopThEwRumXfWpvpwVv5aeMFxeMzFW",
  "key15": "4TdDDaGtojYuWU4Co8aiYE7yeEtPaMAc8G5YmrYYpu8UfeULZzaXud68hEDE1fbJ7oSazJhR1jfaFa8iL3YPCYba",
  "key16": "5SEt7eCtMLsPwAyg1KWaQuJi7iFqXr9sNbm1tn3SaubzgQ1r4nd1aMsbQ3zq745LcmrGEZA4N8kpprAqkTU1Ywm1",
  "key17": "2DGzm3nPLrz3AG8gMfBsiPUmL2YsNPTgmupGHr8mZysMSBrQwsF2wkHRJVv9PG8LaqVfZvgCzC3MUbumcjsFwCiH",
  "key18": "2Q1LsmeAuEMUEAgxZvgNKaGtMx4icpfLECAjEq1cEKvbHL4DTW57PFhzBBXj8HeTrrzjWaJpBB6KVcZ3wCvEzddK",
  "key19": "Mbs3UytpbdGgGr7RdKrvNRLmezQ7WSSYGT1SbSiRCeJGXhgwvhLhfcEdYxcbscH6DG8seyCuk2uxk7f5ZsTgsZo",
  "key20": "fQKF9DSKE71eiELcAWMRJiEron5Khu9GmkhmTSHCrvTLoLK3DxNp1QUCzBu6y49Va1DFQuCiVtQMiAXx9vxZrAK",
  "key21": "4SxNbgAZe6mAerGWkAe2oP4ffVx11tnRtqCUwf6hhyCL6SdF6R5bBzUxwMvuQsPoQm2GAc2hXuKfqkhj2BT4X7aW",
  "key22": "3miwaUoHJigReiBDXSHTQsBe9BMKNAdU1tVBNYFrPxVhFdmHWBgcNBBdudnzvHB3UGtWDwE4SQSX3Qu9W3qSdpxU",
  "key23": "e3BHcgh5ghcjDmtffDyTYdkdUN3UAbYe8DzxzDRjqhifhDwfLGwCCC1z1NuFxbkJeM882GHydbMpwN1HEMuEAWu",
  "key24": "2nK91K4JfBBLAd1Keg8eEp6G73SfQE3vw8xALMwFV588mbxTmM5kS6UiQzkJCTdjyYTuSDDwrWQPy2pbDv6ffPfS",
  "key25": "4Ti4jX4QcC4TmWCpozehBwJUqx6jF1ERaHYphd24naGG539RuPn7EfATozfs3GruHFuEM8SjNRQh1QjuxZj3rMgR",
  "key26": "2UpDxZ522ECsRPMujQc4Qav7pbdUvPrsmDveGSaa5ysJjjqGyYfHs1sHDMM5Br3FGRfSbC2GXrNXNukkLyn9sAFb",
  "key27": "2yCP2Eb5fTD8STC79zUwXGi19uPwES8U6QzT3YLt49ueA1dmSYTKfQEDwveHLsPgVS4JDa4yJhswG4WJxoJTcSKy",
  "key28": "2E11CTt3vsmw9RKdJvwyp47AHTxvDJPgY967rhisbXJwr8GfbvqLQoSimHqF5RhtKvmHDEHk2a8R2HLefRVQ2n9o",
  "key29": "3hsLjr5khBV1Ap9XBYpqqvdSWkGQroE6FsnVjCgHB497hYmHFzxB6a7dmwSHuj7Dsw2eLMg9NpehjcotUdMErTYG",
  "key30": "2dQKk4nu1Mg2NMWFhDL99quTfr5NAa5RSX8u4mQ1JBSHUo5XpNeXehwY4bKjK7687estTUtySj1z1r42XEjBpan7",
  "key31": "4NFy79BUZtuVFR1xmk9kCABmHFDEgHFscjRonqZ37NjrZ59SEfo2t26JDivECkqoJSDXvbPEaZ9MbpPgQ5hDqKhu",
  "key32": "3oA26JrW1RR7svL1Lws9H4ky6TgGkK5akdEfXgwHaiTBRXQ14C1htUkTtmbSh4ZanNGs5ao1FrMcp1ZNrAdQXaPR",
  "key33": "4nufiyGCuUnzrsUanF2tRVZCVU8LfdCv7F1EkJm3Yxo8QAXLT3Vosu8VfyoVV6AXCmztjPkh65GNaBSWZcc6hR6U",
  "key34": "5aVUJ9ck7y29iCCC84MxD31qUN6UWwgARYXGfiZxM1VXQFHhmYZdoUX5iaJRjvjfRBi2jXGS2VCoErAiu2S1f7YP",
  "key35": "3mFWkdteXco4qFSFEV5iHE3SBXMhrWgYsojYVoSb1V2i8vqo78RiSCwrUafjZrVeKCzPTgip4Jfd1gQC2FBU638X",
  "key36": "T1WkegD1XwPScnjRwuA65b5tdyfmX3X11wiDGn5ybysULbNqt3jvctH6S7p8UmEcxTTW3gDnMDt9c7gezFJDABr",
  "key37": "26n8N6HezcppnuUQZ2hkrm9cVZLDe1e6e9g8wubKPzTyqBEoKJTYAhLHYN2aMKZRQszeR6MB1qszNrm3G1vDaVwG",
  "key38": "55JJKuTquqVMzW9Hz9DmNCiwJQzEnmqKp4t6MQFdrQeUCHLUcrPsD5DjGxpbdfYfiX2NhC9rZvUEgnxgQ4UNGkRS",
  "key39": "2nuBbMJ3UqyZZdPCFQjEg2v2PaWWQMd5PqRGS64kR1x2z1LZKGLijfCPq8aWMrzcwHxLGsQobDa4gHis4Wm589QW",
  "key40": "5X3gLtDXqG3t5GfJnj8FoQKYpSR7P9sQiX1FyT61iK1U1xc16BdiDhm56D9czoGoCeYdaniMeR5jdyDsBvFLX2EE",
  "key41": "4LdqYubQ3Aboz2VB7NmXWGMpm6f6mWPRYquQu5XdyXCFUA4DvzAi8rYXnNVwQH9Xx8zK8HUvT11Cuh5kcmXL8veX",
  "key42": "3WMGsJhkngVQYEB5Y55tqGnDEqfxDTYSvm9dRbHcGS2xA2kLoqWZuQvmwneVYiDgFYy5VAfdWHgfYn6wKNKKC5Vm",
  "key43": "QKDaa6LCEM6THgxcq1P5et3iroK5KQBou9PztojTVeZ6ve1GyxjNrxxRHXz8uREqFojaibJhrKjME8MbHPpsDrn",
  "key44": "4SKK8wy6JEvg16sFk9jTqJ1HNpzcRJ6FmiShxAv43XxdbqgLd289stQXE2f4Nzpc6sg5QZonDxxPgqGHmky4pCYB",
  "key45": "4qu9TtUi3VfCg53SmUBJbWJBhbPQT3iBYXbn8a1bN8wZaSZLSrgEPF97a3ULeaDRnw8yKbQmrM6kVkoHSfQJLRCM",
  "key46": "3bJMz5pfk1MBh5UvBEkJzTuygf8yoN6euNrFa9i9LqidRN7dnwjxPSnLkQ1KnXpP2WMnBN5CmEBUM1x1cbd7wvSM"
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
