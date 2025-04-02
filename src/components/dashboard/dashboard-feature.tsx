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
    "ZaDVCA6nS7ooM3j1YugD2zZeD8QNJws9Z6HtNbq7vppwKEtrqaekKSwt2xpoN1m4tDPyGHZQUbpCrja7XLqHnsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b938zYTCrodVGxVXcSuh5hecKv9LvCQhgW7o3vBZeWmwtXU8kawokQRB5Pm9jDjqCRovvkELdMzvg6RGdXViQri",
  "key1": "cu5iwJJ2wyx9UL1tp2MHX1qwNJsBhNfmLVBZy5EN2ErKtFiXD71jU9s5hubjvdZtkh3Ee9DxAGqwdeNfUZDsC9M",
  "key2": "2QcCpeum2tBHuug2UGAC8DtaMzS14jX2seyUtykzkQkQpNvXFZN285kZxL8Smm6Jm5mewxrHcvwSWZ57aVyrrF8w",
  "key3": "4Bo9mHkeJzMtUTVa5VeyauLFB7U1NjRgvYzC7WqzTpUpZMqbyfptky4uZMYfjKQUuR2CeJd4XX9RZZw1YntGUD1C",
  "key4": "3CVxvzURRbWMjEjy7v14UYR7n9Gd2uQgxCbGuGHvcELHmYmhSmYUBNEsVkB6FYLzoc7zKK1WF4xSvhbt4TPiu3o",
  "key5": "5ZRcufneT5GwfYzzBajRFbvqtQQJtj6UA8PSXwAzqkdzoiiajDwKaL2zyJ1MGwbFxFNUYNXB2vasf9FEdFfxS5XU",
  "key6": "3VaCdaiwv2AdbRjJkTQa9nZe4DJua4XKdcXHWNUZmQT6vYRJ9CwuoUsBeNbVZGx3VMkJYcLiu47fPwxfWCgvbvcc",
  "key7": "2hBXWTMYTnDkzGsu8A57rBXojr68qmBddKAmog3LeNTSHxqKiTFobntT7VBESgcUVBSy8n3eY14mmqCMMjYpfGSK",
  "key8": "5s3HWTpitsbdk9bxS1jpregFu7u2ZeJaRR2hiZAvBacUb5bJbsHmN1Hiv8R1ASuvRZKgzdp3RaZqXp5SYpuR2UvK",
  "key9": "2P2cqXoM565hso5Ex8iw6EyRo2kbWzomsTCK9UoeS4bCpFLRjonYSxFDAH87oeZSqXWxxvGvAV4f87tggDpgmbmN",
  "key10": "2xsMyJCA772nakGZaz9Ubp5e7jayw926qzvSh2igyRuFPKhGaivc8AktxKrUjL2ZFtbKrYsoVyStVRL1t73dRcBJ",
  "key11": "26kfvYMqqSaPdCbDAnzpWgA9VUxb45hz3KVsPq2aBsZG2WoG3DniWfgEW522oGYAZt669Gu2tvUb93PaWL5wjjwQ",
  "key12": "2PkW1kyzVtLrmfqRrYdY2H2GaL1WAnEvz9ZRoQmouVoQ2bj2S4jN2U8hexf4L1USbxMv4eor3Lwhy3TWAKnsF8or",
  "key13": "b5xZKWbsrkrLVf48Rk13neye6cZ7HF4yeHRwnFYPvyDwRzXeCD7GdL5jnEQankyuuPkZZvFajz96t3RBCzat7n8",
  "key14": "3Zsn36FWDgpHwEEVTVW82AbnV7E3jjbYbrC87NTwYcLWHJGBp5Dm2SrxR1NFaigp5jzbpRoVW1qV8knFZ45AH9qn",
  "key15": "35PZUzAvA4u8rKUP4gThBbL2auTsD1y1fCHTCPVm4EpeWgvDT4CtAUVkgbBQgR8pMsK8B9fCUqbdZzjhXLvbqQKv",
  "key16": "Kbnva4V6X7F994dQhfoUpVW7A5wV5QMKH92LtTq1vu7wy641axzH6b5Shy6WxS3DaAbrAaBEU6spazkKa1x5uKk",
  "key17": "3ZDC4LJJK2jpmXvZpy29nfom7raCiYSE7kXiHyNxQnEU4sE8VPgs1jnCRcNCtkF7WsuBSZpzAGabUN3T8KNhxj2D",
  "key18": "HrrjNCebG5agkCwod1ZxB8LvHgcbQRDqXBni1FSkxVJMesH1qCFv5GyQRhA5TRhiR7qp6LbMGQJTckBHWSEQoqw",
  "key19": "62Ygz2ZaYqfEafXNqyi3aMPSQDutB3bQAFETBRCDbXJAgNAX55MizVBsxzPVHuRg5Qy3X2m8n8S8YaJjA85RHK2R",
  "key20": "35cj6H1EZuc3oGYYhRq6FTjqQa6XgCvZPiSyJ2ikciWaxtCMZ2PnGaS9CbvTxbwruirqW72EkjXvvnJRd9fnqX2r",
  "key21": "3ic93QYbtk6wYdpnQ789MrPQKoQ3cV2yFuv4NFy9SwDfXCFAygdGZchFZWV7TzsmQTUYEDi2kDGkxFLXXum7BW3U",
  "key22": "3Ffzm9nyPobG6M4Gv3gBpRh6JGiLYLrM9nNq3PYdDuHX3KVbU6hqZKGNGPbdTsYQQphMM3LWJD1KYU8afrLt6AkQ",
  "key23": "3gDratn39TfXHj1KmcvWE8KpEAGTdw6k6V8MTjFiGJXSXgRhfnUuYpVcYhS7hgng5UhdzTYZE4nL3965xA4dffVc",
  "key24": "4EVJvJH6ZeuCK8g5zsmXn88BSj2rAuh3eVFRNT9WjqqfuHvPVFztTf8F2xCWW94pZ7gyEkcssXSJs9oxDXNuDT8p",
  "key25": "3VKqfYWqCjRrRyKQkGgaDhn72CoFD85vtSZDn6ew9Bex8SiFPDe29x7MXZgEDvD2WcbqJDUst3DKDmPC6hb423Hj",
  "key26": "3sbJHvR9UbXYty9H3obehG87CAdz5QC5G4ogqqFMEQLaa43iUgRMrw5ZGxEo2sESudNhmQBvs4WM6woSqg2vH9PG",
  "key27": "4Ee8DhadUfH7czBb2wKiCnsAGdHrc9timkBtnRai5bvT5MG1xKkq3a67tKmahjXL8RQdHsCuP2WDe8fHhXceJKYK",
  "key28": "dw4nP6BnMGaVjVAHpsQaDNrWzktwRwomnqVpANHrTLBdHrRBjHhHSp4aPMSXmsrJCPjCT4gD1fYQSAr2X889qDk",
  "key29": "4WZED6AgJfiiLUGSNjDVMkbq1aoAowLyL7biNN6PDy4VwRhUBz5h1UrCWRSagdzQcg3s7oHTZbkfqJBKLqdK8J8C",
  "key30": "4eW3qAFsf875qieyWnt386GQ13Nt9YXU3c2a9HP865FeQa2Jh4KtsC98VmH6jfZsnpbvYTrNdbNtJ968g9eBhJ7u",
  "key31": "2tz6doVBfBL9E8eupdqXWK6wjQQdKcGAHCYK4JtSduTW6EKv6ZZPCz33Co2wWqFwzsa7TUJtShRAaazsoAcZ1kGS",
  "key32": "22XSWbUc8rEHMKpUsNaSh7M5oWU61US3WsSMbvGBuXpS4kaLF5ta7MBGicKoNcYRDJ6vjBwjY8hR81wwyU2cXzSc",
  "key33": "289TrdzJWkPsqCxG7Y3fQhdE7PoFMX9hbsi8xvxyUwQXcTFKQX83FoX5MkdN94PLqALmcQch1HSoZVVFBLmZWxfv",
  "key34": "haGvh1nFHLQF9QuxxbvCTa5TpiKZTqZKeE72FWssvZeCzZQVyWkBzYXAVbW44qga8WuUVzBjQPmM5FxxUB9trit",
  "key35": "5qCMxhU1iyacy2FFqHeUrMxDABPyuxoR8c8jzF2MA7AR5PcJEhUzw9wWE6R7Mmys6H8ErU939usrA6fbEqJkLiDr",
  "key36": "3mAe52uYvm9Jc2jFAeRqsTAZxoL2YDuyb7mfNAkJQRXthcu3W1D3N7vS2RkhFTrcwihTJSUpjGwCeyQAQiu7oN33",
  "key37": "3WGQTovSUFFrKRRNjUtZKHEydXhug2bsLumuLGEBctKVSWx5RnJhgAkXBiJ2RfuJeVKi68Tbh7qNcyN9c4eo4DKQ",
  "key38": "2277chhN5ARqJChE5dWB3cvwhJQ36r59ym9MwrH8xwrsk7yaFLKt9b2d8jg8f8zddUDe4mULv6DYoAXsDcwTfDs4",
  "key39": "3MGnR9zZULBVATwPrqvmWYcfyyYzBcMdZY3ePrYWqejvMWHH783mkXTiEefM5BwCEzL8nyPu6SqvF79xpMLVbLyB",
  "key40": "vAuHHaKdDVNoLYjVFREJY14BA82WYTH97tYwFt1aFz5kMBGFcqn4X4xzShfgP6akRRtsA5UMPC3KtNPKsTEdHQm",
  "key41": "2KwqZSJhykDTzujab3aWpEjeSCK1h5huRbWL4kH3ojKa4pL9atSxfcbfrRZ9ZH73t5jUMMGfaevsqeyZvkUNxjkH",
  "key42": "AAkPxCmbmdTyWwG7gDDA2cNxgw9AEg9d7YEVjW3WKU2GJdsHQ61mWQaQHo4yrVX5FYNa7qCndZ8xj5zA7xbF27q",
  "key43": "TQjRoMC8g3Z9nKQYGVvYD42rr13NvMFJATu76eMYp2mPbbSVTwEYVhQGvAFnKJN28tMuuqDQpZ1E2m9uHc8QsMK"
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
