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
    "pucPXho9c2c7QZEyUo2DAaKRkeQ8pTrbcdPAy3B5dXdpASzYEewoY1LR5cDqn9HeMpSGGC6sMuWQ6xgA5Zfy6o8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rLEhqTQWahhQmHbzRWbKLscEF4UvxbzG5uK1on4EHBLChiVAikPa7BridvTNCk5XNDNHzZTtKqbkVAmN3RMs4HU",
  "key1": "3yE6eAzHvYVB9mP58aKJNjisLdH9fQFS6cJP98k5WgW1Na9u3Vt6x1KTCfNu1AzKGnXJj7oeK6RNTBqgYAJ7MGDP",
  "key2": "2V5CGCmjmDAZFXPJMQzBu1T46GhN3y2ou4pFQHBSJUJFfocXJXqRa15stEJQrX4nHpmipxu3YJ3RzEmuCUMwj3x9",
  "key3": "5eYH6LZpVsvNWyPwY1U8BGhuiSGqZXM5kKDwp4FLQsxZqWRnMtGT7wv2tFJXvM3TMxjZmUUnrPsfyjm1Ua7yhSEd",
  "key4": "4eK1tdxd1Khri22g8jRofFxzKk5EryWZAoeby8S4C5XcR51uoop1xFCqwP9Sea6asapGrnHZst1wtjxjyEmyamDr",
  "key5": "57jLcvffVyhqmPozDc855uyiHSwpK1ZuZn3wtpTBb1N19i55zT3Pk6B9bhEnb16RpaqGbPPBqZuNs5C199qiqo4K",
  "key6": "3b2rbvzXsJ5d6wcs3jYZrpvAtwoEG6aPsz1cXpGHaWs6UBQwsyRFWqNihizq8an1YKcHUjydEC2CDxAEMvch3An2",
  "key7": "5QpCScMgFpdP9JAK8Mwb9VqzFhxVcwaJRi77nLgcMGv7QTWiRJSQpTHwtjxCdyPDMrahDcGLwVLPCQjdYcXQJRQK",
  "key8": "5yKWMEty2qPBJTbaMCPoQVkMmJrqLiQur3ySZq6XcqezYNqrPXB9EdN1bsQ9iqiMU8iYiirsTHTmCdHLHtksSHq9",
  "key9": "4Kt8C17BaB9YR2dZtmE7GyJvpLLBQTjH7NzLKWWCrAfNs9dYqR62x2eusF1M57VLsvUuQxaLe4DMKaKFnRRKrDoq",
  "key10": "3Wj1ogc1abPBHomu49cPcSmfT5cmMCPvgbMok9PNnh1g4KdqhwMtdvxKpMqQkogb3cxt8yENiRmva4J1tdvAvBZT",
  "key11": "2EXj3dQb7szU1y8s6sndDhWUdu6QWyYivdnYFxnabnJMTrsKvs2ui1BTwWgaeiGcc2zwYHweLHG4FYHvPTBP4sh6",
  "key12": "3izhDLGSdXKosyUK1hMpmis1boDGVcZubNuwkq8daGozZr4opAUMgY1eX4yYMAcNJTA9SRojdysMTAHJP3xe5CDk",
  "key13": "5ckW7s8yy7EzCJudQ5NViZXvAfoTqJUtcfsNzP9wHFKBUa5xBdTbP6FxeNmxoJ5QYNMS4yzsPgTQutgm2g7K5gDM",
  "key14": "4vqA1UYvAJCGPwM4pBpj3wJm8E3f6ob54pfnvmAbm49pfyd1xqGrChiV4zKFWap6nEwJo2ZtXo4LqE22YauRcqbs",
  "key15": "5gk8z5AEH66uQnabtA8mmn4BzwjLQhc8GKo2khrnwbHqS14DmNrECcVhnAsbwFqUmc7mCX37H3ZfzLkbkhZUHnDe",
  "key16": "4REx2UKrwVhcvJWQV1NpU6HdAXGtSfiBByo2qZFv7cKkQNakuEu6r2x4eupfJo1KLkeovGKA5x4XTCggezH2EUYQ",
  "key17": "hEAZwVobfvUeLV7yUtfZgf6WFSWHYRM7uhvGAZFiPcZfavfZujaVFCfKmYMZD2tb5k9CZ7rmD8YayvEbnEAqsDk",
  "key18": "4uzN38EwQ4Us7xaWtCpiMdrqq6c5S6ryBTtFkSAmDSBZgcXfra9BaijEz3xcBmzQqtygvaaCt7N3sioJkRE9q8sE",
  "key19": "3bQRXZJTvjTMMHs4DKbXJUSyMaaB1rdUALq6naaimiihngyiRQfyX6haibV7DEgabEvMYnA2w59YE72rWvP3P4Qh",
  "key20": "5u9jZX6abjhoYqXtgm27WAGfELzvJXhCbwSw62srCxH5p8ehSLsCcEwb1n8QwzZRPNRbXGfJcjaoVPKW92rY9b1Z",
  "key21": "3db3qSiioVmYnUcBYBobueMp6rFo3goo5zrXhxKMDVt3cqCgsGyuVZ1xH8XNbfXCp72k3TenfAwN2A1WeCqjgPy7",
  "key22": "D7xRQ9WSdbxWugrzjXoGb9bDQuNHabfzXVfi5JDk9MDqEZAPw1sUkct2M5a5K4Lqh2ijiTN9QmxioaiUwfuVFtf",
  "key23": "3mCxrqteB8MHazbvjXdKvoH5npES26b9Wn9FbUMueSLTcPTuKAphtmtuqYquNMMNWD7FvDoVcDhdz74VhiVvxQRk",
  "key24": "3jyiRaoapk4TbPULQgaKCsv27iqW1wtLu6BLfXVDKsknVfBp9wYXKZcLRdVQZwJSYKtGoFPdZEppYicrv6bJZq94",
  "key25": "2Q4SXofEjeproeS86EduTHBhQEPprq8E7f2knB21xgiKP1jUjGPvhDUkwhiUDFee5oN9SceBr6XBeQ6G5XwyeuKH",
  "key26": "qzVHin83oX3uvwBbqcoMegC2pcGz9tHEWVeNxYWRKLrp7rQS8wsLCzBRMgW8N53Cz5WevTXEBsarPmXJZWoNduV",
  "key27": "2NEvYz2xt8LUcRT3HixRiV4CVsgdkT3GS1uxpoigK3nqYXehQ9AvZ1KtfRu5V3eoTQ1rdugSnk4zp7bwWAJsW2UT",
  "key28": "2G223zJMV5922uSsfS44jUY2EcPBgJtgs92XWvDASMKyA8gYHjKKVJvfVFZKHVKvwZmJfbUSMfFRcgFX1qgoixFm",
  "key29": "61NMwi26qf3v4gBvwN4QBG14vGiP5sbnDYyvoiRbAFpiVJhwnyoAJGn3H7eAPSUBNMzAoZM2KKGoPvc9SyoEXrib",
  "key30": "57SyQ4XA8kpQFURFLhYb72S8NhN4pFhgKC2uRiKFQBDFuAqYaB1dxSUUufGQ48uCCzdJPoXexhoDPwdjJX64BUNk",
  "key31": "4xeQK4VBvcYA1vXGLCvuFK74rLSkS4Svep7cKvzqrQx6gb85oiFvbowBbE82f7bauxudic4LbHCmgoBccchmXog5"
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
