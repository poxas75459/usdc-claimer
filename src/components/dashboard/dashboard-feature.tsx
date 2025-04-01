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
    "56QnHiE65J3kzUALfTY26W9gfMwUBrt9KJ7JgSbvbJ6DhKkqa55qv5UVb3wn3U1QwiCgsSVwTGNynP6Ei79wvie7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xrK9nYNjmojsfXeagsjDH1TwyceuQ7Q2yVQnZswnyuCCapKnxMECfVqv78WQ3YjqKoVZvPGFXcVKAGPYxzoJh3c",
  "key1": "4i6zHywMUddaa7kYVdnPhQmz5JMQHz8ZBobP6K7P7jWCbXVR2DCbPJkZAWbmVWJMegLCRD2579Wt6WwVaF1vbpCx",
  "key2": "3in2yUHD6LEmX4iWERH9aifGMEdDiX6hyVZMs2bQ34uwsZ6FNKiqwABHVqzyRDgVMgkYiuDFe2fJhtwezeCGvMzb",
  "key3": "u8WaArN6HaKChQyNK3RyMnWUB8UYT3gCFqRX1aL6mVPtwRjrh823fFY6Zr5j9Eu2MP9V4kA1KKsTDag1YFBkMVU",
  "key4": "K4WdPxXh7DGtLdVALJcxNpT1JSU2zEoGNJBSqwGAQtTWujzTj85NAzXg8P1CxU1fahYgZuNWcGhZNVSXzbjkcW2",
  "key5": "2vBU3qjpgaMMGcVKJsqkji7Y5qk37c8jRvT4v9aaV3R8sNCf6paKfwCMkcPzBYMaQqxZkxdXPoi7H1dwq4st54dM",
  "key6": "29GpAr8YWFXf61WAgWZ5ur6kXT9sZ5v397e2uGK67toTSCPJ74bSd8Zo5cDqhMtfs2QwjBLvCWY4ngd73Rvxo66n",
  "key7": "3g8sekhVqDT7ydCS7Lt3jUVDw2eiCGVyrK6UrfbSFYW75u1sTdcYb3NtFD28Pem6FXJqYaSMWZz7ZCAUYsxnznE6",
  "key8": "2dXbUC4Z9p2NFdnRdRFEkqmERLfW8pYjiu86j51CJfnvrZgBnowEFt5vSuLFe1KzsMvtbtskgHt31dDHiMeY1qdr",
  "key9": "TizRyE2TiD9QYAJda3yRZkca5qcRVTBhwgAy1eVNgStvPA7U8YurcdKCEXzZGQWuy2DhR2UVLYzE89GiyF3n8oB",
  "key10": "4Xaepb8wgAAd4mc1XwysJXFkmxDy9wQEqTMBFgerH1mVtabGmXJSpoSMVaA9mh9BsV9NciGgDnjgZ6ATYXew75GV",
  "key11": "3G3XbPaZU3nfpTJv3aw66guvM7zvR6ZkJDaVy6MhAbrs7B1mSnZ9iEpkAaEdJ4EHoe7BdxqTT3NC7xjruJbBC1cL",
  "key12": "uVgWeBiREbsWVadAEyuFgecAHu5cANh36resuNRwBW8sQmK31qCR8r2Ai3d4siizv41XRjc4wTLsB9pEkzCpT94",
  "key13": "641PYhvnkbT62BZjZUq5xumy2w5KmaCNc3dYVx7UWQ86rXjqVFP3vtQFaVyqh1GiYN6qfekMuM2jsiG9EAcENaz1",
  "key14": "2eShpig4qVgFxYdN4JhU9RpF7v2vppKWpmUS3BXiD269WeqpCUqdK3meqjo7xZ7asN7ADoTKs6g98AWgfMbBzrBm",
  "key15": "4zvwjG6YddrS4vKdiAbRtz4bh1oZcvU1n4CaaTVdpaMABD6QjZrQFz3vtfvQ77gyqEKbSZX5gtE2SANZdvY9xyJD",
  "key16": "5PHXFTLPZs4vjZhhwTRiR6htY2gLygLQvmoChqwr825oa2hwFxZECa6QGoa3WaPqSnuxHpXTYqja2uaRMQ3cmYCD",
  "key17": "3M96tx9cYEMq1ArufHVrdNtXqbDRWndPQnNE1rrftuYRKBcdejPeEyrupUKxbsW41ixKEWj8yNXW92U1i5v7jWM7",
  "key18": "4XJJ7qNFAXJwX1gwK82A3ARxGrbXoTYBBXgzRCBuESZV9s8y62qzNS9XAYuKtMXQkwS3SkL1C9VJwzERjLmidm4W",
  "key19": "rzVfJzDbWco1j2kvqFsoyygUs5MvdDVvb32arpDgeL5nuu7tZhY5fcNyWj9PpafTunprkVnUapjwjsvaSDGiSW4",
  "key20": "3oTRYP9TZCFv6DDSwKnFcZaniwctS2389bUdQ9XhvA1GiR53pG2E5MKf9x5k99pYmDFapxr2zYXvGYH79D8joNmZ",
  "key21": "xnbDAcXN22rCHMCm1xAtcomeefdQapS5HQnHQMjVx8hqGDJVJCCtWwcjup2WvTFmw78crNwVaprC74dWunN9ebG",
  "key22": "3Prxz9nxveu5Q8cYK9hxEpZzWJ2bXsK468p8x5c7jcgdNGqX8ZV57Dw2indt6gaYrbYiHcpyBkLK3QSYTFqMrErt",
  "key23": "5aZ3koecZYQoCiyZFkg82Qbe7kdoQmF9VRnyVrC5xz7oKu3xVznM6HV8kvnfuD5rmoYtZ8HqtYV7vYAtqNTrocVg",
  "key24": "3tifWX6Vda31vQSQxn45djTsQrKA5EVzsvuMcDtSNdpauYNx5EveGFjN6Qvt7yXpLjMXuZaBDa9vk6L5VnwoJDT4",
  "key25": "3dfYuS1DLvFJETdZfDh2sjmZrfgEGrurUm1A3PTFeArPQYtkGUKd8B2a9AzaV2fGPoSePXt4tt6A44ddyCh5H2eZ",
  "key26": "3Ab5zvHnV6yrka4HHVwN12hSSDdwoELeLLsRLzHFbdisMuoDXihXpeWKFC3LbEvFxBzFGKhbWSKoRE85oRSjUj2n",
  "key27": "5ATZCBp5y4dMZfDZnzBBgqNwup8MGskbgUuF3wANS9BWAMsEce3ym2wKa2WuyFKwSnaa5Ah4ToMYCAU8ZtRVrMYL",
  "key28": "hLRUPSEJAtTmKZaA61tkndyh7kaY6DxQnxtBjpWTBGtCmYFDWABv3ZJmEJTQEDiRCmDBCs6dGeuTtkPZqMex5Xa",
  "key29": "4soybKzB93uA2xcNufKw55XDmegU776FSHF7cFz97FeiYvCJyRtPXSuVtFjoBPEQXgrFk3BbCZkXhr1QmbnQGuSW",
  "key30": "AXhEiUa2JNmfxtQNLMk8WKHHiLbYijazGzY3QjwSz49STjjTkAtwfbHRbrChnmFBNoAKZr1FMhyGAsQxHGR6iMB",
  "key31": "gLPPhRoXRPqmSfyJEDrEBZQagaMfveULeiBteGVBboNGRwHTDj1bpEBKGFqA4eXKcAcoPeKS2pBQQZU133wKV6m",
  "key32": "3EU2dHTQXBfd7J3kEfypZFsz5EQ7v9egNtSH5YgQXC1MwCyo4EYXQy7xhfMzAGp8mb6cC9Lw6cechE27uDy6Pbca",
  "key33": "24BXmGALEL9EEzkChuDW64KEGy7n5cRCWK8TaQUMyK4soSoUJsjDsTpbLHhDs9VfkP8jW5bhEeMj1gzJqzkgThSD",
  "key34": "2WimPKUSYPir5rKH1QnZmM3fUi5hmRpNe6kg2rPFDALpnryHdbvkGWZRZWhj6uTgTwXgvipxtVRZFnqum9euKr9V",
  "key35": "49H8BV1Xq8bwgcA8SGrXXUxWoemw2odR2eLygvFZfjSNmquak4xBgGTWo8wqHBesXrSjgryYBuqzi5SK1ky2tu9v",
  "key36": "3P9k1YYY7U5t2e1s3Zzx2yJJqp71sbkEHGT4s72psG37vyjahLgLg89D6nw79K3u6U9JLAX3My721DWqAb9XpRFs",
  "key37": "3FpxruGh8Jz2SaP4cp8JYKm5Xh2vhGZ5r4B24Se1s2sbDS1N6j8ipRM5cvqraXeLznsgXCFP3WS6s2aDcmSi5P4t",
  "key38": "628h41sR4H2LSfwzgX6ps1oaPkYkreqePH3B4rPV3CDBJY6zbSdWy5YvJoqVFf58HbK9sgjruGiec3dJdsFLwhDb",
  "key39": "424HqNBvTYbExQSbCypdscFYMSmVh4r7YzPaWbGtzWNxj4yQHRZ1UaEeiyz5DjMc5dQXYgEEWUWAh8WtkYZEVNm3",
  "key40": "zn4SdN6dvyiBmYm9bf6RA6oPo6ra5NcMiVU28HhTxni4r84jqMRCcSrHkK6TowPyS5EAet7KBpYZBnzC3rsPj2X",
  "key41": "4fULUDPx4yFtnTUNepBSR6mvBGpTvttNYvFyvis1Rh5Y7izmTjvpvu7EmqKftQybigxFqPGEB5fNxLFekGo8anNN",
  "key42": "3Zko6Sy7zGJmjoGEjuypniUhEQciR8rJxRCvNfCGuz5cQQDX46z7XY6HuKNQBRmptBrXZhAnrpXu4FqsUmwFrnyG",
  "key43": "T96VQtJPh8HjB8uNHqjJKMavwdEsEHiuR3GkFHGNoWCAV7RbRQfxLBacguJbBs4vDPQR4xGEsa1Parwsdq5RMcB",
  "key44": "Ccm3LDzGU1iJpEW1wg5QHDap1dD9Dh8voZMWHjBfx2viFc9x3sgt2BBVVdnyaDARpR614Z5JCud8AaQckTNsanj"
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
