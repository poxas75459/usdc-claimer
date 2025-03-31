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
    "4udXogj4VYRLZkPDpbqs1gCYRz6hxssivqD2PkW5VZ2Uq57VKF6LaUxsyQLEwrfbrLtsRg73D3MD8T3KiXiJuE7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E8g9Dn9fbLVW8yBb4vL4bc4TXoND3VatnivtQ6uTLbjfmnCzBQbB68z7Gxr6tAtfRyXZfd9HMQUXEC4C3g45QNh",
  "key1": "kGk6u1HoQM4hHM5W8HYCwQw3qhu2TkDqDumH7jZKZEa8nv7Jf7buDAnbG95HFYuNbRz4hXTSndPZUE2BAPW7s57",
  "key2": "4zSucKRPwyXYJCH29hKcrKE2pDRHAbRJaQvWaRgPb4Gps1nrYwLY5KTT8sF11K2A5EnVLktqEoB3QwdbTcuf113c",
  "key3": "2wD3DdPUgNqTJoi7jKcdBgt6BnoMrqm8MkDPJnj8sWWoKqwbSGgXUpZUfFRTYCkaEEFWrsC6XXC2ZoMBy8eFZyWN",
  "key4": "2jvXzdMSnqNAVhEm7J1hcrxppoy11fY2o3FAQmC4KgPYcCwmS9oekpuhMAH9A46iyhfN6gfwfeTi6SdHqBwjicSK",
  "key5": "4vATTFH3VNjkLn62A8gaNZW4HouyZ9J2XhWLNnR1EkexXvxYxuUMbT3R36WGmJ7PkeYng8PukEgEm3hDj6fQRMSM",
  "key6": "2togN8xWaQw4FJ8mSiigbb7JgJbhY4fsH6CKDyuYN4w6KRP8FGszth43CaeS9JzxWvf9ccwxwrXPg6YJYxhiBx2e",
  "key7": "4hTuFTWoHTfumPRvkwf9XBpbtfNVtgpoDij8i3Cd3Dchr8zRRHBT9C7mzctjSvXs63mTryEakXf25FVyAUgEwXBH",
  "key8": "ksyThUABFUyTcnWefmbiHRNrSRT7s1wMytLHWREqkFoEfwVPmoqEbTjb5VuHMjTfo3wfX3U2C878svQmDnJSQPh",
  "key9": "2eFMPeHBq73wxUhojsn8T5CCKZdFj1FU9cUmbQZ3oCxRXjSzPv1NpKyYbj1PRaau97Q4c8oQwraa3PYkm2Bsjka4",
  "key10": "3ZSH4YhQiBUN17xvkY5pZBK4JkmfZjSwHjgfsDf9bnPJBMZir2VVqHyA4vyCGT55UNMPezjiLHbe7PydDgDcwNHS",
  "key11": "jH8aiciC7Ehskt4aNhWomLKeed4WVnq6w4JxM32aovnhqYn9K68GMk6SZHanStfkvoE3sTjZUdZw4MkjDhiU45B",
  "key12": "4d6o1nKXugNMiS8KfGFjThTV3UrAmRsswyAPDapBSuH2L3mnB92P7Ue2uNx1EYFyRHi8HijT4bFfKxgErtYprNwz",
  "key13": "2jy75jmvsC51cb75b749x6GAAzC3zpA5NkhhMJmxqK1BgHE2QY6TwC2E7hKtiGn8cvEtgj36UY7CegDG5HLaPS3n",
  "key14": "4yRfxkqZEzukSvam36Ag2Bvzn6dekxCj3UgJyP4X4nJ72Zg8TeQC9SCwWDErMUynaj2J8mW122qQYwsBwztPx6Sw",
  "key15": "2oFi82BxPCpyXD3U5XZvjtemECHkPNYkRWAWUgpVitjgLeQPLvDvF4yT27GNVoJPETTyQH7FhQ4APfHipQY5J2eG",
  "key16": "2isx6CwTZuvDJKoCLaYsg3pMTGi37fcoxXjJErHzByUrBYJCmJUVPGBwZqprVyTevFDhYzUd4VmoRrSc6fEtR8eb",
  "key17": "5RYCFEQC5bdViyveufhPSK3Wq5ZMjFqguyeXyxiyDXHnQGNK4evcxo49YZRam2YUZGx98C6GBx6YcsbWT4mTvj8V",
  "key18": "496rim2tHn4VGtxL2T8Um431a3gV82CP44UERH19FNzEHYGP43AbMz4UqNw5vqRex62URCQFhBq9GHBmDdsyov3x",
  "key19": "4hPWZPY8ZuSoPFh1Lpj826GBxH8k8PWBSHcs2PEFytwMoQoQsnBmhRtz9aCHTrWJu8Spm7RNYLqFvbxUCjXzUAdY",
  "key20": "4m5KdMkCatRcNHgxXLkEFNfuzhEyceX2UMT7JAD44We15F7d9G1pjEQcxdPyEUtkkiMQ3kp7PDACXNFATneEe7ef",
  "key21": "2kbNcL9pFKk3FKFBEbH3yScnRusFh9csBNaPQ6jrBVBmVwWMs7fwrhwEyWZZvn4FVjGBeHSmHq7m7VD2T2MDvN78",
  "key22": "R9pbAFNjEPYLMc1UycModDzxDNsoNQzpK3rYJmp8cBnKsKcNhfHRXExrwEJGJrvhiU8G55J617UD1owkWYa5L4u",
  "key23": "2h3cNorMw8tngfyoAAYbTP5kofpvqWFjd6pYY2z65bbPThYCyMw274Q9Jor8pkM5kFE3kxnQQb8wStZj9kfj6mRz",
  "key24": "3UZQz9MPqp2JjE3VMoZFEU8DZBZAE6S9WUfXxFzZx2PCoarsGExv726E1eQH1Dbak7fFRtfWAL4FeaqESaVDa7T1",
  "key25": "3wy79UWPKDJAFhyFzyRf4mEq4QaLaHqBusR39GqkryiBJo7zVM5wfHXcaWzffnspQjReNrwxxEuyHmAFjoap2jPn",
  "key26": "3qqRfybokmrHdMC4bgyAqcDBTJqfDAiaufi6cKjfgwJd4tTyvwYHrcunUNUsJgR4ugdchmcjGGQXKjuNxh8Lr4n5",
  "key27": "5FoXpap63xEkxvokUsudtx8mMNnDLvAhF8fm49dpGecTxZSXViab3Ah2xnghFz6aJjk7E1XZAwoecn8xmWYZuUgy",
  "key28": "4ZSE75jiTrXvgY9drPQEtmLoSqTUmXSGmCtYmHTvR7pS3otP5YdNpp95kDmRVJz7YUvAzYTsdKTA4nkedgUMzmkh",
  "key29": "64y3ekJ2KXBP1JyVqV6PGjNyF6E2ZzwdG1829oZDDRNhSAG3YiegxzvEJBpAB5f2PxkdZoRB6FDhYJhbQYwZNEAu",
  "key30": "5YEJS8cR93yweEhDgsMZWGQAp7Kui4oZbjnLfEfSu8AqeULA5jNJCVodcwnAZxQ7uPSa2XSvbkZqDkfJU7aWXna9",
  "key31": "huwkvvzitKChsjmjtNebghdpdTFFPwkd6bdk5eMvb2ESj2faL2ZV64ziwzdHah9Xz8s8SwZuJGDhBKuJvNSdPEt",
  "key32": "pDkDtnvyzw4o618EtDdtkX4F18NmJbfKnCX9xJtkzqgR3ggG4B6zMmvY6EcjAzTNYJfNjpRrvus6zrQULgB2YLG",
  "key33": "3TUK91gAZozuwfcXKtHmjYjiH6wJ3WSGqi2PACcUaqh7TMYQe96ZxAqPGAjAmRCGdfUE8bUMFJ2P89pcqaJSvCfm",
  "key34": "3vCyPsaSSCcQwFv9k6ThMAwxMuwUCccCn4HukSGN9UZPbJNJi47Tbwy5GrAd3SMzrhT7XLnvAq5A6MkNSe4Hs2VE",
  "key35": "2UH6dEyNb15gUN3QCPca8cg74Toj6FZxpZJgHtXz8WvJTxRCB9naCu57CvgHhtbCGbs8FgVStGvj5VDmzomFCwpp",
  "key36": "4P5HEUMLyVDiibnQnev46dPbchho57Pqdsev4D6Qgdv8mVCuvYXvYf5MTK2rHo4bYEsE445JzVWoCR1YXRTNTape"
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
