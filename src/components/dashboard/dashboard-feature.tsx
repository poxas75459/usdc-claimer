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
    "2s8W8zYMnoJMUDQ9H66ywTEhm1ddmf4j9uoL6mdpUFMjhMoeGEjpZh5TCuYZdiJwXj25Do8Ty6WS8W1jeSN4D6aD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eLpiyDogije8yr6UGii64BGHzCdx92dSrNd5RfLTQAQ4c2NdXiTKgAA6v679xV5pNCMTiQNCWDZi5jkufv5yp6r",
  "key1": "4irMeoiex3pTaeFisbG1pjWUzEGRaY8NTMYzhPPXWyrPwTVuJ1V85JTQDuWjdWm9eYz7SzB4dRgZZUHWpBURJgfU",
  "key2": "4XRg3Nush2U2qiyeBpFQy23f5V4v6cnYMLwCf7mNLXpMC21VmyDP8RThU1UVssQ96QBHZgGV2cy6pxdNQpSs2UoV",
  "key3": "3vnMZW5MQr4ezduWFAvYduLVwyqQ37iu9md9dSSkXCqNiTybDwN2v7V8AK4fFLEqZcPHTxn615apGF1N3A8AAY4V",
  "key4": "f8B5NpdxYKvC9WK7efGdAnESjCp6wxjJzhfDzym1xyz7L9DiePsRMmEQMwt9hMbpKrik2wKPVPhRN72tR1ejm6p",
  "key5": "3iGePW2RrnhXYPfQ5qoKVti5oSZR1R73nFeZfEHfzb47aa3j3miUDDtJNWJaN6ZGPjrFPK1tcGnaPa6fsv2UcETj",
  "key6": "32jtb9rxRHP15chEW8bSQp1coZZ2E7iV9S5bkSXEVEtxCZ6BkeYYmu3efH5MLHJ9FaiTX3XJQak6D4qUMcxvyWtR",
  "key7": "454TNxtf2qAzYrBwTyG5UnpB3zkhBPN5WQ6pbj8iYWxyWYqaAbiR5c4qrU73vDE7Vn8ScDeoFhbD89NirRtyKZef",
  "key8": "5f3vjCeySjk9VLt5KH2nUspXUuSX9VtS5WdCsfGzVgvhKx5chwAzH5Y3ueZuCpAAnAMMGkbVWrHwADGh34TUXW9T",
  "key9": "3qge7yXfj9FGMZaMWGDu4kdq6AvxuW2LTLYcS9mPmEctsXuaVfSdGbVrnjkGNRJnFr374M8WomSiA8JreCSLXAHA",
  "key10": "PU8fy3rmc5TAi428eaSerguLP9xnk2MeX62BgPqmhHC7U8zNKYQURzbDrcYJKxEyReXF9y9fHWsdFEZUcVqMFVX",
  "key11": "56XmWhR4bCghYBMMgtQYUghM5wKhtheqQgabeAmWMhxtn3pEttAkdMEQJFgMyHMQXDZmD76FUnPmjr7dcoCBkNF6",
  "key12": "KUWjvr4PBk5uSviQiXt2JLKZfs7RFjaKyvFtCo9pgcEhtpWfyf8t84RSsEbD6U3r3a4nbe7LdDLbgseKzWArmsm",
  "key13": "4gYKQCyTXHDLoy5V1uMkSvgQc5cPXKq9s2sufc9v3qrG3Bc3nzH41wKT1Du2gJgRV55GC6ej7gfovkTqiHoct9HP",
  "key14": "4mqdgfkpG5vRcgr1vrrkBkS4txKiqjTpX39tKsmLySdbJck5fqq5mWotmVu77KV59tFjeZPxy7ogaCL886ysUYvc",
  "key15": "5kYkfLBXVmTySQDF1pXSbKuwaJS2Z5pcKSeTvV2Uu9JDbbeuvJ9KrRML5CSrV9GwTHCMhr7ZbApHfhK2pYPJoRdn",
  "key16": "7wAuRLEDqSFWPndf6NogjHsoms3ofrC52LHB7ofENQUgMv93ckrn1rTTRwAp53HRKPt7zfghtF4RFyc1bGC4NnQ",
  "key17": "35ofj6SobqipVRoX8gghseqrfCfY2NyJSv8pF6TvgXKM5jr1z7AHBV9gTakrXmLUSxhfwbA737NFiGa68xVNq4C7",
  "key18": "2A1EnLEvSkHiqRMNU14VoZYUYgxKLhD7Ck6fgE5nH4UwCWVgR45ppJWfDHSR4zAdvnRpZMWK5XyTCKC24KPrBBeV",
  "key19": "2Qehoz6UNQtq8XTPf61mtKFuDBvD6YFjNGBTTj5M1QRddhLeVby4XqQhjLSKYmUEzoNC2EbV2ttrPw2W2iBe1q6Z",
  "key20": "5JbSP4y2qMWJZwj1M52DBYaHk8ZxgsuRvfJTf31UYX6EfJMsXMqUDwkmjPWViXuMz3L3tgNL97o9DuepC7PBXDNn",
  "key21": "4MH7C191oiyFaZ9ukB8ciGdw48XvuxEmLfReurprz55ECM2oKmjSMpYje32VM7Qe928Vr5ytyya9VZ4TztfPgYYp",
  "key22": "3sXbvBXCYuZrjdv52gZUS3WvpiwLsRMaFxGcHG5WfZmEXYALksFwUCLiGMribBKirPB1f1DzsMF5Yri7QtjkXTHB",
  "key23": "5gX35mLg2U1QRxmrfsyYufrPmiJmmQiF71mBGJCob7nkyGZSy6D6Ni8pL8H2683rRhM2DPJJ55KSVvDpA77xReTh",
  "key24": "wGdzNRgJeBEE3hC9sWqnpW3ZzHmRvHmFo89TJ2VVMkUzhT729qCuSMzarxwBetMhHV3qfkAJov5B4kZDjZcbn6b",
  "key25": "3qmAKnCn2srXc2pEefTSX3pmJDs13UrLSoBpAJRTong2bXx8pmfMKoJfB4vLYSGu3yuD1PChg8YhSBggp8jN4cFv",
  "key26": "393nQfFYvv791wZXq2FzzN5PE6jbQnX54TyrcGDcDPH8H4gaNcgEJm4GPwbVpiFDr22SEJyKHzYVnft3WSDxQVqj",
  "key27": "4SsrNn4q4kCSxhmThGHpF3vZRy6HQnh2yzvoi92rtXQYQoV7tFpJgJB8HB9vWQ5FqgeZSpbxoAV7i7L96tdTpeZ8",
  "key28": "5DifS1DsyHfGkhFz6TpjtHmdo53BbyaHoiKrjSsQKxW2qQocmsZUzoPxbEVEYHaBMsBvuueiio7v6t3b5hAPbsfr",
  "key29": "4CorxX5dJvKzYAcgeRe966Xo6yZCC71wagEcWpX8PJU2okvJHCwRVvGg7jFJ3cEf3hgCS76LKyAzventiLyC5aJE",
  "key30": "5u8vxbgntRcnQUvDsZxYp2Uj8JvKzF2HE5yrgnsjtVRgsbcxupiq6Cy349qwpQ9FHMPaJdkvEsFC2pryGG7Y7ZWo",
  "key31": "B6guJ9QSm3Zy9RL5MtmmJu4ft6UFGMb7JTvUyX6m2DYRWKYLbHYU3JRoZgFTndUdVxsWpvkRN3C7w8RDomSQvDK",
  "key32": "wX3DhSFKDK9dbkjBPyTqZv7DH3HkY6fQt7RdmYFgC1u6qbY7qjVa7EX97XGS7iRGvvg3p3x9CgfPReYrAmVsjKJ",
  "key33": "xAb1vjmFYS5WqajE6pwzGpSwPtWn5ck8wCfZJ6thXmcLJ367sfiphkyyqJVEkerMXofY3kVsWDU1wTeBYBU7BQG",
  "key34": "43fgDuEEu8hxs69CUoXeErx7JKWRNLPzjLRYVRaHs8jrniByNA8XkyjPcYqdRTc5X4oVhHNPSNTUTvDb3jbgo7oK",
  "key35": "CG9Wu7wN2XGD1ZS5X73xMWMfoDyiL7dfuMuw14Lg2w1C7m3KzAkkrhGmF7mntsJLiJYaXm4XWnn8pyj5VUpzqi2",
  "key36": "2xf7ZqbgwfB9gKLBYAXd64CCZocnuJBnFy55spkmMNev9KDcVwf7L4UqVCGyHPj3ufK58L3tGtpW9dRqKRJzoec6",
  "key37": "5ND2dTrA4ocQzWZALXj1P3hvFvMM59VjLhroXefT54vXJzmu2Fx9DvovddccxnF1NT8UQbRiVzTbJn2U45pdArD6",
  "key38": "4SMnkxy4pnEXLKdmNxjH23YPW1ijSsYp3z43tLcJ3nejLG98AVqyPdGtfXBHdSEqG9T31eHkUXfffLHJoPTkoE2t",
  "key39": "4VF38Zx9ZtEzgW1QK3CTL3VC8yohXkn2hWWFddJHPY6zWoRVrVixyc5nYwF1i8TR578fBhfZiSJG1x6FnkRaBABw",
  "key40": "28MwhQH5SnxRe3H1WHNsudM4vmHTs8LLqiWLTnBGGbgz1ry6kSgiNzR5NLnE7WSz4eGpFpsSMS6jjm9ULbkKKDUe"
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
