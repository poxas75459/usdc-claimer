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
    "YC9MNeKjYK7Zk1y3CdU14ykvKXQXv5fksxcEHhj5freGdQ7s3QayyRHdwoN99HQGLEDu6Sn8ozGg46ixBtvBg1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vVwn2aBQ2qfAT5rJaSfNci5iGWFCBzBB3aj2k7C8sEMNTgQi5CdB1DkeQ5yQyvod7a9feCWrt4iLhP7y79ifaso",
  "key1": "uQjZRzdf9NKS4L7MFy7o3HyEuLjsRFkfm1wws3UBDHuuY3nfhmyTBYDxumDefoTQ8YpuqbzQsqtdKPrxueC6SsH",
  "key2": "1yuPHWJwLJL28QmH8TvQW3XRPojRmaHa18KbQhD8nxwrQP9vRUW4XzNePE1r6pZZtC3X2aSpciRSgHYxiB6Ecfe",
  "key3": "5W5u6nZ5tREa1NmGBczT5jcfDtKkfyjHamx6ePYFCEaTa98PYWeweq5Nj7vkeNmTTwA52YqapcZR75Rj44CA5jYJ",
  "key4": "46BAt97JXve3yBk9KQkCaNRrZstqgMBYZqRRN7WiTbsGGHzZPXmiyCWTM5KFL1HDPSveMu8TQxwVn8fdyxYNHHq9",
  "key5": "AiUhjFLXTZqBtpBqg6Z6QowfiBu4A6njXK9qJhLeYkJrm44RAaS1t39UYV8s9xoQyhrB1gCKfe7SGaPiZYrMPum",
  "key6": "2MkD5qRX5uBFuSuKLai97LAt5ih8dutSK8N8F3eF7Wy83j79wVW4qa2Us7PVELZGWhvqiH2FaiKE8iAhpanGNGkn",
  "key7": "2B45fB4C9CZMSM32H5wzrHkoWRNqcBqzmGxwM46uJ94PY1yZxDxSBf96XxTnHhGaZmPfpXuTH3CWLXqZpBMYz3CD",
  "key8": "2jZRJufy9tanwgGENH3e3M5oZg6umm9hfp88PM9FsbmfaNGC7TARDj3QEyZP138vzDGifDVyYHoybyVYaNZqB2He",
  "key9": "44w76uySyQDcFzZGxj89gCdZyZDPug61MjorGKjQAF3KKWrjj9NdomydRZP36xAL61STAP4BSzPYwsESVLU981X8",
  "key10": "3tydY6bpfsgJTNL4RtLBfC3cQdm7dqGstxMEyr5sGWiVkL9SscTNNodb33Zaa18bpZUUVjEYroJZ8u6jZatr9f7a",
  "key11": "2yuU3AkjwNax4tv2qj9ev2xJHVJ5ZPy8cGkJGaNwzwp3hKTPnGtbyQVQWCc5YA8Q85jie9CCVaDcU7gCMqN36bRH",
  "key12": "389KVVJVnwhEbRi4M1XpcFyiCHNnh2sCL2XfCC7LQgNBvpfNn5HrCtPFQzC4qj5QbVmsxtE5vMRDah5bgcGAfFb3",
  "key13": "4L5sEKF5h8mgj9BN9C8wsHtsuZLk3iAffBLfWcYrpebNwk3LqceJqs2dCc9FMPuT9jynJ3M6R9Pu4r1Njp5WD7WU",
  "key14": "37XFNRKF18QBr2v3GaP7vZVSHTTbjviuk7qBMs5ca3iBpC4tAr2vTGXV2euSQDDsjUCR2V3xBaz5DFPRim4mgutM",
  "key15": "39zU8BNdh4HRKbn4r5bRazgDjRWzrSWceqy9v3MFmTR7VXUGz8taJd9hzxzyxDEFZ8SZuXmVKa1bNpyAKUwX6Yc",
  "key16": "gFqif4qcHJXa13ffsM7xcmhJUFZZnsh3fXtvuHSBEb5egJCqqzBhJB6XmjfPzvg4DGFTeaufT9suh9WZKYx4BFX",
  "key17": "c3AqHTPezgTeBSX243By7eR4Dni5GFs2YbyuSUfxratRwnRrMjFYwjyfRMS7pAS38Tzh6ZFiRKncFYjzYtaZPTz",
  "key18": "JGkttc7GJfDPajCUmDkFu68v84NVVdKUoUWUrp9zaLQfAW6NV8w7qCRSXcc3dCG9y7NGEWZduT35hAqjbJdKzyH",
  "key19": "61wnWDHZ1QAbLXzJczDLL3xEtRfrd1hPtgoLoCkSS1J1NGWJ54cGbHU3qSrj8E2zv5FWqNQskjmdfvn6tQkuE9qp",
  "key20": "5cxgAp7okwtCLA2E7Hb35hmgUAFqd3dxtiqbKiTQ3HVFEpp1tJbXjDfTDfarCm8yc5dpWNVuevA8HYvCQTiRvJpp",
  "key21": "WtGDtuRenyZPGQVAF5sPqkJF3D3sNhnSz5G6WfRjbbyWR82TxASfDpwAZg41jQuh5GP6QDgSThjE43M5kvTnyrU",
  "key22": "5HAqDxjARykCHhsSzvWiqsgkRvqN962zsJP33266RAeLo3aZ9k89BqrHXNV7x2EsBZ9Tj3qcj9rHGHtLKnhumjsC",
  "key23": "2YtxFjQHnBkfjSK1uttBX6478LYsi6FWJMYFwXWCWGLfcr5KCxmLpx6Y1XwLQRC3NznKWhMY511voqSkxeiYXtwX",
  "key24": "3SUd8P1FMYb7wjtuYBYPzvsHDeeihkEoFDvH8Bqtocwj3pfg5KKnDQPxxQp1GyVbRAvK2Xqe8heMP6PHvd4Cpd6z",
  "key25": "2daZK3C29NTgTs46eCxeMUhWWLxvRBK95VyEYnKCY6ryTcXMKAEMA7ENcmn1i6V6dzULkhDs51EK3nwAmEGJZpy6",
  "key26": "3zkjHKifZFa4SzrWnskYCsSNJE6wSzFbzqALiKFJn6Q1S2zzvanKYgKBpqtXC8Frqms3bJtAeA3kvFAXRdFUkrNJ",
  "key27": "4F1L2xw3UHoaikY1HwnQ22eaHF6GZfDwzhNTkdiKQdFxSb3RnDsRo1mLnupaqngN2FWUnjjuvPfiRdNQRTTRYsUr",
  "key28": "Tu1xdATUod6hHs7ngBoqTEdnAtEAEGU4ddNJ5vCzC6uytANyueqWSfduFg6KcXw6VEWZTdjGamPnhXoAkWzCgZV",
  "key29": "5KxsQeY9ZoQVyY9qsbqCi1PjXJMxxEXeWZNmvkwydDqX6kDd34ZAwRx3MD3JGGAjd8P7Rjes9PZR4fSKZdDh6P4F",
  "key30": "Mb6fFWttGzenndGvvphE6nGEKesJaXNCejtz2zeAmwSTHqPGcE4trJy3MECDSDQxmfcT65dDQCKmXaes8uRe3fM",
  "key31": "3EzPwMtY8WdQaSWpnim8JiqcJezFYKT9W4UgQ3TdFXvy2tQH53EJ5f2Xo9RDrNoEazUEjFgogsA5ugi74DYTP7jV"
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
