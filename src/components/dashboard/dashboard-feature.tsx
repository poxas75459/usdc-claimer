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
    "5hJC41oXK8X3DWH5kaFUVG76tykkyMnWmVm3CH1mbirGLdqyCdHifNSXYqk1Fyw4D6UKhyUJRvyZEbpCSfEKXZSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27XLxDAoFiCANem6Pim2onxbst1TNAHcLDHnrnQZ9ELb2eJpdNwPpx8JfdvZcRoef6yWnP3BreKajodZcZe6Fnrk",
  "key1": "jwgzFdJkrC6FFLNiGv8qf7eyfh2QUeccSbgsGNxhEg6DTzv7gCVFsPeCpnHM5XtHE5SQFLXJVVcMGrGJTjBM4nN",
  "key2": "5MBuJvZyobhggJqniKseygmqyPWxp5oNQNVKC22DbFgHgfcwVXrqh6KyB9A4qNGU9c5bybUsnKyJvbdh6EZqLqg6",
  "key3": "64izj1yCSiRwjrVfkfSUeRYxo8toS8TcBKptdPum26byLJTDFjn8Ts3N9eT1dNQKpXiHvUz36UChjLPn92tFzadx",
  "key4": "4Zt9LAHpjwoF4uTxiEnur5udvdgm4YhEpQUPg9Vn1avZMGCdHk9PMx8WCCbs8bm3SWwE2wrZWjVv4ANUjjHSvXy3",
  "key5": "4Rx7iqX1NzD1YzMNriaDVhL1eLWy9Ek8YpfvTS1tpvGAyaVdNQzZF1B2uwQ5mjJT62TpxViakSGTETXLxYXnabxF",
  "key6": "5R3zqAYnFZmsahxvARTfYz58RvvMt3pPZdyHTRqsrxgkQ4evyYUiqFJ15kBXEu8j4TagANntFjjaJwu91ZYDayMe",
  "key7": "3VSftbXRZSq1zdiosxDUetkKSdzvM76w1uuqvfFqZAjgXAG59ydii6SK8NjntLZvMbodEQFk2CYU6c4NCypaiwZS",
  "key8": "3vezf3kmqBWNbcSdTQAJEb6fMWQ7WfGefpFu5naVFSdvg6nM6qNKTcj9PHfg62Sx41Yq74c56L3Kxdn2h5fjCjnS",
  "key9": "4gJffHZsqjdDcskn2s4JM3vaLeG3XxAYPaXKJdYaAggPbPFetRm4GttwjrZtfug5cJBc1encPCEfCtXqZzrSyPmv",
  "key10": "3NZbsryLyhuw2t4kg4hpkKHfEPF3KadU1oaH8eT7QyfXEPBwKtjqhFAUwEDPoKD58e2oQiS22VEwxpsXqH9NsEDV",
  "key11": "5MQV9fkhpoGZpAfQyygsHbMVsCZYBjcLXooB1hyVajeYjVgZW1NKbmB6GxjLDzMAPEYRPZUro8GL68uRbcUwMRfR",
  "key12": "5SpWnujvHJn6N2dPsRe8HCaoP3SvQifXs84jnGGYFU8TugpiuFbE95RybHYHGjGTgQ1M4FB4Q71iiyohWBqCtp4L",
  "key13": "4nyq4mJcqfyiPdWYg9zt5T8FWGdwVahWc9YG76AAHYkmJFLbV7CppNcswFMjEHb4s5jVsFQhjM8eJDin3rTrLQAB",
  "key14": "4dWEceAbyN34CSQKT6HuZJM4rc4aVCmEGW59hhgaBbCQQr36DCi2Lo8NjXH2dMP9DobsYbWrJfeskcTqtDabK53N",
  "key15": "DBiS1V3pJWHmSatQNehnzShzgqxS1SQfJYeAGCeeDWnW1j1JdQrSui4LAeny5Dc2W9WyDTyPFeo7vdW677TLVPD",
  "key16": "5tdWjey2a1eV664fWESUJ8PmBdeGujSj5udXFFdGA45d8GKpAGtsMpmL2UAEVF9BiF8vUAnNwnjbo1tK1KN8w2Ra",
  "key17": "yQCoGpMkDB1UVJ6sfsFrSbhCpEBy3kLX3HmvKNUny4fnyAhnn5EPSrGr385n498Gt13bMxcta7X3PVyM4uANvMf",
  "key18": "4L1RogRe8uQFXsn1aUHiQb6wWPfHeiE32gh3SLKLssZxjkjMuWjw8mmbrKZS7rzEhyWM9j3n9mNoKvvfVqG4SHRY",
  "key19": "4DAAf4YVLYCnQCkhkoj83tBgUJxeMVe8vR8MkC4MStKJpq1ebHKQCJHgaUbQ55rk3EbynhFBVCEKBG96fLUedENT",
  "key20": "66ynxn5RY8ZSZw9QCUasgbJxzyLsf7yKfshjJ5APT4Vx8MUx2WehnEk4KqT4qEEjk667SoKogh36sstM3rQ8ncp2",
  "key21": "2x97Zo7PokW2TRtmR4DAJtzbStUPUknfQxyn8hPFbrrcTfYzrNgNTikTzNR95BP1ruaZFkoDCKMkPWMguEqfcHBi",
  "key22": "1HwCRy3HNhcFxvxsmxrnjdhjiFcgVrpdDk7PchPLDW93rNauGnCTgXcGYCctN7u9JYMhmrJESvwTy4xUqo7U43C",
  "key23": "2E6Mustd2rKocP1ymwRDvhZVq2ArEHkfwfdbQbNfKF47mjzX4sY2p7ihy1c16k4pS6Lb2AynbcopkBYaqBnHZR9k",
  "key24": "4ysj6uVPqJ1opMqgmnJVTRvZfg156JxtjnMzoxY5agotVeYbHnjjghDGAUpSBerRTj2Ea9BCTr6psHciMgkvbGrh",
  "key25": "3jTYe999KMHhQbLp3qdP9dw17qjx6UD1ccizDvxnUezv8SWfVvsQuR2DWSRy3wfytqPzV5ZMokmnxP6ULY65KcLY",
  "key26": "5ezFJKMT4y5LwkEpvwDBvVY3UUwzFP1N9AdRREYkTRicdcYbaLiUGmy7bxMFNnCFrSMPtmYsT5pGzcU2gFNhQKJp",
  "key27": "2ezSUN5h8Qmmej5wCoynZk67FmjT1zcJ5CBLYzCjX8otBhqq9RnioKpqaGc2wv5aZn6Eo7XBgDiwP5EttTaMCpBf",
  "key28": "5T2ZScmQfSZ1J1QofZDqA8BeSqEoKmpZWrohEUjaq2HXJtLfcdjY92DUbu2dLvbC6yah9FYXMF6zcwJ3Bg2dyXCD",
  "key29": "3hUGcRCQ6tiVoiyYvxw44uwwTQq9oFUE84ip4gKkGrS7L9nYGmuAKgoDr28WUi5iWALhG4xD1zq4R2uCVhzzXJVB",
  "key30": "2bzZsn19LchYpx1EhsmehR9PJkXsThkXKCgGnaYvhDMHhuWEiVdnjUSaDiXXPhkT8G1GfKXoviUPH1qpGw3jospo",
  "key31": "3bt2og3a1wwyjV6hfrthyphPe8wTUvf9XNUAfpySQqfy8GYgzC2pEDJjsZeP1wy9Nn74GfWULjVk5npWdLiwFew",
  "key32": "4JMgaSM5vTHE23Y8pHD8ctiXSo2N6Atc4Aoqq9chgsGXWuC64tVxKW8KPPsvQEfTuEPYvAavEYMypRLf7BKVjaRu",
  "key33": "2AMeqcTVr5oVBRwWwHC8RHTx3CMFeg4m1pmko6QbbUzrMkWNvmJxsaDEkMBmp9KicuhHrjcRGsBFsqnzGSBKtWks",
  "key34": "598bju7BLRNCdfirM79NZ8djxt4DcSAYk3FGVYyF44e4XxyD5ifmMe2HPhkHuWfH71bvESLQKUexGtHAaPYaG9Df",
  "key35": "5CbZxuJPxqRPoDzoirhJPGgTEBFfaqYopGMSMhBVjcd59wGBJzUUpJ1NDt7tkHVNAeT76WmumtLKaPmF9HMuh2Vw",
  "key36": "2zrsTSL2Tj1h3QnpVkmCcDs5ThiwQTqW6hk3KVsqmvqPtqdnED4cfkJfBEvXiK5hh9HjLLiNc6esPwSzXrBKvA6E",
  "key37": "DTQ8BmYNQL6PetNQw9y7XS66k9wQe9ZQDzoGZYE97nhxU9F4vnLr1phZ6qm14p4FSUwqeznREW7EiJet3VzkFsK",
  "key38": "WoFisTBGP2Yj6vsPKeVdbJqrdpSE9C17P4daQa33Rx2qQenhDS617h5GjAj7URZSyr5r4ZPXHPDfPBNWCzBV46L",
  "key39": "3X2pZ7QNSPSLHoLP6bVHpQ1HViEwANbiLdGxMRmrnjkq9pkYgYSb3umYrHsBSRNzqTjs3NBN5VX5XFjJH4raHJx4",
  "key40": "62dRibJoVouJRRWyW3N2DsJcb53FuGbJtPYnw8r14j83nfJeFbc3kGY4L2TmvrXHYCaf6CbfDJ2yDvWf1Ti3LJVe",
  "key41": "2hZw74pdB8N4Pb3n1t1fAb3Rp9guFxciDimySd2hGZXz7chg5bRoiSrcj6TQjgXHuK4bY6mAwC7fQy6mBNhPUmDs",
  "key42": "59wABhYNTacsyEujEyq22KWueHvx5h8o7A5M5pYztyc7k4eNj8RxQaFySdwvhs7jibZ6ZM1LvwGiKPoscYLD5oJZ",
  "key43": "kNbcdqjZoLhpEc1FTCXUuqy7WhJtyLcNijr7g9HXmQaftzNtkR2nLVj5hnaZQehLXoRPFvuTJteWREBokZ77afs"
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
