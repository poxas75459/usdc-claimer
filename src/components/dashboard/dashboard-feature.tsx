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
    "5TKkMcQRzaTGhcWUbEVpCx43AmZZzFzXVWn4qLJ7Y6NXeTN11cjrvgiKn9RHdndCurxRct8DF2FQAKtjcCu468Kx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WQdhnkfakAGZe4qAtc8K2zSeG8GJ6bL9q5wbJ2jeMDSkyyBwFLgjGBKE7oWGGQAcrYaExcThfxMDEP82i7taFee",
  "key1": "C4mN6BvJ1SjGRCFH3Yr1ZdWYSqcVGAwy3eXPQoUzyApKXPFfnh6hhJ4wjfyDHCnrgL8LQPMNkFqsVnscSs34m5Z",
  "key2": "5Yi5JecGxfvqqyM21FqfecrRiyi41QG8dLYRkiWDEDDrMDYXGpPUD2gXqvVXxkVzbigNpY1PJHDCeyVq7Kg75BBh",
  "key3": "adxTVb3n4qx8ktd4khm4JacT5ug7XE3U444Zq3FNws4PDMtwGrNVWGdE5d5VP9Fcxn2c4TtkQ2iZbPxJc91ARre",
  "key4": "2Vw9gXJM5HJjxgZnnnK9tEuCUs8eFgdyNLKGJQjDiBzNeWVYLECLxMJF4v6UZrd9kPRLiCMVjrfHZxKquSKjmEoT",
  "key5": "2tBnvKE4PUmvA3rRJerN3badv2itrB6NB6PCZ3bZD7kpCy7HiyyHTFHwUrALoxvRmcDjDt96suT3EEn3mKcuvfke",
  "key6": "5iTnA2XrFNhw9kbSo9qFEWvAHCqo1QWYLRs7bR4kfVfAmdU9vk1Mh4sjMDXcfTYA9NaK1x41UbtaiFHT2YcoZeed",
  "key7": "CRLiDx9w2UeaVJocaDdma4nF9BGyM7FJWoTZgNQgTjHtuY2iFFFdwC8SKEf8fjEiYNmWBkqAU14hb5Yh4rn3Nsm",
  "key8": "36fwz6pQUkBToB5a6hxgSiCZwvVfmmHEn5ADryn97Gk8pPNFDidvrV2SfbR8S2deMEvHKnGZNfBcVbrd8MQ1pPS7",
  "key9": "63MbZJxc61cwkfDNSDZnWwo2wtEqXjr1718AoowRqq1Lq4niQK3jBTHBu58EWrZYPC9ppfY1f5Q9jzLPtMXsbZan",
  "key10": "5GVzAc7yENTScLbUD1mVL7uiY16ctgQb8uxX3WiHuYRAQWd4ZaAGUsv31mZNuEnv5wmPCN15XVj7GFV9PZb7fdQV",
  "key11": "5DnKdeVQR16EPKUuaQp5HiYgnPHdHJ1Fb1yQ5Wex4yrrtMvTn6jhRLzwtv2fqEPXRzYgyWrcw3g23Hu85RSBT83j",
  "key12": "GvzhJ5rQ1vFXVYvZ7Nctesb7uo7oEeoYtbqTUHuuGXQ3EyG1HQfcESWdWYKbnE97cjntpfzhKWQRBQFPoACz9WA",
  "key13": "58d5PqmKhRatvugFvVZVK29kEsDLyJnNZHaMXTTBq3gTBehnzwUr6qYkin9PFuYTjipgoEt3JD5jnu5kSQJYXYer",
  "key14": "4BLBCkEuoXgPuYwnMy4mvPToLR15xC5Ag2VVo9gE7uwW2LcqDWKRrNQHfGxbx2umUWacZcZUTwMQXV8UmPFgnnNm",
  "key15": "2UxQn4TLJ5VVwjA3dNZ6KZjbT46ckxATQwWVjFGcZ7SnAX9z64iEnfZ8bvGNpvyrRZVZHRF1UbPVWyZHXH2P5qsE",
  "key16": "2robbP5risfpnVZofzyKeN9KAvQX5CWswxSe3838xtPcCtixkZW3FgPYKJ6HCYkC1iZssYLh5hsUtFcjLRb3RnyH",
  "key17": "5usmfTHCwQBRvHW9aCHmJPZzTN1sSwSE147AQqFt7TrpHdAAvHaUiicwFRDMN4ER3uHD1nBLvvLKbP8auUcsZEUu",
  "key18": "5jxtJ1bBZkjMStkvr6wscz2qC8ojKyL8PWoXmLWNpiDJuGD2soWxowjxfGqGq9EUcnbU2wnS9FLyqpr49qVUGkpE",
  "key19": "53xSJ779YQG1c3jZ2E4xKmdXq2JLQwJS7YHZcG6VCiBT2toAEodN1pdPJfFpenVVhuV4jxVpuA5MRJCjpn5VSWzi",
  "key20": "hTkSjNVVFmngV5Ez7bvyCEf8VS9C38EjJWFPZhSRoaDyPMVuKbRUN1eNyADFX5AcxQcJZafg9vFhgu2hc6Twqa2",
  "key21": "eK2t3GcZ7N74ujG8vcr3BF6Q7efQmUnFuu8cjiRZoftFYauBiQa93JG6XREAVdKf4whzNYGovFsUJSZX3EYv1KD",
  "key22": "4H5xAgCu1A9dBAGLq6XaeCpfVB1p7tKTWaA4itrHKsA3XirFuhb3j4hJ3JjZwKG6C94rGY6WktcUAfEVTSvbr6co",
  "key23": "3JsyyrkJjFPLLSMBUQEVkMppYEPUGqBf1kJwie6R6roubbUvarJKHhZghyBnRqQjVxMpCsrPXvWGQcyfnnoe2oCw",
  "key24": "5RPxxwF56sF5iYzrvpQ8bS9feiRrZq68WhkUJtQqPWYR4sJ9ZRjwYrqLAkMzkX9TizxwP5ugBAowcgHj5SGVvTX4",
  "key25": "3sT7meZq4whk5HEFhiwhE33zUgiLgWDctb5t9djUUfDunUdsTD61qCbNLgqNg64BQVRYU9yL5RfEVSMzcdMvAYup",
  "key26": "9U7dvYieoTJYTymH8nGWrKyYuS51tyLjBQZHe5gDThBRovNvGzWtAkyPoU2kjecVCgQPG3LKyiuiiLAt45MrSFf",
  "key27": "wqQLTCQwKeAq5F5QYk6ti4aHEieg7Pw6KyKRoPVfiWnpAfafDgkpxjdsNsERjmEBYD3FET4xVFc8vot2GwV9F9m",
  "key28": "4KMbYG5fNHVDxveT4fSVoVv7GLDgL5o8fX3JWHX9hnS6mpTmP2ub1LuYEc3MXLmtVtuXNzWfGQd7D46znbrghirJ",
  "key29": "5fbmexcj4yYSoGN1BDJe6fptveyhwG5giUcF6WoZru1pReTHhVc3VNnJ7QbRERtMT7ha2cSaU7tdWktstaAixrcS",
  "key30": "ZSiSrKEr3yK2YxiRYjUpXJe8bRxwRQAYWr6y5QFgYMd9isuWUMHvGQCBDwsHqYcSMsYNs7NzDfFQoLDngJFtVan",
  "key31": "6p7pvb2k4wBqbax5mmSQ1kLfKvmsbZGoMreCxcfaofKsvXvZYMVZp85mfgCuArWxFKYNo6e6fW5EMtTxaNQwj2Z"
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
