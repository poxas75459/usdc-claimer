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
    "3QethAQiEeFZxto8XwvBRtRAcFNXHJvgBPR4rC4pEZpHh3hCiPfMtK2fKCDyZSZ1s25wtvLG374oSY2GBrDeosPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mmrTe872i7CUA5CDsHdqfa9hejPvjjn5fyUZxRPK6WNhjXrDqj6EoT2HdgDYpdryonXuzeGbKPUqjYQYQmZohLu",
  "key1": "45RJxRp8bi7iKHmtNBX1LAzjjtjybXn3cfo5CYxTCJiihadjLP5LXDNHHD8k4KH33rMsS6rw6zQ2DjjvsfnEz79A",
  "key2": "27ijJjbzz41ukaAkXBVQgkzdb6NapTuWDgoFWBdpwsvdRJwKrGw2ES411KSiBLANAxhFCm9ogHxu6TyVc8txnoeF",
  "key3": "3KeFqWX8b9aEUSdmALErk7ax36jTiU5ck1LCrXid3YziR8BY24ssmPQWZj7V3Nf3ct3MGRrQXbDpNcMSRuWzyggw",
  "key4": "Nhe2MX8oniTajFxcGit6jEFfuJbRx97bMfgVSEdyRNtAaifrriy2PCQJZbTP3TSPFURqtkinxoL4Vjg8goAimVb",
  "key5": "4rheYcMa41v81pBTqJcxSVYai9u9JbkvoWZx1Pi6pG564MVqQG9S6eXhq9bUZoqm66AxwwLfeH7uJkEGTPeb9xFK",
  "key6": "54Hiyh4gysLBQZAP1ytM5qGnV9zSWLvmmhYqkmEsmFWcggHriXwm35DkhpoYX5DQTQxFwtW3cJgiWXAYUWaMnU2U",
  "key7": "3uRYajQKySk8YcT5pDfy5Yy8Fh4mSAQNUUXfKuEkqUhNP59son1wnDCx8aASWg87d6qzB7idvcJtdZG3UD8R6Aex",
  "key8": "wMfFoYbpvPi6hngy8sGQEtnxfrZCna2g5CCDBauue7kjuN5PuhkGasPyyLvoRDsUV5wE1dNt528tkEVgLPoaBk9",
  "key9": "3gNzLaWuoTonHbHnDs8NUHSjGo1shoc29WJxZ4HRMB76swtRvxob2dWth7ewuusEad2udbnmBMUi5Nk5hRwF4e6A",
  "key10": "2Qx7PYAdNkM1SLFLXVEkWbQAioRXF9vpzU4dWS25Mm7yHxvVeJxAGyDC1a8VboZMDTPxWKXUbnTEpRw27vfUbrhv",
  "key11": "62oWan5vcR33JeEPEC4HMxuAcyep18sBbr7Ni5fw78FJ9HJskvfu7s5zC1efueL9uQDpwGAzjiJkF9JATS82txDf",
  "key12": "7goZyahWVrKnWSPuc8o1d7AgTfaE1abqVWkFF443crhAzSo8Z2jmVccRWkxeezyXPT76PwsCjDQCwARUWQ39w5z",
  "key13": "3akHZnXhXCJyQ6zA1egBfN7FeHEfZaGTXGfc7BYbU7YFWTSaXSkLEbmrFHVbJZuDVFmSpAtkxvC9CcMyxBjLXmgQ",
  "key14": "u8cH9TzBaxqqXDaev4ya2AybdRNCyTjcp9z6QAvjd66FW3YEPjdUbwe2kX5S9UmYGUCsmfRCGfRTKuDjkym23gv",
  "key15": "VwjYW4JkTADuRGUzpTwQ7ZWHRHNRNiT6fRaBrAXmvEmJ9Ch2ehyyuH9a59UvbFxat9ajj78feGABBhreTK1J3xY",
  "key16": "m4LprpuYoy2njksQTNUwDQbZPEpJoh7d6guwJKYzRtom1o8UAZFUQ788Az9fuqU2r28ABDsoaq6HpX8vthL2X3H",
  "key17": "2qNbdRAdCP1ZjToKsUJ8e7su9q1zTdTNoZ3efCtssC9F8qZtMuypEeBtSUhFmYds1BHWxrzy6xWZCzTWcHkMCDYv",
  "key18": "4Uq8hi21g8ZNeXAKup38McesuRHUgjX2j1qV63PyRSn7rWwnNap9vSDzurzT6HhvBLSNeRZb4vXWFZzsKVm88D8n",
  "key19": "5Gg2LQYwJ97otZy3KoRtTAVPs5PAzjgrANrmmU2shaAGHHwXDPru6dkZjVAxw2KtyVT3bNw5VXgcJe7pwGYuVUzd",
  "key20": "2APiHoUs4oosUnfsMUdDquS1nk4EutXme54Dy2m7Ns27uLsgwEX6EqUBFcFEMhBrXSeUvxS87EeYbmeQyxPnMKZZ",
  "key21": "515hZBXdV9NHYyHUncX5dvhozhrv8jyqGZhjvdRv1hVwas5kfZKewyZurafnMm5iuYMGvJdeFN1yp6eZv9XfLt8k",
  "key22": "5hRvbM7yxCqHJsAtLMoMGWPE73nAKnddkRygnJAEztrxMGdfcbTcE3LNQxYrCjZquYR5peFXgWutW7PMNGBWhgrG",
  "key23": "2zFjqtEt2pAskgiTof7mQN7T11xmMZEHuCu12FPyEbpmFH1BCyvbMB2BTcJCTRHb86fhiwxJWaJhjGdDtqsDYJ9z",
  "key24": "2mpWvABf6LgdAYdqUVPBoYKV8eHmoNFd9mhTURAwMacZV1UikbjwbEEyLcLxuc3558GUFBRJ9eXDc3uDH3vndvQF",
  "key25": "5Zu7iWSXKj7uUHz97mAvyn4L3NWtByK5DXN8ET5jzwAV4LX9RWnaHQd8xV4Y4YrYPazyYP18ufFTSvmwAEwVavfG",
  "key26": "4pkbQowcUg9nv1CuV9pG28ZuZGeHrpFcVteXwaR4bNy3qRUDxirGH2di17tVZdcp6AmwRAFLNAvh8PZJWfh5NtTW",
  "key27": "2sS3ia3ZXA4AuqBBitERUQVRBafLuZZrGxbDwUYMEkJScXkGvM8da4J56LyGZRQzrQaaY2HmhxgFWeMFwuGgvAAS",
  "key28": "4YKQN8vzW44z4XpbFraAnywX2QcTwWR6cpDkH7MsPRiZWgVFzX3fDbgRS8JDGQnVkSmrwAYEth5PRhqyi4TWpTVe",
  "key29": "5wJkkqSg9cdwbovSqPVjZnjEfyaw2zcd1mZccU39gfeu7MLJYTkLicASPSEdZmFeRrpCDMZkSfxgf14WdxuQoTdT",
  "key30": "yhToayFZzXrLCeoBoTPCCZCABtfRxuRjE7VXtFYuvPJgnM5EmgF3vxmD19oHW9nZxNWcgjMShatPnYkmhZ8M1SX",
  "key31": "FdLV58DqFfHFNJBFcWPY8Jte5YhktqVCLByDH3rnbf3ifkHsdNp4h4xoGFgrnQrNTspap46RqEqqyqQ7tr87t8R",
  "key32": "624H3xqAYG3Tk92eZJLgB6ERZ91S4raJJzAb7Xq6TRY5aYrWz668YDsVVCc8x4hJq4gvUFbeRR7DcuUzrFJMJ4PV",
  "key33": "3AtCNB8UzkAhiUA2URsWQuRjXM3rE89wnq9c3H2357T2oBhXdk3B5TXkYJKcwEWCQuQ587PeYutFY6u9GRUbifn1",
  "key34": "5EZNCu6i91bhYe5mGdrZiHwKLfU2Q2F5KRACLBpVwKWTgYEvXAdcWf4hSwA59LCRXjbFuacAix2abbkJgV9LFX2K",
  "key35": "3Tr9L3sGdzXVCydDnv9e6cYZtmrDaEcawLEx9bJdzKR3a998QtcMUj738YUXKQDKX84qGt2UKT2pmgoruytuwGQM",
  "key36": "4VyP8bbPxnyrp7cxK2WKn59cGNg3TPifWDLnPLs4H9m7tw6cDh1q5fJnbFDPfA9GSuCXwMqYzYLqLvwtxA2LN8cr",
  "key37": "2ERCzyXJCvG4116K5B8h6ygTBoYSGzuaNKvGDYDEamA4M2cYWfQCvEsCAEKSvLuwG2XYFNosm7udGwuvUFhFo5FL"
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
