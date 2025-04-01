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
    "JsaA657Qu4dUGonfsGAYmDXQ7uscqS7K4KTq1wdibHWdUjE1QAGFF5rnpAhzoZLk9yETuyZ53piAp6gRyBP8dZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gYo5zsZjrUxcMnYAHwmdrfRxyRPCNDUqiThMVb3utEZgTDoYWKSGaGMtpnKNdFf6APVcjn4xnQ9tnYWRo65GdkJ",
  "key1": "46CixDc8DB3k12URvr52j6KVRWxGRBCMBT6QRctbxB22H8UUbPPnPQR7FokDqGzoFZAnewaMMYAUa6dFLoRffdbk",
  "key2": "4w8AwJWoPJqRF7fYFbjj7zR7GRjQDj2dEJdzUBtr6Lg9fKCbrmze3t6N5MMnvG4w7GhJeQWgx6ADRQx7hymyvL95",
  "key3": "2j4nt6ArSZXB8FHhZtdWTavjJRBcfEyk8B1EiYnTxQr2o2Xjopo8TYxwVCRwJzpEnnnBAgaFoi26SbLK4Ce37ymK",
  "key4": "5UEAuRdtek7zQKeEJNoZHDXyyFD5hvPkkWUx9gMif2yymKQcN4Jr2t7npUeutF2PBK15tYgHgXJmeDPBfmxz4T2m",
  "key5": "4Sy6NJnLcaAr3McPQvSd2FBKzJiX4AqzPJnvwr2PVuQQ74zJmhTbCTb9eLiqvDRRCgcHkr43XGJQFkFJEtYE3qZ",
  "key6": "3gi7vVzvce9JWXt6PMpi2dqeXmw8nqsN4JaKWR9bSkfwjxpyqTMYWaccN6a6tKb1DBDE91UyoeefigDQLVxYKMbx",
  "key7": "5UWEPVPcjZjR4PJpgKKgdNEjwALakSaX3ZpajKxv7WPikHTfzzAYKDZg1GWMwfMGF7pCngWtyXjAJSXr7fhMXhau",
  "key8": "2FBhkY3RxTrTTQ5xkX64wBP4bGcEK1CZHvd8r2KnWrnHmX37GwQ9uLJWvt8Ufz6pM1qFQnpe2QyiPKoeXcfu4XJf",
  "key9": "CNLF7fwBk3rfdiKM5d8n2eeRytuTnxTpmP2BQKHFajSQKw9T3MyvU9XJyvCPeSYPHB5DQ324WZaAq5e1waVTHrx",
  "key10": "Nehw6Apci28xxU3Dct9T1aiTGSfu1fjmeQwLv4ygCp42xaehxdxiWkarFX92EaLyLQbvpvc4eF4ZBk8CNhq67fB",
  "key11": "3CW6xvoGqmH5LAoKTbVWdxtJxLp1bcMhbKCkU2v3JUJrxEnykDxZJCX8pH3qYmRyE3QjfEaada6v18y8oJz4cmF5",
  "key12": "5vEcGQdUrDcvbGy4dmiN5c5waxVT6pZy9opNaw7JvcY8tAqSFqQYtAuLiVE8M4cVKDFAA33AeueQgaFyvW6gsqFq",
  "key13": "56gWi2D6YGxsmF9czfHx3TpuUu5J1tUQamwZzspx6Gf7YphEBhkiJJL4SQVZvZ7dLN1cgTKiVr9zCU9eRaeS8Ezv",
  "key14": "5gXJcnZwYABaRbY5bTYkaNii3B1781q6MLmYUNmc6Ktnt6cAk9YUH41MrP3XzVYrixyMff8Xkawc6A4xhjdkeN3R",
  "key15": "3jkYnyELgFsUPqhbJjXm8khv3cA6WyZmuX14EHGiiz8MVMuQJhtfNHMgc5CYeEeZEwi2GTpXS5NbpspsmfmN2FBw",
  "key16": "2RyjiZpouqFg22t47M9Sx2p74C9b1EATsUihBA8kYGnuPkMKqVt898GfGbmoySyd1gFu6uxk5rEgiocMCYw4qGn2",
  "key17": "2ac5JSGEXq3FXnZzwjZX71SBfzs8wfuHNunrNZuY9Xqy4wRyqA4TxTayirSkt22SRyVj5ecpoT4ez3oAD92kM8px",
  "key18": "3UXFjbJMFKRt5pT53XzoMo8B5q5moAqJcv6veJfbrzqw1KXrU1bExAC1xTSuGjpgcvh8QcPpaFkGa3N54EwSn7YB",
  "key19": "31kUiTihFYJgeoqtdBeCHkJkuqLrt4jQhHtBZfYcDtRefH7qqHbB6SMqDC3SrNHh2D14ib48k2y4RYt7gNi53AhE",
  "key20": "4WYNwSMfKoVhWeuEYFeVSQ3XRGUiLLRaTiaN3mSTfuBD7AW9SyuFSgYPSVLNfPxJyorxdvr98znHKboX7grLcWJd",
  "key21": "5ALrHZFLMRXAffdFAt8nzkV4DTVTpkUvuKamktHoTkNdytVp2rH727qvgB947z1rzTn7j9hWzRXdd7HrSUSBucBv",
  "key22": "3yLyUhZune5UPqv2r3QDkMBeAa7L7NeZZ8yKsVxMLbQfWP41C3f8TMkze2QqY8K4yE8yXbvsA1rgURxgQEWNQu39",
  "key23": "5MmYXAPE9PLWY39pxJNabZHs8pzuNjmZoZcxqSD1PszE4GK9T4HHAckf44wGW9p8EkTbpa27i3hyKJnp7xbsPWth",
  "key24": "2tGLC4Cnth2psQGMRSQED7koQxxEaKMoYmCMB68xfpzpqjLJHTmZnV9eatxFKYzFBqVwuuGxs5hxj4VgDmFBvbmX",
  "key25": "3FLZqp7BBxZZc5oiwoGnpdb3DBfAQ2trpgNMPMYKYWVuRkQuVSqL8nhr5UDPaKs5x3EXqMethXVjAMrCkkjoepxj",
  "key26": "AfMBQE3p3B4ifWprXcsJeHhuWQ9RJbE8eY2ochaNJCTpwFGKxZGE5kNmsxRhhZJciJ2CEzDVWwVLwCnM45hpZ14",
  "key27": "3W7RRSgFQvP6YSSc6WvebgaKqY1pJvor9vgHy5ktAP1CvnxJCVqR99aJnTzhJB61ng1WDLB3N3gaesXJRKZbLwfs",
  "key28": "2j3dS3CF4BgjmuevJjiXHpGV8D1PrBsFkPAysSWF4HuDXcJZzt5QTjSPiihht46bWy6K8vKqQUkzGp2uSDQ85Y6i",
  "key29": "5MheG2X4ArMwXZsUHEG5LsPMAHaVoN45sZfpTGsDtrTe7ASmQoZdUDqusAFS2MaRsSYVjVZdjNMCybtmeEjR6wf5",
  "key30": "fWUCiPbHgXNu1QxHV5wXcjuQ2bkAJpuRab5caiFGyfiRsZ6VkcJY7a99XFBYw7WiTj32GoPxKsEqstGBnGz64LE",
  "key31": "61NGevRZotUkGH3b2FjkGiMFD5Wb8r5Aq29KY1dcYuu5nHiqDNdb5aRnAapdsakdKQZGAHXM7RRZQDfs8ey6QZFF",
  "key32": "59GfqWHdA7hwajgP9gn1sToFBv8tA5nYhwMKUMKMFJE3E9enBSYYG74JkBVrjXEDmiP9oGeeAmXnwq5tvxoLKnSH"
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
