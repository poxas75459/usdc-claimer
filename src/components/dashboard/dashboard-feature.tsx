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
    "ViDHW78xUWDfiSBwstV9uqtW5GbK4WVN7JuKztfNDBA6FwhAVK1qCV9GWBoyLcpceBQDMAs8zRyjgXqDmjy71Qh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ttQ8Swsqix6jvNLVkkvVQQQxGFyHMgQJuMuuHm7UxghXkWsdq5jKCWA7UbNHBgQshXtvk818DfVT8nfHofrLBy4",
  "key1": "2ESxWGWHjUyLu2avtXi7hmst5xd2FKtQARUDq3nUEBbNHMQ3zfQdQk6w1nSNu1Ebtyu6TjD8nN3Wdd5dymAg1YBv",
  "key2": "3VWKgC5rEvDGFvD2XQUdFf5WnL6dxwu5mDjMsaXzCTWTUM2nptCeie1UMGX89KzmrWtAT9HUgDmBxND45JURbNdb",
  "key3": "3EMZzLWd68tpMSGzQa8MJWQ32efk5jst3bN1DnV1LUmuptEK4KAu4QPd3S7Ju1SPJVJdid3Qu8Q8m8dz2DFec2XC",
  "key4": "35C5sc6SxqBuD8diziuDpL5GMDVzfw12JZKbz9k2emtPBLGXxzT6A86RVPGFsy9JNBoV6YaQWSV1TmJZTVXTcFxq",
  "key5": "mF5usUb5p52tpCFSZXYxENMYgqexRADQLW76MMo5HbDD13PGtq2H4oaJ1GnrbaeTFaypnjLLGUp51And5yanqFx",
  "key6": "4FTbq7hqF9aWXgJ74Qmes8XzjDu1r6T5v7MREeR9aRMNiBYi9bBAqJ4CD5y6ryqvupJeacw19hGGxpJ5De5wmkL2",
  "key7": "44FAvj3eYMMYbUtmVuTKSpcffv4M9jcyNeyk8k749nx9th7omS9XN7Pj6jqcHZaXp7p57dgUspZyE8usNipueqRm",
  "key8": "4WN9SgXkSd4RydzapjkmbYJtnqyQDbtE79QWGUQ7azYjDZnwa3cHB5CXcAHuxHFtDu75uPHWc8VGmDLhDyf9f3EN",
  "key9": "4RxCt5T5zqf9AU3HpQmasDWeidGXrTjoBFCtUo2MRgVh27s1hanbRg78yMfATWW4Xbx3CXHk1HduD7XbYjgszeVy",
  "key10": "2mS9sto7JsNZxBDYKhYvmumfUQAnZGv33MJrdc96ojgW1snDRug7NMsqao7sgY9qsQQ3CeBubyqdKtiyyBX3Pxcn",
  "key11": "4DbQXKA4PQZEbSHU5gpqRA5VxxG2sRjLz3KxE6mDHzWdGyTeGrjHDYWB1bP2jLbVgKcwJkKujHqnJKHJuFUSo7ts",
  "key12": "CgfP4LsRcW64reMZanCCKDmgxztMu9Z9v3fKrBUtG6rRMKpc92K93Mw6Mjbup3odND8ECnyjXSHptoo57LbiSGC",
  "key13": "2VbW6z8hCyo7u8Zc8BBy1LETtM9zyQoiAhec5FngZFJe2dbPd7SXvbCVDyznbJFh8N4ieG9fZmriLwrEXthgg3Ut",
  "key14": "HNPCsGtuc4cNsTApJJCvk6c7JnqrjrNy5BgmfGDMzW44t9TsS2zBXmGtK7JvaAtJpNADaqNcxHgwbGAN9fu3s8z",
  "key15": "25EmTx8neEaHQo4cLhEXgYGLKGQ929g1rVmSs47vNMZikhzY1zduUUiT8twtxUrWgqzSSXyrUGaS146oZ1pwtMiK",
  "key16": "4RbGmVHsC4W346QNnjWQr5A3JQ6Cp1TgsRXMKrWro8qPRUdipahG8qmPjf3T5GAHULpuXNhg4LwEJ2TFbxh25SeY",
  "key17": "5fTjdvZRj8n4mnZdHAKrE9Fv2e6arJVfCguNfxARyuPJBBZVkDz7ACMkjRU53oR4LkcoFNuDqMguFudPUZkcgsyW",
  "key18": "2QRb3GyrYf27ST7ZYpjbEo47iuUYDkNsZSHVXRtB8c66zSmxCgdoL45Zegochp4ozEZ4xu5yUGyn8y48gEurkLmB",
  "key19": "26FEGwfGiEVHHBWFYrFqZ4kHdXFBDAWuP8D8TYWu4971zze1Y2iKESzttqX2dQp3WEoSRpt16SHRghrA34JRS1Em",
  "key20": "3spMjpRV1fiVkebqXAtaa9NyZ3kwP6XwTaaVLZfJnD4p1Kax6evvCfKJmHutGVsMSiYX4nbdg1QJpVqBq17QtYb5",
  "key21": "u9CKKzQ7YWL9ciLjUtahiLaoh5aEBXBegP7VJCq3YUnmF6D1pd7ip8uNFpRPSqQSjgSrTzTJ8tfqmyD8D54dWUA",
  "key22": "42T8J2KEtxHHN7mmtNjUMtxFLUdiDgt7nT63JPQE4g6U57wPBcnE7Q85bU6oBZ9eTcRLF9YRDhLEJMMWenbcGGTw",
  "key23": "BPy63QAehfkFF2CDnqUjW2JibnjYfNH2d8FyBcYbD3zs7rM86XYgoF4Tfi1iQ7x3rY3tbegdu8DHRomDwb9p4Aq",
  "key24": "58DPJ5QWXGRgGQgkELaF5P9sBPPM2GQTxJwHFCdUT9yzDANXk1CgkUCXvFTMkvab86wXuUoE1Hq9ar9KuGGU14Nf",
  "key25": "5FHqywH5GLgjmBtV6fZUiA9bkQjfbCB4tgKaVsSfRx8oR6QYDk1eUftUMaMAcxg3rrQDeQgbCQa9eRFu83u5jDJT",
  "key26": "2W8W1UT4H1dJpXKMVw8ehZtzkWM2uADq9BWrFAJQFwGGAyLCseEjLYma841ZJn4nJCe8qA4yMut5WJrCb3TsLiNV",
  "key27": "5rRJWUymxyj6YXgs8jXh7XWjSPqYCiw2dSn8eGBVhXM6hZnQMw8HMDieftECqQhVpBtUSXpbLVqGEMXqdZQJaNMW",
  "key28": "48ZRX4wDNqLy9eXTkCH8b37ZZqbj9vjE2LAk3BPzAo79JV9u3xSACNhBrqQB7gB1jnsMce1mZQF8LwFoLcj89YyB",
  "key29": "rp9U6WoKNmvn69KDfiMP5WUA5SHsUgpGccgC6Po298ai3E18o6x9eh6XXnw6Jz9WQPL7KKBmu2GyVHRpGA5umNT",
  "key30": "39Gg2g94n83z8tSpwmqJhAWfTXhYjq9uWLSJsu56tb8HEqspHS173FyXgbPrFEUeNR7MpX7LSwEmfgEk37ZrBrWP",
  "key31": "ef8rgRFFyAikkTKmfP7kUPVBFAB26tQQgr3gNw9AYEhSodJbMJ4eNDdu6njFcDJnQDxLAvgwJxDr4fpYyPfzHca",
  "key32": "5ez4L8FX4yQxqALPecmaBs7PW43AXjTbLx6SQDeJ12gEfcbByvJ3KJZPoz6ZxAuEVDc8eysMVSPEoT4BZ4xfF2Z1",
  "key33": "3RdvaoN3oZAspTVM7iRJ87h3h2dAexVvNrV9RtvGrJ1csdPhStitSx39LiApg3spcsnNqrmQx4jBCTypcq6MQ4H8",
  "key34": "5mPyyn4AJGnsnqK9Vn2Kt5au4Zhf5RU6QGXGoLy77ypCJY8m9Cu14KWjSaFdrPJvQZvbha6qpj8YsfEqchvqgPR4",
  "key35": "fZ55Mhv55YA8MbbzTRkGbkffzfNZx2aUbV8ggiPB4foJJyw7xYo4ULgDueAXmbcTWcbsfdsoC2MGeve9AmpZwHL",
  "key36": "Hs2ycLUFK9Wdvj7YWvzorjBrkPx2G2Ni28sFEtjSgEFCTZJVqF1rXPqy1YFud73jTH6ZpvhcFtmNWqdJWyFgAy7",
  "key37": "zC5ejaQYD8FTbrA67YbLLSDuPNp74XQXhLH7NU6pg1GCaHXgDXdaX1S72jgExuwBmYyTrUuiKd3eZDE89E6ZckG",
  "key38": "45hFLSfx3wsdYozCDfd3uqaj267J4NSjJ54Q9ZGzMRq6YkakQF2hrnFRHJ7MD31inTcVXYztVVj5Li8XVDzH4HRs"
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
