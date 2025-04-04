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
    "36yS2hTdxiFZpPYS6LHDyDpC4kx1eTeK9NJZvkjRSy98RkAPrHmbeYCZSYrrURdNZrcEj8hr3EYDTyZXETxuWREh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tM5nXV7g1atgQPxjH6TBwHATf6MkBxd5HMjXZrixS5y7tH6gYfL1kYgECaFGyJexaqgDyphWqwbPpB2PcTbHq2e",
  "key1": "kQYWuxTUFhEjpF8UqxwuCUTFzXv3yCktX5AvKCmkSm95e6PYBNtrWnNdeqFbiE44Cbo8tDx9px5iAtQyMNCQbch",
  "key2": "Yj6H3YLrVk9u8x18Th9zQDMknboRoqLsAoUcBdZ5VuoQet6wmXL2xcM3EmQ1w7B2ygxvNVz4KERsoUb5mPKAnfe",
  "key3": "7S9dB23wpaCpcNp3wNTZvaZWpaZC7svaQVcLwJnNyB3fhjCwQcmVd81GcBak1aiKLUHut66vybDyGqn2Az5F7aq",
  "key4": "63pzUxLo32vyLtry7SsgkHvtaUGDVS1DhdjVmrRjBX3yEfDMYid5nvjmERwSDxkvkrXjrPeLNjhKpR4i1KHo5Cb3",
  "key5": "Vj5DmkAASkDDCRgFqWM97SJUzDU2gkmxcBc3w7cRgauuUV8WyNhT7mzCrkBp6i6QgML9kogwsXyKxVjKfiimM7R",
  "key6": "2ZrKi3BJVsR4xZLaZCZYxsHmxjD84UynYnxn4g8nVTbYUVT4BY1VVhDiEpdUxegJs24gsXP1iFd4UdVNHECGLcSp",
  "key7": "2Gx8fnce73WzHEHj4KSUUdBzjw2dG411re1BSiQjiqXy4B2MTnJZtCJsUaXKkbFcPrxKAVnwuKdgJhEfJRjrgBm6",
  "key8": "jj9rPZnVNBhHNd4hMVVGus7wk6uWZiwQqxHK6Vg7KMQueFe5NiLQRYzuBevQbCoWJxr42BJT67botSmZ4pCJwJD",
  "key9": "2rKRgV5XvXeJHswMF7vHupGJm6ZHdR4PDxkYPhzJFGMhW1BP6uF2vYBuJHwHBazoDoAH6SxRfY4qchQ2hVEW5dty",
  "key10": "67n33P3QsGZw3pHAak5oNJAw9ibTYrZqxJD6iF697Xp7SKUzGzr4orJT4xg4ReCY3nrndRxRLwokrV1VQkjNRMqA",
  "key11": "aULkstcvzTz7EsYDAgmAAfxjHTYukkpRvrNTFqfFdXry1QDy32hLnJXbXUydx8WUhHq6poGBcHyvrtGjs1dzUsJ",
  "key12": "5q2NRp4kNKvxhiiZkNmQE8daaKHQ23Du1ntiNk7vYW5t5eL1Tcriuks9K4NAVoZ527RNb2HqMaAZuvWGTp6ftBcL",
  "key13": "48K8vea9qA2ALMRhTJcRjZez4EBfJBnmBWaYfVYjVofds8Rwv4YL29jXqjWakCANwqorFKN7Rd6vbhzfTWwdveW7",
  "key14": "3naGgqd2XYXHNiBcwmbGKwPMEhsMAD4vfHPAbBybB8rXnTBf5jGARZ2Lrfe2P9AUdVGGyfnUfW8MeDYnp95GRhAf",
  "key15": "3JbGijuq23GwFXnbBWhM5S7GQv6EcGhaGYUMpzkbyXCi4BaN4sLzYWdvUhVALBGdy7WmVZoEafbcd1TCbMFj1ijG",
  "key16": "3PucvpFR6SjTe46e3zMw3NfC8sTpQmcpM388x8GDQEmqCbiEsCMFYdBGYtcN6qwifQmkFZUxrnBtqSZQ2U5D4sGi",
  "key17": "2Zxi7bu3t419D8rZF2BMXNfuRiJphaJJuQH5pyGukJLHJkfB3DF5yWo3kETK6bHz7nk2PFTU9VoSVSLi9irWapsA",
  "key18": "4NNX3cPEN8hKVasqkkh3AKEL4sZqHBAfob6W7chyJ2DhSt6GPCLyWf97vu551xfYdbcUwatcNGM7iSgCCvizaUog",
  "key19": "vHEoGmXNiwwtBHxJ5etVCMtF4fhkPGBHfbwoccbB6qPQ1zvxk8WHPmYmVzZzEv3Nhx5yscN7CDXggAexYYNDpCf",
  "key20": "HUSzG9N2f7oCCaWCwCdj2v6BgocURBYZ7ydVPSf3edAut135TtiaFJ5G4YciBoLrc86sbevdyBLGJt9qyF59Kqs",
  "key21": "3utmPQZ6ihWTApFp6rgVY36skqDHKJQ1bqx79e7oGAbxwCmz19a7F1nvHJCUqfZswDsa9PqVBZ6TGqfir4et886e",
  "key22": "5r9RFxKT49TtwmeHQhugraZoqvLvMpqn1dUxgN6mY8DobBRyvGTMB32TVrBGyYoFsJYSKAtutcvvAHhQnzWi2VT6",
  "key23": "5W6AuLHTK1kFAXRUPQEqbWCPR24KkoCjQcJJpdn8KLHQodXCPgyJ1fsr7yECX7Z4xZuTcGqHSKW9xXLYaN8VKHrw",
  "key24": "5FeYXBGhtt6uwRdaeUNL8XMbiyG9nAKcWPh4zNUULQuzQoZFq8ogXacrGDRPPSdqs1PBSj2FcqsvPUfXthBbkEp3",
  "key25": "F1DDCGh3ijbpkVLzseLqaYDar8qfk9HPydiM9dMcUrNCr63vKDsmin3x1jKM82SEugJWr3SwkQULFBa3ws7a2SZ",
  "key26": "62vZmhzCFosWv6eyT4w25dLmqqcozMZwTCecXKcui43kNr9o4nGb9deH5ZKigRZrW8Gd2jNAAudWCmbb3Xcih1R3",
  "key27": "2akKuFS49FneXVQE32dbVjsXSwFJLMVJUqiUoLzMsvKHb9Jokx2DXSbcNHY2LUpYcNFrsEDXDxnFPR2bo29hrCLN",
  "key28": "44tZP3bhqmkvnKKceurBb9caTX2HoSGQhModUPKEmvGngBRfMCSePNLdCCvnMxdwEUvxJpu8ZAySSskoAyPTM7VU",
  "key29": "22PVg3GJ9yVb5PJg1qJWio35aMTGb557MuP7LGBheWEhfQQgskLy3GrAUrLg7LV9oCRjGFAV1RhsxBSfLNutseRf",
  "key30": "65Ysx8LXnVevTnSA2YvM2Rud323PpR8tmYLWWK82YSPHzh7v6kuDdDiDdAC6A88icQCyBwsHUVjoutnExVSNhcab",
  "key31": "2Hp5aCbbvo64rtMgxnkQXFusdxTFHEebNRF9WkhSTQ2Wy1yvC3J8nTyfD1db7dJKk5vLStcpxBNWr8T9DKUkhQtv",
  "key32": "4Ss5Jsx8DmF51UGKQrfrU4ECcSvwXKv6an32VKc9MSGjdjB3VE7TqyYRgf8pga1hxyKnQvzqHjyXaxgaQDSJqeEQ"
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
