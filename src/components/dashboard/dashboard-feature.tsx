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
    "66Hwgtt7VAJnLyTPtLwewzJsp5r2xPBF6EiG1Q1f5hLX22Y5F1R7sxp2QLDPq7DUXzyJ67xdpssyB7uFpxPKEeQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z83DmxXiegEp4PjUuP5b7nt7dMHsPe9dHasEedow2zUdEpKE5nuaT4WP4kbaKfTXoFQw2T1dM8shEdqfKecjfsV",
  "key1": "S2FKLXBBNufHmHqf8EiBH3UhApkzzCvePAPjyEs5ENXVBF6dB4XTBW8ZCAr6HDRqLRRErHVxrJDhDR5TfQbcafR",
  "key2": "3zPCVY6tgUWkQhyhnEL6caUwBC7AwZSB744oq222FcaphKDaX4ZtzgBNtNbZ9gt1oEqicpKV3cUhgS29fG5ip7Zp",
  "key3": "KrdpHPpojXMQdcWLFaBGjqEwBnpXPMMJyBMvh577UDUqvi61aKa2zvMAXXxHRPuKPPxQmzZnx7WZR3z4MZXxYnW",
  "key4": "3hMXzVAuLecqSjBVsp9VoF1usoAcgyvULn4RLnt2NhywKwTRK6L3xSWnQnbsCPfGjtcWumX3yjE5w7zPE7i42bgW",
  "key5": "5HhZbfpDoezozEXpga5vPFKA62qHPFxSRLrWrWKn9gy2hzKFrKTsfnTEVVkGLmQufBTCQ1xeaoRr6nMqe1xkkvFg",
  "key6": "2RogQqPRmMtDvK4bBKSznCN6hQU668bsAbs7zPyUKbnbTn1kfJpHvpnkb6kg2kMarSZfWRbiC93VSHXWAzzNVKcR",
  "key7": "5UMmpuyJTYjBCdYdzbGC6WX6DgzCgncEjuDNsLKvErSjGCT86MDS4mTcj6qs5fDaWWVdPaLNzVs4mLCwP7ub339Y",
  "key8": "2nToKNt8CtXb4HEZbTD8dc2u32YXVBz3bXJEL2iFA33QsLkegC8LsvCxJEXnnPrpbBdeNQxqGkjB2Zxsf6aDeKYR",
  "key9": "2Aufi9sGhdhUEvFbHAXjW9ZVM8G2qeWpZ4AbuV4QYqoviRFTN3wwYF9cwGYJ9dygPvQRKsDXtEWSVPVhL2QVa1D1",
  "key10": "z2Yw19N9zLpbTYUTdfEA3m3f85y8i8qT2xSARFapYw8YDaA8bwanRLr4JSFqiQE2cPmGVRpy3v6qC9bjMmwUV2k",
  "key11": "2AhB3UBWYDYjMy8dzg2TL8MQsKPRd6AXHPz1LsP3FvpxWdc3Jx6P5BcoZmnEjHz2ViYs4iQLLayTs9oFSG1XWv2b",
  "key12": "2z5bn9uZERkPYTpZnmtvDRp4FPWAxnQrxVXg6Qpvd3hkKhD7HcEFbx9fU4UiKWepjesWiSTdoX8LkStVmF5mPYLo",
  "key13": "4QvtSmjQRFpc7eutdvZT9RDkYAfk2FyGmrKsLhDtNiw9QZbNXzP2HRGVn1ZVoJDwnqDyNg7VTuvQoHE7x2UjLRF1",
  "key14": "4iyWEtoJynRbUqe55sjvQc94b4sdrz1AUSxQAy5MGKRKAxFZ8LG3P6Xu3m34kLTeL7Jr7YtmCdFdt8aWJKNuYhso",
  "key15": "35YSVEpbym269ri4Sn4FgLbwahZMBmt5hMD3UEQhSMA1UTGkod4be2rBxBs4BmtU8DW4WUSwgJnBNVRC6R7nsURx",
  "key16": "2SJDKzbLGS1YUAvEEfXoggUd9MUdYEPPwoRk9xs21TDnHzvHKXJVNY1QVWNtWBSAsNVCDV6fv1jwuEpFQ14TCPnp",
  "key17": "dsFtqVjFqQRfHEFw9sk1PtEebhLv2qvin3sreDibf4FSeapvgZkVD1eYWvcjXofCWjswndD2x4tPJspRcRPx3xU",
  "key18": "5UcgtyynCnrfzxwjdQgbUV3gGtQZWLcGUqCXbcr5ZdsS7EUffnbfsSz2q5jLSLE11sBKt2vmVaH6Cig91c3mCJEq",
  "key19": "3XEaJVQ3hLxzVybALkZroTS5zd58SKQi4hVfMsayo2QKhikx6zbQWoXvdA16W2hjUCYGEzdptWkQcQ3ZPNHTDnpq",
  "key20": "4QHdNAtpkvyz63q8AJzZYdAancGTJ1Yex1bv48XYUYTm7zUi3hhfrzhHb7goMBXiarFvnJngcbNvX9Wms7GpjMHZ",
  "key21": "4q1W7hQstPrD5uXjFswa4W6BKHh6AEsqD1FPEbTj2rYjBoFeqKFir6Jxuat5La4XxVxGTGJXF3AAPyV3ZjDd62LQ",
  "key22": "2pxcD4fGjMP762mkrHt1nk8BbZCU4woPdVcSARDS6nX9o72JzzJiNi97pRCbmd2DayAP6nzb4T9fQ4dUC6WJ7XC5",
  "key23": "5togaqDT5wLaWdfMhTqhavUWR7d2pZcgqNjKgJvJ4j47qERCXEuCbmJtQp134jRyMLyLqLX5xPS8HbdaFuryJdkh",
  "key24": "54GQqiEcxoJrDjavr1dFP4vDYRXihWPsnobJhsi6Lpf71CbiJNzQkj5Dw357FEjdbdjbfdn3WYN7Nv1MmxUL3P2x",
  "key25": "4x2Hhv9JsJusL154rRS3ooYmuvHirKzM6uesDHRXoT6fEmpTmSpXCKZyYx4Pue1naTcvPPpFsDXzLczkLRPbJUnR",
  "key26": "5MWpN7H3a5uWssN5ygfZTfn6T541TfrXaUCGkimiytRj9f7xusA2Q4jNXndJUQuScuAyX7uBqHyf4gCBcTMs29oq",
  "key27": "42mN2TBcaaTCMQVrUh7FhJTLLXfLUTdtnp3kUbEDmyTPNpwKRH5HycVFfYmJshLT5P5KfJmXY6jJqKrwFGzMuG5u",
  "key28": "4Te4DRfq8TuQZBhvVGxf5D4U3anycrPVBNdHYLaso7hQxnxkMzn1jR62QSnZDBCF5vkLqUwpgmrAiajuHieGrRrq",
  "key29": "4WPwr6XDjYA1LA2J3WT33vsMLYxLgC1XCcj9bGaGKNsnm8ux8ezTyNkmPHFfHconTLy779PqjtHmiPnQ6QHDcsY1",
  "key30": "2etUAd8RhCWzvnWEvwb8odtdttvTKcMn5zU1PWvfpQQ8Z4rS2g7g7BYTY9zCSzdtgUHvKmTiNrfoZ9kibKERL66c",
  "key31": "u9fUJYBsBzYHmWRyeQAy7oys7Pm9u4zcGGgeeJiaypPEu3PhrQt9ShkWJxdXtxhojHBbkoXi1wGRjAnbZLKNWaM",
  "key32": "4TFSMRZYyhzcFvdkpyhoNbJGGX6FpxXMr6VijwdAHnGQh5Vd7dd1Suj5kWGQEMAChuDFQYtFw7fPdJQgQ7REBMAX",
  "key33": "2SeGQ6Ln22uPCZryyrTx5zzQBSkHiEqrPWnvRC7iyMjdiBeAv8P2AevEKuyNhRCke2BbQRDKN3e4emtEt2djVXS5",
  "key34": "SmwBgke7CGbwKV6iBZWpvQiHpgKyG5bJEJjuP47SVQYGxfKAwGpAjgHJm24STZNXnqbH8C4i9yCfRemmBAjBE1V",
  "key35": "4FCt34FXR2L1kx3KnZ6bd2XUhy9saxCw58boenVAcQ3UvnFp8DV2sugxaC7a2XXHd3idBgaEYwudC3NBTRX4Cjv",
  "key36": "41ZUEPGCAGN1NWjShpbUP9jFsv4tDyHDPhDpJAkEuwAu92yayfs59wLgbRVTYqk8c2D4wcxr6Bi59WvHAR7Y8X6s",
  "key37": "5YR2o17i4fNCB7nhzMaeB3aXFoxsUdFeDyPhKQspFRfUCjiTMbMRdLnMupFYJ291FhLKbvuVLE9ZynwRMM1oNzXx",
  "key38": "3JFcwUfDhK8pjTnSR7VY94nAbCqZSzHgEtnU74uToew1gBYsLBaZzCssPHFnXS4azB3G1Xsy88WyBXsU4GfMDvQJ",
  "key39": "3dMt6vogg8GjkPQBmn9wHXJ1uDykGXY2K32KpNZRtHdp7c1quQLmWNvdtibgMvBpgHo7oGVHsFgdsqSxpWoNqppR"
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
