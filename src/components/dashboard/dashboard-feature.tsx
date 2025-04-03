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
    "3Xhd6L8i8hKGx9LhayTq66jZBE9cHU4vqYeXwy7XzuQDYyMwCPakcQr8ahS2b7rERWQ9t6nAfaunKWQA4aKZupgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MBnwwf3oB3n2zBVXMWEAaT6CWce4KLpcuZEmMUBDVtR3TgX48PqigFyzCyfYrTZVjHEVraKCZkzVHANEtyoo3kk",
  "key1": "5am5hxLhF8zn6KYN8S43phQALk1Nf198qC6hzpRvuuxuHdUSwvQpZZA17rpqEdZTYcoRoST3y2eAR9mEkB579nTd",
  "key2": "48pjwzUdSsKG1YPMM6ByqmhASRdzMr1fU3KgqM6qJWVa7KPpmFffgvLWY6gR9eGyNcAKFUSN5frTL2dAgAenMrjj",
  "key3": "32cQF1AL4SQ1huLcMbgRwe6Ddx3tAWSdPmyMS52CN49G3euk5Y9UZAwXyWqxhFxhknmDGLYgrzf77V7TjJAHGr9b",
  "key4": "5SpmDu2KDv6MkwiT8yJjVVGaqgpVyyvC885kpXKAUEuQo1bMAfHRhpM4mRJ2mF791Tomcay7L3YbpSPFYg9ExfUf",
  "key5": "29kjTLSp9nX8wxpiQopHVdueYguwjo3L6XC2gMdYB68DB5fqRLjiqXwycRHqZihKJnSgpcin4L8hnQkhmKpN9VL8",
  "key6": "49JSGSNFuLRzFyLLqLYn1fJVpjkhqEEt35nCViotUYLCEVo48uVMNyMz5YKmuVGEiaKVeRzk5wuCMmeDs5wdw6uQ",
  "key7": "39BckWc49g8NndCHw6Vf7YeXmhzQGk2pEutXDehP3tkq7KrcgXazW6zveGECYcw39nBoB3Ct1FMbXM54Pk9jBpHU",
  "key8": "3VdFG2Z6fvXqjNARRBF5SXYL5ZMS1p5HnuKoC36mwxUGdzBXcYjbQaPRm5Y4SSS7aPtbV1GwwnixRE17Fyx8dyne",
  "key9": "5BSCBpq78uyqd6jEbbeu1UjKGUBGMj3uw8vovPYvXCLJrU3rxp341NDZSetKGFTqKA8aiHRsa96gQ8iKUG1fdyc6",
  "key10": "n8UNArh3b2TtE395bBWrJPNwNPjCmNKxGWHBYzBhdY3VhrAjxUV9xgaXw8rxFUx7b9sTaS9KcA9psFre8HyD3wB",
  "key11": "t1WNqGyZqbyX1HPMCjU74BnHRJUL9ngGKK4EyrEKxckDwief6PSzgsbwbpmD2FZgMUMqqT2L8Kf4fru6hT7BejZ",
  "key12": "2Ye3nRzTKZD4tNq3oSBmqNmvEJMYHtV6oTi15osnEWK2jy4B8VDj8SiCdKgHHWXfpWKSjm3gRSi8neAXkzwmf2JV",
  "key13": "2McgHZwwqaoDZ43hd7oAeoxY8tQYM8wmkMgnz5KpD99LpwfYLzE9AgLVYAtsB3TEHNaHG2vuYR5oaUjymcZYxyGS",
  "key14": "3WgYYHJpjGa3SptmAtUo8mg1R5CF6f3CFT6mitJt1wTWUSGD2jXNp1qj99pvZ1mYHeMXsB5NTtK7DEgFWYPxbTBM",
  "key15": "vjC2NyE6jTaxz9onANJ8LZqGs2JXSWB3ccEd2rduTKKDUn5CMskHA7zPhk1KUoAELQ6YfdHaZqu3XcQGjToKjSj",
  "key16": "49T1TJDx15GzJAQtKb1BZ4754cUH5PCC32qC5Mfd7XvTfsVNsY6EmhUDbSCYF7p5DzZeeVDcUGERVdED8GJUXruu",
  "key17": "25b5PVG9dCyLHkipVg6uSkhuM1x798jJ8AT1ewe8DNeqK2xrWDFSuHxJnY9Fiy39R3jkNgaK2DkRVyzBAF5FxjvU",
  "key18": "4TBdzWRSgA3xnX2NfP6vWT5nsSpHXA6AQaMvpMeA3QHYtKmseWJt19Awe8JvkYaxivMZLPg6oBjdZhyJRXZXDYCx",
  "key19": "5wqS6HSzSJVBNNGaKaBeqAb9WZi9SNZdjtEqVbypoNPRb3zABbsV8JxDaV9aVZPB4zn2xo93phXyZ4DpJqWcvoUE",
  "key20": "2weQLvqaNweEkj6mXYfFqd4FPQyAD1QujCTrj5uvxCT9KbbiKk1XrHrXwTZGQuBkAXrBDQvViShP3JZca2jVxgwb",
  "key21": "3JCvsipt8dXTa8ewqnTEprrqA5mwf7mzQuMwpTTCXSwUHkkeWfZNQA8XQxFVLvjMrrdcTLjvBijdr1A1t5YANU65",
  "key22": "zy8pDzYVAjmiaTkUTcnfyQ7r5vM8XEmQfgCFh2icK2BPb3nLtKWrfxenRxQiSGe5Wf7iX62FtEG7vAbFVh34Dhk",
  "key23": "3tKvcxh8FHuHncdXZvGNxhCBtUnLaoiQXdQkGJssegvMwD6KYF3BV41cPwG5JvVg3jNugHFeEY8bEAyqEEnNvr3W",
  "key24": "31PjR5AoZt8Wh65VThiseZQAx1Xpu32Lm3DAorD6b7HTzd9exepcoAYMrGyFuUFnhtij8wpsUuJHEvfb5SkdVuG9",
  "key25": "PMLuDYJGCpXbWBZAunuRmXYr5StvGxVf34VepZmzs2Db1FwUMEjQQDc2Dpy8TW8mL2UxvArJC1jMyb554ohW6No",
  "key26": "2vB8fWujFkWoJM2sKZ5VJz7GN5sYvwnNhxTLWtNDsLkWd7F2irU7GD2WBfYuuWsBKUQf1S6ocztDqhuEABwNg26G",
  "key27": "3Qw7ArqhFQPm6ZCx1Q6P7o79ZSZBgn45YbE6ubh5VcWB2qRxgCaoZpxVNj8XYpS34GoHZwYWZBX5kMmNnmdXw2Lj",
  "key28": "2CtkPBfTuZwdbNwxXFU2ppQSjKFSHXVkhGvhwgiQZoGUaSDXUvQEHiwsxjm6GUDUJgDFmWK6FaoD56xz56FFu7g6",
  "key29": "iudvUje4PZnXssiMAPy2G9wdvE3ArCKeiixya2pW1XLD3k49WpHnjJ82DjCdjsSDxNXHJCopeEZNfTjpK426yoL",
  "key30": "469Yvg1XDpgv1kMBhreZEjS6i88ZTUUn3dhEDoWt2NY5B8o3HbjPnpF4RfbxfytBe8mPKVbdS7ADhmDUofHuXGqi",
  "key31": "2kiCfL7vk8eqMdxptykpiKURdjQyP2XVTgGzEpHQtokafinvx3gCfCJhww538dqUFxL7sAFrH8rT1JwakAnUWUoC",
  "key32": "krZvjgXDp41ZhhobCgtVqyf7oBoNr53b2BfcUdNTq2eARns8KTAuacQ1kEVvS3rWUEUzTA8dGTAxJYF4UumPcBQ",
  "key33": "5A6R3hoTWLSTcU428LCeA1A2pCdh17G3sAMob7uPRzkAE8MTLmtpBENkRXzCDDMi3nXbfUrkVcLDuLZ5o1dzvMxD",
  "key34": "2yDxDK5XvAW8gnJDyiLhZXEfUU1TRdMgLcnqXXkUSyANLTZVcbeC2Bou3VcCtihK11dcfUzaSuQ1MQAqQujimjkU",
  "key35": "3u91WQuHX54sT4FnpRrts7EybQRwk1LiVuzCWGSLxTZtyrnYSiix4z7kSxTRYGPPbArF2z3CF9pMDe7PhXZahvUc",
  "key36": "5NPx6NTHb3L7nWoUXZRg7ScSmKusAzUdgB53PSDGYdrLxeTKWMig6EU1YjtctWZcvUyvyGpAu9AhadAkyEWiNznu",
  "key37": "nGDKWS6XzcBikVDKn8XeGHvuKVxRcq6Ew2EBxFrtDtN374yCkC8v4NCLSHUWYBFrkFxipu3YCPV84RUarNVgrAL",
  "key38": "FJVsamhUw33frrbZGuWNtY32VPQpDbAgs4o2qvep81oSTq1AtGYuEPZpQi1aqcMgQsirpB158C2LvbwJ2d3Rhty",
  "key39": "263aSx3RpAJXFWcwXFunibLT5jwDTtmhnYUhgpxc4ABRkBB9sZSyKYB65Mk6W4SgD6UPvPmu1i8fnZHJwB5f6xG3",
  "key40": "6uoHbLNudd9SRv8cZPX6gM2SgsKofDZtEZAzRinQBcnBUVjYVvYHnnshZA8e2pjZTq1gy4vCYsm554Yh7eCs4Kw",
  "key41": "5aJFTSWdCns4dGwsnPzQNdb29Jqqyagc6VGHDE6ZDTtwPcdqKb5rFLYR7jbgdKq2oJnBp2N6U9degYmP8r7DeDCx",
  "key42": "4eJK8tte3SfNtRD8zQQNM9hUTAWVtN1LZa4SKXyBeK1VoMUbBtdV2sX3WhQtDhSwMsG4HYDJT7cG2wzxsgKDvPvm",
  "key43": "4TMrJfmxt5QgWYmjoza4ekXw8tZasTmdJYsAbuwGt57M8UJoT43SKzY4KK5LB5ycG7WNmdSjePRbfQgLPN6fnPzz",
  "key44": "54didZWge1X4YMv9pRh59bsfYvBMUzYhQvQbT7Roz6jUS88WnSLC92vTGcf99Y7cRZDCT6hm2CQwvuDsyg7NxJ1b"
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
