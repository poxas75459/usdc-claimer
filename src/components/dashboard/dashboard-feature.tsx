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
    "3BKuC5gqVDvJtyXAizJzmJs1i2jJG1JMax3pjmNW2hY5WripRfPgCrpNV3vF6G9wbwnKypQw4SKTpiymSp5Yj6Ka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "658KQAhSncxoyd9XWogXZQ3RfveBQX1Hzf7QCvvQ3ZTXMXLzGpRa3YcLHUTBZ48HALcNFUdt6ghw9WTVxJt5mMyM",
  "key1": "5zD8hExwaELuGjfj3BVZNTsW4qYCfwY558GZZ2QbR9j7nQc2Kd4WUo6fQwXXcSt5cKPyNUGHMdbKNqSf9DFDSVQE",
  "key2": "2dqKFAwPBDmNNPBu6E1Y8m1NieFxnzPC7eYuFqvjWyT9GtaUeeKgMEWBzAYL7iuei5ZHZxFxhHhH7KXUbJ9D1i7K",
  "key3": "Xpc9Q5EKAPfkFsCce8ohhgYVFWB3QJdazSsUYYbCxywNUT16XCTMvA7jGCZ5Wv6cBrTojniNiGLTtoiYVoWVS8H",
  "key4": "tFpTAPBn6ZgctDMjk4RCSzrRoYTKsKFmrR54rpRRo2X77w3nhnCtSuDzbkZZ2h4VHcjZADseYUAgCLws1v7NYsX",
  "key5": "2TMZ8bHYDw7P9XgpSepbsj9tw5KqcsVhzcEYn6hZyZeM2QzYqXaGazbTfmkXdwpawqSaSxxpPZ4eqVTyXX7ms2vp",
  "key6": "BJitTMJDFdoXRA3Z3mztGXYJ7ZajJWmBBvTKenZzvc7ghKATHotaJ88XEZuhQi62obigBs8sp27F6DAputH9JfE",
  "key7": "4X6xVwjAFTJAr3rU91wHZGgV54nUAp6WcK2eBFwKFBiLVMRJ1hppKXWfg72vH5W2BQmrQAfyyRTwBPfqRCiq2VGa",
  "key8": "sRmTWWz7YVaxf5VNB8gBvshornmBVPBxuQ6uSoDAkif7RcjanRHXy1kkkEq3Y6RGU1hEp2MwuXZVnkZoLB1J8yW",
  "key9": "5hP6rTSf6GddxWbiuj6xMgPxb414iwgduHhz2FRcVGeSXpgHcfasZgdzMMXXLsRyBqJxdVrWwyz6wsrDyCSmgkxS",
  "key10": "2xezDtec6FPBWE2uFAXyRiCpya3vMZiDj2GGtfkd7ELdRCxgu8hpJ1TrmzxzjtUQ4JhBjuvnpaED9hNjpAJV1yYp",
  "key11": "4nhNPrykhQNhxn7nuZxPbNgs11ncFj47qhako67veeNu39K2uLKmQmDFWg5nyxo7BBnbtWi4dBUcXnq7VUA4HT9z",
  "key12": "3E6VZDDQ4dmcf9J2vdCuN7VY2LAvdXm6ucaVtkEKdMvnhZk85cRqwxSwmzSLSAqrFnYKLHkBXz3YRSRAVACaUD36",
  "key13": "ei3xSaCCGUxZvZtbUK1Womew7AYz6jfVKq1iEZZqfJrHjWxGC6UqqP3Yw6eiGSbk89GUZSuRXXAXG5SAk4xxKFz",
  "key14": "5opxhNKsqH2FFAULKtdLNYbpfZAwQcrZhXMnRz3GnZWE9uaZzpoqvhkPWxiimrTbnD3uRZEoc1CwWkJrywMJsu1B",
  "key15": "32zgvQtK4gtffLjheJuFE6DAN5HDHyqCU6JANFniv6mckudXortUJ7QiwUZXkJKGwj94EQb73Ps8WT5kVbnKwDgc",
  "key16": "3AGYM5Rg7hbRpg6xjtba6V2jyTtA7EC8UonqQc9tPfes3FgrmSgsoZW9ZJwF5sKzM1BErfzTkPUSgdRxWo2WEqg4",
  "key17": "3Hwz6tAoppdSPpmvKWE8LMUS3eJ3sGKGWgkBVeiPcWnEZxia95XX5VeGLkmUdFRu2WjtqhtXxxiKFQtvWxyUZLF5",
  "key18": "4dQrxCAQHHJGBXJ7xZVSW7BZnmtkiBKxzzaFLMqh859Tmc7oWwqW5E9vnMbjx5RTzsRUrUduWjxirbXf2Y7H8YHS",
  "key19": "5cYwoTc8NBSuwoZt5NDNJQUuFezhx8DDi8S5xg3H4y39ecfnG2WRc4iH4r3ep2es35EqnR94hnHfjipvZaHFLudg",
  "key20": "37MmLv9KP7dH8naP2xMCytMMJfjtKUtestiMUHSxeYJHHkfMQqLxmFcetsA8P3YEh7SsgyFvMamSCenaMyhaAcEs",
  "key21": "26iBrsLYLCfapSidaJKs1tvHQsnkHyFuj2JjngxWQd8B6WYXTYRkDohZjeZSHStBWw3XhNCzzankqH4ACXSZqYzM",
  "key22": "4PoepivU5xycn7rpY4rPgVHL2xpj5WY6nGaQdPUubnbGe8eeF2JZ1d6ko5UaLdGCdedvA8sM1WVNajZYLomzegQ4",
  "key23": "5c8zxkwkdWWvSDKRKn4U51S6qRJG5mhDTdGNBQniXKpMf7RxBJwEYEKL7WXYEoBAmvMWMqTHekjeygRo1MFET9eT",
  "key24": "3qfZKMA37gCWF12AmymjxgymfcWdpaqFrW9Ls2EbFhiXDsAvo6KzMA7vCBBDA3YzSUEnfgiYsGZFPfvS8Ycz13QG",
  "key25": "5rcc1JjhHJhboxmZgBSyZXxyiQGbqr7E8vNMxHNLgfGru6uYznSK7Qpm3uD5AurhENpGFXy4PHhrsyxpDNCpJyfD",
  "key26": "3dbWH4qds2vEWbaHtk8C6uKiut9ovJU5mpew4La7sDzBakAz4cqDtKLNb4aW1aRxcC189wtwqc5XTD1T6DKxpTqb",
  "key27": "59dbBcBm8y3QLyDioZe9cr8QugS7LC2MGeM7zKbu2Z6t4NvkiqsSr4NVMu9Wf9LTZEy9U96As74HUrjdYr2cNaw6",
  "key28": "4XnspLbdZSkgLBH4x3wyHT7CK6dVkg1oMwG1VtgTekaei2VW9T59HzwczH4nZ1ZdTrwSL4q6zvW4sRf3k4Snm8Rt",
  "key29": "3ZeXsy4BEJrRPuK8tyFExY8AVmsC61qa3AtDxF9bBRohDvn6hN6Sm8KuNCjpedrEJ9K5sYnnR6gyHrHNU1uzC5Wz",
  "key30": "3CmCm5uof2VTRaK9jh7HMw6Qgu6zmnJV9tx1xbBhQgYi5MWSFB7MqfN9ck8PVcZhvGNcXsNfDsaQK3P36sLbdCyG",
  "key31": "3G39Rhmz1xajYe1xufJYfS7tAL7axfetAqXtmTkngRZks6mKwHM9J5Qz9LEKbe141Nb7aV152kwUdhmRfSNVZMkh",
  "key32": "39xwDXpyNzGvnqvTZd4gMJEcdtVpE6Bn9PXULwddk3dDv7Z47Y7bicUE1b6c7tWpJ3rRGGBbezcYqaatJFmfJHbz",
  "key33": "4GJVTaADGCVsyr78BJoiquBxMNmq78H6Lro3vphJ5tLdB3Z9FaQnFzdm6AxWSESDHDPaKikuG8ncP8aw48X6VDTR",
  "key34": "47pw6rpwCCDApFoahLJxZHBtcEtPCH3XKZDn61cdHbVReuJii9ZeQVjUMLXzVSUqgPESUHuu7oYBYXRywosay1f",
  "key35": "ejHYmnhvXN5kJNLZo5L8XR3L4SVmtwsT3SPPDdb5xqNs1tvoYv9VK94ETZEmJrXutUpmSudtB4mT6E878jR1rST",
  "key36": "2UN7S5rHHVkmatLoTYX4PrHEY4i4irHot6vcJFcggD8aCdoBzvSJdNX51bbfMQyvSN3SvqB2r1v6PxFGDZxUMvQm",
  "key37": "5cSmNkmnriEZtbAXTRWAdx13qqZyiNtry41nUeNp7gA7aKxMPLrhdMWYHF7cQZcDiRBs6zcHmSJvUmWKrdVUzCuV",
  "key38": "3zvodBLB1vcdB9ZVRTrNT1rGGosM4jgqf1doahykWaDULWwJ1hHjM9pwDqRreKBZssEL66B3CkFjNrJHBJgbLQ4w",
  "key39": "2m5yijUp6wsXB1edzEoFkJksKCgJ7Vn8QmuNPVwC4p3hwzAKyktkGDcqAi5XRjqethjnc9xsPBXTwBeHZvSLZXs7",
  "key40": "552U4JFE8aWQVU7D7BUCxjn16v358EQmnStPajiFJjfBqHYZAXQ9zsEXrBf8DfaP7wRruQ7J9mE71xZ5hfRpmas8",
  "key41": "2p2xEsqQ5yKdQQS4FyKKdoHRF3gvhbz4HNFP3ZBV7p3ajtXknNnvxSA19FQpyXSp1qb25WKzDMgh2GkUmKwWxMB6",
  "key42": "2fMMeKfj8TNmy5NvjVkPua5ro1JFkm4GZzY7ZsREc3MCEzeKkSFVj51yGypnDrtG4N6P8vzBu4bHdXDcRdqN3JvY",
  "key43": "4NTho84ULFG2LaqvYXzQsPekWevPfSeZYceLXaNqVMvifGGqnCeuxE1dypjqynyTzh37LdPm4yA6yA5LjBWQbeUd"
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
