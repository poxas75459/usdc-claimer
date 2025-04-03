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
    "3HPszVc6bmP52HqygbNHBW9gJMGDBifzYDKgsr395Mez9WFezqmGyC7nopwx7DeKL2WZVLURiyjLayDRpooL9LCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EJXSVLqghg3U4d7NrFcSQavzc9bqZX1keCQdgr3QmwYTVAnbZVV7HWDQe1CcA9kPjSzFCiR4kkxkQepNWw6gv6v",
  "key1": "3aLxnDNHjnosgLoWCbjjeHK7NbhW26NdvTNU3jM8tKYqRwf5Mgy8E1zUcUdnoBL5wwtBs6uJJvq568amovcrBc5V",
  "key2": "3ojrzPjNRP6VZ6EYR53g21H75CJugGutGfe6Y4NpzE8DG1rj831yBqtuhyx6LJU36H1o4wytEiyMuJxJoVWciKrC",
  "key3": "YzT5ZNQBvXQLGtafg3Zher8bVuWFhWBQWewZCA3kx4mPMKj3nHhc4q723zCFmdMEYrnEYGSnxZDsCi3s8MQ74RS",
  "key4": "4SjZrSYw64y8aBKJshJUv6pKc5zazoTMKpFLZETF5bn8SsWfC8hu1raALpskBxYi84L4n57NhFm1d6JAk3nK4yqi",
  "key5": "qmELi9JxgSYBcZxLNgX29WbTqpzUQidxXB1AudxvztHRsa4tzp7SAsKQ4D8hF8EffBQXwC4izfqZceRsKysvzJM",
  "key6": "534SysqiZdha5qxJNrmiPaeyGVCt3TgbADxDGbHZm8mPz1Xa3Fqjn2jYbS965p7hvurhVKXjj62BZgZesRJ5t3br",
  "key7": "3Z6nJC2g5Njm2vfMKbeQWftGjcYdn1t1ZZEJS9ectdqF8qVHNLB32EZZmhZbkov6LdBohYoLT5PB19vRZ9PnrRq4",
  "key8": "4HWEM12APMppd88BM3ZQD87EMVH6FK212gbNZrkgFUBA79241apwFTm5X96RbdNhUtNXoDxAG1dMY8Tgm4TzXNGN",
  "key9": "5gczb3GwgcabY15tSfxSRppnvqWCuRJe6BLQqPde3bbSeZEgWUv2LC8AFJ2S6t3Njc8crAYSrruAsibawFbV5KWs",
  "key10": "5RFXvudd1aYFocb3vq7J2vytaZzyasCWVMkQX3h3p8b7iNpzAthAa8qtfYjTAeKQcRGRAsjWkKS5fyJtBHjPMy83",
  "key11": "3tWNspBqQmaCCeVFPtCbsbyBCKRnJHbCR2QKwn2pGfFWEHyRQf8vGBt9NjyGLU9NHj77iV1QHJQRksQLiwffT3JW",
  "key12": "49TKY9pinmLkqmDx19JTPS7mEYjpshu9CUQ9pU8eTE6kRwDr4bqTvpVXrrxSYvvn5RBxg6WEApxFi64dZ8KPj4wd",
  "key13": "5Z5dKECfuHHhATwSx4vkAweyJJCJoSxky49HBM5GRY7wfWvb7NZmRqmyFzMCfoqTKnFZsxYNY4aepeFJW7wwFD2S",
  "key14": "xCjj1TiM2rqrZzmtUuxgrN39L8dEJKAAH8qQ4LLZFCAhADE5am8GPpDFmcatp73wqDeEPKY1howg1hrLtSwSYa3",
  "key15": "8SzXwae68Ayb95Ld59APQYb9eFvfTNoims273AXpcZudcLfXzmDDKbEeG4oM8NJGPWjqpcVHqNBZQTbsmsxN4ud",
  "key16": "5DXG6i4pxBNdXYZDKrwGXPKJwYCakAZZJRdSnivD93ZxfTdy169xbPcGRasr2jd2MSBvbUxnvtTQoDqQp2PK4ZyJ",
  "key17": "4B9BVqaRYjopmXnbUMRHRJ6sLwvyWHLWy9dU5PpN2rC8PY558NZJDotYCF3hvQyoe7nvJNKvYcpXEoQCmSgYg6XC",
  "key18": "4Ksd1Vvbj1AX6EKdTGwHWakhvMDHsuqXYLVEsFAryZz8U8PKWTzQrRPaQJJ7cM515SRpnM4S3u69QAdduDCM4mrN",
  "key19": "2vyQYMK5Qdnyxc4Eaz5TyZb2q394fcy1DTDdDDKUkuyaRta2EBkYnGSrTNKiRQgq98vXzqCrqLBJdAA6MLuggFNJ",
  "key20": "5PphQbo7rGtuNXbQjRjYrXTFRy9fXhtbuLb5pCwb5XDKtCwGyFPbReMRB2hmWZchrsYkcBeCkXmLAVfL41HakAyp",
  "key21": "3ih4CKFB5Gx8i9pnKdx5jyhKyVDxUcXyHT4nXAPm4F7gvkP3dtUxXrZVHNU3EaZVkuZg6ySgVXp9XvXLFYP5AFKj",
  "key22": "2ZFUv1Witki9QbLt4Z7z7jRWvSMs95cN1wuusiAFeaptLAkELKsyCy3xDZ8yTLV31vm171KafNGtm2B9GTZTHDYm",
  "key23": "5mCKJJbghSD7CCMT7cVcWE6YiWM2RYaaFNH1G1xTCqgbysL7hZKC2cDTmZLX7k8WwCFinEpLpinDUtjj7U2A7GWh",
  "key24": "3LmimRynuQUuTYwcTfXYFWbgGHVwc594znUdr7ZtrhvoKJSC3iL2yXTDaQFF9kQPkbGc2pto8uhbP9dmyfqypYUz",
  "key25": "4P6ed6crTHxvrwbfLEacVJFFGeUH7EeLn5XP1sKqL4Pc52uPd9vYSRx9S1GmAAFT22f11ixYkTHCvFoCAgxjceks",
  "key26": "5pozmHWJ37JCYgi6RpcGbGzFbSoHjr2jL8DkXkjLe8efPiYQ97foh9qjNJyXj9wq7dudaGepouGUG8Wfw7G6UACi",
  "key27": "49nBaSodcPnDr91Hi4TEypLnwcceRxdP8HNns5F5dq8A6ipyvgDSh3HNsp3kNq1EwJDmvaChnv3xQ74g763EXstY",
  "key28": "ZHzBrVAKHiSUDXVAhFrxU9dLd8v3n8ucggedL9EvxKuhoEwFi471joQQuJvcAnTRszJpWtrzTThQ9sPS7w8nNJ8",
  "key29": "2oiTnMoWQ6bJ8DGTsUSvFC1WYW4CXiq1Sryzd8ETQzzALvTer72yngSZTUMeeWAdczsTdY1tM2LyV1ZFv5U71pHp",
  "key30": "3SXNvncAVyHuwjrvJC8vsajdqAAwKYGpFhjVoPLAocv8enmPoMsYxwv7Fm1nqbsggF43PGLWjZinzpfd4Yns4qP3",
  "key31": "FDcVyCkFPc2SdhUxn5YSq9fzzMy4H6swbw6uV97L3TnRXkUXwoFzXGM5zMCNdmGAURwyNW25wfFetF9sEcdWa24",
  "key32": "2JsaZpGwULhYU6Mid7Fcz4ofxEz1YsXMvLG1BGnCrna5kDfXD37gb1s32LDa1RnDEDWRb2KaKeUudfoHwXK36GPu",
  "key33": "2XZjzghPXQrCqudhFETPxEZhiYgbxfSCwL7fQMcxSvDfprPj5tQ8m5zkDPLkMKojpqC1tBWuxEVUAEBTLoMXEHh6",
  "key34": "3Wu9wBTwYQb9bFHi7HbfwM54Ghr9nKKqGgVbZv4JDTd7JsN2bh9JE39mAQZBSgRonrN5p2YVaQZq5Y4tNMDjwSz6",
  "key35": "3aKEQL62QBbiRpuosw679fqhcQjVA3SwoWyLQRS9uTBW2k6Hdapp8ugaoNPpekugPY89M84A5XZxQERu4sYWs7Ks",
  "key36": "46vTUqgWUzkMVHE1GwvievNmhgNhSv1rPLVnQ4JSs8MYwbUUuDz4HhLeKTGFoLRW7MLD3gnAAvbNjzEGTT4jFQBB",
  "key37": "5Y4NmkJ5DJe7iPWZpPaz5HoRLEdk9FBfufLopERXoPuajtMRFmqr9a61WPtRXv7UuhKhHWcmrvAoKfoM35zxs1ZQ",
  "key38": "3wdRPhcejbKMdyLrTU2jvmXHqe53TuF7gAxHZgy8tzqyX4n1rb4y57QJWYbDhfzkPSpfrVvBTkzvcNoeA4vKb1Mw",
  "key39": "5NM3DcGcYBNP8xikSsiTGJ6HEenfQiaWWzdT49VV6uRnMqMSZvkcBHGHdhdpQzm9Jiujk73ic9ShJ45fsShSeTf4"
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
