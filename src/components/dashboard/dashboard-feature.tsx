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
    "REUSU4qCGsSWxJBtmvjtUHVXzFpXNLhxqrcamuGY7b9yETWVuaAdU2qFVfrYBEAm68HDRWt8SFKAnQmQUW5D3sj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nugHWwkDD3yGMHYbxAaea3LH7cYTrjX1xauiNrwbmwF6aePEj4Csm4MJ5pi4PV23CoXT5shPwa2SwtsR3zqGmdj",
  "key1": "RWDdpYQQcTTB1EkytgoiruKeCFWGTHSF9GW7Z3xZjwZKyRG6jc1yXBfxpa5isk2vC58PeDQN9UWfSGADvsin3Zj",
  "key2": "5go4z2ShFcZdQCwDKqUvipDc2Jh2eNSRHN4sEqFU2zRrWYbU3YM9SYHgvtQtc9cCMp624DtQKTKGkiGAESTViQFL",
  "key3": "31J252WPhdpv77VsEk5Qs6V65DA2enwsGRAobH9eE9yN4NGaBPTkrsjbofDAbG3XPpHu6hJfRPAhYQvy6ELhecEG",
  "key4": "3RAqJzZ1ugrUNf74s7VJvsxh4PocSZ5LmJY38YonHLpuLK4xDmDTVpPq9xsXUn4emPFBGgdThNk7xVyPjEBkN2hd",
  "key5": "1notrtnYMvDfnKtVxpKnvtmnUgVmQrfpxhdWdC6L4hLAV6GZo4FyZHrySo7XrVa7z6VSirQfeBC39NBDxZEVU18",
  "key6": "4XW4AbQhaoqfqBFFmZyeBK4fbd5TyN955MBP28xBzvUsGPifUmpfeDrnjzFwzx3YDSX6Emwpq4P2P9wDfAU1hPB9",
  "key7": "9xndr74aGJCzwwbYNYDY5kUJaKstMBaFXx2q5YPU3YjSCyHJrfhMqQftciCf2qrGLxAp71Pr5YfZsMpoNq5s9Pv",
  "key8": "5E8v6RdnLJzgAFNKdnDntkvfZLDHPE8X7hwEV3bQe57vWZanvbWXgnwZ7WSUyur3S5zjGVfjPd1RGRMhX3SubPk5",
  "key9": "4PMMQ2dDoRktX5DTsy5n2SLvAMaXcxvr9fKJJ1wENsQvVS3S59UxopRHV5bPbVBrjZNMJx4Jtt8qjZTM2QJbCn9c",
  "key10": "4VpDm7HHxkbdfBGnyQvjT6uCWVghY8mzwRUFGkYzBXA9A7j1eZ764eUVVSL9c3RtYkR8jpVU5bUPfbZAfb2k3x3t",
  "key11": "59F1A4N3jFxXEn1HgHkZXNQivkmYmCkufNeerr4vMfGQRgKvttgJ6hA4jTV3RHLtQDfvX4UfDTiY2JudC6fp19dD",
  "key12": "3Nj7a1ggtKv1GZPBLtQBEP7LscbR8UGosnJgVwzu1TKd2sBqQAzo1q6J6JFqjsd5XhMgh1pgGVYuWPvfAtz7qaJN",
  "key13": "4Zw3XAbbJtNuAwYG8EvxuVA4BiQSTP685nhVtBtwMF6ou9LaRD8usR4s5ziCrMY4HATWhRukb7gPb986itEYhpxY",
  "key14": "5QcqWGkLWN3cjbMUzn6pmRUpoBcpL9YEt1p1LK3M1T5qKfucSqupC61jxhQk4GseyZWqcRcnxSFXBcQH5FWQqZXd",
  "key15": "5GD3wMme1nfErTPJQtvRRZJRYEP9EQUGTfCCQCZYLdnJhEWy8yPvj1Y7hTfWJmqHbw6NmKme8kGoZyyBSiGtVaZN",
  "key16": "4NchivhJmFoLWmz7BWvaP3TPWvBFuYMpDFeCnGUb5YLnNF5cgZTcW478wgYvAvyBTNipDN2X1STNGZLecTW8bf9e",
  "key17": "531UHmU8i29rFbVoW7monh1Bynj8B8wVnHetnhWWxhVCdk7Lh2xWFGfDW5MQELcAJ2289jqnJNPcBzgMYvpc9FMm",
  "key18": "3kCzRoiCcNp8XvxgUpf8HetKGyXUU9LwxncVNsrEQ7LpBEdkF5mQSs7XXhbPyWo3sQei49EmwfkvuqCojVFmd24z",
  "key19": "4aztKX664hKjWgMddijovDYHGNw7yYgtTG3x2kLusPcW8dSKefBRHu6wCtktxYUibvf7NwvFFPLAw9bsxaZRgAZD",
  "key20": "3Edcsk27vZFFjm6Kia9qKcUFWEtf1ytC8WR6z1QwHUzBoaDQ4SBLpfi4djwP61TWQMM6oQiPLmUhMyhGMofvKE5V",
  "key21": "37NrdXxomHzfM33bwZXLhR4zLWfuQyiTCbuHvyqorhiSGFAFmmYRkJSsURLBFXUpyae7qpTiZJjAApZbZRD4Wofr",
  "key22": "5AvrNTvLh1FcynT9Pp3divJTyEFSjBSVuQjTTdpVdQaEDyLRJPGZq2zQPU4qvbKrnbFKB1s7Y5zRL4XqPGtRrm75",
  "key23": "2YrBcZWNPPR2sUkgYhmWVFFocx2MgesJYSC8HJsXKSwqxeZiHmttN4VfmgvRK38u5UsVnHbeQNB1VMR27qgRCPZh",
  "key24": "vPJsULgCKK1emx6ypVqYDybqdd1baGGLqQVs5aTEUQAJV98t7ceAwjg3YkTvGGwbFB4zdeZ3tMKUyxzjpsyTxP9",
  "key25": "468eahJ7CTtyA7WfuRLEE6pnqf5FKQBGmtAZs5C2yCxXMV4kbxoQo5BmMu2FYKcYfvRC41Nkb3z7H6uHR6Vy16cs",
  "key26": "3jxuQuBj5h3nVg6UZCTnt7RrEqZ6U1EUL33Mb2bgTvEqWAd5TQ24Na5bsWafuEXzwZVZ54GALfLTgn6AR74xzy8b",
  "key27": "5C3pjVshtkRKnyTxFDsLhefGxEH4SBeCkp9hgMM6zJDhzU7RXeaV255DYDYJppX89j7yY1vUqMdzadWy7V358wzF",
  "key28": "2Lnyr34GqcUmTun7HD5ut4LoZjFTBCh9rguRPEmCYEZjv2aVoKA61ref1izvfo4HtRFtyjTBqK2CVbbVL964Lo1S",
  "key29": "3hmWxRqWhcXWfPGEkStATCKTZtEZiVb2aN9uSZqhu9BRoXG32s8m4EVfXj6S4PVBbWukvM5T5qM4gBQZXQQKUwjb",
  "key30": "2exFbBG2AS8f5J8DV4Nhv8uqYRTCuoQvzkEoqqc4zVqAMMw1pkndmSwzTo31gQQkuQSvzZY37NgDAvHWXbRSaAwY",
  "key31": "4PB8ArfTz6HRidQ3DgwdztALtsvqgCDheNdudtguEq7YJ1zAhJQj6t6KBcw2hoYYJa9kGNBTPJmK1uPKiKJDYJAf"
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
