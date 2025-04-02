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
    "r7mBMiqMt2ymUFDbxkzVv5XGXDBLrShAJQ1phvr5zk4a2y1MqsvoRptNRQN4emPXgzxJc362D4Stqhe6vjVVsZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ohWvMqdueMvE68hK2VJ833yhBWe5Tk8KXCTz2aHyJFSAtb3KHwh23jpn65C2fduhk8fDzNHf5YttTxm8hMNajY",
  "key1": "4hB8nkAKVjURx6mxh8L78rV4chVfoNcsWp1H3Jmw2q32JG2rc6JdHSi4D3WLseTvQuyk8ehagyTDZcJGhTyAbUVN",
  "key2": "58YMS7ZwoUTYftxzrxNu1wEoBRHfSidsmCDGPd2QCYdxPENLsgRX643LK9S55WGu1HjK2gCEf7qCqMUFitM1TVh2",
  "key3": "3iiUpKp8KU45NH95tLsivGP7GS7hQdrzUDe89BGji2yn6yA7gocaCvzBzMsMTdwzrutMZyZZUgmTLvGVL6rvhEYk",
  "key4": "3i5j8NGpfvxbL5BZS7z6XNgYQyByc7siTN7yNwzYEibBnWE2uiMYYpyvdADbuYqfL8ydC6Mmx36Q9ZSFjpnRLX5o",
  "key5": "5ncV4T28Ar6GcDB5gdigyfDbVbCcZ2f4wDJGeVqQVANXAY349XuUhjhF8zVdwNu4YyYbmFHj1wnuCDjGNCpVSFAm",
  "key6": "3GT2jbHBUtAzhJqBBKVL1LXcvRtdWborHTiSKidTsD4WsfExsLTeedTQu1rWM8ZVPp97vUWPPsxKVnEYAH9xhNdD",
  "key7": "35LE4ejKiegSHYJbcVJsHLFub4HyEjnSVDRtAv3NkY4Z39fXAWKbR7hWgbqDafirB8GpCXeCeUzR7jSfEcGCRPFx",
  "key8": "82CWPVLAWwzVTcjnGk7fWqW5Zp6MhkuKuyLVpFCYcmmrixRgMBG69ioG7Yx1Modd7MScaqCQc4bCDdvLpAaB6jt",
  "key9": "4JTm3RUe9oVtP6fC96pkf8QEUEVAWLGLMh2nkVgMr8sdygFgcH71w9o2DsF29gu5MgE8wt1zDjPkuR4eNrt7jYYo",
  "key10": "3ZnJaVxfU1fMGbpWZdQXBjtJadQnYwqcDwhCEPbtEYep9svs3ZU1YUueemE5F2n4miNvSbfjdYieDjKKEj2YTrgW",
  "key11": "411AqwpRMuqsAUAvYrAnpfNaskP4UsN82pgR83YH5oxs4DqF3smswwhksH3VVByf1h8cCqBxXKQCUZXvfDXVGEcu",
  "key12": "5e8jbsJEGkAwPqdraVjAuj19vBzpRv75urTh9Cn7h7HjzfWMryJMvT1Ya4ABD9M3VLzLFjWztEk3ReeRsZaNGqcf",
  "key13": "KDU7sVZgT5Y71GvSrVcz8bsMwUxRnwRwwouavKvWj96HhRnSJFFdwRsJfXM8gLBfxApwV9SiDHvfoVAzfuhfPJJ",
  "key14": "2cPKnG3rNNgZRHuYbqmtdwLSNFfcDt9oYaRJPvPTj4kUSEQAiJTp82YbxdYp2aVY39gNtiUaaXiLKq7AadWTd4N7",
  "key15": "4sPFmjjNq9qw2dNNFwiinPRcLAk43Vn2ewLKddaJ5hLEnsWGnAgUHEcqoNGgmqYfYHH2AUZEvkRWUdCmqhcNV5pn",
  "key16": "4y2iMgPkEW6u3Hi7GgUPRyPwfLb8Gh2EamvhrrDVuCZfGoR38gxZm2CzeMDCCpHvUQvKDK3S5kPiZbQvAg36Np7s",
  "key17": "62ELPRB7661MgYm6YcTpdvjq1RGKuQu4jSgG4TEb2TgjTQsGFZGiNsiwGmpGxAYsJFBZGEEvgSYYVMnZmCuAy79m",
  "key18": "3An6td8PpYjtUvS975vWt6X6DEkCFgLibXKNqeQ4tLFJJfcuFjeuHCqLcfFfqL9tYShUmUupGFdAqxoMPBP84hMi",
  "key19": "2pNUJVe6nyPMV6Z62KXrruffA4uceNhTpxpzkM3V6LCAn3ZD9RefuEiK13skHS8ovb3s1oBQchP2enfhazsfp42G",
  "key20": "2DsSqJ4AhzhsgztGiTiSg7sdaCUd5VtZEXuyzGhHbCTUuJvGzZfd5rqYs5Vi3m7bQPKWuK5yZiFLLC9z4SuvQye5",
  "key21": "5XKtQLojs9QmUBZZEyYt75PPgUS8od4HcomXTjBZGiJT4R6EZM1wrwvLpEeEcoTfmA8ZJ9mn1eoMQyfWeqbBSWny",
  "key22": "Lk9fda8pLVQif2Xryp4A5JNafiHMbs5RKBAxjZnwB1jTLsZkBiHLTV7RehUq11erU1Qf3mfVe8FiukF3huGiETn",
  "key23": "4FNubNpaTQh7USSGXn3WsoBnGZ1Cg1KNkNP37wFeuR52KDhRdCZKnLQhTKFAhZ7CcbBJyb9pdvvMcpoFwmqdX1no",
  "key24": "4ktFJ2yWkZ1dTUgLV11AhDHdHRTyqm7Usmkm9cauqNN2f3PyzfaFVpCn6YA8U4tLX2Bh9cv1DHRe22UMQsBtAp8H",
  "key25": "HRt2e1p5FyWgetoHhVg9mxXJf2bmr5btSFnhxncgTz2RS7LPYtBv6bX4Pu9Z3PvkLbtDSYdBuZrtsgdbh2dVqgK",
  "key26": "5mY3jBUTFUSpwXbbFjzkFhbEfJsqfHC3zyr6Pj7hz1L4xNHiqoffidRzBqd9kTgHreSnneZjJhsN5MoZau7ofGqh",
  "key27": "4DMA8t1kuKo6vM5ShK8gwuaVPUc45SViP8PrcRojoe1myTfKh1y8zdYHbkfdm33xvAYkKeBJ8wuws8BYWwoEfcDd",
  "key28": "3bfTLcAx3eqz7ikmRWeiMtvJ1G4CM6maJVz1C6dRnyby5MVxRa1wrUapv3DxxA4KX83CGREM8DeNpLobbNxBELmK",
  "key29": "5NZ35a6vWFbuTVeCyTyWYU5DUr4hicCeXJu3YiURCpjvFaaLUwzPJg2VZTadCQ4hwqRfTk7B1YMibUyiGvFRUcb4",
  "key30": "54fcKmrrPuoRqcBxKyksJu1Pxt2Q1fCfDrutaQfsT5oMYTuPcc97p9ESnQL9Sqvc6BATEcgfNeFK5YHQZDURJaXK",
  "key31": "3ZkUcD5k68jzxVy84RXYrmdi3zZR5MPWft18wKKAbkJeESjjYiLwxt3Jhcmdi7AQnJc1PpuBnjpsk1jD9UqLe6FV",
  "key32": "3jCkFyKhKnzQafzbaCka4SCsTe6VpSRorqikU7PBAb2micdAyh8etdm7jjM3Q1RzMPrbPfYHnffs7RPAcmGgw4fA",
  "key33": "2ArZJBB1URGKjrSjqJJbszHbNXFSU8htATA3WoHWrkMzP939km6nGqKZEnQLxdtegn9Kbaxk8TgCv5CdutRt5FRc",
  "key34": "5LWon9NYDtBkhh8CBbnYHs1ZFZj1ruFiMtmZ8fHesmV92WAxdj78onYr2m3FYCcofHEhssPn1aCpuBGrhLhFMk6u",
  "key35": "5gdtoPqcpf1EvfU7b5ephComiq6U5C8cu322stJdJwLFcoxrULpnZixkuQUf3ZyNAuMsJqUT9gXxx9znPnUFH1PB",
  "key36": "5UqYNozYV8LrWdaBR4JHwf8cijgt74KLCSPtusXh5hUHnJ7hUJACabeiCakjvEaUP2wjG6X4EBHyB9vRrmb7QLMi",
  "key37": "5N6DNRbasmVk2njNteJECzmo7bFomV3h4qM4KDLSiHahYW29Vk9WEnWKjQKgNUsT8FQ7hZLmqwsAXav1DxCSbA9Q",
  "key38": "2GfRGGPmjQFNvordD9RmTgSzGEp6X5qtpEi9CJ85r5xHdzk3f8bjTbdcXEPQDgM24Ugfmwf7Na9JTDStovMKmY1h",
  "key39": "4mdnbLrb4rELDcf4zUpvCTg55u4kfwdrrVGmXdqZeD5uy5947raAtk5zDpra2jvXnTycTJZ9MG8DhkAQAVRvrE1D",
  "key40": "MRhFySDgiNb8PqRQbHi2vSdN5BKBuA43QRTMpELEC3sfHdfjjN1e95RXBWthzKanFjV8xNwyLcgZNQ7JpugRpop",
  "key41": "26BuUijCdU852tmwmyrRX8BnE2ksb8PAj6Dx66nUPoVXTeZ4K2N3ECtmzD2JWNgvR6zptWujAsDVTg55gpyY19ro",
  "key42": "3HEUnAXFLzAksDdFLg4gX1ZogEjz65iStGg54XJVgQN6a6MFnfJqkpSqqiy63fB672ybsmM6WteRskLunfagHY7o",
  "key43": "XUVjxSpfaJgAxt6vyNCx2pGpTo4CjDp4MvSd78WzzHMjeWEhnxMMSJr6S18sznYnVMF43s75WNQd5WG2iiLv4kj",
  "key44": "3GvVxgzDMoHYVNyaVfb8GjCnadqVYDXvGaRCrK8if1h8HDrDTqVeosSizstvHmtf71dJHnuXXdRYQUMQj9DSQSga",
  "key45": "2rPpJuhauo1KpkJYixtFTWznqPpMCFGRGCBoMtJqfKYSPYWmqdNevniJMMcE7tahnH9uqy5Zy2YCHyqK5xi4DeJX",
  "key46": "4AiYkS5NVVZNEmnrsVrXuUf2Hdi6BRpmSoLxd69Tgj7L4NR7N4UwwaZATAisBV17R3Nv3SAcyp4iX4mQKU2J6Fdi",
  "key47": "4PfepsqcVtLC98V3gzKZe4HUgBme1VDXBzJXqJcP8NUmeHvciXTZLrkgz9stqtKNpsvJRGhVcAnaYRisimfec1zS",
  "key48": "4bo7JV4q28qr5i4Cm69f6WCN1YyvX9ffRW5VRKJWNdEpQQtg6G87PVYjbWm4u4zouzwKUsXEVCznJij6KbAgKtSy",
  "key49": "3ZExyuDuU6JpneFB7JDwBqeTmPbowhxTvxMnxZw4KhXp3xvbbpKcw2SC6892yPWhbGLHYfMRPzU7m4VXKAMeBnQr"
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
