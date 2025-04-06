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
    "4VLmurTawufxTMHxSYJPi9xWiq15wWBujpSmyTK2hmck1h13UCuvvjgXmtvdp2pvwzhv31zfN4qFXeVng7nYyCL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qWT9QnFffKd5LDTmEaBgtUcj3RfTewLXCqNpiH8ymeqP6hJuVvmV3XcCncdT4HEP4JzApNjuHWxuA2BKCQTj46N",
  "key1": "5kk5D1NtCDatz3uYatGozPzYgXHC6YKwudArVjzP1EWXHUQevaQggKfzX2waSAULQYgJ1i2grbHKAYvBhTbJfPP9",
  "key2": "4qpQgtnWg9L38CF2AMQXG3bPureMYsfoAQGrTFHFPsycDWaKfg3zjKttskwzXydgzXTucrDEHavG6vawVcX59Ksk",
  "key3": "4hnSgGjBccRcmEFeiPnHjifsgnFbwWWLtjpZoyQPvVJevTbcvNZ4VMhZ1WaQBhWV6M5h2xv3MC5VeCxKmq2iHPLu",
  "key4": "43Y3YaLfzQKL1yE4QjHk6ivZLeF8Pw6Hby9v9uDHzN1chYPXrUXhZJedGvd9yW4M93KJSq9yhEQHNhTvetFVvoE1",
  "key5": "5rvCMxBqYXvB4ofh3kMGx8vCwiLWXapY9uPcpY53vAYa3RU6tYEGwCVd1qHdMZiNUWxC31iji142fq2TjXoyXhtS",
  "key6": "egBFBT3ZE1T37vF6z9cVQCQNxruPdgRYbgyyhoNEErWGmpW1aCzNP6jAknZiPXme5MsQBJ7XwCEx3AAFbierwGc",
  "key7": "vbqGa25VJ3uECtwvkyJYGTmvUoBEV5ETwgxdVW6cUQdfUMaVNWDWYWob3eK1RbKTvgSJV9CdTJXX8QCu83xY8Xg",
  "key8": "Lo1J1HVpQ98rKfvUVmg31haPZj8qhvRrhnRhUim5FAAzpwVNGLVoVkiDE2nQTujQcqebvtpxzmHhy6np3zje4bC",
  "key9": "iYnqjYDQN9vMd2eyHWBXde7TSxyLrBog6wLQxXeRodyyD7yJ3tBZJ841ftaWe6kaCgeLhrFijZu7wggHqJRNeed",
  "key10": "33z3B6wgsWhDSWBdi61PvoQcRc2mBTHUaxAzKqncCUnR1hNA1dX8HGNiSu2RMNLoFjY3tMVkpCQLkm5fxtBmUm8k",
  "key11": "KrEdnq7JTLxNwNfngQhAYGTopRc4T1YKt2NdX23u9Y7eiecDphjYo76kB1t6kaLJp2kkqxoG7h9uqxb3gn26rV1",
  "key12": "4eCeW3BwKnXekSbg3vsqWdbMDbyWxpfDREeoiLu4uima6NNvXU1fpYc3QNAjHRkUDpxroWy49i95tkedbHkz6hdD",
  "key13": "3Fa3wTrnk56BYiw5bU7ujQmYxuUotMN36nEmmDPPB4NvG569RSuR7xBfPLzJrw2mBDzr9vHumhMLdT4LyrFh84kb",
  "key14": "qbes6xMMZK8A3VSw1TZrzUCVARNqAXjTp5ddsDpRVwqTghQjHBWAv41pQ8bBYHgAHfYSeh6nFteUf3Kqv7qgFED",
  "key15": "5CxAPondWcUSZ9qjWcJpRdTipLd5W4PcxGGKu6hdAMJ8bdskzxidjhi1MP2S9B5n9NcSN5Cn5k5nRLihoAHyv6yG",
  "key16": "4wdUx7ixW9VZw1UVefgvzY6NmurQL2zC8nh6dEth75kMAFLvbjTnP4Nquz1r3Z2GeMUBrTwPUev934BoJiR86uHS",
  "key17": "5BL2wvZXtiaoJuG5oZaykGS97ESmE3qAdFGrt4eFyFXbpho5WjYU81hayqM7ov9fpnVxVnFuqWj3XwozPbPmGob7",
  "key18": "AHKgCBEW3M4mRPMfBiEbxX8W5GGehMKSkKaJqYuEf1QwBCNxTV5tGCszJaiNqX8wLFbgBZdcysQ6kwRxZTk4cvn",
  "key19": "44b9241eAPMCr8iWQwF9m8q7F7vGEJPXHVFbLWRfuKW5xrVz1fPrTkR1ZezzyoJDTGAVjbFgjEMqJ1GGZ7ZAkrQg",
  "key20": "bc53DQ5ei5m2E91LVGEQJLoKmMdVM6W7NJi7U5jLo2BJT1VBdrchB4rfzv1DrNAH3g16dbYKZDnQEeqKKb1Yupz",
  "key21": "36V6erhEcQfqpa3rDhWcyXzZXhcHmgQvb43E2AJ2F9z3R6eExi7yrkmSok7Rj5EqzgRpCHbTozgn9bPeMUDJA6UR",
  "key22": "5aLRuGhn4G6ggLzoR73UWFuvs5RER9brgwY2PtTyj3m7wu7X2tYe7tx8qYYkpTfLsVNdcZzRUB4ybmKNgHPM9gaL",
  "key23": "3HsMSK11Sm7gSBZR6Zf9WNMHMAKSKomehFLKbUnxAc3v3fUC9gRh7nv5Uc8VBmpWPucfdcHwXsmq1knE8gYfxbsW",
  "key24": "3t8J6syx38Nj327md5k1FG893PXbsDbqGCm6vjSUR6ujj7TjmeLy3e4eSMZyr1Hb4bKnFNqGwTBXeS7ktAUy8khu",
  "key25": "3cdvdESGdnSH5wAvZCxDFVUF928EGgBRgPrzjvQyuHVQn59vzmpsay2B9t45ZQLLsCXcpue8j4Dn21rtrw4etkKd",
  "key26": "2pdRRLMYLiATif6kqGvqfzhmsN2DjecF7SpyMvM5Gvo6EZh8ELESCoHXtzeCYEryMFcQxmZD9ns1RpSirwfaG2YD",
  "key27": "sqo8PzHw1BCBEygHfQntdzgkL6fZNu3whBQTTHAVVe3u3SjLFJB6m5cURxZT3Z77HAzAw44PZ8TwMnajFen7dUH",
  "key28": "58m5YvdptMzrKjjXS1cFXsA6xv1pBEGV8PVeSEs1y6d6dktcbTBFgyKqFRaFk8P8DBUghHKCAgy1RxR97XBtPsQX",
  "key29": "3QsaSXe2Bh5rCHtYb61Xz5xwdpfEE8UpbA3mnibhFAGz19V74faXrBNZ6tn58WYg17v2CoCu7jv7uJbSomm5xbJN",
  "key30": "Cp9C72MWL78HxvGhgpUVp2iH7tizimSUzqtj6eXA7rXfYfsFcN19Ki49Apfrg4wHAEyYT6t4HShpERbzkgop5TK",
  "key31": "5hJZs9Dt18EFKNze2asBCB2FgfPJY5MXTLMvkcpym4ye37QN3fNWdhNgLj5umWwxxaHSZmHx1s6eF5m7FCW2UYx9"
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
