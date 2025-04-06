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
    "2nYdpXuUazv4QvEWNmMXLK21bqdBcm8mDfng2DKiPfeU3pDLJP57Xxp9RyVT7cFxf89AtwVGucALTHuiLPzc7jX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JhWcxKEtQxHvkoPZcVsnN7rKR1xdCSwJk1FHMYqAuRnQyejVyWuXGPdEFibfSqHrm5usuuz17JBQoayhAj7wKA7",
  "key1": "4xvPm5Sa1XkDyDeRz7sTUZXZXLfNEBv1VxuwYe1wEg2iv57zwVFYF43GmrEeLmdZyQfeaNyTPAXb5PKFNbKE1hJe",
  "key2": "2taeVC2w4UFxxFNztKw9DZvsQgeGxT3rVA9s9xeffVQkn5eEsg4k7Bx13eDvP7iju6BiUgnnV5AFTA7UJtotmhPd",
  "key3": "XkJQrFH8hvWZP55Wo7bNzyoL1S7hjJJ7PktYLjRkT3m9zVnncRB3Ro2PWoUHiHWLmBX8eXG63u59vwJxNJQfxNm",
  "key4": "5unka6c8k5WQ8S1bc2suputh2NtcTw1gXWXrmstMwhWyNSUR5xV4ZMchuJpzXDhQR2Zf1mowSG8trQA6MKM2oDDt",
  "key5": "FjJaDhCTpzTk3A1WamtZvvMxwu8FtZdKeG6VXvkMVCsaB2ajcjtcHokULr4U4khTPLCXST4jj9FftJiHfATGUHw",
  "key6": "4Akt26S6vKidMRKQq9Evu6LU7wefq2UToRVhKBgruhT3YhAh9ApqMcbqL6HrDowVTStYT2QSBX4njeWBrHb7WLwo",
  "key7": "5aTS6Kh44d1LPY6DjKMkyRi7hcV711vd4qEYTQ4BT7TtHNdHnyEyHWs2J8hkC4rhsqwPiN9hbmGa4x1Nr2nQGKx2",
  "key8": "E2gHL7qMtmVMRDzJoUJg9JdGDY6Zec2WWkkvG2tCKDYXTboL2bq64BkD25iLgVrh3b6aVMzoR6kyuW166dPdYys",
  "key9": "2TDyUf8Haf2iitvGCxVB3tSraiYc4fCs7wXfurqBswWuKMfy6mr6ZFiKpYmLGHTHQwgzQtwhaQ5AhWaTTCzgk4dB",
  "key10": "34x6fXWGJTR1a6GLofJuhzLNQqi5zaTRJQ3nqo7dheKswCJ2Ku5gcKned4davpXWweG5LVqHP3qDDhr51fgJsBK4",
  "key11": "3efR93ZeJQemLYem1tTJaqgZrTH4wjp3hyqaAfpYMTtN6wgrHWVmZeFwFmNRKksVzRk9Paoc1xjJbb2CHvHfKfY5",
  "key12": "48wHq6KXDDgUuPdEaxsv4BA9KoR3LbRsGPTiUqXdAtke6qbdqwW5q2s857eBvtRJN8Qu8EHwFrHoFbPcfJnMjKGp",
  "key13": "3QVAWFhVEWiKKUATLVNBiZYGvhwxBUSUBjhNnU8ZyZ2F36nHUaMvy4oG36N215zCD5KLiduzFPQJA6JKBnNPaSFy",
  "key14": "269XPbDGWYu8LQdsKSj2w6eaNnMz7aCXnxSQ19AGdKGM3h83vm93MDHvfytYGHbYtsis9ujfD9i2qdxZbHXrWsYy",
  "key15": "3GZ3ifMP2m7z1mshmYAq51X8aV7H48Bs9cYt5kjQ3zedSTEfBCtQnKZHnmzMNtYaTXrbr7Xbqa1AxaCvpnJCtQMs",
  "key16": "2Vh9mpvXtiEuYueGRowTpFmbJJh3zfg8aRcv2RbL1ZZQsjrjzVQdeEBS1QjvUpdv7FeVAPDVkCdpAUvBBGZ1739u",
  "key17": "3r5ZyRkwMa7K8wJbQMjn3knu48gors9a3JR8fa6GFtERB5TSFnz7NbiSCYUYpuTJ2BZyj2RndRk8YVzAX4Hzs1Lq",
  "key18": "5GHhyr3rygdb4HjNd5wfJ6PVunUML9Ywd7Wf4Dyb8WcA5jKiioEYuyWnGfh9U3vAiCqZ8HqNnHA5aw7Vmyq4rQDF",
  "key19": "CC2PEyJ1WeRuWr5RwGtrpUVt9U3VXtCqEgaja9YvF42m3WUCJ2ktwEnE5bSWC7TWu5mVRPFr7WowFJhARXnbdoi",
  "key20": "4hej5HA69w8HapmYm4XYxigL4ATAZLUPHj7Kwf6vHNz4XccxP6zpqQueCkDRjhgkvwVjMPiC93Qb7QSq8c8dY5fT",
  "key21": "5cYYNRznXRG4wRtbMyYLxj93JWocaytVi9MLfqEFzFm4zzfTma5e8tfZbAfwepzk3FMnLAsATjQm1bgFxhLx6tgp",
  "key22": "2Y83JZ8Q9bm5pfsbvY66EsRWmZG1vfCsghxHJVTKNNpR5s1WfRb3AfhjiDWbbpw42bVaZyUCnLtVVmNbA8w4pBM7",
  "key23": "4dm8QiThCWZFoJNFstiqNoGfKJxNqRvpsT7kxmZKJRL1npsPBiymSwjnqUWKS6i7LP3p9xv3hTLPGfmehxBik3c7",
  "key24": "5M1YFvbAzsyFaYnj6nYA4cedXZfMkRzNEfYzAPZGWFhcixJs1pd2GmZbPTB9PVUMdQMtFgKLjjWFSyEaxYsKas6t",
  "key25": "383sQnXmhzRCfbNyWz7LhhiA6M8txcDsUtwMrz3knP9fGzJGdXaKN6urchcpuC3EH4kwfPTC2tuxssc4sapZPZkz",
  "key26": "3xwM5R7bi35SRCnedwGahtgr9bAG4GA3PPYuEPVXttnbbZp5B6kvEyoMfBtzb9pGUDGxbU7UV7pnmRSfaWSQVQEK",
  "key27": "64EaKScm2c5Qe1ZYJZmEwxsmeBrqaPcHRZtSGeJwfqvj5JNDAYhSypBZgAHPxDeLzaqucgrKx1HUv9tHuQRrEjhw",
  "key28": "5je26b9zeESEGM3XygK7ErfVk3jowCsoxZM7Rc1aR8Af8bRoTgnQNWSJqP1WhD97Hy9ZnfmQfigFXYb63VXNgS1Y",
  "key29": "5qyvKQv7X4n9fz8nyTJz9vnVPVMcWyzteWMjKKbXFHY7QB415G54Xkn86Fh7Bcvi8fzqHyVcHKcR49ZdQ4BrARED",
  "key30": "5ojZ9uzWdrRfmtve2ZzTpJowz3YQxpBLNiALF3wBvZh7SSA3WEXY9XLTkkPRzArfTSweuqvzaSL6GCFxwLuuVmDs",
  "key31": "2tAyP5BqyHHS6e5MkgRMTYkH8zb6x8wbgeENANj4gmtxSjEK3k7MjB1FYcPCPERzEVMrswj38ut9qnXDesti9R2E",
  "key32": "63CFYPiqyraSymCLRZKyQ6XgzbUdZ5VgyUiMd7L8ZZkj3XAhMjUH9dWfZ6s4DxzLFc4zAnomXVAdNq6cVVwPB7Wo",
  "key33": "4hH9KJTpUvEdXypiWuHmcxduzdk1K2a1uNXiNf6eDSNM3tPJc7z6ENw4aTke2iRfkeC794WFWYpZ2gKcAw4DCkFa",
  "key34": "2pMRDSLqWFi1Z84bTGpXXcTUAGKCSbejjHUDp3r7aqzVSFD2LMKyp26ASKVRUUFLAK3Bk8e4hrLc7aZv4657FZvW",
  "key35": "3tYVFLRuHwx8hvrRSdyaMWMhqErNAz7fbauQgySrz77CZ2toJvWvEx8qugRnnmJuDu9gAiyGs4z8ofjKfZV2V4a",
  "key36": "5csrBffXg1mmBVet4LYyk1pFMQU6TxMfxKk7anYhhXfVaghJq2DADE88GSeU7LBz9FMktekwmnuBE6ycukMQZ3L8",
  "key37": "4pCcSNc9195SGeCnt6Wmaa1uL5H5bvzq5FixGTPedVXF3wzbQcwqEoxx7X8B3PEeShQK7JpnEzPmZb51QzxXB8c1",
  "key38": "5pPghZxUVurYePQ4wp2jsP3i15EJeDsPab3R1har6jdQKKDDewzCa5WCHHfNaXn8kEzoGeTu6c6QnAuntwGwH7qp",
  "key39": "2mHdiau9SS1YXvfVuQ3FT19nU9NDkoibYYxWXYjuJ13W3GVRyp3GHPCFdkaQ25rWNF2wE1gGeY68bfRPiVyHwkva",
  "key40": "2jC3tkpwo4QBmm1kCqgixStZmZjQiC4x5pszuDiQ6d72eUTniHGmy82ytayrzcRuX71dVt27WhcbL6EWXvQNyhwd",
  "key41": "5rkHeoWPYGyCx4Jwy7KM8VYLhF8S71EXvbSA7cijQ1GzQ9ZwCEGbKKobnq9xxAm6sSkLH6wEYNtBfohyVteTpm4w",
  "key42": "5rQsXUUdzsHRcjcjyYUVCCL2U9Xcqndf3bndzWqGRXcmFZypgCPW3iQ5fMV3ELQXSfvMvDqy9nZ7fd3Kw6C4A2cn",
  "key43": "5oXmt27JPmWWWf2KwfgzBjmhVUahVixWGjLdPbTg892KQybzSwoiHo9ra7fKVkNjYztM8qQrGiQTBAw2oi1gf7b2"
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
