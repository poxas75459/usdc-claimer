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
    "4SsvfeQ5NYYxYfRvBk4nMCMZzLazhovEuUfBZ8wDPoBxJowBeCwF9PkPyo6NHcjphHENMukDukrii5LBex7zUwmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LBGSgRgkZg8mWwivZ3cmv9CSnctBnbFav5HYBQ2NLrHKvuBTTQJkpTeJkpALr1N2zfsQ1H2aUM2cFSYNmFfeedM",
  "key1": "4RtUT2tUxiZkWzkvW3tL7uhGut7FPtMJFoHbWDRjkozpjyUKP5Ng94JPyMZuL1EjqGyQdJeF3nmDSGLXr94PSCMD",
  "key2": "dv2wdrBGPdawyUc1CAuhXMMVxjC7c1LZMNJkiUXVRA6VyZJsrzPr7WqhzFDf5hpr1WDX8nUjTaYE6NgzUbEKzkM",
  "key3": "3gotcAwX21EqhWDSdrkRyycw2rnHftrJraiqmcKL1KZiHLRTd6BbMdXL73NcnCDXza7R8FtPyMVbnaD8n1QXuME4",
  "key4": "2DqkDQGkUy6aVXc8WCL6vYSEquZHKyWB8ditXb6wDbUM9cM9dLLqSTqsWMwBDZxnA3sPSSi9c1ZnPUd6P8L7NFGb",
  "key5": "2vG71pNq367wGzY8s3ixKoew9YCkDQoJymtingXP1Ys8kw7iyA3YvoNpamK6Rf8oMvEHJTsLYMyqC4E8a8GrwboL",
  "key6": "3RbB6SedudNkGVmuD6J4QsvCnh9fLp63KQJ5Qa5vaSFRnhU9TLr7Uq6DnQnFLzsJ1zDgZ8i5LWvNMT8do6AjeJg2",
  "key7": "NfwLGSqEnQd7WtELA8jyvywDsi3Ktv4RCvdjHznmD3z8Cf5V5B1V7n4FJKXcEtPGqVJ8h42jmfMMYkjjy1kFqhc",
  "key8": "4WrWCgQUAz8JS3G7KqPFiMNDJWvtZCcUGB4uCbpxaaDuqqHCQCJYxBc1NcFEVEKJGAAuXZWtcHcw5tsjUMhc6msM",
  "key9": "44ug3Q5Ju9aabzeh8dDWpmSNGLUTT2DkBUVsjFbhbXCnodCVuGUkoaK8NK8YtpBwkMfqWGN492CU48jKv6b7wC9z",
  "key10": "3NCD8tSJGKMuvZtnMCkDeNf7PhdfEyu773cobs2pPSG95TTvc4i6RcVBxBnsoNyRQfmkLtratUfMtttTLBLxhLdu",
  "key11": "2uNrwpPtDeNkrK667SQLzSFKe7tm4y68qhd3sS8H5MfPcNQdny5yU52cT6KXwDxuBCY6PRGiCAiVPBAe33omnEi9",
  "key12": "gukkh3UJHcD15VMWDPxHZ7vriXLRKQM6o8FwNzVU4DrWi1c3tvUMGPSbdmFzCNaNV7bUCRCZMZ3Ac4dcpw3e18U",
  "key13": "4AMoVeDKM87N6QWY9NsNQkMFCsWkHKUgi1DAAMVd4fm6oEvXyBx4YRGnnvc6D6ssbEjHNavRkc2BgmpiJao3KB4d",
  "key14": "4hVEmPUCAkCM58kWLKoGAucAfNuyPZaaL1mqfCZbY17cajWeUhHyKCHb7zZgGQBUyAtFng57FnwWkRa9wXnWYPUz",
  "key15": "2idovFpaoKxsNZDeiJyBHxe1ZU4LLFTAFnZTSy2aX1bJGUccySDzYSweztR7y8BTfDfSACxrtqnea1cf65dywR7D",
  "key16": "4381pNcYZe6etM8nqviTz77TpeT2ijJzoSt1Eye3CGiLYCSByTXYSvCQZE2JBaySq6YBLvFyAgYYvqVS73KaQvcL",
  "key17": "2vvkYxoJ5wWphEUN8uwHvLvj7E5ZyyjeCJMtJ7HBt4vHUad7yjW3ym31RJj6BrMqnbEARXW4UEo3oTUztCBMhoTU",
  "key18": "2w8vnFv9T1ykemHNkb4ANFcP52bDuX8VwiJqZGYzbKJv7zEKAEQ8AK1uJ4AgfJRRYNvJcY5qYkMVvcZVwY7SPebs",
  "key19": "2tJF8gDpcQ55YqKDhceu443kSkygJKGqjQs8zUaEEAPwsL8oskAVkhNw8PwyqNmk2p7oekwtasqA3mygPo9ACRi7",
  "key20": "2JnQ13AxXcoxZ19ZxZEiDygR158pv1TrD69iuu9BgiJvVgWrWqW8Cw5ynSdWvpmYGCtAzSV3TnnVnyTR3Gb4TCyd",
  "key21": "34CRxtn7CapG1D8GaMSTikcRN7JgASGP2Wf6GkGjvtnFyLmquRacrgemwHmiCVekc1guh8uuKNkdZ19UNQC66QjF",
  "key22": "3hev6dTL73ZFZrQ5tkeDyZhnmGYTg8warLzhq8Jg5xja9aZYhLyQ917idLALZT6FMeyrGe3aidCfTZr2j4woZJLG",
  "key23": "5GQH8EE4V6THGn1HKyhvyqCGjZBKb3uW5GRU9A9MjPSiSJbj8uQaFEvGY7KJgJJdWiBJ7mgHgYZMB15jVGTY1AGw",
  "key24": "cRppbV9WkwZ25LRkH8k2rMoESCtnXQdALD6jbsextFw2SfLYvQsbecjbAN1Z3Bht7xZ24im7PC3XBAZyA1BcvJf",
  "key25": "3ZDanZpEymPHvpwMGDX9tQMV4m35A3DtXVLJcq5odx2QCnJrbUkcmapiaAAfRTeHuxg51QBVjVHhuMe6JUjdMAJB",
  "key26": "RgePiAhKzVo9YsXRaY1KrHPH7VbFUHqiXBxkQjvjEfGWqhWoUBxP5wUY21S5LuebZDBpJCrtZuLhPNGiSZNxCaz",
  "key27": "4rzfaUoQYCPqQLTAUkoVft1qmkaTRC7RnBCk1qSiTxhPzp94Nyo64Ux9sbyvTbLPAKKw1eMg4mfRYaoyGLctbNvN",
  "key28": "QWMybpeduHRwEDhFowtQ5RpRueFjiHxZirAJQp5pYoCBV3i1hrzW628ZrBQFkGWEApvaeAudWaKGnb2przBetso",
  "key29": "XSCpsGgfhpz8xGKTxS4wnNG1awEn3L8uvgXWs8kpJTRLYzCZGiQuMFX2jQuD36Zig5yqA1Tdu7p2NsFj9jK93A2",
  "key30": "25JbNuGqAbjuHbbFA5SToVva7TZgUuhx1NsFY224nEoa95kTAtHuZGFBTsmgzmu1YhLanVDGzwgJGeQ6iGWqyVVT",
  "key31": "5toWvPrtBMNofkqrw5Dn3fZ6tE7bjGcrMDoZXHZrG5Y4DgWFxrVPuLMfQsM46bk2JDzcLBSUAA9yPfyo7UDnRfqM",
  "key32": "2sqxGtkwGdttZrnkoWNNdCeZvCVsEbBMrjkbMkvnTaNQ6WYFbr4fPSLfgJF6D9vkcWvoDtZ7xcVJHkGL2wnLEJ18",
  "key33": "3ovHGPgaBvSbdsuERX5PjivFSsTLRwf8RjCW8gsXVTentrmBWwcR8kUhoFJWWcdVG1bFidHtT6Lwonbs7JjRzEMT",
  "key34": "3DrNjmvAVak8CWfwxj2XGnQVMxDe9XAVYUW7x8W5yL9CWV1x2bBFh24ASbcU9PWuTBMr9hXNiQ4JNLhh9XpKL4xH",
  "key35": "4HkaHcZgEr82HVxqNqpFXLE4LALvvbnaKGzR7QVWexPZ5mPPboMVYp3YebDTm36sheW3yemS8LA41opjWa5eF4Db",
  "key36": "3rfgxArN7FLmC8oNsLk4UPDLPXQvUsh53kjdK6Yxf9zJPL6t9eG4BwYphzioG54c19hWviTWCdWmrcCtu77E6RmM",
  "key37": "4wfyJ53k7pmxuDvWgKeB4nuimaEu8seUhnNzUDNeFpkkQXFMe9vQxnUp1jJPD4zoyu8P2tF7QY66RFS9fKoBoSL7",
  "key38": "4Tmd4CDkju45kSKhxunmFWJDrpa1WdVzURZCAGqVh2zwLZFpQ8So2fDhFt2C5uwcJ7fkdmia2RDnTiMqzK79ggw",
  "key39": "53whMUP64Ms4nTqvVv7saVV6TXojfThXWgeEAJov5VKKv2ho8dKzw5RWfHzmXigkhWgCYCxXG36phiKg8kA1MLRv",
  "key40": "k8pp6SWDJhiAMxNQQLJsm17hH2Dwf7VSfCnZmqqGkaTefraK5fmWhX8o9S4xbhBqAGftLSF3ERtZowW1oPYpGqq",
  "key41": "4P6uhujFr9BuNGhwqugmPipfiR1GHoDnzqfgp4PMVENcakYkTEWgy7TMbi3TAnaUnDVH6sPfDPyqStFR5YctCfA4",
  "key42": "5mWZVaivDfdRYvCnJ5WPmsjydj2YLB2eE43F7KuGLpSRNYKB8hqzDm8bAwdndL7MDFZZ8d8JnJ9kBqBCk99tttUh",
  "key43": "4yBg5PsDhLW5LLGsbWMskhwxxX3EyoohTrsoaotHZ2hgdB4Wygz63PXhNnrPX1wCYCgQtyesJc42ebyJzYWbujNS",
  "key44": "52EeWST6p6z95Hn8NiGPpYv7GJ2Pabi14amTHDVBHEBkbiBzNKcYjXhcMDNearWdRRNAXgHrr4BRvHSEoCbj6TC7",
  "key45": "4ox8Xe1ocGGk8mAa7MFYNDiAwfcdn7T5HdB6x1YigC8jwJBirUgCRwPUyr2K1sPmWVzBMcHvdnf4CTWuvZzqg1tr",
  "key46": "48zsvbzTEtt6uWmsm4FdQqs5MMCDEMsvNody5wXtQX5oux5tUzAhSNgaW2WwscG5UZntPKXNfHh7zzzfhtirVgrT",
  "key47": "5rGGFsghovMVYDBXyf14WZ8wZnMthPv5DKWyPLmcPSeDWMEseyvZpVGU2DnyEgi768FUZJRvZRqWNQRe7g8cNkEU",
  "key48": "4szR9A2e73hqNY5H1ePsbH4RqGn9ev7Ud89UAhQNoKWKoJngKFUfMNcW5kY4rKqtyw2kC1wxZ3z3fETpsW4g1YHN",
  "key49": "sV8K3V4wdBJRqHDTk4Zi2ZeA7dzawKUyEuYkeY3igR27dLVEDQh3JQSNwstfcFFvRXgyTGFaAgShKGJGcRV1Vv2"
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
