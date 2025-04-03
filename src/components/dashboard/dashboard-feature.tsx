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
    "2pr373qTnPAC8Nv7hsenQPTnWnB1PXXYEFcVqBK2sxUU3FAfyQUh9vXbDbMJsJKzTqELBrjfYPzWUEr7yhehWRuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59RgqaksfiGH5NK1t98uS8FmK7kCAiRmFqaQ1xzGA8pVNS93gcsUdbUdNrpVqUmNvRrhJ5ed15CgALxtXGfVdya7",
  "key1": "2xo9fbtmbpLaWkVnAAYTKBhHpuHNkJnApeNcZeKhB2wTi1w17rfRqRrDw4GqeqD5QynegjsaTHBqsuWzBxnuDsyv",
  "key2": "5kdSX8Nw35yBA8koZwZqTFmVe23G6hoSVwewSVpDAu6obW75hxnM2LJP8CuQyMnvuGgEAvWdmhNLA5posaYyx3nR",
  "key3": "2JPdtnv5nJb6S56tXjxZxdYD8LcPLgjfjf77u93dKo7pJ7Vxgr2pgDozP8Z2ncCeeiWj64FTiMGtzhKbbkZznXxn",
  "key4": "3oxAempvyYqFJXdhV7iJzp94r2mtKQHHBSA5S8vgJaymHnkERTCL2pxfiC8HJL41D6KxnSZY3CsoKRcrVTh6oSun",
  "key5": "5PXfE8Rg2Zu7SBsTcnAa47ncLUbqjETaeaPNR6WNP2ayLG9WErkEXu1TALoW1Geem6qRjLnKVzBex15p6saiaXeP",
  "key6": "2YPQqXzpTkixK9J4xUCZQJNQ8NtTj3hctmqVbxbFwiY3tvzRiVRLZecD7owNGBWEckY2eRHoLdy1iN2q4TJ1zuQY",
  "key7": "Aj3oktxd9t9KqEuFcvH8V2rXpW34oSfV1CCu79Q1PNhTibeUVRzCUhqjvd7smgHtEG6KGzTssuFiufKmQtxmStE",
  "key8": "2WHNWshPjKYZRdPuHhKPTvpcFSjdUdpSRDBuEZmwnx1yqC1gNMLGdgDH8pVJczzLHHAAPZ7766gB8JD4VMCJgSr6",
  "key9": "2S5XHTU1vrSMnnim8YZ3AeBtUffkGQhjYhqMT5p9XQHJ4wN827fQ2FwhTyTy84DjCQLFHAVKNpPG33WqypchzXyu",
  "key10": "678frV23DhqWfqiuHRMU6gZqo1QSeKkMNHx3WKcEpZ8JTpnTnCiko2BRBuPYUkqFK9rXsh157393LxZozgjmqfXP",
  "key11": "1gyWgJEozNS7K8uKgrjZJvWdGCVHKanqhy5WgBjG3dV8Sj3Va99BDVMpqQSbe34EKoWqMyTySXsNe3DWySTqzku",
  "key12": "4cTg2TFUsSK8Rn3aGaWC23qBqoQ4aoFFgtaiY8EXSd9hsrz64Ex2f4tLVCebanvV874xjNcXLGJ1LPraHvrAagTP",
  "key13": "46jCSTJeKe8ncYvQmg83Lcs9h8sbZgPBCBjJHWd1V8fqPNSimb72YhxjTYKVW8WvG1vMeY3cFhgh3TRukyjW8Ymu",
  "key14": "277155Hr6qseKd2iNatyjnA17n6wDYXQ1QVVkrJxTS1pVqM48BgR6nDiGXfAQ2nUnABHKez859S27KDYztGU7qJb",
  "key15": "2Qj2jCdLznfUZfnt8jxn6y55sjH5nMGQvrtVy58fvgotHyfwDd2SBEQwJQM9ED8epQrxhxZoAAh99kfSxbhMGF7t",
  "key16": "2m6Xirm9r2TRjtYMjH8pPNV3kiYCjjuDgdNVpEEhMrekzSvBP9gm8fz9HXRaSXC3hs8Kwvxzewwu1ezin3nUbKSU",
  "key17": "3W4GFQhfZmyqdUN9bVKntgdqdu9k9yNy51QhRm8cxV89yqfK9HbDAMYAX7jaW2QKiVo4Dbpa7WvLWHhNgfpNW8gW",
  "key18": "48JGujcm5DxudMsnT2rPHv4GftaDocmUR2Cwxs5U2vNVHnHFrXfD4crGvbr8zEDhedWcGcE4RotWPxjdbaMe6YuR",
  "key19": "5GcPigo9A9fXXtJ7V9KbBAKwsdayGyugG3vF3pmhmD2nuujfwbTqcG1sZ1UJndf1wN5YsWsVvaEe9Pe33fLCUdQc",
  "key20": "Jj4Fw9HkG69FwyYGH9ZkTDqeErzCY1ADcncZs5WSPYCDxtVmdEGkMoShgLXAHFue3aaZWGHaZCjBXVWHmKQPBbf",
  "key21": "673LpULwmLTJBE3RwLkJZTZyScSPbsqZ7S2CwGu5XSWChsZZGbxtGCLb5sccA1ZoZEm8juLXDr2tqqwTiuhzmbMA",
  "key22": "2y3ywWbKCwHk8EcPeaH6h6ic7AgoE2C5Zh4uF4NMXNwikeb8D4ugRb1tzMkRsmRNnJogkG2f7kSBFnaGdVuqWYah",
  "key23": "7Ck3BKBauTpmUy7vcN3TcgXJbuzTetYWtyHAokyyiwu2cdeEN1YuRTMVR2Zsy2U4jBSPXMfad8xbswzH3zp28o9",
  "key24": "AKqjqjp4BYAqho8yJ98vwFALBgZeLx9GD6DHsjUzzeDkxLE2ddyr9i7k3JkVc73zX98h26uBQK8hzGoKUthqtSb",
  "key25": "59p4QRQRcfNcjUvv8FDpujBUd7Nt9fbjsN4FNBSCvoiKHRtWTyJLbwbAjD7WjYvCehKGnFrqdtktKjtdC3x67S5X",
  "key26": "2Rac6j6R6Cmyx4k5GpeBxtFWxpYcgzyD8ELDkdsTnKoZaKjV8h2mipj2TDPkTafECLfLUkzgzmzDkdK2hr5GDxRw",
  "key27": "35fJdekXgkbe1emH1EYC7gXJykcHpzHQ2fSFCEmcXFLNG8sKJr85AicyRfEvbpsoAv5m9DNeDpjtJFcMJoQ8SPc3",
  "key28": "3w1y1jEyT8t7JuvV3DKDAiCEacDQ21xU9HVQmCX7wqQ9gCRE9HPKC6abPRmnzEy3dZGBxGf5GE1gJVFMPYEdATEB",
  "key29": "3uqJYhffK7fPNjFSrw24t8EVhBJSunH7XhvDV9yATD4cWXUHjuo7tpFsU5vw3FQshvXavECXT9JPaJnZxafEwK46",
  "key30": "2zddomxXtR8pYPawNPDpnc6z9weDWNW2Mmz4tQx1B6x4TBEqQnKMsUu5d5AtutajdobjgvoZYT6vMYyRXDtkaTSm",
  "key31": "2Dm1EB9Ky8tNYfG6gYwthSMPoN6ww5xY4Qp8PZRdAnqf7Kz2weqzacnshu6kEjdy4mSWUwFqGobS4aRVwHE7t8eb",
  "key32": "2MMWpYJaGvmRSxYSWhfrexTPWFGUihrpnvetcY6uvXcvzrfpW8kff62JuovE4QV9juVJgV3gasL3zdWsRfypiPWx",
  "key33": "5kemua6GbtkWcw2H2XKFT6gq1jnLeiUUpoUfaWfzDL7WpMiP4vJbe27JsiWuq6sr4wDNZxRWsP4Vmi4JboDwAH76",
  "key34": "2YTLSAQGnj6YEwCgkbqhvMTidjmSup34HEB4eH77TEKz8niBrHDneMP4uaLS7CftVJHf3PZvYPasFCHYeAh3HXTo",
  "key35": "74PgovTvQAwJs4EZwVQtXseKwKqhvG44uaxQVMAhR9ctiP7C98Rv5ScF7BNU1swrQPSpbCDq5KkfVT1DYvhk1AB",
  "key36": "HXE3XCsAWQnidq2z3ewA8Dv11wrb2ZmKHJsjjJCp4yUfztyCAwUzj4FbHT2vdT6Qt8oZeN7znJWv2fZ368NyGCb",
  "key37": "dT3d9HHDudS9kV8rC2xxcKa4xjDFB6nzuS2G2XkmkpdaQm4mu93RRdqiSucRJW32G7LMrVVXahtY92gGAsMbwZD",
  "key38": "37c8XHw366bF2476YTBaQesLXTW7xbHdkYB5mv9qjNiTDrptgxznXn1wtrACGHr1e6keBFURHeEv2Z7CjPYvqx4t",
  "key39": "4tpnR9wRtqWXoKGFcBKXm2ZUG9scmWHhx5Sy1Fp7eRAA2stUH4BBzEBfjKkvhYYZAr2GxwVzqFZkopoHgntDm967",
  "key40": "4HWJRUcdwa7DLcKdTq74KBX8qvGAgNzssrUrmaQcvsTKxQU2VaoDq8R9dbbrJweYAxwTtLqzUoyPNPZkfUSd3PiW",
  "key41": "4cYJvi9Zz5Dj3sjj5spw9PcFDLNvXYnxd2a4pVkTWFmh9JTw2zTuMABNbZDdiZ8nKjgJSRt4vusBHy9gMMagAnMn",
  "key42": "3SXed8sLwn5bWMHQuAWrdAn9WqoVRJMz2nR4qLGrk7XQbnVbHZWEYX3M7eGapdyS8PEMad5STE8XqyUvdBnGkmJM"
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
