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
    "4zrTw554PqHphFpMEB1Qcvu2im6tBNjuNwWnE5X4FPu3uTC9DU5RNRum6YDPbvUtMEJttQYeZWhhiTKTc8jeGkGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vAXWfK9fYfCzJk8t1YPxysKt2Qb1MMt91M77pnoPZkS734GB3kPv4baZny9Jp4Em6XAKi2quDPMUyk5dZUmQGVM",
  "key1": "28MiXWyMRpTgeyRT7vHZUXHVAeH59bvXhmMe434gqq6EwxkqUd1GHNQyacPtuxfrXQD3eSrqDJTvh5gism7dKznW",
  "key2": "5YcCNwgdBvfmV3VtZjYCtFAm1HSiCnF6kXPDz52H632gf3fqjmLRSBZxpesE1Td5dhLpbvMV8M5bUef1DB3LWA5S",
  "key3": "2XuqFvQtxaLRgCdUUQTAHHADcQxQhws82PgSdvQgn37FE8sdgnabfVCqBkSaQEhMXpxN7FSw9AnMZCHtaJciWsAj",
  "key4": "nv48Tj2Ksr3Xp26aMBRwPCCCDyuPJhA2fo9kg7rjPu7gAqBsm7gDEu9LnAWsdXYbCxUhej83mz15YS8V79bKkp2",
  "key5": "437XenArqPzAXDmTLWUqmJ48uVqif8j3jF3SkiTv4w9z9VNme2b7yrKE6Tfgjd67Erg3FNQ1y44sxUg1RKxHuY2R",
  "key6": "3xDCuYRFwHrgpfjKKGFXdfDAi4NYPCfaqKV9RTUSZzojYqaqhPmXxzuJ8NzSeYpB3gMfpXtcdmhtmFwsQX8jC3N3",
  "key7": "4ddAAWFtHbJv6fjYRswCgxKv474VEvwVc3jvKgUqdKnzn1MR6iQ3r55eWsvX2WhKC9wYzqXfqjccnVBLPSUZS9WZ",
  "key8": "4LEVhXXajq7oihJPveMVyU69t2SN3yXG86MNfW819p2ge6yLN66d4CBKia4p1VQEzkPfHqoj4NnWUURaszx1GtsL",
  "key9": "LKY7XDMQ2ph7bFfyXJafttdimJ1253aVU8YF4HzuU5gZisJYUAcHyEHhbnz8NyCCh2yKLyVmAb8gM6xt584phvF",
  "key10": "3EXQCFYoMyKSGEeU6daY1tr4jq5WATFotpE7TYaZnGyr4yHzZ2DEwyPVdFY4DLwa9hdXenDutgWLmAT2pvf9xzFR",
  "key11": "4DgdoaDD2sN4pzQsCpx9WQL3Dsv6AqDpA9HKXLqzNWuemuS7yGoZnAmYypvno4nzMR1hwfjzVsNdvVYrwSAhzwpH",
  "key12": "24jasJT9GMr4bSsG3n66S7RJqRbfQoeNW3KmgQGmhzRodZ2vUVF6rj44byeinTfDLxczZ5rwbwuxPri2pMMbZ11W",
  "key13": "3Jv9oVaEUv5F2sZMN3JVR6t4uWD5aDxnR6FPFdYLy3i56k7mMgXnuqkgoyqpxwMhzpmN2fBL6aaHRxtzchbUqByd",
  "key14": "2M1T9invXWaX5u7jw7FzcL68D9DB9XJhx7QEtn1uqxrR23vxqjecMoNbTU1fB3nXmwKsxh4o5ioaZUcGLeuxpfdS",
  "key15": "2tXZTD11112ELJpYwSdmw5mAvp8c2b9qyFFLbTGdWgki4GNsw1QjJXQ5Xpoa15Xb2i921h4arDxJR8YTJ6YE1A4f",
  "key16": "55Eth7aVSjWcmVg7PEV8dcq3dyVJwABKWz14cxmWnz5LetBx8p3qiwpG56yUhVeRGEhrCuYgfsAYAdc18fiCmBEF",
  "key17": "4AJV3GWvwMXdvogDKUsxkrLbT2geSPHVL2GCyChJUQRa3Rm4iWTgdmwUDZuSPaLjZyHuQyW5vztmAQeLJbsj7iXa",
  "key18": "5Y7FESBVdJ7J3y9T1uimbXMaCs2uxRYsBwP7ecCf3Ru43fXynkfLich2r38oqrPgobsf3AB1CZyP4VbYZ5PVfZsX",
  "key19": "WmmxM9ARKsjf67ViEfQ21CsWokMZVjdug4b4tzBGVBY9kdsu53pP2MRXxU4tqvXSezXNWCwJunQjDdbzCM1fjj8",
  "key20": "3bCtYmUM7hyo3bQFVYv2Xgh8LAiEEL34jMw5b7Qraxm3wM7cDPD8GTd5kRfPt13LirSPjWhiCPYNnp5XKMaaor5k",
  "key21": "5Spbdo9dy4vQZTvpnuRTDKEwwoVTacEih2Dh4o8CmwKiXSXprYoPdAjC7w63TcjYYUPGZJmoFbHZLaLMUs7TZvjV",
  "key22": "3VpNmu7z1iMGm6x8yYhAECqRjMNJ3aqpvSAys6TdPq9LrN4KsVaEJ8TzYKMbDYDMV3Rxd5XDy3gEPprdzFBDNgxr",
  "key23": "36jzB7gaweF253Qgf9Ed9iC5cybqWkxKg89bHCUq6mdNw8UQhMT24QzJSYdyy1uY7oQKsSfJEPome6ucamT5USxg",
  "key24": "XoGbiPZbyAEG4TTnx7u2yzSHVCosyr3DP4JkrcM7HEkScv22sXMGqov9bJzY9CcU2xGxvtdvrnj8w7YyuN2J2FZ",
  "key25": "31XVrYWPi7ep7t8hgccsP9kLNNA6Y43WL1CoiQsLMBsVSkrSkshd7Bkn8Gud4QdbaQCEcBS45mbLZyVYRxTGS3hp",
  "key26": "4dkZtXCPczXCAoFjyixUXmW43pHHLYbBHBsTmhNMXhYHBBMEY6qMFBourxvqCdY1bK8mufJ7BLpv7G6gmvSmA59N",
  "key27": "f6tXeN5Hc8nfzFiSXh77e931bhw9AUwaHh3TrWxjhzDGUMgpgfaRaRsHEqhUy38dLdy3LH1mbahJnTbzK1ypDeP",
  "key28": "2jDs7Ldank7KRni4KVJHzVY9kw7CgwpPqHbWWjEUWiwnNxdfa6pJY9LpsaCLq78CJwksS4xB7pZn8rNk7XeVa5vz",
  "key29": "4FLmTEHiFg76imR5qNniC9ickva4VS9HJo4hm2vHFXWJEiXtFgCGWTYRwQ2ef4GFXQwyTcxsp86tWCMFsxpd7wFb",
  "key30": "2dn3k1BMwxdcogQeQ6jmB2pRgrGQQgWvh4HEAGabv3T3CNjoo37EFsSy8ygGWWnNzJBevXpNXMYhGYNLnxdF3Y55",
  "key31": "57jhb5YeY29vWHCZLoDbriQLYxCxXLm7yoCWK8pQgJeQYb4u1AK31vnjz4eNdpXCdQTuKsns2q1rKj1VvoWQWhcY",
  "key32": "2xviYbpq3Snokw5s8JvHTQU6d9jFuF455zBvv7mSaqhfhY8jZgLsqNyGf7GDEEvruZ5ngXR5W4wGhGMKGVhXWRTJ",
  "key33": "5Nb2P5PfujNoaBKZky9sc76umWSufLpkUvy7xGMMXhZTJAL3YkDD6ErC7HhN3cprH9yCmetZtCwi24bx8rE8RjE6",
  "key34": "2a5TH2saYYLgugXLMpM7UYLeiwQP1B7GUPSKDUUTAbrcBLyMmZA2hwZCimQQKXpnz9ZhxmrMEV1c18aAjSVWTKSt",
  "key35": "567m98qcQ72C9CxJC4Ho5mHPTP4EhpzBsgAAZWZoehUfQR5c1QYrf8m8nGcsrpyUPxqWmnchsBCjSfLYDGTgRTsX"
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
