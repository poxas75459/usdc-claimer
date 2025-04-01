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
    "qhStGziDY7zJjfL7aKkGzKE6BNnuBXwWkCoVfmkt1G5L8uk7CusfPBh3prMRwyDUx44kj4QAkQEGQ4CHV2tM9kP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45DRnNcEqadkzAVw3szfnbPDaFZMHJqPYDxj1646X5RNHY5LgJHrVtJw3ndFpY1KK22gDkRAcQC4M2ZUvJwMXErJ",
  "key1": "4ZuZtUjdwnbtpch1TyMZFk6a3ycR4TeJHvEgXrX1HC3EEGi2GXwTxvyZiGmWP6aWh3C4KEeRXYHQtKxxiNQpGvme",
  "key2": "Khj8eaDpicaGGPHiCU7oxg8AxZAJNVDXKMm2GeEUtLhuGCTnh4rDS23jwcv28ZPLbuWcrvvfyPVof3EQqxZuP7a",
  "key3": "9SM4HUZPYVo7k485nqkEoyC5J3Ve28xekvCwk1GCgn2yXZu2HQJhJ4CmyVAYsNy6VGh2WdnRSfyyUhKTWrwmiSt",
  "key4": "2DNDwiwA3wwbPm9oGfnhawJMKo1owyAsWcKtyDZnXxB67j5pxGN4VViHzNdd9wtk5jfi8fFhRT8r9jwvACFMLrvA",
  "key5": "64W879f7B2kHDni4kLnzc7cBubV3kSaxAVLAbDDbhKcit6ujPxSuGs4Fck81mEMoxr7wHWRuPyRvH3mAiBmqDcui",
  "key6": "3xD33RX6uV1r8phr76CaXh5GdkXKTQnYhPp1R9dkJ6Y9d5i1JKXz27huW3jJPhjEUudZJwhYLTUpXPSKiK1hwtq",
  "key7": "2MafWixeajmonfp4TocVD5sLqBftzgVdUs6fWFoyxu8kbQfBWVABH3Ck7vpnSHa4pe3KKQa9ow5eY3bua4mpvSAK",
  "key8": "5sKA8cAFiLdb7UXoRT9Qo8jsmCRpPf7Azx4uk1i9gp3yBrkombT5v7vWS8YoJRtJLp7uuMk1JBZEQYNBjsD79u11",
  "key9": "5XjPnpZ45Jd69yUDKUPUVeV1cKgy8KeiyiGC3ygHuGJzEjQEPMy2gM643iKzp2ZzwNmqPYdUGkLQSsDfbTdxfpe1",
  "key10": "3HJ5VXofi9QxnkBXWHnN7Stqvz3nNC6Z2pGzvga135qAmKLVGJDjcabDbL4isuKsyimJY7Tzr2jkv2jgVktZKNEY",
  "key11": "3BX4bWVi1ue8H9EfTGe44MD4VCjx1y7ye7tEmax7DXXUtmRhhp7ibaNNzBCXCGoVowvMDPd8u687E5F6HjWLFvDJ",
  "key12": "2aCRFSPykbbhKQZijxHuUVdmEBu8Vbm5mF2w6ebNPY6jRcVvK7vMJU2H4AKa1LV8emifn7sx5DjqGu8PpTcV9jtq",
  "key13": "4WwBMtopniyMKdGaShi8hTQGsjCBoQeyUCsjDmJXK7vAZrQVVbnscoYFgcTzcF7XKdh5rQdrj3Sxm8mj1L53rTyb",
  "key14": "2BPMWEjYcJUANpcx7fz3jRpowPcWiWwye5umq1Ryatj8bnPEnEx35idGwHNB14xbiRBGJzeZtAnquuJSuBJm6WyW",
  "key15": "JAyRcnf2vTLAE8GEV5NrXE2MHqtLVokTZ53EhUCHsg4cBLAnC3cZRzsj2Y3KrtHEpF6vP3ZWrRegTsrTh5MnD4p",
  "key16": "5Exnip8ynPeyBMYjeAdusjYwTXo69FoXGKmcEGqinXntfxv6kDEY6MUNhusgDosDGoEK7J6azKJiWzgu5g8VFFf4",
  "key17": "2J87ipbCyTj56C2owo8szjuBT846D4BcJ4h2BbLHm9tPL6wQPJLk7CnddStyt2ePidai81Dng77mKrs1QBf8Sh3X",
  "key18": "5MPHwejMQA1aiFdmWuDShwVHGVysrGnhtiCsuDJsfPiEh6RyAnc8J5tHzBJxfvHb71tTmA3baTg2FAp51TMarWuk",
  "key19": "3KYTUwBYA9avBE22GuMmbmxSthEUgrgcRvvwJHp4yGtX7qTPSqm3898pdQjm68gd9J2a6qyZtUnGAbYBge5uPSP9",
  "key20": "4fTnNkRsi2E32MjTvqTko3WuMhDeoXWNdTEBtjrFk8Rf8WpMyCA2M3wwHmdRGQc44wD5BjiGGj35xRFtiBdskk4m",
  "key21": "3915sXYzxQZZAZwWMYQk6EsXR3TfyW35J7DcYw9wdNvRRrAXYvE5uSmdMg3EG3ApHUYiEM2T7rs1V8koSYn9TeLP",
  "key22": "4gshYwQGcR5jpNSAD462WZ3VHR9NDHzna5YvrBhmhTXR4hL2jsPPgayVz6jgNDtaW7Pm1riE2iMEx5DHc2sLU41E",
  "key23": "3ifNiRcykFaVmYz2EfuWJmxxpsJsE8o52ridaeVXeRuy5xBfP9LpPGkfV7isoVeXfh5h74yUeJ4NjM2cUWwkuGXT",
  "key24": "PwAiHAEXb3gsV8eNPzhCmdA2H537MNXo33WVJrTbmcnJfvzB8m7zr5ZPkCb7bw5MS5kLpwLq2WWWAsT7PDjp4nK",
  "key25": "5H69uQhxLCLj5vnXngW2JWyVu7naRiazBUWiRTJ9a5kgqWF12pPHouaNnV2oFKCEKkRqNqLAFAsa9h6Zoz48wH2s",
  "key26": "HJ9aE6aFV8EbxAqNxAgbHMj6VpoV8b68RaYp575bXwyZ35A5vymS6w8sxcYZLifSUfzG1TPEZzuYB2zAcpWm6ug",
  "key27": "45u3XMpgMHeNs75fzzGZQYJXCKEmqmJmsRgqK25n7TkHfZYUMrAHYh2VYRyJsosFZnXNCaFEgjT3ov4gUFhc58wZ",
  "key28": "4LWPse2qujzzHALnwExYWyZaEstrdvqd7VJoWydLio82U36mCNfs3Gj5XTV5Y3wz2UkhBwtns762FTg8jsuWWcu8",
  "key29": "3GjSCGNYnpAPUb9TsCYvgfLH116zhdnYW2rgFFyaCfFf94adL2hd7Ty3X1AQ4xtKgd5zYo5izax1RTn9QSiqBtcN",
  "key30": "AswqYz7LsCuCSt4kKdu1yq2ASiQDFZ2PaSfbT3j9Y4iGv25AcGUaZHWmfYS3EXp6pDP3p6nLGCmpXWYXufoqajW",
  "key31": "5G1aMJmyX3piC5yAq4fcSo5tWWEGA1za96tfsDwQEpiYCRMc3RVtnhiYuK6vMzQpVry1yDdNiUi6gm6Xfy6rP3WN",
  "key32": "FcsyziDCGNXWqKuModsMZbXQihGrogiiuVbbHtmDU7xhMPJS1HjQ1uaRZfnnTydTu8vkAwghwP9LVvKbmPaPk4F",
  "key33": "2284JoaKDqZAGNGinUv8kVKyL4NW4hniHn19vpEYjkZSkRyDxr4QnT8jCzfsZM5LGw2eevNy81Kyy5h8nozfZ6cw",
  "key34": "HEz82wN36rxXnBig123TwgMtBwGsrwjhdriNVJgdSzjPPLmTr1HRAhTSnrJyXr6WWaUxgT6USBbKTRhNnyA9gbD",
  "key35": "4QaRXfLP2v2xfcysBpYSocEx8C8H39dH9dfAbpRPjyQT2mg7FUCb61qTtsbobJVzVpoUh4hWJT94dZPEakZKFCat",
  "key36": "5NbehXxUbMMjCHPpry3fvLZn8xx1ea5r2BnuxLZAPnTy4D9WbgdEGKU3t6TGJrKQP8W8KX2oTYgEwvBDFLBFPiUf",
  "key37": "5ahE2yE824t51BcuUU5qnWyUmmEHpkBn1LfR3XDamKB6ZKJ4uxznWQSAm1LYZ8vBFwEsd17FsmJdMge9Yr3Mn8Vj",
  "key38": "5c9gxY6GqvUyhbipJHnRoVpWT4wsx9BzWrwiwofg82Y3zyS5pTwMqZ7zFfQSG2ujLugS8e9wc6BFrSEbgmsQrRMT",
  "key39": "bVr9G84iah2KKxyAkbvF7QGfcuVo8akr5hBWmGBKUY6ZTLLSUpExiGbYKwrnTzaUY25JhEeyopsw68vSyig4mTy",
  "key40": "36hJXYBUPiy5jDg1PEUR4y7wDSnRnhWF1vK6uyiSCDabRUqa4uq2uBW2aSeWsyGtvWafXpFL9j7hW2E9tNEfPG4b",
  "key41": "44uXwKviSmyh62bDt3xWzJxiv81c6dKMKntQPmup48adevN6v8xynGMu8sptK31Nhp3ZXt8smYx4RqjLQmHh7Dzg",
  "key42": "3b19WAM3eUnwnq2LqqiU7Bpa1oCmhd9jfWLxn6UHfHiubEe5HFX3ogWwrEggL5v4n6VvfvRDvQshTwsjgk5BQKir",
  "key43": "ZkMJ76jShiYaTHA8nJKNBmkChJbaAi5FMusQ9SrRgkQ1gdRgS2DqVWg35XJCRCT1Y6nk13yta5GDGFAFsb9mVeN",
  "key44": "5U8Q4iQd42audKkViNcvcNo57Bm4w5mH8vd8fMqp2KnuA4zgGTQiYk7juVZqEgvc8V7q3Wyu2YYCFe8JhJ7CqSJ8",
  "key45": "4SPhCnrTvTYyTyJcFE6XGdrcxrZfym5Tu4RAuPaBSfnNEePHBucjCBi4Zfi1qAhLm6vj8RrnDGRjRLrHssNFmguH",
  "key46": "2Uk98phMRgUvZeXH7FkAnAsL5ygzYD3LWNeDx2xDeVmc1oRS2MM2xn89Wa6ztL2nzazBd2HPqk5yo66QEEyYZQfB",
  "key47": "Mqz3hDfeGxSnaRCdmZKidD1ic9y5jMYQtYneJcM8eekZYD95xc65Bh4TA3ozSFaytKVyM8UzRJqzxVTYhrTcjEt",
  "key48": "534KmNCw7DwbDdt8p7GMi15vKtMmVyn8AXQsr9pJ9Ypx3jfoo7STX6m8cjdFbgxc3kVeNjXKwRQgphz3TjkqMfS5"
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
