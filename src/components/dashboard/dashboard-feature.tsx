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
    "4ApXvhPomyKyRtSCCESbCgBT9tXRGK59JUEij1Uh3B7brgZeCRJEygW2Tiu2nhh22FjzmjWaXhJ8FLqqqVRqbjAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NywhKcLUZQVSn4KozY38xQV1mAWr9ZCga4UMoCSbrsidQfkk2VNjh9K361jeAzETyJrKjM4hBdoTezNxos1AzT5",
  "key1": "25DNVNNHAkVZzhy75A9caUHQ94LFZ2X9AUESxs77y71hgtWhQkmu3W29F7NvuChGvVnkNc2gBMaqQBAzPqkGXwcQ",
  "key2": "5KdRV3vUiuLUk9Gg6tnEJj4oqfmRkToxhkNGk73wYZRdCofG8wfJzqpmXZwzjtRsYkZYNtGPJBySWM2B9oSvWDXY",
  "key3": "2RDPN8LgLG6LePBpWrC7hkQekuBcG2kq3V3TzHN2crmskKG7f53LNRdiUKrs9UpsmAjsWkH2sdmGBe8Y4xp4gwRu",
  "key4": "4XHF34yG2WpZbzYzsrsZaccswicUc7asUmeNZUNws3igRxhiibLrrdtF2cdKV5ZTwnv8Rg5n2UPu1PxWMoDNNhtg",
  "key5": "2scZ3wSwiuNY1d4pJpxCkN7JSjZz5tD5DzMxXR3umrn7Ky1ahQw4apz2DTdBtb9JUDatdjzCWrJLPSaD9cYwZYbH",
  "key6": "2TEGWn4oAiLNAu88gzRU7d4nsUN3Zxp2JkgtXjMiY3ohWToMrSmRgEJuS2jTcJMzTDYA1pG2NNDEdEBvi24Gj4Ni",
  "key7": "pxctH15zq4ZGztYCHCFJS3z2k49LD2mv4TNttT89VM799bHWNEHcwVEvgYfU7VZxbzSwSprVCh6DJjPHzoaMaUe",
  "key8": "63n2qF3oJf7nr4Z2rXyNJm62ZAAkVoiSPUuMeKN8yBx8Tid78UDdSKd1nB4iMZ8uEmFagmBFE9cMJDbHVWeqJksD",
  "key9": "3KBDfh2nYASC8SGc718j4NPpzpqfSvTF6CeA61FhCuoKfhWL1QhjvTYeYqaxYPdE4QxnpT5xCCL5vQ69amVgBpQL",
  "key10": "56N74Mfep1bR6CPJE8VrtcSJ48NHnAjvBoVNb7dugvbJ6zn3uA3jX1NkM3KeK6riJGau4kni3xP5Fk7bX7F5nSdA",
  "key11": "2BzGjBnusVGgQDH6rA9K7U1F5FuLdvYmtZszNfyD5YYyKoy3xtiw2nMcFHpdMiYikQoKSP9o7NDLZ7DcNkUsjZ5S",
  "key12": "4ZBueybgYyZrNJp6N3Yj8CmTUxEreQPz3dkgtsTSnM4HMr3e3k1nBUT15fV8PAEAEuBt6ajRo5cG5Rh2QDpNpSmn",
  "key13": "5dwHEEnfmYT9qgqFnbDZq72JvQ8zedq5gKUk3VWoWVbSNYhdXXeP23pHUsuEw77aVpPBY5996MC5Z3vUcik4UdGZ",
  "key14": "W4L8KURpeYU2Lcv1VH6CEjDBLrrSgAe5ePuz5M4YsHkiZzEfxxZsZahqXQC4RJYZdxKprAiG6NVDeAbNBWymndr",
  "key15": "5qZ6NEjubX2ipfvbp6EbVm98WrGKpsL2er4dU3veFNuFfUadwdEGytP9eBCuRcGVpr8kkUZwSP83cgPrnVrVnDsK",
  "key16": "s5To8rWNtfLJgkApjYtg9hFqvD4oRqYrDH9HXB9YGEHMwg4Sb3RxNchCxm9Cpjqmwv6WsShT2K3E3D2sQuALYVP",
  "key17": "2A4QP4pwYUfob8bAPH2J7aqs2Q8QBeef2g6JvyfngWgMbS8WDAoXPLib1MRKmLWSbR6oHxPwqWRDYth6GYWqHJHL",
  "key18": "5JpZ5BR2v1MqJmVC56krKAovkTznE65nTHLB2tc91SjFikdUa1pcgMU3Hb32Z8UdV4naCFH8VsZ1MgkiGbRdzoCB",
  "key19": "4AXQcqp5hTq41dTLe68drf7ggrsWRnXdsTeqMZPASRqRmiaGbxMQ5zGoHo4DJLRtzCd9K9ccwRrCuHtDJpXtL6Tv",
  "key20": "2F3ezjvmxaGLHefd9pHD8mq3sgZqXaUJirWvF1W9b3fYh2tCRZFt98U4Wf5iUmTFdbSXtgdPfE5YKJmT4MUbGoGx",
  "key21": "3xWwgeBDjKY7fb3y2b2FqefWL5gWx4Mw88HQBRjGNUzhzEF1LUSsCsUCG1shx7sT4N22ejNMbwJT3F8WZNHvCQKC",
  "key22": "7513FTCQFghqU97SGEKVP17Hh1efxQpjpWq1xk4nB5eR3v66eD9TAtFMLEpZvRu18PyxmhZau9pxPUtm1Rqo5Ui",
  "key23": "33rY53irrkTCz7GQ6sFfR3kt4MXRSa1ke4YkJXS4pMpr5Dt37E7qrenZW7FLX74jUXJvs33MhYgmtNpFw32QG7zb",
  "key24": "kgKCNerGY8aPE58RZg1jg6giWfdjYTbtcTk5KMNC6C36atMNQViBKW5UKnmZcWaqLzTS31vEivM4GxFopLAMBLt",
  "key25": "4j4VjDEjMVvkgPrfCfmM2yotEC4hQML28veQhAF9zEMp7gaZHEFxf6vaFF7gu8Bx9NFFQavwW6MARpvBA4HifRGU",
  "key26": "2NfDsPiLPcWKeWeQZ4kJRek5Rbi3VUVnMwyQqELBbGssX7EUFAJ6cHnkNBhbf6nh6eE17PT6UDiR9eB95EG4FVwn",
  "key27": "5AVw2428RWdSsbeSYkrs5GTfndSu4X8SaGNmcPyJrTXbVz8urfKSdRpCzqJ59Q8dAoGuVRN8hKYvYp4E9jTpYHJC",
  "key28": "4CnewvtfjWmqwZDWVyi73bKpQNteJ6DgeLMBgmgGiPD3aZkMrswKYa7N1kZoeS6BuBaxxFTRSDyVvBHFc7PkCjzi",
  "key29": "218kyWabJCBGtwF5Sd2ZNnTpMtsEFdWFsRpvBihMDpe4F7RNtLnedTib46xHBrEpQ7Yrpb6DFTKX6zmoEzmVVEhv",
  "key30": "26uperpxf2rnwgAYuQf3rzCTCzNKEmNqs22TmXeuMZqtysDR6tSr4PpQxfem5e2Tc5u2DRNyabUihKpFK2qmAUcV",
  "key31": "4y6chfb9ELp5g42V4hQjpF3kKMSzEV2TwGXKnMphifJLrbRTNuskvY9MghCW2fM6cMsfwQtoGFVFdJ3CknsTDCC1",
  "key32": "4bZdUFf7ke49PzprSajdhAyk2mW9CUd92fw8b8b28FhRqzGtCPw8BSX6b6PzxrNtMi54yiD7aappz88nah6f5hoU",
  "key33": "3cdfZR79yJbrLDVLRJmGxnHe4ZNaZjdoucumJQ5bGoS7W1jBfnHMq2UT77Y2rzG6L7ubCbN6rYMSRfSGgUWgvH7g",
  "key34": "2XYPYAMCc9w7kJgr32JnbCnJQ1QEH6YADm2nTKvjuc5skXADB7K4qFaKYCmHeUx8cPXbSQiMbN3WNss4aAGMSbBr",
  "key35": "3dvazuhzKj99mnEUN1d7FL1Zrk9c3np8HxjkvrmNoJbyZAaATaXtPEBTzh18Zcp7D1w4pSuUGYcBG2xBnEtjcQZd",
  "key36": "4Fdsw9JSY5uukY597hP9NN7cTM7gWZN3q34QBDGtYEer2uwYrqxG6mdyA6LbJrynnCVb4vcHweMvo1Uo8V3tH84Y",
  "key37": "5prikHNrYzqqhkpcNcLbW4AfKZ4hMPVX2UPLVjxA9QYdCxT87SjaVxMHopQBuwcgGV3JSBmF3wdVKcw8Jd7UNKsH",
  "key38": "SrHZuQfGnWMzGoY8cRQww6EMjUmcxYUmPPKMLtH49vA5qUxKNjBKv6R5y6Nka45VFYi1NK6QE9EEB1RYJgwjTwa",
  "key39": "1EyzGnP2LqDGCyhZqBJHogFzY1j31zwZRRwFU46oesnbJMKpLbC6afkWhsAyQvLLVk78QtUf9VheePHFEe2Da2w",
  "key40": "5APKjRWCNLfb1cVPQ3gAdkcJi4jPLb2itZzfeZfGQPKifeSSmeRnHWQaHYWct8pGKiJWKyc8qULWwMtE1rec1dK7",
  "key41": "2mPnWdTVHcS5GdY3CiDG6HWKrX5zxGnurk7Xv9Zq7PGWtr484ECny1cA15bLp3tg95m8xpZpHX9B1PJj4QMpFSVb",
  "key42": "3Nm799DmKFWvJHLTy2XYzA2T1wPf1ptfL5SD6MjULHRBeNQAWRXnDUbeWWAvXk3DMNWET5JUXrR91wtqWoKcFjkW",
  "key43": "2tjcqP2GRtVWyLQraymGK2S8f1Ys8w4Tc6fe5AcUsr6Qg1m4m5jg5F9Ppg8T8FKNWSHVRzex9yyiYeWRHwEeeC4K",
  "key44": "4LiGQahieh6PTTS1sZfT9cchKpdHXes5i4siTWwtNxG6JZJdvpesMLwBezMKoM6VqgjZjgpcr2wumniwL5avwZKk",
  "key45": "3GNJXMJZvPatRgWEiGRc5eVxMkN9PrsAzLzGyc47gL6RJdfRtM6jgczAynT3uDt9Uk4buyLVeUkxNokbufHTTdFn",
  "key46": "wi1RuN5N66RQMsx2c1ewBMZh2WzUrn42A9kDwzPZ6K6RNj3d3DMTiRYs8hzZRd6DbzY3o6nUz9W3rwoV6QmEKFe"
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
