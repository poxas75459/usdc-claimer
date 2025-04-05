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
    "TzvFE6pvr9mnz96ByzTrHBSpgoU833aVJHnLfyuYzeMivBnrnzLtdMnLrgozV1s4Tg7unXT3DjTPNf4v8jCkPbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DX4Zgu6ow27WChXor334TvUhkoWUu8ZYyb2EXjv3NRYubK6VjmqFgdRPt2QtCce9ACStH9USCJaRQTbuvb3RDfX",
  "key1": "3Rodp5VjuT4xVUjq5AVbmb6jg9HGVxYMojkkcXmoDMbTj5Q99b5nP3WUzCYuycSqYjYhtYP9qBKzdBRHgUftfWj9",
  "key2": "1PdvFXH6YW75PX6Kkyxoxy74bdbPeH8KTFVzwM7GSaP66qbeBBRdczqykdHpVsrTWKpxdHZL4d6U1WiEJsMGS6e",
  "key3": "4poUWt12omxYZ4NpMpS8zPpUUWveZa83Zh3Uf6SR2qCpCT7fdJUfzMjaNetQAbedoTYKtjNjfbtoRtuonYi4zhMQ",
  "key4": "XRJQpDE42qY7WPm5r4b3vKCkbm3AZRYe3JVvTU7uwT8B19ZAtne5FdKi695FPjAMPwEf5Kja2D87zbn7wfbKkSd",
  "key5": "hG85j7guAfYcQqtG3KAn36ZPMrJFnrdtNeYpy65iY9evmpG16SnLbjPjT8YA8Tq91NC8HXgUCgdmsyMpoaWj9kw",
  "key6": "47ehjNjgHPMEJpaGqtZWHY3dxR941cJKepksc3LKFUppwRNk9dz1YfdZi196ze8kuR2XKmBunEy4qtYg4tWULmpz",
  "key7": "2rLf7DGooXvehW6ACmepeaQ8s8jiymTwmVTsZAA24cVMXCusLFdVqPVh6XmGMjTDF3VRdKrQpta1SbkCod2e4Lsp",
  "key8": "4USsCBJA1FVguDg4yDtcVzP2PiMekDLtgdEcLyHNQR7jJ8oUABAbCEouBpQ125uez2RZuUSTYKLqU6s78CpeVcwR",
  "key9": "kp79zDhEcYML3U2UekwYtk7YyXyYemyKWYWfsBQgBUfnZHSEZ6xtoFCDPeCQfFJr4Dmd8qH55n9ozCnUzqM4jrA",
  "key10": "2H3nmZ4huSGDZHNuBsaxHZLwnWRHeA6wdm9XDGfxfLgSrJGYXqEBUQ8fx2wnR7HghK4e5rG3M1T5XMDqWoPyfzNR",
  "key11": "43Ampqm9rpwgF1LaHfz15MBN4khASNmBwv9v7BYEF7t5K4z8Vrs3LxJ7qjWJ4o9hPabAS2dzYTDUSm6ZRW1ZkwQe",
  "key12": "5uKdTx9qK2LXeFRjgMyXjCnboKo3corwoweUtZscpsj61W7jJ4JZdLRn2nBck6QH99YgTSPgsD6y2QW6jP9pubgs",
  "key13": "2nz6G2fr3QkUrBrexj4vRzh6Fm9BR2sYSw63o9FhK4WyiJimrtDPnN4VyMtKNtJkLYReVacomSM1c8aV2uZRCQem",
  "key14": "H3wrb97zpmTRmrFLcs5NEbJ54hMhbXVZjkwPT11g3VKeCCAvYzJA53UXVEzp7VnUYQXhiJJj5vekwdCrbBUc3Z5",
  "key15": "5UCt2YnC35K67yJiwxzyrwypXuZ1xushE6hgsqM6NVJsmjXvxvzWafnxPwG4bhHB9XB7riaWDmM1HuBrpKb6qwHD",
  "key16": "63QcHpqviHP75QKgjhtcJgNa8Pbh12LX6vFpEHBr9xiD4oqFMgezN1buHWKEEFK9ZSdwfHiTEUHff7qqpPiCJTAF",
  "key17": "4uVbMLZjUpVZZHcaAUoqZLFFu3WpCScEsXWFaAZpVMdcwwguwHmw8T87xjtKbnRE64TAfRGRcxdtK6SPXT3YSQVa",
  "key18": "24gisnxYESiSrBKRaeAy5bcdpckLixHrux4Zdm9h2MjjzowoXvFgGZhZTgyV8wmUvtWnsFwutTbcYjEGiCuij6Q9",
  "key19": "c11A2dY7QqR7dmSmKiWCXeXEt99EZpqv8tMgkDq9RQ7KYa8gNzsh8cek1S9XuqSi5eBB9W2jxMrHLZzBujQXVba",
  "key20": "2Qq1cg7PEBSq26ne4VW7rzxvfLLS1dWQqV1KnMPXifKTG455Jao1TyykZKS1Do83PGDdyJ77L5M9aJFqCHQzU97e",
  "key21": "58JKFEKTLDiv7Nt7qCmQZhnUVRB3aHtqbEucCVKJD3j35RE9EuUFLk98kxjZXJTBLnhd4Fxgdb4VCgQZUeZ6Nmbj",
  "key22": "3qT3GVdTZDhMfSLJ8aVebe1mVTj2orfzQeit2e4NrTFVecA8VQCVgYNZumFLGyDZSAQcsRE3v3mVgxAMbko1L4fp",
  "key23": "Vmoo6pNGSRGjotvNWDCGzVLqKapp9bbGcxb9QZKvUkax7MmDbUzQEN67RKB4hakZo4tVbZA9R8WVB9EAvWm1jkx",
  "key24": "4faaAGkaWNFngKuHhM5AdHgP4sULwMxLV3paXxPkDQ8J2pSkhGcN8zQngVzMJNSysbjPFzdeExtjX2wRcmsS4iye",
  "key25": "54Vvum92mCUmn4DHWV5mVucycgZRKqUmyoEkpCYw9jNgAzNvqgb33MAJaDqp35b3AqSCELM3Gx7UEU3b4m9vaEJQ",
  "key26": "3dPQbiUsGJh3d9gszcPjKxx9zndgC9wQaRtwTaR7zDfzBrQyEUu72yszVm2JmgoX6qyNXZjCqmUxj1u96enaGTDa",
  "key27": "Zw4H8DwhWsNnD6ZePQb49yz4H5GGf9idGz6654dYLsJLvSoQMnKdtE829gm7J7gS7Jf9RyPxDaimuWXirKSWfvK",
  "key28": "YZWwm3WZvWJgSEjgtjPZLyswBjNGrCfqPU9h1dPmxWxzGQNbGZkEYUyfdeWJ5fnVCYtv9xbNQA7VzSfvPEb6Jpy",
  "key29": "4ppaupKtHiv8YbbFF99NRDGMCboZZPNPhUj3vYNKmChzG1SUu1t6ayXj7qZcxVqRmGVwrvW1ynJa8iTxCMm8VPQP",
  "key30": "5hxmAtV46tmdFBMG9nhkUe99QsUQpZ6XKFaed8jiFJHZAFUKshEZur2ZcxDxYZkb6YeR93ManE8S28AY8UfQHPjh",
  "key31": "682pXktLDS9rzNNLY5nvjRv6n6LK22wDfvL5vRsYXfAcHAkSgqiGnmWPsJDPiZG8babG56fABmWUhnmU36zzypT",
  "key32": "4oLmDCPCYJ7BtgrDRUqbsy1Fa5omeRrDkLxkosova7qTbWsLJcGugie31XaCM2JaDYHPbBzvK7UVV19bfDoS11Av",
  "key33": "31fxyHoggc2e4HDdVChuYDXwv9RyVYUEYSf3ZnZmiohoNi7uuD84MA2cxAV2aAw8yfWHsAy559TWNSRW8w1v3mGw",
  "key34": "46ziXwgHWwHAwPjXdSyeNfYvdhf8aX2HMJxrjZ418SQmPDFayEMai53gS32yNfU1kRyDgFoU1iZVtFggBot2PFL2",
  "key35": "3wRZ19fDA6vodq4uyq4qVKUKjWTzKqmpNXn1viaKxvK9BMBg8cwXhAxSvHbpyzsXPCeiYWa22mxnh6cAYWBaCLzS",
  "key36": "57c7Ja1LM3HA9u5arm9NFmLdGGuEGRJvmCMTKTybPtcVDAvkXhrZepB4hyE4CtAD4xszWW3cCFQbzaJbVDoDuE6r",
  "key37": "5FiLEsLGqmFNVgT1t2tdp5Bjruw6qj7aSejL8d1vS7gkYAvTsKurbo9yB7Nz2xb7EHT3DoQLifxEi2oq81eMGznN",
  "key38": "57C9R8m52dNMrVhM8ZeCU3Snzeb3R7RMjMPBSiHVrbc9g8EoEboHDVsLomqpHeb2pDCEpHmhTTqcorTo8YpzeD2K",
  "key39": "4sJkjj6AkPenbuqSKiXFCvqqLK1MAhszyHc4FWQsABwiEn7P7UAuK536wKrLXctgMWvxytDmhN1kDTydW2cYfCRr",
  "key40": "58zNDk2tqTbXpmv9DDTUnAiLTJqWZ9tGtnqpdXG2Gdqc7J2GADyivMZ2oFgJNrhu3bVBgcWp6fjnAbAQSqT8fBfU",
  "key41": "4cYos16ddshXYFMoFo19bA8qLRU9UEtBuZFvvT3k3sS2yJE1cRvTHRaCBLKrA8jPoXcEHrLKRCxVCkPkcY1XZh8W",
  "key42": "4EyrqWanWsHiQnR56skDUQpqpiWk169CKtonaiwLpfkwdNxdwaMttfUCd3gdRgrH9kfBYM9PcWXd3qKa9ygRMNTu",
  "key43": "5Rf6uqu8eqHqgMLLU99xc9FDaaxn74XEgwggxQRGpnNye2vSmx4KuHvvoKj9XX8hUXXKvrFcVhUYx5R971UmWZGR"
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
