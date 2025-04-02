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
    "2TA3mdtxcr54T7SeeATAs2V6hBssyZw8acjSiGBMbDaoZx8KXGhbJuA1G33iX5djNXZzFEi5kNiHuDzvefNKqjSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uAL6V6xCgdqk5C6GKwSF4BovgXaeBqGMtph2jiPAQjUUV6r8yxFmhLEiHtMLwjGuzrJTAdFaDBrTbsPM94jR9wj",
  "key1": "4pEFoDE7KgL8ZpJrNJ2ZSbiekM34z3FXKJ1RUQ6wU3ptsuRUZU4fde49nsZ5PMHxjX59nHTps6y5TsYUwSyxKKdB",
  "key2": "59twDMzBdtJaQaN5YoF576qhXpZaEnswnaPEJaXjfsU4jRCfHG8hi6dVe61UqEFUjn3foiQcoqqAa1YwYTpzb9Fi",
  "key3": "7SntuVE2gBqcdxm81L5Z15NpJAVuMouxbNVwicAQRomVSuzne9r54noNA3SvTa2QgWwda4F3eQvywNohoEr9kHG",
  "key4": "52hMBEKqnzAaaWdNJeNxkxs6Mu8AGwJbC7jUCTCVrqYZbQQQh4p4RhxVbYYqqaFTcbsMWUKrXMJqANVM1rdTz4fQ",
  "key5": "5CXMAqvG15x2qpBP1FB9GMgpLTPjp4J8JcSgJgtX4ka7CnzcwxvyP48Ge5RAqBF3qNGeZid84rai3cvJAKNPYULa",
  "key6": "5B75WKoEnHp1x9kQWe4p4CVVMF3Zt2tb11jCF1ahquWWjzpdxQjPLKd3vt4t8dNQ1cCbwu6w9AoA2kiceoCkcXY8",
  "key7": "3TJo4s3vVTgjpToDNJ1hNjVEiBmE3EAyMsFUAm9jhqJovbj9cHHqcRqW2L7DMmuRcKqfG9BMFB3fKD9m5S2BWL98",
  "key8": "4sWUjpbGBjhAyRKHkxCSFVLaj8gW6sDneQ5ceJs84Ec312xafrpzwWrwk5MHxzdeWsAs7z67Bvm4ZExkoegoYAUq",
  "key9": "rmixCM6Qkr4ikh8jwBRPvPtCbwoUVtCGcdkPEALZoZnD7RBi8nxYCTnn9QurNsebe3BLURsjUQ7LN7VXAEmPkfo",
  "key10": "5R1NhFp1FD4UQ7TUvdx5BYcaKBBeaH5h9N2qQr8VSxEuiMUZMLtu88cvTKKG2d5D8eLxvqs12LxZgmbnTxC3Kheq",
  "key11": "27uYx9HzWuthKX7v8PbArU1KagnVwAb3Tutm3pKUZ4eyLqJuwwsfCCkboH1okDQWrfrtR2Rt5cPqe8wgXoyqbrTn",
  "key12": "yMDnm9KBE8x2kDV3moeJ3oY97QbS9qfPPXjq8ZRrEiYZTKgVFSLJQfbzTX9oX55qc3d1tc5Qza1yUdn8HqtiDGm",
  "key13": "4jaGzNyWx4gktBL2XgfR3WxDbpcZ97eRm1NDH2Zv9K9MQUgi5E3uieLxKWnmKwwZd1FLotPp82yfa6NS8BTB5tsz",
  "key14": "2PEnbuvS7vkUf2PTWiQB35sDweRZSyh6NDq5rbXx85F492nLMkXfDAUiNYJZ5DUDKDWEnYjYCBS23i8bL4XtgdTn",
  "key15": "3cXiKPy8XGSos2WqzdcAksvRxyaWqzedWDuvWyymaJHChqnk5y4PGPYvKWyRAma9zKSeUxeGHbueG2JqbVqVtC3J",
  "key16": "3u3Wh5sNf4r1jSts4jXWEZFccbxkQ1wzBju4FZmHMb61e7eM2nwb68WqTEs49ATjbZPf2p9DKMQSXXAJUyyEQxva",
  "key17": "213XrJeeSZWCv837sTLMjmAuSeYwg68Ck3ZwbqLVLWR2GVVn3M7KgqQstd22ynL7zxpukSanmABTLBtbJxoFRTAU",
  "key18": "2eYm9sQZLJNeiRN8XtSfY3G81VwooB6nV4ma34BVh5uQbpaCWKY1w2jvyBenn8XCpTWvCk2xkTQvDinsk3R4iyqm",
  "key19": "9WeSxdU2tppfbg1Z45jrXesTg1NjAqRK62AsLdD1TdeG7yb2kCeLpFWmZmht1h63LVKMykUjzDJc2BPxqGbWsw8",
  "key20": "4kXVGYCTb2B2uRtUQqYhrZswNQbMSgQAXoWpMKPmG2CJXeirjgQCL6WwPEfjcSz1uBbheqk3yL6WT4VDasJPFyKW",
  "key21": "WiYxRKA44z1TLCTonp6VUSPGUUT8iDZEkVTMSBBE29SVhmKL4o235kjrxZoStRuE9MpaEjf818NydfWsiZf8fn4",
  "key22": "2yWkJKx7yTepzU6pFL2c2RdynswG3kWfAb4A4gEnyDUbRmuoAf4S6Ntjii3F71mKdYFi8KAQY7B1wkhiQMPp33oD",
  "key23": "36zs8EcKZLCqx2bzumqWQMEVK1pWi1vRmsn1pz3fVjU21YLobt2TyqdXY2mr1ra218qSDH4F65FGuZrXB1FcF9oW",
  "key24": "48jVZir9CBPfAKGmPZtWzphK9cWXyx3HpXBKgNt5ciuCv5hVnBJMZaPAuAtxB54G3Dhw2DbRCKnr4GoKyMY4EBEV",
  "key25": "3oZyQnL8YGqhtz2EXdcKCGKNZRE6BWYNmqrVuA2TGwN6hHyMCuDYtYbgGoER1R2JMKvMjX5qRjp2HRDmYpM4CBuJ",
  "key26": "5y6zpV6E5dWFBeXQY7P8jMDbXfnxqSLVqhzduFhAhy38gkFeWCBsCoF4Z25B36fuMvonMQWukrHudRqopKWavqwT",
  "key27": "4kfysBJGhM1FDgwkkDUqYkoSKZu8qUyuA92PMDik5GC1SfFxiFoCc1yT16SDNTdgKiBeTPinXuugntKcSzqES7w2",
  "key28": "J19sFKJ8ar3L2Xn9wQrG9uYsWnBRZzBAnZbkWFEHagRPoyKDYCKMSwdgpTGxtA5PWefs11UTfdVYzCdiHcvpH6A",
  "key29": "4gUdsuX8MpCVXeyAevrFiyxTKN2dbWAs3nXYoKuT5oj4DCDZoE8RmbFGt5KSFVBUr75EhBbHbpSE6xnmTzFZJTW2",
  "key30": "oiiAADEoiMS9Ers4Kf15HXeJqDCwzbhRevhDGNsbefeXZX65oZNm5abzLzzjDyDFVNWGzgnNG6p8mr31DmBSAE5",
  "key31": "4x8Fv8XovEjNMYuD8Vdt6TA7YD4ovBbugSvXHSJQgAL58BwYZzSPBJj8aq7rHGW27JNDy4yqxFV5j6H6GHSps8XJ",
  "key32": "2BDP1MzvLLBfaV4TVuTaGZWbVSRT29ovRsaG36fKnwrhPgjADuadyrfm6AjRTWGfEsp7KrqK3S46mAPSKsPtqEGy",
  "key33": "CAAPncvqrZ14b6Z56w9ybPyf8xZdY6GWK6mNjJG6D5nGGEE4BfekQS8QaEZi2cpYrb7pCuLSUMuEFxudymHZQwr",
  "key34": "53yHzmMx1PdpLK5wnK8sofTmVLBihJ49uWLg4SeYaRLKsskSnuQ8vsqZmcnoUtdTmG3beSZVuCJcLpHktFDcfv3b",
  "key35": "PX72MfG1NsedX7XypJqUgah1E36bYT5TGeqQRgWdNTrfcmEreakPLBigkTjQpcrNZMnaEoi1VMsGBi7qX1VM1NL",
  "key36": "2vsywJWXe4Gx4RX6KWuTg6E9HnNWfmpfcqzKG2XN7XZS8wZDSjJ4AFhzYLgguoq1vQAnushC7mBG8vigiungUE5S",
  "key37": "4rvhqrpBAK6YRf3tJvP4cxypo2dZ3Rjg7Lyr9FxaJC1j4mis4d319KK3n54kM6uP1JuAcitM7vsWiSfpV34E3utE",
  "key38": "5mkHqJCjn4RQ2VpsysAkuU1fjuNRjrdQtS7575i3ZYcKJpxox4gz4sqVKxkZjTsjb86QKHjN99HP7kWoTrdG3xCz"
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
