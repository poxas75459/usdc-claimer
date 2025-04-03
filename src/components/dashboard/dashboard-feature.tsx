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
    "28H78UK2tXHRT4KEizxeP5LCTgFzc4tj8axq3Zya1Ti659QbDoRZGC5caiUJvkYCed6g3Gjo76WAB2D1JvwD9LJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FCw2FVEJzxQC75YNykm66EeafY9qnWoDx3ffXXg56HchSmVuMML5L9Cz9mxbFpGyWn57WPB6gqWvDPwaiXQ1mBe",
  "key1": "4au3qYPh7HA9uqsGgZXbGqxYppvsFYjoz7oXUCj9wWz1uS2YgB5D4T9QW4p9RD7j9irqeTgfUDwShtwQaujzxN5y",
  "key2": "uJSRYnwhYmjh6AJm8V3oByvv6dAcfZkuq6iZ8BtR7ebeKniEU17UPYnsnYAjMGjXhPfEC1dtmFg5m6W8irg7Aat",
  "key3": "3vcRU7fsw3xU6cMMQYt9fnZ8TyXMo3LFSiFCNSdQQ53aZyZp1utmKV4aEVZxBcYRyd8xEpHw5HEX5YnN5tnqztWu",
  "key4": "4YQ3wzWxxFevLQWMJPrSccKtWhVT4GgcBSVAG3oGQnZV1nxxuqCwuiL3w1TjJWaZxtCU3wYChYbMjZDpyExoWE3m",
  "key5": "5gyrCZe1aGHJcNs87x13ii1D63wNeSip9sVo1V2xLHW5aBQMPHjZvpADVUrHfP5CZ3Y1CseSek2XH5ggfnsNsiHV",
  "key6": "4mjzpk9VFDtxMXEg8WpBzBXv2rWttztPeqkgRZQHteCL1WC17feZBEhNiqk3YmkFTd489UAxpx9D2Z9HVQ1Hxd2Y",
  "key7": "5xKh2tFsjiHHGpMgUoB3W6J2Qacgo4UmqxunhvUgNKjSY8hymxxNthkRRUfujoSkjhBeMweqsJGg6JS1jQSHgmoi",
  "key8": "5D4jjtWbLemELcUaHay2XdaU1hi2Np7ketHCy2Hjt4oe5ExK1aYHNETkVVhYWoen9SMGuWqp4hfnezeRHR68NsWa",
  "key9": "649CDv2Pir6Pv5249Mv52KxaykDDCUtD2RDNM2TrFDMcUSX5AqrQ8cioB13fVWhvf24AtYkrnzVG4u45XK1fsN7e",
  "key10": "5SFBfyWmQwjXMYyGZ1Znu6XUQ41WCGKYMRuGFJ4RCb4ZT83raNh1FFu4gZRYyoj3AnYz1VPg5eznfsygNAteT7Zh",
  "key11": "5v2aZRkRZkoSBr4tTY6jQbT3etHVDprz5urgNSsbPgLWXavZQVxxuwxJ4QaEjv53DqDFbYh65Pmr6NH9zQSyax8Z",
  "key12": "4Ah9oWQQpE6N8HruFXMBt1Xu3ddDh3rkGjVPvgBPHK6Z8kAGTvAgK5MwLVahZVztajUnha4VQxHy6hCrSoYJn4sp",
  "key13": "w3uUwAm89iSNaoQGkznKaPdjSzL9pFj8RWNz59P7nJf6dTx2chV3FmdWAp8j1Hdj9ZxeD7Js86xvkxggbw31ASF",
  "key14": "3eRZnK4xB6zmnUK3DiAV3BZphiZ8SvdGqkdWRusE4fEZwg5azNdh78AYzWUV11GJxPkQVsr1p9rWuei7RW6aWuhf",
  "key15": "5sCKUV7DBERmGAqxmhsTPPehybJq7hyiDsHXBYhFRsdQbf3E9CLGQiVpMd5UPXNqXLDRw8W4g57TfHvStaEbUWEu",
  "key16": "5xQghrGg41TNw62ZKDYQSCq7bzRNjbyXKSA4MSsXz2qUCyFWVtic6Sa47BM9S6VwUT5wdU55SteRr4SxVqpYseQY",
  "key17": "5Mba8MUeQy1bzcauFbWddNKo4QnMPzExWHH6Ks8w4CTXhERvB6izEUyoxxwi9HRrgAsbdjKQhjaRWDEqPDYtnGb6",
  "key18": "AQ2xDQN9w13R8cdnF1rjjQWEs8hu5Aw6GjAwHf7niT6GkP1Jw6dE9N1GvndXtCrfu8UZDasc2T6iVHoPMXorRch",
  "key19": "4deS8PavzW2ShvdoSvLr5nRocWfQuFY6RVwCwxJrN6KqDVjNWTaJZhwohxybBeiN7J9K3WDF1qqH8cPStBhkQ1Zo",
  "key20": "5X5k5LJQipGyjtwSRH9rXs6wzepk84smQ9SKqj7YVzymfmXUKhe7dBfMfunybbgojZWjXsCEshShXtkXtZ3RURqB",
  "key21": "3R6qGw1guSoyPyh7bCFkuSKjs499TG5pH2zRhXjR3LfDy7hRkcT17d5oXzJMBT6fr65JJ5EcjCLT2rzPC3Efr4kG",
  "key22": "2KmjWumFJ19zSoUBYzGndB6z4VtyRKX5v6G7YgmV6pp2f3HkLwfM4ePsEVaSY5zDsmHmWK5fL4UZCRsb8eV7mTmp",
  "key23": "2AzQJ79xzwWgBhHCtHan1UicNRam5dW9FgzfXMp5VuWhRmFVu4QLRdRxv7fFYMPovP9Gzsuc1n2UymXEPJuHoDRN",
  "key24": "FfJFQA9EfHSvRW4zKbbhGhx29J2tm9gX2YtXreAUpbkxDSkWATkmRTzoUJbzoYHhfSFXswvAWjRaaP5QQ7hAMCF",
  "key25": "4qBXmdbWbhW6EypYzX6HXkYCTdZn8hVs4vd7E3S6NJBT4vGBTMfE9Grmoy78xQ2mbaBC9bwjexfAqqunMAv6FNqu",
  "key26": "3M9gvRn38xYH5eBskWFgqCjuHPnxAQj57Z9qKjgytMdbFRGmXH5pHZDTw5nbNet7cer4yx9qcs5RdwvVRf2zq42i",
  "key27": "4ydXWUvr81q5SJ7pKoegcHbvYhiTnHNd5Nqoy1XHKd6n4ksrT8YvAcDAEF4hmwio9MRmNApSCp1pdkscWnoKWiwx",
  "key28": "2VaBsGfXwPhCKJa2QhP5k1fX27VWBgNtUw9da7EH9hjCNLugfLfCFwDgHLdDrB5WbDsQLEvaRg1WfcGVb45pUT46",
  "key29": "49eitVs7JmbC44AwP2MW4Zk6unfTUMLN1ArMWhpQvBTj3o1VaNhRB6oJAtJk6hspLq67K9ind9bDhdyKypPVYdrr",
  "key30": "5CwrKrG3Sxmtf4dCUy3SMkwJyyH5Gbnt129qGG4A6KYDMZbsdqzfj8H2kaCB7RpWjfJTNZyCfKuPiefHwoj9YxR5",
  "key31": "5kE2TaKnHATn7EvHhoCHQ7qoBCxEkDZKt6SyvQ83gZcVQFqrVazQ7q3ifqJm3aUHPUFJ5tu9u4ZMadNSJ8zAQfRT"
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
