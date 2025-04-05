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
    "5AG6djLPM3BqBj82UnFPxfX5sgLKRoYAsBJjf6DYjSnFC9E7TgZwL29bBVHmgTNRnTQ7jRq2huLb8Vi5796v5Ppz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bJtZA7cHPVZUe8xY3nvQzsyQS7E5wsabf3UHvQ2Jx5uSWsVabLDQUmH1vawcKz226k1DcYpUHs62B5SCUwNYYAg",
  "key1": "3fQM5t1oc2Bf26JBRT4EDnSyu1kEYbhBv6X1vCgVJxhsm3oxhGFyAZoTdGe7mx8u7fFQfFEtMKNS39UeJK2evfMq",
  "key2": "wH73iHn1efv4vB5nS42CJyADELEvb4NenKTjxgZGMAYsdSLESaYVZSXaT6jSuwkQmkBMaNtdf26QUqStpEZYkJn",
  "key3": "2eszqiu6q14fdMCEa3AfNupwz3PhanVFk36BgHsXjDJKxsbbbp2NKU2TSrG2uZX5oNZ4B5JctBKrpKqtLbrUX68g",
  "key4": "A82F5ogeMtBQ5yYVTHjFeoZmEThHZrREo8eZ8SNqtmZGtyNBd3BMhLfL9VvoH6LXfgEfZ2AHpuTo2G9sXBX2YEj",
  "key5": "5rJ3u8n7u7uxyAHdi4AGqzADqoGUDdx8u86pqPxJoiyoKtMXtBJcHshR9Uhn9Jxo7JJfWxwaXw52bYreagg75WxU",
  "key6": "YCksK436VSjaWSxHhLJYXnn9e6gcHdQrQDrkXREcVraG6rkbq4ofEHxZ2EgPARZ7GVBtXtTUYgmKGNJpCfNB7vZ",
  "key7": "2kfMjtdvYopME696veapDG8ngFwmpusdcRXzJa1qRyyCwxQgJHhDYjhiREd9xoSj5G7hfMriJvo9Yr75twcaNzgZ",
  "key8": "4DfS9PKx8ZHqp8LCHa2DZzFNLdVW2C66bhKmTtLznD8gf6jpUhjihTztDeeMTrRA514tz8EeYhP8MuVUmivxDS5Z",
  "key9": "5muDg8M2WSP2inVYxcwggkDzLCjo2paiH7Cq6TmC76UPKJTA45WqKxSPnNRp86VK7CfCfQcrw9mZ69acgA9bV58c",
  "key10": "2xzme6neopAEwJUMUmybaaqSN3eoSoWnrx7fLfTS74bA373iV1JZ9s6bNJfWyS1iGVfCBuqqtxFVyqALkiCi7YQu",
  "key11": "NqSi4R2K1WUca1f3C2ETCVpzGCDDu4Yixyyx3LTbujxJvpH8huNrCDeK25u3CTHJCXt4NMT6fajV6oYRALWbsNw",
  "key12": "4i62BkptJxSjgEL39xH88Ch4Bn1hZ22uRMtmxxWWgwLGnbZmFqNHmD3ChrvJT7n5cddcu7kK5MSNHHFJXRjktTGo",
  "key13": "2MRpDqTEXXYiMEf4baqKCiLcnx37hTWBB8QYnfY7HhBg2r89wQYLTgDrMHTFhnag7uYWnM5EtNrnX9X6YY6Y23ip",
  "key14": "2uotqRrftNVVWgfpXN6qaLCFbSYJJiLSKdoFqgZ3h9MJd1yjM9a3CSr9J5ZPWwYagPs5hUSLVLiRZn9SVRZYGPFm",
  "key15": "4yggTNVQuYEA4LWmLgbs8z7Ejd4Pwx8szEsQ8tBSvmbMKHwvrhbznuCzeiYYN8MvhSJCMta7KVTsHx9j7v1T3BJg",
  "key16": "5uwxK7r58i6gdHmBeKPMP4fHNoR7FiMh4tfp5oCVhDuNFkPkYm7Y3vhmsCDV54txLjD7bHHY55acQPww6cqsVt7a",
  "key17": "2zAnjje7MzriBV9PZGJG6jU96EhsDnBbkF4Ni5TaBdmUQiTpo26gpVcfxtrP1jzo296pmyP6sS5EFiMw2ARZjoh1",
  "key18": "3gQ2A5yHdJuB4uF66Mwpz6hmJHMwu4funAphYXHCvdcXXa3RRJe3RW3tWwtmCNccXbfxHbpQysbyrvJDvt6gnxCp",
  "key19": "5twK75Ynd9tDK5jqhKBJUbfyiUPjAzWfXyAriRmikc6mv3byumiQjthqQ9NCyFZMUbbuRyPQy9qFpzZw2mQmnLPR",
  "key20": "3SSi8LWK9anyYrc6NQoMymdF4PvcttK48gh1ewhDZdwLkQ4hMof21EtRdVaN5wzovPuJPRD2Kzx1azozByqNHGCH",
  "key21": "45NzjeayNgxG1e9o6HdbrwTr5fnYiN3ddbQQs16baiqFtDqEsmNtrrSzhsLHp1G5o9KwuVPSjQ5n4z5gxT4NtJx3",
  "key22": "3GG6jUaix3a1PshjyjYupakHTFXViTcP5tL12t1Fje98wDkDedjhcd8u4aFvhgcMSBMNVtbMsq7ggp7KSUs9tQnU",
  "key23": "qVmmmzEPXqNSN7AVmkTC1wjME6pc3ZRrr8rCnbqUqZWqef89K7LGoYR3s2Hm6e6mvizxwASAhJnmHheEx5j5uSw",
  "key24": "3qsEjW7XBENG9z9ipteqf2B7S45eFQS5ibfyx7X7vZUJA7V76WA7NeufMfCiQnNk3mjMtQHQJFvAYMF2ALgQtmEK",
  "key25": "5vsxPg3haAS9Rchb2QbkGs28gEKaQXLcUZFzBP4W2HPLmzXChFTgqkpANUQvzfgpSZnWd4CmSydhvgiC3hH7pySb",
  "key26": "3JaMRvVMZVbJsffHgCCkg1DtQRVXjBo2yjqmYgEMhQdBp8SPxBDquRKxsz9sKZVF4bFsMu9WuWiY658Yyt1SDbzQ",
  "key27": "4g2oKwgdiWSra37scAhK7R3gmo1dd7DhR6q6huh9seSjL7cCnfXB5GxJQtienX3m1fkf7h6BW6w5F5p42z7p6Jgi",
  "key28": "5beEisMjCcjkR5PStHK4hYqvHuhTjh7qaWQWkmACwZoiuMQ3zBsgvnuTxvbe3mHnUHpFmjx5QFumvUWz9o7whAqS",
  "key29": "4i74a32fvZqdww7Aqe8bbuFXzSaQDazSxTL1nGEHNN6xRb2QK8gZuerT31BALa7cGt7mGX5WqsJSTpy3BnbrBpaS",
  "key30": "2EdQomjRwwXqMYKKJR8YPp6G7aqEQ2dttyLHsSDjVcfduLnM9qLtSqw6oYdpEYF5ABdtx4zpAP6oqccDM8vnLbmj",
  "key31": "2GdD2KCpFyubP9LMfNDHjze6ynSg41Tbqe3peXt9YZT7wjhDiu7wT23hUgfVoes7ZZ91UoGKZpxev4CkppzTHr7b"
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
