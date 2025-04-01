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
    "gs9Vst51CW1VVSRjZUajwydZCaYM2EFeX96cK8uK1qeJ37TtLRvWnATb1uGr7yMh2LyYshgyEcLoVnVWFUvEzkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36HBttXWVFUA8oRDKPJDjSCX17g7THdxcWYvD2A9CxRuak4r9Er5zuFQdyW83X5nzhdGn6sNcQJaGopoRybrPaar",
  "key1": "5kLuc3Wky8UyHTTXC36bSennMzKmR5bPtFgYkKF1ZC2QektFFgthvNWMFvjd8KJgqo4fzGKg2TpYci6bGpubb156",
  "key2": "2uzaTUQHcyXwQQPBCw5GKDdyhNk7L3gHeR26EjJjRXxpYBm5jxL3aFT1thJKKYqvJBHEKK29W4kMdNGz4b7MRH3c",
  "key3": "4nm3v3PjrC1UJvt8qSR7yZLnSLmYcbpPn8KbGigfQ7HmkMA6yA1NNnumyvcogmB1vHvmryAY2XF4c24hCAuZkakS",
  "key4": "CGgsmW7vPtcuZxFPc8zH45FeC7DMP2nPcNd7PMrmn7PShHYqLkFzDyGyz716mYzHfEaTDSmgtK3HCVjB4xgNDxc",
  "key5": "4s3kmW59A9HNnBo8oDMEXtMziSs3uYLQ6e7smnDgd227zE3RB2BAayQsMY9gB3Xp2hZEqyCKUm4QCJjvb8rGzeFz",
  "key6": "32CW1bYUxW7VSDUvZCcu15pi5LHzsC6xiWny6ttfKGSLm4sUd1qRE9EbipxF1pTE5ZfgK4jopu7DUY2xLiMe9k3D",
  "key7": "xdyqgqfX1QMU3auwxP6m837ALFmQghEbJew3pB62mzGU78rWwr5SMotHcpKLBnYFMMFLWLoPFy6YNBZNYQCgzgp",
  "key8": "3gqm5Kbget9zDdELBmLWSqkeqWs4SYviVBvA53QWuQBQpJgXwaTQUVA2ZZhWEkEyrnvgANxQfBxbqhEvANRiUwVq",
  "key9": "4yhRunYjhEDk9FzRxKZW7KfkAaskZP6pX5S8cZ3Mo83v5JvGRbbLsta8RRnHvEkCEXdnh8KeEgjoxfBBX5ABZqzA",
  "key10": "2URrtyVdeQGy79kAAg1NstdNvzMTz5FxcBqf5hMSG8rCYWZB8xtKqvEXyDexbvXKEx4MfDc8MKorALFAyGTZkgKT",
  "key11": "3YowkPeKmjHdzjFmN3qX3huCyx4syz7o4GESAoP7NA9GdBuDpvHdi6B3tcUyWiqf5SJ2BCafaMoEUhz1H62kE2oT",
  "key12": "kSa4iDZzzxMPkUWbu1MaUZszBx3NWCpZ9FC4YYHoHqcSHpPEJazdWJbrHbRyhG1XkYMjATZXh3zkALPLmRCWGKX",
  "key13": "3EKU7s2y4a8yi7LJYn67AcpD6WyUZ22o2zwdBcoqYB2nXF2gvT54Q8dKJyeHEKPtbYD5G9GwbbWi1TKd611CWxzB",
  "key14": "5g9KERAyST5dRjGj9WrnXww8dE8EPHiw1LaTekeK1tGoVEZmrjfoArWthVTdqhZwRGE5ZVKn9z9uysmsrpA3FbbF",
  "key15": "3ScKggBa3Quy9qrRKgL3S96kBABUjb2F4mQYqBGvegpN231sfCup5VwPu6MkTvfLtqXQbuCrWGcE9Vx1GJpcTARz",
  "key16": "32i2qZZfzfgXa6CXzzxksb5rBUdZbai4ds6N6bYKTuFetf4Y3GpSJqnwAM3eJ4gUv3tUB8B4MfXU2nKHLF2k9FPo",
  "key17": "2dAyQqKyWzVeW17QiCpiCje7CcHr4QtXPZo21FMsTowasQrF9vtRQpLQ3bT3v5zRgVKHHdwpEz3WcoLDjZ66bku1",
  "key18": "SbxNPQ3Ep7Nv9L1N4Kvai6RjVksiQCWYXDhj6egbgnwQ5vZHpeh8XCt1kjGkUiNx9DR4Znz4n6LvywUdp71XMD8",
  "key19": "Hq9ABerY3C3ZCwrCr3Kz6UxUPJX5cTLWqgkgrEYcRw57u4k7kdDQ3iRnEHv8u18L6cH5wMfdc85iQDhfRTYMw1n",
  "key20": "ZMiRaoF1H7owwa96wPh2tT26B3Ks8ZdM4PdM65nGRBhZu9Cwneg7Aj22A9dpzAxm6aCPD7aEU5TkKSs8uDUdoPY",
  "key21": "YYkSscFAqJGjQ37SGWWUQ8pNQ51FfgeGRkGwbPcYxUbWxmVBbp7QHpRxNiiGSdGjkdCXkQLhuqDQr3XnDWdKYas",
  "key22": "5JbNc2962YL5Xhoq4XrxX3724GDWBjoMec4rYiss5SvLL815B5r9F7kX7tXcDbYCXJXs8FoQgTCFWUoKx3RQEA7g",
  "key23": "LY84se38oR5GbGxC7bpsJ4WtjpVbJZSXZBBimyx4m88FtsVwc9QV2ZL3HTLC2W9cgSLgD1utq4eFMHHjdpaFLoB",
  "key24": "2GTMZrkpqZWbxH1roTck2BzwcdH9rRh4kKnsTPFVRyLN9S7B6Ln77P7zaNyq49Nq8BcJPBdK8qrajMRy8arvtR5s",
  "key25": "5w17UCdzXtL3iirN6PXyuTbVXc6RECsXN7vhLUYzgeSQf3BwgfBkhuJop4NGvmu8FBZLQjD7xVmFrvPAZbc7droN",
  "key26": "59fLzqQRQtZZ5ZWe268PNLxy6wM31okZ1m3EUvyAdmrcNfdqcBodLwNxgdtkdyQ2u3yr5RmzzPXhmeJgxHcM5mbq",
  "key27": "tMLVNu7UU5NNQSKWaRSnat5FeXE739b9wFgjAvadLVXxwiCE9RxRQ59NauFDGSqTJu3rwDwBJFmyuEztu7Azzyg",
  "key28": "4M6KyBa2bsrVub4NT8Yurj64EfmN9QnjiMhhMuhwze5dsjQoSSQoCdzuHvjw4jYLTmVEeseKMQWT1RSD5k4p9JN5",
  "key29": "46iuBkDRq1Zp1aawiX7vMu5gPJNEiQMe7Y7Hfs4abF2g6EtubeYUdWibzKsgwhJJzJy8qPBgxs598zVe45a1W97b",
  "key30": "2zksMXoKWnbM8WJv4VGYXTJfGbBrJvCE72RVAxoLzVHZHS6w6oHoJbCqLGRiMSGXnUAKxAJDjjsYQpRSCz5dkTU2",
  "key31": "31pUkoqGosLAsgDyToUhH1NbeCmtLKx5KJN6JjP774eFxdp9xNbGFsmpWBBxy7hWYff7hxr7tBUjC4Ct19t3WmKP",
  "key32": "551Et7xfs9rRk6vfPggCBGUq99xj9Uup9pY9U5YCYtfFBff6k73cLkmXe6TbJuGxz9AQkF5qnDg777YMj1rs1Lkr",
  "key33": "5cTV1j54mT7Bm9pTm9hdqvsQm4etee4iPgo2zULn9dCUu6aQunvyZfYeBHyrc6DaPiduTYFz5ood3ZyEiB8mrpxb",
  "key34": "3Txvpa6FiBumLuJsAutCP6SEVs3EioXLzv3TYwwWd33LMx2HqqykAVYtiBrEf8fGcCuVXraoFTfpGPbM9gTUzY3P",
  "key35": "3xjA8CoYN1Gk1BsBJnQjCNjEvk7QLypMdp1LVcCadgxzHUMNLnA43TpEPRnfqGUoRoZTk1nkcVXyoVFUYG9b4Kqe",
  "key36": "ikucMLzhFgDFECYRQfBnz13zAE9i1bYKVz896fpp8KWrkRwj2JEReQsiLt3aPmXK6qzedveZmc9G2mhdR14fGLF",
  "key37": "mgNdgmujZVqm1D3SVvWET3K6zHJSFyoDPirfYgLgjHHCzcYyZe2SxpYsXGy1LFjqPMqpL28w6P3d2Ec2hKPBtwJ"
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
