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
    "38Hu6ivcQ4R7BAuFUf3bL4VX5S22eCjjfThi6Wb2CHsrzxxJRGcJhX1YTwprd7Xran39qLrXX2vgJuDMgTRJWVcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2moShk8w4GRUjpgxrfi8E3fPjYXvDzgQdNMXDCsSh8L2DdeUVg8bK1xxcmdj5XWc6A5Coxw3TnYyHLCiGNuzRvt9",
  "key1": "4DzQCJAydvdrYyzsNR9cxTfjgZg8DgL3GrpsFWV9mmTfCzuhA4SPH6uK7b24YLbQwZYsxW3gd1G6gSGoMKJad8AK",
  "key2": "5UYL3vv1dJerPF8X3TTUuw6ZNwJx6c8Z4uggAehjn52hHj4NNVK81vsM2xMeRfbapfzXkz7porg1h76gfuxBAxzF",
  "key3": "zRbNKLw1WamH9wEu59J4A9MA3TKjgGLgzsnTcKrxDmfmsMQgdnpogHYFjiEBqk4qyv5KipTFahvFGo4E5gTgkKL",
  "key4": "cGezWoytjtRNPRGjTAHaBFkjDZ42p5itS7ZWXzFeSgLv7MHyghmdZM7f3pjREj7P8bC1bcY2WspsT22iBQHGzkp",
  "key5": "5ji1MYKDQRSjtYLZ6t1Z4hMALFf6zu9tugYpM1hQZF59Pf8VkRvCZ1XReBfJWt8pkZqR5pBeZVh1p7b9NzJqJuCF",
  "key6": "2vrRzpJwKoq1NjD5WgPcmfLbK1CFM8XqbrqWKyKQrQySAVsdBzY1Jr4uw8GGa3D4GM47DFvRngVircWMAkJ6WJrd",
  "key7": "5ZjgHeju76YPPXWTYj8ieCXu6RAUbRb53khEdV8ugsw5hVdxxAf5pjdfC5igYkSnyKv4ehbZ3rjJsoJRRHpSiWir",
  "key8": "4C3jucdx8quStvdYqKUv8LFXRvpskySYf5bqsTyWeZP4DfhfuH3bDwa3kADmn4gaqwQ6uYX3F8p7hvipDKKdSq7o",
  "key9": "3Ttnsj1gs9sTqTpWDbwa1omyEnGKXyKjMYvY9RHgNvmMwWJyfhQCAfbScCxEbwaUJ9pAhyWJcbQR12x4YScwgWPK",
  "key10": "3EmK1Mft9nWjq9dPMfvFJmR67m8fkQJBFG2E2DJ5K3SmwXKnmyFSWUtNvwiurXVuNDzLWLPCAkbkHoERsMaaLwgE",
  "key11": "38iTBj2qPhCdTYCfnDmZm73iHVvz1tGNhM9m78C2eb6Q3XHHgZTkvPETXvKpU7yQGaxgHjMUCbdUTpXC2Tseaj4D",
  "key12": "N6P1oTYmKGLSMy4pwMX1MWGt955vByDhvi19SCqAE3ALaJCfautRPCDgZzL1RzyEJUCFiPrT3uob4F2Cd9MU6Gb",
  "key13": "2jk6uzcjFdfHT19z2UmfMw2wNQKZbAhQ8QienrfP82nZK2EiWEqsD38bQLTePX9qHva6PH4Us8qBd86XhcMDaBHM",
  "key14": "3CDPZxNE6Xk7DmhSXVGQEHTEQkF3tphF4gPKaL2kqbBfuHxU7NfBuMPCJA9LYuAso7hiifzWdknWj273WGr8iEBA",
  "key15": "vRQd4uUPae9BjjXhbm8WxKvP2jocegdXtDjoWM5FdcJXKCd1wbqqRzn698jr32pPWwDiLkeMp51v8atzBSzpEW3",
  "key16": "453t1h3Rf24fuiKaX3Ef35ap7UGGidLuRYEVRdUcLfL8A6Cwmi2S9Q8YrBBFeRFqV15rUEjYA7Yr7DSMqzsq3KNn",
  "key17": "GSEE3gNBUsNuvhZw1zwkEuWUwyfFcDFZKdgwqBmJqqVuwMPXKDqJr1ayaE4vK2bufeB51h2rvNLEx16aYF78Spa",
  "key18": "5Qw6NrPLc7ahE96uyeURr321e1npuAwBbHETGuvhSj4vGzRt2HRv7sjgQAggGfEqEGTM7g3qrEC2Twj5i2n8B8Lm",
  "key19": "3AvPqN9dWkHDZEYdXzgY9too14YocuHhH9ybWKk9d1edNSFiLqgx7PiFLRtNmChWzhtgKZMZ3ynsTBdcVuXjAMdp",
  "key20": "67iy3dmEwMpYvbQ2hA2C8GbaP4EBTuHwq3YEzBeWe8RMymsb3gph6fXKHUMriXvKWgT9WopUasiZ7uesaqtiZYrp",
  "key21": "5hnvNdZgeKbNQ4sSWCDRJXzN4L9kvuBeCJeBrUWfx2B5jt5riqEsU7zEk2KdbKr6PrFZbtDU9mFRus2WBDW1nVYv",
  "key22": "2SRbahXHEvR3xTLYDKypa3ay1ztx19Yk3qv7SQLyaRgUrQhJBVVpMniHy17t4z8z4fL89ZEQAo7bqyYRNfwqHjRA",
  "key23": "5jTBcgkQn2fzgBs26XcHCnjEqCrpeHhvDeAMh9JLufvVjCgUozXucpbr68m9sg6xvhrAcFBpvzugo7RdMEpyFWC3",
  "key24": "2gJg9y5ufafAdvjV21RABgAZMCPMBxT8BvHgrT5ttotn2kT6brf2DBzmYLDCeuok6DAzGraKk663STZMGffSY4pX",
  "key25": "3kXutN5qzq7YS9HyXS2BvTU6teyu3T9L4jjzsuXzQq3ST12mbSDgsw3VcUn7RdE9y8XVuryNjbBM5C4GVcoNZspK",
  "key26": "4kWD2Sneiezpj4aD1d6jrhHLXwiQLGzijwhktG8E7RsABi3DDBkdnKmLhvJWcyvNAJL2tM6rKhZWPM2usZaxrBYB",
  "key27": "4okCeNvQpq3tWRGJGnc5C44RLmXEpkZtxgfKexWY4fybxRnjXZtPykcqiZfJsQ2S1X93CQKRscNw473Ttrau95yB",
  "key28": "526PdZRZ7AHY7t6zLCgvZ83QcKEGPjdbPj7CckrkNAMQGvYn1kyk3NVWhxk72Sj57DX6g9WGHsACa8MpUfdpxRxZ",
  "key29": "5TYFnv9F9eDGZ9DjCPDD2c7STfjgqQVU4an6o4FAXJawpwdPj2h9UVzdbVZ17BPG33NQYLiuTjxn8NRYvZ15xXzd",
  "key30": "668WMKLbM19mNzfbM9d1zLTYSRgc2sEwxurPhtdZb6UV9XCCwCCSCxSiKz2opz6gyVBXq3CGFuGoxoPReQpwuhiC",
  "key31": "MDiWGrEB9LYDpkpGw1wV21Z2ZrcgXZRp5Hxjwu7t7fNDE4t5xqKXU8pyTsRNLHwdHpfTyo4jS42fpYyNTth78Af",
  "key32": "3SwBnGxNLcVgGPrAw86ffX2VPjw3W4R2sz9j9u8pP39apk3g5U4Vu2nxQzaTJpxbZ5tWVPsAkAHiysG3k6cWQLiR",
  "key33": "25xusaCNMHSEP3phJS6do1TDtNwZYgvYdedgnpujjBPWVqqjzhL6qVBcbzXE7C7ivYh3S7PrCPDjyrsdwDmkVpsE",
  "key34": "3dbSFz5HcF4G7EDSjPu4uTJBagWmhatunZGNeXVJpyxj58cucJoCZo6xX3HYrH2EBMAQxSSSTMgfvwNWEpBfiNeD",
  "key35": "35wvLPDpVTFhC3yBqa4mFsidbBu9oWuAbpuLW1hsZWnGchfcyLphNHPGqLDsBeCcqyf3YmTEjFEEtgJXmopLVVL4",
  "key36": "3wmwup9PuTSzm58PZW8LdfkwxpoR7u9HXhpbEqSQY3K8wz3nZpQ5Q44pxnG3ZC2y8dfs2Z2GRCqBHut16wY9M9Up",
  "key37": "3AMdMMvsiFaiobm8iLvtCVr4nyaWbvoQjWBqDRedg1TvLWR1Ekb6fXvPkYRNv3VjBkivxXkjiVAQC7jj5q1mYS5q",
  "key38": "5sgsD4Mfn7MVJycYg613qVAivqDFeaPJaxJtFbVCiakwcc3B9FAkQGzVmG5pmBdBekeEiCpAMu9hg1DRDaqJLLW3"
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
