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
    "36FAMJJXhzF81dSPNNNwQpMMUBuPKQfaqt4ZYZg1emJER2JbtU6kxSTYEcbKkgem1Rmk2kRVk1MXhaLuyS4P2Hjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mBf5SxcgUm7BgKfZ2gy7x6nDdhaRUDhVPWU1VkjnaoLjK3jtzDwcTTeGfYihf5Kk8kMrR7BVGC1MnFUgAw3HKvT",
  "key1": "3zrpA6yoicjm5Uj8x6FH7xa9kZ7tVkhNtP2dYKMY1kYDVzaF7cuerFwo7qL4ZTzVXAGjk2d9ggHSWtY22kBB9Q7p",
  "key2": "4yN8mNBBsRQaUspkAeqvgnZT4AbqonR6PCi1YNUGwC3s9HNT4ovagkrxyDGNgWRPjemg831aavUyHBD58LgExHwU",
  "key3": "5WdN7heXfaaNjwHr4WExRJmM5rMnbM6CvGyNYCoevhaGaqUZFttwB95ddRcLJj1DHW5ja2y7bbwYzmo3VPMjRxKJ",
  "key4": "4vmqNN8Wei7Z6iqaoo4QsWF6HNyZUtZNmDA1pd4jG2hmUVRjRjqHDVLn21hFrTUF4183Lv9yp79phnzBJYUHh6P9",
  "key5": "C2uUcK2R7N4XHxECeZJ5s6kQ3KvsAyuQAQxFRPmohykWgqUqg3bfMxv8PbxE5BT89EaaK6qKCNCmF8V8RCBLniE",
  "key6": "41inwFGo3kMQFx8hdeWhhahEVvJ1jrX24N2YrynUqCB7iGkCvQBLVUNgyms9iTimMvebobqMXW9fRCkmc7VZv73u",
  "key7": "2sD3beaLi5jg4uLkhNnnMtrDojfHtCSEETuewv5DdNZK9gu8nJ2UjDDVGn7u4f9nBA6tuyEfgvz2rB2oRD4aSzD3",
  "key8": "SDKqadydsxLCYJhFZ7JfgZmzcmfDw4gRGGtFA71L3wousXeA6VV8mddKKRcgzY3UiPHVZSr9BQ749kQEQABCYtf",
  "key9": "2T8NU891PdB6mJEKZfhj8Tfq8sjMFKa8fjkwW5L8eTtnCKvGAxqfDW444aL3vhDCQDo1FpS8phvUUy8ZxnbGjLY7",
  "key10": "3gkLFseiA4xnRZmJpc9txbcmdThBdu6JK3y2W4gSzmXJ5PyDUY1DDYTMmUrGTDAL7YLdv1T7HdMZGjUBZZZXvE7S",
  "key11": "3SNojR9hWgdQ2tNKHT9iSoUqpj7R73ymyBLVaFVABCAmqpAK9yinBk2ZT8jSmY97k81X3yae2Fcn6eqrt4o1twrX",
  "key12": "Ynmqt1zGekBDyGeuWQoWfHwdZQSZS1hgyrGKA47JYn5bcL8eUSBUcWyUAx3wiZJyyAbzE7wrdjntgCFamEDZLVN",
  "key13": "Wsu3uzbDPByF78y7wWLuwwSrTYeLGLTYwo1FTNPYbbAYxXgpGo7xkK5UJG7ragAw5oSRKeaoj7fYNM3soxzd1Uq",
  "key14": "319gNyZFknadm3mKmDb61PEyRbk1VBKKwrJ4K9GyohbwhXxoATg1EjEuNvChuVwV3x7YrPPBaAnh1hr3U1qiwLJb",
  "key15": "4wegZB7r5gVYh6zUUiQjUNBe7QDhfKFDMQ67zf1kotrN5wgKq41eFupWo2RMrxsar6tFngAt3An2go9LzskMpQuA",
  "key16": "47uCAMHrz4jNZ16fRSvSYTsbFxCeTC4aYv9SbtrDBdZy9v9bn5U2F1iDEKBGx4EhZBigthqi1Gp3phT8Z16udoce",
  "key17": "eQdnPn6mWnHPTamzYyo8Vj4yYMvEp3bPBB881EKmwWQfihW3mo6eJrUWocMkbtvBo8tZ4DRkcBwjCsG3CCmWp47",
  "key18": "4bVEXCMjHZVk9p4ZaDM5gbbqyGUB4SC46h4H2n6pxfUr9yJVWuFBRdzfbqCXoext2zJcE5Ci5mPELp2TU446HHvP",
  "key19": "2bwe2dFDKZrqKCqLvWDstDm8mDyyQbGrXS5ffFLxzTPPz2FZhVSKtaLA7Rw6xnmbp4WQekjkFS2esdMbabYwNFoo",
  "key20": "2C92Qv44gATj8EcJZFWtshTDE7nwxJF8JHYa6sd4AjVpc4qnuLhz3K3CYPxutbwRpwLgpzzkVDNnqPLKjoNFkcZB",
  "key21": "2nH93FQV4C4AFW99vyCfGuipq1BkmyaKvpBaEd18j3ei5YposDtgDszNdZCYmMj2VFwgPEFSBttmP5eiuuFCY9hj",
  "key22": "4MXr3KP2SCPhPkE4rEbpxHYWzA6Wfja84PwRXNtssdkX2sTYdTWb9X72nGSd8nGsQ3FBjxXZxWVCDqipozP2GU8E",
  "key23": "2rmvLzkCh8s2yHdg11Zp6FKautdCvqkqhrAW45vuWgcCHtWJ1fGRP5cFCqj57m9jcCCATYaS6BYy5dPBhDLUwFRz",
  "key24": "3MfUab4E8dngxGdt2jvQcFqcReAJigbEVh7W3dDyxoXkjr1BwfRsyYuXvzqaWKSbH2QbVAgxyU2G892fMVzJ4xZg",
  "key25": "31xDzVsAnk3BWZEvCjBuhxDopU23nHNACy6YEd2QAKyKf4GbaWs5e7YjBXWWHtTBTmhBAZG8KhtidfeBqyzAfDmP",
  "key26": "2caJoSQYGGNNVEmQkB9BrFRk59TRzyp72rNecq9jbGXQANMQfxtp4K4S94eTGrfogWryNxCvHtUR5FEq5tZHDCqu",
  "key27": "4N54DxVHGbQHVZG4eHPjqUs4fyRG9GCQfbJqGEQSXnK8Zzmo8trxgAruWZ2eDKACtbrhPddyi4raMnUQECvHHuv9",
  "key28": "5Qa39NRMwFaV9rGZCdu5ANMqEm4kjnTm56ZMah9zemvHmtQfpKuKNSbyAfxXveKGw1jtzLgfzAbk8H7shzxDZMNt",
  "key29": "3BPzTxFcJSGqnLer4PCpioaLy2NPckhKyFgExxZCXWh2vuJcw8ZYf9zv3kqp5QXNRRkc9qYPxHKnaM3zscdKqq36",
  "key30": "4JKA7QNyzDF2saoXJr96PSfiPa5g9MkdXboTfFZS6mD6yV64WKjUrhdLeV9CRWXRUDAzJnoXbhpA6LNT2XrCKRmp",
  "key31": "66a8PXv5qSBqctHGQ3SJMuKuVudmM5GUsbeFVj6FTwviGKsfYuDxB84DQzBiNhy9ELaogrEe5oHwkKQgjPVJaTQN",
  "key32": "4ZGhEuFGnF45gRxPnXxLmj8116tFdV5vdWXAAHpo1R7zCG3jHfNAWgzwaLt4vX3c3vtuoqhgzBrnqzfNMDTgHCY8",
  "key33": "4MWNFdfWwuCnt1FQEFyMxiQY1bD6RFF4CNGYQUYBRwC95XD71rT3Bdahn2qjidoQTkkjuatbnuAUV9GWrfWsDSp3",
  "key34": "5tE2PWMqq8D2P9Ydez8Gp3Cz5sE2fgRJ4GFPdH2usWooBAnEoZe4x6gD2xTi6YmDtDSPXzkBpTi2dYTPxeSh34NA",
  "key35": "3gFj5zd3KHt9xjuouEopYSw3iQUiz1axUzdxbEM8ay7GTxLncBHYH1M5DDgYEH3Hd2gV2VpwSsvFEyJ6nJzh5Lc9",
  "key36": "5PNYH6pn7c4iAyNaayPTc47gCvuJiDLftxfSJQp6bVRMoZbgWUrq7tzX3hX5Dv4wBjuTEmLwwKRZKhvWs6e5FFGY",
  "key37": "5r49vUAmyxjWq5TRLF1aWt6PjJXVguVjxmJsP1RKkYSx4By8qFZtn9P9BhAQAm87ueCA1SgpU9UdrhNgLLSqEWiN",
  "key38": "4pzLEkanzvUgtC4NU2HUK3J6ECcSTvtdaasnP19pVk7wCrhcJepmoYT4Fd2hUWgBFo2y42YaL3WBkjRUgbqVD1r5",
  "key39": "5Z9fyNXNQNzj68155btfKCYafEiZ7JpyL1sgroLnNbnkFpryihkh5LT9i8sC3LzzFMrHAYJaYs17Ncd4oTvtxkTM",
  "key40": "3Sy7sowvXo3HNZLaMauHxiCcohoEJJYUxJXHww93Nv75dr9aECV6GVfSnLKbpbTCSkkeQqpr75adNUCu8hjDp9xW",
  "key41": "GZSTZCRqBJvgEroFerkqQuboP1E4LApKmWmnSvTpuQwKJ68RvfVqV4S3MHeL5fKUxo8p27PTFvqcFPEczsGTmV9",
  "key42": "2BVu5hLhb65ndfbgS9kVDTvqANbCBECjq6tKof97xqgzCroaQtxa8aje84KnKZUet37hPna3cbYvnikuamwBsY3y",
  "key43": "572s2RKdLG1Rn8knUavaUdSpfziDYPUgLJjrTq91bdKLDZw78BwtGy5SnEB491SDoMfDMa6RfHhpn258yL3LxGXk",
  "key44": "5ugdFETM7Qj6JKcMQQb9dgWcPYNcjBqD97JgwHAQFQGRtte4UfVKUPAahioYMtaZ7ZEf8Dpt2JW4BfUcYnxVSYQ2",
  "key45": "gKuQZkaBnBpt7ZhhYjX684K5fax8u4NaWCFb3Xs7bLgUaNFzz779VM2pVeozR79iuZ4JzsTyvek1haZBn8X3DC3",
  "key46": "4gWxiYnEF1aon2fdt7ba7WFzRXjw6N5qLWVrzttAn2DDFqgGKGbkYf2xBqpiS5N465wty7obTYvP1jj4mKBgD3UC",
  "key47": "2BdfdXbr5sajs9SEWUEuoREUiKZ3wr8c5XVy8j2sxihJajmvNBfNuqk5iAwtmnVdWe5Pu5YXgS8vaepDXpFRHe6R",
  "key48": "3xJKjeF7eqG13X8rmHiox141Qr9Ni2dALnHmQCUekoSxjLo8npbsgFXTXi6PckmXvJ3r14yS8bedyjLVUtrZnwbE"
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
