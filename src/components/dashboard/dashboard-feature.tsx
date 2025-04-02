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
    "9Kh1WgwPJoU9tgbYz8hxcjqaGLkPLasrS2L9qUTAHbbbrfuo3hyWG64ah6VJNDhyJ73Hb1u7iECSmrytHWC3TeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46PdCjtoYmdyh9jTH6Ph8aj9NWv5CuAM5wGSB2Q8f8uvJT6m9MdhfPynMLeZvfCNpPrhL5mWgsZJskRfexHZfXx1",
  "key1": "43tRBApjPEVuiXERoKLPhdPj4ibCJWUiRnAk69PwA6D3Wjtw6m4bPmYosJTZsjrpULFiJBTjgoiHHZ2P2G3LdSjE",
  "key2": "XQZJG7ZFF4u3Y26WnwkrfrWJqZjRonPRiHEuo3Q2Ga4ej2XjVHki7uaZL3e8v4327VDfzshuswcbZt6AtsLVK6N",
  "key3": "2fk9GoSJYEhxSJ5xbQMvEpa1hRDFKdHjPY4gSCceDUSeHCvYN18nmLGmWvoUzq62SxXUXU3r6xg6yDuVk1zgR2CA",
  "key4": "4y18Q4HWHRVhjkF1dpjM6Hohjw2EkNrmmqorHw2U2qqtwCpbURpossNVcBHdjWwkcAbDXhBXAHAfNjyPL6n9SJ6C",
  "key5": "EiWf1v6QsdzizjMkwEvVFAiZhb3KWg8tGZFicwRsAnngscfVcPi15J2WJbdmvmBSzCjw4ysn7C8EJAhpdN1NVBs",
  "key6": "exVZLaYogCsXbDTWf8FFL935CLeb4uyGEnKQqESsVkgAn2GJxAijfhBRcUYqHAkqygADZiFWgHdAVWL6aowwzLe",
  "key7": "5Uw8HuLWywFafeychHV5SgBTpEPqGAZv3dLwaPE3RZqjYoZdnPihAT5j281nDBDvqsnBYVjX34SQpKR9UZaxCPtM",
  "key8": "3jKEeUL2RseQ8fKjCXi7GEpcx2ccDBFQzxEnAwDTYEuco71sgZaFvVXxcWpqzBb4qKfxv269b23hBCY2F7evVgJk",
  "key9": "5vkc5T4z5yTDFrhS9wjmXe1HYfxvvmUGKc8CBvnG9kfHyVvrGPK4PQugcJ9UCPw1nKp4RMCfDPHQsBp8b7w5kJwS",
  "key10": "5twrBVhsMLxNPVc76MHJkRuXjhCFnfhcPuyerCY2ioaZ4aX6gL1en5VC2w2WoA5YFsxyK2qo4UypK17ByGs8GYDH",
  "key11": "f5casapQiMrk74FirnEzGT7eSrGDWr2LoEknNDCGkdBACJpZFpWmk4CtkUvj7TQsk8r9f2UHyNJ1ePUzc8ahspW",
  "key12": "uYqx1gn6U8ivsHPAe3nFzqXr7N2fUfFe6wdnz5FEUrsVuxfUKYZN1Tuwvd342wP9eF7vKAeTURAWvULhbK1cgvc",
  "key13": "538gvXXtGkutSk5ahjGujrL2MYcJHG5PbLbEtP16Dp9KuJuL4Jq1eDabBtHZkcYu67yrymL8veLarnjrBVbdmR37",
  "key14": "Xnq9wbrPeDM6tmKin5F1cwkrzDecssnjtDBwUixwUPRQFL5wd3C4NazT8yheqFEJvJmjPAa4LgHrXywEJor4Ume",
  "key15": "3JRmUJx9LuPGmsxZtr5ANP5nNH7736RnCmBR4E8XvQUkaEh4UtwPajvAtYCFY94vT5Diom37SxBXbYeyy11yAGgR",
  "key16": "5pwjFKkSBU7NUymYxKRcSNdHppf9KrQtZ724MYHRcFsXTzNkozY1VGkfVSSbpgoCdFEZog3EpfEhp2hwwRxtTSzY",
  "key17": "4bfxmTheutKC95vNZKZmHQi8tabRMsf2GLwcn3KWCRh7y26qipcyhqvvE4sxsmLqEqemXt2pMhu1JR6enS4Zo4G3",
  "key18": "3n1W7dvUscLV4p6aynCK5Y4aeZC6kdNLQEt826r9STXzpoCmy3sU5nUkkDFczbHhpXc6uojZcxLvRGJn9TBoxQZN",
  "key19": "5kiFnMBFGXFgZQDLUymeKL7s55bxXn7uvMbS58RdjcC1KcZsAPE9ACntdQBmK7HnK9qa5sNyv3N1ECnEs7RydF95",
  "key20": "2ZJKRfznYiruTB5qQfzkD2pCPTm6x15KmKNxBmnmZwuQzaJGBS8fbA9ub8P8JNxWcqA6kJf82cWuf7nF379c7grc",
  "key21": "xaQcoHo9DoknjEUPTd7HZhP77NJcAYWDU36XMumFMv5YsRUu2RahWra9tKHcbVWX4XLGxSvEtwiNiXMDypWT7ZT",
  "key22": "5CrBudthzWjUeYstX9rkEvxv7wikJMayqRU27J3CCu4ymM1jQ2VpLYxm5MooifidCfJM89YeWrpfA6xffVxMwRbK",
  "key23": "4nAMyNW2AJj9QsFpV3JKtDQg2CwM5oeWC1b6f5zJczQgjyTPUaVnQdApqCsfRw1AnVk9NRGCMmd6UzrdwPb8sDBv",
  "key24": "RtKFRVGXDtoUN8xDi6hj8h6reN4CRA5YZrUhMnjgCyDmLJteyx2aeZNTJpdRT4TCk4d5HEKeM1s7nSMTetUQPCE",
  "key25": "4noYzCCeqbQ6rfGzEQEAXLUMnUUVw91WQiA87pAPh9Er9acn3JA2T3KcBGAVarXKYHW3b3Db4xmA7g9q74YYWAZ1",
  "key26": "5CZGbZL9Gf8qNhMv95DnoMjhCfuU1oaTDcnus8La1mwBQZQeQtx6QjgG6LaLo9PkoQogEw8kZfwsYgAwi8mAzeQ8",
  "key27": "3UNogpEpJrTEjVMBocV7L3dgwQTcTD5fRmFCAGgiWL7Ea5XgnPp3yZFLhRQTwAdE7AVZfaBrui4qZaqg4cjhyVpx",
  "key28": "344wq5aYDCLcgKZ3wujsXoKXxShusQvHRUVvEX5Pjxk2SCQoFiuWMDuc792BqLFRk4EzD1tWZJs2vEZsUpxY1Krt",
  "key29": "4Cg5CnfJGoWXjEhY2VyarQCZyGtLGb58QRvEr4w39fzASyebMmddkqtqvtir2iE3wBoDQhT8BhpPD1LWkpPCRawr",
  "key30": "5Jykmd1QiDP4aNYFFL8M3LPzb29pENcmtdCrVYGLtsSbEHZTNugavrDaeCgEvXkuT2R79UjhV3oGrBDKv5YogS3v",
  "key31": "4FiAcHoLjD9MmkeeKcjFZeLwXKfoBtwhA1NgU7tE26XCtZfJVbZFnUSp3nFLBv3nkzuLzob8RUZr3rUP6TRaTHBp",
  "key32": "4VdZTrDQxJWnNo3wcNiXikcsH8f618goVgTdKRBgz8mHzDBnPWAT7abW9nwaXCgaR5zmKeHZRRJLfMZ9vuWmaSeB",
  "key33": "49k8aTs17dYKoyugDHhqjn419Nd5JiLx7foEHuCcrUYHZ5SiQQtU1rXVAgrHKLW9YqpJfPNhVp52aoBFpQyKXAcL",
  "key34": "2NKheZuxo2pVGNWLmii5PrX56cs3Q88fxvq4c3nTU2CDScjTyk56Bzuij7SXGWeVqSrfMxyT5HgVMVEmDkbVmVKZ",
  "key35": "4ocT3CAWgRGDD8177pxsA9dhcw2Fd7P3849EvAHZteHydyXoHV9dyMvNGoQhEcVJvrNspmZGdHwCnhjSCs8oRULc",
  "key36": "4iksX2uZ94p48kiZRjat3KL8BsdBAgo732pvc9tRov3dkwMQxUGnkpYGg3bCie4VAD7VBCD3vhw5uxK1zPqQRXUP",
  "key37": "py94XcCffndTWTY1BHQJxCMB3k5x29pxL7U7YJKxgsJYWftPc3mkXjD9m1EswYj39FuQzyq3uQUwyANJbuBLsjn",
  "key38": "27RyTD2v26dnZ9RivAAkqPxxxHtwmmmFn5h6XTGLPmRanXNdZE66U4Br4vrMBSfUyv66bLdGBzSfgSJxt73uBzYb",
  "key39": "59uMmAUbMhHuhxkZLLN4hCFT6zaHyLTdshaypg4oE4NsSq6wYkPJAGfn2qRrQLNGwcuo2dXUTCo2hmhgcMArutXc",
  "key40": "3dpzLQtJCLmwhpbTFuPRS73gj4Ud6fZZ95TZuWY3PhqGFEgGTMEqY2DpNGmL9NgzSWDK88VLm2dqjhg9xpiDWMjp",
  "key41": "3RPcecXB6ViBf6XfSGrjxQS9zmBhv4kWZzfxgfDNWoZ45AvipHuLmipsjsbc3mtF1asE2dpuafK3a87FHC8RsHRt",
  "key42": "4FknGud8Rt3JALNa55oM977vm9MZksjhQRwNxeEKYbG4h1kNM6f1EgsYHcV2yXNHFLH74eQzVdnKjak4t3qMssfs",
  "key43": "3g5BHXhUDGuk7CxXkVy7DJFZRFtyCYxXhKg4x3UDi7CrjzbGto6usHkBTvgr8Yn8mCTsm76WYgyzvjVuxAWetRJg",
  "key44": "47c7oHikgcMJcuaTQyHh5WEz6VkwA9fgrbxVYYrWeTSvqbF2nafyqneSHX9kAZp8owBd3nWaRYSTiV5p3avjuGb",
  "key45": "58F116R61DqgYWcvGv73sVNqikUg4bme4omWHPA4bXyCBNMw4nFoiHQkr798mxdAe2FEVFvb3iJubppsxQyGcYSd",
  "key46": "37o19PFdeVUg73uXjA5tdVhAmx9wLD7SFMN2o5T5nU61gWm4rAxriwwkM9be3bs3uxV9HQE9dkZHuB36ScBpRgLW",
  "key47": "52dnatqv49Gg3cMNNP9aHZK9k8bAMT5oj1Yt39dWNrs9u29L95c8gNztJhjvk3TskJFg5W8JWVcPk6N2EqUDrjej"
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
