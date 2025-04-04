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
    "66ggCZ1kcpUtG8idi3BezKuvzyYe1WtbBKYaEM2b5GgEiKFAiFBqGbQkxn6bG2NgRzdgprKjJZHVAHDmEXFcAkXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BZkNDtVdu2oD4W4PpXejkgAZj8uXxPeNtLywzUsC4YXReeWupZkb15jtrUcss2h1xQT11JUFCmqvy2p6spdn2Uo",
  "key1": "uwLa9v54z9d99mccvA5YJ3FB5qSDuz6oVp7AzXzkiYgaKFm4BNyf2vk979zEdjYw8QreKBwn8NreAQDSQPU69u2",
  "key2": "5LR7MWMqkw2fqgcdn8FALzZ7YiH6c3GYd6KSKZxxCp5i6aWKxGGLFh971ySYkkf7rR8e1qo3CSp5XBPpTSr72WDP",
  "key3": "59oe6jwMP9sMgmza4axfGC3ToUqD3BmtdHKxu1HBraQAd3eW9iJL44VANc9Wb7ng2gk3nAfJmST7sEv9gdvTahqE",
  "key4": "3tksspAUJxf85ynfMH8KT4Th58tE7RRy3p5vWzhRXUc4FbYDux4jHV3c6sfghC7bguhuMxrUBt83NYS6VMxgmjC",
  "key5": "4xquqTPUWVoQLM7kjoDRDTdokc2ExCH6uXo3yB2pQcEESXfRGKhiK1Hf8sfRHazASuKPPYq7zPURN438KgZjvWc5",
  "key6": "5fdjNETjcSJjbrLbMRctdYjMMPBomQzX4EnQqk7q4AuS9KJ6yR5aWziQioGx5vgKC4a6igZaPkPtUwRfWMwFHLg4",
  "key7": "2dintJ8ApFrQzkKK5CMBni8hhJoMTK6b54Ut7XkwUwdvEz8TVk9jbeAMDPs3SyBr47b4X3fqBTBZmXmSUHac2VC3",
  "key8": "4HJ3B2rdcB3NiZtuNp7qbdEoCugMyLYEmMQkWcmq5uuXGzLEUujTwage89UMDGoBCPtohoqEb3RwyJ2HfrVqcvkL",
  "key9": "3pYN7tKRE1i64xyvkh9cMskrifE5r3YUkygJQsib7jydSZHvZdnmVXfQrwy2piM9iaQFE88EfDG87HLA3cBYA6EW",
  "key10": "5jUwLNPenbZNQfAzVX4ue1fqJk3pZ1qcCTaAN7k4ZUzPys8YR7a6gM4kesZng1aVRCZw9up8Yb3p7gLZ7rvEDjKr",
  "key11": "4HHCQMuXS9SSqCJX7K6xuH4WaLvxKRyKgE8M1o6XPYeVBdMw8zC2AfxC4HyjfQfHFvTd9cmBPpkyapTtYifjweBN",
  "key12": "3G8pR6w3pL8BWiDKbdyiSoGuxWfY89yppbKWEchfFGNX4sxoAtSJPnKvqvvdco4DkKVRdg3bknEkCCDsKpbStsdh",
  "key13": "5Uaqmer2vCiU8Z1aB4xgZzA7511a2vkb6ZpsVPBAVqUaZKgZcJEVg59xLmF9SKUUDRmzaNjtEkVFvNNxAezJZEeJ",
  "key14": "mSRBcDBEN8mw8dgjXS5G2hBNczMnMsY7K6wtT22BavMaruYsvJDe8bs3WG7ucn8DhzDHpG3cuhRwv33XPP4LZnx",
  "key15": "N17ou3nU34mX5pywXKwxRzsLmD7vGynhQnq6qDEU8NeaT8zb4DfmZK87McxE36UpsGTZ6xMvkMH8yhUNtwVVi9f",
  "key16": "4r7trXCnjKFa6AaN589TAU27tzqaHSriU5L8Yemm6ao8F1wr3T6fnVJGZh6o2uWtw9Tnk4Xx9twgL4Qzh2T6MBKn",
  "key17": "44mYcd5q9Hd4tw1xbmgwYPvimaoZe4yqkDacnK2JeiBG1eoFkkcPag2GyVtodnP4FguEphKXeNFvtD8hWUmCb7js",
  "key18": "5y8YK6YpQRjEAqWDYkLytMxBjjhSfTxY6vtbqyL62LxkXRDVoYiizpPVqbMxambLZVvnrG2WHKyw3MYjQH5qfpic",
  "key19": "4rH1imV78X8tB8NU83N5MpbJNHABtrgdtCJ8SpsUzrgEpdwPsESqqzu7ArJ2ETQhB92CJDnjiFSd2RcZPbTnc2aL",
  "key20": "33fhMHioH8wi3fdxrnbXV2eVhGD2LF7tcJT2WaWXoNJPL3xvfvYWYUg4n6V4HyiLSvJnfAy7XydFk67xLKkmz6LE",
  "key21": "4zNZA3SVvKbUVRtd5bvYHa482V6NKvNoSzHNt3NCin5BEXrrQEmmU1YTrvJ61qcVYV7KWfkURB2AjvSLSSLiPgtj",
  "key22": "58iSH7FdEfuWiJPU7bcYP5SC7qAgJdCNTfsriXHd72TAQLpR2jVaE8o2iJNgPjckJYnbVCaLcy7XvzUDkhffp51S",
  "key23": "2tqRwMKdkcUCagfDxXLKgd3W15CvYhbLCnPkeaNKKbUbfFyKqMXRtQYdZacWyzVGMPxJ1GNhVS1uY71np2GxXwof",
  "key24": "3NV4WRfTN47tJcCshJZvpLk4K71HxSDDUoScGMabZ2YsDXjMgtVGbi5unBhsRXEMkkzdnVoBRkAESdgV7bUngd43",
  "key25": "jd2gLRaWrYBo8GdNH1KP7m7WSyDgq6shGPkKgMQT6M3aKaSXyf6g1en1zB5XmPQ9BXKsKXWsaKoZwrLzXfpwBC1",
  "key26": "2sivJZn2TNLoedmJZyUSukTUn6SYJTz8Qj8QBFyJRCM2bRnvRkQK8eB2xvwL4ijDcNJZ8YyXGWLqh7vzjYZggNY7",
  "key27": "pf1E1PGEUNgLPZ7q5ggU1MfMcN4uRWqPbv7n9DpEKUHvTheDev8HaNu4ehRQb6jWNWvpC1Bgesk1XfnFDMZKcRy",
  "key28": "4EnkmxnpuYJSMhfUGSeEmaupFH6A2bWhpuxCBvsahD4hEaWLtJG8X6iK9896wK4dieCV8VuWFWfpc3bg9Grn81Hp",
  "key29": "2jcCwxhr3KGSnVpx6r8wppecvsErcgzxfh5ZxTtD1GnPyLPnUhFF1iyQVVwbnN39fCuZ4Bh8K6v2WavKRa4F1Uzj",
  "key30": "3zhC3pyb6sbvHoBB6ZwLkPb5Jns2UKyPx3Cr3UdoLAd59eqiH57oauzfczh1dN1PeWEof4N3wqPx5oeQrBadRZVS",
  "key31": "U8LJ1a5xfFhDd89dcQGU1Bf7Z2eujex6pqgL82AMtcttnmmN7smy4L7fZuBRtXVpsrv8uFXQ3MGxq1KQTBadLzW",
  "key32": "36pyBbwsaMM1CwYeqo5qNN8HJoVwZ8wevEUiCjSfR6k6a3Yvove7V4VbMHuyg3Pv9xdFLVYH6kqn43xMsReTJkmb",
  "key33": "EBk547NJJ68NxoqoX3N9BZdmcHKCauUtZi7qZdgmBUsjxmUwZ38HHNwMGhpKxeYqHXNjdK6NVTXetZRkmjxFrBb",
  "key34": "5J62y2nvcfewxzLUi2o5gdbzMWWN2sghd2bhxYkYcC2HeshF2NubxJgjNKUyaurDUb4t584sV1w4CUcLeZX2gHSH",
  "key35": "2pnuX95Scg1isDgeZ5VAVZ6FCVhft9Nf9bHecWXXL9cD64bbSEjx5uQarh27GUiwuBpGM8CFjtmhcg5uVD3ZPiEE"
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
