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
    "4XRCuGYg5BfCcfkjFY45NSKFMsRqumn8vmwjC8oWTLmCRNfYdcsR5XngcaExoigSvFP7kgu8QtRvaQy7BiSij5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mtdhKFuTNy9bWF1yLwSdAh8o3fQihMriGCyTNhmDHrLRjXQDjNbsZHrifcGjvurooowHPWUykDQNPvyGyG6WTAk",
  "key1": "Qe4tjFccRsFgZwgvgiM2hzFALfALXT4pa8WvWeUhPWF4A6ehD6u52JtZ6cD7CYPCPaT1tr2qbdnL1ijv2xzdCzz",
  "key2": "5pzGo6AS9CqS1DpVwb2JcPrDd8rxy6BwRSMGvnMZam5T5keE5hWtWcRQDZBpC1KJ9K5e2XA6HZJvKQPobKV1kK3k",
  "key3": "5u5zUa9tMdVnG9Q4qqkDBPQ8kmq4cu4AaidGQd1swSaNxLoSqYCFLyWEU6WwJfk2M4841cYUnyJDFCRFrAEye2NF",
  "key4": "Rfn8D52tzV3iZG96cUaFQGVF5BxkqYgJzrx4WPS69cVqD9Aso2ngaCBxYVe8A6fgLXop1rtuG9kY5DjoUsb8ZxL",
  "key5": "gpBk8HwcCUS6dtayDHeby6npXR3fBGo8KeCP2rQnHHWVzRVhUwT93W9sEVHNXm4Ga9Soc2JyRvBYkKAyKDGxhka",
  "key6": "pswYkb8FfkUji7j9oNa4gdDzd7rU7aShKeNcDBsJCt7TY9GXGfLx8jpFpti19Wgo43Hk32ZCrK2Hj4UdH9QfYyr",
  "key7": "1cBnJHJCwD8bR3mzMUr48x9Ao1SikonUBe25Z5iG4cA9EFkJpP54n1WwAgvCEDefzQjPYRG4cMrVMospAQnpbzc",
  "key8": "4dtdXTPvSgPPLTbvJEzJ8Wm415yyxA6wx1R7GLNywVnru5Gc2qcPX8c1h8xpvh8WGpwsWaUutRtgu7ZMdPe9b88G",
  "key9": "Ee5sFto5seK9X52DkhxZARhXcSHiCYkVbdSHHmCb8pBEQ4EW3wcw8frTjnEGH346vbvCGM6eGGFz52VC6Xv8dbP",
  "key10": "4C2PCr4SBZ9gXedy8AJb8UcRa5jmCT4f99fLZekXPttrPXBjv3N7m25nQq9WwoG4SSwV443Es5K1XKWhJ8Y4esVj",
  "key11": "5WKtrEEWsY3vSgkFjJ4pYpMeCt3iZUEdU9dYzXXWvazFRCuDZ8LkWcRzawmmGV4EFBT6Ha8gEQVzF8ykyyJiDavM",
  "key12": "9d423otMXsv6gG6k1TDn9TUavJjG6wpAi5FUjnSDEotce4twzyHcihEnQxCmb3hi5o21RPNNzSJHqcTZm4cXQDB",
  "key13": "5wkK896gpH2oeFf47pGj4D3oPTVox7qFr7gEBkruhiEmqWxY3aupntPqyqbT1icmuNx6sdNLuut687A4BngPszsm",
  "key14": "3JAFU6J4qaMEBUVmWJqvYBuBRXSj6BkaFT7S3NLJoiaCK2zgnmR38wZVzyJ4ctDcSFK6JgjPqqkMCjE1c2bg5Lxx",
  "key15": "42wTgJRSRgwiryBBaC3vtE8iAd2z3kJBGCjVf2jwy2YvZaFbEFumBJtyRoDHJhMqmJNtzRY6MQdDD2CwbWS27yqM",
  "key16": "3NhrfnWqN8ZiWGkuifeswoZEeaMST8PADSGL1ny8NXp2NGxBVA3JbS9HKDBfCpjVMLK7X1T7eW14LDzVngvwhRsm",
  "key17": "2xfuNRXRBNnkuJZG8cvLP2VLghiQz2xx2odW67LLRBD3eNE3j1ZE5MX79Mh8ForetfzXvwzwrvswPRt9144naKRA",
  "key18": "5XWMcVtqXg7UEzqLXffCWt5tKvLvL94Tijp8JL7XDdG2uD3Mu1awUnK5ZBsYbkmZ7sJ7K9c9Bof2Z27y6FJ3tqyb",
  "key19": "349NKsK7GQ8W65JYCJ8YWyFdq9yQWhiJ12GLEh8errujoRJQQ4mQqfY2eeAWJcLthcFVTu47d17zUR29uvgABvNd",
  "key20": "2PZfkwYdVWzNAzXj8wL2ELZJXg9HGJQAxD3jjrwf81Zynzxr8SPej63YFucZ9vGr6z8eeqXgUaVqVau1zCXauiBT",
  "key21": "LQN3Z1wkc7Fy2qritKDMR6eRTKzKewCUPJwVQEVzNsjKkUbQvTATrq48zDtAkvnvfwoRe92MvYzdiuyp1tmtxum",
  "key22": "9tjyfSKaPubdm2HGDEyptKHzz27cgVFdZxfUC5moG7fEwmiJg59uh8jxHNYNQSCUj95CX5RqWHFGtSbH4B4YwNC",
  "key23": "5dmLYEaDeZgQi1XVC567veaLjczvJzvBtbYh31X7Xewo1fEhEgsTgPdidyBMTRLj2E4y1gWqv9VQNLnAJXAo3GSx",
  "key24": "3HipJ9CJTQyoZTLdihU451QCUwEB6Vr3JWkxukebTV4W1aSTytLKAfNRWEuFv95Rcv8MftiqUBP2YyA7i5hd358Y",
  "key25": "2fHVyy5HcLC9WsZCezRVBYpVK811FHo6SJ2Wy8qj9SjrFbhmTz11EpgurZd174aYACmfPSx3YweggZRBwARWQqtb",
  "key26": "4v9CEkQCz3ZdZMqTHCzV7goa3ZYX5Zpnxafi14oAjUxiGJ4sccxnWfkX4djvAuPHNjvgavtUDYRqsqGDtgczQ82v",
  "key27": "3YWy8LCGKHUD3CMNCYmtXHvJTeZ7SRi2RyguigZmVntZDV5T3JYrqgNCKGCGRk44N1K4k4DHHQHinuHHztuFbCGu",
  "key28": "tPE4makXBpqQ7WKZUXQ3DLjEipLQoHNZNCH4nRMTA7TrSPJNLksNKeFNN7ggMN9Mz1stW5LbPFQMuhUWyn6yYa1",
  "key29": "4aWcbW9C69RaSsLt8QLcatC6pVRnNMTAoxBif1uQJGvjobReD6MaxpCofa98ZJjDtz2iFkmwxqmCHbzrV7xc5UAK",
  "key30": "4yg8ntWR9RoTJ8v4FqFYKF7gznCxFG3JstrDoxnzjKxDZ2rWaQt9nBc4DKZgFsd6C4cjoUydD4XpTcPEVigxv67G",
  "key31": "5C1x6HkaspZVzaBEqG8WSCt7D416Hh3YVf45M7rPi9oVQRkoEs7gtGiLhESSrowmjmMyFvNZxANEANJfsZcFZsGK",
  "key32": "NXH89Wi8EzF2RJxcMFWX3fsVLDDn36wDbdeqsUQcTm2LwL51FVcY3EgtveRAqR1HTPBh6iSti5VrLXN9df7qW1J",
  "key33": "2jGZjEmXLs6c8FTGZagtUbVNTMDQ7V1D8Paexj73syNRsMS4faRDYKm2CLeKLNFhZQ3PZVpnemMN1Ar52XmXw3zM",
  "key34": "ceoRWkDHghhkoYnm6x1TLFUUL26RZN589C1X5qS1SouMuotpsYA2QjfcV8QA6EuEE7XpzYDKFKf1ae5H23v93d1",
  "key35": "3S773FDZRtzzSXZddeiZkaDVsNFtX3qwrWw4XmJs54BJ6NuKi2Ptgd9JHLSwBFst5M1S2myo6V8ZuF8vMbwJ3PMD",
  "key36": "3CFVww7Lmn1VtmF3vfBqpRo8xZxivScE2ysfAg77NUf9WWqa2CCkGm2qjXUdM35BiukywkpdzCvs1sXoojirxr5G",
  "key37": "3MCXjquhMVFym5k2uCsnhxvXAdcVKme2azrnoghqMSP8kRH5bYeLCZqKCGu5ADNBtAviocHTdxhwtkqVJsyoe2Au",
  "key38": "4xXvZSfzyTUfct7iNMWcBQ6v6aVqeZQ55mc451TXV7ujLNiCPddaH1xfec4yPHNcwnYvntSHY6ZMxVCr1VjGniTD",
  "key39": "4CdhmypuTDdbx6XnqixsswSDKkECWpPWUqWiY16Y4qGJ24jR78e8cvpi39HE2YcBgfmZtf9iTrZjaQpBAPBH4YaX",
  "key40": "61qH9H6YJc71kp54ZapjuxJXj68exosGT549rBrJPcLTvHwdreyWiLrUt5yjpHPnix69zmMv3P5hV6rcR7zHJdJk",
  "key41": "3Rz7aT2jNws5qdEB28o5b8sLq9YQzL84PwUcXi1aydxE8TsQkG8tgNe5Dd1sqPSfJSJTCVH3XEAbQPJjbMUbSRCP",
  "key42": "4wRX8g8n3MTaipzTjkDyZavHrVzBwUp4x41JpNWCHb3RdAcxVpfVDHSKnP22U6ySPdHhRMu2nfxFd915xhpo5Qe6",
  "key43": "5J5VnqYFNQhjeY3uFw4vUkBRSSsv8QeFKxaKWToVGa91DgxUmGd4VKfrtSCAEGLYXip6vxUN9YoGwDquNFYpSx3w",
  "key44": "5ZMJcgyQcnitZiChGmy5UxzMmuFZRgoVKy2C9iAqywarBgMzgqHnDWWh4efXvXESLzxzgAk3LoMjZ1aCn3f245Hz"
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
