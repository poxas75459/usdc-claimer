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
    "2pnxCzpLTftNiMSLekSKaTNxeyHwhthCq3KkUcZcS9qf12H5KpRCUSk7npUWcTwmhq1RPrjxpLsjrN14xo3jqDc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bsgKB5zZpPJhqcmhtdB7LbEv1NCQYvHTN1Yfzt1U832yet9cESQr8r3Zi3qAZSeSohmJxLJ57PC4vUEvRcjJSRE",
  "key1": "ik5JJ1CRUuFg9JEAvegGNhocTFvRUWKNTKYYDTPtUM4Vbt2Txe5p3TvMEdB5Lbf1KviMZ81z1HPpvEKzmPkY7ye",
  "key2": "44RpAPrSbAAFcUhmid7nYdaDbb8ttD177JXpmo7FfLJnktS8mD7qVpwCaFjer9MYyEMZraXDcVYu8RKN2DAbeMSf",
  "key3": "R5xRRsC3YkyAoika4NiCTXjxx3T3BU8dn988qf8idw6DVJPpeU5gpHxHKFdCvunXs5xCiiTEenrN3aTp1RuDsXg",
  "key4": "5AhLhPRWAzX6FXMR1RaaD4UcrPbjNrSgHHfCXVDw3xngHDqrEyeef1fATqhQEEdz6m37ZdH8oU5PDZxQoVBTkVqa",
  "key5": "2g6dpC72AAiWmC9ru1TDCd6zzVJgNDV6Y6BWmybXwKQzeL1UMaSRcpAoRkMWyrUVQ1X9bG1weC2MbFyjM2CE4kdv",
  "key6": "zFxbfxU2mdNDZuoz2y4r3c8gGUMSwFnFf87AvyY3UzkZ7cJc3RahZbafGFtyo5pYVhH9nQAspzAvgG8e9Fh6vzr",
  "key7": "3QRppkUUfkG4EEQzv7yDARGxWMeUVzPUdjMKUGgELTisTkrhuLRzyu4jxiUZWtFrvC8ceE2GB2UXjtKfs5EUpLKp",
  "key8": "5WTuByjUonXKtkKTjppdAntK1EAhEWLmCUu7F2eAR1vyh3z22zUh8tTwR2esQt43SvstG3FzJRhLwhLjs3wFiSEH",
  "key9": "5nDjyDkspSEzrfbLGRJQRRiiwRjyd4fCqXH9FM4RcxSak8rLZA2N8KmhfBru4TfTaSFXtnbVFSLtbKevMZ9xDoMH",
  "key10": "DP7FzWvo95VMTh8v1Bbb1qpAwRaayMomyaSo8DXcgGu8teeMueEMAjr3TvEvfiLmrotGsKW7NMhLTAX9QqgeTKZ",
  "key11": "5yHcAuZwyvnhYXDQxJVQiapccgufbrLkS3AW5L1fxjgNwJteRDnBqUNw6GxMWmmZZpByRQMaEW5ssY2iwEwNnx43",
  "key12": "5kt7GiLJUYP3Q92QBzSu5HYWECP7hXNJ8zCJ8kVHA4fBCqJ1D339PaqgXE3buqwvGL6Eey1GcNY46GUEGR3XL25c",
  "key13": "ebWjFKpg3YNL9cxD5zcxQWBumcmHrEbgc3kcTZpDfLBXLAdtTvhLuTUEStC4rbKvcZShPqU77PV1qKpHCNctc17",
  "key14": "mAjyheRq1NKX9vDswTcv4HbjisuYcUbyyGqj7rYpa7MgxsLnvpdAijTLLRW8brKQgDrDFqX4qcUv1i4NrM9kWy1",
  "key15": "59Miek6nD9N4pH9MG8vDcZ1iw3MqpcL5RqXY2YnMdGQZ95tHq8Q4HjFvDsNbKcouKHyqeZzaeYXUXR6c19jJ4MCD",
  "key16": "598vBNBat1BD7Zitek3kRizX6GMZAEKs2AVyvxD8aWHz1oghf5Dj9SW5vXHR3m6QAbsN5fppw6tHmuq3zcZzkPSR",
  "key17": "49xHpx1f9ndAaxC1JxemfcoR6EprRUy5crfXFDkSAqcbQNZkcHjeaZWASuTPMwdnChAEQwHGkiLryHxu6pxomCpg",
  "key18": "2cAm54XcdpdpgBxKoA5Wu6bMZD6C1mcXHvQbGQ1cvSBFBip4EyZh5DGEYk1uva3Zz3M5qivS2S3sVvvKQZakCdBZ",
  "key19": "26vy3CwLmjwB8tdHpt4f5ZaZsyNsfbUmNfFBnRN7xuvnRXBjjtKdA4hmfJyfMNYvmfJ2XpEi8hcJgm6WcbRYjMrr",
  "key20": "2U6U38Tc2nQ7xVn9hfohj9gd57U72rHziseAZtairXHNNAVRiT8zdnD9yDayep91f7SnXTdFbASGBfCQNBHASee4",
  "key21": "ufuui4KMAjLCg4rRQVHnqsgcLsFL5jfxdLEkogtGcWLNWgVA5kv7AhCu7mqX8pfQmnEWdCZP6wHfXGxWTKmu5ij",
  "key22": "5ecAmVoKAXgQe2gAZCFoLvDnj2KQhEvwGfuxqjptwkdFR18WuLYyMsbesp4mjSojm1Ejx87i6RCQwgtiywpZtCwG",
  "key23": "2BUYoxuAVZTwkx9dwmk8wSFPbnwHJ2ktgKPF9rFGpf2Pa3pLiznEwFFtvjsrZYHx5goLD5RTAwdxC9iPYkWPnFEG",
  "key24": "2sBMNCFfKkCaVj8mXU8shm6XVz2hZaDM4Z9xEf82wnDmFU3cZi16Xsnu9wXTY58k7UJ6zFLeig8vWGZod8WHHk74",
  "key25": "2P4ypDd13Mgi6aXGp8hsitB1zrpFXwsxrJiZwTWVqoBpdyEC9DmTwTuu2s2fL921Ao9fHG7sAnCqNJfELqe9mchL",
  "key26": "2NQGmK4st3DYnCCirxzynDDFf57Q2BbTgGfLUPosSSbeRbDABDF3uHY1xKeQ4hmCYU7Nc7Ss9uamArhbMD3CCa7G",
  "key27": "4QMQrRKks9NVMnxLiqYA8A5H1N8v6m3FvwK38qhcxC3gR4qB1ZYj2w7Nu4in9cVXbhYdRmyo6Stvg4sNpaewJMpA",
  "key28": "43yaddbpFQcd846gfh24fVAf5CZeZ4VetxWhCSs5ePZPcTqHrdW6xhEDLuY1MathfxGdJPro142BKRy9sZf4DcMV",
  "key29": "52e9QPqvH2Y5YQnXjaxaGyYtru98NyByKdLMNZZRGZM6AcSbawVaMzytB9J2vyqkCh7QZJf9Y21XPqqmQX1Z8Smj",
  "key30": "24d9pwKiK2ScWWbUwPvsFRMVQbZtysA6KbZYMianb2nr4jjq8XWeYnQ6zjVEPyX66j15GcSU5HJRQaX6S2piKZcQ",
  "key31": "gDRHCYauoWHpnRshaMsdSnV8mrkTVXwCcuK2p3PhQsB7jqR4MiSnumKDCzg1wkrFBvoCULxm7ugKrtxGNt6Xub7",
  "key32": "3Bf5dxynhedbmU9MkXExMee1QVgiC7Z2pH9LEQG9kBwY5vJeA7Bw25QUTaXbM9NYbqG9zX72vbSH1kGva5ageFYE",
  "key33": "4HKB4ZProD7u96QNk6ZHsZ3ihfyuVJWt3RNWoHbWoKdHzJcfvPHVbiaSUn5fwBsiYz1hFgqgjpknKiRxeCV7SwTX",
  "key34": "4NUGyq52ThXgYaXSduf2bLk3E7nTNuv8CQtuobvNUGFC6zvWGoVVuWkQXdG5hzF86UexwUBcdePDiSZ7eVPxci1w",
  "key35": "WzbQtsgUR37HRjetTa3y3MphuiQPJuYbruT9gyEEFXosSobPoV8MChsKmPwnPf3UqQYG6WKpWEd3BeJm7TsjwXL",
  "key36": "ifWjPMPyteRza4pvEidCToiwrchbqvX3VsNVF7yZWaKmQMjova7wosSY9GNjLHUuNiWEmMn7ozvjV21wzUpP4XW",
  "key37": "31mEuNdv98YR58uKuyrSJGgd348A1ff7NpzFvgtSq67yEZ9wzL7MaFnsqaeSGLYLekzrCSqQ8JpyorACxLx9Tpvd",
  "key38": "5xX4Rk1zC5zPj832iFUwrZh34b21od5TXxXUCuFs3bJctVuVDyWnqiwUhkytV6JBgrk1TepWFmBEEBfyxrNayvmF",
  "key39": "3yvp4mi9MvgHxTpVH5aypaUx9Y2TALxVsYY3pfumuoH7K72FwqAhszHBK5hNC41X4G6nupTrXQjwDeyTDfi4ig6b",
  "key40": "5qyMiC5bD6sfKtPTz2nsViS8ZzJZEBTrJYu6jMtyZtuDYLsh8Q6hMwp6Xep3MfGwRnGLQ3tCHpURHgNwBzQtNwep",
  "key41": "3EMuhhaptadeLXxtv8Ze8u5Zd37dBDJCPmX2pUATymPhhaXguLB8D96nvbsWEHxaCNA4B24HGRnxSJnjesx7XzLD",
  "key42": "2JjeFyL5D8N3QdoU3X97MPjAWNukjUy5U5sbovJxTTSdz5NEhAW1WVjM3h6CfMVQvU2bKYM55cdTDbagdGju1YPa",
  "key43": "643T6GwYVCqWxjy4irAPgkTdhihMfdQhJoeLgVCCX9qpvMkHYZWt5WXkaRBBwzujoq5CKJKJFNVnPv6f33vK3vpJ",
  "key44": "2GtSS2BLMjQQo6tLFx7sPSDnjqfJjAGjLD2XkX8vYPy3bkphjCvUtPSJSMe2tJM7brJdao15hCBWeo7fQMEwXa64",
  "key45": "3i4DMRM72BPawyjKkHhdh931tXeZytQDqredBswnESsEB1hPgCyzVusuZgvWT5GpromdHDymSp9QLtJnh8tmizfD",
  "key46": "2SZP5v9SiY2qdeP5idpUquuSrs1i7d3E8PDSuWRxX6PywwPKhxnjxenEYABHvMGsM46KNrAt7Z8yBAu2tR9oGvnr"
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
