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
    "HA2hXXyfz8TJzbz2pQpDUrKzF6k2kzyHzN4ytvnouhiBu4LRFMbKpjScw3VG1x9MbZhUnRB2DqGYtTp9FNak4C2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ects63UjxnazF6ZLE8LL1PpEMcPwmpjkxjCwiGNTnaBMxJ6MzAwjGU4bG31FBL5LkznCiY89BRepBGUwKco61VX",
  "key1": "2DZZKF8sxgRyXu1GT4VPMtveCnFhx3MetvPk7FkZZF7hnpufTc4K1z7EPrwuQVRXuFktYXDWPUarfcxjwV3mRVWe",
  "key2": "2yR1eKm8P8JubVd46nyKjhjMkiERnoE7kT8rWkMQtqig1Cb8d9pBVGcVANZn5gXueZsK6tCFB4gULUZGHoANyHu6",
  "key3": "pDUvWrgFR176cxasrPdUpZDzNbebjfXJ2GHjY7ySJoNNpQu2i3TKLRNKJH3TchS1vEMY9dbSTJSfZ4k2Hd5tsGd",
  "key4": "3LA4YyQuDBQhv5znzCpWpbyDTv5jQPiTj45aSAcBkySDyiFdNJGvRKBJfLKGvxLVrPvNNR2dt5VMsddAVEcqB3i3",
  "key5": "5QwucHV9Q4CNu8478sFWqygUCdpBPRHUBAZYvVoobYNUhz5a9weTKZ7kg7Sak4b4CRwRJdD2mQtqFecT22J1dFEY",
  "key6": "2fTqtWH7TEbJ5bZTk6hzvCAAVAAkmSxSu1M4BF5fbvYrkGQ6hmgCM3cFSdyxKjrwdBTqMwbKPB6A9LDjfN4TrLvk",
  "key7": "3WJ56dFtfgiRmRAvfok937BvqrmbJNDTWhuWU1vTAWVhJknFmEa6ugeHBZq5GA4976XojnMRpLEqExbDmbn7qyDx",
  "key8": "LXfrB2X3XHdXVWFn4oLwtcfc73iDb6jxYQYxMypmmFD2tgHjCp7xRwNFCLravW4YVwQbsxk4f6ZkxwXAK94y6s1",
  "key9": "5RP7DDTgk177TrRZjLzq4i7E8rhQ1RZUiNVzeg24JsoREmv7YjP1uL7XMnG2PgaunnEaurp2gLXNSgKwN4pEVCt9",
  "key10": "KUhmnC2Yprm4xARjbdo1BoYgdFbGvkLXSqQd1FRrMPu4fv2MCM3UrRb4HSGyABS15YpKGsqcXM9tQmbbXLb9h4v",
  "key11": "5sztPxk6eXbvUStuMaEFYsrf6yEvgYaJ4LVNsrYAUNe8ysHEb5423VWznjBZSe2fH1ZemCPjXmC82b1Gj2mV3n2z",
  "key12": "3PJX8KpUt1ktjgkusLLn5srpd2taPJtUzjDn6qWMEX4aUgbJfde6HLbrmuKE4no17ohuBXYRqGRP8ptFqKp3Leqo",
  "key13": "51EihPFWGthJmECagToGsuT7iBEZb6Ev2oXEYjqmh29cd7JxDL2dUGLkVJAGjXv27Medg92s9ph5TmfSgJsPHW1W",
  "key14": "2y4wMou9m1MxNSG3ZkVgMnGn1VAeHzok2SanXEH7zz4F1NWn177Qz59QTtyoGmn2YLtxZaXRc1jbPjddi3rny7mp",
  "key15": "5d2bfCr24R4FhsUANLSjmYLV2ZzninxewJkUVMCVEWGfxzcvn7UQSJBbnnLYuugp9qEQDXRU86VGv5KvMGkvqEyo",
  "key16": "3z69Y6HVLctWnqvvciMAdWpMWpfjrXpvJXXUuBp61W2kMX3dGM9yJg7eU7KG7Rq76ucQHFE6kPQw1FbvNK5JndWB",
  "key17": "e4g1vk6QchhtweKQDkysVfJcP6uZJRWum7PvP3QKGKeNp6qDRRA9V6qhp2Tt4g3g3z3apATeycQyiTR37wYPUuc",
  "key18": "5K1u9vAerpGoc1MhmtN4QHZF1Y9zVxRBzC4LXEswC8gpotrWS7VfmaNwhe9VMmRkY6ti8D8ZRd9KFkiXs5nQravA",
  "key19": "2z6BmQeWY8T4w1jFF44tEoQxthKmoRaRTCQxL9dWMxiAqRfZBaArDQL42QJ81pK3cKBMhxtoMn7pRzr41USij1qp",
  "key20": "4wNj7843N3wko4X73PQpmp37uopyZXFQLKw3gnzvsG1iar37rCGym8UP7VXT7feHdTT9UXE75iUEQqf1ovb5AJSp",
  "key21": "355Y9AT2FHqkeYCqAhc6u8MLnmSTT5xyrEDMhpJHFZL7844PUscgbTKUB6R9H9oWjFokU4JatiTUypkzGzxdJsKm",
  "key22": "4Mm778nsyssrhkCLooLS36PSPxYGLyRG2v6kmXyczMWPigNxTw2Z7qqnazCwrMt9wyRKxDsXyzeZhGtPTDTJGiCa",
  "key23": "4xpN6eN8vCt5Kc2wfu4fLkkN3wG3XzieQkuX5jj5XxxwuEMvRYqUHg8LAbyo7zoi7S8g8RYxmo2dGeYrPETNotf4",
  "key24": "4FykHXSepyBSg6Rg6i7XpeNmxtHkBZtzbWwWgZtkfr8TM9FwiCmmjTSHaAJ1GjQUiiWCP39R2dPnM2ua2PSpkbNB",
  "key25": "5jRxnBBeEFrpoRkyUUMeuJ7DV77cmMoKbpg9DLmd1YAiMaanZAzG1J8xPfZEvHbgfqk66dgxo4Fd2x8vksx9eUbJ",
  "key26": "4Yd3w7rqa1Y1YTP99AFR7UDqrBiKGtLEFNd8KxN5bEisx1W1JHPWwPLXdfyLQPQ8L7yNeyJe2xsPo71RGvtKWq7s",
  "key27": "3R3P8GZYhERRonQ8Q3wXbfAD1T2Yyr1Pn3TogKXQ1i7yw2uiNEc7up74ec3s1VKWoBjG6gdXUszzEHWgsEVz1aKq",
  "key28": "3VsFkTy3fGWwmsnPvXKLCMhNTZzRbENUEpo24ksoYbV7ez21tpTH4oD56ti36W3ubRgW3H72xAFUCabdEo584xUr",
  "key29": "3y4YjoHWGuodjxYt9tXKGM718Rdfhc4Paumw4rdXN4VEbpFwCZ9jcTREi2ZAfVjwi8ike4obBXDnQXe5tqcMDfG5",
  "key30": "4P4vF6cGprbFCckRbxDaSonhC3X8F7eRt9ykrCXe2bc3PjHdiSrURSTU4rywp8MT2MsuSB7PnRc6L1eFUfB3EqXh",
  "key31": "2gwCZqhb2gY1boj6H6x74fxXjcPB4MWK9JR13dh5A92syLzscKoEg7myZymEEc87qQmVeetjzEEPsiMjUDzj98Fc",
  "key32": "JwjEdQhey4sf8fxseErnKvyUoUYCirhVJ4fUJSPjT6yT3xAftarJMs6QJNrrVMQGEoebpdysEudATsiMH23wBVN",
  "key33": "5pJ4Xns9MCNVkebRUEvwYiXXd32RakjdvEM9XoqVAy2tPhkni48nXZmY5DirjDR41qQAm85nMpE9Bsy69FkrPxCs",
  "key34": "652UZFMJ1RT9sekcdUDd7Wqkb3h8ZbWb6sEMv21dLPB77g86T5EcWhc1xkRW7Ah9DaptTeRHZejpHpiWigFiTXSC",
  "key35": "33FE15cLKbraepD9PtuPnyCp4e1uvzNRqwxoYK6827VjhNssvPMEQhP4RBTpn3jRtb3JuyTHMPdjTBL3BFPktrZB",
  "key36": "t5WG2TqoihwPo9quTUTnhfsEa827GcPEeVeR2XXFMMUoMkDWqfPaJUDpEhgVfZP5tVwuWcnd5ZpJKoKQNwi65rZ",
  "key37": "47PcQJUg75u3A74oSZyUkhzRYwraFd6nEyGvUSKkv2FJzw5nmDyBAaxG8rqg75DMytRw13FpUvXWVNZsCtY6oisc",
  "key38": "5UdD8A4s8cBxRMp3Ax7t342B5Yr4YZ75h2Y7sq3FBYudsRvuxdpTV9DHiggYRG8KrFxzPtU62FxjZkGi1VDKSuMV",
  "key39": "52FofUBE91CTw8g9VtDMbstp3pZbDSJ3mipAjKHKzYm3K6G6mzZEtdLEoKzpcwhBbQUssKErbZttV3ZNDVKhxqia",
  "key40": "5z4Eg6Qo7b1JxMZiFFtJopwcUcCFoEUmSsVETGy5nRKBgq8PiQoZnHzpZ2fRMPSaw4iLH7GJDe6CToKTRhyifoiQ",
  "key41": "4iHmDhhqbrxE77rkDHc7ADZQcWQftWAYRLHH7jTd5SQPBBTkooaaT5YVxuqCF6SHSt6M7DhN4xXK4aRzivhBz3wH",
  "key42": "57Xueu7SY1zCLtJ23dt84B953XQpkEK1d7LfB26F4Vb1crfJyUFZEovEgJdeATduboGagBzs7pPw6CtJfmQZPq5h",
  "key43": "Jixn3dxwyo3S1bf92VLHYguq8Yx8vownmR16u3PTbW3x2m6XskjFEuU4WJTMZSxxXQGAU32uNFSVkYtdArehvBP",
  "key44": "5ZJUYg6R3ua2nmeEPwkAecyX5qCurYzPs2CkYyAyscfWPU8SQCHaUAn9cVBQsaNCHuMThnuGYQNHzTs1q1ktv6Te",
  "key45": "62CszFkzkUrJduKhFb751r5xYt951RPQEQ9Z4V4pFAJQvthspx2fLi3HXVF5JouMFDRtTJXHbibjFcgSQdHUyJwM",
  "key46": "Mf5p7v9KsXm5y5Q962Ydu3uhVFFQZ516byHuFbPWumAwRm2qHeyjF1UD1nCsnAL2LRWvPS81ar8WNgjwHzSFEpk"
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
