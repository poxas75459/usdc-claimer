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
    "5hK5iy1QgdwwXV3D1mCeCEE48T2R5jdq1AXtsTuCxQq4qtqvDd8MhPaevqdoUsbDupZoLguZgrvM4EHGufTZhHzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mt4YwuJX6nPJXg8VfF5uwrjkxRkXj1GGWYpvkQPDtKFbiKNJv7DiNuhGFx81AYd83WVnVMvcCnCzioBuf3czJp5",
  "key1": "4ZXE6NpS2T6S7hAi73LjvYH4DE6sKkd4rXEsWTU87TfiZ12VEN7qu9xjrBQDXgUzpUMe2QetQzyy6UAVtycnxisY",
  "key2": "2VFBCF6Aot3syVoGNHUztMRSzqyvJNdP7xY9MzsWUbArro7LSMbLW9GfQebb7qpC4YeeHGHgk9V8DLByAR29DgF3",
  "key3": "Dzb1LygiEYFNYdLh1Brf1DGvPxZnB7YSLAcB3HvfQt9Bo3TZKu3bkT7q93P44JeWE6huz66BuhVRrNARyPvDYHu",
  "key4": "4gjFLoT4HjECFpJNYxGzezkxE8SkeFdWYFsU1yjcMWN9evf28eACai96Fjde8YBkfrbudz82x6j2JtrjCwEWuNhj",
  "key5": "VwBYXX6yb8Aba6eJW8VZtRszrmEVbgsHa7iDAaY2nLBz9qp5xPizSCSAcqhC8HV3hTtL8xUcsDhd6cTTdYVXpss",
  "key6": "4CN5XQoENp9r2YgKVczeZqttwqukX6oB7pVNMTgCPFCE8LxTqG3XUdoYWdt4y3zcJL7cV6w49hkkBBAoukZyRuX3",
  "key7": "4C7K7d7xhsduQD4XRiQ673quZraSmYkzPYCDLG5xH3by5G2SFJ7hurSAv5KYD3MYSn8EzNAzugDdmzXP3suQj2Hd",
  "key8": "2B4PXRxidDar8wGwTTTzKAmuFJ3FR9eirRSgkNzpz1uRiHedarksuo2ZKnL1XcJkkmcjrjGrQgX96cnyy8gUTFdA",
  "key9": "2m51mt71GXnQqsPHCeToVZiPs3gj7m5vuLw94xM7n3N6yaErn1tQD5EREgdvuXNULSxcgLzLfNJhbTynwnyQX6Q3",
  "key10": "3i3E8UGCqEreYRTeP3wR1X4xqHaLZiTJ9kNJKucxKdkhZDucpmp1ZfnmTTSJ8q95MVov6WZ6gpEAwRemK82XQwX9",
  "key11": "J74PguTowhwZ4jyG7BkJcYCFsA9vGvpUUNBPyBGgPSiKUWaVUBvpNGAMGYSP4r4xm4ujv2MdUUVnmH631Ji4iqo",
  "key12": "3GdF2Jidk7Bp3hkED7At2DdGkQwhGEbfLs3BxvzLYzmsDrEksN2XVqcgvggLyboZN4BFSChXFTyrzykHRRbR8LFP",
  "key13": "mDQJF4znVWjwfZazZoFJNVTMaDbWUFqkrJ11SPp6YWvBXaLMa1XKttEAjaVpozYbrUSyoQhXw1setWmJcVSRX6P",
  "key14": "612jDk6YRL9qpVKvdnW4u3ud3Ncnre6z6cSqHT9N8nSxnBsY343gf9gbEotu1Uu4mJQFfNyp9YnKzeGUamJhTEAt",
  "key15": "57FUJg3CaXasCKnTyGkV6LpzZLJsy8omiTw4QEnx2B6Xwr9eo6Nkum9JhgcAsTC1GYCNmr7Jhpg8eSCh7aJSVpg2",
  "key16": "4k91bFbrW6zMdvqa32trxNsJTFZwNxWUuWAfpTNVXc4BCHvuCMHK8XsiC3SUZBic219NPZrJhCKgScGNTzoSFMXs",
  "key17": "3gFUmjg4t9FeibFAYBYFQG5eS1VdA6Pwzqw3oR939DiUvCUkT3hkgL2U2P8RuBqc8NmFdCGh3HXwzSx9qcN2BUKa",
  "key18": "2Hi4tniJSdYfVw5JHStEq2EGsj7ak12KwwvUF8XrZAo43AVBR5E1F5eAQniq3Rhv1naXNMS29L1A19Y4Y1vW7Km4",
  "key19": "5uyfQzRpkPhoRcHbjeQPYyVsSK9UH3zDrfipGG5pmPuinLx9TS5XDcwzqCjvWpTQCdE78Tgjy4fuY7P2Nyjznwm8",
  "key20": "24sDPzFpAcBuXF6bJ4NzhFkoSB9mCbyikvHctGyLZi36xM4vK72YDZ4kY4LTiM3586Sga5ojEYhtb9mfCTQsaXV1",
  "key21": "5pZ1BmiHaTHQLquEAgPMumT5b9PUDJ2zL1pw7vCG2DFKPaWQeoJgcDJoLyDqZj3JhT1wUAXRa5N9rDPHejQPuHvD",
  "key22": "4DSHuMstNsT1twWgaS1QR2KJeYQGhkbrS2zQU9koqRk9FAPBhgDDhxkzkwhcrTju44L37DxK81svcaJ4UpzFrpnD",
  "key23": "4QFkUkj9Td9SrPaWPsUorT5hK6xjYmMk1BXmedtuYkMUY3yeWZ3QHZQS5d3CQYE8acJUcESVtr4JLK9nRDGWwGFd",
  "key24": "2oJuJUg3nngVEJrJExyTy337u4XcthPEhsCHd7nDfsA7wLUELzXSvqYyU46eCLqJmm9Fo3X4iaHg4AMSWKJLwEqF",
  "key25": "2jXQXcz7ujTvf7nziHYCrQDGhXkKpcZSCy9GgAmPKNRfNhG4iig77Lt3FL1AhdBLKPLWS2Z7xYyNUqVbKtVNh68B",
  "key26": "5v7KF5pxVdnk3QVVmM7ArRpDh1eFXpBPLCmyzRayQ5U5LefbhzH3ZYB8LUDZ3iXbzn4g1uR3WvS64vxyQGSAAFQW",
  "key27": "3L7P1GqtKNVUv1i2BpkQ7jE2X8j5qNXNcVbDG9UBK2EdyzZYutca1eTT7GxhrNq8agmkRCWJzyo8BhB6ouUFqwQa",
  "key28": "5mxsikABhxUBw9UaKatLGaqzHPJeVYq42q2Vpncn7CuZM2GU9d1Xrrdv8HFCYQQ2xh52c6HzdKmHFqZ49a3q2nX4",
  "key29": "37nh9FtYDHNEtm7wT1mJdYGQjnZymb1GiB3JiAJDHeHSBYZmFh2iGZtzRM24cN8R8iSyhxb3WaJfsZPyTQ7KGfUQ",
  "key30": "5y1ZLHpv6Nv25actLkaGeafVeKP2JYspWgGw46o71XvAQaHWCedgrz4cMsQqTTVL8Hu1cVvYfej7ZDhSHDMHhJyx",
  "key31": "2uFkeMHF2VPSzR4u1zrNyqLDt1pQfn3XrKd9QVJJP5P8a8FVz4QosrssE6UZ4G1k1i9CNCHNPM3aAZZzuUEuAhZr",
  "key32": "5YDHKUuHDg7taWnZGeKaU7S4yN7MN5szBAPgSbBh2E7yWTRJDVYjuWndG25Dk11gs2BRXmkmDg97v8pMeJ19F98Y",
  "key33": "4bkcBZcpfiE1aMgb9LWMRinpmY7fMTkEBighKd2MRJsRU5XWqPByJminTeaj1H8nRADNeZyjUJCpCWjne61EvacU",
  "key34": "2n8CKUuVSCUXHUTzxEzb68j92zyZfKCnMBekUoGDdNoM6zEnzJ8CYaQqJVbdvJb1ngoWp9Debrce55ioLow4vhac",
  "key35": "5eZtmkmq7fm3gorzNnYCahm4NKw7pcthCyFknLaaC5Qxd5u97Yw1EG9dTpWmpBQagGxj6CoC8zAPpr8RLiZwfJjG"
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
