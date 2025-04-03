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
    "5XjtLqYugfd9Ds5aRb1J4cFvB8d5SHdvqBP59KqTMJ3cV1DV74pFoyudwKwe7ii9E2nG3C39d21fUBrtR1pER9wd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61xdxSM4TckNsJoeiWcRCi65CJM9t43C4ynJnpaAEw9pGKbb8DetjP31FDt33SNYxfuDL6W2LJ5RVpem4XCP7d5B",
  "key1": "5p7iYcGRYxySpEQHUc5SM5vW4cTLAnq85ZYko1uYWaNeA2wZxB2pbGEq6UnwPNxkXnYZQWuHz5S76VivXNrHPK17",
  "key2": "fg1LQECgtaCm4Hd97fLwxEQfCKENTQ3mmRqZSd2pAJWnTyzZkh41YruASmm8o6qawMjJ4WrUm2G1JxwbCCwHP8t",
  "key3": "556uLspiVnSimkKyX78CdLRrkpCUABCtCX3B7QFcNDeavUPBNZaVDnKSRkoeRxvdH75LLj6cCxyRmAiYHq3Wwsrz",
  "key4": "2Jxeb3BR9u761226uAqR5ANyKaGZYUbgj2n7enyNcAgyzstYprxae4mR2877STXaxxmN6gAXgzxbTR9cz3bW4vqn",
  "key5": "3kvrEHUBGUBcp9gikRJHuJT2WceJ1DAXJQrBRmmqtx97p6YJaA6qXRyr6SvqJ3xA1ZwjhDFNKf4Qtn59So2afnKq",
  "key6": "5GEDjpurNgmxwKoKnzTs9MuaKArqJbPLd9d7FR6y628XJqeqo2ZN1B8xUWu2R82DUCXRmTPK9APKBDRBbeKTpEKC",
  "key7": "2Rj3dPc3waL1Tp4T92nmKUBSuPorZgppLmgCBPd8rYEHN9PH9gF68Y1JmkzbL9eh8P7KZchaUCVe8vb7vxjCBR89",
  "key8": "2vGMgLUPd3FuR55DPQuV293y8onc7vWstp5RdMSMxoUUDPiDewubgTono8NrnwhypU5xMoZVK7QkcmMXgVQnajmm",
  "key9": "4oYX3L4TPfhHpEUgbaHyi2TKLUEvR5wUEDgtE6urSSYSrjhZuMTXqsWkB6ab6RWebv29aHivAdoC1N2vVDKJrp9R",
  "key10": "2XCufkC2BPhdvEkyTxxRg1qUNjtEqBgi55LXA24ULzSooq9sscVaCEc99NUJumoXuSA3hN2mvYB6MhJknv4eAg6D",
  "key11": "4EPA9MVn1S6rgADEhY7Jg4a19RsctqkN5KhdgknLZUkTctDZdaFTub95okMAYf5H6skQR8QdnjejC1qsCo6mF29A",
  "key12": "4DmFckorkDGimKg9nnaTLWjoDHqwPNUo37f5ixCr18FXsgpPTxuxnRaGuPNURmeH3gtNQ2fH6BynEMHecUSWhkk9",
  "key13": "5yczvKfXZPRaWsb8YKPnpAo8EcL6fLfr2QNf3eEYqV878s8RMxeikAwnoccyUn7EFuWkZgSNEshxbyiTxG1D1PFC",
  "key14": "BSwDKgx71NRWnjnxZZVDenWsSFqmQmenQxjjJ3XYgwqvkFiJdon4JjEoE7ULwtJe7FaaBkFvvTdsHu2Wmvjkata",
  "key15": "4fNbNKkt48ZokyB5K2r1iRYmbRQ8WDqiBiWpwF3QwSjwspadMr1dSiqr6mWPovwfSEs8eXLH9UCaXrpHyVFZ4rpR",
  "key16": "4ykCNHKZfNMwFYaM3k7uKDQ1HLF1b1V2w6jQoRBa3ksTc4fD1W97SJMHR1U1K5XQoSntaW37ECmUGxZKjiSAUw8m",
  "key17": "X8SDjZ7BCw1wZ4cgMZRrQtVpTfWHre6chnWXmDjxWpBjSgCoyMbN7BHGruCFWbdycC1a7tXwmeMitcQpXvrNHr6",
  "key18": "gZvGm6KXukYbnGyejecpCdbgh4BQE7uAzqeVx6APKhUv7yYtHQCW6YjJzWtF8RvnUjFLbj6tgJTwRGYxD4aLAFL",
  "key19": "pkCAsrD6s1BUHU6M5LPGreDS78riMDkwKY1b8FpxQLtfR9CRxSBh6xgHoUVWkKFRxW7dyTqixkLZ8jXkK8gJLg7",
  "key20": "3ryDSSRyUnoUcRsiJkh7zTjE9b32mkAvYTA711F2NdKDHvfSEF6QjrGC4NHotmayyP642PXojSVunxK6GVy1RJkh",
  "key21": "4x77Ed9mXeAqsom28UxBNVXjarB1g6XaJrQhSkRUfc2exkxZGZCuM9KAchMy5MTWmkguMVKeSG5wUmjTzZAwgn7E",
  "key22": "2Wjqbt3c1BWX7JxZ5ocAbafCKY1bMYG1JXwDd17gDRLpRwfYTbGL5Q4awjvrVBKBiGdvYbcTzFcmR6r5vJHnjLqX",
  "key23": "45hurTiNxhxD1EacE1NZeYnm5QLL7vmQwNWt8TqxZztwpVHxH6ZcuvPwSTSi7X28EKEUpQdYiHfsBEE1rA6zvYqK",
  "key24": "4S1DJ53AhRPQcTqpLFr2auHDozV17eeCSPPiJk1S15DU3DxL3Swdz4TnCN71fCRRpK7r5wapPNYE8HxKAb7mvhqK",
  "key25": "436nPdGScxHSbYxAAJXTFsoJmCPKqt4871BsMZNrDEuJUovTuKCCon1EGt3gFmS91tfxSXNjkqHVn1TwLvQiKgoz",
  "key26": "2fFu823M9PzmJwk6WLdm5Lc2iggHRkWnFyGYxFY1RRKPNdELmKBWz3AzB4zR4RXEaLizatKtrX524ZdescYCtsWP",
  "key27": "5qKgzsjFMSiSSzJEmEf83L72GbZgotY1nhUipc6XDmHigbt3xwkKaLGnQwFtZje9k8k3L48AdsefJWeGCxFQGj1u",
  "key28": "DvhQezVYWmTk6PGY1ZRL49xoSwNrAHuipNKKMHJufYDSRX7xDCX2fJsq5rHY2Ut621R5MyAjMo3i3bEvWudS8x2",
  "key29": "5S4PS7RtUPxvdD7vcxUjwTEtRfQSR7jZqRMs9AQxmSMJceqBxrQJyoV5Yrf1wwAHn8HT5Kg2zRwJ9uMbx8b9NpTa",
  "key30": "59BAVQzkq2B8W4sMFhsBcajWYPpsegkK7wzfW3suhAFNQATLtQ6GFLkVQmborAzUPqHm5cx6sreeFbpfp6kaipNZ",
  "key31": "5DuhvNvU3s8nSU9S6ZLSFVTc4xsXrEoGxZSNQCjq4wugsHbMshM1We9jNMdM9VWnTr4aUAKKQWVhEyF2vMuzS5dU",
  "key32": "3j3JHMvkhQKCMVyZuR5jNiq5a3HHr8ccuDKcqqYtejdbapsfprw7x6iDvuYVjMD4Gom4JEaWoEHkbAqEP5ULkTK",
  "key33": "4fVwzzBpKxRyhEF4TjLgSP4MFuvjuivcAGGq5rK2QHpdCWuJk34rhJfqVYxsmjDP1vdEYYNS82PZJzs5LR2MQZXm",
  "key34": "2WAgyKidjXEEi7MMXEJ2h1aX8DYrUVu6khtUgEaS6yQrTVyDX8U1VTPCXaQD5RGuPqo8Jq6GZzH1YPsjyCSaqCxF",
  "key35": "56pkDCqWQvEC4JD6SJcPntBubKSPKT8YCtbuDnjRJNSS9pMc52uNTCZHqhWmWD4B7YdZxFRkbTC8hsD1Mk2LrbN3",
  "key36": "2ei3d2podq1Jd8MCiZCXxcDcNKV6aNt3ZUpAmZmqpubMuGhnHfymwuUG82THuQVJhrvnTVsJddR7dPSNJx5DvdhU"
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
