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
    "5ULZPisTk6X4h6JPEeVzoG3DWStAJZzCxSenqaHdsM9oUDinUe5A3oyax9Ep8NYU7hx6N17jD1kuF3zrHf9sK9J6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27utiDF3ujpvQdt9giYD4xDvzCNCv1tSdajhi8yKvmA9d2xc3GD6dYvSRKwdVd3hsh6TSS9sWPbGA3Aa8T1Zo1BX",
  "key1": "3J5mPneRJwz3FGs6mye5gUGNH85CR9CRfoBCUsWnTBH8t6ZmquttMVWYSVMdmjHQHqvY4b5H8wm5BmC2LE7YvJ6Z",
  "key2": "3D4WZQfhWd3RXaqJuB6ivHgg7w5gmFY7jNUbsHU3qGsXwC2H7vGwP2WNJwhT8Mwts89Gs4usvyQuhJiPfUvsZTvV",
  "key3": "3eodGxnZVAJPPpjxL2TjdZ3JAWsNxvULVMdaC4F9gUAV5zaSP81zBrJZEiuamnZSETpGP2RmWUKH9vfVCAFTfrjo",
  "key4": "58uGjYMgzTqz6RHW1DZmsaotgct63P98AMc9aEuPyAyRb9JXrVj2B15T6qh24rDTUCJa9Y8hTpXCLTiLjM4VGiFD",
  "key5": "383qSX3NokoFfcb4eXf61336RC8RNrGaobu6EzRYhEeM13GpU6BJcNKaEYZ6hzJwAue6EDabvUYds4a6dUNGa9Te",
  "key6": "2NWaCNGxRdN9CVrW6Rd5TFqVcNM2jfKJSZkicCmfGFje3zHoMqJHsjMB3YxsMcn92rnKVbh1bRWSnnxtYjcYogbG",
  "key7": "5ezpfA1LYAD8CXb2a9SAQs4CtmWnnzerLdcqWAwy4C2PZEgEgJNFodWe4Zy8dBfRoNwgjaE2Ao93giL1iZi7mNZt",
  "key8": "tTBZTrMVdXz7cnAcociyiGomgTnzdkrAaYXfUFSjrz8w4xyG54oNkZW6La5CEkzoeA6tFTbYyMPRuzvAXGFD2CD",
  "key9": "ZTnPc65f3XV7sZ6rvgP1hXN6JDCD6EcaueUoFzco5xeuvkGbh9ERraHwPHofPnN1AMyvyhrkc8BXNjo5HQ39uVf",
  "key10": "26654ugqZo9CdSoa9ZFSSD6Lu5ziBtgKC8K2eDyVFYf12yxT2r7Uhbim39A1197sq9oS8d4qXzCoYqn9urQChjXV",
  "key11": "4Fsx3q8fPtxQU3DTfpMM6eq8KzeWM55CfyuTKsdMJc39sBbSf1usCp5yWccypbP5nFmjUwq2AdCXrUwkMb1vHdF9",
  "key12": "3NYA3DmzQEkC72b4sW77jiztBtgJUDTe8HT2piRYbUjhHQ1tvPzN7fMoDLaVbJn8XXmBibzjeHfjtygs9anPpvk7",
  "key13": "4k9pQjsGw2TjPL63246EpKNXyqmrgKFGYsQ4PzbqdzKz4GDD51nQFTdAea35dR4A7KUxodRWLVbvSZD9UJS9VmBK",
  "key14": "4v4Pc6c9qgGBZ1QrG6vSjy314MRPo8GWZp9jsaN4ZeDv6kaqUmv86qqjZ3WGXXzu1h8JQ85YeUQ5myWUvhhm8tq",
  "key15": "545tRXZ6bocWrs7YUv3detkYyQLTyhnZsma4815GgcRbM8Yb6snwHPyyXQMhfjctEw1Z9fE8V2sUfieUC5xMEcDu",
  "key16": "3wFturqN2feejJyXmwTY1zgrUvoyPtuF5Rsp8aRnt7kKyX74NyAEKur8TevzoTTLMzaLmKxqCJkos3CvR7keUez6",
  "key17": "7jNrG2BsLHr1JVJf72PvxAqK78N46rCqErwNEaBH9qfNQxmgLWTEVMxeiDquYjNPySR5RmRGzsoV6wwXWupxxTM",
  "key18": "3XPwtx8yQRRy1QLjBnnzdCW2AfBSVKzdErBWGeS6NrpxXDBrJKyajW7cLUtcxwpBjvTQ8Mmr91AQTzYziNY3GzMY",
  "key19": "58LMVR588KzZAaHG2SyTHjad2Xsvhv2izVSvHp3oB2wsK8zGo4LxyptJC5T1K9Cqc5iTW72kqt5nkuiGUg9a48iD",
  "key20": "2APbPKZ4yfNym6NfG4jp6QUkgrtBun66bUvfAN6o4r4YAJFDXkj1ZFGn2hWBmZBKXDZYiGerE13ZCGAX5kBdiiCw",
  "key21": "Qoc5jc74mAZbU9GdjKAubqKyRwLPZWtLRZLCq4nUTyy7Qzfdtsmydz7ybZbL1gcUf1HdTzpqQrdoUhbCSvgk7q9",
  "key22": "2dthwZcxTXpLvLz5wa8wDviRRtbZnF7cwzfu7CKre6HpVc9g43vAHu8tJZC1FRyNr4TeGUTsxs6TQbvSRVTumJdu",
  "key23": "4KFTFYtRUWpZPARG4dSqiafskPA8Zg884rnbro4i4w5xbPBft2rJK3rBjgGAVNcFqnGSr58mMJxECxHaa5yAeU7r",
  "key24": "3Y6SEbCcFseojwkbDN2gWRMYEDdVqBno4ULAidzwfaDWErE4dGNFdzq6LeETekT4tU6hcdR7zjdran5A9bGewpqt",
  "key25": "4RSkECnQGzhXU9M2pBH8JAamFg5XMKPTJnPw2sZewEpvZ3UtFk6rFpZbsS8oYok1XwdNH95DuM3mp6QVyvwFF9XE",
  "key26": "2TSxVXrDJGCp84SagbnBK57SP42b9UqF9ccKHcGBxswJ6QpzKUysXkPr3Q6iMZA4e6nSWJ9FxhdzRW8YBUWev3hG",
  "key27": "5rMynBqPWXu6pUrs85rJpG67kQJXAurWpFjv4AR3hMgcCFrLx5S4VXGBNSAHZWHdkQqmU7hQbCWZtQR2RRLnq3Pw",
  "key28": "4nxg7tPvZVTZ2K76711RJ1KjF1rqkurgtMTSTga8yacUbSmUnsBp9SyPLHontkxHJgQhgxq1CYZuNhGYaBoSndja",
  "key29": "3ybbddWoC2Kd8btV7nj2Q8QVDkmmJ2M3fPUrV2SkxiwXLVhdMvTB1sLPFPYZ42VgQH1dzqbTnXaDUJigxGMcKeRA",
  "key30": "2LChgCJ3R2hgrteYGyxrK64Yu5hgDZYnoz7nzThAwW9XrzAP9Ajc2LNRYWZ2a3pMVVbqet168HhtUjz1U7RAva2U",
  "key31": "5DmEugKNLo27njpKP6zUTnnxG62i92teqEsVSfVs6jLoUdbTPLpYKCGPsFzHAJX9sX9y9wLD9kMX9pZh7bAF6R6t",
  "key32": "2VZgQFomfKyKvj3k26WfWqND8p25Peo85oX7qoncWYTKj1KC3rGjv7W15jGD4o6aaJvFL2yR6c2PCJAo9YoPeePt",
  "key33": "4dKnjYVMbCc1Fxkh1bdetnmgpr5bRmWK1psUpzZctdYHQmwuVtiiaRdCCkHHUyffNj3NPrrpqvhihmA16gagNHjB",
  "key34": "51croqjKYQvYVR9AtrheNnJ7YUWCtpkdbzm3DwCXc8GWS4SQWtZnKBSAxqHB7ocFyfZ32d8iTkcyPM3okpRjS7ic",
  "key35": "5qnbak55ZPbDNNkbhNzAtnb8CDnyqV27wx7AJjjwPCZC42LU5gYU6YA8MhzEiuAXAy8yFCCcopEvmjADZoFjJM6z",
  "key36": "5Rba2b4JAJagznVpbB8QudHcjLe3BhkamKerZMzFiAXjVTZBkVJqM3eH1J167yKAo31Mq2ppxnb8KEP1PCVZ1eAG",
  "key37": "CXR7pucGd8uzLLAJSN8LksWdT7swAvBUVTf4ZvMRSCZsFHzuQVotKgh83tfgeXXSjQmQCSPsJo1Sz58q9hb2gQ6",
  "key38": "h2FuuNgQuYeVC5jjAp7KugehUXFiw2MjS23TzJWTWiy1otYXFVxs8F6QeYioeqhhZAmUVKgVmwTA9D6VyeQxPJK",
  "key39": "3RpdYrBDym8SyWzb9HeSCzDoTxNHuzFFS9v8AirLnNTvkQFVZ4XskB3tW8eYxugCBMq3c9GnzRN3eVWgdAUVa7A5",
  "key40": "5zTFNh7EksNuqfMPd957fsQ3aqeT7bgmWn5AqMgHckLPr6uBbjMRHu62dBJeHqywbu2GiRZqvAmMLp34cTbGXe7o",
  "key41": "2Jp6UGJdzZaqSgEgV4CBUAfbPbPyQtQPPK8PZKJvaWrpKUYy1S8u3xYc66D8cwo29HUXVNx7gwsoXyVzk77hWWXU"
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
