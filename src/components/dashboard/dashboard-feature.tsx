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
    "5Q2cY5wWMXDLZKU6MHakWfVA3Tni6eetxrjQkEbV6cC8RTpaco399US5CNpn7kHGgti3P3bAuevXEQHTgapiTvBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31RhSxCe3zFfPYmAthsiupQTmw6hufMN3LKxG5JXZVzD7NsHxeCLppcnEx1GD3LK9uEt72ko9zfG6m4o4kfUzsjZ",
  "key1": "4BzjP9BvHbMus8fRrWSS2KXU94wriXmDqob5nFuhwDmhYHyZ69ncddL5Ry2ZMe7yDitmFcXhzoWEGajmML2ECRud",
  "key2": "5o74YTvX1KpAamA7TjF4iFiSvt1CQ1ADkt9GqHaSSuJiVwqMVJULyDGQzEYgJJF6kyo1QxVzGihx3gWcXtgN9xm",
  "key3": "55xevT9H9dXdUAYaAWnygpk5Zk7ATGMjxo9Ti1airW1AMUjpEgQ1w2AXqMahJncuotToyUii7XJGefGYNNV42UTx",
  "key4": "3z9kXj84x9HfVeK3pG3upbka1RLGkWTF9M76VJt2jPEkojV6c2bLcc6fvuJTR1FEXZznmZY4NzEyshgYsLBioCQ7",
  "key5": "3E4G1s5SS9zBsPLWqS5SPXdGDHGLtExjrW8Tzt83Rn4awYg1EMMBUqAZ1KivLVEtQZkuacZKHBCYJZnFsu7PLDNQ",
  "key6": "ih1gpEsQHjQw8ww4YTsKcXXsS18hHQg9MFf9nohkHX1pYK2MX4T4hREABeZWD2HYxjULD5w7zYUeqViVk94iBWF",
  "key7": "2jdJmkBt1Hf9YyDpRymiA1q5w94GP9qmHPMZnJcQiywnjT4Ezd1B8g8DWiN7a3C8urR4hgk1EC9jZ6bUE9ryq1Va",
  "key8": "64L6rYvQCH67yvZ48TkPLvBhE3T6gMBvLn4QB2g2gYb9FET4EcnY4TcRrNyEDXFHywTosZTidP1UCuiDh7NH4DAT",
  "key9": "4mZnMon2ar8M5s4GhV3CiuN1WHkKo2X15yuRbASeu7ija6NopG1EgnxvGqjk2R3XxjqkRi1a7HuENpFqN9YYWLWr",
  "key10": "NYw6uwwYduJFJACd83dU63gMT4hvPJYkrLt6E7bvrX5qqxHDEhhp8uP8KgbQHFWMjfgcxXPWvJrhzqhWfTWaSBu",
  "key11": "2qr1kj9oLmG6K87XazvN9DBHetr6EV4ape55QDjsCtcVPSdzSt28jzPKEF5BY1NmPJM4KmVncZhFyP6zz55c3YSf",
  "key12": "3RzH59H6FUhEcZeMV7jngan9zHmykJjyi2gV7xo79q4N9TFnQni6rmAtyKFSvjgHx61KMWN1dfVCdoTPcxPJWjo3",
  "key13": "4ymUju57hLnwFeihREvRzY9sdVubfouEmxdBTKMNxhA9hRNyjSDJhe8eQDV3CZac3tDdUrNUpCyauqNzfqZKmVQN",
  "key14": "3JngaE5jSvq7F1Yw4GTbd1CMc6cApJFNXYjb3DnQCPNvb8Y5sm1WfvxpfQ15UWK9SkWsQyjhs6muzCLXU7bSzczo",
  "key15": "5YYyW2jUxKfEHojDic2AcK2dSbwiUV6iKPMaZN4MZB5njDXuiehCqxkYTnyieiMw54dWHyFG3E8AZSmzAqLoukcr",
  "key16": "2UaFv7RZ7sqYjw79TudjGPqCkVsU44yDikK76MbYPTnoR7FTb2aaNxyHUN8WpxPZjuWKehs9u38rtJzWxPzVNReW",
  "key17": "5fgqsQkMs1jckLDSN1n12oBZqjwEtY3hiAQwDQF8u5vAbrGSqsEPFKbpgdjSzajCYDRtLYdw88yBYAMXjb4knSqG",
  "key18": "4mPCYPKA2hMdcYEUXXSRZzJEftqDaPxRSTz6ziBXAaeJfghXbwM6PoBPXCwLgZccRw6qpu8G8zj29x697WT1qBJT",
  "key19": "5mw7gLc1QHp5poicw3kaboDnFeGeQmKgvYuEu6UbMzDomrN8xo6vdGmZ7So6pxrRbouZaYyGfA4QzFr1zfb5oqs6",
  "key20": "3zStGTWSyoxZGePLiqpaiZAqEjpFzGJWV6FGjJqw1KqKZjrByrZ4QBoFrU1qxpiW1ZoLY477KX542RfL3nJrzaKa",
  "key21": "3KeWAAPuywmHD9hehaq3zzyv1GMwkPhdkv5tkjue5LFWa3XieLuJ23KyZbBJJakRdfHwe9rRZrZxAW5z5NZgGaUF",
  "key22": "3ckxoMven2DbzQSqGAP22RSKSJruUpzBLceRWZ3mNWhANcu2eZgJ1FS5VzmDLxisfYywnBQxQQVxpwiWhan4HJyt",
  "key23": "5TqStxC4wQzi5TSPtzs29hATbYRikq1LH5grwFEVRZBAsPxfk54noLoKapo8GaJmMJXyziypfCFyfPM73FYJnUiu",
  "key24": "4pEut1xaSgS3pwRbCruRpLCqTy8dBBGpE3Cs4uCESWfQ27fdqudm5S3VFLupTYf1q3g2NEgQufPZxLLC2wtqn6i6",
  "key25": "2USHV8qbt9Jihe8FaEbjTrM4jpeAsuVhkNCruGhpik6zM9FcZoJqw4KEVqHLqYHcYEQbJofLYwMAVnSSzf4exvfH",
  "key26": "3ma5z46dpe7Ri66HuJTC2keqs4kVrVNMZwiv9UbvMSLQpFxc14rJcYYE6QSCr5dMtKgTLrBGGK4VGB4KXpZbdEma",
  "key27": "7wtHGBW8WVDuNDTJTqR7TrTf7zAJFxTNWYEAsCNa2DDkteojnYwecps7PJNH42vsKfm4jU8FpWj5eNsmT8NbUPJ",
  "key28": "4g5QUUKfvfcfDXjGMQsKUiGH2sCzD9Aj2YtxCqyEwb4a1FpgSsgFM3Vk4w5rXr78QDLsQKFNHr9zZs8YJEsyEWtp",
  "key29": "2H2WqXswP43WkpvLx1Zp5bdSCRd6P2B2QthsJTayKMQBX6qxFdgk2DXEq3zxnmba5gKQSzMk1kCmWLmhwXo7A1xv",
  "key30": "5hqD5uPKcDbSMKPaZ2BQWgxJYEKkVYU5HvaBF8MehXTbT1LKTpng7YUM7iRtRBkJ8NWosjbKctYTfF1T1nWvF256",
  "key31": "3aPANRwt2TxwLDArqXTHwXE8p3eqAN1tqykee8B9f6nyBFgq5QEbLBAwQoWgxUu5fkhJtA72ijgzR6tLhdXzVrnu",
  "key32": "LVWLufMCgY1bnGkfQRfbWgfKJmha3eiZ7y41dCA7bjA5U4HHxN2FEJ8nh5w9v5b5PyCbacU7e575hMBB49qgsbY",
  "key33": "2ysRZfBhsf9wirdRMNxtBuadhXWb7RcCXVnwN21JmxJj4AN3egu2ZDorCjs5U7D3Y3W6eQ4QtDw3ekgRzH4d4nn9",
  "key34": "3BPuFZ2CwUW8274PB1x4GsxC4fAKVrKihdr8yVfF1jCayEk4HC6aw4a9LoSieuMBLWxxL8BHN51dVExUkoYuSwDQ"
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
