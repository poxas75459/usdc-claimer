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
    "5UnnAw88NCaHVy2kbSNSi7CMfvsMAe4A7f6mJdxaGpd44fRTc8MU5dZANRzMLTwwByqjmq2dz7xva2XZTKZmYmtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24oQ7RtdrUxwyadQARaWBhDFUtfxMPU8chLUppF7WM6ppahWNc3Zp8P3hxBYeUnFRwuxaNbGwEx4yrc4VhztZVSC",
  "key1": "4VfXydvhU9pweT7ja2vKWTYuaG2eKusk3ssUN6giWYAXE95QT9NZKhXwwsm5kCKqDMp2ZebYC8jGDyFzzPd1cpiE",
  "key2": "46KUZ9VDJsqHNnwpMFuNVxFeNCTRVoynTKxX9xnxKPHCAtn5uD4g8Pma84Do9RyMvXoropdfP1Zh5kYqe2yLDsCb",
  "key3": "p9sbAVsUw4JEytmz29pqJ93ao2SWaQBs9YuhMP5cAi8Ws9nA5StNYu7QRxTAUJK5UWs732cqjJVud3giDxrVyKf",
  "key4": "3Z2xp8aMk96X7u2giN8B4DavE2ET1nYbvNCbNdRk66CXgNNjwPgd3GheCqLsZevLZ2Ud1PbQsRk6QvVSksnyZrKM",
  "key5": "57kn3WfHdB33zyuRtMAHKw6L7Vo85BxweLCZzNCaaLrKokf1dq4V6RU7WVRhUW1G2DxX4MqBhtUs5pXq5n7ZC5WA",
  "key6": "615MCL4M3p4BD5oeZMsZ4GX25qn8i3sYuRHCTLjy9NBbHCnyqciwFjk4P3hf33pgCuq53ySqYfa5bftpZXCknSLG",
  "key7": "DECpBdK3uXTPbe8nzRXcCMa3Ln5FnsNCg7QApBcRTsVgWo7nthBQqUVKyxonp5513aJHvpuRuH4Zi5oQzDQDPcp",
  "key8": "4TawtRFCqnGTawd9DEWUx5B6VLZSEXhTRJL43esxYydvPebrLZkvKnkbtmX8rY7DSHTj5ufJUvYY58gQkpThNDBN",
  "key9": "2gAKbHbskoEUiPnTUFcjqa1rcCzPyBaTm3XWW25cCfCVTtx2jHWATgoS8TZG2PZaNEbqDoRzWfjuXa2DFwjKpEKK",
  "key10": "4AMNiRbyaUtZGZGBWBz4uMQRD4L457fwwKJH8PtCkKSG3J9nJ8C6BUUoKYnNLBwAmNT2ZayHuXdYgb3Y1jNKH1E2",
  "key11": "3LLZ6SHrDvcgiByhhGm3TQEie9F4KoRQcw9izMzfq27h1dxdoBtfcLF8NxPrCaZjnJ1MnowAHUy9A2C73iYtJXjc",
  "key12": "2xx9RBcxNHQDFXGr3mR6XxPHq3EmqBNJMBPv8zNCr9JFA8syLFYHVjBaxRZ9RJnWUrVAe9rFqz299KMebqqH83Au",
  "key13": "5a5GcYMZmqMNZ4iqjHW17QnuaVYRY9msEu89nP7NU87ZuQanA3Ag4kZvTmLnPC5ziLw5EDTia4iVYgg9VUZGFPTP",
  "key14": "23edSkeMoMatJcQNbhrZpmo5zuZeTDGHxBJJykSGs1y9tPSQ7rzwrFzih1Tg3MgR9bBr92Du74hfyrycCtgTZFJb",
  "key15": "DZpmNFdmVf56Pj5kcdNZwVnWS7zmoumiCotFxwHYqVJfd32mrzbyXhehd2dAEJqPhsK5fJJ5GpfG1teNaQuS9cT",
  "key16": "oW82DfNxg42yqfhYYkJtvNZ4TApfMG4NzVFgg1B931XejKwoRtQ17SwaVEMUc9rcoV7kAYitF8aLByGRByGU4vo",
  "key17": "1qtaYd8URFaXMsPcJxkxguuxmfiMzPGNg77Awm8ThNbAer8jqYkkKqynfrCqzu3aB2rmKAZ3Q4shuz1tE4TZ13Z",
  "key18": "4vnrmMo15FPx6PcQb7Gb54vQmSf5anMLKDFD9kMPbcXmQxaeMHkztGcG14U4whcbtmrMB8nYVSDCVEEZBCWGQQPk",
  "key19": "2NazKdErhfkJyoWLEk3gKUtNVBGSkHYf4syrjL4EeqDCfNbhu4uxLmUK3ioz368uehN9ei2bsw8F1nq3UNVUSvCp",
  "key20": "4kFB1ANH3mL3MUUNCBUaPtMnfeKvXfE5Hokp8r7SS8UmP1GSKQnoqJdtWrzZXGZkoNoYDUzuKc9imUMsiRbeTzfp",
  "key21": "33LiwNkhXVg4CSot6vJy8J8HdroaVV13WKZ9iibnABiVcchamz2N1mXqNSvVj1wNmt616DhshbCKWNSLhMiQzBr6",
  "key22": "pzkqJTa5AfXZdh2BthNdpX1yAY8Q8Lgc1HDRgpkDTqhejgH1onPKHNXgHo6rwZVjivCm6whuvjGkRn2wbJ2wj2i",
  "key23": "K3zb2eGvNVWTu7PWKcifwrfS67ZKF74NmKNH6gy5u88JsACVp21Hum7xFLyHtHB7PzM8Tgc88gJ2qnDzKu5BZ6x",
  "key24": "3ZsegZU7J79f8zYhkGAyn1jhRmd5UoQvnqVdXbrdtNW922MyQDEXL7uMBSXdSe6NqAbaMScwwe5vQVB9K714UWcd",
  "key25": "2bYr87TmWDXy6aMxFGEmRyU7AxCdajjMikyyXbB6q76dgiYT3spddPRHpfpWwmZqAfkiam7SujvKP3CDzBYdYyua",
  "key26": "55DgcMpFLnhhz2bM1zLcnim25iijjUnJUAwjnTcx1m72hrva5GcCjmA4WwiFfDt2ger3aydJT4HZ8x3RJDrUD5Gk",
  "key27": "2Vuc32QSpM6dr55TbdbnJq4Mos9ayrYrCHhirz825vi8rsR4Nyr5YY4jDeYZfX6fTAixjgompA9brVY3qDCXLBYU",
  "key28": "3MaqRoERzABz9VkiHi6mB9euLEgtAXHR7FD3nrfYTjYM9P13CMYkX3GdhGotbBwmcFV8iGX1z1jRJDvUrdrZvPdj",
  "key29": "3u5VscvMhS8zZMzFBRYgZTnHh55wyQcQZe1rGvcrwnVBtTFzP8AK3Mn8C5xoA29vgfEHw9Uamcwxfa8QjTzz67mE",
  "key30": "2ZYoXadKxuxSjATCSh3A6vyKx3db9KsWHyb2pjkAMCNLHwwykaSzPAu7qNeKm8wAJyrcqqWCfAGbH3YX6tXrMQD5",
  "key31": "4HU59doa7kFLKPsgcYxpYaXkMg6JZ2Ct6YmezdvQiFvSoB81sxeJWptnxQ9xUsxSGLMYHubVPZgJ3rkHMAyBfLky",
  "key32": "2Lc8BRJa1poX1gHS24scTXothordZsg6uVsrpyqL49jt1tzyzGLp3SRSX33J5RZ7wGowDMf7GJ5zBB2WXLWhyWKM",
  "key33": "oRAkUdY86QR3sQdHym32Q4J11DgeNaqMH1N6c9XfbCFTHYKibawoaP2ZvemRjmrDpaMvPERQ198hNqAzkF6oJsN",
  "key34": "2FzVJZgFUVrUi36BPok8ZTCv2shewubd9QxRt1dTeizg6k5U9jKH6fB4xw4BoRzZQvAbtthceiMMGL2tg7XyFLLC"
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
