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
    "3r43W1A3fKAm94rPL4VovXTaimfucXArsgwbNoZSNjpnqmH3V3QLueBxuirrZt5m5DhgfsZGWJxJ1QJdb2SFVWF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tCMZDjTUY1h21EUpC7t7mYe4SD4pULXKPtR5NNktDy9nxqiBcovFDc4HpzjFpBVZdHeVfu4kNYrkC4hXqnwmZdt",
  "key1": "2tBFtLRnnMtBBcP79w4GxNK1ZboRu6D7SchqrG1JnK4tH8Jodohm74ADHVrp8gTE6JKwnsxoMUu9JP2fhyWJxYbC",
  "key2": "wrV9g58cpNteNgsHvfRAyhtai5n8hgBNnAB6MtHuTgCD6kHt8zHz178szVohPSXPHvkv6P3bGwu8ZNBBU7aryUC",
  "key3": "44NBB7BTaEWzF4cynbD1or9phAhTgsmsDMPzjzDDiyV94o65tC29z5gZ6FVvCqD99FKdJnF2qES633ScFDaxckNP",
  "key4": "2gH6mjJ6FWB7KPukrQzsSj6EMq3ZT2AbVNk7xrSDFPojaPNKsfjHVsKhTX2bRGVTcYuKHrkcZfmoiXSRQkms3WUh",
  "key5": "2Kh532UtPEEdn9QLWqPgFLhUG8BiYXv4gZ1B2NqoM3gJFi2dcjBiyzge3YhdN6xAxNnTZ3SCP1oHuksptg4i9otq",
  "key6": "61eBQGncvZXk6c9f8t5LFHQThvDXVAeUkcSQXb3vH5KwYwHcggGB5wvfvNf8Sq3kX8tSK821V45QKztwjAsJHxgp",
  "key7": "KXepYoUMGNSC2iaNKnNzB8ZN2jb7MuTf9UaWdx5gy4yXrQwipeGVWEfCiowKbf96zbvAYx7ex4XFqyx2TQKjzAP",
  "key8": "1ZXwNpoYJniXf5SCUGNuFLgFzn7F5ssycCbJVbrXSXK9HZLoeCMrz3y5m1dJR1cRHQtJfUqs7U9nYVw81Z6Jp1o",
  "key9": "5az4h7saKNttFxzG2KSra1aURHz2Y3dpmCpmgt2mKZ6KreBWtkYKtzU9ZWtEcwXSrgPqWRFS9NyudvpwrW6oVJ5S",
  "key10": "3jrZodnJG4LJVSxZkyhYuamDjuHmbgMeJTygRApYm1VQjTA4YeG9sZSoyWXgDAXLFKatGqE9SLffTmoR3iNu3SKB",
  "key11": "4UoxKEPzMDhPMmt2PmCU73hmrc95r6ma8BQ5HDeshjzyq2mXjkMuNPQYWnd7KBGDc1zyaxAZ1y3kA3JSfJUx31eK",
  "key12": "ir2vgVYDfFeS8565j59aQCEekAB7xXVM3oDnpVeiB5bpdv3P5Czwv9pvDBv6z2R6ANjjohaaztgR9TAztiknqDB",
  "key13": "6MY5h8YV55e6z4RGSRZRHbHmmmtAdkUG6C6ZRJpjXdUASeyZELKi8DxoYnby6fZ1mUXKPf8pt5MjPAdGNHB4ms3",
  "key14": "ogRMzdNWkr6MzQ6QKahRwwvPHwKte5GcDcGRUJ8kWFUVgysyFxTaV1QtTJ1QoTYjPzqm87JaeZuxVtuhzwz6psr",
  "key15": "sFUk7S5VdoDRZcR5kf8yVXTTvofGVeJqyYsZcaUC3HEAtPPbK4aUPBbUR4tLJmuepnfrC6m3kKLq3FwRKZHFckh",
  "key16": "4oEbC1xKJnHfDGgFteWpuMeTq7vnxhrbMfnULcM1GMfU4tVuE8dvKg6Kwgm7Qfv7DJ32dTa5MocXNe1UgLDP2K7E",
  "key17": "qZ7fEJS1aSXgfPsidbvmK8iofwLH65wEh48G8oib5VdcrTM3poU7S5Uv3LxkLrhbcwv2rKRHRFiqht7EzDj7NWS",
  "key18": "2T87vgc4L4tA5jPseh7dokGikquFaR4X3sZM7WK15mevLBunSpTwbW9yFDBDoMn46Q2uTX9WLnhFTGH5rvpsSME1",
  "key19": "4NvpPNcCKur7MNkPNc2NMNMqiTmGAFkAc3ULM2hTjLD6KVTrA8jGRbo3zA8ZJgS6oY5VGaDUxymsjSi1JjRkur1w",
  "key20": "2TfCexYVBPS8xoArnfxDTPxqonjw95gTg24DyHaeMbJZTjymGWLWFY96M9ZMa9Te3A5imUesZBwU7fjMcHskUFWT",
  "key21": "5jNKBpFnmZGvifFzs2btt6jVvQsKvfz8mwuguMXQEToWjSx4kmGdQakjcKwAdAJeRctMBAHfzbmeW2zyxhVpSozv",
  "key22": "2tB8K1zffeTtoLL9nsm3qs4UCopTGDdzT4JDRoSM7itwzsDWwggmZZRKY6gCKcTz6PqyXvNRhvyWMWsiJhqavhYe",
  "key23": "yg1QD1W9TUU7J8q46mrAR8sZ5rSnwWXGtxd1q6E9m8jrrG7YYwrtyk3JyggBZky1FraDGVXn52wWZkvnw54bQxy",
  "key24": "4AEXB8DaTWCb5sTJ41Ngp4QhJPiuo3X8BQKvGPgSFErU2sQRFSGwSC5ZR5UX98PmXBFcCJWGV14KJrqx2XBpHJw9",
  "key25": "4Ry6LJr2SNo2CJwcmaCo8izVDHExm4Aa2YCEPYfFqAaNdMKcRe6B6buCLJKowbwQPfs9pBfPZsKbBiJ67GyNnTwi",
  "key26": "4MwnkeWTmaRUwZU6ittPDfCM8RDgHYq2MHNz7BjTvSk5e6P8AuAh3rW9boeeXh3mkDDghN8sKkuUb7pKpwQfidHn",
  "key27": "4UNWMEyV2fc44VKmiqXmyAtBppaeG5VUnBwLejFisA4tmYK3wVs99L6AkhCicEWeZsX6kQbRZCpu7ScDbLLiDaQ4",
  "key28": "66RCJYUMmTNUjrbQwEDqPF1XsWkHekRqrUcsBJce741YmVmp1CQtRbcPSsaqzAtPhgYrmhUQc6WDkSMqP3X5KwLz",
  "key29": "22yKhNT11fhqM4ynJFuJ6DKwcNXy9DZC6iBPLEe2Mz3avzubKAWBzDpKmq6qsWmcWdBsoZWbWShUEsCnWp8fndnt",
  "key30": "29YyPKr64aQGof5JgLFGDqBDiiqeZ4HPsPm6cvBenfg5xFAdhARSXrtLrywJfozNkHsLKJViaZsXRy9CmMpcdx2y",
  "key31": "2a4d6EMPHbZCamVnKu1gwbmzB2Va62yATnQtAvTEQew9pByftNPcv4sAaexTzU3Cv6bJnNRco8sAoAU4zmZ5zXx1",
  "key32": "4NaX19PPKpF4pD1aPaSvNMHe6Zr3BJc5BiHqRCddk9967t5e17yzpDk2X8cfXC2DdhgZyR8fk2ojXF2DXtTS995o",
  "key33": "4nsnqEoJDqoMNDfRBed8JTrwSyATrTxdRWchhsbAiKLxbVfuugnJg7eCdjZgddjsiTCsEy59Xfjq9bpyPt7xt19N",
  "key34": "5J4a232N3uD4zFhJQXiA4qi2AqntgR5ijjpYDWzTHBE1HrZjJUFBJEnUSwQftMNRWgzYQ2keCcPijWAJvn8yyfpX",
  "key35": "By4uprPEsxv3yqjcZTYxUdguVyutMAmERvxX9YpPMbNU1FD3vdJYJipuTG5YDAS9nh5UxC4WpfPt88HNqa4WuU3",
  "key36": "4SmJNjviHQDj1vkFQXyxxpKu71ZrdB8WQb3WviesPsWV71yx8H31mp3qCgXDsyuGMXA8zUezzLTJQ8L5ZUZa8bCD",
  "key37": "4YBcQrvbdzLZYaSxL4UsZUYR5nt3A7eKotJYyptCkbC9MpLNyRbL8cPXQ4KAAzXK9H6toePSwTRWQvSWufxUoMTd",
  "key38": "oc9zGs6y5SABu3VoMhB38hqwZ22hC4xTNxd53JV7QtwXGrmteVKR2GGZhSTF1dXGMjby4RNg4KhyE23UyiJg3Lr",
  "key39": "4w1fGrEirqGugJYWGPQ9qofY1kXicEQK9RHPQsTM98aSavDbLdUKqNmMZHr5qrYeAYEXN6DAtxcr2FJavcnvt6JK",
  "key40": "2JxcHteLG89d2PktnCNhgQRsnC4aCyo5FwLpkvnWEsgeTpmSpGxgU3gSFMGerHTiEAU2Uyy8YRVy2evycW485Q6e",
  "key41": "4gTyGaJzQVzLLufLDpuShpxMNPsPJ3mmgibqoCwguXTaxdd8WgZ2ALGpjysDeyqW35fss7RP6qbetMQZGXWdeLgB",
  "key42": "DMgQPTdyfnrM1opATCarkewZZ5TksL54FB9RhLtLyBMqtWp5ZLSEwZMs1xFaou6UTkBV7F7y9SerDPm38eE89q2",
  "key43": "HgQsdHtpminq3jJ7LiFFeD4QqrRexD5sECQMrXZtZ3942EvtbBeJe3rsobWX5TjALtcC789ooikXqznQ7onnxt5",
  "key44": "39Lf3MCabPUegWzcwQCfY5Ske1EJBLw8GhojHHzYMpcF9wN52dy4wrzzjjopKsyR5FnCeH2NryKj4bZdrrmWiFid",
  "key45": "368D1kaqjSyVqhA8QVgJDVwuNAecQwmG1koHK7oapEm5kfxXMNs6WTYiWWiJ69mJNEBNf8Mj2CXEU64r9FsmSE3E",
  "key46": "59qKMRB3m3ZaG6QqTj1qMaCzsqA5wzp43kwrgcDymsz29KBtxge1oPorijRr4En24nnM61F1mdgcpkfiKyj9cWL7",
  "key47": "4mwFciZTWbeZ9nohUgc7uhdJSEhFSGPpd7FmShrwFUqLRkmYuRVHRqetopau19bkEggZBRC5qjrHsK3K3tkgE2Rn",
  "key48": "27hjweK8GpUBhWmF6ppNqisQn8KFmLPF7WK3ATt3TC2D7DGqWL2uEfyF5MszjHJGFZoXFggmwSnLroae52avwvrg"
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
