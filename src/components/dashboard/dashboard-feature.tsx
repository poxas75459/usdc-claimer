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
    "4wafm4NHxMqn7R95XTyK3ZaUCXrrLY2GKPYp7ELbKu1rDVrCyyeKVfitXXTgmKjHu7xhvQD2gxi2sQh3K9tqzpyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rHJMgCaa7LQUCmT3XoXJ24cpEHH5yWathofLDuFm33pecms4czWAexPWEYMHcLZ1yzLWKcqHctzW8mEDZKsuZVq",
  "key1": "9uqrrLRheytzhDWBsCNA3TuH5S6GLZeH7oDrHuYJbAfbE5paTF9ksUjZTUN5jJy775WDHneGhtjPqRF9jy2x92G",
  "key2": "5cFHsHCJTWa5VpFWixjUE4zHVPm2ypdigXuD4MfNjFpGW4JeiV36frKrV9tdUqGxN9MMhiT3dNfJ5TNM65gZwcuF",
  "key3": "3xzpNBroTkhXPZqrqUUmRSguWda7NmdAfSHpcNwuvV2geQRUjHEM238MhbsUoZLrn1EG2wwhutoPvKM3VqE4XaG2",
  "key4": "kcnN2A4GStAU1VqkytoWurugnD3Va8d5ihuqCthtcmZzd4omMDx4gSwpxJj33LNfzNuYQruuedd3kZN8sVmXHCz",
  "key5": "59mUoyjCQ1suti3eiq4EoQiXbbwpZbtUi6pNhiZT2ewWMTwFSC3dh6Cxe4y8FMp3ABWhgvBK4bD4XonL4KAz7yn",
  "key6": "4gQqQWtVjh9hqiXG3Hz39KX9RKMbfKmAAXu47fne6Bg61F9K9nKta1gmhy4kwfHS4rboGWJcGZRQCeS2UcuzTwZD",
  "key7": "2hbDCvMAqcr2eoMXLyGu7HxxXJU5BWcBiA4EQ4Z2LG7oA7WPzHRLXLqL3RrnhuRTbYRrtHEjDbC5fqpc9dsCQp15",
  "key8": "5BFXKgKJi9dRkbsBYR4n869tWSqSDoTNGxp49Sa4Xz3K7Vi5jTwZvZ9pAZygFGhVWLZKexTrMQ9cma7DWRK7FuHV",
  "key9": "4c29Ed2u4x6ACHK9bAkdymZN1qHVLhkF5edHfPj9RHi1N9oahYq51LySbihcdJ65URCbe9dQK6QYbsdgXTyiWQzL",
  "key10": "dB6ibHh5Y6ryjAcC2Rr2dmFHAoijjJbQqGG9qFnYTZgvWiFxCLstGm11AB5h2NazmTdB8zFCTVNrbcQqJeontx4",
  "key11": "4t1WH4npsQPF2Cg4jfFyzBJ1rR9ro8pkp1KvFA8aziDauVKV4BCdpqB9AW58BGH6wM6WLYjvSdmXFUS8sgTVhVhY",
  "key12": "2rCe2xQbwNwcPNU8u1W8AX42WzdHWtxEJcevomFhSBYPwYE9cmki2hehXWn4KckMeqQgER68BTXAxFb33wSrcXnD",
  "key13": "67DMPBeqZmrG85s7NAZqyJCpUsyuN85QxmBojv3TDYLhBHeDnyaoXRu135nPENLYdab2yNnn9Sv33S71epEVEK2r",
  "key14": "3WhFmKUbqv2PXXemSNFo6djNxxajeWfAncNyZyZuFgXHzYHhmbjQiWG7ttX8s7QQwhMjjTcw3s6hLtbcrQgSWoPs",
  "key15": "63F9NdBoq4aRKaruLoqGL4nZbQPznxebLygBcicvPzhuG9zGL3sQDMb1WJ34kLDsdgZ3JgKdjDei2PdKhcpSQzFa",
  "key16": "3QEjocKgN8xZFivsoZgtnferHGxEM3288GzQbLcuPnJqsTUUofRNZqGzpwY4omXrmVRSaxXyvpCChSmvuFRp3oFE",
  "key17": "DhoWn9VZUkPPhV2FBXk75sqmRtM8V8Fm1uvQor3dBEj6EcZRLccKiXvYnQr6HmFCu7oiisHSBhL2bqZKunKvvet",
  "key18": "8KdaVUDmoyLSscUBfLMEt55fvvU6Ek8pzTt7hptgNvEQrfD3LPAUurGraxu5AaJrsGUSRBFmPEHKpH58umPXyii",
  "key19": "39Dt7DVZ9bS3eH9QQM2kF5P7bb5Evyr3MQR7PZf6TsXRtd2E2evGFk1mEvTjqpNUmERbaYhGjnovUKu5GCVNsLER",
  "key20": "3Yf3uer8TTESHXDEnzX5Et3zEoj2N4NyERE28BNCMiP7wLYY3PdoRQAKP98m4peRP6umjGUeNTHhXWjvaHn4oUDk",
  "key21": "365rTLt25yt9bEzfu8FjPSkfnXdH5EMmjMGXnDVW947JKryBsQjzY59HD2z6cu8fBxh1Z6P6RY8YDeDoV9DbH2gg",
  "key22": "2rz6PNQFXdUAVKxChUHJS5GM8C1YYftLgxG99d37wdniJ7pcYxsDzX3j9YSP2JVrp1gP8pCEf6FAVrAVNeF9JzZT",
  "key23": "56e7yMfybMnUCaKyAMfD6ZbZw4P9DrgEbvv5yiFVCMKYWMYLBWBJ4sKCCMZz3mtkPhabgvNVU5U2KwQ4pWs2roE8",
  "key24": "5Pb6fPFV17VtZkqyZZmba36ch8WnSNN2h6coZ3osE7y35FPUDmRhGFvA2kL6m2aYs59utFcZpGrokSKrMWiChNze",
  "key25": "2ABpRgF3LKZDeriDwUKVixpf8WETyBdVoBSTzgW1qd1HoEHPTbmjDBayvv22csjFRFJnt6vEgrDiVEmMAeq1ArYQ",
  "key26": "568UfVjMK7PE6zt1sG86bp6tkkC5GS1U5eH1MRJCPfxRL1mGhfd5qSkFEwdsokNqvPGkseMs8EYPG2CaMXcxzmno",
  "key27": "5xLUUJerTdtdjjUXrfTe9UXkR2js8br17X46tGCEjn6Re7NkZR2bzJjSZvyZvBhSJpZYxRmYrSYptApS9FZmJts2",
  "key28": "3QxPZWz5rWKYMpQxmBKLfChHKMKnRZPTaLWCeCCMHVPdR6ZUKVw9QtZt7x3sNKxckueZt8B6ufqL85f7SGhcBYjt",
  "key29": "4pcwxJBK9UcCKFCa7ZwB78LPy2cBdD9C8gzivcvAhKnPdU9ddBTxA8wiQyexsfVNSieK4i23LC59nSRveoNNeKxY",
  "key30": "4wXADoZhvKL4XNnkLDzrg9qAiJGPVqc9P5ggSQMCSe9WnTsWnCXxdMqcLHjkhoZM6eZ8KwZWF1Fqkyy9SJ8Q2h3n",
  "key31": "62ARia6ZHv7jejrNnEiJMb3b2y6LkkQTuDz2LVFLirxgZigN3cmtmBe5nNHNd35WwuybqhtdLzxpp5St1iXpEcch",
  "key32": "5ztNZXXpauk5FNfhQeeAjEKVbeY9Guq7c89A2g3JA1mbyhWXB5rUTfLeDsKTVBAEgCqCH8C47B4povJpw8kLQ4n9",
  "key33": "ff9o5PZGLKka2ZLTwWyq3nMyn1azbTXR8ik8poDq2iX9LZrYM3zi8WxtaAh8XYaxKngjMeR6GsALtndeMvnx3YR",
  "key34": "2Q1a2jUQG5P6cD2Pge8P3kbWoZEpzRfVpmLDAxirMUcfyca7ShHgKbik6jqpa4g6fKVKDqPbov8J8YTmyQJmhpKu",
  "key35": "5hCzM3kWPU2EEE5hGeQYcJivaF1auME8aytzeCKaYQSV6wq7B2Chdrfpq68PXn98mHsqvWw1qUQLQC9fMK1GKwZi",
  "key36": "31nXR3pjM5CwcwzKFY1zVzuSXLbUdrocnVPADPiqPYnot8vHHfoa6VZRtx7H7U7F9kVvdQdnWirZYM172sNFadbm",
  "key37": "55PM2qCWQ5hZSL95ndwMBdr2r5T8ZpFMBiFXGQovnCswS9j36TNvWdfRVTs4rHzsbG2vs9yqUJF2MrpugtiGSHt4",
  "key38": "4DUqqioXbX6VS9wiq7R9fVybGoRp3sAQuEYG7V3HN77yMwonFgabUKd845b8FoFUzjLBB5K7BXLi7S93Wwf9AcE2",
  "key39": "42BDv4TwpcxViJAsHswy1p16ccPAzM1hdRBoW4bm41WsBVnYfPhXgFRgkJkDKCdGRQSFzd522gXbYVmm9qc5eMnY",
  "key40": "33HQGs9o4Hx2p7CvrgwNhCPR6MLBJe5rKj7GbyfzZ4A7xg11ayoPbGjTJmgT1D96MpDWwFg75HqDp5Mn2ViNMpri",
  "key41": "2kvFBbkD8bYbYoAcg35nQFzP1pjFwEXXtHtPMuFFbvLzrbAvPW2jx3pFjWfWLxPdn2YYN9vc2Cq2kK4o2FJ3bRTP",
  "key42": "52AMQWVkYUsv3uFy6xK4b9YJ8AuGCzfK2PkqotXSFcjkvs1mQTeFQ8dY4WWxrH66jzt5pCU6hrjQPkSY6D253Ybb",
  "key43": "2Q7hZmf1hk2hNJbKZcQ3RJEvYbL49w2kV1d13RYDVjJ7dexJVGxKUaTqXjvq7cgLdJGNKihSPVntuUjEHGETBu8f",
  "key44": "24S2isRdK6a4tyrauFArm7EtyM6iLHpppzkjjCnsWWBVdNUSUFWP7vPvRxt14zKnNdgCEwBBscw1mSMQepBXvo6Z",
  "key45": "3QaYufTa5uae1u35F7NYn24Yj1qD1mYCMiASFV8ErxHVxZWEVndKkpdbqN25ArX62168L5LJ8EpXbsKfSc5P1M5t",
  "key46": "YSDeGaCxW6TwsKJ551xcbeRBwgrFGSimo54SjfVtEhX29CCMUhhTMeDTcF3ftfKHCo5YySynBBF4BUQfcnbu3E8",
  "key47": "5ywT5GnbrTbeWgeuSAwiq9918UV8ynAELVtAvno58BhZiMzRbDQaN6b1nFVd4JaL631EvMMBPiDrUTM2QEL9TPM4"
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
