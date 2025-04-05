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
    "2uqSMso9zHUA4VcYFvpVrEsZjAmCFA6HH6RqFVwgJDduceC1DFKGma19eSgQTYLJpU5tYD9xckNGGh1Zi7DSPwPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fd84BqKehJ89EXimBgEd8TjivHiGiHJfZfVyGDXdAr5dcLFpomJgkiGzUbqFviLKsP1UyrqtJinS4DP3NCR1f48",
  "key1": "47H7XWGZd31WHNM9W3yZj2YDCiszm1S94ALzTDf3Pwm7HRgnmioSDVGPu6biixrXZjXT4JasYjHZfoicBthQkCqJ",
  "key2": "3LvvXGSSYHx94pVTK6tUfFjN7VYt34tZ59JEWjr6yR12AeyinvpTp7BhN3xtFFKBDtEhqj7mSX1A3wPKYMWqo5YP",
  "key3": "2Rx5C9h92bSbLpX7HTk5TQDjTsrYG4gGPGytntweNwoGnoDJ1SyKEWhWcEqtA6tz6U8RQHWbwM8Lyc7CoAcVwf9A",
  "key4": "4w3zDwdYNN2UP9YToHnnX9hkBhcninKXJWY5PmRs9aws2zFLrzG4ETEPGS57tcQhBTREb1oxor5rU2sAFigZBar2",
  "key5": "4LQ1KCTNKTSJpdRy1e2auHYy5XymdCoxajaewfgQa7JmrwqjrzDNxmqr8s3g969YCXiFeLTYywYtdHmogUsoVChF",
  "key6": "4xzUc5RDrQuzwj55tcASr2jGEbrvD5AHxfwBVwsAJo5xHkJ4RS6NGCCWeqMP58HYK7faTGvG2BQzdGHYFZSSL5dG",
  "key7": "57FmzKbq1jLZskbm9Uqpbq1uN7u2HFMqPCzZK5C3B672YYTZyeChvpxhTZ8s4ydPiPBLeiaDHqNvEYncnkX9j3Pz",
  "key8": "2co5amM17t5a6vATp9rU79h2SYDr2HURRSSUYJ6Yns3cxfb3UpsPmjqTsNL48D8BH8yzTbCZVAvBrFeN8AdQAtCG",
  "key9": "4PoZVKgRxjD6kCfPSsetbGG9y1GjbqhvvqnuVT8e1uCWFkYK9kPp67z5jgciHSLtWQyJQeoVXkoogiksHTmaVhsX",
  "key10": "2yhAuPNoSo1uPb6g8MVuxu7SZw2d4D5WjkYq8dtMdLgveE8VKmShT8BAaKPdgxoUbWvUXRnbGopYDTKTL6wREP8o",
  "key11": "3jfWJyNEeRhcJjfLsbXeb5RqcG6Ac4iYDaUxTKU7vYAYkkQpd6EEKK4H5gTZGk2E1WPjynVzjhJDaTc1BiV2gZqu",
  "key12": "4Hu3mbWtqgfoYSJNQjwdYVSRf6A8CanWcnwjvaaDBvGqhQxSkALUUj4up3tLtEx9rTtzgvbM5wgFK2pRY6NVM1oX",
  "key13": "2GwnSAYtXUxZ5a6zQAxecXAKN6afmcsedt11jewzJnFXC41XtrkXvSnWMQHj3aLLuNdQ9YFgwXVT7tQF1UpyBNtz",
  "key14": "49YyE7odTKJ25vqATzMPRE12hFfYDb9fMLB3PwNGBWP2y7DtSEtc5VVZ1adfeyxMzoBmuP3tqM9T2r4m6mva68YG",
  "key15": "2WfyHHqMWxMKZ9rvivKp65N7L2L2VUQZYbQn7WKFNEhsZt4gQC7YgvnRUrMY7xdXnV7FevxmX6PgbGJ8WkVMaT9T",
  "key16": "5ZLkM5MQukGoj2fjhkVD7g1eiPsqFMwAS6Fg6kis6UEp59wR47fypK46PLG8yQPQihh4A4GEpJ84raP3sRgeGvXc",
  "key17": "4Z9kauXaHj24HEWAB6P5i2TpvM8xQJbL7QjBo27U5MdTB7RbihXTLS9pchjLRwWGhEwCXSYinJjDH72SHZubdgMn",
  "key18": "2hSawDadDcXWRF4KAKpvEz98HXbeFMvacX5Dsoue9gAp7FveEpgHyZ2jpoueW8oSKNMek7R81tJhSL64gN5wvvG2",
  "key19": "3BozA7TCZMSqLhkN6t1iB7RL8DeVyLGfkZzqNPRkSJE5zgvJbmDu1movstFDgYzxCa6yZPTqEwJWXC8ar7TedSGH",
  "key20": "2r5E5Rc3hYZKJCJk1c3vZ4uJTyZ1pdPmr44BfWBrXnuC4RMr9BPd1Y2ZwdA45TnyoN2c7nCPTMqHPMfzxbAN5YuL",
  "key21": "27fRgonADive9MzFjwwonXk9hoMYBYH4nAdkwCJSYKxoQ9m2gWXyTSqzvEqqMYzBHuJjkYpG3GCFKpSJ3B4A8eoA",
  "key22": "4UK5FGgmgmPZtp4qAzw95xVkSgjoQ8fxKRdpvaV3aG5yA2tgbnX77tUXA81TXRqXezKXpTxPf4BVtVdeLCCZHisk",
  "key23": "4Z2vrwprUPzqte4fqEtvrriF15tCYvyj87M17FGSjCbAKo3KmiW1HM4j3TNmbR2RPVY6ibpwAoDLSBzQrYp81pjS",
  "key24": "64hgYnx6ugeyEqrusGvCHTKWSvpd5hTKD5UnZ5RFdgD1g5V3zWmiYAZy5D7KbA1ym4wPwQaKS5etRwThAmnfvGC6",
  "key25": "4yjTnXxkEQn7dt1q3nC4ytW9kNqM6wnyMJYxSKDfwLHp9tRDWK5AAvKtJrRw3VAb4ZM3CWLzCdqZj7HDzPNKtYF9",
  "key26": "pDhuJJxBb2LWRpGbjiQKyBp2iuoLaxjzEUzS7xQhm3MrQtb4ruU3SbZmfWpWKngnMasYJDd7e4fanU7QhfDEUWU",
  "key27": "2L7uaVe7Y9WBduW2E4s93zZ6VNeAPYvNKgTo2atHwX9h6dF7SNFJ4FNZyVvbmRBaNGi4FZjmxnouAsj6zt3qRuMB",
  "key28": "CJBPNimjGithDuXMzvqVeGuFBnoKLiKwKbmztfgPqCWzR5CEmK2BXxfBXDkr7RamhQ61H8mTKQPPxfn2ZoMGmWx",
  "key29": "5pqX82TzdFJU1KshHu1WscBU3ouBXXXLcH4o2MNvu9xAmuPP9Gyig8Tu9CpSpTRnu2jSjnkmEkCM8dZms2r7sxTf",
  "key30": "5h5S2nMcohe8oahPbdg1v2TWFHBovJsHKGyMgPS1HqmGPB7LjhyDZrqmpTk7WKBpikMBNXhKfheEy6WZ1KGAQ3Ws",
  "key31": "3tn37Rff7m6ndVsqqyRsW1h5Cns2TFARiVGLDoNZeSXgXzwH9HZYfoZNvxnLAFNzfA5HwYp7ar7teBaPk2iumMCu",
  "key32": "2prTWoLR6s2UtHWXaHXVt5fXj7UguZqPe2ywECmcoF5nH3smN4p68sxCSk2TrWVWgo7ZtE5XjLNhLwLde3KGscrB",
  "key33": "KBwiUWkDMAkafszpeSJCDbxB6ZGPCmW7vtwcXh5cx39w1saaZxLnE9EymsaWquLZtPxM7isytSCp8Ktg7USe4jJ",
  "key34": "3EWNH1sw9Xqoa2wK51XjAG3pFJTpV4PYjQdf2gnkWZGwWu3XeoobZPcBvJafWPQghkPXHF77UJcLeh7EkqL7Jbh6",
  "key35": "5Ya1KQpp4ofwBBV7HnDDzwWBQR4STfe8z8SYbofM1X3DF69YHjDcCzPBKkeCigZ8d8nZJSS7ryMcbyTtLWSV53f9",
  "key36": "vpHSXGGzyL6DkuFXGgKX2HttLaLbnARwSMXtMMifD6rm3AUf3CqiGdDdcibCdXaUqyr44wzviCYmJoVjPoU8FeP",
  "key37": "58W9tadp4L5koujGJ1Bxu8eQGeTDYYeAFw8HtPwhXRUykfqjDh634UkJYShoLohiU6MBdPd1g3uLPqgC6bBUdMnV",
  "key38": "2TXeF3bNU1QoSKzAauJKmYfoCg5rqvrPC6DB89FmEwXJma9rynRuMvfys2huvZk14Cp22gk9yKZ7SqB2FhBAbF7c",
  "key39": "3evw1dcUe4q5WcZLKnymD7fC5JT6GP1z45aqtEGevEShMqntJXtkJAAahvNE7Z4paiMTCGFpU9xSPTMzuqwebE52",
  "key40": "2r2tqo7qBw84AkaoSxwZ7GLjdk5LRbG272x9aAuJLhQPgFEkdiXfBMEKBCbGbxrK55TFQqbyebXAfGKpn7SvHpu3"
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
