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
    "5F9kpueTYNfEf6w5irs6RLn9MKBg5TYvPeP4iZhgmndKUznf7pUTfu1nAQRPjvu6RZqFot2QsMe2hqx68uSsGHcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ezVdErJMUa97LFUFLx9Yw7NqmqKjKg8iSGiAH9FVUpYzHpDsqSAd49UdLUR1hWGXZwaLVABwnLFxPoRxAZZfWHA",
  "key1": "2tmqzNG2aXxNbfdz61RKuxQgKCgt53cp5uhPLdS4zh2Mf9RdfsHszaXcs6w9ecKNAKHMVaZuCvKsC5iMEWrXCGKX",
  "key2": "2E8hUfC1fJD29spHeAUABb15Kf21wdyTFFfbG8M4nXDmrHife5esLy9dmNhtPdBUpXbysj5N2DTqCkQcabtLUEE9",
  "key3": "25NhtjihMjZEcMHj6ykofpq8tkNSduuvqTbG92hfMbwLG4LKw4mpYWPYtNHtq9UTi2NQ6cbPxTThjDKMLP7brGL1",
  "key4": "3Y8jntjW7ciDWptddXMitYCBhQzTsw4tzQjZT8gLhdv4H2PTpKsHH1sLBcCgan3hWNgh3jzgMLmi1uaLqNmrR95D",
  "key5": "4vBrj8e9qo95ZSoh9qwW8PVnmSY72RLtR6FBjSvBkdJVf2kBuPpSofBBZaQrtt6doKHu6droLzHKwrY76MBeAYnS",
  "key6": "2TnYG7npGWJU4KYQ2ioaqMKym4Mu6RGkNuJmd7z3XMrqAr26gW4ZHLVDP4gXEgpNGN1ucLo48Cjm8zMacd1Apw7a",
  "key7": "oymZjnQ2TbwR6qErNV3UJAhdDL7uALSDfkTT6YQrK1Hei4K7Q7Ab79hyMjhtL9t57XBMhQn6DsDr96WmThM8Ztv",
  "key8": "41GtV6AjntD23eCRoUgdKffjZc17FcgN4ArP7D8niL15qLeVtjRvg3nXnshXniarmqWCJ88TJexLJwBCbTjZCEJk",
  "key9": "42c9uBfqeBZtx8x8zoQrrvkdTz8NPcaZqKR47BpQRrrXFMqHUQPzBHaZKWy2pCukxkXqn9M1fL1WUaC4jB1hynTN",
  "key10": "4Av48k5vwZ3Hk4sd9TxVVS1gX9T2kYpxefBFLWAnF8qZWTQMCDVw51GgbpaVvZiTRuzDZQfzSLvYqRx3jSg85BuT",
  "key11": "2HiNBQFvCxXLz9D6fN6r5AMgrEKDuGttz4vd9S5ZgqhAvgZT61ZqFg7fynkeLsi2ovnmYk6YGdApZmq7sG7sUN26",
  "key12": "3oiA1UVXo8SFjsLNSdU2PHw6EWQ6AE4zMTzJYL1d8j6PFDm2XWEjRqDNMQNesoXXnZ66jaB668N2tJo6ReYMYRVY",
  "key13": "5d48kWb1romS5rcFXYa7AhRaTQeui4ZPBzuxLaSCLUqJtJ7pGBuJCfdbqBKgGLPXRnrqrj5Nafa6n6qcUhwZryGB",
  "key14": "XrGxy7TAeQeYXcspjaVzhcQAwhHtVKBwTsb3TjKbRDgMMjBvtS2d8eQhL8kgJrdme39kJb7A21Cv9hdmrRmUrYF",
  "key15": "PRgX7rsf1F4Pogcx34uASbrx76gwG1PzDHHAC9N2a3fLy82twqA14g73J9kHiMaPMHCTzqikvfHJSdYK9VzX9Dq",
  "key16": "YNbuTKNyjDT2CxbjqUNaBbwCu2Fa6GGfKzoUw6s5tXpaynrLaiDd6MSYQLr1TFAicrp4jtTJowQoX2YPAn68Btr",
  "key17": "4K6rWNEvpAgqGGzWkEiMVZoVAnHTP8mSyAAggMNYu5RMsDTiQ7MUMRDDu6dZv349pr4xa7x7RLykJHVu2UWBudD6",
  "key18": "2qq4sNx9WhijqEaAF1ZESPLc3debBpvRkKqPTRrNCTE4ynNKHx9rZYBx71jDkS9hfkkK2AHun8uVmZU1h1ABRcL",
  "key19": "5KwMxdgwMH4Wz2JPmDNzqoqJsYtwe4gAUXkEs9EzgGLr9mxBZ1nKBL9RjH99JmscKWA3KrbsSeywTYbQd9558e6c",
  "key20": "5MnPqyH4SghJJpBvjS5UwDE2kk2eprDtv6Pq597BPKrmpA9meUfQ1BVTVQWb12oag1nGqnDtPr28h1JiBmQ8gCUj",
  "key21": "2yBa9cjh2oevJiEKrxAA6HrdboXCZP3B8sYHqGpJwgAPmKpHvXse7ys9RS17BseuHQShgBkrLmgRXUETdcYeX1ow",
  "key22": "LXcSDxepsT44WNgVHjEhNary1GTLDzKkn1bKi6zVyUACy8bo3M9sC22oxns6ouGQcm5ENF7XwFdTHnjxXUF3WSF",
  "key23": "4FDDkWHcHEU5hneXsp4aMAa62hWHZnfNrsHej9fFXaWSEiPP2BnkBH26RT8N4M1sBSMo21KVoCeGY4JRFEy72gbs",
  "key24": "4fvSY8ryrn8TYVm8V439a1xqYvA4LNd42GkZe1eQXkytmMRCE14ZJbym7WsDaT178ioghz3iaBaA3XFpXY57ygqW",
  "key25": "ZYuXHFGGhZZQAJf6DHR3rEm6dgMj9TNAMGnjPeDgVKvF1FR36dDWsqtRLsGCm1hxgnYDVCQKUPNXA2TgpWiiohV",
  "key26": "2mxSYNgJgkv6VNXqQSnax1b7qj2GTbbrHMnFDAev93hoD4XJUy8usH9Yk5iusr7tdFsogXn5nL1f1sBSVYtjuvvS",
  "key27": "27Xhf5FSLEDdTX7p2Y7TeP3SjjA3DNos4SnzfPpN8pWV8zzVGsSvYwjMWZsJXHUkFTDKPzaJKv1wXARgwozGRUeZ",
  "key28": "5kWeBZqDqGgjVsauXg3auJK5t7YpVvZgWdUSdCseCr9pLBAFAKTMpb3z5j1gYkJtkmXH3NUpVXTYTvXSzUiR4JoH",
  "key29": "2AyzgvaeXR5JAxSEzEuApPU6CFxgHJRRSkmRGMXvtHcpRSaLbpR16gaZAMkQLUELaTqeY21uwwgz2cxGr1krb73H",
  "key30": "3z1KjyiapGcYVLWop2QWvL75Em7iP8ZhEPYBUFRsb4EWdDk1qb4mdf555qYpRRmvM6Xmscaf6RjXUFnRgmA9Wwvi",
  "key31": "52hvBAaYtHeLibt3WqT6dLH5Xc2SiZf3JMGFdAMic9Crs3k7xJUKdSrc71if9cVCV7Vnk22gRzxZzb9Xa9D2jYAr",
  "key32": "32E7e5ek6ERdFttJoGm7KNWJav4ZRMkGRG35RMxQhgMrr4hQq3dda9fhweF6SwDPk5YwRiJauFLrQjm4cHhPVi9n",
  "key33": "4xwRZDgBwD4ZpmPgjwNv1AgDVpFLG76XjYwCbPugry3j2hpRdbpJfqBSAY8RPtrQmEmCX6uFqTbQ7K3diLr8abBq",
  "key34": "31tjYziC86tBkWyqQeMMq2Sc8LYw9Jt9y2FUWquv838axkKkWqcPZ3mz8bk1JnaebYnY7CpYmjpZcGY5uuUWHZdK",
  "key35": "21ngE6iFZ695ZXfCouBdaw2xmAcKtXoEwNgi3gobFoP45ySK1VpKEXMV6XwRJ4v4YABaiLpFbbyNpcwFtne3CQdN",
  "key36": "3E3aG9KMeDKNpSMBNtmMKoULdxuqByH13o2C1Zz85UwseEi85qMFk97P5Tdjzr3gjapu4kmfmVE7sAmnSTe3NRtt",
  "key37": "5jTVUtUJdK4XHWBCEEYWV1Pn78xT2P45d14xoMddemd8xA3aCGdk3kXR6S4vig8VqFc6N6sTPco1JUwAd4TbWaRC",
  "key38": "5LMdMPBs1ZxYJy61EHZVBaMEPZcQ9sX2L9aUm2eRbPPhsn9kpm4K8ReokYNcBpE8pWYk9rdEpK38cFP3opvADcXb",
  "key39": "ff8Ae6nAqCpiXcTvjfcEj4Zi1BQ9iY6Y5g5CZ4ziW3M89HsscDz2q1HgZDgDxGY46oePWrmvGHobHqhYGsJEtxC"
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
