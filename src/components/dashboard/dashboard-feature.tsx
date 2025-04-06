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
    "2WQSnAhudJPxFv1Q7YKboPi9MFnKCjXa4afSjPU6vs35RopGDzX6U7uXuJPEhxDVh9wdXHutkEgbmohc36UiK1oL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J5ccwjitvcRcXkfJPFtbYtoqS1SFiVWb5DCWmzVxJNK1K6YH69hvUgrx5RnN3LouoLsKsKZvWGf498yde34cJpd",
  "key1": "4AJNcVcKzTzGaHLR4Br4g45VhPcAbaMGx8aaUWTukGEYzkgWuRFdHg3GhTDfxba75YRG4JJYYiLewLC3DJLoBFGC",
  "key2": "66nAUsiZ45kesboEtSsNbfbJr1fBUhJy5TXv4w8QUCBfyKVS5Knk3xZou32qTVbZ96AUv147vaTxSP2isuucVdcG",
  "key3": "3RxnFgU8MmDMhATRa2PaJjbmycCvrnsPd4VbJSmADcuhbppehS8fSSEGCWjKKvJf9WJk3YaTWZYwNuySmCTcmCTz",
  "key4": "Mxf99nBqpCRcq4DthjhBxinem7p6DrA4FmeBZHGSsMC6Y6hAtsxrpGEbnz6cr1o4XqvUp6wng74iawvNa9xh1xp",
  "key5": "xrFhrS7ZhUD8ywUvPx9tns4Q1YZTBQpw496TqcWvNAjmpRUh7BVa3ZrF5Sm5FjQYwLuNQDigayQ9C4EyJpytQXc",
  "key6": "2GFFA4bjiyzKG35ZZrAscaiog9dXdKhMjUEWy3BE3ETgpjN1rb35JnwTiTtxoheggQTZAFXEEbxsm5dUu3gdJTkq",
  "key7": "37SWALj8K4xUzFRYQStAfxqUGefF3QD7xLxDzvp22CHYVJCRE5oruMDw5Uu5WnbqHH8uVNve3skrK15JPNfZDik6",
  "key8": "2NQc9Hy2K4yxYYYZLQaCkegBDyxUeLso8m8A35coX4UB221bDUvQNi8sCaFVofqaaADmhcp4xmgKw1WUHgMEHD3J",
  "key9": "R3JrituM7qSMWrqYb6eLQ6PN6QbU7Ru4Y3eP6WvwKBru3UjUfayE4n31XVvRe62SFXi14wCFzWbP6cc8ZMNYgDa",
  "key10": "4JwLfYdFbp7CqDyNdnF6TszH6w9Dc878CDgpRbiffUczCfiWXV6aFHSLA3NxVCAX7aMw79MNjDB7yxcSKpyovsDt",
  "key11": "55HAQAt91AAPCvxZZWs2Gm3n38qiyMFjtKLvKGiBvxfkYfnGY12bVFeGCqy414rAYoy57TkbRV1abMvPNiWHQg95",
  "key12": "4rGeYEyHm61ok4qo42rHEV9f7gQsK5AxgQRBgPxu7QeaWZ7DTCFcEGYwUCxPy8vyDSTpLXFLvSLY9LEPcSP8s6C",
  "key13": "4vqNb5cnoRZfciwkVRZ3c7LzMSj4p8M6T5PUqauoiLzbcozn9fbz9po7pr5RCv5cUaAaV9NKxqdt5EDR5r6VPEvy",
  "key14": "vnC8De87NPtom6BaRj7mc73YMYDHEm5BSnk1aC3eEgm31kVQssxmoRd1stJVj2sAkUmReMYBp1WrmjtQvabiq7n",
  "key15": "2Mya9UWtWZvC4TdcpoYM9Qix8QniBJHtpVnkMXgVqzxPnfHiRPrqLNUYhjZogmRXiaVkAxdnVDhPJDNmJTZcZH9W",
  "key16": "BNwMQHFEQeVC6mqxNP4xzeuAR4WtpiL5Vz5Ttewsmu8qdnfZpUndoTpLtuonvhQqLw5poQD7xCrSCUzCoHy7bMt",
  "key17": "5ayTD7Ewx3trsxN7sUbeq2DpfVpR8yijxpM758ZTxmzJzAfjYftHY2p7B3S747zpJFzppBKoASRjaSRooCbGXGd",
  "key18": "4h3kGdL9yJervTzJPdQQdgp3kwm792Cq67qNSn5uDmangdv6GLfGbU8mXNShKRLtrpQZAT1zY8UwvUodP8VoLZfe",
  "key19": "5toWNoJsrqquXYV9rmjUC1dypnZ9FXKqAScGmY5f8FXPzAkgDmqbmkAxUnjy7mCzkjRUGDH6N48MuRx3u2nvYnse",
  "key20": "5XAEwUBogYftPU9AQifGopFh5yz615zQ6wXdwu7mb7aizHZEuRoVXsUWehhfzZLWxTNZoANoL4BSFsE5NEisbcmb",
  "key21": "5cC4tJ9TwrBKifzSZ7TUe4KnyZDV18mzhtJg1EWXKqtomRSocoRNiQqevbPM2JFvxmbVaT1ufrmUnPU2sKaGDUHU",
  "key22": "ApcSvNSWpGgspSMJYPLxwWWMuxZkBZAt22fQekT6JgrKt56siEyX5TAE82xnQb9NnfWkek4V1CBXL7FcsiVPNHd",
  "key23": "64fcD5QZuK13xMKiVbXtNFcSuBjvR9oeARJKW3bD3wsLZduLNjXendcjuof6WASywBunSvzUUg6TvrDuaoXNUqHo",
  "key24": "xNE2PEmchxbAN7e8QaFPr7rC25yQosHtZ5pu61pupuWJqftcEQsL1BuVT6ZwifUWruh4KJLzsRmcCmHcjJGDg5E",
  "key25": "4sQ6JKTzp364XUmoGiBN9NQg1Bz4drj6NnTyh25iw3bQNLk99kZ3AtADGX88HydGqEbXA7DFssNZWQwW11zGdRRC",
  "key26": "5gGP3xaxbVihxqFZCXNKo4VaCeCekxrnN4ggHAAxxvq6iTrxieb21dcPhRDeWrwxNJtHiyCdcxwh4VkYsk19XTPD",
  "key27": "2tPAXQXY6ikX5Lqxr8VgAJLsKYW9bakoX766ibsBUiiPhUChZ6mZn5Gb1ycTMjE9z4FcZNxwqYT7D14bQrp4Wv52",
  "key28": "5cHBK3usZAXuW2XwFP8T9SN9fZitJb4zCohdyMWmb8QypiHt9ixn3jrh6FmpQyiXqPMRBwAuqZtNCPNw6eHCMnkr",
  "key29": "5ASVnfbFSRq9bYcacCKCjideM2C1CP6krSmszoioKff16pYXU1quMce8JkZjvNeRexPK8ihqkVDSqfmmiTuiVwua",
  "key30": "41B7sKy3H6cNh7aM839pfRZNiFd3kvmjVeWU2hsTnBFQ76QpqSzvdaAXHa6XQnRP3j8DfoK15N4ALqbvVYiZims1",
  "key31": "XhNyNDXMJkD96ZZ6BDyiEhfYSrvAcjijjVdi4ojUHUuSEzhwgRdgKAjDBY151teqG4dwDNDXrU23QPcVD3Y2vrf",
  "key32": "9YubNf3pGYqbFdJdLFgAo6djzoVJriwHjS5hnQj7SnZWaDksmofFKB2wXVL4ymaMVjccmqbCUy3qcYuMtZM1PcM",
  "key33": "4J5xeXTbRh2gdvsMeEBqWrf2Ykj5xjykGhSoU1TTXEJ588DcfovYNiiRaWR5Ew8pRswC3Y1eVgJkrJv4cY2sWYVb",
  "key34": "5Rijk3jCdDLgTzaeV5zLK5QqXfZGRNEKtMbjXp15Zs9TvFQGp1gcdhDoyqGK2wogcKdczYBPs3zCuuCJsnvKoLnV",
  "key35": "3mMDQC3gpYcTnNtdwTStGgdYNKcRctHmKYptkphJ9CSAXzhtBx57dBMBwUpTApmAe1koitHXuZqcHF9eT7L2bmCm"
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
