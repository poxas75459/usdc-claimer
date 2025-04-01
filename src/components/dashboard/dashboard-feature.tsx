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
    "3YxwED2uwATJdwCatixttkWkZVK2Cipdmj6SzJi3ivZuqTkjUEWuCu2gY5vK8MpEmi4EPLu4rBNYaPq1chx3zmGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iNVEVTNrSognjdQq7DSD6Bkf5NyDP3AjffdWTLvNHvVZ9SyqybB33nw9oaZRwVAJmRaq65vYA77t8fJNR2ShGbE",
  "key1": "2i5UWeeKvMGAXxUz8T1w5W1T9uLKGTzCPwAP5UjT3TmcdYB8ZgLtt1eSm4i36CK1MeZDQ4s3HeL8vZkPQXgA98Az",
  "key2": "yf3h9vkQ7f4hWvFHNwDsGN25pinkxWaZcyMMfax7gt4695oUJRCaK5C3QcUhgutoC3VMVowK7yPmAfAjWVgS7cL",
  "key3": "3Y7EaGgF17fXBY2S44yA1mS9UL3id2qGr2fG9SgPCc5sW2K3Bsk5CiA8nQiygS54Sic1uiXmLZhXv7spdn6HBSwa",
  "key4": "4BcWZYEhyMFcQLoDDmvFUxtAwBN5qJ8z1rqvdG3gWYmDxoZLvFVvAspB7nR9181K4LbZAr4hVAUQ2DhMpoqKmDVy",
  "key5": "5dA8aP6Nk6rJBSoKYFmUdgPnQXZ1bviNT7svfgszXSFgNZQTrbymFBtGas9eesdUkm6kpUouzSj8P2JcLEdSWr8J",
  "key6": "51gubGuYrxUATqjRwaAbaSF1ZXs9z1sTuwMbf3FpjaVQ83vL1JtHFA6Pdjm58z4jX3E5fjV9HiqHUkw77d5yYEja",
  "key7": "4BH4pKjdNsJcDJ4p1f9D9yGsxcdWsokDZiCFB7tCY3Ed4fSsG2PXxmA2AJ2XRnv2R5qBwHGGcsEqq16rywQTqv1Z",
  "key8": "2UULN6zG1qnTFt4kSMXXbCT5EuJ5hT4Xh75eEmdaWVAtFZyUkQweDN219zsTtKaWWieb3qoxQMNHVDVsyttcHKwM",
  "key9": "5JxdwtS66PkSpHioNvcGpCPVtrbaxjse63Ruyc8Le8oiJHYt7m7Qh5hWjm4UHZ8WFvJy12y4hQVL5VdTv7qqmV9v",
  "key10": "3mctevVY5WvJG2FcLkVKXLqHDPwsiU9nzmJiRJuFukUxoaSvVF67Pi3886aWAuUDuFr7ViEGwK19mQGrmckHuhf4",
  "key11": "4N1MqWXGmdCJipt69Fyu7s1ZJPFT4cQHT4QcpSFmqgTjNCcGUpPJjJ2iyhSaFZRa8DF4Kp8DqJMVHSJeqLsYFimL",
  "key12": "2A7sAF3AukBXEugcxY2iVEhiK6tPnVpbgKhoaEFPrGf2uwyaiZxDfkntXeovtpRnKVCoTysrVCRqsS8JuK2N8Pt4",
  "key13": "ws55VKSwRGKBNv5PadMA3Z8pHZzgBpAq9RA1nwoh85aeWTg7NHjzRnG8BqqjrEEmKx9aH5bMdmdKknw8QCV5ZGe",
  "key14": "2GmWPBmsUcm6L68sf3zKf6vbGvec8SJ45EDpZpxdavthmbzi8KY4NH5gpCBL4pWjPvSuNdMgNPcAC2HpULzRPr81",
  "key15": "4KUHmmz4Q6VffiZaXJ8Ej2uTrDPd5jYUtUzezZ4tUNTY6H562uddeBG6sLCWUvLPBN1mG96zjH1AgWNRsu6n6p9n",
  "key16": "4bx1QfB4JzX8f5BN2a2uhCswXuPUUZVr6HwFRkpHfe1LAAyCUQHBiKNmCZywwqCdKrn2R2UUTSePc7TPn6EVPm49",
  "key17": "UjoYqPdWNW51SFR9GiAMr3xNYAygyBareZV7SQuFTgp1eCy4Xgku2idSQBPbhtaWG5d2DBwfWFL1QwL8soXeVV9",
  "key18": "7bY3oAZU3aZgeqAKW7YCjgCeYPrF8dnMn3mtSizDtQb6f2V3iY3uCaPLjJ7i8xRR2GgMfqjpw9VFB3n52BjBZGP",
  "key19": "4yin7Y9hezYQfvAx7pTZ5BRjTQjgBzqUmS5YQNv73G5V5RDjKLyHBbw6GbmWiiP2NBnMEr9eiF3kUphFSWymESZD",
  "key20": "35fKNLdZtZGqqvyvGcumrGNs8Wkw58kC3ZVwnsGUgpiZAa9s57AEiuzYFrNLDJ1593scK5Zs944DZZwax2H3MFHj",
  "key21": "3XYg9fPJQEJ4SGsXG6hxV7BJnLTfiW3y7iqGK3ESKtYbVGaNfaK8HCvm3zRG4iA17HRHP4MMbukiJ3nezguRDV51",
  "key22": "2D53CjypzeX6DMRXR1UeXUi4EAM7xyzbFi9dRkPReyFH52e6JA36Ao2dH2xX3jDMrW5m89PU9StyQARB1qBum7Tb",
  "key23": "ToRxaXSQdkYt15bvuQM8vwJLgyKuVDjWAZ9qoKAZ9oo8psFL7fWF1EtU5cy2E6MAvua4gokFwRMdqzeBEyQLDKg",
  "key24": "29mtbM3XAxQkqjYt8tsGBUcpBhQJSXeEBMEuPihMpWY93drrfuDJzTCbreqWuFcG1ns9YqZo1eBYgddJdRSJretq",
  "key25": "kTaKpRxeKNj4Yf5sau9X1RYK45wktVHnf7QiNYRy3jLxq6gBsAMVLL7mHR83UbLTNEn32FRU5CfbZNCFtyys4H8",
  "key26": "5nGG5WTzQ4T7JqjK4BbDH4APcabPHqn1dAjQi8Jrgf51E9r2c131VKcBop88dAkxj2tRMbTL3MFrqgcmcXurYpsC",
  "key27": "PTBcAav36JuhTVqMMtz1NBymmWtqGxM8Gorcj1XNfVVKf573diUEQgEYL1CfYvqGeMTN7QkMRGJTFa3tvQ92Noy",
  "key28": "5eCWFFoq1Jxe3oJb9bnTKm5fcxEDutaudVuBiAbi6PTim5FGsp9H3k6Voh8Pc9hMN6vkM38JHHHSPiahvi8u37n3",
  "key29": "2ehFVY71SgLZ7zFvhnUixFg5GPeYdHDeCZXJ6C2w2qgoGw3uN7qDncict8X8iP4beMZ1SZSn9ARQDE7h69HhuKBB",
  "key30": "3v6RQuXnCUfu5sDiy7hMJpnFAnQZpg8NVriB4abiy68eKjZ5KGiJJC3iP86Xsx5UgWcZfmpnJ95HqeYWbHdMoWxN",
  "key31": "4rtrFVBUc6oLgSgmd8a726G725xdz6ChJVrumodBSE24ty8fjEhukNeYRoZtSpmhwavFhoXDe5ghP3M1x1TRqXAU",
  "key32": "3fSxgEkb1LWxP7LG7Lah5aVhNyt1s37WtjkrrJKfFomrssuBNHMVW9Moi3DwgSBX5AQKGRsMtHjtekKcHUN2DHfK",
  "key33": "4j6jS2exoxAyyY54q3gEv9dZoeTa4iGqyYRvtKNo9rfCV7rBaLz1Ut5UfRvUQdBHdRooYP8AmfWnHHVkGatuGfpo",
  "key34": "4dEWiSM9ypsAS6QRLsGjGRXzZvqjGuZrphgoBcZA2Z9YpLSMPnid21rqSm9wd3vukKwijJgCwN9XPBSrZ8auqqAy",
  "key35": "2HXuZs7QnGSA1UxbRoZKNAikCP88ECS7y96XkMBkEGmShETKiTYFhhDkv7o39uxpJj6E6bx3KWWFsLQcVhMSEpJa"
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
